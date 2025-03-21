import { SearchContent, addSubscribe, removeSubscribe, userSubscriber, putComment, addRateToVideo } from "../api/ReExportAPI.js"
import {state, container} from "../features/ReExportFeatures.js"
import { markinHistoryVideo } from '../Marking/reExportMarking.js'
import {moreBtn, shortLength, dateTime, changeTextContentAndAddClasslist, shortLength, addMarkingComent, formatDuration, fromViewToShortView } from "../untils/reExportUntils.js"



export const uhliked = `rgba(117, 113, 113, 0)`
export const liked = `rgba(255, 255, 255, 0.71)`
export function lisnerToLike(){
   const containerComment =  document.querySelector(".AllComment_Container")
   
   
   containerComment.addEventListener("click", ({target})=>{
    if(state.Autorization){
        const haveClassDisLike = target.classList.contains("AllComment_Container_item_statistic_disLike_svg")
        const haveClassLike = target.classList.contains("AllComment_Container_item_statistic_like_svg")
    
        if(haveClassLike || haveClassDisLike){
        const svg = target.querySelector("path").style.fill
        const path =  target.querySelector("path")
        
        const countLike = target.parentElement.parentElement.querySelector("span")
        if(haveClassLike){
            const parentSvg = target.parentElement.nextElementSibling.children[0]
            if(svg === liked){
                countLike.textContent = +countLike.textContent - 1
    
            }
            if(parentSvg.classList.contains("activated")){
                parentSvg.querySelector("path").style.fill = uhliked
            }
        }else if(haveClassDisLike){
    
            const parentSvg = target.parentElement.previousElementSibling.children[0]
            if(parentSvg.classList.contains("activated")){
                parentSvg.querySelector("path").style.fill = uhliked
                countLike.textContent = +countLike.textContent - 1
                parentSvg.classList.remove("activated")
            }
        }
    
        checkAndGiveLikeDislike(svg, path, uhliked, liked, haveClassLike,haveClassDisLike, countLike, target)
        
        }
    }
    
    
})
}

function checkAndGiveLikeDislike(svg,path, uhliked, liked, haveClassDisLike, haveClassLike, countLike, target){
    if(svg === uhliked){
        path.style.fill = liked

        haveClassDisLike ? countLike.textContent = +countLike.textContent + 1 : ''
        target.classList.add("activated")
    }else if(svg === liked){
        path.style.fill = uhliked
        
        target.classList.remove("activated")
        
    }
}

export function likeAndDislikeToVideoFunc(idVideo){
    if(!state.Autorization){
        return
    }
    const likeContainer = document.querySelector(".rightSide_emotion")
    likeContainer.onclick = (e)=>{
         e.target.classList.toggle("activated")
    
        const haveClassLike = e.target.classList.contains("rightSide_emotion_like")
        const haveClassDisLike = e.target.classList.contains("rightSide_emotion_dislike")
    
        const path = e.target.querySelector("path")
            
        if(haveClassLike){
            const dislikeEl = e.target.parentElement.querySelector(".rightSide_emotion_dislike")
            checkAndGiveClassActivated(dislikeEl.classList.contains("activated"), dislikeEl)
            HaveLikeOrNo(path.style.fill === uhliked, path, e.target, true, idVideo, 'like')
        }else if(haveClassDisLike){
            const like = e.target.parentElement.querySelector(".rightSide_emotion_like")
    
            checkAndGiveClassActivated(like.classList.contains("activated"), like, true)
            HaveLikeOrNo(path.style.fill === uhliked, path, e.target, false, idVideo, 'dislike')
        }
        }
    

}
function checkAndGiveClassActivated(situation, item, here=false){
    if(situation){
        item.classList.remove("activated")
        item.querySelector("path").style.fill = uhliked
        if(here){
            if(String(+item.children[1].textContent) === "NaN")return
            item.children[1].textContent = +item.children[1].textContent - 1
        }
    }
}
function HaveLikeOrNo(situation, path, target, here=false, id, type){
    console.log(situation)
    if(situation){
        path.style.fill = liked
        addRateToVideo(id, type)
        
        if(here){
            if(String(+target.children[1].textContent) === 'NaN') return
            const count = target.children[1].textContent
            target.children[1].textContent = +count + 1
        } 
    }else{
        path.style.fill = uhliked 
        addRateToVideo(id, 'none')
        if(here){
          
            if(String(+target.children[1].textContent) === 'NaN') return
            const count = target.children[1].textContent
            target.children[1].textContent = +count - 1
        }
    }
}
export function listnerToInput(){
    const inputCont= document.querySelector(".Comment_input_block_tag input")
    
    const button = document.querySelector(".Comment_input_block_under_apply")
    inputCont.addEventListener("input", (e)=>{

        if(e.target.value === ''){
            button.classList.remove("sendButton")
            return
        }
        button.classList.add("sendButton")
        
    })
    return {button:button, input:inputCont}
}
export function ListnersToSendComment(id, channelId){
    const elements = listnerToInput()
    elements.button.onclick = async ()=>{
        if(elements.input.value === ''){
            return
        }
        const responseComment = await putComment(elements.input.value, id, channelId)
        console.log(responseComment)
        addMarkingComent(responseComment.data)

    }
}
export function buttonLoadMoreFnc(dateRequests, state, countSubs){
    let countClick = 0
    const buttonShowMore = document.querySelector(".showMoreDescription")

    buttonShowMore.onclick = ()=>{
        countClick += 1
        if(countClick === 1){
            buttonShowMore.textContent = 'Show less'
            
            moreBtn(dateRequests, state, countSubs)
        }else if(countClick === 2){
            document.querySelector(".containerShowMore").remove()
            shortLength('.Main_container_blockInfo_description_link', 100)
            buttonShowMore.textContent = '...more'
            countClick = 0
        }
    }
}

function SearchListner(){
    const input = document.querySelector(".search input")
    const buttonSearch = document.querySelector(".glass")
    buttonSearch.onclick = ()=>{
        getContentAndAddMarking(input)
    }
    window.addEventListener("keydown", (e)=>{
        if(e.key !== 'Enter'){
            return 
        }
        getContentAndAddMarking(input)
    })
}
SearchListner()

async function getContentAndAddMarking(input){
    if(input.value !== ''){
        container.innerHTML = ''
        container.insertAdjacentHTML('beforeend', `<div class="ContainerVideoSearch mT50p"></div>`)
        const contVideo = document.querySelector(".ContainerVideoSearch")
       const videos =  await SearchContent(input.value)
        console.log(videos)
       videos.data.items.forEach(el=>{
        el.snippet.liveBroadcastContent === 'none' ? contVideo.insertAdjacentHTML('beforeend', markinHistoryVideo(el.snippet.thumbnails.high.url, el.snippet.title,el.snippet.channelTitle, fromViewToShortView(el.statistics.viewCount), el.snippet.description, el.id, dateTime(el.snippet.publishedAt), formatDuration(el.contentDetails.duration))) : false
       })
       container.className = 'Main_container dF jcC'
       contVideo.classList.add("dF", "fdC", "gap15P", "w80Procc")
    }
   
}


export async function ListnersSubscribe(ChannelId){
    const button = document.querySelector(".leftSide_subscribe_button button")
    let countClick = 0
    console.log(await userSubscriber(ChannelId))
    if(await userSubscriber(ChannelId)){
        changeTextContentAndAddClasslist(button, 'Subscribed', 'subscribed', 0 )
        countClick = 1
    }
    button.onclick = ()=>{
        if(countClick === 0){
            changeTextContentAndAddClasslist(button, 'Subscribed', 'subscribed', 0 )
            addSubscribe(ChannelId)
            countClick += 1

        }else if(countClick === 1){
            changeTextContentAndAddClasslist(button, 'Subscribe', 'subscribed', 1 )
            removeSubscribe(ChannelId)
            countClick = 0
        }
    }
}