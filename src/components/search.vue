<template>
    <ul class="search-box">
        <li class="title">搜索</li>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search for..." v-model="searchKey">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button" @click="search">Go!</button>
              </span>
            </div>
        <li class="text-list" v-for="item in searchList">
            <p class="item" @click="clickItem(item)">
                第{{ item.page }}页. {{ item.description }}
            </p>
        </li>
        <li class="search-more" v-if="searchList.length" @click="addMore">{{ showMore }}</li>
    </ul>
</template>

<script>
    import {search} from '@/api/index'
    export default {
        props: {},
        data() {
            return {
                searchKey: '',
                searchList: [],
                showMore: '还有10条记录'
            }
        },
        methods: {
            async addMore() {
               if (this.showMore == '还有10条记录') {
                   let moreData = await search({})
                   this.searchList = this.searchList.concat(moreData)
                   this.showMore = '没有更多了'
               } 
            },
            clickItem (item) {
                this.$alert(item.description, '提示', {
                  confirmButtonText: '确定',
                  callback: action => {}
                });
            },
            // 点击搜索按钮
            async search () {
                if (this.searchKey) {
                  this.searchList = await search({})
                  console.log(this.form)
                } else {
                    this.$message({
                      message: '搜索内容不能为空',
                      type: 'warning'
                    });
                }
            },
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
/* 右侧 */
.search-box {
    width: 250px;
    list-style: none;
    background-color: #e6e6e6;
    background-color: #FFF;
    height: 100vh;
    overflow-y: scroll;
}

.search-box li {
    width: 100%;
    padding: 10px 15px;
}

.search-box .title {
    width: 100%;
    font-weight: bold;
}

.search-box .title :first-child {
    margin-right: 15px;
}

.search-box .title :last-child {
    margin-left: 159px;
    color: #9d9d9d;
}

.search-box li:nth-child(2) {
    background-color: #fff;
    padding: 5px 15px;
}

.search-box li:nth-child(2) input {
    width: 75%;
    border: 1px solid #c6c6c7;
}

.search-box li .close-icon {
    color: #afafaf;
    margin-left: -20px;
    padding: 0;
}

.search-box li button {
    height: 22px;
    margin-left: 10px;
    width: 30px;
    border: 0;
    background-color: #aeaeae;
}

.search-box li button > span {
    color: #fff;
}

.search-box li:nth-child(3) {
    padding: 7px 15px;
}

.search-box li:nth-child(3),
.search-box .text-list {
    padding: 7px 15px;
    color: #7f7d7d;
    background-color: #ebebeb;
    font-size: 12px;
    font-weight: 600;
}

.search-box .item {
    height: 50px;
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    margin-bottom: 5px;
}

.search-box .text-list span {
    color: #aaa;
}
.search-box .search-more {
    text-align: center;
}

</style>
