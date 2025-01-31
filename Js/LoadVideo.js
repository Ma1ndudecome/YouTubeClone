import { makeMarkingVideo } from './Marking/markingVideo.js'
import { formatDuration } from './FromISOToTime.js'
const triger = document.querySelector(".triger")
export let dateRequest = []
let pageToken = ''

export const container = document.querySelector(".Main_container")

async function LoadVideo() {
    try{
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&eventType=none&key=${APIKEY}&pageToken=${pageToken}`)
        pageToken = response.data.nextPageToken || '';
        const IDVideo = response.data.items.map(el => el.id.videoId).join(',')
        const MoreStatisticVideo = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${IDVideo}&key=${APIKEY}`)
       MoreStatisticVideo.data.items.forEach(el=>{
             if (el.snippet.liveBroadcastContent === 'none'){
                const date = new Date(el.snippet.publishedAt)
                const result = dateFns.formatDistanceToNow(date, { addSuffix: true })
                container.insertAdjacentHTML("beforeend", makeMarkingVideo(el.snippet.thumbnails.high.url, el.snippet.thumbnails.default.url, el.snippet.title, el.snippet.channelTitle, el.statistics.viewCount, result, formatDuration(el.contentDetails.duration), el.id))
                dateRequest.push(el)
             }
        })
    }catch(error){
        console.log(error)
    }
}
LoadVideo()
const observ = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            LoadVideo()
        }
    },{ root: null, threshold: 0.5 });
})
observ.observe(triger)

