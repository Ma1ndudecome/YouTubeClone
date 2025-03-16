import { buttonLoadMoreFnc } from "./Listners.js";
import { container } from "../features/LoadVideo.js";
const historyBtn = document.querySelector(".history")
import { markinHistory, markinHistoryVideo } from "../Marking/markingHistory.js";
import { fromViewToShortView } from "../untils/ViewToViewLikeToLike.js";
export let arrDataVideo = []



if (localStorage.getItem("history")) {
    // console.log(localStorage.getItem("history"))
    arrDataVideo = JSON.parse((localStorage.getItem("history")))

}
// console.log(arrDataVideo)
function loadData(conteinerVideo) {
    try {
        arrDataVideo.forEach((item) => {
            conteinerVideo.insertAdjacentHTML("afterbegin", markinHistoryVideo(item.snippet.thumbnails.high.url,
                item.snippet.title,
                item.snippet.channelTitle,
                fromViewToShortView(item.statistics.viewCount),
                item.snippet.description, item.id))
        })
    }
    catch (err) {
        console.error(err);
        console.log("not vide0")
    }
}
console.log(112)

historyBtn.onclick = (event) => {
    event.preventDefault()
    container.innerHTML = markinHistory()
    container.classList.remove("grid")
    container.style.display = "block"
    const conteinerHistoryVideo = document.querySelector(".main-history-container")
    loadData(conteinerHistoryVideo)
    let clearHistoryBtn = container.querySelector(".clear-history")
    clearHistoryBtn.onclick = (event) => {
        const containVideo = container.querySelector(".main-history-container");
        console.log(containVideo)
        containVideo.innerHTML = "";
        arrDataVideo = [];
        localStorage.setItem("history", JSON.stringify(arrDataVideo));


    }
}


export function deleteVideoOnBtn(e) {
    e.target.closest(".container-video").remove()
    const idForDeleteVideo = e.target.parentElement.parentElement.parentElement.parentElement.attributes[0].nodeValue
    arrDataVideo = arrDataVideo.filter((el) => el.id !== idForDeleteVideo)
    localStorage.setItem("history", JSON.stringify(arrDataVideo))
}






