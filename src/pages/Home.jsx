import { React, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getListAllCategories, getRandomMeal } from "../API";
import CategoriesList from "../components/CategoriesList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
import { AppContext } from "../context";

function Home() {
  const navigate = useNavigate();
  const {
    filteredCategories,
    setCategories,
    setFilteredCategories,
    searchCategories,
  } = useContext(AppContext);
  useEffect(() => {
    getListAllCategories().then((data) => {
      setCategories(data.categories);
      setFilteredCategories(data.categories);
    });
  }, []);
  const randomMeal = () => {
    getRandomMeal().then((data) =>  navigate( `/recipe/${data.meals[0].idMeal}`));
  };
  
  return (
    <div>
     <div className="btns">
     <Link to="/areas" className="btn-large yellow darken-3">Areas</Link>
      <Link to="/ingredients" className="btn-large yellow darken-3">Ingredients</Link>
      <button onClick={randomMeal}  className="btn-large yellow darken-3">Random meal</button>
      <Link to="/favorites" className="btn-large yellow darken-3">Favorite recipes</Link>
     </div>
      <Search search={searchCategories} />
      {filteredCategories.length ? <CategoriesList /> : <Preloader />}
    </div>
  );
}

export default Home;
