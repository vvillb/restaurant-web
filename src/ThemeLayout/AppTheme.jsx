import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import {VirbakesTheme} from './VirbakesTheme'


const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={VirbakesTheme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}

export default AppTheme
