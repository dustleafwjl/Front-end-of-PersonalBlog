<template>
    <div class="guestbook">
        <div class="description">
            <div class="text">
                <p>欢迎灌水交流，别看我长时间不发博，博主可一直都在线~</p>
                <p style="color:red">友链只交换技术类个人博客。</p>
                <p style="color:red">不要皮，谢谢。</p>
            </div>
        </div>
        <blog-comments :bid="-2"/>
        <send-comment :bid="-2"/>   
    </div>
</template>
<script>
import SendComment from '@/components/container-left/base/sendComment.vue'
import BlogComments from '@/components/container-left/base/blogComments.vue'
import axios from '@/axios.js'

export default {
    components: {
        SendComment,
        BlogComments
    }
}
</script>

<style scoped lang="less">
.guestbook {
    .description {
        background-color: #f5f5f5;
        text-align: left;
        border-radius: 4px;
        border: 1px solid #e3e3e3;
        box-shadow: 1px 1px 5px #888;
        padding: 20px;
        font-size: 14px;
        h2 {
            font-size: 20px;
            margin-top: 12px;
            margin-bottom: 10px;
        }
        hr {
            margin: 20px 0;
        }
        p {
            margin: 0 0 10px;
        }
    }
}
</style>