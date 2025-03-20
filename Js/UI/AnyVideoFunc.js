import { dateTime } from "../untils/reExportUntils"
import { state } from "../features/ReExportFeatures"
import { MarkingCommentItem } from "../Marking/MarkingPlayerVideo"




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
    containerComment.addEventListener("click", handlingClick)

}

function handlingClick({target}){
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


function increaseCountLike(Like){
  const NumLike = +Like.textContent
  Like.textContent = NumLike + 1
}
function DecreaseCountLike(Like){
  const NumLike = +Like.textContent
  Like.textContent = NumLike - 1
}