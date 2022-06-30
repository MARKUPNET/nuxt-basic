<template>
  <section>
    <h2 class="sectionTitle">モーダルウィンドウ</h2>
    <div class="box">
      <code>
        ライブラリ使用無し
      </code>
    </div>
    <div class="box">
      <p>参考サイト：<a href="https://reffect.co.jp/vue/understand-component-by-moda-window" target="_blank">https://reffect.co.jp/vue/understand-component-by-moda-window</a></p>
    </div>
    <div class="loggic">

      <article>
        <button class="button" v-on:click="openModal">モーダル1ひらく</button>
        <Modal v-show="showContent" v-on:clickEvent="closeModal">
          <div class="modal__header">
            <h3>モーダルサンプル1です。</h3>
          </div>
          <div class="modal__body">
            <p>ここに文章を入力します。</p>
            <p class="btnWrap"><a href="/" class="btn_blue">HOME</a></p>
          </div>
        </Modal>
      </article>

      <article>
        <button class="button" v-on:click="openModal">モーダル2ひらく</button>
        <Modal v-show="showContent" v-on:clickEvent="closeModal">
          <div class="modal__header">
            <h3>モーダルサンプル2です。</h3>
          </div>
          <div class="modal__body">
            <p>ここに文章を入力します。</p>
            <p class="btnWrap"><a href="/" class="btn_blue">HOME</a></p>
          </div>
        </Modal>
      </article>

    </div>
  </section>
</template>

<script>
import Modal from '~/components/Modal.vue'

export default {
  name: 'App03',

  components: {
    Modal
  },
  data() {
    return {
      showContent: false,
    }
  },
  methods: {
    openModal: function(){
      this.showContent = true
    },
    closeModal: function(){
      this.showContent = false
    },
  }
}
</script>

<style lang="scss">
.modal-enter-active, .modal-leave-active {
  transition:opacity 0.5s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
}
</style>
