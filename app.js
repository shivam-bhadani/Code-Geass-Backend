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
const getProblemRoute = require("./routes/userRoutes/getProblemRoute");
const runCodeRoute = require("./routes/userRoutes/runCodeRoute");
const checkProblemRoute = require("./routes/userRoutes/checkProblemRoute");
const leaderBoardRoute = require("./routes/userRoutes/leaderBoardRoute");

// Import admin routes
const addProblemRoute = require("./routes/adminRoutes/addProblemRoute");
const editProblemRoute = require("./routes/adminRoutes/editProblemRoute");

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
app.use("/api/", getAllProblemsRoute);
app.use("/api/", getProblemRoute);
app.use("/api/", runCodeRoute);
app.use("/api/", checkProblemRoute);
app.use("/api/", leaderBoardRoute);

// Use admin routes
app.use("/admin/", addProblemRoute);
app.use("/admin/", editProblemRoute);

// Start server and listen to specified port
app.listen(Port, () => console.log(`Listening to Port ${Port}`));
