const Customer = require("../models/customerSchema");
const customerService = require("../services/customerService");

// display the user data in edit page
const user_edit_get = async (req, res,next) => {
  try {
    const result = await customerService.getCustomerById()
    if (!result) {
      const error = new Error("Customer not found");
      error.statusCode = 404;
      throw error;
    }
    res.render('user/edit',{
      data : result,
      error: null
    })
  } catch (err) {
    next(err)
  } 
}

// delete user data from db
const user_delete = async (req, res,next) => {
  try {
    const result = await customerService.deleteCustomer(req.params.id)
    if (!result) {
      const error = new Error("Customer not found");
      error.statusCode = 404;
      throw error;
    }
    res.redirect('/')
  } catch (err) {
    next(err)
  }
}

// edit user data and update in db
const user_put = async (req, res,next) => {
  try {
      const result = customerService.updateCustomer(req.params.id,req.body)
      if (!result) {
      const error = new Error("Customer not found");
      error.statusCode = 404;
      throw error;
    }
    res.redirect('/')
  } catch (err) {
    next(err)
  }
}

module.exports = {
    user_edit_get,
    user_delete,
    user_put
}