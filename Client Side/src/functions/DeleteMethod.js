import ApiUrl from "../config/ApiUrl"


export default async function DeleteMethod(url) {
  try {
    const response =  await ApiUrl.delete(url)
    return response
  } catch (error) {
    console.log(error)
  }
}