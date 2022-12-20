import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import {getListAllIngredients} from '../API'
import { AppContext } from '../context'
import IngredientItem from './IngredientItem'
import Search from './Search';

function IngredientsList() {
  const navigate = useNavigate();
    const {setIngredients, setFilteredIngredients, filteredIngredients, searchIngredients} = useContext(AppContext)
    useEffect(() => {
        getListAllIngredients().then((data) => {
            setIngredients(data.meals);
            setFilteredIngredients(data.meals)
        })
    }, [])
  return (
    <div>
        <button
        className="btn cyan darken-1 row go-back-button"
        onClick={() => navigate('/')}
      >
        Go Back
      </button>
      <Search search={searchIngredients} />
      <div className='list'>{filteredIngredients.map(ingredient => <IngredientItem {...ingredient} key={ingredient.idIngredient}/>)}</div>
    </div>
   
  )
}

export default IngredientsList