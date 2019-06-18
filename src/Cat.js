import React from "react";
import { Link } from "react-router-dom";

function Cat(props) {
  const [cat] = props.cats.filter(
    cat => cat.name === props.match.params.catName
  );

  return (
    <div className="px-3 mb-8">
      <div className="max-w-md mx-auto text-center shadow">
        <img src={cat.src} alt={cat.name} className="w-full mb-3" />

        <p className="text-lg text-gray-800">
          {cat.name} is {cat.age} years old.
        </p>

        <Link
          to="/cat"
          className="block btn cursor-pointer font-medium bg-blue-200 p-3 my-3 text-blue-900 hover:bg-blue-300"
        >
          Back to List
        </Link>
      </div>
    </div>
  );
}

export default Cat;
