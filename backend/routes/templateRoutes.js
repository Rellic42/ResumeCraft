const express = require('express');
const router = express.Router();
const {
    getTemplates,
    getTemplateById,
    createTemplate,
    deleteTemplate
} = require('../controllers/templateController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
    .get(getTemplates)
    .post(protect, admin, createTemplate);

router.route('/:id')
    .get(getTemplateById)
    .delete(protect, admin, deleteTemplate);

module.exports = router;
