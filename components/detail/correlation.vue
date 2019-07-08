<template>
    <div>
        <div class="xiangguang">
          <h3>相关攻略</h3>
        </div>
        <div class="correlation-content" v-for="(item,index) in data" :key="index">
            <nuxt-link :to="`/post/detail?id=${item.id}`">
                <div class="correlation-img">
                    <img :src="item.images[0]" alt="" style="width:100px;height:80px;">
                </div>
                <div class="correlation-title">{{item.title}}</div>
                <p>{{item.time}}</p>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    data(){
        return {
            data:[]
        }
    },
    mounted(){
        this.$axios({
            url:'/posts/recommend',
            method:'GET'
        }).then(res=>{
            let time = moment().format('YYYY-MM-DD hh:mm')
            this.data = res.data.data;
            this.data.forEach(v=>{
                v.time = time
            })
            console.log(this.data);
        })
    }
}
</script>

<style lang='less'>
 .xiangguang h3{
  font-weight: 400;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
}
.correlation-content{
    position: relative;
    border-bottom: 1px solid #ddd;
    .correlation-img{
        display: inline-block;
        width: 100px;
        height: 80px;
        background-color: #ddd;
        margin: 20px 10px;
        border: 1px solid #999;
    }
    .correlation-title{
        height: 80px;
        display: inline-block;
        font-size: 14px;
        width: 100px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    p{
        font-size: 12px;
        position: absolute;
        bottom: 20px;
        left: 127px;
        color: #999;
    }
}
</style>
