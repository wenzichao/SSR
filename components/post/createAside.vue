<template>
    <div class="draft">
        <h5>草稿（0）</h5>
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
                    <p>{{item.Date}}</p>
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
        this.drafts = JSON.parse(localStorage.getItem('post')||`[]`)
        console.log(this.drafts,123123)
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
