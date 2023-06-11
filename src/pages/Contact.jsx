import React, { useEffect } from 'react'
import Layout from '../ThemeLayout/Layout'
import { Button, Grid, Link, Typography } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import me from '../assets/images/me.jpg'

const Contact = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  
  },[])
  return (
    <Layout>
        <Grid container
        spacing={2}
        minHeight='100vh'
        sx={{backgroundColor:'background.main'}}
        >
          <Grid item xs={12} md={6} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <Typography variant='h1' padding='10%'>
               ¿Qué te apetece? Hablemos!
            </Typography>
            
                <Typography variant='h5'>                
                Escríbeme por whatsapp o envíame un mensaje directo a través de instagram
                </Typography>
                <Grid item display='flex' flexDirection='row' >
                  <Grid item sx={{margin:'5%'}} >
                    <Link component={RouterLink} to='https://wa.me/34687095451'>
                  <Button variant='contained' >
                     <WhatsAppIcon />
                  </Button>               
                </Link>
                  </Grid>
                  <Grid item sx={{margin:'5%'}}>
                    <Link component={RouterLink} to='https://www.instagram.com/virbakes/'>
                  <Button variant='contained'  >
                   <InstagramIcon />
                  </Button>
                </Link>
                    </Grid>
           
                
            </Grid>
              
          </Grid>
          <Grid item xs={12} md={6}
          sx={{
            background: `linear-gradient( to right, rgba(247,241,237,1), transparent), url(${me})`,
            backgroundSize:'cover',
            aspectRatio:1.25,
            width:{xs:'100%',sm:'50%'},
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
           
          }}>

          </Grid>
        
        </Grid>
    </Layout>
  )
}

export default Contact
