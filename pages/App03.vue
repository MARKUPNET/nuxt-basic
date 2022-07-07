<template>
  <section>
    <h2 class="sectionTitle">モーダルウィンドウ</h2>
    <div class="box">
      <code>
        ライブラリ使用無し
      </code>
    </div>
    <div class="box">
      <p>参考サイト：<a href="https://style01.net/2170/" target="_blank">https://style01.net/2170/</a></p>
    </div>
    <div class="loggic">

      <article class="content">
        <h3 class="boxTitle">モーダル1</h3>
        <Modal :modalItems="modalItems[0]" />
      </article>

      <article class="content">
        <h3 class="boxTitle">モーダル2</h3>
        <Modal :modalItems="modalItems[1]" />
      </article>

    </div>
  </section>

</template>


<script>
import Modal from "../components/Modal";

export default {
  name: "App03",
  components: {
    Modal,
  },
  data() {
    return {
      modalItems: [
        {
          modalTtl: "モダール<span class='modal-ttl-large'>１</span>",
          modalContent: "<p>モーダル１が立ち上がった</p>",
        },
        {
          modalTtl: "モダール<span class='modal-ttl-large'>２</span>",
          modalContent: "<p>モーダル２が立ち上がった</p>",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.modal-ttl-large{
  font-size: 50px;
}
.content {
  margin-bottom: 50px;
}

</style>
