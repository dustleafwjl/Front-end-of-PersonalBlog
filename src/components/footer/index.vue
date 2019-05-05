<template>
    <el-row>
        <el-col :span="24">
            <div class="footer">
                <ul>
                    <li v-for="(item, index) in tagList" :key="index">{{item}}</li>
                </ul>
                <p>Copyright © 2010-2017 王江林个人博客 All rights reserved.</p>
            </div>
        </el-col>
    </el-row>
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

<style lang="less" scoped>
.footer {
    text-align: center;
    padding: 20px 0px;
    ul {
        margin: 0 auto;
        list-style: none;
        li {
            display: inline-block;
            color: #a2a2a2;
            font-size: 14px;
            margin-left: 10px;
            cursor: pointer;
            text-align: center;
        }
    }
    p {
        margin-top: 10px;
        color: #a2a2a2;
        font-size: 14px;
    }
}
</style>