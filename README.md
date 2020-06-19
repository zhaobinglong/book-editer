## 如何开发

打开命令行，进入根目录，执行：
```
browser-sync start --server --files "css/*.css, *.html"
```

## 后端API记录
https://baige.w.eolinker.com/#/home/ams/project/inside/api/list?groupID=1007534&projectHashKey=1p1TgW9351875c5c90550139cf822a516e8e2bc71a19f0c&spaceKey=baige


## 第一阶段开发记录
- 显示所有的菜单
- 通过点击菜单控制中央区域图标的显示
- 缩略图和目录单独一列，显示在菜单栏右侧
- 点击图标显示缩略图和目录
- 图标栏目悬浮在页面底部
- 页码区域悬浮在页面顶部

## 第二阶段开发记录
- 菜单要互斥，打开一个，其他都要关闭
- 分享弹框
- 下载弹框（点击下载icon，弹出框）
- 电话
- 邮件（点击icon，弹出弹窗，提示发送至邮箱，有一个确定按钮）
- save, 设为默认
- 下滑条滑动时，  home与save所在的div始终存在；
- branding与controls 这些组，只有一个处于展开状态
- 展开的组色彩 #EEE；
6. 按照接口列表，写出所有js
- 篇目 改成目录;多层结构
- 缩略图与目录，都需要点击才显示，而且只能显示一个
- 缩略图为懒加载