<template>
    <header>
        <div class="menu-btn" @click="showList">
            <span class="el-icon-s-unfold"></span>
            <div class="btn-list" :class="{'show': show}">
                <ul>
                    <router-link tag="li" :to="{name: 'm-index'}">首页</router-link>
                    <router-link tag="li" :to="{name: 'm-about', query: {bid: -1}}">关于我</router-link>
                    <router-link tag="li" :to="{name: 'm-guestbook', query: {bid: -2}}">留言</router-link>
                </ul>
            </div>
        </div>
        <div class="menu-title">
            一尘叶|<span>技术博客</span>
        </div>
        <div class="menu-search">
            <span class="el-icon-search" @click="showSea"></span>
            <div class="searchinp" :class="{'show-search': showSearch}">
                <div>
                    <input type="text" placeholder="关键词搜索">
                    <button>搜索</button>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            show: false,
            showSearch: false
        }
    },
    computed: {},
    methods: {
        showList() {
            this.show = !this.show;
        },
        showSea() {
            this.showSearch = !this.showSearch;
        }
    }
}
</script>

<style scoped lang="less">
header {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 9999;
    height: 1.2rem;
    width: 7.5rem;
    background-color: #009688;
    color: #fff;
    box-sizing: border-box;
    padding: 5px ;
    font-size: 0px;
    // overflow: hidden;
    .menu-btn {
        width: 1rem;
        height: 1rem;
        display: inline-block;
        vertical-align: middle;
        span {
            display: inline-block;
            font-size: 0.8rem;
            width: 80%;
            height: 80%;
        }
        .btn-list {
            font-size: 0.32rem;
            background-color: #009688;
            position: fixed;
            left: 0px;
            top: 1rem;
            width: 1.8rem;
            height: 100%;
            transition: all 0.4s linear;
            transform: translate(-1.8rem, 0);
            &.show {
                transform: translate(0, 0);
            }
            ul {
                list-style: none;
                li {
                    text-align: center;
                    padding: 0.2rem;
                    border-bottom: 1px solid #fff;
                }
            }
        }
    }
    .menu-title {
        margin-left: 0.3rem;
        font-size: 0.40rem;
        display: inline-block;
        height: 1rem;
        vertical-align: middle;
        line-height: 1rem;
        span {
            font-size: 0.32rem;
        }
    }
    .menu-search {
        font-size: 0.5rem;
        height: 1rem;
        line-height: 1rem;
        display: inline-block;
        vertical-align: middle;
        margin-left: 2.2rem;
        span {
            padding: .2rem;
        }
        .searchinp {
            position: absolute;
            right: 0rem;
            top: 0rem;
            width: 7.5rem;
            box-sizing: border-box;
            padding: .2rem .2rem;
            background-color: #009688;
            text-align: center;
            font-size: 0rem;
            transition: all 0.4s linear;
            transform: translate(7.5rem, 1.2rem);
            &.show-search {
                transform: translate(0, 1.2rem);
            }
            div {
                border: 1px solid #fff;
                input {
                    width: 4rem;
                    display: inline-block;
                    height: .6rem; 
                    vertical-align: middle;
                    border: none;
                    outline: none;
                    text-indent: .2rem;
                }
                button {
                    background-color: #000;
                    color: #fff;
                    border: none;
                    outline: none;
                    width: 1.2rem;
                    height: .6rem;
                    font-size: .32rem;
                    vertical-align: middle;
                }
            }
        }
    }
}
</style>