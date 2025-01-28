export function changeProfile(profileImg){
    document.querySelector(".sing_int").innerHTML = `
    <div class="profileImg dF jcE">
        <img src="${profileImg}">
    </div>
    `
}