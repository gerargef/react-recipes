import React from "react";
import { Link } from "react-router-dom";

function CategoriesItem(props) {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src={strCategoryThumb} alt={strCategory} />
        </div>
        <div className="card-content">
          <span className="card-title">{strCategory}</span>
          <p>{strCategoryDescription.slice(0, 80)}...</p>
        </div>
        <div className="card-action">
          <Link className="btn cyan darken-1" to={`/category/${strCategory}`}>
            Watch category
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoriesItem;
