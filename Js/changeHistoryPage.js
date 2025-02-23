import { container } from "./LoadVideo.js";
const historyBtn = document.querySelector(".history")
import { markinHistory, markinHistoryVideo } from "./Marking/markingHistory.js";
import { fromViewToShortView } from "./ViewToViewLikeToLike.js";

export let arrDataVideo = []


if (localStorage.getItem("history")) {
    arrDataVideo = JSON.parse((localStorage.getItem("history")))
}

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

historyBtn.onclick = (event) => {
    event.preventDefault()
    console.log("!!!")
    container.innerHTML = markinHistory()
    container.classList.remove("grid")
    container.style.display = "block"
    const conteinerHistoryVideo = document.querySelector(".main-history-container")
    console.log(conteinerHistoryVideo)
    loadData(conteinerHistoryVideo)

}






