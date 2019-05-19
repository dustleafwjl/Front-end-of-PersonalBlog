<template>
    <div class="search">
        <input type="text" placeholder="关键词搜索">
        <button class="el-icon-search search-submit"></button>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped lang="less">
.search {
    display: inline-block;
    height: 26px;
    width: 300px;
    line-height: 26px;
    font-size: 12px;
    padding: 0px 20px;
    text-align: right;
    input {
        display: inline-block;
        font-size: 12px;
        min-width: 180px;
        width: 180px;
        height: 26px;
        border: none;
        outline: none;
        text-indent: 5px;
        background-color: rgba(255, 255, 255, 0.12);
        vertical-align: bottom;
        color: #fff;
        transition: width .3s linear;
        border-radius: 4px;
    }
    &:hover {
        input {
            width: 250px;
        }
    }
    .search-submit {
        height: 26px;
        line-height: 26px;
        padding: 0 10px;
        outline: none;
        display: inline-block;
        border: none;
        background-color: #354457;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        vertical-align: bottom;
        /* border: 1px solid #000; */
    }
}

</style>