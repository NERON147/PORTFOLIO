<template>
<div>
  <div class="main-wrapper">
    <div class="swiper slider slider1" >
        <div class="swiper-wrapper slider-wrapper">
            <div class="swiper-slide slider-item" v-for="slide in slide1" :key="slide.id">
                <router-link :to="/work/ + slide.id">
                <div class="slider-img" :style="{ 'background-image': 'url(' + require('../assets/img/imgSlides/' + slide.img) + ')' } "></div>
            </router-link>
                </div>
            </div>
        </div>
        <div class="swiper slider slider2">
        <div class="swiper-wrapper slider-wrapper">
            <div class="swiper-slide slider-item" v-for="slide2 in slide2" :key="slide2.id">
                <router-link :to="/work/ + slide2.id">
                <div class="slider-img" :style="{ 'background-image': 'url(' + require('../assets/img/imgSlides/' + slide2.img) + ')' } "></div>
            </router-link>
                </div>
            </div>
        </div>
        <div class="swiper slider slider3">
        <div class="swiper-wrapper slider-wrapper">
            <div class="swiper-slide slider-item" v-for="slide3 in slide3" :key="slide3.id">
                <router-link :to="/work/ + slide3.id">
                <div class="slider-img" :style="{ 'background-image': 'url(' + require('../assets/img/imgSlides/' + slide3.img) + ')' } "></div>
            </router-link>
                </div>
            </div>
        </div>
        <div class="swiper slider slider4">
        <div class="swiper-wrapper slider-wrapper">
            <div class="swiper-slide slider-item" v-for="slide4 in slide4" :key="slide4.id">
                <router-link :to="/work/ + slide4.id">
                <div class="slider-img" :style="{ 'background-image': 'url(' + require('../assets/img/imgSlides/' + slide4.img) + ')' } "></div>
            </router-link>
                </div>
            </div>
        </div>
        <div class="icons">
    <router-link to="/links">
      <div class="layer-l wave-glow">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span class="fab wave-glow">Next?</span>
      </div>
    </router-link>
  </div>
    </div>
    <div class="slide-mobile">
    <img src="../assets/img/rotate.png" alt="" class="rotate">
    </div>
    </div>
</template>

<script>
// import bindSwipers from '@/libs/swiper/bindSwipers.js'
import Swiper from '@/libs/swiper/swiper-bundle.min.js'
export default {
    mounted() {
        document.body.style.cssText += `overflow: hidden;`;

        document.querySelectorAll('.slider').forEach((n, i) => {
	window[`slider${i+1}`] = new Swiper(n, {
		freeMode: true,
		centeredSlides: true,
		direction: 'vertical',
		mousewheel: true,
		slidesPerView: 1.75,
		slidesOffsetBefore: -125,
             
	})
});
function bindSwipers(...swiperList) {
	for (const swiper of swiperList) {
		swiper.setTranslate = function(translate, byController, doNotPropagate) {
			if (doNotPropagate) {
				Swiper.prototype.setTranslate.apply(this, arguments)
			} else {
				for (const swiper of swiperList) {
					swiper.setTranslate(translate, byController, true)
				}
			}
		}
		swiper.setTransition = function(duration, byController, doNotPropagate) {
			if (doNotPropagate) {
				Swiper.prototype.setTransition.apply(this, arguments)
			} else {
				for (const swiper of swiperList) {
					swiper.setTransition(duration, byController, true)
				}
			}
		}
	}
}
bindSwipers(slider1, slider2, slider3, slider4)
    },

    computed: {
        slide1(){
            return this.$store.getters.SLIDE1
        },
        slide2(){
            return this.$store.getters.SLIDE2
        },
        slide3(){
            return this.$store.getters.SLIDE3
        },
        slide4(){
            return this.$store.getters.SLIDE4
        },
    },
    destroyed(){
        document.body.style.cssText += `height: auto;`;
    }

}
</script>

<style>

</style>