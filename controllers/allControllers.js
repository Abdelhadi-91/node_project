const Customer = require("../models/customerSchema");
var moment = require("moment");

// display data on main page
const user_index_get = (req, res) => {
  Customer.find()
    .then((data) => {
      res.render("index", { arr: data, moment: moment });
    })
    .catch((err) => console.log(err));
}

// display the add_user page
const user_add_get = (req, res) => {
  res.render("user/add");
}

// add new user and send data to db then render the add user page
const user_add_post = (req, res) => {
  Customer.create(req.body)
    .then(() => {
      res.redirect("/user/add.html");
    })
    .catch((err) => {
      console.log(err);
    });
}

// display the user data in edit page
const user_edit_get = (req, res) => {
  Customer.findById(req.params.id)
    .then((result) => {
      res.render("user/edit", { data: result });
    })
    .catch((err) => {
      console.log(err);
    });
}

// delete user data from db
const user_delete = (req, res) => {
  Customer.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
}

// edit user data and update in db
const user_put = (req, res) => {
  Customer.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
}

// search for a user by firstName and lastName then display results
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

// view user data and render view page
const user_view_post =  (req, res) => {
  Customer.findById(req.params.id)
    .then((result) => {
      //result is object
      res.render("user/view", { data: result, moment: moment });
    })
    .catch((err) => console.log(err));
}

// export all functions
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