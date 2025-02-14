import { InfoAboutChannel } from "./Marking/ProfileMarking.js"
export async function channelData(accessToken) {
    const response = await axios.get("https://www.googleapis.com/youtube/v3/channels", {
        headers: { 'Authorization': `Bearer ${accessToken}` },
        params: {
            part: "snippet,statistics,brandingSettings,contentDetails",
            mine: true
        }
    })
    return response
}
const body = document.body
export function moreBtn(){
    document.querySelector(".more_info span").onclick = ()=>{
        body.insertAdjacentHTML("afterbegin", InfoAboutChannel())
        body.classList.add("ovhHidden")
        closeInfoAccount()
    }
}
function closeInfoAccount(){
    const backdrop = document.querySelector(".backdropInfo")
    function close(){
        backdrop.remove()
        body.classList.remove("ovhHidden")
    }
    document.querySelector(".closeMoreInfoBtn").onclick = close
    backdrop.onclick = close
}