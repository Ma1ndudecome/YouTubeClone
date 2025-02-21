
import "./gaming.js"
import "./LoadVideo.js"
import "./PostToToken.js"
import "./SingIn.js"
import "./ReturnPushState.js"
import "./HeaderANDAside.js"
import { MarkingPlayer } from "./Marking/MarkingPlayerVideo.js"
import { MarkingPlayerAny } from "./Marking/MarkingPlayerVideo.js"
import { container as main } from "./LoadVideo.js"
import { dateRequest } from "./LoadVideo.js"
import { dateProfileVideo } from "./changeData.js"

import { fromLikeToShortLike } from "./ViewToViewLikeToLike.js"
import "./changeHistoryPage.js"

import { state } from "./changeData.js"
import { markingShowMore } from "./Marking/ProfileMarking.js"
import { MarkingCommentItemAny } from "./Marking/MarkingPlayerVideo.js"
import { takeComment } from "./AllApiRequest.js"
import { MarkingCommentItem } from "./Marking/MarkingPlayerVideo.js"

import { lisnerToLike } from "./SingIn.js"

import { LoadMoreComments } from "./infinityScrollInProfile.js"
main.addEventListener("click", async (e) => {
    let countClick = 0
    main.classList.remove("grid")
    if(e.target.closest(".Main_container_video")){
        if(e.target.classList.contains("Main_container_video_title_info_name")){
           const NameChannel = e.target.textContent
            isVideo = true

        }else if(e.target.classList.contains("VideoLogoChannel")){
            console.log('coming to Channel')
            isVideo = true
        }else{
            const id = e.target.closest(".Main_container_video").getAttribute("idVideo")
            const dateRequests = dateRequest.filter(el=>el.id === id)
            main.innerHTML = MarkingPlayerAny(id, dateRequests, state)
            console.log(dateRequests[0])
            main.classList.add('block')
            isVideo = true
            buttonLoadMoreFnc(dateRequests, dateRequests[0].snippet.thumbnails.high.url, 2000)

            const response = await takeComment(state.acessToken, id)
            console.log(response)
            addMarkingComent(response)
            listnerToInput()
            lisnerToLike()
        
            LoadMoreComments(id)
            
        }
       
        
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
        
        buttonLoadMoreFnc(dateRequests, state.infoChannel.img, state.infoChannel.subscriberCount)

        const response = await takeComment(state.acessToken, id)
        addMarkingComent(response)
        listnerToInput()
        lisnerToLike()

        LoadMoreComments(id)
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
function moreBtn(originalText, dateRequests, ProfileData, countSubs){
    const descriptionCont = document.querySelector(".Main_container_blockInfo_description_link")
    descriptionCont.textContent = originalText
    inserEl(descriptionCont,"afterend",markingShowMore(dateRequests, ProfileData, countSubs))
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


export function addMarkingComent(data){
    console.log(data)

    const containerComment = document.querySelector(".AllComment_Container")
    
    data.items.forEach(({snippet})=>{
        const dates = snippet.topLevelComment.snippet
        const date = new Date(dates.publishedAt)
        const result = dateFns.formatDistanceToNow(date, { addSuffix: true })
        
        containerComment.insertAdjacentHTML("beforeend", MarkingCommentItem(dates.authorProfileImageUrl, dates.authorDisplayName, result, dates.textDisplay, dates.likeCount)) 
    })
    state.PageTokenComment = data.nextPageToken
}

function buttonLoadMoreFnc(dateRequests, state, countSubs){
    let countClick = 0
    const buttonShowMore = document.querySelector(".showMoreDescription")
    console.log(dateRequests)
    buttonShowMore.onclick = ()=>{
        countClick += 1
        if(countClick === 1){
            buttonShowMore.textContent = 'Show less'
            console.log(countSubs)
            moreBtn(dateRequests[0].snippet.description, dateRequests, state, countSubs)
        }else if(countClick === 2){
            document.querySelector(".containerShowMore").remove()
            shortLength('.Main_container_blockInfo_description_link', 100)
            buttonShowMore.textContent = '...more'
            countClick = 0
        }
    }
}