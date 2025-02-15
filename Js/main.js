

import "./LoadVideo.js"
import "./PostToToken.js"
import "./SingIn.js"
import "./ReturnPushState.js"
import { MarkingPlayer } from "./Marking/MarkingPlayerVideo.js"

import { container as main } from "./LoadVideo.js"
import { dateRequest } from "./LoadVideo.js"
import { dateProfileVideo } from "./changeData.js"

import { fromLikeToShortLike } from "./ViewToViewLikeToLike.js"
import "./changeHistoryPage.js"

import { state } from "./changeData.js"

main.addEventListener("click", (e) => {

    if(e.target.closest(".Main_container_video")){
        const id = e.target.closest(".Main_container_video").getAttribute("idVideo")
        const dateRequests = dateRequest.filter(el=>el.id === id)
        main.innerHTML = MarkingPlayer(id, dateRequests)
        main.classList.add('block')
        isVideo = true
    }else if(e.target.closest(".video_box")){
        
        const id = e.target.closest(".video_box").getAttribute("idVideo")
        const dateRequests = dateProfileVideo.filter(el=>el.id === id)
    
        dateRequests[0].snippet.description = dateRequests[0].snippet.description.replace(/\n/g, '<br>')

        main.innerHTML = MarkingPlayer(id, dateRequests, state.infoChannel)
        
  
        main.classList.add('block')
        isVideo = true
        
        shortLength('.Main_container_blockInfo_description_link', 20)
        document.querySelector(".showMoreDescription").onclick = ()=>{
            moreBtn(dateRequests[0].snippet.description)
        }
    }
   
    
    
})

function shortLength(element, maxLength){
    const elem = document.querySelector(element)
    const text = elem.textContent

    if(text.length > maxLength){
        const short = text.slice(0, maxLength)
        elem.textContent = short
    }
    return text
}
function moreBtn(originalText){
    document.querySelector('.Main_container_blockInfo_description_link').textContent = originalText
}