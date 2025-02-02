import { container } from "./LoadVideo.js"
import { markingProfile } from "./Marking/MarkingIcon.js"
import { markingProfile as profileMark } from "./Marking/ProfileMarking.js"
import { forYouVideoMarking } from "./Marking/profileVideoMarking.js"
import { shortVideoMarking } from "./Marking/profileVideoMarking.js"
import { formatDuration } from "./FromISOToTime.js"
export let dateProfileVideo = []
export function changeProfile(profileImg, profileName, profileCustomUrl, accessToken){
    document.querySelector(".sing_int").innerHTML = markingProfile(profileImg, profileName, profileCustomUrl)
    document.body.onclick = (e)=>{
        if(e.target.parentNode.classList.contains("profileImg")){
             const info = document.querySelector(".profileImg_Info")
            info.classList.toggle("show")
        }else if(!e.target.closest(".profileImg_Info")){
            
            const info = document.querySelector(".profileImg_Info")
            info.classList.remove("show")
        }
    }
    document.querySelector(".profileImg_Info").addEventListener("click", ({target})=>{
      if(target.textContent !== 'View your channel'){
        return
      }
      const info = document.querySelector(".profileImg_Info")
      info.classList.remove("show")
      container.classList.add('block')
      axios.get(`https://www.googleapis.com/youtube/v3/channels`,{
        headers: { 'Authorization': `Bearer ${accessToken}` },
        params: {
          part: "snippet,statistics,brandingSettings,contentDetails",
          mine: true
      }})
      .then(response=>{
        axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`,{
          headers: { 'Authorization': `Bearer ${accessToken}` },
          params: {
            part: "snippet,contentDetails",
            playlistId: `${response.data.items[0].contentDetails.relatedPlaylists.uploads}`,
            maxResults: 35
        }
        })
        
        .then(data=>{
        console.log(data)
          const videoId = data.data.items.map(el=>el.contentDetails.videoId).join(',')
          
         axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${APIKEY}`)
         .then(video=>{
          const profileData = response.data.items[0]
          container.insertAdjacentHTML("afterbegin", profileMark(profileData.brandingSettings.image.bannerExternalUrl, profileData.snippet.thumbnails.medium.url,profileData.snippet.customUrl, profileData.statistics.subscriberCount, profileData.statistics.videoCount))
          const forYouVideoContainer = document.querySelector(".ForYou_Container_video")
        
          const ShortsVideoContainer = document.querySelector(".Shorts_video_container")


          video.data.items.forEach(el=>{
            dateProfileVideo.push(el)
            const duration = formatDuration(el.contentDetails.duration)
            if(duration !== "NaN"){
              const time = duration.split(':').map(Number)
              if(time[0] === 0){
                  ShortsVideoContainer.insertAdjacentHTML("beforeend",shortVideoMarking(el.snippet.thumbnails.medium.url,el.snippet.title, el.statistics.viewCount, el.id ))
              }else{
                forYouVideoContainer.insertAdjacentHTML("beforeend", forYouVideoMarking(el.snippet.thumbnails.medium.url, formatDuration(el.contentDetails.duration), el.snippet.title, el.statistics.viewCount, el.snippet.publishedAt, el.id))

              }
            }
           

          })
         })
         
        })
      })
    })
}

