import ApiUrl from "../config/ApiUrl"
import ShowAlert from "./Swal/ShowAlert"
import HandelCatchError from './HandelCatchError';


export default async function PostMethod(url, data) {
  try {
    const response = await ApiUrl.post(url, data)
    if (response.status == 200 || response.status == 201) {
      ShowAlert('success', 'Success', response?.data?.message)
      return response      
    }
  } catch (error) {
    HandelCatchError(error)
  }
}