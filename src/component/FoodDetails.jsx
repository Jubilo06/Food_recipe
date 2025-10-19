import { useEffect, useState } from "react";
import { Stack,Typography, Card, CardContent, CardActions, Button, CardMedia } from "@mui/material";
import styles from './fooddetail.module.css';
import { useContext } from "react";
import { RecipeContext } from "./RecipeProvider";
import Aos from 'aos'
import 'aos/dist/aos.css'

function FoodDetails() {
  const { foodId } = useContext(RecipeContext);
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "ef2f4f2acde44ca2a3d7c6f98336cb31";

  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        if (!res.ok) throw new Error('API fetch failed');
        const data = await res.json();
        console.log(data);
        setFood(data);
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchFood();
  }, [foodId]);
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  // Early return for loading
  if (isLoading) {
    return <div className={styles.loader}>
                <div className={styles.loader__inner}></div>
                <div className={styles.loader__orbit}>
                    <div className={styles.loader__dot}></div>
                    <div className={styles.loader__dot}></div>
                    <div className={styles.loader__dot}></div>
                    <div className={styles.loader__dot}></div>
                </div>
                </div>
  }


  return (
    <Stack className={styles.recipestack} backgroundColor='#DE8c63'  data-aos='zoom-in'>
      <Stack direction="column" spacing={2}>
        <Typography textAlign='center' fontWeight={900}  variant='h4' sx={{ color: "white", height:"auto", backgroundColor:"#2F1102", lineHeight:'auto', fontSize:{xs:"1em",sm:'1.5em' } }}>
          {food.title}
        </Typography>
        <img
          style={{width:'300px'}}
          src={food.image}
          alt={food.title}
          className={styles.recipeimg}
        />
        <Stack direction="column" spacing={2}>
          <Typography textAlign="center" sx={{ color:'black'  }}>
            Preparation Time: {food.readyInMinutes} minutes
          </Typography>
          <Typography textAlign="center" sx={{ color: "black" }}>
            Status: {food.vegetarian ? "Vegetarian" : "Non-vegetarian"}
          </Typography>
          <Typography textAlign="center" sx={{ color: "black" }}>
            Price: ${food.pricePerServing}
          </Typography>
        </Stack>
      </Stack>
      <Stack>
        <Typography fontWeight={900} pt={4} pb={4} textAlign="center" variant="h5" sx={{ color: "black" }}>
          <strong>Ingredients</strong>
        </Typography>
        <Stack  spacing={{xs:0,sm:'initial', md:'initial'}} direction="row" justifySelf="center" alignSelf='center'
        justifyContent={{xs:'center', sm:'space-between', md:'space-between'}} flexWrap='wrap' height='auto' width={{xs:'80%', md:"80%"}} 
        backGroundColor='#FFFDF2'>
          {food?.extendedIngredients?.map((item) => (  
          <Stack
            key={item.id}  
            direction="row"
            // className={styles.ingredients}
            spacing={0}
          height='auto' 
          >
            <Stack height='300px' p={2} width='250px' backgroundColor='transparent' direction="row" data-aos='zoom-in' >
              <Card sx={{height:'100%',width:'100%', bgcolor:'#FFFDF2'}}>
                <CardMedia component='img' height='150px' image={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}  alt={item.name} />
                <CardContent>
                  <Typography variant="h6" sx={{color:"#0D544D",textAlign:'center'}}>{item.name}</Typography>        
                </CardContent>
                <CardContent>
                  <Typography variant="h6" sx={{color:"#0D544D",textAlign:'center'}}>{item.amount} {item.unit}</Typography>        
                </CardContent>
              </Card>
            </Stack>
          </Stack>
        ))}
        </Stack>
        
      </Stack>
      <Stack backgroundColor="#FFFDF2" pb={4} data-aos='zoom-in'>
        <Typography fontWeight={900} textAlign='center' pt={4} pb={4} variant="h3" sx={{ color: "black" }}>
          Instructions
        </Typography>
        {food?.analyzedInstructions?.[0]?.steps?.map((step) => (  // ← Fix: Full optional chaining to prevent crashes
          <Typography
            key={step.number}  // ← Fix: Use stable number (1,2,3...) instead of text
            variant="body1" ml={1}
            sx={{ color: "black", textAlign: "left" }}
          >
            {step.number}. {step.step} 
          </Typography>
        )) || <Typography>No instructions available.</Typography>}  
      </Stack>
    </Stack>
  );
}

export default FoodDetails;
