import { params } from "../URL/reExportUrl.js"; 
import { state } from "../main.js"
import { TakeShortAndLongVideo } from "../untils/HelpsFunction.js";
import { TakeShortAndLongVideo, getIdVideo } from "../untils/reExportUntils.js";

import {URL, requestToSeverGet, requestToServerPD, makeParams} from "../URL/reExportUrl.js"


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
    console.log(idChannel)
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
    const videoIds = getIdVideo(detailInformationVideo.data.items)
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

    const IDVideo = getIdVideo(newsData.data.items)
    return requestToSeverGet(URL.infoVideoURL, makeParams(params.takeDurationVideo, {id:IDVideo}))
    
}
export async function SearchContent(content){//!
    try{
        const videoRequest = await requestToSeverGet(URL.searchURL, makeParams(params.searchContent, {q:content}))
        const videoId = getIdVideo(videoRequest.data.items)
        return  await requestToSeverGet(URL.infoVideoURL, makeParams(params.takeDurationVideo, {id:videoId}))
    }catch(err){
        console.log(err);
    }
}
export async function getMoreStatisticId(id){//!
    try{
        return await requestToSeverGet(URL.infoVideoURL, makeParams(params.takeDurationVideo, {id:id}))
    }catch(err){
        console.log(err);
    }
}
export async function addSubscribe(channelID) {//!!!
    try{
        const authParam = params.authParams
        const shortRes = params.shortResponse
        return await requestToServerPD(URL.getSubscriberURL,makeParams(params.AddSubsribe, {snippet:{resourceId:{...params.AddSubsribe.snippet.resourceId, channelId:"asdsad"}}}), {headers:authParam, params:shortRes})
    }catch(err){
        console.log(err)
    }
    
}

export async function removeSubscribe(channelID) {//!
    const response = await requestToSeverGet(URL.getSubscriberURL, makeParams(params.isSubscribe, {forChannelId:channelID}), true)

    const id = response.data.items[0]?.id
    const authParam = params.authParams
    return await requestToServerPD(URL.getSubscriberURL,{headers:authParam, params:{ id:id, key:APIKEY } } )
}

export async function userSubscriber(idChannel) {//!
    const response = await requestToSeverGet(URL.getSubscriberURL, makeParams(params.isSubscribe, {forChannelId:idChannel}), true)
    return response.data.items.length > 0
}

export async function putComment(text, videoId, channelId) {//!!!!
    try{
        return await requestToServerPD(URL.commentURL, makeParams(
            params.changeComment, {snippet:{channelId:channelId, 
                videoId:videoId, topLevelComment:{snippet:{textOriginal:text}}}}), 
                {headers:{'Authorization': `Bearer ${state.acessToken}`,'Content-Type': 'application/json'}, 
                params:{ part:"snippet" } })
    }catch(err){
        console.log(err)
    }
}

export  function addRateToVideo(IdVideo, rating) {
    requestToServerPD(URL.addRateToVideoURL, null, { headers: { Authorization: `Bearer ${state.acessToken}` }, params:{ id:IdVideo, rating:rating }})
}
export async function GetContentGaming(){//!
    try{
        const videoRequest = await requestToSeverGet(URL.searchURL, params.getGamingVideo)
       
        const IDVideo = getIdVideo(videoRequest.data.items)

        const MoreStatisticVideo = await requestToSeverGet(URL.infoVideoURL, makeParams(params.takeDurationVideo, {id:IDVideo}))
       
        return MoreStatisticVideo.data.items
    }catch(err){
        console.log(err);
    }
}
