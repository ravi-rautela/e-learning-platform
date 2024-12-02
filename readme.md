# **E-Learning Platform**

An advanced e-learning platform designed to connect students, instructors, and administrators. This application offers functionality for user management, course creation, and role-based dashboards.

---

## **Table of Contents**
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Advantages](#advantages)
- [Disadvantages](#disadvantages)
- [Setup Instructions](#setup-instructions)
- [How to Use](#how-to-use)
- [Application Output](#application-output)
- [Access on GitHub](#access-on-github)

---

## **Features**

### User Management:
- **Admin**:
  - View all registered users.
  - Add or remove users.
  - Update user roles (e.g., promote a user to Instructor).
- **Instructor**:
  - Create and manage courses.
  - View enrolled students.
- **Student**:
  - Enroll in courses.
  - Access course material.

### Course Management:
- Create, update, and delete courses.
- Assign instructors to courses.
- Manage course enrollments.

### Dashboard Insights:
- View user statistics, course enrollments, and other analytics.

---

## **Tech Stack**

### Frontend:
- **React**: For building the user interface.
- **TailwindCSS**: For styling and responsive design.
- **Axios**: For handling HTTP requests.

### Backend:
- **Node.js**: For building the server.
- **Express.js**: For creating APIs.
- **MongoDB**: For storing user and course data.
- **Mongoose**: For object modeling with MongoDB.
- **JWT**: For authentication and authorization.

---

## **Advantages**
1. **Role-Based Access**: Tailored experiences for Admin, Instructor, and Student roles.
2. **Scalability**: Built with a tech stack that supports scaling for large user bases.
3. **Flexibility**: Easy to extend and integrate additional features.
4. **Responsive Design**: Optimized for desktop and mobile devices.

---

## **Disadvantages**
1. **Dependent on Internet Connection**: Requires an active internet connection to function.
2. **Initial Setup**: May require some time for first-time setup.
3. **Limited Offline Features**: No offline access to course content.

---

## **Setup Instructions**

### Prerequisites:
- Node.js installed (`v14+` recommended).
- MongoDB instance running locally or on the cloud.
- Git installed.

### Steps:
1. **Clone the repository**:
   ```bash
   git clone https://github.com/ravi-rautela/e-learning-platform.git
   cd e-learning-platform
   ```

2. **Install dependencies**:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. **Setup environment variables**:
   - Create a `.env` file in the `backend` directory:
     ```bash
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/elearning
     JWT_SECRET=your_secret_key
     ```
   - Adjust variables for your database and environment.

4. **Run the application**:
   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend server:
     ```bash
     cd frontend
     npm start
     ```

5. Open the application at [http://localhost:3000](http://localhost:3000).

---

## **How to Use**

### Step-by-Step:
1. **Register**:
   - Visit `/register` and sign up as a user.
   - Admins must create their account using the database or have an existing Admin promote them.

2. **Login**:
   - Login with your credentials at `/login`.

3. **Admin Dashboard**:
   - Manage users, courses, and insights from the Admin Dashboard.

4. **Instructor Dashboard**:
   - Create and manage courses, and monitor student enrollments.

5. **Student Dashboard**:
   - Browse and enroll in courses, then access learning materials.

---

## **Application Output**
- **Admin**:
  - See statistics such as the number of users and courses.
  - Manage user roles and approve instructors.
- **Instructor**:
  - Create engaging courses and assign students.
- **Student**:
  - Enroll in courses and access the content.

---

## **Access on GitHub**

The source code is hosted on GitHub. Clone it using:
```bash
git clone https://github.com/ravi-rautela/e-learning-platform.git
```

## **Future Enhancements**
- Add support for video lectures.
- Implement notifications for new courses or updates.
- Include a chat feature for real-time communication.
