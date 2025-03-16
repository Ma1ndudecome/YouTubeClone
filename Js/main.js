
import "./gaming.js"; import "./features/LoadVideo.js"; import "./api/PostToToken.js"; import "./UI/Listners.js"; import "./features/ReturnPushState.js"; import "./UI/HeaderANDAside.js"; import "./UI/changeHistoryPage.js"
import { markProfile, openVideoEverywere } from "./untils/HelpsFunction.js"
const main = document.querySelector(".Main_container")
import { state } from "./features/changeData.js";
import { deleteVideoOnBtn } from "./UI/changeHistoryPage.js";
import { mas } from "./infinityScrollInProfile.js";
console.log(1123)
main.addEventListener("click", async (e) => {
    main.classList.remove("grid")
    if (e.target.classList.contains("delete-video")) {
        deleteVideoOnBtn(e)
        return;
    }
    if (e.target.closest(".chooseVideo")) {
        if (e.target.classList.contains("nameChannelSelect")) {
            const nameChannel = e.target.textContent
            markProfile(main, nameChannel)
            isVideo = true
        } else {
            openVideoEverywere(e, ".chooseVideo", 1, main)
        }
    } else if (e.target.closest(".chooseVideoProfile")) {
        openVideoEverywere(e, ".chooseVideoProfile", 2, main)


    }
})


export function inserEl(el, positon, marking) {
    el.insertAdjacentHTML(positon, marking)
}





