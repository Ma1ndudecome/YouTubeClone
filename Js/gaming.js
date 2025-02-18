
let explore = document.getElementById("explore")




import { container } from "./LoadVideo.js";
const gamingBtn = document.querySelector(".gaming")
import { makeMarkingVideo } from "./Marking/markingVideo.js";
import { fromViewToShortView } from "./ViewToViewLikeToLike.js";


import { formatDuration } from "./FromISOToTime.js";



gamingBtn.onclick = (event) => {
    event.preventDefault()
    axios.get(`https://www.googleapis.com/youtube/v3/search?https://www.googleapis.com/youtube/v3/search?part=snippet&q=gaming&type=video&videoCategoryId=20&maxResults=20&key=${APIKEY}`)
        .then(
            ({ data }) => {
                const IDVideo = data.items.map(el => el.id.videoId).join(',')
                axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${IDVideo}&key=${APIKEY}`)
                    .then(({ data }) => {

                        container.insertAdjacentHTML("beforeBegin", innerGamingText)
                        data.items.forEach(el => {
                            const date = new Date(el.snippet.publishedAt)
                            const result = dateFns.formatDistanceToNow(date, { addSuffix: true })

                            container.insertAdjacentHTML('beforeend', makeMarkingVideo(el.snippet.thumbnails.high.url, el.snippet.thumbnails.default.url, el.snippet.title, el.snippet.channelTitle, fromViewToShortView(el.statistics.viewCount), result, formatDuration(el.contentDetails.duration), el.id))


                        })


                    })

            })



}
let innerGamingText = ` 
             

                    <div class="boxtxtGaming">
                        <div class="iconGaming">
                            <svg width='64' height='64' viewBox='0 0 34 34' xmlns='http://www.w3.org/2000/svg'
                                xmlns:xlink='http://www.w3.org/1999/xlink'>
                                <rect width='24' height='24' stroke='none' rx="15" padding="10" fill=' #FF0033'
                                    opacity='6' />


                                <g transform="matrix(0.42 0 0 0.42 12 12)">

                                    <g transform="matrix(1 0 0 1 0 -0.03)">
                                        <path
                                            style="stroke: rgb(255, 255, 255); stroke-width: 3; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;"
                                            transform=" translate(-24, -23.97)"
                                            d="M 24.3155 13.7581 C 24.1281 13.8986 23.8719 13.8986 23.6845 13.7581 C 22.7294 13.042 19.6378 10.8398 14.8402 8.53175 C 14.1066 8.17887 13.2774 8.07401 12.4987 8.31112 C 10.7564 8.84165 7.40567 10.1661 4.28404 13.1262 C 3.70164 13.6784 3.34921 14.4214 3.26587 15.2196 C 3.06654 17.1289 2.78999 21.0779 3.25256 25.6124 C 3.34435 26.5122 3.76609 27.338 4.44359 27.9371 C 7.03139 30.2257 14.2162 36.1569 22.6659 39.4986 C 23.523 39.8375 24.477 39.8375 25.3341 39.4986 C 33.7839 36.1568 40.9686 30.2257 43.5564 27.9371 C 44.2339 27.3379 44.6556 26.5122 44.7474 25.6124 C 45.21 21.0778 44.9335 17.1288 44.7341 15.2196 C 44.6508 14.4214 44.2984 13.6784 43.716 13.1262 C 40.5943 10.1661 37.2435 8.84165 35.5013 8.31112 C 34.7226 8.07401 33.8933 8.17887 33.1598 8.53175 C 28.3622 10.8398 25.2706 13.042 24.3155 13.7581 Z"
                                            stroke-linecap="round" />
                                    </g>
                                    <g transform="matrix(1 0 0 1 0 2.88)">
                                        <path
                                            style="stroke: rgb(255, 255, 255); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;"
                                            transform=" translate(-24, -26.88)" d="M 24 14 L 24 39.75"
                                            stroke-linecap="round" />
                                    </g>
                                    <g transform="matrix(1 0 0 1 -10 -3)">
                                        <path
                                            style="stroke: rgb(255, 255, 255); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;"
                                            transform=" translate(-14, -21)" d="M 14 17 L 14 25"
                                            stroke-linecap="round" />
                                    </g>
                                    <g transform="matrix(1 0 0 1 -10 -3)">
                                        <path
                                            style="stroke: rgb(255, 255, 255); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;"
                                            transform=" translate(-14, -21)" d="M 18 21 L 10 21"
                                            stroke-linecap="round" />
                                    </g>
                                    <g transform="matrix(1 0 0 1 12 -6)">
                                        <path
                                            style="stroke: rgb(255, 255, 255); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;"
                                            transform=" translate(-36, -18)" d="M 37 18 L 35 18"
                                            stroke-linecap="round" />
                                    </g>
                                    <g transform="matrix(1 0 0 1 8 0)">
                                        <path
                                            style="stroke: rgb(255, 255, 255); stroke-width: 3; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;"
                                            transform=" translate(-32, -24)" d="M 33 24 L 31 24"
                                            stroke-linecap="round" />
                                    </g>
                                </g>

                            </svg>
                            <b class="txtg">Gaming</b>
                        </div>
                       
                    </div>
                    <div class="txtg"> Пропоноване</div>`
