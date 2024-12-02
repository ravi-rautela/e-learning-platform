const User = require('../models/User'); // Assuming User is your Mongoose model

// Fetch all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Exclude password from the result
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};

// Update user role
const updateUserRole = async (req, res) => {
    const { userId, newRole } = req.body;

    if (!userId || !newRole) {
        return res.status(400).json({ message: 'User ID and new role are required' });
    }

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.role = newRole;
        await user.save();
        res.status(200).json({ message: 'User role updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user role', error });
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
};


module.exports = { getAllUsers, deleteUser, updateUserRole }