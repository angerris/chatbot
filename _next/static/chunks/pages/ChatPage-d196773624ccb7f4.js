(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[223],{7288:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ChatPage",function(){return s(883)}])},883:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return k}});var n=s(5893),r=s(7294),i=e=>{let{children:t,type:s,onClick:r}=e;return(0,n.jsx)("button",{onClick:r,type:s,className:"w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition duration-200 mb-2",children:t})},a=s(5675),l=s.n(a),o=e=>{let{onBurgerMenuClick:t,isOpen:s}=e;return(0,n.jsxs)("div",{className:"flex justify-between w-full h-16 p-5 items-center border-b border-gray-700 bg-blue-500 rounded flex-row",children:[(0,n.jsxs)("div",{className:"flex items-center gap-3",children:[(0,n.jsx)(l(),{src:"/img/avatar.png",alt:"",width:50,height:50}),(0,n.jsx)("h4",{className:"font-bold text-lg",children:"Chatbot"})]}),(0,n.jsx)("div",{className:"burgerMenu cursor-pointer",onClick:t,children:s?(0,n.jsxs)("svg",{className:"h-8 w-8 text-gray-200",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z"})," ",(0,n.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"})," ",(0,n.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):(0,n.jsx)("svg",{className:"h-8 w-8 text-gray-200",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})]})},d=e=>{let{onSendMessage:t}=e,[s,i]=(0,r.useState)(""),a=()=>{s.trim()&&(t(s),i(""))};return(0,n.jsxs)("div",{className:"flex items-center justify-between pt-2",children:[(0,n.jsx)("input",{type:"text",value:s,onChange:e=>i(e.target.value),onKeyPress:e=>{"Enter"===e.key&&a()},placeholder:"Reply to Chatbot...",className:"text-gray-800 flex-grow rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"}),(0,n.jsx)("button",{onClick:a,className:"ml-3 bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75",children:"Send!"})]})},c=s(3967),u=s.n(c),x=e=>{let{message:t,sender:s,timestamp:r,isSent:i}=e;return(0,n.jsx)("div",{className:u()("flex h-fit",{"justify-end":i,"justify-start":!i}),children:(0,n.jsxs)("div",{className:u()("max-w-xs md:max-w-md lg:max-w-lg p-3 m-2 rounded-lg",{"bg-blue-500 text-white":i,"bg-gray-200 text-gray-900":!i}),children:[(0,n.jsxs)("div",{className:"text-sm mb-1",children:[(0,n.jsx)("span",{className:"font-semibold",children:s}),(0,n.jsx)("span",{className:"text-gray-500 ml-2 text-xs",children:r})]}),(0,n.jsx)("div",{className:"break-words",children:t})]})})},h=e=>{let{children:t}=e,s=(0,r.useRef)(null),i=()=>{s.current&&s.current.scrollIntoView({behavior:"smooth"})};return(0,r.useEffect)(()=>{i();let e=()=>{i()};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[t]),(0,n.jsxs)("div",{className:"flex flex-grow h-full overflow-y-auto flex-col",children:[t,(0,n.jsx)("div",{ref:s})]})},g=()=>(0,n.jsx)("div",{className:"flex h-fit justify-start",children:(0,n.jsx)("div",{className:u()("max-w-xs md:max-w-md lg:max-w-lg p-3 m-2 rounded-lg bg-gray-300 text-gray-900"),children:(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsxs)("div",{className:"animate-pulse flex space-x-1",children:[(0,n.jsx)("div",{className:"w-2 h-2 bg-gray-500 rounded-full"}),(0,n.jsx)("div",{className:"w-2 h-2 bg-gray-500 rounded-full"}),(0,n.jsx)("div",{className:"w-2 h-2 bg-gray-500 rounded-full"})]})})})}),m=e=>{let{onBurgerMenuClick:t,isOpen:s}=e,[i,a]=(0,r.useState)([]),[l,c]=(0,r.useState)(!1),u=()=>{let e=new Date,t=e.getHours().toString().padStart(2,"0"),s=e.getMinutes().toString().padStart(2,"0");return"".concat(t,":").concat(s)};return(0,n.jsxs)("div",{className:"flex flex-grow flex-col justify-between w-4/6 h-full rounded relative",children:[(0,n.jsx)(o,{onBurgerMenuClick:t,isOpen:s}),(0,n.jsxs)(h,{isTyping:l,children:[i.map(e=>(0,n.jsx)(x,{message:e.text,sender:e.sender,timestamp:e.timestamp,isSent:e.isSent},e.id)),l&&(0,n.jsx)(g,{})]}),(0,n.jsx)(d,{onSendMessage:e=>{let t={id:i.length,text:e,sender:"Me",timestamp:u(),isSent:!0,isChatbot:!1};a([...i,t]),c(!0),setTimeout(()=>{c(!1);let e={id:i.length+1,text:"This is a chatbot response.",sender:"Chatbot",timestamp:u(),isSent:!1,isChatbot:!0};a([...i,t,e])},2e3)}})]})};let f=s(7066).Z.create({baseURL:"https://x8ki-letl-twmt.n7.xano.io/api:SSOLzzIz",headers:{"Content-Type":"application/json"}});f.interceptors.request.use(e=>{let t=localStorage.getItem("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e},e=>Promise.reject(e));let j=async()=>{try{let e=await f.get("/auth/me");return{user:e.data,id:e.data.id}}catch(e){if(e.response&&401===e.response.status)return{user:null,id:null};throw e}},p=async(e,t)=>{let s={id:e,user_id:t.id,label:"string",created_at:new Date().toISOString()};await f.post("/conversation",s)},w=async()=>(await f.get("/conversation")).data,y=async e=>{await f.delete("/conversation/".concat(e))};var v=e=>{let{onAddConversation:t}=e,[s,i]=(0,r.useState)({id:null,name:null});(0,r.useEffect)(()=>{(async()=>{let{user:e,id:t}=await j();e&&i({id:t,name:e.name})})()},[]);let a=async()=>{if(s.id&&s.name){let e=s.id,n={id:s.id,name:s.name};await p(e,n),t()}};return(0,n.jsxs)("div",{className:"flex justify-between w-full h-16 p-5 border-b border-gray-700 items-center bg-blue-500 rounded sidebarHeader",children:[(0,n.jsx)("h4",{className:"font-bold text-lg",children:"Conversations"}),(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsx)("div",{className:"cursor-pointer",onClick:a,children:(0,n.jsxs)("svg",{className:"h-8 w-8 text-gray-200",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z"}),(0,n.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,n.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})})]})},b=e=>{let{title:t,isActive:s,onClick:r,onDelete:i}=e;return(0,n.jsxs)("div",{className:"cursor-pointer flex justify-between w-full px-5 py-4 items-center border border-gray-700 rounded ".concat(s?"bg-indigo-600":""),onClick:r,children:[(0,n.jsx)("h4",{children:t}),(0,n.jsx)("div",{onClick:e=>{e.stopPropagation(),i()},children:(0,n.jsxs)("svg",{className:"h-8 w-8 text-gray-200",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z"}),(0,n.jsx)("line",{x1:"4",y1:"7",x2:"20",y2:"7"}),(0,n.jsx)("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),(0,n.jsx)("line",{x1:"14",y1:"11",x2:"14",y2:"17"}),(0,n.jsx)("path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"}),(0,n.jsx)("path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"})]})})]})},N=e=>{let{isOpen:t}=e,[s,i]=(0,r.useState)([]),[a,l]=(0,r.useState)(null);(0,r.useEffect)(()=>{(async()=>{i((await w()).map((e,t)=>({id:e.id,title:"".concat(t+1)})))})()},[]);let o=async()=>{i((await w()).map((e,t)=>({id:e.id,title:"".concat(t+1)})))},d=e=>{l(e)},c=async e=>{await y(String(e)),i(t=>t.filter(t=>t.id!==e))};return(0,n.jsxs)("div",{className:"sidebarWrapper flex flex-grow w-2/6 min-h-full gap-4 flex-col rounded ".concat(t?"block":"hidden"),children:[(0,n.jsx)(v,{onAddConversation:o}),(0,n.jsx)("div",{className:"flex bg-gray-800 h-full flex-col gap-2 overflow-y-auto p-2 rounded",children:s.map(e=>(0,n.jsx)(b,{title:"Conversation ".concat(e.title),isActive:a===e.id,onClick:()=>d(e.id),onDelete:()=>c(e.id)},e.id))})]})},k=e=>{let{handleLogout:t}=e,[s,a]=(0,r.useState)(!0);return(0,n.jsxs)("main",{className:"chatWrapper flex h-screen flex-col items-center justify-between ",children:[(0,n.jsxs)("div",{className:"flex justify-between w-full h-16 px-5 py-4 items-center border-b border-gray-700",children:[(0,n.jsx)(l(),{src:"/svg/logo.svg",alt:"",width:50,height:50}),(0,n.jsx)("div",{className:"w-28",children:(0,n.jsx)(i,{onClick:t,children:"Logout"})})]}),(0,n.jsxs)("div",{className:"flex flex-grow gap-5 justify-evenly w-full h-full p-5 overflow-hidden chatInnerWrapper",children:[s&&(0,n.jsx)(N,{isOpen:s}),(0,n.jsx)(m,{onBurgerMenuClick:()=>{a(!s)},isOpen:s})]})]})}}},function(e){e.O(0,[989,888,774,179],function(){return e(e.s=7288)}),_N_E=e.O()}]);