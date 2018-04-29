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
        api.getWeather(weather => {
            commit('setWeather', weather)
        })
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

export default{
    state,
    getters,
    actions,
    mutations
}