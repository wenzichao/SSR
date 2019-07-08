<template>
    <div>
        <h1 class="h1">{{dataList.title}}</h1>
      <div class="gonlue">
        <span>
          攻略 : {{dataList.city.created_at}}
          <span class="span1">阅读 : {{dataList.watch}}</span>
        </span>
      </div>
      <div v-html="dataList.content" class="content"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      total:'',
      dataList: {
        city:{}
      },
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
    
    };
  },
  mounted(){
    const {id} = this.$route.query
    this.$axios({
      url:'/posts?id=' + id,
      method:'GET',
    }).then(res=>{
      this.dataList = res.data.data[0];
    })
  },
};
</script>

<style> 
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

