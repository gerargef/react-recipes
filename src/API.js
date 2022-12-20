import { API_URL } from "./config";

export const getListAllCategories = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return await response.json();
 
};

export const getListAllAreas = async () => {
  const response = await fetch(API_URL + 'list.php?a=list');
  return await response.json();

};

export const getListAllIngredients= async () => {
  const response = await fetch(API_URL + 'list.php?i=list');
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

export const getFilerByArea= async (areaName) => {
  const response = await fetch(API_URL + "filter.php?a=" + areaName);
  return await response.json();
};

export const getFilerByIngredient= async (areaName) => {
  const response = await fetch(API_URL + "filter.php?i=" + areaName);
  return await response.json();
};

export const getRandomMeal = async () => {
  const response = await fetch(API_URL + "random.php");
  return await response.json();
};
