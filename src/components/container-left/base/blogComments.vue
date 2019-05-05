<template>
    <div class="blog_comments">
        <span class="blog_comments_msg">关于：目前有{{total}}条留言</span>
        <div class="blog_comment" v-for="item in commentList" :key="item.id">
            <span>
                <b>{{item.user_name}}</b>
                ：{{item.options}}发表于{{item.ctime}}
                <a href="#send_comments" @click="replyComment(item.id, item.user_name)">[回复]</a>
            </span>
            <div>{{item.comments}}</div>
        </div>
    </div>
</template>
<script>
import axios from '@/axios.js'

export default {
    data() {
        return {
            total: 0,
            commentList: []
        }
    },
    computed: {
        bid() {
            return this.$route.query.bid;
        }
    },
    watch: {
        bid(oldVal, newVal) {
            this.init();
        }
    },
    methods: {
        replyComment(blogId, parentName) {
            const reply = document.getElementById("comment_reply");
            const parent = document.getElementById("comment_reply_name");
            reply.value = blogId;
            parent.value = parentName;
        },
        init() {
            axios({
                method: "get",
                url: `/queryCommentsByBlogId?bid=${this.bid}`
            }).then( res => {
                this.commentList = res.data.data;
                this.commentList.map( ele => {
                    ele.options = "";
                    if(ele.parent > -1) {
                        ele.options = `回复@${ele.parent_name}`;
                    }
                    return ele;
                });
            }).catch( error => {
                console.log(error);
            });
            axios({
                method: 'get',
                url: `/queryBlogCommentCount?bid=${this.bid}`
            }).then( res => {
                this.total = res.data.data[0].count;
            }).catch( error => {
                console.log(error);
            })
        }
    },
    created() {
        this.init();
    }
}
</script>

<style scoped lang="less">
.blog_comments {
    width: 100%;
    margin-top: 15px;
    .blog_comment {
        width: 95%;
        background-color: #f5f5f5;
        border: 1px dashed #7ca4c1;
        padding: 10px 10px 20px 10px;
        margin-top: 10px;
        color: #31708f;
    }
}
</style>