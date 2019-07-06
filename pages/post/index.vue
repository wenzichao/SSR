<template>
  <div class="container"> 
    <div class="leftAside">
      <PostNav />
      <div class="recommendCity">
        <span>推荐城市</span>
        <img src="./pic_sea.jpeg" alt="">
      </div>
    </div>
    <div class="rightAside">

    </div>
  </div>
</template>

<script>
import PostNav from "@/components/post/postNav.vue";
export default {
  components:{
    PostNav
  },
  data() {
      return {
        
      };
    },
    methods:{
      
    },
  mounted(){
    this.$axios({
      url:'/posts',
      method:'GET',
      // headers:{
      //           Authorization: `Bearer ${this.$store.state.user.userInfo.token}` 
      //       }
    }).then(res=>{
      // this.dataList = res.data.data
      console.log(res.data);
    })
  }
};
</script>

<style scoped lang="less">
  *{
    padding: 0;
    margin: 0;
  }

  .container{
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    width: 1000px;
    margin:0 auto;
  }

  .leftAside{
    width: 260px;
    // background-color: cyan;
  }

  .rightAside{
    width: 700px;
    background-color:orangered;
  }

  .recommendCity{
    span{
      display: block;
      height: 41px;
      text-align: center;
      line-height: 41px;
      font-size: 16px;
      padding: 0 10px;
      border-bottom: 1px #ccc solid;
    }
    img{
      margin-top: 10px;
      width: 100%;
    }
  }
</style>


