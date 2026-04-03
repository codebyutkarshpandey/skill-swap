const express = require("express");

const router = express.Router();

const {
registerUser,
getUsers,
getUserById,
deleteUser,
loginUser   // ✅ ADD THIS
} = require("../controllers/userController");

// ----------------------
// ROUTES
// ----------------------

router.post("/register", registerUser);

router.post("/login", loginUser);  // ✅ LOGIN ROUTE

router.get("/", getUsers);

router.get("/:id", getUserById);

router.delete("/:id", deleteUser);

module.exports = router;