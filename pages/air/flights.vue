<template>
    <section class="contianer">
        <el-row  type="flex" justify="space-between">

            <!-- 顶部过滤列表 -->
            <div class="flights-content">
                <!-- 过滤条件 -->
                    <FlightsFilters :data='newFlightsData' @setDataList='setDataList'/>
                
                <!-- 航班头部布局 -->
                <div>
                    <FightsListHead />
                </div>
                
                
                <!-- 航班信息 -->
                <div>
                    <FlightsItem v-for="(item,index) in dataList" :key='index' :data='item'/>
                </div>
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pageIndex"
                    :page-sizes="[5, 10, 15, 20]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="flightsData.total">
                </el-pagination>
            </div>

            <!-- 侧边栏 -->
            <div class="aside">
                <FlightsAside />
                <!-- 侧边栏组件 -->
            </div>
        </el-row>
    </section>
</template>

<script>

import FightsListHead from "@/components/air/fightsListHead";
import FlightsItem from "@/components/air/flightsItem";
import FlightsFilters from "@/components/air/flightsFilters";
import FlightsAside from "@/components/air/flightsAside";

export default {
    data(){
        return {
            flightsData:{
                flights:[],
                info:{},
                options:{},
            },
            newFlightsData:{
                flights:[],
                info:{},
                options:{},
            },
            dataList:[],
            pageIndex:1,
            pageSize:5,
        }
    },
    mounted(){
        this.getDataList()
    },
    methods:{
        // 封装一个页面渲染请求
        getDataList(){
            this.$axios({
            url:'/airs',
            params:this.$route.query
            }).then(res=>{
            console.log(res);
            this.flightsData = res.data;

            this.newFlightsData = {...res.data}
            this.dataList = res.data.flights;
            this.setDataList()
            })
        },
        // 对过滤条件进行判断处理
        setDataList(arr){
            if(arr){
                // console.log(arr);
                this.pageIndex = 1;
                this.flightsData.flights = arr;
                // this.newFlightsData.flights = this.flightsData.flights;
                this.flightsData.total = arr.length
            }
            this.dataList = this.flightsData.flights.slice((this.pageIndex-1)*this.pageSize,this.pageIndex*this.pageSize)
        },
        // 分页条数的选择
        handleSizeChange(val){
            this.pageSize = val;
            this.setDataList()
        },
        // 页数的选择
        handleCurrentChange(val){
            // console.log(val);
            this.pageIndex = 2;
            this.setDataList()
        },
    },
    watch:{
        // 路由改变重新渲染
        $route(){
            this.getDataList()
        }
    },
    components:{
        FightsListHead,
        FlightsItem,
        FlightsFilters,
        FlightsAside,
    }
}
</script>

<style scoped lang="less">
    .contianer{
        width:1000px;
        margin:20px auto;
    }

    .flights-content{
        width:745px;
        font-size:14px;
    }

    .aside{
        width:240px;
    } 
</style>