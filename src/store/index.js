import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slide1: [
      {
        id: 1,
        img: '1.png'
      },
      {
        id: 2,
        img: '2.png'
      },
      {
        id: 3,
        img: '3.png'
      }
    ],
    slide2: [
      {
        id: 4,
        img: '4.png'
      },
      {
        id: 5,
        img: '5.png'
      },
      {
        id: 6,
        img: '6.png'
      }
    ],
    slide3: [
      {
        id: 7,
        img: '7.png'
      },
      {
        id: 8,
        img: '8.png'
      },
      {
        id: 9,
        img: '9.png'
      }
    ],
    slide4: [
      {
        id: 10,
        img: '10.png'
      },
      {
        id: 11,
        img: '11.png'
      },
      {
        id: 12,
        img: '12.png'
      }
    ]
  },
  getters: {
    SLIDE1(state) {
      return state.slide1
    },
    SLIDE2(state) {
      return state.slide2
    },
    SLIDE3(state) {
      return state.slide3
    },
    SLIDE4(state) {
      return state.slide4
    }
  },
  mutations: {
  },
  actions: {
  }
})
