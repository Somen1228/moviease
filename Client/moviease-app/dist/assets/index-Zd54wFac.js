import{e as A,A as L,r as v,d as B,u as H,j as n}from"./index-BItzXT4c.js";import{a as K}from"./shows-fPJSSvWN.js";import{h as U}from"./moment-C5S46NFB.js";import{p as G}from"./index-BHa08Yi-.js";import{R as F,C as I}from"./row-CLZdL0ik.js";import{C as Y}from"./index-6cSyXV8Q.js";import{s as m}from"./index-nvT5R7Lp.js";import"./useSize-CmQMDQbi.js";import"./index-DYoCIwN4.js";const _=async s=>{try{return(await A.post(`${L}/bookings`,s)).data}catch(t){return t.response.message}},z=async s=>{try{return(await A.post(`${L}/payment`,s)).data}catch{}};var O={};Object.defineProperty(O,"__esModule",{value:!0});var x=Object.assign||function(s){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(s[e]=r[e])}return s},W=function(){function s(t,r){for(var e=0;e<r.length;e++){var o=r[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,r,e){return r&&s(t.prototype,r),e&&s(t,e),t}}(),Z=v,g=E(Z),V=G,a=E(V);function E(s){return s&&s.__esModule?s:{default:s}}function C(s,t,r){return t in s?Object.defineProperty(s,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[t]=r,s}function X(s,t){if(!(s instanceof t))throw new TypeError("Cannot call a class as a function")}function J(s,t){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:s}function q(s,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);s.prototype=Object.create(t&&t.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(s,t):s.__proto__=t)}var S=!1,R=!1,k=!1,w=function(s){q(t,s);function t(r){X(this,t);var e=J(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,r));return e.onScriptLoaded=function(){t.stripeHandler||(t.stripeHandler=StripeCheckout.configure({key:e.props.stripeKey}),e.hasPendingClick&&e.showStripeDialog())},e.onScriptError=function(){for(var o=arguments.length,i=Array(o),l=0;l<o;l++)i[l]=arguments[l];e.hideLoadingDialog(),e.props.onScriptError&&e.props.onScriptError.apply(e,i)},e.onClosed=function(){for(var o=arguments.length,i=Array(o),l=0;l<o;l++)i[l]=arguments[l];e._isMounted&&e.setState({open:!1}),e.props.closed&&e.props.closed.apply(e,i)},e.onOpened=function(){for(var o=arguments.length,i=Array(o),l=0;l<o;l++)i[l]=arguments[l];e.setState({open:!0}),e.props.opened&&e.props.opened.apply(e,i)},e.getConfig=function(){return["token","image","name","description","amount","locale","currency","panelLabel","zipCode","shippingAddress","billingAddress","email","allowRememberMe","bitcoin","alipay","alipayReusable"].reduce(function(o,i){return x({},o,e.props.hasOwnProperty(i)&&C({},i,e.props[i]))},{opened:e.onOpened,closed:e.onClosed})},e.onClick=function(){if(!e.props.disabled)if(k)try{throw new Error("Tried to call onClick, but StripeCheckout failed to load")}catch{}else t.stripeHandler?e.showStripeDialog():(e.showLoadingDialog(),e.hasPendingClick=!0)},e.handleOnMouseDown=function(){e.setState({buttonActive:!0})},e.handleOnMouseUp=function(){e.setState({buttonActive:!1})},e.state={open:!1,buttonActive:!1},e}return W(t,[{key:"componentDidMount",value:function(){var e=this;if(this._isMounted=!0,!R&&!S){S=!0;var o=document.createElement("script");typeof this.props.onScriptTagCreated=="function"&&this.props.onScriptTagCreated(o),o.src="https://checkout.stripe.com/checkout.js",o.async=1,this.loadPromise=function(){var i=!1,l=new Promise(function(f,u){o.onload=function(){R=!0,S=!1,f(),e.onScriptLoaded()},o.onerror=function(d){k=!0,S=!1,u(d),e.onScriptError(d)}}),j=new Promise(function(f,u){l.then(function(){return i?u({isCanceled:!0}):f()}),l.catch(function(d){return u(i?{isCanceled:!0}:d)})});return{promise:j,cancel:function(){i=!0}}}(),this.loadPromise.promise.then(this.onScriptLoaded).catch(this.onScriptError),document.body.appendChild(o)}}},{key:"componentDidUpdate",value:function(){S||this.updateStripeHandler()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.loadPromise&&this.loadPromise.cancel(),t.stripeHandler&&this.state.open&&t.stripeHandler.close()}},{key:"updateStripeHandler",value:function(){(!t.stripeHandler||this.props.reconfigureOnUpdate)&&(t.stripeHandler=StripeCheckout.configure({key:this.props.stripeKey}))}},{key:"showLoadingDialog",value:function(){if(this.props.showLoadingDialog){for(var e=arguments.length,o=Array(e),i=0;i<e;i++)o[i]=arguments[i];this.props.showLoadingDialog.apply(this,o)}}},{key:"hideLoadingDialog",value:function(){if(this.props.hideLoadingDialog){for(var e=arguments.length,o=Array(e),i=0;i<e;i++)o[i]=arguments[i];this.props.hideLoadingDialog.apply(this,o)}}},{key:"showStripeDialog",value:function(){this.hideLoadingDialog(),t.stripeHandler.open(this.getConfig())}},{key:"renderDefaultStripeButton",value:function(){return g.default.createElement("button",x({},C({},this.props.triggerEvent,this.onClick),{className:this.props.className,onMouseDown:this.handleOnMouseDown,onFocus:this.handleOnMouseDown,onMouseUp:this.handleOnMouseUp,onMouseOut:this.handleOnMouseUp,onBlur:this.handleOnMouseUp,style:x({},{overflow:"hidden",display:"inline-block",background:"linear-gradient(#28a0e5,#015e94)",border:0,padding:1,textDecoration:"none",borderRadius:5,boxShadow:"0 1px 0 rgba(0,0,0,0.2)",cursor:"pointer",visibility:"visible",userSelect:"none"},this.state.buttonActive&&{background:"#005d93"},this.props.style)}),g.default.createElement("span",{style:x({},{backgroundImage:"linear-gradient(#7dc5ee,#008cdd 85%,#30a2e4)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",color:"#fff",fontWeight:"bold",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",textShadow:"0 -1px 0 rgba(0,0,0,0.25)",borderRadius:4},this.state.buttonActive&&{color:"#eee",boxShadow:"inset 0 1px 0 rgba(0,0,0,0.1)",backgroundImage:"linear-gradient(#008cdd,#008cdd 85%,#239adf)"},this.props.textStyle)},this.props.label))}},{key:"renderDisabledButton",value:function(){return g.default.createElement("button",{disabled:!0,style:{background:"rgba(0,0,0,0.2)",overflow:"hidden",display:"inline-block",border:0,padding:1,textDecoration:"none",borderRadius:5,userSelect:"none"}},g.default.createElement("span",{style:{boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",borderRadius:4,color:"#999",background:"#f8f9fa",textShadow:"0 1px 0 rgba(255,255,255,0.5)"}},this.props.label))}},{key:"render",value:function(){this.props.desktopShowModal===!0&&!this.state.open?this.onClick():this.props.desktopShowModal===!1&&this.state.open&&t.stripeHandler.close();var e=this.props.ComponentClass;return this.props.children?g.default.createElement(e,x({},C({},this.props.triggerEvent,this.onClick),{children:this.props.children})):this.props.disabled?this.renderDisabledButton():this.renderDefaultStripeButton()}}]),t}(g.default.Component);w.defaultProps={className:"StripeCheckout",label:"Pay With Card",locale:"auto",ComponentClass:"span",reconfigureOnUpdate:!1,triggerEvent:"onClick"};w.propTypes={desktopShowModal:a.default.bool,triggerEvent:a.default.oneOf(["onClick","onTouchTap","onTouchStart"]),label:a.default.string,style:a.default.object,textStyle:a.default.object,disabled:a.default.bool,ComponentClass:a.default.string,showLoadingDialog:a.default.func,hideLoadingDialog:a.default.func,onScriptError:a.default.func,onScriptTagCreated:a.default.func,reconfigureOnUpdate:a.default.bool,stripeKey:a.default.string.isRequired,token:a.default.func.isRequired,name:a.default.string,description:a.default.string,image:a.default.string,amount:a.default.number,locale:a.default.oneOf(["auto","zh","da","nl","en","fr","de","it","ja","no","es","sv"]),currency:a.default.oneOf(["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BIF","BMD","BND","BOB","BRL","BSD","BWP","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CVE","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ETB","EUR","FJD","FKP","GBP","GEL","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","ISK","JMD","JPY","KES","KGS","KHR","KMF","KRW","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","MAD","MDL","MGA","MKD","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SZL","THB","TJS","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR","ZMW"]),panelLabel:a.default.string,zipCode:a.default.bool,billingAddress:a.default.bool,shippingAddress:a.default.bool,email:a.default.string,allowRememberMe:a.default.bool,bitcoin:a.default.bool,alipay:a.default.oneOf(["auto",!0,!1]),alipayReusable:a.default.bool,opened:a.default.func,closed:a.default.func};w._isMounted=!1;var Q=O.default=w;function le(){const s=B(),[t,r]=v.useState(null),[e,o]=v.useState([]),i=H();v.useEffect(()=>{window.scroll(0,0)});const l=async d=>{const h=t.ticketPrice*e.length,p=await z({token:d,amount:h,show:t,selectedSeats:e});p.success?(m.success("Payment Successfull"),j(p.data)):m.error("Payment Unsuccessfull")},j=async d=>{const h={show:t._id,seats:[...e],transactionId:d},p=await _(h);p.success?(m.success("Booking Created Successfully"),m.success("Booking details have been sent to your email id"),o(()=>[]),setTimeout(()=>{i("/home")},3e3)):m.error(p.message)},f=()=>{let d=20,h=120,p=Math.ceil(h/d),D=[];for(let c=0;c<p;c++)D.push(c);console.log(D);let M=[];for(let c=0;c<d;c++)M.push(c);console.log(D);const T=c=>{if(!t.bookedSeats.includes(c)){if(e.includes(c)){const y=e.filter(P=>P!=c);o(()=>y);return}o([...e,c])}};return n.jsxs("div",{className:"seating",children:[n.jsxs("div",{className:"screen",children:[n.jsx("hr",{}),n.jsx("hr",{}),n.jsx("hr",{}),n.jsx("p",{className:"pt-2 text-[14px] pb-2",children:"Screen this side, you will be watching in this direction"})]}),n.jsx("div",{className:"seating-arrangement",children:D.map((c,y)=>n.jsxs("div",{children:[M.map(P=>{let b=c*d+P+1,N="seat-btn";if(!(b>h))return t.bookedSeats.includes(b)&&(N+=" booked"),e.includes(b)&&(N+=" selected"),n.jsxs("button",{onClick:()=>T(b),className:N,children:[" ",b," "]})}),n.jsx("br",{})]}))}),e.length>0?n.jsx(n.Fragment,{children:n.jsxs("div",{className:"bg-white shadow-lg p-4 rounded-md w-full max-w-screen-md mx-auto",children:[n.jsxs("div",{className:"mb-4",children:[n.jsx("h3",{className:"text-lg font-semibold",children:"Selected Seats"}),n.jsx("div",{className:"overflow-y-auto h-14 border rounded p-2",children:e.map((c,y)=>n.jsx("span",{className:"inline-block text-center w-[40px] bg-blue-50 text-blue-600 px-2 py-1 rounded-full m-1 text-[13px] font-medium",children:c},y))})]}),n.jsxs("div",{className:"flex justify-between items-center sticky bottom-0 bg-white p-4 border-t",children:[n.jsxs("div",{children:[n.jsx("h4",{className:"text-xl font-semibold",children:"Total Price"}),n.jsxs("p",{className:"text-lg text-red-500 font-bold",children:["Rs. ",t.ticketPrice*e.length,"/-"]})]}),e.length>0&&n.jsx("div",{className:"stripe-checkout",children:n.jsx(Q,{stripeKey:"pk_test_51PlbPIRwGirPAie9HtthGBzkM04CxRmvijvqQwe1uzz3MPiMvgP1UBY3m1gFLIb6vJXXFamGbq3mEukxZhpj9nAJ00S2HxaKeW",token:l})})]})]})}):n.jsx("div",{children:n.jsx("h3",{className:"titles pt-2",children:"Select seats to proceed"})})]})},u=async()=>{const d=await K(s.id);d.success?r(()=>d.data):m.error("Unable to fetch show details!")};return v.useEffect(()=>{u()},[]),n.jsx("div",{className:"mt-[65px]",children:t&&n.jsx("div",{children:n.jsx(F,{children:n.jsx(I,{span:24,children:n.jsx(Y,{title:n.jsxs("div",{children:[n.jsx("h1",{className:"text-3xl font-bold pb-2",children:t.movie.title}),n.jsxs("p",{children:["Theatre : ",t.theatre.name,", ",t.theatre.address]})]}),extra:n.jsxs("div",{className:"flex flex-col gap-2 py-4 text-[16px]",children:[n.jsxs("h4",{children:[n.jsxs("span",{className:"font-medium text-zinc-400",children:["Show Name :"," "]}),n.jsx("span",{className:"font-medium",children:t.name})]}),n.jsxs("h4",{children:[n.jsxs("span",{className:"font-medium text-zinc-400",children:["Show time:"," "]}),n.jsxs("span",{className:"font-medium",children:[U(t.date).format("Do MMM YYYY")," ",t.time]})]}),n.jsxs("h4",{children:[n.jsxs("span",{className:"font-medium text-zinc-400",children:["Ticket Price :"," "]}),n.jsx("span",{className:"font-medium",children:t.ticketPrice+"/-"})]}),n.jsxs("h4",{children:[n.jsxs("span",{className:"font-medium text-zinc-400",children:["Total Seats :"," "]}),n.jsxs("span",{className:"font-medium",children:[t.totalSeats," ","|"," "]}),n.jsxs("span",{className:"font-medium text-zinc-400",children:["Available Seats :"," "]})," ",n.jsx("span",{className:"font-medium",children:t.totalSeats-t.bookedSeats.length})]})]}),children:f()})})})})})}export{le as default};
