import ApiUrl from "../config/ApiUrl"


export default async function PutMethod(url, data) {
  try {
    const response = await ApiUrl.put(url, data)
    return response
  } catch (error) {
    const validationErrors = error.response?.data?.validationErrors
    console.log(validationErrors)
    if (validationErrors) {
      ShowAlert('error', 'Error', validationErrors[0].message)
    }
    console.log(error)    
  }
}