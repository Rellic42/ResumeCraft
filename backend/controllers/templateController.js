const Template = require('../models/Template');

// @desc    Get all templates
// @route   GET /api/templates
// @access  Public
const getTemplates = async (req, res, next) => {
    try {
        const templates = await Template.find({});
        res.json(templates);
    } catch (error) {
        next(error);
    }
};

// @desc    Get single template
// @route   GET /api/templates/:id
// @access  Public
const getTemplateById = async (req, res, next) => {
    try {
        const template = await Template.findById(req.params.id);

        if (template) {
            res.json(template);
        } else {
            res.status(404);
            throw new Error('Template not found');
        }
    } catch (error) {
        next(error);
    }
};

// @desc    Create a template
// @route   POST /api/templates
// @access  Private/Admin
const createTemplate = async (req, res, next) => {
    try {
        const { name, industry, thumbnail, level } = req.body;

        const template = new Template({
            name,
            industry,
            thumbnail,
            level,
            usageCount: 0
        });

        const createdTemplate = await template.save();
        res.status(201).json(createdTemplate);
    } catch (error) {
        next(error);
    }
};

// @desc    Delete a template
// @route   DELETE /api/templates/:id
// @access  Private/Admin
const deleteTemplate = async (req, res, next) => {
    try {
        const template = await Template.findById(req.params.id);

        if (template) {
            await template.deleteOne();
            res.json({ message: 'Template removed' });
        } else {
            res.status(404);
            throw new Error('Template not found');
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getTemplates,
    getTemplateById,
    createTemplate,
    deleteTemplate
};
