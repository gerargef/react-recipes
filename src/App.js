import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { ContextProvider } from "./context";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";
import AreasList from "./components/AreasList";
import {getFilerByCategory, getFilerByArea, getFilerByIngredient} from './API'
import IngredientsList from "./components/IngredientsList";
import FavoriteRecipes from "./pages/FavoriteRecipes";

function App() {
  return (
    <>
      <BrowserRouter basename="/react-recipes">
        <Header />
        <ContextProvider>
          <main className="container content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:name" element={<Category getMeals={getFilerByCategory}/>} />
              <Route path="/areas" element={<AreasList/>}/>
              <Route path="/areas/:name" element={<Category getMeals={getFilerByArea}/>}/>
              <Route path="/ingredients" element={<IngredientsList/>}/>
              <Route path="/ingredients/:name" element={<Category getMeals={getFilerByIngredient}/>}/>
              <Route path="/recipe/:id" element={<Recipe/>} />
              <Route path="/favorites" element={<FavoriteRecipes/>}/>
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
        </ContextProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
