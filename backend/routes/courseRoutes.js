const express = require('express');
const { getCourses, getCourseById, createCourse } = require('../controllers/courseController.js');
const { adminMiddleware } = require('../middleware/authMiddleware.js');

const router = express.Router();

// Public routes
router.get('/', getCourses);
router.get('/:id', getCourseById);

// Protected routes (Admin only)
router.post('/', adminMiddleware, createCourse);

module.exports = router;
