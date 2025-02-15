

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
import { markingShowMore } from "./Marking/ProfileMarking.js"
let countClick = 0
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
        const buttonShowMore = document.querySelector(".showMoreDescription")
        buttonShowMore.onclick = ()=>{
            countClick += 1
            if(countClick === 1){
                buttonShowMore.textContent = 'Show less'
                moreBtn(dateRequests[0].snippet.description, dateRequests, state)
            

            }else if(countClick === 2){
                document.querySelector(".containerShowMore").remove()
                shortLength('.Main_container_blockInfo_description_link', 20)
                buttonShowMore.textContent = '...more'
                countClick = 0
            }
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
function moreBtn(originalText, dateRequests, ProfileData){
    const descriptionCont = document.querySelector(".Main_container_blockInfo_description_link")
    document.querySelector('.Main_container_blockInfo_description_link').textContent = originalText
    descriptionCont.insertAdjacentHTML("afterend",markingShowMore(dateRequests, ProfileData))

}
function linkToTag(description){
    const regex = /(https?:\/\/[^\s]+)/g;
    const updateDesc = description.replace(regex, (match)=>{
        return `<a href="${match}" target="_blank">${match}</a>`
    })
    return updateDesc
}