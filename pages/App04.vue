<template>
  <section>
    <h2 class="sectionTitle">スクロールイベント</h2>
    <div class="box">
      <code>
        npm i aos
      </code>
    </div>
    <div class="box">
      <p>参考サイト：<a href="https://michalsnik.github.io/aos/" target="_blank">https://michalsnik.github.io/aos/</a></p>
    </div>
    <div class="loggic">
      <figure data-aos="fade-left"><img src="/assets/images/ph_1.jpg" alt=""></figure>
      <figure data-aos="fade-right"><img src="/assets/images/ph_2.jpg" alt=""></figure>
      <figure data-aos="fade-left"><img src="/assets/images/ph_3.jpg" alt=""></figure>
      <figure data-aos="fade-right"><img src="/assets/images/ph_4.jpg" alt=""></figure>
    </div>
  </section>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'App04',
  mounted () {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }
}
</script>

<style lang="scss">
figure{
  margin: 20px 0;
}
</style>
