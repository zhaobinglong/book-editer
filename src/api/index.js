import service from './http'

// 获取内容列表
export const getBook = data => {
    return service({
        url: '/api/getBook',
        method: 'get',
        data
    })
}

export const getSetting = data => {
    return service({
        url: '/api/fb/getSetting',
        method: 'get',
        data
    })
}

export const search = data => {
    return service({
        url: '/api/query',
        method: 'get'
    })
}



