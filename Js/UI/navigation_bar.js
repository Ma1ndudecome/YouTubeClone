import { aside } from "./HeaderANDAside.js";
import { container, addMarkingOnPage} from "../features/LoadVideo.js";
import { ShortsContainer, innerContentShorts, iframePlayerShortsVideo} from "../Marking/reExportMarking.js";
import { TakeTrending, getShortsVideo } from "../api/AllApiRequest.js";
import {  addClassList, removeClassList, changeInnerHTML, fromLikeToShortLike} from "../untils/reExportUntils.js";
import { state } from "../URL/reExportUrl.js";
 const videoShorts = []


aside.addEventListener('click', (e) => {
    e.preventDefault()
    const nameSection = e.target.parentNode.querySelector("p").textContent;
    if (nameSection === 'Trending') {
        openTranding()
    }else if(nameSection === 'Shorts'){
        openShortsVideo()
    }
})


async function  openTranding(){
    addClassList(container, 'grid')
    removeClassList(container, 'block')
    const response = await TakeTrending()
    addMarkingOnPage(response.data.items)
}

async function openShortsVideo(){
    changeInnerHTML(container, '')

    container.className = 'dF containerShorts fdC mT10p'

    const response = await getShortsVideo()

    changeInnerHTML(container, ShortsContainer())
    getElemntAndAddMarking(0, response.data.items)
    state.shortsPageToken = response.data.nextPageToken || ''

    videoShorts.push(...response.data.items)

    listnersToArrow()
    
}
export function getElemntAndAddMarking(counterVideo, response){
    const containerShorts = document.querySelector(".containerShorts")
    const videoData = response[counterVideo]
    console.log(response[counterVideo])
    console.log(counterVideo)

    containerShorts.insertAdjacentHTML("beforeend", innerContentShorts(videoData.snippet.thumbnails.default.url, videoData.snippet.channelTitle, videoData.snippet.description, fromLikeToShortLike(videoData.statistics.likeCount),  fromLikeToShortLike(videoData.statistics.commentCount), videoData.id))
    
    const videoContainer = container.querySelectorAll('.shorts-video-inner')[counterVideo]

    videoContainer.insertAdjacentHTML("afterbegin", iframePlayerShortsVideo(videoData.id, videoData.snippet.title))


}

function listnersToArrow(){
    const arrowDown = document.querySelector(".shorts-btn-down")
    arrowDown.onclick = (e)=>{arrowDownClick(e, arrowDown)}
}
let counter = 1
function arrowDownClick(e, arrow){
 
    e.preventDefault()
    getElemntAndAddMarking(counter, videoShorts)
    
    console.log(arrow)
    
    console.log(videoShorts[counter].id)
    setTimeout(() => {
        const targetElement = document.getElementById(videoShorts[counter].id);
            console.log("Target Element:", targetElement);
         targetElement?.scrollIntoView({ behavior: "smooth" });
    counter+=1

    }, 0);
}
