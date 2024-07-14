const express = require("express")
const router = express.Router({mergeParams: true}) //to merge parent route param with child route
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js")  
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js"); 
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js")

const reviewController = require("../controllers/reviews.js")
const review = require("../models/reviews.js")

// Reviews
// Post Review Route
router.post("/", isLoggedIn, validateReview, wrapAsync (reviewController.createReview))

// Delete Review Route
// $pull
// The $pull operator removes from an existing array all instances of a value or values that match a
// specified condition.


router.delete("/:reviewId",isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview))

module.exports = router