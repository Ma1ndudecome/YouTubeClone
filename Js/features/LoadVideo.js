import { params, URL} from '../URL/createObject.js'

import { makeMarkingVideo } from '../Marking/markingVideo.js'
import { formatDuration, fromViewToShortView, dateTime, getIdVideo } from "../untils/reExportUntils.js"

import {requestToSeverGet} from "../URL/reExportUrl.js"
import { makeParams } from '../URL/reExportUrl.js'
import { getIdVideo } from '../untils/reExportUntils.js'
import { addSavedElements, createStructureSaved, checkedType } from '../untils/Cache.js'




const triger = document.querySelector(".triger")
export let dateRequest = []
let pageToken = ''
let counter = 0
export const container = document.querySelector(".Main_container")

export async function LoadVideo() {
    try{
        const response = await requestToSeverGet(URL.searchURL, {part:"snippet", maxResults:20, type:"video", eventType:"none", key:APIKEY, pageToken:pageToken, videoDuration:"long"})
        pageToken = response.data.nextPageToken || '';
        
        const IDVideo = getIdVideo(response.data.items)
        const MoreStatisticVideo = await requestToSeverGet(URL.infoVideoURL, makeParams(params.getDetailInfoGaming, {id:IDVideo}))
        givingSpecifiMarking()
        addMarkingOnPage(MoreStatisticVideo.data.items)
       
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
            console.log("here")
            // LoadVideo()
        }
    }, { root: null, threshold: 0.5 });
})

observ.observe(triger)

export function addMarkingOnPage(data){
    console.log(data)
    data.forEach(el=>{
        if (!el.snippet.liveBroadcastContent === 'none') {
            return
        }
        if(!el.contentDetails.duration){
            return
        }
        container.insertAdjacentHTML("beforeend", makeMarkingVideo(el.snippet.thumbnails.high.url, el.snippet.thumbnails.default.url, el.snippet.title, el.snippet.channelTitle, fromViewToShortView(el.statistics.viewCount), dateTime(el.snippet.publishedAt), formatDuration(el.contentDetails.duration), el.id))
        dateRequest.push(el)
    })
}
function givingSpecifiMarking(){
     container.innerHTML = ''
     container.className = 'Main_container grid'
}

