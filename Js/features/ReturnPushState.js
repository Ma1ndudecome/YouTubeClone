import { LoadVideo } from "./LoadVideo.js"
export function addToPushState(data, url){
  const urlPage = window.location.href
  const checkUrl = urlPage.slice(urlPage.length - 5, urlPage.length)
  if(checkUrl === url){
    return
  }
  const ChangedURL = urlPage + url
  history.pushState(data, '', ChangedURL)
}

window.addEventListener("popstate", ()=>{
  if(history.state.namePage === "Home"){
    LoadVideo()
  }
  console.log(history.state)
})


