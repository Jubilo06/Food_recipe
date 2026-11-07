import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Paper,
  Chip,
  Button,
} from "@mui/material";
import LocalPizzaRoundedIcon from "@mui/icons-material/LocalPizzaRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

import bg1 from "../assets/bg1.webp";
import bg2 from "../assets/bg2.webp";
import Aos from "aos";
import "aos/dist/aos.css";

const FEATURES = [
  {
    icon: <LocalPizzaRoundedIcon sx={{ fontSize: 28, color: "#ea580c" }} />,
    title: "Diverse Recipes",
    description:
      "From traditional Margherita and spicy Pepperoni to adventurous artisan creations like Rustic Grilled Peaches, Paneer & Fig, or Plantain Pizza.",
  },
  {
    icon: <MenuBookRoundedIcon sx={{ fontSize: 28, color: "#ea580c" }} />,
    title: "Step-by-Step Guides",
    description:
      "Clear, foolproof instructions and fermentation tricks to help home cooks master scratch-made crusts and blistered crusts every single time.",
  },
  {
    icon: <LightbulbRoundedIcon sx={{ fontSize: 28, color: "#ea580c" }} />,
    title: "Culinary Inspiration",
    description:
      "Beyond standard pies: learn sauce layering, custom cheese blends, and alternative bites like Pepperoni Pizza Muffins and Zucchini Boats.",
  },
  {
    icon: <PeopleRoundedIcon sx={{ fontSize: 28, color: "#ea580c" }} />,
    title: "Passionate Community",
    description:
      "A collective of backyard pizzaiolos and enthusiastic home bakers sharing experiments, dough recipes, and a mutual obsession with pizza.",
  },
];

function AboutUs() {
  useEffect(() => {
    Aos.init({ duration: 900, once: true });
  }, []);

  return (
    <Box id='about' sx={{ bgcolor: "#faf7f2", color: "#1e293b", overflowX: "hidden" }}>
      
      {/* 1. HERO SECTION */}
      <Box
        sx={{
          pt: { xs: 8, md: 12 },
          pb: { xs: 6, md: 10 },
          textAlign: "center",
          bgcolor: "#ffffff",
          borderBottom: "1px solid #f1e9dd",
        }}
      >
        <Container maxWidth="md" data-aos="fade-up">
          <Chip
            icon={<LocalPizzaRoundedIcon sx={{ fontSize: "16px !important", color: "#ea580c !important" }} />}
            label="OUR STORY & PASSION"
            size="small"
            sx={{
              bgcolor: "#fff7ed",
              color: "#c2410c",
              fontWeight: 800,
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              border: "1px solid #fed7aa",
              mb: 3,
              px: 1,
            }}
          />

          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.3rem", sm: "3.4rem", md: "4rem" },
              letterSpacing: "-0.03em",
              color: "#0f172a",
              lineHeight: 1.15,
              mb: 3,
            }}
          >
            A Passion Baked into{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #ea580c 0%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Every Recipe.
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", sm: "1.2rem" },
              color: "#64748b",
              lineHeight: 1.8,
              maxWidth: 720,
              mx: "auto",
            }}
          >
            Welcome to <strong>Pizza Paradise</strong> — where pizza isn’t just comfort food; it’s an art form, a celebration, and a blank canvas for culinary curiosity.
          </Typography>
        </Container>
      </Box>

      {/* 2. STORY ROW 1: THE GENESIS */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          
          {/* Image */}
          <Grid item xs={12} md={6} data-aos="fade-right">
            <Box
              sx={{
                position: "relative",
                height: { xs: 320, sm: 420, md: 480 },
                borderRadius: 6,
                overflow: "hidden",
                boxShadow: "0 20px 40px -15px rgba(15, 23, 42, 0.15)",
                backgroundImage: `url(${bg1})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Floating Pill Badge */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 24,
                  left: 24,
                  bgcolor: "rgba(15, 23, 42, 0.85)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 4,
                  p: 2,
                  px: 3,
                  color: "#fff",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                <Typography variant="caption" sx={{ textTransform: "uppercase", letterSpacing: "0.15em", color: "#fb923c", fontWeight: 700 }}>
                  Crafted by Hand
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 800 }}>
                  Perfected over 1,000+ dough tests
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Text Content */}
          <Grid item xs={12} md={6} data-aos="fade-left">
            <Stack spacing={3}>
              <Typography
                variant="overline"
                sx={{ color: "#ea580c", fontWeight: 800, letterSpacing: "0.2em", fontSize: "0.8rem" }}
              >
                HOW IT ALL STARTED
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "1.8rem", sm: "2.4rem" },
                  color: "#0f172a",
                  lineHeight: 1.25,
                }}
              >
                Born from an obsession with the perfect crust.
              </Typography>

              <Typography variant="body1" sx={{ color: "#475569", lineHeight: 1.8, fontSize: "1.05rem" }}>
                It all started with a simple idea: to share the sheer joy and infinite versatility of pizza with cooks of every level. We noticed that while there were countless ways to make pizza, there wasn’t a centralized home for creative, accessible, and foolproof recipes.
              </Typography>

              <Typography variant="body1" sx={{ color: "#475569", lineHeight: 1.8, fontSize: "1.05rem" }}>
                Our team of passionate home bakers and pizza purists set out on a mission: gather, test, and elevate a diverse catalogue of pies. From mastering 72-hour cold fermented doughs to transforming fresh garden produce into dinner sensations, we make gourmet pizza approachable.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* 3. "WHAT YOU'LL FIND HERE" FEATURE GRID */}
      <Box sx={{ bgcolor: "#ffffff", py: { xs: 8, md: 12 }, borderY: "1px solid #f1e9dd" }}>
        <Container maxWidth="lg">
          
          <Stack spacing={2} textAlign="center" alignItems="center" mb={{ xs: 6, md: 8 }} data-aos="fade-up">
            <Typography variant="overline" sx={{ color: "#ea580c", fontWeight: 800, letterSpacing: "0.2em" }}>
              THE PIZZA PARADISE STANDARD
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 900, fontSize: { xs: "2rem", md: "2.8rem" }, color: "#0f172a" }}>
              What You’ll Discover Inside
            </Typography>
            <Typography variant="body1" sx={{ color: "#64748b", maxWidth: 600 }}>
              Everything you need to turn your home oven or outdoor stone into a five-star pizzeria.
            </Typography>
          </Stack>

          <Grid container spacing={3.5}>
            {FEATURES.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={item.title}>
                <Paper
                  elevation={0}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  sx={{
                    p: 3.5,
                    height: "100%",
                    borderRadius: 5,
                    bgcolor: "#faf7f2",
                    border: "1px solid #f1e9dd",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      bgcolor: "#ffffff",
                      borderColor: "#fed7aa",
                      boxShadow: "0 15px 30px -10px rgba(234, 88, 12, 0.12)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: 3.5,
                      bgcolor: "#fff7ed",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                      border: "1px solid #ffedd5",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: "#0f172a", mb: 1.5, fontSize: "1.1rem" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#64748b", lineHeight: 1.7 }}>
                    {item.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. STORY ROW 2: EXPERIMENTATION & PASSION */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center" direction={{ xs: "column-reverse", md: "row" }}>
          
          {/* Text Content */}
          <Grid item xs={12} md={6} data-aos="fade-right">
            <Stack spacing={3}>
              <Typography
                variant="overline"
                sx={{ color: "#ea580c", fontWeight: 800, letterSpacing: "0.2em", fontSize: "0.8rem" }}
              >
                OUR CULINARY LAB
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "1.8rem", sm: "2.4rem" },
                  color: "#0f172a",
                  lineHeight: 1.25,
                }}
              >
                Experimenting with every dough, blend, and fire level.
              </Typography>

              <Typography variant="body1" sx={{ color: "#475569", lineHeight: 1.8, fontSize: "1.05rem" }}>
                We spend countless hours testing hydration levels, wild sourdough starters, San Marzano tomato blends, and artisanal cheeses. We want to ensure that every dispatch we publish is reliable, repeatable, and extraordinary.
              </Typography>

              <Typography variant="body1" sx={{ color: "#475569", lineHeight: 1.8, fontSize: "1.05rem" }}>
                Whether you're looking for an easy weeknight skillet pizza or looking to build a wood-fired sourdough masterpiece on the weekend, we give you the tools, timing, and confidence to succeed.
              </Typography>
            </Stack>
          </Grid>

          {/* Image */}
          <Grid item xs={12} md={6} data-aos="fade-left">
            <Box
              sx={{
                position: "relative",
                height: { xs: 320, sm: 420, md: 480 },
                borderRadius: 6,
                overflow: "hidden",
                boxShadow: "0 20px 40px -15px rgba(15, 23, 42, 0.15)",
                backgroundImage: `url(${bg2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* 5. CALL TO ACTION / OUTRO */}
      <Box sx={{ bgcolor: "#0f172a", color: "#ffffff", py: { xs: 8, md: 10 }, textAlign: "center" }}>
        <Container maxWidth="sm" data-aos="zoom-in">
          <FavoriteRoundedIcon sx={{ fontSize: 40, color: "#ea580c", mb: 2 }} />
          
          <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, fontSize: { xs: "1.8rem", sm: "2.4rem" } }}>
            Ready to Bake Something Incredible?
          </Typography>

          <Typography variant="body1" sx={{ color: "#94a3b8", mb: 4, lineHeight: 1.7 }}>
            Join our community of pizza enthusiasts today. Dive into our verified dispatches, fire up your oven, and bring the paradise home.
          </Typography>

          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              bgcolor: "#ea580c",
              color: "#ffffff",
              fontWeight: 800,
              textTransform: "none",
              px: 4,
              py: 1.6,
              borderRadius: 4,
              fontSize: "1rem",
              boxShadow: "0 10px 25px rgba(234, 88, 12, 0.4)",
              "&:hover": {
                bgcolor: "#c2410c",
              },
            }}
          >
            Explore Recipe Collection
          </Button>
        </Container>
      </Box>

    </Box>
  );
}

export default AboutUs;