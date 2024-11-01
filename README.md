# Travel_Listings_Project

This repository contains the code for a Travel Listings Website, developed using a modern web stack to create a dynamic and responsive platform for exploring travel destinations. Users can browse, add, edit, and manage travel listings through this application.

## Technologies Used
MongoDB Atlas: Cloud-based NoSQL database for managing travel listing data.

mongoose: ODM library for MongoDB, providing data models and schema management.

Express.js: Web framework for Node.js, used to handle routing and RESTful API requests.

Node.js: Backend runtime environment for executing server-side JavaScript.

EJS (Embedded JavaScript): Templating engine to dynamically generate HTML pages.

Bootstrap: CSS framework for responsive design and frontend styling.

## Features
Travel Listings: Browse a list of destinations with relevant details.

CRUD Operations: Add, update, and delete travel listings.

Responsive Design: Optimized for desktop and mobile users.

Templating with EJS: Dynamically generated HTML content.

Cloud Configuration: Cloud-based configuration for database connectivity.

## Installation (on terminal)
#### 1.Clone the repository:

git clone https://github.com/your-username/travel-listings-website.git
cd travel-listings-website

#### 2.Install dependencies:
npm install

#### 3.Set up MongoDB Atlas:

Set up a MongoDB Atlas account and create a cluster.
Update the .env file with your MongoDB connection string:

MONGODB_URI=your_mongodb_atlas_connection_string

#### 4.Run the Application:
npm start

The application runs on http://localhost:3000 by default.

### Usage
Homepage: Lists all available travel destinations.

Add Listing: Users can add new destinations with descriptions and images.

Edit/Delete Listings: Options to modify or remove listings.

