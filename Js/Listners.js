import {moreBtn, shortLength, dateTime} from './HelpsFunction.js'
import { shortLength } from './HelpsFunction.js'
import { state } from './changeData.js'
import { SearchContent } from "./AllApiRequest.js"
import { container } from './LoadVideo.js'
import { markinHistoryVideo } from './Marking/Marking.js'
import { fromViewToShortView } from './ViewToViewLikeToLike.js'
import { formatDuration } from './FromISOToTime.js'


const SingButton = document.querySelector(".SignIn_element")
SingButton.onclick = (e)=>{
    e.preventDefault()
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/youtube.force-ssl&redirect_uri=${redirectUri}&response_type=code&client_id=${cliendId}&access_type=offline`;
}
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

export function likeAndDislikeToVideoFunc(){
    if(state.Autorization){
        const likeContainer = document.querySelector(".rightSide_emotion")
        likeContainer.onclick = (e)=>{
            e.target.classList.toggle("activated")
    
            const haveClassLike = e.target.classList.contains("rightSide_emotion_like")
            const haveClassDisLike = e.target.classList.contains("rightSide_emotion_dislike")
    
            const path = e.target.querySelector("path")
            
            if(haveClassLike){
                const dislikeEl = e.target.parentElement.querySelector(".rightSide_emotion_dislike")
    
                checkAndGiveClassActivated(dislikeEl.classList.contains("activated"), dislikeEl)
                HaveLikeOrNo(path.style.fill === uhliked, path, e.target, true)
            }else if(haveClassDisLike){
                const like = e.target.parentElement.querySelector(".rightSide_emotion_like")
    
                checkAndGiveClassActivated(like.classList.contains("activated"), like, true)
                HaveLikeOrNo(path.style.fill === uhliked, path, e.target)
            }
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
function HaveLikeOrNo(situation, path, target, here=false ){
    if(situation){
        path.style.fill = liked
        if(here){
            if(String(+target.children[1].textContent) === 'NaN') return
            const count = target.children[1].textContent
            target.children[1].textContent = +count + 1
        } 
    }else{
        path.style.fill = uhliked 
        if(here){
            console.log('dislike', String(+target.children[1].textContent) === 'NaN')
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


