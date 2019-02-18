import axios from 'axios'

const baseUrl = 'https://api.producthunt.com/v1/'
const clientId = 'a05f0b3245eeacfeff6942f2c77adf356c01c5a24ca7a29c5c23b28bcb4648f2'
const clientSecret = '3c507153ab25a33c9d0530506463633102faf0598fcb23c8bc5e33dd53849144'

export default {
  getToken () {
    const promise = new Promise((resolve, reject) => {
      const headerOptions = {
        'Accept': 'application/json',
        'access-control-allow-origin': '*',
        'Content-Type': 'application/json',
        'Host': 'api.producthunt.com'
      }
      axios.post(`${baseUrl}oauth/token`, {
        client_secret: clientSecret,
        client_id: clientId,
        grant_type: 'client_credentials'
      }, headerOptions)
        .then((token) => {
          resolve(token)
        })
        .catch((error) => {
          reject(error)
        })
    })
    return promise
  }
}
