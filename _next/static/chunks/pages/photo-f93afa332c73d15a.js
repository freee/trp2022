(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[984],{2351:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/photo",function(){return r(2928)}])},6857:function(e,n,r){"use strict";r.d(n,{V:function(){return i}});var t=r(5893),i=function(e){var n=e.children;return(0,t.jsxs)("span",{style:{whiteSpace:"nowrap"},children:[n,(0,t.jsx)("wbr",{})]})}},2928:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return z}});var t=r(5893),i=r(1358),a=r(8527),o=r(6723),s=r(9008),c=r(1664),u=r(7294),l=r(7691),d=r(6857),h=function(){return(0,t.jsx)(a.W2,{mt:"4",children:(0,t.jsxs)(a.kC,{backgroundColor:"whiteAlpha.800",p:"4",borderRadius:"lg",alignItems:"center",children:[(0,t.jsx)(a.xu,{width:"40",children:(0,t.jsx)("img",{src:(0,l.i)("freee_logo_rainbow_M.png"),alt:"freee \u30ec\u30a4\u30f3\u30dc\u30fc\u30ed\u30b4"})}),(0,t.jsxs)(a.xu,{children:[(0,t.jsxs)(a.xv,{fontSize:"small",children:[(0,t.jsx)(d.V,{children:"freee\u682a\u5f0f\u4f1a\u793e\u3067\u306f\u3001"}),(0,t.jsx)(d.V,{children:"\u3059\u3079\u3066\u306e\u4eba\u304c\u3058\u3076\u3093\u3089\u3057\u304f\u3001"}),(0,t.jsx)("br",{}),(0,t.jsx)(d.V,{children:"\u81ea\u7136\u4f53\u306b\u6d3b\u8e8d\u3067\u304d\u308b"}),(0,t.jsx)(d.V,{children:"\u4e16\u754c\u3092\u76ee\u6307\u3057\u3066\u3044\u307e\u3059\u3002"})]}),(0,t.jsxs)(a.Ug,{mt:"2",children:[(0,t.jsx)(o.zx,{as:"a",href:"https://corp.freee.co.jp/",variant:"outline",size:"sm",colorScheme:"gray",target:"_blank",rel:"noopener noreferer",children:"\u4f1a\u793e\u6982\u8981"}),(0,t.jsx)(o.zx,{as:"a",href:"https://jobs.freee.co.jp/",variant:"outline",size:"sm",colorScheme:"gray",target:"_blank",rel:"noopener noreferer",children:"\u63a1\u7528\u60c5\u5831"})]})]})]})})},f=r(4051),x=r.n(f),v=[{name:"frame1",path:"frames/frame1.png",thumbnail:"frames/thumb_frame1.png"},{name:"frame2",path:"frames/frame2.png",thumbnail:"frames/thumb_frame2.png"},{name:"frame2",path:"frames/frame3.png",thumbnail:"frames/thumb_frame3.png"}],p=(0,u.createContext)({currentFrame:v[0],dispatch:function(){}}),m=function(e){var n=e.children,r=(0,u.useReducer)((function(e,n){return n.frame}),v[0]),i=r[0],a=r[1];return(0,t.jsx)(p.Provider,{value:{currentFrame:i,dispatch:a},children:n})},g=function(){var e=(0,u.useContext)(p),n=e.currentFrame,r=e.dispatch;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.xu,{as:"ul",display:"flex",backgroundColor:"whiteAlpha.800",borderRadius:"lg",overflowX:"auto",p:"2",flexWrap:"nowrap",listStyleType:"none",children:v.map((function(e,i){return(0,t.jsx)(a.xu,{as:"li",m:"2",borderColor:n.path===e.path?"brand.400":"gray.200",background:"#fff",borderStyle:"solid",borderWidth:"1px",borderRadius:"lg",p:"2",children:(0,t.jsx)(a.xu,{as:"button","aria-pressed":n.path===e.path,onClick:function(){return r({type:"set",frame:e})},children:(0,t.jsx)(a.xu,{width:"32",height:"32",background:"gray.300",children:(0,t.jsx)("img",{src:"".concat((0,l.i)(e.thumbnail)),alt:e.name})})})},i)}))})})},j=function(e){return new Promise((function(n,r){var t=new Image;t.src=e,t.addEventListener("load",(function(){n(t)})),t.addEventListener("error",(function(){r(t)}))}))};function b(e,n,r,t,i,a,o){try{var s=e[a](o),c=s.value}catch(u){return void r(u)}s.done?n(c):Promise.resolve(c).then(t,i)}function w(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var a=e.apply(n,r);function o(e){b(a,t,i,o,s,"next",e)}function s(e){b(a,t,i,o,s,"throw",e)}o(void 0)}))}}var E=function(){var e=w(x().mark((function e(n){var r,t,i,a,o,s=arguments;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:1080,e.next=3,j(n);case 3:return t=e.sent,(i=document.createElement("canvas")).width=r,i.height=r,a=r/Math.min(t.naturalHeight,t.naturalWidth),null===(o=i.getContext("2d"))||void 0===o||o.drawImage(t,a*(Math.min(t.naturalHeight,t.naturalWidth)-t.naturalWidth)/2,a*(Math.min(t.naturalHeight,t.naturalWidth)-t.naturalHeight)/2,a*t.naturalWidth,a*t.naturalHeight),e.abrupt("return",i.toDataURL());case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),k=function(e){var n=e.onPhotoSelected,r=(0,u.useRef)(null);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.zx,{onClick:function(){var e;null===(e=r.current)||void 0===e||e.click()},variant:"secondary",children:"\u5199\u771f\u3092\u9078\u629e"}),(0,t.jsx)("input",{type:"file",accept:"image/*",ref:r,style:{display:"none"},onChange:function(e){var r=e.target.files;if(r){var t=r[0],i=new FileReader;i.addEventListener("load",(function(){w(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"!==typeof i.result){e.next=6;break}return e.t0=n,e.next=4,E(i.result);case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})))()})),t&&i.readAsDataURL(t)}}})]})},y=function(){var e=(0,u.useState)(!1),n=e[0],r=e[1],t=(0,u.useState)(!1),i=t[0],a=t[1],o=(0,u.useState)(!1),s=o[0],c=o[1];return(0,u.useEffect)((function(){var e=navigator.userAgent;(e.indexOf("iPhone")>=0||e.indexOf("iPad")>=0||e.indexOf("iPod")>=0)&&r(!0),"share"in navigator&&a(!0),"clipboard"in navigator&&"writeText"in navigator.clipboard&&c(!0)}),[]),{isIOS:n,shareAvailable:i,clipboardWriteTextAvailable:s}};function S(e,n,r,t,i,a,o){try{var s=e[a](o),c=s.value}catch(u){return void r(u)}s.done?n(c):Promise.resolve(c).then(t,i)}function P(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var a=e.apply(n,r);function o(e){S(a,t,i,o,s,"next",e)}function s(e){S(a,t,i,o,s,"throw",e)}o(void 0)}))}}var R=function(e){var n=e.onPhotoTaken,r=(0,u.useRef)(null),i=(0,u.useState)([]),s=i[0],c=i[1],d=(0,u.useState)(-1),h=d[0],f=d[1],v=y().isIOS,m=(0,u.useState)("user"),j=m[0],b=m[1],w=(0,u.useContext)(p).currentFrame,E=(0,u.useState)(!1),S=E[0],R=E[1],C=(0,u.useState)(!1),_=C[0],T=C[1],A=(0,u.useState)(!1),W=A[0],M=A[1],z=function(){var e=P(x().mark((function e(n){var t;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({audio:!1,video:{deviceId:n,width:{ideal:1920,min:480},height:{ideal:1080,min:480}}});case 3:t=e.sent,r.current&&(r.current.srcObject=t),T(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),R(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),D=function(){var e=P(x().mark((function e(n){var t;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:n,width:{ideal:1920,min:480},height:{ideal:1080,min:480}}});case 3:t=e.sent,r.current&&(r.current.srcObject=t),T(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),R(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){P(x().mark((function e(){var n,r;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===(n=navigator.mediaDevices)||void 0===n?void 0:n.enumerateDevices)){e.next=8;break}return e.next=4,navigator.mediaDevices.enumerateDevices();case 4:r=e.sent.filter((function(e){return"videoinput"===e.kind})),f(0),c(r),r.length>0&&z(r[0].deviceId);case 8:case"end":return e.stop()}}),e)})))()}),[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.Kq,{children:[(0,t.jsxs)(a.xu,{w:"100%",position:"relative",children:[(0,t.jsx)(a.oM,{width:"100%",ratio:1,borderRadius:"lg",overflow:"hidden",children:(0,t.jsx)("video",{style:{},playsInline:!0,autoPlay:!0,ref:r})}),_?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.xu,{inset:0,position:"absolute",borderRadius:"lg",overflow:"hidden",children:(0,t.jsx)("img",{src:(0,l.i)(w.path),alt:""})}),(0,t.jsx)(a.xu,{inset:0,position:"absolute",borderRadius:"lg",overflow:"hidden",pointerEvents:"none",backgroundColor:"#fff",opacity:W?1:0,transitionProperty:"opacity",transitionDuration:"0.2s","aria-hidden":"true"})]}):(0,t.jsx)(a.oM,{ratio:1,inset:0,position:"absolute",borderRadius:"lg",background:"whiteAlpha.800",children:(0,t.jsx)(a.M5,{children:(0,t.jsxs)(a.gC,{children:[S?(0,t.jsx)(a.xv,{children:"\u30ab\u30e1\u30e9\u304c\u6709\u52b9\u5316\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f"}):(0,t.jsx)(a.xv,{children:"\u30ab\u30e1\u30e9\u3092\u8d77\u52d5\u4e2d\u3067\u3059"}),(0,t.jsx)(k,{onPhotoSelected:n})]})})}),_&&(s.length>=2||v)&&(0,t.jsx)(a.xu,{position:"absolute",bottom:2,left:"0",borderRadius:"lg",width:"100%",children:(0,t.jsx)(a.M5,{children:(0,t.jsx)(o.zx,{m:1,colorScheme:"brand",variant:"skeleton",onClick:function(){v?(D("user"===j?"environment":"user"),b("user"===j?"environment":"user")):h<s.length-1?(f(h+1),z(s[h+1].deviceId)):(f(0),z(s[0].deviceId))},children:"\u30ab\u30e1\u30e9\u3092\u5909\u66f4"})})})]}),_&&(0,t.jsx)(o.zx,{colorScheme:"brand",onClick:function(){if(r.current){var e=function(e){var n=document.createElement("canvas");n.width=e.videoWidth,n.height=e.videoHeight;var r=n.getContext("2d");return null===r||void 0===r||r.drawImage(e,0,0,e.videoWidth,e.videoHeight),n.toDataURL()}(r.current);(new Image).src=e,M(!0),setTimeout((function(){return n(e)}),200)}},children:"\u5199\u771f\u3092\u64ae\u308b"}),_&&(0,t.jsx)(k,{onPhotoSelected:n}),_&&(0,t.jsx)(g,{})]})})},C=r(336);function _(e,n,r,t,i,a,o){try{var s=e[a](o),c=s.value}catch(u){return void r(u)}s.done?n(c):Promise.resolve(c).then(t,i)}var T=function(){var e,n=(e=x().mark((function e(n,r,t,i){var a,o,s,c;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i||document.createElement("canvas"),e.next=3,Promise.all(n.map((function(e){return j(e)})));case 3:return(o=e.sent).length>0&&(s=o.reduce((function(e,n){return Math.min(e,n.naturalWidth,n.naturalHeight)}),Math.min(o[0].naturalHeight,o[0].naturalWidth)),a.width=s,a.height=s,c=a.getContext("2d"),o.forEach((function(e){var n=s/Math.min(e.naturalWidth,e.naturalHeight);null===c||void 0===c||c.drawImage(e,(s-n*e.naturalWidth)/2,(s-n*e.naturalHeight)/2,n*e.naturalWidth,n*e.naturalHeight)}))),e.abrupt("return",a.toDataURL(r,t));case 6:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,i){var a=e.apply(n,r);function o(e){_(a,t,i,o,s,"next",e)}function s(e){_(a,t,i,o,s,"throw",e)}o(void 0)}))});return function(e,r,t,i){return n.apply(this,arguments)}}();function A(e,n,r,t,i,a,o){try{var s=e[a](o),c=s.value}catch(u){return void r(u)}s.done?n(c):Promise.resolve(c).then(t,i)}function W(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var a=e.apply(n,r);function o(e){A(a,t,i,o,s,"next",e)}function s(e){A(a,t,i,o,s,"throw",e)}o(void 0)}))}}var M=function(e){var n=e.imageURL,r=e.onBack,i=(0,u.useRef)(null),s=(0,u.useState)(""),c=s[0],h=s[1],f=(0,u.useContext)(p).currentFrame.path,v=y(),m=v.isIOS,j=v.shareAvailable,b=v.clipboardWriteTextAvailable,w=(0,C.pm)(),E=(0,u.useState)(!1),k=E[0],S=E[1];return(0,u.useEffect)((function(){return S(!0)}),[]),(0,u.useEffect)((function(){W(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=h,e.next=3,T([n,(0,l.i)(f)],"image/jpeg",.9,i.current||void 0);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[n,f]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.Kq,{children:[(0,t.jsxs)(a.xu,{position:"relative",children:[c&&(0,t.jsx)(a.oM,{maxW:"100%",ratio:1,borderRadius:"lg",overflow:"hidden",position:"absolute",inset:"0",children:(0,t.jsx)("img",{src:c,alt:"\u64ae\u5f71\u3057\u305f\u5199\u771f"})}),(0,t.jsx)(a.oM,{maxW:"100%",ratio:1,borderRadius:"lg",overflow:"hidden","aria-hidden":"true",children:(0,t.jsx)(a.xu,{position:"relative",zIndex:"1",background:"#fff",opacity:k?0:1,pointerEvents:"none",transitionProperty:"opacity",transitionDuration:"0.2s"})}),(0,t.jsx)(a.xu,{position:"absolute",top:2,left:2,borderRadius:"lg",children:(0,t.jsx)(o.zx,{m:1,colorScheme:"brand",variant:"skeleton",onClick:r,children:"\u30ab\u30e1\u30e9\u306b\u623b\u308b"})})]}),(0,t.jsx)(g,{}),(0,t.jsx)(a.xu,{p:"4",background:"rgba(255,255,255,0.8)",borderRadius:"xl",children:(0,t.jsxs)(a.Kq,{children:[(0,t.jsxs)(a.xv,{align:"center",fontSize:"sm",children:[(0,t.jsx)(d.V,{children:"\u30cf\u30c3\u30b7\u30e5\u30bf\u30b0"}),(0,t.jsx)(d.V,{children:b?(0,t.jsx)(a.rU,{as:"button",onClick:W(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(" #TRP2022 #TRP2022_freee");case 2:w({position:"bottom",title:"\u30cf\u30c3\u30b7\u30e5\u30bf\u30b0\u3092\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f",status:"success",duration:9e3,isClosable:!0});case 3:case"end":return e.stop()}}),e)}))),children:(0,t.jsx)("strong",{children:"#TRP2022 #TRP2022_freee"})}):(0,t.jsx)("strong",{children:"#TRP2022 #TRP2022_freee"})}),(0,t.jsx)(d.V,{children:"\u3092\u3064\u3051\u3066\u3001"}),(0,t.jsx)(d.V,{children:"\u5199\u771f\u3092SNS\u306b\u30b7\u30a7\u30a2\u3057\u3088\u3046\uff01"})]}),m&&(0,t.jsxs)(a.xv,{fontSize:"xs",align:"center",children:[(0,t.jsx)(d.V,{children:"\u5199\u771f\u3092\u9577\u62bc\u3057\u2192\u4fdd\u5b58\u3057\u3066\u3001"}),(0,t.jsx)(d.V,{children:"\u30cf\u30c3\u30b7\u30e5\u30bf\u30b0\u3092\u3064\u3051\u3066\u6295\u7a3f\u3057\u3088\u3046"})]}),(0,t.jsx)(a.M5,{children:j&&!m?(0,t.jsx)(o.zx,{colorScheme:"brand",onClick:function(){i.current&&i.current.toBlob((function(e){if(e){var n=new File([e],"photo.jpg",{type:"image/jpeg"});navigator.share({text:"\u81ea\u7136\u4f53\u3067\u3058\u3076\u3093\u3089\u3057\u304f\u3001\u6771\u4eac\u30ec\u30a4\u30f3\u30dc\u30fc\u30d7\u30e9\u30a4\u30c92022\u3092\u697d\u3057\u3093\u3067\u3044\u307e\u3059\uff01 #TRP2022 #TRP2022_freee ",files:[n]})}}),"image/jpeg",.9)},children:"\u5199\u771f\u3092SNS\u306b\u30b7\u30a7\u30a2"}):(0,t.jsx)(o.zx,{as:"a",href:"https://twitter.com/intent/tweet?text=%E8%87%AA%E7%84%B6%E4%BD%93%E3%81%A7%E3%81%98%E3%81%B6%E3%82%93%E3%82%89%E3%81%97%E3%81%8F%E3%80%81%E6%9D%B1%E4%BA%AC%E3%83%AC%E3%82%A4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%97%E3%83%A9%E3%82%A4%E3%83%892022%E3%82%92%E6%A5%BD%E3%81%97%E3%82%93%E3%81%A7%E3%81%84%E3%81%BE%E3%81%99%EF%BC%81%20%23TRP2022%20%23TRP2022_freee",colorScheme:"twitter",target:"_blank",rel:"noopener noreferer",children:"Twitter\u306b\u6295\u7a3f"})})]})}),c&&!m&&(0,t.jsx)(o.zx,{colorScheme:"brand",variant:"secondary",onClick:function(){if(i.current){var e=document.createElement("a");e.href=c,e.download="photo.jpg",e.click()}},children:"\u5199\u771f\u3092\u4fdd\u5b58"})]}),(0,t.jsx)("canvas",{width:1080,height:1080,ref:i,style:{display:"none"}})]})},z=function(){var e=(0,u.useState)(0),n=e[0],r=e[1],l=(0,u.useState)(""),d=l[0],f=l[1],x=(0,u.useRef)(null);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.default,{children:(0,t.jsx)("title",{children:"\u5199\u771f\u3092\u64ae\u308b - TRP2022 Photo Booth by freee"})}),(0,t.jsxs)("main",{children:[(0,t.jsx)(i.TX,{children:(0,t.jsxs)("h1",{"aria-live":"polite","aria-atomic":"true",ref:x,children:[0===n&&"\u5199\u771f\u3092\u64ae\u308a\u307e\u3057\u3087\u3046",1===n&&"\u30d5\u30ec\u30fc\u30e0\u3092\u9078\u3093\u3067SNS\u306b\u6295\u7a3f\u3057\u307e\u3057\u3087\u3046"]})}),(0,t.jsx)(a.W2,{mt:"4",children:(0,t.jsx)(a.Kq,{children:(0,t.jsxs)(m,{children:[0===n&&(0,t.jsx)(R,{onPhotoTaken:function(e){f(e),r(1)}}),1===n&&(0,t.jsx)(M,{imageURL:d,onBack:function(){return r(0)}})]})})})]}),(0,t.jsx)("aside",{children:(0,t.jsx)(h,{})}),(0,t.jsx)("nav",{children:(0,t.jsx)(a.M5,{mt:"2",children:(0,t.jsx)(c.default,{href:"/",passHref:!0,children:(0,t.jsx)(o.zx,{as:"a",variant:"skeleton",colorScheme:"brand",border:"0",children:"\u6700\u521d\u306e\u753b\u9762\u306b\u623b\u308b"})})})})]})}},7691:function(e,n,r){"use strict";r.d(n,{i:function(){return i}});var t=r(1752),i=function(e){var n=(0,t.default)().publicRuntimeConfig;return"".concat(n.urlPrefix,"/").concat(e)}}},function(e){e.O(0,[143,336,774,888,179],(function(){return n=2351,e(e.s=n);var n}));var n=e.O();_N_E=n}]);