import React from 'react'
import Layout from '../../ThemeLayout/Layout'
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import foto1 from '../../assets/images/cookies2.jpg'
import foto3 from '../../assets/images/cookies3.jpg'

const Cookies = () => {
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
              
                <Card sx={{  height:{xs:'40vh',sm:'75vh'}, backgroundColor:'transparent',alignItems:'center',margin: 'auto',padding:'2%'}}>
                <CardMedia
                    sx={{ }}

                    component="img"
                    loading="lazy" 
                    image={foto3}
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
                    <Typography sx={{typography: {lg: 'h3', sm:'h3med' ,xs: 'h3Smaller' } }}  gutterBottom>
                        Cookies
                    </Typography>
                    <Typography variant='body2' component="div" textAlign='justify'>
                    Prepárate para una experiencia de sabor irresistible con estas cookies. 
                    Ya te digo yo que no podrás comer solo una...
                    Disponibles en versiones clásicas, de doble chocolate o surtidas, 
                    estas  cookies son el complemento perfecto para cualquier momento dulce. <br/>
                    ¡Solo tienes que pedírmelas y te aseguro que te cautivarán!                    </Typography>
                    <Button variant='outlined'>
                   
                        Caja de 12 cookies: 12.00 € 
                    </Button>
                    <Button variant='outlined'>
                   
                        Caja de 18 cookies: 16.00 € 
                    </Button>
                    <Button variant='outlined'>
                   
                        Caja de 24 cookies: 18.00 € 
                    </Button>
                </CardContent>
            </Card>

          </Grid>
        </Grid>
       
      
    </Layout>
  )
}

export default Cookies
