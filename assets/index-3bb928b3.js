import{n as i}from"./index-2f5a4727.js";const d={name:"Index",data(){return{list:[{img:"https://fp.yangcong345.com/shadow/shop--1-0f284f46d5f5d339039563dd553f98e2.jpeg",title:"3-in-1 トラベル三脚",key:"168"},{img:"https://fp.yangcong345.com/shadow/shop--2-6914d8020dfd1945d4317a8469b19270.jpeg",title:"KF50 ボールヘッド",key:"169"}]}},methods:{open(s){this.$router.push({path:"/detail",query:{key:s}})}}};var o=function(){var t=this,n=t._self._c;return n("main",{staticClass:"index-box"},[n("h2",[t._v("商品詳細です")]),n("div",{staticClass:"container"},t._l(t.list,function(e,a){return n("div",{key:a,staticClass:"margin-t-20 fz-16"},[n("figure",{on:{click:function(_){return t.open(e.key)}}},[n("img",{attrs:{src:e.img,loading:"lazy",decoding:"async"}}),n("figcaption",[n("p",[n("span",[t._v(t._s(e.title))]),n("span",[t._v("詳細を調べます ➡️ ")])])])])])}),0)])},c=[],r=i(d,o,c,!1,null,"5ddcd013",null,null);const p=r.exports;export{p as default};
