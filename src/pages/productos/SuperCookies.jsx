import React from 'react'
import Layout from '../../ThemeLayout/Layout'
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import foto1 from '../../assets/images/supercookies1.jpg'
import foto3 from '../../assets/images/supercookies2vert.jpg'

const SuperCookies = () => {
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
                        Súper Cookies
                    </Typography>
                    <Typography variant='body2' component="div">
                    Prepárate para una explosión de sabor con las Super Cookies. 
                    Estas deliciosas galletas tienen un giro especial: ¡están rellenas de 
                    irresistible Nutella o crema de avellanas! Cada mordisco es una locura 
                    de texturas y sabores que te dejará con ganas de más. ¿Estás listo para 
                    probar la combinación perfecta de crujiente por fuera y suave relleno por 
                    dentro?         </Typography>
                    <Button variant='outlined'>
                   
                        Caja de 4: 8.00 € 
                    </Button>
                    <Button variant='outlined'>
                   
                        Caja de 6: 10.50 € 
                    </Button>
                    <Button variant='outlined'>
                   
                        Caja de 8: 14.00 € 
                    </Button>
                </CardContent>
            </Card>

          </Grid>
        </Grid>
       
      
    </Layout>
  )
}

export default SuperCookies
