<template>
    <div>
        <div class="articleBox">
            <ul>
                <li v-for="(item,index) in dataList" :key="index" :class="`articleItem${item.images.length<3?2:1}`">
                    <!-- 跳转到详情 -->
                    <nuxt-link :to="`/post/detail?id=${item.id}`">
                        <h4 class="h4isDisplay1" @click="mouseEnter(item.id)">{{item.title}}</h4>
                    </nuxt-link>
                    <!-- 用于控制只有一张图片时，图片在左边 -->
                    <div class="articleImg1" style="display:none">
                        <nuxt-link :to="`/post/detail?id=${item.id}`">
                            <img :src="dataList[index].images[0]" alt="">
                        </nuxt-link>
                    </div>
                    <div class="rightBox" style="display:none">
                            <!-- 用于控制只有一张图片时，标题在右边 -->
                            <nuxt-link :to="`/post/detail?id=${item.id}`">
                                <h4 class="h4isDisplay2">{{item.title}}</h4>
                            </nuxt-link>
                            <nuxt-link :to="`/post/detail?id=${item.id}`">
                                <p v-html="dataList[index].summary" class="articleContent2"></p>
                            </nuxt-link>
                            <div class="postInfo2">
                                <span>
                                    <i class="el-icon-location"></i>
                                    {{item.cityName}}
                                    by
                                        <img :src="`http://157.122.54.189:9095${dataList[index].account.defaultAvatar}`" 
                                        alt="">
                                    {{dataList[index].account.nickname}}
                                    <i class="el-icon-view"></i>
                                    {{dataList[index].watch}}
                                </span>
                            </div>
                    </div>
                    <nuxt-link :to="`/post/detail?id=${item.id}`">
                        <p v-html="dataList[index].summary" class="articleContent1"></p>
                    </nuxt-link>
                    <div class="articleImg2">
                                <nuxt-link :to="`/post/detail?id=${item.id}`">
                                    <img :src="dataList[index].images[0]" alt="">
                                </nuxt-link>
                                <nuxt-link :to="`/post/detail?id=${item.id}`">
                                    <img :src="dataList[index].images[1]" alt="">
                                </nuxt-link>
                                <nuxt-link :to="`/post/detail?id=${item.id}`">
                                    <img :src="dataList[index].images[2]" alt="">
                                </nuxt-link>
                                <div class="postInfo2" style="display:none">
                                    <span>
                                        <i class="el-icon-location"></i>
                                        {{item.cityName}}
                                        by
                                        <img :src="`http://157.122.54.189:9095${dataList[index].account.defaultAvatar}`" alt="">
                                        {{dataList[index].account.nickname}}
                                        <i class="el-icon-view"></i>
                                        {{dataList[index].watch}}
                                    </span>
                                </div>
                    </div>
                    <div class="postInfo1">
                            <span>
                                <i class="el-icon-location"></i>
                                {{item.cityName}}
                                by
                                <img :src="`http://157.122.54.189:9095${dataList[index].account.defaultAvatar}`" alt="">
                                {{dataList[index].account.nickname}}
                                <i class="el-icon-view"></i>
                                {{dataList[index].watch}}
                            </span>
                    </div>
                </li>
            </ul>
        </div>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageIndex"
            :page-sizes="[3, 6, 9, 12]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dataList:[],
            dataListAll:[],
            pageIndex:1,
            pageSize:3,
            total:100,
            number:0
        }
    },
    mounted(){
        this.$axios({
            url:`/posts`,
            method:'GET',
        }).then(res=>{
            console.log(res.data);
            this.total = res.data.data.length;
            this.dataListAll=res.data.data;
            this.dataList=this.dataListAll.slice(0,3);
        })
    },
    methods:{
        handleSizeChange(val){
            this.pageSize = val;
        },
        handleCurrentChange(val){
            this.pageIndex = val;
            this.dataList = this.dataListAll.slice(
              (this.pageIndex - 1) * this.pageSize,
              this.pageIndex * this.pageSize
            )
        }
    }
}
</script>

<style scoped lang="less">
            .articleItem1{
                height: 308px;
                padding: 20px 0;
                border-top:1px #ccc solid;
                .h4isDisplay1{
                    margin-bottom:15px;
                    font-size: 18px;
                    font-weight: 400;
                    &:hover{
                        color:orange;
                        cursor: pointer;
                    }
                }
                .articleContent1{
                    margin-bottom: 15px;
                    line-height: 1.5;
                    font-size: 14px;
                    height: 63px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                }
                .articleImg2{
                    height: 150px;
                    margin: 15px 0;
                    display: flex;
                    justify-content: space-between;
                    img{
                        height: 150px;
                        width: 220px;
                    }
                }
                .postInfo1{
                    height: 26px;
                    line-height: 26px;
                    font-size: 12px;
                    color: #ccc;
                        img{
                            width: 16px;
                            height: 16px;
                            border-radius: 100px;
                        }
                }
            }

            .articleItem2{
                height: 150px;
                padding: 20px 0;
                border-top:1px #ccc solid;
                display: flex;
                .h4isDisplay1{
                    display: none;
                }
                .articleImg1{
                    display: block !important;
                    height: 150px;
                    width: 220px;
                    margin-right: 15px;
                    img{
                        height: 150px;
                        width: 220px;
                    }
                }
                .rightBox{
                    display: block !important;
                    width: 470px;
                    .h4isDisplay2{
                        margin-bottom:15px;
                        font-size: 18px;
                        font-weight: 400;
                        &:hover{
                            color:orange;
                            cursor: pointer;
                        } 
                    }
                    .articleContent2{
                        margin-bottom: 15px;
                        line-height: 1.5;
                        font-size: 14px;
                        height: 63px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                    }
                    .postInfo2{
                        height: 26px;
                        line-height: 26px;
                        font-size: 12px;
                        color: #ccc;
                        display: block !important;
                        img{
                            width: 16px;
                            height: 16px;
                            border-radius: 100px;
                        }
                    }
                }
                .articleContent1{
                    display: none;
                }
                .articleImg2{
                    display: none;
                }
                .postInfo1{
                    display: none;
                }
            }
</style>
