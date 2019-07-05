export const state = ()=>{
    return {
        userInfo:{
            token:'',
            user:{}
        }
    }
}

export const mutations = {
    setUserInfo(state,data){
        // console.log(data);
        state.userInfo = data;
    },
}

export const actions = {
    login({commit},data){
        return this.$axios({
            url:'/accounts/login',
            method:'POST',
            data
            }).then(res=>{
                commit('setUserInfo',res.data);
                Promise.resolve() 
            })
    }
}