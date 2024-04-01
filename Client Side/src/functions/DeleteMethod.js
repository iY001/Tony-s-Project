import ApiUrl from "../config/ApiUrl"
import HandelCatchError from "./HandelCatchError"


export default async function DeleteMethod(url) {
  try {
    const response =  await ApiUrl.delete(url)
    return response
  } catch (error) {
    HandelCatchError(error)
  }
}