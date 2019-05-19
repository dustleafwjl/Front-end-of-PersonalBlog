<template>
    <div class="left-menu">
        <div class="back-home">
            <router-link to="/">返回博客</router-link>
        </div>
        <dl id="menu">
            <dt>博客管理</dt>
            <router-link tag="dd" :to="{name: 'bloglist'}">博客列表</router-link>            
            <router-link tag="dd" :to="{name: 'insertblog'}">添加博客</router-link>
            <router-link tag="dd" :to="{name: 'updateword'}">更新每日一句</router-link>
            <dt>评论管理</dt>
            <!-- <router-link tag="dd" to="/">回复评论</router-link>            
            <router-link tag="dd" to="/">删除评论</router-link> -->
        </dl>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.left-menu {
    font-size: 14px;
}
.left-menu .back-home {
    position: absolute;
    top: 15px;
    left: 15px;
}
.left-menu .back-home a {
    color: #fff;
    font-size: 16px;
}
dl dt, dl dd {
    /* width: 100%; */
    height: 40px;
    line-height: 40px;
}
dl dt {
    padding-left: 8px;
    font-weight: bold;
    padding-top: 10px;
}
dl dd {
    padding-left: 12px;
    font-size: 12px;
    cursor: pointer;
}
dl dd:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: #0070cc;
}
dl dd.active {
    background-color: #ddd;
    color: #354457;
}
</style>