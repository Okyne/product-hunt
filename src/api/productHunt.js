import axios from 'axios'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Authorization'] = 'Bearer 50cf63919dce20db7c67e469f06e5577a0facd2b8516a4b8ee2b9176f3ebe306'

const baseUrl = 'https://api.producthunt.com/v1/posts'

export default {
  getPosts (period) {
    const promise = new Promise((resolve, reject) => {
      const path = period ? `?days_ago=${period}` : ''
      axios.get(`${baseUrl}${path}`)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
    return promise
  }
}
