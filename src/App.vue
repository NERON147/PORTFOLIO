<template>
  <div id="app">
    <img src="./assets/img/sound.gif" alt="" class="soundbutton" :class="{'paused' : soundFalse}" @click="soundStop">
      <audio src="./assets/audio/relax.mp3" class="audio" loop ></audio>
    <transition name="fade" mode="out-in" >
       <div class="preloader" v-if="preload">
        <img src="./assets/large.png" alt="">
      </div>
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .8s;
}

.fade-enter-active {
  transition-delay: .5s;
}

.fade-enter, .fade-leave-active {
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
 data(){
      return{
        preload:  true,
        soundFalse: true
      }
    },
    methods: {
      soundStop(){
      this.soundFalse = !this.soundFalse
      let audio = document.querySelector('.audio')
      audio.paused ? audio.play() : audio.pause()
      }
    },
    created(){
      setTimeout(()=>{
        this.preload = false
      }, 3000)
    },
    mounted() {
      let soundButton = document.querySelector('.soundbutton'),
		audio = document.querySelector('.audio')
      window.onfocus = function() {
	soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
	audio.pause()
}
    }
}
</script>
