import{r as t,d as p,u as g,j as e}from"./index-BItzXT4c.js";import{a as v}from"./movies-TrB_xY_z.js";import{h as i}from"./moment-C5S46NFB.js";import{g as N}from"./shows-fPJSSvWN.js";import{s as c}from"./index-nvT5R7Lp.js";import{I as b,B as M}from"./index-BSByXM7W.js";import{R as Y,C as d}from"./row-CLZdL0ik.js";import"./useSize-CmQMDQbi.js";function T(){const[a,m]=t.useState(null),[r,x]=t.useState(i().format("YYYY-MM-DD")),[l,h]=t.useState(null),o=p(),n=g();t.useEffect(()=>{window.scroll(0,0)},[]),t.useEffect(()=>{f()},[]);const u=s=>{x(s.target.value),n(`/movie/${a._id}?date=${i(s.target.value).format("YYYY-MM-DD")}`)},f=async()=>{const s=await v(o.id);s.success?m(()=>({...s.data})):c.error(s.message)},j=async()=>{const s=await N(o.id,r);s.success?h(()=>s.data):c.error(s.data.message)};return t.useEffect(()=>{j()},[r]),e.jsxs("div",{className:"relative p-4 md:p-8 mt-10",children:[a&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"absolute inset-0 h-[100vh]",style:{backgroundImage:`url(${a.poster})`,backgroundSize:"cover",backgroundPosition:"center",opacity:.05}}),e.jsxs("div",{className:"flex flex-col md:flex-row items-center md:items-start md:gap-8 mt-10",children:[e.jsx("div",{children:e.jsx("img",{className:"rounded-lg",src:a.poster,width:150,alt:"Movie Poster"})}),e.jsxs("div",{className:"flex flex-col gap-4 mt-4 md:mt-0",children:[e.jsx("h1",{className:"text-3xl font-bold text-blue-950",children:a.title}),e.jsx("hr",{}),e.jsxs("div",{children:[e.jsxs("p",{className:"movie-data",children:["Language: ",e.jsx("span",{children:a.language})]}),e.jsxs("p",{className:"movie-data",children:["Genre: ",e.jsx("span",{children:a.genre})]}),e.jsxs("p",{className:"movie-data",children:["Release Date:"," ",e.jsx("span",{children:i(a.releaseDate).format("MMM Do YYYY")})]}),e.jsxs("p",{className:"movie-data",children:["Duration: ",e.jsx("span",{children:a.duration})]})]}),e.jsx("hr",{})]})]}),e.jsxs("div",{className:"flex flex-col gap-2 mt-10",children:[e.jsx("label",{className:"text-xl font-semibold",children:"Choose the date:"}),e.jsx(b,{type:"date",value:r,onChange:u})]})]}),e.jsx("h2",{className:"mt-8 text-2xl font-bold",children:"Theatres"}),l&&l.length===0&&e.jsx("div",{className:"mt-4",children:e.jsx("h2",{className:"text-blue-700 text-xl font-semibold",children:"Currently, no theatres available for this movie :("})}),l&&l.length>0&&e.jsx("div",{className:"mt-4",children:l.map(s=>e.jsx("div",{className:"py-4 border-b",children:e.jsxs(Y,{className:"flex flex-wrap justify-between",children:[e.jsxs(d,{lg:7,children:[e.jsx("h3",{className:"text-lg font-medium",children:s.theatre.name}),e.jsx("p",{className:"text-blue-500",children:s.theatre.address})]}),e.jsx(d,{children:e.jsx(M,{className:"bg-indigo-700 text-white font-bold",onClick:()=>n(`/book-show/${s._id}`),children:e.jsx("h5",{children:s.time})})})]})},s._id))})]})}export{T as default};
