# Customer Management System

A full-stack web application for managing customer records with a clean, responsive interface. Built with Node.js, Express, MongoDB, and EJS templates.

## Features
- CRUD Operations: Create, Read, Update, and Delete customer records
- Live Reload: Automatic browser refresh during development
- Responsive Design: Bootstrap-powered responsive interface
- Search Functionality: Search customers by first or last name
- Customer Details: View detailed customer information
- Modern UI: Clean and professional user interface
- Error Handling: Custom 404 error page

## Technologies Used
Backend: Node.js, Express.js  
Database: MongoDB with Mongoose ODM  
Template Engine: EJS (Embedded JavaScript)  
Frontend: Bootstrap, Bootstrap Icons  
Development Tools: Livereload, Method-override  
Date Handling: Moment.js  

## Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB instance
- npm or yarn package manager

## Installation
1. Clone the repository
```bash
   git clone https://github.com/Abdelhadi-91/node_project  
   cd node_project
   ```

2. Install dependencies
```bash
   npm install
   ```

3. Set up your MongoDB connection  
   - Update the connection string in app.js  
   - Replace the existing credentials with your actual username and password  
   - Update the database name as needed  

4. Start the development server  
```bash
   npm start
   ```

5. Open your browser  
   http://localhost:3000

## Usage
Adding a Customer  
- Click on "Add Customer" or navigate to /user/add.html  
- Fill in the customer details  
- Submit the form to save the customer  

Viewing Customers  
- The homepage (/) displays all customers in a table  
- Click View to see detailed customer information  
- Click Edit to modify customer details  
- Click Delete to remove a customer record  

Searching Customers  
- Use the search functionality to find customers by first or last name  
- Results are displayed on the search results page  

Editing Customer Details  
- Click Edit on any customer record  
- Modify the information in the form  
- Submit to update the customer details  

## Dependencies
Production Dependencies  
- express  
- mongoose  
- ejs  
- moment  
- method-override  

Development Dependencies  
- livereload  
- connect-livereload  

## Routes
Method | Path | Description  
GET | / | Homepage – displays all customers  
GET | /user/add.html | Display add customer form  
GET | /edit/:id | Display edit customer form  
GET | /view/:id | View single customer details  
POST | /user/add.html | Create new customer  
POST | /search | Search customers  
PUT | /edit/:id | Update customer details  
DELETE | /edit/:id | Delete customer  
* | Any other | 404 error page  

## Troubleshooting
MongoDB Connection Fails  
- Check your internet connection  
- Verify MongoDB Atlas cluster is running  
- Ensure credentials are correct  
- Check IP whitelist in MongoDB Atlas  

Live Reload Not Working  
- Ensure you access via http://localhost:3000  
- Check browser console for errors  
- Restart the server  

EJS Templates Not Rendering  
- Verify file paths in the views directory  
- Check for syntax errors in EJS files  
- Ensure the template engine is properly configured
