import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './Table.css'

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
    { id: 1, ClientName: 'Goblin Family', ContactPerson: 'PM',ContactNumber : "9464556", Email: 'goblinfamily@gmail.com',DemoDate: "1334566", Location: 'Cbe',  MeetingType:'Virtual', key: "1" },
    { id: 2, ClientName: 'Goblin Family', ContactPerson: 'PM',ContactNumber: "2131331212332132", Email: 'goblinfamily@gmail.com', DemoDate: "133455566", Location: 'Cbe',  MeetingType:'F2F', key: "2" },
    { id: 3, ClientName: 'Goblin Family', ContactPerson: 'PM',ContactNumber: "32332", Email: 'goblinfamily@gmail.com',DemoDate: "13343235566", Location: 'Cbe',  MeetingType:'F3F', key: "3" },
    { id: 4, ClientName: 'Goblin Family', ContactPerson: 'PM',ContactNumber: "3223131132", Email: 'goblinfamily@gmail.com',DemoDate: "133432sads35566", Location: 'Cbe',  MeetingType:'F4F', key: "4" },
    { id: 5, ClientName: 'Goblin Family', ContactPerson: 'PM',ContactNumber: "3232332", Email: 'goblinfamily@gmail.com',DemoDate: "13343322sads35566", Location: 'Cbe',  MeetingType:'M&M', key: "5" },
    { id: 6, ClientName: 'Goblin Family', ContactPerson: 'PM',ContactNumber: "1261661", Email: 'goblinfamily@gmail.com',DemoDate: "jsahjkj", Location: 'Cbe',  MeetingType:'F5F', key: "6" },
    { id: 7, ClientName: 'Goblin Family', ContactPerson: 'PM',ContactNumber: "3133212132", Email: 'goblinfamily@gmail.com',DemoDate: "jsahsssjkj",  Location: 'Cbe',  MeetingType:'F6F', key: "7" },
    
];

export default function DataTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row)=> row.id}
            />
        </div>
    );
}