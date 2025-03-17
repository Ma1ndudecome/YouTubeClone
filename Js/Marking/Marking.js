
import { fromViewToShortView } from "../untils/ViewToViewLikeToLike.js"
import { fromLikeToShortLike } from "../untils/ViewToViewLikeToLike.js"

export function markingProfile(backgorundProfile, profileImg, customUrl, subscribers, countVideos, titleChannel) {
    return `
                       <div class="container_channel dF aiC fdC">
                    <div class="Main_container_Header">
                        <img src="${backgorundProfile}" alt="">
                     </div>
                    <div class="Header_channel_info dF">
                        <div class="Header_channel_info_img">
                            <img src="${profileImg}" alt="">
                        </div>
                        <div class="Header_channel_info_chaneel dF fdC jcC">
                            <h1>${titleChannel}</h1>
                            <p class="chaneel_info dF"><span>${customUrl}</span>•<span>${subscribers} subscribers</span>•<span>${countVideos} videos</span></p>
                            <p class="more_info">More about this channel <span>...more</span></p>
                        </div>
                    </div>
                    <div class="container_channel_navigation dF ">
                        <div class="container_channel_navigation_item borderBottom">Home</div>
                        <div class="container_channel_navigation_item">Videos</div>
                        <div class="container_channel_navigation_item">Shorts</div>
                    </div>
                    <div class="line"></div>
                     <div class="Header_Main_container_video">
                     <div class="Header_Main_container_video_main">
                        <h1>For You</h1>
                        <div class="ForYou_Container_video dF">
                                 
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="Shorts_container">
                        <div class="Shorts_container_title dF aiC">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="red" width="24" height="24" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                                <path class="svgShorts" d="m19.45,3.88c1.12,1.82.48,4.15-1.42,5.22l-1.32.74.94.41c1.36.58,2.27,1.85,2.35,3.27.08,1.43-.68,2.77-1.97,3.49l-8,4.47c-1.91,1.06-4.35.46-5.48-1.35-1.12-1.82-.48-4.15,1.42-5.22l1.33-.74-.94-.41c-1.36-.58-2.27-1.85-2.35-3.27-.08-1.43.68-2.77,1.97-3.49l8-4.47c1.91-1.06,4.35-.46,5.48,1.35Z" fill="#f03"></path>
                                <path d="m10,15l5-3-5-3v6Z" fill="#fff"></path>
                            </svg>
                            Shorts
                        </div>
                        <div class="Shorts_video_container dF">
                               
                        </div>
                       
                    </div>
                    </div>
                </div>
    `
}

export function InfoAboutChannel(countSubscribe, countVideo, countViews, accountCreat) {
    const dateString = accountCreat
    const parsedDate = dateFns.parseISO(dateString);
    const formattedDate = dateFns.format(parsedDate, "MMM d, yyyy")
    return `
   <div class="backdropInfo dF aiC jcC">
        <div class="block_info dF jcC aiC fdC">
            <div class="block_info_header dF jcsB aiC">
                <h1>About</h1>
                <svg class="closeMoreInfoBtn" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="m12.71 12 8.15 8.15-.71.71L12 12.71l-8.15 8.15-.71-.71L11.29 12 3.15 3.85l.71-.71L12 11.29l8.15-8.15.71.71L12.71 12z"></path></svg>
            </div>
            <div class="block_info_main dF fdC jcC">
                <h1>Channel details</h1>
                    <div class="subscriber dF">
                        <div class="subscriber_svg">
                                               <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M11.72 11.93C13.58 11.59 15 9.96 15 8c0-2.21-1.79-4-4-4S7 5.79 7 8c0 1.96 1.42 3.59 3.28 3.93C4.77 12.21 2 15.76 2 20h18c0-4.24-2.77-7.79-8.28-8.07zM8 8c0-1.65 1.35-3 3-3s3 1.35 3 3-1.35 3-3 3-3-1.35-3-3zm3 4.9c5.33 0 7.56 2.99 7.94 6.1H3.06c.38-3.11 2.61-6.1 7.94-6.1zm5.68-1.46-.48-.88C17.31 9.95 18 8.77 18 7.5s-.69-2.45-1.81-3.06l.49-.88C18.11 4.36 19 5.87 19 7.5c0 1.64-.89 3.14-2.32 3.94zm2.07 1.69-.5-.87c1.7-.98 2.75-2.8 2.75-4.76s-1.05-3.78-2.75-4.76l.5-.87C20.75 3.03 22 5.19 22 7.5s-1.24 4.47-3.25 5.63z"></path></svg>

                        </div>
                        <div class="subscriber_text dF aiC">
                            ${countSubscribe} subscribers
                        </div>
                    </div>
                    <div class="block_info_main_video dF">
                        <div class="block_info_main_video_svg">
                           <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" ><path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"></path></svg>
                        </div>
                          <div class="block_info_main_video_text dF aiC">
                            ${countVideo} videos
                        </div>
                    </div>
                     <div class="block_info_main_view dF">
                        <div class="block_info_main_video_view">
                           <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M22 6v7h-1V7.6l-8.5 7.6-4-4-5.6 5.6-.7-.7 6.4-6.4 4 4L20.2 7H15V6h7z"></path></svg>
                        </div>
                          <div class="block_info_main_view_text dF aiC">
                            ${fromViewToShortView(countViews)}
                        </div>
                    </div>
                    <div class="block_info_main_dateCreated dF">
                        <div class="block_info_main_video_dateCreated">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M13 17h-2v-6h2v6zm0-10h-2v2h2V7zm-1-4c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path></svg>
                        </div>
                          <div class="block_info_main_dateCreated_text dF aiC">
                            Joined ${formattedDate}
                        </div>
                    </div>
            </div>
        </div>
    </div>
    `
}
export function markingShowMore(dateRequests, dataProfile, countSubs) {
    return `
    <div class="containerShowMore">
      <div class="TranscriptVideo dF fdC">
            <h1>Transcript</h1>
            <p>Follow along using the transcript</p>
            <button>Show transcript</button>
        </div>
        <div class="Main_container_blockInfo_description_channel dF">
                <div class="description_channel_img">
                <img src="${dataProfile}" alt="">
             </div>
            <div class="description_channel_container">
                <div class="description_channel_container_title">${dateRequests[0].snippet.channelTitle}</div>
                <div class="description_channel_container_subscribers">${fromLikeToShortLike(countSubs)} subscribers</div>
            </div>
        </div>
        <div class="containerShowMore_aboutChannel dF">
            <div class="containerShowMore_aboutChannel_videos dF aiC jcsB">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"></path></svg>
                <span>Videos</span>
            </div>
            <div class="containerShowMore_aboutChannel_About dF aiC jcsB">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M4 20h14v1H3V6h1v14zM6 3v15h15V3H6zm2.02 14c.36-2.13 1.93-4.1 5.48-4.1s5.12 1.97 5.48 4.1H8.02zM11 8.5a2.5 2.5 0 015 0 2.5 2.5 0 01-5 0zm3.21 3.43A3.507 3.507 0 0017 8.5C17 6.57 15.43 5 13.5 5S10 6.57 10 8.5c0 1.69 1.2 3.1 2.79 3.43-3.48.26-5.4 2.42-5.78 5.07H7V4h13v13h-.01c-.38-2.65-2.31-4.81-5.78-5.07z"></path></svg>
                <span>About</span>
            </div>
        </div>
    </div>
    `
}
export function marcinSubscriben(img_profile, title_profile) {
    return `
    <div class="block_list_sing_int_subscription dF aiC">
         <img class="block_list_sing_int_subscription_img" src="${img_profile}" alt="">
            <div class="block_list_sing_int_subscription_title">${title_profile}</div>
    </div>`
}
export function markingGaming() {
    return `
        <div class="boxtxtGaming" style=" display: flex" >
                         <div  class="iconTxtGaming">
                            <svg width='54' height='54' viewBox='0 0 34 34' xmlns='http://www.w3.org/2000/svg'
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
                   
                   <div class = "iconTxtGaming">
                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
                     <path d="M 15.886719 1 C 14.974131 1 14.077693 1.2286385 13.287109 1.65625 L 5.5664062 5.7207031 L 5.5664062 5.71875 C 3.7637541 6.6652034 2.6367187 8.5322799 2.6367188 10.566406 C 2.6367188 11.911504 3.2225585 13.082394 4.046875 14.046875 C 3.2161002 15.0216 2.6367187 16.195885 2.6367188 17.521484 C 2.6367188 20.532674 5.1018215 23 8.1132812 23 C 9.0303925 23 9.9287625 22.773103 10.716797 22.341797 L 18.292969 18.353516 L 18.259766 18.369141 C 20.151702 17.459981 21.363281 15.531898 21.363281 13.433594 C 21.363281 12.088496 20.777441 10.917606 19.953125 9.953125 C 20.783897 8.9783946 21.363281 7.8041153 21.363281 6.4785156 C 21.363281 3.4673258 18.898179 1 15.886719 1 z M 15.886719 3 C 17.813259 3 19.363281 4.5517054 19.363281 6.4785156 C 19.363281 7.5499776 18.888956 8.5222239 18.080078 9.1777344 L 17.121094 9.9550781 L 18.080078 10.732422 C 18.871608 11.373406 19.363281 12.344494 19.363281 13.433594 C 19.363281 14.75529 18.584642 15.993566 17.392578 16.566406 L 17.376953 16.574219 L 9.7636719 20.583984 L 9.7578125 20.587891 C 9.2778524 20.850605 8.6961702 21 8.1132812 21 C 6.1867412 21 4.6367188 19.448295 4.6367188 17.521484 C 4.6367188 16.450022 5.1110438 15.477776 5.9199219 14.822266 L 6.8789062 14.044922 L 5.9199219 13.267578 C 5.1283915 12.626594 4.6367188 11.655506 4.6367188 10.566406 C 4.6367188 9.266533 5.3427459 8.095781 6.4960938 7.4902344 L 6.4980469 7.4902344 L 14.232422 3.4179688 L 14.238281 3.4140625 C 14.729251 3.1482632 15.309951 3 15.886719 3 z M 10 9 L 10 15 L 15 12 L 10 9 z"></path>
                 </svg>
                  <span class="txtg">    Shorts </span>
                  </div>

                    <div class="shorts-video-conteiner" ></div>

                    <br>
                    <div class="txtg"> Пропоноване</div>
                    
                    <div class="Container-video-gaming grid"></div>
                    `
}

export function markinHistory() {

    return `
           <div class="history-header-contain ">
                <div class="history-header-inner-contain">
                    <h1 class="history-header-text-h1">
                        <span class="history-header-text">Watch history</span>
                    </h1>
                </div>
            </div>
                <div class="conteiner-history dF fdR">
                <div class="main-history-container block  ">
                </div>
                    <div class="history-nav-menu dF fdC">
                    <div class="history-search dF">
                        <div style="    font-size: 24px;" class="search-input-history">
                            <svg style="width: 24px; height: 24px;" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false"
                                aria-hidden="true"
                                style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
                                <path clip-rule="evenodd"
                                    d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
                                    fill-rule="evenodd"></path>
                            </svg>
                        </div>
                        <input type="text" class="search-input" placeholder="Search watch history">
                    </div>
                    <hr style="margin-bottom: 20px;" class="divider">
                    <div class="history-filters dF fdC">
                        <button class="filter-btn clear-history ">
                            <span style="margin-right: 5px; height: 24px; width: 24px;" class="filter-btn-icon"><svg style="height: 24px; width: 24px;" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
                                    height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"
                                    style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
                                    <path
                                        d="M11 17H9V8h2v9zm4-9h-2v9h2V8zm4-4v1h-1v16H6V5H5V4h4V3h6v1h4zm-2 1H7v15h10V5z">
                                    </path>
                                </svg></span> Clear all watvh history
                        </button>
                        <button class="filter-btn pause-history">
                            <span  style="margin-right: 5px;  height: 24px; width: 24px;" class="filter-btn-icon"><svg style="height: 24px; width: 24px;" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"
                                    width="24" focusable="false" aria-hidden="true"
                                    style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
                                    <path d="M9 19H7V5h2Zm8-14h-2v14h2Z"></path>
                                </svg></span>Pause watch history
                        </button>
                    </div>
            </div>`
}
export function markinHistoryVideo(videoImg, videoName, chanelName, countViews, overview, id, date, duration) {
    return `
    <div idvideo=${id} class="container-video chooseVideo" style="display: flex; height: 260px;">
        <div class="video-img-conteiner H100 w36P">
            <img src="${videoImg}" alt="">
            <span class="Container_video_preview_duration">${duration}</span>
        </div>
    <div class="overview">
        <span class="nameVideo">${videoName}</span>
        <div class="Container_video_statistic dF aiC m0">
            <span class="count-views fS14">${countViews}</span>•<span class="Container_video_statistics_date ">${date}</span>
        </div>
        <div class="chanel-info dF aiC gap10 mT10p">
            <span class="imgProfile"><img src="${videoImg}"></span>
            <span class="name-chanel nameChannelSelect">${chanelName}</span>
        </div>
    <p class="overview-video mT10p">${overview}</p>
</div>
`
}

