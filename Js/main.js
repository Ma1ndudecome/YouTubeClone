const apiKey = 'AIzaSyAVUenJUn65oqUrauqWG3G4M-55wOATGNA';


const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=QUERY&part=snippet&type=video&maxResults=10
`;

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data) )
  .catch(error => console.error('Error:', error));

