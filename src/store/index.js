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
    ],
    slideWork: [
      {
        id: 1,
        img: '1.png',
        title: 'Удобряй!',
        tec: 'Vanila JS, Swiper JS, Bootstrap 5, Cleave.js, ScrollReveal, Axios',
        descr: 'Разработан адаптивный сайт-магазин доставки удобрений с пушем формы заказа в Телеграм канал через Телеграм бот',
        git: 'https://github.com/NERON147/udobryay',
        page: 'https://удобряй-доставка.рф'
      },
      {
        id: 2,
        img: '2.png',
        title: 'Автосфера',
        tec: 'Vue JS, Vue Router, Bootstrap 5',
        descr: 'Разработан адаптивный сайт компании Автосфера (Проект закончен не до конца)',
        git: 'https://github.com/NERON147/autosphere',
        page: 'https://neron147.github.io/autotest/'
      },
      {
        id: 3,
        img: '3.png',
        title: 'Tech Shop',
        tec: 'Vue JS, Vue Router, Vuex, Vuetify, Swiper JS, Firebase9, Axios',
        descr: 'Магазин полностью написан на вьютифае. Реализована регистрация, аунтентификация пользователя. Отслеживание по айди пользователя, кто создал товар т.е мини админ панель к которой можно дать доступ только определенному пользователю. Реализована покупка и отправка формы заказа в телеграмм канал по их апи. Работа с сервером фаербейз, получение, отправка, удаление данных, редактирование описание товара методом патч аксиоса. Также создание нового товара. Состояние товаров в корзине хранится в LocalStorage, поэтому при перезагрузки страницы не потеряется. Навигация по странице с помощью вью роутера. Вся логика хранится во vuex. Также реализована мини crm система с отметкой выполненных заказов. Можно сказать полностью автономный магазин.',
        git: 'https://github.com/NERON147/ITshopWithReg',
        page: 'https://neron147.github.io/ITshop/'
      },
      {
        id: 4,
        img: '4.png',
        title: 'Notes',
        tec: 'Vue JS, Vue Router, Vuex',
        descr: 'Разработано приложение заметок с хранением состояния в LocalStorage, возможность просмотра каждой заметки и ее удаление. Присутвует валидация формы добавления заметки.',
        git: 'https://github.com/NERON147/noteApp',
        page: 'https://neron147.github.io/noteAppPage/'
      },
      {
        id: 5,
        img: '5.png',
        title: 'Weather',
        tec: 'Vue JS 3, Axios, Pinia, Swiper JS',
        descr: 'Учебный проект приложение погоды',
        git: 'https://github.com/NERON147/weather',
        page: 'https://neron147.github.io/weather/'
      },
      {
        id: 6,
        img: '6.png',
        title: 'Zabotay',
        tec: 'Vue 3 JS, bulma, gitart-vue-dialog, swiper',
        descr: 'Учебный проект для компании Zabotay',
        git: 'https://github.com/NERON147/zabotay',
        page: 'https://neron147.github.io/zabotay/'
      },
      {
        id: 7,
        img: '7.png',
        title: 'Note App',
        tec: 'Vue JS, Vuex',
        descr: 'Приложение заметок с красивой анимацией) присутвует возможность удаления заметки и валидация формы',
        git: '???',
        page: 'https://neron147.github.io/note/'
      },
      {
        id: 8,
        img: '8.png',
        title: 'Go Trip!',
        tec: 'Vanila JS, Bootstrap 5, ScrollReveal, Swiper JS',
        descr: 'Адаптивный лендинг компании "Go Trip"',
        git: 'https://github.com/NERON147/gotrip',
        page: 'https://neron147.github.io/gotrip/'
      },
      {
        id: 9,
        img: '9.png',
        title: 'Дом Сайтов',
        tec: 'Vanila JS, Bootstrap 5',
        descr: 'Адаптивный лендинг компании "Дом сайтов"',
        git: 'https://github.com/NERON147/domsites',
        page: 'https://neron147.github.io/domsites/'
      },
      {
        id: 10,
        img: '10.png',
        title: 'Элипслед',
        tec: 'Bootstrap 5',
        descr: 'Адаптивный лендинг компании "Элипслед"',
        git: 'https://github.com/NERON147/tz',
        page: 'https://neron147.github.io/tz/'
      },
      {
        id: 11,
        img: '11.png',
        title: 'Онлайн калькулятор расчета ипотеки',
        tec: 'Vanila JS, Cleave,js',
        descr: 'Онлайн калькулятор рассчета ипотеки',
        git: 'https://github.com/NERON147/calcMortgage',
        page: 'https://neron147.github.io/calcMortgage/'
      },
      {
        id: 12,
        img: '12.png',
        title: 'Denis Novik',
        tec: 'HTML5 CSS3',
        descr: 'Мой первенец) Лендинг сайт визитка',
        git: 'https://github.com/NERON147/First-project',
        page: 'https://neron147.github.io/First-project/'
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
    },
    SLIDE_WORK: (state) => (id) => {
      return state.slideWork.find(product => product.id == id)
    }
  },
  mutations: {
  },
  actions: {
  }
})
