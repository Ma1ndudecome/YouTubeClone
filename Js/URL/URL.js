
export const URL = {
    tokenURL:"https://oauth2.googleapis.com/token",
    infoVideoURL:"https://www.googleapis.com/youtube/v3/videos",
    commentURL:"https://www.googleapis.com/youtube/v3/commentThreads",
    searchURL: "https://www.googleapis.com/youtube/v3/search",
    channelURL:"https://www.googleapis.com/youtube/v3/channels",
    getRatingVideoURL:"https://www.googleapis.com/youtube/v3/videos/getRating",
    getSubscriberURL:"https://www.googleapis.com/youtube/v3/subscriptions",
    addRateToVideoURL:"https://www.googleapis.com/youtube/v3/videos/rate",
    logInURL:`https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/youtube.force-ssl&redirect_uri=${redirectUri}&response_type=code&client_id=${cliendId}&access_type=offline`
}