<template>
    <div class="wrap">
        <div class="editHead">
            <input type="text" placeholder="请输入标题" id="title" :value="blog.title">
            <input type="text" placeholder="请输入标签，用都好隔开" :value="blog.tags" id="tags">
            <button @click="submitBlog">提交修改</button>
            <hr />
        </div>
        <div id="editor">
            <mavon-editor 
                style="height: 100%"
                :value="blog.content"
                @save="save"
            ></mavon-editor>
        </div>
    </div>
</template>
<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from '@/axios.js'

export default {
    name: 'editor',
    data() {
        return {
            bid: this.$route.query.bid,
            blog: {},
            cacheBlog: {}
        }
    },
    components: {
        mavonEditor
        // or 'mavon-editor': mavonEditor
    },
    methods: {
        save(value, render) {
            const title = document.getElementById("title").value;
            const content = value;
            const tags = document.getElementById("tags").value;
            const bid = this.bid;
            this.cacheBlog = {bid, title, content, tags};
        },
        submitBlog() {
            if(JSON.stringify(this.cacheBlog) == '{}') {
                alert("博客还没有保存！请先保存(ctrl+s)后提交");
                return;
            }
            const answer = confirm("是否继续修改");
            if(answer) {
                return;
            }
            axios({
                method: "post",
                url: `/updateBlog`,
                data: this.cacheBlog
            }).then( res => {
                console.log(res);
            }).catch( e => {
                console.log(e);
            })
        },
        init() {
            const bid = this.bid;
            if(bid) {
                axios({
                    method: 'get',
                    url: `/queryBlogById?bid=${bid}`
                }).then( res => this.blog = res.data.data[0])
                    .catch(err => console.log(err));
            }
        }
    },
    created() {
        this.init();
    }
}
</script>
<style scoped lang="less">
.wrap {
    padding-top: 20px;
    .editHead {
        width: 80%;
        margin: 0 auto;
        h1 {
            margin: 10px 0px;
            color: #000;
        }
        input {
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #000;
            outline: none;
            margin-right: 20px;
        }
        hr {
            margin: 20px 0px;
            // padding: 20px 0px;
        }
        button {
            display: inline-block;
            padding: 4px 0;
            margin-left: 150px;
        }
    }
    #editor {
        margin: auto;
        width: 80%;
        height: 600px;
    }
}

</style>