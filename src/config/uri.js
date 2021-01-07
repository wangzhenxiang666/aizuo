let prefix='/api'
export default {
    // 获取城市的信息
    getCities: prefix + "/getCitiesInfo",
    // 获取正在热映列表
    getNowPlaying: prefix + "/getNowPlayingFilmList",
    // 获取即将上映列表
    getComingSoon: prefix + "/getComingSoonFilmList",
    getDetail: prefix + "/getFilmInfo",
    // ....
};