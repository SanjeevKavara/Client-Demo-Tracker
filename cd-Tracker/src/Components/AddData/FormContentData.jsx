import React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import "./FormContent.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lime, purple } from "@mui/material/colors";
import createApi from "../../api/createApi";
import listApi from "../../api/listApi";

const theme = createTheme({
  palette: {
    primary: lime,
    secondary: {
      main: "#082760",
      contrastText: "#fafafa",
    },
  },
});

export default function FormContentData({ closeSubmit }) {
  const [options, setOptions] = useState("Select Meeting Type");

  const [formData, setFormData] = useState({
    ClientName: "",
    ContactPerson: "",
    ContactNumber: "",
    Email: "",
    Location: "",
    DemoDate: "",
    MeetingType: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.ClientName !== "" &&
      formData.ContactNumber !== "" &&
      formData.Email !== ""
    ) {
      async function postData() {
        try {
          const response = await createApi(formData);
          if (response) {
            listApi(0);
          } else {
            console.error("Failed to create demo user");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      postData();
      closeSubmit();
      setFormData({
        ClientName: "",
        ContactPerson: "",
        ContactNumber: "",
        Email: "",
        Location: "",
        DemoDate: "",
        MeetingType: "",
      });
    } else {
      alert("Kindly fill the Nescessery fields");
    }
  };

  const nameHolder = (e) => {
    // console.log(e.target.value);
    setFormData({ ...formData, ClientName: e.target.value });
  };
  const contactNumHolder = (e) => {
    setFormData({ ...formData, ContactNumber: e.target.value });
  };

  const emailHolder = (e) => {
    setFormData({ ...formData, Email: e.target.value });
  };

  const contactPersonHolder = (e) => {
    setFormData({ ...formData, ContactPerson: e.target.value });
  };

  const dateHolder = (e) => {
    setFormData({ ...formData, DemoDate: e.target.value });
  };

  const meetType = (e) => {
    setOptions(e.target.innerText);
    setFormData({ ...formData, MeetingType: e.target.innerText });
  };

  const locationHolder = (e) => {
    setFormData({ ...formData, Location: e.target.value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const [stylee, setStylee] = useState("dropdown-contentClose");

  const openMenu = (e) => {
    setStylee(
      stylee == "dropdown-contentClose"
        ? "dropdown-contentOpen"
        : "dropdown-contentClose"
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <form className="formContent">
        <div className="clientName labelss">
          <div>
            <label>Client Name:</label>
          </div>
          <div className="inputfields">
            <input
              type="text"
              name="ClientName"
              placeholder="Client Name"
              value={formData.ClientName}
              required
              onChange={nameHolder}
            />
          </div>
        </div>
        <div className="contactPerson labelss">
          <div>
            <label>Contact Person:</label>
          </div>
          <div className="inputfields">
            <input
              type="text"
              name="ContactPerson"
              placeholder="Contact Person"
              value={formData.ContactPerson}
              onChange={contactPersonHolder}
            />
          </div>
        </div>
        <div className="contactNumber labelss">
          <div>
            <label>Contact Number:</label>
          </div>
          <div className="inputfields">
            <input
              type="text"
              name="ContactNumber"
              placeholder="Contact Number"
              value={formData.ContactNumber}
              onChange={contactNumHolder}
              required
            />
          </div>
        </div>
        <div className="emailid labelss">
          <div>
            <label>Email ID:</label>
          </div>
          <div className="inputfields">
            <input type="text" name="Email" onChange={emailHolder} value={formData.Email} required />
          </div>
        </div>
        <div className="location labelss">
          <div>
            <label>Location:</label>
          </div>
          <div className="inputfields">
            <input type="text" name="Location" value={formData.Location} onChange={locationHolder} />
          </div>
        </div>
        <div className="demoDate labelss">
          <div>
            <label>Demo Date:</label>
          </div>
          <div className="inputfields">
            <input type="date" name="DemoDate" value={formData.DemoDate} onChange={dateHolder} />
          </div>
        </div>
        <div className="meetingtype labelss">
          <div>
            <label>Meeting Type:</label>
          </div>
          <div className="dropdown" value={formData.MeetingType} onClick={openMenu}>
            <span>{options}</span>
            <div className={stylee}>
              <p className="optionss" onClick={meetType}>
                F2F
              </p>
              <hr />
              <p className="optionss" onClick={meetType}>
                Virtual
              </p>
            </div>
          </div>
          {/* <div className='inputfields'>
                    <select name="meetingType" className="custom-select">
                        <option className='options' value="virtual">Virtual</option>
                        <option className='options' value="in-person">Face to Face</option>
                    </select>
                </div> */}
        </div>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className="createBtn"
          onClick={handleSubmit}
          fullWidth
        >
          Create
        </Button>
      </form>
    </ThemeProvider>
  );
}
