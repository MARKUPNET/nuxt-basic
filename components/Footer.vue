<template>
  <footer class="site-footer">
    <div class="pageTop">
      <a href="#" v-scroll-to="'body'">TOP</a>
    </div>
    <p class="copyright">MARKUPNET</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
.site-footer{
  padding: 20px;
  color: #fff;
  text-align: center;
  background-color: #000;
  position: relative;
}
@media screen and (min-width: 768px) {
  .site-footer{
    padding: 1em;
  }
}
.pageTop{
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 100%;
  right: 0;
  transform: translate(-10px, -10px);

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    background-color: #000;
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover{
      color: #fff;
      text-decoration: none;
      opacity: 1;
      transform: translateY(-10px);
    }
  }
}
@media screen and (min-width: 992px) {
  .pageTop{
    width: 80px;
    height: 80px;

    a{
      font-size: 16px;
    }
  }
}
.copyright{
  margin: 0;
  padding: 0;
  font-size: 10px;
}
@media screen and (min-width: 992px) {
  .copyright{
    font-size: 12px;
  }
}
</style>
