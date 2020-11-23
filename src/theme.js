import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Inter var',
      'Inter',
      'sans-serif'
    ].join(',')
  },
  palette: {
    text: {
      primary: '#333'
    },
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    background: {
      default: '#e7e7e7'

    }

  }
})

export default responsiveFontSizes(theme)
