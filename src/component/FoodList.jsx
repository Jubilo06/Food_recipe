import { useState, useContext, useEffect } from "react";
import { RecipeContext } from "./RecipeProvider";
import styles from './FoodItem.module.css'
import { useNavigate } from "react-router-dom";
import { Stack,Typography, Card, CardContent, CardActions, Button, CardMedia } from "@mui/material";
import Aos from 'aos'
import 'aos/dist/aos.css'


function FoodList(){
    const navigate=useNavigate()
    const {foodData, setFoodData, setFoodId}=useContext(RecipeContext)
    const handleClick=(id)=>{
        console.log(id); setFoodId(id);
        navigate(`/recipe/${id}`)
    }
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <Stack  direction="row" data-aos='zoom-in' flexWrap='wrap' height='auto' width='100%' sx={{backgroundColor:"#F7E2D8"}}>
            <Stack width="100%" justifySelf="center" spacing={4}>
                <Typography pt={4} variant="h4" textAlign='center'>
                    Signature Dishes
                </Typography>
                <Typography variant="body1" textAlign='center'>
                    Discover your next culinary adventure! Browse through our collection of delicious dishes below and Click on the ones that spark interest to view their recipes
                </Typography>
            </Stack>
            <Stack width="100%" data-aos='zoom-in' justifyContent={{xs:'center', sm:'space-between', md:'space-between'}}  direction="row"  p={2} flexWrap='wrap' height='auto'>
                {foodData.map((food)=> 
                    <Stack className={styles.foodstack} key={food.id} my={2} 
                    width={{xs:'90%', sm:"44%", md:'25%'}} height="500px" backgroundColor='#FFFDF2' >
                        <Stack height='100%' width='100%' >
                            <Card sx={{height:'100%', bgcolor:'black'}} data-aos='zoom-in'>
                                <CardMedia component='img' height='300px' image={food.image}  alt={food.title}/>
                                <CardContent>
                                    <Typography variant="h5" height='80px' sx={{color:"white",textAlign:'center'}}>{food.title}</Typography>        
                                </CardContent>
                                <CardActions sx={{justifyContent:'center', alignItems:'center'}}>
                                    <Button sx={{textTransform:'capitalize', alignSelf:'center', justifySelf:'center', bgcolor:'white', color:'black'}} onClick={() => handleClick(food.id)} className={styles.foodbutton} >View Recipe</Button>        
                                </CardActions>
                            </Card>
                        </Stack>
                    </Stack>
                )}
            </Stack>
        </Stack>
    )
}
export default FoodList;