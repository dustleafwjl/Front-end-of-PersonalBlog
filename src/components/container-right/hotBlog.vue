<template>
    <div class="new_hot">
        <ul class="list_group" v-for="(item, index) in titleList" :key="index">
            <li>
                <router-link :to="{name: 'blogDetail', query: {bid: item.id}}" tag="a">{{item.title}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from '@/axios.js'

export default {
    data() {
        return {
            titleList: []
        }
    },
    created() {
        axios({
            method: "get",
            url: `/queryHotBlog?size=10`
        }).then( res => {
            this.titleList = res.data.data;
        }).catch( errr => {
            console.log("错误");
        })
    }
}
</script>

<style scoped lang="less">
.new_hot {
    .list_group {
        list-style: none;
        li {
            padding: 10px 15px;
            border-bottom: 1px solid #292929;
            a{
                color: #fff;
            }
        }
    }
}
</style>