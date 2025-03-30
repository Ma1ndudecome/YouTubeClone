import { aside } from "./HeaderANDAside.js";
import { container, addMarkingOnPage} from "../features/LoadVideo.js";
import { ShortsContainer, innerContentShorts, iframePlayerShortsVideo} from "../Marking/reExportMarking.js";
import { TakeTrending, getShortsVideo } from "../api/AllApiRequest.js";
import {  addClassList, removeClassList, changeInnerHTML, fromLikeToShortLike} from "../untils/reExportUntils.js";
import { state } from "../URL/reExportUrl.js";
import { setNewUrl } from "../features/ReExportFeatures.js";
 let videoShorts = []


aside.addEventListener('click', (e) => {
    e.preventDefault()
    const nameSection = e.target.parentNode.querySelector("p").textContent;
    if (nameSection === 'Trending') {
        // setNewUrl("/Trending")
        openTranding()
    }else if(nameSection === 'Shorts'){
        // setNewUrl("/Shorts")
        openShortsVideo()
    }
})


<<<<<<< HEAD
export async function  openTranding(){
    container.innerHTML = ''
    container.className = 'Main_container grid'
=======
async function  openTranding(){
    container.innerHTML = ""
    addClassList(container, 'grid')
    removeClassList(container, 'block')
>>>>>>> main
    const response = await TakeTrending()
    addMarkingOnPage(response.data.items)
}

export async function openShortsVideo(){
    container.innerHTML = ''
    setNewUrl("/Shorts")
    changeInnerHTML(container, '')

    container.className = 'dF containerShorts fdC mT10p'

    const response = await getShortsVideo()

    changeInnerHTML(container, ShortsContainer())
    await getElemntAndAddMarking(0, response.data.items)
   
    videoShorts.push(...response.data.items)

    listnersToArrowDown()
    listnersToArrowUp()
    
}
export async function getElemntAndAddMarking(counterVideo, response){
    let videoData = response[counterVideo]
    if(!videoData){
        const responseShorts = await getShortsVideo()
        videoShorts.push(...responseShorts.data.items)
        videoData = videoShorts[counterVideo]
    }

    const containerShorts = document.querySelector(".containerShorts")
    
  

    containerShorts.insertAdjacentHTML("beforeend", innerContentShorts(videoData.snippet.thumbnails.default.url, videoData.snippet.channelTitle, videoData.snippet.description, fromLikeToShortLike(videoData.statistics.likeCount),  fromLikeToShortLike(videoData.statistics.commentCount), videoData.id))
    
    const videoContainer = container.querySelectorAll('.shorts-video-inner')[counterVideo]

    videoContainer.insertAdjacentHTML("afterbegin", iframePlayerShortsVideo(videoData.id, videoData.snippet.title))


}

function listnersToArrowDown(){
    const arrowDown = document.querySelector(".shorts-btn-down")
    arrowDown.onclick = arrowDownClick
}
function listnersToArrowUp(){
    const arrowUp = document.querySelector(".shorts-btn-up")
    arrowUp.onclick = scrollUp
}
let counter = 1
async function arrowDownClick(){
    if(counter > 0){
        const el = document.getElementById(videoShorts[counter]?.id)
        console.log(el)
        if(el){
            stoppedIFrame('pauseVideo', counter-1)
            stoppedIFrame('playVideo', counter)
            scrollDown()
            return
        }
    }
    console.log(counter)
    await getElemntAndAddMarking(counter, videoShorts)
    
    
    stoppedIFrame('pauseVideo', counter-1)
    scrollDown()
}
function stoppedIFrame(type, count){
    console.log(document.querySelectorAll("iframe"))
    const iframe = document.querySelectorAll("iframe")[count].contentWindow;
    iframe.postMessage(
        '{"event":"command","func":"' + `${type}` + '","args":""}',
        "*"
      );
}

function scrollDown(){
    
    setTimeout(()=>{
        const targetElement = document.getElementById(videoShorts[counter].id)
        targetElement?.scrollIntoView({ behavior: "smooth" });
        counter +=1
        
    })
}

function scrollUp(){
    
    stoppedIFrame('pauseVideo', counter-1)
    stoppedIFrame('playVideo', counter-2)

    setTimeout(()=>{
        const targetElement = document.getElementById(videoShorts[counter-2].id)
        targetElement?.scrollIntoView({behavior:"smooth"})
        counter -= 1
    },0)
}
