import { pageTokenProfile } from "./changeData.js"
export async function loadVideoInProfile(accessToken, dataProfile){
    return await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
        headers: { 'Authorization': `Bearer ${accessToken}` },
        params: {
          part: "snippet,contentDetails",
          playlistId: `${dataProfile.contentDetails.relatedPlaylists.uploads}`,
          maxResults: 20,
          pageToken:pageTokenProfile
        }
      })
}