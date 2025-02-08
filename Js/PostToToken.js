import { changeProfile } from "./changeData.js";
import { channelData } from "./loadDataChannel.js";
import { makeMarkingVideo } from "./Marking/markingVideo.js";
import { container } from "./LoadVideo.js";
let refreshTokenProfile = []
if(localStorage.getItem("dataRefreshToken")){
    refreshTokenProfile = JSON.parse(localStorage.getItem("dataRefreshToken"))

}
console.log(refreshTokenProfile)

const urlToken = 'https://oauth2.googleapis.com/token';
const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');
let pagetoken = ''
if(code){
    async function requestToTakeToken(code) {
        const data = new URLSearchParams({
            code:code,
            client_id: cliendId,
            client_secret: clientSecret,
            redirect_uri:redirectUri,
            grant_type:'authorization_code'
        })
        try{
            const response = await axios.post(urlToken,data,{
                headers: {'Content-Type': 'application/x-www-form-urlencoded' }
            })
            
            const dataAccount = await axios.get('https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&mine=true',{
                headers:{ 'Authorization':`Bearer ${response.data.access_token}`}
            })
            if(response.data.refresh_token){
                refreshTokenProfile.forEach(el=>{
                    if(el.name !== dataAccount.data.items[0].snippet.title){
                        refreshTokenProfile.push({name:dataAccount.data.items[0].snippet.title, refreshToken:response.data.refresh_token})
                        localStorage.setItem("dataRefreshToken", JSON.stringify(refreshTokenProfile))
                    }
                })
                
            }
            
            
            changeProfile(dataAccount.data.items[0].snippet.thumbnails.default.url,dataAccount.data.items[0].snippet.title, dataAccount.data.items[0].snippet.customUrl, response.data.access_token )
            channelData(response.data.access_token) 
            return response
        }catch(err){
            const data = new URLSearchParams({
                client_id:cliendId,
                client_secret:clientSecret,
                refresh_token:localStorage.getItem("Refresh_token"),
                grant_type:'refresh_token'
            })
            try{
                const response = await axios.post(urlToken, data, {
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'}
                })
               
                const dataAccount = await axios.get('https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&mine=true',{
                    headers:{ 'Authorization':`Bearer ${response.data.access_token}`}
                })
                changeProfile(dataAccount.data.items[0].snippet.thumbnails.default.url,dataAccount.data.items[0].snippet.title, dataAccount.data.items[0].snippet.customUrl, response.data.access_token )
                
            }catch(err){
                console.log('some',err)
            }
        }
    }
    async function requestToTakeData(response){
        try{
            const data = await axios.get('https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&mine=true',{
                headers:{'Authorization': `Bearer ${response.data.access_token}`}
            })
            const Recomendation = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
                params: {
                    part: 'snippet',
                    myRating: 'like', 
                    maxResults: 10
                },
                headers: { 'Authorization': `Bearer ${response.data.access_token}` }}
            )
           
            Recomendation.data.items.forEach(el=>{
                
                // container.insertAdjacentHTML('beforeend', makeMarkingVideo(el.snippet.thumbnails.high.url, el.snippet.thumbnails.default.url, el.snippet.title, el.snippet.channelTitle ))  
            })
          

            changeProfile(data.data.items[0].snippet.thumbnails.default.url, data.data.items[0].snippet.title, data.data.items[0].snippet.customUrl, response.data.access_token)
        }catch(err){
            console.log(err)
        }
    }
    async function callFunction(){
        const response = await requestToTakeToken(code)
        if(response){
            await requestToTakeData(response)
        }
    }
    callFunction()
}

async function loadSubsiber(access_token){
    try{
        const dataSubsribe = await axios.get(`https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&access_token=${access_token}&maxResults=7&pageToken=${pagetoken}`)
        pagetoken = dataSubsribe.data.nextPageToken || ''
        dataSubsribe.data.items.forEach(({snippet})=>{
            markingSubribe(snippet.thumbnails.medium.url,snippet.title)
        })
        
    }catch(error){
        console.log(error)
    }
   
}

