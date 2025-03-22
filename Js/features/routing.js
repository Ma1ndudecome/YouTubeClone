import { state } from "../URL/createObject.js";
import Navigo from "navigo";
import { params, URL} from '../main.js'
import { LoadVideo } from "./LoadVideo.js";
import { on } from "process";
import {ViewChannel } from "./changeData.js";
const router = new Navigo('/')

export function setNewUrl(Page){
    const url = window.location.search
    router.navigate(`${Page}${url}`)
}


function checkUrlRouting(){
    router
    .on("/Home", ()=>{
        LoadVideo()
    })
    .on("/Gaming", ()=>{
        console.log("load gaming video...")
    })
    .on("/Profile", ()=>{
        ViewChannel(state.acessToken)
    })
    router.resolve()
}
checkUrlRouting()