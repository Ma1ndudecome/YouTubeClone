import { aside } from "./HeaderANDAside.js";
import { container, addMarkingOnPage} from "../features/LoadVideo.js";
import { ShortsContainer, innerContentShorts, iframePlayerShortsVideo} from "../Marking/reExportMarking.js";
import { TakeTrending, getShortsVideo } from "../api/AllApiRequest.js";
import {  addClassList, removeClassList, changeInnerHTML, fromLikeToShortLike} from "../untils/reExportUntils.js";
import { state } from "../URL/reExportUrl.js";
import { setNewUrl } from "../features/ReExportFeatures.js";
 let videoShorts = []


let counter = 0

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


export async function  openTranding(){
    container.innerHTML = ''
    container.className = 'Main_container grid'
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
    giveShortsVideoOnPage(response.data.items)
    // await getElemntAndAddMarking(0, response.data.items)
   
    // videoShorts.push(...response.data.items)
    listnersToArrowDown()
    listnersToArrowUp()
    
}

function giveShortsVideoOnPage(data){
    const containerShorts = document.querySelector(".containerShorts")
    data.forEach(el=>{
        containerShorts.insertAdjacentHTML("beforeend", innerContentShorts(el.snippet.thumbnails.default.url, el.snippet.channelTitle, el.snippet.description, fromLikeToShortLike(el.statistics.likeCount),  fromLikeToShortLike(el.statistics.commentCount), el.id))
    })
    const videoContainer = container.querySelectorAll('.shorts-video-inner')
    for(let i = 0; i < data.length; i+=1){
        videoContainer[i].insertAdjacentHTML("afterbegin", iframePlayerShortsVideo(data[i].id, data[i].snippet.title))
        if(i === 0){
            const iframe = videoContainer[i].querySelector("iframe")  
            iframe.onload = ()=>controlPlayer(iframe,"playVideo")
        }
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
    counter += 1
    const iframe = document.querySelectorAll("iframe")

    const currIframes = iframe[counter]
    const prevIframes = iframe[counter-1]
    !currIframes ? await loadMoreVideo() : false
    currIframes.scrollIntoView({behavior:"smooth"})

    controlPlayer(currIframes, 'playVideo')
    controlPlayer(prevIframes, 'pauseVideo')

}
function scrollUp(){
    counter < 0 ? counter = 0 : counter -= 1
    const iframe =  document.querySelectorAll("iframe")
    const currIframes = iframe[counter]
    const nextIframes = iframe[counter+1]
    currIframes.scrollIntoView({behavior:"smooth"})
    controlPlayer(currIframes, 'playVideo')
    controlPlayer(nextIframes, 'pauseVideo')
}
function controlPlayer(el, type){
    const iframe = el.contentWindow;
        iframe.postMessage(
            '{"event":"command","func":"' + `${type}` + '","args":""}',
            "*"
          );
}
async function loadMoreVideo(){
    const response = await getShortsVideo()
    const containerShorts = document.querySelector(".containerShorts")

    response.data.items.forEach(el=>{
        containerShorts.insertAdjacentHTML("beforeend", innerContentShorts(el.snippet.thumbnails.default.url, el.snippet.channelTitle, el.snippet.description, fromLikeToShortLike(el.statistics.likeCount),  fromLikeToShortLike(el.statistics.commentCount), el.id))
        
    })
    const videoContainer = container.querySelectorAll('.shorts-video-inner')

    for(let i = counter; i < counter + 10; i+=1){
        for(let j = 0; j < response.data.items; j+=1){
            videoContainer[i].insertAdjacentHTML("afterbegin", iframePlayerShortsVideo(response.data.items[i].id, response.data.items[i].snippet.title))
        }
    }

}
// export async function getElemntAndAddMarking(counterVideo, response){
//     let videoData = response[counterVideo]
//     console.log(counterVideo)
//     if(!videoData){
//         const responseShorts = await getShortsVideo()
//         videoShorts.push(...responseShorts.data.items)
//         videoData = videoShorts[counterVideo]
//     }

//     const containerShorts = document.querySelector(".containerShorts")
    
  

//     containerShorts.insertAdjacentHTML("beforeend", innerContentShorts(videoData.snippet.thumbnails.default.url, videoData.snippet.channelTitle, videoData.snippet.description, fromLikeToShortLike(videoData.statistics.likeCount),  fromLikeToShortLike(videoData.statistics.commentCount), videoData.id))
    
//     const videoContainer = container.querySelectorAll('.shorts-video-inner')[counterVideo]

//     videoContainer.insertAdjacentHTML("afterbegin", iframePlayerShortsVideo(videoData.id, videoData.snippet.title))


// }

// function listnersToArrowDown(){
//     const arrowDown = document.querySelector(".shorts-btn-down")
//     arrowDown.onclick = arrowDownClick
// }
// function listnersToArrowUp(){
//     const arrowUp = document.querySelector(".shorts-btn-up")
//     arrowUp.onclick = scrollUp
// }
// let counter = 1
// async function arrowDownClick(){
//     if(counter > 0){
//         const el = document.getElementById(videoShorts[counter]?.id)
//         console.log(el)
//         if(el){
//             stoppedIFrame('pauseVideo', counter-1)
//             stoppedIFrame('playVideo', counter)
//             scrollDown()
//             return
//         }
//     }
//     await getElemntAndAddMarking(counter, videoShorts)
    
    
//     stoppedIFrame('pauseVideo', counter-1)
//     scrollDown()
// }
// function stoppedIFrame(type, count){
   
//     const iframe = document.querySelectorAll("iframe")[count].contentWindow;
//     iframe.postMessage(
//         '{"event":"command","func":"' + `${type}` + '","args":""}',
//         "*"
//       );
// }

// function scrollDown(){
    
//     setTimeout(()=>{
//         const targetElement = document.getElementById(videoShorts[counter].id)
//         targetElement?.scrollIntoView({ behavior: "smooth" });
//         counter +=1
        
//     })
// }

// function scrollUp(){
    
//     stoppedIFrame('pauseVideo', counter-1)
//     stoppedIFrame('playVideo', counter-2)

//     setTimeout(()=>{
//         const targetElement = document.getElementById(videoShorts[counter-2].id)
//         targetElement?.scrollIntoView({behavior:"smooth"})
//         counter -= 1
//     },0)
// }
