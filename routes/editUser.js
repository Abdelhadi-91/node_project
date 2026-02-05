const express = require("express")
const router = express.Router()
const controller = require("../controllers/editUserController")
const validate = require('../middlewares/validate')
const {createOrUpdateCustomerSchema} = require('../validators/customerValidator')

// Display edit form
router.get("/:id",controller.user_edit_get);

// Update customer
router.delete(
    "/:id",
    validate(createOrUpdateCustomerSchema),
    controller.user_delete);

// delete customer
router.put("/:id", controller.user_put);

module.exports = router;