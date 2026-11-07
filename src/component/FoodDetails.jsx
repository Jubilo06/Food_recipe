// import { useEffect, useState } from "react";
// import { Stack,Typography, Card, CardContent, CardActions, Button, CardMedia } from "@mui/material";
// import styles from './fooddetail.module.css';
// import { useContext } from "react";
// import { RecipeContext } from "./RecipeProvider";
// import Aos from 'aos'
// import 'aos/dist/aos.css'

// function FoodDetails() {
//   const { foodId } = useContext(RecipeContext);
//   const [food, setFood] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
//   const API_KEY = "ef2f4f2acde44ca2a3d7c6f98336cb31";

//   useEffect(() => {
//     async function fetchFood() {
//       try {
//         const res = await fetch(`${URL}?apiKey=${API_KEY}`);
//         if (!res.ok) throw new Error('API fetch failed');
//         const data = await res.json();
//         console.log(data);
//         setFood(data);
//       } catch (error) {
//         console.error('Fetch error:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     fetchFood();
//   }, [foodId]);
//   useEffect(()=>{
//     Aos.init({duration:2000})
//   },[])

//   // Early return for loading
//   if (isLoading) {
//     return <div className={styles.loader}>
//                 <div className={styles.loader__inner}></div>
//                 <div className={styles.loader__orbit}>
//                     <div className={styles.loader__dot}></div>
//                     <div className={styles.loader__dot}></div>
//                     <div className={styles.loader__dot}></div>
//                     <div className={styles.loader__dot}></div>
//                 </div>
//                 </div>
//   }


//   return (
//     <Stack className={styles.recipestack} backgroundColor='#DE8c63'  data-aos='zoom-in'>
//       <Stack direction="column" spacing={2}>
//         <Typography textAlign='center' fontWeight={900}  variant='h4' sx={{ color: "white", height:"100px", backgroundColor:"#2F1102", lineHeight:'100px', fontSize:{xs:"1em",sm:'1.5em' } }}>
//           {food.title}
//         </Typography>
//         <img
//           style={{width:'300px'}}
//           src={food.image}
//           alt={food.title}
//           className={styles.recipeimg}
//         />
//         <Stack direction="column" spacing={2}>
//           <Typography textAlign="center" sx={{ color:'black'  }}>
//             Preparation Time: {food.readyInMinutes} minutes
//           </Typography>
//           <Typography textAlign="center" sx={{ color: "black" }}>
//             Status: {food.vegetarian ? "Vegetarian" : "Non-vegetarian"}
//           </Typography>
//           <Typography textAlign="center" sx={{ color: "black" }}>
//             Price: ${food.pricePerServing}
//           </Typography>
//         </Stack>
//       </Stack>
//       <Stack>
//         <Typography fontWeight={900} pt={4} pb={4} textAlign="center" variant="h5" sx={{ color: "black" }}>
//           <strong>Ingredients</strong>
//         </Typography>
//         <Stack  spacing={{xs:0,sm:'initial', md:'initial'}} direction="row" justifySelf="center" alignSelf='center'
//         justifyContent={{xs:'center', sm:'space-between', md:'space-between'}} flexWrap='wrap' height='auto' width={{xs:'80%', md:"80%"}} 
//         backGroundColor='#FFFDF2'>
//           {food?.extendedIngredients?.map((item) => (  
//           <Stack
//             key={item.id}  
//             direction="row"
//             // className={styles.ingredients}
//             spacing={0}
//           height='auto' 
//           >
//             <Stack height='300px' p={2} width='250px' backgroundColor='transparent' direction="row" data-aos='zoom-in' >
//               <Card sx={{height:'100%',width:'100%', bgcolor:'#FFFFFF'}}>
//                 <CardMedia component='img' height='150px' image={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}  alt={item.name} />
//                 <CardContent>
//                   <Typography variant="h6" sx={{color:"#0D544D",textAlign:'center'}}>{item.name}</Typography>        
//                 </CardContent>
//                 <CardContent>
//                   <Typography variant="h6" sx={{color:"#0D544D",textAlign:'center'}}>{item.amount} {item.unit}</Typography>        
//                 </CardContent>
//               </Card>
//             </Stack>
//           </Stack>
//         ))}
//         </Stack>
        
//       </Stack>
//       <Stack backgroundColor="#FFFDF2" pb={4} data-aos='zoom-in'>
//         <Typography fontWeight={900} textAlign='center' pt={4} pb={4} variant="h3" sx={{ color: "black" }}>
//           Instructions
//         </Typography>
//         {food?.analyzedInstructions?.[0]?.steps?.map((step) => (  // ← Fix: Full optional chaining to prevent crashes
//           <Typography
//             key={step.number}  // ← Fix: Use stable number (1,2,3...) instead of text
//             variant="body1" ml={1}
//             sx={{ color: "black", textAlign: "left" }}
//           >
//             {step.number}. {step.step} 
//           </Typography>
//         )) || <Typography>No instructions available.</Typography>}  
//       </Stack>
//     </Stack>
//   );
// }

// export default FoodDetails;


import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Paper,
  Chip,
  Button,
  Divider,
  CircularProgress,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import SpaRoundedIcon from "@mui/icons-material/SpaRounded";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
import FormatListNumberedRoundedIcon from "@mui/icons-material/FormatListNumberedRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { RecipeContext } from "./RecipeProvider";
import Aos from "aos";
import "aos/dist/aos.css";

function FoodDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { foodId } = useContext(RecipeContext) || {};
  
  // Use URL param ID first, fallback to context ID
  const activeRecipeId = id || foodId;

  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY || "ef2f4f2acde44ca2a3d7c6f98336cb31";
  const URL = `https://api.spoonacular.com/recipes/${activeRecipeId}/information`;

  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    if (!activeRecipeId) {
      setIsLoading(false);
      return;
    }

    async function fetchFood() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        if (!res.ok) throw new Error("Could not retrieve recipe information");
        const data = await res.json();
        setFood(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message || "Failed to load recipe details");
      } finally {
        setIsLoading(false);
      }
    }

    fetchFood();
  }, [activeRecipeId]);

  // Loading Screen
  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#faf7f2",
          gap: 2,
        }}
      >
        <CircularProgress size={48} sx={{ color: "#ea580c" }} />
        <Typography variant="body1" sx={{ color: "#64748b", fontWeight: 600 }}>
          Gathering recipe secrets & ingredients...
        </Typography>
      </Box>
    );
  }

  // Error / Missing ID Screen
  if (error || !food?.title) {
    return (
      <Box sx={{ minHeight: "70vh", bgcolor: "#faf7f2", py: 12, textAlign: "center" }}>
        <Container maxWidth="sm">
          <Typography variant="h4" fontWeight={900} color="#0f172a" gutterBottom>
            Recipe Not Found
          </Typography>
          <Typography variant="body1" color="#64748b" mb={4}>
            We couldn’t find the details for this dish. Please return to the catalogue and select another recipe.
          </Typography>
          <Button
            variant="contained"
            startIcon={<ArrowBackRoundedIcon />}
            onClick={() => navigate("/")}
            sx={{
              bgcolor: "#ea580c",
              borderRadius: 3,
              px: 3,
              py: 1.2,
              textTransform: "none",
              fontWeight: 700,
              "&:hover": { bgcolor: "#c2410c" },
            }}
          >
            Back to Collection
          </Button>
        </Container>
      </Box>
    );
  }

  // Calculate formatted price (Spoonacular returns cents per serving)
  const formattedPrice = food.pricePerServing
    ? (food.pricePerServing / 100).toFixed(2)
    : null;

  return (
    <Box sx={{ bgcolor: "#faf7f2", color: "#1e293b", minHeight: "100vh", pb: 12 }}>
      
      {/* 1. TOP NAVIGATION / RETURN BAR */}
      <Box sx={{ bgcolor: "#ffffff", borderBottom: "1px solid #f1e9dd", py: 2 }}>
        <Container maxWidth="lg">
          <Button
            startIcon={<ArrowBackRoundedIcon />}
            onClick={() => navigate(-1)}
            sx={{
              color: "#64748b",
              textTransform: "none",
              fontWeight: 700,
              fontSize: "0.9rem",
              borderRadius: 2.5,
              "&:hover": { color: "#ea580c", bgcolor: "#fff7ed" },
            }}
          >
            Back to Recipes
          </Button>
        </Container>
      </Box>

      {/* 2. HERO OVERVIEW SECTION */}
      <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          
          {/* Recipe Imagery */}
          <Grid item xs={12} md={6} data-aos="fade-right">
            <Box
              sx={{
                position: "relative",
                borderRadius: 6,
                overflow: "hidden",
                boxShadow: "0 20px 40px -15px rgba(15, 23, 42, 0.15)",
                border: "1px solid #f1e9dd",
                bgcolor: "#ffffff",
              }}
            >
              <Box
                component="img"
                src={food.image}
                alt={food.title}
                sx={{
                  width: "100%",
                  height: { xs: 300, sm: 400, md: 440 },
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          </Grid>

          {/* Recipe Header & Metadata */}
          <Grid item xs={12} md={6} data-aos="fade-left">
            <Stack spacing={2.5}>
              
              {/* Category Pill */}
              <Box>
                <Chip
                  icon={<RestaurantMenuRoundedIcon sx={{ fontSize: "16px !important", color: "#ea580c !important" }} />}
                  label={food.dishTypes?.[0] || "Specialty Recipe"}
                  size="small"
                  sx={{
                    bgcolor: "#fff7ed",
                    color: "#c2410c",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontSize: "0.7rem",
                    border: "1px solid #fed7aa",
                  }}
                />
              </Box>

              {/* Title */}
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "2rem", sm: "2.6rem", md: "3rem" },
                  color: "#0f172a",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                {food.title}
              </Typography>

              {/* Quick Stat Badges */}
              <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap pt={1}>
                
                {/* Time */}
                {food.readyInMinutes && (
                  <Chip
                    icon={<AccessTimeRoundedIcon fontSize="small" sx={{ color: "#ea580c !important" }} />}
                    label={`${food.readyInMinutes} mins`}
                    sx={{
                      bgcolor: "#ffffff",
                      border: "1px solid #f1e9dd",
                      fontWeight: 700,
                      color: "#334155",
                      py: 2.2,
                      px: 0.5,
                      borderRadius: 3,
                    }}
                  />
                )}

                {/* Servings */}
                {food.servings && (
                  <Chip
                    icon={<PeopleOutlineRoundedIcon fontSize="small" sx={{ color: "#ea580c !important" }} />}
                    label={`${food.servings} Servings`}
                    sx={{
                      bgcolor: "#ffffff",
                      border: "1px solid #f1e9dd",
                      fontWeight: 700,
                      color: "#334155",
                      py: 2.2,
                      px: 0.5,
                      borderRadius: 3,
                    }}
                  />
                )}

                {/* Dietary Tag */}
                <Chip
                  icon={<SpaRoundedIcon fontSize="small" sx={{ color: food.vegetarian ? "#16a34a !important" : "#64748b !important" }} />}
                  label={food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}
                  sx={{
                    bgcolor: food.vegetarian ? "#f0fdf4" : "#ffffff",
                    border: `1px solid ${food.vegetarian ? "#bbf7d0" : "#f1e9dd"}`,
                    color: food.vegetarian ? "#166534" : "#334155",
                    fontWeight: 700,
                    py: 2.2,
                    px: 0.5,
                    borderRadius: 3,
                  }}
                />

                {/* Price */}
                {formattedPrice && (
                  <Chip
                    icon={<AttachMoneyRoundedIcon fontSize="small" sx={{ color: "#ea580c !important" }} />}
                    label={`$${formattedPrice} / serving`}
                    sx={{
                      bgcolor: "#ffffff",
                      border: "1px solid #f1e9dd",
                      fontWeight: 700,
                      color: "#334155",
                      py: 2.2,
                      px: 0.5,
                      borderRadius: 3,
                    }}
                  />
                )}
              </Stack>

              {/* Recipe Summary (Stripped of excessive HTML tags for clean display) */}
              {food.summary && (
                <Typography
                  variant="body2"
                  sx={{
                    color: "#64748b",
                    lineHeight: 1.8,
                    fontSize: "0.95rem",
                    pt: 1,
                  }}
                  dangerouslySetInnerHTML={{
                    __html: food.summary.replace(/<a\b[^>]*>(.*?)<\/a>/gi, "$1").slice(0, 320) + "...",
                  }}
                />
              )}

            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* 3. INGREDIENTS SECTION */}
      <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 10 } }}>
        <Paper
          elevation={0}
          data-aos="fade-up"
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 5,
            bgcolor: "#ffffff",
            border: "1px solid #f1e9dd",
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center" mb={4}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: 2.5,
                bgcolor: "#fff7ed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ea580c",
              }}
            >
              <RestaurantMenuRoundedIcon />
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 900, color: "#0f172a" }}>
                Required Ingredients
              </Typography>
              <Typography variant="caption" sx={{ color: "#64748b" }}>
                {food.extendedIngredients?.length || 0} items measured and prepped
              </Typography>
            </Box>
          </Stack>

          {/* Ingredient Items Grid */}
          <Grid container spacing={2.5}>
            {food?.extendedIngredients?.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={`${item.id}-${index}`}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    borderRadius: 3.5,
                    bgcolor: "#faf7f2",
                    border: "1px solid #f1e9dd",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "#ffffff",
                      borderColor: "#fed7aa",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.04)",
                    },
                  }}
                >
                  {/* Thumbnail */}
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2.5,
                      bgcolor: "#ffffff",
                      border: "1px solid #e2e8f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      p: 0.5,
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
                      alt={item.name}
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </Box>

                  {/* Info */}
                  <Box sx={{ minWidth: 0, flexGrow: 1 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 700,
                        color: "#0f172a",
                        textTransform: "capitalize",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#ea580c",
                        fontWeight: 800,
                        fontSize: "0.8rem",
                      }}
                    >
                      {item.amount} {item.unit}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>

      {/* 4. PREPARATION INSTRUCTIONS SECTION */}
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 8 } }}>
        <Paper
          elevation={0}
          data-aos="fade-up"
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 5,
            bgcolor: "#ffffff",
            border: "1px solid #f1e9dd",
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center" mb={4}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: 2.5,
                bgcolor: "#fff7ed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ea580c",
              }}
            >
              <FormatListNumberedRoundedIcon />
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 900, color: "#0f172a" }}>
                Step-by-Step Instructions
              </Typography>
              <Typography variant="caption" sx={{ color: "#64748b" }}>
                Follow in order for optimal flavor and texture
              </Typography>
            </Box>
          </Stack>

          {/* Steps List */}
          {food?.analyzedInstructions?.[0]?.steps?.length > 0 ? (
            <Stack spacing={3}>
              {food.analyzedInstructions[0].steps.map((step) => (
                <Paper
                  key={step.number}
                  elevation={0}
                  sx={{
                    p: { xs: 2.5, sm: 3 },
                    borderRadius: 4,
                    bgcolor: "#faf7f2",
                    border: "1px solid #f1e9dd",
                    display: "flex",
                    gap: { xs: 2, sm: 3 },
                    alignItems: "flex-start",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "#ffffff",
                      borderColor: "#fed7aa",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.03)",
                    },
                  }}
                >
                  {/* Step Badge */}
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: 2.5,
                      bgcolor: "#ea580c",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                      fontSize: "0.95rem",
                      flexShrink: 0,
                    }}
                  >
                    {step.number}
                  </Box>

                  {/* Step Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#334155",
                      lineHeight: 1.8,
                      fontSize: { xs: "0.95rem", sm: "1.025rem" },
                      pt: 0.5,
                    }}
                  >
                    {step.step}
                  </Typography>
                </Paper>
              ))}
            </Stack>
          ) : (
            <Box sx={{ textAlign: "center", py: 6, bgcolor: "#faf7f2", borderRadius: 4 }}>
              <CheckCircleOutlineRoundedIcon sx={{ fontSize: 40, color: "#94a3b8", mb: 1 }} />
              <Typography variant="body1" color="#64748b">
                No detailed preparation steps were provided for this dish.
              </Typography>
            </Box>
          )}
        </Paper>
      </Container>

    </Box>
  );
}

export default FoodDetails;