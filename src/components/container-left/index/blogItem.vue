<template>
  <div class="article">
    <router-link :to="{name: 'blogDetail', query: {bid: blog.id}}" tag="a" class="article_header">{{blog.title}}</router-link>
    <p class="article_content">{{blog.content}}</p>
    <div class="article_footer">发布于{{blog.date}} | 浏览({{blog.views}}) | Tags：{{blog.tags}}</div>
    <div :class="{'cover': this.$store.state.blogLoading}">
        <div class="wrap">
            <div class="loading-icon">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <p>组件加载中，请勿跳转！</p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            // blogLoading: true
        }
    },
    props: [
        "blog"
    ],
    methods: {
        loadingstart() {
            this.$store.commit('setBlogLoading', false);
            console.log(this.$store.state.blogLoading);
        }
    },
    created() {
        this.loadingstart();
    }
};
</script>

<style scoped lang="less">
@keyframes loading {
    0% {
        background-color: rgb(61, 57, 57);
    }
    100% {
        background-color: #fff;
    }
          
}
.article {
    position: relative;
    background: #fff;
    display: inline-block;
    width: 100%;
    border-radius: 5px;
    text-align: left;
    box-shadow: 1px 2px 3px 0px #888;
    margin-top: 20px;
    .wrap {
        font-size: 0px;
    }
    .cover {
        position: absolute;
        top: 0px;
        height: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .3);
        .wrap {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            color: #fff;
            text-align: center;
            font-size: 16px;
            .loading-icon {
                display: inline-block;
                width: 200px;
                span {
                    border-radius: 50%;
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    background-color: #fff;
                    &:nth-of-type(1) {
                        animation: loading 1s linear infinite;
                    }
                    &:nth-of-type(2) {
                        animation: loading 1s linear .2s infinite;
                    }
                    &:nth-of-type(3) {
                        animation: loading 1s linear .4s infinite;
                    }
                    &:nth-of-type(4) {
                        animation: loading 1s linear .6s infinite;
                    }
                    &:nth-of-type(5) {
                        animation: loading 1s linear .8s infinite;
                    }
                }
            }
        }
    }
    .article_header {
        display: inline-block;
        font-size: 20px;
        text-decoration: none;
        color: #13102b;
        text-align: left;
        padding: 20px 10px 5px 15px;
        &:hover {
            color: #337ab7;
        }
    }
    .article_content {
        font-size: 14px;
        text-align: left;
        color: #747474;
        padding: 0px 10px 20px 15px;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
    }
    .article_footer {
        color: #eee;
        background: #009688;
        padding: 5px 10px 5px 15px;    
    }
}

</style>