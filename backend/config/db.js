const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        console.log('Checking MONGO_URI status:', uri ? 'DEFINED' : 'UNDEFINED');
        if (!uri) {
            console.error('ERROR: MONGO_URI is not defined in environment variables!');
            process.exit(1);
        }
        // Log a masked version for debugging
        console.log(`Attempting to connect to MongoDB...`);
        
        const conn = await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`DATABASE CONNECTION ERROR: ${error.message}`);
        // Throw error instead of exiting process
        throw error;
    }
};

module.exports = connectDB;
