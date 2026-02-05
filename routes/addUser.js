const express = require("express")
const router = express.Router()
const controller = require("../controllers/addUserController")
const validate = require('../middlewares/validate')
const {createOrUpdateCustomerSchema} = require('../validators/customerValidator')

// Display add user form
router.get("/add.html", controller.user_add_get);

// Create new user
router.post(
    "/add.html",
    validate(createOrUpdateCustomerSchema),
    controller.user_add_post
    );

module.exports = router;