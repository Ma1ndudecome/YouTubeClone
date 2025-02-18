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

export  async function  takeComment(accessToken, videoId) {
    const allComment = await axios.get("https://www.googleapis.com/youtube/v3/commentThreads", {
        headers: { 'Authorization': `Bearer ${accessToken}` },
        params: {
            part: "snippet",
            videoId: videoId,
            maxResults:50,
            pageToken:state.PageTokenComment
    }})
    return allComment.data.items
}

export async function TakeNews() {
    const NewsData = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=20&chart=mostPopular&maxResults=20&key=${APIKEY}`)
    const IDVideo = NewsData.data.items.map(el => el.id.videoId).join(',')
    const detailInf = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${IDVideo}&key=${APIKEY}`)
   
    return detailInf
}