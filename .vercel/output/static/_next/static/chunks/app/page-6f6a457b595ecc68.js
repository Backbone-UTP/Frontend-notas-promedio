(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2953:function(e,t,a){Promise.resolve().then(a.t.bind(a,8173,23)),Promise.resolve().then(a.bind(a,1658))},1658:function(e,t,a){"use strict";a.d(t,{default:function(){return x}});var s=a(7437),r=a(2265);a(2874);var o=a(6356),n=a(3003),c=a(9824);function l(e){let{isOpen:t,onClose:a,info:r,action:o}=e;return t?(0,s.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-15 flex justify-center items-center",children:(0,s.jsxs)("div",{className:"bg-white p-4 rounded-lg",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold text-black",children:r}),(0,s.jsx)("p",{className:"text-gray-500",children:o}),(0,s.jsx)("button",{className:"bg-blue-500 text-white px-2 py-1 rounded-lg mt-4",onClick:()=>a(),children:"Close"})]})}):null}function i(e){let{index:t,currentIndex:a,values:i,main:d}=e,[x,j]=(0,r.useState)(!1),[m,p]=(0,r.useState)(""),u=t-a,N=100*u,h={transform:"translateX(".concat(N,"px) scale(").concat(1-.08*Math.abs(u),") perspective(60px) rotateY(").concat(-.01*u,"deg)"),zIndex:-Math.abs(u)},C=()=>0===u?"flex flex-col items-center justify-center card-container bg-gray-800 rounded-lg p-4 scrollbar-hiddenuy":"flex flex-col items-center justify-center card-container bg-gray-800 rounded-lg p-4 scrollbar-hiddenuy blur-[2px]",b=()=>j(!0),f=()=>j(!1);return d?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:C(),style:h,children:(0,s.jsx)("button",{className:"border-2 py-3 px-14 rounded duration-300 hover:bg-white hover:text-black",onClick:()=>{b(),p("crear")},children:"Crear Materia"})}),(0,s.jsx)(l,{isOpen:x,onClose:f,info:"crear Materia",action:m})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:C(),style:h,children:[(0,s.jsxs)("div",{className:"flex flex-col justify-between text-white",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold",children:i.name}),(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("p",{className:"text-sm w-44",children:"Promedio: 3.0"}),(0,s.jsx)(c.S$f,{className:"hover:cursor-pointer",onClick:()=>{b(),p("add")}}),(0,s.jsx)(n.FNg,{className:"hover:cursor-pointer",onClick:()=>{b(),p("edit")}}),(0,s.jsx)(o.ZkW,{className:"hover:cursor-pointer",onClick:()=>{b(),p("delete")}})]})]}),(0,s.jsx)("div",{className:"mt-4",children:Object.keys(i.Cortes).map(e=>(0,s.jsxs)("div",{className:"border-t border-gray-700 py-2",children:[(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("h2",{className:"text-xl font-semibold",children:e}),(0,s.jsxs)("p",{className:"text-sm",children:["Porcentaje: ",100*i.Cortes[e].porcentaje," %"]})]}),(0,s.jsx)("ul",{className:"ml-7 text-base",children:i.Cortes[e].Notas.map((e,t)=>(0,s.jsxs)("li",{className:"flex",children:[(0,s.jsxs)("span",{className:"w-24",children:["Nota ",t+1]}),(0,s.jsxs)("span",{className:"w-24",children:[100*e[1]," %"]}),(0,s.jsx)("span",{className:"text-gray-500",children:e[0]})]},t))})]},e))})]}),(0,s.jsx)(l,{isOpen:x,onClose:f,info:i.name,action:m})]})}let d={"carta 1":{name:"Matematicas",Cortes:{Corte1:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.3},Corte2:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.3},Corte3:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.4}}},"carta 2":{name:"Fisica",Cortes:{Corte1:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.3},Corte2:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.3},Corte3:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.4}}},"carta 3":{name:"Calculo",Cortes:{Corte1:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.3},Corte2:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.3},Corte3:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.4}}},"carta 4":{name:"Programacion",Cortes:{Corte1:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.3},Corte2:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.3},Corte3:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.4}}},"carta 5":{name:"Arquitectura",Cortes:{Corte1:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.3},Corte2:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.3},Corte3:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.4}}},"carta 6":{name:"Dibujo",Cortes:{Corte1:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.3},Corte2:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.3},Corte3:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.4}}},"carta 7":{name:"Ingles",Cortes:{Corte1:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.3},Corte2:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.3},Corte3:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.4}}},"carta 8":{name:"Historia",Cortes:{Corte1:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.3},Corte2:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.3},Corte3:{Notas:[[3.5,.3],[4,.3],[4.5,.2],[5,.2]],porcentaje:.4}}}};function x(){let[e,t]=(0,r.useState)(0),a=Object.keys(d);return(0,s.jsxs)("div",{className:"relative min-h-[550px] min-w-[825px] overflow-hidden flex justify-center",children:[(0,s.jsx)(i,{index:0,currentIndex:e,values:d[a[0]],main:!0}),a.map((t,a)=>(0,s.jsx)(i,{index:a+1,currentIndex:e,values:d[t],main:!1},t)),(0,s.jsx)("button",{className:"absolute bottom-0 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 text-black px-2 py-1 rounded-full",onClick:()=>{t(e=>(e-1+(a.length+1))%(a.length+1))},children:"<"}),(0,s.jsx)("button",{className:"absolute bottom-0 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 text-black px-2 py-1 rounded-full",onClick:()=>{t(e=>(e+1)%(a.length+1))},children:">"})]})}},2874:function(){}},function(e){e.O(0,[495,51,452,994,796,971,23,744],function(){return e(e.s=2953)}),_N_E=e.O()}]);