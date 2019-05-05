import axios from '@/axios.js'

let api = {
    getBlogList(params) {
        return axios.get("/queryBlogByPage", params);
    }
};


export default api;

