// import { LoadVideo } from "./LoadVideo.js"
// import { state, ViewChannel} from "./ReExportFeatures.js"

// let defaultUrl = window.location.href
// const transitionURL = ['/Home', '/Profile', '/Gaming']

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


