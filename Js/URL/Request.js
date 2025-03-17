import axios from "axios"
import { state } from "../features/changeData.js"
export async function requestToSeverGet(url, params={}, auth=false){
   
   const config =  auth ? {headers:{Authorization: `Bearer ${state.acessToken}`}, params} : {params}
      console.log(url, params, auth)
   return await axios.get(url, config)
}
export async function requestToServerPD(url, body=null, setting={},) {
   return await axios.post(url, body, setting)
}