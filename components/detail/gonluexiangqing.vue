<template>
    <div>
        <h1 class="h1">{{this.dataList.title}}</h1>
      <div class="gonlue">
        <span>
          攻略 : 2019-05-22 10:57
          <span class="span1">阅读 : 619</span>
        </span>
      </div>
      <div v-html="this.dataList.content" class="content">{{this.dataList.content}}</div>
    </div>
</template>

<script>
import Gonluexiangqing from "@/components/detail/gonluexiangqing";

export default {
  data() {
    return {
      total:'',
      dataList: [],
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
    
    };
  },
  mounted(){
    


    this.$axios({
      url:'/posts',
      // url:'/posts/comments',
      method:'GET',
      // headers:{
      //           Authorization: `Bearer ${this.$store.state.user.userInfo.token}` 
      //       }
    }).then(res=>{
      this.dataList = res.data.data[0];
      console.log(res.data.data);
    })


  },



  
};
</script>

<style>
.container {
  width: 1000px;
  margin: 0 auto;
  padding-top: 20px;
}
.bigbox {
  width: 700px;
}
.h1 {
  width: 700px;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
}
.gonlue {
  color: #999;
  padding: 20px;
  text-align: right;
}
.span1 {
  margin-left: 20px;
}
.content {
  line-height: 1.5;
  font-size: 16px;
  word-spacing: 1px;
}
.content img {
  max-width: 700px !important;
}

</style>

