<template>
  <div class="wrapper">
    <Header />
    <div class="site-container">
      <main class="site-main">
        <article>
          <div class="page-container">
            <nuxt />
          </div>
        </article>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from "@/components/Header.vue"; // headerをインポート
  import Footer from "@/components/Footer.vue"; // footerをインポート
  export default {
    components: {
      Header,
      Footer
    }
  };
</script>

<style lang="scss">
.wrapper{
  margin: 0;
  padding: 50px 0 0;
}
@media screen and (min-width: 768px) {
  .wrapper{
    padding: 100px 0 0;
  }
}

.site-main{
  margin: 0 auto;
  padding: 50px 15px;
  width: 100%;
  max-width: 1000px;
  min-height: calc(100vh - 100px);
}
@media screen and (min-width: 768px) {
  .site-main{
    min-height: calc(100vh - 150px);
  }
}

.sectionTitle{
  margin-bottom: 50px;
  padding-bottom: 0.2em;
  font-size: 26px;
  font-weight: 700;
  border-bottom: 3px solid #000;
  position: relative;

  &::before,
  &::after{
    content: "";
    display: block;
    height: 2px;
    background-color: #f00;
    position: absolute;
    left: 0;
  }
  &::before{
    width: 50px;
    bottom: -10px;
  }
  &::after{
    width: 30px;
    bottom: -15px;
  }

}
@media screen and (min-width: 768px) {
  .sectionTitle{
    font-size: 32px;
    &::before{
      width: 80px;
      bottom: -10px;
    }
    &::after{
      width: 50px;
      bottom: -15px;
    }
  }
}
.btnWrap{

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5em 1em;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    background-color: #000;
    border: 1px solid #000;
    transition: all 0.3s ease;
    transform: scale(1);

    &:hover{
      text-decoration: none;
      opacity: 1;
      transform: scale(1.05);
    }
  }

  a.btn_blue{
    color: #fff;
    background-color: #0919a0;
    border: 1px solid #0919a0;
  }
}
</style>
