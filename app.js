// Load environment variables from .env file
require('dotenv').config();

// Import required modules
const express = require("express");
const app = express();
const Port = process.env.PORT || 8000; // Set port to the value of the environment variable PORT or 8000 if not set
const cors = require('cors');

// Import user routes
const getAllProblemsRoute = require("./routes/userRoutes/getAllProblemsRoute");
const getUserRoute = require("./routes/userRoutes/getUserRoute");
const signupRoute = require("./routes/userRoutes/signupRoute");
const loginRoute = require("./routes/userRoutes/loginRoute");

// Import admin routes
const addProblemRoute = require("./routes/adminRoutes/addProblemRoute");
const getProblemRoute = require("./routes/adminRoutes/getProblemRoute");

// Allow cross-origin requests from http://localhost:3000 with specific headers and methods
app.use(cors({
    origin: 'http://localhost:3000',
    methods: '*',
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Connect to database
require('./db/conn');

// Parse request bodies as JSON
app.use(express.json());
// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: false }));

// Use user routes
app.use("/api/", getUserRoute);
app.use("/api/", signupRoute);
app.use("/api/", loginRoute);
app.use("/api/", getAllProblemsRoute)

// Use admin routes
app.use("/admin/", addProblemRoute);
app.use("/admin/", getProblemRoute);

// Start server and listen to specified port
app.listen(Port, () => console.log(`Listening to Port ${Port}`));
