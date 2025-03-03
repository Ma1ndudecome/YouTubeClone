import { aside } from "./HeaderANDAside.js";
import { container } from "./LoadVideo.js";
import { makeMarkingVideo } from "./Marking/markingVideo.js";
import { fromViewToShortView } from "./ViewToViewLikeToLike.js";
import { TakeTrending } from "./AllApiRequest.js";
import { formatDuration } from "./FromISOToTime.js";

aside.addEventListener('click', async (e) => {
    e.preventDefault()
    container.classList.add('grid');
    container.classList.remove('block');
    const nameSection = e.target.parentNode.querySelector("p").textContent;
    if (nameSection === 'Trending') {
        const respone = await TakeTrending();
        console.log(respone)
        respone.data.items.forEach(el=>{
            const date = new Date(el.snippet.publishedAt)
            const result = dateFns.formatDistanceToNow(date, { addSuffix: true })
            container.insertAdjacentHTML("beforeend", makeMarkingVideo(el.snippet.thumbnails.high.url, el.snippet.thumbnails.default.url, el.snippet.title, el.snippet.channelTitle, fromViewToShortView(el.statistics.viewCount), result, formatDuration(el.contentDetails.duration), el.id));
        })
    }
})











// const cont = document.querySelector(".container")
// axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=20&videoDuration=short&chart=mostPopular&maxResults=20&key=${APIKEY}`)
// .then(data=>{
//     const IDVideo = data.data.items.map(el => el.id.videoId).join(',')
//     axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${IDVideo}&key=${APIKEY}`)
//     .then(response=>{
//         response.items.forEach(el=>{
//             const date = new Date(el.snippet.publishedAt)
//             const result = dateFns.formatDistanceToNow(date, { addSuffix: true })
//             cont.insertAdjacentHTML("beforeend", makeMarkingPupular()) 
//         })
        
//     })
// })