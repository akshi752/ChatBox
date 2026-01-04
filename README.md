## ChatBox 💬

ChatBox is a mini full-stack CRUD web application built using Node.js, Express, MongoDB, Mongoose, and EJS.
It allows users to create, view, edit, and delete chat messages with server-side validation and a clean UI.

## 🚀 Features

Create new chat messages

View all chats

Edit existing chat messages

Delete chats with confirmation popup

Message length validation (max 150 characters)

Success & error popups using query parameters

RESTful routing

Clean UI with EJS templates

## 🛠️ Tech Stack

Backend: Node.js, Express.js

Database: MongoDB Atlas, Mongoose

Frontend: EJS, HTML, CSS, JavaScript

Others: Method Override

## 📂 Project Structure
ChatBox/
├── models/
│   └── chat.js          # Chat schema
├── views/
│   ├── chats.ejs        # Show all chats
│   ├── new.ejs          # Form to create new chat
│   └── edit.ejs         # Edit chat form
├── public/
│   ├── chats.css        # Styles
│   ├── icon.png         # Icon
│   └── style.js         # Frontend JS
├── .env                 # Environment variables (not included in repo)
├── index.js             # Entry point
├── init.js              # DB initialization (if needed)
├── package.json
├── package-lock.json
└── README.md


## 🔗 API Routes

| Method | Route           | Description                |
| ------ | --------------- | -------------------------- |
| GET    | /chats          | Get all chats              |
| GET    | /chats/new      | Show form to create a chat |
| POST   | /chats          | Create a new chat message  |
| GET    | /chats/:id/edit | Show edit form for a chat  |
| PATCH  | /chats/:id      | Update a chat message      |
| DELETE | /chats/:id      | Delete a chat              |


## ⚠️ Validations

Message length limited to 150 characters

Validation errors handled via Mongoose schema

Custom error messages displayed as popup alerts

## 🌐 Live Demo

Access the deployed version on Render using MongoDB Atlas:

https://chatbox-56fs.onrender.com/chats