import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import './AddData.css'
import AddIcon from '@mui/icons-material/Add';

export default function TemporaryDrawer() {
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
            sx={{ width: '500px', padding: '16px' }}
            role="presentation"
            onClick={toggleDrawer('right', false)}
            onKeyDown={toggleDrawer('right', false)}
        >
            <Typography variant="h6">Add Demo Detail</Typography>
            <h1>Add Client Details</h1>
            <TextField
            required
                label="Client Name"
                variant="outlined"
                fullWidth
                margin="normal"
                onClick={(event) => event.stopPropagation()}
            />
            <TextField
                label="Contact Person"
                variant="outlined"
                fullWidth
                margin="normal"
                onClick={(event) => event.stopPropagation()}
            />
            <TextField
            required
                label="Contact Number"
                variant="outlined"
                fullWidth
                margin="normal"
                onClick={(event) => event.stopPropagation()}
            />
            <TextField
            required
                label="Email ID"
                variant="outlined"
                fullWidth
                margin="normal"
                onClick={(event) => event.stopPropagation()}
            />
            <TextField
                label="Location"
                variant="outlined"
                fullWidth
                margin="normal"
                onClick={(event) => event.stopPropagation()}
            />
            <TextField
                label="Demo Date"
                type="date"
                variant="outlined"
                fullWidth
                margin="normal"
                onClick={(event) => event.stopPropagation()}
            />
            <TextField
                label="Meeting Type"
                variant="outlined"
                fullWidth
                margin="normal"
                onClick={(event) => event.stopPropagation()}
            />
            <Button variant="contained" color="primary" fullWidth>
                Submit
            </Button>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer('right', true)} id='addBtn'><AddIcon /> Add Demo Detail</Button>
            <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {form}
            </Drawer>
        </div>
    );
}
