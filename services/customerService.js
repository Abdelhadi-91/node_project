const Customer = require('../models/customerSchema')

class CustomerService {

    // get all customers from db, returns array of customers
    async getAllCustomers() {
        try {
            return await Customer.find().sort({
            createdAt : -1
        })
        } catch (error) {
            throw new Error(`Failed to fetch customers: ${error.message}`)
        }
    }

    // get a single customer by id, returns customer object
    async getCustomerById(id) {
        try {
            const customer = await Customer.findById(id)
            if (!customer) {
                const error = new Error("Customer not found");
                error.statusCode = 404;
                throw error;
            }
            return customer
        } catch (error) {
            throw error
        }
    }

    // create new customer, get data from form, return object of created customer
    async createCustomer(customerData) {
        try {
            // check if email is already exists
            let existingCustomer = null
            if (customerData.email) {
                existingCustomer = await Customer.findOne({
                    email:customerData.email
                })
            }
            if (existingCustomer) {
                const error = new Error('Email already exists')
                error.statusCode= 400
                throw error
            }
            // create customer
            const customer = await Customer.create(customerData)
            return customer
        } catch (error) {
            throw error
        }
    }

    /* update customer data, get the customer by id, and the modifications from body,
    then returns a customer object */
    async updateCustomer(id,newData) {
        try {
            const customer = await Customer.findByIdAndUpdate(
                id,
                newData,
                {
                    new:true, // Return updated document
                    runValidators:true // Run schema validation
                }
            )
            if (!customer) {
                const error = new Error("Customer not found");
                error.statusCode = 404;
                throw error;
            }
            return customer
        } catch (error) {
            throw error
        }
    }

    // delete a customer, get the customer by id, returns object of deleted customer
    async deleteCustomer(id) {
        try {
            const customer = await Customer.findByIdAndDelete(id)
            if (!customer) {
                const error = new Error("Customer not found");
                error.statusCode = 404;
                throw error;
            }
            return customer
        } catch (error) {
            throw error
        }
    }

    // search customers by first or last name, search by key, return array of matching customers
    async searchCustomers(key) {
        try {
            if (!key || key.trim() == '') {
                return []
            }
            const customers = await Customer.find({
                $or:[
                    {firstName:key},
                    {lastName:key}
                ]
            })
            return customers
        } catch (error) {
            throw error
        }
    }

}

//export a single pattern
module.exports = new CustomerService()