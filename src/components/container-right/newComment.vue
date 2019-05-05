<template>
    <div class="new_comments">
        <ul class="list_group">
            <li v-for="(item, index) in commentList" :key="index">
                <div>
                    <span class="c_user">{{item.name}}</span>
                    <span class="c_time">{{item.date}}</span>
                </div>
                <p>{{item.comment}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from '@/axios.js'

export default {
    data() {
        return {
            commentList: []
        }
    },
    methods: {
        init() {
            axios({
                method: "get",
                url: `/queryNewComments?size=6`
            }).then( res => {
                this.commentList = res.data.data.map( ele => {
                    let temp = {};
                    temp.name = ele.user_name;
                    temp.date = ele.ctime;
                    temp.comment = ele.comments;
                    return temp;
                });
            }).catch( errr => {
                console.log("错误");
            })
        }
    },
    created() {
        this.init();
    }
}
</script>

<style scoped lang="less">
.new_comments {
    ul {
        list-style: none;
        li {
            padding: 10px 15px;
            border-bottom: 1px solid #292929;
            div {
                font-size: 14px;
                overflow: hidden;
                .c_time {
                    float: right;
                }
                .c_user {
                    float: left;
                }
            }
            p {
                padding-top: 5px;
                font-size: 14px;
                color: #777;
            }
        }
    }
}
</style>