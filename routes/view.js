const express = require("express")
const router = express.Router()
const controller = require("../controllers/allControllers")

router.get("/:id",controller.user_view_post);

module.exports = router