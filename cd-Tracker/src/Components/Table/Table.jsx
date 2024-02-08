import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './Table.css'
import PositionedMenu from '../PositionedMenu/PositionedMenu';
import filter_icon from '../../assets/filter_icon.svg?react'
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



export default function DataTable() {

  const [rows, setRows] = React.useState([
    { id: 1, ClientName: 'Goblin Family', ContactPerson: 'PM', ContactNumber: "9464556", Email: 'goblinfamily@gmail.com', DemoDate: "1334566", Location: 'cbe', MeetingType: 'F2F', key: "1" },
    { id: 2, ClientName: 'Aaludrites', ContactPerson: 'Pm', ContactNumber: "2131331212332132", Email: 'goblinfamily@gmail.com', DemoDate: "133455566", Location: 'Cbe', MeetingType: 'F2F', key: "2" },
    { id: 3, ClientName: 'ganesan', ContactPerson: 'PM', ContactNumber: "32332", Email: 'aaludrites@gmail.com', DemoDate: "13343235566", Location: 'dindigul', MeetingType: "F2F", key: "3" },
    { id: 4, ClientName: 'Goblin Family', ContactPerson: 'Hr', ContactNumber: "3223131132", Email: 'goblinfamily@gmail.com', DemoDate: "133432sads35566", Location: 'Cbe', MeetingType: 'F2F', key: "4" },
    { id: 5, ClientName: 'Goblin Family', ContactPerson: 'PM', ContactNumber: "3232332", Email: 'gmail22@gmail.com', DemoDate: "13343322sads35566", Location: 'Cbe', MeetingType: 'F2F', key: "5" },
    { id: 6, ClientName: 'Goblin Family', ContactPerson: 'PM', ContactNumber: "1261661", Email: 'goblinfamily@gmail.com', DemoDate: "jsahjkj", Location: 'Cbe', MeetingType: 'F2F', key: "6" },
    { id: 7, ClientName: 'Goblin Family', ContactPerson: 'pM', ContactNumber: "3133212132", Email: 'ganesan@gmail.com', DemoDate: "jsahsssjkj", Location: 'chennai', MeetingType: 'F2F', key: "7" },
    { id: 8, ClientName: 'Goblin Family', ContactPerson: 'PM', ContactNumber: "3133212132", Email: 'goblinfamily@gmail.com', DemoDate: "jsahsssjkj", Location: 'Cbe', MeetingType: 'F2F', key: "8" },
    { id: 9, ClientName: 'Goblin Family', ContactPerson: 'PM', ContactNumber: "3133212132", Email: 'goblinfamily@gmail.com', DemoDate: "jsahsssjkj", Location: 'banglore', MeetingType: 'F2F', key: "9" },
    { id: 10, ClientName: 'Goblin Family', ContactPerson: 'PM', ContactNumber: "3133212132", Email: 'goblinfamily@gmail.com', DemoDate: "jsahsssjkj", Location: 'Cbe', MeetingType: 'F2F', key: "10" },
    { id: 11, ClientName: 'sanjeev', ContactPerson: 'teamlead', ContactNumber: "1289765334", Email: 'sanjeevgoblin@gmail.com', DemoDate: "dhgktsjnkj", Location: "trichy", MeetingType: "F2F", Key: "1" },
    { id: 12, ClientName: 'tharunya', ContactPerson: 'intern', ContactNumber: "27085769879", Email: 'tharunya@gmail.com', DemoDate: "yghjmtytfygiu", Location: "dindigul", MeetingType: "F2F", Key: "7" },

  ]);

  const selectionChangeHandler = (event, rowIndex) => {
    const updatedRows = [...rows];
    console.log("updatedRows", updatedRows);
    console.log("rowIndex", rowIndex);
    if(updatedRows[rowIndex]) { // Check if the row exists
      updatedRows[rowIndex].MeetingType = event.target.value;
      setRows(updatedRows);
    }
  };

  const meetingTypes = ['F2F', 'Virtual'];
  const columns = [
    { field: 'ClientName', headerName: 'Client Name', width: 200, sortable: true },
    { field: 'ContactPerson', headerName: 'Contact Person', width: 200, sortable: true },
    { field: 'Email', headerName: 'Email', width: 300, sortable: true },
    { field: 'DemoDate', headerName: 'Demo Date', width: 200, sortable: true },
    { field: 'ContactNumber', headerName: 'Contact Number', width: 200, sortable: true },
    { field: 'Location', headerName: 'Location', width: 150, sortable: true },
    {
      field: 'MeetingType',
      headerName: 'Meeting Type',
      width: 230,
      sortable: true,
      renderCell: (params) => (
        
        <Select
        
          value={params.row.MeetingType || ''}
          
          onChange={(event) => {
            console.log("params", params);
           
            selectionChangeHandler(event, (Number(params.id) - 1))
          }}
          
        >
          <KeyboardArrowDownIcon/>
       
          <InputLabel id="meeting-type-label"
          > </InputLabel>
          
          {meetingTypes.map((type) => (
             
            <MenuItem key={type} value={type}>
              
              {type}
            </MenuItem>
          ))}
        </Select>
      ),
    },
  ];

  return (
    <div style={{ height: '73.5vh', width: '100%', overflowX: 'hidden'}} >
      
      <PositionedMenu />
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
      // onEditCellChange={handleEditCellChange}
      />
    </div>
  );
}