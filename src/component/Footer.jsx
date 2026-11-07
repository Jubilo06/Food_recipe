// import React from 'react'
// import { Stack, Typography, Link, Icon } from '@mui/material'
// import FacebookIcon from '@mui/icons-material/Facebook';
// import XIcon from '@mui/icons-material/X';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// function Footer() {
//   return (
//     <Stack backgroundColor='#E6F1F8' width="100%" justifyContent='center' height='150px' alignItems='center'   pb={0}>
//         <Typography  color='#15304A' textAlign='center' fontWeight={700}>
//             Copyright ©  Jubilo | Designed by Temiloluwa Amusan
//         </Typography>
//         <Stack direction={{xs:'column', sm:'row'}} spacing={{xs:1,sm :2}} width='100%' justifyContent='center' alignItems='center'>
//             <Typography color='#15304A' textAlign='center' fontWeight={700} >Contact me</Typography>
//             <Stack direction='row' spacing={2} justifySelf='center'  alignSelf='center'>
//                 <Link  component='a' href='https://www.facebook.com/profile.php?id=100007386554971' ><Icon><FacebookIcon/></Icon></Link>
//                 <Link  component='a' href='https://wa.me/2348133834904'><Icon><WhatsAppIcon color='success' /></Icon></Link>
//                 <Link component='a' href='https://x.com/jubiloforever?t=4AcX2si_9wGVx5J-2UWL1g&s=09'><Icon><XIcon htmlColor='#15304A'/></Icon></Link>
//                 <Link component='a' href='https://www.instagram.com/tml_bliss?igsh=YzljYTk10Dg3Zg=='><Icon><InstagramIcon htmlColor='#C13584' /></Icon></Link>
//                 <Link component='a' href='https://www.linkedin.com/in/temiloluwa-amusan-749b134b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><Icon><LinkedInIcon htmlColor='#0A66C2' /></Icon></Link>
//                 <Link component='a' href='https://github.com/Jubilo06'><Icon><GitHubIcon htmlColor='#15304A' /></Icon></Link>   
//             </Stack>
//         </Stack>

//     </Stack>
//   )
// }

// export default Footer

import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPizzaRoundedIcon from "@mui/icons-material/LocalPizzaRounded";

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100007386554971",
    icon: <FacebookIcon fontSize="small" />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/2348133834904",
    icon: <WhatsAppIcon fontSize="small" />,
  },
  {
    label: "X",
    href: "https://x.com/jubiloforever?t=4AcX2si_9wGVx5J-2UWL1g&s=09",
    icon: <XIcon fontSize="small" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tml_bliss?igsh=YzljYTk10Dg3Zg==",
    icon: <InstagramIcon fontSize="small" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/temiloluwa-amusan-749b134b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: <LinkedInIcon fontSize="small" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/Jubilo06",
    icon: <GitHubIcon fontSize="small" />,
  },
];

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0f172a",
        color: "#e2e8f0",
        pt: { xs: 7, md: 9 },
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 6 }}>
          {/* Brand */}
          <Grid item xs={12} md={5}>
            <Stack direction="row" spacing={1.25} alignItems="center" mb={2}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2.5,
                  bgcolor: "#ea580c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <LocalPizzaRoundedIcon fontSize="small" />
              </Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 900, letterSpacing: "-0.03em", color: "#fff" }}
              >
                Ciroc Kitchen
              </Typography>
            </Stack>

            <Typography
              variant="body2"
              sx={{ color: "#94a3b8", lineHeight: 1.8, maxWidth: 380 }}
            >
              A home for tested doughs, curious toppings, and recipes worth firing the oven for. Built with care, shared with everyone who loves a good pie.
            </Typography>

            <Stack direction="row" spacing={1} mt={3}>
              {SOCIALS.map((item) => (
                <IconButton
                  key={item.label}
                  component="a"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  sx={{
                    width: 38,
                    height: 38,
                    bgcolor: "rgba(255,255,255,0.06)",
                    color: "#e2e8f0",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "#ea580c",
                      color: "#fff",
                      borderColor: "#ea580c",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Quick links */}
          <Grid item xs={6} md={3}>
            <Typography
              variant="overline"
              sx={{ color: "#fb923c", fontWeight: 800, letterSpacing: "0.16em" }}
            >
              Explore
            </Typography>
            <Stack spacing={1.25} mt={2}>
              {QUICK_LINKS.map((link) => (
                <Typography
                  key={link.label}
                  component={RouterLink}
                  to={link.to}
                  variant="body2"
                  sx={{
                    color: "#cbd5e1",
                    textDecoration: "none",
                    width: "fit-content",
                    fontWeight: 600,
                    "&:hover": { color: "#fff" },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid item xs={6} md={4}>
            <Typography
              variant="overline"
              sx={{ color: "#fb923c", fontWeight: 800, letterSpacing: "0.16em" }}
            >
              Say hello
            </Typography>
            <Stack spacing={1.25} mt={2}>
              <Typography
                component="a"
                href="mailto:hello@cirockitchen.com"
                variant="body2"
                sx={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontWeight: 600,
                  "&:hover": { color: "#fff" },
                }}
              >
                hello@cirockitchen.com
              </Typography>
              <Typography
                component="a"
                href="mailto:submit@cirockitchen.com"
                variant="body2"
                sx={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontWeight: 600,
                  "&:hover": { color: "#fff" },
                }}
              >
                submit@cirockitchen.com
              </Typography>
              <Typography variant="body1" sx={{ color: "#64748b", pt: 0.5, fontWeight:'bold' }}>
                Designed by Temiloluwa Amusan
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", my: 4 }} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 600 }}>
            Copyright © {year} Jubilo. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: "#64748b" }}>
            Crafted for home cooks who take pizza seriously.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;