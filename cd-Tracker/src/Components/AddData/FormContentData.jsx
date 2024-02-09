import React from 'react'
import { useState } from 'react';
import './FormContent.css'

export  default function FormContentData() {

        const [formData, setFormData] = useState({
            clientName: '',
            contactPerson: '',
            contactNumber: '',
            emailId: '',
            location: '',
            demoDate:''
        });

        return (
            <form>
                <label>
                    Client Name:
                    <input type="text" name="clientName" />
                </label>
                <label>
                    Contact Person:
                    <input type="text" name="contactPerson" />
                </label>
                <label>
                    Contact Number:
                    <input type="text" name="contactNumber" />
                </label>
                <label>
                    Email ID:
                    <input type="text" name="emailId" />
                </label>
                <label>
                    Location:
                    <input type="text" name="location" />
                </label>
                <label>
                    Demo Date:
                    <input type="date" name="demoDate" />
                </label>
                <label>
                    Meeting Type:
                    <select name="meetingType">
                        <option value="virtual">Virtual</option>
                        <option value="in-person">In-Person</option>
                    </select>
                </label>
            </form>

        )
    }
