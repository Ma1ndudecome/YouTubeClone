import { state } from "../URL/createObject.js";
import Navigo from "navigo";
import { params, URL} from '../main.js'
import { LoadVideo } from "./LoadVideo.js";
import { on } from "process";
import {ViewChannel } from "./changeData.js";
import { openTranding, openShortsVideo, clickNews, clickSports, clickCourses, clickFashion, clickGaming} from "../UI/reExportUI.js";
import { getContentAndAddMarking } from "../UI/reExportUI.js";
const router = new Navigo('/')

export function setNewUrl(Page){
    console.log('urlAdded', Page)
    const url = window.location.search
    router.navigate(`${Page}${url}`)
}


function checkUrlRouting(){
   
        router
    .on("/Home", ()=>{
        // LoadVideo()
        console.log('load home')
    })
    .on("/Gaming", ()=>{
        clickGaming()
        console.log("load gaming video...")
    })
    .on("/Profile", ()=>{
       
        ViewChannel(state.acessToken)
        console.log('load profile')
    })
    .on("/Profile/:id/", (params, some, some1)=>{
        
    })
    .on("/Search/:q/", (value)=>{
        const text = value.data.q
        const inputValue = text.slice(1, text.length)
        console.log('text', text)
        console.log('inputValue', inputValue)

      getContentAndAddMarking(inputValue)

        console.log('load seatch')
    })
    .on("/Trending", ()=>{
        console.log('load trending')
        // openTranding()
    })
    .on("/Shorts", ()=>{
        console.log('load shorts video')

        // openShortsVideo()
    })
    .on("/News", ()=>{
        // clickNews()

        console.log("load news")
    })
    .on("/Sports", ()=>{
        // clickSports()
        
        console.log("load Sports")

    })
    .on("/Courses", ()=>{
        // clickCourses()

        console.log("load Counrses")

    })
    .on("/Fashion", ()=>{
        
        // clickFashion()

    })
    router.resolve() 
}
checkUrlRouting()