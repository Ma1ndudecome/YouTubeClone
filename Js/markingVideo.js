
export function makeMarkingVideo(logoVideo, logoChannel, titleVideo, nameChannel, watch, date) {
    return `
            <div class="Main_container_video">
                    <img src="${logoVideo}" alt="" class="Main_container_video_preview">
                    <div class="Main_container_video_info">
                        <div class="Main_container_video_info_logo">
                            <img src="${logoChannel}" alt="">
                        </div>
                        <div class="Main_container_video_title">
                            <h3 class="Main_container_video_title_paragraph">${titleVideo}</h3>
                            <div class="Main_container_video_title_info">
                                <div class="Main_container_video_title_info_name">${nameChannel}</div>
                                <div class="Main_container_video_title_info_statistic"><span class="watch">${watch}</span> <span class="date">${date}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
    `
}
