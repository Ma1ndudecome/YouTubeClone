import './PostToToken.js'
const main = document.querySelector(".Main_container")
main.addEventListener("click", (e)=>{
    const container = e.target.closest(".Main_container_video").getAttribute("idVideo")
    console.log(container)
})











