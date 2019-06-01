// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex);

import axios from '@/axios'

const state = {
    tag: '',
    user: {},
    blogList: [],
    blogCount: 0,
    nowPage: 1,
    blogLoading: false
}
const mutations = {
    setTag(state, val) {
        state.tag = val;
    },
    // 改变state状态，添加user
    setUser(state, user) {
        state.user = user;
    },
    removeUser(state) {
        state.user = null;
    },
    setBlogList(state, val) {
        state.blogList = val;
    },
    setBlogCount(state, val) {
        state.blogCount = val;
    },
    setNowPage(state, page) {
        state.nowPage = page;
    },
    setBlogLoading(state, val) {
        state.blogLoading = val;
    }
}

const actions = {
    login({commit}, data) {
        return new Promise( (resove, reject) => {
            axios({
                method: "post",
                url: "/login",
                data: data
            }).then( res => {
                const user = res.data.data;
                localStorage.setItem("user", user);
                commit("setUser", user);
                resove(res);
            }).catch( err => {
                localStorage.removeItem("user");
                commit("removeUser", user);
                reject(err);
            });
        })
    },
    getBlogList({ commit }, page) {
        const pageSize = 10;
        // 渲染tables
        axios({
            method: "get",
            url: `/queryBlogByPage?page=${page - 1}&pageSize=${pageSize}`
        }).then( res => {
            commit("setBlogList", res.data.data);
        }).catch( err => console.log(err));
    },
    getBlogCount({ commit }, page) {
        axios({
            method: "get",
            url: "/queryBlogCount"
        }).then(res => {
            commit("setBlogCount", res.data.data[0].count);
        });
    },
    getPageByTag(page, pageSize, tag) {
        axios({
            method: "get",
            url: `/queryBlogByTag?page=${page - 1}&pageSize=${pageSize}&tag=${tag}`
        }).then(res => {
            let result = res.data.data;
            result.map(ele => {
                ele.date = ele.ctime;
                ele.link = `/blog_detail.html?bid=${ele.id}`;
                return ele;
            });
            this.articleList = result;
        }).catch(res => {
            console.log("请求错误！")
        });
    },
    getBlogCountByTag() {
        axios({
            method: "get",
            url: `/queryBlogByTagCount?tag=${this.tag}`
        }).then(res => {
            this.BlogCount = res.data.data[0].count;
        });
    }
}

const getters = {
    // isLogin: state => localStorage.getItem("user") ? true : false
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})