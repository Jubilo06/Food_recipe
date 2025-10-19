import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Search from './component/Search'
import FoodList from './component/FoodList';
import "./App.css"
import Nav from './component/Nav';
import Container from './component/Container';
import InnerOne from './component/InnerOne';
import FoodDetails from './component/FoodDetails';
import { createContext } from 'react';
import styles from './component/logo.module.css';
import { Stack } from '@mui/material';
import {Routes,Route} from 'react-router-dom'
import HomePage from './component/HomePage';
import Footer from './component/Footer';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';



function App() {
  return (
    <Stack className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/recipe/:id' element={<FoodDetails  />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>  
      <Footer />      
    </Stack>
  )
}

export default App
