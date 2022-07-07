<template>
  <section>
    <h2 class="sectionTitle">axiosでAPI</h2>
    <div class="box">
      <div class="leadTxt">
        <p>Wordpress（外部サイト）の記事を取得して表示</p>
      </div>
    </div>
    <div class="box">
      <p>参考サイト：<a href="https://qiita.com/naos_taira/items/25e20688277424f1cf45" target="_blank">https://qiita.com/naos_taira/items/25e20688277424f1cf45</a></p>
    </div>
    <div class="loggic">
      <h3 class="">以下はWordpressの記事↓↓↓↓</h3>

      <div id="posts">
        <div v-show="posts.length !== 0" class="posts">
          <div class="posts__wrapper">
            <article class="post" v-for="post in posts" :key="post.id">
              <div class="post__img">
                <figure v-if="post.thumb" class="thumb">
                  <img :src="post.thumb[0].source_url" alt="">
                </figure>
                <span v-else class="post__imgNone">
                  NO IMAGE
                </span>
              </div>
              <div class="post__contents">
                <div v-if="post.category[0]" class="post__categoryList">
                  <span v-for="category in post.category[0]" :key="category.id" class="post__category">
                    <a :href="category.link">{{ category.name }}</a>
                  </span>
                </div>
                <a :href="post.link" target="_blank" class="post__link">
                  <h3 class="post__title">{{ post.title }}</h3>
                  <div class="post__content" v-html="post.content">
                  </div>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App07',

  data() {
    return {
      posts: [],
    }
  },

  created: function () {
    var _this = this;
    axios.get("https://markupnet.jp/wp-json/wp/v2/posts/?_embed").then(function(response) { // [domain]にはドメインを指定
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
  }

}
</script>

<style lang="scss">
.posts{

  &__wrapper{
    margin-bottom: 60px;
    padding: 30px;
    background-color: #fffcf3;
  }

}

.post{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 20px 0;
  font-size: 15px;
  line-height: 1.75;
  border-bottom: 1px solid #eee;

  &__img{
    margin: 0;
    width: 90%;
    figure{
      margin: 0;
    }
    img{
      display: block;
    }
  }

	&__imgNone{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		max-height: 182px;
		background-color: #fef9f9;
	}

  &__contents{
    width: 100%;
  }

  &__categoryList{
    margin: 10px 0;
  }

  &__category{
    display: inline-block;
    padding: 3px 15px;
    font-size: 12px;
    line-height: 1;
    background-color: #e4ebf8;
    border-radius: 3px;

    & + .post__category{
      margin-left: 5px;
    }
  }

  &__link{}

  &__title{
    margin-bottom: 20px;
    padding: 0 0 0 30px;
    font-size: 24px;
    font-weight: 700;
    position: relative;

    &::before,
    &::after{
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      background-color: #eee;
      position: absolute;
      left: 0;
      top: 10px;
    }

    &::before{
      left: 0;
      top: 10px;
    }

    &::after{
      left: 10px;
      top: 20px;
    }
  }

  &__content{

    p{
      margin: 1em 0;
      font-size: 14px;
      line-height: 1.5;

      &:first-child{
        margin-top: 0;
      }

      &:last-child{
        margin-bottom: 0;
      }
    }
  }

}
@media screen and (min-width: 768px) {
  .post{

    &__img{
      width: 30%;
    }

    &__contents{
      width: 70%;
      padding: 0 0 0 20px;
    }
  }
}


</style>
