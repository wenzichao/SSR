<template>
    <el-form 
        :model="form" 
        ref="form" 
        :rules="rules" 
        class="form">
            <el-form-item class="form-item" prop="username">
                <el-input 
                placeholder="用户名手机" v-model="form.username">
                </el-input>
            </el-form-item>

            <el-form-item class="form-item" prop="captcha">
                <el-input 
                placeholder="验证码" v-model="form.captcha">
                    <template slot="append">
                        <el-button @click="handleSendCaptcha">
                            发送验证码
                        </el-button>
                    </template>
                </el-input>
            </el-form-item>

            <el-form-item class="form-item" prop="nickname">
                <el-input 
                placeholder="昵称" v-model="form.nickname">
                </el-input>
            </el-form-item>

            <el-form-item class="form-item" prop="password">
                <el-input 
                placeholder="密码" 
                type="password"
                v-model="form.password"
                ></el-input>
            </el-form-item>

            <el-form-item class="form-item" prop="checkPassword">
                <el-input 
                placeholder="确认密码" 
                type="password"
                v-model="form.checkPassword">
                </el-input>
            </el-form-item>

            <el-button 
            class="submit" 
            type="primary" 
            @click="handleRegSubmit">
                注册
            </el-button>
        </el-form>
</template>

<script>
export default {
    data(){
        const validatePass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请再次输入密码'));
            } else if (value !== this.form.password) {
            callback(new Error('两次输入密码不一致!'));
            } else {
            callback();
            }
        }
        return {
            // 表单数据
            form: {
                username:'',
                captcha:'',
                nickname:'',
                password:'',
                checkPassword:''
            },
            // 表单规则
            rules: {
                username:[
                    {required:true,message:'请输入手机号',trigger:'blur'}
                ],
                captcha:[
                    {required:true,message:'请输入验证码',trigger:'blur'}
                ],
                nickname:[
                    {required:true,message:'请输入昵称',trigger:'blur'}
                ],
                password:[
                    {required:true,message:'请输入密码',trigger:'blur'}
                ],
                checkPassword:[
                    {validator:validatePass,trigger:'blur'}
                ]
            },
        }
    },
    methods: {
        // 发送验证码
        handleSendCaptcha(){
            if(this.form.username==''){
                this.$message.warning('手机号不能为空');
                return
            }
            this.$axios({
                url:'/captchas',
                method:'POST',
                data:{tel:this.form.username}
            }).then(res=>{
                this.$alert('你的验证码为'+res.data.code, '提示', {
                    confirmButtonText: '确定',
                    type: 'warning'
                })
            })
        },


        // 注册
        handleRegSubmit(){
        //    console.log(this.form)
            this.$refs['form'].validate((valid) => {
                if(valid){
                    const {checkPassword,...prop} = this.form
                    this.$axios({
                        url:'/accounts/register',
                        method:'POST',
                        data:prop
                    }).then(res=>{
                        // console.log(res.data);
                        const newData =  {
                            username:this.form.username,
                            password:this.form.password
                        }
                        this.$store.dispatch('user/login',newData).then(v=>{
                            this.$message({
                                message: '注册成功，正在登录...',
                                type: 'success',
                                duration:1000
                            })
                            setTimeout(() => {
                                this.$router.push('/')
                            }, 1000);
                        })
                    })
                }
            })
        }
    }
}
</script>

<style scoped lang="less">
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