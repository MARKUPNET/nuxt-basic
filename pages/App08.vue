<template>
  <section>
    <h2 class="sectionTitle">WP REST API カテゴリ一覧表示＋記事一覧表示</h2>

    <div class="loggic">

        <div class="row mb-3">
            <div class="col-12">
                <div class="row">
                    <div class="col-2">
                        <label>
                            <input type="radio" value="" v-model="currentCategoryId">
                            <span>全てのカテゴリ</span>
                        </label>
                    </div>
                    <div class="col-2" v-for="category in categories" :key="category.id">
                        <label>
                            <input type="radio" :value="category.id" v-model="currentCategoryId">
                            <span v-text="category.name"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>


        <div class="row">
            <div class="col-4 p-2" v-for="post in posts" :key="post.id">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title" v-text="post.title.rendered"></h5>
                        <h6 class="card-subtitle mb-2 text-muted" v-text="getDate(post.date)"></h6>
                        <p class="card-text" v-html="post.excerpt.rendered"></p>
                        <div class="text-right">
                            <a :href="post.link" class="card-link">表示する</a>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="!posts.length">
                記事が見つかりませんでした。
            </div>
        </div>

    </div>
  </section>

</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: [],
      categories: [],
      currentCategoryId: ''
    }
  },

  methods: {
    getCategories() { // カテゴリ一覧を取得
      var url = 'https://michi-eki.net/wp-json/wp/v2/categories?per_page=100';
      axios.get(url)
        .then(response => {
          this.categories = response.data;
        });
    },
    getPosts() { // 記事一覧を取得
      var url = 'https://michi-eki.net/wp-json/wp/v2/posts?categories=' + this.currentCategoryId;
      axios.get(url)
        .then(response => {
          this.posts = response.data;
        });
    },
    getDate(date) {
      const dt = new Date(date);
      return dt.getFullYear() +'/'+ (dt.getMonth() + 1) +'/'+ dt.getDate()
    },
  },

  mounted() {
    this.getCategories();
    this.getPosts();
  },

  watch: {
    currentCategoryId() {
      this.getPosts();
    }
  }
}
</script>

<style lang="scss">
</style>
