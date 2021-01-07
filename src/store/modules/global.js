export default {
    namespaced: true,
    state: {
        // 控制底部的导航是否显示
        isShowFooter: true,
    },
    mutations: {
        // 设置是否显示底部导航的操作
        setFooter(state, arg) {
            state.isShowFooter = arg;
        },
    },
    actions: {},
    getters: {},
};
