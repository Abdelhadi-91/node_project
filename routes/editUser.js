const express = require("express")
const router = express.Router()
const Customer = require("../models/customerSchema");

router.get("/edit/:id", (req, res) => {
  Customer.findById(req.params.id)
    .then((result) => {
      res.render("user/edit", { data: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

//delete req
router.delete("/edit/:id", (req, res) => {
  Customer.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

//put req
router.put("/edit/:id", (req, res) => {
  Customer.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;