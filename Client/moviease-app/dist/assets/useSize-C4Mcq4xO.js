import{e as P,aS as te,r as a,t as re,ao as ne,x as ie,v as oe,ak as se,E as ae,F,aG as T,G as ue,H as fe,D as G,I as j,B as q,a7 as N,aD as ce}from"./index-CyGIF9Ci.js";function W(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[];return P.Children.forEach(e,function(n){n==null&&!t.keepEmpty||(Array.isArray(n)?r=r.concat(W(n)):te.isFragment(n)&&n.props?r=r.concat(W(n.props.children,t)):r.push(n))}),r}var k=a.createContext(null);function he(e){var t=e.children,r=e.onBatchResize,n=a.useRef(0),i=a.useRef([]),o=a.useContext(k),s=a.useCallback(function(f,u,c){n.current+=1;var v=n.current;i.current.push({size:f,element:u,data:c}),Promise.resolve().then(function(){v===n.current&&(r==null||r(i.current),i.current=[])}),o==null||o(f,u,c)},[r,o]);return a.createElement(k.Provider,{value:s},t)}var K=function(){if(typeof Map<"u")return Map;function e(t,r){var n=-1;return t.some(function(i,o){return i[0]===r?(n=o,!0):!1}),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(r){var n=e(this.__entries__,r),i=this.__entries__[n];return i&&i[1]},t.prototype.set=function(r,n){var i=e(this.__entries__,r);~i?this.__entries__[i][1]=n:this.__entries__.push([r,n])},t.prototype.delete=function(r){var n=this.__entries__,i=e(n,r);~i&&n.splice(i,1)},t.prototype.has=function(r){return!!~e(this.__entries__,r)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(r,n){n===void 0&&(n=null);for(var i=0,o=this.__entries__;i<o.length;i++){var s=o[i];r.call(n,s[1],s[0])}},t}()}(),H=typeof window<"u"&&typeof document<"u"&&window.document===document,C=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),ve=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(C):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),de=2;function le(e,t){var r=!1,n=!1,i=0;function o(){r&&(r=!1,e()),n&&f()}function s(){ve(o)}function f(){var u=Date.now();if(r){if(u-i<de)return;n=!0}else r=!0,n=!1,setTimeout(s,t);i=u}return f}var pe=20,be=["top","right","bottom","left","width","height","size","weight"],_e=typeof MutationObserver<"u",ge=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=le(this.refresh.bind(this),pe)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var r=this.observers_,n=r.indexOf(t);~n&&r.splice(n,1),!r.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(r){return r.gatherActive(),r.hasActive()});return t.forEach(function(r){return r.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!H||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),_e?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!H||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var r=t.propertyName,n=r===void 0?"":r,i=be.some(function(o){return!!~n.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Y=function(e,t){for(var r=0,n=Object.keys(t);r<n.length;r++){var i=n[r];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},_=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||C},U=x(0,0,0,0);function M(e){return parseFloat(e)||0}function $(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return t.reduce(function(n,i){var o=e["border-"+i+"-width"];return n+M(o)},0)}function me(e){for(var t=["top","right","bottom","left"],r={},n=0,i=t;n<i.length;n++){var o=i[n],s=e["padding-"+o];r[o]=M(s)}return r}function ye(e){var t=e.getBBox();return x(0,0,t.width,t.height)}function Re(e){var t=e.clientWidth,r=e.clientHeight;if(!t&&!r)return U;var n=_(e).getComputedStyle(e),i=me(n),o=i.left+i.right,s=i.top+i.bottom,f=M(n.width),u=M(n.height);if(n.boxSizing==="border-box"&&(Math.round(f+o)!==t&&(f-=$(n,"left","right")+o),Math.round(u+s)!==r&&(u-=$(n,"top","bottom")+s)),!Ee(e)){var c=Math.round(f+o)-t,v=Math.round(u+s)-r;Math.abs(c)!==1&&(f-=c),Math.abs(v)!==1&&(u-=v)}return x(i.left,i.top,f,u)}var we=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof _(e).SVGGraphicsElement}:function(e){return e instanceof _(e).SVGElement&&typeof e.getBBox=="function"}}();function Ee(e){return e===_(e).document.documentElement}function Oe(e){return H?we(e)?ye(e):Re(e):U}function Ce(e){var t=e.x,r=e.y,n=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return Y(s,{x:t,y:r,width:n,height:i,top:r,right:t+n,bottom:i+r,left:t}),s}function x(e,t,r,n){return{x:e,y:t,width:r,height:n}}var Me=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=x(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=Oe(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),xe=function(){function e(t,r){var n=Ce(r);Y(this,{target:t,contentRect:n})}return e}(),ze=function(){function e(t,r,n){if(this.activeObservations_=[],this.observations_=new K,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=r,this.callbackCtx_=n}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof _(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(t)||(r.set(t,new Me(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof _(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(t)&&(r.delete(t),r.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(r){r.isActive()&&t.activeObservations_.push(r)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,r=this.activeObservations_.map(function(n){return new xe(n.target,n.broadcastRect())});this.callback_.call(t,r,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),X=typeof WeakMap<"u"?new WeakMap:new K,J=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=ge.getInstance(),n=new ze(t,r,this);X.set(this,n)}return e}();["observe","unobserve","disconnect"].forEach(function(e){J.prototype[e]=function(){var t;return(t=X.get(this))[e].apply(t,arguments)}});var Ae=function(){return typeof C.ResizeObserver<"u"?C.ResizeObserver:J}(),l=new Map;function Se(e){e.forEach(function(t){var r,n=t.target;(r=l.get(n))===null||r===void 0||r.forEach(function(i){return i(n)})})}var Q=new Ae(Se);function Te(e,t){l.has(e)||(l.set(e,new Set),Q.observe(e)),l.get(e).add(t)}function De(e,t){l.has(e)&&(l.get(e).delete(t),l.get(e).size||(Q.unobserve(e),l.delete(e)))}var Pe=function(e){re(r,e);var t=ne(r);function r(){return ie(this,r),t.apply(this,arguments)}return oe(r,[{key:"render",value:function(){return this.props.children}}]),r}(a.Component);function We(e,t){var r=e.children,n=e.disabled,i=a.useRef(null),o=a.useRef(null),s=a.useContext(k),f=typeof r=="function",u=f?r(i):r,c=a.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),v=!f&&a.isValidElement(u)&&se(u),p=v?u.ref:null,z=ae(p,i),y=function(){var d;return T(i.current)||(i.current&&ue(i.current)==="object"?T((d=i.current)===null||d===void 0?void 0:d.nativeElement):null)||T(o.current)};a.useImperativeHandle(t,function(){return y()});var R=a.useRef(e);R.current=e;var g=a.useCallback(function(h){var d=R.current,w=d.onResize,b=d.data,m=h.getBoundingClientRect(),A=m.width,S=m.height,E=h.offsetWidth,O=h.offsetHeight,I=Math.floor(A),V=Math.floor(S);if(c.current.width!==I||c.current.height!==V||c.current.offsetWidth!==E||c.current.offsetHeight!==O){var B={width:I,height:V,offsetWidth:E,offsetHeight:O};c.current=B;var Z=E===Math.round(A)?A:E,ee=O===Math.round(S)?S:O,L=F(F({},B),{},{offsetWidth:Z,offsetHeight:ee});s==null||s(L,h,b),w&&Promise.resolve().then(function(){w(L,h)})}},[]);return a.useEffect(function(){var h=y();return h&&!n&&Te(h,g),function(){return De(h,g)}},[i.current,n]),a.createElement(Pe,{ref:o},v?a.cloneElement(u,{ref:z}):u)}var ke=a.forwardRef(We),He="rc-observer-key";function Ie(e,t){var r=e.children,n=typeof r=="function"?[r]:W(r);return n.map(function(i,o){var s=(i==null?void 0:i.key)||"".concat(He,"-").concat(o);return a.createElement(ke,fe({},e,{key:s,ref:o===0?t:void 0}),i)})}var Ve=a.forwardRef(Ie);Ve.Collection=he;function Le(e,t){var r=Object.assign({},e);return Array.isArray(t)&&t.forEach(function(n){delete r[n]}),r}function D(e){return e!==void 0}function Fe(e,t){var r=t||{},n=r.defaultValue,i=r.value,o=r.onChange,s=r.postState,f=G(function(){return D(i)?i:D(n)?typeof n=="function"?n():n:typeof e=="function"?e():e}),u=j(f,2),c=u[0],v=u[1],p=i!==void 0?i:c,z=s?s(p):p,y=q(o),R=G([p]),g=j(R,2),h=g[0],d=g[1];N(function(){var b=h[0];c!==b&&y(c,b)},[h]),N(function(){D(i)||v(i)},[i]);var w=q(function(b,m){v(b,m),d([p],m)});return[z,w]}const Ge=function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var t=e.getBBox(),r=t.width,n=t.height;if(r||n)return!0}if(e.getBoundingClientRect){var i=e.getBoundingClientRect(),o=i.width,s=i.height;if(o||s)return!0}}return!1},je=e=>{const t=P.useContext(ce);return P.useMemo(()=>e?typeof e=="string"?e??t:e instanceof Function?e(t):t:t,[e,t])};export{Ve as R,Fe as a,Ae as b,Ge as i,Le as o,W as t,je as u};
