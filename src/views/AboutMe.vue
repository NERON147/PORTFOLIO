<template>
    <div class="container">
      <section class="gallery">
        <div class="frame frame-bg">
         <div id="element" class="about-text"></div>
            </div>
            <div class="frame">
            
          </div>
          <div class="frame frame-bg">
            
          </div>
          <div class="frame">
            
          </div>

          <div class="frame">
            <div class="frame-first-content frame-media2 frame-media1-right">

             <span class="frame-text">IT is me :)</span>
            </div>
          </div>
          <div class="frame">
            <div class="frame-first-content">
            <div class="frame-media1 frame-media1-left"></div>
           
            </div>
          </div>
          <div class="frame">
            
          </div>
          <div class="frame">
            <div class="frame-first-content frame-media2 frame-media1-left">

             <span class="frame-text text-mob">IT is coding :)</span>
            </div>
          </div>
          
           <div class="frame frame-bg-opas">
            <div class="frame-first-content">
            <video class="frame-media2 frame-media1-right" src="../assets/img/About/prog2.mp4" autoplay loop muted></video>
            </div>
          </div>
           <div class="frame frame-bg-opas">
            <div class="frame-content">
            <span class="frame-text-normal">I love that 💔</span>
            </div>
          </div>
          <div class="frame frame-bg-opas">
            <div class="frame-content frame-text-normal">
            Some text about me 📜
            </div>
          </div>
          <div class="frame frame-bg-opas">
            <div class="frame-content frame-text-normal">
             I am engaged in layout <br>and frontend development. <br> I have an infinitely <br>strong desire to develop <br>in this area. 💪
            </div>
          </div>
          <div class="frame frame-bg-opas">
            <div class="frame-content">
             <span class="frame-media2 frame-text-normal">And this is not the limit in my development ⏳</span>
            </div>
          </div>
           <div class="frame frame-bg-opas">
            <div class="frame-content frame-text-normal">
             My Stack 📚
            </div>
          </div>
          <div class="frame ">
            <div class="frame-content frame-text-normal">
             
            </div>
          </div>
          <div class="frame frame-bg-opas">
            <div class="frame-content frame-text-normal">
              • JS => ES6+ <br>
              • HTML5 <br>
              • CSS3 <br>
              • BEM <br>
              • Bootstrap 5 <br>
              • Vue 2,3 JS <br>
              • Vue Router <br>
              • Vuex <br>
              • Pinia <br>
              • Vuetify <br>
              • Vuelidate <br>
              • Axios <br>
              • HTTP <br>
              • Cookie <br>
              • LocalStorage <br>
              • Git <br>
              • GitHub <br>
            </div>
          </div>
          <div class="frame frame-bg-opas">
            <div class="frame-content frame-text-normal">
             Are you ready?
            </div>
          </div>
          <div class="frame frame-bg-opas">
            <div class="frame-content frame-text-normal">
             Scroll faster!!!
            </div>
          </div>
          <div class="frame frame-bg-opas">
            <div class="frame-content frame-text-normal">
             G
            </div>
          </div>
          <div class="frame frame-bg-opas">
            <div class="frame-content frame-text-normal">
             G
            </div>
          </div>
          <div class="frame frame-bg-opas">
            <div class="frame-content frame-text-normal">
             G
            </div>
          </div>
          <div class="frame frame-bg-opas">
            <div class="frame-content frame-text-normal">
             G
            </div>
          </div>
          <div class="frame frame-bg-opas">
            <div class="frame-content frame-text-normal">
             G
            </div>
          </div>
          <div class="frame frame-bg-opas">
            <div class="frame-content frame-text-normal">
             G
            </div>
          </div>
          <div class="frame frame-bg-opas">
            <div class="frame-content frame-text-normal">
             O
            </div>
          </div>
          <div class="frame frame-bg-opas">
            <div class="frame-content frame-text-normal">
             O
            </div>
          </div>
          <div class="frame frame-bg-opas">
            <div class="frame-content frame-text-normal">
             O
            </div>
          </div>
          <div class="frame frame-bg-opas">
            <div class="frame-content frame-text-normal">
             O
            </div>
          </div>
          <div class="frame frame-bg-opas">
            <div class="frame-content frame-text-normal">
             O
            </div>
          </div>
          <div class="frame frame-bg-opas">
            <div class="frame-content frame-text-normal">
             O
            </div>
          </div>
      </section>
    </div>
</template>
<script>
import TypeIt from '../libs/typeit.min.js'

export default {
    mounted(){
        new TypeIt("#element", {
      strings: "Hi my name is Maxim, if you want to continue ^^ scroll down %) My friend! 10010001100101110110011011001101111 🤖",
      waitUntilVisible: true
}).go();
        document.body.style.cssText += `height: 13500px`;
       let zSpacing = -1000,
		lastPos = zSpacing / 5,
		$frames = document.getElementsByClassName('frame'),
		frames = Array.from($frames),
		zVals = []

window.onscroll = function() {

	let top = document.documentElement.scrollTop,
			delta = lastPos - top

	lastPos = top

	frames.forEach(function(n, i) {
		zVals.push((i * zSpacing) + zSpacing)
		zVals[i] += delta * -2.5
		let frame = frames[i],
				transform = `translateZ(${zVals[i]}px)`,
				opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})
}
window.addEventListener('scroll', this.handleScroll)

    },
    methods: {
      handleScroll() {
        if ((window.innerHeight + window.pageYOffset) >= (document.body.offsetHeight - 50 )) {
    this.$router.push('/portfolio')
  }
  }
    },

    destroyed() {
      document.body.style.cssText = `height: auto`;
      window.removeEventListener('scroll', this.handleScroll)
    },
    created() {
        window.scrollTo(0, 1)
    }
    
};
</script>

<style>
</style>