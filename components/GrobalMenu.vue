<template>
  <ul class="menu">
    <li v-for="(link, i) in links" :key="i">
      <template v-if="isInternalLink(link.path)">
        <NuxtLink :to="link.path" v-on:click.native="flag=false">{{ link.label }}</NuxtLink>
      </template>
      <template v-else>
        <a :href="link.path" v-on:click="flag=false">{{ link.label }}</a>
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {

      links: [
        { label: "クリックによるクラスのトグル", path: "/App01" },
        { label: "タブセレクト", path: "/App02" },
        { label: "モーダルウィンドウ", path: "/App03" },
        { label: "スクロールイベント", path: "/App04" },
        { label: "手書きのスライダー", path: "/App05" },
        { label: "Slick Slider", path: "/App06" },
        { label: "axiosでWordpressの投稿をimport", path: "/App07" },
        { label: "WP REST API / CATEGORY表示　ACF表示", path: "/App08" },
      ]
    }
  },
  methods: {
    isInternalLink(path) {
      return !/^https?:\/\//.test(path)
    }
  },
}
</script>
