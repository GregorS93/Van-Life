import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound-div">
      <div>
        <h1 className="notfound-h1">Sorry, the page you were</h1>
        <h1 className="notfound-h1">looking for, was not found</h1>
      </div>
      <Link to="/" className="notfound-link">
        Return to home page
      </Link>
    </div>
  );
}
