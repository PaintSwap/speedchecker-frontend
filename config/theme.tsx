import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
// Create a theme instance.
const theme = createTheme({
palette: {
    mode: 'dark', //default theme
    primary: {
      main: '#1045ff',
    },
    secondary: {
      main: '#FFF',
    },
    error: {
    main: red.A400,
    },
  },
})
export default theme