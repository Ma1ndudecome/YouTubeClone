import { buttonLoadMoreFnc } from "./Listners.js";
import { container } from "./features/LoadVideo.js";
const historyBtn = document.querySelector(".history")
import { markinHistory, markinHistoryVideo } from "./Marking/markingHistory.js";
import { fromViewToShortView } from "./untils/ViewToViewLikeToLike.js";

export let arrDataVideo = []



if (localStorage.getItem("history")) {
    // console.log(localStorage.getItem("history"))
    arrDataVideo = JSON.parse((localStorage.getItem("history")))
    
}
console.log(arrDataVideo)
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
    container.innerHTML = markinHistory()
    container.classList.remove("grid")
    container.style.display = "block"

    const clearHistoryBtn = container.querySelector(".clear-history")
    clearHistoryBtn.onclick = (event) => {
        console.log('213')
        const containVideo = container.querySelector(".main-history-container");
        // console.log(containVideo)
        // if (containVideo) {
        //     containVideo.innerHTML = "";
        // }
        // arrDataVideo = [];                                
        // localStorage.removeItem("history");
    }

    const conteinerHistoryVideo = document.querySelector(".main-history-container")
    loadData(conteinerHistoryVideo)

    const main = document.querySelector(".Main")
    main.addEventListener("click", (event) => {
        if (!event.target.classList === "delete-video") {
            return
        }
        // const delVideo = event.target.parentElement.parentElement.parentElement.parentElement
        // delVideo.remove()
        // const idForDeleteVideo = event.target.parentElement.parentElement.parentElement.parentElement.attributes[0].nodeValue
        // arrDataVideo = arrDataVideo.filter((el) => el.id !== idForDeleteVideo)
        // localStorage.setItem("history", JSON.stringify(arrDataVideo))
    })


}






