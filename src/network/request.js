import Axios from 'axios'

const request = function (config) {
  const instance = Axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 1000
  })

  instance.interceptors.request.use(config => config,err => console.log(err))

  instance.interceptors.response.use(response => response.data, err => console.log(err))

  return instance.request(config)
}

const requestHome = function (config) {
  const instance = Axios.create({
    baseURL: 'http://localhost:8092',
    timeout: 1000
  })

  instance.interceptors.request.use(config => config,err => console.log(err))

  instance.interceptors.response.use(response => response.data, err => console.log(err))

  return instance.request(config)
}

export {
  request,
  requestHome
}
