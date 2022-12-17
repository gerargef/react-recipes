import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const  AppContext = createContext();

const initialState = {
    categories : [],
    filteredCategories : [],
    isLoading: true,
    currentCategoryMeals : [] ,
    filteredMeals : [],
    currentRecipeData: [],
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
    value.searchCategories = ( str) => {
        dispatch({type: 'SEARCH_CATEGORIES', payload: { str: str}})
    }
    value.searchMeals = ( str) => {
        dispatch({type: 'SEARCH_MEALS', payload: { str: str}})
    }
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}