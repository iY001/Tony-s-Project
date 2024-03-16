import ApiUrl from "../config/ApiUrl"
import ShowAlert from "./Swal/ShowAlert"


export default async function PostMethod(url, data) {
  try {
    const response = await ApiUrl.post(url, data)
    if (response.status == 200 || response.status == 201) {
      return response      
    }
  } catch (error) {
    const validationErrors = error.response?.data?.validationErrors
    console.log(validationErrors)
    if (validationErrors) {
      ShowAlert('error', 'Error', validationErrors[0].message)
    }
    console.log(error)    
  }
}