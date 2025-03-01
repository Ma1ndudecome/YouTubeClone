import { state } from "./changeData.js";
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
    return {imgChannel:idChannel.data.items[0].snippet.thumbnails.default.url, subscriberChannel:moreInfoChannel.data.items[0].statistics.subscriberCount}
}
export async function takeMoreInfoChannelAndVideo(nameChannel) {
    const name = nameChannel.replaceAll(' ', '+')
    console.log(name)
    const idChannel = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${name}&key=${APIKEY}`)
    const moreInfoChannel = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings&id=${idChannel.data.items[0].id.channelId}&key=${APIKEY}`)
    const detailInformationVideo =  await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${idChannel.data.items[0].id.channelId}&maxResults=50&order=date&type=video&key=${APIKEY}`)
    return {InfoChannel:moreInfoChannel.data.items[0], VideoChannel:detailInformationVideo.data}
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