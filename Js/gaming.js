
let explore = document.getElementById("explore")

import { container } from "./features/ReExportFeatures.js";
const gamingBtn = document.querySelector(".gaming")
import { makeMarkingVideo } from "./Marking/markingVideo.js";
import { fromViewToShortView } from "./untils/ViewToViewLikeToLike.js";
import { markingGaming } from "./Marking/Marking.js";
import { GetContentGaming } from "./api/AllApiRequest.js";
import { shortVideoMarking} from "./Marking/profileVideoMarking.js";
import { formatDuration } from "./untils/FromISOToTime.js";
import { setNewUrl } from "./features/routing.js";
import axios from 'axios'


gamingBtn.onclick = (event) => {
    event.preventDefault()
    setNewUrl("/Gaming")
    // container.classList.remove("grid")
    // container.classList.add("block")
    // container.innerHTML = ''
    // container.innerHTML = markingGaming()
    // const gamingContainer = container.querySelector(".Container-video-gaming ")
    // const shortsContainer = container.querySelector(".shorts-video-conteiner")
            
    // async function Gaming(){
    //     try{
    //         const videos = await GetContentGaming(); 
    //          return videos;
    //      }catch(err){
    //         console.log(err);
    //     }
    //     }
    //        Gaming().then((videos)=>{

    // videos.forEach(el=>{
    //             let durationVideo = formatDuration(el.contentDetails.duration)
    //              const date = new Date(el.snippet.publishedAt)
    //               const result = dateFns.formatDistanceToNow(date, { addSuffix: true })
                             
    //              if(Number(durationVideo[0]) === 0){
    //                  shortsContainer.insertAdjacentHTML("beforeend",shortVideoMarking(el.snippet.thumbnails.standard.url,el.snippet.title,fromViewToShortView(el.statistics.viewCount)))
    //               }else{
    //                   gamingContainer.insertAdjacentHTML("beforeend", makeMarkingVideo(el.snippet.thumbnails.high.url, el.snippet.thumbnails.default.url, el.snippet.title, el.snippet.channelTitle, fromViewToShortView(el.statistics.viewCount), result, formatDuration(el.contentDetails.duration), el.id))
    //               }
                            
    //               })
    //             })
                           
}










