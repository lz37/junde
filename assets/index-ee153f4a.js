import{d as l,G as _}from"./index-6ed02c51.js";const y="/junde/assets/D-c71090bd.png",n="style-module__img___IUj3k",o="style-module__big___oaQHr",r="style-module__small___ojy6U",d="style-module__left___Ze23J",g="style-module__right___9VSps",s={img:n,big:o,small:r,left:d,right:g},b=l({props:{img:{type:String,required:!0},forward:{type:String,required:!0},mode:{type:String,default:"big"},size:{type:Object,required:!0},position:Object,style:Object,class:String},setup(e){return()=>{var t,i;return _("div",{style:{backgroundImage:`url('${e.img}')`,backgroundPositionX:(t=e.position)==null?void 0:t.x,backgroundPositionY:(i=e.position)==null?void 0:i.y,width:e.size.w,height:e.size.h,...e.style},class:`${s.img} ${s[e.forward]} ${s[e.mode]} ${e.class}`},null)}}}),a="style-module__left___wk6L2",c="style-module__right___JGxqz",u={left:a,right:c},f=l({props:{mode:{type:String,required:!0},class:String,style:Object},setup(e,{slots:t}){return()=>{var i;return _("div",{class:`${u[e.mode]} ${e.class}`,style:e.style},[(i=t.default)==null?void 0:i.call(t)])}}});export{y as D,b as a,f as b};
