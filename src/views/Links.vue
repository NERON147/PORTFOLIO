<template>
<div>
    <div id="see"></div>
  <div class="links">
    <a href="https://www.linkedin.com/in/maksim-bezzubenko/" target="_blank">
      <div class="layer-link">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span class="fab fa-link"><img src="../assets/img/links/linkedin.svg" alt=""></span>
      </div>
    </a>
    <a href="https://t.me/neron147" target="_blank">
      <div class="layer-link">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span class="fab fa-tg"><img src="../assets/img/links/telegram.svg" alt=""></span>
      </div>
    </a>
        <a href="https://github.com/NERON147" target="_blank">
      <div class="layer-link">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span class="fab fa-git"><img src="../assets/img/links/github.svg" alt=""></span>
      </div>
    </a>
     <a href="https://hh.ru/resume/dcadf2deff0b572d030039ed1f5673534d6f64" target="_blank">
      <div class="layer-link">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span class="fab fa-hh"><img class="fa-hh" src="../assets/img/links/headhunter.png" alt=""></span>
      </div>
    </a>
  </div>
  <div id="end"></div>
  </div>
</template>

<script>
import TypeIt from '../libs/typeit.min.js'
export default {
    
    mounted(){
      document.body.style.cssText += `overflow: hidden; height: 100vh; width: 100vw;`;
        new TypeIt("#see", {
      strings: "See you in....",
      waitUntilVisible: true
}).go();
setTimeout(() => {new TypeIt("#end", {
      strings: `Thank you for visiting in my website, I hope you have a pleasant experience :) <a href="/" > Go home?</a>`,
      waitUntilVisible: true
}).go()}, 5000) 
    }
}
</script>

<style>
#see{
    font-family: Pixon;
    font-size: 30px;
    display: flex;
    justify-content: center;
}

#end{
    font-family: Pixon;
    font-size: 30px;
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    bottom: 0;
}
.links{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30vh;
  flex-wrap: wrap;
}
.links a{
  margin: 10px 14px;
  text-decoration: none;
  color: #fff;
  display: block;
  position: relative;
}
.links a .layer-link{
  width: 300px;
  height: 300px;
  transition: transform 0.3s;
}

@media (max-width: 600px) {
    .links a .layer-link{
  width: 150px;
  height: 150px;
}
}

/* @media (max-width: 700px) {
    .links a .layer-link{
  width: 70px;
  height: 70px;
}
} */

.links a:hover .layer-link{
  transform: rotate(-35deg) skew(20deg);
}
.links a .layer-link span{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 2px solid #fff;
  border-radius: 5px;
  transition: all 0.3s;
}
.links a .layer-link span.fab{
  font-size: 30px;
  line-height: 55px;
  text-align: center;
  padding: 20px;
}
.links a:hover .layer-link span:nth-child(1){
  opacity: 0.2;
  transform: translate(5px, -5px);
}
.links a:hover .layer-link span:nth-child(2){
  opacity: 0.4;
  transform: translate(15px, -15px);
}
.links a:hover .layer-link span:nth-child(3){
  opacity: 0.6;
  transform: translate(30px, -30px);
}
.links a:hover .layer-link span:nth-child(4){
  opacity: 0.8;
  transform: translate(45px, -45px);
}
.links a:hover .layer-link span:nth-child(5){
  opacity: 1;
  transform: translate(60px, -60px);
}
.links a:nth-child(1) .layer-link span,
.links a:nth-child(2){
  color: #2fa7f1;
  border-color: #2fa7f1;
}
.links a:nth-child(2) .layer-link span,
.links a:nth-child(2){
  color: #67c4fd;
  border-color: #67c4fd;
}
.links a:nth-child(3) .layer-link span,
.links a:nth-child(3){
  color: #7a7a7a;
  border-color: #7a7a7a;
}
.links a:nth-child(4) .layer-link span,
.links a:nth-child(4){
  color: #ff0000;
  border-color: #ff0000;
}
.links a:hover:nth-child(1) .layer-link span{
  box-shadow: -1px 1px 3px #1DA1F2;
}
.links a:hover:nth-child(2) .layer-link span{
  box-shadow: -1px 1px 3px #ffffff;
}
.links a .text{
  position: absolute;
  left: 50%;
  bottom: -5px;
  opacity: 0;
  font-weight: 500;
  transform: translateX(-50%);
  transition: bottom 0.3s ease, opacity 0.3s ease;
}

.fa-hh {
    width: 260px;
}

@media (max-width: 600px) {
   .fa-hh {
    width: 110px;
}
#end{
    font-size: 20px;
    margin-bottom: 30px;
}
.links{

  margin-top: 20vh;

}

}
</style>