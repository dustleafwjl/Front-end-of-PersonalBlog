<template>
    <div class="blog-list content" id="student-list">
        <blog-table/>
        <turn-page/>
    </div>
</template>
<script>

import BlogTable from '@/components/blank/console/right-content/blog-list/blogTable.vue'
import TurnPage from '@/components/blank/console/right-content/blog-list/trunPage.vue'


export default {
    components: {
        BlogTable,
        TurnPage
    }
}
</script>

<style scoped>
.blog-list table, .blog-list table tr td, .blog-list table tr th {
    font-size: 14px;
    text-align: center;
}
</style>