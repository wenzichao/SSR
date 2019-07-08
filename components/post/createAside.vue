<template>
    <div class="draft">
        <h5>草稿（{{drafts.length}}）</h5>
        <nuxt-link v-for="(item,index) in drafts" 
            :key="index"
            to="#"
            >
            <el-row type="flex" 
            justify="space-between" 
            align="middle"
            class="history-item"
            >
                <div class="air-info">
                    <div class="to-from">{{item.title}}</div>
                    <p>{{item.time}}</p>
                </div>
            </el-row>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    data(){
        return {
            drafts:[],
        }
    },
    mounted(){
        let arr = JSON.parse(localStorage.getItem('post')||`[]`)
        if(arr.length>3){
            this.drafts = arr.slice(3)
            localStorage.setItem('post',JSON.stringify(this.drafts))
        }else{
            this.drafts = arr
        }
    }
}
</script>

<style scoped lang="less">
.draft{
    border:1px #ccc solid;
    padding:10px;
    margin-top:10px;

    h5{
        font-size: 20px;
        font-weight: normal;
        padding-bottom: 10px;
        border-bottom:1px #eee solid;
    }

    .history-item{
        padding:10px 0;
        font-size: 14px;
        border-bottom: 1px #eee solid;

        &:last-child{
            border:none;
        }

        .to-from{
            margin-bottom: 5px;
        }

        p{
            font-size: 12px;
            color:#666;
        }

        span{
            color:#fff;
            display: block;
            padding:2px 10px;
            background: orange;
            border-radius: 4px;
            font-size:12px;
            cursor: pointer;
        }
    }
}
</style>
