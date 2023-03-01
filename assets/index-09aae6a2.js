import{d as v,c as h,V as N,g as k,r as z,a as O,Y as y,a2 as j,C as T,k as f,y as A}from"./index-15c0dceb.js";import{b as C,u as I,i as p,d as _,H as L,P as d,X as E,Y,w as V}from"./index-c6447572.js";const q=C({prefixCls:{type:String}}),x=v({name:"ElSpaceItem",props:q,setup(e,{slots:l}){const r=I("space"),s=h(()=>`${e.prefixCls||r.b()}__item`);return()=>N("div",{class:s.value},k(l,"default"))}}),P={small:8,default:12,large:16};function B(e){const l=I("space"),r=h(()=>[l.b(),l.m(e.direction),e.class]),s=z(0),c=z(0),g=h(()=>{const t=e.wrap||e.fill?{flexWrap:"wrap",marginBottom:`-${c.value}px`}:{},a={alignItems:e.alignment};return[t,a,e.style]}),m=h(()=>{const t={paddingBottom:`${c.value}px`,marginRight:`${s.value}px`},a=e.fill?{flexGrow:1,minWidth:`${e.fillRatio}%`}:{};return[t,a]});return O(()=>{const{size:t="small",wrap:a,direction:o,fill:i}=e;if(y(t)){const[n=0,u=0]=t;s.value=n,c.value=u}else{let n;p(t)?n=t:n=P[t||"small"]||P.small,(a||i)&&o==="horizontal"?s.value=c.value=n:o==="horizontal"?(s.value=n,c.value=0):(c.value=n,s.value=0)}}),{classes:r,containerStyle:g,itemStyle:m}}const R=C({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},class:{type:_([String,Object,Array]),default:""},style:{type:_([String,Array,Object]),default:""},alignment:{type:_(String),default:"center"},prefixCls:{type:String},spacer:{type:_([Object,String,Number,Array]),default:null,validator:e=>j(e)||p(e)||T(e)},wrap:Boolean,fill:Boolean,fillRatio:{type:Number,default:100},size:{type:[String,Array,Number],values:L,validator:e=>p(e)||y(e)&&e.length===2&&e.every(p)}}),D=v({name:"ElSpace",props:R,setup(e,{slots:l}){const{classes:r,containerStyle:s,itemStyle:c}=B(e);function g(m,t="",a=[]){const{prefixCls:o}=e;return m.forEach((i,n)=>{E(i)?y(i.children)&&i.children.forEach((u,S)=>{E(u)&&y(u.children)?g(u.children,`${t+S}-`,a):a.push(f(x,{style:c.value,prefixCls:o,key:`nested-${t+S}`},{default:()=>[u]},d.PROPS|d.STYLE,["style","prefixCls"]))}):Y(i)&&a.push(f(x,{style:c.value,prefixCls:o,key:`LoopKey${t+n}`},{default:()=>[i]},d.PROPS|d.STYLE,["style","prefixCls"]))}),a}return()=>{var m;const{spacer:t,direction:a}=e,o=k(l,"default",{key:0},()=>[]);if(((m=o.children)!=null?m:[]).length===0)return null;if(y(o.children)){let i=g(o.children);if(t){const n=i.length-1;i=i.reduce((u,S,$)=>{const w=[...u,S];return $!==n&&w.push(f("span",{style:[c.value,a==="vertical"?"width: 100%":null],key:$},[j(t)?t:A(t,d.TEXT)],d.STYLE)),w},[])}return f("div",{class:r.value,style:s.value},i,d.STYLE|d.CLASS)}return o.children}}}),K=V(D),ee="/junde/assets/D-c71090bd.png",X="style-module__img___IUj3k",F="style-module__big___oaQHr",G="style-module__small___ojy6U",H="style-module__left___Ze23J",J="style-module__right___9VSps",b={img:X,big:F,small:G,left:H,right:J},te=v({props:{img:{type:String,required:!0},forward:{type:String,required:!0},mode:{type:String,default:"big"},size:{type:Object,required:!0},position:Object,style:Object,class:String},setup(e){return()=>{var l,r;return f("div",{style:{backgroundImage:`url('${e.img}')`,backgroundPositionX:(l=e.position)==null?void 0:l.x,backgroundPositionY:(r=e.position)==null?void 0:r.y,width:e.size.w,height:e.size.h,...e.style},class:`${b.img} ${b[e.forward]} ${b[e.mode]} ${e.class}`},null)}}}),U="style-module__left___wk6L2",W="style-module__right___JGxqz",Z={left:U,right:W},le=v({props:{mode:{type:String,required:!0},class:String,style:Object},emits:["click"],setup(e,{slots:l,emit:r}){return()=>{var s;return f("div",{class:`${Z[e.mode]} ${e.class}`,style:e.style,onClick:()=>{r("click")}},[(s=l.default)==null?void 0:s.call(l)])}}});export{ee as D,K as E,te as a,le as b};