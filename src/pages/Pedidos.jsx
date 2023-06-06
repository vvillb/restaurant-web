import React, { useState } from 'react'
import Layout from '../ThemeLayout/Layout'
import { Box, Checkbox, FormControl, Grid, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const productos=[
    'alfajores',
    'brownie',
    'cinammon rolls',
    'bizcocho',
    'bizcocho fit',
    'cookies',
    'cheesecake',
    'brookie pie',
    'otro'
]


const Pedidos = () => {
  const [pedido,setPedido]=useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPedido(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };



  return (
    <Layout>
        <Grid container>
            <Grid item padding='10%'>
                <Typography variant='h2' >Estás a un paso de disfrutarlo...</Typography>
                <Typography variant='h3'>Rellena el formulario y me pondré en contacto contigo</Typography>
            </Grid>
            <Grid item
                component="form"
                sx={{
                   paddingLeft:'10%',
                   
                }}
                noValidate
                autoComplete="on"
                >
                    
                         <TextField id="outlined-basic" label="Nombre" variant="outlined" 
                         sx={{
                            width:'80vw'
                         }}/>
                            <InputLabel id="demo-multiple-checkbox-label">Selecciona los prodcutos que desees</InputLabel>
                            <Select
                                sx={{
                                    width:'80vw'
                                }}
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                value={pedido}
                                onChange={handleChange}
                                input={<OutlinedInput label="Tag" />}
                                renderValue={(selected) => selected.join(', ')
                            }
                                
                                >
                                {productos.map((producto) => (
                                    <MenuItem key={producto} value={producto}>
                                    <Checkbox checked={pedido.indexOf(producto) > -1} />
                                    <ListItemText primary={producto} />
                                    </MenuItem>
                                ))}
                            </Select>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker label="fecha" />                          
                            </LocalizationProvider>
                    
                
            </Grid>
            
        
        </Grid>
      
    </Layout>
  )
}

export default Pedidos
