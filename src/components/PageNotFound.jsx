import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-4xl text-red-600">Page not found</h1>
      <p className="text-xl text-gray-500">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link to="/" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Go back to Home
      </Link>
    </div>
  );
}

export default PageNotFound;
