import ApiUrl from "../config/ApiUrl"
import HandelCatchError from "./HandelCatchError"



export default async function GetMethod(url) {
  try {
    const response = await ApiUrl.get(url)
    return response
  } catch (error) {
    HandelCatchError(error)
  }
}