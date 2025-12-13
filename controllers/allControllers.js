const Customer = require("../models/customerSchema");
var moment = require("moment");

const user_index_get = (req, res) => {
  Customer.find()
    .then((data) => {
      res.render("index", { arr: data, moment: moment });
    })
    .catch((err) => console.log(err));
}

const user_add_get = (req, res) => {
  res.render("user/add");
}

const user_add_post = (req, res) => {
  Customer.create(req.body)
    .then(() => {
      res.redirect("/user/add.html");
    })
    .catch((err) => {
      console.log(err);
    });
}

const user_edit_get = (req, res) => {
  Customer.findById(req.params.id)
    .then((result) => {
      res.render("user/edit", { data: result });
    })
    .catch((err) => {
      console.log(err);
    });
}

const user_delete = (req, res) => {
  Customer.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
}

const user_put = (req, res) => {
  Customer.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
}

const user_search_post = (req,res) => {
  const key = req.body.key.trim()
  Customer.find({$or:[{firstName:key},{lastName:key}]})
  .then((result) => {
    res.render("user/search",{data : result, moment:moment})
  })
  .catch((err) => {
    console.log(err);
  })
}

const user_view_post =  (req, res) => {
  Customer.findById(req.params.id)
    .then((result) => {
      //result is object
      res.render("user/view", { data: result, moment: moment });
    })
    .catch((err) => console.log(err));
}

module.exports = {
    user_index_get,
    user_add_get,
    user_add_post,
    user_edit_get,
    user_delete,
    user_put,
    user_search_post,
    user_view_post
}