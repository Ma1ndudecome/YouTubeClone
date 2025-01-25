import { makeMarkingVideo } from './markingVideo.js'
import { formatDuration } from './FromISOToTime.js'



  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&eventType=none&key=${APIKEY}`;
  const container = document.querySelector(".Main_container")
  axios.get(url)
    .then(response => {
      
      const IDVideo = response.data.items.map(el => el.id.videoId).join(',')
      
      axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${IDVideo}&key=${APIKEY}`)
        .then(data => {
          data.data.items.forEach(el => {
            if (el.snippet.liveBroadcastContent === 'none') {
              
              const date = new Date(el.snippet.publishedAt)
              const result = dateFns.formatDistanceToNow(date, { addSuffix: true })
              container.insertAdjacentHTML("beforeend", makeMarkingVideo(el.snippet.thumbnails.high.url, el.snippet.thumbnails.default.url, el.snippet.title, el.snippet.channelTitle, el.statistics.viewCount, result, formatDuration(el.contentDetails.duration), el.id))
            }
          })
        })
        .catch(error => console.log(error))
  
    })
    .catch(error => console.log(error))
