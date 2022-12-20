import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context";

function FavoriteRecipeItem({id, title }) {
  const {deleteRecipe} = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <li className="collection-item">
      <div className=" flow-text" onClick={() => {navigate(`/recipe/${id}`)}}>
      {title}
    </div>
    <i className="material-icons secondary-content delete-btn" onClick={() => {deleteRecipe(id)}}>  close</i>
    </li>
  );
}

export default FavoriteRecipeItem;
