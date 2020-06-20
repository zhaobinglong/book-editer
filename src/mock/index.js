import Mock from 'mockjs'
// mock随机数据
const Random = Mock.Random;

Mock.mock('/api/query', 'get', () => {
	let arr = []
    for (let i = 0; i < 3; i++) {
		let data = Mock.mock({
		  "page|1-100": 100,
		  "description": Random.cparagraph( 50 )
		})
        arr.push(data)
    }	
    return arr
})

Mock.mock('/api/getBook', 'get', () => {
	let obj = {
	    "id": Random.integer(100,1000),
	    "userId": Random.integer(100,1000),
	    "title": Random.cword(2,10),
	    "description": Random.cword(20, 50),
	    "uploadId": "",
	    "created": "",
	    "indexed": "",
	    "updated": "",
	    "deleted": "",
	    "upload": {
	        "id": "",
	        "name": "",
	        "userId": "",
	        "pages": 0,
	        "bookId": "",
	        "size": 0,
	        "widthHeight": "",
	        "created": ""
	    }
    }
    return obj
})


Mock.mock('/api/fb/getSetting', 'get', () => {
	let controls = {
	    "id": Random.integer(100,1000),
	    "bookId": Random.integer(100,1000),
	    "chat": "",
	    "chatEnable": false,
	    "logo": Random.image('200x200','#50B347', '#FFF', 'logo'),
	    "favico": Random.image('200x200','#50B347', '#FFF', 'favico'),
	    "password": "",
	    "passwordEnable": false,
	    "contact": "",
	    "contactEnable": false,
	    "download": false,
	    "share": false,
	    "sound": false,
	    "search": false,
	    "userId": "",
	    "created": "",
	    "updated": "",
	    "main": false
	 }
    return {
    	controls: controls
    }
})
	