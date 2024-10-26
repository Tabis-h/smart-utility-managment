const mongoose = require("mongoose");

// Set strictQuery to false to avoid deprecation warning
mongoose.set('strictQuery', false);

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/smartUtilitySystem", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connected');
})
.catch((error) => {
    console.log('MongoDB connection failed:', error);
});

// Define User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true // Ensure usernames are unique
    },
    fullName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true // Ensure phone numbers are unique
    },
    passwordHash: {
        type: String,
        required: true
    }
});

// Create User Model
const User = mongoose.model('User', userSchema);

// Export User model
module.exports = User;
