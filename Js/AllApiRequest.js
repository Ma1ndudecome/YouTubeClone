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