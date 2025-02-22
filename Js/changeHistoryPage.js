import { container } from "./LoadVideo.js";
const historyBtn = document.querySelector(".history")
import { markinHistory, markinHistoryVideo } from "./Marking/Marking.js";

let arrDataVideo = [
    {
        videoImg: "",
        videoName: "yura",
        chanelName: "uralohtv",
        countViews: "11111",
        videoId: "",                    // ! Обязательно должен быть!!
        overview: "bwgbwiubwiweiwgiwebgiwebiewg",

    }
    ,
    {
        videoImg: "",
        videoName: "vlad",
        chanelName: "vladloh",
        countViews: "1241",
        overview: "ondfiwengowengwenowegn",

    }
    ,
    {
        videoImg: "",
        videoName: "vlad",
        chanelName: "vladloh",
        countViews: "1241",
        overview: "ondfiwengowengwenowegn",

    }
    ,
    {
        videoImg: "",
        videoName: "vlad",
        chanelName: "vladloh",
        countViews: "1241",
        overview: "ondfiwengowengwenowegn",

    }
]



historyBtn.onclick = (event) => {
    event.preventDefault()
    console.log("!!!")
    container.innerHTML = markinHistory()
    const conteinerHistoryVideo = document.querySelector(".main-history-container")
    loadData(conteinerHistoryVideo)

}

async function loadData(conteinerVideo) {
    try {
        arrDataVideo.forEach(({ videoImg, videoName, countViews, chanelName, overview }) => {
            conteinerVideo.insertAdjacentHTML("beforeend", markinHistoryVideo(videoImg, videoName, chanelName, countViews, overview))
        })

    }
    catch (err) {
        console.error(err);
        console.log("not vide0")

    }
}




