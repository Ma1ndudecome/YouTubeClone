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

export function moreBtn(){
    document.querySelector(".more_info span").onclick = ()=>{
        
    }
}