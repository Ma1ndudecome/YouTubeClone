import { state, container } from "./ReExportFeatures.js"
let lastUrl = location.href;//Получаю первоначальное url для popstata

window.addEventListener("popstate", ()=>{
  const currentUrl = location.href;
 
  if(currentUrl.length === lastUrl.length){
    history.pushState(null, "", location.href);
    container.innerHTML = state.prevMarking
  }else{
    return
  }
 
})
