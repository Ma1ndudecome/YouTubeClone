
import "./gaming.js"
import "./LoadVideo.js"
import "./PostToToken.js"
import "./SingIn.js"
import "./ReturnPushState.js"
import "./HeaderANDAside.js"
import { MarkingPlayer } from "./Marking/MarkingPlayerVideo.js"
import { MarkingPlayerAny } from "./Marking/MarkingPlayerVideo.js"
import { container as main } from "./LoadVideo.js"
import { dateRequest } from "./LoadVideo.js"
import { dateProfileVideo } from "./changeData.js"

import { fromLikeToShortLike } from "./ViewToViewLikeToLike.js"
import "./changeHistoryPage.js"

import { state } from "./changeData.js"
import { markingShowMore } from "./Marking/ProfileMarking.js"
import { MarkingCommentItemAny } from "./Marking/MarkingPlayerVideo.js"
import { takeComment } from "./AllApiRequest.js"
import { MarkingCommentItem } from "./Marking/MarkingPlayerVideo.js"

import { lisnerToLike } from "./SingIn.js"

import { LoadMoreComments } from "./infinityScrollInProfile.js"

import { ImgAndSubscribeChannel } from "./AllApiRequest.js"
import { arrDataVideo } from "./changeHistoryPage.js"
main.addEventListener("click", async (e) => {
    let countClick = 0
    main.classList.remove("grid")
    if(e.target.closest(".Main_container_video")){
        if(e.target.classList.contains("Main_container_video_title_info_name")){
           const NameChannel = e.target.textContent
            isVideo = true
            arrDataVideo.push(dateRequests[0])
            localStorage.setItem("history",JSON.stringify(arrDataVideo))
        
        }else if(e.target.classList.contains("VideoLogoChannel")){
            console.log('coming to Channel')
            isVideo = true
        }else{
            const id = e.target.closest(".Main_container_video").getAttribute("idVideo")
            const dateRequests = dateRequest.filter(el=>el.id === id)

            dateRequests[0].snippet.description = dateRequests[0].snippet.description.replace(/\n/g, '<br>')
            const nameChannel = e.target.closest(".Main_container_video").querySelector(".Main_container_video_title_info_name").textContent
           
            const dataChannel =  await ImgAndSubscribeChannel(nameChannel)

           
            main.innerHTML = MarkingPlayerAny(id, dateRequests, state, dataChannel)
           
            main.classList.add('block')
            isVideo = true
            inserEl(document.querySelector(".Main_container_blockInfo_description_link"), "afterbegin",  `Have you ever dreamed of a portable hacker terminal which is easy to program, fun to use, and actually useful? Me too, let's build it.<br><br>Sponsors - <br><br>Warp is the intelligent terminal trusted by over 16,000 engineering teams at leading companies. <br>Try Warp today for FREE and use code ABE to get 50% off your first two months of Warp Pro/Team.<br>https://www.warp.dev/abes-projects<br><br>Need a PCB made quickly, affordably and reliably?<br>Check out https://NextPCB.com for your next PCB.<br><br>Tool links - <br><br>Ryobi Soldering Iron - https://amzn.to/3XaH0lW<br>Ryobi Rotary Tool - https://amzn.to/3Xb68J0<br>Soldering Hands - https://omnifixo.com/en-us/products/omnifixo-m4-makers-third-hand<br>Lil Red Snips - https://amzn.to/415Hfjb<br>SS-02 Solder Sucker - https://amzn.to/41pFz5G<br>Mini Test Lead Clamps - https://amzn.to/4b9w6T3<br>Sanding Sponge Set - https://amzn.to/41mjswS<br>CONNEXT2 Handle - https://amzn.to/436HwoW<br>Long Hex Bit Set - https://amzn.to/3CWAjgp<br><br>Parts & Components links- <br><br>PicoVision - https://collabs.shop/fca3j3<br>5-inch HDMI Display - https://amzn.to/4gSdPLx<br>QWERTY Keyboard Remote - https://amzn.to/4i9oja6<br>MCP23017 GPIO Expander IC - https://amzn.to/3QqKRY2<br>JST-SH (Stemma QT) Whips - https://amzn.to/4ia6GqD<br>DevTerm Cyberdeck - https://www.clockworkpi.com/product-page/devterm-kit-cm4-series<br>Adafruit Trinkey RP2040 - https://www.adafruit.com/product/5056<br>Adafruit USB-C Battery Charger - https://www.adafruit.com/product/6106<br>Micro USB Breakout - https://amzn.to/3EP2LBt<br>Expansion Port - https://collabs.shop/knlijz<br>Power Switch - https://amzn.to/3EQuuBJ<br>Mini Prototyping Board - https://amzn.to/41c2ccr<br>2-Pin Power Whips - https://amzn.to/4kaX8gY<br>M2 Screw Kit (Silver) - https://amzn.to/4bbb6vl<br>M2.5 Screw Kit (Silver) - https://amzn.to/4i6JGZP<br>M2.5 Screw Kit (Black) - https://amzn.to/4iaWnTz<br>Double-sided Tape Sheets - https://amzn.to/4gPl32K<br>Flat HDMI Cable - https://amzn.to/4ialTs6<br>Seeed Studio XIAO - https://amzn.to/4i890yI<br>Pico Plus 2 - https://collabs.shop/wg2prj<br>Modge Podge Hard Coat - https://amzn.to/4kcCY6v<br>Arm & Hammer Baking Soda - https://amzn.to/4hSloTB<br><br>Links:<br>slime_os on Github - https://github.com/abeisgoat/slime_os/<br>Icons on Itch.io - https://piiixl.itch.io/mega-1-bit-icons-bundle`)
             shortLength('.Main_container_blockInfo_description_link', 300)
            buttonLoadMoreFnc(dateRequests, dataChannel.imgChannel, dataChannel.subscriberChannel)

            const response = await takeComment(id)
     
            addMarkingComent(response)
            listnerToInput()
            lisnerToLike()
        
            LoadMoreComments(id)
            
        }
       
        
    }else if(e.target.closest(".video_box")){
        
        const id = e.target.closest(".video_box").getAttribute("idVideo")
        const dateRequests = dateProfileVideo.filter(el=>el.id === id)
    
        dateRequests[0].snippet.description = dateRequests[0].snippet.description.replace(/\n/g, '<br>')
        
       
        main.innerHTML = MarkingPlayer(id, dateRequests, state.infoChannel)
        let countClick = 0
  
        main.classList.add('block')
        isVideo = true
        inserEl(document.querySelector(".Main_container_blockInfo_description_link"),"afterbegin", dateRequests[0].snippet.description )
        shortLength('.Main_container_blockInfo_description_link', 300)
        
        buttonLoadMoreFnc(dateRequests, state.infoChannel.img, state.infoChannel.subscriberCount)

        const response = await takeComment(id)
        addMarkingComent(response)
        listnerToInput()
        lisnerToLike()

        LoadMoreComments(id)
    }
    
    
    
})

function shortLength(element, maxLength){
    const elem = document.querySelector(element)
    const text = elem.textContent

    if(text.length > maxLength){
        const short = text.slice(0, maxLength)
        elem.textContent = short
    }
    return text
}
function moreBtn(dateRequests, ProfileData, countSubs){
    const descriptionCont = document.querySelector(".Main_container_blockInfo_description_link")
    inserEl(document.querySelector(".Main_container_blockInfo_description_link"),"afterbegin", dateRequests[0].snippet.description )

    inserEl(descriptionCont,"afterend",markingShowMore(dateRequests, ProfileData, countSubs))
}

function inserEl(el, positon, marking){
    el.insertAdjacentHTML(positon, marking)
}
function listnerToInput(){
    const inputCont= document.querySelector(".Comment_input_block_tag input")
    
    const button = document.querySelector(".Comment_input_block_under_apply")
    inputCont.addEventListener("input", (e)=>{

        console.log(e.target)
        console.log(e.target.value)
        if(e.target.value === ''){
            button.classList.remove("sendButton")
            return
        }
        button.classList.add("sendButton")
        
    })
}


export function addMarkingComent(data){


    const containerComment = document.querySelector(".AllComment_Container")
    
    data.items.forEach(({snippet})=>{
        const dates = snippet.topLevelComment.snippet
        const date = new Date(dates.publishedAt)
        const result = dateFns.formatDistanceToNow(date, { addSuffix: true })
        
        containerComment.insertAdjacentHTML("beforeend", MarkingCommentItem(dates.authorProfileImageUrl, dates.authorDisplayName, result, dates.textDisplay, dates.likeCount)) 
    })
    state.PageTokenComment = data.nextPageToken
}

function buttonLoadMoreFnc(dateRequests, state, countSubs){
    let countClick = 0
    const buttonShowMore = document.querySelector(".showMoreDescription")
    console.log(dateRequests)
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