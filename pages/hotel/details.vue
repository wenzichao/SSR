<template>
  <section class="container">
    <!-- 面包屑 -->
    <div class="details-breadcrumb" >
      <!-- 面包屑 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/hotel' }">酒店</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/hotel' }">南京酒店</el-breadcrumb-item>
        <el-breadcrumb-item>半月湾酒店</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 酒店名地址 -->
    <div class="details-title-adress">
      <div class="details-title">
        <span class="details-title-chinese">半月湾酒店</span>
        <i class="el-icon-star-on"></i>
        <i class="el-icon-star-on"></i>
        <i class="el-icon-star-on"></i>
        <i class="el-icon-star-on"></i>
        <i class="el-icon-star-on"></i>
      </div>
      <div class="details-title-english">ban yue wan hotel</div>
      <div class="details-adress">
        <i class="el-icon-location"></i>
        <span>柘宁东路9号</span>
      </div>
    </div>

    <!-- 酒店信息图片 -->
    <!-- <div class="details-image">
      <div class="details-image-big">
        <img src="@/assets/1.jpeg" alt />
      </div>
      <div class="details-image-small">
        <div>
          <img src="@/assets/1.jpeg" alt />
        </div>
        <div>
          <img src="@/assets/1.jpeg" alt />
        </div>
        <div>
          <img src="@/assets/1.jpeg" alt />
        </div>
        <div>
          <img src="@/assets/1.jpeg" alt />
        </div>
        <div>
          <img src="@/assets/1.jpeg" alt />
        </div>
        <div>
          <img src="@/assets/1.jpeg" alt />
        </div>
      </div>
    </div> -->

    <!-- 房间信息 -->
    <div class="details-items">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="source" label="低价来源" width="400"></el-table-column>
        <el-table-column prop="roomtype" label="低价房型" width="400"></el-table-column>
        <el-table-column prop="price" label="最低价格/每晚"></el-table-column>
      </el-table>
    </div>

    <!-- 地图 -->
    <div class="details-map" id="container"></div>

    <!-- 基本信息 -->
    <div class="details-Information">
      <div class="details-Information-basic">
        <div>基本信息</div>
        <div>
          <div>入住时间: 14:00之后</div>
          <div>离店时间: 12:00之前</div>
          <div>null / null</div>
          <div>酒店规模: 69间客房</div>
        </div>
      </div>
      <div class="details-Information-device">
        <div>主要设施</div>
        <div>
          <div>外币兑换服务</div>
          <div>洗衣服务</div>
          <div>吹风机</div>
          <div>电梯</div>
        </div>
      </div>
      <div class="details-Information-parking">
        <div>停车服务</div>
        <div>-</div>
      </div>
      <div class="details-Information-brand">
        <div>品牌信息</div>
        <div>-</div>
      </div>
    </div>

    <!-- 评论 -->
    <div class="details-translation">
      <h4>4条真实用户评论</h4>
      <div class="details-score">
        <div class="details-score-num">
          <div>
            <div>总评数：1</div>
            <div>好评数：0</div>
            <div>差评数：0</div>
          </div>
        </div>
        <div class="details-score-recommend">
          <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          ></el-rate>
        </div>
        <div class="details-score-level">
          <div class="details-score-service"></div>
        </div>
      </div>
      <div></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          source: "携程",
          roomtype: "高级大床房A",
          price: "￥89起>"
        },
        {
          source: "艺龙",
          roomtype: "高级大床房A",
          price: "￥89起>"
        },
        {
          source: "Hotels.com",
          roomtype: "高级大床房A",
          price: "￥89起>"
        }
      ],
      value: 3.7,
    };
  },
  mounted() {
    window.onLoad = function() {
      var map = new AMap.Map("container");
    };
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=8c68efba0728cdf0f1b6f99a6a4bb607&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
    this.$axios({
      url: `/hotels`,
      method: `GET`
    }).then(res => {
      console.log(res);
      this.image_url = res.data.data[0].photos;
      console.log(this.image_url);
    });
  }
};
</script>

<style lang='less' scoped>
.container {
  width: 1000px;
  .details-breadcrumb {
    padding: 20px 0;
    color: inherit;
  }
  .details-title-adress {
    .details-title {
      .details-title-chinese {
        font-size: x-large;
      }
      i {
        margin-right: -8px;
        color: #ffaa33;
      }
    }
    .details-title-english {
      color: #666;
      font-size: 14px;
    }
    .details-adress {
      color: #666;
      font-size: 14px;
    }
  }
  .details-image {
    width: 100%;
    margin: 40px 0;
    display: flex;
    justify-content: space-between;
    .details-image-big {
      width: 640px;
      height: 360px;
      img {
        width: 640px;
        height: 360px;
      }
    }
    .details-image-small {
      width: 330px;
      height: 360px;
      div {
        width: 155px;
        height: 110px;
        float: left;
        margin-right: 20px;
        margin-bottom: 15px;
        img {
          width: 155px;
          height: 110px;
        }
      }
      :nth-child(2n) {
        margin-right: 0px;
      }
    }
  }
  .details-items {
    margin-bottom: 40px;
    table {
      width: 100%;
      text-align: center;
    }
  }
  #container {
    width: 100%;
    height: 360px;
    margin-bottom: 40px;
  }
  .details-Information {
    width: 100%;
    margin-bottom: 40px;
    font-size: 14px;
    > div {
      display: flex;
      padding: 20px 0;
      border-bottom: 1px solid #ddd;
      > :first-child {
        flex: 1;
      }
      > :last-child {
        flex: 5;
        display: flex;
        color: #666;
      }
    }
    .details-Information-basic{
      :last-child{
        div{
          flex: 1;
        }
      }
    }
    .details-Information-device{
      :last-child{
        div{
          padding: 5px 10px;
          background: #eee;
          margin-right: 10px;
          border-radius: 5px;
        }
      }
    }
  }
  .details-translation{
    .details-score{
      display: flex;
      padding: 20px 0;
      .details-score-num{
        flex: 1;
      }
      .details-score-recommend{
        flex: 1;
        padding-top: 20px;
        padding-right: 40px;
      }
      .details-score-level{
        flex: 5;
        .details-score-service{
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 2px solid #ffaa33 ;
        }
      }
    }
  }
}
</style>