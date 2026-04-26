const Resume = require('../models/Resume');

// @desc    Get user resumes
// @route   GET /api/resumes
// @access  Private
const getResumes = async (req, res, next) => {
    try {
        const resumes = await Resume.find({ user: req.user.id });
        res.json(resumes);
    } catch (error) {
        next(error);
    }
};

// @desc    Get single resume
// @route   GET /api/resumes/:id
// @access  Private
const getResumeById = async (req, res, next) => {
    try {
        const resume = await Resume.findById(req.params.id);

        if (resume) {
            // Check for user
            if (resume.user.toString() !== req.user.id && req.user.role !== 'admin') {
                res.status(401);
                throw new Error('User not authorized');
            }
            // Increment view count if it's not the user editing it (or just always for simplicity here)
            resume.stats.views += 1;
            await resume.save();
            res.json(resume);
        } else {
            res.status(404);
            throw new Error('Resume not found');
        }
    } catch (error) {
        next(error);
    }
};

// @desc    Create new resume
// @route   POST /api/resumes
// @access  Private
const createResume = async (req, res, next) => {
    try {
        const { title, templateId } = req.body;

        const resume = new Resume({
            user: req.user.id,
            title: title || 'Untitled Resume',
            templateId: templateId || 'modern-tech',
            personalInfo: {},
            education: [],
            experience: [],
            skills: [],
            projects: []
        });

        const createdResume = await resume.save();
        res.status(201).json(createdResume);
    } catch (error) {
        next(error);
    }
};

// @desc    Update resume
// @route   PUT /api/resumes/:id
// @access  Private
const updateResume = async (req, res, next) => {
    try {
        const resume = await Resume.findById(req.params.id);

        if (!resume) {
            res.status(404);
            throw new Error('Resume not found');
        }

        // Check for user
        if (resume.user.toString() !== req.user.id) {
            res.status(401);
            throw new Error('User not authorized');
        }

        const updatedResume = await Resume.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.json(updatedResume);
    } catch (error) {
        next(error);
    }
};

// @desc    Delete resume
// @route   DELETE /api/resumes/:id
// @access  Private
const deleteResume = async (req, res, next) => {
    try {
        const resume = await Resume.findById(req.params.id);

        if (!resume) {
            res.status(404);
            throw new Error('Resume not found');
        }

        // Check for user
        if (resume.user.toString() !== req.user.id) {
            res.status(401);
            throw new Error('User not authorized');
        }

        await resume.deleteOne();
        res.json({ id: req.params.id, message: 'Resume deleted' });
    } catch (error) {
        next(error);
    }
};

// @desc    Get user analytics
// @route   GET /api/resumes/analytics/all
// @access  Private
const getAnalytics = async (req, res, next) => {
    try {
        const resumes = await Resume.find({ user: req.user.id });
        
        const totalResumes = resumes.length;
        let totalViews = 0;
        let totalDownloads = 0;
        const templateCounts = {};

        resumes.forEach(r => {
            totalViews += r.stats.views || 0;
            totalDownloads += r.stats.downloads || 0;
            const tid = r.templateId || 'modern-tech';
            templateCounts[tid] = (templateCounts[tid] || 0) + 1;
        });

        res.json({
            totalResumes,
            totalViews,
            totalDownloads,
            templateCounts,
            resumes: resumes.map(r => ({
                id: r._id,
                title: r.title,
                views: r.stats.views,
                downloads: r.stats.downloads,
                templateId: r.templateId,
                updatedAt: r.updatedAt
            }))
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Record download
// @route   POST /api/resumes/:id/download
// @access  Private
const recordDownload = async (req, res, next) => {
    try {
        const resume = await Resume.findById(req.params.id);

        if (!resume) {
            res.status(404);
            throw new Error('Resume not found');
        }

        resume.stats.downloads += 1;
        await resume.save();

        res.json({ message: 'Download recorded', downloads: resume.stats.downloads });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getResumes,
    getResumeById,
    createResume,
    updateResume,
    deleteResume,
    getAnalytics,
    recordDownload
};
