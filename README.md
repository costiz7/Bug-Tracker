# 🐞 Bug Tracker

A full-stack web application for managing and tracking software bugs within a team.  
Built with **React**, **Node.js (Express)**, and **MySQL** using **Sequelize ORM**.

---

## 🚀 Features

- **User Authentication** (JWT-based)
  - Secure login and registration.
  - Role-based access control (Admin / Developer / Tester).
- **Project Management**
  - Create and manage software projects.
  - Each project contains multiple bugs.
- **Bug Management**
  - Create, update, delete, and assign bugs.
  - Track bug priority (Low, Medium, High) and status (Open, In Progress, Resolved).
- **Filtering & Sorting**
  - Filter bugs by status, priority, assigned user, or project.
- **Responsive Dashboard**
  - Built with React + React Router.
  - Dynamic UI for projects and bug details.
- **Optional Enhancements**
  - Comment threads for each bug.
  - Upload screenshots (using Multer + Cloudinary).
  - Email notifications for assigned bugs.
  - Statistics dashboard (Chart.js integration).

---

## 🧱 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React, React Router, Zustand / Context API, Axios |
| **Backend** | Node.js, Express.js |
| **Database** | MySQL + Sequelize ORM |
| **Auth** | JWT + bcrypt |
| **Styling** | TailwindCSS or Material UI |
