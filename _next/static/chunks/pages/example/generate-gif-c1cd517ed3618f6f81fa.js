(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4],{9001:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(5400),i=n(4806),a=n(6155),s=n(1187),c=n(5861),o=n(4942),l=n(7538),u=n(9439),f=n(7757),p=n.n(f),h=n(237),d=n(3911),m=n(7294),g=n(5592),j=n(2850),v=n(8465),x=n(4391),b=n(5893);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e){var t=e.onFinish,n=e.handleReset,i=e.onChange,a={maxCount:1,listType:"picture",onChange:function(e){var r=e.file;console.log("onChange:",e),"done"===r.status?(t(e),i({file:r})):0===r.percent&&n()},customRequest:function(e){console.log("customRequest: ",e),e.onSuccess()}};return(0,b.jsx)(v.Z,y(y({},a),{},{children:(0,b.jsx)(r.default,{icon:(0,b.jsx)(x.Z,{}),children:"Upload"})}))}var Z=n(5925),F=n(358);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=[{val:"\u4e0a\u4f20\u89c6\u9891\u751f\u6210 GIF\u3002"},{val:"* \u7eaf\u5728\u7ebf\u8f6c\u6362\uff0c\u65e0\u9700\u4e0a\u4f20\u81f3\u540e\u53f0\uff0c\u8bf7\u653e\u5fc3\u4f7f\u7528\u3002"},{val:"* \u4f9d\u8d56\u5e93\uff1agifshot\uff08https://github.com/yahoo/gifshot\uff09"},{val:"* \u6682\u4e0d\u652f\u6301\u79fb\u52a8\u7aef\u4f7f\u7528\u3002"}];function k(e){var t=l.Z.useForm(),n=(0,u.Z)(t,1)[0],o=(0,m.useState)(""),f=o[0],v=o[1],x=(0,m.useState)(0),w=x[0],y=x[1],P=(0,m.useState)([]),k=P[0],E=P[1],N=(0,m.useState)(!1),S=N[0],C=N[1],G=(0,m.useState)(""),D=G[0],R=G[1],T=(0,m.useState)(0),q=T[0],L=T[1],M=(0,m.useState)([250,250]),B=M[0],V=M[1];if(e.isMobile)return(0,b.jsx)(F.Z,I({},e));var W=function(e){var t=document.createElement("video");t.src=e,t.addEventListener("canplay",function(){var r=(0,c.Z)(p().mark((function r(i){var a;return p().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=~~t.duration,y(a),n.setFieldsValue({fragment:[0,a]}),r.t0=E,r.next=6,Promise.all([(0,Z.pB)(e,0),(0,Z.pB)(e,a)]);case 6:r.t1=r.sent,(0,r.t0)(r.t1);case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},U=function(){var e=(0,c.Z)(p().mark((function e(t){var n,r,i;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.fragment){e.next=9;break}return n=(0,u.Z)(t.fragment,2),r=n[0],i=n[1],e.t0=E,e.next=5,Promise.all([(0,Z.pB)(f,r),(0,Z.pB)(f,i)]);case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=10;break;case 9:t.width?V([t.width,B[1]]):t.height&&V([B[0],t.height]);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=(0,Z.Ds)(U,500),H=function(){v(""),y(0),E([]),R(""),L(0)},X={labelCol:{span:3},wrapperCol:{span:20,offset:1},labelAlign:"left"},z=function(e){C(!0),D&&R("");var t=(0,u.Z)(e.fragment,2),n=t[0],r=t[1];(0,d.createGIF)({gifWidth:e.width,gifHeight:e.height,video:[f],numWorkers:2,offset:n,numFrames:10*(r-n),progressCallback:function(e){L(Math.round(100*e))}},(function(e){var t=e.error,n=e.image;t?s.default.warning(t):(R(n),L(0),C(!1))}))},J=function(){var e=(0,c.Z)(p().mark((function e(){var t,r,i,a,c,o;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=100,e.prev=1,e.next=4,n.validateFields();case 4:return r=e.sent,C(!0),D&&R(""),i=(0,u.Z)(r.fragment,2),a=i[0],c=i[1],e.next=10,(0,Z.v8)({src:f,interval:t,startTime:a,duration:c-a,width:r.width,height:r.height});case 10:o=e.sent,(0,d.createGIF)({gifWidth:r.width,gifHeight:r.height,images:o,numWorkers:2,progressCallback:function(e){L(Math.round(100*e))}},(function(e){var t=e.error,n=e.image;t?s.default.warning(t):(R(n),L(0),C(!1))})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),s.default.warning("\u8bf7\u6309\u8981\u6c42\u8bbe\u7f6e\u5185\u5bb9");case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return(0,b.jsx)(h.Z,I(I({className:"interest-generate-gif",title:"Generate GIF",description:_},e),{},{children:(0,b.jsx)("div",{className:"interest-generate-gif__content",children:(0,b.jsxs)(l.Z,I(I({name:"basic",form:n,initialValues:{width:B[0],height:B[1]},onFinish:function(e){console.log("onFinish: ",e),z(e)}},X),{},{onValuesChange:A,children:[(0,b.jsx)(l.Z.Item,{label:"\u4e0a\u4f20\u89c6\u9891",name:"file",valuePropName:"file",getValueFromEvent:function(e){return e&&e.file},rules:[{required:!0,message:"\u8bf7\u4e0a\u4f20\u89c6\u9891"}],children:(0,b.jsx)(O,{onFinish:function(e){var t=e.file,n=window.URL.createObjectURL(t.originFileObj);v(n),W(n)},handleReset:H})}),f&&(0,b.jsx)(l.Z.Item,{label:"\u89c6\u9891\u9884\u89c8",children:(0,b.jsx)("video",{src:f,controls:!0,width:640,height:360})}),(0,b.jsx)(l.Z.Item,{label:"\u622a\u53d6\u89c6\u9891",name:"fragment",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u62fc\u56fe\u5355\u5143\u5c3a\u5bf8"}],children:(0,b.jsx)(a.Z,{disabled:!w,range:!0,max:w,tipFormatter:function(e){var t="";return e>60&&(t+="".concat(~~(e/60),"min"),e%=60),t+="".concat(e,"s")}})}),(0,b.jsx)(l.Z.Item,{label:"GIF \u957f\u5ea6",name:"width",rules:[{required:!0,message:"\u8bf7\u9009\u62e9 GIF \u957f\u5ea6"}],children:(0,b.jsx)(a.Z,{min:100,max:500,step:25,marks:{100:"100px",250:"250px",500:"500px"}})}),(0,b.jsx)(l.Z.Item,{label:"GIF \u9ad8\u5ea6",name:"height",rules:[{required:!0,message:"\u8bf7\u9009\u62e9 GIF \u9ad8\u5ea6"}],children:(0,b.jsx)(a.Z,{min:100,max:500,step:25,marks:{100:"100px",250:"250px",500:"500px"}})}),k[0]&&(0,b.jsx)(l.Z.Item,I(I({label:"\u5f00\u59cb\u5e27"},X),{},{children:(0,b.jsx)("img",{src:k[0],alt:"preview",style:{width:B[0],height:B[1],objectFit:"cover"}})})),k[1]&&(0,b.jsx)(l.Z.Item,I(I({label:"\u7ed3\u675f\u5e27"},X),{},{children:(0,b.jsx)("img",{src:k[1],alt:"preview",style:{width:B[0],height:B[1],objectFit:"cover"}})})),S&&(0,b.jsx)(l.Z.Item,I(I({label:"\u751f\u6210\u4e2d"},X),{},{children:(0,b.jsx)(i.default,{percent:q})})),D&&(0,b.jsx)(l.Z.Item,I(I({label:"GIF"},X),{},{children:(0,b.jsx)("img",{src:D,alt:"result"})})),(0,b.jsxs)(l.Z.Item,{wrapperCol:{span:20,offset:4},children:[(0,b.jsx)(r.default,{loading:S,icon:(0,b.jsx)(g.Z,{}),type:"primary",htmlType:"submit",children:"Generate"}),(0,b.jsx)(r.default,{loading:S,icon:(0,b.jsx)(g.Z,{}),type:"primary",style:{marginLeft:20},onClick:J,children:"Generate String GIF"}),!S&&(0,b.jsx)(r.default,{onClick:function(){n.resetFields(),H()},icon:(0,b.jsx)(j.Z,{}),style:{marginLeft:20},children:"Reset"})]})]}))})}))}},237:function(e,t,n){"use strict";var r=n(4184),i=n.n(r),a=n(7294),s=n(5893);function c(e,t){var n=e.children,r=e.className,a=e.title,c=e.description,o=e.isNarrow;return(0,s.jsxs)("div",{className:i()("app-content",{"app-content--narrow":o},r),ref:t,children:[a&&(0,s.jsx)("h1",{className:"app-content__title",children:a}),(0,s.jsx)("ul",{className:"app-content__description",children:c&&c.length&&c.map((function(e,t){var n=e.val,r=e.style;return(0,s.jsx)("li",{style:r,className:"app-content__description-item",children:n},t)}))}),n]})}t.Z=(0,a.forwardRef)(c)},358:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(6671),i=n(5893);function a(){return(0,i.jsx)(r.default,{image:r.default.PRESENTED_IMAGE_SIMPLE,description:"\u6682\u4e0d\u652f\u6301\u79fb\u52a8\u7aef\u4f7f\u7528",style:{marginTop:100}})}},2193:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example/generate-gif",function(){return n(9001)}])}},function(e){e.O(0,[676,806,400,829,660,946,774,888,179],(function(){return t=2193,e(e.s=t);var t}));var t=e.O();_N_E=t}]);