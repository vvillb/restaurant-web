import React, { useEffect } from 'react'
import Layout from '../ThemeLayout/Layout'
import { Card, CardMedia, Grid, Typography } from '@mui/material'
import Hero from '../components/Hero'
import Destacados from '../components/Destacados'
import ContactSection from '../components/ContactSection'

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  
  },[])
  return (
    <Layout>
        <Grid container
        display='column'
        sx={{
            backgroundColor:'background.main'
        }}>
          <Grid item xs={12}>
             <Typography variant='h1'
           sx={{
            paddingTop:'10vh',
            color:'highlights.blue'
           }}>Virbakes</Typography>
          
          </Grid>
          <Grid item xs={12}>
            <Hero/>
          </Grid>
          <Grid item xs={12}>
            <Destacados/>
          </Grid>
          <Grid item xs={12}>
            <ContactSection/>
          </Grid>
        </Grid>
      
    </Layout>
  )
}

export default Home
