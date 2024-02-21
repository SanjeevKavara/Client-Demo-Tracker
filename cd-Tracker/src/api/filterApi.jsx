import axios from "axios";

async function filterApi(filterUser) {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/Clientdemotracker/filter`,
      {
        "DemoDate": filterUser.DemoDate,
        "location": filterUser.location,
        "MeetingType": filterUser.MeetingType,
        "DemoStatus": filterUser.DemoStatus
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

export default filterApi;
