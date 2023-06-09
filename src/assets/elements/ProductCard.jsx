import { Button, Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


const ProductCard = (props) => {

    const {img,titulo,descripcion,precio,enlace}=props;

  return (
 
          <Card >
        <CardMedia
        component="img"
        loading="lazy" 
        image={img}
        alt="An image"
        sx={{ 
            height:{xs:'50vh', sm:'33vh'}
        }}/>
     
        <CardContent>
        <Typography gutterBottom variant="h3" component="div" color='highlights.blue'>
            {titulo}
        </Typography>
            <Typography variant='body2'>
                {descripcion}
            </Typography>
        </CardContent>
        <CardActions
        sx={{
            justifyContent:'center'
        }}>
            <Link component={RouterLink} to={enlace} underline="none">
                
                <Button variant='contained'
          > <DoubleArrowIcon/>Desde {precio} €  </Button>
            </Link>
        </CardActions>
    </Card>

  
  )
}

export default ProductCard
