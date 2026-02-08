const express = require("express")
const router = express.Router()
const controller = require("../controllers/addUserController")
const validate = require('../middlewares/validate')
const {createOrUpdateCustomerSchema} = require('../validators/customerValidator')

// Display add user form
router.get("/add", controller.user_add_get);

// Create new user
router.post(
    "/add",
    controller.user_add_post
    );

module.exports = router;