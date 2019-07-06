<template>
  <div class="container">
    <div class="bigbox">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/post' }">旅游攻略</el-breadcrumb-item>
        <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
      </el-breadcrumb>
      <h1 class="h1">{{this.dataList.title}}</h1>
      <div class="gonlue">
        <span>
          攻略 : 2019-05-22 10:57
          <span class="span1">阅读 : 619</span>
        </span>
      </div>
      <div v-html="this.dataList.content" class="content">{{this.dataList.content}}</div>
      <div class="tubiao-box">
        <div class="tubiao-xiao">
          <i class="el-icon-edit-outline tubiao"></i>
          <p class="tubiao-pinlun">评论(100)</p>
        </div>
        <div class="tubiao-xiao">
          <i class="el-icon-star-off tubiao"></i>
          <p class="tubiao-pinlun">收藏</p>
        </div>
        <div class="tubiao-xiao">
          <i class="el-icon-share tubiao"></i>
          <p class="tubiao-pinlun">分享</p>
        </div>
        <div class="tubiao-xiao">
          <i class="el-icon-thumb tubiao"></i>
          <p class="tubiao-pinlun">点赞(5)</p>
        </div>
      </div>

      <div class="bottom">
        <h4 data-v-741ea8d8 class="h4">评论</h4>
        <div data-v-741ea8d8 class="el-textarea">
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
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
          <div data-v-741ea8d8>
            <button
              data-v-741ea8d8
              type="button"
              class="el-button cmt-submit el-button--primary el-button--mini"
            >
              <!---->
              <!---->
              <span>提交</span>
            </button>
          </div>
        </div>
        <!-- 评论 -->
        <div data-v-741ea8d8 class="cmt-list">
          <div data-v-741ea8d8 class="cmt-item">
            <div data-v-741ea8d8 class="cmt-info">
              <img data-v-741ea8d8 src="http://157.122.54.189:9095/assets/images/avatar.jpg" />
              李杀猪
              <i data-v-741ea8d8>2019-07-05 4:58</i>
              <span data-v-741ea8d8>1</span>
            </div>
            <div data-v-741ea8d8 class="cmt-content">
              <!---->
              <div data-v-741ea8d8 class="cmt-new">
                <p data-v-741ea8d8 class="cmt-message">是是是</p>
                <div data-v-741ea8d8 class="el-row el-row--flex"></div>
                <div data-v-741ea8d8 class="cmt-ctrl">
                  <a data-v-741ea8d8 href="javascript:;">回复</a>
                </div>
              </div>
            </div>
          </div>
          <div data-v-741ea8d8 class="cmt-item">
            <div data-v-741ea8d8 class="cmt-info">
              <img data-v-741ea8d8 src="http://157.122.54.189:9095/assets/images/avatar.jpg" />
              小柠檬
              <i data-v-741ea8d8>2019-07-05 4:54</i>
              <span data-v-741ea8d8>1</span>
            </div>
            <div data-v-741ea8d8 class="cmt-content">
              <!---->
              <div data-v-741ea8d8 class="cmt-new">
                <p data-v-741ea8d8 class="cmt-message">sfddj</p>
                <div data-v-741ea8d8 class="el-row el-row--flex"></div>
                <div data-v-741ea8d8 class="cmt-ctrl">
                  <a data-v-741ea8d8 href="javascript:;">回复</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 分页 -->

        <div class="block">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
            </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [],
      //   title:this.data.data[0].title
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
    };
  },
  mounted() {
    this.$axios({
      url: "/posts",
      method: "GET"
      // headers:{
      //           Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
      //       }
    }).then(res => {
      this.dataList = res.data.data[0];
      console.log(res.data.data[0]);
    });
  },
  methods: {
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }
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
        border-bottom: 1px dashed #ddd;
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
</style>
