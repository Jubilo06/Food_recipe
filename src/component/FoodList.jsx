// import { useContext, useEffect } from "react";
// import { RecipeContext } from "./RecipeProvider";
// import { useNavigate } from "react-router-dom";
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   CardActions,
//   CardMedia,
//   Button,
//   Stack,
//   Chip,
// } from "@mui/material";
// import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
// import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
// import SearchOffRoundedIcon from "@mui/icons-material/SearchOffRounded";
// import Aos from "aos";
// import "aos/dist/aos.css";

// function FoodList() {
//   const navigate = useNavigate();
//   const { foodData, setFoodId } = useContext(RecipeContext);

//   const handleClick = (id) => {
//     setFoodId(id);
//     navigate(`/recipe/${id}`);
//   };

//   useEffect(() => {
//     Aos.init({ duration: 800, once: true });
//   }, []);

//   return (
//     <Box
//       component="section"
//       sx={{
//         width: "100%",
//         bgcolor: "#f8fafc",
//         py: { xs: 8, md: 12 },
//         minHeight: "60vh",
//       }}
//     >
//       <Container maxWidth="xl">
//         {/* Section Header */}
//         <Stack spacing={1.5} alignItems="center" textAlign="center" mb={{ xs: 6, md: 8 }} data-aos="fade-up">
//           <Chip
//             icon={<RestaurantMenuIcon sx={{ fontSize: "16px !important", color: "#ea580c !important" }} />}
//             label="CURATED COLLECTION"
//             size="small"
//             sx={{
//               bgcolor: "#fff7ed",
//               color: "#c2410c",
//               fontWeight: 800,
//               letterSpacing: "0.1em",
//               fontSize: "0.7rem",
//               border: "1px solid #ffedd5",
//               px: 1,
//             }}
//           />

//           <Typography
//             variant="h3"
//             component="h2"
//             sx={{
//               fontWeight: 900,
//               color: "#0f172a",
//               fontSize: { xs: "2rem", sm: "2.6rem", md: "3rem" },
//               letterSpacing: "-0.02em",
//             }}
//           >
//             Signature Dishes
//           </Typography>

//           <Typography
//             variant="body1"
//             sx={{
//               color: "#64748b",
//               maxWidth: "600px",
//               fontSize: { xs: "0.95rem", sm: "1.05rem" },
//               lineHeight: 1.6,
//             }}
//           >
//             Discover your next culinary adventure. Browse our handpicked dishes or select a plate to view detailed ingredients and step-by-step instructions.
//           </Typography>

//           <Box
//             sx={{
//               height: 4,
//               width: 56,
//               bgcolor: "#f97316",
//               borderRadius: 2,
//               mt: 1,
//             }}
//           />
//         </Stack>

//         {/* Empty State when no recipes are found */}
//         {(!foodData || foodData.length === 0) ? (
//           <Box
//             sx={{
//               maxWidth: 480,
//               mx: "auto",
//               textAlign: "center",
//               py: 8,
//               px: 3,
//               bgcolor: "#ffffff",
//               borderRadius: 6,
//               border: "1px dashed #cbd5e1",
//             }}
//             data-aos="fade-in"
//           >
//             <Box
//               sx={{
//                 width: 64,
//                 height: 64,
//                 borderRadius: "50%",
//                 bgcolor: "#fff7ed",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 mx: "auto",
//                 mb: 2,
//               }}
//             >
//               <SearchOffRoundedIcon sx={{ fontSize: 32, color: "#f97316" }} />
//             </Box>
//             <Typography variant="h6" fontWeight={800} color="#0f172a" gutterBottom>
//               No Recipes Found
//             </Typography>
//             <Typography variant="body2" color="#64748b">
//               We couldn't find any dishes matching that query. Try searching for something else like "pasta", "chicken", or "healthy" above.
//             </Typography>
//           </Box>
//         ) : (
//           /* Responsive Recipe Grid */
//           <Grid container spacing={{ xs: 2.5, sm: 3, md: 4 }}>
//             {foodData.map((food, index) => (
//               <Grid item xs={12} sm={6} md={4} lg={3} key={food.id}>
//                 <Card
//                   data-aos="fade-up"
//                   data-aos-delay={(index % 4) * 100}
//                   onClick={() => handleClick(food.id)}
//                   sx={{
//                     height: "100%",
//                     display: "flex",
//                     flexDirection: "column",
//                     borderRadius: 5,
//                     bgcolor: "#ffffff",
//                     border: "1px solid #f1f5f9",
//                     boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
//                     overflow: "hidden",
//                     cursor: "pointer",
//                     transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
//                     "&:hover": {
//                       transform: "translateY(-8px)",
//                       boxShadow: "0 20px 30px -10px rgba(15, 23, 42, 0.12)",
//                       borderColor: "#fed7aa",
//                       "& .food-card-image": {
//                         transform: "scale(1.08)",
//                       },
//                       "& .view-recipe-btn": {
//                         bgcolor: "#f97316",
//                         color: "#ffffff",
//                         borderColor: "#f97316",
//                       },
//                     },
//                   }}
//                 >
//                   {/* Image Container with Zoom effect */}
//                   <Box sx={{ position: "relative", overflow: "hidden", height: 220, bgcolor: "#f1f5f9" }}>
//                     <CardMedia
//                       component="img"
//                       image={food.image}
//                       alt={food.title}
//                       className="food-card-image"
//                       sx={{
//                         height: "100%",
//                         width: "100%",
//                         objectFit: "cover",
//                         transition: "transform 0.5s ease",
//                       }}
//                     />
//                   </Box>

//                   {/* Recipe Details */}
//                   <CardContent sx={{ flexGrow: 1, p: 3, pb: 1 }}>
//                     <Typography
//                       variant="h6"
//                       component="h3"
//                       sx={{
//                         fontWeight: 800,
//                         fontSize: "1.05rem",
//                         color: "#0f172a",
//                         lineHeight: 1.4,
//                         overflow: "hidden",
//                         textOverflow: "ellipsis",
//                         display: "-webkit-box",
//                         WebkitLineClamp: 2,
//                         WebkitBoxOrient: "vertical",
//                         minHeight: "2.8em", // Uniform title heights across cards
//                       }}
//                     >
//                       {food.title}
//                     </Typography>
//                   </CardContent>

//                   {/* Action Button */}
//                   <CardActions sx={{ p: 3, pt: 0 }}>
//                     <Button
//                       fullWidth
//                       variant="outlined"
//                       endIcon={<ArrowForwardRoundedIcon />}
//                       className="view-recipe-btn"
//                       sx={{
//                         borderRadius: 3,
//                         py: 1.2,
//                         textTransform: "none",
//                         fontWeight: 700,
//                         fontSize: "0.875rem",
//                         borderColor: "#e2e8f0",
//                         color: "#334155",
//                         bgcolor: "#f8fafc",
//                         transition: "all 0.25s ease",
//                         "&:hover": {
//                           borderColor: "#ea580c",
//                           bgcolor: "#ea580c",
//                           color: "#ffffff",
//                         },
//                       }}
//                     >
//                       View Recipe
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         )}
//       </Container>
//     </Box>
//   );
// }

// export default FoodList;

import { useContext, useEffect } from "react";
import { RecipeContext } from "./RecipeProvider";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Stack,
  Chip,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import SearchOffRoundedIcon from "@mui/icons-material/SearchOffRounded";
import Aos from "aos";
import "aos/dist/aos.css";

function FoodList() {
  const navigate = useNavigate();
  const { foodData, setFoodId } = useContext(RecipeContext);

  const handleClick = (id) => {
    setFoodId(id);
    navigate(`/recipe/${id}`);
  };

  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        bgcolor: "#f8fafc",
        py: { xs: 8, md: 12 },
        minHeight: "60vh",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Stack spacing={1.5} alignItems="center" textAlign="center" mb={{ xs: 6, md: 8 }} data-aos="fade-up">
          <Chip
            icon={<RestaurantMenuIcon sx={{ fontSize: "16px !important", color: "#ea580c !important" }} />}
            label="CURATED COLLECTION"
            size="small"
            sx={{
              bgcolor: "#fff7ed",
              color: "#c2410c",
              fontWeight: 800,
              letterSpacing: "0.1em",
              fontSize: "0.7rem",
              border: "1px solid #ffedd5",
              px: 1,
            }}
          />

          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 900,
              color: "#0f172a",
              fontSize: { xs: "2rem", sm: "2.6rem", md: "3rem" },
              letterSpacing: "-0.02em",
            }}
          >
            Signature Dishes
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#64748b",
              maxWidth: "600px",
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              lineHeight: 1.6,
            }}
          >
            Discover your next culinary adventure. Browse our handpicked dishes or select a plate to view detailed ingredients and step-by-step instructions.
          </Typography>

          <Box
            sx={{
              height: 4,
              width: 56,
              bgcolor: "#f97316",
              borderRadius: 2,
              mt: 1,
            }}
          />
        </Stack>

        {/* Empty State when no recipes are found */}
        {(!foodData || foodData.length === 0) ? (
          <Box
            sx={{
              maxWidth: 480,
              mx: "auto",
              textAlign: "center",
              py: 8,
              px: 3,
              bgcolor: "#ffffff",
              borderRadius: 6,
              border: "1px dashed #cbd5e1",
            }}
            data-aos="fade-in"
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                bgcolor: "#fff7ed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2,
              }}
            >
              <SearchOffRoundedIcon sx={{ fontSize: 32, color: "#f97316" }} />
            </Box>
            <Typography variant="h6" fontWeight={800} color="#0f172a" gutterBottom>
              No Recipes Found
            </Typography>
            <Typography variant="body2" color="#64748b">
              We couldn't find any dishes matching that query. Try searching for something else like "pasta", "chicken", or "healthy" above.
            </Typography>
          </Box>
        ) : (
          /* Uniform Recipe Grid */
          <Grid container spacing={{ xs: 2.5, sm: 3, md: 4 }} alignItems="stretch">
            {foodData.map((food, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                key={food.id}
                sx={{
                  display: "flex",
                  width: "100%",
                  minWidth: 0, // Prevents flex child blowout from long text
                }}
              >
                <Card
                  data-aos="fade-up"
                  data-aos-delay={(index % 4) * 100}
                  onClick={() => handleClick(food.id)}
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: 5,
                    bgcolor: "#ffffff",
                    border: "1px solid #f1f5f9",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
                    overflow: "hidden",
                    cursor: "pointer",
                    boxSizing: "border-box",
                    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 30px -10px rgba(15, 23, 42, 0.12)",
                      borderColor: "#fed7aa",
                      "& .food-card-image": {
                        transform: "scale(1.08)",
                      },
                      "& .view-recipe-btn": {
                        bgcolor: "#f97316",
                        color: "#ffffff",
                        borderColor: "#f97316",
                      },
                    },
                  }}
                >
                  {/* Image Container with Fixed Aspect Ratio */}
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      height: 220,
                      width: "100%",
                      bgcolor: "#f1f5f9",
                      flexShrink: 0,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={food.image}
                      alt={food.title}
                      className="food-card-image"
                      sx={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.5s ease",
                      }}
                    />
                  </Box>

                  {/* Recipe Details */}
                  <CardContent sx={{ flexGrow: 1, p: 3, pb: 1, width: "100%", boxSizing: "border-box" }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 800,
                        fontSize: "1.05rem",
                        color: "#0f172a",
                        lineHeight: 1.4,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        minHeight: "2.8em",
                        wordBreak: "break-word",
                      }}
                    >
                      {food.title}
                    </Typography>
                  </CardContent>

                  {/* Action Button pinned to bottom */}
                  <CardActions sx={{ p: 3, pt: 0, width: "100%", boxSizing: "border-box" }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      endIcon={<ArrowForwardRoundedIcon />}
                      className="view-recipe-btn"
                      sx={{
                        borderRadius: 3,
                        py: 1.2,
                        textTransform: "none",
                        fontWeight: 700,
                        fontSize: "0.875rem",
                        borderColor: "#e2e8f0",
                        color: "#334155",
                        bgcolor: "#f8fafc",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          borderColor: "#ea580c",
                          bgcolor: "#ea580c",
                          color: "#ffffff",
                        },
                      }}
                    >
                      View Recipe
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default FoodList;