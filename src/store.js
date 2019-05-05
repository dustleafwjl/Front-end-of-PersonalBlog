import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    tag: ''
}
const mutations = {
    setTag(state, val) {
        state.tag = val;
    }
}

const actions = {
    
}



export default new Vuex.Store({
    state,
    mutations,
    actions
})