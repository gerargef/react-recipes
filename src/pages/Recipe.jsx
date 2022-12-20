import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFullMealDetails } from "../API";
import { AppContext } from "../context";

function Recipe() {
  const { currentRecipeData, setCurrentRecipeData, favoriteRecipes, setFavoriteRecipes } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const setNewFavoriteRecipe = () => {
    setFavoriteRecipes([...favoriteRecipes, {
      id: currentRecipeData.idMeal,
      title: currentRecipeData.strMeal,
    }])
    // localStorage.setItem("favoriteRecipes", JSON.stringify(favoriteRecipes));

  }
  useEffect(() => {
    getFullMealDetails(id).then((data) => setCurrentRecipeData(data.meals[0]));
  }, [id]);
  return (
    <div className="recipe">
      <h1 className="center">{currentRecipeData.strMeal} </h1>
      <button
        className="material-icons medium favorite-star btn"
        onClick={setNewFavoriteRecipe}
      >
        star
      </button>
      <img src={currentRecipeData.strMealThumb} alt="" />
      <h5> Category : {currentRecipeData.strCategory}</h5>
      {currentRecipeData.strArea ? (
        <h5> Area : {currentRecipeData.strArea}</h5>
      ) : null}
      <p>{currentRecipeData.strInstructions}</p>
      <table className="centered">
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Measure</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(currentRecipeData).map((key) => {
            if (key.includes("strIngredient") && currentRecipeData[key]) {
              return (
                <tr key={key}>
                  <td>{currentRecipeData[key]}</td>
                  <td>{currentRecipeData[`strMeasure${key.slice(13)}`]}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <div className="recipe-video row">
        <h3 className="center">Recipe Video</h3>
        {currentRecipeData.strYoutube ? (
          <iframe
            allowFullScreen
            className="video"
            title={currentRecipeData.idMeal}
            src={`https://www.youtube.com/embed/${currentRecipeData.strYoutube.slice(
              -11
            )}`}
          />
        ) : null}
      </div>
      <button
        className="btn cyan darken-1 row go-back-button"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
}

export default Recipe;
