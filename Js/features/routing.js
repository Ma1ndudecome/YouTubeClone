import { state } from "../URL/createObject.js";
import Navigo from "navigo";
import { params, URL} from '../main.js'
import { container, LoadVideo } from "./LoadVideo.js";
import { on } from "process";
import {ViewChannel } from "./changeData.js";
import { openTranding, openShortsVideo, clickNews, clickSports, clickCourses, clickFashion, clickGaming} from "../UI/reExportUI.js";
import { getContentAndAddMarking } from "../UI/reExportUI.js";
import { markProfile } from "../untils/HelpsFunction.js";
const router = new Navigo('/')

export function setNewUrl(Page){
    console.log('urlAdded', Page)
    const url = window.location.search
    router.navigate(`${Page}${url}`)
}


function checkUrlRouting(){
   setTimeout(()=>{
    router
    .on("/Home", ()=>{
        // LoadVideo()
    })
    .on("/Gaming", ()=>{
        clickGaming()
    })
    .on("/Profile", ()=>{
        ViewChannel(state.acessToken)
    })
    .on("/Profile/:id/", (value)=>{
        console.log(value)
        const text = value.data.id
        const nameChannel = text.slice(1, text.length)
        markProfile(container, nameChannel)
    })
    .on("/Search/:q/", (value)=>{
        const text = value.data.q
        const inputValue = text.slice(1, text.length)

       getContentAndAddMarking(inputValue)
    })
    .on("/Trending", ()=>{

        openTranding()
    })
    .on("/Shorts", ()=>{
        openShortsVideo()
    })
    .on("/News", ()=>{
        clickNews()

    })
    .on("/Sports", ()=>{
        clickSports()
    })
    .on("/Courses", ()=>{
        clickCourses()
    })
    .on("/Fashion", ()=>{
        clickFashion()
    })
    .on("/Video/:id", ()=>{
        container.innerHTML = state.videMarking

    })
    router.resolve() 
   },0)
     
}
checkUrlRouting()