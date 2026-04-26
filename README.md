# ResumeCraft - Dynamic Resume Builder Platform

ResumeCraft is a modern, full-stack web application designed to help users create professional, industry-specific resumes with ease. It features a robust admin management system, role-based access control, and a dynamic resume builder.

## 🚀 Features

### For Users
- **Dynamic Resume Builder**: Real-time editing with professional templates.
- **Industry Templates**: Specialized templates for Tech, Marketing, Finance, and more.
- **Dashboard**: Manage multiple resumes, track views, and downloads.
- **Theme Support**: Seamless Dark/Light mode switching.

### For Administrators
- **User Management Portal**: Approve or reject specialized roles (Recruiters, Job Coaches).
- **Platform Analytics**: Monitor total users and pending registrations.
- **Role-Based Security**: Protected routes and restricted access to management tools.

## 🛠 Tech Stack
- **Frontend**: HTML5, Vanilla CSS, JavaScript (ES6+).
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (Mongoose).
- **Authentication**: JSON Web Tokens (JWT).
- **Deployment**: Vercel.

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd stitch_dynamic_resume_builder
   ```

2. **Setup Backend**:
   ```bash
   cd backend
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file in the `backend` folder:
   ```env
   PORT=5001
   MONGO_URI=your_mongodb_atlas_uri
   JWT_SECRET=your_secret_key
   ```

4. **Run the App**:
   ```bash
   # From the backend folder
   node server.js
   ```

## 🌐 Deployment

This project is configured for **Vercel**.

1. Connect your GitHub repository to Vercel.
2. Set the Environment Variables (`MONGO_URI`, `JWT_SECRET`) in the Vercel dashboard.
3. The `vercel.json` file handles the routing between the static frontend and the Node.js API.

## 🔑 Default Admin Credentials
- **Email**: `admin@resumecraft.com`
- **Password**: `adminpassword123`

---
Developed with ❤️ by Antigravity.
