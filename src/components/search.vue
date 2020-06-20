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

                    
                } else {
                    this.$message({
                      message: '搜索内容不能为空',
                      type: 'warning'
                    });
                }
            },

        }
    }

</script>


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

</style>
