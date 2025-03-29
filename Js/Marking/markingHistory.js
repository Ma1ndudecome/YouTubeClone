
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
                                </svg></span> Clear all watch history
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
export function markinHistoryVideoHistory(videoImg, videoName, chanelName, countViews, overview, id, duration) {
    return `
    <div idVideo = "${id}" class="container-video chooseVideo" style="display: flex;">
<div class="video-img-conteiner"><img
        src="${videoImg}"
        alt="">
          <span class="Container_video_preview_duration">${duration}</span></div>
<div class="overview">
<div class="contain-name-btn" style="display: flex; flex-direction: row;">
  <h3 class="nameVideo" >${videoName}</h3>
  <div class="container-settings">
    <div class="delete-video">
      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
        <path d="m12.71 12 8.15 8.15-.71.71L12 12.71l-8.15 8.15-.71-.71L11.29 12 3.15 3.85l.71-.71L12 11.29l8.15-8.15.71.71L12.71 12z"></path>
      </svg>
    </div>
    <div class="options">
      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
        <path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path>
      </svg>
    </div>
  </div>
</div>
    <div class="chanel-info">
        <span class="name-chanel nameChannelSelect">${chanelName}</span>
        <div style="display:inline-block; font-size:1rem; color:#aaa;" >•</div>
        <span class="count-views">${countViews}</span>
    </div>
    <p class="overview-video">${overview}</p>
</div>`
}