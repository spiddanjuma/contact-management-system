const express = require("express");
const { registerUser, loginUser, currentrUser } = require("../Controllers/userController");
const validateToken = require("../Middleware/validateTokenHandler");

const router = express.Router();

router.post("/register",registerUser);


router.post("/login",loginUser);


router.get("/current", validateToken, currentrUser);

module.exports = router;