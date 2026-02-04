const express = require("express")
const router = express.Router()
const controller = require("../controllers/editUserController")

// Display edit form
router.get("/:id",controller.user_edit_get);

// Update customer
router.delete("/:id",controller.user_delete);

// delete customer
router.put("/:id", controller.user_put);

module.exports = router;