const Course = require('../models/course');

// Get all courses
const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch courses', error });
    }
};

// Get course by ID
const getCourseById = async (req, res) => {
    const { id } = req.params;
    try {
        const course = await Course.findById(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch course', error });
    }
};

// Create a new course
const createCourse = async (req, res) => {
    const { title, description, instructor, price } = req.body;

    try {
        const course = new Course({ title, description, instructor, price });
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create course', error });
    }
};

module.exports = {
    getCourses,
    getCourseById,
    createCourse
}