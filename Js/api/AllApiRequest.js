import { state } from "../features/changeData.js";
import { URL } from "../URL/URL.js";
import { formatDuration } from "../untils/FromISOToTime.js";
import { TakeShortAndLongVideo } from "../untils/HelpsFunction.js";
import { requestToSeverGet } from "../URL/Request.js";
import axios from 'axios'



export async function takeCountCommentUnderVideo(videoId){
    const comment = await requestToSeverGet(URL.infoVideoURL, {part: "statistics", id: videoId, key: APIKEY})
    return comment.data.items[0].statistics.commentCount
}

export  async function  takeComment(videoId) {
    if(state.acessToken){
        const allComment = await requestToSeverGet(URL.commentURL, {part: "snippet", videoId: videoId, maxResults:20, pageToken:state.PageTokenComment,}, true)
        return allComment.data
    }else{
        const allComment = await requestToSeverGet(URL.commentURL, {part: "snippet", videoId: videoId, maxResults:5, pageToken:state.PageTokenComment,key:APIKEY })
        return allComment.data
    }
   
}
async function takeInfoChannel(nameChannel){
    const name = nameChannel.trim().replaceAll(' ', '+')

    const idChannel = await requestToSeverGet(URL.searchURL, { part:"snippet",  type:"channel",  q:name, key:APIKEY })
    const moreInfoChannel = await requestToSeverGet(URL.searchURL, {  part:'statistics', id:idChannel.data.items[0].id.channelId,  key:APIKEY})

    return {imgChannel:idChannel.data.items[0].snippet.thumbnails.default.url, subscriberChannel:moreInfoChannel.data.items[0].statistics.subscriberCount, ChannelId:idChannel.data.items[0].id.channelId}
}
export async function takeMoreInfoChannel(nameChannel) {
    const name = nameChannel.replaceAll(' ', '+')

    const idChannel = await requestToSeverGet(URL.searchURL, { part:"snippet", q:name,  key:APIKEY, type:"channel"})
    const moreInfoChannel = await removeSubscribe(URL.channelURL, { part:"snippet,statistics,brandingSettings", id:idChannel.data.items[0].id.channelId,  key:APIKEY})
    
    return {dataChannel:moreInfoChannel.data.items[0], id:moreInfoChannel.data.items[0].id}
}
export async  function takeMoreVideoAnyProfile(id){
    const detailInformationVideo = await requestToSeverGet(URL.searchURL, { part:"snippet", channelId:id, maxResults:50, pageToken:state.pageTokenProfileVideoAny, order:"date", type:"video", key:APIKEY})
    const videoIds = detailInformationVideo.data.items.map(el => el.id.videoId).join(',');
    const takeDuration = await requestToSeverGet(URL.infoVideoURL, {part:"contentDetails,snippet,statistics", id:videoIds, key:APIKEY})

    const video = TakeShortAndLongVideo(takeDuration)

    return video
}
export async function ImgAndSubscribeChannel(nameChannel){
    const response = await takeInfoChannel(nameChannel)
    return response
}

export function getRatingVideo(videoId){
    return  requestToSeverGet(URL.getRatingVideoURL, {id:videoId}, true)
}
function dataObjectAccess(type, token=''){
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if(type === 'accessToken'){
        const data = new URLSearchParams({ code:code, client_id: cliendId, client_secret: clientSecret, redirect_uri:redirectUri, grant_type:'authorization_code'})
        return data
    }else if(type === 'RefreshToken'){
        const data = new URLSearchParams({client_id: cliendId, client_secret: clientSecret, refresh_token:token[0].refreshToken, grant_type:'refresh_token'})
        return data
    }
}

export function getAccesToken(type, token){
    const data = dataObjectAccess(type, token)
    const setting = {headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
    return axios.post(URL.tokenURL, data, setting)
}
export function getDataAccount(){
    return requestToSeverGet(URL.channelURL, { part:"snippet,statistics", mine:true }, true )

}

export function TakeSubscriber(pageTokenSubscribe){
    return requestToSeverGet(URL.getRatingVideoURL, { part:"snippet",  mine:true, maxResults:7, pageToken:pageTokenSubscribe}, true)
}

export async function TakeTrending() {
    const newsData = await requestToSeverGet(URL.searchURL, { part:"snippet",  type:"video",  videoCategoryId:20, videoDuration:"short",  chart:"mostPopular",  maxResults:20, key:APIKEY})

    const IDVideo = newsData.data.items.map(el => el.id.videoId).join(',')
    const detailsInf = await axios.get(URL.infoVideoURL,{
        params:{
            part:"snippet, statistics, contentDetails",
            id:IDVideo,
            key:APIKEY
        }
    });
    return detailsInf;
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
        return await axios.post(URL.getSubscriberURL, 
        {
            snippet:{
                resourceId:{
                    kind:"youtube#channel",
                    channelId:channelID
                }
            }
        },
        {
            headers:{
                'Authorization': `Bearer ${state.acessToken}`,
                'Content-Type': 'application/json'
            },
            params:{
                part:"snippet",
                mine:true,
                key:APIKEY
            }

        },
        
        
    )
    }catch(err){
        console.log(err)
    }
    
}

export async function removeSubscribe(channelID) {

    const response = await axios.get(URL.getSubscriberURL, {
        headers:{
            'Authorization':`Bearer ${state.acessToken}`
        },
        params:{
            part:"id",
            forChannelId:channelID,
            mine:true,
            key:APIKEY
        }
    })
    const id = response.data.items[0]?.id

    return await axios.delete(URL.getSubscriberURL,
        {
            headers:{
                'Authorization':`Bearer ${state.acessToken}`,
                "Content-Type":"application/json"
            },
            params:{
                id:id,
                key:APIKEY
            }
        }
    )
    
}

export async function userSubscriber(idChannel) {
    const response = await requestToSeverGet(URL.getSubscriberURL, { part:"id", forChannelId:idChannel, mine:true, key:APIKEY }, true)
    return response.data.items.length > 0
}

export async function putComment(text, videoId, channelId) {
    try{
        return await axios.post(URL.commentURL, 
            {
                snippet: {
                    channelId:channelId,
                    videoId:videoId,
                    topLevelComment:{
                        snippet:{
                            textOriginal:text
                        }
                    }
                }
            },
            {
                headers:{
                    Authorization:`Bearer ${state.acessToken}`,
                     'Content-Type': 'application/json'
                },
                params:{
                    part:"snippet"
                }
            }
        )
    }catch(err){
        console.log(err)
    }
}

export  function addRateToVideo(IdVideo, rating) {
     axios.post(URL.addRateToVideoURL,
        null,
        {
            headers: {
                Authorization: `Bearer ${state.acessToken}`
            },
            params:{
                id:IdVideo,
                rating:rating
            }
        }
    )
    
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