<template>
  <transition name="modal" appear>
    <div class="modal__overlay" v-on:click.self="$emit('clickEvent')">
      <div class="modal__main">
        <slot />
        <button class="modal__closeButton" v-on:click="$emit('clickEvent')">x</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',

}
</script>

<style lang="scss">
.modal{

  &__overlay{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
  }

  &__main{
    padding: 40px;
    width: 90%;
    height: 90%;
    max-width: 1000px;
    max-height: 500px;
    background-color: #fff;
    border-radius: 20px;
    position: relative;
    z-index: 100;
  }

  &__closeButton{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    color: #fff;
    background-color: #000;
    border-radius: 50%;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 101;
    cursor: pointer;

    &:hover{
      color: #fff;
      text-decoration: none;
      opacity: 1;
    }
  }
}
</style>
