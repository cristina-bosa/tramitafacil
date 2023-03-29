import axios from 'axios';

const API_URL="https://jsonplaceholder.typicode.com";

export function getUsers(){
    return axios.get(`${API_URL}/users`).then(response => {
        return response.data
    }).catch(error => {
        console.log(error);
    })
}