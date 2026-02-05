const Joi = require("joi");

const country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]


const createOrUpdateCustomerSchema = Joi.object({

  firstName: Joi.string()
    .min(3)
    .max(30)
    .trim()
    .required()
    .messages({
      "string.empty": "First name is required",
      "string.min": "First name must be at least 3 characters long",
      "string.max": "First name can't exceed 30 characters",
      "any.required": "First name is required",
    }),

  lastName: Joi.string()
    .min(3)
    .max(30)
    .trim()
    .required()
    .messages({
      "string.empty": "Last name is required",
      "string.min": "Last name must be at least 3 characters long",
      "string.max": "Last name can't exceed 30 characters",
      "any.required": "Last name is required",
    }),

  email: Joi.string()
    .email()
    .trim()
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Email must be a valid email address",
      "any.required": "Email is required",
    }),

  phoneNumber: Joi.string()
  .pattern(/^[0-9]{8,15}$/)
  .required()
  .messages({
    "string.empty": "Phone number is required",
    "string.pattern.base":"Phone number must contain only digits (8 to 15 numbers)",
    "any.required": "Phone number is required",
  }),


  age: Joi.number()
    .integer()
    .min(12)
    .max(120)
    .required()
    .messages({
      "number.base": "Age must be a number",
      "number.integer": "Age must be an integer",
      "number.min": "Age must be at least 12",
      "number.max": "Age cannot exceed 120",
      "any.required": "Age is required",
    }),

  country: Joi.string()
    .valid(...country_list)
    .required()
    .messages({
      "any.only": "Country must be selected from the list",
      "string.empty": "Country is required",
      "any.required": "Country is required",
    }),

  gender: Joi.string()
    .valid("Male", "Female")
    .required()
    .messages({
      "any.only": "Gender must be either Male or Female",
      "string.empty": "Gender is required",
      "any.required": "Gender is required",
    }),
});

const searchSchema = Joi.object({
    key: Joi.string()
    .min(3)
    .max(30)
    .trim()
    .required()
    .messages({
      "string.empty": "key is required",
      "string.min": "key must be at least 3 characters long",
      "string.max": "key can't exceed 30 characters",
      "any.required": "key is required",
    }),
})

module.exports = {
    createOrUpdateCustomerSchema,
    searchSchema
};
