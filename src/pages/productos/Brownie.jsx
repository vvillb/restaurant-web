import React from 'react'
import Layout from '../../ThemeLayout/Layout'
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import foto1 from '../../assets/images/brownie2.jpg'
import foto3 from '../../assets/images/brownie3.jpg'


const Brownie = () => {
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
                        Brownie
                    </Typography>
                    <Typography variant='body2' component="div" textAlign='justify'>
                    Sumérgete en la indulgencia del brownie más delicioso que hayas probado.
                     Este brownie es irresistiblemente chewy, con un intenso sabor a chocolate que 
                     te cautivará desde el primer bocado y con los mejores toppings.<br/>¡No podrás resistirte a su tentación!

                    </Typography>
                    <Button variant='outlined'>
                   
                        Caja (unas 12 porciones): 15.50 € 
                    </Button>
                   
                </CardContent>
            </Card>

          </Grid>
        </Grid>
       
      
    </Layout>
  )
}

export default Brownie
