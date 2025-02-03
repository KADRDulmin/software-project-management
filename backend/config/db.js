const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        // Get MongoDB URI from environment variables
        const mongoURI = process.env.MONGODB_URI;
        console.log(`MongoDB Connected: ${conn.connection.host}`);

        // Validate MongoDB URI
        if (!mongoURI) {
            throw new Error('MongoDB URI is not defined in environment variables');
        }

        // Connect to MongoDB
        const conn = await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;