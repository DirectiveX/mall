import {request,requestHome} from 'network/request'

export function getMutitdata(){
  return request({
    url: '/home/multidata'
  })
}

export function getHomeData(type,pageNo){
  return requestHome({
    url: '/resource/index',
    params: {
      type,
      pageNo
    }
  })
}


