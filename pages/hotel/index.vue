<template>
  <div class="container">
      <!-- 引入头部组件 -->
      <HotelHeader />

      <!-- 区域组件 -->
      <HotelRegion />

      <!-- 酒店选择过滤器 -->
      <HotelFilter />

      <!-- 酒店列表组件 -->
      <HotelItem />

      <!-- 分页 -->
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="50"
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
