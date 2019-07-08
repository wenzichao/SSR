<template>
    <div>
        <el-row type="flex" class="hotel-item">
            <nuxt-link :to="`/hotel/details?city=${data.city.id}&id=${data.id}`">
                <img :src="data.photos" class="hotel-img" />
            </nuxt-link>
            <div class="hotel-item-conten">
                <nuxt-link :to="`/hotel/details?city=${data.city.id}&id=${data.id}`" class="hotel-title">
                    <div>{{data.name}}</div>
                </nuxt-link>
                <div class="hotel-type">
                    <span>{{data.alias}}</span>
                    <span class="icon-star">
                        <i class="el-icon-star-on" v-if="this.level>=1"></i>
                        <i class="el-icon-star-on" v-if="this.level>=2"></i>
                        <i class="el-icon-star-on" v-if="this.level>=3"></i>
                        <i class="el-icon-star-on" v-if="this.level>=4"></i>
                        <i class="el-icon-star-on" v-if="this.level>=5"></i>
                    </span>
                    <span>{{data.hoteltype.name}}</span>
                </div>
                <div class="hotel-grade">
                    <el-row type="flex">
                        <el-rate
                            v-model="data.stars"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value}"
                            class="hotel-star">
                        </el-rate>
                        <div class="hotel-comment">
                            <span>24</span>
                            条评价
                        </div>
                        <div class="hotel-comment">
                            <span>78</span>
                            篇游记
                        </div>
                    </el-row>
                </div>
                <div class="hotel-site">
                    <i class="el-icon-location-outline"></i>
                    <span>位于: {{data.address}}</span>
                </div>
            </div>
            <div class="hotel-price">
                <a href="#"  v-for="(item,index) in data.products" :key="index">
                    <div class="hotel-travel-price">
                        <el-row type="flex" justify="speace-between">
                            <el-col :span='12' class="price-stl">
                                {{item.name}}
                            </el-col>
                            <el-col :span='12' class="price-stl">
                                <span>￥{{item.price}}</span>起
                                <i class="el-icon-arrow-right"></i>
                            </el-col>
                        </el-row>
                    </div>
                </a>
            </div>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            grade:3.5,
            level:'',
        }
    },
    props:{
        data:{
            type:Object,
            default:{
                hotellevel:{}
            }
        }
    },
    mounted(){
        setTimeout(()=>{
            this.level = this.data.hotellevel.level
            // console.log(this.level.length);
        },100)
    }
}
</script>

<style scoped lang='less'>
.hotel-item{
    margin:20px 0;
    .hotel-img{
        // display: inline-block;
        width: 320px;
        height: 210px;
        padding: 0 10px;
    }
    .hotel-item-conten{
        width: 400px;
        padding: 0 10px;
    }
    .hotel-title{
        font-size: 24px;
        margin-bottom: 5px;
        font-weight: 300;
    }
    .hotel-type{
        .icon-star{
            color: #f90
        }
        span{
            color: #666;
        }
    }
    .hotel-grade{
        margin-top: 10px;
        .hotel-star{
            margin-top: 2px;
        }
        .hotel-comment{
            padding-left: 15px;
            width: 80px;
            span{
                color: #f90
            }
        }
    }
    .hotel-site{
        margin-top: 15px;
        font-size: 14px;
        color: #999;
    }
    .hotel-price{
        margin-top: 25px;
        padding: 0 10px;
        width: 255px;
        height: 155px;
        .hotel-travel-price{
            height: 50px;
            border-bottom: 1px solid #ebeef5;
            &:hover{
                background-color: rgb(245, 247, 250);
            }
            .price-stl{
                line-height: 30px;
                padding: 12px 10px;
                font-size: 14px;
                color: #666;
                span{
                    font-size: 16px;
                    color: #f90;
                }
            }
        }
    }
}

</style>
