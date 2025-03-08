
import "./gaming.js"; import "./LoadVideo.js"; import "./PostToToken.js"; import "./Listners.js"; import "./ReturnPushState.js"; import "./HeaderANDAside.js";import "./changeHistoryPage.js"
import { MarkingPlayer, MarkingPlayerAny } from "./Marking/MarkingPlayerVideo.js"
import { container as main, dateRequest } from "./LoadVideo.js"
import { dateProfileVideo, state } from "./changeData.js"
import { listnerToInput,buttonLoadMoreFnc, lisnerToLike, likeAndDislikeToVideoFunc} from "./Listners.js"
import { takeComment, ImgAndSubscribeChannel} from "./AllApiRequest.js"
import { addMarkingComent, shortLength, checkAndShowRatingVideo, markProfile} from "./HelpsFunction.js"
import { LoadMoreComments } from "./infinityScrollInProfile.js"
import { arrDataVideo } from "./changeHistoryPage.js"
import { markingProfile } from "./Marking/Marking.js"

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
            console.log('marking')

            const id = e.target.closest(".Main_container_video").getAttribute("idVideo")
            const dateRequests = dateRequest.filter(el => el.id === id)
            
                arrDataVideo.push(dateRequests[0]); // 
                localStorage.setItem("history", JSON.stringify(arrDataVideo));
            
            
            dateRequests[0].snippet.description = dateRequests[0].snippet.description.replace(/\n/g, '<br>')
            const nameChannel = e.target.closest(".Main_container_video").querySelector(".Main_container_video_title_info_name").textContent

            const dataChannel = await ImgAndSubscribeChannel(nameChannel)


            main.innerHTML = MarkingPlayerAny(id, dateRequests, state, dataChannel)

            
            main.classList.add('block')
            isVideo = true
            inserEl(document.querySelector(".Main_container_blockInfo_description_link"), "afterbegin", dateRequests[0].snippet.description)
            shortLength('.Main_container_blockInfo_description_link', 150)
            buttonLoadMoreFnc(dateRequests, dataChannel.imgChannel, dataChannel.subscriberChannel)

            const response = await takeComment(id)

            addMarkingComent(response)
            listnerToInput()
            lisnerToLike()
            likeAndDislikeToVideoFunc(id)
            checkAndShowRatingVideo(id)


            LoadMoreComments(id)

        }


    } else if (e.target.closest(".video_box")) {

        const id = e.target.closest(".video_box").getAttribute("idVideo")
        const dateRequests = dateProfileVideo.filter(el => el.id === id)

        dateRequests[0].snippet.description = dateRequests[0].snippet.description.replace(/\n/g, '<br>')


        main.innerHTML = MarkingPlayer(id, dateRequests, state.infoChannel)
        main.classList.add('block')
        isVideo = true
        inserEl(document.querySelector(".Main_container_blockInfo_description_link"), "afterbegin", dateRequests[0].snippet.description)
        shortLength('.Main_container_blockInfo_description_link', 150)

        buttonLoadMoreFnc(dateRequests, state.infoChannel.img, state.infoChannel.subscriberCount)

        const response = await takeComment(id)
        console.log(response)
        addMarkingComent(response)
        listnerToInput()
        lisnerToLike()
        likeAndDislikeToVideoFunc()
        checkAndShowRatingVideo(id)

        LoadMoreComments(id)
    }

})


export function inserEl(el, positon, marking) {
    el.insertAdjacentHTML(positon, marking)
}





