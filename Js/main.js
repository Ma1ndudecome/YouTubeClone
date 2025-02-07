

import "./LoadVideo.js"
import "./PostToToken.js"
import { MarkingPlayer } from "./Marking/MarkingPlayerVideo.js"

import { container as main } from "./LoadVideo.js"
import { dateRequest } from "./LoadVideo.js"
import { dateProfileVideo } from "./changeData.js"
import "./changeHistoryPage.js"

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
        
        main.innerHTML = MarkingPlayer(id, dateProfileVideo)
        main.classList.add('block')
        isVideo = true
    }
   
    
})












