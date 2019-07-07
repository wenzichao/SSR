<template>
  <el-form ref="form" :model="form">
    <el-form-item>
      <el-input class="title" v-model="form.name" placeholder="请输入标题"></el-input>
    </el-form-item>
    <!-- <el-form-item label="内容描述" class="editor">
        <quillEditor v-model="form.content"></quillEditor>
    </el-form-item> -->
    <div class="quill-editor"
        :content="content"
        v-quill:myQuillEditor="editorOption">
    </div>
    <el-form-item>
      <el-input v-model="form.region" placeholder="请搜索游玩城市"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">发布</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
// 导入富文本编辑器的样式
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'

// 导入富文本编辑器的组件
// import { quillEditor } from 'vue-quill-editor'

export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        content:"",
        editorOption:{
          modules:{
            toolbar:[
              ["bold", "italic", "underline", "strike"],

            ]

          }
        }
      },
    };
  },
  components: {
      // quillEditor
  },
  methods: {
    onSubmit() {
        console.log("submit!");
    },
  }
};
</script>

<style lang="less" scoped>
el-input{
    height: 40px;
    line-height: 40px;
    padding: 10px 15px;
    width: 100%;
}
.container {
    width: 60%;
    margin: 0 auto;
    padding: 50px 0;
    .quill-editor {
      min-height: 200px;
      max-height: 400px;
      overflow-y: auto;
    }
}
