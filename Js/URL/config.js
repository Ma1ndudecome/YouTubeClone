import { state } from "../features/ReExportFeatures.js"
export const params = {
    beginInfoVideo:{part: "statistics", id: videoId, key: APIKEY},
    takeAllCommentAuth:{part: "snippet", videoId: videoId, maxResults:20, pageToken:state.PageTokenComment},
    takeAllCommentAPI:{part: "snippet", videoId: videoId, maxResults:5, pageToken:state.PageTokenComment,key:APIKEY },
    takeIdChannel:{ part:"snippet",  type:"channel",  q:name, key:APIKEY },
    takeMoreInfoChannel:{ part:"statistics", id:idChannel.data.items[0].id.channelId,  key:APIKEY},
    takeAllInfoChannel:{ part:"snippet,statistics,brandingSettings", id:idChannel.data.items[0].id.channelId,  key:APIKEY},
    takeDetailInfoVideo:{ part:"snippet", channelId:id, maxResults:50, pageToken:state.pageTokenProfileVideoAny, order:"date", type:"video", key:APIKEY},
    takeDurationVideo:{part:"contentDetails,snippet,statistics", id:videoIds, key:APIKEY},
    getAccesToken:{ code:code, client_id: cliendId, client_secret: clientSecret, redirect_uri:redirectUri, grant_type:'authorization_code'},
    getRefreshToken:{client_id: cliendId, client_secret: clientSecret, refresh_token:token[0].refreshToken, grant_type:'refresh_token'},
    getDataAccount:{ part:"snippet,statistics", mine:true },
    takeSubsriber:{ part:"snippet",  mine:true, maxResults:7, pageToken:pageTokenSubscribe},
    takeVideoTrand:{ part:"snippet",  type:"video",  videoCategoryId:20, videoDuration:"short",  chart:"mostPopular",  maxResults:20, key:APIKEY},
    AddSubsribe:{ snippet:{ resourceId:{ kind:"youtube#channel", channelId:channelID} } },
    

}