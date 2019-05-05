<template>
    <div class="edit_container">
        <div class="head">
            <h4>添加每日一句</h4>
        </div>
        <quill-editor 
            v-model="content" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        </quill-editor>
        <div class="submit">
            <button @click="submit" class="submit_btn">提交</button>
        </div>
    </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import axios from '@/axios.js';

export default {
    components: {
        quillEditor
    },
    data() {
        return {
            content: `添加每日一句`,
            editorOption: {}
        }
    },
    methods: {
        onEditorReady(editor) { // 准备编辑器
 
        },
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){}, // 内容改变事件
        submit() {
            const content = this.content;
            axios({
                method: "post",
                url: "/editEveryDay",
                data: content
            }).then( res => {
                console.log(res);
                alert(res.data.msg);
            })
        }
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
    }
}
</script>
<style scoped>
.edit_container {
    width: 80%;
    height: 100px;
    margin: 0 auto;
}
h4 {
    color: #000;
}
.submit_btn {
    margin-top: 10px;
    width: 80px;
    height: 30px;
}
</style>