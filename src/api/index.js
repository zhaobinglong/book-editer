

import service from './http'

export const getBook = data => {
    return service({
        url: '/api/getBook',
        method: 'get'
    })
}

export const getSetting = data => {
    return service({
        url: '/api/fb/getSetting',
        method: 'get'
    })
}

// 保存配置信息
export const saveSetting = data => {
    return service({
        url: '/api/book/saveSetting',
        method: 'post',
        data
    })
}


export const search = data => {
    return service({
        url: '/api/query',
        method: 'get'
    })
}


