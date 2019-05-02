import axios from 'axios'
import SETTINGS from './settings'

export default {
  getPosts(cb) {
    axios
      .get(SETTINGS.API_BET_PATH + 'posts?per_page=50')
      .then(response => {
        cb(response.data)
      })
      .catch(e => {
        cb(e)
      })
  }
}
