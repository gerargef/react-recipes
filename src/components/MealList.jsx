import React, { useContext } from "react";
import MealItem from "./MealItem";
import { AppContext } from "../context";

function MealList() {
  const { filteredMeals } = useContext(AppContext);
  return (
    <div className="list">
      
      {filteredMeals.map((meal) => (
        <MealItem key={meal.idMeal} {...meal} />
      ))}
    </div>
  );
}

export default MealList;
