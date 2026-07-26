# 🌿 AgriVerse - Smart Agriculture Login System

A modern and responsive Agriculture Login System built using **React (Vite)** for the frontend and **Node.js with Express** for the backend. This project demonstrates frontend validation, backend authentication using static credentials, API integration with Axios, and page navigation using React Router.

---

## 📖 Project Overview

AgriVerse is a simple authentication-based web application developed as part of a Full Stack Web Development assignment.

The application allows users to log in using an email and password. User credentials are validated through a backend API using static data. If the credentials are correct, the user is redirected to the Dashboard page. Otherwise, an appropriate error message is displayed or the user is redirected to the Login Failed page.

This project focuses on understanding the communication between React and Express without using a database.

---

# 🚀 Features

- Modern Agriculture-themed Login UI
- Responsive Design using Tailwind CSS
- React Router Navigation
- Email & Password Validation
- Frontend Form Validation
- Backend Authentication
- Static Login Credentials
- Axios API Integration
- Dashboard Page
- Login Failed Page
- Logout Functionality
- Error Handling
- Clean UI with Tailwind CSS

---

# 🛠️ Technologies Used

## Frontend

- React.js
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- JavaScript (ES6)
- HTML5
- CSS3

---

## Backend

- Node.js
- Express.js
- CORS

---

# 📁 Project Structure

```
AgriVerse
│
├── Backend
│   ├── index.js
│   ├── package.json
│   └── node_modules
│
└── Frontend
    ├── src
    │   ├── App.jsx
    │   ├── Dashboard.jsx
    │   ├── Fail.jsx
    │   ├── main.jsx
    │   ├── index.css
    │   └── assets
    │
    ├── package.json
    └── vite.config.js
```

---

# 💻 User Interface

The application includes:

### 🌿 Login Page

- Agriculture-themed UI
- Email field
- Password field
- Show/Hide Password
- Login Button
- Error Messages
- Responsive Layout

---

### 📊 Dashboard

- Welcome Message
- Weather Information
- Crop Status
- Today's Tasks
- Farm Statistics
- Logout Button

---

### ❌ Login Failed Page

- Friendly error message
- Back to Login button

---

# ⚙️ Frontend Validation

The application performs the following validations before sending data to the backend.

### ✅ Empty Email Validation

```
Email is required.
```

---

### ✅ Email Format Validation

Checks whether the email follows a valid format.

Example:

```
farmer@agriverse.com
```

Invalid Examples:

```
abc
abc@
gmail.com
```

---

### ✅ Empty Password Validation

```
Password is required.
```

---

### ✅ Password Length Validation

Password must contain at least 8 characters.

Example:

```
Farmer@123
```

---

# 🌐 Backend Authentication

The backend uses Express.js to validate login credentials.

No database is used.

Authentication is performed using static values.

```javascript
const email = "farmer@agriverse.com";
const password = "Farmer@123";
```

---

# 🔗 API Endpoint

## Login API

**POST**

```
http://localhost:5002/login
```

Request Body

```json
{
    "email":"farmer@agriverse.com",
    "password":"Farmer@123"
}
```

Successful Response

```json
true
```

Failed Response

```json
false
```

---

# 🔄 Application Flow

```
User

↓

Login Page

↓

Frontend Validation

↓

Axios POST Request

↓

Express Backend

↓

Credential Verification

↓

Success
↓

Dashboard

OR

Failure
↓

Login Failed Page
```

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/your-username/AgriVerse.git
```

---

## Frontend

Navigate to frontend folder

```bash
cd Frontend
```

Install dependencies

```bash
npm install
```

Run React Application

```bash
npm run dev
```

---

## Backend

Navigate to backend folder

```bash
cd Backend
```

Install dependencies

```bash
npm install
```

Run Server

```bash
node index.js
```

Server runs on

```
http://localhost:5002
```

---

# 📚 React Concepts Used

- Functional Components
- JSX
- Props
- useState()
- Event Handling
- Conditional Rendering
- Form Handling
- React Router
- useNavigate()
- Axios
- API Integration

---

# 📚 Express Concepts Used

- Express Server
- Middleware
- express.json()
- express.urlencoded()
- CORS
- POST API
- Request Body
- Response Handling

---

# 🎨 Tailwind CSS Concepts Used

- Flexbox
- Grid
- Responsive Layout
- Gradient Background
- Cards
- Rounded Corners
- Shadow
- Hover Effects
- Transition Effects
- Responsive Design

---

# 🧪 Testing Scenarios

### Valid Login

Email

```
farmer@agriverse.com
```

Password

```
Farmer@123
```

Expected Result

```
Dashboard Page
```

---

### Invalid Login

Wrong Email

```
abc@gmail.com
```

Wrong Password

```
12345678
```

Expected Result

```
Login Failed
```

---

### Empty Fields

Expected Result

```
Validation Messages
```
---

# 🎯 Learning Outcomes

Through this project, I learned:

- React with Vite
- React Router
- Axios API Calls
- Tailwind CSS
- Form Validation
- Express.js
- Backend API Development
- Frontend & Backend Integration
- Authentication using Static Data
- Git & GitHub Project Management

---

# 👩‍💻 Author

**Arul Priya**

GitHub:
https://github.com/arulpriya-ap

---

# 📄 License

This project is developed for educational and learning purposes.

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
