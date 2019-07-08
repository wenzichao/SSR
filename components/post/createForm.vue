<template>
  <el-form ref="form" :model="form">
      <el-form-item>
        <el-input v-model="form.title" placeholder="请输入标题"></el-input>
      </el-form-item>
    <!-- 富文本框 -->
      <el-form-item class="quill-editor" 
          v-model="form.content"
          v-quill:myQuillEditor="editorOption">
      </el-form-item>
      <el-form-item label="选择城市">
        <!-- fetch-suggestions 返回输入建议的方法 -->
        <!-- select 点击选中建议项时触发 -->
        <el-autocomplete
        :fetch-suggestions="queryCitySearch"
        placeholder="请搜索游玩城市"
        @select="handleCitySelect"
        class="el-autocomplete"
        v-model="form.city"
        :trigger-on-focus="false"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="onSubmit" class="btn-issue">发布</el-button>
          或者
          <el-link type="success" :underline="false" @click="handleAddDraft">保存到草稿</el-link>
    </el-form-item>
  </el-form>
</template>

<script>
import Vue from 'vue'
if (process.browser) {
  const VueQuillEditor = require('vue-quill-editor/dist/ssr')
  Vue.use(VueQuillEditor, /* { default global options } */)
}
import moment from 'moment'
export default {
  name:'app',
  data() {
    return {
      form: {
        title: "",
        city: "",
        content:'',
        id:0,
      },
      editorOption: {}
    };
  },
  methods: {
    onSubmit() {
    // 自定义表单验证
      const rules = {
          title: {
              value: this.form.title,
              message: "请输入文章标题"
          },
          content: {
              value: this.form.content,
              message: "请输入文章内容"
          },
          city: {
              value: this.form.city,
              message: "请选择城市"
          }
      };
      // 验证变量哦，默认验证通过
      let valid = true;

      // 循环验证对象
      Object.keys(rules).forEach(v => {
          if(!valid) return;

          // 如果有一项数据不存在
          if(!rules[v].value){
              this.$message.warning(rules[v].message);
              // 验证不通过
              valid = false;
          }
      })

      // 验证不通过，直接返回
      if(!valid) return;

      let data = {};
      data.title = this.form.title;
      data.content = this.form.content;
      data.city = this.form.id;
      console.log(data);
      // 发送请求
      const token = this.$store.state.user.userInfo.token;
        // 提交到游记列表的接口
      this.$axios({
          url: "/posts",
          method: "POST",
          data,
          headers: {
              Authorization:`Bearer ${token}`
          }
      }).then(res => {
          console.log(res.data);
          if(status === 0){
              // 成功的提示
              this.$message.success(message);
              // 返回上一页
              this.$router.back();
          }else{
          //     跳转到登录页
               this.$router.push("/login");
          }
      })

      // 先获取本地的列表
      const time = moment().format('YYYY-MM-DD')
      this.form.time = time;
      const localPost = JSON.parse(localStorage.getItem("post") || `[]`);

      // 把当前表单的值保存到本地
      localPost.unshift(this.form);
      localStorage.setItem('post',JSON.stringify(localPost))
    },
    queryCitySearch(value, cb){
        if(!value) return;

        // 请求游玩城市的接口
        this.$axios({
            url: "/airs/city?name="+value,
            method: "GET",
        }).then(res => {
            const {data} = res.data;
            // 给data每一项都加value
            const newData = data.map(v => {
                return {
                    ...v,
                    value: v.name.replace("市", "")
                }
            })

            // 默认选中第一项
            this.form.departCode = newData[0].sort;
            this.form.departCity = newData[0].value;

            cb(newData);
        })
    },
    handleCitySelect(item){
        this.form.id = item.id
        this.form.city = item.name;
    },
    handleAddDraft(){
      const time = moment().format('YYYY-MM-DD')
      this.form.time = time;
      const localPost = JSON.parse(localStorage.getItem("post") || `[]`);
      localPost.unshift(this.form);
      localStorage.setItem('post',JSON.stringify(localPost))
    }
  },
  mounted(){
    
  }
};
</script>

<style lang="less" scoped>
.city{
  display: inline-block;
}
/deep/ .el-button{
  position: relative;
}
.container {
    margin: 0 auto;
    .quill-editor {
      overflow-y: auto;
      padding-bottom: 5px;
      .ql-container{
        min-height: 500px;
      }
    }
}
