import { createTheme } from "@mui/material";
import { esES } from 'dayjs/locale/es';

export const VirbakesTheme=createTheme( {
    
        palette:{
            background:{
                main:'#f7f1ed',
                pink:'#febeb0'
            },
           highlights:{
                green: '#3d5a5b',
                blue:'#2f365f'
           },        
           
    }, 
        esES,
    typography:{
        h1:{
            fontFamily: "'Abril Fatface' ,'Playfair Display'",
            color:'#2f365f'
        },
        h2:{
            fontFamily:  "'Abril Fatface','Playfair Display'",
            color:'#2f365f'
        },
        h3:{
            fontFamily:  "'Abril Fatface','Playfair Display'",
            color:'#2f365f'
        },h4:{
            fontFamily:  "'Abril Fatface','Playfair Display'",
           
        },
        h5:{
            fontFamily: "'Fira Sans','Cormorant Garamond'"  
        },     
        h6:{
            fontFamily: "'Fira Sans','Cormorant Garamond'"       
        },
        subtitle1:{
            fontFamily: "'Fira Sans','Cormorant Garamond'" 
        },
        subtitle2:{
            fontFamily: "'Fira Sans','Cormorant Garamond'" 
        },
        body1:{
            fontFamily: "'Fira Sans','Cormorant Garamond'"         },
        body2:{
            fontFamily: "'Fira Sans','Cormorant Garamond'" 
        },
        button:{
            fontFamily: "'Fira Sans','Cormorant Garamond'" 
        },
        caption:{
            fontFamily: "'Fira Sans','Cormorant Garamond'" 
        },
        overline:{
            fontFamily: "'Fira Sans','Cormorant Garamond'" 
        },  
        h3Smaller:{
            fontFamily:  "'Abril Fatface','Playfair Display'",
            color:'#2f365f',
            fontSize:'200%'
        },
        h3med:{
            fontFamily:  "'Abril Fatface','Playfair Display'",
            color:'#2f365f',
            fontSize:'250%'
        },   
       
    },components:{
        MuiButton:{
            styleOverrides: {
                root: {
                  fontSize: '0.8rem',
                  textDecoration:'none',
                  color:'#2f365f',
                  
                },
                contained:{
                    backgroundColor:'#2f365f',
                    color:'#f7f1ed',
                    ':hover':{
                        backgroundColor:'#febeb0'
                    }  
                    
                },
                outlined:{
                    borderColor:'#2f365f'
                }
             
              },
        },
        MuiLink:{
            styleOverrides:{
                root:{
                    textDecoration:'none',
                    textTransform:'lowercase',
                    
                }
            }
        }
    }

})
