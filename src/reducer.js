export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_CATEGORIES": {
      return {
        ...state,
        categories: payload.data,
      };
    }
    case 'SET_FILTERED_CATEGORIES' : {
      return {
        ...state,
        filteredCategories: payload.data,
      }
    }
    case "SET_CURRENT_CATEGORY_MEALS": {
      return {
        ...state,
        currentCategoryMeals: payload.data,
      };
    }
    case 'SET_FILTERED_MEALS' : {
      return {
        ...state,
        filteredMeals: payload.data,
      };
    }
    case "SET_CURRENT_RECIPE_DATA": {
      return {
        ...state,
        currentRecipeData: payload.data,
      };
    }
    case 'SEARCH_CATEGORIES' : {
      return {
        ...state,
        filteredCategories : state.categories.filter((item) => item.strCategory.toLowerCase().includes(payload.str.toLowerCase())),
      }
    }
    case 'SET_AREAS' : {
     return {
      ...state,
      areas : payload.data
     }
    }
    case 'SET_FILTERED_AREAS' : {
      return {
       ...state,
       filteredAreas : payload.data
      }
     }
     case 'SET_INGREDIENTS' : {
      return {
       ...state,
       ingredients : payload.data
      }
    }
      case 'SET_FILTERED_INGREDIENTS' : {
        return {
         ...state,
         filteredIngredients : payload.data
        }
     }
     case 'SET_FAVORITE_RECIPES' : {
      return {
       ...state,
       favoriteRecipes : payload.data
      }
   }
    case 'SEARCH_MEALS' : {
      return {
        ...state,
        filteredMeals : state.currentCategoryMeals.filter((item) => item.strMeal.toLowerCase().includes(payload.str.toLowerCase())),
      }
    }
    case 'SEARCH_AREAS' : {
      return {
        ...state,
        filteredAreas : state.areas.filter((item) => item.strArea.toLowerCase().includes(payload.str.toLowerCase())),
      }
    }
    case 'SEARCH_INGREDIENTS' : {
      return {
        ...state,
        filteredIngredients : state.ingredients.filter((item) => item.strIngredient.toLowerCase().includes(payload.str.toLowerCase())),
      }
    }
    case 'DELETE_RECIPE' : {
      return {
        ...state,
        favoriteRecipes: state.favoriteRecipes.filter(recipe => payload.id !== recipe.id)
      }
    }
    default:
      return state;
  }
};
