import { getRatingVideo } from "../api/AllApiRequest";

export const URL = {
    tokenURL:"https://oauth2.googleapis.com/token",
    countCommentURL:"https://www.googleapis.com/youtube/v3/videos",
    takeCommentURL:"https://www.googleapis.com/youtube/v3/commentThreads",
    searchChannelURL: "https://www.googleapis.com/youtube/v3/search",
    takeMoreInfoChannelURL:"https://www.googleapis.com/youtube/v3/channels",
    getRatingVideoURL:"https://www.googleapis.com/youtube/v3/videos/getRating",
    getSubscriberURL:"https://www.googleapis.com/youtube/v3/subscriptions",
    addRateToVideoURL:"https://www.googleapis.com/youtube/v3/videos/rate",
}