const validate = (schema) => {
  return (req, res, next) => {
    // Validate request body
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,    // Show all errors, not just the first one
      stripUnknown: true    // Remove fields not in schema
    });

    if (error) {
      // Collect all error messages
      const errorMessages = error.details.map(detail => detail.message);
      const errorMessage = errorMessages.join(', ');
      
      // Log for debugging
      console.log('❌ Validation Error:', errorMessage);
      console.log('📦 Received data:', req.body);
      
      // Determine which view to render based on the route
      let viewPath = 'user/add';
      let viewData = {
        error: errorMessage,
        formData: req.body
      };
      
      // For edit routes, we need to keep the data object
      if (req.path.includes('edit') || req.params.id) {
        viewPath = 'user/edit';
        viewData.data = req.body;
        viewData.data._id = req.params.id; // Keep the ID for the form action
      } else if (req.path.includes('search')) {
        viewPath = 'user/search';
        viewData.data = [];
        viewData.moment = require('moment');
        viewData.searchTerm = req.body.key || '';
      }
      
      // Return to form with error message and preserve user input
      return res.render(viewPath, viewData);
    }

    // Replace req.body with validated and sanitized data
    req.body = value;
    next();
  };
};

module.exports = validate;