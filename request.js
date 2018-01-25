const http = require('http')

const request = url => {
  return new Promise(resolve => {
    http.get({ path: url }, response => {
      let data = ''
      response.on('data', _data => (data += _data))
      response.on('end', () => resolve(data))
    })
  })
}

export default request
