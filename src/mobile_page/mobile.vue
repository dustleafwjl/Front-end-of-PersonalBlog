<template>
    <div class="mobile">
        <m-header />
        <div class="content">
            <router-view></router-view>
        </div>
        <m-footer />
    </div>
</template>
<script>
import MHeader from "@/components/mobile/m-header.vue"
import MFooter from "@/components/mobile/m-footer.vue"


export default {
    components: {
        MHeader,
        MFooter
    }
}
</script>

<style scoped lang="less">
.mobile {
    // transform-style: preserve-3d;
    overflow: hidden;
    .content {
        padding-top: 1.5rem;
        padding-bottom: .4rem;
        width: 7.5rem;
        background-color: #eee;
    }
}
</style>