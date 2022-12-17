import { API_URL } from "./config";

export const getListAllCategories = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return await response.json();
 
};

export const getFullMealDetails = async (mealId) => {
  const response = await fetch(API_URL + "lookup.php?i=" + mealId);
  return await response.json();
};

export const getFilerByCategory = async (categoryName) => {
  const response = await fetch(API_URL + "filter.php?c=" + categoryName);
  return await response.json();
};
