import WeatherStore from '../../src/store/modules/weather'
import { expect } from 'chai'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { cloneDeep } from 'lodash'
import flushPromises from 'flush-promises'


describe('Weather.js', () => {
    //getters
    it('allWeather getter returns right property', () => {
        const state = {
            all: []
        }
        expect(WeatherStore.getters.allWeather(state)).to.be.empty
    })

    //mutations
    it('setWeather mutation work', () => {
        const weather = [{city: 'Minsk', temp: "11"}]
        const state = {
            all: []
        }
        WeatherStore.mutations.setWeather(state, weather)
        expect(state.all).to.have.lengthOf(1)
        expect(state.all[0]).to.have.property('city', 'Minsk')
    })

    it('addWeather mutation work', () => {
        const weather = {city: 'Minsk', temp: "11"}
        const state = {
            all: [{city: 'Los Angeles', temp: "29"}]
        }
        WeatherStore.mutations.addWeather(state, weather)
        expect(state.all).to.have.lengthOf(2)
    })
    
    //actions
    /* it('getAllWeather action work', async () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const store = new Vuex.Store(cloneDeep(WeatherStore))

        expect(store.getters.allWeather).to.be.empty
        store.dispatch('getAllWeather')
        await flushPromises()
        expect(store.getters.allWeather).not.to.be.empty
    }) */

    it('addWeather action work', () => {
        const weather = {city: 'Minsk', temp: "11"}
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const store = new Vuex.Store(cloneDeep(WeatherStore))

        expect(store.getters.allWeather).to.be.empty
        store.dispatch("addWeather", weather)
        expect(store.getters.allWeather).not.to.be.empty
    })
})