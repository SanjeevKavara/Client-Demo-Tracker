import axios from "axios";

async function createApi(newUser) {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/Clientdemotracker/create`,
      {
        "ClientName": newUser.ClientName,
        "ContactPerson": newUser.ContactPerson,
        "Email": newUser.Email,
        "ContactNumber": newUser.ContactNumber,
        "Location": newUser.Location,
        "DemoDate": newUser.DemoDate,
        "MeetingType": newUser.MeetingType
      }
    );

    if (response.status === 200) {
      console.log(response);
      return response;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

export default createApi;
