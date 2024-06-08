const express = require("express");
const {signup, login} = require("../controllers/auth-conrollers");
const verifyToken = require("../controllers/middlewares/verifyToken");
const { getUser } = require("../controllers/user-controller");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", verifyToken, getUser);
module.exports = router;