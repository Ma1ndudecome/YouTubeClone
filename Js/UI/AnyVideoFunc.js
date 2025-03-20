import { dateTime } from "../untils/reExportUntils"
import { state } from "../features/ReExportFeatures"
import { MarkingCommentItem } from "../Marking/MarkingPlayerVideo"
import { getRatingVideo, addRateToVideo } from "../api/AllApiRequest"




//Load and Show comment video
export function addMarkingComent(data) {
  const containerComment = document.querySelector(".AllComment_Container")

  data.items ? data.items.forEach((dates)=>insertCommentToPage(dates, containerComment, "beforeend")) : insertCommentToPage(data, containerComment, "afterbegin")

  if (data.nextPageToken) {
    state.PageTokenComment = data.nextPageToken
  }

  getAndShowRatingComment()
}
//accepts info about comment, accepts container for add,  and accepts position
function insertCommentToPage(data, containerComment, position){
    const dates = data.snippet.topLevelComment.snippet
    containerComment.insertAdjacentHTML(position, MarkingCommentItem(dates.authorProfileImageUrl, dates.authorDisplayName, dateTime(dates.publishedAt), dates.textDisplay, dates.likeCount, dates.viewerRating))
}
//select all coments on page, and take which one rating and call func checkRatingComment
function getAndShowRatingComment(){
  const allComments = document.querySelectorAll(".AllComment_Container_item_statistic")

  allComments.forEach(el=>{
    const rating = el.getAttribute("viewerrating")
    checkRatingComment(rating, el)
  })
}
// check which one rating on video now and call fucn showLikeOnVideo
function checkRatingComment(rating, el){
  if(rating === 'like'){
    showLikeOnVideo(el, '.AllComment_Container_item_statistic_like_svg svg')
  }else if(rating === 'dislike'){
    showLikeOnVideo(el, '.AllComment_Container_item_statistic_disLike_svg svg')
  }
}
// select svg and add class Like
function showLikeOnVideo(el, rateItem){
  const svgItem = el.querySelector(rateItem)
  const countLikeEl = el.querySelector(".AllComment_Container_item_statistic_like_count")
  countLikeEl.classList.add("Liked")
  svgItem.classList.add("Like")
}

// Listner no like and dislike on comment
export function listnerToContainerComment(){
    //all comment container
    const containerComment = document.querySelector(".AllComment_Container")
    containerComment.addEventListener("click", handlingClickToComment)

}

function handlingClickToComment({target}){
    //save like/dislike class for nice writing code
    const likeClass = 'AllComment_Container_item_statistic_like_svg'
    const DisLikeClass = 'AllComment_Container_item_statistic_disLike_svg'
    checkWhereDidClick(target.classList.contains(likeClass) || target.classList.contains(DisLikeClass), target)
}

function checkWhereDidClick(situation, target){
    if(!situation) return

    const parentElement = target.closest(".AllComment_Container_item_statistic")
    const LikedElement = parentElement.querySelector(".Like")
    const countLike = parentElement.querySelector(".AllComment_Container_item_statistic_like_count")
    const isLike = target.classList.contains("AllComment_Container_item_statistic_like_svg")
    const isDisLike = target.classList.contains("AllComment_Container_item_statistic_disLike_svg")
  
    target.children[0].classList.add("Like")
    
    if(isDisLike){
      const like = parentElement.querySelector(".AllComment_Container_item_statistic_like_svg  svg")
      like.classList.contains("Like") ?  DecreaseCountLike(countLike) : false
    }

    LikedElement ?  LikedElement.classList.remove("Like") : false
    isLike ? target.children[0].classList.contains("Like") ? increaseCountLike(countLike) : DecreaseCountLike(countLike) : false
    
}

//increase Count Like on comment
function increaseCountLike(Like){
  if(isNaN(+Like.textContent)){
    return
  }
  const NumLike = +Like.textContent
  Like.textContent = NumLike + 1
}
//Decrease Count Like on comment
function DecreaseCountLike(Like){
  if(isNaN(+Like.textContent)){
    return
  }
  const NumLike = +Like.textContent
  Like.textContent = NumLike - 1
}
// Logic Like And DisLike To any Video:

export function FuncLikeAndDisLike(id){
  loadRatingLike(id)
  const emotionContainer = document.querySelector(".rightSide_emotion")
  emotionContainer.addEventListener("click", ({target})=>{
    handlingClickToVideoEmotion(target, id)
  })
}

function handlingClickToVideoEmotion(target, id){
  const like = document.querySelector(".rightSide_emotion_like_svg svg")
  const dislike = document.querySelector(".rightSide_emotion_dislike_svg svg")
  const countLike = document.querySelector(".rightSide_emotion_like_count")
  const isLike = target.classList.contains("rightSide_emotion_like")
  const isDisLike = target.classList.contains("rightSide_emotion_dislike")
  const svg = target.querySelector("svg")

  if(isDisLike){
    like.classList.contains("Like") ? DecreaseCountLike(countLike) : false
    like.classList.remove("Like")
    addRateToVideo(id, "dislike")
  }
  svg.classList.contains("Like") ? svg.classList.remove("Like") : svg.classList.add("Like")

  if(isLike){
  
    svg.classList.contains("Like") ? increaseAndAddRating(countLike, id, "like"):decreaseAndAddRating(countLike, id, "none")
    dislike.classList.remove("Like")

  }
}

async function loadRatingLike(id){
  const like = document.querySelector(".rightSide_emotion_like_svg svg")
  const dislike = document.querySelector(".rightSide_emotion_dislike_svg svg")
  const response = await getRatingVideo(id)
  const rating = response.data.items[0].rating

 rating === "like" ? like.classList.add("Like") : false
 rating === "dislike" ? dislike.classList.add("Like") : false

}

function increaseAndAddRating(countLike, id, rating){
  increaseCountLike(countLike)
  addRateToVideo(id, rating)
}

function decreaseAndAddRating(countLike, id, rating){
  DecreaseCountLike(countLike, id, rating)
  addRateToVideo(id, rating)

}