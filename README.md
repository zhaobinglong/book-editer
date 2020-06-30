## 如何开发

打开命令行，进入根目录，执行：
```
browser-sync start --server --files "css/*.css, *.html"
```

## 后端API记录
https://baige.w.eolinker.com/#/home/ams/project/inside/api/list?groupID=1007534&projectHashKey=1p1TgW9351875c5c90550139cf822a516e8e2bc71a19f0c&spaceKey=baige

## 本地开发访问域名
http://127.0.0.1:8000/


## css背景色控制
https://www.w3school.com.cn/cssref/pr_background.asp

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


## 验收后web端修改
1. ✅保存 左右两边padding 20px;
2. ✅设为默认，点击页面其他位置隐藏
3. ✅保存时，无需弹窗显示"保存成功"
4. ✅如果已有背景，在选择皮肤时，显示“保持当前背景”,点击确认，更新皮肤，无需“保存成功”.此时还没有保存
5. ✅编辑logo,内容区，灰色没有padding, 工具标志， padding:10px,logo:max-height:50px;max-width:250px;
6. ✅favico,网页图标， 在default前显示该图标；
7. ✅color palette 样式参照文档，应该是窗口中间弹窗
8. ✅输入框的label,都不要粗体
9. 在缩略图处增加 "目录"项（ 接口没有控制目录的字段）
10. ✅在底部工具，不显示 "在线客服"与搜索按钮
11. 电话，邮件，分享，下载为第一组，缩略图，目录为第二组， 放大，全屏，声音为第三组。用分格线格开。
12. ✅下载图标，PDF https://cn.bing.com/images/search?view=detailV2&ccid=hHKSHPp9&id=19DD14978D329A32703CA95F9A06331AD3A61F9F&thid=OIP.hHKSHPp92lxq0oYurNcKpwHaHa&mediaurl=https%3a%2f%2fcdn1.iconfinder.com%2fdata%2ficons%2fCrystalClear%2f128x128%2fmimetypes%2fpdf.png&exph=128&expw=128&q=pdf+icon&simid=608016954870006282&ck=29C321ECD13E4E731CAF41B8061A6388&selectedIndex=11&qft=+filterui%3aphoto-transparent+filterui%3aimagesize-small&ajaxhist=0
13. ✅下载出版物前加下载icon.
14. ✅下载灰框，加大padding,减少margin.
15. ✅减少宽度到 PC 版 350px;
16. ✅电话弹窗，将“提示”改为"电话" 前面加电话图标， 在下面显示灰框，居中显示“电话号码:130000000",确定按钮居中。
17. 在工具栏禁止 在线聊天， 消除 该dom(第10条中工具栏上不显示在线客服按钮)
18. ✅分享弹窗，前加分享图标。 复制，在输入框下面，float:right; 弹窗宽度350px;
19. ✅邮件弹窗，邮件前加图标， 宽度为350px; 
20. ✅密码控制 ，遮罩不透明， 输入框与确定按钮一体化， 在图标上，添加文档标题， 为封面下添加“该文档为非公开文档，请输入密码打开”
21. ✅缩略图、目录、搜索样式参考 “皮肤与背景”文档上的图片
22. PC与ipad 横版样式一致， ipad竖版与手机版一致，手机版排版参见上次的图片，  手机里电话，下载等弹窗占满屏幕。取消按钮在右下角。 缩略图，搜索与目录，右边空出80px;




