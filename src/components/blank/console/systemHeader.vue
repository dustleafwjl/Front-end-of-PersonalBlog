<template>
    <div class="header">
        <div class="logo">
            <span>WJL博客管理系统</span>
        </div>
        <blog-search/>
    </div>
</template>
<script>
import BlogSearch from '@/components/blank/console/right-content/system-header/search.vue'
export default {
    components: {
        BlogSearch
    }
}
</script>

<style scoped lang="less">
.header {
    color: #fff!important;
    height: 50px;
    line-height: 50px;
    z-index: 2000;
    .logo {
        display: inline-block;
    }
}

</style>