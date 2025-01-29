import { changeProfile } from "./changeData.js";
const urlToken = 'https://oauth2.googleapis.com/token';
const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');


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
            if(response.data.refresh_token){
                localStorage.setItem("Refresh_token", response.data.refresh_token);
            }
           
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
                changeProfile(dataAccount.data.items[0].snippet.thumbnails.default.url,dataAccount.data.items[0].snippet.title, dataAccount.data.items[0].snippet.customUrl )
                
                
            }catch(err){
                console.log(err)
            }
        }
    }
    async function requestToTakeData(response){
        try{
            const data = await axios.get('https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&mine=true',{
                headers:{'Authorization': `Bearer ${response.data.access_token}`}
            })
            changeProfile(data.data.items[0].snippet.thumbnails.default.url, data.data.items[0].snippet.title, data.data.items[0].snippet.customUrl )

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

