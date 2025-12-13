const express = require("express")
const router = express.Router()
const controller = require("../controllers/allControllers")

router.post("/search",controller.user_search_post)

module.exports = router;