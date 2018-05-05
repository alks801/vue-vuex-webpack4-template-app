const _weather = [
    { city: "London", temp: "+24" },
    { city: "Paris", temp: "+20" },
]

export default {
    getWeather(cb) {
        setTimeout(() => {
            cb(_weather)
        }, 100);
    },

    addNewWeather(data, cb, errorCb) {
        setTimeout(() => {
            Math.random() > 0.5
                ? cb()
                : errorCb()
        }, 100);
    }
}