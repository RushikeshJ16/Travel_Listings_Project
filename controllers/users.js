const User = require("../models/user")

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
}

module.exports.signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body.user;
        if (!username || !email || !password) {
            throw new Error("All fields are required.");
        }
        
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "User Registered. Welcome to Wanderlust!");
            res.redirect("/listings");
        });
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
}

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You have logged out!");
        res.redirect("/listings");
    });
}

