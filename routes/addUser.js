const express = require("express")
const router = express.Router()
const controller = require("../controllers/allControllers")

router.get("/add.html", controller.user_add_get);

// post req to store data
router.post("/add.html", controller.user_add_post);

module.exports = router;