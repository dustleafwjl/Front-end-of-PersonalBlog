<template>
    <footer>
        <ul>
            <li v-for="(item, index) in tagList" :key="index">{{item}}</li>
        </ul>
        <p>Copyright © 2010-2017 王江林个人博客 All rights reserved.</p>
    </footer>
</template>
<script>
export default {
    data() {
        return {
            tagList: ["C/C++", "CSS/DIV", "java", "javacript", "Linux", "Ubuntu", "关于SEO分享经验", "听听音乐",
                        "幽默搞笑", "建站经验", "新闻资讯", "编程基础"]
        }
    }
}
</script>

<style scoped lang="less">
footer {
    width: 7.5rem;
    background-color: #000;
    color: #fff;
    padding: 0.1rem 0rem;
    text-align: center;
    height: 2.4rem;
    box-sizing: border-box;
    ul {
        list-style: none;
        text-align: center;
        li {
            display: inline-block;
            margin-left: 0.04rem;
        }
    }
}
</style>