import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
  typography: {
    allVariants: {
      color: "#009a22"
    },
  },
  palette: {
    mode: 'dark',
    text:{
      primary: "#009a22",
      secondary: "#80ce87",

    },
    primary: {
     main: "#009a22",
    },
    secondary: {
      main: '#ffcc00',
      contrastText: 'red',
    },

    contrastThreshold: 3,
  
    tonalOffset: 0.2,
  },
});