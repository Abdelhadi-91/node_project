const Customer = require("../models/customerSchema");
const moment = require("moment");
const customerService = require("../services/customerService");

// search for a user by firstName and lastName then display results
const user_search_post = async (req,res,next) => {
  try {
    const key = req.body.key || ""
    const result = await customerService.searchCustomers(key)
    res.render('user/search',{
      data:result,
      moment:moment,
      error:null,
      searchTerm: key,
    })
  } catch (err) {
    next(err)
  }
}

module.exports= user_search_post