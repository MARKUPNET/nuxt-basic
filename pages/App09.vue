<template>
  <section>
    <h2 class="sectionTitle">Pagenationサンプル</h2>

    <div class="box">

      <ul v-for="post in posts" :key="post.id">
        <li>{{ post.title.rendered }}</li>
      </ul>

      <nav class="Page navigation">
          <ul class="pagination justify-content-center">
            <li class="page-item"><a class="page-link" href="#">&lt;</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
            <li class="page-item"><a class="page-link" href="#">5</a></li>
            <li class="page-item"><a class="page-link" href="#">&gt;</a></li>
          </ul>
      </nav>
    </div>

  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: [],
    }
  },

  methods: {
    getPosts() { // 記事一覧を取得
      var url = 'https://michi-eki.net/wp-json/wp/v2/posts?page=2';
      axios.get(url)
        .then(response => {
          this.posts = response.data;
        });
    },
  },

  mounted() {
    this.getPosts();
  }
}
</script>

<style lang="scss">
</style>
