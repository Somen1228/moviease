import{u as n,j as e,F as s,I as a,B as o,L as d,R as c,s as l}from"./index-8bvBX-Cq.js";function h(){const i=n(),m=async r=>{const t=await c(r);t.status=="201"?(l.warning("Please verify you Email Id"),localStorage.setItem("emailForOtp",r.email),i("/verifyEmail")):l.error(t.data.message)};return e.jsx(e.Fragment,{children:e.jsx("header",{className:"App-header",children:e.jsxs("main",{className:"main-area mw-500 text-center px-3",children:[e.jsx("section",{className:"left-section text-2xl font-bold mb-6",children:e.jsx("h1",{children:"Register to MoviEase"})}),e.jsxs("section",{className:"right-section",children:[e.jsxs(s,{layout:"vertical",onFinish:m,children:[e.jsx(s.Item,{label:"Name",htmlFor:"name",name:"name",className:"d-block",rules:[{required:!0,message:"Name is required"}],children:e.jsx(a,{id:"name",type:"text",placeholder:"Enter your name"})}),e.jsx(s.Item,{label:"Username",htmlFor:"userName",name:"userName",className:"d-block",rules:[{required:!0,message:"UserName is required"}],children:e.jsx(a,{id:"userName",type:"text",placeholder:"Enter your username"})}),e.jsx(s.Item,{label:"Email",htmlFor:"email",name:"email",className:"d-block",rules:[{required:!0,message:"Email is required"}],children:e.jsx(a,{id:"email",type:"text",placeholder:"Enter your Email"})}),e.jsx(s.Item,{label:"Password",htmlFor:"password",name:"password",className:"d-block",rules:[{required:!0,message:"Password is required"}],children:e.jsx(a,{id:"password",type:"password",placeholder:"Enter your Password"})}),e.jsx(s.Item,{className:"d-block",children:e.jsx(o,{type:"primary",block:!0,htmlType:"submit",style:{fontSize:"1rem",fontWeight:"600"},children:"Register"})})]}),e.jsx("div",{children:e.jsxs("p",{children:["Already a user? ",e.jsx(d,{className:"text-blue-600",to:"/",children:"Login now"})]})})]})]})})})}export{h as default};
