<template>
    <div>
        <el-form :rules="rules" ref="form" class="form" :model="form">
            <el-form-item class="form-item" prop="username">
                <el-input v-model="form.username" placeholder="用户/手机号"></el-input>
            </el-form-item>
            <el-form-item class="form-item" prop="password">
                <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <p class="form-text">
                <nuxt-link to="#">忘记密码</nuxt-link>
            </p>
            <el-button type="primary" class="submit" @click="handleLogin">登录</el-button>
        </el-form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            form:{
                username:'',
                password:'',
            },
            rules:{
                username: [
                    { required: true, message: '请输入用户/手机号', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        handleLogin(){
            // console.log(this.form);
            this.$refs['form'].validate((valid) =>{
                if(valid){
                    // this.$axios({
                    // url:'/accounts/login',
                    // method:'POST',
                    // data:this.form
                    // }).then(res=>{
                    //     this.$store.commit('user/setUserInfo',res.data)
                    //     this.$message({
                    //         message: '登录成功，正在跳转...',
                    //         type: 'success',
                    //         duration:1000
                    //     })
                    //     setTimeout(() => {
                    //         this.$router.push('/')
                    //     }, 1000);
                    // })

                    this.$store.dispatch('user/login',this.form).then(v=>{
                        this.$message({
                            message: '登录成功，正在跳转...',
                            type: 'success',
                            duration:1000
                        })
                        setTimeout(() => {
                            this.$router.push('/')
                        }, 1000);
                    })
                }
            })
        }
    }
}
</script>

<style scoped lang='less'>
.form{
        padding:25px;
    }

    .form-item{
        margin-bottom:20px;
    }

    .form-text{
        font-size:12px;
        color:#409EFF;
        text-align: right;
        line-height: 1;
    }

    .submit{
        width:100%;
        margin-top:10px;
    }
</style>
