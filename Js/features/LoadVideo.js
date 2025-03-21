import { makeMarkingVideo } from '../Marking/markingVideo.js'
import { formatDuration, fromViewToShortView, dateTime, getIdVideo } from "../untils/reExportUntils.js"
import { state } from './ReExportFeatures.js'
import {URL, requestToSeverGet} from "../URL/reExportUrl.js"
import { params, makeParams } from '../URL/reExportUrl.js'
import { getIdVideo } from '../untils/reExportUntils.js'




const triger = document.querySelector(".triger")
export let dateRequest = []
let pageToken = ''

export const container = document.querySelector(".Main_container")

export async function LoadVideo() {
    state.pageTokenProfileVideoAny = ''
    try{
        const response = await requestToSeverGet(URL.searchURL, {part:"snippet", maxResults:5, type:"video", eventType:"none", key:APIKEY, pageToken:pageToken, videoDuration:"long"})
        pageToken = response.data.nextPageToken || '';
        
        const IDVideo = getIdVideo(response.data.items)
        const MoreStatisticVideo = await requestToSeverGet(URL.infoVideoURL, makeParams(params.getDetailInfoGaming, {id:IDVideo}))
        container.innerHTML = ''
        container.className = 'Main_container grid'
        await MoreStatisticVideo.data.items.forEach(el => {
            if (el.snippet.liveBroadcastContent === 'none') {
                container.insertAdjacentHTML("beforeend", makeMarkingVideo(el.snippet.thumbnails.high.url, el.snippet.thumbnails.default.url, el.snippet.title, el.snippet.channelTitle, fromViewToShortView(el.statistics.viewCount), dateTime(el.snippet.publishedAt), formatDuration(el.contentDetails.duration), el.id))
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
