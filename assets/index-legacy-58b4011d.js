System.register(["./index-legacy-d982f217.js"],(function(e,t){"use strict";var n,u,r,o,s,l,a,i,c,f,p,d,m,v,g,y,b,E,$,h,T,S,N,_,w,A,O,P;return{setters:[e=>{n=e.r,u=e.w,r=e.u,o=e.a1,s=e.K,l=e.G,a=e.o,i=e.O,c=e.a2,f=e.S,p=e.a3,d=e.a4,m=e.N,v=e.a5,g=e.F,y=e.Y,b=e.a6,E=e.q,$=e.c,h=e.d,T=e.b,S=e.i,N=e.j,_=e.n,w=e.h,A=e.U,O=e.g,P=e.p}],execute:function(){function t(e){for(var t=-1,n=null==e?0:e.length,u={};++t<n;){var r=e[t];u[r[0]]=r[1]}return u}var j;e({B:K,C:function(e){return v(e)&&!K(e)&&!function(e){return v(e)&&e.type===b}(e)},c:function(e,t=200,n=!1,u=!0,r=!1){return Y(function(e,t=!0,n=!0,u=!1){let r,o,s=0,l=!0,a=R;const i=()=>{r&&(clearTimeout(r),r=void 0,a(),a=R)},c=c=>{const f=x(e),p=Date.now()-s,d=()=>o=c();return i(),f<=0?(s=Date.now(),d()):(p>f&&(n||!l)?(s=Date.now(),d()):t&&(o=new Promise(((e,t)=>{a=u?t:e,r=setTimeout((()=>{s=Date.now(),l=!0,e(d()),i()}),Math.max(0,f-p))}))),n||r||(r=setTimeout((()=>l=!0),f)),l=!1,o)};return c}(t,n,u,r),e)},h:function(e,t=!0){l()?a(e):t?e():i(e)},k:function(e){return e},m:t,q:X,r:x,t:C,x:function(e,t,u={}){const{immediate:r=!0}=u,o=n(!1);let s=null;function l(){s&&(clearTimeout(s),s=null)}function a(){o.value=!1,l()}function i(...n){l(),o.value=!0,s=setTimeout((()=>{o.value=!1,s=null,e(...n)}),x(t))}return r&&(o.value=!0,D&&i()),C(a),{isPending:c(o),start:i,stop:a}},y:function(e,t=200,r={}){const o=n(e.value),s=function(e,t=200,n={}){return Y(function(e,t={}){let n,u,r=R;const o=e=>{clearTimeout(e),r(),r=R},s=s=>{const l=x(e),a=x(t.maxWait);return n&&o(n),l<=0||void 0!==a&&a<=0?(u&&(o(u),u=null),Promise.resolve(s())):new Promise(((e,i)=>{r=t.rejectOnCancel?i:e,a&&!u&&(u=setTimeout((()=>{n&&o(n),u=null,e(s())}),a)),n=setTimeout((()=>{u&&o(u),u=null,e(s())}),l)}))};return s}(t,n),e)}((()=>{o.value=e.value}),t,r);return u(e,(()=>s())),o}});const D=e("j","undefined"!=typeof window),L=(e("a",(e=>"boolean"==typeof e)),e("i",(e=>"number"==typeof e))),R=(e("g",(e=>"string"==typeof e)),e("n",(()=>{})));function x(e){return"function"==typeof e?e():r(e)}function Y(e,t){return function(...n){return new Promise(((u,r)=>{Promise.resolve(e((()=>t.apply(this,n)),{fn:t,thisArg:this,args:n})).then(u).catch(r)}))}}function C(e){return!!o()&&(s(e),!0)}e("l",D&&(null==(j=null==window?void 0:window.navigator)?void 0:j.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent));const F="__epPropKey",M=e("d",(e=>e)),k=e("o",((e,t)=>{if(!f(e)||f(n=e)&&n[F])return e;var n;const{values:u,required:r,default:o,type:s,validator:l}=e,a=u||l?n=>{let r=!1,s=[];if(u&&(s=Array.from(u),p(e,"default")&&s.push(o),r||(r=s.includes(n))),l&&(r||(r=l(n))),!r&&s.length>0){const e=[...new Set(s)].map((e=>JSON.stringify(e))).join(", ");d(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${e}], got value ${JSON.stringify(n)}.`)}return r}:void 0,i={type:s,required:!!r,validator:a,[F]:!0};return p(e,"default")&&(i.default=o),i})),B=e("b",(e=>t(Object.entries(e).map((([e,t])=>[e,k(t,e)]))))),G=e("w",((e,t)=>{if(e.install=n=>{for(const u of[e,...Object.values(null!=t?t:{})])n.component(u.name,u)},t)for(const[n,u]of Object.entries(t))e[n]=u;return e}));e("e",((e,t)=>(e.install=n=>{n.directive(t,e)},e))),e("z",(e=>(e.install=m,e))),e("p",["","default","small","large"]);var I=e("P",(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(I||{}));function K(e){return v(e)&&e.type===g}const H=e("A",(e=>{const t=y(e)?e:[e],n=[];return t.forEach((e=>{var t;y(e)?n.push(...H(e)):v(e)&&y(e.children)?n.push(...H(e.children)):(n.push(e),v(e)&&(null==(t=e.component)?void 0:t.subTree)&&n.push(...H(e.component.subTree)))})),n})),V=e("v",(e=>e)),U=Symbol(),q=Symbol("rowContextKey"),J=n();function X(e,t){const n=l()?E(U,J):J;return e?$((()=>{var u,r;return null!=(r=null==(u=n.value)?void 0:u[e])?r:t})):n}const z=e("s","el"),W=(e,t,n,u,r)=>{let o=`${e}-${t}`;return n&&(o+=`-${n}`),u&&(o+=`__${u}`),r&&(o+=`--${r}`),o},Q=e("u",(e=>{const t=X("namespace",z);return{namespace:t,b:(n="")=>W(t.value,e,n,"",""),e:n=>n?W(t.value,e,"",n,""):"",m:n=>n?W(t.value,e,"","",n):"",be:(n,u)=>n&&u?W(t.value,e,n,u,""):"",em:(n,u)=>n&&u?W(t.value,e,"",n,u):"",bm:(n,u)=>n&&u?W(t.value,e,n,"",u):"",bem:(n,u,r)=>n&&u&&r?W(t.value,e,n,u,r):"",is:(e,...t)=>{const n=!(t.length>=1)||t[0];return e&&n?`is-${e}`:""},cssVar:e=>{const n={};for(const u in e)e[u]&&(n[`--${t.value}-${u}`]=e[u]);return n},cssVarName:e=>`--${t.value}-${e}`,cssVarBlock:n=>{const u={};for(const r in n)n[r]&&(u[`--${t.value}-${e}-${r}`]=n[r]);return u},cssVarBlockName:n=>`--${t.value}-${e}-${n}`}}));var Z=e("_",((e,t)=>{const n=e.__vccOpts||e;for(const[u,r]of t)n[u]=r;return n}));const ee=B({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:M([Number,Object]),default:()=>V({})},sm:{type:M([Number,Object]),default:()=>V({})},md:{type:M([Number,Object]),default:()=>V({})},lg:{type:M([Number,Object]),default:()=>V({})},xl:{type:M([Number,Object]),default:()=>V({})}}),te=h({name:"ElCol"}),ne=h({...te,props:ee,setup(e){const t=e,{gutter:n}=E(q,{gutter:$((()=>0))}),u=Q("col"),o=$((()=>{const e={};return n.value&&(e.paddingLeft=e.paddingRight=n.value/2+"px"),e})),s=$((()=>{const e=[];return["span","offset","pull","push"].forEach((n=>{const r=t[n];L(r)&&("span"===n?e.push(u.b(`${t[n]}`)):r>0&&e.push(u.b(`${n}-${t[n]}`)))})),["xs","sm","md","lg","xl"].forEach((n=>{L(t[n])?e.push(u.b(`${n}-${t[n]}`)):f(t[n])&&Object.entries(t[n]).forEach((([t,r])=>{e.push("span"!==t?u.b(`${n}-${t}-${r}`):u.b(`${n}-${r}`))}))})),n.value&&e.push(u.is("guttered")),[u.b(),e]}));return(e,t)=>(T(),S(A(e.tag),{class:_(r(s)),style:w(r(o))},{default:N((()=>[O(e.$slots,"default")])),_:3},8,["class","style"]))}});e("f",G(Z(ne,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]])));const ue=B({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:["start","center","end","space-around","space-between","space-evenly"],default:"start"},align:{type:String,values:["top","middle","bottom"],default:"top"}}),re=h({name:"ElRow"}),oe=h({...re,props:ue,setup(e){const t=e,n=Q("row"),u=$((()=>t.gutter));P(q,{gutter:u});const o=$((()=>{const e={};return t.gutter?(e.marginRight=e.marginLeft=`-${t.gutter/2}px`,e):e})),s=$((()=>[n.b(),n.is(`justify-${t.justify}`,"start"!==t.justify),n.is(`align-${t.align}`,"top"!==t.align)]));return(e,t)=>(T(),S(A(e.tag),{class:_(r(s)),style:w(r(o))},{default:N((()=>[O(e.$slots,"default")])),_:3},8,["class","style"]))}});e("E",G(Z(oe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]])))}}}));