<template>
    <div class="header">
        
        <!-- 中间的内容 -->
        <el-row type="flex" justify="space-between" class="main">

            <!-- logo -->
            <div class="logo">
                <nuxt-link to="/">
                    <img src="/images/logo.jpg" alt="">
                </nuxt-link>
            </div>

            <!-- 菜单 -->
            <el-row type="flex" class="navs">
                <nuxt-link to="/">首页</nuxt-link>
                <nuxt-link to="/post">旅游攻略</nuxt-link>
                <nuxt-link to="/hotel">酒店</nuxt-link>
                <nuxt-link to="/air">国内机票</nuxt-link>
            </el-row>

            <!-- 登录状态 -->
            <el-row>

                <!-- 下拉菜单 -->
                <el-dropdown v-if="$store.state.user.userInfo.token">
                    <span class="el-dropdown-link">
                        <a href="javascript:;">
                            <img :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar" alt="">
                            {{$store.state.user.userInfo.user.nickname}}
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </a>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>
                            <span @click="handleLoginOut">退出</span>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

                <div v-else class="login">
                    <nuxt-link to="/user/login">登录 / 注册</nuxt-link>
                </div>
            </el-row>
            

        </el-row>

    </div>
</template>

<script>

export default {
    watch:{
        $router:()=>{
            console.log($store.state.user.userInfo);
        }
    },
    methods:{
        handleLoginOut(){
            this.$store.commit('user/setUserInfo',{
            token:'',
            user:{}
        });
            this.$router.push('/user/login')
        }
    }
}
</script>

<style scoped lang='less'>
.header{
        border-bottom: 1px solid #ddd;
        box-shadow: 0 3px 0 #f5f5f5;
    .main{
        width: 1000px;
        margin: 0 auto;
        height: 60px;
        .logo{
            height: 100%;
            img{
                width: 156px;
                height: 42px;
                margin-top: 9px;
            }
        }
        .navs{
            margin:0 20px;
            height: 100%;
            text-align: center;
            line-height: 60px;
            flex: 1;
            box-sizing: border-box;
            a{
                padding: 0 20px;
                font-size: 16px;
                &:hover{
                    color: #409eff;
                    border-bottom: 5px solid #409eff;
                }
            }
            .nuxt-link-exact-active{
                color: #fff;
                background-color: #409eff;
                &:hover{
                    color: #fff;
                }
            }
        }
        .el-dropdown-link{ 
            a{
                margin-top: 10px;
                img{
                    border-radius: 50%;
                    border: 2px solid #fff;
                    width: 36px;
                    height: 36px;
                    vertical-align: middle;
                    }
                &:hover{
                        img{border:2px solid #409eff;}
                    }
            }
        }
        .login{
            font-size: 14px;
            line-height: 60px;
            &:hover{
                color: #409eff;
                text-decoration: underline;
            }
        }
    }
}
    
</style>
