const express = require("express")
const router = express.Router()
const controller = require("../controllers/viewController")

// View customer details
router.get("/:id",controller);

module.exports = router