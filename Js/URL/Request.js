import axios from "axios"
import { state } from "../features/changeData.js"
export async function requestToSeverGet(url, params={}, auth=false){
   console.log(state.acessToken)
   const config =  auth ? {headers:{Authorization: `Bearer ${state.acessToken}`}, params} : {params}
   
   return await axios.get(url, config)
}
export async function requestToServerPD(url, params={}, body=null, auth = false) {
   
}