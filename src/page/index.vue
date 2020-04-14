<template>
    <div class="blog-content">
        <every-word />
        <blog-item v-for="(item, index) in articleList" :key="index" :blog="item"/>
        <div class="pagination">
            <ul>
                <li @click="jump(page - 1)">上一页</li>
                <li v-for="item in pagination" :key="item.text" @click="jump(item.to)" :class="{active: page == item.text}">{{item.text}}</li>
                <li @click="jump(page + 1)">下一页</li>
            </ul>
        </div>
    </div>
</template>
<script>
import EveryWord from '@/components/container-left/index/everyWord.vue'
import BlogItem from '@/components/container-left/index/blogItem.vue'
import axios from '@/axios.js'


export default {
    data() {
        return {
            page: 1,
            pageSize: 6,
            articleList: [],
            BlogCount: 10
        }
    },
    components: {
        BlogItem,
        EveryWord
    },
    computed: {
        pagination() {
            let result = [];
            const Count = Math.ceil(this.BlogCount / this.pageSize);
            const limit = 4;
            for (let i = 0; i < Count; i++) {
                result.push({
                    text: i + 1,
                    to: i + 1
                });
            }
            return result;
        },
        tag() {
            return this.$store.state.tag;
        }
    },
    watch: {
        tag(oldVal, newOld) {
            // 重置当前页数
            this.page = 1;
            if(oldVal != '') {
                this.getPageByTag(this.page, this.pageSize, this.tag);
                this.getBlogCountByTag();
            } else {
                this.getPage(this.page, this.pageSize);
                this.getBlogCount();
            }
        }
    },
    methods: {
        getPage(page, pageSize) {
            axios({
                method: "get",
                url: `/queryBlogByPage?page=${page - 1}&pageSize=${pageSize}`
            }).then(res => {
                let result = res.data.data;
                result.map(ele => {
                    ele.date = ele.ctime;
                    ele.link = `/blog_detail.html?bid=${ele.id}`;
                    return ele;
                });
                this.articleList = result;
            }).catch(res => {
                console.log("请求错误！")
            });
        },
        jump(page) {
            const count = Math.ceil(this.BlogCount / this.pageSize);
            if (page <= 0) {
                page = 1;
            }
            if (page >= count) {
                page = count;
            }
            
            if(this.tag != "" && this.page != page) {
                this.getPageByTag(page, this.pageSize, this.tag);
            }else {
                if(this.page != page) {
                    this.getPage(page, this.pageSize);
                }
            }
            this.page = page;
        },
        getPageByTag(page, pageSize, tag) {
            axios({
                method: "get",
                url: `/queryBlogByTag?page=${page - 1}&pageSize=${pageSize}&tag=${tag}`
            }).then(res => {
                let result = res.data.data;
                result.map(ele => {
                    ele.date = ele.ctime;
                    ele.link = `/blog_detail.html?bid=${ele.id}`;
                    return ele;
                });
                this.articleList = result;
            }).catch(res => {
                console.log("请求错误！")
            });
        },
        getBlogCount() {
            axios({
                method: "get",
                url: "/queryBlogCount"
            }).then(res => {
                this.BlogCount = res.data.data[0].count;
            });
        },
        getBlogCountByTag() {
            axios({
                method: "get",
                url: `/queryBlogByTagCount?tag=${this.tag}`
            }).then(res => {
                this.BlogCount = res.data.data[0].count;
            });
        }
    },
    created() {
        // 从后端拿取数据
        if (this.tag == '') {
            this.getPage(this.page, this.pageSize);
            this.getBlogCount();
        } else {
            this.getPageByTag(this.page, this.pageSize, this.tag);
            this.getBlogCountByTag();
        }
    }
}
</script>

<style scoped lang="less">
.blog-content {
    width: 100%;
    border-radius: 5px;
    /* 分页 */
    .pagination {
        margin-top: 20px;
        ul {
            list-style: none;
            font-size: 0px;
            border-radius: 5px;
            overflow: hidden;
            display: inline-block;
            cursor: pointer;
            li {
                &:nth-of-type(1) {
                    width: 80px;
                }
                &:last-of-type {
                    width: 80px;
                }
                &:hover {
                    background-color: #eee;
                }
                &.active {
                    background-color: #292421;
                    color: #fff;
                    border: none;
                }
                display: inline-block;
                width: 35px;
                font-size: 16px;
                line-height: 35px;
                height: 35px;
                text-align: center;
                background-color: #fff;
                color: #000;
                border-left: 1px solid #ddd;
            }
        }
    }
}

</style>