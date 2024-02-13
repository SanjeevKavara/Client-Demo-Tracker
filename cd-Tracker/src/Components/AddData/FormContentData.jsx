import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import './FormContent.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple, } from '@mui/material/colors';



const theme = createTheme({
    palette: {
        primary: lime,
        secondary: {
            main: '#082760',
            contrastText: '#fafafa',
        },
    },
});

export default function FormContentData() {

    const [formData, setFormData] = useState({
        clientName: '',
        contactPerson: '',
        contactNumber: '',
        emailId: '',
        location: '',
        demoDate: ''
    });

    const [stylee, setStylee] = useState("dropdown-contentClose");

    const openMenu = (e) => {
        setStylee(stylee == 'dropdown-contentClose' ? 'dropdown-contentOpen' : 'dropdown-contentClose');
    }

    return (
        <ThemeProvider theme={theme}>
            <form className='formContent' >
                <div className='clientName labelss'>
                    <div>
                        <label>
                            Client Name:
                        </label>
                    </div>
                    <div className='inputfields'>
                        <input type="text" name="clientName" required />
                    </div>
                </div>
                <div className='contactPerson labelss'>
                    <div>
                        <label>
                            Contact Person:
                        </label>
                    </div>
                    <div className='inputfields'>
                        <input type="text" name="contactPerson" />
                    </div>
                </div>
                <div className='contactNumber labelss'>
                    <div>
                        <label>
                            Contact Number:
                        </label>
                    </div>
                    <div className='inputfields'>
                        <input type="text" name="contactNumber" />
                    </div>
                </div>
                <div className='emailid labelss'>
                    <div>
                        <label>
                            Email ID:
                        </label>
                    </div>
                    <div className='inputfields'>
                        <input type="text" name="emailId" />
                    </div>
                </div>
                <div className='location labelss'>
                    <div>
                        <label>
                            Location:
                        </label>
                    </div>
                    <div className='inputfields'>
                        <input type="text" name="location" />
                    </div>
                </div>
                <div className='demoDate labelss'>
                    <div>
                        <label>
                            Demo Date:
                        </label>
                    </div>
                    <div className='inputfields'>
                        <input type="date" name="demoDate" />
                    </div>
                </div>
                <div className='meetingtype labelss'>
                    <div>
                        <label>
                            Meeting Type:
                        </label>
                    </div>
                    <div className="dropdown" onClick={openMenu}>
                        <span>Select Meeting Type</span>
                        <div className={stylee} >
                            <p className='optionss'>Fact to Face</p>
                            <hr />
                            <p className='optionss'>Virtual</p>
                        </div>
                    </div>
                    {/* <div className='inputfields'>
                    <select name="meetingType" className="custom-select">
                        <option className='options' value="virtual">Virtual</option>
                        <option className='options' value="in-person">Face to Face</option>
                    </select>
                </div> */}
                </div>

                <Button type='submit' variant="contained" color="secondary" className='createBtn' fullWidth>
                    Create
                </Button>

            </form>
        </ThemeProvider>

    )
}
