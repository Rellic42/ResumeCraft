const express = require('express');
const router = express.Router();
const {
    getResumes,
    getResumeById,
    createResume,
    updateResume,
    deleteResume,
    getAnalytics,
    recordDownload
} = require('../controllers/resumeController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
    .get(protect, getResumes)
    .post(protect, createResume);

router.get('/analytics/all', protect, getAnalytics);

router.route('/:id')
    .get(protect, getResumeById)
    .put(protect, updateResume)
    .delete(protect, deleteResume);

router.post('/:id/download', protect, recordDownload);

module.exports = router;
