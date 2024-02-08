<template>
  <div id="app">
    <img
      src="./assets/img/sound.gif"
      alt=""
      class="soundbutton"
      :class="{ 'paused': soundFalse }"
      @click="soundStop"
    >
    <audio
      src="./assets/audio/relax.mp3"
      class="audio"
      loop
    ></audio>
    <transition
      name="fade"
      mode="out-in"
    >
      <div
        class="preloader"
        v-show="loader"
      >
        <img
          src="@/assets/large.png"
          alt=""
        >
        <transition
          name="fade"
          mode="out-in"
        >
          <div
            class="network-text"
            v-if="timer"
          >
            I noticed that the page loading might take some time due to a slow internet connection. Please wait a moment
            for
            all the website materials to fully load. I appreciate your patience and strive to provide you with a pleasant
            browsing experience {{ ':)' }}
          </div>
        </transition>
        <transition
          name="fade"
          mode="out-in"
        >
          <div
            class="network-text2"
            v-if="timer2"
          >
            A little more...
          </div>
        </transition>
        <transition
          name="fade"
          mode="out-in"
        >
          <div
            class="network-text3"
            v-if="timer3"
          >
            A little little more...
          </div>
        </transition>
      </div>
    </transition>
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: .8s;
}

.fade-enter-active {
  transition-delay: .5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}


nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  data() {
    return {
      preload: true,
      soundFalse: true,
      timer: false,
      timer2: false,
      timer3: false,

    }
  },
  computed: {
    loader() {
      return this.$store.getters.LOADER
    }
  },
  methods: {
    soundStop() {
      this.soundFalse = !this.soundFalse
      let audio = document.querySelector('.audio')
      audio.paused ? audio.play() : audio.pause()
    },
  },

  created() {

  },

  mounted() {
    setTimeout(() => { this.timer = true }, 5000)
    setTimeout(() => { this.timer2 = true }, 10000)
    setTimeout(() => { this.timer3 = true }, 20000)
    let soundButton = document.querySelector('.soundbutton'),
      audio = document.querySelector('.audio')
    window.onfocus = function () {
      soundButton.classList.contains('paused') ? audio.pause() : audio.play()
    }
    window.onblur = function () {
      audio.pause()
    }
  }
}
</script>
