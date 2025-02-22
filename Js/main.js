
import "./gaming.js"
import "./LoadVideo.js"
import "./PostToToken.js"
import "./Listners.js"
import "./ReturnPushState.js"
import "./HeaderANDAside.js"
import { MarkingPlayer } from "./Marking/MarkingPlayerVideo.js"
import { MarkingPlayerAny } from "./Marking/MarkingPlayerVideo.js"
import { container as main } from "./LoadVideo.js"
import { dateRequest } from "./LoadVideo.js"
import { dateProfileVideo } from "./changeData.js"
import { likeAndDislikeToVideoFunc } from "./Listners.js"
import { listnerToInput } from "./Listners.js"
import { fromLikeToShortLike } from "./ViewToViewLikeToLike.js"
import "./changeHistoryPage.js"
import { buttonLoadMoreFnc } from "./Listners.js"
import { state } from "./changeData.js"
import { markingShowMore } from "./Marking/Marking.js"
import { MarkingCommentItemAny } from "./Marking/MarkingPlayerVideo.js"
import { takeComment } from "./AllApiRequest.js"
import { MarkingCommentItem } from "./Marking/MarkingPlayerVideo.js"
import { addMarkingComent } from "./HelpsFunction.js"
import { shortLength } from "./HelpsFunction.js"

import { lisnerToLike } from "./Listners.js"

import { LoadMoreComments } from "./infinityScrollInProfile.js"

import { ImgAndSubscribeChannel } from "./AllApiRequest.js"
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

            dateRequests[0].snippet.description = dateRequests[0].snippet.description.replace(/\n/g, '<br>')
            const nameChannel = e.target.closest(".Main_container_video").querySelector(".Main_container_video_title_info_name").textContent
           
            const dataChannel =  await ImgAndSubscribeChannel(nameChannel)

           
            main.innerHTML = MarkingPlayerAny(id, dateRequests, state, dataChannel)
           
            main.classList.add('block')
            isVideo = true
            inserEl(document.querySelector(".Main_container_blockInfo_description_link"), "afterbegin",  dateRequests[0].snippet.description)
             shortLength('.Main_container_blockInfo_description_link', 150)
            buttonLoadMoreFnc(dateRequests, dataChannel.imgChannel, dataChannel.subscriberChannel)

            const response = await takeComment(id)
     
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
        shortLength('.Main_container_blockInfo_description_link', 150)
        
        buttonLoadMoreFnc(dateRequests, state.infoChannel.img, state.infoChannel.subscriberCount)

        const response = await takeComment(id)
        addMarkingComent(response)
        listnerToInput()
        lisnerToLike()

        LoadMoreComments(id)
    }
    
    
    
})


export function inserEl(el, positon, marking){
    el.insertAdjacentHTML(positon, marking)
}





