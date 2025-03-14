import { container } from "./LoadVideo.js"
import { markingProfile } from "../Marking/MarkingIcon.js"
import { markingProfile as profileMark } from "../Marking/Marking.js"
import { forYouVideoMarking, shortVideoMarking } from "../Marking/profileVideoMarking.js"
import { formatDuration } from "../untils/FromISOToTime.js"
import { loadVideoInProfile, loadNextVideo, checkPageToken } from "../infinityScrollInProfile.js"
import { channelData, moreBtn } from "./loadDataChannel.js"
import axios from 'axios'

import { TakeShortAndLongVideo,navInProfile, checkCountVideoAndGiveMarking } from "../untils/HelpsFunction.js"

let profileMarking;//Переменная для сохранения разметки профиля

export const state = {//Тут храняться переменные которые изменяються в разныъ файлах
  pageTokenProfileVideo: '',//Сохранение токена для следующей страницы видео
  pageTokenProfileShorts: '',//Сохранение токена для следующей страницы шортса
  markingVideoPage: '',//Сохранение контейнера видео
  markingHomePage: '',//Сохранение главной страницы
  markingShortsPage: '',//Сохранение контейнера шортс
  isLastVideos: false,//Последнее ли видео
  isLastShorts: false,//Последнее ли видео
  prevMarking: '',//Переменная для сохранения при перходе предыдущей разметки
  infoChannel: { img: 'https://cdn-icons-png.flaticon.com/512/6522/6522516.png' },//Сохранить количество подписчиков и url профиля
  PageTokenComment: '',
  Autorization: false,
  pageTokenProfileVideoAny: ''
};





export let dateProfileVideo = []//При запросе сохраняю все видео тут для того что бы избавиться от лишних запросов 

export function changeProfile(profileImg, profileName, profileCustomUrl, accessToken) {
  document.querySelector(".sing_int").innerHTML = markingProfile(profileImg, profileName, profileCustomUrl)
  document.body.onclick = (e) => {
    if (e.target.parentNode) {
      if (e.target.parentNode.classList.contains("profileImg")) {
        const info = document.querySelector(".profileImg_Info")
        info.classList.toggle("show")
      }

    } else if (!e.target.closest(".profileImg_Info")) {

      const info = document.querySelector(".profileImg_Info")
      info.classList.remove("show")
    }
  }
  document.querySelector(".profileImg_Info").addEventListener("click", (e) => {
    e.preventDefault()
    openProfile(e.target, accessToken)

  })
}

async function openProfile(target, accessToken) {
  const click = target.parentNode.parentNode.textContent.trim()
  const clickpast = target.parentNode.textContent.trim()
  if (target.textContent === 'View your channel') {
    state.prevMarking = container.innerHTML
    history.pushState({}, '', window.location.href + '&page=profile')
    container.innerHTML = ''
    const info = document.querySelector(".profileImg_Info")
    info.classList.remove("show")
    container.classList.remove("grid")
    container.classList.add('block')
    try {
      const dataProfile = await channelData(accessToken)

      safeDataInPushState(dataProfile)

      const videoProfile = await loadVideoInProfile(accessToken, dataProfile.data.items[0], state.pageTokenProfileVideo)

      const videoId = videoProfile.data.items.map(el => el.contentDetails.videoId).join(',')

      state.pageTokenProfileVideo = videoProfile.data.nextPageToken || ''
      state.pageTokenProfileShorts = videoProfile.data.nextPageToken || ''


      const detailInformationVideo = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${APIKEY}`)
      const profileData = dataProfile.data.items[0]
 
      if (!profileData.brandingSettings.image) {
        container.insertAdjacentHTML("afterbegin", profileMark('', profileData.snippet.thumbnails.default.url, profileData.snippet.customUrl, profileData.statistics.subscriberCount, profileData.statistics.videoCount, profileData.brandingSettings.channel.title))
        document.querySelector(".Main_container_Header").remove()
      } else {
        container.insertAdjacentHTML("afterbegin", profileMark(profileData.brandingSettings.image.bannerExternalUrl, profileData.snippet.thumbnails.default.url, profileData.snippet.customUrl, profileData.statistics.subscriberCount, profileData.statistics.videoCount, profileData.brandingSettings.channel.title))
      }
      const video = TakeShortAndLongVideo(detailInformationVideo)
      
      checkCountVideoAndGiveMarking(video)
      
      navInProfile(video)
      dateProfileVideo.push(...detailInformationVideo.data.items)

      const contVid = document.querySelector(".Header_Main_container_video")
      profileMarking = contVid.innerHTML

      slideToButton()

      moreBtn()
      checkCountVideo()
    } catch (error) {
      console.log(error)
    }
  } else if (click === 'Switch Account' || clickpast === 'Switch Account') {
    location.href = 'http://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.force-ssl&redirect_uri=http%3A%2F%2Flocalhost%3A5501&response_type=code&client_id=729574226005-s73fnabnui73ga2vtfa52u87o3qag7f8.apps.googleusercontent.com&access_type=offline&service=lso&o2v=2&ddm=1&flowName=GeneralOAuthFlow'
  } else if (click === 'Sing out' || clickpast === 'Sing out') {
    location.href = redirectUri
    state.Autorization = false
  }


}
export function slideToButton() {
  const containerForYou = document.querySelector(".ForYou_Container_video")
  const containerShorts = document.querySelector(".Shorts_video_container")

  const count1 = containerForYou?.querySelectorAll(".video_box").length
  const count2 = containerShorts?.querySelectorAll(".Shorts_video_item").length

  const rightArrowF = document.querySelector(".ForYou_Container_rightArrow")
  const leftArrowF = document.querySelector(".ForYou_Container_leftArrow")

  const rightArrowS = document.querySelector(".Shorts_Container_leftArrow")
  const leftArrowS = document.querySelector(".Shorts_Container_rightArrow")



  if (count1 === 0) {
    document.querySelector(".ForYou_Container_video").remove()
    const navItem = document.querySelectorAll(".container_channel_navigation_item")[1]
    if (navItem) {
      navItem.remove()
    }
    rightArrowF.remove()
    leftArrowF.remove()
  }
  if (count2 === 0) {
    document.querySelector(".Shorts_container").remove()
    const navItem = document.querySelectorAll(".container_channel_navigation_item")[2]
    if (navItem) {
      navItem.remove()
    }
    rightArrowS.remove()
    leftArrowS.remove()

  }


    if(rightArrowF && leftArrowF){
      if (count1 < 4) {
        rightArrowF.remove()
        leftArrowF.remove()
      }
      rightArrowF.onclick = () => {
        containerForYou.scrollLeft += 600
      }
      leftArrowF.onclick = () => {
        containerForYou.scrollLeft -= 600
      }
    }
     if(rightArrowS && leftArrowS){

      if (count2 < 6) {
        rightArrowS.remove()
        leftArrowS.remove() 
      }
      leftArrowS.onclick = () => {
        containerShorts.scrollLeft += 600
      }
      rightArrowS.onclick = () => {
        containerShorts.scrollLeft -= 600
      }
    }
 
}






function AddClassToContainer(containerVideo, inner) {
  containerVideo.classList.add("grid", "gridTC5", "gap10")
  containerVideo.innerHTML = inner
}


function safeDataInPushState(dataProfile) {
  state.infoChannel = {
    subscriberCount: dataProfile.data.items[0].statistics.subscriberCount,
    img: dataProfile.data.items[0].snippet.thumbnails.default.url,
    videoCount: dataProfile.data.items[0].statistics.videoCount,
    viewCount: dataProfile.data.items[0].statistics.viewCount,
    dateCreateAccount: dataProfile.data.items[0].snippet.publishedAt
  }

}

function checkCountVideo() {
  if (state.infoChannel.videoCount === String(0)) {

    document.querySelector(".line").remove()
    document.querySelector(".Header_Main_container_video").remove()
    document.querySelector(".container_button_load").remove()
    const nav = document.querySelector(".container_channel_navigation")
    nav.innerHTML = `
     <div class="noneVideo">Автор поки загрузив жодного відео😥</div>
     `
    nav.classList.add("jcC")
  }
}