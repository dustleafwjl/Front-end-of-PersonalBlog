<template>
    <div id="editor">
        <div class="editHead">
            <h1>文章编辑</h1>
            <input type="text" placeholder="请输入标题" id="title">
            <input type="text" placeholder="请输入标签，用都好隔开" id="tags">
            <hr />
        </div>
        <mavon-editor style="height: 100%" @save="save"></mavon-editor>
    </div>
</template>
<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from '@/axios.js'

export default {
    name: 'editor',
    components: {
        mavonEditor
        // or 'mavon-editor': mavonEditor
    },
    methods: {
        save(value, render) {
            const title = document.getElementById("title").value;
            const content = value;
            const tags = document.getElementById("tags").value;
            console.log(title, content, tags);
            axios({
                method: "post",
                url: "/editBlog",
                data: {
                    title: title,
                    content: content,
                    tags: tags
                }
            }).then( res => {
                console.log(res);
            }).catch( e => {
                console.log(e);
            })
        }
    },
    created() {
        
    }
}
</script>
<style scoped lang="less">
#editor {
    margin: auto;
    width: 80%;
    height: 580px;
    .editHead {
        h1 {
            margin: 10px 0px;
            color: #000;
        }
        input {
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #000;
            outline: none;
            margin-right: 20px;
        }
        hr {
            margin: 20px 0px;
            // padding: 20px 0px;
        }
    }
}

</style>