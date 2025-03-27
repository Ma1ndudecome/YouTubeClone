import { container } from "../features/ReExportFeatures.js";
import { markinHistory, markinHistoryVideo, markinHistoryVideoHistory } from "../Marking/reExportMarking.js";
import { formatDuration, fromViewToShortView } from "../untils/reExportUntils.js";
const historyBtn = document.querySelector(".history")
export let arrDataVideo = []



if (localStorage.getItem("History")) {
    arrDataVideo = JSON.parse((localStorage.getItem("History")))
}
const isAcc = checkNameAccountHistory(localStorage.getItem("nameAccount"))

function loadData(conteinerVideo) {
    if (!isAcc) {
        return
    }

    isAcc.history.forEach((item) => {
        conteinerVideo.insertAdjacentHTML("afterbegin", markinHistoryVideoHistory(
            item.snippet.thumbnails.high.url,
            item.snippet.title,
            item.snippet.channelTitle,
            fromViewToShortView(item.statistics.viewCount),
            item.snippet.description, item.id
        ,formatDuration(item.contentDetails.duration)))
    })
}

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
        containVideo.innerHTML = "";
        isAcc.history = [];
        localStorage.setItem("History", JSON.stringify(arrDataVideo));


    }
}


export function deleteVideoOnBtn(e) {
    e.target.closest(".container-video").remove()
    const idForDeleteVideo = e.target.parentElement.parentElement.parentElement.parentElement.attributes[0].nodeValue
    isAcc.history = isAcc.history.filter((el) => el.id !== idForDeleteVideo)
    localStorage.setItem("History", JSON.stringify(arrDataVideo))
}

export function checkNameAccountHistory(nameAccount) {
    return arrDataVideo.find(({ name }) => name === nameAccount)
}





