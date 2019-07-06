<template>
    <div class="filter">
        <el-row type="flex">
            <div class="slide">
                <el-row type="flex" justify="space-between">
                    <div>价格</div>
                    <div>0-4000</div>
                </el-row>
                <el-slider v-model="slide" max="4000"></el-slider>
            </div>
            <div class="drop-down">
                <div>住宿等级</div>
                <el-select v-model="value1" multiple placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="drop-down">
                <div>住宿类型</div>
                <el-select v-model="value1" multiple placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="drop-down">
                <div>酒店设施</div>
                <el-select v-model="value1" multiple placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="drop-down">
                <div>酒店品牌</div>
                <el-select v-model="value1" multiple placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            slide:4000,
            options: [{
            value: '选项1',
            label: '黄金糕'
            }, {
            value: '选项2',
            label: '双皮奶'
            }],
            value1: [],
            }
    }
}
</script>

<style scoped lang='less'> 
.filter{
    height: 80px;
    width: 100%;
    border: 1px solid #7eb9f3;
    border-radius: 10px;
    font-size: 14px;
    color: #666;
    box-sizing: border-box;
    .slide{
        margin-top: 7px;
        padding:5px 20px;
        width: 200px;
        border-right: 1px solid #7eb9f3;
    }
    .drop-down{
        margin-top: 7px;
        padding:5px 20px;
        width: 170px;
        border-right: 1px solid #7eb9f3;
        &:last-child{
            border-right: none;
        }
        .drop-down-link{
            display: inline-block;
            width: 120px;
            margin-top: 10px;
        }
    }
}
/deep/ .el-input--suffix .el-input__inner{
    border: none;
}

</style>
