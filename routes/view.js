const express = require("express")
const router = express.Router()
const Customer = require("../models/customerSchema");
var moment = require("moment");

router.get("/view/:id", (req, res) => {
  Customer.findById(req.params.id)
    .then((result) => {
      //result is object
      res.render("user/view", { data: result, moment: moment });
    })
    .catch((err) => console.log(err));
});

module.exports = router