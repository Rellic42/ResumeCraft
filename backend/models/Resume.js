const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: [true, 'Please add a resume title'],
        default: 'Untitled Resume'
    },
    templateId: {
        type: String,
        default: 'modern-tech'
    },
    personalInfo: {
        fullName: { type: String, default: '' },
        email: { type: String, default: '' },
        phone: { type: String, default: '' },
        location: { type: String, default: '' },
        summary: { type: String, default: '' }
    },
    education: [{
        degree: String,
        school: String,
        startYear: String,
        endYear: String,
        description: String
    }],
    experience: [{
        title: String,
        company: String,
        startDate: String,
        endDate: String,
        description: String
    }],
    skills: [{
        name: String,
        level: String
    }],
    projects: [{
        name: String,
        description: String,
        link: String
    }],
    status: {
        type: String,
        enum: ['draft', 'active'],
        default: 'draft'
    },
    stats: {
        views: { type: Number, default: 0 },
        downloads: { type: Number, default: 0 }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Resume', resumeSchema);
