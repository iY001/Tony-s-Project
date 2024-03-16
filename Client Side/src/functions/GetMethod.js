import ApiUrl from "../config/ApiUrl"



export default async function GetMethod(url) {
  try {
    const response = await ApiUrl.get(url)
    return response
  } catch (error) {
    console.log(error)
  }
}