import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import './CustomizedMenus.css'
import AddIcon from '@mui/icons-material/Add';
import Vector from '../../assets/Vector.svg?react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple, } from '@mui/material/colors';

import CloseIcon from '@mui/icons-material/Close';
import FilterMenuContent from './FilterMenuContent';



const theme = createTheme({
  palette: {
      primary: lime,
      secondary: {
          main: '#FFFFFF',
      },
  },
});


export default function CustomizedMenus() {
    const [state, setState] = React.useState({
        right: false, // Only 'right' anchor is set to false initially
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const form = (
        <Box
            sx={{ width: '604px', padding: '16px', borderRadius: '8px 0px 0px 8px' }}
            role="presentation"
            onClick={(event) => event.stopPropagation()} // Prevent closing the sidebar when clicking inside the form
        // onKeyDown={toggleDrawer('right', false)}
        >
            <Typography variant="h6">Filter</Typography>
            <div className="flexDiv">
            <h2>Filter</h2>
            <CloseIcon  onClick={toggleDrawer('right', false)} />
            </div>
            <FilterMenuContent />
            
      
            {/* <Button variant="contained" color="primary" fullWidth>
                Submit
            </Button> */}
        </Box>
    );

    return (
        <ThemeProvider theme={theme}>
     
        <div>
            <Button onClick={toggleDrawer('right', true)} id='filterBtn' color='secondary' ><Vector /> Filter</Button>
            <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {form}
            </Drawer>
        </div>
        </ThemeProvider>
    );
}
