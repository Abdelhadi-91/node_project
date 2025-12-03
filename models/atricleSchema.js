const mongoose = require("mongoose");
const Schema = mongoose.Schema ;

// define the schema
const articleSchema = new Schema({
    username : String 
})

// create a model based on the schema
const Article = mongoose.model("Article",articleSchema);

// export the module
module.exports = Article ;