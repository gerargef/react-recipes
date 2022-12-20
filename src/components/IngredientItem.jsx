import React from 'react'
import { Link } from 'react-router-dom';

function IngredientItem(props) {
    const {strIngredient} = props;
  return (
    <Link to={`/ingredients/${strIngredient}`} className='btn-large grey darken-1'>{strIngredient}</Link>
      );
}

export default IngredientItem