import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Palette {
    subtle: Palette['primary']
  }
  interface PaletteOptions {
    subtle: PaletteOptions['primary']
  }
}

// Create a theme instance.
const theme = createTheme({
palette: {
    mode: 'dark', //default theme
    primary: {
      main: '#1045ff',
    },
    secondary: {
      main: 'rgb(250, 250, 250)',
    },
    subtle: {
      main: '#7d8fd1',
    },
    error: {
      main: red.A400,
    },
  },
})
export default theme