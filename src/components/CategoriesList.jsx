import { React, useContext } from "react";
import { AppContext } from "../context";
import CategoriesItem from "./Categoryiestem";

function CategoriesList() {
  const { filteredCategories } = useContext(AppContext);
  return (
    <div className="list">
      {filteredCategories.map(category => 
        <CategoriesItem key={category.idCategory} {...category}/>)}
  </div>
  )
}

export default CategoriesList;
