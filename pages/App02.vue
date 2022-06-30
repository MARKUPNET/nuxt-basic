<template>
  <section>
    <h2 class="sectionTitle">タブセレクト</h2>
    <div id="tabs" class="tabContainer">
      <div class="tabButtons">
          <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">タブ01</a>
          <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">タブ02</a>
          <a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">タブ03</a>
      </div>
      <div class="tabContents">
          <div v-show="activetab === 1" class="content cont01">
              コンテンツ01
          </div>
          <div v-show="activetab === 2" class="content cont02">
              コンテンツ02
          </div>
          <div v-show="activetab === 3" class="content cont03">
              コンテンツ03
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'App02',

  data(){
    return {
      activetab: 1
    }
  }
}
</script>

<style lang="scss">
.tabContainer{
  margin: 0;
}

.tabButtons{
  display: flex;

  a{
    display: block;
    padding: 5px;
    cursor: pointer;
    text-decoration: none;
    border: 1px solid #eee;
    border-bottom: 0;

    &:nth-of-type(1){
      background-color: #fff;
    }
    &:nth-of-type(2){
      background-color: #ece3ed;
    }
    &:nth-of-type(3){
      background-color: #e3ede4;
    }

    &.active{
      border-left: 1px solid #ddd;
      border-top: 1px solid #ddd;
      border-right: 1px solid #ddd;
    }
  }
}

.tabContents{

  .content{
    padding: 30px;
    border: 1px solid #ddd;

    &.cont01{
      background-color: #fff;
    }

    &.cont02{
      background-color: #ece3ed;
    }

    &.cont03{
      background-color: #e3ede4;
    }
  }
}
</style>
