import {useEffect, useState, useContext } from "react";
import { TextField, Stack, IconButton, Icon, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import styles from "./search.module.css"
import { RecipeContext } from "./RecipeProvider";
import Nav from "./Nav";
import bg from '../assets/bg.webp'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Search(){
    const {foodData, setFoodData}=useContext(RecipeContext)
    const[query, setQuery]=useState("");
    const URL=`https://api.spoonacular.com/recipes/complexSearch?`;
    const API_KEY=import.meta.env.VITE_API_KEY;
    useEffect(()=>{
        async function FetchFood(){
            const res= await fetch(`${URL}query=${query}&apiKey=${API_KEY}`);
            const data=await res.json();
            console.log(data.results);
            setFoodData(data.results);
        }
        FetchFood();
    },[query])
    useEffect(()=>{
      Aos.init({duration:2000})
    },[])
    return(
        <Stack spacing={{xs:8, sm:10}} direction='column' height="500px" width="100%" className={styles.searchstack}
        sx={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bg})`, backgroundRepeat:"no-repeat", backgroundSize: 'cover',
                    backgroundPosition: 'center'}}>
            <Stack><Nav /></Stack>
            <Stack data-aos='zoom-in'>
                <Typography color="white" textAlign='center' fontWeight={900} variant='h2'>Best Recipe Plug!</Typography>
                <Typography color="white" textAlign='center' fontWeight={900} variant='h4'>Get all kinds of recipe</Typography>
            </Stack>
            <Stack pt={{xs:0.5, sm:20}}>
                <input placeholder="Search for recipes..." className={styles.input} name="text" value={query}
                    onChange={(e)=> setQuery(e.target.value)}
                type="text"></input>
            </Stack>
            
            

            
        </Stack>
    )
}
export default Search;