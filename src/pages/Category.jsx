import React, { useContext, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import MealList from "../components/MealList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
import { AppContext } from "../context";

function Category({getMeals}) {
  const { currentCategoryMeals, setCurrentCategoryMeals, searchMeals, setFilteredMeals } =
    useContext(AppContext);
  const { name } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  let previosPage = location.pathname.split('/')[1];
  
  if (location.pathname.split('/')[1] === 'category') {
   previosPage = ''
  } 
 
  useEffect(() => {
    getMeals(name).then((data) =>{
      setCurrentCategoryMeals(data.meals)
      setFilteredMeals(data.meals)
      console.log(currentCategoryMeals);
    }
    );
  }, [name]);
  return (
    <div>
      <Search search={searchMeals}  />
      <button
        className="btn cyan darken-1 row go-back-button"
        onClick={() => navigate(`/${previosPage}`)}
      >
        Go Back
      </button>
      <div>{currentCategoryMeals.length ? <MealList /> : <Preloader />}</div>
    </div>
  );
}

export default Category;
