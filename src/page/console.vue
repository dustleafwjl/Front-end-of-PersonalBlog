<template>
    <div class="wrapper">
        <system-header/>
        <left-menu/>
        <div class="right-content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import SystemHeader from '@/components/blank/console/systemHeader.vue'
import LeftMenu from '@/components/blank/console/leftMenu.vue'
import { mapActions } from 'Vuex'

export default {
    data() {
        return {
            page: 2
        }
    },
    components: {
        SystemHeader,
        LeftMenu
    },
    created() {
        this.getBlogList(this.page);
        this.getBlogCount();
    },
    methods: {
        ...mapActions(["getBlogList", "getBlogCount"])
    }
}
</script>

<style>
.wrapper {
    width: 100%;
    background-color: #eee;
    position: relative;
}
.wrapper .header {
    position: fixed;
    top: 0px;
    left: 10%;
    width: 100%;
    height: 50px;
    background-color: #252a2f;
}
.wrapper .left-menu {
    padding-top: 50px;
    width: 10%;
    position: fixed;
    bottom: 0px;
    top: 0px;
    left: 0px;
    z-index: 999;
    background-color: #252a2f;
    color: #fff!important;
}
.wrapper::after {
    content: "";
    display: block;
    clear: both;
}
.wrapper .right-content {
    width: 90%;
    position: absolute;
    box-sizing: border-box;
    right: 0px;
    top: 50px;
    bottom: 0px;
    /* display: inline-block; */
}
</style>