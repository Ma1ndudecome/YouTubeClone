import { state } from "../features/changeData.js"
export const params = {
    beginInfoVideo:{part: "statistics", id: null, key: APIKEY},
    getCommentAuth:{part: "snippet", videoId: null, maxResults:20, pageToken:state.PageTokenComment},
    getCommentAPI:{part: "snippet", videoId: null, maxResults:5, pageToken:state.PageTokenComment, key:APIKEY },
    takeIdChannel:{ part:"snippet",  type:"channel",  q:null, key:APIKEY },
    takeMoreInfoChannel:{ part:"statistics", id:null,  key:APIKEY},
    getInfoChannel:{ part:"snippet,statistics,brandingSettings", id:null,  key:APIKEY},
    takeDetailInfoVideo:{ part:"snippet", channelId:null, maxResults:50, pageToken:state.pageTokenProfileVideoAny, order:"date", type:"video", key:APIKEY},
    takeDurationVideo:{part:"contentDetails,snippet,statistics", id:null, key:APIKEY},
    getAccesToken:{ code:null, client_id: cliendId, client_secret: clientSecret, redirect_uri:redirectUri, grant_type:'authorization_code'},
    getRefreshToken:{client_id: cliendId, client_secret: clientSecret, refresh_token:null, grant_type:'refresh_token'},
    getDataAccount:{ part:"snippet,statistics", mine:true },
    takeSubsriber:{ part:"snippet",  mine:true, maxResults:7, pageToken:null},
    takeVideoTrand:{ part:"snippet",  type:"video",  videoCategoryId:20, videoDuration:"short",  chart:"mostPopular",  maxResults:20, key:APIKEY},
    AddSubsribe:{ snippet:{ resourceId:{ kind:"youtube#channel", channelId:null} } },
    authParams: {headers:{'Authorization': `Bearer ${state.acessToken}`,'Content-Type': 'application/json'}},
    shortResponse:{ part:"snippet", mine:true, key:APIKEY },
    takeIdComment: { part:"id",  forChannelId:null, mine:true,  key:APIKEY},
    getChangedComment:{ id:null, key:APIKEY },
    isSubscribe:{ part:"id", forChannelId:null, mine:true, key:APIKEY },
    commentResponse:{ part:"snippet" },
    getGamingVideo: {part:"snippet", q:"gaming", type:"video", videoCategoryId:20, maxResults:40, key:APIKEY},
    getDetailInfoGaming:{ part:"snippet,statistics,contentDetails", id:null, key:APIKEY}
}
const prov = {part:{id:"some", no:"if"}}

export function makeParams(params, change){
    for(const key in change){
       
        params[key] = change[key]
    }
    return params
}
