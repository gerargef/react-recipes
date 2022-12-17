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
    case 'SEARCH_MEALS' : {
      return {
        ...state,
        filteredMeals : state.currentCategoryMeals.filter((item) => item.strMeal.toLowerCase().includes(payload.str.toLowerCase())),
      }
    }

    default:
      return state;
  }
};
