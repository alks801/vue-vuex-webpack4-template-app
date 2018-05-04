import api from '../../api'

// initial state
const state = {
    all: []
}

//getters
const getters = {
    allWeather: state => state.all
}

//actions
const actions = {
    getAllWeather({ commit }) {
        console.log(1)
        api.getWeather().then((x) => commit('setWeather', x.data))
        console.log(2)
    },
    addWeather({ state, commit }, weather) {
        commit('addWeather', weather)
    }
}

//mutations
const mutations = {
    setWeather(state, weather) {
        state.all = weather
    },
    addWeather(state, weather) {
        state.all.push(weather)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}