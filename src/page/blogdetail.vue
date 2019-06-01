<template>
    <div class="blog-content">
        <blog/>
        <blog-comments/>
        <send-comment/>
    </div>
</template>
<script>
import SendComment from '@/components/container-left/base/sendComment.vue'
import Blog from '@/components/container-left/blog-detail/blog.vue'
import BlogComments from '@/components/container-left/base/blogComments.vue'
import axios from '@/axios.js'

export default {
    components: {
        Blog,
        SendComment,
        BlogComments
    },
    methods: {
        
    },
    created() {
        console.log("加载完成！")
    }
}
</script>

<style scoped>

</style>