    
import './css/index.css'
import './css/switch.css'

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; 
import vSearch from './components/search.vue';
var api=require("./api/index");

//引入你mock.js文件
require('./mock/index.js')

Vue.use(ElementUI);

// vue接管列表数据渲染
new Vue({
  el: '#app',
  // components:{
  //   vSearch
  // },
  data: {
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
    navigation: [
      {value: 'Table of Contents', checked: false},
      {value: 'Thumbnails', checked: false},
      {value: 'Notes', checked: false},
      {value: 'None', checked: false},
      {value: 'Search', checked: false}
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
    form: {
      title: '',
      description: '',
      share: {
        link: 'baidu.com',
        qrcode: 'https://efile.kaoyan.com/img/2020/05/25/193611_5ecbadab863ec.png'
      },
      color: '#EEE',
      navigation: 'Default ...',
      button: {
        delivery: '',
        text: '',
        address: ''
      },
      placement: 'fill',
      background: {
        url:'',
        fit:['fit','fill','fixx'],
        filling: 'center'
      },
      logo: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
      logoInput: '',
      favicon: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
      faviconInput: '',
      info: [
        {label: 'name', value: ''},
        {label: 'desc', value: ''},
      ],
      email: [
        {label: '服务器', value: ''},
        {label: '端口', value: ''},
        {label: '密码', value: ''},
        {label: '账户', value: ''},
        {label: '欢迎词', value: ''},
        {label: '签名', value: ''}
      ],
      staff: [
        {label: '客服widget', value: ''},
      ],
      phone: [
        {label: '号码', value: ''},
      ]
    },
    message: 'Hello Vue!',
    controls: [
      {'group':1, 'title': '分享', 'icon': 'iconfenxiang2', 'checked': false},
      {'group':1, 'title': '下载', 'icon': 'iconxiazai', 'checked': false},
      {'group':1, 'title': 'Text Selection', 'icon': 'icontext_tool', 'checked': false},
      {'group':1, 'title': '缩略图', 'icon': 'iconview-thumbs', 'checked': false, 'bottomLine': true},
      {'group':2, 'title': '声音', 'icon': 'iconmute-off', 'checked': false},
      {'group':2, 'title': '全屏', 'icon': 'iconfull-screen', 'checked': false},
      {'group':2, 'title': '放大镜', 'icon': 'iconzoom-in', 'checked': false},
      {'group':2, 'title': '搜索', 'icon': 'iconsearch', 'checked': false, 'bottomLine': true},
      // {'title': 'Default Navigation',  'checked': false},
      // {'title': 'Contacts Button',  'checked': false},
      {'group':3, 'title': '电话', 'icon': 'icontelphone', 'checked': false, hidden: true, 'label':'setPhone'},
      {'group':4, 'title': '在线客服', 'icon': 'iconchat', 'checked': false, hidden: true, 'label':'setStaff'},
      {'group':5, 'title': '邮件', 'icon': 'iconEMAIL', 'checked': false, hidden: true, 'label':'setEmail'},
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
  mounted() {      
     api.getBook({}).then(res => {
        Object.assign(this.form, res)
     })

     api.getSetting({}).then(res => {
        Object.assign(this.form, res)
     })     
  },
  destroyed() {
    // window.removeEventListener("beforeunload", e => {
    //     this.beforeunloadHandler(e);
    // });
  },

  methods: {
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
      this.navigation = this.navigation.map(item => {
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

        this.form.favicon = ''
        console.log(this.form.favicon)
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
    saveLogo () {
      this.dialogLogo = false
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
    save () {
        // this.$message({
        //   message: '保存成功',
        //   type: 'success'
        // });  
    },
    goBack () {
      window.history.back(-1); 
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