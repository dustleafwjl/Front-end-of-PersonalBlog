<template>
  <div class="tags">
    <router-link tag="a" :to="{name: 'index'}" @click.native="changeTag(item)" :style="{color: randomColor(), fontSize: randomSize()}" v-for="(item, index) in tagList" :key="index">{{item}}</router-link>
  </div>
</template>
<script>
import axios from '@/axios.js'

export default {
    data() {
        return {
            tagList: ["C/C++", "CSS/DIV", "java", "javacript", "Linux", "Ubuntu", "关于SEO分享经验", "听听音乐",
                        "幽默搞笑", "建站经验", "新闻资讯", "编程基础"]
        }
    },
    methods: {
        randomColor() {
            const red = 100 + Math.random() * 200;
            const green = Math.random() * 255;
            const blue = Math.random() * 255;
            return `rgb(${red}, ${green}, ${blue})`;
        },
        randomSize() {
            const size = Math.random() * 20 + 10;
            return `${size}px`;
        },
        changeTag(tag) {
            // this.$store.state.tag = tag;
            this.$store.commit("setTag", tag);
        }
    },
    created() {
        axios({
            method: "get",
            url: "/queryRandomTags"
        }).then( res => {
            this.tagList = res.data.data.map(ele => ele.tag);
        }).catch( error => {
            console.log(error);
        })
    }
};
</script>

<style scoped lang="less">
.tags {
    padding-left: 10px;
    a {
        padding: 0 2px;
        line-height: 25px;
        &:hover {
            color: #000 !important;
        }
    }
}
</style>