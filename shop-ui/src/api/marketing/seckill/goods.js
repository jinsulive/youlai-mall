import request from '@/utils/request'

export function page(pageNum, pageSize, queryParams) {
  return request({
    url: '/marketing/seckill/goods/pageNum/' + pageNum + "/pageSize/" + pageSize,
    method: 'get',
    params: queryParams
  });
}

export function postObj(obj) {
  return request({
    url: '/marketing/seckill/goods',
    method: 'post',
    data: obj
  });
}

export function getObj(id) {
  return request({
    url: '/marketing/seckill/goods/' + id,
    method: 'get'
  })
}

export function putObj(id, obj) {
  return request({
    url: '/marketing/seckill/goods/' + id,
    method: 'put',
    data: obj
  })
}

export function delObj(ids) {
  return request({
    url: '/marketing/seckill/goods/' + ids,
    method: 'delete'
  })
}


export function updateStatus(id, obj) {
  return request({
    url: '/marketing/seckill/goods/' + id,
    method: 'put',
    data: obj
  })
}



