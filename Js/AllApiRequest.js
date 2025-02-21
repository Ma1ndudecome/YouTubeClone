import { state } from "./changeData.js";
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

    const allComment = await axios.get("https://www.googleapis.com/youtube/v3/commentThreads", {
        
        params: {
            part: "snippet",
            videoId: videoId,
            maxResults:1,
            pageToken:state.PageTokenComment,
            key:APIKEY
    }})
    return allComment.data
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
            key:'AIzaSyAbh1UekN-CQ_R7df6I7NPCvVVy-WV_Q3Y'
        }
    })
    console.log(moreInfoChannel)
    return {imgChannel:idChannel.data.items[0].snippet.thumbnails.default.url, subscriberChannel:moreInfoChannel.data.items[0].statistics.subscriberCount}
}
export async function ImgAndSubscribeChannel(nameChannel){
    const response = await takeInfoChannel(nameChannel)
    return response
}