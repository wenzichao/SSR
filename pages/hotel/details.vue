<template>
  <section class="container">
    <!-- 面包屑 -->
    <div class="details-breadcrumb">
      <!-- 面包屑 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/hotel' }">{{data.big_cate}}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/hotel' }">{{data.real_city+data.big_cate}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{this.data.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 酒店名地址 -->
    <div class="details-title-adress">
      <div class="details-title">
        <div class="details-title-chinese">{{data.name}}</div>
        <i class="iconfont huangguan" v-for="(item,index) in king" :key="index">&#xe600;</i>
      </div>
      <div class="details-title-english">{{data.alias}}</div>
      <div class="details-adress">
        <i class="el-icon-location"></i>
        <span>{{data.address}}</span>
      </div>
    </div>

    <!-- 酒店信息图片 -->
    <!-- <div class="details-image">
      <div class="details-image-big">
        <!-- <img :src="`http://http://157.122.54.189:9093/images/hotel-pics/${data}`" alt /> -->
        <img :src="`${image_url}`" />
      </div>
      <div class="details-image-small">
        <div v-for="(item,index) in data.pics" :key="index">
          <img
            @click="handleShowImage"
            :src="`http://157.122.54.189:9093/images/hotel-pics/${item.name}`"
          />
        </div>
      </div>
    </div> -->

    <!-- 房间信息 -->
    <div class="details-types">
      <div class="details-types-header">
        <div>低价来源</div>
        <div>低价房型</div>
        <div>最低价格/每晚</div>
      </div>
      <div class="details-types-list" v-for="(item,index) in data.products" :key="index">
        <div>{{item.name}}</div>
        <div>{{item.bestType}}</div>
        <div class="details-types-price">
          <span>￥{{item.price}}</span>
          <span>
            起
            <i class="el-icon-arrow-right"></i>
          </span>
        </div>
      </div>
    </div>

    <!-- 地图 -->
    <div class="details-map" id="container"></div>

    <!-- 酒店基本信息 -->
    <div class="details-Information">
      <div class="details-Information-basic">
        <div>基本信息</div>
        <div>
          <div>入住时间: 14:00之后</div>
          <div>离店时间: 12:00之前</div>
          <div>{{data.creation_time}} / {{data.renovat_time}}</div>
          <div>酒店规模: 69间客房</div>
        </div>
      </div>
      <div class="details-Information-device">
        <div>主要设施</div>
        <div>
          <div v-for="(item,index) in data.hotelassets" :key="index">{{item.name}}</div>
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

    <!-- 评分 -->
    <div class="details-score">
      <h4>4条真实用户评论</h4>
      <div class="details-score-real">
        <div class="details-score-num">
          <div>
            <div>总评数：{{data.all_remarks}}</div>
            <div>好评数：{{data.good_remarks}}</div>
            <div>差评数：{{data.bad_remarks}}</div>
          </div>
        </div>
        <div class="details-score-recommend">
          <div class="details-score-recommendlogo">推荐</div>
          <div class="details-score-starscore">
            <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
            ></el-rate>
          </div>
        </div>
        <div class="details-score-level">
          <div class="details-score-service"></div>
        </div>
      </div>
    </div>

    <!-- 评论 -->
    <div class="details-comment">
      <div>
        <div class="details-comment-firstcomment">
          <div class="details-comment-user">
            <div>
              <div class="details-comment-avatar">
                <img
                  src="https://n4-q.mafengwo.net/s11/M00/64/81/wKgBEFsmE0WAPbqnAAAOwSUlOKY63.jpeg?imageMogr2%2Fthumbnail%2F%2196x96r%2Fgravity%2FCenter%2Fcrop%2F%2196x96%2Fquality%2F90"
                  alt
                />
              </div>
              <div class="details-comment-level">LV.8</div>
            </div>
            <div class="details-comment-date">2019-6-26</div>
          </div>
          <div class="details-comment-textinput">
            <div class="details-comment-text">badwoman</div>
            <div class="details-comment-input">
              <input placeholder="添加回复" type="text" />
            </div>
            <div class="details-comment-replycomment">
              <div class="details-comment-replyuser">
                <div>
                  <div class="details-comment-replyavatar">
                    <img
                      src="https://n4-q.mafengwo.net/s11/M00/64/81/wKgBEFsmE0WAPbqnAAAOwSUlOKY63.jpeg?imageMogr2%2Fthumbnail%2F%2196x96r%2Fgravity%2FCenter%2Fcrop%2F%2196x96%2Fquality%2F90"
                      alt
                    />
                  </div>
                  <div class="details-comment-replylevel">LV.8</div>
                </div>
                <div class="details-comment-replydate">2019-6-26</div>
              </div>
              <div class="details-comment-replytextinput">
                <div class="details-comment-replytext">badwoman</div>
                <div class="details-comment-replyinput">
                  <input placeholder="添加回复" type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="details-comment-replycomment">
          <div class="details-comment-replyuser">
            <div>
              <div class="details-comment-replyavatar">
                <img
                  src="https://n4-q.mafengwo.net/s11/M00/64/81/wKgBEFsmE0WAPbqnAAAOwSUlOKY63.jpeg?imageMogr2%2Fthumbnail%2F%2196x96r%2Fgravity%2FCenter%2Fcrop%2F%2196x96%2Fquality%2F90"
                  alt
                />
              </div>
              <div class="details-comment-replylevel">LV.8</div>
            </div>
            <div class="details-comment-replydate">2019-6-26</div>
          </div>
          <div class="details-comment-replytextinput">
            <div class="details-comment-replytext">badwoman</div>
            <div class="details-comment-replyinput">
              <input placeholder="添加回复" type="text" />
            </div>
          </div>
        </div>
        <div class="details-comment-replycomment">
          <div class="details-comment-replyuser">
            <div>
              <div class="details-comment-replyavatar">
                <img
                  src="https://n4-q.mafengwo.net/s11/M00/64/81/wKgBEFsmE0WAPbqnAAAOwSUlOKY63.jpeg?imageMogr2%2Fthumbnail%2F%2196x96r%2Fgravity%2FCenter%2Fcrop%2F%2196x96%2Fquality%2F90"
                  alt
                />
              </div>
              <div class="details-comment-replylevel">LV.8</div>
            </div>
            <div class="details-comment-replydate">2019-6-26</div>
          </div>
          <div class="details-comment-replytextinput">
            <div class="details-comment-replytext">badwoman</div>
            <div class="details-comment-replyinput">
              <input placeholder="添加回复" type="text" />
            </div>
          </div>
        </div>
        <div class="details-comment-replycomment">
          <div class="details-comment-replyuser">
            <div>
              <div class="details-comment-replyavatar">
                <img
                  src="https://n4-q.mafengwo.net/s11/M00/64/81/wKgBEFsmE0WAPbqnAAAOwSUlOKY63.jpeg?imageMogr2%2Fthumbnail%2F%2196x96r%2Fgravity%2FCenter%2Fcrop%2F%2196x96%2Fquality%2F90"
                  alt
                />
              </div>
              <div class="details-comment-replylevel">LV.8</div>
            </div>
            <div class="details-comment-replydate">2019-5-5</div>
          </div>
          <div class="details-comment-replytextinput">
            <div class="details-comment-replytext">城市客栈环境非常不错，家庭房格局好，孩子们非常喜欢，前台的美女服务态度好，中午到的，一进屋立马清凉舒爽，离欢乐谷非常近，出门过天桥就是欢乐谷正门，周边配套齐全，吃饭，购物方便，乐购，好利来，肯德基，必胜客，火锅，应有尽有，价位也不错，全五星好评！</div>
            <div class="details-comment-replyinput">
              <input placeholder="添加回复" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      data_comments:{},
      value: '',
      king: [],
      image_url: "http://157.122.54.189:9093/images/hotel-pics/1.jpeg" //页面一加载默认显示第一张图片
    };
  },
  methods: {
    // 展示图片
    handleShowImage(item) {
      console.log(item);
      this.image_url = item.toElement.currentSrc;
      console.log(this.image_url);
    }
  },
  mounted() {
    // 地图
    window.onLoad = function() {
      var map = new AMap.Map("container");
    };
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=8c68efba0728cdf0f1b6f99a6a4bb607&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);

    // 获取城市和id
    // console.log(this.$route);
    // var city_id = this.$route.query.city
    // var id = this.$route.query.id
    // this.$axios({
    //   url: `/hotels`,
    //   method: `GET`
    // }).then(res => {
    //   console.log(res);
    //   this.data = res.data.data[id-1]
    //   console.log(this.data);
    // });

    // 获取酒店数据
    this.$axios({
      url: `/hotels`,
      method: `GET`,
      params: {
        id: this.$route.query.id
      }
    }).then(res => {
      this.data = res.data.data[0];
      this.king.length = this.data.hotellevel.level;
      this.value = this.data.stars
      console.log(this.data);
    });

    // 获取酒店数据
    this.$axios({
      url: `/hotels/comments`,
      method: `GET`,
      params: {
        id: this.$route.query.id
      }
    }).then(res => {
      console.log(res);
      this.data_comments = res.data.data[0]
    });

  }
};
</script>

<style lang='less' scoped>
@font-face {
  font-family: "iconfont"; /* project id 1280863 */
  src: url("//at.alicdn.com/t/font_1280863_h15yfelon5g.eot");
  src: url("//at.alicdn.com/t/font_1280863_h15yfelon5g.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1280863_h15yfelon5g.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1280863_h15yfelon5g.woff") format("woff"),
    url("//at.alicdn.com/t/font_1280863_h15yfelon5g.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1280863_h15yfelon5g.svg#iconfont") format("svg");
}
.container {
  width: 1000px;
  // 面包屑
  .details-breadcrumb {
    padding: 20px 0;
    color: inherit;
  }
  // 标题地址
  .details-title-adress {
    .details-title {
      .details-title-chinese {
        font-size: x-large;
      }
      i {
        color: #f90;
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
  // 图片展示
  .details-image {
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
        cursor: pointer;
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
  // 房间类型
  .details-types {
    margin-bottom: 40px;
    .details-types-header {
      display: flex;
      color: #909399;
      font-weight: 700;
      padding: 12px 0;
      border-bottom: 1px solid #eee;
      :nth-child(1) {
        flex: 4;
      }
      :nth-child(2) {
        flex: 4;
      }
      :nth-child(3) {
        flex: 2;
      }
    }
    .details-types-list {
      display: flex;
      color: #606266;
      padding: 12px 0;
      border-bottom: 1px solid #eee;
      cursor: pointer;
      :nth-child(1) {
        flex: 4;
      }
      :nth-child(2) {
        flex: 4;
      }
      :nth-child(3) {
        flex: 2;
      }
      .details-types-price {
        :first-child {
          color: #ffaa33;
        }
        :last-child {
          i {
            color: #ffaa33;
          }
        }
      }
    }
  }
  // 地图
  #container {
    width: 100%;
    height: 360px;
    margin-bottom: 40px;
  }
  // 酒店基本信息
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
    .details-Information-basic {
      :last-child {
        div {
          flex: 1;
        }
      }
    }
    .details-Information-device {
      :last-child {
        div {
          padding: 5px 10px;
          background: #eee;
          margin-right: 10px;
          border-radius: 5px;
        }
      }
    }
  }
  // 评分
  .details-score {
    .details-score-real {
      display: flex;
      padding: 20px 0;
      .details-score-num {
        flex: 1;
        color: #666;
      }
      .details-score-recommend {
        flex: 1;
        padding-top: 20px;
        padding-right: 40px;
        position: relative;
        .details-score-recommendlogo{
          position: absolute;
          left: 20px;
          top: -2px;
          border: 2px solid #fa3;
          text-align: center;
          line-height: 70px;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          opacity: .25;
          transform: rotate(-30deg);
          font-size: 25px;
          color:#fa3; 
        }
      }
      .details-score-level {
        flex: 4;
      }
    }
  }
  .details-comment {
    > div {
      .details-comment-firstcomment {
        display: flex;
        padding-bottom: 25px;
        border-bottom: 1px dashed #eee;
        .details-comment-user {
          flex: 1;
          > div {
            display: flex;
            .details-comment-avatar {
              margin-right: 10px;
              margin-bottom: 5px;
              width: 44px;
              height: 44px;
              border-radius: 50%;
              border: 2px solid #f90;
              overflow: hidden;
              img {
                width: 100%;
              }
            }
            .details-comment-level {
              padding-top: 7px;
              font-size: 12px;
              color: #f30;
            }
          }
          .details-comment-date {
            font-size: 14px;
            color: #666;
          }
        }
        .details-comment-textinput {
          flex: 8;
          padding-top: 3px;
          .details-comment-text {
            font-size: 16px;
            color: #666;
          }
          .details-comment-input {
            padding-bottom: 10px;
            margin: 10px 0;
            border-bottom: 1px dashed #eee;
            input {
              width: 100%;
              height: 30px;
              border: 1px solid #dcdfe6;
              border-radius: 4px;
              padding-left: 15px;
              color: #666;
            }
          }
          .details-comment-replycomment {
            display: flex;
            .details-comment-replyuser {
              flex: 1;
              > div {
                display: flex;
                .details-comment-replyavatar {
                  margin-right: 10px;
                  margin-bottom: 5px;
                  width: 44px;
                  height: 44px;
                  border-radius: 50%;
                  border: 2px solid #f90;
                  overflow: hidden;
                  img {
                    width: 100%;
                  }
                }
                .details-comment-replylevel {
                  padding-top: 7px;
                  font-size: 12px;
                  color: #f30;
                }
              }
              .details-comment-replydate {
                font-size: 14px;
                color: #666;
              }
            }
            .details-comment-replytextinput {
              flex: 8;
              padding-top: 3px;
              .details-comment-replytext {
                font-size: 16px;
                color: #666;
              }
              .details-comment-replyinput {
                padding-bottom: 10px;
                margin: 10px 0;
                input {
                  width: 100%;
                  height: 30px;
                  border: 1px solid #dcdfe6;
                  border-radius: 4px;
                  padding-left: 15px;
                  color: #666;
                }
              }
            }
          }
        }
      }
      .details-comment-replycomment {
        display: flex;
        margin-top: 15px;
        padding-bottom: 25px;
        border-bottom: 1px dashed #eee;
        .details-comment-replyuser {
          flex: 1;
          > div {
            display: flex;
            .details-comment-replyavatar {
              margin-right: 10px;
              margin-bottom: 5px;
              width: 44px;
              height: 44px;
              border-radius: 50%;
              border: 2px solid #f90;
              overflow: hidden;
              img {
                width: 100%;
              }
            }
            .details-comment-replylevel {
              padding-top: 7px;
              font-size: 12px;
              color: #f30;
            }
          }
          .details-comment-replydate {
            font-size: 14px;
            color: #666;
          }
        }
        .details-comment-replytextinput {
          flex: 8;
          padding-top: 3px;
          .details-comment-replytext {
            font-size: 16px;
            color: #666;
          }
          .details-comment-replyinput {
            padding-bottom: 10px;
            margin: 10px 0;
            input {
              width: 100%;
              height: 30px;
              border: 1px solid #dcdfe6;
              border-radius: 4px;
              padding-left: 15px;
              color: #666;
            }
          }
        }
      }
    }
  }
}
</style>