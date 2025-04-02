import { state } from "./URL/createObject.js"
import axios from 'axios'
import { takeComment, SearchContent } from "./api/ReExportAPI.js";
import { markinHistoryVideo } from "./Marking/Marking.js";
import { formatDuration, dateTime } from "./untils/reExportUntils.js";
import { fromViewToShortView } from "./untils/ViewToViewLikeToLike.js";
import {  addMarkingComent} from "./UI/reExportUI.js";


export async function loadVideoInProfile(accessToken, dataProfile, tokenVideo){
    return await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
        headers: { 'Authorization': `Bearer ${accessToken}` },
        params: {
          part: "snippet,contentDetails",
          playlistId: `${dataProfile.contentDetails.relatedPlaylists.uploads}`,
          maxResults: 50,
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
       await takeDefaultVideoOrShorts(accessToken, dataProfile, state.pageTokenProfileVideo, 'Videos', button)
        state.markingVideoPage = document.querySelector(".Header_Main_container_video").innerHTML
      }else if(position.textContent === 'Shorts'){
        await takeDefaultVideoOrShorts(accessToken, dataProfile, state.pageTokenProfileShorts, 'Shorts', button)
        state.markingShortsPage = document.querySelector(".Header_Main_container_video").innerHTML
        
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


export function LoadMoreComments(id){
  const triger = document.querySelector(".trigerContainer")

  console.log(triger)
  const observ = new IntersectionObserver((entries)=>{
    checkEntriesAndTakeResponse(entries, id)
  })

  observ.observe(triger)
}

function checkEntriesAndTakeResponse(entries, id){
  entries.forEach(async (entry)=>{
    if(entry.isIntersecting){
      const response = await takeComment(id)
      if(response.nextPageToken){
        state.PageTokenComment = response.nextPageToken
        addMarkingComent(response)
      }
    }
  })
}

export function infinityScrollSearch(value){
  const searchTriger = document.querySelector(".TrigerSearch")

  const observ = new IntersectionObserver( ()=>{
    loadMoreInSearch(value)
  })
  observ.observe(searchTriger)
}
async function loadMoreInSearch(value){
  const contVideo = document.querySelector(".InnerContainerVideoSearch")
  const videos =  await SearchContent(value)
   videos.data.items.forEach(el=>{
       el.snippet.liveBroadcastContent === 'none' ? contVideo.insertAdjacentHTML('beforeend', markinHistoryVideo(el.snippet.thumbnails.high.url, el.snippet.title,el.snippet.channelTitle, fromViewToShortView(el.statistics.viewCount), el.snippet.description, el.id, dateTime(el.snippet.publishedAt), formatDuration(el.contentDetails.duration))) : false
   })
}

export function observeToTrigerShorts(fnc){
  const ShortsTriger = document.getElementsByClassName("ShortsTriger")[0]
  const observ = new IntersectionObserver((entry)=>{
    if(entry[0].isIntersecting){
      fnc()
    }
  })
  observ.observe(ShortsTriger)

}