# 🚀 SkillSwap

**SkillSwap** is a full-stack web application that connects people through **mutual skill exchange**.
Users can teach what they know and learn what they want — creating a smart, community-driven learning platform.

---

## ✨ Features

* 🔐 **User Authentication**
  Register, login, and manage your profile securely

* 👤 **Profile Management**
  Add skills you offer and skills you want to learn

* 🔍 **Smart Skill Matching**
  Automatically finds the best match based on mutual interests

* 💬 **Chat Interface (UI)**
  Connect and communicate with matched users

* 🗑 **Profile Deletion**
  Users can remove their data anytime

---

## 🧠 How It Works

1. User registers with skills (offer & want)
2. Data is stored in the database
3. Matching algorithm compares users:

   * Offer = Want → +50%
   * Want = Offer → +50%
4. Best match is displayed
5. Users can start chatting

---

## 🛠 Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

---

## 📂 Project Structure

```
SkillSwap/
│
├── frontend/
│   ├── index.html
│   ├── register.html
│   ├── match.html
│   ├── chat.html
│   ├── profile.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── models/
│   ├── controllers/
│   └── routes/
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```
git clone https://github.com/your-username/skillswap.git
```

### 2. Install Backend Dependencies

```
cd backend
npm install
```

### 3. Run Server

```
node server.js
```

### 4. Open Frontend

Open `index.html` in browser

---

## 🌐 API Endpoints

| Method | Endpoint            | Description    |
| ------ | ------------------- | -------------- |
| POST   | /api/users/register | Register user  |
| POST   | /api/users/login    | Login user     |
| GET    | /api/users          | Get all users  |
| GET    | /api/users/:id      | Get user by ID |
| DELETE | /api/users/:id      | Delete user    |

---

## 🚧 Future Improvements

* 🔐 JWT Authentication
* 🔒 Password Hashing (bcrypt)
* 💬 Real-time Chat (Socket.io)
* 📊 Advanced Matching Algorithm
* 🔔 Notifications System

---

## 🎯 Project Status

✔ Core functionality complete
🚀 Actively improving with new features

---

## 🤝 Contributing

Feel free to fork the repo and submit pull requests!

---

## 💡 Author

**Utkarsh**
Passionate about building real-world full-stack applications 🚀

---

⭐ *If you like this project, don't forget to star the repository!*
