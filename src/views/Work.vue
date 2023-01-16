<template>
<div class="work-wrapper">
    <router-link to="/portfolio" class="back"> ᐊ Back?</router-link>
    <div class="slider-item">
        <a :href="work.page" target="_blank"> <div class="slider-img" :style="{ 'background-image': 'url(' + require('../assets/img/imgSlides/' + work.img) + ')' } "></div></a>
    </div>
    <div class="work-info">
        <p><span class="big">Title:</span> {{ work.title }}</p> <br>
        <p><span class="big">Tech:</span> {{ work.tec }}</p> <br>
        <p><span class="big">Descr:</span> {{ work.descr }}</p> <br>
        <p><span class="big">Git:</span> <a :href="work.git" target="_blank">{{ work.git }}</a></p> <br>
        <p><span class="big">Page:</span> <a :href="work.page" target="_blank">{{ work.page }}</a></p> <br>
        
        
    </div>
    <div class="blur"></div>
        <div class="slide-mobile">
    <img src="../assets/img/rotate.png" alt="" class="rotate">
    </div>
</div>

</template>

<script>

export default {
    data() {
    return {
        work: null
    };
  },
  created() {
    document.body.style.cssText += `overflow: visible;`;
    let id = this.$route.params.id;
    this.work = this.$store.getters.SLIDE_WORK(id);
  }
}

</script>

<style scoped>
.slider-item {
    box-shadow: none;
    z-index: 6;
}
.slider-img {
    height: 500px;
    filter: none;
    margin-top: 10vh;
    z-index: 5;
}

@media (max-width: 900px) {
    .slider-img{
        height: 300px;
}
}
.big{
    font-size: 20px;
}

.back {
    z-index: 100;
    position: absolute;
    right: 0;
    top: 0;
    margin: 12vh 10vw 0 0;
    font-size: 20px;
    color: aliceblue;
}
</style>