import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lime } from "@mui/material/colors";
import "./FilterMenuContent.css"; // Make sure to import CSS file
import filterApi from "../../api/filterApi";

const theme = createTheme({
  palette: {
    primary: lime,
    secondary: {
      main: "#082760",
      contrastText: "#fafafa",
    },
  },
});

export default function FilterMenuContent({ getFilterContent, resetFilter }) {
  const [formData, setFormData] = useState({
    DemoDate: "",
    location: "",
    MeetingType: "",
    DemoStatus: "",
  });

  const meetRef = useRef("");

  const [meet, setMeet] = useState("Select Meeting Type");
  const [demotype, setDemotype] = useState("Select Demo Status Type");

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

  const dateChanger = (e) => {
    setFormData({ ...formData, DemoDate: e.target.value });
  };

  const updateMeetype = (e) => {
    setMeet(e.target.innerText);
    setFormData({ ...formData, MeetingType: e.target.innerText });
  };

  const updateDemoStatus = (e) => {
    setDemotype(e.target.innerText);
    setFormData({ ...formData, DemoStatus: e.target.innerText });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    async function filterData() {
      try {
        const response = await filterApi(formData);
        if (response) {
          getFilterContent(response);
        } else {
          console.error("Failed to create demo user");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    filterData();

    setFormData({
      DemoDate: "",
      location: "",
      MeetingType: "",
      DemoStatus: "",
    });

    meetRef.current = "";
  };

  const resetHandler = () => {
    setMeet("");
    setDemotype("");
    setFormData({
      DemoDate: "",
      location: "",
      MeetingType: "",
      DemoStatus: "",
    });
    resetFilter();
  };

  return (
    <ThemeProvider theme={theme}>
      <form className="formContent">
        <div className="demoDate labelss">
          <div>
            <label>Date</label>
          </div>
          <div className="inputfields">
            <input
              type="date"
              name="DemoDate"
              onChange={dateChanger}
              value={formData.DemoDate}
            />
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
            <span ref={meetRef}>{meet}</span>
            <div
              className={
                meetingTypeDropdownOpen
                  ? "dropdown-contentOpen"
                  : "dropdown-contentClose"
              }
            >
              <p className="optionss" onClick={updateMeetype}>
                F2F
              </p>
              <hr />
              <p className="optionss" onClick={updateMeetype}>
                Virtual
              </p>
            </div>
          </div>
        </div>
        <div className="meetingtype labelss">
          <div>
            <label>Demo Status</label>
          </div>
          <div className="dropdown" onClick={toggleDemoStatusDropdown}>
            <span>{demotype}</span>
            <div
              className={
                demoStatusDropdownOpen
                  ? "dropdown-contentOpen"
                  : "dropdown-contentClose"
              }
            >
              <p className="optionss" onClick={updateDemoStatus}>
                F2F
              </p>
              <hr />
              <p className="optionss" onClick={updateDemoStatus}>
                Virtual
              </p>
            </div>
          </div>
        </div>
        <div className="btnflex">
          <Button
            variant="contained"
            color="secondary"
            className="createBtn"
            onClick={resetHandler}
            fullWidth
          >
            Reset
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className="createBtn"
            type="submit"
            onClick={handleSubmit}
            fullWidth
          >
            Apply
          </Button>
        </div>
      </form>
    </ThemeProvider>
  );
}
