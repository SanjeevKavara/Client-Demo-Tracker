import axios from 'axios';

async function searchApi(searchVal) {
    try {
        const response = await axios.post(`http://localhost:5000/api/Clientdemotracker/?limit=10&offset=0`, {
            "searchtext" : searchVal
        });

        if (response.status === 200) {
            console.log(response)
            return response;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

export default searchApi;
