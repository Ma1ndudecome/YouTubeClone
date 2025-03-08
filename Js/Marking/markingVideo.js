
export function makeMarkingVideo(logoVideo, logoChannel, titleVideo, nameChannel, watch, date, duration, id) {
    return `
            <div class="Main_container_video" idVideo="${id}">
                <div class="Main_container_preview">
                    <img src="${logoVideo}" alt="" class="Main_container_video_preview">
                    <span class="time">${duration}</span>
                </div>
                    
                    <div class="Main_container_video_info">
                        <div class="Main_container_video_info_logo">
                            <img src="${logoChannel}" alt="" class="VideoLogoChannel">
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


