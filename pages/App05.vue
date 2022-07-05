<template lang="">
  <section>
    <h2 class="sectionTitle">手書きのスライダー</h2>
    <div class="box">
      <p>参考サイト：<a href="https://mebee.info/2020/07/09/post-13107/#outline__4" target="_blank">https://mebee.info/2020/07/09/post-13107/#outline__4</a></p>
    </div>
    <div class="loggic">

      <div class="slider-tegaki-wrap">
        <h4>手書き</h4>
        <div class="slider-tegaki-contents">
          <div class="slide__wrapper">
            <div v-show="index === page" v-for="(image,index) in images" :key="index">
              <img :src="image.src" class="image" />
            </div>
            <div class="right-btn" @click="nextPage"></div>
            <div class="left-btn" @click="nextPage"></div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      page:0,
      images:[
        {
          src:require('static/assets/images/img1.jpg')
        },
        {
          src:require('static/assets/images/img2.jpg')
        },
        {
          src:require('static/assets/images/img3.jpg')
        },
        {
          src:require('static/assets/images/img4.jpg')
        },
        {
          src:require('static/assets/images/img5.jpg')
        },
        {
          src:require('static/assets/images/img6.jpg')
        },
      ],
    };
  },
  methods: {
    nextPage(){
      if(this.page + 1 >= this.images.length){
        this.page = 0
        return;
      }
      this.page ++;
    },
    prevPage(){
      if(this.page <= 0){
        return;
      }
      this.page --;
    }
  }
}

</script>

<style lang="scss">

  .slider-tegaki{

    &-wrap{
      margin: 0;
    }

    &-contents{
      margin: 0 auto;
      width: 90%;
    }
  }

  .slide__wrapper{
    position:relative;
  }
  .image{
    width: 100%;
  }
  .right-btn,
  .left-btn{
    width: 30px;
    height: 30px;
    font-size: 0;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    position:absolute;
    top:50%;
    transform: translateY(-50%);

    &::after{
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      border-right: 1px solid #fff;
      border-bottom: 1px solid #fff;
      position: absolute;
      left: 50%;
      top: 50%;
    }
  }

  .right-btn{
    right:20px;

     &::after{
      transform-origin: 40% 60%;
      transform: translate(-50%, -50%) rotate(-45deg);
     }
  }
  .left-btn{
    left:20px;

    &::after{
      transform-origin: 65% 55%;
      transform: translate(-50%, -50%) rotate(135deg);
    }
  }

</style>
