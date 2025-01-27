// import "./LoadVideo.js"
// import { dateRequest } from "./LoadVideo.js"
const main = document.querySelector(".Main_container")
main.addEventListener("click", (e) => {
    const id = e.target.closest(".Main_container_video").getAttribute("idVideo")
   const dateRequests = dateRequest.filter(el=>el.id === id)
    main.innerHTML = `
    <iframe width="1236" height="695" src="https://www.youtube.com/embed/${id}" title="YouTube Data API Tutorial - Search for Videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     <div class="Main_container_blockInfo">
                    <h1>${dateRequests[0].snippet.localized.title}</h1>
                    <div class="Main_container_blockInfo_statistic">
                        <div class="Main_container_blockInfo_statistic_leftSide">
                            <div class="leftSide_img">
                                <img src="${dateRequests[0].snippet.thumbnails.default.url}" alt="">
                            </div>
                            <div class="leftSide_title">
                                <div class="leftSide_title_nameAccount">${dateRequests[0].snippet.channelTitle}</div>
                                <div class="leftSide_title_subscribe">Підписалося 60,3 тис. користувачів</div>
                            </div>
                            <div class="leftSide_subscribe_button">
                                <button>Підписатися</button>
                            </div>
                            
                        </div>
                        <div class="Main_container_blockInfo_statistic_rightSide">
                            <div class="rightSide_emotion">
                                <div class="rightSide_emotion_like">
                                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 105.01"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><title>like</title><path class="cls-1" d="M4,43.36H32.37a4,4,0,0,1,4,4V101a4,4,0,0,1-4,4H4a4,4,0,0,1-4-4V47.39a4,4,0,0,1,4-4ZM62.16,6.3A7.36,7.36,0,0,1,66.23.65,8.14,8.14,0,0,1,71.79.34a15.36,15.36,0,0,1,5.3,2.71A26.21,26.21,0,0,1,86.81,21.9a57.41,57.41,0,0,1-.12,8.35q-.25,2.94-.76,6.15h20.2a21.58,21.58,0,0,1,9.1,2.33,14.7,14.7,0,0,1,5.6,4.92,12.55,12.55,0,0,1,2,7.51,18.1,18.1,0,0,1-1.82,6.93,21.82,21.82,0,0,1,.54,8.38,9.7,9.7,0,0,1-2.78,5.68,25.22,25.22,0,0,1-1.4,9.43,19.81,19.81,0,0,1-4.5,7,28.37,28.37,0,0,1-.9,5A17.3,17.3,0,0,1,109.5,99h0c-3.43,4.84-6.17,4.73-10.51,4.55-.61,0-1.26,0-2.26,0H57.39a19.08,19.08,0,0,1-8.86-1.78,21.13,21.13,0,0,1-7-6.06L41,94V48.15l2-.53c5.08-1.37,9.07-5.71,12.16-10.9a75.8,75.8,0,0,0,7-16.64V6.82l.06-.52Zm6.32-.78a2.15,2.15,0,0,0-1,1.57V20.46l-.12.77a82.31,82.31,0,0,1-7.61,18.24C56.4,45.09,52,49.91,46.37,52.14V93.07A14.6,14.6,0,0,0,50.93,97a14.14,14.14,0,0,0,6.46,1.21H96.73c.7,0,1.61,0,2.47.08,2.57.1,4.2.17,5.94-2.29h0a12.34,12.34,0,0,0,1.71-3.74,24.86,24.86,0,0,0,.79-5l.83-1.77a14.89,14.89,0,0,0,3.9-5.75,21.18,21.18,0,0,0,1-8.67l-.1-1.6,1.36-.84a4.09,4.09,0,0,0,1.64-3,17.44,17.44,0,0,0-.68-7.12l.21-1.94A13.12,13.12,0,0,0,117.51,51a7.29,7.29,0,0,0-1.17-4.38,9.53,9.53,0,0,0-3.59-3.12A16,16,0,0,0,106,41.77H79.51l.6-3.18a85.93,85.93,0,0,0,1.22-8.79,51,51,0,0,0,.13-7.55,20.76,20.76,0,0,0-7.62-15,10.15,10.15,0,0,0-3.41-1.79,3,3,0,0,0-2,0ZM22.64,85.3a5.13,5.13,0,1,1-5.13,5.13,5.13,5.13,0,0,1,5.13-5.13Z"/></svg>
                                   <div class="rightSide_emotion_like_count">${dateRequests[0].statistics.likeCount}</div>
                                </div>
                                <div class="rightSide_emotion_dislike">
                                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 105.01"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><title>dislike</title><path class="cls-1" d="M4,61.65H32.37a4,4,0,0,0,4-4V4a4.05,4.05,0,0,0-4-4H4A4,4,0,0,0,0,4V57.62a4,4,0,0,0,4,4ZM62.16,98.71a7.35,7.35,0,0,0,4.07,5.65,8.14,8.14,0,0,0,5.56.32,15.53,15.53,0,0,0,5.3-2.71,26.23,26.23,0,0,0,9.72-18.86,57.44,57.44,0,0,0-.12-8.35c-.17-2-.42-4-.76-6.15h20.2a21.57,21.57,0,0,0,9.1-2.32,14.87,14.87,0,0,0,5.6-4.92,12.59,12.59,0,0,0,2-7.52,18.1,18.1,0,0,0-1.82-6.92,21.87,21.87,0,0,0,.54-8.39,9.68,9.68,0,0,0-2.78-5.67,25.28,25.28,0,0,0-1.4-9.44,19.9,19.9,0,0,0-4.5-7,28.09,28.09,0,0,0-.9-5A17.35,17.35,0,0,0,109.5,6h0C106.07,1.14,103.33,1.25,99,1.43c-.61,0-1.26.05-2.26.05H57.39a19.08,19.08,0,0,0-8.86,1.78,20.9,20.9,0,0,0-7,6.06L41,11V56.86l2,.54c5.08,1.37,9.07,5.7,12.16,10.89a76,76,0,0,1,7,16.64V98.2l.06.51Zm6.32.78a2.13,2.13,0,0,1-1-1.57V84.55l-.12-.77a82.5,82.5,0,0,0-7.61-18.24C56.4,59.92,52,55.1,46.37,52.87V11.94a14.87,14.87,0,0,1,4.56-3.88,14.14,14.14,0,0,1,6.46-1.21H96.73c.7,0,1.61,0,2.47-.07,2.57-.11,4.2-.17,5.94,2.28v0a12.12,12.12,0,0,1,1.71,3.74,24.63,24.63,0,0,1,.79,5l.83,1.76a15,15,0,0,1,3.9,5.75,21.23,21.23,0,0,1,1,8.68l-.1,1.59,1.36.84a4.09,4.09,0,0,1,1.64,3,17.44,17.44,0,0,1-.68,7.12l.21,1.94A13.16,13.16,0,0,1,117.51,54a7.34,7.34,0,0,1-1.17,4.39,9.61,9.61,0,0,1-3.59,3.12,16,16,0,0,1-6.71,1.7H79.51l.6,3.18a85.37,85.37,0,0,1,1.22,8.78,51.11,51.11,0,0,1,.13,7.56,20.78,20.78,0,0,1-7.62,14.95,10.29,10.29,0,0,1-3.41,1.78,3,3,0,0,1-2,0ZM22.64,19.71a5.13,5.13,0,1,0-5.13-5.13,5.13,5.13,0,0,0,5.13,5.13Z"/></svg>
                                </div>
                            </div>
                            <div class="rightSide_share">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
                                    <path d="M19 22H5c-1.654 0-3-1.346-3-3V8h2v11c0 .552.449 1 1 1h14c.552 0 1-.448 1-1v-2h2v2C22 20.654 20.654 22 19 22zM16.707 11.707L15.293 10.293 18.586 7 15.293 3.707 16.707 2.293 21.414 7z"></path><path d="M8,18H6v-1c0-6.065,4.935-11,11-11h3v2h-3c-4.963,0-9,4.037-9,9V18z"></path>
                                </svg>
                                <div>Поділитися</div>
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
                </div>
    `
    main.classList.add('block')
    
    
})












