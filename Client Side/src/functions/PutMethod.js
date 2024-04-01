import ApiUrl from "../config/ApiUrl"
import HandelCatchError from "./HandelCatchError"


export default async function PutMethod(url, data) {
  try {
    const response = await ApiUrl.put(url, data)
    return response
  } catch (error) {
    HandelCatchError(error)
  }
}