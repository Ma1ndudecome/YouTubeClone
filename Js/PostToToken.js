import { changeProfile } from "./changeData.js";
import { channelData } from "./loadDataChannel.js";
import { makeMarkingVideo } from "./Marking/markingVideo.js";
import { container } from "./LoadVideo.js";
import { state } from "./changeData.js";
import { marcinSubscriben } from "./Marking/ProfileMarking.js";
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
            return response
        }catch(err){
            console.log(localStorage.getItem("dataRegreshToken"))
         const  token = JSON.parse(localStorage.getItem("dataRefreshToken")).filter(el=>el.name === localStorage.getItem("nameAccount"))

            const data = new URLSearchParams({
                client_id:cliendId,
                client_secret:clientSecret,
                refresh_token:token[0].refreshToken,
                grant_type:'refresh_token'
            })
            try{
                const response = await axios.post(urlToken, data, {
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'}
                })
                 state.acessToken = response.data.access_token
                 console.log(response.data.access_token)
                const dataAccount = await axios.get('https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&mine=true',{
                    headers:{ 'Authorization':`Bearer ${response.data.access_token}`}
                })
                changeProfile(dataAccount.data.items[0].snippet.thumbnails.default.url,dataAccount.data.items[0].snippet.title, dataAccount.data.items[0].snippet.customUrl, response.data.access_token )
                 loadSubsiber(response.data.access_token)
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
 const buttonMoreSubscriber = document.querySelector(".aside_SignIn_buttonMore")
 
async function loadSubsiber(access_token = ""){
    document.querySelector(".aside_SignIn").classList.add("hF","fdC")
    const singIntNone = document.querySelector(".aside_SignIn_Container")
    singIntNone.classList.add("none")

    buttonMoreSubscriber.classList.remove("none")

    const subscriberContainer = document.querySelector(".block_list_Sing_int")
    try{
        const dataSubsribe = await axios.get(`https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&access_token=${access_token}&maxResults=7&pageToken=${pageTokenSubscribe}`)
        console.log(dataSubsribe)
        if(dataSubsribe.data.nextPageToken){
            pageTokenSubscribe = dataSubsribe.data.nextPageToken 

            console.log("2")
        }else{
            buttonMoreSubscriber.remove()
        }
        
        dataSubsribe.data.items.forEach(({snippet})=>{
            subscriberContainer.insertAdjacentHTML("beforeend",marcinSubscriben(snippet.thumbnails.default.url,snippet.title))
            console.log(snippet)
        })
        
    }catch(error){
        console.log(error)
    }
   
 }
// start
// function f1 (){


//  let clickount = 0;
//  const buttonSubscribe = document.querySelector("..aside_SignIn_buttonMore")
 
//  buttonSubscribe.addEventListener("click",async () =>{
//     clickount ++;

//     const maxResults = (clickount === 1) ? 7 : 50;

//     try{
//         const dataSubscribe = await aios.get(
//             `https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&maxResults=${maxResults}&access_token=${access_token}`)
//     }catch(error){
//         console.log(error)
//     }

// })
// }

//Показать кнопки Покахать все и скрыть подписки 

const show_All_Hide_All = document.querySelector(".aside_bottom_Show_All_Hide_All")
const aside_bottom_Show_All_Hide_All = function () {
   
   show_All_Hide_All.style.display = "block"

   console.log("1")
}

const show_All = document.querySelector(".show_All")

const show_All_Display_block = function () {
    show_All.style.display = "flex"
    // show_All.style.width = "100%"
}



buttonMoreSubscriber.onclick = () => {
    loadSubsiber(state.access_token)
    
    aside_bottom_Show_All_Hide_All();
     show_All_Display_block();
}


//Скрыть все
const hide_All = document.querySelector(".hide_All")

// const hide_All_Function = function () {
//    hide_All.onclick = () =>{

//     loadSubsiber(state.acessToken )

//     show_All_Hide_All.style.display = "none"
//    }
// }
// hide_All_Function()

hide_All.onclick = () =>{

    loadSubsiber(state.access_token )
    
    show_All_Hide_All.style.display = "none"
   }

   

   show_All.onclick = () =>{

    show_All.style.display = "none"
    show_All_Hide_All.style.display = "none"
   }
