import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/about">Go to About</Link>
    </>
  );
}

export default Homepage;
