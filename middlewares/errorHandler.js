// Centralized error handling middleware
const errorHandler = (err, req, res, next) => {
  // Log error details for debugging
  console.error('Error occurred:');
  console.error('Message:', err.message);
  console.error('Stack:', err.stack);
  
  // Default status code
  const statusCode = err.statusCode || 500;
  
  // Check if it's an AJAX request or regular page request
  const isAjaxRequest = req.xhr || req.headers.accept.indexOf('json') > -1;
  
  if (isAjaxRequest) {
    // For API/AJAX requests - send JSON
    return res.status(statusCode).json({
      success: false,
      message: err.message || "Something went wrong",
      ...(process.env.NODE_ENV === 'development' && { 
        stack: err.stack 
      })
    });
  } else {
    // For page requests - render error page
    return res.status(statusCode).render('error', {
      message: err.message || "Something went wrong",
      statusCode: statusCode,
      // Only show stack trace in development
      stack: process.env.NODE_ENV === 'development' ? err.stack : null
    });
  }
};

module.exports = errorHandler;