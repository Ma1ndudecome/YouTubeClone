import { inserEl } from "../main.js"
import { getRatingVideo, takeComment, takeMoreInfoChannel, takeMoreVideoAnyProfile, getMoreStatisticId, ImgAndSubscribeChannel } from "../api/ReExportAPI.js"
import { formatDuration } from "./reExportUntils.js"
import { LoadMoreComments } from "../infinityScrollInProfile.js"
import { arrDataVideo } from "../UI/reExportUI.js"
import {MarkingCommentItem, MarkingPlayerAny, MarkingPlayer, markingShowMore, markingProfile, forYouVideoMarking, shortVideoMarking } from "../Marking/reExportMarking.js"
import {state, slideToButton, dateRequest } from "../features/ReExportFeatures.js"
import {buttonLoadMoreFnc, liked, uhliked, ListnersToSendComment, lisnerToLike, ListnersSubscribe, arrDataVideo, addMarkingComent, listnerToContainerComment} from "../UI/reExportUI.js"



export function shortLength(element, maxLength) {
  const elem = document.querySelector(element)
  const text = elem.textContent

  if (text.length > maxLength) {
    const short = text.slice(0, maxLength)
    elem.textContent = short
  }
  return text
}

export function moreBtn(dateRequests, ProfileData, countSubs) {
  const descriptionCont = document.querySelector(".Main_container_blockInfo_description_link")
  descriptionCont.innerHTML = dateRequests[0].snippet.description
  inserEl(descriptionCont, "afterend", markingShowMore(dateRequests, ProfileData, countSubs))
}
export async function checkAndShowRatingVideo(id) {
  if (state.acessToken) {
    const rating = await getRatingVideo(id)
    if (rating.data.items[0].rating === 'like') {
      const containerRating = document.querySelector(".rightSide_emotion_like")
      containerRating.classList.add('activated')
      const path = containerRating.querySelector("path")
      path.style.fill = liked
    } else if (rating.data.items[0].rating === 'dislike') {
      const containerRating = document.querySelector(".rightSide_emotion_dislike")
      containerRating.classList.add('activated')
      const path = containerRating.querySelector("path")
      path.style.fill = liked

    }
  }

}

export function saveAcessToken(access_token) {
  state.acessToken = access_token
}
export function saveImgAccount(img) {
  state.infoChannel = {
    img: img
  }
}
export function UserInAccountTrue(InAccount) {
  state.Autorization = InAccount
}

export async function markProfile(main, nameChannel) {
  const dataChannel = await takeMoreInfoChannel(nameChannel)
  const channel = dataChannel.dataChannel
  const video = await takeMoreVideoAnyProfile(dataChannel.id)

  main.classList.add("block")

  if (!channel.brandingSettings.image.bannerExternalUrl) {
    main.innerHTML = markingProfile('', channel.snippet.thumbnails.high, channel.snippet.customUrl, channel.statistics.subscriberCount, channel.statistics.videoCount, channel.snippet.title)
  } else {
    main.innerHTML = markingProfile(channel.brandingSettings.image.bannerExternalUrl, channel.snippet.thumbnails.high.url, channel.snippet.customUrl, channel.statistics.subscriberCount, channel.statistics.videoCount, channel.snippet.title)

  }
  checkCountVideoAndGiveMarking(video)

  slideToButton()
  navInProfile(video)

}


export function navInProfile(objData) {
  const nav = document.querySelector(".container_channel_navigation")
  const containerVideo = document.querySelector(".Header_Main_container_video")

  nav.onclick = ({ target, currentTarget }) => {

    if (target.textContent === 'Videos') {
      saveMarkingIfOnHome(containerVideo)

      const containerM = findElAddClass(currentTarget, target)
      addElementToContainer(objData.longVideo, 'Videos', containerM)

    } else if (target.textContent === "Shorts") {
      saveMarkingIfOnHome(containerVideo)
      const containerM = findElAddClass(currentTarget, target)
      addElementToContainer(objData.shortVideo, 'Shorts', containerM)

    } else if (target.textContent === "Home") {
      const containerM = findElAddClass(currentTarget, target)
      containerVideo.innerHTML = state.markingHomePage
      containerVideo.classList.remove("grid", "gridTC5", 'gap10')
      slideToButton()

    }
  }
}

function findElAddClass(currentTarget, target) {
  currentTarget.querySelector(".borderBottom").classList.remove("borderBottom")
  target.classList.add("borderBottom")
  const containerM = document.querySelector(".Header_Main_container_video")
  containerM.innerHTML = ''
  containerM.classList.add("grid", "gridTC5", "gap10")
  return containerM
}
function saveMarkingIfOnHome(containerVideo) {
  if (document.querySelector(".borderBottom").textContent === "Home") {
    state.markingHomePage = containerVideo.innerHTML
  }
}
function addElementToContainer(Data, Call, ContainerM) {
  Data.forEach(el => {
    if (Call === 'Videos') {
      ContainerM.insertAdjacentHTML("beforeend", forYouVideoMarking(el.snippet.thumbnails.medium.url, formatDuration(el.contentDetails.duration), el.snippet.title, el.statistics.viewCount, el.snippet.publishedAt, el.id))
    } else if (Call === 'Shorts') {
      ContainerM.insertAdjacentHTML("beforeend", shortVideoMarking(el.snippet.thumbnails.medium.url, el.snippet.title, el.statistics.viewCount, el.id))
    }
  })
}
export function TakeShortAndLongVideo(detailInformationVideo) {
  const long = detailInformationVideo.data.items.filter(el => {
    if (el.snippet.liveBroadcastContent !== "upcoming") {
      return +formatDuration(el.contentDetails.duration)[0] !== 0
    }
  })
  const short = detailInformationVideo.data.items.filter(el => {
    if (el.snippet.liveBroadcastContent !== "upcoming") {
      return +formatDuration(el.contentDetails.duration)[0] === 0
    }
  })
  return { longVideo: long, shortVideo: short }
}

export function checkCountVideoAndGiveMarking(video) {
  if (video.longVideo.length !== 0) {
    const forYouVideoContainer = document.querySelector(".ForYou_Container_video")
    video.longVideo.forEach(el => {
      forYouVideoContainer.insertAdjacentHTML('beforeend', forYouVideoMarking(el.snippet.thumbnails.medium.url, formatDuration(el.contentDetails.duration), el.snippet.title, el.statistics.viewCount, el.snippet.publishedAt, el.id))
    })
  }
  if (video.shortVideo.length !== 0) {
    const ShortsVideoContainer = document.querySelector(".Shorts_video_container")
    video.shortVideo.forEach(el => {
      ShortsVideoContainer.insertAdjacentHTML('beforeend', shortVideoMarking(el.snippet.thumbnails.medium.url, el.snippet.title, el.statistics.viewCount, el.id))
    })
  }
}
export async function addMarkingVideoAndFunctional(main, el, item, dateRequests, imgChannel, ChannelSubs, id, channelId) {

  main.classList.add('block')

  isVideo = true
  inserEl(el, "afterbegin", item)
  shortLength('.Main_container_blockInfo_description_link', 150)
  buttonLoadMoreFnc(dateRequests, imgChannel, ChannelSubs)

  const response = await takeComment(id)

  addMarkingComent(response)
  ListnersToSendComment(id, channelId)
  lisnerToLike(id)
  checkAndShowRatingVideo(id)
  LoadMoreComments(id)
  listnerToContainerComment()

}

export function dateTime(time) {
  const date = new Date(time)
  return dateFns.formatDistanceToNow(date, { addSuffix: true })
}

export async function openVideoEverywere(e, classVideo, call, main) {
  const id = e.target.closest(`${classVideo}`).getAttribute("idVideo")
  let dateRequests = dateRequest.filter(el => el.id === id)
  if (dateRequests.length === 0) {
    dateRequests = await getMoreStatisticId(id)
    dateRequests = dateRequests.data.items
  }

  const isHistory = arrDataVideo.some(el => el.id === dateRequests[0].id)
  if (!isHistory) {
    arrDataVideo.push(dateRequests[0])
    localStorage.setItem("history", JSON.stringify(arrDataVideo))
  }
  dateRequests[0].snippet.description = dateRequests[0].snippet.description.replace(/\n/g, '<br>')

  const nameChannel = e.target.closest(`${classVideo}`).querySelector(".nameChannelSelect").textContent

  const dataChannel = await ImgAndSubscribeChannel(nameChannel)
  console.log(dataChannel)


  call === 1 ? main.innerHTML = MarkingPlayerAny(id, dateRequests, state, dataChannel) : main.innerHTML = MarkingPlayer(id, dateRequests, state.infoChannel)

  call === 1 ? addMarkingVideoAndFunctional(main, document.querySelector(".Main_container_blockInfo_description_link"), dateRequests[0].snippet.description, dateRequests, dataChannel.imgChannel, dataChannel.subscriberChannel, id, dataChannel.ChannelId) : addMarkingVideoAndFunctional(main, document.querySelector(".Main_container_blockInfo_description_link"), dateRequests[0].snippet.description, dateRequests, state.infoChannel.img, state.infoChannel.subscriberCount, id, dataChannel.ChannelId)
  call === 2 ? document.querySelector(".leftSide_subscribe_button").remove() : ListnersSubscribe(dataChannel.ChannelId)
}
export function changeTextContentAndAddClasslist(button, text, clas, addOrRemove) {
  button.textContent = text
  addOrRemove === 0 ? button.classList.add(clas) : button.classList.remove(clas)
}

export function getIdVideo(items){
  return items.map(el=> el.id.videoId).join(',')
}