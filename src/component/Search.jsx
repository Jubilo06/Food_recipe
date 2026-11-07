// import {useEffect, useState, useContext } from "react";
// import { TextField, Stack, IconButton, Icon, Typography } from "@mui/material";
// import SearchIcon from '@mui/icons-material/Search';
// import styles from "./search.module.css"
// import { RecipeContext } from "./RecipeProvider";
// import Nav from "./Nav";
// import bg from '../assets/bg.webp'
// import Aos from 'aos'
// import 'aos/dist/aos.css'

// function Search(){
//     const {foodData, setFoodData}=useContext(RecipeContext)
//     const[query, setQuery]=useState("");
//     const URL=`https://api.spoonacular.com/recipes/complexSearch?`;
//     const API_KEY=import.meta.env.VITE_API_KEY;
//     useEffect(()=>{
//         async function FetchFood(){
//             const res= await fetch(`${URL}query=${query}&apiKey=${API_KEY}`);
//             const data=await res.json();
//             console.log(data.results);
//             setFoodData(data.results);
//         }
//         FetchFood();
//     },[query])
//     useEffect(()=>{
//       Aos.init({duration:2000})
//     },[])
//     return(
//         <Stack spacing={{xs:8, sm:10}} direction='column' height="500px" width="100%" className={styles.searchstack}
//         sx={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bg})`, backgroundRepeat:"no-repeat", backgroundSize: 'cover',
//                     backgroundPosition: 'center'}}>
//             <Stack><Nav /></Stack>
//             <Stack data-aos='zoom-in'>
//                 <Typography color="white" textAlign='center' fontWeight={900} variant='h2'>Best Recipe Plug!</Typography>
//                 <Typography color="white" textAlign='center' fontWeight={900} variant='h4'>Get all kinds of recipe</Typography>
//             </Stack>
//             <Stack pt={{xs:0.5, sm:20}}>
//                 <input placeholder="Search for recipes..." className={styles.input} name="text" value={query}
//                     onChange={(e)=> setQuery(e.target.value)}
//                 type="text"></input>
//             </Stack>
            
            

            
//         </Stack>
//     )
// }
// export default Search;

import { useEffect, useState, useContext } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Paper,
  InputBase,
  IconButton,
  Chip,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { RecipeContext } from "./RecipeProvider";
import Nav from "./Nav";
import bg from "../assets/bg.webp";
import Aos from "aos";
import "aos/dist/aos.css";

const QUICK_TAGS = ["Pasta", "Chicken", "Vegan", "Dessert", "Salad", "Tacos"];

function Search() {
  const { setFoodData } = useContext(RecipeContext);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const URL = `https://api.spoonacular.com/recipes/complexSearch?`;
  const API_KEY = import.meta.env.VITE_API_KEY;

  // Initialize AOS animation
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  // Fetch recipes with 500ms debounce to protect your API quota

useEffect(() => {
  let isCancelled = false;
  const hasQuery = Boolean(query.trim());

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const endpoint = hasQuery
        ? `${URL}query=${encodeURIComponent(query)}&number=12&apiKey=${API_KEY}`
        : `${URL}sort=popularity&number=12&apiKey=${API_KEY}`; // ✅ preload on mount

      const res = await fetch(endpoint);
      if (!res.ok) throw new Error("Recipe request failed");
      const data = await res.json();

      if (!isCancelled) setFoodData(data.results || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      if (!isCancelled) setFoodData([]);
    } finally {
      if (!isCancelled) setLoading(false);
    }
  };

  // No debounce for the initial preload; 500ms debounce while typing
  const delay = hasQuery ? 500 : 0;
  const timer = setTimeout(fetchRecipes, delay);

  return () => {
    isCancelled = true;
    clearTimeout(timer);
  };
}, [query]);

  const handleClear = () => {
    setQuery("");
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "580px", md: "640px" },
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.6) 40%, rgba(15, 23, 42, 0.85) 100%), url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top Navigation */}
      <Box sx={{ width: "100%", zIndex: 10 }}>
        <Nav />
      </Box>

      {/* Main Hero & Search Content */}
      <Container
        maxWidth="md"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          py: 6,
          px: 3,
        }}
      >
        <Stack spacing={3} alignItems="center" width="100%" data-aos="fade-up">
          
          {/* Subtle Category Pill Tag */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 0.6,
              borderRadius: "50px",
              bgcolor: "rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <RestaurantMenuIcon sx={{ color: "#fbbf24", fontSize: 16 }} />
            <Typography
              variant="caption"
              sx={{
                color: "#ffffff",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Over 5,000+ Curated Dishes
            </Typography>
          </Box>

          {/* Heading Section */}
          <Box>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: "#ffffff",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                fontSize: { xs: "2.4rem", sm: "3.5rem", md: "4.2rem" },
                lineHeight: 1.15,
                textShadow: "0 4px 20px rgba(0,0,0,0.4)",
              }}
            >
              The Best Recipe{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #fbbf24 0%, #f97316 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Plug.
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: { xs: "0.95rem", sm: "1.15rem" },
                maxWidth: "540px",
                mx: "auto",
                mt: 1.5,
                fontWeight: 400,
              }}
            >
              Find chef-level inspirations, quick weekday meals, and step-by-step cooking guides instantly.
            </Typography>
          </Box>

          {/* Elevated Material UI Search Bar */}
          <Paper
            elevation={4}
            sx={{
              p: "4px 8px 4px 16px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              maxWidth: 620,
              borderRadius: "50px",
              bgcolor: "rgba(255, 255, 255, 0.96)",
              backdropFilter: "blur(12px)",
              border: "2px solid rgba(255, 255, 255, 0.8)",
              boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
              transition: "all 0.3s ease",
              "&:hover, &:focus-within": {
                bgcolor: "#ffffff",
                transform: "translateY(-2px)",
                boxShadow: "0 15px 35px -5px rgba(0, 0, 0, 0.45)",
                borderColor: "#f97316",
              },
            }}
          >
            <SearchIcon sx={{ color: "action.active", mr: 1.5, fontSize: 26 }} />

            <InputBase
              sx={{
                flex: 1,
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                fontWeight: 500,
                color: "#1e293b",
                "& input::placeholder": {
                  color: "#94a3b8",
                  opacity: 1,
                },
              }}
              placeholder="Search recipes, ingredients, cuisines..."
              inputProps={{ "aria-label": "search recipes" }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            {/* Clear Button / Loading Spinner */}
            {loading ? (
              <CircularProgress size={22} sx={{ color: "#f97316", mx: 1 }} />
            ) : (
              query && (
                <IconButton
                  size="small"
                  aria-label="clear query"
                  onClick={handleClear}
                  sx={{ color: "#94a3b8", "&:hover": { color: "#475569" } }}
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              )
            )}

            {/* Distinct Action Button Inside Search Field */}
            <Box
              sx={{
                bgcolor: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                backgroundColor: "#f97316",
                borderRadius: "50px",
                color: "#fff",
                px: { xs: 2, sm: 3 },
                py: 1,
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                cursor: "pointer",
                userSelect: "none",
                transition: "background-color 0.2s ease",
                "&:hover": {
                  backgroundColor: "#ea580c",
                },
              }}
            >
              Find
            </Box>
          </Paper>

          {/* Quick Search Tag Suggestions */}
          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            justifyContent="center"
            useFlexGap
            sx={{ pt: 1 }}
          >
            <Stack direction="row" alignItems="center" spacing={0.5} mr={0.5}>
              <LocalFireDepartmentIcon sx={{ color: "#f97316", fontSize: 18 }} />
              <Typography
                variant="caption"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  letterSpacing: "0.05em",
                }}
              >
                Trending:
              </Typography>
            </Stack>

            {QUICK_TAGS.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                clickable
                onClick={() => setQuery(tag)}
                sx={{
                  bgcolor: query.toLowerCase() === tag.toLowerCase() 
                    ? "#f97316" 
                    : "rgba(255, 255, 255, 0.15)",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.3)",
                    borderColor: "rgba(255, 255, 255, 0.4)",
                  },
                }}
              />
            ))}
          </Stack>

        </Stack>
      </Container>
    </Box>
  );
}

export default Search;