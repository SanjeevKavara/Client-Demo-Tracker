import React, { useState } from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lime } from "@mui/material/colors";
import "./FilterMenuContent.css"; // Make sure to import CSS file

const theme = createTheme({
  palette: {
    primary: lime,
    secondary: {
      main: "#082760",
      contrastText: "#fafafa",
    },
  },
});

export default function FilterMenuContent() {
  const [formData, setFormData] = useState({
    clientName: "",
    contactPerson: "",
    contactNumber: "",
    emailId: "",
    location: "",
    demoDate: "",
  });

  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [meetingTypeDropdownOpen, setMeetingTypeDropdownOpen] = useState(false);
  const [demoStatusDropdownOpen, setDemoStatusDropdownOpen] = useState(false);

  const toggleLocationDropdown = () => {
    setLocationDropdownOpen(!locationDropdownOpen);
  };

  const toggleMeetingTypeDropdown = () => {
    setMeetingTypeDropdownOpen(!meetingTypeDropdownOpen);
  };

  const toggleDemoStatusDropdown = () => {
    setDemoStatusDropdownOpen(!demoStatusDropdownOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <form className="formContent">
        <div className="demoDate labelss">
          <div>
            <label>Date</label>
          </div>
          <div className="inputfields">
            <input type="date" name="demoDate" />
          </div>
        </div>
        <div className="meetingtype labelss">
          <div>
            <label>Location</label>
          </div>
          <div className="dropdown" onClick={toggleLocationDropdown}>
            <span>Location</span>
            <div
              className={
                locationDropdownOpen
                  ? "dropdown-contentOpen"
                  : "dropdown-contentClose"
              }
            >
              <p className="optionss">Location 1</p>
              <hr />
              <p className="optionss">Location 2</p>
            </div>
          </div>
        </div>
        <div className="meetingtype labelss">
          <div>
            <label>Meeting Type:</label>
          </div>
          <div className="dropdown" onClick={toggleMeetingTypeDropdown}>
            <span>Select Meeting Type</span>
            <div
              className={
                meetingTypeDropdownOpen
                  ? "dropdown-contentOpen"
                  : "dropdown-contentClose"
              }
            >
              <p className="optionss">Fact to Face</p>
              <hr />
              <p className="optionss">Virtual</p>
            </div>
          </div>
        </div>
        <div className="meetingtype labelss">
          <div>
            <label>Demo Status</label>
          </div>
          <div className="dropdown" onClick={toggleDemoStatusDropdown}>
            <span>Select Demo status Type</span>
            <div
              className={
                demoStatusDropdownOpen
                  ? "dropdown-contentOpen"
                  : "dropdown-contentClose"
              }
            >
              <p className="optionss">Fact to Face</p>
              <hr />
              <p className="optionss">Virtual</p>
            </div>
          </div>
        </div>
        <div className="btnflex">
          <Button
            variant="contained"
            color="secondary"
            className="createBtn"
            fullWidth
          >
            Reset
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className="createBtn"
            fullWidth
          >
            Apply
          </Button>
        </div>
      </form>
    </ThemeProvider>
  );
}
