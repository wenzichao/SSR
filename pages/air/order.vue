<template>
    <div class="container">
        <el-row type="flex" justify="space-between">
            <!-- 订单表单 -->
            <div class="main">
                <OrderForm @getDataList='getDataList' @getPrice='getPrice' />
            </div>

            <!-- 侧边栏 -->
            <div class="aside">
                <OrderAside :data='datalist' :price='price' />
            </div>
        </el-row>
    </div>
</template>

<script>
import OrderForm from '@/components/air/orderForm';
import OrderAside from '@/components/air/orderAside';
export default {
    data(){
        return {
            datalist:{
                seat_infos:{}
            },
            price:0
        }
    },
    methods:{
        getDataList(data){
            this.datalist = data
        },
        getPrice(data){
            this.price = data
        }
    },
    components:{
        OrderForm,
        OrderAside,
    }
}
</script>

<style lang="less" scoped>
    .container{
        width:1000px;
        margin:20px auto;
    }
    
    /*aside*/
    .aside{
        width: 350px;
        height: fit-content;
        border:1px #ddd solid;
    }
</style>