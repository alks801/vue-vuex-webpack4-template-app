import { shallow, createLocalVue } from '@vue/test-utils'
import { expect } from 'chai'
import Vuex from 'vuex'
import Home from '../../src/pages/Home.vue'
import WeatherStore from '../../src/store/modules/weather'
//import Api from '../../api'
const localVue = createLocalVue()

localVue.use(Vuex)

describe('Home.vue', () => {
  let getters
  let store
  let cityInfo = [{city: "Moscow", temp: "27"}, {city: "Kaluga", temp: "19"}]

  beforeEach(() => {
    getters = {
        allWeather: () => cityInfo
    }
    store = new Vuex.Store({
      state: {},
      getters
    })
  })

  //Component data and markup
  it('correctly renders 2 divs in v-for', () => {
    const wrapper = shallow(Home, { store, localVue })
    expect(wrapper.findAll('div.weather')).to.have.lengthOf(cityInfo.length)
  })

  it('logo is correctly loaded', () => {
    const wrapper = shallow(Home, { store, localVue })
    expect(wrapper.vm.logo).not.to.be.empty
  })
})