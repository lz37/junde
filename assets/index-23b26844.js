import{d,G as o}from"./index-6ed02c51.js";const l="red-module__button___qq6HE",c="red-module__text___dU2yA",r={button:l,text:c},s="white-module__button___BpbmI",i="white-module__text___Lb7eu",a={button:s,text:i},u={red:r,white:a},x=d({props:{mode:{type:String,required:!0},buttonStyle:{type:Object}},emits:["click"],setup(t,{emit:n,slots:e}){return()=>{var _;return o("div",null,[o("button",{class:u[t.mode].button,onClick:()=>n("click"),style:t.buttonStyle},[o("span",{class:u[t.mode].text},[(_=e.default)==null?void 0:_.call(e)])])])}}}),b="style-module__dark___gqkT3",m="style-module__blue___JbLyA",y="style-module__light___sTga2",g={dark:b,blue:m,light:y},S=d({props:{mode:{type:String,required:!0},style:Object,class:String},setup(t,{slots:n}){return()=>{var e;return o("div",{class:`${g[t.mode]} ${t.class}`,style:t.style},[(e=n.default)==null?void 0:e.call(n)])}}});export{x as B,S as a};