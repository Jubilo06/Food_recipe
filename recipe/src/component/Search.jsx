import {useEffect, useState } from "react";
import styles from "./foodDiv.module.css"

function Search({foodData, setFoodData}){
    const[query, setQuery]=useState("Pizza");
    const URL=`https://api.spoonacular.com/recipes/complexSearch?`;
    const API_KEY="ef2f4f2acde44ca2a3d7c6f98336cb31";
    useEffect(()=>{
        async function FetchFood(){
            const res= await fetch(`${URL}query=${query}&apiKey=${API_KEY}`);
            const data=await res.json();
            console.log(data.results);
            setFoodData(data.results);
        }
        FetchFood();
    },[query])
    return(
        <div className={styles.searche}>
            <input className={styles.input} type="text" value={query} onChange={(e)=> setQuery(e.target.value)}></input>
        </div>
    )
}
export default Search;