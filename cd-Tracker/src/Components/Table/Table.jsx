import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Table.css";
import PositionedMenu from "../PositionedMenu/PositionedMenu";
import Filter_icon from "../../assets/filter_icon.svg?react";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteIcon from "../../assets/delete.svg?react";
import EditPopup from "../EditPopup/EditPopup";

export default function DataTable() {
  const [rows, setRows] = React.useState([
    {
      id: 1,
      ClientName: "Goblin Family",
      ContactPerson: "PM",
      ContactNumber: "9464556",
      Email: "goblinfamily@gmail.com",
      DemoDate: "1334566",
      Location: "cbe",
      MeetingType: "F2F",
      DemoStatus: "completed",
      key: "1",
      actions: "",
    },
    {
      id: 2,
      ClientName: "Aaludrites",
      ContactPerson: "Pm",
      ContactNumber: "2131331212332132",
      Email: "goblinfamily@gmail.com",
      DemoDate: "133455566",
      Location: "Cbe",
      MeetingType: "F2F",
      DemoStatus: "completed",
      key: "2",
      actions: "",
    },
    {
      id: 3,
      ClientName: "ganesan",
      ContactPerson: "PM",
      ContactNumber: "32332",
      Email: "aaludrites@gmail.com",
      DemoDate: "13343235566",
      Location: "dindigul",
      MeetingType: "F2F",
      DemoStatus: "completed",
      key: "3",
      actions: "",
    },
    {
      id: 4,
      ClientName: "Goblin Family",
      ContactPerson: "Hr",
      ContactNumber: "3223131132",
      Email: "goblinfamily@gmail.com",
      DemoDate: "133432sads35566",
      Location: "Cbe",
      MeetingType: "F2F",
      DemoStatus: "completed",
      key: "4",
      actions: "",
    },
    {
      id: 5,
      ClientName: "Goblin Family",
      ContactPerson: "PM",
      ContactNumber: "3232332",
      Email: "gmail22@gmail.com",
      DemoDate: "13343322sads35566",
      Location: "Cbe",
      MeetingType: "F2F",
      DemoStatus: "completed",
      key: "5",
      actions: "",
    },
    {
      id: 6,
      ClientName: "Goblin Family",
      ContactPerson: "PM",
      ContactNumber: "1261661",
      Email: "goblinfamily@gmail.com",
      DemoDate: "jsahjkj",
      Location: "Cbe",
      MeetingType: "F2F",
      DemoStatus: "completed",
      key: "6",
      actions: "",
    },
    {
      id: 7,
      ClientName: "Goblin Family",
      ContactPerson: "pM",
      ContactNumber: "3133212132",
      Email: "ganesan@gmail.com",
      DemoDate: "jsahsssjkj",
      Location: "chennai",
      MeetingType: "F2F",
      DemoStatus: "completed",
      key: "7",
      actions: "",
    },
    {
      id: 8,
      ClientName: "Goblin Family",
      ContactPerson: "PM",
      ContactNumber: "3133212132",
      Email: "goblinfamily@gmail.com",
      DemoDate: "jsahsssjkj",
      Location: "Cbe",
      MeetingType: "F2F",
      DemoStatus: "completed",
      key: "8",
      actions: "",
    },
    {
      id: 9,
      ClientName: "Goblin Family",
      ContactPerson: "PM",
      ContactNumber: "3133212132",
      Email: "goblinfamily@gmail.com",
      DemoDate: "jsahsssjkj",
      Location: "banglore",
      MeetingType: "F2F",
      DemoStatus: "completed",
      key: "9",
      actions: "",
    },
    {
      id: 10,
      ClientName: "Goblin Family",
      ContactPerson: "PM",
      ContactNumber: "3133212132",
      Email: "goblinfamily@gmail.com",
      DemoDate: "jsahsssjkj",
      Location: "Cbe",
      MeetingType: "F2F",
      DemoStatus: "completed",
      key: "10",
      actions: "",
    },
  ]);

  const selectionChangeHandler = (event, rowIndex) => {
    const updatedRows = [...rows];
    console.log("updatedRows", updatedRows);
    console.log("rowIndex", rowIndex);
    if (updatedRows[rowIndex]) {
      // Check if the row exists
      updatedRows[rowIndex].MeetingType = event.target.value;
      setRows(updatedRows);
    }
  };
  const demoHandler = (event, rowIndex) => {
    const updatedRows = [...rows];
    console.log("updatedRows", updatedRows);
    console.log("rowIndex", rowIndex);
    if (updatedRows[rowIndex]) {
      // Check if the row exists
      updatedRows[rowIndex].DemoStatus = event.target.value;
      setRows(updatedRows);
    }
  };
  const actionHandler = (event, rowIndex) => {
    const updatedRows = [...rows];
    console.log("updatedRows", updatedRows);
    console.log("rowIndex", rowIndex);
    // if (updatedRows[rowIndex]) {
    //   // Check if the row exists
    //   updatedRows[rowIndex].actions = event.target.value;
    //   setRows(updatedRows);
    // }
   
  };

  const meetingTypes = ["F2F", "Virtual"];

  const demoType = ["yet to present", "completed"];

  const actionType = ["Edit", "Delete"];

  const columns = [
    {
      field: "ClientName",
      headerName: "Client Name",
      width: 200,
      sortable: true,
    },
    {
      field: "ContactPerson",
      headerName: "Contact Person",
      width: 200,
      sortable: true,
    },
    { field: "Email", headerName: "Email", width: 200, sortable: true },
    { field: "DemoDate", headerName: "Demo Date", width: 200, sortable: true },
    {
      field: "ContactNumber",
      headerName: "Contact Number",
      width: 200,
      sortable: true,
    },
    { field: "Location", headerName: "Location", width: 200, sortable: true },

    {
      field: "MeetingType",
      headerName: "Meeting Type",
      width: 150,
      sortable: true,
      headerRender: (props) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* You can replace the icon with your own icon component */}
          <img
            src={Filter_icon}
            alt="Filter Icon"
            style={{ marginRight: "4px" }}
          />
          <span>{props.colDef.headerName}</span>
        </div>
      ),
      renderCell: (params) => (
        <Select
          value={params.row.MeetingType || ""}
          onChange={(event) => {
            console.log("params", params);

            selectionChangeHandler(event, Number(params.id) - 1);
          }}
          IconComponent={KeyboardArrowDownIcon}
        >
          {/* <Button id="meeting-type-label">F2F</Button> */}
          {meetingTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      ),
    },
    {
      field: "DemoStatus",
      headerName: "Demo Status",
      width: 150,
      sortabletrue: true,
      headerRender: (props) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* You can replace the icon with your own icon component */}
          {/* <img
            src={Filter_icon}
            alt="Filter Icon"
            style={{ marginRight: "4px" }}
          /> */}
          <span>{props.colDef.headerName}</span>
        </div>
      ),
      renderCell: (params) => (
        <Select
          value={params.row.DemoStatus || ""}
          onChange={(event) => {
            console.log("params", params);

            demoHandler(event, Number(params.id) - 1);
          }}
          IconComponent={KeyboardArrowDownIcon}
        >
          {demoType.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      ),
    },
    {
      field: "Actions",
      headerName: "",
      sortabletrue: true,
      renderCell: (params) => (
        <Select
          value={params.row.actions || ""}
          onChange={(event) => {
            console.log("params", params);

            actionHandler(event, Number(params.id) - 1);
          }}
          IconComponent={MoreHorizIcon}
        >
          {/* <Button id="meeting-type-label">F2F</Button> */}
          {actionType.map((type) =>
            type == "Edit" ? (
              <MenuItem key={type} value={type}>
                <CreateOutlinedIcon />
                {type}
              </MenuItem>
            ) : (
              <MenuItem key={type} value={type}>
                <DeleteIcon/>
                {type}
              </MenuItem>
            )
          )}
        </Select>
      ),
    },
  ];

  return (
    <div style={{ height: "73.5vh" }}>
      <PositionedMenu />
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
        columnIndexes={[0, 1, 2]}
        // onEditCellChange={handleEditCellChange}
      />
    </div>
  );
}
