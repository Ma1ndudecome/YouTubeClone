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
    document.querySelector(".profileImg_Info").addEventListener("click", async ({target})=>{
      await openProfile(target, accessToken)
      
      slideToButton()

      moveToVideo()
    })
}

async function openProfile(target, accessToken){
  if(target.textContent !== 'View your channel'){
    return
  }
    const info = document.querySelector(".profileImg_Info")
    info.classList.remove("show")
    container.classList.add('block')
  try{
    const dataProfile = await axios.get(`https://www.googleapis.com/youtube/v3/channels`,{
      headers: { 'Authorization': `Bearer ${accessToken}` },
      params: {
        part: "snippet,statistics,brandingSettings,contentDetails",
        mine: true
    }})

    const videoProfile =  await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`,{
      headers: { 'Authorization': `Bearer ${accessToken}` },
      params: {
        part: "snippet,contentDetails",
        playlistId: `${dataProfile.data.items[0].contentDetails.relatedPlaylists.uploads}`,
        maxResults: 35
    }
    })
   
  const videoId = videoProfile.data.items.map(el=>el.contentDetails.videoId).join(',')
    
   const detailInformationVideo = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${APIKEY}`)
   
   const profileData = dataProfile.data.items[0]

   container.insertAdjacentHTML("afterbegin", profileMark(profileData.brandingSettings.image.bannerExternalUrl, profileData.snippet.thumbnails.medium.url,profileData.snippet.customUrl, profileData.statistics.subscriberCount, profileData.statistics.videoCount))

   const forYouVideoContainer = document.querySelector(".ForYou_Container_video")
   const ShortsVideoContainer = document.querySelector(".Shorts_video_container")

   detailInformationVideo.data.items.forEach(el=>{
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
  
  }catch(error){
    console.log(error)
  }
   
}
function slideToButton(){
  const rightArrowF = document.querySelector(".ForYou_Container_rightArrow")
  const leftArrowF = document.querySelector(".ForYou_Container_leftArrow")

  const rightArrowS = document.querySelector(".Shorts_Container_leftArrow")
  const leftArrowS = document.querySelector(".Shorts_Container_rightArrow")

  const containerForYou = document.querySelector(".ForYou_Container_video")
  const containerShorts = document.querySelector(".Shorts_video_container")
  rightArrowF.onclick = ()=>{
    containerForYou.scrollLeft += 250
  }
  leftArrowF.onclick = ()=>{
    containerForYou.scrollLeft -= 250
  }
  leftArrowS.onclick = ()=>{
    containerShorts.scrollLeft +=250
  }
  rightArrowS.onclick = ()=>{
    containerShorts.scrollLeft -=250
  }
}

function moveToVideo(){
  const navigationContainer = document.querySelector(".container_channel_navigation")
  navigationContainer.addEventListener("click", ({target})=>{
    if(target.textContent === 'Videos'|| target.textContent === "Shorts" || target.textContent === 'Home'){
      document.querySelector(".borderBottom").classList.remove("borderBottom")
      target.classList.add("borderBottom")
      console.log(dateProfileVideo)
    }
  })
}