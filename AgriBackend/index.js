const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Login Credentials
const email = "Arulpriya@agriverse.com";
const password = "Farmer@123";

// Login API
app.post("/login", function (req, res) {

    const userEmail = req.body.email;
    const userPassword = req.body.password;

    if (userEmail === email && userPassword === password) {

        res.status(200).send(true);

    } else {

        res.status(200).send(false);

    }

});

// Default Route
app.get("/", function (req, res) {

    res.send("🌿 AgriVerse Backend Server Running...");

});

// Start Server
app.listen(5002, function () {

    console.log("✅ Server started successfully on Port 5002");

});