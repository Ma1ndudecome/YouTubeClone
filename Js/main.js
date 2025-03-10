
import "./gaming.js"; import "./LoadVideo.js"; import "./PostToToken.js"; import "./Listners.js"; import "./ReturnPushState.js"; import "./HeaderANDAside.js";import "./changeHistoryPage.js"
import { MarkingPlayer, MarkingPlayerAny } from "./Marking/MarkingPlayerVideo.js"
import { dateRequest } from "./LoadVideo.js"
import { dateProfileVideo, state } from "./changeData.js"
import {  ImgAndSubscribeChannel, getMoreStatisticId} from "./AllApiRequest.js"
import {  markProfile, addMarkingVideoAndFunctional} from "./HelpsFunction.js"
import { arrDataVideo } from "./changeHistoryPage.js"
const main = document.querySelector(".Main_container")


main.addEventListener("click", async (e) => {
    main.classList.remove("grid")
    if(e.target.closest(".chooseVideo")){
        if(e.target.classList.contains("nameChannelSelect")){
            const nameChannel = e.target.textContent
            markProfile(main, nameChannel)
            isVideo = true
        }else{

            const id = e.target.closest(".chooseVideo").getAttribute("idVideo")
            let dateRequests = dateRequest.filter(el => el.id === id)
            if(dateRequests.length === 0){
                dateRequests = await getMoreStatisticId(id)
                dateRequests = dateRequests.data.items
            }
           

            dateRequests[0].snippet.description = dateRequests[0].snippet.description.replace(/\n/g, '<br>')

            const nameChannel = e.target.closest(".chooseVideo").querySelector(".nameChannelSelect").textContent

            const dataChannel = await ImgAndSubscribeChannel(nameChannel)

            main.innerHTML = MarkingPlayerAny(id, dateRequests, state, dataChannel)

            addMarkingVideoAndFunctional(main, document.querySelector(".Main_container_blockInfo_description_link"), dateRequests[0].snippet.description,  dateRequests, dataChannel.imgChannel, dataChannel.subscriberChannel, id)

        }
    }else if(e.target.closest(".chooseVideoProfile")){

        const id = e.target.closest(".chooseVideoProfile").getAttribute("idVideo")
        let dateRequests = dateRequest.filter(el => el.id === id)
        if(dateRequests.length === 0){
            dateRequests = await getMoreStatisticId(id)
            dateRequests = dateRequests.data.items
        }
        dateRequests[0].snippet.description = dateRequests[0].snippet.description.replace(/\n/g, '<br>')
       

        const nameChannel = e.target.closest(".chooseVideoProfile").querySelector(".nameChannelSelect").textContent

        const dataChannel = await ImgAndSubscribeChannel(nameChannel)

        main.innerHTML = MarkingPlayer(id, dateRequests, state.infoChannel)

        addMarkingVideoAndFunctional(main, document.querySelector(".Main_container_blockInfo_description_link"), dateRequests[0].snippet.description,  dateRequests, state.infoChannel.img, dataChannel.subscriberChannel, id)

    }
})


export function inserEl(el, positon, marking) {
    el.insertAdjacentHTML(positon, marking)
}





