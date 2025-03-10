
import "./gaming.js"; import "./LoadVideo.js"; import "./PostToToken.js"; import "./Listners.js"; import "./ReturnPushState.js"; import "./HeaderANDAside.js";import "./changeHistoryPage.js"
import {  markProfile, addMarkingVideoAndFunctional, openVideoEverywere} from "./HelpsFunction.js"
const main = document.querySelector(".Main_container")


main.addEventListener("click", async (e) => {
    main.classList.remove("grid")
    if(e.target.closest(".chooseVideo")){
        if(e.target.classList.contains("nameChannelSelect")){
            const nameChannel = e.target.textContent
            markProfile(main, nameChannel)
            isVideo = true
        }else{
            openVideoEverywere(e, ".chooseVideo", 1, main)
        }
    }else if(e.target.closest(".chooseVideoProfile")){
        openVideoEverywere(e, ".chooseVideoProfile", 2, main)
    }
})


export function inserEl(el, positon, marking) {
    el.insertAdjacentHTML(positon, marking)
}





