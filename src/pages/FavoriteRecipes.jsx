import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import FavoriteRecipesList from '../components/FavoriteRecipesList';
import { AppContext } from '../context';

function FavoriteRecipes() {
    const navigate = useNavigate();
  
  return (
    <div>
         <button
        className="btn cyan darken-1 row go-back-button"
        onClick={() => navigate('/')}
      >
        Go Back
      </button>
      <FavoriteRecipesList /> 
      
    </div>
  )
}

export default FavoriteRecipes