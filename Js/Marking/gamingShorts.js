export function gamingMarkingShorts(logoVideo,titleVideo, watch) {
    return `
    <div class="shorts-video-gaming"  
       <div class="Main_container grid">

                <div class="boxShorts">
                    
                     <img src="${logoVideo}" alt="" class="shorts-video-gaming">
                    <div class="shortsTxt">
                    <span style="color: aliceblue;">${titleVideo}</span>
                    <span style="color: white">...</span>
                </div>
                    <div style="margin-left:15px;color: rgb(90, 90, 90)">${watch}</div>
                </div>
    </div>
    `}
    
    
    export function main_All_subscription(channelName,subscriberCount,description) {
        return `
           <div class="show_All_Subscriptions dF" id="show_All_Subscriptions">
                    <h1 class="channels_subscribed_to">Сhannels, you are subscribed to</h1>
                    <div class="show_All_Subscriptions_Container ">
                        <div class="img_Name_Subscriptions dF">
                            <div class="img_subscriptions" id="img_subscriptions"><a href=""></a></div>
                            <div class="name_Subscriptions_text dF">
                                <div class="name_Subscriptions" id="name_Subscriptions"></div>
                                <div class="number_of_Subscriptions" id="number_of_Subscriptions"></div>
                                <div class="channel_description" id="channel_description"></div>
                            </div>
                        </div>
                    </div>
                </div> 
        `;
    }

//     <div class="show_All_Subscriptions dF" id="show_All_Subscriptions">
//     <h1 class="channels_subscribed_to">Channels you are subscribed to</h1>
//     <div class="show_All_Subscriptions_Container">
//         <div class="img_Name_Subscriptions dF">
//             <!-- Картинка канала -->
//             <div class="img_subscriptions" id="img_subscriptions">
//                 <img src="" alt="Channel Image">
//             </div>

//             <!-- Информация о канале -->
            
//         </div>
//     </div>
// </div>

// <div class="name_Subscriptions_text dF">
                    //     <div class="name_Subscriptions" id="name_Subscriptions">${dataProfile.channelName}</div>
                    //     <div class="number_of_Subscriptions" id="number_of_Subscriptions">${dataProfile.subscriberCount} Subscribers</div>
                    //     <div class="channel_description" id="channel_description">${dataProfile.description}</div>
                    // </div>

                    // dataProfile.channelName
                    // ${dataProfile.subscriberCount}
                    // ${dataProfile.description}