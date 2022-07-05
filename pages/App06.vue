<template lang="">
  <section>
    <h2 class="sectionTitle">slick Slider</h2>
    <div class="box">
      <p>参考サイト：<a href="https://openbase.com/js/vue-slick" target="_blank">https://openbase.com/js/vue-slick</a></p>
    </div>
    <div class="loggic">


      <div class="slider-slick-wrap">
        <h4>slick</h4>
        <div class="slider-slick-contents">

          <slick
            ref="slick"
            :options="slickOptions"
            @afterChange="handleAfterChange"
            @beforeChange="handleBeforeChange"
            @breakpoint="handleBreakpoint"
            @destroy="handleDestroy"
            @edge="handleEdge"
            @init="handleInit"
            @reInit="handleReInit"
            @setPosition="handleSetPosition"
            @swipe="handleSwipe"
            @lazyLoaded="handleLazyLoaded"
            @lazyLoadError="handleLazeLoadError">
            <a href="/portfolio/nuxt-basic/assets/images/img1.jpg"><img src="/portfolio/nuxt-basic/assets/images/img1.jpg" alt=""></a>
            <a href="/portfolio/nuxt-basic/assets/images/img2.jpg"><img src="/portfolio/nuxt-basic/assets/images/img2.jpg" alt=""></a>
            <a href="/portfolio/nuxt-basic/assets/images/img3.jpg"><img src="/portfolio/nuxt-basic/assets/images/img3.jpg" alt=""></a>
            <a href="/portfolio/nuxt-basic/assets/images/img4.jpg"><img src="/portfolio/nuxt-basic/assets/images/img4.jpg" alt=""></a>
            <a href="/portfolio/nuxt-basic/assets/images/img5.jpg"><img src="/portfolio/nuxt-basic/assets/images/img5.jpg" alt=""></a>
            <a href="/portfolio/nuxt-basic/assets/images/img6.jpg"><img src="/portfolio/nuxt-basic/assets/images/img6.jpg" alt=""></a>
          </slick>

        </div>
      </div>

    </div>
  </section>
</template>

<script>
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slick from 'vue-slick';

export default {

 components: { Slick },

    data() {
        return {
          slickOptions: {
              autoplay: true,
              autoplaySpeed: 2000,
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: true,
              speed: 2000,
            },
        };
    },

    // All slick methods can be used too, example here
    methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },

        // Events listeners
        handleAfterChange(event, slick, currentSlide) {
            console.log('handleAfterChange', event, slick, currentSlide);
        },
        handleBeforeChange(event, slick, currentSlide, nextSlide) {
            console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
        },
        handleBreakpoint(event, slick, breakpoint) {
            console.log('handleBreakpoint', event, slick, breakpoint);
        },
        handleDestroy(event, slick) {
            console.log('handleDestroy', event, slick);
        },
        handleEdge(event, slick, direction) {
            console.log('handleEdge', event, slick, direction);
        },
        handleInit(event, slick) {
            console.log('handleInit', event, slick);
        },
        handleReInit(event, slick) {
            console.log('handleReInit', event, slick);
        },
        handleSetPosition(event, slick) {
            console.log('handleSetPosition', event, slick);
        },
        handleSwipe(event, slick, direction) {
            console.log('handleSwipe', event, slick, direction);
        },
        handleLazyLoaded(event, slick, image, imageSource) {
            console.log('handleLazyLoaded', event, slick, image, imageSource);
        },
        handleLazeLoadError(event, slick, image, imageSource) {
            console.log('handleLazeLoadError', event, slick, image, imageSource);
        },
    },

}

</script>

<style lang="scss">
  .slider-slick{

    &-wrap{
      margin-top: 100px;
    }

    &-contents{
      margin: 0 auto;
      width: 90%;
    }
  }

  .slick-prev {
    left: 0;
    z-index: 2;
  }

  .slick-next {
    right: 0;
    z-index: 2;
  }
</style>
