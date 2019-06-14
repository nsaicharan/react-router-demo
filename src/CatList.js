import React from "react";
import { Link } from "react-router-dom";

function CatList(props) {
  const catsHTML = props.cats.map((cat, i) => (
    <Link to={`/cat/${cat.name}`} key={i} className="mx-3 max-w-xs mb-8">
      <img src={cat.src} alt={cat.name} />
      <p className="py-2 text-blue-900 bg-blue-100 font-medium text-center">
        {cat.name}
      </p>
    </Link>
  ));

  return (
    <div className="flex justify-center flex-wrap max-w-5xl mx-auto">
      {catsHTML}
    </div>
  );
}

export default CatList;
