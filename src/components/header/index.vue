<template>
    <div class="header">
        <div class="row">
            <div class="col">
                <router-link class="title" tag="a" :to="{name: 'index'}" @click.native="changeTag">WJL的个人博客|<span>技术博客</span></router-link>
            </div>
            <div class="col">
                <ul class="meau">
                    <li>
                        <router-link tag="a" :to="{name: 'index'}" @click.native="changeTag">博客首页</router-link>
                    </li>
                    <li>
                        <router-link tag="a" :to="{name: 'sitemap'}">博客列表</router-link>
                    </li>
                    <li>
                        <router-link tag="a" :to="{name: 'about', query: {bid: -1}}">关于我</router-link>
                    </li>
                    <li>
                        <router-link tag="a" :to="{name: 'guestbook', query: {bid: -2}}">留言板</router-link>
                    </li>
                </ul>
            </div>
            <div class="col">
                <div class="search_bar">
                    <input type="text" placeholder="输入关键字查找">
                    <button>搜索</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        changeTag() {
            this.$store.commit("setTag", '');
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    width: 1170px;
    height: 50px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
    .row  {
        height: 50px;
        line-height: 50px;
        color: #fff;
        font-size: 16px;
        &::after {
            content: '';
            display: block;
            clear: both;
        }
        .col {
            float: left;
            &:last-of-type{
                float: right;
            }
            a.title {
                color: #fff;
                font-size: 18px;
                span {
                    font-size: 15px;
                }
            }
            a {
                border-bottom: 2px solid transparent;
                padding: 4px 0px;
                &:hover {
                    border-bottom-color: #fff;
                }
            }
            .meau {
                margin-left: 100px;
                li {
                    display: inline-block;
                    padding: 0 10px;
                    a {
                        color: #fff;
                        font-size: 14px;
                    }
                }
            }

            .search_bar {
                input {
                    height: 22px;
                    padding: 5px 10px;
                    border-radius: 5px;
                    outline: none;
                    border: 1px solid;
                }
                button {
                    width: 54px;
                    height: 34px;
                    padding: 5px 10px;
                    border-radius: 5px;
                    color: #555;
                    background-color: #fff;
                }
            }
        }
    }
}
</style>