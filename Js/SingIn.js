
const SingButton = document.querySelector(".SignIn_element")
SingButton.onclick = (e)=>{
    e.preventDefault()
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/youtube.force-ssl&redirect_uri=${redirectUri}&response_type=code&client_id=${cliendId}&access_type=offline`;
}

export function lisnerToLike(){
   const containerComment =  document.querySelector(".AllComment_Container")
   const uhliked = `rgba(117, 113, 113, 0)`
   const liked = `rgba(255, 255, 255, 0.71)`
   const countLike = document.querySelector(".AllComment_Container_item_statistic_like_count")
   containerComment.addEventListener("click", (e)=>{

    const haveClassLike = e.target.classList.contains("AllComment_Container_item_statistic_disLike_svg")
    const haveClassDisLike = e.target.classList.contains("AllComment_Container_item_statistic_like_svg")

    if(haveClassLike || haveClassDisLike){
    const svg = e.target.querySelector("path").style.fill
    const path =  e.target.querySelector("path")
    
    if(haveClassLike){
        
    }


    if(svg === uhliked){
        path.style.fill = liked

        e.target.classList.contains("AllComment_Container_item_statistic_like_svg") ? countLike.textContent = +countLike.textContent + 1 : ''

       
        
        
    }else if(svg === liked){
        path.style.fill = uhliked

        e.target.classList.contains("AllComment_Container_item_statistic_like_svg") ? countLike.textContent = +countLike.textContent - 1 : ''
        
    }
    }
    


})

   
}