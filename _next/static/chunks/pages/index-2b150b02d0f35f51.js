(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8950)}])},8950:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var a=n(5893),i=n(9008),o=n.n(i),s=n(9034),r=n.n(s),l=n(8184),c=n(7294),u=function(){let[e,t]=(0,c.useState)(!1);(0,c.useEffect)(()=>{if(e){let e=setTimeout(()=>{t(!1)},3e3);return()=>clearTimeout(e)}},[e]);let n=()=>{t(!0),navigator.clipboard.writeText("<@920239961087807549>")};return(0,a.jsx)("div",{children:(0,a.jsxs)("span",{onClick:n,onMouseLeave:()=>t(!1),children:[(0,a.jsx)("span",{className:"discord-tag","aria-expanded":"false",role:"button",children:"@クインシー (小獅)#6822"}),e&&(0,a.jsx)("div",{className:"theme-dark layer-2BGhQ8 disabledPointerEvents-cGr1My",children:(0,a.jsxs)("div",{className:"tooltip-33Jwqe tooltipTop-CgYHUZ tooltipGreen-cAApx5 tooltipDisablePointerEvents-3dgGo3",style:{opacity:1,transform:"none"},children:[(0,a.jsx)("div",{className:"tooltipPointer-sMBQqe",style:{left:"calc(50% + 0px)"}}),(0,a.jsx)("div",{className:"tooltipContent-38tm3I",children:(0,a.jsx)("div",{children:"Copied!"})})]})})]})})},d=n(5675),m=n.n(d);function y(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.default,{}),(0,a.jsx)(o(),{children:(0,a.jsx)("title",{children:"QuincyNyan"})}),(0,a.jsxs)("div",{className:"".concat(r().container," container-lg px-3 my-5 markdown-body"),children:[(0,a.jsx)("header",{id:"myHeader",children:(0,a.jsx)("h1",{children:(0,a.jsx)("a",{href:"https://quinc.nekonyan.fun/",children:"quincynyan"})})}),(0,a.jsxs)("ul",{className:"unol",children:[(0,a.jsx)("li",{className:"orl",children:"\uD83D\uDC4B Hi there, I’m QuincyNyan!"}),(0,a.jsx)("li",{className:"orl",children:"\uD83D\uDC40 I’m interested in all things kawaii and fun"}),(0,a.jsx)("li",{className:"orl",children:"\uD83C\uDF31 I’m currently learning new coding tricks and techniques"}),(0,a.jsx)("li",{className:"orl",children:"\uD83D\uDC9E️ I’m looking to collaborate on cute projects (and maybe dates too \uD83E\uDD7A\uD83D\uDC9C)"}),(0,a.jsxs)("li",{className:"orl",children:["\uD83D\uDCEB You can reach me at ",(0,a.jsx)(u,{})," on Discord"]})]}),(0,a.jsx)("p",{className:"para",children:"I'm just an ordinary gamer living in a cute little house on a cute little street in a cute little town in a cute little city in a cute little state in a cute little country on a cute little continent on a cute little planet in a cute little Solar System in a cute little galaxy in a cute little universe, playing an ordinary game called Minecraft."}),(0,a.jsx)("div",{className:"para",children:(0,a.jsx)("div",{className:r().metrics,children:(0,a.jsx)(m(),{src:"https://metrics.lecoq.io/quincynyan?template=classic&repositories.forks=true&isocalendar=1&activity=1&isocalendar.duration=half-year&activity.limit=5&activity.load=300&activity.days=14&activity.filter=all&activity.visibility=all&activity.timestamps=false&config.timezone=Asia%2FRangoon",alt:"Metrics (Reload if you see this)",fill:!0,unoptimized:!0})})}),(0,a.jsx)("div",{className:"para",children:(0,a.jsxs)("div",{className:r().stats,children:[(0,a.jsx)(m(),{src:"https://github-readme-stats.vercel.app/api?username=quincynyan&show_icons=true&theme=dracula",alt:"QuincyNyan's GitHub stats",fill:!0,unoptimized:!0}),(0,a.jsx)(m(),{src:"https://github-readme-stats.vercel.app/api/top-langs/?username=quincynyan&layout=compact&langs_count=8",alt:"Top Langs",fill:!0,unoptimized:!0})]})}),(0,a.jsx)("p",{className:"para",children:"I mainly code in JavaScript, but I'm currently learning Python too! My first language was Java, and I'm looking forward to learning C++ in the future. Feel free to reach out to me and collaborate. DMs are always open, but don't expect me to be a coding expert. Even though I've been coding for the past 3 years, I still consider myself a beginner, and I may need your help more than you need mine! XD"}),(0,a.jsx)("p",{className:"para",children:"All of my repos are free to use. You can copy them, duplicate them, do whatever you want with them! If you need any help with my messy, dirty spaghetti code, just let me know! I'm always happy to help (not because I'm angry you're using my code without my permission, I really don't mind!). Welp, have a super cute day! \uD83D\uDE0A\uD83C\uDF38\uD83C\uDF1F"})]})]})}},8184:function(e,t,n){"use strict";n.r(t);var a=n(7294);t.default=function(){return(0,a.useEffect)(()=>{let e=document.querySelector("header");e.style.transition="all 0.5s ease-in-out";let t=()=>{e.style.transform="rotateX(360deg)"},n=()=>{e.style.transform="rotateX(0deg)"};e.addEventListener("mouseenter",t),e.addEventListener("mouseleave",n);let a=document.querySelector("#learn-more-btn");if(a){a.style.transition="all 0.3s ease-in-out";let e=()=>{a.style.backgroundColor="#F6C358",a.style.color="#000",a.style.transform="scale(1.1)"},t=()=>{a.style.backgroundColor="#000",a.style.color="#FFF",a.style.transform="scale(1)"};a.addEventListener("mouseenter",e),a.addEventListener("mouseleave",t)}let i=document.querySelectorAll("section");if(0===i.length)return;let o=0,s=!1,r=e=>{if(s)return;s=!0,setTimeout(()=>{s=!1},1e3);let t=e.deltaY>0?1:-1;1===t&&o<i.length-1?o++:-1===t&&o>0&&o--,i[o].scrollIntoView({behavior:"smooth"})};return document.addEventListener("wheel",r),()=>{e.removeEventListener("mouseenter",t),e.removeEventListener("mouseleave",n),a&&(a.removeEventListener("mouseenter",handleLearnMoreBtnMouseEnter),a.removeEventListener("mouseleave",handleLearnMoreBtnMouseLeave)),document.removeEventListener("wheel",r)}},[]),null}},9034:function(e){e.exports={main:"Home_main__nLjiQ",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",center:"Home_center__4BFgC",logo:"Home_logo__27_tb",thirteen:"Home_thirteen__cMI_k",rotate:"Home_rotate____XsI",content:"Home_content__Zy02X",vercelLogo:"Home_vercelLogo__dtSk9",container:"Home_container__bCOhY",unol:"Home_unol__7H6NR",orl:"Home_orl__di1Fq",metrics:"Home_metrics__WRLys",stats:"Home_stats__e_ULb",para:"Home_para__BrJXA"}}},function(e){e.O(0,[959,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);