

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
        let countClick = 0
  
        main.classList.add('block')
        isVideo = true
       inserEl(document.querySelector(".Main_container_blockInfo_description_link"),"afterbegin", dateRequests[0].snippet.description )
        shortLength('.Main_container_blockInfo_description_link', 100)
        
        const buttonShowMore = document.querySelector(".showMoreDescription")
        buttonShowMore.onclick = ()=>{
            countClick += 1
            if(countClick === 1){
                buttonShowMore.textContent = 'Show less'
                moreBtn(dateRequests[0].snippet.description, dateRequests, state)
            }else if(countClick === 2){
                document.querySelector(".containerShowMore").remove()
                shortLength('.Main_container_blockInfo_description_link', 100)
                buttonShowMore.textContent = '...more'
                countClick = 0
            }
        }
        listnerToInput()
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
    descriptionCont.textContent = originalText
    inserEl(descriptionCont,"afterend",markingShowMore(dateRequests, ProfileData))
}

function inserEl(el, positon, marking){
    el.insertAdjacentHTML(positon, marking)
}
function listnerToInput(){
    const inputCont= document.querySelector(".Comment_input_block_tag input")
    
    const button = document.querySelector(".Comment_input_block_under_apply")
    inputCont.addEventListener("input", (e)=>{
        
        console.log(e.target)
        console.log(e.target.value)
        if(e.target.value === ''){
            button.classList.remove("sendButton")
            return
        }
        button.classList.add("sendButton")
        
    })
}