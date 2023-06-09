import React, { useEffect } from 'react'
import Layout from '../ThemeLayout/Layout'
import { Grid, Typography } from '@mui/material'
import cookiesBackground from '../assets/images/cajas.jpg'
import { useInView } from 'react-intersection-observer'
import ProductCard from '../assets/elements/ProductCard'

import alfajores from '../assets/images/alfajores1.jpg'
import brownie from '../assets/images/brownie1.jpg'
import cookies from '../assets/images/cookies3.jpg'
import cinammonrolls from '../assets/images/cinammonRolls1.jpg'
import supercookies from '../assets/images/supercookies2.jpg'
import granola from '../assets/images/granola1.jpg'
import surtido from '../assets/images/surtido2.jpg'




const Cajas = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  
  },[])


  return (
    <Layout>
      <Grid container>
        
        <Grid item
      
        width='100vw'
        sx={{
          height:{xs:'100vh',md:'50vh'},
          background: `linear-gradient( to top, rgba(247,241,237,1), transparent), url(${cookiesBackground})`,
          backgroundSize:'cover', 
          justifyContent:'center',
          display:'flex',
          minWidth:'100vw'
        }}
        >
  
            <Typography variant='h2'
            sx={{
                alignSelf:'center',
                padding:'5%',
                maxWidth:'100vw',
                overflow:'hidden'
            }}>
            Un regalo original...o para que te des un capricho
          </Typography>

        </Grid>

        <Grid item xs={12} backgroundColor='background.main'>
          <Typography variant='h5' paddingLeft='10%' paddingRight='10%'>
          Desde irresistibles alfajores hasta  exquisitos brownies, cookies y cinnamon rolls, 
          encontrarás una variedad de opciones que te harán la boca agua. Estas cajitas  están disponibles en
           varios tamaños, perfectos para compartir o disfrutar en solitario. Ya sea para regalar a alguien especial 
           o para darte un capricho, las cajas de virbakes son el regalo original que estás buscando. Explora las opciones
            y elige el sabor que más te guste. ¡Te garantizo una experiencia deliciosa!
          </Typography>
        </Grid>

        <Grid container
        display='flex'
        flexDirection='row'
        alignContent='center'
        spacing={4}
        padding='5%'
        sx={{backgroundColor:'background.main'}}
        >
          <Grid item
          xs={12} md={4} sm={6}>
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
          <Grid item xs={12}  md={4} sm={6}>
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
          <Grid item xs={12} md={4} sm={6}>
             <ProductCard
           sx={{
            }}
            img={cookies}
            titulo='cookies'
            descripcion='Eres más de crunchy o de chewy???'
            precio='12'
            enlace='/cajas/cookies'
            />
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
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
          <Grid item xs={12}  md={4} sm={6}>
             <ProductCard
           sx={{
            }}
            img={supercookies}
            titulo='super cookies'
            descripcion='Rellenas de nutella...'
            precio='8'
            enlace='/cajas/supercookies'
            />
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
             <ProductCard
           sx={{
            }}
            img={granola}
            titulo='granola'
            descripcion='Deliciosa y saludable'
            precio='6.50'
            enlace='/cajas/granola'
            />
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
             <ProductCard
           sx={{
            }}
            img={surtido}
            titulo='surtido'
            descripcion='No sabes qué escoger o quieres probarlo todo?'
            precio='13.50'
            enlace='/cajas/surtido'
            />
          </Grid>
         
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Cajas

