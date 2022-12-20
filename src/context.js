import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const  AppContext = createContext();

const initialState = {
    categories : [],
    filteredCategories : [],
    areas: [],
    filteredAreas: [],
    ingredients: [],
    filteredIngredients : [],
    isLoading: true,
    currentCategoryMeals : [] ,
    filteredMeals : [],
    currentRecipeData: [],
    favoriteRecipes: [],
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState);
    value.setCategories = (data) => {
        dispatch({type: 'SET_CATEGORIES', payload: {data:data}});
    }
    value.setFilteredCategories = (data) => {
        dispatch({type: 'SET_FILTERED_CATEGORIES', payload: {data:data}});
    }
    value.setCurrentCategoryMeals = (data) => {
        dispatch({type: 'SET_CURRENT_CATEGORY_MEALS', payload: {data:data}});
    }
    value.setFilteredMeals = (data) => {
        dispatch({type: 'SET_FILTERED_MEALS', payload: {data:data}});
    }
    value.setCurrentRecipeData= (data) => {
        dispatch({type: 'SET_CURRENT_RECIPE_DATA', payload: {data:data}});
    }
    value.setAreas = (data) => {
        dispatch({type: 'SET_AREAS', payload: {data:data}})
    }
    value.setFilteredAreas = (data) => {
        dispatch({type: 'SET_FILTERED_AREAS', payload: {data:data}})
    }
    value.setIngredients = (data) => {
        dispatch({type: 'SET_INGREDIENTS', payload: {data:data}})
    }
    value.setFilteredIngredients = (data) => {
        dispatch({type: 'SET_FILTERED_INGREDIENTS', payload: {data:data}})
    }
    value.setFavoriteRecipes = (data) => {
        dispatch({type: 'SET_FAVORITE_RECIPES', payload: {data:data}})
    }
    value.searchCategories = ( str) => {
        dispatch({type: 'SEARCH_CATEGORIES', payload: { str: str}})
    }
    value.searchMeals = ( str) => {
        dispatch({type: 'SEARCH_MEALS', payload: { str: str}})
    }
    value.searchAreas = ( str) => {
        dispatch({type: 'SEARCH_AREAS', payload: { str: str}})
    }
    value.searchIngredients = ( str) => {
        dispatch({type: 'SEARCH_INGREDIENTS', payload: { str: str}})
    }
    value.deleteRecipe = (id) => {
        dispatch({type: 'DELETE_RECIPE', payload: {id:id}})
    }
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}