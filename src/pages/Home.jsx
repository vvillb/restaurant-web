import React from 'react'
import Layout from '../ThemeLayout/Layout'
import { Grid, Typography } from '@mui/material'

const Home = () => {
  return (
    <Layout>
        <Grid container
        sx={{
            backgroundColor:'background.main'
        }}>
           <Typography variant='h1'
           sx={{
            paddingTop:'10vh',
            color:'highlights.blue'
           }}>Virbakes</Typography>
        </Grid>
      
    </Layout>
  )
}

export default Home
