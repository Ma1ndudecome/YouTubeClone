const urlToken = 'https://oauth2.googleapis.com/token';
const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

if(code){
    
    const data = new URLSearchParams()
    data.append('code', code); 
    data.append('client_id', cliendId);
    data.append('client_secret', clientSecret);
    data.append('redirect_uri', 'http://localhost:5501');
    data.append('grant_type', 'authorization_code');

    axios.post(urlToken, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response=>{
        if(response.data.refresh_token){
            localStorage.setItem("Refresh_token", response.data.refresh_token)
        }
        
        axios.get('https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&mine=true', {
            headers:{
                'Authorization': `Bearer ${response.data.access_token}`,
            }
        })
        .then(data=>console.log(data))
        .catch(error=>console.log(error))
        
        
    })
    .catch(error=>{
        const data = new URLSearchParams()
        data.append('client_id', cliendId)
        data.append('client_secret', clientSecret);
        data.append('refresh_token', localStorage.getItem("Refresh_token"))
        data.append('grant_type', 'refresh_token');
        axios.post(urlToken, data, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response=>{
            axios.get('https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&mine=true',{
                headers:{
                    'Authorization':`Bearer ${response.data.access_token}`
                }
            })
            .then(data=>console.log(data))
            .catch(error=>console.log(error))
        })
        .catch(error=>console.log(error))
        
    })

}   
