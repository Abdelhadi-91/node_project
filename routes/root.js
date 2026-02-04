const express = require("express")
const router = express.Router()
const controller = require("../controllers/indexController")

// home page - display all customers
router.get("/", controller);

module.exports = router