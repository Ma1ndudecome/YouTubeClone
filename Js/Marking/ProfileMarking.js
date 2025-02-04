
import { fromViewToShortView } from "../ViewToViewLikeToLike.js" 
export function markingProfile(backgorundProfile, profileImg, customUrl, subscribers, countVideos) {
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
                            <h1>Ma1n</h1>
                            <p class="chaneel_info dF"><span>${customUrl}</span>•<span>${subscribers} subscribers</span>•<span>${countVideos} videos</span></p>
                            <p class="more_info">More about this channel <span>...more</span></p>
                        </div>
                    </div>
                    <div class="container_channel_navigation dF ">
                        <div class="container_channel_navigation_item">Home</div>
                        <div class="container_channel_navigation_item">Videos</div>
                        <div class="container_channel_navigation_item">Shorts</div>
                        <div class="container_channel_navigation_item">Live</div>
                    </div>
                    <div class="line"></div>
                     <div class="Header_Main_container_video">
                        <div class="ForYou_Container_leftArrow">
                            <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" fill="">
                                <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#0F0F0F"/>
                            </svg>
                        </div>
                        <div class="ForYou_Container_rightArrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" style="transform: rotate(175deg)">
                                <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#0F0F0F"/>
                            </svg>
                        </div>
                         <div class="Shorts_Container_leftArrow">
                            <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" fill="">
                                <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#0F0F0F"/>
                            </svg>
                        </div>
                        <div class="Shorts_Container_rightArrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" style="transform: rotate(175deg)">
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
                </div>
    `
}