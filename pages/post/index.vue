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
        推荐：
        <v-link to="#" class="headRecommendCity">广州</v-link>
        <v-link to="#" class="headRecommendCity">上海</v-link>
        <v-link to="#" class="headRecommendCity">北京</v-link>
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
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      dataList:[]
    }
  },
  data() {
      return {
      };
    },
    methods:{
      handleSearch(){},
      handleWriteWalkthrough(){
        this.$route.push('/post/create')
      }
    },
  mounted(){
    this.$refs.modelInput.focus();
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
  }

  .rightAside{
    width: 700px;
    background-color:cyan;
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
      }
    }
  }
</style>
