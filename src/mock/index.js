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