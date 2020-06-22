<template>
    <div >
        <div  class="thum-item"  style="text-align: center;" v-for="(item, index) in myList" @click="clickItem(item, index)">
            <img
              v-lazy="url"
              style="width: 90px; height: 60px; display: block; margin: 10px auto"
              />
            <p>第{{ index + 1 }}页</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            list: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                myList: [],
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
            }
        },
        // 组件挂载完毕
        mounted(){
          for (var i = 0; i < 1000; i++) {
              this.myList.push(i)
          }
        },
        methods: {
            clickItem(item, index) {
                let page = index + 1
                this.$message({
                  message: `你点击了第${page}页`,
                  type: 'success'
                }); 
            }
        },
        // computed: {
        //     showTags() {
        //         return this.tagsList.length > 0;
        //     }
        // },
        // watch:{
        //     $route(newValue, oldValue){
        //         this.setTags(newValue);
        //     }
        // },
        // created(){
        //     this.setTags(this.$route);
        // }
    }

</script>

<style scoped>
.thum-item {
    width: 100%;
    padding: 6px 0;
    cursor: pointer;
}
.thum-item:hover {
    background-color: #EFEFEF
}

</style>
