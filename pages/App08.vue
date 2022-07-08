<template>
  <section>
    <h2 class="sectionTitle">WP REST API カテゴリ一覧表示＋記事一覧表示</h2>
    <div class="box">
      <div class="leadTxt">
        <h3>【　Wordpress側の準備　】</h3>
        <div class="card p-3">
          <h4 class="mb-1">1.プラグイン「ACF to REST API」をインストール</h4>
        </div>
        <div class="card mt-3 p-3">
          <h4 class="mb-1">2.function.phpに追記</h4>
          <code class="m-0">register_post_type('post',array('show_in_rest'=>true));</code>
        </div>
      </div>
    </div>

    <div class="box mt-5">
      <div class="leadTxt">
        <h3>【　Vue側の準備　】</h3>
        <div class="card mt-3 p-3">
          <h4 class="mb-1">2.function.phpに追記</h4>
          <code class="m-0">
&lt;script&gt;

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
      var url = 'https://exsample.com/wp-json/wp/v2/categories?per_page=100';
      axios.get(url)
        .then(response => {
          this.categories = response.data;
        });
    },
    getPosts() { // 記事一覧を取得
      var url = 'https://exsample.com/wp-json/wp/v2/posts?categories=' + this.currentCategoryId;
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
&lt;/script&gt;

          </code>
        </div>
      </div>
    </div>

    <div class="loggic mt-5">

      <h3>【　実行結果　】</h3>

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
                        <ul>
                          <li>道の駅名：{{ post.acf.道の駅名 }}</li>
                          <li>住所：{{ post.acf.所在地 }}</li>
                        </ul>
                        <div class="mt-5 text-right">
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

    <div class="mt-5">
      <h3 class="mb-1">【　参考サイト　】</h3>
      <a href="https://mamimumeme.com/web/acd-rest-api" target="_blank">https://mamimumeme.com/web/acd-rest-api</a><br>
      <a href="https://designsupply-web.com/media/programming/6281/" target="_blank">https://designsupply-web.com/media/programming/6281/</a>
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
