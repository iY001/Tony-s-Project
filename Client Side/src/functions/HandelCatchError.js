import ShowAlert from "./Swal/ShowAlert"


export default function HandelCatchError(error) {
  const validationErrors = error.response?.data?.validationErrors
  if (validationErrors) {
     return ShowAlert('error', 'Error', validationErrors[0].message)
  }
  if (error.response?.status == 400 || error.response?.status == 401) {
    ShowAlert('error', 'Error', error.response?.data?.error || error.response?.data?.message || error.response?.data || "Something went wrong. Please try again later.")
  }
  console.log(error)
}