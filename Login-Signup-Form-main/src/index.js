const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const User = require("./mongo"); // Adjust the path as necessary
const bcrypt = require("bcrypt");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const templatePath = path.join(__dirname, '../templates');
const publicPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.set('views', templatePath);
app.use(express.static(publicPath));

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/', (req, res) => {
    res.render('login');
});

// Handle Signup
app.post('/signup', async (req, res) => {
    const { username, fullName, phone, password, confirmPassword } = req.body;

    // Validate passwords match
    if (password !== confirmPassword) {
        return res.status(400).send("Passwords do not match");
    }

    try {
        // Check if username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).send("Username already exists. Please choose another.");
        }

        // Check if phone number already exists
        const existingPhoneUser = await User.findOne({ phoneNumber: phone });
        if (existingPhoneUser) {
            return res.status(400).send("Phone number already in use. Please choose another.");
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({
            username,
            fullName,
            phoneNumber: phone,
            passwordHash
        });

        await newUser.save();
        res.status(201).render("home", { naming: fullName });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

app.listen(port, () => {
    console.log('port connected');
});
