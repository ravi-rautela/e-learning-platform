const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Admin', 'Instructor', 'Student'], default: 'Student' },
});


// Password hashing middleware
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    console.log("Hashing password for user:", this.email);
    const salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(this.password, salt);
    next();
});

// Method to compare the given password with the hashed password in the database
userSchema.methods.matchPassword = async function (password) {
    console.log("Password comparison:", password, "with hash:", this.password);
    return await bcrypt.compare(password, hashedPassword);
};

const User = mongoose.model('users', userSchema);

module.exports = User;
