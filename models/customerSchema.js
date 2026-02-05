// it's me who add comments not AI ;)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the schema with validation
const customerSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
        minlength: [3, 'First name must be at least 3 characters'],
        maxlength: [30, 'First name cannot exceed 30 characters']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true,
        minlength: [3, 'Last name must be at least 3 characters'],
        maxlength: [30, 'Last name cannot exceed 30 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone number is required'],
        match: [/^[0-9]{8,15}$/, 'Phone number must be 8-15 digits']
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [12, 'Age must be at least 12'],
        max: [120, 'Age cannot exceed 120']
    },
    country: {
        type: String,
        required: [true, 'Country is required']
    },
    gender: {
        type: String,
        required: [true, 'Gender is required'],
        enum: {
            values: ['Male', 'Female'],
            message: 'Gender must be either Male or Female'
        }
    }
}, {
    timestamps: true  // Automatically adds createdAt and updatedAt
});

// create a model based on the schema
const Customer = mongoose.model("customer", customerSchema);

// export the module
module.exports = Customer;