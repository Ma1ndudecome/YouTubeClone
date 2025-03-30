
let explore = document.getElementById("explore")

import { container, setNewUrl } from "./features/ReExportFeatures.js";
const gamingBtn = document.querySelector(".gaming")
import { GetContentGaming } from "./api/AllApiRequest.js";
import { dateTime, fromViewToShortView, formatDuration, addClassList, removeClassList, changeInnerHTML, selectElements } from "./untils/reExportUntils.js";
import { shortVideoMarking, markingGaming, makeMarkingVideo } from "./Marking/reExportMarking.js";


gamingBtn.onclick = clickGaming

 export async  function  clickGaming(event){
    event.preventDefault()
    setNewUrl("/Gaming")
    removeClassList(container, "grid")
    addClassList(container, "block")
    changeInnerHTML(container, '')
    changeInnerHTML(container, markingGaming())
    const gamingContainer = selectElements(container, ".Container-video-gaming")
    const shortsContainer = selectElements(container, ".shorts-video-conteiner")

   
            const videos = await GetContentGaming();
            
        videos.forEach(el => {
            if(el.snippet.liveBroadcastContent !== 'none')return
            let durationVideo = formatDuration(el.contentDetails.duration)

            if (Number(durationVideo[0]) === 0) {
                shortsContainer.insertAdjacentHTML("beforeend", shortVideoMarking(el.snippet.thumbnails.standard.url, el.snippet.title, el.statistics.viewCount, el.id))
            } else {
                gamingContainer.insertAdjacentHTML("beforeend", makeMarkingVideo(el.snippet.thumbnails.high.url, el.snippet.thumbnails.default.url, el.snippet.title, el.snippet.channelTitle, fromViewToShortView(el.statistics.viewCount), dateTime(el.snippet.publishedAt), durationVideo, el.id))
            }

        })


}








