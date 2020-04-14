<template>
    <div class="m-index">
        <div class="every_day" id="every_day">
            <span>每日一句</span>
            <p v-html="word"></p>
        </div>
        <article v-for="(blog, index) in blogList" :key="index">
            <router-link :to="{name: 'm-blogdetail', query: {bid: blog.id}}" tag="a" class="article_header">{{blog.title}}</router-link>
            <p class="article_content">{{blog.content}}</p>
            <div class="article_footer">发布于{{blog.date}} | 浏览({{blog.views}}) | Tags：{{blog.tags}}</div>
        </article>
        <div class="loading" v-show="loading">加载</div>
    </div>
</template>
<script>
import axios from '@/axios.js'


export default {
    data() {
        return {
            word: '',
            page: 1,
            blogList: [],
            loading: false
        }
    },
    // computed: {
    //     getWord() {

    //     }
    // },
    mounted() {
        // this.handleScroll();
        window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
        getWord() {
            axios({
                method: "get",
                url: "/queryEveryDay"
            }).then(res => {
                this.word = res.data.data[0].content;
            }).catch(res => {
                console.log("请求失败！");
            })
        },
        getBlogList() {
            const pageSize = 10;
            const page = this.page;
            axios({
                method: "get",
                url: `/queryBlogByPage?page=${page - 1}&pageSize=${pageSize}`
            }).then(res => {
                let result = res.data.data;
                result.map(ele => {
                    ele.date = ele.ctime;
                    ele.link = `/m-blog_detail.html?bid=${ele.id}`;
                    return ele;
                });
                this.blogList = this.blogList.concat(result);
                // this.loading = false;
            }).catch(res => {
                console.log("请求错误！");
                console.log(res);
            });
        },
        handleScroll() {
            const doc = document.documentElement;
            if(doc.scrollTop + doc.clientHeight + 200 >= doc.scrollHeight) {
                // console.log("eee");
                this.page ++;
                // this.loading = true;
                this.getBlogList();
            } else {
                // this.loading = false;
            }
        }
    },
    created() {
        this.getWord();
        this.getBlogList();
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    }
}
</script>

<style scoped lang="less">
.m-index {
    .every_day {
        border-radius: 8px;
        width: 7rem;
        text-align: left;
        box-shadow: 0.03rem 0.04rem 0.04rem #888;
        background-color: #fff;
        padding: 0.2rem;
        margin: 0 .2rem;
        // margin-bottom: 20px;
        box-sizing: border-box;
        &::before {
            font-family: MyIcon;
            content: "\e122";
            font-size: 0.24rem;
            color: slateblue;
            position: relative;
            display: block;
            height: 0px;
            left: 1.2rem;
            top: 0.02rem;

        }
        &>span {
            display: block;
            font-size: 0.28rem;
        }
    }
    article {
        background: #fff;
        display: inline-block;
        width: 7rem;
        border-radius: 5px;
        text-align: left;
        box-shadow: 1px 2px 3px 0px #888;
        // margin-top: 20px;
        margin: .2rem;
        .article_header {
            display: inline-block;
            font-size: .4rem;
            text-decoration: none;
            color: #13102b;
            text-align: left;
            padding: .2rem .1px .05rem .15rem;
            &:hover {
                color: #337ab7;
            }
        }
        .article_content {
            font-size: .28rem;
            text-align: left;
            color: #747474;
            padding: 0px .1rem .2rem .15rem;
            word-wrap: break-word;
            word-break: break-all;
            overflow: hidden;
        }
        .article_footer {
            color: #eee;
            background: #292421;
            font-size: .24rem;
            padding: 5px 10px 5px 15px;    
        }
    }
}
</style>