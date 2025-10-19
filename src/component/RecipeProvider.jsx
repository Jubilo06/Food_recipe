import { createContext, useState } from "react";


export const RecipeContext = createContext();

export function RecipeProvider({children}){
    const [foodData, setFoodData]=useState([]);
    const [foodId, setFoodId]=useState("");
    const value={
        foodData, setFoodData,foodId, setFoodId
    }
    return (
    <RecipeContext.Provider value={value}>
        {children}
    </RecipeContext.Provider>
  )
}
