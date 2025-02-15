
import { fromViewToShortView } from "../ViewToViewLikeToLike.js"
import { fromLikeToShortLike } from "../ViewToViewLikeToLike.js"

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
                        <div class="ForYou_Container_leftArrow">
                            <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" fill="">
                                <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#0F0F0F"/>
                            </svg>
                        </div>
                        <div class="ForYou_Container_rightArrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" style="transform: rotate(180deg)">
                                <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#0F0F0F"/>
                            </svg>
                        </div>
                         <div class="Shorts_Container_leftArrow">
                            <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" fill="">
                                <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#0F0F0F"/>
                            </svg>
                        </div>
                        <div class="Shorts_Container_rightArrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" style="transform: rotate(180deg)">вв
                                <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#0F0F0F"/>
                            </svg>
                        </div>
                        <h1>For You</h1>
                        <div class="ForYou_Container_video dF">
                                 
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
                     <div class="container_button_load dF jcC">
                            <button>I'm load more video </button>
                    </div>
                </div>
    `
}

export function InfoAboutChannel(countSubscribe, countVideo, countViews, accountCreat){
    const dateString = accountCreat
    const parsedDate = dateFns.parseISO(dateString);
    const formattedDate  = dateFns.format(parsedDate, "MMM d, yyyy")
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
export function markingShowMore(dateRequests, dataProfile){
    return `
    <div class="containerShowMore">
      <div class="TranscriptVideo dF fdC">
            <h1>Transcript</h1>
            <p>Follow along using the transcript</p>
            <button>Show transcript</button>
        </div>
        <div class="Main_container_blockInfo_description_channel dF">
                <div class="description_channel_img">
                <img src="${dataProfile.infoChannel.img}" alt="">
             </div>
            <div class="description_channel_container">
                <div class="description_channel_container_title">${dateRequests[0].snippet.channelTitle}</div>
                <div class="description_channel_container_subscribers">${fromLikeToShortLike(dataProfile.infoChannel.subscriberCount)} subscribers</div>
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