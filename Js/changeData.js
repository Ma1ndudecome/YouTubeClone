import { container } from "./LoadVideo.js"
import { markingProfile } from "./Marking/MarkingIcon.js"
import { markingProfile as profileMark } from "./Marking/ProfileMarking.js"
import { forYouVideoMarking } from "./Marking/profileVideoMarking.js"
import { shortVideoMarking } from "./Marking/profileVideoMarking.js"
import { formatDuration } from "./FromISOToTime.js"
import { loadVideoInProfile, loadNextVideo} from "./infinityScrollInProfile.js"
import { checkPageToken } from "./infinityScrollInProfile.js"

let profileMarking;//Переменная для сохранения разметки профиля

export const state = {//Тут храняться переменные которые изменяються в разныъ файлах
  pageTokenProfileVideo: '',//Сохранение токена для следующей страницы видео
  pageTokenProfileShorts:'',//Сохранение токена для следующей страницы шортса
  markingVideoPage:'',//Сохранение контейнера видео
  markingHomePage:'',//Сохранение главной страницы
  markingShortsPage:'',//Сохранение контейнера шортс
  isLastVideos:false,//Последнее ли видео
  isLastShorts:false,//Последнее ли видео
  prevMarking:'',//Переменная для сохранения при перходе предыдущей разметки
};



let lastUrl = location.href;//Получаю первоначальное url для popstata

export let dateProfileVideo = []//При запросе сохраняю все видео тут для того что бы избавиться от лишних запросов 

export function changeProfile(profileImg, profileName, profileCustomUrl, accessToken) {
  document.querySelector(".sing_int").innerHTML = markingProfile(profileImg, profileName, profileCustomUrl)
  document.body.onclick = (e) => {
    if (e.target.parentNode.classList.contains("profileImg")) {
      const info = document.querySelector(".profileImg_Info")
      info.classList.toggle("show")
    } else if (!e.target.closest(".profileImg_Info")) {

      const info = document.querySelector(".profileImg_Info")
      info.classList.remove("show")
    }
  }
  document.querySelector(".profileImg_Info").addEventListener("click",  (e) => {
    e.preventDefault()
    openProfile(e.target, accessToken)
    
  })
}

async function openProfile(target, accessToken) {
    const click = target.parentNode.parentNode.textContent.trim()
    const clickpast = target.parentNode.textContent.trim()
  if (target.textContent === 'View your channel') {
    state.prevMarking = container.innerHTML
    history.pushState({},'',window.location.href + '&page=profile')
    container.innerHTML = ''  
    const info = document.querySelector(".profileImg_Info")
    info.classList.remove("show")
    container.classList.add('block')
    try {
      const dataProfile = await axios.get(`https://www.googleapis.com/youtube/v3/channels`, {
        headers: { 'Authorization': `Bearer ${accessToken}` },
        params: {
          part: "snippet,statistics,brandingSettings,contentDetails",
          mine: true
        }
      })
     
      const videoProfile = await loadVideoInProfile(accessToken, dataProfile.data.items[0], state.pageTokenProfileVideo)
      console.log(videoProfile)
      
      const videoId = videoProfile.data.items.map(el => el.contentDetails.videoId).join(',')
      
      state.pageTokenProfileVideo = videoProfile.data.nextPageToken || ''
      state.pageTokenProfileShorts = videoProfile.data.nextPageToken || ''

  
      const detailInformationVideo = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${APIKEY}`)
  
      const profileData = dataProfile.data.items[0]


        if(!profileData.brandingSettings.image){
          container.insertAdjacentHTML("afterbegin", profileMark('', profileData.snippet.thumbnails.default.url, profileData.snippet.customUrl, profileData.statistics.subscriberCount, profileData.statistics.videoCount, profileData.brandingSettings.channel.title))
          document.querySelector(".Main_container_Header").remove()
        }else{
          container.insertAdjacentHTML("afterbegin", profileMark(profileData.brandingSettings.image.bannerExternalUrl, profileData.snippet.thumbnails.default.url, profileData.snippet.customUrl, profileData.statistics.subscriberCount, profileData.statistics.videoCount, profileData.brandingSettings.channel.title))
        }
      
        
      const forYouVideoContainer = document.querySelector(".ForYou_Container_video")
      const ShortsVideoContainer = document.querySelector(".Shorts_video_container")
    
      addMarking(detailInformationVideo.data.items, 'Home', ShortsVideoContainer, forYouVideoContainer)
      dateProfileVideo.push(...detailInformationVideo.data.items)
  
      const contVid = document.querySelector(".Header_Main_container_video")
      profileMarking = contVid.innerHTML
      
      slideToButton()
      moveToVideo(videoProfile, videoProfile.data)
      loadNextVideo(accessToken, profileData, document.querySelector(".container_button_load button"))

      
      document.querySelector(".container_button_load button").classList.add('none')

    } catch (error) {
      console.log(error)
    }
  }else if(click === 'Switch Account' || clickpast === 'Switch Account'){
    location.href = 'https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.readonly&access_type=offline&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5501&client_id=729574226005-s73fnabnui73ga2vtfa52u87o3qag7f8.apps.googleusercontent.com&approval_prompt=force&service=lso&o2v=2&ddm=1&flowName=GeneralOAuthFlow'
  }else if(click === 'Sing out'|| clickpast === 'Sing out'){
    location.href = redirectUri
  }


}
function slideToButton() {
  const containerForYou = document.querySelector(".ForYou_Container_video")
  const containerShorts = document.querySelector(".Shorts_video_container")

  const count1 = containerForYou.querySelectorAll(".video_box").length
  const count2 = containerShorts.querySelectorAll(".Shorts_video_item").length

  if(count1 === 0){
    document.querySelector(".ForYou_Container_video").remove()
    if(document.querySelectorAll(".container_channel_navigation_item")[1]){
      document.querySelectorAll(".container_channel_navigation_item")[1].remove()
    }
  }
  if(count2 === 0){
    document.querySelector(".Shorts_container").remove()
    if(document.querySelectorAll(".container_channel_navigation_item")[2]){
      document.querySelectorAll(".container_channel_navigation_item")[2].remove()
    }
   
  }
  const rightArrowF = document.querySelector(".ForYou_Container_rightArrow")
  const leftArrowF = document.querySelector(".ForYou_Container_leftArrow")

  const rightArrowS = document.querySelector(".Shorts_Container_leftArrow")
  const leftArrowS = document.querySelector(".Shorts_Container_rightArrow")

  if(count1 < 4){
    rightArrowF.remove()
    leftArrowF.remove()
  }
  if(count2 < 6){
    rightArrowS.remove()
    leftArrowS.remove()
  }
  rightArrowF.onclick = () => {
    containerForYou.scrollLeft += 600
  }
  leftArrowF.onclick = () => {
    containerForYou.scrollLeft -= 600
  } 
  leftArrowS.onclick = () => {
    containerShorts.scrollLeft += 600
  }
  rightArrowS.onclick = () => {
    containerShorts.scrollLeft -= 600
  }
}

function moveToVideo(statusNextPage, data) {
  const navigationContainer = document.querySelector(".container_channel_navigation")
  const containerVideo = document.querySelector(".Header_Main_container_video")
  const buttonLoadMore = document.querySelector(".container_button_load button")

  navigationContainer.addEventListener("click", ({ target }) => {
    if(target.classList.contains("container_channel_navigation_item")){
      document.querySelector(".borderBottom").classList.remove("borderBottom")
      target.classList.add("borderBottom")
    }
      if (target.textContent === 'Videos') {
        checkAndGiveMarking(state.isLastVideos,buttonLoadMore, state.markingVideoPage,statusNextPage,containerVideo, 'Videos', data)
      }else if(target.textContent === 'Shorts'){
        checkAndGiveMarking(state.isLastShorts, buttonLoadMore, state.markingShortsPage, statusNextPage, containerVideo, 'Shorts', data)
      }else if(target.textContent === 'Home'){
        buttonLoadMore.classList.add("none")
        containerVideo.classList.remove("grid", "gridTC5", 'gap10')
        containerVideo.innerHTML = profileMarking
        slideToButton()
      }
    
  })
}

export function addMarking(informationVideoMas, WhereCall, ShortsVideoContainer=null, forYouVideoContainer=null){
   return informationVideoMas.forEach(el=>{
      const duration = formatDuration(el.contentDetails.duration)
      if(duration !=="NaN"){
        const time = duration.split(':').map(Number)
        if(WhereCall==='Home'){
          insertVideo(time,el, undefined, ShortsVideoContainer, forYouVideoContainer, WhereCall)
        }else if(WhereCall === 'Videos'){
          const containerVideo = document.querySelector(".Header_Main_container_video")  
          insertVideo(time, el, containerVideo, undefined, undefined, WhereCall)
        }else if(WhereCall === 'Shorts'){
          const containerVideo = document.querySelector(".Header_Main_container_video") 
          insertVideo(time, el, containerVideo, undefined, undefined, WhereCall)
          console.log('insertShorts')
        }
        
      }
    })
  
}
function insertVideo(time, el, containerVideo, ShortsVideoContainer, forYouVideoContainer, WhereCall){
  const isShort = time[0] === 0;
  const markup = isShort
    ? shortVideoMarking(el.snippet.thumbnails.medium.url, el.snippet.title, el.statistics.viewCount, el.id)
    : forYouVideoMarking(el.snippet.thumbnails.medium.url, formatDuration(el.contentDetails.duration), el.snippet.title, el.statistics.viewCount, el.snippet.publishedAt, el.id);

  if (WhereCall === 'Home') {
    isShort 
      ? ShortsVideoContainer?.insertAdjacentHTML("beforeend", markup)
      : forYouVideoContainer?.insertAdjacentHTML("beforeend", markup);
  } else if (WhereCall === 'Videos' && !isShort) {
    containerVideo?.insertAdjacentHTML("beforeend", markup);
  } else if (WhereCall === 'Shorts' && isShort) {
    console.log('here');
    containerVideo?.insertAdjacentHTML("beforeend", markup);
  }
}
function checkAndGiveMarking(LastVideo, buttonLoadMore, marking, statusNextPage, containerVideo, Call, data){
  if(!LastVideo && data.nextPageToken){
    buttonLoadMore.classList.remove('none')
  }
  if(marking === ''){
    checkPageToken(statusNextPage,buttonLoadMore)
    AddClassToContainer(containerVideo, '')
    addMarking(dateProfileVideo, Call)
    marking = containerVideo.innerHTML
  }else{
    AddClassToContainer(containerVideo, marking)
  }
}

function AddClassToContainer(containerVideo, inner){
  containerVideo.classList.add("grid","gridTC5", "gap10")
  containerVideo.innerHTML = inner
}
