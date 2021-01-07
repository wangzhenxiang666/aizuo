export default {
    namespaced: true,
    state:{
        username: "admin",
        age: 22,
        email: "admin@1000phone.com",
    },
    mutations:{
        setUsername(state, arg) {
            state.username = arg;
        },
        setAge(state, arg) {
            state.age += arg;
        },
    },
    actions:{
        asyncSetAge(context, arg) {
            setTimeout(() => {
                context.commit("setAge", arg);
            }, 1000);
        },
    },
    getters:{
        isAdult(state) {
            return state.age >= 18 ? "成年" : "未成年";
        },
    }
}