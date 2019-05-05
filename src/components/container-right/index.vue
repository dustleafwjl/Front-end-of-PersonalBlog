<template>
    <div class="container-right">
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="随机云标签" name="1">
                <could-tag/>
            </el-collapse-item>
            <el-collapse-item title="最近热门" name="2">
                <hot-blog/>
            </el-collapse-item>
            <el-collapse-item title="最新评论" name="3">
                <new-comment/>
            </el-collapse-item>
            <el-collapse-item title="友情链接" name="4">
                <friend-link/>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
import CouldTag from '@/components/container-right/couldTag.vue';
import HotBlog from '@/components/container-right/hotBlog.vue';
import NewComment from '@/components/container-right/newComment.vue';
import FriendLink from '@/components/container-right/friendLink.vue';

export default {
    data() {
      return {
        activeNames: ['1', '2', '3']
      };
    },
    methods: {
      handleChange(val) {
          
      }
    },
    components: {
        CouldTag,
        HotBlog,
        NewComment,
        FriendLink
    }
}
</script>

<style scoped lang="less">


</style>