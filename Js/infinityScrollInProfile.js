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
          maxResults: 1,
          pageToken:state.pageTokenProfile,
          _t: Date.now()
        }
      })
}

export  function loadNextVideo(accessToken, dataProfile, button){
  button.onclick = ()=>{
    loadMore(accessToken, dataProfile, button)
  }
  
}
async function loadMore(accessToken, dataProfile, button) {
    try{
      console.log('1')
      const data = await loadVideoInProfile(accessToken, dataProfile)
    
      const videoId = data.data.items.map(el => el.contentDetails.videoId).join(',')
      const detailInformationVideo = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${APIKEY}`)
      console.log(data)
    
      if(!data.data.nextPageToken){
        button.remove()
        return
      }else{
        state.pageTokenProfile = data.data.nextPageToken
      }

       const resultCall = addMarking(detailInformationVideo.data.items, 'Videos')

       if(resultCall[0] === 1){
        console.log('now')
        await loadMore(accessToken, dataProfile)
       }else{
        console.log('Видео успешно загружено.')
       }
      
    }catch(error){
      console.log(error)
    }
  
}