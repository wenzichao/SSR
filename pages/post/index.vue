<template>
  <div class="container"> 
    <div class="leftAside">
      <PostNav />
      <div class="recommendCity">
        <span>推荐城市</span>
        <div class="carousel">
          <el-carousel height="180px" indicator-position='none' interval=5000>
          <el-carousel-item v-for="(item,index) in picture" :key="index">
            <img src="./pic_sea.jpeg" alt="" style="width:260px;height:178px;">
          </el-carousel-item>
        </el-carousel>
        </div>
      </div>
    </div>
    <div class="rightAside">
      <!-- 输入框 -->
      <el-row 
        type="flex" 
        align="middle" 
        class="search-input">
          <input 
          placeholder="请输入想去的地方，比如'广州'"
          ref="modelInput"/>
          <i class="el-icon-search" @click="handleSearch"></i>
      </el-row>

      <!-- 推荐 -->
      <div class="headRecommend">
        <el-row type="flex">
          推荐：
          <nuxt-link to="#" class="headRecommendCity">广州</nuxt-link>
          <nuxt-link to="#" class="headRecommendCity">上海</nuxt-link>
          <nuxt-link to="#" class="headRecommendCity">北京</nuxt-link>
        </el-row>
      </div>

      <!-- 推荐攻略标题 -->
      <div class="walkthroughTitle">
        <h4>推荐攻略</h4>
        <!-- 写游记按钮 -->
        <el-button type="primary" 
        icon="el-icon-edit" 
        class="walkthroughButton"
        @click="handleWriteWalkthrough">
          写游记
        </el-button>
      </div>
      <!-- 推荐文章 -->
      <div class="articleList">
        <recommendArticle />
      </div>
    </div>
  </div>
</template>

<script>
import PostNav from "@/components/post/postNav.vue";
import recommendArticle from "@/components/post/recommendArticle.vue";

export default {
  data() {
      return {
        picture:[
          {url:'/pages/post/pic_sea.jpeg'},
          {url:'1.jpeg'},
          {url:'2.jpeg'},
          {url:'3.jpeg'},
        ]
      };
    },
  components: {
    PostNav,
    recommendArticle
  },
    methods:{
      handleSearch(){},
      handleWriteWalkthrough(){
        this.$router.push({path:'post/create'})
      }
    },
  mounted(){
    
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
      .carousel{
        margin-top: 10px;
      }
      img{
        margin-top: 10px;
      }
    }
  }

  .rightAside{
    width: 700px;
    // background-color:cyan;
    .search-input{
            width:100%;
            height:40px;
            background:#fff;
            border: 3px orange solid;
            box-sizing: border-box;

            input{
                flex:1;
                height:20px;
                padding: 7px 15px;
                outline: none;
                border:0;
                font-size:16px;
            }

            .el-icon-search{
                cursor :pointer;
                font-size:22px;
                padding:0 10px;
                font-weight:bold;
                color: orange;
            }
    }

    .headRecommend{
      height: 36px;
      line-height: 36px;
      font-size: 14px;
      color:#666;
      .headRecommendCity{
        cursor: pointer;
        padding-right: 10px;
        &:hover{
          color: orange;
          text-decoration: underline;
        }
      }
    }

    .walkthroughTitle{
      display: flex;
      justify-content: space-between;
      height: 51px;
      line-height: 41px;
      padding-bottom: 10px;
      box-sizing: border-box;
      h4{
        color: orange;
        position: relative;
        font-weight: 400;
        font-size: 18px;
      }
      h4:after{
        content: "";
        width: 72px;
        background-color: #fff;
        border-bottom:2px orange solid;
        position: absolute;
        left: 0;
        bottom:0;
      }
      .walkthroughButton{
        padding: 12px 20px;
        // position: absolute;
        // right: 100px;
        // top: 100px;
      }
    }
  }
/deep/ .el-carousel{
  width: 260px;
}
</style>
