import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context'
import FavoriteRecipeItem from './FavoriteRecipeItem';

function FavoriteRecipesList() {
    const {favoriteRecipes, setFavoriteRecipes} = useContext(AppContext);
    // if (localStorage.getItem('favoriteRecipes')) {
    //   setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')))
    // }
    // useEffect(() => {
    //   if (localStorage.getItem('favoriteRecipes')) {
    //     setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')))
    //   }
    // }, [])
  return (
    <div>
         <ul className="collection">{
        favoriteRecipes.length ?
        favoriteRecipes.map(recipe => 
           <FavoriteRecipeItem {...recipe} key={Number(recipe.id)}/>
            )
        : <li className='active collection-item flow-text   grey lighten-1'>You haven't added any recipes yet</li>
        }
        </ul>
        </div>
  )
}

export default FavoriteRecipesList