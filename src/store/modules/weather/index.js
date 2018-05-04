import api from '../../../api'
import def from './definitions'

// initial state
const state = {
    all: []
}

//getters
const getters = {
    [def.getters.ALL_WEATHER]: state => state.all
}

//actions
const actions = {
    [def.actions.GET_ALL_WEATHER]({ commit }) {
        api.getWeather(weather => {
            commit(def.mutations.SET_WEATHER, weather)
        })
    },
    [def.actions.ADD_WEATHER]({ state, commit }, weather) {
        api.addNewCity(weather => {
            commit(def.mutations.ADD_WEATHER, weather)
        })
    }
}

//mutations
const mutations = {
    [def.mutations.SET_WEATHER](state, weather) {
        state.all = weather
    },
    [def.mutations.ADD_WEATHER](state, weather) {
        state.all.push(weather)
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}