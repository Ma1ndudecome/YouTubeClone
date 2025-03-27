import NodeCache from "node-cache";
import { CachedVideo } from "./reExportUntils";
const cache = new NodeCache({stdTTL:600})

export function createStructureSaved(typeVideo, video){
    return {
        type:typeVideo,
        data:video
    }
}
export function addSavedElements(dateOneVideo){
    console.log('dataVideo', dateOneVideo)
    CachedVideo.push(dateOneVideo)
    cache.set("cachedData", CachedVideo)
    console.log(cache.get("cachedData"))
}