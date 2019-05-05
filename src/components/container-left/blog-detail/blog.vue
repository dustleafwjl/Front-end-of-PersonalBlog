<template>
    <div class="blog">
        <div class="blog_title">{{blog.title}}</div>
        <div class="blog_msg">作者：WJL 标签：{{blog.tags}} 发布于：{{blog.ctime}} 浏览({{blog.views}})</div>
        <div class="blog_content" v-html="blog.content"></div>
    </div>
</template>
<script>
import axios from '@/axios.js'
import showdown from 'showdown'
import '@/assets/css/index/makedown.css'

export default {
    data() {
        return {
            blog: {}
        }
    },
    computed: {
        bid() { return this.$route.query.bid}
    },
    watch: {
        bid(oldVal, newVal) {
            this.init();
        }
    },
    methods: {
        init() {
            axios({
                method: "get",
                url: `/queryBlogById?bid=${this.bid}`
            }).then( res => {
                this.blog = res.data.data[0];
                const converter = new showdown.Converter();
                this.blog.content = converter.makeHtml(this.blog.content);
            }).catch( error => {
                console.log("错误！")
            });
            
        }
    },
    created() {
        this.init();
    }
}
</script>

<style scoped lang="less">
/* @import url("../../../assets/css/index/makedown.css"); */
.blog {
    box-sizing: border-box;
    width: 98%;
    background-color: #fff;
    border-radius: 6px;
    padding: 15px 20px;
    box-shadow: 3px 4px 3px #888;
    .blog_title {
        font-size: 20px;
        font-weight: 400;
        color: #13102b;
    }

    .blog_msg {
        padding-top: 10px;
        padding-bottom: 20px;
        border-bottom: 1px solid #424242;
        margin-bottom: 20px;
        font-size: 14px;
    }

    .blog_content {
        padding: 15px 10px;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
    }
    a {
        text-decoration: none;
        color: #f66;
        border-bottom: 2px solid transparent;
        &:hover {
            color: #f33;
            border-bottom-color: #f33;
        }
    }
}

</style>