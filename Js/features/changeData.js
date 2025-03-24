import { state, URL } from "../URL/createObject.js"
import { container, channelData, moreBtn } from "./ReExportFeatures.js"
import { markingProfile, markingChangeTheme } from "../Marking/MarkingIcon.js"
import { markingProfile as profileMark } from "../Marking/Marking.js"
import { loadVideoInProfile } from "../infinityScrollInProfile.js"
import axios from 'axios'
import { themeChange } from "../UI/HeaderANDAside.js"
import { TakeShortAndLongVideo, navInProfile, checkCountVideoAndGiveMarking, addClassList, removeClassList, changeInnerHTML, selectElements} from "../untils/HelpsFunction.js"
import { setNewUrl } from "./routing.js"


export let dateProfileVideo = []//При запросе сохраняю все видео тут для того что бы избавиться от лишних запросов 

export function changeProfile(profileImg, profileName, profileCustomUrl, accessToken) {
  changeInnerHTML(selectElements(document, ".sing_int"), markingProfile(profileImg, profileName, profileCustomUrl))
  
  selectElements(document, "header").addEventListener("click", clickToAvatarUser)
  const youtubeSettings = selectElements(document, ".profileImg_Info")
  youtubeSettings.addEventListener("click", (e) => {
    e.preventDefault()
    openProfile(e.target, accessToken, youtubeSettings)

  })
}

async function openProfile(target, accessToken, block) {
  const text = target.textContent.trim()

  if (text === 'View your channel') {
    setNewUrl("/Profile")
    // ViewChannel(accessToken)
  } else if (text === "Switch Account") {
    switchAccount()
  } else if (text === "Sing out") {
    logout()
  }
  else if (text === "Apperance") {
    const oldMark = block.innerHTML
    changeInnerHTML(block, markingChangeTheme())
    themeChange(block, oldMark)
  }

}
export async function ViewChannel(accessToken) {
  changeInnerHTML(container, '')
  
  removeClassList(container, "grid")
  addClassList(container, "block")

  try {
    const dataProfile = await channelData(accessToken)
    safeDataInPushState(dataProfile)

    const videoProfile = await loadVideoInProfile(accessToken, dataProfile.data.items[0], state.pageTokenProfileVideo)

    const videoId = videoProfile.data.items.map(el => el.contentDetails.videoId).join(',')

    state.pageTokenProfileVideo = videoProfile.data.nextPageToken || ''
    state.pageTokenProfileShorts = videoProfile.data.nextPageToken || ''

    const detailInformationVideo = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${APIKEY}`)

    renderProfile(dataProfile, detailInformationVideo)
  } catch (error) {
    console.log(error)
  }
}

function renderProfile(dataProfile, detailInformationVideo) {
  const profileData = dataProfile.data.items[0];
  const banner = profileData.brandingSettings?.image?.bannerExternalUrl || ''

  container.insertAdjacentHTML("afterbegin", profileMark(banner, profileData.snippet.thumbnails.default.url, profileData.snippet.customUrl, profileData.statistics.subscriberCount, profileData.statistics.videoCount, profileData.brandingSettings.channel.title))

  if (!profileData.brandingSettings.image) {
    selectElements(document, "Main_container_Header")?.remove();
    
  }
  const video = TakeShortAndLongVideo(detailInformationVideo)

  checkCountVideoAndGiveMarking(video)

  navInProfile(video)
  dateProfileVideo.push(...detailInformationVideo.data.items)
  
  const contVid = selectElements(document, '.Header_Main_container_video')
  profileMarking = contVid.innerHTML


  slideToButton()

  moreBtn()
  checkCountVideo()

}
function switchAccount() {
  window.location.href = URL.logInURL;
}
function logout() {
  location.href = redirectUri
  state.Autorization = false
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

  checkAndDelete(count1, containerForYou, document.querySelector(".Header_Main_container_video_main"), rightArrowF, leftArrowF, true)
  checkAndDelete(count2, containerShorts, document.querySelector(".Shorts_container_title"), leftArrowS, rightArrowS)
}

function checkAndDelete(count, el, upperEl, arrow1, arrow2, isCont = false) {

  if (count === 0) {
    upperEl.remove()
    el.remove()
    arrow1.remove()
    arrow2.remove()
    checkWhatDeleteAndRemoveNav(el)
  }
  if (count <= 4 && isCont) {
    arrow1.remove()
    arrow2.remove()
  } else if (count <= 5 && !isCont) {
    arrow1.remove()
    arrow2.remove()
  }

  arrow1 ? arrow1.onclick = () => { RightClick(el) } : false
  arrow2 ? arrow2.onclick = () => { leftClick(el) } : false
}
function RightClick(container) {
  container.scrollLeft += 600
}
function leftClick(container) {
  container.scrollLeft -= 600
}

function checkWhatDeleteAndRemoveNav(el) {
  const nav =   selectElements(document, ".container_channel_navigation_item")
  if (el.classList.contains("Shorts_video_container")) {
    nav.length === 3 ? nav[2].remove() : nav[1].remove()
  }
  if (el.classList.contains("ForYou_Container_video")) {

    nav[1].remove()
  }
}


function AddClassToContainer(containerVideo, inner) {
  containerVideo.classList.add("grid", "gridTC5", "gap10")
  changeInnerHTML(containerVideo, inner)
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
    

    selectElements(document, ".line")?.remove()
    selectElements(document, ".Header_Main_container_video")
    selectElements(document, ".Header_Main_container_video")?.remove()
    
    const nav = selectElements(document, ".container_channel_navigation")
    nav.innerHTML = `
     <div class="noneVideo">Автор поки загрузив жодного відео😥</div>
     `
    addClassList(nav, "jcC")
  }
}

function clickToAvatarUser(e) {
  if (e.target.classList.contains("userImg")) {
    const info = selectElements(document, ".profileImg_Info")
    info.classList.toggle("show")
  } else {
    if (e.target.closest(".theme")) {
      return
    }
    if (e.target.closest(".back")) {
      return
    }
    

    const info = selectElements(document, ".profileImg_Info")
    info.classList.remove("show")

  }
}

