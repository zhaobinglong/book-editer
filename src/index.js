    
import './css/index.css'
import './css/switch.css'

// 图片列表懒加载插件
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
   preLoad: 1.3,
   loading:'./static/loading.gif',
   attempt: 1
})

var api=require("./api/index");
const Qs = require('qs');

import thumbnails from '@/components/thumbnail'
import search from '@/components/search'
import axios from 'axios'

//引入你mock.js文件
// require('./mock/index.js')



// vue接管列表数据渲染
var app = new Vue({
  el: '#app',
  components: {
    // mavonEditor
    thumbnails,
    search
  },
  data: {
    visible: false,
    treeData: [{
      label: '一级 1',
      children: [{
        label: '二级 1-1',
        children: [{
          label: '三级 1-1-1'
        }]
      }]
    }, {
      label: '一级 2',
      children: [{
        label: '二级 2-1',
        children: [{
          label: '三级 2-1-1'
        }]
      }, {
        label: '二级 2-2',
        children: [{
          label: '三级 2-2-1'
        }]
      }]
    }, {
      label: '一级 3',
      children: [{
        label: '二级 3-1',
        children: [{
          label: '三级 3-1-1'
        }]
      }, {
        label: '二级 3-2',
        children: [{
          label: '三级 3-2-1'
        }]
      }]
    }],
    rank: [
      {icon: 'el-icon-top-left', checked: false},
      {icon: 'el-icon-top', checked: false},
      {icon: 'el-icon-top-right', checked: false},
      {icon: 'el-icon-back', checked: false},
      {icon: 'el-icon-rank', checked: false},
      {icon: 'el-icon-right', checked: false},
      {icon: 'el-icon-bottom-left', checked: false},
      {icon: 'el-icon-bottom', checked: false},
      {icon: 'el-icon-bottom-right', checked: false}
    ],
    skins: [
      {index: 1, name: 'xxx', url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', checked: false},
      {index: 2, name: 'xxx', url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', checked: false},
      {index: 3, name: 'xxx', url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', checked: false},
      {index: 4, name: 'xxx', url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', checked: false},
      {index: 5, name: 'xxx', url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', checked: false},
      {index: 6, name: 'xxx', url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', checked: false},
      {index: 7, name: 'xxx', url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', checked: false},
    ],
    navigationArr: [
      {value: '目录', checked: false},
      {value: '缩略图', checked: false},
      {value: '无', checked: false},
      {value: '搜索', checked: false}
    ],
    showMenu: true,
    fileList: [],
    searchKey: '',
    searchDialog: false,
    setPassWord: false,
    setPhone: false,
    setStaff: false,
    setEmail: false,
    dialogSkin: false,
    dialogLogo: false,
    dialogColor: false,
    dialogBackground: false,
    dialogFavicon: false,
    dialogButton: false,
    dialogShare: false,
    dialogDownload: false,
    saveBtn: '保存',
    color: '#EEE',
    
    form: {
      "bookId": 1,
      "main": true,
      "skin": "2",
      "background": "1",
      "backgroundFill": 1,
      "backgroundPlace": 1,
      "colorPanel": 1,
      "colorBackground": 1,
      "colorLink": 1,
      "external": "1",
      "externalText": "1",
      "externalEnable": false,
      download: false,
      share: false,
      sound: false,
      search: false,
      navigation: '目录',
      userId: 1,
      title: '',
      description: '',
      placement: 'fill',
      logo: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
      favico: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
      chatEnable: false,
      chat: '',
      contactTel: '',
      contactEnable: false,
      emailEnable: false,
      emailWelcome: "1",
      emailPort: 1,
      emailServer: "1",
      emailUsername: "1",
      emailPassword: "1",
      emailSign: "1",
      password: '',
      passwordEnable: false,
    },
      background: {
        url:'',
        fit:['fit','fill','fixx'],
        filling: 'center'
      },
    share: {
      link: 'baidu.com',
      qrcode: 'https://efile.kaoyan.com/img/2020/05/25/193611_5ecbadab863ec.png'
    },
    button: {
      delivery: '',
      text: '',
      address: ''
    },
    info: [
      {label: 'name', value: ''},
      {label: 'desc', value: ''},
    ],
    staff: [
      {label: '客服widget', value: ''},
    ],
    phone: [
      {label: '号码', value: ''},
    ],
    email: [
      {label: '服务器', value: 'emailServer'},
      {label: '端口', value: 'emailPort'},
      {label: '密码', value: 'emailPassword'},
      {label: '账户', value: 'emailUsername'},
      {label: '欢迎词', value: 'emailWelcome'},
      {label: '签名', value: 'emailSign'}
    ],
    message: 'Hello Vue!',
    controls: [
      {'group':1,'label': 'share', 'title': '分享', 'icon': 'iconfenxiang2', 'checked': false},
      {'group':1,'label': 'download','title': '下载', 'icon': 'iconxiazai', 'checked': false},
      {'group':1,'label': 'textSelect','title': 'Text Selection', 'icon': 'icontext_tool', 'checked': false},
      {'group':1,'label': 'thumbnail','title': '缩略图', 'icon': 'iconview-thumbs', 'checked': false, 'bottomLine': true},
      {'group':2,'label': 'sound','title': '声音', 'icon': 'iconmute-off', 'checked': false},
      {'group':2,'label': 'fullScreen','title': '全屏', 'icon': 'iconfull-screen', 'checked': false},
      {'group':2,'label': 'zoom','title': '放大镜', 'icon': 'iconzoom-in', 'checked': false},
      {'group':2,'label': 'search','title': '搜索', 'icon': 'iconsearch', 'checked': false, 'bottomLine': true},
      // {'title': 'Default Navigation',  'checked': false},
      // {'title': 'Contacts Button',  'checked': false},
      {'group':3,'label': 'contactEnable','title': '电话', 'icon': 'icontelphone', 'checked': false, hidden: true, 'label':'setPhone'},
      {'group':4,'label': 'chatEnable','title': '在线客服', 'icon': 'iconchat', 'checked': false, hidden: true, 'label':'setStaff'},
      {'group':5,'label': 'emailEnable','title': '邮件', 'icon': 'iconEMAIL', 'checked': false, hidden: true, 'label':'setEmail'},
    ],
    treeData: [{
      label: '一级 1',
      children: [{
        label: '二级 1-1',
        children: [{
          label: '三级 1-1-1'
        }]
      }]
    }, {
      label: '一级 2',
      children: [{
        label: '二级 2-1',
        children: [{
          label: '三级 2-1-1'
        }]
      }, {
        label: '二级 2-2',
        children: [{
          label: '三级 2-2-1'
        }]
      }]
    }, {
      label: '一级 3',
      children: [{
        label: '二级 3-1',
        children: [{
          label: '三级 3-1-1'
        }]
      }, {
        label: '二级 3-2',
        children: [{
          label: '三级 3-2-1'
        }]
      }]
    }],
    searchList: [] 
  },
  watch: {
    setPhone: function (newValue, oldValue) {
      this.controls.map((item, index) => {
        if (item.label == 'setPhone') {
            item.checked = newValue
            this.$set(this.controls, index, item)
        }
      })
    },   
    setStaff: function (newValue, oldValue) {
      this.controls.map((item, index) => {
        if (item.label == 'setStaff') {
            item.checked = newValue
            this.$set(this.controls, index, item)
        }
      })
    }, 
    setEmail: function (newValue, oldValue) {
      this.controls.map((item, index) => {
        if (item.label == 'setEmail') {
            item.checked = newValue
            this.$set(this.controls, index, item)
        }
      })
    },      
  },
  computed: {
    icons: function () {
      let arr = this.controls.filter(item => item.checked )
      console.log(arr)
      arr.map((item, index) => {
        console.log(item.group, index)
        if (index < arr.length-1 ) {
            if (item.group != arr[index + 1].group) {
              item.rightLine = true   
            } else {
              item.rightLine = false 
            } 
        }
        return item
      })
      // 最有一个icon的右侧不能有分隔符号
      if (arr.length > 0) {
        arr[arr.length-1].rightLine = false
      }
      return arr
    }
  },  
  watch: {
      form:{
        handler:function(val,oldval){
          console.log(val)
          this.saveBtn = '保存'
        },
        deep:true//对象内部的属性监听，也叫深度监听
      },
  } ,  
  mounted() {    
     let id = this.getUrlParam('bookId')
     // api.getBook({}).then(res => {
     //    Object.assign(this.form, res)
     // })

     // api.getSetting({}).then(res => {
     //    Object.assign(this.form, res)
     // })   
     let data = {bookId: id || 2 }
     api.getFlipbook(data).then(res => {
      console.log(res)
      Object.assign(this.form, res)
     })
     api.getMainSetting(data).then(res => {
      console.log(res)
      if (res && res.created) {
        delete res.created
      }

      if (res && res.updated) {
        delete res.updated
      }
        
      Object.assign(this.form, res)
     })  
  },
  destroyed() {
    // window.removeEventListener("beforeunload", e => {
    //     this.beforeunloadHandler(e);
    // });
  },

  methods: {
    getUrlParam: function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]);
        return '';
    },
    handleLogoChange (file) {
        const formData = new FormData()
        this.formData.file = file.raw
        this.formData.name = file.name
        // upload(formData) //调用上传方法,传递FormData格式的参数
        this.fileChange = false      
    },
    uploadBackground(files) {
        console.log(files)
        let formData = new FormData()
        formData.append('file', files.file)
        api.saveSettingImage(formData).then(res => {
          console.log(res)
          this.form.background = res
        })      
    },
    uploadFavicon(files) {
        console.log(files)
        let formData = new FormData()
        formData.append('file', files.file)
        api.saveSettingImage(formData).then(res => {
          console.log(res)
          this.form.favico = res
        })
    },
    uploadFile (files) {
        console.log(files)
        let formData = new FormData()
        formData.append('file', files.file)
        api.saveSettingImage(formData).then(res => {
          console.log(res)
          this.form.logo = res
        })
       // axios.post('http://m.baige.me/api/book/saveSettingImage', null, {
       //    transformRequest: [() => {
       //      let formData = new FormData()
       //      formData.append('file', files.file)
       //      return formData
       //    }
       //  ]
       // }).then(data => {
       //  console.log(data)
       // })
    },
    handleLogoSuccess (res, file) {
      console.log(res)
    },
    handleNodeClick (item) {
      console.log(item)
      this.$message({
        message: `你点击了目录：${item.label}`,
        type: 'success'
      }); 
    },
    toggleMenu () {
      this.menu.toggleMenu = !this.menu.toggleMenu
    },
    copy () {
        this.$message({
          message: '复制成功',
          type: 'success'
        }); 
    },
    clickRank (item) {
      console.log(item)
      this.rank = this.rank.map((i) => {
        if (i.icon == item.icon) {
            i.checked = true
            this.form.background.filling = i.icon
        } else {
            i.checked = false
        }
        return i
      })
      console.log(this.rank)
    },
    logoSetting () {
      this.form.logo = ''
    },
    navigationSetting (obj) {
      console.log(obj)
      this.navigationArr = this.navigationArr.map(item => {
         if (item.value == obj.value) {
            item.checked = true
            this.form.navigation = item.value
         } else {
            item.checked = false
         }
         return item
      })
    },
    input () {
      
    },
    faviconSetting () {
        this.form.favico = ''
        console.log(this.form.favico)
    },
    handleRemove(file, fileList) {
        console.log(file, fileList);
    },
    handlePreview(file) {
        console.log(file);
    },

    clickSkinItem (item) {
      this.skins = this.skins.map(i => {
        if (i.index === item.index) {
            i.checked = true
        } else {
            i.checked = false
        }
        return i
      })
    },
    clickSelectSkin () {
        this.dialogSkin = true
    },
    handleLogoDialog () {
        this.dialogLogo = !this.dialogLogo
    },
    saveSkin () {
        let hadSelect = this.skins.some(item => item.checked)
        if (hadSelect) {
            this.$message({
              message: '保存成功',
              type: 'success'
            });
        } else {
            this.$message({
              message: '没有选择不能保存',
              type: 'warning'
            });                
        }  
        this.dialogSkin = false
    },
    clickIcon (item) {
        console.log(item)
        if (item.title == '下载') {
            this.dialogDownload = true              
        } else if (item.title == '分享') {
            this.dialogShare = true
        } else if (item.title == '缩略图') {
            this.showMenu = true
        } else if (item.title == '电话') {
            this.$alert(`拨打电话136-1851-6602`, '提示', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
        } else if (item.title == '邮件') {
            this.$alert(`发送邮件到 570869214@qq.com`, '提示', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
        } else{
            this.$alert(`你点击了${item.title}按钮`, '提示', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
        }
    },
    handleClose () {

    },
    setIconClass (item) {
      if (item.rightLine) {
        return 'right-line ' + item.icon
      } else {
        return item.icon
      }
    },

    // 保存修改
    mainSave () {
      // let data = {}
      // for(let key  in this.form){
      //    if(typeof this.form[key] == 'boolean') {
      //      this.form[key] = !this.form[key]
      //      // data[key] = this.form[key].
      //    } else {
      //      data[key] = this.form[key]
      //    }
      // }
      // console.log(data)

      api.saveSetting(Qs.stringify(this.form)).then(res => {
        console.log(res)
        this.saveBtn = '已保存'
        this.dialogLogo = false
        this.dialogFavicon = false
        this.dialogBackground = false
        this.dialogButton = false
      })  
    },
    goBack () {
      if (this.saveBtn == '保存') {
        this.$confirm('你的修改不会被保存, 是否继续?', '提示', {
          confirmButtonText: '继续',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          window.history.back(-1); 
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      } else {
        
      }
      
    },
    beforeunloadHandler(e) {
      e = e || window.event;
      if (e) {
        e.returnValue = "您是否确认离开此页面-您输入的数据可能不会被保存";
      }
      return "您是否确认离开此页面-您输入的数据可能不会被保存";
    },
    clickTopButton (item) {
        console.log(item)
        this.$message({
          message: '你点击了' + item.title + '按钮',
          type: 'info'
        });             
    },

    download (src, fileName) {
      let x = new XMLHttpRequest();
      x.open("GET", src, true);
      x.responseType = 'blob';
      x.onload = function(e) {
        let url = window.URL.createObjectURL(x.response)
        let a = document.createElement('a');
        a.href = url
        a.download = fileName
        a.click()
      }
      x.send();
    }
  }
})