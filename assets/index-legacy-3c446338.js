System.register(["./index-legacy-012e50e8.js","./1075-legacy-8f531fa8.js","./index-legacy-2be03acc.js","./index-legacy-5e011f04.js","./index-legacy-c042f06e.js","./index-legacy-fc6ef16b.js"],(function(e,t){"use strict";var l,o,n,a,s,i,r,p,d,u,A,f,c,m,g,h,y,b,v,x,w,E,B,_,C,U,S,R,Q,k,O,I,j,M,H,F,T,J,P,N,Y,D,G,z,V,W,q,X,Z,L,K,$,ee,te,le,oe,ne,ae,se,ie,re=document.createElement("style");return re.textContent=".style-module__title___IxFBj{font-family:Poppins;font-style:normal;font-weight:700;font-size:48px;line-height:72px;color:#fff}.style-module__sub-title___IqKQk{max-width:656px;font-family:Poppins;font-style:normal;font-weight:400;font-size:18px;line-height:32px;color:#fff}.style-module__divider-vertical___t7ZZ8{width:695px;opacity:.1;border:1px solid #ffffff;transform:rotate(90deg);margin-top:375px;margin-left:-330px}.style-module__divider___7fHqg{opacity:.1;border:1px solid #ffffff}.style-module__tel___6ucU8{margin-top:32px;font-family:Poppins;font-style:normal;font-weight:700;font-size:32px;line-height:48px;color:#fff}.style-module__leave-msg___rowGJ{margin-top:8px;font-family:Poppins;font-style:normal;font-weight:400;font-size:18px;line-height:32px;color:#fff}.style-module__holder-left___iL7XR{margin-left:-32px}.style-module__text-left___ysErQ{margin-right:32px;font-family:Poppins;font-style:normal;font-weight:400;font-size:18px;line-height:32px;color:#fff}.style-module__subtitle-left___Ekfb2{font-family:Poppins;font-style:normal;font-weight:600;font-size:18px;line-height:32px;color:#fff}.style-module__skill-sets___tNlYg{margin-top:69px}.style-module__foot-title___wBBpl{font-family:Poppins;font-style:normal;font-weight:600;font-size:18px;line-height:32px;color:#fff}.style-module__foot-content___ZSej-{margin-top:24px;font-family:Poppins;font-style:normal;font-weight:400;font-size:18px;line-height:32px;color:#fff}.style-module__location___dWqi-{margin-right:50px;color:#fff;text-decoration-line:underline;cursor:pointer}.style-module__bottom___ZDpHz{margin-top:45px;display:flex;justify-content:space-between}.style-module__bottom-content___5VAd4{font-family:Poppins;font-style:normal;font-weight:400;font-size:12px;line-height:18px;color:#fff;opacity:.5}.style-module__pop-container___ZjTl9{padding:24px}.style-module__pop-title___-Z04w{font-family:Poppins;font-style:normal;font-weight:700;font-size:20px;line-height:32px;color:#333e63}.style-module__pop-loc___s-Sqy,.style-module__pop-tel___F2KPX,.style-module__pop-email___i2lal{margin-top:12px;word-break:keep-all;font-family:Poppins;font-style:normal;font-weight:400;font-size:18px;line-height:32px;color:#333e63}.style-module__line___DxgHN{display:flex}.style-module__menu-background-shadow___db9kT{box-shadow:0 4px 24px rgba(0,0,0,.12)}.style-module__menu___rhmWq{min-width:650px;height:122px;background:#ffffff;border:none;border:none!important}.style-module__menu-item___2mXNK{margin-left:50px;background-color:#fff!important;border:none!important}.style-module__menu-text___fCmyj{font-family:Poppins;font-style:normal;font-weight:500;font-size:20px;line-height:32px;flex:none;order:0;flex-grow:0}.style-module__sub-menu-text___m4aN9{padding:16px 15.5px 16px 24px;font-family:Poppins;font-style:normal;font-weight:500;font-size:16px;line-height:32px}.style-module__button-holder___PQcK-{width:100%;display:flex;justify-content:flex-end}.style-module__button___v4dpT{margin-top:42px}.style-module__red-arrow___1CkF0{margin-left:25.5px;margin-bottom:8px}.style-module__blank-arrow___y-BRJ{margin-left:25.5px;margin-bottom:8px;width:24px;display:inline-block}\n",document.head.appendChild(re),{setters:[e=>{l=e.d,o=e.s,n=e.r,a=e.c,s=e.w,i=e.o,r=e.a,p=e.b,d=e.e,u=e.f,A=e.g,f=e.n,c=e.u,m=e.h,g=e.i,h=e.j,y=e.T,b=e.k,v=e.l,x=e.m,e.p,e.q,e.t,w=e.v,E=e.x,B=e.y,_=e.F,C=e.z,U=e.A,S=e.R,R=e.B},e=>{Q=e.i},e=>{k=e.C,O=e.u,I=e.a,j=e.b,M=e.t,H=e.g,F=e.c,T=e.d,J=e.E,P=e.i,N=e.e,Y=e.D,D=e.B},e=>{G=e.b,z=e.d,V=e.i,W=e.a,q=e.u,X=e._,Z=e.w,L=e.c,K=e.e,$=e.E,ee=e.f},e=>{te=e.B},e=>{le=e.u,oe=e.a,ne=e.E,ae=e.b,se=e.c,ie=e.d}],execute:function(){const t=G({zIndex:{type:z([Number,String]),default:100},target:{type:String,default:""},offset:{type:Number,default:0},position:{type:String,values:["top","bottom"],default:"top"}}),re={scroll:({scrollTop:e,fixed:t})=>V(e)&&W(t),[k]:e=>W(e)},pe="ElAffix",de=l({name:pe}),ue=l({...de,props:t,emits:re,setup(e,{expose:t,emit:l}){const g=e,h=q("affix"),y=o(),b=o(),v=o(),{height:x}=O(),{height:w,width:E,top:B,bottom:_,update:C}=I(b,{windowScroll:!1}),U=I(y),S=n(!1),R=n(0),Q=n(0),k=a((()=>({height:S.value?`${w.value}px`:"",width:S.value?`${E.value}px`:""}))),T=a((()=>{if(!S.value)return{};const e=g.offset?j(g.offset):0;return{height:`${w.value}px`,width:`${E.value}px`,top:"top"===g.position?e:"",bottom:"bottom"===g.position?e:"",transform:Q.value?`translateY(${Q.value}px)`:"",zIndex:g.zIndex}})),J=()=>{if(v.value)if(R.value=v.value instanceof Window?document.documentElement.scrollTop:v.value.scrollTop||0,"top"===g.position)if(g.target){const e=U.bottom.value-g.offset-w.value;S.value=g.offset>B.value&&U.bottom.value>0,Q.value=e<0?e:0}else S.value=g.offset>B.value;else if(g.target){const e=x.value-U.top.value-g.offset-w.value;S.value=x.value-g.offset<_.value&&x.value>U.top.value,Q.value=e<0?-e:0}else S.value=x.value-g.offset<_.value};return s(S,(e=>l("change",e))),i((()=>{var e;g.target?(y.value=null!=(e=document.querySelector(g.target))?e:void 0,y.value||M(pe,`Target is not existed: ${g.target}`)):y.value=document.documentElement,v.value=H(b.value,!0),C()})),F(v,"scroll",(()=>{C(),l("scroll",{scrollTop:R.value,fixed:S.value})})),r(J),t({update:J,updateRoot:C}),(e,t)=>(p(),d("div",{ref_key:"root",ref:b,class:f(c(h).b()),style:m(c(k))},[u("div",{class:f({[c(h).m("fixed")]:S.value}),style:m(c(T))},[A(e.$slots,"default")],6)],6))}}),Ae=Z(X(ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/affix/src/affix.vue"]])),fe={visibilityHeight:{type:Number,default:200},target:{type:String,default:""},right:{type:Number,default:40},bottom:{type:Number,default:40}},ce={click:e=>e instanceof MouseEvent},me="ElBacktop",ge=l({name:me}),he=l({...ge,props:fe,emits:ce,setup(e,{emit:t}){const l=e,s=q("backtop"),{handleClick:r,visible:u}=((e,t,l)=>{const a=o(),s=o(),r=n(!1),p=L((()=>{a.value&&(r.value=a.value.scrollTop>=e.visibilityHeight)}),300,!0);return F(s,"scroll",p),i((()=>{var t;s.value=document,a.value=document.documentElement,e.target&&(a.value=null!=(t=document.querySelector(e.target))?t:void 0,a.value||M(l,`target does not exist: ${e.target}`),s.value=a.value)})),{visible:r,handleClick:e=>{var l;null==(l=a.value)||l.scrollTo({top:0,behavior:"smooth"}),t("click",e)}}})(l,t,me),w=a((()=>({right:`${l.right}px`,bottom:`${l.bottom}px`})));return(e,t)=>(p(),g(y,{name:`${c(s).namespace.value}-fade-in`},{default:h((()=>[c(u)?(p(),d("div",{key:0,style:m(c(w)),class:f(c(s).b()),onClick:t[0]||(t[0]=v(((...e)=>c(r)&&c(r)(...e)),["stop"]))},[A(e.$slots,"default",{},(()=>[b(c(J),{class:f(c(s).e("icon"))},{default:h((()=>[b(c(T))])),_:1},8,["class"])]))],6)):x("v-if",!0)])),_:3},8,["name"]))}}),ye=Z(X(he,[["__file","/home/runner/work/element-plus/element-plus/packages/components/backtop/src/backtop.vue"]]));const be=G({trigger:le.trigger,effect:{...oe.effect,default:"light"},type:{type:z(String)},placement:{type:z(String),default:"bottom"},popperOptions:{type:z(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:z([Number,String]),default:0},maxHeight:{type:z([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:z(Object)},teleported:oe.teleported});G({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:P}}),G({onKeydown:{type:z(Function)}}),N.down,N.pageDown,N.home,N.up,N.pageUp,N.end,(e=>{const t=`El${e}Collection`,l=`${t}Item`,o=Symbol(t),n=Symbol(l)})("Dropdown");const ve=G({trigger:le.trigger,placement:be.placement,disabled:le.disabled,visible:oe.visible,transition:oe.transition,popperOptions:be.popperOptions,tabindex:be.tabindex,content:oe.content,popperStyle:oe.popperStyle,popperClass:oe.popperClass,enterable:{...oe.enterable,default:!0},effect:{...oe.effect,default:"light"},teleported:oe.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),xe={"update:visible":e=>W(e),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},we=l({name:"ElPopover"}),Ee=l({...we,props:ve,emits:xe,setup(e,{expose:t,emit:l}){const o=e,s=a((()=>o["onUpdate:visible"])),i=q("popover"),r=n(),u=a((()=>{var e;return null==(e=c(r))?void 0:e.popperRef})),m=a((()=>[{width:j(o.width)},o.popperStyle])),y=a((()=>[i.b(),o.popperClass,{[i.m("plain")]:!!o.content}])),b=a((()=>o.transition===`${i.namespace.value}-fade-in-linear`)),v=()=>{l("before-enter")},_=()=>{l("before-leave")},C=()=>{l("after-enter")},U=()=>{l("update:visible",!1),l("after-leave")};return t({popperRef:u,hide:()=>{var e;null==(e=r.value)||e.hide()}}),(e,t)=>(p(),g(c(ne),w({ref_key:"tooltipRef",ref:r},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":c(y),"popper-style":c(m),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":c(b),"onUpdate:visible":c(s),onBeforeShow:v,onBeforeHide:_,onShow:C,onHide:U}),{content:h((()=>[e.title?(p(),d("div",{key:0,class:f(c(i).e("title")),role:"title"},E(e.title),3)):x("v-if",!0),A(e.$slots,"default",{},(()=>[B(E(e.content),1)]))])),default:h((()=>[e.$slots.reference?A(e.$slots,"reference",{key:0}):x("v-if",!0)])),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var Be=X(Ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);const _e=(e,t)=>{const l=t.arg||t.value,o=null==l?void 0:l.popperRef;o&&(o.triggerRef=e)},Ce=K({mounted(e,t){_e(e,t)},updated(e,t){_e(e,t)}},"popover"),Ue=Z(Be,{directive:Ce}),Se=l({setup:()=>()=>b(ye,{bottom:100,style:{width:"64px",height:"64px"}},{default:()=>[b("img",{src:Q,alt:"1075",style:{transform:"rotate(180deg)"}},null)]})}),Re="style-module__title___IxFBj",Qe="style-module__sub-title___IqKQk",ke="style-module__divider-vertical___t7ZZ8",Oe="style-module__divider___7fHqg",Ie="style-module__tel___6ucU8",je="style-module__leave-msg___rowGJ",Me="style-module__holder-left___iL7XR",He="style-module__text-left___ysErQ",Fe="style-module__subtitle-left___Ekfb2",Te="style-module__skill-sets___tNlYg",Je="style-module__foot-title___wBBpl",Pe="style-module__foot-content___ZSej-",Ne="style-module__location___dWqi-",Ye="style-module__bottom___ZDpHz",De="style-module__bottom-content___5VAd4",Ge="style-module__pop-container___ZjTl9",ze="style-module__pop-title___-Z04w",Ve="style-module__pop-loc___s-Sqy",We="style-module__pop-tel___F2KPX",qe="style-module__pop-email___i2lal",Xe=["Ruby","Python","PHP","React","Node.js"],Ze=[{reference:"SuZhou",loc:b(_,null,[B("10-301, Creative Industry Park, 328 Xinghu Street,"),b("br",null,null),B(" SIP Suzhou, Jiangsu, 215123 China")]),tel:b(_,null,[B("4000-632-978")]),email:b(_,null,[B("sales@jundesoftware.com")])},{reference:"Beijing",loc:b(_,null,[B("Beijing Sun Flower Tower,17th Floor,37 Maizidian"),b("br",null,null),B("St,Chaoyang,Beijing,China 100125")]),tel:b(_,null,[B("4000-632-978")]),email:b(_,null,[B("sales@jundesoftware.com")])},{reference:"Shanghai",loc:b(_,null,[B("Room 209, #5 Building, No. 1999 FengHong Road,"),b("br",null,null),B(" Minghang District, Shanghai")]),tel:b(_,null,[B("4000-632-978")]),email:b(_,null,[B("sales@jundesoftware.com")])}],Le=l({setup:()=>()=>b(te,{mode:"dark",style:{position:"relative"}},{default:()=>[b($,null,{default:()=>[b(ee,{span:15},{default:()=>[b("div",{class:Re},[B("Get in Touch")]),b("div",{class:Qe},[B("Tell us how we can assist you and one of our experienced thought leaders will get in touch shortly.")]),b("hr",{class:Oe,style:{marginTop:"25px",width:"90%",marginLeft:"0px"}},null),b("div",{class:Ie},[B("Tel：4000-632-978")]),b("div",{class:je},[B("Or leave a messgae")]),b(Y,null,null)]}),b(ee,{span:2},{default:()=>[b("hr",{class:ke},null)]}),b(ee,{span:7},{default:()=>[b("div",{class:Me},[b("img",{src:"data:image/png;base64,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",alt:"logo"},null),b("p",{class:He},[B("JUNDE provides our clients self-motivated developer to power the team, and be dedicated. At the same time, we create “Flat, Flexible, Comfortable, Target-Driven” working environment, where the developer can be self-managed and dedicated to work, manifested in the practices on “remote-working”.")]),b("p",{class:He},[B("JUNDE is remote-working pioneer and practitioner over 12 years. As a subsidiary of Shinetech, created in 2011, and has been serving for over 100 multi-national clients with ODC service.")]),b("div",{class:Te},[b("div",{class:Fe},[B("Skillsets we used")]),b("p",{class:He},[Xe.map((e=>b("span",{style:{marginRight:"20px"}},[e])))])])])]})]}),b("hr",{class:Oe,style:{marginTop:"64px"}},null),b($,{style:{marginTop:"60px"}},{default:()=>[b(ee,{span:8},{default:()=>[b("div",null,[b("div",{class:Je},[B("Locations")]),b("div",{class:Pe},[Ze.map((e=>b(Ue,{placement:"top-start",content:"1",trigger:"hover",width:345,popperStyle:{borderRadius:"15px",boxShadow:"0px 0px 16px rgba(0, 0, 0, 0.24);"}},{reference:b("a",{class:Ne},[e.reference]),default:b("div",{class:Ge},[b("div",{class:ze},[e.reference]),b("div",{class:Ve},[e.loc]),b("div",{class:We},[B("Tel: "),e.tel]),b("div",{class:qe},[B("Email: "),e.email])])})))])])]}),b(ee,{span:6},{default:()=>[b("div",null,[b("div",{class:Je},[B("Email")]),b("div",{class:Pe},[B("jiny@shinetechchina.com")])])]}),b(ee,{span:6},{default:()=>[b("div",null,[b("div",{class:Je},[B("Awards")]),b("div",{class:Pe},[b("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAgCAYAAAB+ZAqzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUASURBVHgBzZhbbJRFFMfP9kK3pVVQ0YoWvGKCt8iDJCqixEtQY5Dok7doDInwqiZqjDHeYuKL8QWCFpV4i4aIpoEQFWOEqg8iiAoaFasIVSmFlm2h3Q7/f+cMTM/Ot7sEQjjJr983M2fOzDdzzpnZinPuI1dZrpDjLDVygkod6Ac94JREewEMgHqs2qmJ9t5cLldEWw7vTcCBQdSNSIZAN4/HONUdgO5wSi8HxUl4ng2+UuOxLANPAW7lkkT/ewEHugdcpB/6J1hNfU5aJ9OIxyxwJ5gOOCYn/5eO+xp0/0l9RRvoS/jWK9o+P8P3loChRP1+sCiskOoVXbZsAq3xnKr1MW73z8Au+wJt4yq5qJ5b9RAGo/0nVC+MtQc8A94W7yqUS8HiklErrZjqTAL9pr0DjAf0wTdN2zYwHQyY+rvUHt3ow6h+EJwZxquTo5M18I19OtCmRDv9KR+VuUK/8QX9OJl38boB/AG6QO+xmthAhXbrKtzuYlReCT7Rd0b2gdBQx20Q7xO5hOFa58ObxhoSOvXan/X2I1m3U7xfhjbamAo2avlBcH/UZxFdA8/N3IK3QC8YcaWyD+wCT6qOFfrlMqVg2g6AHrDS1G8BDIzHtD32yS36/gu/5CRwsqSlScln6DRrey1otKsJJoJHwARwjfitZb5banQLqrdcy22c2FbwpZSX38vo/KSTSLVzO3mq3Co+Gd8GzhN/ytA9doFvwTvgC/AcmAs6GBq1kvavWGikNqPNaf+8PodkbL4rMgJHFf1Y1OMucfUY0XvjI4w+i/JQTgvT8Jgv1Qv7tYtfqZvBTeAc8UG0W3wyZipYF02KfZhIrwfXgtPEH0vd4ld7BXR3jv1k5x52RyZMhgvUYbOEgfM6GOd8Al7oSpNtEAbedjBPP+DQxF5wRyY894aq1G0HT4PhKnRp85awJaMpQ7xzBqFTZiVPBkyrqWNiXKz9aOcC075ffA4Lsh28D3gE3Q7GR22/jm41JsUk22FW40bnz8YUz5qv5DY87/yBTXuzXfaWhVWZEfwOvJTQWVijDjs5mvFe8SF+ifjQvQNcJ95Z+8AcsxqMrDeiyFoHvpNs2aCIBka72o3lbm5LXgcNwkT5gfjLY73W0QAP2K/BxcYII6krFHgjxRczKq+StHSGSFXZoTZaorppnBgzd3NUSV841xijLzKLz5VSob/Ye1q3ZMvfpsy8Z1espUYHbEwYKMjhi1w54dbbO35fBf1Y2NcGWgMnxhl/Jv5o+V87vgxmKLyBJn8wqBQTda6M/nBC137YSB32myc6zzAeFwwE7vW/kR+8iPYr8ZwnaWlI1E2UbMmbMhfH/ggqhItcyE2MxClSesHrlGw5Q0rP0ckV9O1EJ5i6HuawbXg5XXwEcoAfwUwZ619nSbbwttAm/nrM3MSbw6wy+lebMq/fU03dKhraapIbw/2+KGHyB0W/Ky/LQQP7gMdd+tIZhAl8ttpuAWtNO3/6zWTjowlDzNyfg1VgR4ZxW94IOtVwLHsS+rvBx+AbVyrvOV7X8afZVfePlSBd4AGXvmpb+c/5422pK7+KQbh7Fx7aUBRawatqKMsAv3w1uEz7cEB+ceqWwbr1YI7qNgFGd3cZ22vAlDCnMTdXNPAY4iWO/6to1Xb+ct4M1jK1GP1G1ed9/nLxOYo6n4L10B+MdGnrfHCD+P9h8ML4A+gAK8D34X8dlIMFSG+P2b3ZfQAAAABJRU5ErkJggg==",alt:"awards1",style:{marginRight:"60px"}},null),b("img",{src:"data:image/png;base64,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",alt:"awards2"},null)])])]}),b(ee,{span:4},{default:()=>[b("div",null,[b("div",{class:Je},[B("Follow Us")]),b("div",{class:Pe},[b("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKcSURBVHgB7VjhldowDBZ9HSCd4LJB0wmabsAGl27ABuQm4DoB2QA6QbgJoBMkNwFsoEovck9xrRCn3KM/8r0nEmTZ+pAU2QFgxowZ9wcipiQ1yRk7nOX7isfg3iASzziMNdwTRCBXkWtVJDWOJAn8LyAyGUnlkazhVpCocOp2Uk8FTIAQbRTJEv4FQqzGMMorc5NQGoUkqjKIT7UsbhFzaAbmb7Bfb7k3XqrxFcQgkIYpBOuA/VKNp0r/pxYXI8g90qWCcXhZLBa5zOM0ZSSpyElsLiQbGbuQ/Sflq6XLg68fIrfGOPADwzW6xXArabDLRqJ0mfJXO+UYco/4PqhlffcD8miC2H+qbo0G+xFMlV9H+uh0HwPkeMIO3g+vVF8X8vOF7hO6b5Vf115OJkFCCV1RW+Ai/0lyIGlFQBZnyUW+GvP3/EHETlrJRInkD/H9FJxJBsVAag7o9a4hYNc2KiPFBUwBhntdE0PMIGqtu4xZKDcWSQ3bnXLMO8MWjbOdkAy1HRxNMpCOxiC3QRs8JzPWt8pn3N4rUdAoAjZrvI6h7c6KYg4jCA46wf5eqVHi3yfmbGQQ0AqGwwdD/yugc05bkm/UFngf/w5dO/FbipWyS6T+DdgdxR22gXFXQytPH0pbGpifoA2zBnUE9+o+lCLXWD8rp0zWX7xyu4OHAsJg+1ER9PffPGDjaq026qkxome1maD9EEl9qg2+ZXk2DmfRJwa5xpiTQSyw3w+PaNcTN2uuyyUaNSRj55uRUwuXXhoKjHiRweEXqwNGpHUx4CSlCx8uU1FxIR9IXqB7YFpl7o733G6WEG4zPP+JHohnuCUkGhVOB0dshRP/Nbj60qSI6rMeR4u/P0A/Wq/wFmmO8n5UC5kxY8Z0/AZM1Z197mfDBQAAAABJRU5ErkJggg==",alt:"social1",style:{marginRight:"20px"}},null),b("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFtSURBVHgB7ZjhTcMwEIVfEP8pE5AN2hHCBu0EdAU26AawQcMEoRMQJoANyAbNBsdF9g8T7OSS2lZb+ZOe2viS9unsnE8GEonElUJEC1bFOlJY9t1/YSr8UEnxqFw+sgGDhHi0WZbd2wI3kPPO2rAeWW/wy6wp/rNOLPFX8ojLhzSDtoyViIDU4EI4Fo/eDPywciOW67HgUzzlLW5Ztf5cw3MG+S22ejmXMuM0eItxuow9O2IvUFk9WMa7DH9CladWX69YT/CBuf4G7mlYO8v4F6twPLMiy/YJB1MK9RQ2PGO1LcDj31AFX0QQg2yiGYnXUEtjlCAGdRn60KVob5Yog4PktyQvyRx2rEJ/37JyqD3cpIGAUGtw2bsu6H/P10JAKIO21mlWYQ9l0BvJ4Kkkg6dy9gZFhdq18TN3rCXHt5bxPmu+z6x9DxAw1A8eEbGtd/WDQ1NcIx4lpkLq6CP06ULXF1Y05+gjkUhcCL9OsodgRwpleAAAAABJRU5ErkJggg==",alt:"social1"},null)])])]})]}),b("div",{class:Ye},[b("div",{class:De},[B("© All rights reserved JUNDE Software 2023")]),b("div",{class:De,style:{float:"right"}},[b("span",{style:{marginRight:"16px",cursor:"pointer"},onClick:()=>{C("/privacy-policy")}},[B("Privacy Policy")]),B("|"),b("span",{style:{marginLeft:"16px",cursor:"pointer"},onClick:()=>{C("/terms-of-use")}},[B("Terms of Use")])])])]})}),Ke="style-module__line___DxgHN",$e="style-module__menu-background-shadow___db9kT",et="style-module__menu___rhmWq",tt="style-module__menu-item___2mXNK",lt="style-module__menu-text___fCmyj",ot="style-module__sub-menu-text___m4aN9",nt="style-module__button-holder___PQcK-",at="style-module__button___v4dpT",st="style-module__red-arrow___1CkF0",it="style-module__blank-arrow___y-BRJ",rt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMCAYAAAB4MH11AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADnSURBVHgBtVTRDYIwFDwR/9kA2OA5gY7ABuAGOIE6iTiBuoFs0A1E4wD8G9FrwEiIwRTwkpfXNuWOHldGMMRZxGETVsbKfaXytv0jGJKP2Th0astaQD2BYwEcKJh1FtC4iCR8yCOhx+5+2ZI8gM1byFigiZuIFKVgQLKwWs45j12ldr0F6qCFngWsK6GcJ/Htq0jEyRYDgaQLimhrQvbIwp8xtEUO33hF0hilRVMbPaF9Z3TnHM5YAcoIa/KlTpLxCfjN9lVEHXyqjpTkUaeYtly0lKInxjVp3mzjE2hLJhS4l8Q/fxUvRSROZVD96FAAAAAASUVORK5CYII=",pt=l({setup(){const e=n(0),t=()=>{const e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,t=document.querySelector("#menu-background");e>0?t?.classList.add($e):t?.classList.remove($e)};return i((()=>{window.addEventListener("scroll",t)})),U((()=>{window.removeEventListener("scroll",t)})),()=>b(Ae,{offset:.01,style:{width:"100%"}},{default:()=>[b(te,{mode:"none",id:"menu-background",style:{paddingTop:"0px",paddingBottom:"0px",height:"122px"}},{default:()=>[b("div",{class:Ke},[b(ae,{mode:"horizontal",class:et,onSelect:async e=>{"/services/questions"===e?(await C("/services/center"),window.location.hash="services-center-qa"):await C(e)}},{default:()=>[b(se,{index:"/home",style:{paddingRight:"50px"},class:tt},{default:()=>[b("img",{src:"data:image/png;base64,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",alt:"icon"},null)]}),b(se,{index:"/home",class:tt},{default:()=>[b("span",{class:lt},[B("Home")])]}),b(ie,{index:"/services",class:tt},{title:()=>b("span",{class:lt},[B("Services")]),default:()=>b(_,null,[b(se,{index:"/services/center"},{default:()=>[b("span",{class:ot,style:{color:1===e.value?"#E23030":"#333E63"},onMouseenter:()=>{e.value=1},onMouseleave:()=>{e.value=0}},[B("Offshore Development Center"),1===e.value?b("img",{src:rt,alt:"img1063",class:st},null):b("div",{class:it},null)])]}),b(se,{index:"/services/questions"},{default:()=>[b("span",{class:ot,style:{color:2===e.value?"#E23030":"#333E63"},onMouseenter:()=>{e.value=2},onMouseleave:()=>{e.value=0}},[B("Frequently asked questions"),2===e.value?b("img",{src:rt,alt:"img1063",class:st},null):b("div",{class:it},null)])]})])}),b(se,{index:"/about",class:tt},{default:()=>[b("span",{class:lt},[B("About")])]})]}),b("div",{class:nt},[b(D,{class:at,mode:"red",style:{marginLeft:"20px"}},{default:()=>[B("Get in touch")]}),b(D,{class:at,style:{marginLeft:"16px"},mode:"white"},{default:()=>[B("Tel:400-3444-5555")]})])])]})]})}});e("default",l({setup(){const e=R();return i((()=>{window.onresize=()=>{e.commit("setMobile",window.innerWidth<1200)}})),()=>b("div",null,[b(pt,null,null),b(S,null,null),b(Le,null,null),b(Se,null,null)])}}))}}}));
