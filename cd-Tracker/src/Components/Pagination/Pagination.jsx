import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple, } from '@mui/material/colors';
import './Pagination.css'


const theme = createTheme({
    palette: {
      primary: lime,
      secondary: {
        main: '#082760',
        contrastText: '#fafafa',
      },
    },
  });

export default function BasicPagination() {
  return (
    <ThemeProvider theme={theme}>
    <Stack spacing={2}>
      
      
      <Pagination count={10} color="secondary" />
      
    </Stack>
    </ThemeProvider>
  );
}
