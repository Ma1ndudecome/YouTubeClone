
let explore = document.getElementById("explore")




import { container } from "./features/LoadVideo.js";
const gamingBtn = document.querySelector(".gaming")
import { makeMarkingVideo } from "./Marking/markingVideo.js";
import { fromViewToShortView } from "./untils/ViewToViewLikeToLike.js";
import { markingGaming } from "./Marking/Marking.js";
import axios from 'axios'


import { formatDuration } from "./untils/FromISOToTime.js";



gamingBtn.onclick = (event) => {
    event.preventDefault()
    container.innerHTML = ''
    container.innerHTML = markingGaming()
    container.className = 'Main_container block'
    const gamingContainer = container.querySelector(".Container-video-gaming ")
    axios.get(`https://www.googleapis.com/youtube/v3/search?https://www.googleapis.com/youtube/v3/search?part=snippet&q=gaming&type=video&videoCategoryId=20&maxResults=20&key=${APIKEY}`)
        .then(
            ({ data }) => {
                const IDVideo = data.items.map(el => el.id.videoId).join(',')
                axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${IDVideo}&key=${APIKEY}`)
                    .then(({ data }) => {
                        data.items.forEach(el=>{
                            const date = new Date(el.snippet.publishedAt)
                            const result = dateFns.formatDistanceToNow(date, { addSuffix: true })
                            gamingContainer.insertAdjacentHTML("beforeend", makeMarkingVideo(el.snippet.thumbnails.high.url, el.snippet.thumbnails.default.url, el.snippet.title, el.snippet.channelTitle, fromViewToShortView(el.statistics.viewCount), result, formatDuration(el.contentDetails.duration), el.id))
                        })
                    })

            })
}










