import { container } from "./LoadVideo.js"
import { markingProfile } from "./Marking/MarkingIcon.js"
export function changeProfile(profileImg, profileName, profileCustomUrl){
    document.querySelector(".sing_int").innerHTML = markingProfile(profileImg, profileName, profileCustomUrl)
    document.body.onclick = (e)=>{
        if(e.target.parentNode.classList.contains("profileImg")){
             const info = document.querySelector(".profileImg_Info")
            info.classList.toggle("show")
        }else if(!e.target.closest(".profileImg_Info")){
            
            const info = document.querySelector(".profileImg_Info")
            info.classList.remove("show")
        }
    }
    document.querySelector(".profileImg_Info").addEventListener("click", ({target})=>{
      if(target.textContent !== 'View your channel'){
        return
      }
      const info = document.querySelector(".profileImg_Info")
      info.classList.remove("show")
      
    })
}

