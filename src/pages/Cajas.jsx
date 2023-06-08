import React from 'react'
import Layout from '../ThemeLayout/Layout'
import { Grid, Slide, Typography } from '@mui/material'
import cookiesBackground from '../assets/images/cookies1.jpg'
import { useInView } from 'react-intersection-observer'

const Cajas = () => {
  
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: false
      });


  return (
    <Layout>
      <Grid container>
        <Grid item
        ref={ref}
        width='100vw'
        sx={{
          height:{xs:'100vh',md:'50vh'},
          background: `linear-gradient( to right, rgba(247,241,237,1), transparent), url(${cookiesBackground})`,
          backgroundSize:'cover', 
          justifyContent:'center',
          display:'flex',
          minWidth:'100vw'
        }}
        >
           <Slide  in={inView} hysteresis={0.1} mountOnEnter   direction="up" timeout={1000}>
  
            <Typography variant='h2'
            sx={{
                alignSelf:'center',
                padding:'5%',
                maxWidth:'100vw',
                overflow:'hidden'
            }}>
            Un regalo original...o para que te des un capricho
          </Typography>

            </Slide>
          

        </Grid>
      </Grid>
    </Layout>
  )
}

export default Cajas

