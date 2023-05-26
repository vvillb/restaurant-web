import React from 'react'
import Layout from '../ThemeLayout/Layout'
import { Grid } from '@mui/material'

const Home = () => {
  return (
    <Layout>
        <Grid container
        sx={{
            backgroundColor:'background.main'
        }}>
           Home 
        </Grid>
      
    </Layout>
  )
}

export default Home
