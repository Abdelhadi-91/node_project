const Customer = require("../models/customerSchema");
const customerService = require("../services/customerService");

// display the add_user page
const user_add_get = (req, res) => {
  res.render("user/add");
}

// add new user and send data to db then render the add user page
const user_add_post = async (req, res,next) => {
  try {
    await customerService.createCustomer(req.body)
    res.redirect("/")
  } catch (err) {
    res.render('user/add',{
      error : "Failed to add customer "+err.message,
      formData : req.body
    })
  }
}

module.exports = {
    user_add_get,
    user_add_post
}