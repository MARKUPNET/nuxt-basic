(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3],{261:function(t,e,o){var content=o(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("5a1cf81e",content,!0,{sourceMap:!1})},262:function(t,e,o){"use strict";o(261)},263:function(t,e,o){var n=o(43)(!1);n.push([t.i,".modal__overlay{display:flex;align-items:center;justify-content:center;width:100vw;height:100vh;background:rgba(0,0,0,.7);position:fixed;left:0;top:0;z-index:99}.modal__main{padding:40px;width:90%;height:90%;max-width:1000px;max-height:500px;background-color:#fff;border-radius:20px;position:relative;z-index:100}.modal__closeButton{display:flex;align-items:center;justify-content:center;width:30px;height:30px;color:#fff;background-color:#000;border-radius:50%;position:absolute;right:10px;top:10px;z-index:101;cursor:pointer}.modal__closeButton:hover{color:#fff;text-decoration:none;opacity:1}",""]),t.exports=n},265:function(t,e,o){"use strict";o.r(e);var n={name:"Modal"},l=(o(262),o(23)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"modal",appear:""}},[o("div",{staticClass:"modal__overlay",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("clickEvent")}}},[o("div",{staticClass:"modal__main"},[t._t("default"),t._v(" "),o("button",{staticClass:"modal__closeButton",on:{click:function(e){return t.$emit("clickEvent")}}},[t._v("x")])],2)])])}),[],!1,null,null,null);e.default=component.exports},268:function(t,e,o){var content=o(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("397fc863",content,!0,{sourceMap:!1})},284:function(t,e,o){"use strict";o(268)},285:function(t,e,o){var n=o(43)(!1);n.push([t.i,".modal-enter-active,.modal-leave-active{transition:opacity .5s}.modal-enter,.modal-leave-to{opacity:0}",""]),t.exports=n},316:function(t,e,o){"use strict";o.r(e);var n={name:"App03",components:{Modal:o(265).default},data:function(){return{showContent:!1}},methods:{openModal:function(){this.showContent=!0},closeModal:function(){this.showContent=!1}}},l=(o(284),o(23)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("h2",{staticClass:"sectionTitle"},[t._v("モーダルウィンドウ")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"loggic"},[o("article",[o("button",{staticClass:"button",on:{click:t.openModal}},[t._v("モーダル1ひらく")]),t._v(" "),o("Modal",{directives:[{name:"show",rawName:"v-show",value:t.showContent,expression:"showContent"}],on:{clickEvent:t.closeModal}},[o("div",{staticClass:"modal__header"},[o("h3",[t._v("モーダルサンプル1です。")])]),t._v(" "),o("div",{staticClass:"modal__body"},[o("p",[t._v("ここに文章を入力します。")]),t._v(" "),o("p",{staticClass:"btnWrap"},[o("a",{staticClass:"btn_blue",attrs:{href:"/"}},[t._v("HOME")])])])])],1),t._v(" "),o("article",[o("button",{staticClass:"button",on:{click:t.openModal}},[t._v("モーダル2ひらく")]),t._v(" "),o("Modal",{directives:[{name:"show",rawName:"v-show",value:t.showContent,expression:"showContent"}],on:{clickEvent:t.closeModal}},[o("div",{staticClass:"modal__header"},[o("h3",[t._v("モーダルサンプル2です。")])]),t._v(" "),o("div",{staticClass:"modal__body"},[o("p",[t._v("ここに文章を入力します。")]),t._v(" "),o("p",{staticClass:"btnWrap"},[o("a",{staticClass:"btn_blue",attrs:{href:"/"}},[t._v("HOME")])])])])],1)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"box"},[o("code",[t._v("\n      ライブラリ使用無し\n    ")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"box"},[o("p",[t._v("参考サイト："),o("a",{attrs:{href:"https://reffect.co.jp/vue/understand-component-by-moda-window",target:"_blank"}},[t._v("https://reffect.co.jp/vue/understand-component-by-moda-window")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Modal:o(265).default})}}]);