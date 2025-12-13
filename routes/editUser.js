const express = require("express")
const router = express.Router()
const controller = require("../controllers/allControllers")

router.get("/:id",controller.user_add_get);

//delete req
router.delete("/:id",controller.user_delete);

//put req
router.put("/:id", controller.user_put);

module.exports = router;