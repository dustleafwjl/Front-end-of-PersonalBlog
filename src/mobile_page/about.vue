<template>
    <div>
        <div class="description">
            <div class="text">
                <h2><strong>关于我</strong></h2>
                <hr>
                <p>
                    博主
                    <a href="https://www.zh30.com">王江林</a>
                    ，wjl，性别男，四川巴中人士。</p>
                <p>在校学生<br>
                    一个不断学习和研究，web前端的90后。<br>
                    在学习这条路上，最大的收获就是：自己对待人生观和价值观有了自己独特的看法。
                </p>
                <p>
                    github：
                    <a href="https://github.com/handsomewjl" target="_blank" rel="noopener">
                        https://github.com/handsomewjl
                    </a><br>
                </p>
                <p>&nbsp;</p>
                <h2><strong>关于博客</strong></h2>
                <hr>
                <p>从2009年 – 今
                    <br>博主很懒加词穷，佛系更新…
                    <br>域名 www.wjlblog.top
                    <br>程序 vue-cli nodejs(express) mysql
                    <br>服务器 阿里云ECS
                </p>
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
.description {
    width: 7.2rem;
    margin: .1rem auto;
    background-color: #292421;
    text-align: left;
    border-radius: .04rem;
    border: 1px solid #e3e3e3;
    box-shadow: 1px 1px 5px #888;
    padding: .2rem;
    box-sizing: border-box;
    font-size: .28rem;
    h2 {
        font-size: .4rem;
        margin-top: 12px;
        margin-bottom: 10px;
        color: #000;
    }
    hr {
        margin: .4rem 0;
    }
    p {
        margin: 0 0 .02rem;
    }
}
</style>