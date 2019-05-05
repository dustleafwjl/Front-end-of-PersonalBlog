<template>
    <div class="header">
        <el-row :gutter="20">
            <el-col :span="6" :offset="0">
                <router-link class="title" tag="a" :to="{name: 'index'}" @click.native="changeTag">我的个人博客|技术博客</router-link>
            </el-col>
            <el-col :span="6" :offset="5">
                <ul class="meau">
                    <li>
                        <router-link tag="a" :to="{name: 'index'}" @click.native="changeTag">首页</router-link>
                    </li>
                    <li>
                        <router-link tag="a" :to="{name: 'sitemap'}">时间轴</router-link>
                    </li>
                    <li>
                        <router-link tag="a" :to="{name: 'about', query: {bid: -1}}">关于我</router-link>
                    </li>
                    <li>
                        <router-link tag="a" :to="{name: 'guestbook', query: {bid: -2}}">留言</router-link>
                    </li>
                </ul>
            </el-col>
            <el-col :span="6" :offset="1">
                <div class="search_bar">
                    <input type="text" placeholder="输入关键字查找">
                    <button>搜索</button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    methods: {
        changeTag() {
            this.$store.commit("setTag", '');
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    width: 80%;
    height: 50px;
    margin: 0 auto;
    min-width: 1170px;
    
    .el-row  {
        height: 50px;
        line-height: 50px;
        color: #fff;
        font-size: 16px;
        a.title {
            color: #fff;
            font-size: 18px;
        }
        a {
            border-bottom: 2px solid transparent;
            padding: 4px 0px;
            &:hover {
                border-bottom-color: #fff;
            }
        }
        .meau {
            li {
                display: inline-block;
                padding: 0 10px;
                a {
                    color: #fff;
                    font-size: 14px;
                }
            }
        }
        .search_bar {
            input {
                height: 22px;
                padding: 5px 10px;
                border-radius: 5px;
                outline: none;
                border: 1px solid;
            }
            button {
                width: 54px;
                height: 34px;
                padding: 5px 10px;
                border-radius: 5px;
                color: #555;
                background-color: #fff;
            }
        }
    }
}
</style>