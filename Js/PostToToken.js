import { changeProfile,state } from "./changeData.js";
import { channelData } from "./loadDataChannel.js";
import { makeMarkingVideo } from "./Marking/markingVideo.js";
import { container } from "./LoadVideo.js";
import { marcinSubscriben } from "./Marking/Marking.js";
import { getAccesToken } from "./AllApiRequest.js";
let refreshTokenProfile = []
if(localStorage.getItem("dataRefreshToken")){
    refreshTokenProfile = JSON.parse(localStorage.getItem("dataRefreshToken"))
}

const urlToken = 'https://oauth2.googleapis.com/token';
const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');
let pagetoken = ''

let pageTokenSubscribe = '';
if(code){
    async function requestToTakeToken(code) {

        // const data = new URLSearchParams({
        //     code:code,
        //     client_id: cliendId,
        //     client_secret: clientSecret,
        //     redirect_uri:redirectUri,
        //     grant_type:'authorization_code'
        // })
        try{
            const response = await getAccesToken('accessToken')
            state.acessToken = response.data.access_token
           
            const dataAccount = await axios.get('https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&mine=true',{
                headers:{ 'Authorization':`Bearer ${response.data.access_token}`}
            })
            
            if(response.data.refresh_token){
                
              const check = refreshTokenProfile.some(el=>el.name === dataAccount.data.items[0].snippet.title )
                 if(!check){
                    refreshTokenProfile.push({name:dataAccount.data.items[0].snippet.title, refreshToken:response.data.refresh_token})
                    localStorage.setItem("dataRefreshToken", JSON.stringify(refreshTokenProfile))
                    
                 }
            }
            localStorage.setItem("nameAccount", dataAccount.data.items[0].snippet.title)
            changeProfile(dataAccount.data.items[0].snippet.thumbnails.default.url,dataAccount.data.items[0].snippet.title, dataAccount.data.items[0].snippet.customUrl, response.data.access_token )
            channelData(response.data.access_token) 
            loadSubsiber(response.data.access_token)
            state.infoChannel.img = dataAccount.data.items[0].snippet.thumbnails.default.url
            state.Autorization = true
            return response
        }catch(err){
         const token = JSON.parse(localStorage.getItem("dataRefreshToken")).filter(el=>el.name === localStorage.getItem("nameAccount"))
            
            try{
                
                const response = await getAccesToken('RefreshToken', token)
            
                 state.acessToken = response.data.access_token
                
                const dataAccount = await axios.get('https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&mine=true',{
                    headers:{ 'Authorization':`Bearer ${response.data.access_token}`}
                })
                changeProfile(dataAccount.data.items[0].snippet.thumbnails.default.url,dataAccount.data.items[0].snippet.title, dataAccount.data.items[0].snippet.customUrl, response.data.access_token )
                 loadSubsiber(response.data.access_token)
                state.infoChannel = {
                    img:dataAccount.data.items[0].snippet.thumbnails.default.url
                }
                state.Autorization = true

            }catch(err){
                console.log(err.response ? err.response.data : err);
            }
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
 const buttonMoreSubscriber = document.querySelector(".aside_SignIn_buttonMore")
async function loadSubsiber(access_token = ""){
    document.querySelector(".aside_SignIn").classList.add("hF","fdC")
    const singIntNone = document.querySelector(".aside_SignIn_Container")
    const removeNonContainer = document.querySelector(".block_list_Sing_int ")
    
    singIntNone.classList.add("none")
    removeNonContainer.classList.remove("none")

    buttonMoreSubscriber.classList.remove("none")
    
    const subscriberContainer = document.querySelector(".block_list_Sing_int")
    try{
        const dataSubsribe = await axios.get(`https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&access_token=${access_token}&maxResults=7&pageToken=${pageTokenSubscribe}`)
        if(dataSubsribe.data.nextPageToken){
            pageTokenSubscribe = dataSubsribe.data.nextPageToken 
        }else{
            buttonMoreSubscriber.remove()
        }
        
        dataSubsribe.data.items.forEach(({snippet})=>{
            subscriberContainer.insertAdjacentHTML("beforeend",marcinSubscriben(snippet.thumbnails.default.url,snippet.title))
        })
        
    }catch(error){
        console.log(error)
    }
   
}

buttonMoreSubscriber.onclick = () => {
    loadSubsiber(state.acessToken)
}

