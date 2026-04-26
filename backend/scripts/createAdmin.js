const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');

const path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') });

const createAdmin = async () => {
    try {
        console.log('Connecting to:', process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);

        let admin = await User.findOne({ email: 'admin@resumecraft.com' });
        
        if (admin) {
            console.log('Admin already exists, updating password...');
            admin.password = 'adminpassword123';
            admin.role = 'admin';
            admin.status = 'approved';
            await admin.save();
        } else {
            admin = await User.create({
                name: 'System Admin',
                email: 'admin@resumecraft.com',
                password: 'adminpassword123',
                role: 'admin',
                status: 'approved'
            });
            console.log('Admin created successfully');
        }

        console.log('Credentials:');
        console.log('Email: admin@resumecraft.com');
        console.log('Password: adminpassword123');
        process.exit();
    } catch (error) {
        console.error('Error creating admin:', error);
        process.exit(1);
    }
};

createAdmin();
