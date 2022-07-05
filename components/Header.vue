<template>
  <header class="site-header" v-bind:class='{menuOpen:flag}'>
    <div class="site-header__in">
      <div class="header__logo"><a href="/portfolio/nuxt-basic/">MARKUPNET</a></div>
      <button id="hamburger_button" v-on:click='flag=!flag'><span></span></button>
      <div class="header__gnavi" v-bind:class='{naviOpen:flag}'>
        <nav>
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
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {

  name: 'Header',
  data() {
    return {
      flag: false,

      links: [
        { label: "クリックによるクラスのトグル", path: "/App01" },
        { label: "タブセレクト", path: "/App02" },
        { label: "モーダルウィンドウ", path: "/App03" },
        { label: "スクロールイベント", path: "/App04" },
        { label: "手書きのスライダー", path: "/App05" },
        { label: "Slick Slider", path: "/App06" },
        { label: "axiosでWordpressの投稿をimport", path: "/App07" },
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

<style lang="scss">
/************************
共通　ヘッダー
************************/
.site-header {
  width: 100%;
  background-color: #fff;
  border-bottom: 2px solid #000;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99;

  &__in {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  	width: 100%;
    height: 50px;
  }
}
@media screen and (min-width: 992px) {
  .site-header {
    &__in {
      height: 100px;
    }
  }
}

/************************
共通　ヘッダー ロゴ
************************/
.header__logo {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
	font-size: 28px;
}
@media screen and (min-width: 992px) {
	.header__logo {
    font-size: 38px;
    letter-spacing: 0.1em;
	}
}

/************************
共通　ヘッダー グロナビ
************************/
.header__gnavi {
  width: 100%;
  height: 100vh;
  color: #fff;
  background-color: #00629D;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: all 0.6s ease;

	nav {
    margin: 0 auto;
		width: 100%;
		height: 100vh;
    max-width: 1000px;
		padding: 20px;
	}

	ul.menu {
		display: flex;
		flex-wrap: wrap;

		li {
			flex: 0 0 100%;
			max-width: 100%;
			padding: 10px;
      text-align: center;

      a{
        display: block;
        border-bottom: 1px solid rgba(255, 255, 255, 0.7);
      }
		}
	}
}
@media screen and (min-width: 992px) {
  .header__gnavi {
    ul.menu {
      li {
        flex: 0 0 50%;
        max-width: 50%;
      }
    }
  }
}
.header__gnavi.naviOpen{
  opacity: 1;
  visibility: visible;
}

/************************
共通　ハンバーガーメニュー
************************/
#hamburger_button {
	display: block;
	margin: 0;
	padding: 0;
	width: 30px;
	height: 30px;
  background: none;
  border: 0;
	position: absolute;
	right: 20px;
	top: 50%;
  transform: translateY(-50%);
	z-index: 100;
	cursor: pointer;

	span {
		display: block;
		width: 30px;
		height: 1px;
		background-color: #000;
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);

		&::before,
		&::after {
			content: "";
			display: block;
			width: 100%;
			height: 1px;
			background-color: #000;
			position: absolute;
			left: 0;
			transition: 0.6s;
		}

		&::before {
			top: -10px;
		}

		&::after {
			top: 10px;
		}
	}
}
@media screen and (min-width: 992px) {
  #hamburger_button {
    width: 50px;
    height: 50px;

    span {
      width: 50px;
      height: 1px;

      &::before {
        top: -15px;
      }

      &::after {
        top: 15px;
      }
    }
  }
}

.menuOpen #hamburger_button {
	span {
		background-color: transparent;

		&::before {
			top: 0;
			transform: rotate(45deg);
		}

		&::after {
			top: 0;
			transform: rotate(-45deg);
		}
	}
}

</style>
