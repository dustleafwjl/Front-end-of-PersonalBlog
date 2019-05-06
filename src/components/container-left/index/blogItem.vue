<template>
  <div class="article">
    <router-link :to="{name: 'blogDetail', query: {bid: blog.id}}" tag="a" class="article_header">{{blog.title}}</router-link>
    <p class="article_content">{{blog.content}}</p>
    <div class="article_footer">发布于{{blog.date}} | 浏览({{blog.views}}) | Tags：{{blog.tags}}</div>
  </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: [
        "blog"
    ]
};
</script>

<style scoped lang="less">

.article {
    background: #fff;
    display: inline-block;
    width: 100%;
    border-radius: 5px;
    text-align: left;
    box-shadow: 1px 2px 3px 0px #888;
    margin-top: 20px;
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