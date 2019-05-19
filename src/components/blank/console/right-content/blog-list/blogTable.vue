<template>
    <table border="0">
        <!-- 表头区域 -->
        <thead>
            <tr>
                <th>blogId</th>
                <th>标题</th>
                <th>标签</th>
                <th>添加时间</th>
                <th>浏览数</th>
                <th>操作</th>
            </tr>
        </thead>
        <!-- 表格内容 -->
        <tbody id="student-body">
            <tr v-for="(item, index) in blogList" :key="index">
                <td>{{item.id}}</td>
                <td>{{item.title}}</td>
                <td>{{item.tags}}</td>
                <td>{{item.ctime}}</td>
                <td>{{item.views}}</td>
                <td>
                    <!-- <button class="btn edit">编辑</button> -->
                    <router-link class="btn edit" tag="button" :to="{name: 'updateblog', query: {bid: item.id}} ">编辑</router-link>
                    <button class="btn del" @click="removeBlog(item.id)">删除</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import axios from '@/axios.js'
import { mapState } from 'Vuex'

export default {
    data() {
        return {
        }
    },
    methods: {
        init() {
            // console.log(this.blogList);
            // console.log(mapState);
        },
        removeBlog(bid) {
            if(bid) {
                const answer = confirm("是否删除？");
                if(answer) {
                    axios({
                        method: "get",
                        url: `/removeBlog?bid=${bid}`
                    }).then( res => {
                        alert("删除成功！");
                        this.$router.replace({name: 'refresh'})
                    }).catch( err => console.log(err));
                } else {
                    return;
                }
            }
        }
    },
    created() {
        this.init();
    },
    computed: {
        ...mapState(["blogList"])
    }
}
</script>

<style scoped>

table {
    width: 100%;
    border-spacing: 0px;
}
table thead {
    background-color: #e3e8ee;
}
table tbody {
    background-color: #fff;
}
table tr th {
    color: #646987;
}
table tr td {
    color: #354457;
    min-width: 100px;
}
table tr th, table tr td {
    padding: 10px 0;
}

table button.btn {
    padding: 3px 10px;
    border: none;
    color: #fff;
    cursor: pointer;
}
table button.btn.edit {
    background-color: #5cb85c;
}
table button.btn.del {
    background-color: #d9534f;
}
table button.btn.edit:hover{
    color: #fff;
    background-color: #398439;
    border-color: #255625;
}
table button.btn.del:hover {
    color: #fff;
    background-color: #c9302c;
}
</style>