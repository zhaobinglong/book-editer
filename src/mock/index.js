import Mock from 'mockjs'

Mock.mock('/ap/query', 'get', () => {
  return 'my girl'
})