import React, { useState } from 'react'
import Layout from '../ThemeLayout/Layout'
import { Box, Button, Checkbox, FormControl, Grid, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/es';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import es from 'dayjs/locale/es';



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
  const [nombre,setNombre]=useState('');
  const [pedido,setPedido]=useState([]);
  const [fecha,setFecha]=useState('');
  const [comment,setComment]=useState('');
  const[phone,setPhone]=useState('');
  const [formError,setFormError]=useState(false)

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPedido(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  const handleSubmit=(e)=>{
    e.preventDefault();
    if (nombre===''||pedido.length===0||phone===''){
      setFormError(true);
      return
    }

    setFormError(false);
    alert('Enviado! :)');

  }
  const validatePhone = (phone) => {
    // Regular expression for phone number validation
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  return (
    <Layout>
        <Grid container
        sx={{
          maxWidth:'100vw'
        }}
        >
            <Grid item padding='10%'
            maxWidth='100vw'>
                <Typography variant='h2' >Estás a un paso de disfrutarlo...</Typography>
                <Typography variant='h3'>Rellena el formulario y me pondré en contacto contigo</Typography>
            </Grid>
            <Grid item
                component="form"
                onSubmit={handleSubmit}
                sx={{
                   paddingLeft:'10%',
                   paddingBottom:'10%',
                   justifyContent:'center',
                   display:'grid'
                   
                }}
                noValidate
                autoComplete="on"
                >
                    
                         <TextField id="outlined-basic" label="Nombre" variant="outlined" required
                         onChange={e=>setNombre(e.target.value)} 
                         sx={{
                            width:'80vw',
                            marginBottom:'3%'
                         }}/>
                            <InputLabel id="demo-multiple-checkbox-label">Selecciona los productos que desees</InputLabel>
                            <Select
                                sx={{
                                    width:'80vw',
                                    marginTop:'2%',
                                    marginBottom:'3%'
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

                            <TextField id="outlined-basic" label="comentario" variant="outlined" 
                            onChange={e=>setComment(e.target.value)} 
                              sx={{
                                  width:'80vw',
                                  marginTop:'1%',
                                  
                              }}/>


                            <InputLabel id="demo-multiple-checkbox-label" sx={{marginTop:'3%'}}>¿Para cuándo sería el pedido?</InputLabel>
                            <LocalizationProvider adapterLocale={es} dateAdapter={AdapterDayjs}>
                                <DatePicker label="fecha" format='DD-MM-YYYY' sx={{marginTop:'2%'}}
                                />                          
                            </LocalizationProvider>

                            <InputLabel id="demo-multiple-checkbox-label" sx={{marginTop:'3%'}}>Te contactaré por whatsapp</InputLabel>

                            <TextField id="outlined-basic" label="Teléfono" variant="outlined" type='tel' required
                            onChange={e=>setPhone(e.target.value)} 
                              sx={{
                                  width:'80vw',
                                  marginTop:'2%',
                                  marginBottom:'3%'
                                  
                              }}/>
                          {formError && (
                            <Typography variant="body2" color="error">
                              Todos los campos son requeridos.
                            </Typography>
                          )}

                              <Button variant='contained' type='submit'>Enviar</Button>
                    
                
            </Grid>
            
        
        </Grid>
      
    </Layout>
  )
}

export default Pedidos
