(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[959],{3740:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(6495).Z,o=i(2648).Z,n=i(1598).Z,a=i(7273).Z,l=n(i(7294)),s=o(i(2636)),c=i(7757),d=i(3735),u=i(3341);i(4210);var f=o(i(7746));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"imgix",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,i,o,n,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===i&&a(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;o.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}})}let v=l.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:o,widthInt:n,qualityInt:s,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:g,placeholder:h,loading:p,srcString:v,config:w,unoptimized:b,loader:y,onLoadRef:E,onLoadingCompleteRef:S,setBlurComplete:C,setShowAltText:j,onLoad:_,onError:x}=e,z=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return p=f?"lazy":p,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},z,{loading:p,width:n,height:o,decoding:"async","data-nimg":g?"fill":"1",className:c,style:r({},d,u)},i,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&m(e,v,h,E,S,C,b))},[v,h,E,S,C,x,b,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,h,E,S,C,b)},onError:e=>{j(!0),"blur"===h&&C(!0),x&&x(e)}})))}),w=l.forwardRef((e,t)=>{let i,o;var n,{src:m,sizes:w,unoptimized:b=!1,priority:y=!1,loading:E,className:S,quality:C,width:j,height:_,fill:x,style:z,onLoad:R,onLoadingComplete:k,placeholder:O="empty",blurDataURL:I,layout:M,objectFit:P,objectPosition:A,lazyBoundary:L,lazyRoot:N}=e,B=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=l.useContext(u.ImageConfigContext),F=l.useMemo(()=>{let e=g||D||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:i})},[D]),W=B,T=W.loader||f.default;delete W.loader;let q="__next_img_default"in T;if(q){if("custom"===F.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=T;T=t=>{let{config:i}=t,r=a(t,["config"]);return e(r)}}if(M){"fill"===M&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(z=r({},z,e));let t={responsive:"100vw",fill:"100vw"}[M];t&&!w&&(w=t)}let G="",Z=p(j),U=p(_);if("object"==typeof(n=m)&&(h(n)||void 0!==n.src)){let e=h(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,o=e.blurHeight,I=I||e.blurDataURL,G=e.src,!x){if(Z||U){if(Z&&!U){let t=Z/e.width;U=Math.round(e.height*t)}else if(!Z&&U){let t=U/e.height;Z=Math.round(e.width*t)}}else Z=e.width,U=e.height}}let V=!y&&("lazy"===E||void 0===E);((m="string"==typeof m?m:G).startsWith("data:")||m.startsWith("blob:"))&&(b=!0,V=!1),F.unoptimized&&(b=!0),q&&m.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(b=!0);let[J,Y]=l.useState(!1),[H,$]=l.useState(!1),K=p(C),Q=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:A}:{},H?{}:{color:"transparent"},z),X="blur"===O&&I&&!J?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:Z,heightInt:U,blurWidth:i,blurHeight:o,blurDataURL:I,objectFit:Q.objectFit}),'")')}:{},ee=function(e){let{config:t,src:i,unoptimized:r,width:o,quality:n,sizes:a,loader:l}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,i){let{deviceSizes:r,allSizes:o}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let n=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:n,kind:"x"}}(t,o,a),d=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,r)=>"".concat(l({config:t,src:i,quality:n,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:l({config:t,src:i,quality:n,width:s[d]})}}({config:F,src:m,unoptimized:b,width:Z,quality:K,sizes:w,loader:T}),et=m,ei={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:W.crossOrigin},er=l.useRef(R);l.useEffect(()=>{er.current=R},[R]);let eo=l.useRef(k);l.useEffect(()=>{eo.current=k},[k]);let en=r({isLazy:V,imgAttributes:ee,heightInt:U,widthInt:Z,qualityInt:K,className:S,imgStyle:Q,blurStyle:X,loading:E,config:F,fill:x,unoptimized:b,placeholder:O,loader:T,srcString:et,onLoadRef:er,onLoadingCompleteRef:eo,setBlurComplete:Y,setShowAltText:$},W);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},en,{ref:t})),y?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},ei))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:o,blurDataURL:n,objectFit:a}=e,l=r||t,s=o||i,c=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&o?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(r,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},9008:function(e,t,i){e.exports=i(2636)},5675:function(e,t,i){e.exports=i(3740)}}]);