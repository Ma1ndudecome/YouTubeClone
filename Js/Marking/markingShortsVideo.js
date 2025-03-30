export function ShortsContainer(){
    return `
    <div class="shorts-nav-btn">
        
            <div class="shorts-btn-up">
                <a href="">
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotateZ(180deg);">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M1.11598 11.384C0.88153 11.1495 0.749817 10.8316 0.749817 10.5C0.749817 10.1684 0.88153 9.85045 1.11598 9.616C1.35043 9.38155 1.66842 9.24984 1.99998 9.24984C2.33155 9.24984 2.64953 9.38155 2.88398 9.616L7.74998 14.482V1.5C7.74998 1.16848 7.88168 0.850537 8.1161 0.616117C8.35052 0.381696 8.66846 0.25 8.99998 0.25C9.3315 0.25 9.64944 0.381696 9.88387 0.616117C10.1183 0.850537 10.25 1.16848 10.25 1.5V14.482L15.116 9.616C15.3504 9.38155 15.6684 9.24984 16 9.24984C16.3315 9.24984 16.6495 9.38155 16.884 9.616C17.1184 9.85045 17.2501 10.1684 17.2501 10.5C17.2501 10.8316 17.1184 11.1495 16.884 11.384L8.99998 19.268L1.11598 11.384Z"
                            fill="#0F0F0F"/>
                    </svg>

                 </a>    
            </div>
        
                <div class="shorts-btn-down">
                    <a href="">
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.11598 11.384C0.88153 11.1495 0.749817 10.8316 0.749817 10.5C0.749817 10.1684 0.88153 9.85045 1.11598 9.616C1.35043 9.38155 1.66842 9.24984 1.99998 9.24984C2.33155 9.24984 2.64953 9.38155 2.88398 9.616L7.74998 14.482V1.5C7.74998 1.16848 7.88168 0.850537 8.1161 0.616117C8.35052 0.381696 8.66846 0.25 8.99998 0.25C9.3315 0.25 9.64944 0.381696 9.88387 0.616117C10.1183 0.850537 10.25 1.16848 10.25 1.5V14.482L15.116 9.616C15.3504 9.38155 15.6684 9.24984 16 9.24984C16.3315 9.24984 16.6495 9.38155 16.884 9.616C17.1184 9.85045 17.2501 10.1684 17.2501 10.5C17.2501 10.8316 17.1184 11.1495 16.884 11.384L8.99998 19.268L1.11598 11.384Z"
                                fill="#0F0F0F" />
                        </svg>
                    </a>
                </div>
            </div>
    <div class="ShortsContainer dF ">
    
    </div>
    `
}
export function innerContentShorts(imgProfile, nameChannel, descriptionVideo, likeCount, commentCount, idVideo){
    return `
    <div class="ContainerVideoShorts dF mB20P">
     <div class="shorts-video-inner" id="${idVideo}">
               <div class="shorts-video-inner-info">
                    <div class="shorts-video-inner-info-channel">
                        <div class="shorts-video-inner-info-channel-picture">
                            <img src="${imgProfile}" alt="img channel">
                        </div>
                        <div class="shorts-video-inner-info-channel-name">
                            ${nameChannel}
                        </div>
                        <div class="shorts-video-inner-info-channel-button">
                            <button>Subscribe</button>
                        </div>


                    </div>
                    <div class="shorts-video-inner-info-description">
                        <p>
                            ${descriptionVideo}
                        </p>
                    </div>
               </div>
            </div>
                <div class="shorts-video-conteiner">
                <div class="shorts-conteiner-control">
                    <div class="shorts-btn-like-conteiner">
                        <div class="shorts-btn-like-conteiner-svg"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M8 21V9.282C8 8.448 8.26 7.635 8.745 6.957L13 1L13.551 1.331C14.704 2.022 15.256 3.396 14.902 4.693L14 8H19.192C20.019 8 20.801 8.376 21.317 9.022C22.028 9.91 22.112 11.147 21.526 12.123L21 13L21.165 13.413C21.684 14.709 21.489 16.182 20.651 17.298L20.5 17.5V18C20.5 19.657 19.157 21 17.5 21H8ZM4.5 9C3.672 9 3 9.672 3 10.5V19.5C3 20.328 3.672 21 4.5 21H7V9H4.5Z"
                                    fill="black" />
                                <path
                                    d="M8 21V9.282C8 8.448 8.26 7.635 8.745 6.957L13 1L13.551 1.331C14.704 2.022 15.256 3.396 14.902 4.693L14 8H19.192C20.019 8 20.801 8.376 21.317 9.022C22.028 9.91 22.112 11.147 21.526 12.123L21 13L21.165 13.413C21.684 14.709 21.489 16.182 20.651 17.298L20.5 17.5V18C20.5 19.657 19.157 21 17.5 21H8ZM4.5 9C3.672 9 3 9.672 3 10.5V19.5C3 20.328 3.672 21 4.5 21H7V9H4.5Z"
                                    fill="black" />
                                <path
                                    d="M8 21V9.282C8 8.448 8.26 7.635 8.745 6.957L13 1L13.551 1.331C14.704 2.022 15.256 3.396 14.902 4.693L14 8H19.192C20.019 8 20.801 8.376 21.317 9.022C22.028 9.91 22.112 11.147 21.526 12.123L21 13L21.165 13.413C21.684 14.709 21.489 16.182 20.651 17.298L20.5 17.5V18C20.5 19.657 19.157 21 17.5 21H8ZM4.5 9C3.672 9 3 9.672 3 10.5V19.5C3 20.328 3.672 21 4.5 21H7V9H4.5Z"
                                    fill="black" />
                            </svg>
                        </div>
                        <p>${likeCount}</p>
                    </div>
                    <div class="shorts-btn-dislike-conteiner">
                        <div class="shorts-btn-dislike-conteiner-svg">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.5 0.5V12.218C14.5 13.052 14.24 13.865 13.755 14.543L9.50001 20.5L8.94901 20.169C7.79601 19.478 7.24401 18.104 7.59801 16.807L8.50001 13.5H3.30801C2.48101 13.5 1.69901 13.124 1.18301 12.478C0.47201 11.59 0.38801 10.353 0.97401 9.377L1.50001 8.5L1.33501 8.087C0.81601 6.791 1.01101 5.318 1.84901 4.202L2.00001 4V3.5C2.00001 1.843 3.34301 0.5 5.00001 0.5H14.5ZM17.5 12.5C18.605 12.5 19.5 11.605 19.5 10.5V2.5C19.5 1.395 18.605 0.5 17.5 0.5H15.5V12.5H17.5Z"
                                    fill="black" />
                            </svg>
                        </div>

                        <p>Dislike</p>
                    </div>
                    <div class="shorts-btn-comment-conteiner">
                        <div class="shorts-btn-comment-conteiner-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20"
                                fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M18.81 2.5C18.81 1.395 17.915 0.5 16.81 0.5H2.81C1.705 0.5 0.809998 1.395 0.809998 2.5V14.5C0.809998 15.605 1.705 16.5 2.81 16.5H14.81L17.956 19.646C18.271 19.961 18.81 19.738 18.81 19.293V2.5ZM4.81 6.5C4.81 5.948 5.258 5.5 5.81 5.5H13.81C14.362 5.5 14.81 5.948 14.81 6.5C14.81 7.052 14.362 7.5 13.81 7.5H5.81C5.258 7.5 4.81 7.052 4.81 6.5ZM5.81 9.5C5.258 9.5 4.81 9.948 4.81 10.5C4.81 11.052 5.258 11.5 5.81 11.5H10.81C11.362 11.5 11.81 11.052 11.81 10.5C11.81 9.948 11.362 9.5 10.81 9.5H5.81Z"
                                    fill="black" />
                            </svg>
                        </div>
                        <p>${commentCount}</p>
                    </div>
                    <div class="shorts-btn-repost-conteiner">
                        <div class="shorts-btn-repost-conteiner-svg" role="text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19"
                                fill="none">
                                <path
                                    d="M11.702 0.86798L21.14 8.73298C21.62 9.13298 21.62 9.86998 21.14 10.27L11.702 18.135C11.05 18.678 10.062 18.215 10.062 17.367V13.5H8.45698C5.67898 13.5 3.05098 14.763 1.31598 16.932C1.01198 17.312 0.403978 17.018 0.512978 16.544L1.63098 11.701C2.46798 8.07198 5.69998 5.49998 9.42598 5.49998H10.062V1.63698C10.062 0.78898 11.051 0.32598 11.702 0.86798Z"
                                    fill="black" />
                            </svg>
                        </div>
                        <p>Repost</p>
                    </div>
                    <div class="shorts-btn-settings-conteiner">
                        <div class="shorts-btn-settings-conteiner-svg">
                            <svg width="3" height="15" viewBox="0 0 3 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.5 12C2.33 12 3 12.67 3 13.5C3 14.33 2.33 15 1.5 15C0.67 15 0 14.33 0 13.5C0 12.67 0.67 12 1.5 12ZM0 7.5C0 8.33 0.67 9 1.5 9C2.33 9 3 8.33 3 7.5C3 6.67 2.33 6 1.5 6C0.67 6 0 6.67 0 7.5ZM0 1.5C0 2.33 0.67 3 1.5 3C2.33 3 3 2.33 3 1.5C3 0.67 2.33 0 1.5 0C0.67 0 0 0.67 0 1.5Z"
                                    fill="black" />
                            </svg>
                        </div>
                    </div>
                    <div class="shorts-name-music" style="padding-top: 16px;">
                        <img src="${imgProfile}" alt="imgProfile" style="width:100%; height:100%">
                    </div>
                </div>
    </div>
   
    `
}
export function iframePlayerShortsVideo(id, title){
    return  `<iframe src="https://www.youtube.com/embed/${id}?&autoplay=1&loop=1&playlist=${id}" autoplay="true" autoplay="1" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
}