<template>
  <div class="container">
   <swiper :options="swiperOption">
     <swiper-slide><img src="../assets/img/test1.jpg"></swiper-slide>
     <swiper-slide><img src="../assets/img/test2.jpg"></swiper-slide>
     <swiper-slide><img src="../assets/img/test3.jpg"></swiper-slide>
     <swiper-slide><img src="../assets/img/test4.jpg"></swiper-slide>
     <swiper-slide><img src="../assets/img/test5.jpg"></swiper-slide>
     <swiper-slide><img src="../assets/img/test6.jpg"></swiper-slide>
   </swiper>
</div>
</template>

<script>
import * as swiperAni from '@/assets/js/swiper.animate.min.js'
export default {
  data () {
    return {
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
img{
  width: 100%;
  height: 100%;
}
</style>
