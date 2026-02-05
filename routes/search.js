const express = require("express")
const router = express.Router()
const controller = require("../controllers/searchController")
const validate = require('../middlewares/validate')
const {searchSchema} = require('../validators/customerValidator')

// search for customers
router.post(
    "/search",
    validate(searchSchema),
    controller)

module.exports = router;