import React from "react";

import { Link } from "react-router-dom";

export default function navBar() {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/buyers"> Reddit Buyers </Link>
      <Link to="/sellers"> Reddit Sellers </Link>
    </div>
  );
}
