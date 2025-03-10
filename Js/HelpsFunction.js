import { MarkingCommentItem } from "./Marking/MarkingPlayerVideo.js"
import { markingShowMore, markingProfile } from "./Marking/Marking.js"
import { state, slideToButton} from "./changeData.js"
import { inserEl } from "./main.js"
import { buttonLoadMoreFnc, liked, uhliked, listnerToInput, lisnerToLike, likeAndDislikeToVideoFunc} from "./Listners.js"
import { getRatingVideo, takeComment, takeMoreInfoChannel, takeMoreVideoAnyProfile  } from "./AllApiRequest.js"
import { forYouVideoMarking, shortVideoMarking } from "./Marking/profileVideoMarking.js"
import { formatDuration } from "./FromISOToTime.js"
import { LoadMoreComments } from "./infinityScrollInProfile.js"

export function addMarkingComent(data) {

  const containerComment = document.querySelector(".AllComment_Container")

  data.items.forEach(({ snippet }) => {
    const dates = snippet.topLevelComment.snippet
    const date = new Date(dates.publishedAt)
    const result = dateFns.formatDistanceToNow(date, { addSuffix: true })

    containerComment.insertAdjacentHTML("beforeend", MarkingCommentItem(dates.authorProfileImageUrl, dates.authorDisplayName, result, dates.textDisplay, dates.likeCount, snippet.topLevelComment.snippet.viewerRating))

  })
  state.PageTokenComment = data.nextPageToken
  document.querySelectorAll(".AllComment_Container_item_statistic").forEach(el => {
    const rating = el.getAttribute("viewerrating")
    if (rating === 'like') {
      el.querySelector(".AllComment_Container_item_statistic_like_svg").querySelector("path").style.fill = liked
    } else if (rating === "dislike") {
      el.querySelector(".AllComment_Container_item_statistic_disLike").querySelector("path").style.fill = liked
    }
  })


}
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
    if (Call === 'Videos'){
      ContainerM.insertAdjacentHTML("beforeend", forYouVideoMarking(el.snippet.thumbnails.medium.url, formatDuration(el.contentDetails.duration), el.snippet.title, el.statistics.viewCount, el.snippet.publishedAt, el.id))
    }else if(Call === 'Shorts'){
      ContainerM.insertAdjacentHTML("beforeend", shortVideoMarking(el.snippet.thumbnails.medium.url, el.snippet.title, el.statistics.viewCount, el.id))
    }
  })
}
export function TakeShortAndLongVideo(detailInformationVideo){
  const long = detailInformationVideo.data.items.filter(el=>{
    if(el.snippet.liveBroadcastContent !== "upcoming"){
      return +formatDuration(el.contentDetails.duration)[0] !== 0
    }
  })
  const short  = detailInformationVideo.data.items.filter(el=>{
    if(el.snippet.liveBroadcastContent !== "upcoming"){
      return +formatDuration(el.contentDetails.duration)[0] === 0
    }
  })
  return {longVideo:long, shortVideo:short}
}

export function checkCountVideoAndGiveMarking(video){
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
export async function addMarkingVideoAndFunctional(main, el, item, dateRequests, imgChannel, ChannelSubs, id){

  main.classList.add('block')
  
  isVideo = true
  inserEl(el, "afterbegin", item)
  shortLength('.Main_container_blockInfo_description_link', 150)
  buttonLoadMoreFnc(dateRequests, imgChannel, ChannelSubs)

  const response = await takeComment(id)

  addMarkingComent(response)
  listnerToInput()
  lisnerToLike()
  likeAndDislikeToVideoFunc(id)
  checkAndShowRatingVideo(id)
  LoadMoreComments(id)
}