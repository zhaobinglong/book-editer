## 如何开发

打开命令行，进入根目录，执行：
```
browser-sync start --server --files "css/*.css, *.html"
```

## 后端API记录
https://baige.w.eolinker.com/#/home/ams/project/inside/api/list?groupID=1007534&projectHashKey=1p1TgW9351875c5c90550139cf822a516e8e2bc71a19f0c&spaceKey=baige

## 本地开发访问域名
http://127.0.0.1:8000/

## 启动开发
npm run dev


## 第一阶段开发记录
- 显示所有的菜单
- 通过点击菜单控制中央区域图标的显示
- 缩略图和目录单独一列，显示在菜单栏右侧
- 点击图标显示缩略图和目录
- 图标栏目悬浮在页面底部
- 页码区域悬浮在页面顶部
- 

## 第二阶段开发记录
- 菜单要互斥，打开一个，其他都要关闭
- 分享弹框
- 下载弹框（点击下载icon，弹出框）
- 电话（点击图标，弹框显示电话）
- 邮件（点击icon，弹出弹窗，提示发送至邮箱，有一个确定按钮）
- save, 设为默认
- 下滑条滑动时，  home与save所在的div始终存在；
- branding与controls 这些组，只有一个处于展开状态
- 展开的组色彩 #EEE；
- 篇目 改成目录;多层结构
- 缩略图与目录，都需要点击才显示，而且只能显示一个
- 缩略图为懒加载
- 使用webpack进行打包编译
- 引入mock.js拦截正常请求

## 接口对接记录
- 根据关键词搜索书的内容
- 获取书本信息（名字和描述）
- 获取书本的配置信息
- 获取书本信息（名字和描述）
- 搜索
- 获取书本配置信息（logo，favicon）
- 增加图片上传接口
- /book/getMainSetting(这个接口获取不到保存的title和desc)
- 接口可以提交数据，但是提交的数据没有在数据库更新

## 交互细节变更记录
- 缩略图懒加载，默认显示一个loading的图标，显示在视窗上后更改为图片
- 增加缩略图的点击事件
- 搜索结果默认显示10条，多余10条则显示加载更多
- 增加搜索结果的点击事件
- 增加目录菜单的点击事件

## 6.25-6.27
- 三个颜色像相关的字段修改颜色值后点击保存，接口报错500
- 发邮件需要接口
- 分享弹框，显示一个二维码，二维码生成接口
- 点击下载的弹框，下载内容的链接和内容大小
- 点击Text Selection弹框，细节明确
- 点击缩略图icon交互细节

## web端验收修改
1. 保存与向下箭头，是两个元素，点击向下箭头，才会弹出 对话框，
2. 对话杠与 按钮保持左对齐
- “welcome Guid to"是来自于获取文档的title, 当修改 书名时， 这个title是要变化的
4. 展开的菜单背景为灰， 
- . 工具栏与右边有一条分割线




