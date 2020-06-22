<template>
    <div >
        <div  class="thum-item"  style="text-align: center;" v-for="(item, index) in myList" @click="clickItem(item, index)">
            <img
              v-lazy="url"
              style="width: 60px; height: 60px; display: block; margin: 10px auto"
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
                myList: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
                url: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
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
    width: 160px;
    margin: 0 auto;
}
.thum-item:hover {
    background-color: #EFEFEF
}

</style>
