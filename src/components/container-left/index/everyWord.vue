<template>
    <div class="every_day" id="every_day">
        <span>每日一句</span>
        <p v-html="getContent"></p>
    </div>
</template>
<script>
import axios from '@/axios.js'

export default {
    data() {
        return {
            content: "",
            tag: ''
        }
    },
    computed: {
        getContent() {
            return this.content;
        }
    },
    created() {
        // 请求数据，给content赋值
        axios({
            method: "get",
            url: "/queryEveryDay"
        }).then(res => {
            this.content = res.data.data[0].content;
        }).catch(res => {
            console.log("请求失败！");
        })
    }
}
</script>

<style scoped lang="less">
.every_day {
    border-radius: 8px;
    width: 100%;
    text-align: left;
    box-shadow: 3px 4px 4px #888;
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    box-sizing: border-box;
    &::before {
        font-family: MyIcon;
        content: "\e122";
        font-size: 12px;
        color: slateblue;
        position: relative;
        display: block;
        height: 0px;
        left: 54px;
        top: 2px;

    }
    &>span {
        display: block;
        font-size: 12px;
    }
}
</style>