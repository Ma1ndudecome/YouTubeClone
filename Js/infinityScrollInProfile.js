import { pageTokenProfile } from "./changeData.js"
import { changeTokenProfile } from "./changeData.js"
export async function loadVideoInProfile(accessToken, dataProfile){
  console.log(pageTokenProfile)
    return await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
        headers: { 'Authorization': `Bearer ${accessToken}` },
        params: {
          part: "snippet,contentDetails",
          playlistId: `${dataProfile.contentDetails.relatedPlaylists.uploads}`,
          maxResults: 1,
          pageToken:pageTokenProfile
        }
      })
}

export  function loadNextVideo(accessToken, dataProfile, button){
  button.onclick = async ()=>{
    try{
      const data = await loadVideoInProfile(accessToken, dataProfile)
      console.log(data.data.nextPageToken)

      if(!data.data.nextPageToken){
        button.remove()
      }else{
        changeTokenProfile(pageTokenProfile,data.data.nextPageToken)
      }
      console.log(data)
    }catch(error){
      console.log(error)
    }
  }
}