(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user"],{"16a4":function(t,n,e){"use strict";e.r(n);var i=e("1ac0"),r=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=r.a},"1ac0":function(t,n,e){"use strict";(function(t){e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("99af");var i={data:function(){return{listArr:[]}},onShow:function(){this.getData()},methods:{goDetail:function(t){uni.navigateTo({url:"/pages/detail/detail?cid=".concat(t.classid,"&id=").concat(t.id)})},getData:function(){var n=uni.getStorageSync("historyArr")||[];this.listArr=n,t("log",this.listArr," at pages/user/user.vue:44")}}};n.default=i}).call(this,e("0de9")["log"])},"21db":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.newsbox[data-v-6d46ffd4]{display:flex}.newsbox .pic[data-v-6d46ffd4]{width:%?230?%;height:%?160?%}.newsbox .pic uni-image[data-v-6d46ffd4]{width:100%;height:100%}.newsbox .text[data-v-6d46ffd4]{flex:1;padding-left:%?20?%;display:flex;flex-direction:column;justify-content:space-between}.newsbox .text .title[data-v-6d46ffd4]{font-size:%?36?%;color:#333;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.newsbox .text .info[data-v-6d46ffd4]{font-size:%?26?%;color:#999}.newsbox .text .info uni-text[data-v-6d46ffd4]{padding-right:%?30?%}',""]),t.exports=n},2306:function(t,n,e){"use strict";var i=e("c810"),r=e.n(i);r.a},"242d":function(t,n,e){"use strict";e.r(n);var i=e("a045"),r=e("16a4");for(var a in r)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("3f3d");var s=e("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"2c7c9c87",null,!1,i["a"],void 0);n["default"]=c.exports},"28e9":function(t,n,e){t.exports=e.p+"static/img/history.61946213.png"},"3f3d":function(t,n,e){"use strict";var i=e("f467"),r=e.n(i);r.a},"43e2":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.user .top[data-v-2c7c9c87]{padding:%?50?% 0;background:#f8f8f8;color:#666;display:flex;flex-direction:column;justify-content:center;align-items:center}.user .top uni-image[data-v-2c7c9c87]{width:%?150?%;height:%?150?%}.user .top .text[data-v-2c7c9c87]{font-size:%?38?%;padding-top:%?20?%}.user .content[data-v-2c7c9c87]{padding:%?30?%}.user .content .row[data-v-2c7c9c87]{border-bottom:1px dotted #efefef;padding:%?20?% 0}.user .nohistory[data-v-2c7c9c87]{display:flex;flex-direction:column;justify-content:center;align-items:center}.user .nohistory uni-image[data-v-2c7c9c87]{width:%?450?%}.user .nohistory .text[data-v-2c7c9c87]{font-size:%?26?%;color:#888}',""]),t.exports=n},"4e73":function(t,n,e){"use strict";e.r(n);var i=e("6e3e"),r=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=r.a},"6e3e":function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={name:"NewsBox",props:["item"],data:function(){return{}}}},a045:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var i={NewsBox:e("a75b").default},r=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"user"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-image",{attrs:{src:e("28e9"),mode:""}}),i("v-uni-view",{staticClass:"text"},[t._v("浏览历史")])],1),i("v-uni-view",{staticClass:"content"},t._l(t.listArr,(function(n){return i("v-uni-view",{staticClass:"row"},[i("NewsBox",{attrs:{item:n},nativeOn:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goDetail(n)}}})],1)})),1),t.listArr.length?t._e():i("v-uni-view",{staticClass:"nohistory"},[i("v-uni-image",{attrs:{src:e("b035"),mode:"widthFix"}}),i("v-uni-view",{staticClass:"text"},[t._v("暂无浏览记录")])],1)],1)},a=[]},a75b:function(t,n,e){"use strict";e.r(n);var i=e("d9bf"),r=e("4e73");for(var a in r)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("2306");var s=e("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"6d46ffd4",null,!1,i["a"],void 0);n["default"]=c.exports},b035:function(t,n,e){t.exports=e.p+"static/img/nohis.d1c11c02.png"},c810:function(t,n,e){var i=e("21db");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=e("4f06").default;r("6d4da362",i,!0,{sourceMap:!1,shadowMode:!1})},d9bf:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"newsbox"},[e("v-uni-view",{staticClass:"pic"},[e("v-uni-image",{attrs:{src:t.item.picurl,mode:"aspectFill"}})],1),e("v-uni-view",{staticClass:"text"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.item.title))]),e("v-uni-view",{staticClass:"info"},[e("v-uni-text",[t._v(t._s(t.item.author))]),e("v-uni-text",[t._v(t._s(t.item.hits)+"浏览")])],1)],1)],1)},r=[]},f467:function(t,n,e){var i=e("43e2");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=e("4f06").default;r("48571d56",i,!0,{sourceMap:!1,shadowMode:!1})}}]);