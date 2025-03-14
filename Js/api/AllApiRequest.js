import { state } from "../features/changeData.js";
import { formatDuration } from "../untils/FromISOToTime.js";
import { TakeShortAndLongVideo } from "../untils/HelpsFunction.js";
import axios from 'axios'


const urlToken = 'https://oauth2.googleapis.com/token';
export async function takeCountCommentUnderVideo(videoId){
    const comment = await axios.get("https://www.googleapis.com/youtube/v3/videos", {
        params: {
             part: "statistics",
            id: videoId,
            key: APIKEY
        }
        });
    return comment.data.items[0].statistics.commentCount
}

export  async function  takeComment(videoId) {
    if(state.acessToken){
        const allComment = await axios.get("https://www.googleapis.com/youtube/v3/commentThreads", {
            headers: { 'Authorization': `Bearer ${state.acessToken}` },
            params: {
                part: "snippet",
                videoId: videoId,
                maxResults:20,
                pageToken:state.PageTokenComment,
                
        }})
        return allComment.data
    }else{
        const allComment = await axios.get("https://www.googleapis.com/youtube/v3/commentThreads", {
            params: {
                part: "snippet",
                videoId: videoId,
                maxResults:5,
                pageToken:state.PageTokenComment,
                key:APIKEY
                
        }})
        return allComment.data
    }
   
}
async function takeInfoChannel(nameChannel){
    const name = nameChannel.trim().replaceAll(' ', '+')
    console.log(name)
    const idChannel = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${name}&key=${APIKEY}`)
    console.log('allInf', idChannel)
    console.log("idChannel", idChannel.data.items[0].id.channelId)
    const moreInfoChannel = await axios.get("https://www.googleapis.com/youtube/v3/channels", {
        params:{
            part:'statistics',
            id:idChannel.data.items[0].id.channelId,
            key:APIKEY
        }
    })
    console.log(moreInfoChannel)
    return {imgChannel:idChannel.data.items[0].snippet.thumbnails.default.url, subscriberChannel:moreInfoChannel.data.items[0].statistics.subscriberCount, ChannelId:idChannel.data.items[0].id.channelId}
}
export async function takeMoreInfoChannel(nameChannel) {
    const name = nameChannel.replaceAll(' ', '+')
    console.log(name)
    const idChannel = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${name}&key=${APIKEY}`)
    const moreInfoChannel = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings&id=${idChannel.data.items[0].id.channelId}&key=${APIKEY}`)
    return {dataChannel:moreInfoChannel.data.items[0], id:moreInfoChannel.data.items[0].id}
}
export async  function takeMoreVideoAnyProfile(id){
    const detailInformationVideo = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${id}&maxResults=50&pageToken=${state.pageTokenProfileVideoAny}&order=date&type=video&key=${APIKEY}`);
    const videoIds = detailInformationVideo.data.items.map(el => el.id.videoId).join(',');
    const takeDuration = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,statistics&id=${videoIds}&key=${APIKEY}`);

    const video = TakeShortAndLongVideo(takeDuration)

    return video
}
export async function ImgAndSubscribeChannel(nameChannel){
    const response = await takeInfoChannel(nameChannel)
    return response
}

export function getRatingVideo(videoId){
    return axios.get(`https://www.googleapis.com/youtube/v3/videos/getRating`, {
        headers: { 'Authorization': `Bearer ${state.acessToken}` },
        params:{
            id:videoId
        }
    })
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
    return axios.post(urlToken, data, setting)
}
export function getDataAccount(accessToken){
    return axios.get('https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&mine=true', {
        headers:{ 'Authorization':`Bearer ${accessToken}`}
    })
}

export function TakeSubscriber(access_token, pageTokenSubscribe){
  return axios.get(`https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&access_token=${access_token}&maxResults=7&pageToken=${pageTokenSubscribe}`)
}

export async function TakeTrending() {
    const newsData = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=20&videoDuration=short&chart=mostPopular&maxResults=20&key=${APIKEY}`);
    const IDVideo = newsData.data.items.map(el => el.id.videoId).join(',')
    const detailsInf = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${IDVideo}&key=${APIKEY}`);
    return detailsInf;
}
export async function SearchContent(content){
    try{
        const videoRequest = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${content}&key=${APIKEY}`)
        const videoId = videoRequest.data.items.map(el=>el.id.videoId).join(',')
        const MoreStatisticVideo = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,statistics&id=${videoId}&key=${APIKEY}`);
        return MoreStatisticVideo
    }catch(err){
        console.log(err);
    }
}
export async function getMoreStatisticId(id){
    try{
        return await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${id}&key=${APIKEY}`)
    }catch(err){
        console.log(err);
    }
}
export async function addSubscribe(channelID) {
    console.log(state.acessToken)
    try{
        return await axios.post(`https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&key=${APIKEY}`, 
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
            }

        }
    )
    }catch(err){
        console.log(err)
    }
    
}

export async function removeSubscribe(channelID) {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/subscriptions?part=id&forChannelId=${channelID}&mine=true&key=${APIKEY}`, {
        headers:{
            'Authorization':`Bearer ${state.acessToken}`
        }
    })
    const id = response.data.items[0]?.id

    return await axios.delete(`https://www.googleapis.com/youtube/v3/subscriptions?id=${id}&key=${APIKEY}`,
        {
            headers:{
                'Authorization':`Bearer ${state.acessToken}`,
                "Content-Type":"application/json"
            }
        }
    )
    
}

export async function userSubscriber(idChannel) {
 
    const response  = await axios.get(
        `https://www.googleapis.com/youtube/v3/subscriptions?part=id&forChannelId=${idChannel}&mine=true&key=${APIKEY}`,
        {
            headers: {
                Authorization: `Bearer ${state.acessToken}`
            }
        }
    )
    
    return response.data.items.length > 0
}

export async function putComment(text, videoId, channelId) {
    try{
        return await axios.post("https://www.googleapis.com/youtube/v3/commentThreads?part=snippet", 
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
                }
            }
        )
    }catch(err){
        console.log(err)
    }
}

export async function addRateToVideo(IdVideo, rating) {
    const response = await axios.post(`https://www.googleapis.com/youtube/v3/videos/rate?id=${IdVideo}&rating=${rating}`,
        null,
        {
            headers: {
                Authorization: `Bearer ${state.acessToken}`
            }
        }
    )
    console.log(response)
    return response
}