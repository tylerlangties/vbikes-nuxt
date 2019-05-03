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
  },
  getPost(id) {
    axios
      .get(SETTINGS.API_BET_PATH + `post/${id}`)
      .then(response => {
        return response.data
      })
      .catch(e => {
        console.log(e)
      })
  },
  getUsers(cb) {
    axios
      .get(SETTINGS.API_BASE_PATH + 'users')
      .then(response => {
        cb(response.data)
      })
      .catch(e => {
        cb(e)
      })
  },
  getCategories(cb) {
    axios
      .get(
        SETTINGS.API_BASE_PATH +
          'categories?sort=name&hide_empty=true&per_page=50'
      )
      .then(response => {
        cb(response.data.filter(c => c.name !== 'Uncategorized'))
      })
      .catch(e => {
        cb(e)
      })
  }
}
