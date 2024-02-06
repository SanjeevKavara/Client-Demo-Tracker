import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './Table.css'
import PositionedMenu from '../PositionedMenu/PositionedMenu';
import MenuItem from '@mui/material/MenuItem';

const columns = [
    { field: 'ClientName', headerName: 'Client Name', width: 200 },
    { field: 'ContactPerson', headerName: 'Contact Person', width: 200 },
    { field: 'Email', headerName: 'Email', width: 300 },
    { field: 'DemoDate', headerName: 'Demo Date', width: 200 },
    { field: 'ContactNumber', headerName: 'Contact Number', width: 200 },
    { field: 'Location', headerName: 'Location', width: 150 },

    { field: 'MeetingType', headerName: 'Meeting Type', width: 230 },


];


const rows = [
    { id: 1, ClientName: 'Goblin Family', ContactPerson: 'PM',ContactNumber : "9464556", Email: 'goblinfamily@gmail.com',DemoDate: "1334566", Location: 'cbe',  MeetingType:'Virtual', key: "1" },
    { id: 2, ClientName: 'Aaludrites', ContactPerson: 'Pm',ContactNumber: "2131331212332132", Email: 'goblinfamily@gmail.com', DemoDate: "133455566", Location: 'Cbe',  MeetingType:'F2F', key: "2" },
    { id: 3, ClientName: 'ganesan', ContactPerson: 'PM',ContactNumber: "32332", Email: 'aaludrites@gmail.com',DemoDate: "13343235566", Location: 'dindigul',  MeetingType:'F3F', key: "3" },
    { id: 4, ClientName: 'Goblin Family', ContactPerson: 'Hr',ContactNumber: "3223131132", Email: 'goblinfamily@gmail.com',DemoDate: "133432sads35566", Location: 'Cbe',  MeetingType:'F4F', key: "4" },
    { id: 5, ClientName: 'Goblin Family', ContactPerson: 'PM',ContactNumber: "3232332", Email: 'gmail22@gmail.com',DemoDate: "13343322sads35566", Location: 'Cbe',  MeetingType:'M&M', key: "5" },
    { id: 6, ClientName: 'Goblin Family', ContactPerson: 'PM',ContactNumber: "1261661", Email: 'goblinfamily@gmail.com',DemoDate: "jsahjkj", Location: 'Cbe',  MeetingType:'F5F', key: "6" },
    { id: 7, ClientName: 'Goblin Family', ContactPerson: 'pM',ContactNumber: "3133212132", Email: 'ganesan@gmail.com',DemoDate: "jsahsssjkj",  Location: 'chennai',  MeetingType:'F6F', key: "7" },
    { id: 8, ClientName: 'Goblin Family', ContactPerson: 'PM',ContactNumber: "3133212132", Email: 'goblinfamily@gmail.com',DemoDate: "jsahsssjkj",  Location: 'Cbe',  MeetingType:'F6F', key: "8" },
    { id: 9, ClientName: 'Goblin Family', ContactPerson: 'PM',ContactNumber: "3133212132", Email: 'goblinfamily@gmail.com',DemoDate: "jsahsssjkj",  Location: 'banglore',  MeetingType:'F6F', key: "9" },
    { id: 10, ClientName: 'Goblin Family', ContactPerson: 'PM',ContactNumber: "3133212132", Email: 'goblinfamily@gmail.com',DemoDate: "jsahsssjkj",  Location: 'Cbe',  MeetingType:'F6F', key: "10" },
    { id:11, ClientName:'sanjeev', ContactPerson: 'teamlead',ContactNumber:"1289765334",Email: 'sanjeevgoblin@gmail.com',DemoDate: "dhgktsjnkj", Location: "trichy", MeetingType: "F6F",Key: "1"},
    { id:12, ClientName: 'tharunya', ContactPerson: 'intern', ContactNumber:"27085769879", Email:'tharunya@gmail.com', DemoDate: "yghjmtytfygiu", Location: "dindigul", MeetingType: "F6F",Key: "7"},
    

];



export default function DataTable() {
    return (
        <div style={{ height:'400px', width: '100%' }} >
            <PositionedMenu/>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row)=> row.id}
            />
        </div>

    );
}