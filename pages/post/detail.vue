<template>
  <div class="container clearfix">
    <div class="bigbox clearfix">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/post' }">旅游攻略</el-breadcrumb-item>
        <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
      </el-breadcrumb>

      <!-- 攻略详情内容 -->
      <div>
        <Gonluexiangqing />
      </div>

      <!-- 收藏点赞 -->
      <div>
        <Pinglundianzan />
      </div>

      <div class="bottom">
        <h4 class="h4">评论</h4>
        <div class="el-textarea">
          <textarea
            autocomplete="off"
            placeholder="说点什么吧..."
            class="el-textarea__inner"
            style="resize: none; min-height: 33px;"
          ></textarea>
        </div>
        <div class="bottom-shangchuan">
          <el-upload action="#" list-type="picture-card" :auto-upload="false">
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file}">
              <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
              <span class="el-upload-list__item-actions">
                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)"
                >
                  <i class="el-icon-download"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog>
            <img width="100%" />
          </el-dialog>
          <div>
            <button
              type="button"
              class="el-button cmt-submit el-button--primary el-button--mini"
            >
              <!---->
              <!---->
              <span>提交</span>
            </button>
          </div>
        </div>

     
        <div class="cmt-list" v-for="(item,index) in dataList" :key="index" :data="item" >
        <div class="cmt-item">
          <div class="cmt-info">
            <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" />
            <!-- {{this.dataList.account.nickname}} -->
            {{item.account.nickname}}
            <i>2019-07-05 4:54</i>
            <span>{{item.id}}</span>
          </div>
          <div class="cmt-content">
            <!---->
            <div class="cmt-new">
              <p class="cmt-message">{{item.content}}</p>
              <div class="el-row el-row--flex"></div>
              <div class="cmt-ctrl">
                <a href="javascript:;">回复</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
        <!-- 分页 -->
       
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageIndex"
            :page-sizes="[2, 4, 6, 8]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="detailData.total"
          ></el-pagination>
        
      </div>
    </div>
    <div class="right clearfix">
        <div class="xiangguang">
          <h3>相关攻略</h3>
        </div>

        <div v-html="this.tuijianList.content">{{this.tuijianList.content}}</div>
    </div>
  </div>
</template>

<script>
import Gonluexiangqing from "@/components/detail/gonluexiangqing";
import Pinglundianzan from "@/components/detail/pinglundianzan";
// import Fabupinglun from "@/components/detail/fabupinglun";

export default {
  data() {
    return {
      tuijianList:{},
      detailData: {
        data: [],
        total:0,
      },

      dataList: [],
      pageIndex: 1, //页数
      pageSize: 2, //条数
    };
  },

    mounted(){
      
        this.getDataList()
        this.tuijianDataList()
    },

  methods:{
        // 封装一个页面渲染请求
        getDataList(){
            this.$axios({
            url:"/posts/comments",
            params:this.$route.query
            }).then(res=>{
            this.detailData = res.data;   
            this.dataList = res.data.data.slice(0,2);
            console.log(res.data.data);
            })
        },

        // 封装一个页面渲染请求
        tuijianDataList(){
            this.$axios({
            url:"/posts/recommend",
            params:this.$route.query
            }).then(res=>{
            console.log(res.data);
            console.log(res.data.data);
            this.tuijianList = res.data.data[3]
            })
        },

        // 分页条数的选择
        handleSizeChange(val){
            this.pageSize = val;
            
        },
        // 页数的选择
        handleCurrentChange(val){
            // console.log(val);
            this.pageIndex = val;

            this.dataList = this.detailData.data.slice(
              (this.pageIndex - 1) * this.pageSize,
              this.pageIndex * this.pageSize
            )
           
        },
        
    },
  

  components: {
    Gonluexiangqing,
    Pinglundianzan,
    // Fabupinglun
  }
};
</script>

<style>
.clearfix:before,.clearfix:after { 
  content:"";
  display:table;
}
.clearfix:after {
 clear:both;
}

.container {
  width: 1000px;
  margin: 0 auto;
  padding-top: 20px;
}
.bigbox {
  width: 700px;
  float: left;
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
.right{
  width: 280px;
  float: right;
  margin-left: 20px;
}
.right img:nth-child(2){
  width: 56px;
  height: 56px;
}
.right img{
  width: 280px;
}

 .xiangguang h3{
  font-weight: 400;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
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
.h4 {
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 20px;
}
.bottom .bottom-shangchuan {
  margin-bottom: 30px;
  position: relative;
}
.bottom .bottom-shangchuan .el-upload {
  height: 100px;
  width: 100px;
  position: relative;
}
.bottom .bottom-shangchuan .el-icon-plus {
  margin: auto auto;
  position: absolute;
  left: 36px;
  top: 36px;
}
.cmt-info span{
  float: right;
}
.el-textarea {
  margin-bottom: 10px;
}
.el-button {
  position: absolute;
  right: 0;
  top: 0;
}
.el-upload-list__item-actions {
  width: 100px !important;
  height: 100px !important;
}
.el-upload-list--picture-card .el-upload-list__item {
  width: 100px !important;
  height: 100px !important;
}
.cmt-list{
        border: 1px solid #ddd;
}
.cmt-item{
        /* border-bottom: 1px dashed #ddd; */
        padding: 20px 20px 5px;
}
.cmt-info{
    margin-bottom: 10px;
    font-size: 12px;
    color: #666;
}
.cmt-info img{
        width: 16px;
        height: 16px;
        border-radius: 50%;
}
.cmt-content{
        padding: 0 0 0 30px;
}
.cmt-message{
        margin-top: 10px;
}
.el-row .el-row--flex{
        display: flex;
}
.cmt-ctrl{
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    color: #1e50a2;
    text-align: right;
}
.block{
  margin-top: 10px;
}
.bottom{
  margin-bottom: 20px;
}
.cmt-ctrl a{
  display: none;
}
.cmt-new:hover a{
  display: block
}
</style>
