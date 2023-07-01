import React from 'react'
import Layout from '../../ThemeLayout/Layout'
import { Button, Card, CardContent, CardMedia, Divider, Grid, Paper, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import foto1 from '../../assets/images/alfajores1.jpg'
import foto2 from '../../assets/images/alfajorees2.jpg'
import foto3 from '../../assets/images/cajas.jpg'
import CircleIcon from '@mui/icons-material/Circle';


const Alfajores = () => {
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
                        Alfajores
                    </Typography>
                    <Typography variant='body2' component="div" textAlign='justify'>
                    Descubre la perfección en forma de dulce con estos irresistibles alfajores. 
                    Rellenos de dulce de leche y delicadamente bañados en chocolate.
                    Además de ser auténticas obras de arte, su sabor te 
                    dejará sin palabras. ¿A qué esperas para probarlos? <br/>
                     ¡No sabes lo que te estás perdiendo!
                    </Typography>
                    <Button variant='outlined'>
                   
                        Caja de 12 alfajores: 15.50 € 
                    </Button>
                    <Button variant='outlined'>
                   
                        Caja de 18 alfajores: 22.50 € 
                    </Button>
                    <Button variant='outlined'>
                   
                        Caja de 24 alfajores: 25.00 € 
                    </Button>
                </CardContent>
            </Card>

          </Grid>
        </Grid>
       
      
    </Layout>
  )
}

export default Alfajores
