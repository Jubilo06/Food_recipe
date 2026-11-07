import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  TextField,
  Button,
  Paper,
  Chip,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import LocalPizzaRoundedIcon from "@mui/icons-material/LocalPizzaRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Aos from "aos";
import "aos/dist/aos.css";

function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 900, once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !message) return;

    // Simulate sending message
    console.log("Message delivered:", { fullName, email, message });
    setOpenSnackbar(true);

    // Reset Form
    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Box id='contact' sx={{ bgcolor: "#faf7f2", color: "#1e293b", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        
        {/* HEADER SECTION */}
        <Stack spacing={1.5} alignItems="center" textAlign="center" mb={{ xs: 6, md: 9 }} data-aos="fade-up">
          <Chip
            icon={<LocalPizzaRoundedIcon sx={{ fontSize: "16px !important", color: "#ea580c !important" }} />}
            label="GET IN TOUCH"
            size="small"
            sx={{
              bgcolor: "#fff7ed",
              color: "#c2410c",
              fontWeight: 800,
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              border: "1px solid #fed7aa",
              px: 1,
            }}
          />

          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.3rem", sm: "3.2rem", md: "3.8rem" },
              letterSpacing: "-0.03em",
              color: "#0f172a",
              lineHeight: 1.15,
            }}
          >
            We’d Love to{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #ea580c 0%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Hear From You.
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.95rem", sm: "1.1rem" },
              color: "#64748b",
              maxWidth: 640,
              lineHeight: 1.7,
            }}
          >
            Curious about a recipe, have a flavor combination idea, or want to collaborate? Send us a dispatch and our team will get back to you promptly.
          </Typography>
        </Stack>

        {/* TWO-COLUMN LAYOUT */}
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
          
          {/* LEFT COLUMN: CONTACT CHANNELS & SOCIALS */}
          <Grid item xs={12} md={5} data-aos="fade-right">
            <Stack spacing={3} sx={{ height: "100%", justifyContent: "space-between" }}>
              
              {/* Channel 1: General Support */}
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  borderRadius: 4,
                  bgcolor: "#ffffff",
                  border: "1px solid #f1e9dd",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
                }}
              >
                <Stack direction="row" spacing={2.5} alignItems="flex-start">
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 3,
                      bgcolor: "#fff7ed",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ea580c",
                      flexShrink: 0,
                    }}
                  >
                    <EmailRoundedIcon />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#0f172a" }}>
                      Direct Inquiries
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#64748b", mb: 0.5 }}>
                      For general questions and editorial feedback:
                    </Typography>
                    <Typography
                      component="a"
                      href="mailto:hello@cirockitchen.com"
                      variant="body2"
                      sx={{
                        color: "#ea580c",
                        fontWeight: 700,
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      hello@cirockitchen.com
                    </Typography>
                  </Box>
                </Stack>
              </Paper>

              {/* Channel 2: Recipe Submissions */}
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  borderRadius: 4,
                  bgcolor: "#ffffff",
                  border: "1px solid #f1e9dd",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
                }}
              >
                <Stack direction="row" spacing={2.5} alignItems="flex-start">
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 3,
                      bgcolor: "#fff7ed",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ea580c",
                      flexShrink: 0,
                    }}
                  >
                    <LightbulbRoundedIcon />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#0f172a" }}>
                      Submit a Recipe Idea
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#64748b", mb: 0.5 }}>
                      Invented a pie the world needs to taste?
                    </Typography>
                    <Typography
                      component="a"
                      href="mailto:submit@cirockitchen.com"
                      variant="body2"
                      sx={{
                        color: "#ea580c",
                        fontWeight: 700,
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      submit@cirockitchen.com
                    </Typography>
                  </Box>
                </Stack>
              </Paper>

              {/* Channel 3: Social Network & Response badge */}
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  borderRadius: 4,
                  bgcolor: "#0f172a",
                  color: "#ffffff",
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1 }}>
                  Join the Community
                </Typography>
                <Typography variant="body2" sx={{ color: "#94a3b8", mb: 2 }}>
                  Tag your home dough bakes with <strong>#cirockitchen</strong> to be featured.
                </Typography>

                <Stack direction="row" spacing={1.5} mb={3}>
                  <IconButton
                    aria-label="Facebook"
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                      color: "#ffffff",
                      "&:hover": { bgcolor: "#ea580c" },
                    }}
                  >
                    <FacebookIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    aria-label="Instagram"
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                      color: "#ffffff",
                      "&:hover": { bgcolor: "#ea580c" },
                    }}
                  >
                    <InstagramIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    aria-label="Pinterest"
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                      color: "#ffffff",
                      "&:hover": { bgcolor: "#ea580c" },
                    }}
                  >
                    <PinterestIcon fontSize="small" />
                  </IconButton>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <AccessTimeRoundedIcon sx={{ fontSize: 16, color: "#fb923c" }} />
                  <Typography variant="caption" sx={{ color: "#cbd5e1" }}>
                    We aim to answer all messages within 24–48 hours.
                  </Typography>
                </Stack>
              </Paper>

            </Stack>
          </Grid>

          {/* RIGHT COLUMN: MODERN FORM CARD */}
          <Grid item xs={12} md={7} data-aos="fade-left">
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, sm: 5 },
                borderRadius: 5,
                bgcolor: "#ffffff",
                border: "1px solid #f1e9dd",
                boxShadow: "0 10px 40px -10px rgba(15, 23, 42, 0.05)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 900, color: "#0f172a", mb: 1 }}>
                Send Us a Message
              </Typography>
              <Typography variant="body2" sx={{ color: "#64748b", mb: 4 }}>
                Fill in the details below and we'll route your note to the right kitchen specialist.
              </Typography>

              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Stack spacing={3}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="Full Name"
                        placeholder="John Doe"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 3,
                            bgcolor: "#faf7f2",
                            "&:hover fieldset": { borderColor: "#ea580c" },
                            "&.Mui-focused fieldset": { borderColor: "#ea580c" },
                          },
                          "& label.Mui-focused": { color: "#ea580c" },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="Email Address"
                        placeholder="john@example.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 3,
                            bgcolor: "#faf7f2",
                            "&:hover fieldset": { borderColor: "#ea580c" },
                            "&.Mui-focused fieldset": { borderColor: "#ea580c" },
                          },
                          "& label.Mui-focused": { color: "#ea580c" },
                        }}
                      />
                    </Grid>
                  </Grid>

                  <TextField
                    fullWidth
                    required
                    label="Your Message"
                    placeholder="Tell us about your recipe idea or ask a question..."
                    multiline
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 3,
                        bgcolor: "#faf7f2",
                        "&:hover fieldset": { borderColor: "#ea580c" },
                        "&.Mui-focused fieldset": { borderColor: "#ea580c" },
                      },
                      "& label.Mui-focused": { color: "#ea580c" },
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<SendRoundedIcon />}
                    sx={{
                      bgcolor: "#ea580c",
                      color: "#ffffff",
                      py: 1.6,
                      borderRadius: 3,
                      fontWeight: 800,
                      fontSize: "0.95rem",
                      textTransform: "none",
                      boxShadow: "0 10px 20px rgba(234, 88, 12, 0.25)",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        bgcolor: "#c2410c",
                        transform: "translateY(-2px)",
                        boxShadow: "0 14px 24px rgba(234, 88, 12, 0.35)",
                      },
                      "&:active": {
                        transform: "translateY(0)",
                      },
                    }}
                  >
                    Submit Message
                  </Button>
                </Stack>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* FEEDBACK SNACKBAR */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          variant="filled"
          sx={{
            width: "100%",
            borderRadius: 3,
            fontWeight: 600,
            bgcolor: "#0f172a",
            color: "#ffffff",
          }}
        >
          Message successfully delivered! We'll be in touch soon. 🍕
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ContactUs;