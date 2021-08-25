const router = require("express").Router();
const profileController = require("../controllers/profileController");

router.get("/login", profileController.login);

module.exports = router;
