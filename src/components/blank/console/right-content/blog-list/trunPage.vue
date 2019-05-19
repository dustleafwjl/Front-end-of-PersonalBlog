<template>
    <div>
        <ul id="turn-page" >
            <li class="prev-page" :class="{'not-allow': nowPage == 1}" @click="turnPage(-1)">上一页</li>
            <template v-if="totalPage <= 7">
                <li v-for="item in totalPage" 
                :key="item" class="num" 
                :class="{'cur-page': item == nowPage}" 
                @click="turnPage(item)">{{item}}</li>
            </template>
            <template v-else>
                <template v-if="nowPage <= 4">
                    <li v-for="i in 6" :key="i" @click="turnPage(i)" :class="{'cur-page': i == nowPage}">{{i}}</li>
                </template>
                <template v-if="nowPage > 4">
                    <li @click="turnPage(1)">1</li>
                    <span>...</span>
                </template>
                <template v-if="nowPage > 4 && nowPage <= totalPage - 4">
                    <li v-for="i in 5" :key="i - 3 + nowPage" @click="turnPage(i - 3 + nowPage)" :class="{'cur-page': (i - 3 + nowPage) == nowPage}">{{i - 3 + nowPage}}</li>
                </template>
                <template v-if="nowPage > totalPage - 4">
                    <li v-for="i in 6" :key="totalPage - 6 + i" @click="turnPage(totalPage - 6 + i)" :class="{'cur-page': (totalPage - 6 + i) == nowPage}">{{totalPage - 6 + i}}</li>
                </template>
                <template v-if="nowPage <= totalPage - 4">
                    <span>...</span>
                    <li @click="turnPage(totalPage)" :class="{'cur-page': totalPage == nowPage}">{{totalPage}}</li>
                </template>
            </template>
            <li class="next-page" :class="{'not-allow': nowPage == totalPage}" @click="turnPage(0)">下一页</li>
        </ul>
    </div>
</template>
<script>
import { mapState, mapActions } from "Vuex"

export default {
    data() {
        return {
            // nowPage: 1
        }
    },
    methods: {
        turnPage(page) {
            if(page == -1) {
                if(this.nowPage > 1) {
                    // this.nowPage --;
                    this.$store.commit('setNowPage', this.nowPage - 1);
                    this.getBlogList(this.nowPage);   
                }
            } else if (page == 0) {
                if(this.nowPage < this.totalPage) {
                    // this.nowPage ++;
                    this.$store.commit('setNowPage', this.nowPage + 1);
                    this.getBlogList(this.nowPage);  
                }
            } else {
                // this.nowPage = page;
                    this.$store.commit('setNowPage', page);
                this.getBlogList(this.nowPage);  
            }
        },
        ...mapActions(["getBlogList"])
    },
    computed: {
        ...mapState({
            totalPage: state => Math.ceil(state.blogCount / 10),
            nowPage: state => state.nowPage
        })
    },
    created() {
    }
}
</script>

<style scoped>
#turn-page {
    /* margin: 10px auto; */
    /* border: 1px solid #000; */
    user-select: none;
    width: 600px;
    text-align: right;
    float: right;
    margin-right: 50px;
}

#turn-page li {
    display: inline-block;
    padding: 3px 10px;
    border: 1px solid #ddd;
    height: 25px;
    line-height: 25px;
    cursor: pointer;
    margin: 0 5px;
}
#turn-page li.cur-page {
    background-color: #428bca;
    border: 1px solid #428bca;
    color: #fff;
}


#turn-page li {
    padding: 5px 10px;
    border: 1px solid #ddd;
    display: inline-block;
    cursor: pointer;
    margin: 0 5px;
}
li.cur-page {
    background-color:  #428bca;
    color: aliceblue;
}
li.not-allow {
    cursor: not-allowed !important;
}
</style>