(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["goodsList"],{"0983":function(t,o,s){t.exports=s.p+"img/list-type.605d4ebb.svg"},"33f6":function(t,o,s){t.exports=s.p+"img/waterfall-type.0575742f.svg"},"3be3":function(t,o,s){"use strict";var n=s("b22e"),i=s.n(n);i.a},"6b8d":function(t,o,s){},9759:function(t,o,s){t.exports=s.p+"img/options-select.0e23a25a.svg"},b22e:function(t,o,s){},d2d3:function(t,o,s){"use strict";s.r(o);var n=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"goods-list-page"},[s("navgation-bar",{attrs:{pageName:"商品列表"},on:{onLeftClick:t.onBackClick},scopedSlots:t._u([{key:"nav-right",fn:function(){return[s("img",{attrs:{src:t.layoutType.icon},on:{click:function(o){return t.onChangelayoutTypeClick()}}})]},proxy:!0}])}),s("div",{staticClass:"goods-list-page-content",class:{"iphonex-bottom":t.isIphoneX}},[s("goods-options",{on:{optionsChange:t.onOptionsChange}}),s("goods",{attrs:{sort:t.sortType,layoutType:t.layoutType.type}})],1)],1)},i=[],e=s("7340"),a=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"goods-options  z-index-2"},[n("ul",{staticClass:"goods-options-list"},t._l(t.optionsDatas,function(o,s){return n("li",{key:s,staticClass:"goods-options-item"},[n("a",{staticClass:"goods-options-item-content",on:{click:function(n){return t.onOptionsItemClick(o,s)}}},[n("span",{staticClass:"goods-options-item-content-name",class:{"goods-options-item-content-name-active":t.selectOption.id===o.id}},[t._v(t._s(o.name))]),o.subs.length>0?n("span",{staticClass:"goods-options-item-content-caret caret",class:[t.isShowSubContent&&t.selectOption.id===o.id?"goods-options-item-content-caret-open":"goods-options-item-content-caret-close"]}):t._e()])])}),0),n("transition",{attrs:{name:"fold-height"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowSubContent,expression:"isShowSubContent"}],staticClass:"options-sub-content z-index-2"},[n("ul",{staticClass:"options-sub-content-list"},t._l(t.selectOption.subs,function(o,i){return n("li",{key:i,staticClass:"options-sub-content-list-item",on:{click:function(s){return t.onSubOptionsItemClick(o,i)}}},[n("a",{staticClass:"options-sub-content-list-item-content"},[n("span",{staticClass:"options-sub-content-list-item-content-name",class:{"options-sub-content-list-item-content-name-active":t.selectOption.id===o.id}},[t._v(t._s(o.name))]),n("img",{directives:[{name:"show",rawName:"v-show",value:t.selectOption.id===o.id,expression:"selectOption.id === item.id"}],staticClass:"options-sub-content-list-item-content-select",attrs:{src:s("9759"),alt:"",srcset:""}})])])}),0)])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowSubContent,expression:"isShowSubContent"}],staticClass:"cover",on:{click:function(o){t.isShowSubContent=!1}}})],1)},c=[],p=(s("7f7f"),s("ac6a"),{data:function(){return{optionsDatas:[{id:"1",name:"默认",subs:[{id:"1",name:"默认"},{id:"1-2",name:"价格由高到低"},{id:"1-3",name:"销量由高到低"}]},{id:"2",name:"有货优先",subs:[]},{id:"3",name:"直营优先",subs:[]}],selectOption:{},isShowSubContent:!1}},created:function(){this.selectOption=this.optionsDatas[0]},methods:{onOptionsItemClick:function(t,o){this.isShowSubContent?this.isShowSubContent=!1:(t.subs.length>0&&this.selectOption.id===t.id&&(this.isShowSubContent=!0),this.selectOption=t)},onSubOptionsItemClick:function(t,o){this.selectOption=t,this.optionsDatas.forEach(function(o){o.subs.forEach(function(s){s.id===t.id&&(o.id=s.id,o.name=s.name)})}),this.isShowSubContent=!1}},watch:{selectOption:function(t,o){this.$emit("optionsChange",t)}}}),l=p,u=(s("dfe5"),s("2877")),r=Object(u["a"])(l,a,c,!1,null,"28cd4157",null),d=r.exports,h=s("58b2"),m={name:"goodsList",components:{NavgationBar:e["a"],GoodsOptions:d,goods:h["a"]},data:function(){return{isIphoneX:window.isIphoneX,sortType:"1",layoutTypeDatas:[{type:"1",icon:s("0983")},{type:"2",icon:s("d628")},{type:"3",icon:s("33f6")}],layoutType:{}}},created:function(){this.layoutType=this.layoutTypeDatas[0]},methods:{onBackClick:function(){this.$router.go(-1)},onOptionsChange:function(t){this.sortType=t.id},onChangelayoutTypeClick:function(){"1"===this.layoutType.type?this.layoutType=this.layoutTypeDatas[1]:"2"===this.layoutType.type?this.layoutType=this.layoutTypeDatas[2]:this.layoutType=this.layoutTypeDatas[0]}}},y=m,f=(s("3be3"),Object(u["a"])(y,n,i,!1,null,"016bbdc0",null));o["default"]=f.exports},d628:function(t,o,s){t.exports=s.p+"img/grid-type.7f8e781b.svg"},dfe5:function(t,o,s){"use strict";var n=s("6b8d"),i=s.n(n);i.a}}]);
//# sourceMappingURL=goodsList.3996d68f.js.map