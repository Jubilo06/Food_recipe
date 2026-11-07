import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Stack,
  IconButton,
  Menu,
  MenuItem,
  Container,
  Button,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LocalPizzaRoundedIcon from "@mui/icons-material/LocalPizzaRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

const NAV_ITEMS = [
  { label: "Home", targetId: "home", icon: <HomeRoundedIcon fontSize="small" /> },
  { label: "About Us", targetId: "about", icon: <InfoRoundedIcon fontSize="small" /> },
  { label: "Contact", targetId: "contact", icon: <EmailRoundedIcon fontSize="small" /> },
];

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Smooth scroll handler with sticky nav offset
  const scrollToSection = (targetId) => {
    handleMenuClose();

    // If currently on a different page (e.g. /recipe/123), navigate home first
    if (location.pathname !== "/") {
      navigate(`/#${targetId}`);
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navOffset = 76; // Height of the sticky navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Handle scrolling when arriving from an external route with a hash (e.g., /#about)
  useEffect(() => {
    if (location.pathname === "/" && window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        setTimeout(() => {
          const navOffset = 76;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 150);
      }
    }
  }, [location]);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(15, 23, 42, 0.85)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        color: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, sm: 72 } }}>
          
          {/* BRAND LOGO */}
          <Box
            onClick={() => scrollToSection("home")}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              cursor: "pointer",
              flexGrow: 1,
              userSelect: "none",
            }}
          >
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: 2.5,
                bgcolor: "#ea580c",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                boxShadow: "0 4px 12px rgba(234, 88, 12, 0.4)",
              }}
            >
              <LocalPizzaRoundedIcon sx={{ fontSize: 22 }} />
            </Box>

            <Box>
              <Typography
                variant="h6"
                component="span"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "1.15rem", sm: "1.3rem" },
                  letterSpacing: "-0.02em",
                  color: "#ffffff",
                  display: "block",
                  lineHeight: 1.1,
                }}
              >
                CIROC{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#fb923c",
                  }}
                >
                  KITCHEN
                </Box>
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  color: "rgba(255, 255, 255, 0.5)",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Recipe Directory
              </Typography>
            </Box>
          </Box>

          {/* DESKTOP NAVIGATION */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            <Stack direction="row" spacing={1} alignItems="center">
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => scrollToSection(item.targetId)}
                  sx={{
                    px: 2.5,
                    py: 1,
                    borderRadius: 3,
                    textTransform: "none",
                    fontSize: "0.925rem",
                    fontWeight: 700,
                    color: "rgba(255, 255, 255, 0.85)",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "#fb923c",
                      bgcolor: "rgba(255, 255, 255, 0.08)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
          </Box>

          {/* MOBILE MENU TOGGLE */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="medium"
              aria-label="open mobile navigation"
              onClick={handleMenuOpen}
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.06)",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: 2.5,
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.12)" },
              }}
            >
              {isMenuOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
            </IconButton>

            {/* MOBILE DROPDOWN MENU */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={isMenuOpen}
              onClose={handleMenuClose}
              sx={{
                "& .MuiPaper-root": {
                  mt: 1.5,
                  minWidth: 200,
                  bgcolor: "#0f172a",
                  color: "#ffffff",
                  borderRadius: 4,
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.5)",
                  p: 1,
                },
              }}
            >
              {NAV_ITEMS.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={() => scrollToSection(item.targetId)}
                  sx={{
                    py: 1.25,
                    px: 2,
                    my: 0.5,
                    borderRadius: 2.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#cbd5e1",
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.08)",
                      color: "#fb923c",
                    },
                  }}
                >
                  {item.icon}
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;