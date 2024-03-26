const handleHttpError = (error) => {
  let errorMessage = "An error occurred";

  if (error.response) {
    const { status, data } = error.response;

    if (status === 400) {
      errorMessage = "Invalid request. Please check your input and try again.";
    } else if (status === 401) {
      errorMessage = "Unauthorized access. Please log in to continue.";
    } else if (status === 403) {
      errorMessage =
        "Access forbidden. You do not have permission to access this resource.";
    } else if (status === 404) {
      errorMessage = " The requested page or resource does not exist";
    } else if (status >= 500) {
      errorMessage = "Internal server error. Please try again later.";
    } else {
      errorMessage = `Error ${status}: ${
        data.message || "Unknown error occurred."
      }`;
    }
  } else if (error.request) {
    errorMessage =
      "No response from the server. Please check your internet connection.";
  } else {
    errorMessage = "Network error. Please check your internet connection.";
  }

  throw new Error(errorMessage);
};

export default handleHttpError;
