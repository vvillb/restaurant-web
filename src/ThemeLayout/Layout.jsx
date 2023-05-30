import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Box, Grid, Toolbar } from '@mui/material'

const Layout = ({children}) => {
  return (
    <Box>
      
    <Nav/>
    <Box>
        <Toolbar/>
        {children}
    </Box>
    
    <Footer/>
    </Box>
  )
}

export default Layout
