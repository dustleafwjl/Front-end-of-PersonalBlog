<template>
    <div class="layout-default">
        <el-container>
            <el-header>
                <my-header />
            </el-header>
            <el-main>
                <router-view class="content-left"></router-view>
                <container-right class="content-right"/>
            </el-main>
            <el-footer>
                <my-footer/>
            </el-footer>
        </el-container>
    </div>
</template>
<script>
import MyHeader from '@/components/header/index.vue';
import MyFooter from '@/components/footer/index.vue';
import ContainerRight from '@/components/container-right/index.vue';

export default {
    components: {
        MyHeader,
        MyFooter,
        ContainerRight
    }
}
</script>

<style scoped lang="less">

.layout-default {
    // background-image: url('../assets/img/bg.jpg');
    // background-color: #eee;
    .el-header {
        padding: 0;
        color: #fff;
        background-color: #292421;
        width: 100%;
        height: 50px !important;
    }
    .el-main {
        margin: 0 auto;
        width: 1170px;
        min-width: 1170px;
        .content-left {
            float: left;
            width: 66%;
        }
        .content-right {
            width: 33%;
            float: right;
        }
        &::after {
            content: "";
            display: block;
            clear: both;
        }
    }
    .el-footer {
        padding: 0;
        color: #fff;
        background-color: #191818;
        width: 100%;
        height: 100px !important;
    }
}
</style>