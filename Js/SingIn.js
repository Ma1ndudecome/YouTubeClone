
const SingButton = document.querySelector(".SignIn_element")
SingButton.onclick = (e)=>{
    e.preventDefault()
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/youtube.force-ssl&redirect_uri=${redirectUri}&response_type=code&client_id=${cliendId}&access_type=offline`;
}

export function lisnerToLike(){
   const containerComment =  document.querySelector(".AllComment_Container")
   containerComment.addEventListener("click", (e)=>{
    console.log(e)
    const constSvg = document.querySelector(".AllComment_Container_item_statistic_like_svg")
    if(e.target.parentElement.classList.contains("AllComment_Container_item_statistic_like_svg")){
        e.target.parentElement.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"></path></svg>
        `
        e.target.remove()
       
        
    }
   })
}