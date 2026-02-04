const Customer = require("../models/customerSchema");
const moment = require("moment");

// display data on main page
const user_index_get = async (req, res) => {
  try {
    const data = await Customer.find()
    res.render('index',{
      arr:data,
      moment: moment
    })
  } catch (err) {
    next(err)
  }
}

module.exports = user_index_get