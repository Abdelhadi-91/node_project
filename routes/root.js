const express = require("express")
const router = express.Router()
const Customer = require("../models/customerSchema");
var moment = require("moment");

// get req
router.get("/", (req, res) => {
  Customer.find()
    .then((data) => {
      res.render("index", { arr: data, moment: moment });
    })
    .catch((err) => console.log(err));
});



module.exports = router