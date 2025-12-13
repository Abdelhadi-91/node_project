const express = require("express")
const router = express.Router()
const Customer = require("../models/customerSchema");
var moment = require("moment");

router.post("/search",(req,res) => {
  const key = req.body.key.trim()
  Customer.find({$or:[{firstName:key},{lastName:key}]})
  .then((result) => {
    res.render("user/search",{data : result, moment:moment})
  })
  .catch((err) => {
    console.log(err);
  })
})

module.exports = router;