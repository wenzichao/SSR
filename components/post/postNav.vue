<template>
    <div class="baseBox">
        <div class="nav">
            <ul>
                <li v-for="(item, index) in cities" 
                :key="index"
                @mouseenter="mouseOver(index)" 
                @mouseleave="mouseOut"
                class="selected">
                    {{item.type}}
                </li>
            </ul>
        </div>

        <div class="info" v-if="show" @mouseenter="mouseIn" @mouseleave="mouseOut" >
            <div id="cityInfo">
                <ul>
                    <li v-for="(item, index) in cities[num].children" :key="index">
                        <span>{{index+1}}</span> 
                        <router-link to="#" class="cityTitle">{{item.city}}</router-link>
                        <router-link to="#" class="cityDesc">{{item.desc}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
   data () {
       return {
           num:0,
           show:false,
           cities:[],
           selected:"grayBorderRight"
       }
   },
   mounted(){
        this.$axios({
            url:`posts/cities`,
            method:'GET',
        }).then(res=>{
            console.log(res);
            this.cities=res.data.data
        })
   },
   methods:{
       mouseOver(index){
           this.show = true;
           this.num = +index;
           this.selected = "whiteBorderRight"
       },
       mouseOut(){
           this.show=false;
           this.selected = "grayBorderRight"
       },
       mouseIn(){
           this.show = true;
       }
   }
  };
</script>

<style scoped lang="less">
    .baseBox{
        // position: relative;
        .nav{
            border: 1px #ccc solid;
            width:260px ;
            display: flex;
            box-sizing: border-box;
            ul{
                width: 100%;
                li{
                    height: 41px;
                    line-height: 41px;
                    padding-left: 20px;
                    font-size: 14px;
                    border-bottom: 1px #ccc solid;
                    position: relative;
                }

                li:after{
                    display: block;
                    content: "";
                    width: 10px;
                    height: 10px;
                    border-right: 1px solid #999;
                    border-top: 1px solid #999;
                    -webkit-transform: rotate(45deg);
                    transform: rotate(45deg);
                    position: absolute;
                    right: 20px;
                    top: 15px;
                }
            }
        }
        .info{
            position: absolute;
            left: 260px;
            top: 20px;
            width: 400px;
            
            background-color: #fff;
            border: 1px #ccc solid;
            li{
                display: flex;
                height: 41px;
                line-height: 41px;
                span{
                    font-size: 20px;
                    font-style: italic;
                    color:orange;
                    padding: 0 15px;           
                }
                .cityTitle{
                    font-size: 14px;
                    color:orange;
                    padding: 0 15px;
                    :hover{
                        text-decoration: underline;
                    }
                }
                .cityDesc{
                    font-size: 14px;
                    padding: 0 15px;
                    color:#666;
                    :hover{
                        text-decoration: underline;
                    }
                }
            }

        }
    }

    .whiteBorderRight{
        border-right:1px #fff solid;
        z-index: 100;
    }

    .grayBorderRight{
        border-right:1px #ccc solid;
        z-index: 100;
    }
</style>