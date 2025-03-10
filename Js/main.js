
import "./gaming.js"; import "./LoadVideo.js"; import "./PostToToken.js"; import "./Listners.js"; import "./ReturnPushState.js"; import "./HeaderANDAside.js";import "./changeHistoryPage.js"
import { MarkingPlayer, MarkingPlayerAny } from "./Marking/MarkingPlayerVideo.js"
import { dateRequest } from "./LoadVideo.js"
import { dateProfileVideo, state } from "./changeData.js"
import {  ImgAndSubscribeChannel} from "./AllApiRequest.js"
import {  markProfile, addMarkingVideoAndFunctional} from "./HelpsFunction.js"
import { arrDataVideo } from "./changeHistoryPage.js"
const main = document.querySelector(".Main_container")


main.addEventListener("click", async (e) => {
    console.log('marking')
    main.classList.remove("grid")
    if (e.target.closest(".Main_container_video")) {
        console.log('marking')
        if (e.target.classList.contains("Main_container_video_title_info_name")) {
            const NameChannel = e.target.textContent
            markProfile(main,NameChannel)
            isVideo = true
        } else if (e.target.classList.contains("VideoLogoChannel")) {
            const NameChannel = e.target.parentElement.parentElement.querySelector(".Main_container_video_title_info_name").textContent
            // takeMoreInfoChannelAndVideo(NameChannel)

            isVideo = true
        } else {
            const id = e.target.closest(".Main_container_video").getAttribute("idVideo")
            const dateRequests = dateRequest.filter(el => el.id === id)
            
                arrDataVideo.push(dateRequests[0]); // 
                localStorage.setItem("history", JSON.stringify(arrDataVideo));
            
            dateRequests[0].snippet.description = dateRequests[0].snippet.description.replace(/\n/g, '<br>')
            const nameChannel = e.target.closest(".Main_container_video").querySelector(".Main_container_video_title_info_name").textContent

            const dataChannel = await ImgAndSubscribeChannel(nameChannel)

            main.innerHTML = MarkingPlayerAny(id, dateRequests, state, dataChannel)

            addMarkingVideoAndFunctional(main, document.querySelector(".Main_container_blockInfo_description_link"), dateRequests[0].snippet.description,  dateRequests, dataChannel.imgChannel, dataChannel.subscriberChannel, id)
        }


    } else if (e.target.closest(".video_box")) {
        const id = e.target.closest(".video_box").getAttribute("idVideo")
        const dateRequests = dateProfileVideo.filter(el => el.id === id)

        dateRequests[0].snippet.description = dateRequests[0].snippet.description.replace(/\n/g, '<br>')


        main.innerHTML = MarkingPlayer(id, dateRequests, state.infoChannel)
        addMarkingVideoAndFunctional(main, document.querySelector(".Main_container_blockInfo_description_link"), dateRequests[0].snippet.description, dateRequests, state.infoChannel.img, state.infoChannel.subscriberCount, id)
        document.querySelector(".leftSide_subscribe_button").remove()
    }

})


export function inserEl(el, positon, marking) {
    el.insertAdjacentHTML(positon, marking)
}





