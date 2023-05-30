import { createTheme } from "@mui/material";

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
           
    }, typography:{
        h1:{
            fontFamily: "'Abril Fatface' ,'Playfair Display'"
        },
        h2:{
            fontFamily:  "'Abril Fatface','Playfair Display'"
        },
        h3:{
            fontFamily: "'Fira Sans','Cormorant Garamond'"
        },h4:{
            fontFamily:  "'Abril Fatface','Playfair Display'"
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
       
    },components:{
        MuiButton:{
            styleOverrides: {
                root: {
                  fontSize: '0.8rem',
                  textDecoration:'none',
                  color:'#2f365f'
                },
              },
        },
        MuiLink:{
            styleOverrides:{
                root:{
                    textDecoration:'none',
                    textTransform:'lowercase'
                }
            }
        }
    }

})
