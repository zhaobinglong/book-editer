<template>
    <ul class="search-box" v-if="showSearchBox">
        <li class="title">搜索</li>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search for..." v-model="searchKey">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button" @click="search">Go!</button>
              </span>
            </div>
        <li class="text-list" v-for="item in searchList">
            <p class="item">
                第{{ item.page }}页. {{ item.description }}
            </p>
        </li>
    </ul>
</template>

<script>
    import { search } from '@/api/index';
    export default {
        data() {
            return {
                searchList: [],
                searchKey: ''
            }
        },
        methods: {
            // 点击搜索按钮
            async search () {
                if (this.searchKey) {
                  
                  this.searchList = await search({})

                    
=======
            <p class="item" @click="clickItem(item)">
                第{{ item.page }}页. {{ item.description }}
            </p>
        </li>
        <li class="search-more" v-if="searchList.length" @click="addMore">{{ showMore }}</li>
    </ul>
    <div v-else class="earch-box-small">
        <span class="earch-box-small-tip">外链</span><i class="el-icon-search" @click="showSearch"></i>
    </div>
</template>

<script>
    import {search} from '@/api/index'
    export default {
        props: {
            navigation: ''
        },
        data() {
            return {
                searchKey: '',
                searchList: [],
                showMore: '还有10条记录',
                showBox: false
            }
        },
        computed: {
          showSearchBox: function () {
            if (this.navigation == '搜索' || this.showBox) {
                return true
            } else {
                return false
            }
          }
        }, 
        methods: {
            showSearch () {
              // this.$emit('showCityName',data)
              this.showBox = true
            },
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
>>>>>>> debug2
                } else {
                    this.$message({
                      message: '搜索内容不能为空',
                      type: 'warning'
                    });
                }
            },
<<<<<<< HEAD

        }
=======
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
>>>>>>> debug2
    }

</script>

<<<<<<< HEAD

<style>
    .tags {
        position: relative;
        height: 30px;
        overflow: hidden;
        background: #fff;
        padding-right: 120px;
    }

    .tags ul {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }

    .tags-li {
        float: left;
        margin: 3px 5px 2px 3px;
        border-radius: 3px;
        font-size: 12px;
        overflow: hidden;
        cursor: pointer;
        height: 23px;
        line-height: 23px;
        border: 1px solid #e9eaec;
        background: #fff;
        padding: 0 5px 0 12px;
        vertical-align: middle;
        color: #666;
        -webkit-transition: all .3s ease-in;
        -moz-transition: all .3s ease-in;
        transition: all .3s ease-in;
    }

    .tags-li:not(.active):hover {
        background: #f8f8f8;
    }

    .tags-li.active {
        color: #fff;
    }

    .tags-li-title {
        float: left;
        max-width: 80px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 5px;
        color: #666;
    }

    .tags-li.active .tags-li-title {
        color: #fff;
    }

    .tags-close-box {
        position: absolute;
        right: 0;
        top: 0;
        box-sizing: border-box;
        padding-top: 1px;
        text-align: center;
        width: 110px;
        height: 30px;
        background: #fff;
        box-shadow: -3px 0 15px 3px rgba(0, 0, 0, .1);
        z-index: 10;
    }
=======
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
.earch-box-small {
    padding: 10px 20px;
}
.earch-box-small-tip {
    background-color: #CFCFCF;
    display: inline-block;
    padding: 4px 10px;
    margin-right: 10px;
}
>>>>>>> debug2

</style>
