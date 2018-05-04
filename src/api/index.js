const _weather = [
    {city: "London", temp: "+24"},
    {city: "Paris", temp: "+20"},
]

export default {
    getWeather: () => new Promise(resolve => {
        setTimeout(() => {
             resolve({data: _weather})
        }, 100);
    }),

    addNewCity(data, cb, errorCb) {
        setTimeout(() => {
            Math.random() > 0.5 
            ? cb()
            : errorCb()
        }, 100);
    }
}