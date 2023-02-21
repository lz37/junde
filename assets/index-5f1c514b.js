import{B as G,a as Q}from"./index-23b26844.js";import{d as c,c as P,a6 as le,p as z,r as x,a7 as se,H as R,Z as D,b as ae,G as e,P as t,o as H,a2 as oe,w as ie,F as A,S as re,J as ce,T as de}from"./index-6ed02c51.js";import{D as L,a as E,b as T}from"./index-ee153f4a.js";import{h as $,l as ee,g as V,j as N,c as ue,P as f,G as X,H as me,w as ge,A as Y,B as v,C as pe,D as U}from"./index-36fb979d.js";const _e=$({prefixCls:{type:String}}),K=c({name:"ElSpaceItem",props:_e,setup(n,{slots:l}){const o=ee("space"),a=P(()=>`${n.prefixCls||o.b()}__item`);return()=>le("div",{class:a.value},z(l,"default"))}}),W={small:8,default:12,large:16};function fe(n){const l=ee("space"),o=P(()=>[l.b(),l.m(n.direction),n.class]),a=x(0),r=x(0),p=P(()=>{const i=n.wrap||n.fill?{flexWrap:"wrap",marginBottom:`-${r.value}px`}:{},d={alignItems:n.alignment};return[i,d,n.style]}),h=P(()=>{const i={paddingBottom:`${r.value}px`,marginRight:`${a.value}px`},d=n.fill?{flexGrow:1,minWidth:`${n.fillRatio}%`}:{};return[i,d]});return se(()=>{const{size:i="small",wrap:d,direction:g,fill:u}=n;if(R(i)){const[m=0,_=0]=i;a.value=m,r.value=_}else{let m;V(i)?m=i:m=W[i||"small"]||W.small,(d||u)&&g==="horizontal"?a.value=r.value=m:g==="horizontal"?(a.value=m,r.value=0):(r.value=m,a.value=0)}}),{classes:o,containerStyle:p,itemStyle:h}}const Ae=$({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},class:{type:N([String,Object,Array]),default:""},style:{type:N([String,Array,Object]),default:""},alignment:{type:N(String),default:"center"},prefixCls:{type:String},spacer:{type:N([Object,String,Number,Array]),default:null,validator:n=>D(n)||V(n)||ae(n)},wrap:Boolean,fill:Boolean,fillRatio:{type:Number,default:100},size:{type:[String,Array,Number],values:ue,validator:n=>V(n)||R(n)&&n.length===2&&n.every(V)}}),ve=c({name:"ElSpace",props:Ae,setup(n,{slots:l}){const{classes:o,containerStyle:a,itemStyle:r}=fe(n);function p(h,i="",d=[]){const{prefixCls:g}=n;return h.forEach((u,m)=>{X(u)?R(u.children)&&u.children.forEach((_,C)=>{X(_)&&R(_.children)?p(_.children,`${i+C}-`,d):d.push(e(K,{style:r.value,prefixCls:g,key:`nested-${i+C}`},{default:()=>[_]},f.PROPS|f.STYLE,["style","prefixCls"]))}):me(u)&&d.push(e(K,{style:r.value,prefixCls:g,key:`LoopKey${i+m}`},{default:()=>[u]},f.PROPS|f.STYLE,["style","prefixCls"]))}),d}return()=>{var h;const{spacer:i,direction:d}=n,g=z(l,"default",{key:0},()=>[]);if(((h=g.children)!=null?h:[]).length===0)return null;if(R(g.children)){let u=p(g.children);if(i){const m=u.length-1;u=u.reduce((_,C,J)=>{const F=[..._,C];return J!==m&&F.push(e("span",{style:[r.value,d==="vertical"?"width: 100%":null],key:J},[D(i)?i:t(i,f.TEXT)],f.STYLE)),F},[])}return e("div",{class:o.value,style:a.value},u,f.STYLE|f.CLASS)}return g.children}}}),te=ge(ve),ye="style-module__card___mrD4M",be="style-module__title___82A7f",he="style-module__content___Q1HIU",we="style-module__button___gXWsO",j={card:ye,title:be,content:he,button:we},Z=c({setup(n,{slots:l}){return()=>{var o,a;return e("div",{class:j.card},[e("div",{class:j.title},[(o=l.title)==null?void 0:o.call(l)]),e("div",{class:j.content},[(a=l.content)==null?void 0:a.call(l)]),e(G,{class:j.button,mode:"red",buttonStyle:{height:"58px"}},{default:()=>{var r;return[(r=l.buttonText)==null?void 0:r.call(l)]}})])}}}),Se="style-module__part___yN-zs",Ee="style-module__d-right___FqWYk",xe="style-module__d-left___Ae4Po",O={part:Se,"d-right":"style-module__d-right___FqWYk",dRight:Ee,"d-left":"style-module__d-left___Ae4Po",dLeft:xe},ke="/junde/assets/38-70a90196.png",Te="/junde/assets/40-f0975617.png";const w=c({props:{timeout:{type:Number,default:1e3},mode:{type:String,required:!0},style:Object,class:String},setup(n,{slots:l}){const o=x(!1);return H(()=>{setTimeout(()=>{o.value=!0},n.timeout)}),()=>e("div",{style:n.style,class:n.class},[e(oe,{name:n.mode},{default:()=>{var a;if(o.value)return e("div",null,[(a=l.default)==null?void 0:a.call(l)])}})])}}),ne=c({setup(n,{slots:l}){const o=re(),a=x(!1),r=P(()=>o.state.isMobile);return ie(r,p=>{a.value=p},{immediate:!0,deep:!0}),()=>{var p;return e(A,null,[!a.value&&((p=l.default)==null?void 0:p.call(l))])}}}),Pe=c({setup(){return()=>e("div",{class:O.part},[e(ne,null,{default:()=>[e(w,{mode:"slide-fade",class:O.dLeft},{default:()=>[e("img",{src:L,alt:"d-left"},null)]}),e(w,{mode:"slide-fade",class:O.dRight},{default:()=>[e("img",{src:L,alt:"d-right"},null)]})]}),e(Y,{style:{marginTop:"127px"}},{default:()=>[e(v,{lg:12,md:24,sm:24,xs:24},{default:()=>[e(w,{mode:"nested"},{default:()=>[e(Z,null,{title:()=>e(A,null,[t("Scale your development team with"),e("b",null,[t(" self-motivated developers")])]),content:()=>e(A,null,[t("JUNDE's ODC is a tested and proven method that could speed up hiring process, be your trusted and strategic software development partner.")]),buttonText:()=>e(A,null,[t("Build your offshore development center")])})]})]}),e(v,{lg:12,md:0,sm:0,xs:0},{default:()=>[e("div",null,[e(w,{timeout:1e3,mode:"slide-fade"},{default:()=>[e(E,{img:ke,forward:"right",position:{x:"-40px"},size:{w:"557px",h:"520px"}},null)]})])]})]}),e(Y,{style:{marginTop:"120px"}},{default:()=>[e(v,{lg:12,md:0,sm:0,xs:0},{default:()=>[e("div",null,[e(w,{timeout:1e3,mode:"slide-fade"},{default:()=>[e(E,{img:Te,forward:"left",position:{y:"0px"},size:{w:"558px",h:"500px"}},null)]})])]}),e(v,{lg:12,md:24,sm:24,xs:24},{default:()=>[e(w,{mode:"nested"},{default:()=>[e(Z,null,{title:()=>e(A,null,[t("Proven approach for "),e("b",null,[t("autonomous development team")]),t(" in JUNDE's ODC")]),content:()=>e(A,null,[t("JUNDE is remote-working pioneer and all developers are full-time employee working under JUNDE's circumstances.")]),buttonText:()=>e(A,null,[t("Learn more about offshore development")])})]})]})]})])}}),Re="style-module__background___yF-Vm",Ce="style-module__holder___wfTw5",Ne="style-module__text___DIKhb",Ue="style-module__img___zgL2d",je="style-module__frame___jK9GZ",k={background:Re,holder:Ce,text:Ne,img:Ue,frame:je},Ie="/junde/assets/1092-c3031318.png",Me="style-module__card___QZ1fi",Ve="style-module__card-large___p8bxA",Ye="style-module__icon-place___bPenI",De="style-module__title___9o1qP",Oe="style-module__content___Hma8q",y={card:Me,"card-large":"style-module__card-large___p8bxA",cardLarge:Ve,"icon-place":"style-module__icon-place___bPenI",iconPlace:Ye,title:De,content:Oe},Be="/junde/assets/Construction-8fd4c758.png",Ge="/junde/assets/E-Commerce-644077b3.png",Qe="/junde/assets/Education-9cad216d.png",qe="/junde/assets/Engineering-283bc999.png",Je="/junde/assets/Financial_Platform-610c1065.png",Fe="/junde/assets/Self-storage_Management-831780ce.png",Le="/junde/assets/Sports-ce684a7a.png",Xe={"E-Commerce":Ge,Construction:Be,"Financial Platform":Je,"Self-storage Management":Fe,Education:Qe,Sports:Le,Engineering:qe},Ke=c({props:{title:{type:String,required:!0}},setup(n,{slots:l}){const o=x(!1);return()=>{var a;return e("div",{class:o.value?y.cardLarge:y.card,onMouseenter:()=>{o.value=!0},onMouseleave:()=>{o.value=!1}},[e("div",{class:y.iconPlace},[e("img",{class:y.icon,src:Xe[n.title],alt:y.title},null)]),e("p",{class:y.title},[n.title]),e(A,null,[o.value?e("div",{class:y.content},[(a=l.default)==null?void 0:a.call(l)]):e("div",null,null)])])}}});function We(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!D(n)}const Ze=c({setup(){const n=ce([{title:"E-Commerce",info:"BI and Data Testing, JUNDE helped target consumer and improved platform wide UX with a cross-function team of 6 self-motivated members."},{title:"Construction",info:"A distributed team with 8 members covering from UI/UX to 3D design. From zero to full product launch."},{title:"Financial Platform",info:"Management efficiency improved with 5 remote-working developers."},{title:"Self-storage Management",info:"System used for students’ management, it is evolved agile development practices helped customized the solution for different schools. Up to 24+ education districts are using it, behind this are 4 remote-working developers."},{title:"Education",info:"1. : Maintain and enhance an existing live product to help add robustness and reliability 24x7."},{title:"Sports",info:"Basketball Community, Racing Track, cloud based and over 5,000 registered members, 52% annual saving in development."},{title:"Engineering",info:"JUNDE provided a combined and distributed development team to improved their internal processes and throughput efficiency."}]);let l;return H(()=>{setInterval(()=>{l?(n.push(l),l=void 0):l=n.shift()},1e3)}),()=>{let o;return e(de,{tag:"ul",name:"carousel"},We(o=n.map(a=>e(Ke,{title:a.title,class:"cards",key:a.title},{default:()=>[a.info]})))?o:{default:()=>[o]})}}}),ze=c({setup(){return()=>e(Q,{mode:"blue",class:k.background},{default:()=>[e("div",{class:k.holder},[e(Y,{style:{position:"relative",top:"147px"}},{default:()=>[e(v,{lg:12,md:24,sm:24,xs:24},{default:()=>[e("p",{class:k.text,style:{marginTop:"13px"}},[t("We empower our "),e("br",null,null),e("b",null,[t("cross-all-industry clients")]),e("br",null,null),t("with self-motivated developers for over a decade")])]}),e(ne,null,{default:()=>[e(v,{lg:12,md:0,sm:0,xs:0},{default:()=>[e("img",{src:Ie,alt:"img 1092",class:k.img},null)]})]})]}),e(Ze,{class:k.frame},null)])]})}}),He="style-module__card___0Hn3V",$e="style-module__title___zbE6D",et="style-module__content___xhSqK",B={card:He,title:$e,content:et},S=c({props:{img:{type:String,required:!0},iPosition:Object},setup(n,{slots:l}){return()=>{var o,a;return e("div",{class:B.card},[e(E,{forward:"right",img:n.img,size:{w:"264px",h:"168px"},position:n.iPosition,mode:"small"},null),e("div",{class:B.title},[(o=l.title)==null?void 0:o.call(l)]),e("div",{class:B.content},[(a=l.content)==null?void 0:a.call(l)])])}}}),tt="style-module__background___S6W3u",nt="style-module__title1___cekXq",lt="style-module__title2___IagCb",st="style-module__cards___etv--",I={background:tt,title1:nt,title2:lt,cards:st},at="/junde/assets/42-f5206c2a.png",ot="/junde/assets/43-8ad56c7c.png",it="/junde/assets/19-5099ce59.png",rt="/junde/assets/6-23955b8c.png",ct="/junde/assets/44-8973fd20.png",dt="/junde/assets/8-e63ad694.png",ut=c({setup(){return()=>e("div",{class:I.background},[e("div",{class:I.title1},[t("Proven approach. Build your offshore development center")]),e("div",{class:I.title2},[t("Great collaboration leads to "),e("b",null,[t("effective solutions")])]),e(te,{wrap:!0,class:I.cards},{default:()=>[e(S,{img:at},{title:()=>e("div",null,[e("b",null,[t("Talent developers")]),t(" are permanent in JUNDE")]),content:()=>e("p",null,[t("We are not hiring agent, nor a developer’s marketplace. JUNDE offers the permanent positions for all our developers. 50% of them have been with us over a decade.")])}),e(S,{img:ot},{title:()=>e("div",null,[e("b",null,[t("Remote working")]),t(" pioneer and expert")]),content:()=>e("p",null,[t("Remote working promotes the developers to be proactive and creative in development work. We are distributed, with over 150 people working from 20+ cities.")])}),e(S,{img:it},{title:()=>e("div",null,[t("Our manager provides "),e("b",null,[t("customer-care service")])]),content:()=>e("p",null,[t("Each step during the engagement, our Account Owner and Account Manager stays focused on your business goal, backing you to succeed with everything we’ve got.")])}),e(S,{img:rt,iPosition:{x:"-32px",y:"-16px"}},{title:()=>e("div",null,[t("Everything is "),e("b",null,[t("fully Transparent")]),t(" to you")]),content:()=>e("p",null,[t("Transparency. You can interview our developer from the beginning, we adopt your development methodologies and tools, without the unnecessary administration and overhead costs.")])}),e(S,{img:ct},{title:()=>e("div",null,[t("You retain "),e("b",null,[t("full ownership of IP")]),t(" and")," ",e("b",null,[t("invention rights")])]),content:()=>e("p",null,[t("JUNDE does not retain any IP of the software code or creative ideas. We have a long history of protecting clients from any breaches in IP for 10+ years.")])}),e(S,{img:dt,iPosition:{x:"-32px",y:"-16px"}},{title:()=>e("div",null,[e("b",null,[t("1-week Risk-Free")]),t(" for Easy Start")]),content:()=>e("p",null,[t("Share with us the needs that requires further development, you’ll able to try our ODC risk-free for one week to learn about our working method, all before signing a contract.")])})]})])}}),mt="style-module__background___Fq4e9",gt="style-module__holder___R3w1Y",pt="style-module__title___EpzYr",_t="style-module__button___1kd2x",M={background:mt,holder:gt,title:pt,button:_t},ft="data:image/png;base64,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",At="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA6CAYAAAADZ1FRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANbSURBVHgB5ZpPTttAFMbfmNhrjgCLUlBYlBukR+gJWo7ArhIsggRVpW7gBu4N6AkKJ6gX/GtZdDhBvamKRD2v81IGgXHimfiN//GTQoxjS/nme555nx1YvXg/0q8leEaI4fftGAS8vfs/1a8EEVNEdS1EkIJSUgHILMvSq/VPCfQAsX6xM8IF/OpwTgqIEoRIUQ+G3r5+ODC3t7dSbhyk0GIE/Rn+2CbRI+DjycAIFKnSg4MC05ubm6TJgZmInsNtHv4PjDSXUwAL0gyM/lRern2U4AFhNjy4zUNuYDjmmXvRjbnNg9M8Ix6eqd3+qd+WoJ9MBiZTwVbwaLeAQ+gvi4hwcrm2d/xIdDgIYyoR6Ccy+hONaeOR6GR5nAqleul2COGbZGM8MTTIfziIooO+uY0odpOV8f0s/0R0D92W5y/3xg93BEVHDVQUQ08Is/B1fl+h6GRtrNc6+AIdZ1LWpCVHMO0EocQBdJsnZW2YKvpUr2f67Rg6iNATcVFZG4KZJ2diFzoIZlhY1gYBJbQ2iEwnPlvZ35x1wEynCQT8DN1B6rIurc5Sp4nh1c4vPRUuQsvRBm2er3yIy44rdZroSLMS2wgmrER3oDW1KmuDlei2t6Z6idqcNVvnsRJNtNVtVHh4+mLSU1hjLZrc1veo2jaT32dkF6xFE1EWtao1pa7LZGQXnETfXTfH0AKmhQkbnEQTLWlNp4YJG5xFtyGIzAoTNjiLJpp0u0pZG6za0CKaCCK6zTzRXdcIKjKX03dfoO7lS+rV4x0wMLfTRJ1BxDZM2DC300SNrWnMJZioJLqm1tQpTNhQSXQdQUSXdeXZOk8l0YRnt1nL2lBZtMcgIsPf4RZ4oLJowkcQmWTkOcKEDSyiuYMIdV2uGdkFFtEEY2taKUzYwCaaK4hUDRM2sIkmqrrNESZsqNSGFjG82v6mF9dX4I7UTyaWoQZYnSYQ0blZKXvgxg276CiMjlyblbIHbtywi3ZtTbXLR2er+7XecGQXTTi0pnLwd+Cl65qFF9G2bvsIEzZ4EU1YuO0lTNjgTTS5DQqn/ViHPSO74E00IZSIi/Y3VdYGr6KLWlN64NZUWRu8iiZyrelcD9y4YW9DizD3yPV1vNxkWRsGUAPktgrgpA2Cny3/ANPJ3eTbVhRJAAAAAElFTkSuQmCC",vt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAAAsCAYAAAAO5BTdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATPSURBVHgB7ZtbUhtHGIVPd49EhdgV7YBROclr4DHBDtJbikCQVwBeAXgFwAoMK7C0gshl4sqbhAPxo8Vz7EjsQKm4XGWh7vb/tywVEkLXEeLS3wOaadCgOXPq9N8XCVxDMm/K4aczPS8hQiGQEFLOcbsFEvQjAYGqAKquzZhTa+lcmJKRtvpq8fsSrhkCUyZVKCdmlc5IJeYBuSQsQvpUiebvrbWnTlDRELUTEpgehJjraCtCmBOtbdFqVfoznaxgikxFZBb2Xhyb5MoUOTXFbSwmvRQFRMkaVIIYSvkfBxeH3V+vs+Cgh2X5mvSwxA+Na6NIjn+htcxPQ/ArFXnl9bsMpNpkYdmdFvYEVuTV18jmF5JVRAwLrw09RGszJPgat7Hgxujcq5+/zeKKmLjITddSDGw1YsAeTlLYy8i8LSf0R2To/2/QbS9RU0VrvWu0Kk7a3RMT+by45FzutPIUA7mDR8kipoyLFm13KMvX6bRirNn/4+GDPUyIiYi88tc/KSGD53QYWpj9YFbuXKVrB6VTbHb2JGIkUpF/KZRD6rCeNzoze6ik2Bim85oWHWJnz2rYjTJCIhP5tzen61abPSFRNcDTg5+SedwwVo/LG2SQbeocEaWrxxaZs/f+DLbBHRvlrprFk+sYDYPS5mqLvZcPk08xJmOJ7OIhjt8lZ6/FLn2giXUeV83q3+UtEvkZmbpUr+HxOPExssgscCyOAlcO0uJxfjF57Yaz48KuNhYFjg/K6fSoQkuMwHKhPN8SWCB9GwVmuNPm++P75PtdPi7PYwSGFpkFVjEncFV+hYWbUD2MgxP6ExZ4hKowmtBDxcW5iGCB0ze5gxuWDHXwhu6dkiOk6FgYJjoGFrktg9nBd0jgJk7oGbwdNqMHigsu09oy+A4KzOTTyWozo7mqYl0Ged9AInMdTNdNOIFveQb3w2U0VVNctt6P49kg7+kr8uqRqxe3uA6+6wI34WqKEoMHKRu/Hr3f6vf3PTPZ5XCMMkiY3MHig74Xu2usHL/fE5Dr/TrCnk7m3OG5CJ5Fg+cCQU3ucKXFk2K9/u5SkZdfv9sgm88bfbPnIiYJd4SsD8869oqNrnHRLNfosPhyMfkEnp6sHP2bpQmltf9rSBbTFw3Z1cmxGVrRoGpCSezC05fgTGyxW+8FpqubL4jMLuZqwhiz76uJwcg33LsvpNzsVjtfEDmI8VwqLckHMgvPwMga9i5zc5vI7GJJ2UILnnnv4uHo5eY2kaXSKd4KpRT24RkadjO9JDrd3CayUmqbXrLexaPh3Cx4i5hcO9/eEvnLPGloTT0Hz8hYjV3eKsbbIpptLZGltbwJpXLw6LsiPCPDm3fcBkkpM822lshUTC+53ZCesTEwOZrTaEWGE7kVFRov4BkfI3nPScgLsXzacLLWbt3qg/ZOjoKgDrewfKaNiwwnslIyY4097Dbu9gxPs8qQQrr90U5kCzFHPd+tXNafFtaaE3pJ8bHkxUGe0oSWRXgiw2hn2pBHf7IeoLGPQNR9VESJUi4ZZuMIJVXPbpz9oR74uIiQeA0Vd6Ddt7j4W0eo+k4vWrjz40GJkCIhqevjTK7AEznG2v9oFB0GsCLBJ/BEDrm4TPp+M9KuTs9wUL3c/m1OT7TQIC/5Ga37H2VxS+MeAAAAAElFTkSuQmCC",yt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAA+CAYAAAC7rUKSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALMSURBVHgB7ZrNbhJRFMf/5w6amEiqcSUrVlPplq2JPED7AGybCi/g3nbvnjA17oQHqA+giUvZGGKFB4C1wZVx5njupRhKh68OhXuS/hOYOx+Q3zk558zMvYewRPz1OI89Uwbkk8NjxLwv4zwMP792YUJDEA9kNAKjD076CEyPDqIh7kiUdpC/n5RhIMBUgaEQWZSwGEIdBGht2pD/8M7DTx5UxHuHcrSMu5A1xBpROv+EDcjB8+VJFRzUZJTHNsQYSNhFWY0g7tYvbsTvtuSMSM6o9L6DW4j4R+0bdq04aeNXEtHLD6N1fmbggwJTxdPcR3HkWhHgB7wVoSBfLcm/lYuFP/BOUjDYNPny9eEqV3sGfyWm01UM8BPeyhmwOIT8hbfi4N2iJPYb3uUAmu7unyLP4TGuQnumlnbKf3gruQ+kxb8OeKvEvJ09pAdewoe78gA5JT3wViaoTSevLnhbfZ4FryZ7yuBhXzePJkN98PKWN6k8+uCtYqMY3nDFbaBSFNqqoxReJHNJeuGhGV5m7/TCM+8rhjeKPU9cUJywauv8WPfwOxHTQLPnh4rheaQ4bNBXDJ8ohs+bXg4qxX0qnitN2JjcGpZO+DxadqMwbMYhY0capz5ak6EueMJgeuFZ23RfNL2naZZ4MLvcr8jzwdnsER3wjDaVGjf6E/wvlWSbK/5Gaaf8hica4RHXqZjeUOF52Jg3VJzfHeWv53N8SmFjYR+On5534Mu7oPzyvI1xGypLPD6RP/C2qrjkbKzcAegHvNRxWw7nVZV5EngSS3fUIGe9LXdOOmjcrkHOfnG3fiSpW9uaES62EVGp2UYGXetovTJClsg5WxfrPNnOVpNcgOIv9GK9EElTejvuz+MC4lxVPFTObgj1ZTr6s4RHJ+35JNM/L7vAGcIPQ8RJiMCESFwDTyG1EdpgJKA9JPgNYzqgP51NeHie/gF89ucaNjVcVwAAAABJRU5ErkJggg==",q=[{img:ft,x:88,y:20},{img:At,x:95,y:90},{img:vt,x:5,y:100},{img:yt,x:0,y:20}],bt=q.map(n=>`url('${n.img}')`).join(","),ht=q.map(n=>n.x).join("%,")+"%",wt=q.map(n=>n.y).join("%,")+"%",St=c({setup(){return()=>e(Q,{mode:"dark",class:M.background,style:{background:`${bt},linear-gradient(180deg, #405285 0%, #2b3b65 100%)`,backgroundRepeat:"no-repeat",backgroundPositionX:ht,backgroundPositionY:wt}},{default:()=>[e("div",{class:M.holder},[e("div",{class:M.title},[e("b",null,[t("Schedule a call")]),e("br",null,null),t("with client-success-manager to build your team")]),e("div",{class:M.button},[e(G,{mode:"red"},{default:()=>[t("Build your offshore development center")]})])])]})}}),Et="style-module__background___tx3mb",xt="style-module__holder___tcERK",kt="style-module__title1___FwXXM",Tt="style-module__title2___cYqO3",Pt="style-module__text___Dx4YH",Rt="style-module__menu___rCYrG",Ct="style-module__menu-title___ka0Nr",Nt="style-module__imgs___9vka-",Ut="style-module__img___0-KXw",jt="style-module__and-we-have___FuR5O",It="style-module__cards___0V4FY",Mt="style-module__card___aMUPb",Vt="style-module__card-title___9CzY3",Yt="style-module__card-content___Xe-UF",Dt="style-module__question___T6BvS",Ot="style-module__button-holder___G55eD",Bt="style-module__button___Jgr8B",s={background:Et,holder:xt,title1:kt,title2:Tt,text:Pt,menu:Rt,"menu-title":"style-module__menu-title___ka0Nr",menuTitle:Ct,imgs:Nt,img:Ut,"and-we-have":"style-module__and-we-have___FuR5O",andWeHave:jt,cards:It,card:Mt,"card-title":"style-module__card-title___9CzY3",cardTitle:Vt,"card-content":"style-module__card-content___Xe-UF",cardContent:Yt,question:Dt,"button-holder":"style-module__button-holder___G55eD",buttonHolder:Ot,button:Bt},Gt="/junde/assets/14807-d77606bd.png",Qt="/junde/assets/18-261ba18a.png",qt="/junde/assets/20-ec11806e.png",Jt="/junde/assets/32-aa189bcc.png",Ft=c({setup(){const n=x("1"),l=(o,a)=>{console.log(o,a)};return()=>e(Q,{mode:"light",class:s.background},{default:()=>[e("div",{class:s.holder},[e("div",{class:s.title1},[t("Our company culture")]),e("div",{class:s.title2},[e("b",null,[t("Remote working")]),t(" practitioners. Value-driven philosophy.")]),e(Y,{style:{marginTop:"60px"}},{default:()=>[e(v,{lg:12,md:24,sm:24,xs:24},{default:()=>[e("div",{class:s.text},[t("Self-motivated developer grows and stays in collaborative and inspirational working culture. "),e("br",null,null),t("Over decade, we have been practicing the remote-working, empower our employee to focus the values created for clients, in a productively way. We have it named “Offshore Development Center”, which is tested and proved to be an effective approach for collaboration with you, then create “software with true value” together."),e("br",null,null),t(" We believe in the loyalty employee on JUNDE is as important as the loyalty our clients on us, we create and maintain this company to be:")])]}),e(v,{lg:12,md:0,sm:0,xs:0},{default:()=>[e("img",{src:Gt,alt:"img14807"},null)]})]}),e(pe,{defaultActive:n.value,mode:"horizontal",onSelect:l,class:s.menu},{default:()=>[e(U,{index:"1"},{default:()=>[e("span",{class:s.menuTitle},[t("Integrity")])]}),e(U,{index:"2"},{default:()=>[e("span",{class:s.menuTitle},[t("Transparency")])]}),e(U,{index:"3"},{default:()=>[e("span",{class:s.menuTitle},[t("Diversity")])]}),e(U,{index:"4"},{default:()=>[e("span",{class:s.menuTitle},[t("People First")])]})]}),e("div",{class:s.imgs},[e(E,{forward:"left",img:Qt,size:{h:"460px",w:"460px"},class:s.img},null),e(E,{forward:"right",img:qt,size:{h:"320px",w:"362px"},class:s.img,style:{left:"534px"}},null),e(E,{forward:"left",img:Jt,size:{h:"400px",w:"460px"},class:s.img,style:{left:"926px"}},null)]),e("div",{class:s.andWeHave},[t("And we have")]),e("div",{class:s.cards},[e(T,{mode:"left",class:s.card},{default:()=>[e("div",{class:s.cardTitle},[t("100+")]),e("div",{class:s.cardContent},[t("Clients working with us 5+ years")])]}),e(T,{mode:"right",class:s.card},{default:()=>[e("div",{class:s.cardTitle},[t("95%")]),e("div",{class:s.cardContent},[t("Employees be with us 5+ years")])]}),e(T,{mode:"left",class:s.card},{default:()=>[e("div",{class:s.cardTitle},[t("150+")]),e("div",{class:s.cardContent},[t("Remote working developers")])]}),e(T,{mode:"right",class:s.card},{default:()=>[e("div",{class:s.cardTitle},[t("0")]),e("div",{class:s.cardContent},[t("Intellectual property rights dispute")])]})]),e("div",{class:s.question},[t("JUNDE has been running for over 12 years, would like to know further?")]),e("div",{class:s.buttonHolder},[e(G,{mode:"red",class:s.button},{default:()=>[t("Find More About JUNDE")]})])])]})}}),Lt="style-module__background___lYEjY",Xt="style-module__to-join___Hdo5-",Kt="style-module__expertise___95e20",Wt="style-module__cards___I0VFT",Zt="style-module__card-holder___v9ie7",zt="style-module__card___O-Wqo",Ht="style-module__card-title___QaKqx",b={background:Lt,"to-join":"style-module__to-join___Hdo5-",toJoin:Xt,expertise:Kt,cards:Wt,"card-holder":"style-module__card-holder___v9ie7",cardHolder:Zt,card:zt,"card-title":"style-module__card-title___QaKqx",cardTitle:Ht},$t="/junde/assets/Full-stack_engineers-fbd32a19.png",en="/junde/assets/Web_and_mobile-0415209e.png",tn="/junde/assets/Business_intelligence-38e0392f.png",nn="/junde/assets/Financial_and_security-2a2dce08.png",ln="/junde/assets/UI_UX-faead7e9.png",sn="/junde/assets/DevOps-0f336f7f.png",an="/junde/assets/QA_Testing-07c68279.png";function on(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!D(n)}const rn=[{title:"Full-stack engineers",img:$t,alt:"fullStackEngineers",bg:"rgb(225, 107, 200,0.1)"},{title:"Web and mobile",img:en,alt:"webAndMobile",bg:"rgb(243, 246, 250)"},{title:"Business intelligence",img:tn,alt:"businessIntelligence",bg:"rgb(244, 113, 18,0.1)"},{title:"Financial and security",img:nn,alt:"financialAndSecurity",bg:"rgb(60, 173, 112,0.1)"},{title:" UI/UX",img:ln,alt:"ui_ux",bg:"rgb(232, 104, 90,0.1)"},{title:"DevOps",img:sn,alt:"devOps",bg:"rgb(77, 197, 223,0.1)"},{title:"QA/Testing",img:an,alt:"qa_testing",bg:"rgb(198, 87, 237,0.1)"}],cn=c({setup(){return()=>{let n;return e("div",{class:b.background},[e("div",{class:b.toJoin},[t("Pre-vetted experts. Ready to join")]),e("div",{class:b.expertise},[t("The expertise we have us to standby")]),e(te,{class:b.cards,wrap:!0},on(n=rn.map(l=>e("div",{class:b.cardHolder},[e(T,{class:b.card,mode:"right",style:{background:l.bg}},{default:()=>[e("img",{src:l.img,alt:l.alt,style:{marginTop:"20px"}},null)]}),e("div",{class:b.cardTitle},[l.title])])))?n:{default:()=>[n]})])}}}),dn="style-module__home___-1-ZL",un={home:dn},fn=c({setup(){return()=>e("div",{class:un.home},[e(Pe,null,null),e(ze,null,null),e(ut,null,null),e(St,null,null),e(Ft,null,null),e(cn,null,null)])}});export{fn as default};
