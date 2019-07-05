<template>
    <div class="search-form">

        <!-- 头部tab切换 -->
        <el-row type="flex" class="search-tab">
            <span v-for="(item, index) in tabs" :key="index"
            @click="handleSearchTab(item, index)"
            :class="{active: index === currentTab}">
                <i :class="item.icon"></i>{{item.name}}
            </span>
        </el-row>

        <el-form class="search-form-content" ref="form" label-width="80px" :model="form">
            <el-form-item label="出发城市">
                <!-- fetch-suggestions 返回输入建议的方法 -->
                <!-- select 点击选中建议项时触发 -->
                <el-autocomplete
                :fetch-suggestions="queryDepartSearch"
                placeholder="请搜索出发城市"
                @select="handleDepartSelect"
                class="el-autocomplete"
                v-model="form.departCity"
                :trigger-on-focus="false"
                ></el-autocomplete>
            </el-form-item>

            <el-form-item label="到达城市">
                <el-autocomplete
                :fetch-suggestions="queryDestSearch"
                placeholder="请搜索到达城市"
                @select="handleDestSelect"
                class="el-autocomplete"
                v-model="form.destCity"
                :trigger-on-focus="false"
                ></el-autocomplete>
            </el-form-item>

            <el-form-item label="出发时间">
                <!-- change 用户确认选择日期时触发 -->
                <el-date-picker type="date" 
                placeholder="请选择日期" 
                style="width: 100%;"
                @change="handleDate"
                v-model="form.departDate">
                </el-date-picker>
            </el-form-item>

            <el-form-item label="">
                <el-button style="width:100%;" 
                type="primary" 
                icon="el-icon-search"
                @click="handleSubmit">
                    搜索
                </el-button>
            </el-form-item>
            <div class="reverse">
                <span @click="handleReverse">换</span>
            </div>
        </el-form>  
      </div>
</template>

<script>
import moment from 'moment'
export default {
    data(){
        return {
            form:{
                departCity:'',
                departCode:'',
                destCity:'',
                destCode:'',
                departDate:''
            },
            tabs: [
                {icon: "iconfont icondancheng", name: "单程"},
                {icon: "iconfont iconshuangxiang", name: "往返"}
            ],
            currentTab: 0,
        }
    },
    methods: {
        // tab切换时触发
        handleSearchTab(item, index){
            if(index===1){
                this.$alert('目前暂不支持往返，请使用单程选票！', '提示', {
                    confirmButtonText: '确定',
                    type: 'warning'
                })
            }
        },
        
        // 出发城市输入框获得焦点时触发
        // value 是选中的值，cb是回调函数，接收要展示的列表
        queryDepartSearch(value, cb){
            this.$axios({
                url:'http://157.122.54.189:9095/airs/city?name='+value,
                method:'GET'
            }).then(res=>{
                const {data} = res.data;
                data.forEach(v => {
                    v.value=v.name.slice(0,-1)
                });
                this.form.departCity = data[0].value
                this.form.departCode = data[0].sort
                cb(data);
            })
        },

        // 目标城市输入框获得焦点时触发
        // value 是选中的值，cb是回调函数，接收要展示的列表
        queryDestSearch(value, cb){
            this.$axios({
                url:'http://157.122.54.189:9095/airs/city?name='+value,
                method:'GET'
            }).then(res=>{
                const {data} = res.data;
                data.forEach(v => {
                    v.value=v.name.slice(0,-1)
                });
                this.form.destCity = data[0].value
                this.form.destCode = data[0].sort
                cb(data);
            })
        },
       
        // 出发城市下拉选择时触发
        handleDepartSelect(item) {
            
        },

        // 目标城市下拉选择时触发
        handleDestSelect(item) {
            
        },

        // 确认选择日期时触发
        handleDate(value){
           
        },

        // 触发和目标城市切换时触发
        handleReverse(){
            const {departCity,departCode,destCity,destCode} = this.form;
            this.form.departCity = destCity;
            this.form.departCode = destCode;
            this.form.destCity = departCity;
            this.form.destCode = departCode;
        },

        // 提交表单是触发
        handleSubmit(){
            const rules = {
                depart:{
                    value:this.form.departCity,
                    message:'请输入出发城市'
                },
                dest:{
                    value:this.form.destCity,
                    message:'请输入目标城市'
                },
                departDate:{
                    value:this.form.departDate,
                    message:'请输入出发时间'
                }
            }
            // 对输入框是否输入值进行判断
            let value = true
            Object.keys(rules).forEach(v=>{
                if(!value) return
                if(rules[v].value==''){
                    this.$message.warning(rules[v].message)
                    value=false
                }
            })
            if(!value) return
            this.form.departDate = moment(this.form.departDate).format('YYYY-MM-DD')
            // console.log(this.form);
            // 路由跳转
            this.$router.push({
                path:'/air/flights',
                query:this.form
            })
            // 将输入框的值存入本地
            const airs = JSON.parse(localStorage.getItem('airs') || `[]`);
            airs.push(this.form);
            localStorage.setItem("airs", JSON.stringify(airs));
        }
    },
    mounted() {
       
    }
}
</script>

<style scoped lang="less">
.search-form{
    border:1px #ddd solid;
    border-top:none;
    width:360px;
    height:350px;
    box-sizing: border-box;
}

.search-tab{
  span{
    display: block;
    flex:1;
    text-align: center;
    height:48px;
    line-height: 42px;
    box-sizing: border-box;
    border-top:3px #eee solid;
    background:#eee;
  }

  .active{
    border-top-color: orange;
    background:#fff;
  }

  i{
    margin-right:5px;
    font-size: 18px;

    &:first-child{
      font-size:16px;
    }
  }
}

.search-form-content{
  padding:15px 50px 15px 15px;
  position: relative;

  .el-autocomplete{
    width: 100%;
  }
}

.reverse{
  position:absolute;
  top: 35px;
  right:15px;

  &:after,&:before{
      display: block;
      content: "";
      position: absolute;
      left:-35px;
      width:25px;
      height:1px;
      background:#ccc;
  }

  &:after{
      top:0;
    }

    &:before{
      top:60px;
    }

  span{
    display: block;
    position:absolute;
    top: 20px;
    right:0;
    font-size:12px;
    background: #999;
    color:#fff;
    width:20px;
    height:20px;
    line-height: 18px;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;

    &:after,&:before{
      display: block;
      content: "";
      position: absolute;
      left:10px;
      width:1px;
      height:20px;
      background:#ccc;
    }

    &:after{
      top:-20px;
    }

    &:before{
      top:20px;
    }
  }
}
</style>
