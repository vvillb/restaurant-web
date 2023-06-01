import React from 'react'
import Layout from '../ThemeLayout/Layout'
import { Card, CardMedia, Grid, Typography } from '@mui/material'
import Hero from '../components/Hero'


const Home = () => {
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
          
        </Grid>
      
    </Layout>
  )
}

export default Home
