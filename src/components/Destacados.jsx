import { Grid, Typography } from '@mui/material'
import React from 'react'
import ProductCard from '../assets/elements/ProductCard'
import cinammonrolls from '../assets/images/cinammonRolls2.jpg'
import alfajores from '../assets/images/CajaAlfajores2.jpg'
import brownie from '../assets/images/brownie2.jpg'


const Destacados = () => {
  return (
    <Grid container spacing={4} padding='5%' alignItems='center'>
      <Grid item xs={12} flexDirection='column' textAlign='center' alignContent='center' >
         <Typography variant='h3' padding='5%'>
          ¿No sabes qué pedir?
        </Typography>
        <Typography variant='h5'>
          No podría elegir sólo uno...pero puedo echarte una mano
        </Typography>
        <Typography variant='h3' padding='5%' textAlign='left'>
          Los más pedidos:
        </Typography>
      </Grid>
      <Grid item xs={12}   md={4}>
             <ProductCard
           sx={{
            }}
            img={brownie}
            titulo='brownie'
            descripcion='Con toppings brutales'
            precio='15.50'
            enlace='/cajas/brownie'
            />
          </Grid>
      
        <Grid item xs={12}   md={4}>
             <ProductCard
           sx={{
            }}
            img={cinammonrolls}
            titulo='cinammon rolls'
            descripcion='Disfrútalos calentitos'
            precio='14'
            enlace='/cajas/cinammonrolls'
            />
          </Grid>
          <Grid item
          xs={12}  md={4}>
             <ProductCard
           sx={{
            }}
            img={alfajores}
            titulo='alfajores'
            descripcion='Rellenos de dulce de leche y bañados en chocolate'
            precio='15'
            enlace='/cajas/alfajores'
            />
          </Grid>
       
    </Grid>
  )
}

export default Destacados
