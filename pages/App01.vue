<template>
  <section>
    <h2 class="sectionTitle">クリックによるクラスのトグル</h2>
    <button class="btn01" v-on:click='isActive01=!isActive01'>こちらをクリック</button>
    <div class="hoge01" v-bind:class='{active:isActive01}'>
      ここの色が変わります。
    </div>
  </section>
</template>

<script>
export default {
  name: 'App01',

  data(){
    return {
      isActive01: false
    }
  }
}
</script>

<style lang="scss">
.hoge01.active{
  color: #f00;
}
</style>
