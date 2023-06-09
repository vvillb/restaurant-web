import React from 'react'
import Layout from '../../ThemeLayout/Layout'
import { Button, Card, CardMedia, Grid, Paper } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import foto1 from '../../assets/images/alfajores1.jpg'
import foto2 from '../../assets/images/alfajorees2.jpg'
import foto3 from '../../assets/images/cajaAlfajores.jpg'



const Alfajores = () => {
  return (
    <Layout>
        <Grid container >
            <Grid item xs={12} sm={7}  padding='5%' 
           >
                <Carousel  sx={{
                height:{xs:'40vh',sm:'80vh'},
               zIndex:'0'
            }}>
            <Card sx={{   height:{xs:'40vh',sm:'80vh'}, backgroundColor:'transparent',alignItems:'center',margin: 'auto',padding:'2%'}}>
                <CardMedia
                sx={{}}
                    component="img"
                    loading="lazy" 
                    image={foto1}
                    alt="An image"
                    />
                </Card>
                <Card sx={{  height:{xs:'40vh',sm:'80vh'},  backgroundColor:'transparent',alignItems:'center', margin: 'auto',padding:'2%'}}>
                <CardMedia
                    sx={{zIndex:999}}

                    component="img"
                    loading="lazy" 
                    image={foto2}
                    alt="An image"
                    />
                </Card>
                <Card sx={{  height:{xs:'40vh',sm:'80vh'}, backgroundColor:'transparent',alignItems:'center',margin: 'auto',padding:'2%'}}>
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
          
        </Grid>
       
      
    </Layout>
  )
}

export default Alfajores
