import React from 'react'
import Layout from '../../ThemeLayout/Layout'
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import foto1 from '../../assets/images/cinammonRolls1.jpg'
import foto2 from '../../assets/images/cinammonRolls2.jpg'

const CinammonRolls = () => {
  return (
    <Layout>
        <Grid container spacing={4} padding='5%' backgroundColor='background.main' >
            <Grid item xs={12} sm={7}   
           >
                <Carousel  sx={{
                height:{xs:'40vh',sm:'75vh'},
               zIndex:'0'
            }}>
            <Card sx={{   height:{xs:'40vh',sm:'75vh'}, backgroundColor:'transparent',alignItems:'center',margin: 'auto',padding:'2%'}}>
                <CardMedia
                sx={{}}
                    component="img"
                    loading="lazy" 
                    image={foto1}
                    alt="An image"
                    />
                </Card>
                <Card sx={{  height:{xs:'40vh',sm:'75vh'},  backgroundColor:'transparent',alignItems:'center', margin: 'auto',padding:'2%'}}>
                <CardMedia
                    sx={{zIndex:999}}

                    component="img"
                    loading="lazy" 
                    image={foto2}
                    alt="An image"
                    />
                </Card>
            
            </Carousel>  
           </Grid>
          <Grid item xs={12} sm={5} >
            <Card sx={{ height:{xs:'40vh',sm:'75vh'}}}>
                <CardContent sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-around',
                    height:{xs:'40vh',sm:'75vh'},
                    padding:'5%'
                }}>
                    <Typography sx={{ typography: {lg: 'h3', sm:'h3med' ,xs: 'h3Smaller' } }} gutterBottom>
                        Cinammon Rolls
                    </Typography>
                    <Typography variant='body2' component="div">
                        Elit irure esse aliqua sint non veniam ad ut laborum id. Ullamco nulla voluptate non aute esse elit mollit est ea fugiat ex aliqua. Enim ut laboris incididunt exercitation. Do minim amet officia excepteur incididunt ea nulla.
                    </Typography>
                    <Button variant='outlined'>
                   
                        Caja (8 rollitos grandes): 24.00 € 
                    </Button>
                    <Button variant='outlined'>
                   
                        Media caja (4 rollitos grandes): 14.00 € 
                    </Button>
                    
                </CardContent>
            </Card>

          </Grid>
        </Grid>
       
      
    </Layout>
  )
}

export default CinammonRolls