const Customer = require("../models/customerSchema");
const moment = require("moment");

// search for a user by firstName and lastName then display results
const user_search_post = async (req,res,next) => {
  try {
    const key = req.body.key.trim()
    if (!key) {
      return res.render("user/search", {
        data: [],
        moment: moment,
        error: "Please enter a search term",
        searchTerm: key
      });
    }
    const result = await Customer.find({
      $or:[
        {firstName:key},
        {lastName:key}
      ]
    })
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