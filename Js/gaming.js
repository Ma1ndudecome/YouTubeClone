
let explore = document.getElementById("explore")




import { container } from "./LoadVideo.js";
const gamingBtn = document.querySelector(".gaming")
import { makeMarkingVideo } from "./Marking/markingVideo.js";
import { fromViewToShortView } from "./ViewToViewLikeToLike.js";
import { markingGaming } from "./Marking/Marking.js";
import { GetContentGaming } from "./AllApiRequest.js";
import { gamingMarkingShorts} from "./gamingShorts.js";
import axios from 'axios'


import { formatDuration } from "./FromISOToTime.js";



gamingBtn.onclick = (event) => {
    event.preventDefault()
    container.innerHTML = ''
    container.innerHTML = markingGaming()
    container.className = 'Main_container block'
    const gamingContainer = container.querySelector(".Container-video-gaming ")
    const shortsContainer = container.querySelector(".shorts-video-conteiner")
            
                         async function Gaming(){
                            try{
                                const videos = await GetContentGaming(); 
                                return videos;
                            }catch(err){
                                console.log(err);
                            }
                        }
                            
                        Gaming().then((videos)=>{

                            videos.forEach(el=>{
                            let durationVideo = formatDuration(el.contentDetails.duration)
                             const date = new Date(el.snippet.publishedAt)
                             const result = dateFns.formatDistanceToNow(date, { addSuffix: true })
                             
                             if(Number(durationVideo[0]) === 0){
                                shortsContainer.insertAdjacentHTML("beforeend",gamingMarkingShorts(el.snippet.thumbnails.standard.url,el.snippet.title,fromViewToShortView(el.statistics.viewCount)))
                             }else{
                                gamingContainer.insertAdjacentHTML("beforeend", makeMarkingVideo(el.snippet.thumbnails.high.url, el.snippet.thumbnails.default.url, el.snippet.title, el.snippet.channelTitle, fromViewToShortView(el.statistics.viewCount), result, formatDuration(el.contentDetails.duration), el.id))
                             }
                            
                            })
                        })
                           
}










