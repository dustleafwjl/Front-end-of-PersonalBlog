<template>
    <div class="send_comments" id="send_comments">
        <span>发表评论</span>
        <div>
            <input type="hidden" id="comment_reply" value="-1">
            <input type="hidden" id="comment_reply_name" value="">
            <input type="text" placeholder="昵称" name="username" id="comment_name">
            <input type="text" placeholder="邮箱(评论回复时你会收到通知)" id="comment_email">
        </div>
        <div>
            <textarea id="comment_content" placeholder="无意义的内容我可能不会回复你"></textarea>
        </div>
        <div>
            <input type="text" placeholder="验证码" id="comment_code">
            <span class="code" v-html="vcode" @click="changeCode"></span>
        </div>
        <button @click="sendComment">提交留言</button>
    </div>
</template>
<script>
import axios from '@/axios.js'

export default {
    data() {
        return {
            vcode: '',
            rightCode: ''
        }
    },
    computed: {
        bid() {
            return this.$route.query.bid;
        }
    },
    watch: {
        bid(oldVal, newVal) {
            this.getCode();
        }
    },
    methods: {
        sendComment() {
            const code = document.getElementById("comment_code").value;
            const name = document.getElementById("comment_name").value;
            const email = document.getElementById("comment_email").value;
            const content = document.getElementById("comment_content").value;
            const reply = document.getElementById("comment_reply").value;
            const parentName = document.getElementById("comment_reply_name").value;

            if(code != this.rightCode) {
                alert("验证码有误！");
                return ;
            }
            axios({
                method: "get",
                url: `/sendComment?bid=${this.bid}&parent=${reply}&name=${name}&content=${content}&email=${email}&parentName=${parentName}`
            }).then( res => {
                alert("评论提交成功！");
            }).catch( error => {
                console.log("错误");
            });
        },
        getCode() {
            // 获取验证码
            axios({
                method: "get",
                url: "/queryRandomCode"
            }).then( res => {
                this.vcode = res.data.data.data;
                this.rightCode = res.data.data.text;
            });
        },
        changeCode() {
            this.getCode();
        }
    },
    created() {
        this.getCode();
    }
}
</script>

<style scoped lang="less">

.send_comments {
    margin-top: 20px;
    background-color: #f5f5f5;
    width: 96%;
    border-radius: 5px;
    padding: 10px 15px;
    box-shadow: 1px 2px 3px #888;
    input {
        width: 300px;
        height: 30px;
        border: 1px solid #ccc;
        border-radius: 5px;
        text-indent: 8px; 
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 14px;
        &:nth-of-type(1) {
            width: 120px;
        }
        &:nth-of-type(2) {
            width: 200px;
            margin-right: 50px;
        }
    }
    textarea {
        width: 90%;
        height: 100px;
        border: 1px solid #ccc;
        padding: 8px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 14px;
        border-radius: 5px; 
    }
    button {
        padding: 6px 12px;
        border-radius: 5px;
        background-color: #fff;
        &:hover {
            background-color: #ddd;
        }
    }
    .code {
        display: inline-block;
        height: 45px;
        vertical-align: bottom;
    }
}


</style>