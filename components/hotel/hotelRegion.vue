<template>
  <div>
    <el-row type="flex" class="area">
      <div class="strategy">
        <div>
          <!-- 区域板块 -->
          <el-row type="flex" class="region">
            <el-col :span="3">
              <div class="region-left">区域：</div>
            </el-col>
            <el-col :span="21">
              <div class="region-right" :style="'height:'+height">
                  <a href='javascript:;' class="area-link">全部</a>
                  <a href='javascript:;' class="area-link">镇兴路沿线</a>
                  <a href='javascript:;' class="area-link">视觉艺术学院</a>
                  <a href='javascript:;' class="area-link">大成名店</a>
                  <a href='javascript:;' class="area-link">南京西站</a>
                  <a href='javascript:;' class="area-link">铜山镇</a>
                  <a href='javascript:;' class="area-link">大桥南路</a>
                  <a href='javascript:;' class="area-link">宝塔路沿线</a>
                  <a href='javascript:;' class="area-link">宝塔路/万辰苏果</a>
                  <a href='javascript:;' class="area-link">珠江路沿线</a>
                  <a href='javascript:;' class="area-link">华侨城</a>
                  <a href='javascript:;' class="area-link">江浦</a>
                  <a href='javascript:;' class="area-link">东屏镇</a>
                  <a href='javascript:;' class="area-link active">南京南站/明发</a>
                  <a href='javascript:;' class="area-link">北岭路沿线</a>
                  <a href='javascript:;' class="area-link">苜蓿园</a>
                  <a href='javascript:;' class="area-link">弘阳广场/新一城</a>
                  <a href='javascript:;' class="area-link">新街口地区</a>
                  <a href='javascript:;' class="area-link">紫金山/孝陵卫</a>
                  <a href='javascript:;' class="area-link">火车站/玄武湖</a>
                  <a href='javascript:;' class="area-link">东坝镇</a>
                  <a href='javascript:;' class="area-link">禄口机场</a>
                  <a href='javascript:;' class="area-link">奥体中心</a>
                  <a href='javascript:;' class="area-link">雨润大街</a>
                  <a href='javascript:;' class="area-link">新模范马路</a>
                  <a href='javascript:;' class="area-link">将军山</a>
                  <a href='javascript:;' class="area-link">国际慢城</a>
                  <a href='javascript:;' class="area-link">云鼎时尚街区</a>
                  <a href='javascript:;' class="area-link">百家湖</a>
                  <a href='javascript:;' class="area-link">湖南路</a>
                  <a href='javascript:;' class="area-link">竹山路沿线</a>
                  <a href='javascript:;' class="area-link">南大/南师大</a>
                  <a href='javascript:;' class="area-link">江宁滨江开发区</a>
                  <a href='javascript:;' class="area-link">湖熟镇</a>
                  <a href='javascript:;' class="area-link">南大和园</a>
                  <a href='javascript:;' class="area-link">君临紫金商业街</a>
                  <a href='javascript:;' class="area-link">大西门</a>
                  <a href='javascript:;' class="area-link">建邺万达</a>
                  <a href='javascript:;' class="area-link">江宁科学园</a>
                  <a href='javascript:;' class="area-link">顾家欧亚达</a>
                  <a href='javascript:;' class="area-link">高淳老街</a>
                  <a href='javascript:;' class="area-link">谷里</a>
                  <a href='javascript:;' class="area-link">汤山镇</a>
                  <a href='javascript:;' class="area-link">雄州</a>
              </div>
              <a href="#" @click="handleShow">
                  <i class="el-icon-d-arrow-right" :style="'transform:'+transform"></i>
                  等43个地域
                </a>
            </el-col>
          </el-row>
          <!-- 攻略版块 -->
          <el-row type="flex">
            <el-col :span="3">
              <div class="region-left">攻略：</div>
            </el-col>
            <el-col :span="21">
              <div>北京，你想要的都能在这找到。博古通今，兼容并蓄，天下一城，如是帝都。 景点以故宫为中心向四处辐射；地铁便宜通畅，而且覆盖绝大多数景点。 由于早上有天安门升旗仪式，所以大多数人选择在天安门附近住宿。</div>
            </el-col>
          </el-row>
          <!-- 均价板块 -->
          <el-row type="flex" class="average-price">
            <el-col :span="3">
              <div class="region-left">
                均价
                <el-tooltip content="等级均价由平日价格计算得出，节假日价格会有上浮。" placement="top-start">
                  <i class="el-icon-question"></i>
                </el-tooltip>：
              </div>
            </el-col>
            <el-col :span="21">
              <el-row type="flex" class="grade">
                <div>
                  <el-tooltip content="等级评定是针对房价，设施和服务等各方面水平的综合评估。" placement="bottom">
                    <div class="icon-color">
                      <i class="el-icon-star-on"></i>
                      <i class="el-icon-star-on"></i>
                      <i class="el-icon-star-on"></i>
                      <span>￥332</span>
                    </div>
                  </el-tooltip>
                </div>
                <div>
                  <el-tooltip content="等级评定是针对房价，设施和服务等各方面水平的综合评估。" placement="bottom">
                    <div class="icon-color">
                      <i class="el-icon-star-on"></i>
                      <i class="el-icon-star-on"></i>
                      <i class="el-icon-star-on"></i>
                      <i class="el-icon-star-on"></i>
                      <span>￥521</span>
                    </div>
                  </el-tooltip>
                </div>
                <div>
                  <el-tooltip content="等级评定是针对房价，设施和服务等各方面水平的综合评估。" placement="bottom">
                    <div class="icon-color">
                      <i class="el-icon-star-on"></i>
                      <i class="el-icon-star-on"></i>
                      <i class="el-icon-star-on"></i>
                      <i class="el-icon-star-on"></i>
                      <i class="el-icon-star-on"></i>
                      <span>￥768</span>
                    </div>
                  </el-tooltip>
                </div>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="map">
          <div id="container"></div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
    data(){
        return {
            height:'42px',
            transform:'rotate(90deg)'
        }
    },
    methods:{
        handleShow(){
            if(this.height=='42px'){
                this.height = '152px';
                this.transform = 'rotate(-90deg)';
            }else{
                this.height = '42px';
                this.transform = 'rotate(90deg)';
            }
        }
    },
    mounted(){
        window.onLoad = function(){
            var map = new AMap.Map('container',{
                center:[118.78 ,32.07],
            });
        }
        // 引入高德地图的js文件
        var url = `https://webapi.amap.com/maps?v=1.4.15&key=538d4bb73833b822ee2b1fc8a348f3cd&callback=onLoad`;
        var jsapi = document.createElement('script');
        jsapi.charset = 'utf-8';
        jsapi.src = url;
        document.head.appendChild(jsapi);
    }
};
</script>

<style scoped lang='less'>
.area {
  margin: 20px 0;
  .strategy {
    color: #666;
    font-size: 14px;
    width: 585px;
    height: 310px;
    padding: 0 5px;
    margin-right: 10px;
    .region {
      .region-right {
        // height: 152px;
        overflow: hidden;
        .area-link {
            margin-right: 1em;
            padding: 0 2px;
            border-radius: 4px;
            display: inline-block;
          &:hover {
            color: #409eff;
            text-decoration: underline;
          }
        }
      }
    }
    .average-price {
      margin-top: 20px;
    }
    .grade {
      .icon-color {
        color: rgb(247, 186, 42);
        font-size: 16px;
        span {
          font-size: 14px;
          color: #666;
        }
      }
      div {
        margin-left: 15px;
        text-align: center;
      }
    }
  }
.map{
    #container{
        width: 420px;
        height: 260px;
    }
}
}
</style>

