
let explore = document.getElementById("explore")




import { container } from "./LoadVideo.js";
const gamingBtn = document.querySelector(".gaming")
import { makeMarkingVideo } from "./Marking/markingVideo.js";
import { forYouVideoMarking } from "./Marking/profileVideoMarking.js";


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
const api = "AIzaSyCFu1QzAAsJ_9JvYabdhTUkwZZybn0rp_4"

gamingBtn.onclick = (event) => {
    event.preventDefault()



    const conteinerHistoryVideo = document.querySelector(".Main_container")
    //loadData(conteinerHistoryVideo)

    axios.get(`https://www.googleapis.com/youtube/v3/search?https://www.googleapis.com/youtube/v3/search?part=snippet&q=gaming&type=video&videoCategoryId=20&maxResults=20&key=${api}`)
        .then(
            ({ data }) => {
                const IDVideo = data.items.map(el => el.id.videoId).join(',')
                axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${IDVideo}&key=${api}`)
                    .then(({ data }) => {
                        const IDa = data.items.map(el => el.snippet.title).join(',');
                        const logoVideo = data.items.map(el => el.snippet.thumbnails.standard["url"]).join(',');
                        const titleVideo = data.items.map(el => el.snippet.title).join(',');
                        const nameChannel = data.items.map(el => el.snippet.channelTitle).join(',');
                        const watch = data.items.map(el => el.statistics.viewCount).join(',');
                        const date = data.items.map((el) => {
                            const day = new Date(el.snippet.publishedAt);
                            const m = ["January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"];

                            const str_op = day.getDate() + ' ' + m[day.getMonth()] + ' ' + day.getFullYear();

                            return str_op
                        }).join(',');
                        const id = data.items.map(el => el.id).join(',');
                        const duration = data.items.map((el)=>{  
                            
                                let match = el.contentDetails.duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
                                
                               // let  hours = (match[1] || "").replace("H", "") || 0;
                                //let  minutes = (match[2] || "").replace("M", "") || 0;
                                //const seconds = (match[3] || "").replace("S", "") || 0;
                            console.log(match)
                                //return `${hours > 0 ? hours + " год " : ""}${minutes > 0 ? minutes + " хв " : ""}${seconds > 0 ? seconds + " сек" : ""}`;
                            
                            
                            
                        }).join(',');
                        //const itemVideo = data.items[0].map(el => el.snippet).join(',')
                        console.log(data["items"][0])



                        console.log(duration)


                    })

            })
    //console.log(data)



}


async function loadData(conteinerVideo) {
    try {
        arrDataVideo.forEach(({ videoImg, videoName, countViews, chanelName, overview }) => {
            console.log(videoImg, videoName, chanelName, countViews, overview)

            conteinerVideo.insertAdjacentHTML("beforeend", makeMarkingVideo(videoImg, videoName, chanelName, countViews, overview))
        })

    }
    catch (err) {
        console.error(err);
        console.log("not vide0")

    }
}








/*
button.addEventListener('click', (e)=>{
    some()
    
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=gaming&type=video&videoCategoryId=20&maxResults=20&key=${APIKEY}`)
    .then(({data})=>{
        const IDVideo = data.items.map(el => el.id.videoId).join(',')
         axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${IDVideo}&key=${APIKEY}`)
        .then(data=>{
            data.items.forEach(el=>{
                if(el.snippet.liveBroadcastContent='none'){
                    const date = new Date(el.snippet.publishedAt)
                    const result = dateFns.formatDistanceToNow(date, { addSuffix: true })
                    container.insertAdjacentHTML("beforeend", makeMarkingVideo(result,formatDuration(el.contentDetails.duration)),el.id)
                }
                
            })
        
        }
        )
    })
})









*/



