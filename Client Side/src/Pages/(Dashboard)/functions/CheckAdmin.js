import PostMethod from '../../../functions/PostMethod'
import Cookies from 'universal-cookie';

export default function CheckAdmin() {
  const cookies = new Cookies(null, { path: '/' });
  const token = cookies.get('token')
  const user = JSON.parse(localStorage.getItem('user'))
  
  if (user?.role === 'admin') {
    if (token) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}