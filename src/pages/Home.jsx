import React from 'react'
import Layout from '../ThemeLayout/Layout'
import { Card, CardMedia, Grid, Typography } from '@mui/material'

const Home = () => {
  return (
    <Layout>
        <Grid container
        sx={{
            backgroundColor:'background.main'
        }}>
          <Grid item>
             <Typography variant='h1'
           sx={{
            paddingTop:'10vh',
            color:'highlights.blue'
           }}>Virbakes</Typography>
          </Grid>
          <Grid item>
              <Grid item
              sx={{
                background: `url(${playa})`,
                backgroundSize:'cover',       
                height: '125vh',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'top',
                width:'100vw',
                flexDirection:'row',
              }}>
              </Grid>
              <Grid item>
              </Grid>
          </Grid>
          
        </Grid>
      
    </Layout>
  )
}

export default Home
