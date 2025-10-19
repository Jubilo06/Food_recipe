import React from 'react'
import { useEffect } from 'react'
import { Stack, Typography } from '@mui/material'
import bg1 from '../assets/bg1.webp'
import bg2 from '../assets/bg2.webp'
import Aos from 'aos'
import 'aos/dist/aos.css'
function AboutUs() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <Stack width='100%' justifyContent='center' pb={4} alignItems='center' spacing={4} backgroundColor="#DE8C63" data-aos='zoom-in'>
        <Typography pt={4} variant='h2' width='80%' textAlign='center' fontWeight={{xs:400, sm:900}}>About us</Typography>
        <Typography variant='body1' width='80%' >Our Story: A Passion Baked into Every Recipe</Typography>
        <Typography variant='h5' width='80%'>Welcome to Pizza Paradise – your ultimate destination for all things pizza! 🍕</Typography>
        <Typography varsiant='body1' width='80%'>Here at Pizza Paradise, we believe that pizza isn't just food; it's a celebration, a comfort, an adventure, and a canvas for culinary creativity. From the classic pepperoni to the unexpectedly delightful Rustic Grilled Peaches Pizza, we're passionate about exploring the incredible world of this beloved dish.</Typography>
        <Typography variant='h6' fontWeight={700} width='80%'>Our Story: A Passion Baked into Every Recipe</Typography>
        <Stack direction={{xs:'column',sm:'column', md:'row'}}  width="100%" justifyContent='center' height='auto' spacing={4}>
          <Stack data-aos='zoom-in-left' width={{xs:'90%',sm:"90%",md:"40%"}} height='400px' sx={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bg1})`, backgroundRepeat:"no-repeat", backgroundSize: 'cover',
                              backgroundPosition: 'center'}} borderRadius={1} justifySelf='center' alignSelf='center'></Stack>
          <Typography data-aos='zoom-in-right' textAlign='center' lineHeight='30px'  variant='body1' width={{xs:'90%',sm:"90%",md:"40%"}} height='auto' justifyContent='center' alignItems='center' 
          sx={{bgcolor:"transparent"}} borderRadius={1} justifySelf='center' alignSelf='center'>
            It all started with a simple idea: to share the joy and versatility of pizza with everyone. We noticed that while there were many ways to make pizza, there wasn't always a central hub for unique, exciting, and accessible recipes. That's where Pizza Paradise was born! Our team of enthusiastic home cooks and self-proclaimed pizza connoisseurs embarked on a mission to gather, test, and perfect a diverse collection of pizza recipes that cater to every taste, skill level, and occasion.
            </Typography>
        </Stack>
        
        <Typography variant='body1' width='90%'>We spend countless hours experimenting with different doughs, sauces, cheeses, and toppings, ensuring that every recipe we share is not only delicious but also easy to follow. We're constantly on the lookout for innovative ideas, whether it's transforming everyday ingredients into a spectacular Zucchini Pizza Boat or surprising your taste buds with a Plantain Pizza.</Typography>
        <Typography variant='h5' width='80%' textAlign='center' fontWeight={{xs:400, sm:900}}>What You'll Find Here:</Typography>
        <Stack direction={{xs:'column',sm:'column', md:'row'}}   width="100%" justifyContent='center' height='auto' spacing={4}>
          <Typography data-aos='zoom-in-left' lineHeight='30px' variant='body1' width={{xs:'90%',sm:"90%",md:"40%"}} height='auto' justifySelf='center' alignSelf='center'>Diverse Recipes: Whether you're a traditionalist or an adventurous eater, you'll find something to love. Explore recipes like our savory Roasted Peppers, Spinach & Feta Pizza, the intriguing Paneer & Fig Pizza, or the comforting Easy Cheesy Pizza Casserole. We've got pizzas for breakfast, lunch, dinner, and even snacks like Pepperoni Pizza Muffins and Pizza Bites with Pumpkin!
  Step-by-Step Guides: We break down every recipe into simple, easy-to-understand steps, complete with tips and tricks to help you achieve pizza perfection every time.
  Inspiration Galore: Beyond just recipes, we aim to inspire you to get creative in your own kitchen. Discover new flavor combinations, learn about different pizza-making techniques, and maybe even invent your own signature pie!
  A Community of Pizza Lovers: We're building a community where you can share your creations, ask questions, and connect with fellow pizza enthusiasts.</Typography>
          <Stack data-aos='zoom-in-right' width={{xs:'90%',sm:"90%",md:"40%"}} height='400px' sx={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bg2})`, backgroundRepeat:"no-repeat", backgroundSize: 'cover',
                              backgroundPosition: 'center'}} borderRadius={1} justifySelf='center' alignSelf='center'>

          </Stack>
        </Stack>
        
        <Typography variant='body1' width='80%'>We're more than just a recipe website; we're a celebration of the universal love for pizza. Join us on this delicious journey, and let's make some incredible pizza together!</Typography>
    </Stack>
  )
}

export default AboutUs