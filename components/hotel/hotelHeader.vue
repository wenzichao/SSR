<template>
    <div>
        <div class="top">酒店　<i class="el-icon-arrow-right"></i>　{{city}}市酒店预订</div>
        <el-row type="flex" justify="centent" class="price-select">
            <!-- 城市输入框 -->
            <el-autocomplete
                class="inline-input city-content"
                v-model="city"
                :fetch-suggestions="querySearch"
                placeholder="请输入内容"
                @select="handleSelect"
            ></el-autocomplete>
            <!-- 时间选择框 -->
            <el-date-picker
                v-model="date"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                class="time-content">
            </el-date-picker>
            <!-- 人数选择框 -->
            <el-popover
                    placement="bottom"
                    trigger="click">
                    <div>
                        <el-row type="flex">
                            <div class="every-home">每间</div>
                            <el-select 
                                v-model="adult" 
                                placeholder="成人"
                                size="mini"
                                class="people-num">
                                    <el-option label="1" value="1"></el-option>
                                    <el-option label="2" value="2"></el-option>
                                    <el-option label="3" value="3"></el-option>
                                    <el-option label="4" value="4"></el-option>
                                    <el-option label="5" value="5"></el-option>
                                    <el-option label="6" value="6"></el-option>
                                    <el-option label="7" value="7"></el-option>
                                </el-select>
                                <el-select 
                                v-model="children" 
                                placeholder="儿童"
                                size="mini">
                                    <el-option label="0" value="0"></el-option>
                                    <el-option label="1" value="1"></el-option>
                                    <el-option label="2" value="2"></el-option>
                                    <el-option label="3" value="3"></el-option>
                                    <el-option label="4" value="4"></el-option>
                            </el-select>
                        </el-row>
                        <el-divider></el-divider>
                        <div>
                            <el-button type="primary" class="btn" @click="handlePeopleNum">确定</el-button>
                        </div>
                    </div>
                    <el-input
                            placeholder="请选择人数"
                            suffix-icon="el-icon-user"
                            v-model="allPeople"
                            slot="reference">
                        </el-input>
            </el-popover>
            <!-- 查看价格按钮 -->
            <el-button type="primary" class="check-price" @click="checkPrice">查看价格</el-button>
      </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            city:'',
            allCity:[],
            date:'',
            allPeople:'',
            adult:'',
            children:'',
        }
    },
    mounted(){
        // 所有城市的获取
        this.$axios({
            url:'/cities?name=',
            method:'GET',
        }).then(res=>{
            const {data} = res.data;
            this.allCity = data;
        })
    },
    methods:{
        // 组件传值修改渲染城市
        handleSelect(val){
            // console.log(val);
            this.$emit('changeCity',val)
        },
        // 对获取数据进行渲染
        querySearch(queryString, cb){
            const newData = this.allCity.map(v=>{
                return {
                    ...v,
                    value:v.name
                }
            })
            cb(newData)
        },
        handlePeopleNum(){
            this.allPeople = `${this.adult}成人${this.children}儿童`
        },
        checkPrice(){

        }
    }
}
</script>

<style scoped lang="less">
    .top{
        margin-top: 20px;
        font-size: 14px;
        color: rgb(102, 98, 98);
    }
    .price-select{
        margin-top: 20px;
        .city-content{
            width: 200px;
            margin-right: 20px;
        }
        .time-content{
            margin-right: 10px;
        }
        .check-price{
            margin-left: 20px;
        }
    }
    .btn{
            float: right;
    }
    .every-home{
                margin-right: 50px;
                line-height: 30px;
    }
    /deep/ .el-select .el-input--suffix .el-input__inner{
        width: 100px;
        margin-left: 10px;
    }
</style>