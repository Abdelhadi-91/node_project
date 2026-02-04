const Customer = require("../models/customerSchema");
const moment = require("moment");

// view user data and render view page
const user_view_post = async  (req, res,next) => {
  try{
    const result = await Customer.findById(req.params.id)
    if (!result) {
      const error = new Error("Customer not found");
      error.statusCode = 404;
      throw error;
    }
    res.render('user/view',{
      data:result,
      moment:moment
    })
  } catch (err) {
    next(err)
  }
}

module.exports = user_view_post