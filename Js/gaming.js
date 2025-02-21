
let explore = document.getElementById("explore")




import { container } from "./LoadVideo.js";
const gamingBtn = document.querySelector(".gaming")
import { makeMarkingVideo } from "./Marking/markingVideo.js";
import { fromViewToShortView } from "./ViewToViewLikeToLike.js";


import { formatDuration } from "./FromISOToTime.js";



gamingBtn.onclick = (event) => {
    event.preventDefault()
    container.innerHTML = ''
    container.insertAdjacentHTML("beforeBegin", innerGamingText)
    axios.get(`https://www.googleapis.com/youtube/v3/search?https://www.googleapis.com/youtube/v3/search?part=snippet&q=gaming&type=video&videoCategoryId=20&maxResults=20&key=${APIKEY}`)
        .then(
            ({ data }) => {
                const IDVideo = data.items.map(el => el.id.videoId).join(',')
                axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${IDVideo}&key=${APIKEY}`)
                    .then(({ data }) => {
                      
                       container.classList.add("grid")
                       container.classList.remove("block")
                        data.items.forEach(el=>{
                            const date = new Date(el.snippet.publishedAt)
                            const result = dateFns.formatDistanceToNow(date, { addSuffix: true })
                            container.insertAdjacentHTML("beforeend", makeMarkingVideo(el.snippet.thumbnails.high.url, el.snippet.thumbnails.default.url, el.snippet.title, el.snippet.channelTitle, fromViewToShortView(el.statistics.viewCount), result, formatDuration(el.contentDetails.duration), el.id))
                        })


                    })

            })
 



}










