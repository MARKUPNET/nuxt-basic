<template>
  <section>
    <h2 class="sectionTitle">Wordpress AFC 取得</h2>

    <div class="loggic">

      <div v-show="posts.length !== 0" id="posts" class="posts">
        <ul class="postsList">
          <li v-for="post in posts" :key="post.id" >
            <h3>{{ post.title }}</h3>
            <dl>
              <dt>道の駅名</dt>
              <dd>{{  }}</dd>
            </dl>
          </li>
        </ul>
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
      acf: [],
    }
  },
  created() {
    var _this = this;
    axios.get("https://michi-eki.net/wp-json/wp/v2/posts/?per_page=100&page=1&_embed").then(function(response) { // [domain]にはドメインを指定
      response.data.forEach(function (elm) {
        var data = {
          title: elm.title.rendered,
          content: elm.excerpt.rendered,
          link: elm.link,
          category: elm._embedded["wp:term"],
          thumb: elm._embedded["wp:featuredmedia"]
        }
        _this.posts.push(data);
      });
    })
    .catch(function (error) {
      console.log("記事が取得できません。");
    })
  },
  methods: {
    afc() {
    }
  }
}
</script>

<style lang="scss">
ul.postsList{
  margin: 10px 0;

  li{
    margin: 10px 0;

    h3{
      margin-bottom: 10px;
    }
  }
}
</style>
