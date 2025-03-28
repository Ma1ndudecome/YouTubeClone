
import { CachedVideo } from "./reExportUntils";


export function createStructureSaved(typeVideo, video){
    return {
        type:typeVideo,
        data:video
    }
}
export function addSavedElements(dateOneVideo){
    CachedVideo.push(dateOneVideo)
    localStorage.setItem("ChachedData", JSON.stringify(CachedVideo))

}
export function checkedType(typeVideo){
   const arr = JSON.parse(localStorage.getItem("ChachedData"))
   if(!arr)return
   const some = arr.filter(({type}) => type === typeVideo)
   return some.length === 0 ? null : some
   
}