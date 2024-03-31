import axios from 'axios';
import  Cookies  from 'universal-cookie';

const cookies = new Cookies();


const ApiUrl = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Authorization': `${cookies.get('token')}`,
  }
})


export default ApiUrl;