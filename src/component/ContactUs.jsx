import React from 'react'
import { Button, Stack, Typography, TextField } from '@mui/material'
import { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


function ContactUs() {
  const[fullName, setFullName]=useState("")
  const[email, setEmail]=useState("")
  const[message, setMessage]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Message successfully delievered ✔")
  }
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <Stack width='100%' justifyContent='center' spacing={4} alignItems='center' mt={0} backgroundColor='#391300' data-aos='zoom-in'>
        <Typography variant='h2' color='white' pt={4} width='80%' textAlign='center' fontWeight={{xs:400, sm:900}}>Contact us</Typography>
        <Typography width='80%' color='white' textAlign='center' pt={4} >Whether you're curious about a specific recipe like our BLT Pizza or Pesto Veggie Pizza, have a suggestion for new content, or just want to say hello, don't hesitate to reach out.</Typography>
        <Typography textAlign='center' color='white' variant='h6' fontWeight={{xs:400, sm:900}}>How to Reach Us</Typography>
        <Typography width='80%' color='white'>Email Us Directly:
            For general inquiries, recipe feedback, or collaboration opportunities,<br/> drop us a line at:
            hello@pizzaparadise.com <br/>
            Follow Us on Social Media: <br/>
            Join our growing community on social media for daily pizza inspiration, behind-the-scenes glimpses, and to share your own pizza adventures!
        </Typography>
        <ul style={{width:'80%', justifyContent:'space-between'}}>
            <li style={{color:'ivory'}} >Facebook: @PizzaParadiseOfficial</li>
            <li style={{color:'ivory'}}>Instagram: @PizzaParadise_Recipes</li>
            <li style={{color:'ivory'}}>Pinterest: /PizzaParadise</li>
        </ul>
        <Typography color='white' width='80%'>
            Submit a Recipe Idea:
            Have an amazing pizza recipe you think the world needs to know about? We're always looking for fresh ideas! Send us your concept and we might just feature it on our site.
            submit@pizzaparadise.com
            We're a small but dedicated team, and we aim to respond to all inquiries within 24-48 hours. Your feedback and engagement are what make Pizza Paradise thrive!
        </Typography>
        <Stack width="100%" height='600px'>
          <Stack width="100%"  justifyContent="center" height='650px' alignItems='center' sx={{bgcolor:'#421702'}}>
            <Typography color='ivory' variant='h5' textAlign="center">We love feedback. Fill out the form below and we'll get back to you as soon as possible.</Typography>
            <form onSubmit={handleSubmit} style={{width:'100%'}}>
              <Stack width="100%" spacing={4} >
                <Stack width="70%" spacing={4} direction={{xs:'column', sm:'row',md:'row'}} pt={4} justifySelf="center" alignSelf='center' >
                  <TextField label="Full name"
                    name="fullName"
                    type='text'
                    value={fullName}
                    onChange={(e)=>setFullName(e.target.value)} 
                    sx={{ width:{xs:'80%', sm:'49%'},height:'80px',justifySelf:"center", alignSelf:'center',
                    '& .MuiInputLabel-root': { color: 'white'},'& .MuiInputLabel-root.Mui-focused': { color: '#36454F',},
                    '& .MuiOutlinedInput-root': {'&': { backgroundColor: 'transparent',},'& fieldset': {borderColor: 'white'},
                    '&:hover fieldset': {borderColor: 'white',}, '&.Mui-focused fieldset': {borderColor: 'white',},
                      '& .MuiOutlinedInput-input': {color: 'white', },
                    },
                  }}
                />
                <TextField label="Email "
                    name="email"
                    type='email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} 
                    sx={{ width:{xs:'80%', sm:'49%'},height:'80px',justifySelf:"center", alignSelf:'center',
                    '& .MuiInputLabel-root': { color: 'white'},'& .MuiInputLabel-root.Mui-focused': { color: '#36454F',},
                    '& .MuiOutlinedInput-root': {'&': { backgroundColor: 'transparent',},'& fieldset': {borderColor: 'white'},
                    '&:hover fieldset': {borderColor: 'white',}, '&.Mui-focused fieldset': {borderColor: 'white',},
                      '& .MuiOutlinedInput-input': {color: 'white', },
                    },
                  }}
                />
                </Stack>
                <TextField
                  label='Message'
                  multiline
                  name="message"
                  type='text'
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)} 
                  sx={{ width:{xs:'90%', sm:'70%'}, justifySelf:"center", alignSelf:'center',
                    '& .MuiInputLabel-root': { color: 'white'},'& .MuiInputLabel-root.Mui-focused': { color: '#36454F'},
                    '& .MuiOutlinedInput-root': {'&': { backgroundColor: 'transparent'},'& fieldset': {borderColor: 'white'},
                    '&:hover fieldset': {borderColor: 'white'}, '&.Mui-focused fieldset': {borderColor: 'white'},
                      '& .MuiOutlinedInput-input': {color: 'white'},
                    },
                  }}
                />
                <Button type='submit'  sx={{borderRadius:1, color:'brown', bgcolor:'ivory', justifySelf:"center",height:'50px', width:'200px', textAlign:"center",  alignSelf:"center"}}>Submit message</Button>
              </Stack>
            </form>
          </Stack>
        </Stack>
    </Stack>
  )
}

export default ContactUs