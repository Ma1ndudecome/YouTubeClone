import { state } from "../URL/createObject.js"
export function createParamsData(){
    return {
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
        getDetailInfoGaming:{ part:"snippet,statistics,contentDetails", id:null, key:APIKEY},
        searchContent:{part:"snippet", maxResults:20, q:null, key:APIKEY},
        changeComment:{snippet: { channelId:null, videoId:null, topLevelComment:{ snippet:{textOriginal:null } } }}
    }
}
export function createObjectForSave(){
    return {//Тут храняться переменные которые изменяються в разныъ файлах
      pageTokenProfileVideo: '',//Сохранение токена для следующей страницы видео
      pageTokenProfileShorts: '',//Сохранение токена для следующей страницы шортса
      markingVideoPage: '',//Сохранение контейнера видео
      markingHomePage: '',//Сохранение главной страницы
      markingShortsPage: '',//Сохранение контейнера шортс
      isLastVideos: false,//Последнее ли видео
      isLastShorts: false,//Последнее ли видео
      prevMarking: '',//Переменная для сохранения при перходе предыдущей разметки
      infoChannel: { img: 'https://cdn-icons-png.flaticon.com/512/6522/6522516.png' },//Сохранить количество подписчиков и url профиля
      PageTokenComment: '',
      Autorization: false,
      pageTokenProfileVideoAny: ''
    };
}

export function createUrlRequest(){
    return {
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
}