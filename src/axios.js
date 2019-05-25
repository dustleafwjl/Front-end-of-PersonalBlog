// import axios from 'axios';
axios.defaults.baseURL = 'http://47.100.235.95';
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.params = {
        ...config.params
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

export default axios;