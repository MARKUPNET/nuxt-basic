<template>
  <article>
    <div class="page-container">

      <nav class="indexMenu">
        <GrobalMenu></GrobalMenu>
      </nav>

    </div>
  </article>
</template>

<script>
export default {
  name: 'index',
}
</script>

<style lang="scss">

.indexMenu{
  .menu{

    li{
      border-bottom: 1px solid #ccc;

      a{
        display: block;
        padding: 10px;
        color: #000;
        background-color: #fff;

        &:hover{
          color: #fff;
          background-color: #000;
          text-decoration: none;
          opacity: 1;
        }
      }
    }
  }
}
</style>
