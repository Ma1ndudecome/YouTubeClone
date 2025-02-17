
const SingButton = document.querySelector(".SignIn_element")
SingButton.onclick = (e)=>{
    e.preventDefault()
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/youtube.force-ssl&redirect_uri=${redirectUri}&response_type=code&client_id=${cliendId}&access_type=offline`;
}

export function lisnerToLike(){
   const containerComment =  document.querySelector(".AllComment_Container")
   const uhliked = `rgba(117, 113, 113, 0.23)`
   const liked = `rgba(255, 255, 255, 0.71)`
   containerComment.addEventListener("click", (e)=>{
    const svg = e.target.querySelector("path").style.fill
    const path =  e.target.querySelector("path")
    console.log('svgStyle:',svg)
    console.log('unliked',uhliked)
    if(svg === uhliked){
        path.style.fill = liked
    }else if(svg === liked)
        path.style.fill = uhliked
    })
  
   
}