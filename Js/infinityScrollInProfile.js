import { state } from "./changeData.js"
import { forYouVideoMarking } from "./Marking/profileVideoMarking.js";
import { formatDuration } from "./FromISOToTime.js";
import { addMarking } from "./changeData.js";

export async function loadVideoInProfile(accessToken, dataProfile){
    return await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
        headers: { 'Authorization': `Bearer ${accessToken}` },
        params: {
          part: "snippet,contentDetails",
          playlistId: `${dataProfile.contentDetails.relatedPlaylists.uploads}`,
          maxResults: 10,
          pageToken:state.pageTokenProfile,
          _t: Date.now()
        }
      })
}

export  function loadNextVideo(accessToken, dataProfile, button){
  button.onclick = async ()=>{
    await loadMore(accessToken, dataProfile, button)
    state.markingVideoPage = document.querySelector(".Header_Main_container_video").innerHTML
  }
  
}
async function loadMore(accessToken, dataProfile, button) {
    try{
      const data = await loadVideoInProfile(accessToken, dataProfile)
    
      const videoId = data.data.items.map(el => el.contentDetails.videoId).join(',')
      const detailInformationVideo = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${APIKEY}`)
      console.log(data)
    
      if(!data.data.nextPageToken){
        button.remove()
        
      }else{
        state.pageTokenProfile = data.data.nextPageToken
      }

      
      const container = document.querySelectorAll(".container_channel_navigation")[0].children
      for(let i =0; i < container.length; i+=1){
        if(container[i].classList.contains("borderBottom")){
          if(container[i].textContent === 'Videos'){
            addMarking(detailInformationVideo.data.items, 'Videos')
          }else if(container[i].textContent === 'Shorts'){
            addMarking(detailInformationVideo.data.items, 'Shorts')
          }
        }
      }
      console.log(container)
      
    }catch(error){
      console.log(error)
    }
  
}
export function checkPageToken(dateAboutToken, buttonLoadMore){
  if(dateAboutToken.data.nextPageToken){
    buttonLoadMore.classList.remove("none")
  }
}