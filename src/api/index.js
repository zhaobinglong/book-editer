

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


export const search = data => {
    return service({
        url: '/api/query',
        method: 'get'
    })
}


