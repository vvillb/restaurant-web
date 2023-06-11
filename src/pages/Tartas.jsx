import React from 'react'
import Layout from '../ThemeLayout/Layout'
import { Grid, Typography } from '@mui/material'
import tarta from '../assets/images/tartas1.jpg'
import tarta2 from '../assets/images/tartas3.jpg'
import PhotoRightTextLeft from '../assets/utils/PhotoRightTextLeft'
import PhotoLeftTextRight from '../assets/utils/PhotoLeftTextRight'
import tartaDDL from '../assets/images/tartaDDL.jpg'
import cheesecake from '../assets/images/cheesecake1.jpg'
import deathbychoc from '../assets/images/tartaChoco.jpg'
import bizcochoFit from '../assets/images/carrotCake2.jpg'
import brookie from '../assets/images/brookie.jpg'
import tartaAlfajor from '../assets/images/tartaAlfajor.jpg'


const Tartas = () => {
  return (
    <Layout>
      <Grid container maxWidth='100vw' overflow='hidden'>
        <Grid item xs={12}
        sx={{
          height:{xs:'65vh',sm:'75vh'},
          background: `linear-gradient( to top, rgba(247,241,237,1), transparent), url(${tarta2})`,         
          backgroundSize:'cover',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
         
        }}>
          <Typography variant='h2'>
            Tartas para todos los gustos
          </Typography>
        </Grid>
        <Grid item xs={12} backgroundColor='background.main'>
          <Typography variant='h5' paddingLeft='10%' paddingRight='10%'>
            Minim Lorem occaecat ipsum dolor consequat sint minim in aliqua Lorem pariatur duis.Aute reprehenderit ullamco elit consequat ea exercitation quis nostrud adipisicing reprehenderit duis. Ex excepteur officia ea eiusmod magna aute ullamco commodo aliquip laborum ad ut. Laboris duis sunt magna do in reprehenderit. Ad deserunt non deserunt velit mollit Lorem culpa cupidatat cillum eiusmod quis incididunt. Consectetur enim adipisicing reprehenderit do elit aliquip incididunt velit ea sunt. Cillum enim non ea culpa pariatur ullamco voluptate sint non ad pariatur.
          </Typography>
        </Grid>
        <PhotoRightTextLeft image={tartaDDL}  titulo="Bizcocho marmolado" >
          Bizcocho marmolado relleno de dulce de leche
       </PhotoRightTextLeft>
        <PhotoLeftTextRight image={cheesecake} direction="row" titulo="Cheesecake" >
          Voluptate velit pariatur sint quis irure nulla officia elit ea dolore cupidatat labore. Irure labore eu id esse. Amet amet minim ut laboris.
        </PhotoLeftTextRight>
        <PhotoRightTextLeft image={deathbychoc}  titulo="tarta death by chocolate" >
          Voluptate velit pariatur sint quis irure nulla officia elit ea dolore cupidatat labore. Irure labore eu id esse. Amet amet minim ut laboris.
        </PhotoRightTextLeft>
        <PhotoLeftTextRight image={bizcochoFit} direction="row" titulo="Carrot Cake FIT" >
          Voluptate velit pariatur sint quis irure nulla officia elit ea dolore cupidatat labore. Irure labore eu id esse. Amet amet minim ut laboris.
        </PhotoLeftTextRight>
        <PhotoRightTextLeft image={brookie}  titulo="Brookie Pie" >
          Voluptate velit pariatur sint quis irure nulla officia elit ea dolore cupidatat labore. Irure labore eu id esse. Amet amet minim ut laboris.
        </PhotoRightTextLeft>
        <PhotoLeftTextRight image={tartaAlfajor} direction="row" titulo="Tarta de alfajor" >
          Voluptate velit pariatur sint quis irure nulla officia elit ea dolore cupidatat labore. Irure labore eu id esse. Amet amet minim ut laboris.
        </PhotoLeftTextRight>
        
      </Grid>
      
    </Layout>
  )
}

export default Tartas
