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