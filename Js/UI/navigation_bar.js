import { aside, clickGaming, clickNews, clickSports, clickCourses, clickFashion } from "./HeaderANDAside.js";
import { container, addMarkingOnPage} from "../features/LoadVideo.js";
import { ShortsContainer, innerContentShorts, iframePlayerShortsVideo, markingTranding} from "../Marking/reExportMarking.js";
import { TakeTrending, getShortsVideo } from "../api/AllApiRequest.js";
import {changeInnerHTML, fromLikeToShortLike} from "../untils/reExportUntils.js";
import { observeToTrigerShorts } from "../infinityScrollInProfile.js";
import { setNewUrl } from "../features/ReExportFeatures.js";
let videoShorts = []

let counter = 0

aside.addEventListener('click', (e) => {
    e.preventDefault()
    const nameSection = e.target.parentNode.querySelector("p").textContent;
    if (nameSection === 'Trending') {
        openTranding()
    }else if(nameSection === 'Shorts'){
        openShortsVideo()
    }else if(nameSection === 'Gaming'){
        clickGaming()
    }else if(nameSection === 'News'){
        clickNews()
    }else if(nameSection === 'Sports'){
        clickSports()
    }else if(nameSection === 'Courses'){
        clickCourses()
    }else if(nameSection === 'Fashion & Beauty'){
        clickFashion()
    }
})

function MarkingTabTranding() {
    changeInnerHTML(container, '');
    changeInnerHTML(container, markingTranding())
}

export async function  openTranding(){
    MarkingTabTranding();
    const containerTranding = document.querySelector('.container_video_trending');
    const response = await TakeTrending(0)
    addMarkingOnPage(containerTranding, response.data.items)
}

export async function openShortsVideo(){
    container.innerHTML = ''
    setNewUrl("/Shorts")
    changeInnerHTML(container, '')

    container.className = 'dF containerShorts fdC mT10p'

    const response = await getShortsVideo()
    
    changeInnerHTML(container, ShortsContainer())
    giveShortsVideoOnPage(response.data.items)

    listnersToArrowDown()
    listnersToArrowUp()

    observeToTrigerShorts(LoadMoreShortsVideo)
    scrollToShorts()

    
}

function giveShortsVideoOnPage(data){
    addContainerOneVideoToPage(data)
    const videoContainer = container.querySelectorAll('.shorts-video-inner')
    for(let i = 0; i < data.length; i+=1){
        videoContainer[i].insertAdjacentHTML("afterbegin", iframePlayerShortsVideo(data[i].id, data[i].snippet.title))
        startFirstVideo(i, videoContainer)
    }
}

function listnersToArrowDown(){
    const arrowDown = document.querySelector(".shorts-btn-down")
    arrowDown.onclick = arrowDownClick
   
}
function listnersToArrowUp(){
    const arrowUp = document.querySelector(".shorts-btn-up")
    arrowUp.onclick = scrollUp
}
async function arrowDownClick(){
    increaseCounter()
    const iframe = takeIframes(1)
  
    iframe.currIframes.scrollIntoView({behavior:"smooth"})
    pauseStartVideo(iframe.currIframes, iframe.nextIframes)
}
function scrollUp(){
    counter < 0 ? counter = 0 : decreaseCounter()
    const iframe = takeIframes(2)

    iframe.currIframes.scrollIntoView({behavior:"smooth"})

    pauseStartVideo(iframe.currIframes, iframe.nextIframes)

}
function takeIframes(type){
    const iframe =  document.querySelectorAll("iframe")
    let nextCurrIframe;
    type === 1 ?  nextCurrIframe = {nextIframes:iframe[counter + 1]} :  nextCurrIframe =  {prevFrames:iframe[counter - 1]}
    return {currIframes:iframe[counter], ...nextCurrIframe}
    
}
function pauseStartVideo(Iframe1, Iframe2){
    controlPlayer(Iframe1, 'playVideo')
    controlPlayer(Iframe2, 'pauseVideo')
}
function controlPlayer(el, type){
    const iframe = el.contentWindow;
        iframe.postMessage(
            '{"event":"command","func":"' + `${type}` + '","args":""}',
            "*"
          );
}
function startFirstVideo(i, videoContainer){
    if(i === 0){
        const iframe = videoContainer[i].querySelector("iframe")
        iframe.onload = ()=>controlPlayer(iframe, "playVideo")
    }
}
function addContainerOneVideoToPage(data){
    const containerShorts = document.querySelector(".ShortsContainer")
    data.forEach(el=>{
        containerShorts.insertAdjacentHTML("beforeend", innerContentShorts(el.snippet.thumbnails.default.url, el.snippet.channelTitle, el.snippet.description, fromLikeToShortLike(el.statistics.likeCount),  fromLikeToShortLike(el.statistics.commentCount), el.id))
    })
}
function decreaseCounter(){
    counter -= 1
}
function increaseCounter(){
    counter += 1
}
async function LoadMoreShortsVideo(){

    const response = await getShortsVideo()
    const data = response.data.items

    addContainerOneVideoToPage(data)

    const videoContainer = container.querySelectorAll('.shorts-video-inner')

    let j = 0 

    for(let i = counter+1; i < counter + 11; i+=1){
        videoContainer[i].insertAdjacentHTML("afterbegin", iframePlayerShortsVideo(data[j].id, data[j].snippet.title))
    j += 1
    }
}
function scrollToShorts(){
    let lastScroll = 0

    window.onscroll = ()=>{
        window.scrollY > lastScroll ? scrollDownWheel() : scrollUpWheel()
        lastScroll = window.scrollY
    }
}
function scrollDownWheel(){
    setTimeout(()=>{
        console.log("down")
    },500)
}
function scrollUpWheel(){
    setTimeout(()=>{
        console.log("up")
    },500)
}