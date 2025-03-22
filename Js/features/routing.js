import Navigo from "navigo";

const router = new Navigo('/')

router.on("/Home", ()=>{
    console.log("Home page")
})
router.on("/Gaming", ()=>{
    console.log("Gaming page")
})
router.on("/Profile", ()=>{
    console.log("ProfilePage page")
})
router.resolve()

export function setNewUrl(Page){
    const url = window.location.search
    router.navigate(`${Page}${url}`)
}


// import { LoadVideo } from "./LoadVideo.js"
// import { state, ViewChannel} from "./ReExportFeatures.js"

// let defaultUrl = window.location.href


// let prevUrl;
// export function addToPushState(data, url){
  
//   const urlPage = window.location.href

//   const checkUrl = urlPage.slice(urlPage.length - url.length, urlPage.length)

//   if(checkUrl === url)return

//   let ChangedURL = ClearUrl() + url

//   history.replaceState("", '', ClearUrl())

//   history.pushState(data, '', ChangedURL)

// }




// window.addEventListener("popstate", ()=>{
//  console.log(history.state)
//  console.log(prevUrl)
//   // dataHistroy.forEach(settings=>{
//   //   if(settings.namePage === history.state.namePage){
//   //     settings.do()
//   //   }
//   // })

 
// })


// function ClearUrl(){
//   for(let i = 0; i < transitionURL.length; i+=1){
//     defaultUrl = defaultUrl.replaceAll(transitionURL[i], '')
//   }
//   return defaultUrl
// }
// const dataHistroy = [
//   {
//     namePage:"Home",
//     do:()=>LoadVideo()
//   },
//   {
//     namePage:"Profile",
//     do:()=>ViewChannel(state.acessToken)
//   },
//   {
//     namePage:"Gaming",
//     do:()=>console.log("...Load Gaming Video")
//   }
// ]

// export function getClearUrl(){
//     let currUrl = window.location.pathname
//     // for(let i = 0; i < transitionURL.length; i+=1){
//     //     currUrl = currUrl.replaceAll(transitionURL[i], '')
//     // }
//     return currUrl
// }

