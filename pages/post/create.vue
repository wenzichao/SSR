<template>
  <div class="contianer">
    <el-row type="flex" justify="space-between">
      <div class="main">
        <h2>发表新攻略</h2>
        <p>分享你的个人游记，让更多人看到哦！</p>
        <CreateForm/>
        
      </div>
      <div class="draft">草稿</div>
    </el-row>
  </div>
</template>

<script>
import CreateForm from "@/components/post/createForm.vue"

export default {
    data() {
      return {

      }
    },
    components:{
      CreateForm
    },
    methods: {
      
    }
};
</script>

<style scoped lang="less">
    .contianer{
        width:1000px;
        margin:20px auto;
    }
</style>
