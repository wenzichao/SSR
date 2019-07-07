<template>
  <div>
    <!-- <div v-for="(item,index) in dataList" :key="index">
      <div v-html="item.content"></div>
    </div> -->
  </div>
</template>

<script>

export default {
  data(){
    return {
      dataList:[]
    }
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

<style>
</style>
