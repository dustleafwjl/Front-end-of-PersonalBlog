<template>
    <div class="sitemap">
        <div class="title">SiteMap</div>
        <div class="link"> 
            <router-link :to="{name: 'index'}">博客首页</router-link>
            ->
            <a>站点地图</a>
        </div>
        <div class="blog_list">
            <h4>最新文章</h4>
            <ul>
                <li v-for="item in blogs" :key="item.id">
                    <router-link :to="{name: 'blogDetail', query: {bid: item.id}}" tag="a">{{item.title}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from '@/axios.js'

export default {
    data() {
        return {
            blogs: []
        }
    },
    created() {
        axios({
            method: "get",
            url: "/queryAllBlog"
        }).then( res => {
            this.blogs = res.data.data;
        })
    }
}
</script>

<style scoped lang="less">
.sitemap {
    
    background-color: #fff;
    .title {
        width: 100%;
        text-align: center;
        font-weight: 600;
        line-height: 50px;
        height: 50px;
        font-size: 20px;
    }

    .link {
        border: 1px solid #eee;
        padding: 10px;
        width: 95%;
        margin: 0 auto;
        font-size: 12px;
        text-decoration: none;
        a {
            color: #000;
            text-decoration: none;
        }
    }  
    .blog_list {
        width: 95%;
        border: 1px solid #eee;
        padding: 20px 10px;
        margin: 10px auto;
        font-size: 14px;
        font-weight: 400;
        ul {
            padding-left: 40px;
            font-size: 14px;
            
            margin: 10px auto;
            a {
                color: #181919;
            }
            li {
                margin-top: 5px;
            }
        }
    } 
}
</style>