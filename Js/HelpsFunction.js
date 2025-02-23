import { MarkingCommentItem } from "./Marking/MarkingPlayerVideo.js"
import { markingShowMore } from "./Marking/Marking.js"
import { state } from "./changeData.js"
import { inserEl } from "./main.js"
import { liked, uhliked } from "./Listners.js"

export function addMarkingComent(data){

    const containerComment = document.querySelector(".AllComment_Container")
    
    data.items.forEach(({snippet})=>{
        const dates = snippet.topLevelComment.snippet
        const date = new Date(dates.publishedAt)
        const result = dateFns.formatDistanceToNow(date, { addSuffix: true })
        
        containerComment.insertAdjacentHTML("beforeend", MarkingCommentItem(dates.authorProfileImageUrl, dates.authorDisplayName, result, dates.textDisplay, dates.likeCount, snippet.topLevelComment.snippet.viewerRating)) 

    })
    state.PageTokenComment = data.nextPageToken
    document.querySelectorAll(".AllComment_Container_item_statistic").forEach(el=>{
      const rating  = el.getAttribute("viewerrating")
      console.log(rating)
      if(rating === 'like'){
        el.querySelector(".AllComment_Container_item_statistic_like_svg").querySelector("path").style.fill = liked
      }else if(rating === "dislike"){
        el.querySelector(".AllComment_Container_item_statistic_disLike").querySelector("path").style.fill = liked
      }
    })
   
    
}
export function shortLength(element, maxLength){
    const elem = document.querySelector(element)
    const text = elem.textContent

    if(text.length > maxLength){
        const short = text.slice(0, maxLength)
        elem.textContent = short
    }
    return text
}

export function moreBtn(dateRequests, ProfileData, countSubs){
    const descriptionCont = document.querySelector(".Main_container_blockInfo_description_link")
    descriptionCont.innerHTML = dateRequests[0].snippet.description
    inserEl(descriptionCont,"afterend",markingShowMore(dateRequests, ProfileData, countSubs))
}