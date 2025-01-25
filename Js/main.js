
const main = document.querySelector(".Main_container")
main.addEventListener("click", (e) => {
    const id = e.target.closest(".Main_container_video").getAttribute("idVideo")
    const titleVideo = e.target.closest(".Main_container_video").querySelector(".Main_container_video_title_paragraph").textContent
    const previewVideo = e.target.closest(".Main_container_video").querySelector(".Main_container_preview img").src
    const nameChannel = e.target.closest(".Main_container_video").querySelector(".Main_container_video_title_info_name").textContent
    const watch = e.target.closest(".Main_container_video").querySelector(".watch").textContent
    const date = e.target.closest(".Main_container_video").querySelector(".date").textContent
    console.log(titleVideo)
    console.log(previewVideo)
    console.log(nameChannel)
    console.log(watch)
    console.log(date)

    main.innerHTML = `
    <iframe width="1236" height="695" src="https://www.youtube.com/embed/QY8dhl1EQfI?list=PL_cUvD4qzbkyZ_Q_P7W70rID0JkQ8rqic" title="YouTube Data API Tutorial - Search for Videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
    `
    main.classList.add('block')
    document.querySelector(".ytp-pause-overlay").style.display = 'none'

})












