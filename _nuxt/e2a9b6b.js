(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{319:function(t,e,n){"use strict";n.r(e);var r=n(270),l=n.n(r),c={name:"Home",data:function(){return{posts:""}},mounted:function(){var t=this;l.a.get("https://markupnet.jp/wp-json/wp/v2/posts?_embed").then((function(e){return t.posts=e.data}))}},o=n(23),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("div",{staticClass:"page-container"},[t._m(0),t._v(" "),n("div",{staticClass:"block"},[n("ul",{staticClass:"sideBar_list"},t._l(t.posts,(function(e,i){return n("li",{key:i},[n("a",{attrs:{href:e.link}},[n("time",{attrs:{datetime:e.date}},[t._v(t._s(t._f("dateFilter")(e.date)))]),t._v(" "),n("p",{staticClass:"sideBar_listItemLinkTxt"},[t._v(t._s(e.title.rendered))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(e.content.rendered)}})])])})),0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mainVisual_top"},[e("div",{staticClass:"inner"})])}],!1,null,null,null);e.default=component.exports}}]);