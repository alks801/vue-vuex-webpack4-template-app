import api from '../../../api/weather'
import definitions from './definitions'

// initial state
const state = {
    all: []
}

//getters
const getters = {
    [definitions.getters.ALL_WEATHER]: state => state.all
}

//actions
const actions = {
    [definitions.actions.GET_ALL_WEATHER]({ commit }) {
        api.getWeather(weather => {
            commit(definitions.mutations.SET_WEATHER, weather)
        })
    },
    [definitions.actions.ADD_WEATHER]({ state, commit }, weather) {
        api.addNewWeather(weather,
            function cb() { commit(definitions.mutations.ADD_WEATHER, weather) },
            function errCb() { console.log('error') })
    }
}

//mutations
const mutations = {
    [definitions.mutations.SET_WEATHER](state, weather) {
        state.all = weather
    },
    [definitions.mutations.ADD_WEATHER](state, weather) {
        state.all.push(weather)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}