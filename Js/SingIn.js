
const SingButton = document.querySelector(".SignIn_element")
SingButton.onclick = (e)=>{
    e.preventDefault()
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/youtube.force-ssl&redirect_uri=${redirectUri}&response_type=code&client_id=${cliendId}&access_type=offline`;
}

export function lisnerToLike(){
   const containerComment =  document.querySelector(".AllComment_Container")
   const uhliked = `rgba(117, 113, 113, 0)`
   const liked = `rgba(255, 255, 255, 0.71)`
   
   containerComment.addEventListener("click", ({target})=>{

    const haveClassDisLike = target.classList.contains("AllComment_Container_item_statistic_disLike_svg")
    const haveClassLike = target.classList.contains("AllComment_Container_item_statistic_like_svg")

    if(haveClassLike || haveClassDisLike){
    const svg = target.querySelector("path").style.fill
    const path =  target.querySelector("path")
    
    const countLike = target.parentElement.parentElement.querySelector("span")
    if(haveClassLike){
        const parentSvg = target.parentElement.nextElementSibling.children[0]
        if(svg === liked){
            countLike.textContent = +countLike.textContent - 1

        }
        if(parentSvg.classList.contains("activated")){
            parentSvg.querySelector("path").style.fill = uhliked
        }
    }else if(haveClassDisLike){

        const parentSvg = target.parentElement.previousElementSibling.children[0]
        if(parentSvg.classList.contains("activated")){
            parentSvg.querySelector("path").style.fill = uhliked
            countLike.textContent = +countLike.textContent - 1
            parentSvg.classList.remove("activated")
        }
    }

    checkAndGiveLikeDislike(svg, path, uhliked, liked, haveClassLike,haveClassDisLike, countLike, target)
    
    }
    
})
}

function checkAndGiveLikeDislike(svg,path, uhliked, liked, haveClassDisLike, haveClassLike, countLike, target){
    if(svg === uhliked){
        path.style.fill = liked

        haveClassDisLike ? countLike.textContent = +countLike.textContent + 1 : ''
        target.classList.add("activated")
    }else if(svg === liked){
        path.style.fill = uhliked
        
        target.classList.remove("activated")
        
    }
}