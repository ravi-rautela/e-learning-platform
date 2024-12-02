const express = require('express');
const {
    registerUser,
    loginUser,
    getUserProfile,
    getAllUsers,
    registerAdmin,
} = require('../controllers/userController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/register/admin', registerAdmin);
// Protected routes
router.get('/profile', protect, getUserProfile);
router.post('/admin/register', protect, adminOnly, registerAdmin);



// Admin-only routes
router.get('/', protect, adminOnly, getAllUsers);

module.exports = router;
