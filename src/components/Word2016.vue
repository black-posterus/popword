<template>
  <div class="container">
   <swiper :options="swiperOption">
     <swiper-slide v-for="(item,index) in intros" :key="index" class="slide">
       <img :src="item.src"><img class="intro_img">
       <div class="intro_wd">{{ item.introduction }}</div>
     </swiper-slide>
   </swiper>
</div>
</template>

<script>
import * as swiperAni from '@/assets/js/swiper.animate.min.js'
export default {
  data () {
    return {
      intros:[//做成后端可修改的JSON
        {"src":require("../assets/img/test1.jpg"),introduction:"这是年度词汇的介绍"},
        {"src":require("../assets/img/test2.jpg"),introduction:"这是年度词汇的介绍"},
        {"src":require("../assets/img/test3.jpg"),introduction:"这是年度词汇的介绍"},
        {"src":require("../assets/img/test4.jpg"),introduction:"这是年度词汇的介绍"},
        {"src":require("../assets/img/test5.jpg"),introduction:"这是年度词汇的介绍"},
        {"src":require("../assets/img/test6.jpg"),introduction:"这是年度词汇的介绍"}
      ],
      swiperOption: {
          initialSlide: 0,
          direction: 'vertical',
          slidesPerView: 1,
          mousewheel: true,
          height: window.innerHeight,  // 高度设置，占满设备高度
          on: {
            init: function () {
              swiperAni.swiperAnimateCache(this)
              swiperAni.swiperAnimate(this)
            },
            slideChange: function () {
              swiperAni.swiperAnimate(this)
            }
          }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.slide{
  position: relative;
}

img{
  width: 100%;
  height: 100%;
}
.intro_wd{
  width: 50%;
  height: 30%;
  position: absolute;
  top: 70%;
  background: red;
  @media screen and (max-width: 600px){
    width: 100%;
    height: 25%;
    left: 0;
    top: 75%;
  }
}
.intro_img{
  width: 50%;
  height: 50%;
  position: absolute;
  top:20%;
  left: 25%;
  background: green;
  @media screen and (max-width: 600px){
    width: 100%;
    height: 50%;
    left: 0;
    bottom:30%;
  }
}
</style>
