const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Disable buffering so errors happen immediately
mongoose.set('bufferCommands', false);

// Load env vars
dotenv.config();

// Connect to database
const startServer = async () => {
    try {
        await connectDB();
        console.log('Database synchronization complete.');
    } catch (err) {
        console.error('Initial database connection failed:', err);
    }
};

startServer();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Route files
app.use(async (req, res, next) => {
    if (mongoose.connection.readyState !== 1) {
        try {
            await connectDB();
            next();
        } catch (err) {
            res.status(503).json({ 
                message: 'Database connection failed. Please check Atlas IP whitelist and credentials.',
                error: err.message 
            });
        }
    } else {
        next();
    }
});

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/resumes', require('./routes/resumeRoutes'));
app.use('/api/templates', require('./routes/templateRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the ResumeCraft API' });
});

// Error Handler Middleware
app.use((err, req, res, next) => {
    console.error('SERVER ERROR:', err);
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    });
}

module.exports = app;
