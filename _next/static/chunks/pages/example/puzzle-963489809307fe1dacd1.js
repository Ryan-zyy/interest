(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[709],{9351:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return T}});var n=r(5400),i=r(4942),a=r(7538),o=r(9439),l=r(7294),u=r(237),c=r(8465),s=r(1187),f=r(7085),h=r(9101);function p(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){l=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw a}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e){return new Promise((function(t){var r=document.createElement("canvas"),n=r.getContext("2d");r.width=1e3,r.height=1e3;var i=new Image;i.src=e,i.onload=function(){var a=r.height/r.height;i.height*=a,i.width*=a,n.drawImage(i,0,0,r.width,r.height);for(var o=n.getImageData(0,0,r.width,r.height).data,l=0,u=0,c=0,s=0,f=0;f<o.length;f+=4)l+=o[f],u+=o[f+1],c+=o[f+2],s+=o[f+3];t({rgba:[Math.round(l/(o.length/4)),Math.round(u/(o.length/4)),Math.round(c/(o.length/4)),Math.round(s/(o.length/4))],url:e})}}))}function g(e){return window.URL.createObjectURL(e)}var v=r(5893);function b(e){var t=e.onChange,r=(0,l.useState)(!1),n=r[0],i=r[1],a=(0,l.useState)(""),o=a[0],u=a[1],p=(0,v.jsxs)("div",{children:[n?(0,v.jsx)(f.Z,{}):(0,v.jsx)(h.Z,{}),(0,v.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,v.jsx)(c.Z,{name:"avatar",listType:"picture-card",className:"interest-puzzle-picture",showUploadList:!1,onChange:function(e){if(!("image/jpeg"===e.file.type||"image/png"===e.file.type))return s.default.error("\u53ea\u652f\u6301\u56fe\u7247\u683c\u5f0f"),void e.fileList.pop();if("uploading"!==e.file.status){if("done"===e.file.status){var r=g(e.file.originFileObj);e.file.imageUrl=r,i(!1),u(r)}t(e)}else i(!0)},customRequest:function(e){e.onSuccess()},children:o?(0,v.jsx)("img",{src:o,alt:"avatar",style:{width:"100%"},onLoad:function(e){var t=e.target,r=t.width,n=t.height,i=t.classList;r>n?i.add("object-fit"):i.remove("object-fit")}}):p})}var y=r(6697),j=r(5861),w=r(7757),x=r.n(w);function O(e){return new Promise((function(t,r){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return r(e)}}))}var P=(0,v.jsxs)("div",{children:[(0,v.jsx)(h.Z,{}),(0,v.jsx)("div",{style:{marginTop:8},children:"Upload"})]});function S(e){var t=e.onChange,r=(0,l.useState)([]),n=r[0],i=r[1],a=(0,l.useState)(""),o=a[0],u=a[1],f=(0,l.useState)(""),h=f[0],p=f[1],d=function(){var e=(0,j.Z)(x().mark((function e(t){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.url||t.preview){e.next=4;break}return e.next=3,O(t.originFileObj);case 3:t.preview=e.sent;case 4:u(t.url||t.preview),p(t.name||t.url.substring(t.url.lastIndexOf("/")+1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c.Z,{customRequest:function(e){e.onSuccess()},listType:"picture-card",fileList:n,onPreview:d,onChange:function(e){var r=e.file,n=e.fileList;if(!("image/jpeg"===r.type||"image/png"===r.type))return s.default.error("\u53ea\u652f\u6301\u56fe\u7247\u683c\u5f0f"),void n.pop();n.forEach((function(e){e.blobURL=g(e.originFileObj)})),t({file:r,fileList:n}),i(n)},multiple:!0,children:P}),(0,v.jsx)(y.Z,{visible:!!o,title:h,footer:null,onCancel:function(){return u("")},children:(0,v.jsx)("img",{alt:"example",style:{width:"100%"},src:o})})]})}var Z=r(6155);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){return(0,v.jsx)(Z.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))}var I=r(2777);function M(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){l=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw a}}}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function R(e,t){var r=e.url,n=e.width,i=void 0===n?800:n,a=e.height,o=void 0===a?800:a,u=e.pixel,c=void 0===u?8:u,s=e.fileList,f=e.onFinish,h=(0,l.useRef)(null),d=(0,l.useRef)(null),g=(0,l.useRef)([]),b=(0,l.useRef)([]);return(0,l.useImperativeHandle)(t,(function(){return{changeVal:function(e){var t=h.current,r=t.width,n=t.height,i=t.toDataURL({width:r,height:n,left:0,top:0,format:"png"}),a=document.createElement("a");a.download=e,a.href=i,document.body.appendChild(a),a.click(),document.body.removeChild(a)}}})),(0,l.useEffect)((function(){var e=new I.fabric.Canvas("canvas",{selectable:!1,selection:!1,hoverCursor:"pointer",enableRetinaScaling:!1}),t=e.getContext("2d");h.current=e,d.current=t}),[]),(0,l.useEffect)((function(){var e=h.current,t=d.current,n=e.width,i=e.height,a=Math.floor(n/c),o=function(){for(var r=[],n=0;n<e.height;n+=c)for(var i=0;i<e.width;i+=c){var o=t.getImageData(i,n,c,c).data;r[n/c*a+i/c]=[];for(var u=0;u<o.length;u+=4)r[n/c*a+i/c].push([o[u],o[u+1],o[u+2],o[u+3]])}g.current=function(e){var t,r=[],n=p(e);try{for(n.s();!(t=n.n()).done;){var i,a=t.value,o=0,l=0,u=0,c=0,s=p(a);try{for(s.s();!(i=s.n()).done;){var f=i.value;o+=f[0],l+=f[1],u+=f[2],c+=f[3]}}catch(h){s.e(h)}finally{s.f()}r.push([Math.round(o/a.length),Math.round(l/a.length),Math.round(u/a.length),Math.round(c/a.length)])}}catch(h){n.e(h)}finally{n.f()}return r}(r),l()},l=function(){var t,r=g.current,n=b.current,i=[],o=M(r);try{for(o.s();!(t=o.n()).done;){for(var l=t.value,u=0,s=1/0,h=0;h<n.length;h++){var p=n[h].rgba,d=Math.pow(p[0]-l[0],2)+Math.pow(p[1]-l[1],2)+Math.pow(p[2]-l[2],2)+Math.pow(p[3]-l[3],2);Math.sqrt(d)<s&&(s=Math.sqrt(d),u=h)}i.push(n[u].url)}}catch(y){o.e(y)}finally{o.f()}for(var m=function(t){I.fabric.Image.fromURL(i[t],(function(r){var n=r.height>r.width?c/r.width:c/r.height;r.set({left:t%a*c,top:Math.floor(t/a)*c,originX:"center",scaleX:n,scaleY:n}),e.add(r)}))},v=0;v<i.length;v++)m(v);f()};(0,j.Z)(x().mark((function t(){var a;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=[],s.forEach((function(e){a.push(m(e.blobURL))})),t.next=4,Promise.all(a);case 4:b.current=t.sent,I.fabric.Image.fromURL(r,(function(t){var r=t.height>t.width?n/t.width:i/t.height;t.set({left:n/2,originX:"center",top:0,scaleX:r,scaleY:r,selectable:!1}),t.on("added",(function(e){setTimeout((function(){o()}),500)})),e.add(t)}));case 6:case"end":return t.stop()}}),t)})))()}),[r,s,c,f]),(0,v.jsx)("canvas",{id:"canvas",width:i,height:o})}var C=(0,l.forwardRef)(R),N=r(5592),U=r(924),k=r(2850),z=r(358);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var D=[{val:"\u6839\u636e\u7ec4\u5408\u7d20\u6750\u62fc\u63a5\u6210\u76ee\u6807\u56fe\u7247\u3002"},{val:"* \u753b\u5e03\u5c3a\u5bf8\u4e3a\u6700\u7ec8\u751f\u6210\u56fe\u7247\u7684\u5c3a\u5bf8\uff0c\u503c\u8d8a\u5927\u5219\u5904\u7406\u901f\u5ea6\u8d8a\u6162\u3002"},{val:"* \u62fc\u56fe\u5355\u5143\u4e3a\u7ec4\u5408\u7d20\u6750\u7684\u5c3a\u5bf8\uff0c\u503c\u8d8a\u5c0f\u5219\u5904\u7406\u901f\u5ea6\u8d8a\u6162\u3002"}];function T(e){var t=a.Z.useForm(),r=(0,o.Z)(t,1)[0],c=(0,l.useState)({}),s=c[0],f=c[1],h=(0,l.useState)(!1),p=h[0],d=h[1],m=(0,l.useRef)(null),g=(0,l.useState)(!1),y=g[0],j=g[1];if(e.isMobile)return(0,v.jsx)(z.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e));var w=function(){m.current.changeVal(s.file.name)};return(0,v.jsx)(u.Z,{className:"interest-puzzle",title:"Puzzle",description:D,children:(0,v.jsxs)(a.Z,{name:"basic",form:r,initialValues:{size:3200,pixel:32},onFinish:function(e){f(e),d(!0),j(!0)},labelCol:{span:3},wrapperCol:{span:20,offset:1},children:[(0,v.jsx)(a.Z.Item,{valuePropName:"file",getValueFromEvent:function(e){return e&&e.file},label:"\u76ee\u6807\u56fe\u7247",name:"file",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u76ee\u6807\u56fe\u7247"}],children:(0,v.jsx)(b,{})}),(0,v.jsx)(a.Z.Item,{valuePropName:"fileList",getValueFromEvent:function(e){return e&&e.fileList},label:"\u7ec4\u5408\u7d20\u6750",name:"fileList",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7ec4\u5408\u7d20\u6750"}],children:(0,v.jsx)(S,{})}),(0,v.jsx)(a.Z.Item,{label:"\u753b\u5e03\u5c3a\u5bf8",name:"size",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u753b\u5e03\u5c3a\u5bf8"}],children:(0,v.jsx)(L,{marks:{800:"800px",1600:"1600px",3200:"3200px",6400:"6400px"},min:800,max:6400,step:800})}),(0,v.jsx)(a.Z.Item,{label:"\u62fc\u56fe\u5355\u5143",name:"pixel",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u62fc\u56fe\u5355\u5143\u5c3a\u5bf8"}],children:(0,v.jsx)(L,{marks:{8:"8px",16:"16px",32:"32px",64:"64px"},min:8,max:64,step:8})}),(0,v.jsxs)(a.Z.Item,{wrapperCol:{span:20,offset:4},children:[(0,v.jsx)(n.default,{loading:y,icon:(0,v.jsx)(N.Z,{}),type:"primary",htmlType:"submit",children:"Generate"}),p&&!y&&(0,v.jsx)(n.default,{loading:y,onClick:w,icon:(0,v.jsx)(U.Z,{}),type:"primary",style:{marginLeft:20},children:"Export"}),p&&(0,v.jsx)(n.default,{onClick:function(){r.resetFields(),d(!1),j(!1)},icon:(0,v.jsx)(k.Z,{}),style:{marginLeft:20},children:"Reset"})]}),p&&(0,v.jsx)(a.Z.Item,{label:"\u9884\u89c8",style:{marginTop:50},children:(0,v.jsx)("div",{className:"interest-puzzle__canvas-wrapper",children:(0,v.jsx)(C,{ref:m,width:s.size,height:s.size,pixel:s.pixel,url:s.file.imageUrl,fileList:s.fileList,export:w,onFinish:function(){j(!1)}})})})]})})}},237:function(e,t,r){"use strict";var n=r(4184),i=r.n(n),a=r(7294),o=r(5893);function l(e,t){var r=e.children,n=e.className,a=e.title,l=e.description,u=e.isMobile;return(0,o.jsxs)("div",{className:i()("app-content",{"app-content--mobile":u},n),ref:t,children:[a&&(0,o.jsx)("h1",{className:"app-content__title",children:a}),(0,o.jsx)("ul",{className:"app-content__description",children:l&&l.length&&l.map((function(e,t){var r=e.val,n=e.style;return(0,o.jsx)("li",{style:n,className:"app-content__description-item",children:r},t)}))}),r]})}t.Z=(0,a.forwardRef)(l)},358:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(6671),i=r(5893);function a(){return(0,i.jsx)(n.default,{image:n.default.PRESENTED_IMAGE_SIMPLE,description:"\u6682\u4e0d\u652f\u6301\u79fb\u52a8\u7aef\u4f7f\u7528",style:{marginTop:100}})}},277:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example/puzzle",function(){return r(9351)}])},4960:function(){},6759:function(){},6272:function(){}},function(e){e.O(0,[498,676,453,400,829,660,398,774,888,179],(function(){return t=277,e(e.s=t);var t}));var t=e.O();_N_E=t}]);