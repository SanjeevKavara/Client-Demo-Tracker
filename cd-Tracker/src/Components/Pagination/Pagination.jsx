import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple, } from '@mui/material/colors';
import { useState, useEffect } from 'react';
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

export default function BasicPagination({currPage}) {
  const [page, setPage] = useState(1);
  useEffect(()=>{
    currPage(page);
  },[page])

  const handleChange = (event, value) => {
    setPage(value);
    
  };

  return (
    <ThemeProvider theme={theme}>
    <Stack spacing={2}>
    {/* <Typography>Page: {page}</Typography> */}
      
      
      <Pagination count={10} page={page} color="secondary" onChange={handleChange} />
      
    </Stack>
    </ThemeProvider>
  );
}
