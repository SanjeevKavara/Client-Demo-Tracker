import axios from 'axios';

async function postApi(user) {
    try {
        const response = await axios.post('http://localhost:5000/api/signin', {
            email: user.username,
            password: user.password
        });

        if (response.status === 200) {
            console.log(response)
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

export default postApi;
