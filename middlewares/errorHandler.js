/**
 * Centralized error handling middleware
 * Catches all errors and renders appropriate error pages
 */
const errorHandler = (err, req, res, next) => {
  // Log error details for debugging
  console.error('❌ Error occurred:');
  console.error('Message:', err.message);
  console.error('Status:', err.statusCode || 500);
  console.error('Stack:', err.stack);
  
  // Default status code and message
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";
  
  // Check if it's an AJAX/API request
  const isAjaxRequest = req.xhr || req.headers.accept?.indexOf('json') > -1;
  
  if (isAjaxRequest) {
    // For API/AJAX requests - send JSON response
    return res.status(statusCode).json({
      success: false,
      error: {
        message: message,
        statusCode: statusCode
      },
      // Include stack trace only in development
      ...(process.env.NODE_ENV === 'development' && { 
        stack: err.stack 
      })
    });
  } else {
    // For page requests - render error page
    return res.status(statusCode).render('error', {
      message: message,
      statusCode: statusCode,
      // Only show stack trace in development
      stack: process.env.NODE_ENV === 'development' ? err.stack : null
    });
  }
};

module.exports = errorHandler;