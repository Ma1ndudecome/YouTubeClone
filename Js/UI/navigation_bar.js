import { aside } from "./HeaderANDAside.js";
import { container } from "./features/LoadVideo.js";
import { makeMarkingVideo } from "../Marking/markingVideo.js";
import { fromViewToShortView } from "./ViewToViewLikeToLike.js";
import { TakeTrending } from "../api/AllApiRequest.js";
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