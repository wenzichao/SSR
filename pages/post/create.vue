<template>
  <div class="contianer">
    <el-row type="flex" justify="space-between">
      <div class="main">
        <h2>发表新攻略</h2>
        <p>分享你的个人游记，让更多人看到哦！</p>
        <CreateForm/>
        
      </div>
      <div class="draft">
        <CreateAside/>

      </div>
    </el-row>
  </div>
</template>

<script>
import CreateForm from "@/components/post/createForm.vue"
import CreateAside from "@/components/post/createAside.vue"

export default {
    components:{
      CreateForm,
      CreateAside
    },
    mounted(){
      this.$axios({
        url:'/posts',
        params:this.$route.query
      }).then(res=>{
        console.log(res);
      })
    },
};
</script>

<style scoped lang="less">
    .contianer{
        width:1000px;
        margin:20px auto;
    }
    .main{
      width: 60%;
      h2,p{
        padding-bottom: 5px;
      }
    }
</style>
