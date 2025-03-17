import { makeMarkingVideo } from '../Marking/markingVideo.js'
import { formatDuration, fromViewToShortView } from "../untils/reExportUntils.js"
import { state } from './ReExportFeatures.js'
import { requestToSeverGet } from "../URL/Request.js";
import { URL } from '../URL/URL.js';
import {URL, requestToSeverGet} from "../URL/reExportUrl.js"
import axios from 'axios'

const triger = document.querySelector(".triger")
export let dateRequest = []
let pageToken = ''

export const container = document.querySelector(".Main_container")

async function LoadVideo() {
    state.pageTokenProfileVideoAny = ''
    try{
        const response = await requestToSeverGet(URL.searchURL, {part:"snippet", maxResults:5, type:"video", eventType:"none", key:APIKEY, pageToken:pageToken, videoDuration:"long"})
        pageToken = response.data.nextPageToken || '';
        const IDVideo = response.data.items.map(el => el.id.videoId).join(',')
        const MoreStatisticVideo = await requestToSeverGet(URL.infoVideoURL, {part:"snippet,statistics,contentDetails", id:IDVideo, key:APIKEY})

        await MoreStatisticVideo.data.items.forEach(el => {
            if (el.snippet.liveBroadcastContent === 'none') {
                const date = new Date(el.snippet.publishedAt)
                const result = dateFns.formatDistanceToNow(date, { addSuffix: true })
                container.insertAdjacentHTML("beforeend", makeMarkingVideo(el.snippet.thumbnails.high.url, el.snippet.thumbnails.default.url, el.snippet.title, el.snippet.channelTitle, fromViewToShortView(el.statistics.viewCount), result, formatDuration(el.contentDetails.duration), el.id))
                dateRequest.push(el)
            }
        })
    } catch (error) {
        console.log(error)
    }
}
// LoadVideo()
const observ = new IntersectionObserver((entries)=>{
    if(isVideo){
        return
    }
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            LoadVideo()
        }
    }, { root: null, threshold: 0.5 });
})

// observ.observe(triger)
