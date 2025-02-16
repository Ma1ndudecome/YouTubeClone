import { container } from "./LoadVideo.js"
import { state } from "./changeData.js"

window.addEventListener("popstate", ()=>{
  const currentUrl = location.href;
 
  if(currentUrl.length === lastUrl.length){
    history.pushState(null, "", location.href);
    container.innerHTML = state.prevMarking
  }else{
    return
  }
 
})
