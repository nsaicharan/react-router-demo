import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const catLinks = props.cats.map((cat, i) => (
    <NavLink
      exact
      activeClassName="text-yellow-500"
      className="mx-3"
      key={i}
      to={`/cat/${cat.name}`}
    >
      {cat.name}
    </NavLink>
  ));

  return (
    <nav className="flex justify-center p-4 mb-10 bg-gray-900 text-white">
      {catLinks}
    </nav>
  );
}

export default Navbar;
