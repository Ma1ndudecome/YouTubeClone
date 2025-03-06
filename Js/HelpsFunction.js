import { MarkingCommentItem } from "./Marking/MarkingPlayerVideo.js"
import { markingShowMore } from "./Marking/Marking.js"
import { state } from "./changeData.js"
import { inserEl } from "./main.js"
import { liked, uhliked } from "./Listners.js"
import { getRatingVideo, takeMoreInfoChannel } from "./AllApiRequest.js"
import { markingProfile } from "./Marking/Marking.js"
import { takeMoreVideoAnyProfile } from "./AllApiRequest.js"
import { slideToButton } from "./changeData.js"
import { forYouVideoMarking, shortVideoMarking } from "./Marking/profileVideoMarking.js"
import { formatDuration } from "./FromISOToTime.js"

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
  console.log(video)
  main.classList.add("block")

  if (!channel.brandingSettings.image.bannerExternalUrl) {
    main.innerHTML = markingProfile('', channel.snippet.thumbnails.high, channel.snippet.customUrl, channel.statistics.subscriberCount, channel.statistics.videoCount, channel.snippet.title)
  } else {
    main.innerHTML = markingProfile(channel.brandingSettings.image.bannerExternalUrl, channel.snippet.thumbnails.high.url, channel.snippet.customUrl, channel.statistics.subscriberCount, channel.statistics.videoCount, channel.snippet.title)

  }
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

  slideToButton()




}

