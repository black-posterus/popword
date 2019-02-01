<template>
  <el-container>
    <el-main>
     <el-button type="info" class="button1" circle @click="change1"><i class="el-icon-date"></i></el-button>
     <el-button type="info" class="button2" circle @click="change2"><i class="el-icon-menu"></i></el-button>
     <el-button type="info" class="button3" circle><i class="el-icon-share"></i></el-button>
     <div v-show="show1" class="picker">
       <el-button type="info" class="button4" circle @click="change1"><i class="el-icon-close"></i></el-button>
       <mt-picker :slots="slots" class="mt_picker" itemHeight="300"></mt-picker>
     </div>
     <div v-show="show2" class="menu">
       <el-button type="info" class="button4" circle @click="change2"><i class="el-icon-close"></i></el-button>
       <div class="menu-block-left"><img :src="this.list[0].src">xxxx年度流行语</div>
       <div class="menu-block-right">
         <img :src="list[1].src">
         <img :src="list[1].src">
         <img :src="list[1].src">
         <img :src="list[1].src">
       </div>
       <div class="menu-block-bottom">
         <img :src="list[2].src">
         <img :src="list[2].src">
         <img :src="list[2].src">
         <img :src="list[3].src">
         <img :src="list[3].src">
         <img :src="list[3].src">
       </div>
     </div>
     <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'App',
  methods: {
    onValuesChange:function(picker, values) {
     //这里用来写根据picker的值切换router
    },
    change1:function(){
      this.show1===true?this.show1=false:this.show1=true;
    },
    change2:function(){
      this.show2===true?this.show2=false:this.show2=true;
    }
  },
  data() {
    return {
      show1:false,
      show2:false,
      slots: [
        {
          values: ['2016', '2017', '2018', '2019'],
        }
      ],
      list:[
        {src:require("./assets/img/test1.jpg")},
        {src:require("./assets/img/test2.jpg")},
        {src:require("./assets/img/test3.jpg")},
        {src:require("./assets/img/test4.jpg")}
      ]
    };
  }
}
</script>

<style lang="scss">
.el-main{
  margin: 0;
  padding: 0;
  .button1{
    height: 100px;
    width: 100px;
    position: fixed;
    top:20px;
    left: 20px;
    z-index: 99;
    font-size: 50px;
  }
  .button2{
    height: 100px;
    width: 100px;
    position: fixed;
    top:20px;
    right: 20px;
    z-index: 99;
    font-size: 50px;
  }
  .button3{
    height: 100px;
    width: 100px;
    position: fixed;
    top:150px;
    right: 20px;
    z-index: 99;
    font-size: 50px;
  }
  .button4{
    height: 100px;
    width: 100px;
    position: fixed;
    top:20px;
    right: 20px;
    z-index: 100;
    font-size: 50px;
  }
  .picker{
    margin-top: -15%;
    height: 150%;
    width: 100%;
    position: fixed;
    top:0;
    background: rgba(255,255,255,.7);
    z-index: 99;
  }
  .picker-item{
    font-size:200px;
     }
  .menu{
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(255,255,255,.7);
    z-index: 99;
    display: flex;
    flex-wrap: wrap;
  }
  .menu-block-left{
    width: 50%;
    height: 50%;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .menu-block-right{
    width: 50%;
    height: 50%;
    display: flex;
    flex-wrap: wrap;
    img{
      width: 50%;
      height: 50%;
    }
  }
  .menu-block-bottom{
    width: 100%;
    height: 50%;
    display: flex;
    flex-wrap: wrap;
    img{
      width: 33.33%;
      height: 50%;
    }
  }
}
@media screen and (max-width: 1024px){
  .menu-block-left{
    width: 100%;
    height: 50%;
    img{
      width: 100%;
      height: 100%;
    }
  }
}

</style>
