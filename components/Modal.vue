<template>
  <div>
    <ModalBtn :modalFlg="modalFlg" @modal-clicked="modalFlg = $event" />
    <ModalContents
      :modalFlg="modalFlg"
      @modal-clicked="modalFlg = $event"
      :modalTtl="modalItems.modalTtl"
      :modalContent="modalItems.modalContent"
    />
  </div>
</template>

<script>
import ModalContents from "../components/ModalContents";
import ModalBtn from "../components/ModalBtn";

export default {
  name: "Modal",
  components: {
    ModalContents,
    ModalBtn,
  },
  props: ["modalItems"],
  data() {
    return {
      modalFlg: false,
    };
  },
};
</script>
