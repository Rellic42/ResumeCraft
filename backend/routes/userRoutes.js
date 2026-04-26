const express = require('express');
const router = express.Router();
const {
    getUsers,
    updateUserStatus,
    deleteUser
} = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

router.get('/', protect, admin, getUsers);
router.put('/:id/status', protect, admin, updateUserStatus);
router.delete('/:id', protect, admin, deleteUser);

module.exports = router;
