import { Stack } from "@mui/material";
import Search from "./Search";
import FoodList from "./FoodList";
import React from 'react'
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

function HomePage() {
  return (
    <Stack backgroundColor='#FEF1DE'>
        <Search />
        <FoodList />
        <AboutUs />
        <ContactUs />

    </Stack>
  )
}

export default HomePage