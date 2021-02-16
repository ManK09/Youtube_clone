import axios from 'axios'
import youtubeSearch from "youtube-search"

const KEY="AIzaSyDHoeogaijfkf0GSX4NEG7vFuBq_840foE";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        maxResults:10,
        key:"AIzaSyDHoeogaijfkf0GSX4NEG7vFuBq_840foE"
    }
})
// export const opts= {
//     maxResults:10,
//     key:"AIzaSyDHoeogaijfkf0GSX4NEG7vFuBq_840foE"
// }

// export default youtubeSearch('jsconf', opts, function(err, results) {
//     if(err) return console.log(err);
  
//     console.dir(results);
//   });