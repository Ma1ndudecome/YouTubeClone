import { fromLikeToShortLike, fromViewToShortView } from "../ViewToViewLikeToLike.js"

export function MarkingPlayer(id, dateRequests, dataProfile){
    const dateString = dateRequests[0].snippet.publishedAt
    const parsedDate = dateFns.parseISO(dateString);
    const formattedDate  = dateFns.format(parsedDate, "MMM d, yyyy")
    return `
    <div class="ContainerPlayerVideo">
     <iframe width="1236" height="695" src="https://www.youtube.com/embed/${id}" title="${dateRequests[0].snippet.localized.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                                    <div class="rightSide_emotion_like_svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" stroke="white" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path  style="fill:rgba(0,0,0,0)"d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"></path></svg>
                                    </div>
                                    <div class="rightSide_emotion_like_count">
                                        ${fromLikeToShortLike(dateRequests[0].statistics.likeCount)}
                                    </div>
                                </div>
                                <div class="rightSide_emotion_dislike">
                                    <div class="rightSide_emotion_dislike_svg">
                                        <svg xmlns="http://www.w3.org/2000/svg"  stroke="white" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path  style="fill:rgba(0,0,0,0)" d="M18,4h3v10h-3V4z M5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21c0.58,0,1.14-0.24,1.52-0.65L17,14V4H6.57 C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14z"></path></svg>
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
                            <span class="Main_container_blockInfo_description_view">${dateRequests[0].statistics.viewCount} views</span>
                            <span class="Main_container_blockInfo_description_date">${formattedDate}</span>
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
export function MarkingCommentItem(imgComment, userName, date, commentText, countLike){
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
export function MarkingPlayerAny(id, InfoVideo, state, dataChannel){
    const dateString = InfoVideo[0].snippet.publishedAt
    const parsedDate = dateFns.parseISO(dateString);
    const formattedDate  = dateFns.format(parsedDate, "MMM d, yyyy")
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
                                
                                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"></path></svg>
                                    ${fromLikeToShortLike(InfoVideo[0].statistics.likeCount)}
                                </div>
                                <div class="rightSide_emotion_dislike">
                                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 105.01"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><title>dislike</title><path class="cls-1" d="M4,61.65H32.37a4,4,0,0,0,4-4V4a4.05,4.05,0,0,0-4-4H4A4,4,0,0,0,0,4V57.62a4,4,0,0,0,4,4ZM62.16,98.71a7.35,7.35,0,0,0,4.07,5.65,8.14,8.14,0,0,0,5.56.32,15.53,15.53,0,0,0,5.3-2.71,26.23,26.23,0,0,0,9.72-18.86,57.44,57.44,0,0,0-.12-8.35c-.17-2-.42-4-.76-6.15h20.2a21.57,21.57,0,0,0,9.1-2.32,14.87,14.87,0,0,0,5.6-4.92,12.59,12.59,0,0,0,2-7.52,18.1,18.1,0,0,0-1.82-6.92,21.87,21.87,0,0,0,.54-8.39,9.68,9.68,0,0,0-2.78-5.67,25.28,25.28,0,0,0-1.4-9.44,19.9,19.9,0,0,0-4.5-7,28.09,28.09,0,0,0-.9-5A17.35,17.35,0,0,0,109.5,6h0C106.07,1.14,103.33,1.25,99,1.43c-.61,0-1.26.05-2.26.05H57.39a19.08,19.08,0,0,0-8.86,1.78,20.9,20.9,0,0,0-7,6.06L41,11V56.86l2,.54c5.08,1.37,9.07,5.7,12.16,10.89a76,76,0,0,1,7,16.64V98.2l.06.51Zm6.32.78a2.13,2.13,0,0,1-1-1.57V84.55l-.12-.77a82.5,82.5,0,0,0-7.61-18.24C56.4,59.92,52,55.1,46.37,52.87V11.94a14.87,14.87,0,0,1,4.56-3.88,14.14,14.14,0,0,1,6.46-1.21H96.73c.7,0,1.61,0,2.47-.07,2.57-.11,4.2-.17,5.94,2.28v0a12.12,12.12,0,0,1,1.71,3.74,24.63,24.63,0,0,1,.79,5l.83,1.76a15,15,0,0,1,3.9,5.75,21.23,21.23,0,0,1,1,8.68l-.1,1.59,1.36.84a4.09,4.09,0,0,1,1.64,3,17.44,17.44,0,0,1-.68,7.12l.21,1.94A13.16,13.16,0,0,1,117.51,54a7.34,7.34,0,0,1-1.17,4.39,9.61,9.61,0,0,1-3.59,3.12,16,16,0,0,1-6.71,1.7H79.51l.6,3.18a85.37,85.37,0,0,1,1.22,8.78,51.11,51.11,0,0,1,.13,7.56,20.78,20.78,0,0,1-7.62,14.95,10.29,10.29,0,0,1-3.41,1.78,3,3,0,0,1-2,0ZM22.64,19.71a5.13,5.13,0,1,0-5.13-5.13,5.13,5.13,0,0,0,5.13,5.13Z"/></svg>
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
                            <span class="Main_container_blockInfo_description_date">${formattedDate}</span>
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