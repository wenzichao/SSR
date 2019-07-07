<template>
    <div class="filter">
        <el-row type="flex">
            <div class="slide">
                <el-row type="flex" justify="space-between">
                    <div>价格</div>
                    <div>0-2000</div>
                </el-row>
                <el-slider :format-tooltip="formatTooltip" v-model=slide @change="handelChangeSkide"></el-slider>
            </div>
            <div class="drop-down">
                <div>住宿等级</div>
                <el-dropdown>
                    <el-row type="flex" class="drop-down-content" justify="space-between">
                        <div class="icon-content">{{form.level}}</div>
                        <div class="icon-check">
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </div>
                    </el-row>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item 
                        v-for="(item,index) in levels" 
                        :key="index"
                        :value='item'>
                        <span class="dropdown-menu-text"
                        @click="handleGetlevel(item.id,item.name)">
                            {{item.name}}
                        </span>
                    </el-dropdown-item>

                </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="drop-down">
                <div>住宿类型</div>
                <el-dropdown>
                    <el-row type="flex" class="drop-down-content" justify="space-between">
                        <div class="icon-content">{{form.type}}</div>
                        <div class="icon-check">
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </div>
                    </el-row>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item 
                        v-for="(item,index) in types" 
                        :key="index"
                        :value='item'>
                        <span class="dropdown-menu-text"
                        @click="handleGettypes(item.id,item.name)">
                            {{item.name}}
                        </span>
                    </el-dropdown-item>

                </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="drop-down">
                <div>酒店设施</div>
                <el-dropdown>
                    <el-row type="flex" class="drop-down-content" justify="space-between">
                        <div class="icon-content">{{form.asset}}</div>
                        <div class="icon-check">
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </div>
                    </el-row>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item 
                        v-for="(item,index) in assets" 
                        :key="index"
                        :value="item">
                        <span class="dropdown-menu-text"
                        @click="handleGetAsset(item.id,item.name)">
                            {{item.name}}
                        </span>
                    </el-dropdown-item>

                </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="drop-down">
                <div>酒店品牌</div>
                <el-dropdown>
                    <el-row type="flex" class="drop-down-content" justify="space-between">
                        <div class="icon-content">{{form.brand}}</div>
                        <div class="icon-check">
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </div>
                    </el-row>
                <el-dropdown-menu slot="dropdown" style="overflow:auto;max-height:200px;">
                    <el-dropdown-item 
                        v-for="(item,index) in brands" 
                        :key="index"
                        :value="item">
                        <span class="dropdown-menu-text"
                        @click="handleGetBrand(item.id,item.name)">
                            {{item.name}}
                        </span>
                    </el-dropdown-item>

                </el-dropdown-menu>
                </el-dropdown>
            </div>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            slide:100,
            levels:[],
            types:[],
            assets:[],
            brands:[],
            form:{
                level:'不限',
                type:'不限',
                asset:'不限',
                brand:'不限',
            },
            empty:{
                name:'不限',
                id:'',
            }
        }
    },
    mounted(){
        this.$axios({
            url:'/hotels/options',
            method:'GET',
        }).then(res=>{
            let {data} = res.data;
            this.levels = data.levels;
            this.levels.push(this.empty);

            this.types = data.types;
            this.types.push(this.empty);

            this.assets = data.assets;
            this.assets.push(this.empty);

            this.brands = data.brands;
            this.brands.push(this.empty)
        })
    },
    methods:{
        restore(){
            let obj = {};
            obj.price_lt = 5000;
            this.$emit('getFilter',obj)
        },
        formatTooltip(val){
            val *= 20;
            return val
        },
        // 选择酒店品牌
        handleGetBrand(id,name){
            this.form.brand = name;
            if(name=='不限'){
                this.restore();
                return;
            }
            let obj = {};
            obj.hotelbrand = id;
            this.$emit('getFilter',obj)
        },
        // 选择酒店设施
        handleGetAsset(id,name){
            this.form.asset = name;
            if(name=='不限'){
                this.restore();
                return;
            }
            let obj = {};
            obj.hotelasset = id;
            this.$emit('getFilter',obj)
        },
        // 选择酒店类型
        handleGettypes(id,name){
            this.form.type = name;
            if(name=='不限'){
                this.restore();
                return;
            }
            let obj = {};
            obj.hoteltype = id;
            this.$emit('getFilter',obj)
        },
        // 选择酒店星级
        handleGetlevel(id,name){
            this.form.level = name;
            if(name=='不限'){
                this.restore();
                return;
            }
            let obj = {};
            obj.hotellevel = id;
            this.$emit('getFilter',obj)
        },
        // 改变价格
        handelChangeSkide(val){
            const num = val*20;
            let obj = {};
            obj.price_lt = num;
            this.$emit('getFilter',obj)
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
        .drop-down-content{
            padding-top: 10px;
            .icon-content{
                width: 130px; 
            }
        }
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
/deep/ .el-dropdown-menu__item .dropdown-menu-text{
        display: inline-block;
        min-width: 100px;
        margin-left: 10px;
    }
</style>
