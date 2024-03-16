import axios from 'axios';


const ApiUrl = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Authorization': `${localStorage.getItem('token')}`,
  }
})


export default ApiUrl