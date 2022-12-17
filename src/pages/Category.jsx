import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilerByCategory } from "../API";
import MealList from "../components/MealList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
import { AppContext } from "../context";

function Category() {
  const { currentCategoryMeals, setCurrentCategoryMeals, searchMeals, setFilteredMeals } =
    useContext(AppContext);
  const { name } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getFilerByCategory(name).then((data) =>{
      setCurrentCategoryMeals(data.meals)
      setFilteredMeals(data.meals)
    }
    );
  }, [name]);
  return (
    <div>
      <Search search={searchMeals}  />
      <button
        className="btn cyan darken-1 row go-back-button"
        onClick={() => navigate('/')}
      >
        Go Back
      </button>
      <div>{currentCategoryMeals.length ? <MealList /> : <Preloader />}</div>
    </div>
  );
}

export default Category;
