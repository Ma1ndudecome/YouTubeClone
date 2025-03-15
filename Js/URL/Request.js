import axios from "axios"
export async function requestToSeverGet(url, params={}, auth=false){
   const config =  auth ? {headers:{Authorization: `Bearer ${state.acessToken}`}, params} : {params}
   
   return await axios.get(url, config)
}
