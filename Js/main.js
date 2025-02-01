

// import "./LoadVideo.js"
import "./PostToToken.js"
import { MarkingPlayer } from "./Marking/MarkingPlayerVideo.js"

import { container as main } from "./LoadVideo.js"
import { dateRequest } from "./LoadVideo.js"

main.addEventListener("click", (e) => {
    const id = e.target.closest(".Main_container_video").getAttribute("idVideo")
   const dateRequests = dateRequest.filter(el=>el.id === id)
    main.innerHTML = MarkingPlayer(id, dateRequests)
    main.classList.add('block')
    isVideo = true
    
})












