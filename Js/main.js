// import {makeMarkingVideo} from './markingVideo.js'
//   const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&key=${APIKEY}`;
//   const container = document.querySelector(".Main_container")
//   axios.get(url)
//     .then(response =>{
//      const IDVideo =  response.data.items.map(el=> el.id.videoId).join(',')

//       axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${IDVideo}&key=${APIKEY}`)
//       .then(data=>{
//         data.data.items.forEach(el=>{
//           console.log(el)
//           container.insertAdjacentHTML("afterbegin", makeMarkingVideo(el.snippet.thumbnails.high.url, el.snippet.thumbnails.default.url, el.snippet.title, el.snippet.channelTitle,el.statistics.viewCount, '1 month ago' )) 
//         })
//       })
//       .catch(error=>console.log(error))

//     })
//     .catch(error => console.log(error))


// fetch(url).then(response=>response.json()).then(el=>console.log(el))

