# 📇 Contact Management System

A full-stack Contact Management System built using the MERN stack. This application allows users to create, view, update, delete, and search contacts efficiently with a clean and responsive UI.

🌐 Live Demo

🚀 Frontend (Vercel): https://contact-management-system-indol.vercel.app/
⚙️ Backend API (Render): https://contact-management-system-y1sx.onrender.com

---

## 🚀 Features

- Add new contacts
- View all contacts
- Update contact details
- Delete contacts
- Search contacts by name or company
- Filter contacts by status (Active / Inactive)
- Responsive UI with loading states

---

## 🛠️ Tech Stack

**Frontend**

- React (Vite)
- Tailwind CSS
- Axios

**Backend**

- Node.js
- Express.js
- MongoDB (Mongoose)

---

## 📁 Project Structure

```
/frontend   → React application
/backend    → Express API & database logic
```

---

## ⚙️ Installation

### 1. Clone the repository

```
git clone https://github.com/your-username/contact-management-system.git
cd contact-management-system
```

### 2. Setup Backend

```
cd backend
npm install
npm run dev
```

### 3. Setup Frontend

```
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the backend folder:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## 🌐 API Endpoints

- `GET /contacts` → Get all contacts
- `POST /contacts` → Create a contact
- `PUT /contacts/:id` → Update a contact
- `DELETE /contacts/:id` → Delete a contact

---

## 📌 Notes

- Ensure MongoDB is running or use MongoDB Atlas
- Update API base URL in frontend for deployment

---

## 👨‍💻 Author

**Sajith Nuski**
Full-stack Developer | Freelancer

---
