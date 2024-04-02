export const handleHTTPStatus = statusCode => {
  switch (statusCode) {
    case 400:
      throw new Error(
        'Bad Request: The server could not understand the request due to invalid syntax.'
      );
    case 401:
      throw new Error(
        'Unauthorized: The request has not been applied because it lacks valid authentication credentials for the target resource.'
      );
    case 403:
      throw new Error(
        'Forbidden: The server understood the request, but refuses to authorize it.'
      );
    case 404:
      throw new Error(
        'Not Found: The server has not found anything matching the request URI.'
      );
    case 500:
      throw new Error(
        'Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.'
      );
    case 501:
      throw new Error(
        'Not Implemented: The server does not support the functionality required to fulfill the request.'
      );
    case 502:
      throw new Error(
        'Bad Gateway: The server received an invalid response from an inbound server it accessed while attempting to fulfill the request.'
      );
    case 503:
      throw new Error(
        'Service Unavailable: The server is currently unable to handle the request due to temporary overloading or maintenance of the server.'
      );
    default:
      throw new Error('Unknown HTTP Status Code');
  }
};
