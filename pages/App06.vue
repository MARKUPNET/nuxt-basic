<template>
  <article>
    <div class="page-container">

      <div class="mainVisual_top">
        <div class="inner">
        </div>
      </div>

      <div class="block">
        <ul class="sideBar_list">
              <li v-for="(post, i) in posts" :key="i">
                  <a :href="post.link">
                    <time :datetime="post.date">{{ post.date | dateFilter }}</time>
                    <p class="sideBar_listItemLinkTxt" >{{ post.title.rendered }}</p>
                    <div v-html="post.content.rendered">
                    </div>
                  </a>
              </li>
          </ul>
      </div>

    </div>
  </article>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',

  data() {
    return {
      posts: '',
    }
  },

  mounted() {
    const baseUrl = 'https://markupnet.jp';
    const product_url = baseUrl + "/wp-json/wp/v2/posts?_embed"; // 取得先のURL(wp product)
    axios
      .get(product_url)
      .then((response) => (this.posts = response.data))
  },

}
</script>

<style lang="scss">
</style>
