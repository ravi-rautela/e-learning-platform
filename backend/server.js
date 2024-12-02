const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const courseRouter = require('./routes/courseRoutes');
const userRouter = require('./routes/userRoutes');
const connectDB = require('./utils/db');
const cors = require('cors');
const adminRoutes = require('./routes/adminRoutes')

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: 'GET,POST,PUT,DELETE',
    credentials: true, // If you need to include cookies or HTTP authentication
    optionsSuccessStatus: 200,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Connect to database
connectDB();

// Routes
app.use('/api/auth', userRouter);
app.use('/api/courses', courseRouter);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
