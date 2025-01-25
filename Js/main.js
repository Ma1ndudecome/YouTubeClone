import './PostToToken.js'
import "./LoadVideo.js"
const main = document.querySelector(".Main_container")
main.addEventListener("click", (e) => {
    const id = e.target.closest(".Main_container_video").getAttribute("idVideo")
    main.innerHTML = `
    <iframe 
       width="560" 
       height="315" 
       src="https://www.youtube.com/embed/${id}" 
       title="YouTube video player" 
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
       allowfullscreen>
    </iframe>
    `
    main.classList.add('block')
    document.querySelector(".ytp-pause-overlay").style.display = 'none'
})












