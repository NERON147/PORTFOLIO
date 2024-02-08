<template>
  <div class="wrapper">
    <div class="content">
      <Hello />
      <Magic />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Hello.vue'
import Magic from '@/components/Magic.vue'
import gsap from '@/libs/gsap/gsap.min.js'
import ScrollSmoother from '@/libs/gsap/ScrollSmoother.min.js'
import ScrollTrigger from '@/libs/gsap/ScrollTrigger.min.js'
import { isMobile } from 'mobile-device-detect'



export default {
  components: {
    Hello,
    Magic
  },

  data() {
    return {
      images: [
        { src: require('@/assets/img/1.png'), selector: '.layers-middle' },
        { src: require('@/assets/img/2.png'), selector: '.layers-front' },
        { src: require('@/assets/img/main.png'), selector: '.layer' },
        { src: require('@/assets/img/2fon.png'), selector: '.main-article' }
      ],
      flag: false
    }
  },

  methods: {
    handleScroll() {
      if ((window.innerHeight + window.pageYOffset) >= (document.body.offsetHeight - 2)) {
        document.body.style.cssText += `overflow: hidden;`;
        let el = document.getElementsByClassName("main-header")[0];
        setTimeout(() => (el.classList.remove("main-header"), document.getElementById('main').style.cssText += `transform: scale(2.4); transition: all ease 3s;`), 2000)
        setTimeout(() => (this.$router.push('/about')), 3500)
      }

      document.body.style.cssText += `--scrollTop: ${window.scrollY}px`;

    },
  },
  mounted() {
    let self = this;

    this.images.forEach(function (image) {
      const img = new Image();
      img.src = image.src;
      img.onload = function () {
        document.querySelector(image.selector).style.backgroundImage = 'url(' + img.src + ')';
        setTimeout(() => {
          self.$store.commit('changeLoader', false)
        }, 2000);
      };
    });
    if (isMobile) {

    } else {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
      this.scrollSmoother = ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content'
      })
    }

    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    if (isMobile) {

    } else {
      this.scrollSmoother.kill()
    }
    window.removeEventListener('scroll', this.handleScroll);

    document.body.removeAttribute('style')
  },
}
</script>

<style scoped></style>