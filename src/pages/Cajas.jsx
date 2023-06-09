import React from 'react'
import Layout from '../ThemeLayout/Layout'
import { Grid, Typography } from '@mui/material'
import cookiesBackground from '../assets/images/cajas.jpg'
import { useInView } from 'react-intersection-observer'
import ProductCard from '../assets/elements/ProductCard'

import alfajores from '../assets/images/alfajores1.jpg'

const Cajas = () => {



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
            Minim Lorem occaecat ipsum dolor consequat sint minim in aliqua Lorem pariatur duis.Aute reprehenderit ullamco elit consequat ea exercitation quis nostrud adipisicing reprehenderit duis. Ex excepteur officia ea eiusmod magna aute ullamco commodo aliquip laborum ad ut. Laboris duis sunt magna do in reprehenderit. Ad deserunt non deserunt velit mollit Lorem culpa cupidatat cillum eiusmod quis incididunt. Consectetur enim adipisicing reprehenderit do elit aliquip incididunt velit ea sunt. Cillum enim non ea culpa pariatur ullamco voluptate sint non ad pariatur.
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
          xs={12} sm={4}>
             <ProductCard
           sx={{
            }}
            img={alfajores}
            titulo='alfajores'
            descripcion='Rellenos de dulce de leche y bañados en chocolate'
            precio='15'
            enlace='/tartas'
            />
          </Grid>
          <Grid item xs={12} sm={4}>
             <ProductCard
           sx={{
            }}
            img={alfajores}
            titulo='alfajores'
            descripcion='Rellenos de dulce de leche y bañados en chocolate'
            precio='15'
            enlace='/tartas'
            />
          </Grid>
          <Grid item xs={12} sm={4}>
             <ProductCard
           sx={{
            }}
            img={alfajores}
            titulo='alfajores'
            descripcion='Rellenos de dulce de leche y bañados en chocolate'
            precio='15'
            enlace='/tartas'
            />
          </Grid>
          <Grid item xs={12} sm={4}>
             <ProductCard
           sx={{
            }}
            img={alfajores}
            titulo='alfajores'
            descripcion='Rellenos de dulce de leche y bañados en chocolate'
            precio='15'
            enlace='/tartas'
            />
          </Grid>
          <Grid item xs={12} sm={4}>
             <ProductCard
           sx={{
            }}
            img={alfajores}
            titulo='alfajores'
            descripcion='Rellenos de dulce de leche y bañados en chocolate'
            precio='15'
            enlace='/tartas'
            />
          </Grid>
          <Grid item xs={12} sm={4}>
             <ProductCard
           sx={{
            }}
            img={alfajores}
            titulo='alfajores'
            descripcion='Rellenos de dulce de leche y bañados en chocolate'
            precio='15'
            enlace='/tartas'
            />
          </Grid>
          <Grid item xs={12} sm={4}>
             <ProductCard
           sx={{
            }}
            img={alfajores}
            titulo='alfajores'
            descripcion='Rellenos de dulce de leche y bañados en chocolate'
            precio='15'
            enlace='/tartas'
            />
          </Grid>
         
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Cajas

