import { aside } from "./HeaderANDAside.js";
import { container } from "../features/LoadVideo.js";
import { makeMarkingVideo } from "../Marking/markingVideo.js";
import { TakeTrending } from "../api/AllApiRequest.js";
import { fromViewToShortView,  formatDuration} from "../untils/reExportUntils.js";

aside.addEventListener('click', async (e) => {
    e.preventDefault()
    const nameSection = e.target.parentNode.querySelector("p").textContent;
    if (nameSection === 'Trending') {
        container.classList.add('grid');
        container.classList.remove('block');
        const respone = await TakeTrending();
        console.log(respone)
        respone.data.items.forEach(el=>{
            const date = new Date(el.snippet.publishedAt)
            const result = dateFns.formatDistanceToNow(date, { addSuffix: true })
            container.insertAdjacentHTML("beforeend", makeMarkingVideo(el.snippet.thumbnails.high.url, el.snippet.thumbnails.default.url, el.snippet.title, el.snippet.channelTitle, fromViewToShortView(el.statistics.viewCount), result, formatDuration(el.contentDetails.duration), el.id));
        })
    }
})