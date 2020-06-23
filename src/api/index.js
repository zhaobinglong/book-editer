

import service from './http'

export const getBook = data => {
    return service({
        url: '/getBook',
        method: 'get'
    })
}

// 获取书的标题和描述
export const getFlipbook = data => {
    return service({
        url: '/getFlipbook',
        method: 'get',
        params: data
    })
}

export const getSetting = data => {
    return service({
        url: '/fb/getSetting',
        method: 'get'
    })
}

// 获取主要的配置信息
export const getMainSetting = data => {
    return service({
        url: '/book/getMainSetting',
        method: 'get',
        params: data
    })
}

// 保存配置信息
export const saveSetting = data => {
    return service({
        url: '/book/saveSetting',
        method: 'post',
        data
    })
}

// 保存图片
export const saveSettingImage = data => {
    return service({
        url: '/book/saveSettingImage',
        method: 'post',
        data: data
    })
}

export const search = data => {
    return service({
        url: '/query',
        method: 'get'
    })
}


