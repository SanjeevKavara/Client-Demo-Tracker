import axios from 'axios'


const postApi = (user) => {
    axios.post('http://localhost:5000/api/signin', {
        username: user.username,
        password: user.password
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}


export default postApi;

