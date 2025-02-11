import { state } from "./changeData.js"
import { forYouVideoMarking } from "./Marking/profileVideoMarking.js";
import { formatDuration } from "./FromISOToTime.js";
import { addMarking } from "./changeData.js";

export async function loadVideoInProfile(accessToken, dataProfile, tokenVideo){
    return await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
        headers: { 'Authorization': `Bearer ${accessToken}` },
        params: {
          part: "snippet,contentDetails",
          playlistId: `${dataProfile.contentDetails.relatedPlaylists.uploads}`,
          maxResults: 10,
          pageToken:tokenVideo,
          _t: Date.now()
        }
      })
}

export  function loadNextVideo(accessToken, dataProfile, button){
  button.onclick = async ()=>{
    await loadMore(accessToken, dataProfile, button)
    
  }
  
}
async function loadMore(accessToken, dataProfile, button) {
    try{
      const container = document.querySelectorAll(".container_channel_navigation")[0].children

      const position = element(container)
     
      if(position.textContent === 'Videos'){
        takeDefaultVideoOrShorts(accessToken, dataProfile, state.pageTokenProfileVideo, 'Videos', button)
      }else if(position.textContent === 'Shorts'){
        takeDefaultVideoOrShorts(accessToken, dataProfile, state.pageTokenProfileShorts, 'Shorts', button)
      }

      
    }catch(error){
      console.log(error)
    }
  
}
export function checkPageToken(dateAboutToken, buttonLoadMore){
  if(dateAboutToken.data.nextPageToken){
    buttonLoadMore.classList.remove("none")
  }
}
function element(arr){
  for(let i = 0; i < arr.length; i+=1){
    if(arr[i].classList.contains("borderBottom")){
      return arr[i]
    }
  }
}
async function takeDefaultVideoOrShorts(accessToken, dataProfile, requiredToken, whereCall, button){
  try{
    const data = await loadVideoInProfile(accessToken, dataProfile, requiredToken)
    const videoId = data.data.items.map(el => el.contentDetails.videoId).join(',')
    const detailInformationVideo = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${APIKEY}`)
    console.log(data)
    addMarking(detailInformationVideo.data.items, whereCall)
    if(!data.data.nextPageToken){
      button.remove()
      
    }else{
      if (whereCall === 'Videos') {
        state.pageTokenProfileVideo = data.data.nextPageToken;
      } else if (whereCall === 'Shorts') {
        state.pageTokenProfileShorts = data.data.nextPageToken;
      }
    }
    console.log(requiredToken)
  }catch(error){
    console.log(error)
  }
 
}
