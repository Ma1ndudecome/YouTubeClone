export function markingProfile(profileImg,profileName,profileCustomUrl ){
    return `
     <div class="profileImg dF jcE">
        <img src="${profileImg}" alt="yourIcon">
        <div class="profileImg_Info">
            <div class="profileImg_Info_top dF">
                <div class="Info_top_img dF aiS jcC">
                    <img src="${profileImg}" alt="yourIcon">
                </div>
                <div class="Info_top_profileInfo">
                    <div class="profileInfo_title">${profileName}</div>
                    <div class="profileInfo_customUrl">${profileCustomUrl}</div>
                    <a href="">View your channel</a>
                </div>
            </div>
            <div class="Info_account">
                <div class="Info_account_google dF aiC">
                    <div class="Info_account_google_box dF jcC">
                        <svg viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#000000"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#000000"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#000000"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill=""></path></g></svg>
                    </div>
                    <div class="Info_account_google_box1 dF aiC">
                        <p>Google Account<p>
                    </div>
                </div>
                <div class="Info_account_change dF">
                    <div class="Info_account_left dF">
                        <div class="left_box dF jcC">
                            <svg xmlns="http://www.w3.org/2000/svg" fill=""  viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M4 20h14v1H3V6h1v14zM6 3v15h15V3H6zm2.02 14c.36-2.13 1.93-4.1 5.48-4.1s5.12 1.97 5.48 4.1H8.02zM11 8.5a2.5 2.5 0 015 0 2.5 2.5 0 01-5 0zm3.21 3.43A3.507 3.507 0 0017 8.5C17 6.57 15.43 5 13.5 5S10 6.57 10 8.5c0 1.69 1.2 3.1 2.79 3.43-3.48.26-5.4 2.42-5.78 5.07H7V4h13v13h-.01c-.38-2.65-2.31-4.81-5.78-5.07z"></path></svg>
                        </div>
                       <div class="left_box1 dF aiC">
                            <p>Switch Account</p>
                       </div>
                    </div>
                    <div class="left_box3 dF aiC jcC">
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path></svg>
                    </div>
                </div>
                <div class="Info_account_exit dF">
                    <div class="exit_box dF jcC aiC">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="" enable-background="new 0 0 24 24" " viewBox="0 0 24 24" focusable="false" aria-hidden="true" ><path d="M20 3v18H8v-1h11V4H8V3h12zm-8.9 12.1.7.7 4.4-4.4L11.8 7l-.7.7 3.1 3.1H3v1h11.3l-3.2 3.3z"></path></svg>
                    </div>
                    <div class="exit_box1 dF aiC">
                        <p>Sing out</p>
                    </div>
                </div>
            </div>
            <div class="Setting_theme">
                <div class="theme dF">
                    <div class="theme_box dF aiC jcC">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                            <path d="M12 22C10.93 22 9.86998 21.83 8.83998 21.48L7.41998 21.01L8.83998 20.54C12.53 19.31 15 15.88 15 12C15 8.12 12.53 4.69 8.83998 3.47L7.41998 2.99L8.83998 2.52C9.86998 2.17 10.93 2 12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22ZM10.58 20.89C11.05 20.96 11.53 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C11.53 3 11.05 3.04 10.58 3.11C13.88 4.81 16 8.21 16 12C16 15.79 13.88 19.19 10.58 20.89Z"></path>
                        </svg>
                    </div>
                    <div class="theme_box1 dF aiC">
                        <p>Apperance</p>
                    </div>
                    <div class="theme_arrow dF aiC jcC">
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

export function markingSubribe(img, title){
    return `
    <div class="subriber">
        <img src="${img}" alt="subscriber">
        <p>${title}</p>
    </div<
    `
}