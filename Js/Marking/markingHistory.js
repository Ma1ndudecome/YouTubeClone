import { container } from "../LoadVideo.js";

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
                            <span style="margin-right: 5px; height: 24px; width: 24px;" class="icon"><svg style="height: 24px; width: 24px;" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
                                    height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"
                                    style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
                                    <path
                                        d="M11 17H9V8h2v9zm4-9h-2v9h2V8zm4-4v1h-1v16H6V5H5V4h4V3h6v1h4zm-2 1H7v15h10V5z">
                                    </path>
                                </svg></span> Clear all watvh history
                        </button>
                        <button class="filter-btn pause-history">
                            <span  style="margin-right: 5px;  height: 24px; width: 24px;" class="icon"><svg style="height: 24px; width: 24px;" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"
                                    width="24" focusable="false" aria-hidden="true"
                                    style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
                                    <path d="M9 19H7V5h2Zm8-14h-2v14h2Z"></path>
                                </svg></span>Pause watch history
                        </button>
                    </div>
            </div>`
}
export function markinHistoryVideo(videoImg, videoName, chanelName, countViews, overview) {
    return `
    <div class="container-video " style="display: flex;">
<div class="video-img-conteiner"><img
        src="${videoImg}"
        alt=""></div>
<div class="overview"><a class="nameVideo" href="">${videoName}</a>
    <div class="delete-video"></div>
    <div class="options"></div>
    <div class="chanel-info">
        <a class="name-chanel" href="">${chanelName}</a>
        <span class="count-views">${countViews}</span>
    </div>
    <p class="overview-video">${overview}</p>
</div>`
}