const express = require("express")
const router = express.Router()
const Customer = require("../models/customerSchema");

router.get("/user/add.html", (req, res) => {
  res.render("user/add");
});

// post req to store data
router.post("/user/add.html", (req, res) => {
  Customer.create(req.body)
    .then(() => {
      res.redirect("/user/add.html");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;