(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{287:function(t,e,o){var content=o(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("238ea86b",content,!0,{sourceMap:!1})},322:function(t,e,o){"use strict";var n=o(2),r=o(323);n({target:"String",proto:!0,forced:o(324)("link")},{link:function(t){return r(this,"a","href",t)}})},323:function(t,e,o){var n=o(4),r=o(23),c=o(13),l=/"/g,_=n("".replace);t.exports=function(t,e,o,n){var d=c(r(t)),f="<"+e;return""!==o&&(f+=" "+o+'="'+_(c(n),l,"&quot;")+'"'),f+">"+d+"</"+e+">"}},324:function(t,e,o){var n=o(3);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},343:function(t,e,o){"use strict";o(287)},344:function(t,e,o){var n=o(43)(!1);n.push([t.i,'.posts__wrapper{margin-bottom:60px;padding:30px;background-color:#fffcf3}.post{display:flex;flex-wrap:wrap;justify-content:center;margin:0;padding:20px 0;font-size:15px;line-height:1.75;border-bottom:1px solid #eee}.post__img{margin:0;width:90%}.post__img figure{margin:0}.post__img img{display:block}.post__imgNone{display:flex;align-items:center;justify-content:center;width:100%;height:100%;max-height:182px;background-color:#fef9f9}.post__contents{width:100%}.post__categoryList{margin:10px 0}.post__category{display:inline-block;padding:3px 15px;font-size:12px;line-height:1;background-color:#e4ebf8;border-radius:3px}.post__category+.post__category{margin-left:5px}.post__title{margin-bottom:20px;padding:0 0 0 30px;font-size:24px;font-weight:700;position:relative}.post__title:after,.post__title:before{content:"";display:block;width:10px;height:10px;background-color:#eee;position:absolute;left:0;top:10px}.post__title:before{left:0;top:10px}.post__title:after{left:10px;top:20px}.post__content p{margin:1em 0;font-size:14px;line-height:1.5}.post__content p:first-child{margin-top:0}.post__content p:last-child{margin-bottom:0}@media screen and (min-width:768px){.post__img{width:30%}.post__contents{width:70%;padding:0 0 0 20px}}',""]),t.exports=n},353:function(t,e,o){"use strict";o.r(e);o(19),o(34),o(322);var n=o(278),r=o.n(n),c={name:"App07",data:function(){return{posts:[]}},created:function(){var t=this;r.a.get("https://markupnet.jp/wp-json/wp/v2/posts/?_embed").then((function(e){e.data.forEach((function(e){var data={title:e.title.rendered,content:e.excerpt.rendered,link:e.link,category:e._embedded["wp:term"],thumb:e._embedded["wp:featuredmedia"]};t.posts.push(data)}))})).catch((function(t){console.log("記事が取得できません。")}))}},l=(o(343),o(18)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("h2",{staticClass:"sectionTitle"},[t._v("axiosでAPI")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"loggic"},[o("h3",{},[t._v("以下はWordpressの記事↓↓↓↓")]),t._v(" "),o("div",{attrs:{id:"posts"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.posts.length,expression:"posts.length !== 0"}],staticClass:"posts"},[o("div",{staticClass:"posts__wrapper"},t._l(t.posts,(function(e){return o("article",{key:e.id,staticClass:"post"},[o("div",{staticClass:"post__img"},[e.thumb?o("figure",{staticClass:"thumb"},[o("img",{attrs:{src:e.thumb[0].source_url,alt:""}})]):o("span",{staticClass:"post__imgNone"},[t._v("\n                NO IMAGE\n              ")])]),t._v(" "),o("div",{staticClass:"post__contents"},[e.category[0]?o("div",{staticClass:"post__categoryList"},t._l(e.category[0],(function(e){return o("span",{key:e.id,staticClass:"post__category"},[o("a",{attrs:{href:e.link}},[t._v(t._s(e.name))])])})),0):t._e(),t._v(" "),o("a",{staticClass:"post__link",attrs:{href:e.link,target:"_blank"}},[o("h3",{staticClass:"post__title"},[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"post__content",domProps:{innerHTML:t._s(e.content)}})])])])})),0)])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"box"},[o("div",{staticClass:"leadTxt"},[o("p",[t._v("Wordpress（外部サイト）の記事を取得して表示")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"box"},[o("p",[t._v("参考サイト："),o("a",{attrs:{href:"https://qiita.com/naos_taira/items/25e20688277424f1cf45",target:"_blank"}},[t._v("https://qiita.com/naos_taira/items/25e20688277424f1cf45")])])])}],!1,null,null,null);e.default=component.exports}}]);