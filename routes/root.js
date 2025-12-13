const express = require("express")
const router = express.Router()
const controller = require("../controllers/allControllers")

// get req
router.get("/", controller.user_index_get);

module.exports = router