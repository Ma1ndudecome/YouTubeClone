import { fromViewToShortView } from "../untils/ViewToViewLikeToLike.js"

export function forYouVideoMarking(prewievVideo, durationVideo, titleVideo, countWiev, dateV, id) {
     const date = new Date(dateV)
    const result = dateFns.formatDistanceToNow(date, { addSuffix: true })
    return `
    <div class="ForYou_Container_leftArrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="">
            <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#0F0F0F"></path>
        </svg>
    </div>
    <div class="ForYou_Container_rightArrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" style="transform: rotate(180deg)">
            <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#0F0F0F"></path>
        </svg>
    </div>
            <div class="video_box chooseVideoProfile" idVideo="${id}">
        <div class="Container_video_preview">
            <img src="${prewievVideo}" alt="">
            <span class="Container_video_preview_duration">${durationVideo}</span>
        </div>
         <div class="Container_video_title nameChannelSelect">${titleVideo}</div>
        <div class="Container_video_statistic dF">
            <div class="Container_video_statistic_veiw">${fromViewToShortView(countWiev)}</div>
            •
            <div class="Container_video_statistic_date">${result}</div>
        </div>
    </div>`
}
export function shortVideoMarking(previevVideo, titleVideo, countWiev, id) {
    return `
    <div class="Shorts_Container_leftArrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="">
            <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#0F0F0F"></path>
        </svg>
    </div>

    <div class="Shorts_Container_rightArrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" style="transform: rotate(180deg)">вв
            <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#0F0F0F"></path>
         </svg>
    </div>
         <div class="Shorts_video_item" idVideo="${id}">
        <div class="Shorts_video_item_preview">
            <img src="${previevVideo}" alt="">
        </div>
         <div class="Shorts_video_item_info">
            <div class="Shorts_video_item_info_title">${titleVideo}</div>
            <div class="Shorts_container_statistic">${fromViewToShortView(countWiev)}</div>
        </div>
    </div>
    `
}