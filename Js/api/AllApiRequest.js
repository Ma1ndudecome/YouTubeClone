import { state, params, URL } from "../URL/createObject.js"
import { TakeShortAndLongVideo } from "../untils/HelpsFunction.js";
import { TakeShortAndLongVideo, getIdVideo } from "../untils/reExportUntils.js";

import {requestToSeverGet, requestToServerPD, makeParams} from "../URL/reExportUrl.js"


import axios from 'axios'

export async function takeCountCommentUnderVideo(videoId){
    const comment = await getMoreStatiscticVideo(videoId, params.beginInfoVideo)
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
  
    const detailInformationVideo = await requestToSeverGet(URL.searchURL, makeParams(params.takeDetailInfoVideo, {channelId:id}))

    const videoIds = getIdVideo(detailInformationVideo.data.items)

    const takeDuration = await getMoreStatiscticVideo(videoIds, params.takeDurationVideo)
  
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

    return  await getMoreStatiscticVideo(IDVideo, params.takeDurationVideo)
}
export async function SearchContent(content){//!
    try{
        const videoRequest = await requestToSeverGet(URL.searchURL, makeParams(params.searchContent, {q:content, pageToken:state.searchContantToken}))
        state.searchContantToken = videoRequest.data.nextPageToken
        const videoId = getIdVideo(videoRequest.data.items)

        return await getMoreStatiscticVideo(videoId, params.takeDurationVideo)
    }catch(err){
        console.log(err);
    }
}
export async function getMoreStatisticId(id){//!
    try{
        return await getMoreStatiscticVideo(id, params.takeDurationVideo)
    }catch(err){
        console.log(err);
    }
}
export async function addSubscribe(channelID) {//!!!
    try{
        return await axios.post(`https://www.googleapis.com/youtube/v3/subscriptions`, {
            "snippet": {
                "resourceId": {
                  "channelId": channelID
                }
              }
        },
        {
            params:{
                part:"snippet"
            },
            headers:{
                'Authorization': `Bearer ${state.acessToken}`
            }
            
        })
    }catch(err){
        console.log(err)
    }
    
}

export async function removeSubscribe(channelID) {//!
    const response = await axios.get("https://www.googleapis.com/youtube/v3/subscriptions", { params: { part: "id", mine: true, },
        headers: {
            Authorization: `Bearer ${state.acessToken}`
        }
    });
    
    return await axios.delete("https://www.googleapis.com/youtube/v3/subscriptions", {
        params:{ id:response.data.items[0]?.id},
        headers:{ Authorization:`Bearer ${state.acessToken}` }
    })
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

        const MoreStatisticVideo = await getMoreStatiscticVideo(IDVideo, params.takeDurationVideo)

        return MoreStatisticVideo.data.items
    }catch(err){
        console.log(err);
    }
}
export async function getMoreStatiscticVideo(idVideo, param){
    return await requestToSeverGet(URL.infoVideoURL, makeParams(param, {id:idVideo}))
}
export async function getShortsVideo() {
    console.log(state.shortsPageToken)
   const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params:{
            part:"snippet",
            videoDuration:"short",
            type:"video",
            key:APIKEY,
            pageToken:state.shortsPageToken,
            maxResults:10
        }
    })
   
    console.log('writing pageToken...')
    state.shortsPageToken = response.data.nextPageToken || ''
    console.log(state.shortsPageToken)

    const idVideo = getIdVideo(response.data.items)
     
    return await getMoreStatisticId(idVideo)

   
}