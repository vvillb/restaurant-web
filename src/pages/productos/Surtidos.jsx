import React from 'react'
import Layout from '../../ThemeLayout/Layout'
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import foto1 from '../../assets/images/surtido1.jpg'
import foto2 from '../../assets/images/trufitas.jpg'
import foto3 from '../../assets/images/surtido2.jpg'

const Surtidos = () => {
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
            <Card sx={{   height:{xs:'40vh',sm:'75vh'}, backgroundColor:'transparent',alignItems:'center',margin: 'auto',padding:'2%'}}>
            <CardMedia
            sx={{}}
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
                    Surtido
                </Typography>
                <Typography variant='body2' component="div">
                Una selección perfecta para eventos y ocasiones especiales.
                 Te ofrezco una caja llena de delicias donde podrás disfrutar de una 
                 variedad de productos exquisitos. 
                 Desde los irresistibles alfajores hasta el jugoso brownie, unas deliciosas trufas y
                   tentadores cupcakes, encontrarás una combinación perfecta de sabores y texturas.<br/>
                    Prepara tu paladar para un festín de dulzura y sorpresas.                </Typography>
                <Button variant='outlined'>
               
                    Caja de 12 (4 alfajores, 4 piezas de brownie , 4 cupcakes mini): 13.50 € 
                </Button>
                <Button variant='outlined'>
               
                    Para más opciones contacta conmigo
                </Button>
               
            </CardContent>
        </Card>

      </Grid>
    </Grid>
   
  
</Layout>
  )
}

export default Surtidos
