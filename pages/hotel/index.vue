<template>
  <div class="container">
      <!-- 引入头部组件 -->
      <HotelHeader @changeCity='changeCity'/>

      <!-- 区域组件 -->
      <HotelRegion />

      <!-- 酒店选择过滤器 -->
      <HotelFilter @getFilter='getFilter'/>

      <!-- 酒店列表组件 -->
      <HotelItem v-for="(item,index) in dataList" :key="index" :data='item' />

      <!-- 分页 -->
      <div class="pagination">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-size='pageSize'
          layout="prev, pager, next"
          :total='total'
          prev-text='　　上一页　　'
          next-text='　　下一页　　'
          class="hotel-paging">
        </el-pagination>
      </div>
  </div>
</template>

<script>
import HotelHeader from '@/components/hotel/hotelHeader'
import HotelRegion from '@/components/hotel/hotelRegion'
import HotelFilter from '@/components/hotel/hotelFilter'
import HotelItem from '@/components/hotel/hotelItem'
export default {
  data(){
    return {
      pageIndex:1,
      pageSize:10,
      dataList:[],
      total:0,
      city_id:'74'
    }
  },
  mounted(){
    this.getDataList()
  },
  watch:{
        // 路由改变重新渲染
        $route(){
            this.getDataList()
        }
    },
  methods:{
    handleCurrentChange(val){
      this.pageIndex = val;
      this.getDataList()
    },
    getDataList(){
      this.$axios({
        url:`/hotels?city=${this.city_id}`,
        method:"GET",
        params:{
          _start:this.pageIndex,
          _limit:this.pageSize,
          ...this.$route.query
        }
      }).then(res=>{
        this.dataList = res.data.data
        this.total = res.data.total
      })
    },
    getFilter(obj){
      this.$router.push({
        path:'/hotel',
        query:{...obj}
      })
    },
    changeCity(obj){
      this.city_id = obj.id;
      this.getDataList()
    }
  },

  components:{
    HotelHeader,
    HotelRegion,
    HotelFilter,
    HotelItem,
  }
}
</script>

<style scoped lang='less'>
.container{
  max-width: 1000px;
  margin: 0 auto;
  
}
.pagination{
  height: 20px;
  margin-bottom: 40px;
  .hotel-paging{
    float: right;
  }
}

</style>
