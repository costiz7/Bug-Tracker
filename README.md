# 🐞 Bug Tracker

<p align="center">
  <strong>Enterprise-grade bug tracking and project management system</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-In_Development-yellow?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Full_Stack-React_+_Node.js-blue?style=for-the-badge" alt="Full Stack">
  <img src="https://img.shields.io/badge/Database-MySQL-orange?style=for-the-badge&logo=mysql" alt="MySQL">
</p>

---

## Overview

Bug Tracker is a comprehensive full-stack application designed to streamline software development workflows by providing teams with powerful bug tracking and project management capabilities. The platform facilitates collaboration between developers, testers, and project managers through an intuitive interface that enables real-time bug reporting, assignment, and resolution tracking.

Built on a **dual-server architecture**, the application runs two independent servers simultaneously:
- **Frontend Server** – Vite development server serving the React application
- **Backend Server** – Express.js API server handling business logic and database operations

This application serves as a centralized hub for managing software defects across multiple projects, offering granular control over bug severity, priority levels, and assignment workflows. The system implements role-based access control to ensure appropriate permissions across different team hierarchies.

## Core Features

### Authentication & Authorization
- **JWT-Based Security** – Stateless authentication with encrypted tokens
- **Role-Based Access Control (RBAC)** – Three-tier permission system:
  - **Admin** – Full system access, user management, and project oversight
  - **Developer** – Bug resolution, status updates, and collaborative features
  - **Tester** – Bug reporting, verification, and quality assurance workflows
- **Secure Password Management** – Bcrypt hashing with salt rounds for enhanced security

### Project Management
- **Multi-Project Architecture** – Organize bugs across distinct software projects
- **Project Lifecycle Management** – Create, configure, and archive projects
- **Team Assignment** – Associate users with specific projects based on roles
- **Project Analytics** – Track bug metrics and resolution rates per project

### Bug Lifecycle Management
- **Comprehensive CRUD Operations** – Create, read, update, and delete bug reports
- **Dynamic Assignment System** – Allocate bugs to team members based on expertise
- **Priority Classification** – Three-tier priority system (Low, Medium, High)
- **Status Tracking** – Monitor bug progression through defined states:
  - Open
  - In Progress
  - Resolved
  - Reopened
- **Detailed Bug Profiles** – Include descriptions, reproduction steps, and affected versions

### Advanced Filtering & Search
- **Multi-Parameter Filtering** – Filter by status, priority, assignee, or project
- **Sort Functionality** – Organize bugs by date, priority, or custom criteria
- **Search Capabilities** – Quickly locate specific bugs using keyword search

### Interactive Dashboard
- **React-Powered UI** – Fast, responsive single-page application
- **Dynamic Routing** – Client-side navigation with React Router
- **Real-Time Updates** – Immediate reflection of bug status changes
- **Responsive Design** – Optimized for desktop, tablet, and mobile devices

## Advanced Capabilities (Planned/Optional)

### Collaborative Features
- **Comment Threads** – Discussion functionality on individual bug reports
- **Activity Logging** – Track all changes and updates with timestamps
- **@Mentions** – Tag team members for specific attention

### File Management
- **Screenshot Uploads** – Attach visual evidence using Multer middleware
- **Cloud Storage Integration** – Cloudinary CDN for scalable media hosting
- **File Type Validation** – Security measures for upload restrictions

### Notification System
- **Email Alerts** – Automated notifications for bug assignments
- **Status Change Notifications** – Updates when bugs are modified or resolved
- **Digest Reports** – Scheduled summaries of bug activity

### Analytics & Reporting
- **Visual Dashboards** – Chart.js integration for data visualization
- **Performance Metrics** – Track resolution times and team productivity
- **Export Capabilities** – Generate reports in multiple formats

## Technology Stack

### Frontend Architecture
| Technology | Purpose |
|-----------|---------|
| **React** | Component-based UI library |
| **Vite** | Next-generation frontend build tool and dev server |
| **React Router** | Client-side routing and navigation |
| **Zustand / Context API** | Global state management |
| **Fetch API** | Native HTTP client for API communication |
| **TailwindCSS / Material UI** | Modern, responsive styling framework |

### Backend Infrastructure
| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Minimalist web application framework |
| **Sequelize ORM** | Database abstraction and query builder |
| **JWT** | Stateless authentication tokens |
| **bcrypt** | Password hashing algorithm |
| **CORS** | Cross-Origin Resource Sharing middleware |
| **dotenv** | Environment variable management |
| **nodemon** | Development server with auto-restart |

### Database Layer
| Technology | Purpose |
|-----------|---------|
| **MySQL** | Relational database management system |
| **Sequelize** | ORM for database operations and migrations |

### Additional Services
- **Multer** – Middleware for file uploads (planned)
- **Cloudinary** – Cloud-based image and file storage (planned)
- **Nodemailer** – Email notification service (planned)
- **Chart.js** – Data visualization library (planned)

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MySQL (v8.0 or higher)
- npm or yarn package manager

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/costiz7/bug-tracker.git
   cd bug-tracker
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the **backend** directory:
   
   **backend/.env**
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=your_mysql_user
   DB_PASSWORD=your_mysql_password
   DB_NAME=bug_tracker
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:5173
   ```
   
   **Note:** Vite's default dev server runs on port 5173

4. **Initialize the database**
   ```bash
   cd backend
   npm run migrate    # Run database migrations
   npm run seed       # Optional: Add sample data
   ```

5. **Start both development servers**
   
   You need **two terminal windows/tabs**:
   
   ```bash
   # Terminal 1 - Start backend server (Express)
   cd backend
   npm start          # Runs nodemon app.js on port 5000
   ```
   
   ```bash
   # Terminal 2 - Start frontend server (Vite)
   cd frontend
   npm run dev        # Runs Vite dev server on port 5173
   ```

6. **Access the application**
   - Frontend: `http://localhost:5173` (Vite dev server)
   - Backend API: `http://localhost:5000` (Express server)

### Backend Package Details

The backend uses the following core dependencies:

```json
{
  "dependencies": {
    "bcrypt": "^6.0.0",        // Password hashing
    "cors": "^2.8.5",          // Cross-origin resource sharing
    "dotenv": "^17.2.3",       // Environment variable management
    "express": "^5.1.0",       // Web framework
    "jsonwebtoken": "^9.0.2",  // JWT authentication
    "mysql2": "^3.15.3",       // MySQL driver
    "sequelize": "^6.37.7"     // ORM
  },
  "devDependencies": {
    "nodemon": "^3.1.10"       // Auto-restart on file changes
  }
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
 Built with 💻 by <a href="https://github.com/costiz7">costiz7</a>
</p>

<p align="center">
  <sub>One of my most ambitious full-stack projects showcasing modern web development practices</sub>
</p>
