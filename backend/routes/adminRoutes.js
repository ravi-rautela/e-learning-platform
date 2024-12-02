const express = require('express');
const router = express.Router();
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const { getAllUsers, updateUserRole, deleteUser } = require('../controllers/adminController');

// Route to get all users (Admin only)
router.get('/users', authMiddleware, adminMiddleware, getAllUsers);

// Route to update user role (Admin only)
router.patch('/users/role', authMiddleware, adminMiddleware, updateUserRole);

// Route to delete a user (Admin only)
router.delete('/users/:userId', authMiddleware, adminMiddleware, deleteUser);

module.exports = router;
