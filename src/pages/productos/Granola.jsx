import React from 'react'
import Layout from '../../ThemeLayout/Layout'
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import foto1 from '../../assets/images/granola2.jpg'
import foto3 from '../../assets/images/granola1.jpg'

const Granola = () => {
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
                    Granola
                </Typography>
                <Typography variant='body2' component="div">
                Descubre la granola saludable de virbakes, un verdadero deleite para tu paladar y tu bienestar. 
                 Disfruta de cada bocado crujiente y nutritivo, lleno 
                de ingredientes naturales y sin aditivos innecesarios.<br/>Ideal para tus desayunos o meriendas
                 ¡Descubre lo deliciosamente saludable que puede ser!                </Typography>
                <Button variant='outlined'>
               
                    150 gr: 8.00 € 
                </Button>
                <Button variant='outlined'>
               
                    300 gr: 12.00 € 
                </Button>
                
            </CardContent>
        </Card>

      </Grid>
    </Grid>
   
  
</Layout>
  )
}

export default Granola
