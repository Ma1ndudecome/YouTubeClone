import axios from "axios"
import { state } from "../URL/createObject.js"
export async function requestToSeverGet(url, params={}, auth=false){
   const config =  auth ? {headers:{Authorization: `Bearer ${state.acessToken}`}, params} : {params}

   return await axios.get(url, config)
}
export async function requestToServerPD(url, body=null, setting={},) {
   console.log(url, body, setting)
   return await axios.post(url, body, setting)
}