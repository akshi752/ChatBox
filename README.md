# ChatBox 💬

ChatBox is a mini full-stack CRUD web application built using **Node.js**, **Express**, **MongoDB**, **Mongoose**, and **EJS**.  
It allows users to create, view, edit, and delete chat messages with proper validation and user feedback.


## 🚀 Features

- Create new chat messages
- View all chats
- Edit existing chat messages
- Delete chats with confirmation popup
- Message length validation (max 150 characters)
- Success & error popups using query parameters
- Server-side schema validation using Mongoose
- RESTful routing
- Clean UI using EJS templates

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Frontend:** EJS, HTML, CSS
- **Others:** Method Override

## 📂 Project Structure

ChatBox/
│
├── models/
│ └── chat.js
├── views/
│ ├── chats.ejs
│ ├── new.ejs
│ └── edit.ejs
├── public/
│ |── chats.css
│ |── icon.png
| └──style.js
├── index.js
├── init.js
├── package-lock.json
├── package.json
├── .gitignore
└── README.md


## 🔗 API Routes

### 🔹 Get all chats
GET /chats
### 🔹 Show form to create a new chat
GET /chats/new
### 🔹 Create a new chat
POST /chats
### 🔹 Show edit form for a chat
GET /chats/:id/edit
### 🔹 Update a chat message
PATCH /chats/:id
### 🔹 Delete a chat
DELETE /chats/:id


## ⚠️ Validations

- Message length is limited to **150 characters**
- Validation errors are handled at **schema level**
- Custom error messages are displayed via popup alerts

## ▶️ How to Run the Project Locally

### 1️⃣ Clone the Repository
git clone https://github.com/your-username/ChatBox.git
### 2️⃣ Navigate to the Project Directory
cd ChatBox
### 3️⃣ Install Dependencies
npm install
### 4️⃣ Start MongoDB
Make sure MongoDB is running locally on:
### 5️⃣ Run the Application
node index.js
### 6️⃣ Open in Browser
Visit:
http://localhost:8080/chats
