import { fromLikeToShortLike, fromViewToShortView } from "../untils/ViewToViewLikeToLike.js"
import { dateTime } from "../untils/HelpsFunction.js";
export function MarkingPlayer(id, dateRequests, dataProfile){
    return `
    <div class="ContainerPlayerVideo">
     <iframe width="1236" height="695" src="https://www.youtube.com/embed/${id}?&autoplay=1" title="${dateRequests[0].snippet.localized.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     <div class="Main_container_blockInfo">
                    <h1>${dateRequests[0].snippet.localized.title}</h1>
                    <div class="Main_container_blockInfo_statistic">
                        <div class="Main_container_blockInfo_statistic_leftSide">
                            <div class="leftSide_img">
                                <img src="${dataProfile.img}" alt="">
                            </div>
                            <div class="leftSide_title">
                                <div class="leftSide_title_nameAccount">${dateRequests[0].snippet.channelTitle}</div>
                                <div class="leftSide_title_subscribe">${fromLikeToShortLike(dataProfile.subscriberCount)} subscribers</div>
                            </div>
                            <div class="leftSide_subscribe_button">
                                <button>Subscribe</button>
                            </div>
                            
                        </div>
                        <div class="Main_container_blockInfo_statistic_rightSide">
                            <div class="rightSide_emotion">
                                <div class="rightSide_emotion_like">
                                    <div class="rightSide_emotion_like_svg style="pointer-events: none; display: inherit;">
                                        <svg xmlns="http://www.w3.org/2000/svg"  enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"></path></svg>
                                    </div>
                                    <div class="rightSide_emotion_like_count">
                                        ${fromLikeToShortLike(dateRequests[0].statistics.likeCount)}
                                    </div>
                                </div>
                                <div class="rightSide_emotion_dislike">
                                    <div class="rightSide_emotion_dislike_svg style="pointer-events: none; display: inherit;">
                                        <svg xmlns="http://www.w3.org/2000/svg"  enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M18,4h3v10h-3V4z M5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21c0.58,0,1.14-0.24,1.52-0.65L17,14V4H6.57 C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14z"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="rightSide_share">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
                                    <path d="M19 22H5c-1.654 0-3-1.346-3-3V8h2v11c0 .552.449 1 1 1h14c.552 0 1-.448 1-1v-2h2v2C22 20.654 20.654 22 19 22zM16.707 11.707L15.293 10.293 18.586 7 15.293 3.707 16.707 2.293 21.414 7z"></path><path d="M8,18H6v-1c0-6.065,4.935-11,11-11h3v2h-3c-4.963,0-9,4.037-9,9V18z"></path>
                                </svg>
                                <div>Share</div>
                            </div>
                            <div class="rightSide_threeDots">
                                <?xml version="1.0" encoding="iso-8859-1"?>
                                <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	                                viewBox="0 0 32.055 32.055" xml:space="preserve">
                                    <g>
	                                    <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
		                                C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
		                                s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
		                                c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"/>
                                    </g>
                                </svg>
                            </div>
                        </div>
                       
                    </div>
                   <div class="Main_container_blockInfo_description">
                        <div class="Main_container_blockInfo_description_viewBlock dF">
                            <span class="Main_container_blockInfo_description_view">${fromViewToShortView(dateRequests[0].statistics.viewCount)} views</span>
                            <span class="Main_container_blockInfo_description_date">${dateTime(dateRequests[0].snippet.publishedAt)}</span>
                        </div>
                        <div class="Main_container_blockInfo_description_linkBlock">
                            <span class="Main_container_blockInfo_description_link"></span> 
                            <span class="showMoreDescription">...more</span>
                        </div>
                      
                    </div>
                <div class="Main_container_blockInfo_comment dF fdC">
                    <div class="comment_title">
                        <h1 class="countComments">${dateRequests[0].statistics.commentCount} Comments</h1>
                    </div>
                    <div class="Comment_input dF">
                        <div class="Comment_input_ImgProfile">
                            <img src="${dataProfile.img}" alt="ProfileImg">
                        </div>
                        <div class="Comment_input_block dF fdC">
                            <div class="Comment_input_block_tag">
                                <input type="text" placeholder="Додайте коментар...">
                            </div>
                            <div class="Comment_input_block_under dF jcE">
                                <button class="Comment_input_block_under_cancel">Скасувати</button>
                                <button class="Comment_input_block_under_apply">Коментувати</button>
                            </div>
                        </div>
                    </div>
                    <div class="AllComment_Container dF fdC">
                    </div>
                    <div class="trigerContainer"></div>

                </div>
                </div>
            </div>
    `
}
export function MarkingCommentItem(imgComment, userName, date, commentText, countLike, rating){
    return `
        <div class="AllComment_Container_item dF">
        <div class="AllComment_Container_item_img">
            <img src="${imgComment}" alt="IMG" referrerpolicy="no-referrer">
        </div>
        <div class="AllComment_Container_item_info dF fdC">
            <div class="AllComment_Container_item_info_userNameDate">
                <span class="userNameDate_userName">${userName}</span>
                <span class="userNameDate_Date">${date}</span>
            </div>
            <div class="AllComment_Container_item_text">
                ${commentText}
             </div>
            <div class="AllComment_Container_item_statistic dF" viewerRating="${rating}">
                <div class="AllComment_Container_item_statistic_like dF aiC">
                    <div class="AllComment_Container_item_statistic_like_svg dF aiC jcC">
                        <svg xmlns="http://www.w3.org/2000/svg" class="svgLikeEnable" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"></path></svg>
                    </div>
                    <span class="AllComment_Container_item_statistic_like_count">${countLike}</span>
                </div>
                <div class="AllComment_Container_item_statistic_disLike">
                    <div class="AllComment_Container_item_statistic_disLike_svg dF aiC jcC">
                        <svg xmlns="http://www.w3.org/2000/svg" class="svgDisLikeEnable" style="pointer-events: none; display: inherit; width: 100%; height: 100%;" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M18,4h3v10h-3V4z M5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21c0.58,0,1.14-0.24,1.52-0.65L17,14V4H6.57 C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14z"></path></svg>
                    </div>
                </div>
                <div class="AllComment_Container_item_statistic_repty dF aiC">Repty</div>
            </div>
        </div>
    </div>
    `
}
export function MarkingPlayerAny(id, InfoVideo, state, dataChannel){
    return `
        <div class="ContainerPlayerVideo">
        <iframe width="1236" height="695" src="https://www.youtube.com/embed/${id}" title="${InfoVideo[0].snippet.localized.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div class="Main_container_blockInfo">
                     <h1>${InfoVideo[0].snippet.title}</h1>
                    <div class="Main_container_blockInfo_statistic">
                        <div class="Main_container_blockInfo_statistic_leftSide">
                            <div class="leftSide_img">
                                <img src="${dataChannel.imgChannel}" alt="">
                            </div>
                            <div class="leftSide_title">
                                <div class="leftSide_title_nameAccount">${InfoVideo[0].snippet.channelTitle}</div>
                                <div class="leftSide_title_subscribe">${dataChannel.subscriberChannel} subscribers</div>

                            </div>
                            <div class="leftSide_subscribe_button">
                                <button>Subscribe</button>
                            </div>
                            
                        </div>
                        <div class="Main_container_blockInfo_statistic_rightSide">
                            <div class="rightSide_emotion">
                                <div class="rightSide_emotion_like">
                                    <div class="rightSide_emotion_like_svg style="pointer-events: none; display: inherit;">
                                        <svg xmlns="http://www.w3.org/2000/svg" stroke="white" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"></path></svg>
                                    </div>
                                  <div class="rightSide_emotion_like_count">
                                        ${fromLikeToShortLike(InfoVideo[0].statistics.likeCount)}
                                   </div>
                                </div>
                                <div class="rightSide_emotion_dislike">
                                    <div class="rightSide_emotion_dislike_svg style="pointer-events: none; display: inherit;">
                                        <svg xmlns="http://www.w3.org/2000/svg"  stroke="white" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M18,4h3v10h-3V4z M5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21c0.58,0,1.14-0.24,1.52-0.65L17,14V4H6.57 C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14z"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="rightSide_share">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
                                    <path d="M19 22H5c-1.654 0-3-1.346-3-3V8h2v11c0 .552.449 1 1 1h14c.552 0 1-.448 1-1v-2h2v2C22 20.654 20.654 22 19 22zM16.707 11.707L15.293 10.293 18.586 7 15.293 3.707 16.707 2.293 21.414 7z"></path><path d="M8,18H6v-1c0-6.065,4.935-11,11-11h3v2h-3c-4.963,0-9,4.037-9,9V18z"></path>
                                </svg>
                                <div>Share</div>
                            </div>
                            <div class="rightSide_threeDots">
                                <?xml version="1.0" encoding="iso-8859-1"?>
                                <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	                                viewBox="0 0 32.055 32.055" xml:space="preserve">
                                    <g>
	                                    <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
		                                C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
		                                s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
		                                c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"/>
                                    </g>
                                </svg>
                            </div>
                        </div>
                       
                    </div>
                   <div class="Main_container_blockInfo_description">
                        <div class="Main_container_blockInfo_description_viewBlock dF">
                             <span class="Main_container_blockInfo_description_view">${fromViewToShortView(InfoVideo[0].statistics.viewCount)} views</span>
                             <span class="Main_container_blockInfo_description_date">${dateTime(InfoVideo[0].snippet.publishedAt)}</span>
                        </div>
                        <div class="Main_container_blockInfo_description_linkBlock">
                            <span class="Main_container_blockInfo_description_link"></span> 
                            <span class="showMoreDescription">...more</span>
                        </div>
                      
                    </div>
                <div class="Main_container_blockInfo_comment dF fdC">
                    <div class="comment_title">
                         <h1 class="countComments">${InfoVideo[0].statistics.commentCount} Comments</h1>
                    </div>
                    <div class="Comment_input dF">
                        <div class="Comment_input_ImgProfile">
                            <img src="${state.infoChannel.img}" alt="ProfileImg">
                        </div>
                        <div class="Comment_input_block dF fdC">
                            <div class="Comment_input_block_tag">
                                <input type="text" placeholder="Додайте коментар...">
                            </div>
                            <div class="Comment_input_block_under dF jcE">
                                <button class="Comment_input_block_under_cancel">Скасувати</button>
                                <button class="Comment_input_block_under_apply">Коментувати</button>
                            </div>
                        </div>
                    </div>
                    <div class="AllComment_Container dF fdC">
                    </div>
                    <div class="trigerContainer"></div>

                </div>
                </div>
            </div>
    `
}

export function MarkingCommentItemAny(imgComment, userName, date, commentText, countLike){
    return `
        <div class="AllComment_Container_item dF">
        <div class="AllComment_Container_item_img">
            <img src="${imgComment}" alt="IMG" referrerpolicy="no-referrer">
        </div>
        <div class="AllComment_Container_item_info dF fdC">
            <div class="AllComment_Container_item_info_userNameDate">
                <span class="userNameDate_userName">${userName}</span>
                <span class="userNameDate_Date">${date}</span>
            </div>
            <div class="AllComment_Container_item_text">
                ${commentText}
             </div>
            <div class="AllComment_Container_item_statistic dF">
                <div class="AllComment_Container_item_statistic_like dF aiC">
                    <div class="AllComment_Container_item_statistic_like_svg dF aiC jcC">
                        <svg xmlns="http://www.w3.org/2000/svg" stroke="white" class="svgLikeEnable" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path style="fill:rgba(117,113, 113, 0)" d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"></path></svg>
                    </div>
                    <span class="AllComment_Container_item_statistic_like_count">${countLike}</span>
                </div>
                <div class="AllComment_Container_item_statistic_disLike">
                    <div class="AllComment_Container_item_statistic_disLike_svg dF aiC jcC">
                        <svg xmlns="http://www.w3.org/2000/svg" style="pointer-events: none; display: inherit; width: 100%; height: 100%;" stroke="white" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path style="fill: rgba(117, 113, 113, 0);" d="M18,4h3v10h-3V4z M5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21c0.58,0,1.14-0.24,1.52-0.65L17,14V4H6.57 C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14z"></path></svg>
                    </div>
                </div>
                <div class="AllComment_Container_item_statistic_repty dF aiC">Repty</div>
            </div>
        </div>
    </div>
    `
}
