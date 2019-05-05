<template>
    <div class="about">
        <description />
        <blog-comments :bid="-1"/>
        <send-comment :bid="-1"/>    
    </div>    
</template>
<script>
import Description from '@/components/container-left/about/description.vue'
import SendComment from '@/components/container-left/base/sendComment.vue'
import BlogComments from '@/components/container-left/base/blogComments.vue'
import axios from '@/axios.js'

export default {
    components: {
        Description,
        SendComment,
        BlogComments
    }
}
</script>

<style scoped>

</style>