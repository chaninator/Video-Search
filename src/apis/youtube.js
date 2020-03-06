import axios from 'axios'

const KEY = 'AIzaSyDxvbVy5zeebjFjQCJ3xh1WemA08pEOpGw'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
})
