import {URL, requestToSeverGet, requestToServerPD, makeParams, params} from "../URL/reExportUrl.js"
import { state } from "../features/ReExportFeatures.js"

import axios from 'axios'

export async function takeCountCommentUnderVideo(videoId){
    const comment = await requestToSeverGet(URL.infoVideoURL, makeParams(params.beginInfoVideo, {id:videoId}))
    return comment.data.items[0].statistics.commentCount
}


export  async function  takeComment(videoId) {
    if(state.acessToken){
        const allComment = await requestToSeverGet(URL.commentURL, makeParams(params.getCommentAuth, {videoId:videoId}), true)
        return allComment.data
    }
    const allComment = await requestToSeverGet(URL.commentURL, makeParams(params.getCommentAPI, {videoId:videoId}))
    return allComment.data
    
   
}
async function takeInfoChannel(nameChannel){
    const name = nameChannel.trim().replaceAll(' ', '+')
   
    const idChannel = await requestToSeverGet(URL.searchURL, makeParams(params.takeIdChannel, {q:name}))
    
    const moreInfoChannel = await requestToSeverGet(URL.channelURL, makeParams(params.takeMoreInfoChannel, {id:idChannel.data.items[0].id.channelId}))

    return {imgChannel:idChannel.data.items[0].snippet.thumbnails.default.url, subscriberChannel:moreInfoChannel.data.items[0].statistics.subscriberCount, ChannelId:idChannel.data.items[0].id.channelId}
}
export async function takeMoreInfoChannel(nameChannel) {
    const name = nameChannel.replaceAll(' ', '+')

    const idChannel = await requestToSeverGet(URL.searchURL, makeParams(params.takeIdChannel, {q:name}))

    const moreInfoChannel = await requestToSeverGet(URL.channelURL, makeParams(params.getInfoChannel, {id:idChannel.data.items[0].id.channelId}))
    
    return {dataChannel:moreInfoChannel.data.items[0], id:moreInfoChannel.data.items[0].id}
}
export async  function takeMoreVideoAnyProfile(id){
    const detailInformationVideo = await requestToSeverGet(URL.searchURL, makeParams(params.takeDetailInfoVideo), {channelId:id})
    const videoIds = detailInformationVideo.data.items.map(el => el.id.videoId).join(',');
    const takeDuration = await requestToSeverGet(URL.infoVideoURL, makeParams(params.takeDurationVideo, {id:videoIds}))

    return TakeShortAndLongVideo(takeDuration)
}
export async function ImgAndSubscribeChannel(nameChannel){
    return await takeInfoChannel(nameChannel)
   
}

export function getRatingVideo(videoId){
    return  requestToSeverGet(URL.getRatingVideoURL, {id:videoId}, true)
}
function dataObjectAccess(type, token=''){
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if(type === 'accessToken'){
        return new URLSearchParams(makeParams(params.getAccesToken, {code:code}))
    }else if(type === 'RefreshToken'){
        return  new URLSearchParams(makeParams(params.getRefreshToken, {refresh_token:token[0].refreshToken}))
    }
}

export function getAccesToken(type, token){//!
    const data = dataObjectAccess(type, token)
    const setting = {headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
    return axios.post(URL.tokenURL, data, setting)
}
export function getDataAccount(){//!
    return requestToSeverGet(URL.channelURL, params.getDataAccount, true )
}

export function TakeSubscriber(pageTokenSubscribe){//!

    return requestToSeverGet(URL.getSubscriberURL, makeParams(params.takeSubsriber, {pageToken:pageTokenSubscribe}), true)
}

export async function TakeTrending() {//!
    const newsData = await requestToSeverGet(URL.searchURL, params.takeVideoTrand)

    const IDVideo = newsData.data.items.map(el => el.id.videoId).join(',')
    return requestToSeverGet(URL.infoVideoURL, {part:"snippet, statistics, contentDetails",  id:IDVideo,  key:APIKEY})
    
}
export async function SearchContent(content){
    try{
        const videoRequest = await requestToSeverGet(URL.searchURL, {part:"snippet", maxResults:20, q:content, key:APIKEY})
        const videoId = videoRequest.data.items.map(el=>el.id.videoId).join(',')
        const MoreStatisticVideo = await requestToSeverGet(URL.infoVideoURL, {part:"contentDetails,snippet,statistics", id:videoId, key:APIKEY})
        return MoreStatisticVideo
    }catch(err){
        console.log(err);
    }
}
export async function getMoreStatisticId(id){
    try{
        return await requestToSeverGet(URL.infoVideoURL, {part:"snippet,statistics,contentDetails", id:id, key:APIKEY})
    }catch(err){
        console.log(err);
    }
}
export async function addSubscribe(channelID) {
    try{
        return await requestToServerPD(URL.getSubscriberURL,{ snippet:{ resourceId:{ kind:"youtube#channel", channelId:channelID} } }, {headers:{'Authorization': `Bearer ${state.acessToken}`,'Content-Type': 'application/json'}, params:{ part:"snippet", mine:true, key:APIKEY }})
    }catch(err){
        console.log(err)
    }
    
}

export async function removeSubscribe(channelID) {
    const response = await requestToSeverGet(URL.getSubscriberURL, { part:"id",  forChannelId:channelID, mine:true,  key:APIKEY}, true)

    const id = response.data.items[0]?.id

    return await requestToServerPD(URL.getSubscriberURL,{ headers:{ 'Authorization':`Bearer ${state.acessToken}`, "Content-Type":"application/json" }, params:{ id:id, key:APIKEY } } )
}

export async function userSubscriber(idChannel) {
    const response = await requestToSeverGet(URL.getSubscriberURL, { part:"id", forChannelId:idChannel, mine:true, key:APIKEY }, true)
    return response.data.items.length > 0
}

export async function putComment(text, videoId, channelId) {
    try{
        return await requestToServerPD(URL.commentURL, { snippet: { channelId:channelId, videoId:videoId, topLevelComment:{ snippet:{textOriginal:text } } } }, { headers:{ Authorization:`Bearer ${state.acessToken}`, 'Content-Type': 'application/json' }, params:{ part:"snippet" } })
    }catch(err){
        console.log(err)
    }
}

export  function addRateToVideo(IdVideo, rating) {
    requestToServerPD(URL.addRateToVideoURL, null, { headers: { Authorization: `Bearer ${state.acessToken}` }, params:{ id:IdVideo, rating:rating }})
}
export async function GetContentGaming(){
    try{
        const videoRequest = await requestToSeverGet(URL.searchURL, {part:"snippet", q:"gaming", type:"video", videoCategoryId:20, maxResults:40, key:APIKEY})
       
        const IDVideo = videoRequest.data.items.map(el=>el.id.videoId).join(',')

        const MoreStatisticVideo = await requestToSeverGet(URL.infoVideoURL, { part:"snippet,statistics,contentDetails", id:IDVideo, key:APIKEY})
       
        return MoreStatisticVideo.data.items
    }catch(err){
        console.log(err);
    }
}
async function testingFunc() {
    setTimeout(async ()=>{
        const a = 
        console.log(a)
    },500)
    
  }
  testingFunc()