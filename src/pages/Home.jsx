import { React, useEffect, useContext } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { getListAllCategories } from "../API";
import CategoriesList from "../components/CategoriesList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
import { AppContext } from "../context";

function Home() {
  // let { pathname, search } = useLocation();
  // console.log(pathname, search);
  // let searchParamsValue = search.split("=")[1];
  // console.log(searchParamsValue);
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
  return (
    <div>
      <Search search={searchCategories} />
      {filteredCategories.length ? <CategoriesList /> : <Preloader />}
    </div>
  );
}

export default Home;
