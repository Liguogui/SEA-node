webpackJsonp([3],{570:function(t,i,e){e(623);var n=e(9)(e(636),e(610),"data-v-c3d51a64",null);t.exports=n.exports},580:function(t,i,e){"use strict";function n(){var t=r()({},l.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,loginUin:0,hostUin:0,platform:"yqq",needNewCode:0});return e.i(o.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,l.c)}function s(t){var i=r()({},l.b,{loginUin:0,hostUin:0,platform:"yqq",needNewCode:0,singermid:t,order:"listen",begin:0,num:100,songstatus:1});return e.i(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",i,l.c)}i.b=n,i.a=s;var a=e(90),r=e.n(a),o=e(200),l=e(56)},585:function(t,i,e){i=t.exports=e(562)(!0),i.push([t.i,".listview[data-v-53a9f452]{position:relative;width:100%;height:100%;overflow:hidden;background:#222}.listview .list-group[data-v-53a9f452]{padding-bottom:30px}.listview .list-group .list-group-title[data-v-53a9f452]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.listview .list-group .list-group-item[data-v-53a9f452]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:20px 0 0 30px}.listview .list-group .list-group-item .avatar[data-v-53a9f452]{width:50px;height:50px;border-radius:50%}.listview .list-group .list-group-item .name[data-v-53a9f452]{margin-left:20px;color:hsla(0,0%,100%,.5);font-size:14px}.listview .list-shortcut[data-v-53a9f452]{position:absolute;z-index:30;right:0;top:50%;transform:translateY(-50%);width:20px;padding:20px 0;border-radius:10px;text-align:center;background:rgba(0,0,0,.3);font-family:Helvetica}.listview .list-shortcut .item[data-v-53a9f452]{padding:3px;line-height:1;color:hsla(0,0%,100%,.5);font-size:12px}.listview .list-shortcut .item.current[data-v-53a9f452]{color:#ffcd32}.listview .list-fixed[data-v-53a9f452]{position:absolute;top:0;left:0;width:100%}.listview .list-fixed .fixed-title[data-v-53a9f452]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.listview .loading-container[data-v-53a9f452]{position:absolute;width:100%;top:50%;transform:translateY(-50%)}","",{version:3,sources:["E:/resetMusic/resetMusic/src/base/listview/listview.vue"],names:[],mappings:"AACA,2BACE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,eAAiB,CAClB,AACD,uCACE,mBAAqB,CACtB,AACD,yDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAA6B,AAC7B,eAAiB,CAClB,AACD,wDACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,qBAAuB,CACxB,AACD,gEACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,8DACE,iBAAkB,AAClB,yBAA6B,AAC7B,cAAgB,CACjB,AACD,0CACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,QAAS,AACT,2BAA4B,AAC5B,WAAY,AACZ,eAAgB,AAChB,mBAAoB,AACpB,kBAAmB,AACnB,0BAA4B,AAC5B,qBAAuB,CACxB,AACD,gDACE,YAAa,AACb,cAAe,AACf,yBAA6B,AAC7B,cAAgB,CACjB,AACD,wDACE,aAAe,CAChB,AACD,uCACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,UAAY,CACb,AACD,oDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAA6B,AAC7B,eAAiB,CAClB,AACD,8CACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,0BAA4B,CAC7B",file:"listview.vue",sourcesContent:["\n.listview[data-v-53a9f452] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #222;\n}\n.listview .list-group[data-v-53a9f452] {\n  padding-bottom: 30px;\n}\n.listview .list-group .list-group-title[data-v-53a9f452] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .list-group .list-group-item[data-v-53a9f452] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 20px 0 0 30px;\n}\n.listview .list-group .list-group-item .avatar[data-v-53a9f452] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.listview .list-group .list-group-item .name[data-v-53a9f452] {\n  margin-left: 20px;\n  color: rgba(255,255,255,0.5);\n  font-size: 14px;\n}\n.listview .list-shortcut[data-v-53a9f452] {\n  position: absolute;\n  z-index: 30;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  padding: 20px 0;\n  border-radius: 10px;\n  text-align: center;\n  background: rgba(0,0,0,0.3);\n  font-family: Helvetica;\n}\n.listview .list-shortcut .item[data-v-53a9f452] {\n  padding: 3px;\n  line-height: 1;\n  color: rgba(255,255,255,0.5);\n  font-size: 12px;\n}\n.listview .list-shortcut .item.current[data-v-53a9f452] {\n  color: #ffcd32;\n}\n.listview .list-fixed[data-v-53a9f452] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.listview .list-fixed .fixed-title[data-v-53a9f452] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .loading-container[data-v-53a9f452] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}"],sourceRoot:""}])},592:function(t,i,e){i=t.exports=e(562)(!0),i.push([t.i,".singer[data-v-c3d51a64]{position:fixed;top:88px;bottom:0;left:0;right:0}","",{version:3,sources:["E:/resetMusic/resetMusic/src/pages/singer/singer.vue"],names:[],mappings:"AACA,yBACE,eAAgB,AAChB,SAAU,AACV,SAAU,AACV,OAAQ,AACR,OAAS,CACV",file:"singer.vue",sourcesContent:["\n.singer[data-v-c3d51a64] {\n  position: fixed;\n  top: 88px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}"],sourceRoot:""}])},594:function(t,i,e){e(616);var n=e(9)(e(625),e(603),"data-v-53a9f452",null);t.exports=n.exports},603:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("scroll",{ref:"listview",staticClass:"listview",attrs:{data:t.data,listenScroll:t.listenScroll},on:{scroll:t.handleScroll}},[e("ul",t._l(t.data,function(i){return e("li",{ref:"listGroup",refInFor:!0,staticClass:"list-group"},[e("h2",{staticClass:"list-group-title"},[t._v(t._s(i.title))]),t._v(" "),e("ul",t._l(i.items,function(i){return e("li",{key:i.mid,staticClass:"list-group-item",on:{click:function(e){t.selectItem(i)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.imgUrl,expression:"item.imgUrl"}],staticClass:"avatar"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(i.name))])])}))])})),t._v(" "),e("div",{staticClass:"list-shortcut",on:{touchstart:t.onShortcutTouchStart,touchmove:function(i){i.stopPropagation(),i.preventDefault(),t.onShortcutTouchMove(i)}}},[e("ul",t._l(t.shortcutList,function(i,n){return e("li",{staticClass:"item",class:{current:t.currentIndex===n},attrs:{"data-index":n}},[t._v("\n         "+t._s(i)+"\n      ")])}))]),t._v(" "),e("div",{ref:"fixed",staticClass:"list-fixed"},[e("h1",{directives:[{name:"show",rawName:"v-show",value:t.fixedTitle,expression:"fixedTitle"}],staticClass:"fixed-title"},[t._v("\n      "+t._s(t.fixedTitle)+"\n    ")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.data.length,expression:"!data.length"}],staticClass:"loading-container"},[e("loading")],1)])},staticRenderFns:[]}},610:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"singer",staticClass:"singer"},[e("list-view",{ref:"list",attrs:{data:t.singers},on:{selectItem:t.selectSinger}}),t._v(" "),e("router-view")],1)},staticRenderFns:[]}},616:function(t,i,e){var n=e(585);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(563)("0afa544e",n,!0)},623:function(t,i,e){var n=e(592);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(563)("ad1f8232",n,!0)},625:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(66),s=e.n(n),a=e(199),r=e.n(a),o=e(127);i.default={props:{data:{type:Array,default:[]}},created:function(){this.touch={},this.listenScroll=!0,this.listHeight=[]},data:function(){return{scrollY:-1,currentIndex:0,diff:-1}},computed:{shortcutList:function(){return this.data.map(function(t){return t.title.substr(0,1)})},fixedTitle:function(){return this.scrollY>0?"":this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},components:{Scroll:s.a,Loading:r.a},methods:{selectItem:function(t){this.$emit("selectItem",t)},onShortcutTouchStart:function(t){var i=e.i(o.b)(t.target,"index"),n=t.touches[0];this.touch.y1=n.pageY,this.touch.anchorIndex=i,this._scrollTo(i)},onShortcutTouchMove:function(t){var i=t.touches[0];this.touch.y2=i.pageY;var e=Math.floor((this.touch.y2-this.touch.y1)/18),n=parseInt(this.touch.anchorIndex)+e;this._scrollTo(n)},handleScroll:function(t){this.scrollY=t.y},refresh:function(){this.$refs.listview.refresh()},_scrollTo:function(t){(t||0===t)&&(t<0?t=0:t>this.listHeight.length-2&&(t=this.listHeight.length-2),this.scrollY=-this.listHeight[t],this.$refs.listview.scrollToElement(this.$refs.listGroup[t]))},_calculateHeight:function(){this.listHeight=[];var t=this.$refs.listGroup,i=0;this.listHeight.push(i);for(var e=0;e<t.length;e++){i+=t[e].clientHeight,this.listHeight.push(i)}}},watch:{data:function(){var t=this;setTimeout(function(){t._calculateHeight()},20)},scrollY:function(t){var i=this.listHeight;if(t>0)return void(this.currentIndex=0);for(var e=0;e<i.length-1;e++){var n=i[e],s=i[e+1];if(-t>=n&&-t<s)return this.currentIndex=e,void(this.diff=s+t)}this.currentIndex=i.length-2},diff:function(t){var i=t>0&&t<30?t-30:0;this.fixedTop!==i&&(this.fixedTop=i,this.$refs.fixed.style.transform="translate3d(0,"+i+"px,0)")}}}},636:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(57),s=e.n(n),a=e(210),r=e(594),o=e.n(r),l=e(580),A=e(56),c=e(37),u=e(89);i.default={mixins:[u.c],data:function(){return{singers:[]}},components:{ListView:o.a},created:function(){this._getSingerList()},methods:s()({handlePlayList:function(t){var i=t.length>0?"60px":"";this.$refs.singer.style.bottom=i,this.$refs.list.refresh()},selectSinger:function(t){this.$router.push({path:"/singer/"+t.mid}),this.setSinger(t)},_getSingerList:function(){var t=this;e.i(l.b)().then(function(i){i.code===A.a&&(t.singers=t._nomalizeSinger(i.data.list))})},_nomalizeSinger:function(t){var i={hot:{title:"热门",items:[]}};t.forEach(function(t,e){e<10&&i.hot.items.push(new a.a({mid:t.Fsinger_mid,name:t.Fsinger_name}));var n=t.Findex;i[n]||(i[n]={title:n,items:[]}),i[n].items.push(new a.a({mid:t.Fsinger_mid,name:t.Fsinger_name}))});var e=[],n=[],s=/[a-zA-Z]/g;for(var r in i){var o=i[r];o.title.match(s)?n.push(o):"热门"===o.title&&e.push(o)}return n.sort(function(t,i){return t.title.charCodeAt(0)-i.title.charCodeAt(0)}),e.concat(n)}},e.i(c.b)({setSinger:"SET_SINGER"}))}}});
//# sourceMappingURL=3.b14f9957f765411486a6.js.map