(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{8987:function(e,t,s){"use strict";s.d(t,{b:function(){return o}});var n=s(5675),i=s.n(n),a=s(1664),r=s.n(a),c=s(9050),l=s(5893);function o(e){var t=e.title,s=e.description,n=e.href;return(0,l.jsx)(r(),{href:n,children:(0,l.jsxs)("a",{className:"flex items-center px-10 py-6 cursor-pointer bg-dark hover:brightness-110 rounded-2xl",children:[(0,l.jsx)("div",{className:"w-32 h-32",children:(0,l.jsx)(i(),{src:c.W.dvadesetJedan,className:"rounded-2xl",width:128,height:128,layout:"fixed",alt:""})}),(0,l.jsxs)("div",{className:"ml-4 text-left xl:ml-6",children:[(0,l.jsx)("p",{className:"font-semibold text-21",children:t}),(0,l.jsx)("p",{className:"mt-2 text-sm font-medium text-gray",children:s})]})]})})}},6964:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return l},default:function(){return o}});var n=s(1163),i=s(7294),a=s(8987),r=s(1563),c=s(5893),l=!0;function o(e){var t=e.episodes,s=(0,n.useRouter)(),l=(0,i.useState)(!1),o=l[0],d=l[1];if((0,i.useEffect)((function(){return d(!0)}),[]),!o)return null;var m=t.find((function(e){return e.slug===s.query.slug}));return(0,c.jsxs)("main",{className:"text-center bg-dark",children:[(0,c.jsxs)("div",{className:"py-10 lg:py-20 bg-dark brightness-110",children:[(0,c.jsxs)("div",{className:"w-[90%] m-auto xl:w-3/5",children:[(0,c.jsx)("h1",{className:"text-[2.5rem] font-semibold",children:null===m||void 0===m?void 0:m.title}),(0,c.jsx)("p",{className:"mt-3 text-lg text-gray",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor ultrices pulvinar eu sem enim dolor tellus. Ante aenean varius cras ac ante feugiat."})]}),(0,c.jsx)("div",{className:"w-[90%] m-auto mt-20 lg:w-3/5",children:(0,c.jsxs)("div",{className:"relative",children:[(0,c.jsx)("div",{className:"absolute animate-pulse top-0 left-0 w-full h-[7.5rem] lg:h-[10rem] bg-white"}),m&&(0,c.jsx)("div",{className:"relative z-5",children:(0,c.jsx)("iframe",{src:"https://anchor.fm/dvadesetjedan/embed/episodes/".concat(m.slug),scrolling:"no",className:"w-full h-[8rem] lg:h-[10.6rem]"})})]})})]}),(0,c.jsxs)("div",{className:"w-[90%] m-auto mb-20 lg:w-3/5",children:[(0,c.jsxs)("div",{className:"h-[400px]",children:[(0,c.jsx)("h2",{className:"text-[2.5rem] font-bold mb-14 mt-20",children:"Show notes"}),(0,c.jsx)("p",{className:"italic",children:"Coming soon - Notes are currently being converted to Markdown"})]}),(0,c.jsx)("h2",{className:"text-[2.5rem] font-bold mb-14 mt-32",children:"Episodes you might enjoy"}),t.splice(0,3).map((function(e){var t=e.slug,s=e.title,n=e.descriptionPreview;return(0,c.jsx)(a.b,{title:"".concat(s.slice(0,100),"..."),description:"".concat(n.slice(0,125),"..."),href:r._.podcastEpisode(t)},t)}))]})]})}},2221:function(e,t,s){"use strict";s.d(t,{t:function(){return n}});var n=""},9050:function(e,t,s){"use strict";s.d(t,{W:function(){return i}});var n=s(2221),i={bitcoinIsland:"".concat(n.t,"/images/bitcoin-island.webp"),blogPreview:"".concat(n.t,"/images/blog-preview.webp"),dogma:"".concat(n.t,"/images/dogma.webp"),dvadesetJedan:"".concat(n.t,"/images/dvadeset-jedan.webp"),magicInternetMoney:"".concat(n.t,"/images/magic-internet-money.webp"),meetupCover:"".concat(n.t,"/images/meetup-cover.webp"),meetup:"".concat(n.t,"/images/meetup.webp"),player:"".concat(n.t,"/images/player.webp")}},5318:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/podcast/[slug]",function(){return s(6964)}])}},function(e){e.O(0,[675,774,888,179],(function(){return t=5318,e(e.s=t);var t}));var t=e.O();_N_E=t}]);