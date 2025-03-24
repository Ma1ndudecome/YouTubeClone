
import { changeProfile, channelData } from "../features/ReExportFeatures.js" 
import { state } from "../URL/createObject.js"
import { marcinSubscriben } from "../Marking/reExportMarking.js";
import { getAccesToken, getDataAccount, TakeSubscriber } from "./ReExportAPI.js";
import { saveAcessToken,saveImgAccount, UserInAccountTrue, addClassList, removeClassList} from "../untils/reExportUntils.js";

let refreshTokenProfile = []
if(localStorage.getItem("dataRefreshToken")){
    refreshTokenProfile = JSON.parse(localStorage.getItem("dataRefreshToken"))
}


const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');


let pageTokenSubscribe = '';
if(code){
    async function requestToTakeToken() {
        try{
            const response = await getAccesToken('accessToken')
            saveAcessToken(response.data.access_token) 
            const dataAccount = await getDataAccount()
            
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
            loadSubsiber(response.data.access_token,7)
            saveImgAccount(dataAccount.data.items[0].snippet.thumbnails.default.url)
            UserInAccountTrue(true)
            return response
        }catch(err){
         const token = JSON.parse(localStorage.getItem("dataRefreshToken")).filter(el=>el.name === localStorage.getItem("nameAccount"))
            try{
                const response = await getAccesToken('RefreshToken', token)

                saveAcessToken(response.data.access_token) 

                const dataAccount = await getDataAccount()

                changeProfile(dataAccount.data.items[0].snippet.thumbnails.default.url,dataAccount.data.items[0].snippet.title, dataAccount.data.items[0].snippet.customUrl, response.data.access_token )
                loadSubsiber(response.data.access_token,7)
                saveImgAccount(dataAccount.data.items[0].snippet.thumbnails.default.url)
                UserInAccountTrue(true)
               
            }catch(err){
                console.log(err.response ? err.response.data : err);
            }
        }
    }
    setTimeout(()=>{
        requestToTakeToken()
    })
    
}


 const buttonMoreSubscriber = document.querySelector(".aside_SignIn_buttonMore")




async function loadSubsiber(access_token = "",countSubscriber){
    document.querySelector(".aside_SignIn").classList.add("hF","fdC")
    const singIntNone = document.querySelector(".aside_SignIn_Container")
    const removeNonContainer = document.querySelector(".block_list_Sing_int ")
    
    addClassList(singIntNone, "none")

    removeClassList(removeNonContainer, "none")
    removeClassList(buttonMoreSubscriber, "none")

    const subscriberContainer = document.querySelector(".block_list_Sing_int")
    try{
        const dataSubsribe = await TakeSubscriber(pageTokenSubscribe)
        dataSubsribe.data.nextPageToken ?  pageTokenSubscribe = dataSubsribe.data.nextPageToken : buttonMoreSubscriber.remove()
  
        dataSubsribe.data.items.forEach(({snippet})=>{
            subscriberContainer.insertAdjacentHTML("beforeend",marcinSubscriben(snippet.thumbnails.default.url,snippet.title)) 
        })

         if(countSubscriber === 50){
            return dataSubsribe.data.items.map(el =>el.snippet.title);
         }
    }catch(error){
        console.log(error)
    }
   
 }


 //Обновляем подписки на 50 штук 
 //
   let dataSubscribe ;
  buttonMoreSubscriber.onclick = async () => {
    dataSubscribe = await loadSubsiber(state.acessToken,50);
     
    aside_bottom_Show_All_Hide_All();
       show_All_Display_block();
}
  //Функция для добаления блока показать все и скрыть все
  const show_All_Hide_All = document.querySelector(".aside_bottom_Show_All_Hide_All")
  const aside_bottom_Show_All_Hide_All = function () {
     show_All_Hide_All.style.display = "block"
  }
  const show_All = document.querySelector(".show_All")
  const show_All_Display_block = function () {
      show_All.style.display = "flex"   
  }

 //Функция для закрытия показать все и скрыть подписки
  const show_All_none_Hide_All_none = function  () {
    show_All.style.display = "none"
    show_All_Hide_All.style.display = "none"
  }

show_All.onclick = () =>{
    show_All_none_Hide_All_none()
    
   }
  const hide_All = document.querySelector(".hide_All")

const aside_SignIn_buttonMore_2 = document.getElementsByClassName("aside_SignIn_buttonMore_2")

hide_All.onclick = () => {
    show_All_none_Hide_All_none();
   
    const dataSubscribeSet = new Set(dataSubscribe);

    const blockListSing = document.querySelectorAll(".block_list_sing_int_subscription_title");

    blockListSing.forEach((el) => {
        if (dataSubscribeSet.has(el.textContent)) {
            el.parentElement.remove();
        }
    });
};
   
     

