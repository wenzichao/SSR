<template>
    <div>
        <div class="tubiao-box">
        <div class="tubiao-xiao" v-on:click='handlePinglun'>
          <i class="el-icon-edit-outline tubiao"></i>
          <p class="tubiao-pinlun">评论(100)</p>
        </div>
        <div class="tubiao-xiao" v-on:click='handleShoucang'>
          <i class="el-icon-star-off tubiao"></i>
          <p class="tubiao-pinlun">收藏</p>
        </div>
        <div class="tubiao-xiao" v-on:click='handleTuijian'>
          <i class="el-icon-share tubiao"></i>
          <p class="tubiao-pinlun">分享</p>
        </div>
        <div class="tubiao-xiao" v-on:click='handleDianzan'>
          <i class="el-icon-thumb tubiao"></i>
          <p class="tubiao-pinlun">点赞({{dianzan}})</p>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
        dianzan:5,
    };
  },
 
  methods: {
    

    handleRemove(file) {
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
    },
 

      // 收藏
      handleShoucang:function(){
        this.$axios({
      url:'/posts/star',
      method:'GET',
    }).then(res=>{
      // this.dataList = res.data.data
    })
      },

      // 推荐
      handleTuijian:function(){
        
      },

      // 评论
      handlePinglun:function(){
      
      },

      // 点赞
      handleDianzan:function(){
        this.dianzan++
        
      },
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
.tubiao-box {
  padding: 50px 0 30px;
  justify-content: center;
  display: flex;
}
.tubiao-xiao {
  margin: 0 20px;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
}
.tubiao {
  display: block;
  font-size: 40px;
  color: orange;
}
.tubiao-pinlun {
  margin-top: 5px;
  font-size: 14px;
  color: #999;
}

</style>
