const urlToken = 'https://oauth2.googleapis.com/token';
const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

if(code){
    
    const data = new URLSearchParams()
    data.append('code', code); 
    data.append('CI',);
    data.append('CS', clientSecret);
    data.append('redirect_uri', 'http://localhost:5501');
    data.append('grant_type', 'authorization_code');

    axios.post(urlToken, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response=>{
        console.log(response.data)
        axios.get('https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&mine=true', {
            headers:{
                'Authorization': `Bearer ${response.data.access_token}`,
            }
        })
        .then(data=>console.log(data))
        .catch(error=>console.log(error))
        
        
    })
    .catch(error=>console.log(error))

}   
