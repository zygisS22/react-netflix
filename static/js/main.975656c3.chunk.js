(this["webpackJsonpreact-flix"]=this["webpackJsonpreact-flix"]||[]).push([[0],{34:function(e,a,t){e.exports=t.p+"static/media/netflix-2.b8ce8f65.svg"},37:function(e,a,t){e.exports=t(66)},65:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(33),l=t.n(c),i=t(17),s=t(12),m=t(5),o=t.n(m),u=t(7),d=t(1),p=t(15),E=t.n(p),f="api_key=188e55a50cbadb28d3fe6f18e5c3330b",v="https://api.themoviedb.org/3/",b="https://image.tmdb.org/t/p/";function N(e){return h.apply(this,arguments)}function h(){return(h=Object(u.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat(v,"movie/").concat(a,"?").concat(f,"&append_to_response=images,credits,similar"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(o.a.mark((function e(a){var t,n=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>1&&void 0!==n[1]?n[1]:1,e.next=3,E.a.get("".concat(v,"search/movie?").concat(f,"&language=en-US&query=").concat(a,"&page=").concat(t,"&include_adult=false"));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(o.a.mark((function e(a){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=null,e.t0=a,e.next="best"===e.t0?4:"populares"===e.t0?6:"kids"===e.t0?8:10;break;case 4:return t="".concat(v,"discover/movie?primary_release_year=2015&sort_by=popularity.desc&").concat(f),e.abrupt("break",11);case 6:return t="".concat(v,"discover/movie?sort_by=popularity.desc&").concat(f),e.abrupt("break",11);case 8:return t="".concat(v,"discover/movie?certification_country=US&certification=G&sort_by=popularity.desc&").concat(f),e.abrupt("break",11);case 10:t="".concat(v,"discover/movie?primary_release_year=2019&sort_by=popularity.desc&").concat(f);case 11:return e.next=13,E.a.get(t).then((function(e){return e.data}));case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=t(3),w=t(4);var x=function(){var e=Object(n.useState)(null),a=Object(d.a)(e,2),t=a[0],c=a[1],l=function(){var e=Object(u.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(128);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return l().then((function(e){c(e.data)})),function(){return c(null)}}),[]),r.a.createElement("div",{className:"billboard-content-limits"},r.a.createElement("div",{className:"billboard-base"},r.a.createElement("div",{className:"billboard-image-wrapper"},r.a.createElement("img",{src:"https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfa-QSMvnLx0U1cfYX7Yo9mZrmI2M1VeIcNMthA7AmC-EKG2sOh1fx7tkNOU0Eof6aKRF56p-5WZOd66NtatC4fWkCkN.jpg?r=6da",alt:"hero"}),r.a.createElement("div",{className:"billboard-vignette"}),r.a.createElement("div",{className:"billboard-vignette-bottom"}),r.a.createElement("div",{className:"billboard-maturity-rating"},r.a.createElement("span",null,"+13"))),r.a.createElement("div",{className:"billboard-information"},r.a.createElement("div",{className:"logo-and-text"},r.a.createElement("div",{className:"billboard-title"},r.a.createElement("img",{src:"https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/TsSRXvDuraoJ7apdkH6tsHhf-ZQ/AAAABe8TY2uebJ4BFANuTXLz5IhBxCLwg8EV7ZOw4K6pCX6KBw0ifxFHAiVVXLqo0p47hX9OOhCDSplQuMfsAUCNEIZ4pDMEcDnpmBpI.png?r=d80",alt:"title"})),r.a.createElement("div",{className:"billboard-description"},r.a.createElement("div",{className:"episode-title-container"}),r.a.createElement("div",{className:"synopsis"},t&&t.overview)),r.a.createElement("div",{className:"billboard-link"},r.a.createElement("a",{className:"play-link",href:"/"},r.a.createElement("button",{className:"hasLabel"},r.a.createElement("span",{className:"play-icon"},r.a.createElement(k.a,{icon:w.g})),r.a.createElement("span",null,"Play"))),r.a.createElement("button",{className:"hasLabel play-link-secondary"},r.a.createElement("span",{className:"play-icon"},r.a.createElement(k.a,{icon:w.j})),r.a.createElement("span",null,"Information")))))))},S=function(e){var a=e.additionalMovieInfo;return r.a.createElement("div",{className:"menu-similar"},r.a.createElement("div",{className:"menu-similar-content"},a.similar.results.map((function(e,a){return a<4?r.a.createElement("div",{className:"similar-item",key:a},r.a.createElement("div",{className:"similar-item-image"},r.a.createElement("img",{src:"".concat(b,"original/").concat(e.backdrop_path),alt:"item"})),r.a.createElement("div",{className:"similar-item-metada"},r.a.createElement("span",{className:"similar-item-title"},e.title),r.a.createElement("br",null),r.a.createElement("span",{className:"release-date"},e.release_date)),r.a.createElement("div",{className:"similar-item-synopsis"},e.overview)):null}))))},I=function(e){var a=e.additionalMovieInfo,t=function(e,a,t){var n=t.find((function(e,t){return e.department===a}));if(n)return r.a.createElement("div",{className:"menu-details-item"},r.a.createElement("span",{className:"details-item-title"},e),r.a.createElement("span",null,n.name))};return r.a.createElement("div",{className:"menu-details"},r.a.createElement("div",{className:"menu-details-content"},r.a.createElement("div",{className:"menu-details-item"},r.a.createElement("span",{className:"details-item-title"},"Crew"),a.credits.cast.map((function(e,a){return a<10?r.a.createElement("span",{key:a},e.name):null}))),t("Directing","Directing",a.credits.crew),t("Editing","Editing",a.credits.crew),t("Sound","Sound",a.credits.crew),r.a.createElement("div",{className:"menu-details-item"},r.a.createElement("span",{className:"details-item-title"},"Genres"),a.genres.map((function(e,a){return r.a.createElement("span",{key:a},e.name)}))),a.production_companies[0]&&r.a.createElement("div",{className:"menu-details-item"},r.a.createElement("span",{className:"details-item-title"},"Production"),r.a.createElement("span",null,a.production_companies[0].name))))},M=t(14),_=function(e){var a=e.currentSlide,t=e.additionalMovieInfo,c=e.closeInformationWindow,l=Object(n.useState)("general-info"),i=Object(d.a)(l,2),s=i[0],m=i[1];return r.a.createElement("div",{className:"additional-information"},r.a.createElement("div",{className:"ai-background ".concat("general-info"!==s?"dim":null)},r.a.createElement("div",{className:"ai-background-shadow"}),r.a.createElement("div",{className:"ai-background-image",style:{backgroundImage:"url(".concat(b,"original/").concat(a.backdrop_path,")")}}),r.a.createElement("div",{className:"ai-background-nav-shadow"})),t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ai-content-area"},r.a.createElement("div",{className:"ai-content-area-container"},r.a.createElement("h3",null,r.a.createElement("div",null,a.title)),"general-info"===s?r.a.createElement("div",{className:"jaw-bone-common"},r.a.createElement("div",{className:"metadata"},r.a.createElement("span",{className:"imdb"},r.a.createElement("a",{href:"https://www.imdb.com/title/".concat(t.imdb_id),target:"_blank",rel:"noopener noreferrer"},r.a.createElement(k.a,{icon:M.b}))),r.a.createElement("span",{className:"score"},t.vote_average),r.a.createElement("span",{className:"year"},a.release_date),r.a.createElement("span",{className:"duration"},t.runtime,"m")),r.a.createElement("div",{className:"synopsis"},a.overview),r.a.createElement("div",{className:"actions"},r.a.createElement("div",{className:"play-link"},r.a.createElement("button",{className:"hasLabel"},r.a.createElement("span",{className:"play-icon"},r.a.createElement(k.a,{icon:w.g})),r.a.createElement("span",null,"Play"))),r.a.createElement("button",{className:"hasLabel play-link-secondary"},r.a.createElement("span",{className:"play-icon"},r.a.createElement(k.a,{icon:w.i})),r.a.createElement("span",null,"My list"))),r.a.createElement("div",{className:"meta-lists"},r.a.createElement("p",{className:"inline-list"},r.a.createElement("span",null,"Featuring:"),t.credits.cast.map((function(e,a){return a<6?e.name+" ":null}))),r.a.createElement("p",{className:"inline-list"},r.a.createElement("span",null,"Genres:"),t.genres.map((function(e,a){return a<6?e.name+" ":null}))))):"similar"===s?r.a.createElement(S,{additionalMovieInfo:t}):"details"===s?r.a.createElement(I,{additionalMovieInfo:t}):null,r.a.createElement("ul",{className:"menu"},r.a.createElement("li",{className:"".concat("general-info"===s&&"current"),onClick:function(){return m("general-info")}},r.a.createElement("div",{className:"menu-button"},"GENERAL INFORMATION"),r.a.createElement("span",null)),r.a.createElement("li",{className:"".concat("similar"===s&&"current"),onClick:function(){return m("similar")}},r.a.createElement("div",{className:"menu-button"},"SIMILAR"),r.a.createElement("span",null)),r.a.createElement("li",{className:"".concat("details"===s&&"current"),onClick:function(){return m("details")}},r.a.createElement("div",{className:"menu-button"},"DETAILS"),r.a.createElement("span",null)))),r.a.createElement("button",{className:"ai-close-button",onClick:function(){return c()}},r.a.createElement("span",null,r.a.createElement(k.a,{icon:w.m}))))):r.a.createElement("div",{className:"ai-content-area"},r.a.createElement("h2",null,"Loading...")))},C=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],A=r.a.createContext(null);var L=function(e){var a=Object(n.useRef)(null),t=Object(n.useState)(!1),c=Object(d.a)(t,2),l=c[0],i=c[1],s=Object(n.useState)(!1),m=Object(d.a)(s,2),o=m[0],u=m[1],p=Object(n.useContext)(A),E=p.currentSlide&&p.currentSlide.id===e.title;!function(e,a,t){Object(n.useEffect)((function(){var n=new IntersectionObserver((function(e){var n=Object(d.a)(e,1)[0];!n.isIntersecting||n.intersectionRatio<.8?t():a()}),{root:null,rootMargin:"0px",threshold:[0,.8]});e.current&&n.observe(e.current)}),[e,a,t])}(a,(function(){i(!0)}),(function(){i(!1)})),Object(n.useEffect)((function(){}),[l,i]);var f={transform:"translateX(".concat(e.transform,")"),transformOrigin:e.origin,transition:"all 0.3s ease-in-out"};return r.a.createElement("div",{style:f,"data-id":e.title,className:"slider-item ".concat(l?"onScreen":""," ").concat(!0===e.poster?"poster":"card"),ref:a,onMouseLeave:function(a){return function(a){e.reset(a),u(!1)}(a)},onMouseEnter:function(a){return function(a){p.currentSlide||(e.hover(a),u(!0))}(a)}},r.a.createElement("div",{className:"boxart-container"},r.a.createElement("div",{className:"boxart"},!0===e.poster?r.a.createElement(r.a.Fragment,null,e.data.backdrop_path?r.a.createElement("img",{src:"".concat(b,"w500/").concat(e.data.poster_path),alt:"boxart"}):r.a.createElement("img",{style:{background:"black"},alt:"boxart"})):r.a.createElement(r.a.Fragment,null,e.data.backdrop_path?r.a.createElement("img",{src:"".concat(b,"w500/").concat(e.data.backdrop_path),alt:"boxart"}):r.a.createElement("img",{style:{background:"black"},alt:"boxart"})))),r.a.createElement("button",{onClick:function(){return e.onSelectSlide(e.title)},className:"show-details"},r.a.createElement("span",null,r.a.createElement(k.a,{icon:w.a}))),!1===e.poster&&r.a.createElement("div",{className:"item-overlay ".concat(o?"open":"")},r.a.createElement("div",{className:"item-wrapper"},r.a.createElement("div",{className:"item-overview"},r.a.createElement("div",{className:"item-overview-play"},r.a.createElement("span",null,r.a.createElement(k.a,{icon:w.h}))),r.a.createElement("div",{className:"item-overview-title"},e.data.title),r.a.createElement("div",{className:"item-overview-metadata"},r.a.createElement("span",{className:"metadata-rating"},"New"),r.a.createElement("span",{className:"metadata-maturity"},!0===e.data.adult?"+18":"+13"),r.a.createElement("span",null,e.data.vote_average)),r.a.createElement("div",{className:"item-overview-synopsis"},e.data.genre_ids.map((function(e,a){if(a<3){var t=C.find((function(a){return a.id===e}));return a>0?r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("span",{className:"separator"}),r.a.createElement("span",null,t.name)):r.a.createElement("span",{key:a},t.name)}return null})))),r.a.createElement("div",{className:"item-actions"},r.a.createElement("div",{className:"item-action-buttons"},r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement(k.a,{icon:w.l}))),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement(k.a,{icon:w.i}))))),r.a.createElement("div",{className:"item-chevron"}))),E&&r.a.createElement("div",{className:"mark"}))};var T=function(e,a,t,c,l){var i=Object(n.useState)(0),s=Object(d.a)(i,2),m=s[0],p=s[1],E=Object(n.useState)(0),f=Object(d.a)(E,2),v=f[0],b=f[1],h=Object(n.useState)(0),g=Object(d.a)(h,2),O=g[0],j=g[1],y=Object(n.useState)(0),k=Object(d.a)(y,2),w=k[0],x=k[1],S=Object(n.useState)(null),I=Object(d.a)(S,2),M=I[0],_=I[1],C=Object(n.useState)(null),A=Object(d.a)(C,2),L=A[0],T=A[1],F=Object(n.useState)(c),P=Object(d.a)(F,2),R=P[0],W=P[1],B=Object(n.useState)(0),D=Object(d.a)(B,2),H=D[0],X=D[1],z=Object(n.useState)(0),G=Object(d.a)(z,2),V=G[0],Y=G[1],Z=v<0,U=m+w<t,J=Object(n.useState)(null),K=Object(d.a)(J,2),Q=K[0],q=K[1];Object(n.useEffect)((function(){if(a.current&&c){var e=a.current.clientWidth,n=a.current.firstChild.clientWidth,r=Math.ceil(e/n);_(a.current.children),j(e),x(r),Y(t/r)}}),[a,c,t,e]);var $={style:{transform:"translate3d(".concat(v,"px, 0, 0)")}},ee={edge:{left:l?"-5%":"-35%",right:l?"5%":"35%"},normal:{left:l?"-10%":"-70%",right:l?"10%":"70%"}},ae=function(e){return!(!e||!e.className.split(" ").includes("onScreen"))};return{moveSection:function(e){if("right"===e?(p(m+w),b(v-O),X((function(e){return e+1}))):"left"===e?(p(m-w),b(v+O),X((function(e){return e-1}))):"reset"===e&&(p(0),b(0),X(0)),L){var a=Object.entries(M).filter((function(e){return!!e[1].className.includes("onScreen")})),t=null,n=null;"right"===e?(a=(a=a.slice(-1)[0])[1].dataset.id,t=R.filter((function(e,t){return e.id===parseInt(a)&&(n=t,!0)}))[0],t=R[n+1]):"left"===e?(a=(a=a[0])[1].dataset.id,t=R.filter((function(e,t){return e.id===parseInt(a)&&(n=t,!0)}))[0],t=R[n-1]):"reset"===e&&(t=R[0]),T(t)}},selectSlide:function(){var e=Object(u.a)(o.a.mark((function e(a){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.filter((function(e){return e.id===a}))[0];case 2:return t=e.sent,T(t),e.next=6,N(a).then((function(e){return e.data}));case 6:n=e.sent,q(n);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),closeInformationWindow:function(){T(null),q(null)},hasPrev:Z,hasNext:U,scaleTiles:function(e){if(e.preventDefault(),!L&&M){var a=Object.entries(M).findIndex((function(a){return a[1]===e.currentTarget})),t=M[a].dataset.id,n=R.filter((function(e){return e.id===parseInt(t)}))[0],r=ae(M[a+1]),c=ae(M[a-1]);c&&r?W((function(e){return e.map((function(e,t){return e.origin="center center",n.id!==e.id&&t>a?(e.transform=ee.edge.right,e):n.id!==e.id&&t<a?(e.transform=ee.edge.left,e):(e.transform="0px",e)}))})):c?r||W((function(e){return e.map((function(e,t){return n.id!==e.id&&t<a?(e.transform=ee.normal.left,e.origin="center center",e):(e.transform="0px",e.origin="center right ",e)}))})):W((function(e){return e.map((function(e,t){return n.id!==e.id&&t>a?(e.transform=ee.normal.right,e.origin="center center",e):(e.transform="0px",e.origin="left center",e)}))}))}},resetSize:function(e){W((function(e){return e.map((function(e,a){return e.transform="0px",e}))}))},sliderIndex:H,sliderPages:V,slideProps:$,content:R,currentSlide:L,additionalMovieInfo:Q,paginationIndicator:function(e){for(var a=[],t=0;t<e;t++)H===t?a.push(r.a.createElement("li",{className:"active",key:t})):a.push(r.a.createElement("li",{key:t}));return a}}};var F=function(e){var a=e.mainTitle,t=e.data,c=e.poster,l=function(){var e=Object(n.useState)(window.innerWidth),a=Object(d.a)(e,2),t=a[0],r=a[1],c=function(){return r(window.innerWidth)};return Object(n.useEffect)((function(){return window.addEventListener("resize",c),function(){window.removeEventListener("resize",c)}}),[t]),t}(),i=Object(n.useRef)(null),s=T(l,i,20,t,c),m=s.moveSection,o=s.selectSlide,u=s.closeInformationWindow,p=s.scaleTiles,E=s.resetSize,f=s.sliderPages,v=s.slideProps,b=s.hasPrev,N=s.hasNext,h=s.content,g=s.currentSlide,O=s.additionalMovieInfo,j=s.paginationIndicator,y={currentSlide:g};return Object(n.useEffect)((function(){}),[l]),r.a.createElement(A.Provider,{value:y},r.a.createElement("div",{className:"sliderBox"},r.a.createElement("h2",{className:"slider-header"},r.a.createElement("a",{href:"/"},r.a.createElement("div",null,a),r.a.createElement("div",{className:"see-more"},"Explore more"),r.a.createElement("div",{className:"see-more-chevron"},r.a.createElement(k.a,{icon:w.e})))),r.a.createElement("div",{className:"slider-container"},r.a.createElement("div",{className:"slider"},r.a.createElement("ul",{className:"pagination-indicator"},f>0?j(f):""),r.a.createElement("div",{className:"sliderMask showPeek"},r.a.createElement("div",Object.assign({className:"slider-content ".concat(g?"open":""),ref:i},v),h.map((function(e){return r.a.createElement(L,{key:e.id,title:e.id,data:e,hover:p,reset:E,transform:e.transform,origin:e.origin,onSelectSlide:o,poster:c})})))),N&&r.a.createElement("span",{className:"handle handleNext",onClick:function(){return m("right")}},r.a.createElement("strong",null,r.a.createElement(k.a,{icon:w.e}))),b&&r.a.createElement("span",{className:"handle handlePrev",onClick:function(){return m("left")}},r.a.createElement("strong",null,r.a.createElement(k.a,{icon:w.d}))),b&&!1===N?r.a.createElement("span",{className:"handle handleNext",onClick:function(){return m("reset")}},r.a.createElement("strong",null,r.a.createElement(k.a,{icon:w.n}))):null)),g&&r.a.createElement(_,{currentSlide:g,additionalMovieInfo:O,closeInformationWindow:u})))},P=r.a.createContext(null),R=function(){var e=Object(n.useContext)(P),a=Object(n.useState)(null),t=Object(d.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(1),s=Object(d.a)(i,2),m=s[0],p=s[1],E=Object(n.useState)(null),f=Object(d.a)(E,2),v=f[0],N=f[1],h=Object(n.useCallback)(Object(u.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g(e.searchInput,null).then((function(e){l(e.data.results),p(e.data.page),N(e.data.total_pages)}));case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)}))),[e]),O=function(){var e=Object(u.a)(o.a.mark((function e(a,t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t+1,e.next=3,g(a,n).then((function(e){if(c){var a=c.concat(e.data.results);l(a),p(e.data.page)}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){return h(),function(){return l(null)}}),[h]);return r.a.createElement("div",{className:"search-background"},c?r.a.createElement(r.a.Fragment,null,c.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"search-container"},c.map((function(e,a){return e.poster_path?r.a.createElement("div",{key:a},r.a.createElement("img",{src:"".concat(b,"w500/").concat(e.poster_path),alt:"poster"})):null}))),m<v?r.a.createElement("div",{className:"load-more",onClick:function(){return a=e.searchInput,void O(a,m);var a}},r.a.createElement("span",null,r.a.createElement(k.a,{icon:w.c}))):null):r.a.createElement("div",{className:"not-found"},"No results :/ ")):r.a.createElement("div",{className:"loading-content"},r.a.createElement("div",{className:"loading-circle"}),r.a.createElement("span",{className:"loading-name"},"LOADING...")))};var W=function(){var e=Object(n.useState)(null),a=Object(d.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(null),i=Object(d.a)(l,2),s=i[0],m=i[1],p=Object(n.useState)(null),E=Object(d.a)(p,2),f=E[0],v=E[1],b=Object(n.useContext)(P),N=function(){var e=Object(u.a)(o.a.mark((function e(){var a,t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("populares");case 2:return a=e.sent,e.next=5,j("kids");case 5:return t=e.sent,e.next=8,j("best");case 8:return n=e.sent,e.abrupt("return",{popularMovies:a,kidsMovies:t,bestMovies:n});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return N().then((function(e){c(e.popularMovies.results),v(e.kidsMovies.results),m(e.bestMovies.results)})),function(){c(null),v(null),m(null)}}),[]),r.a.createElement("div",null,b.searchInput.length>0?r.a.createElement(R,null):r.a.createElement("div",null,r.a.createElement(x,null),t&&r.a.createElement(F,{mainTitle:"Trending now",data:t,poster:!1}),f&&r.a.createElement(F,{mainTitle:"Kids movies",data:f,poster:!0}),s&&r.a.createElement(F,{mainTitle:"Best 2015 movies",data:s,poster:!1})))},B=t(34),D=t.n(B);var H=function(){var e=Object(n.useState)(!1),a=Object(d.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),i=Object(d.a)(l,2),s=i[0],m=i[1],o=Object(n.useRef)(null),u=Object(n.useRef)(null),p=Object(n.useContext)(P),E=p.searchInput,f=p.updateSearchInput,v=function(){0===window.scrollY?c(!1):o&&o.current&&o.current.getBoundingClientRect()&&c(o.current.getBoundingClientRect().top<=0)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",v),function(){window.removeEventListener("scroll",(function(){return v}))}}),[]),r.a.createElement("div",{className:"header-height-pinned"},r.a.createElement("div",{className:"header ".concat(t?"pin-header":""),ref:o},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:D.a,alt:"logo"})),r.a.createElement("div",{className:"header-menu"},r.a.createElement("ul",{className:"header-list"},r.a.createElement("li",{className:"header-list-item menu-trigger"},r.a.createElement("a",{href:"/",className:"navigation-menu active"},"Menu"),r.a.createElement("div",{className:"submenu"},r.a.createElement("div",{className:"arrow"}),r.a.createElement("div",{className:"topbar"}),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/",className:"active"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"TV shows")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Movies")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Recently added")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"My list"))))),r.a.createElement("li",{className:"header-list-item"},r.a.createElement("a",{href:"/",className:"active"},"Home")),r.a.createElement("li",{className:"header-list-item"},r.a.createElement("a",{href:"/"},"TV shows")),r.a.createElement("li",{className:"header-list-item"},r.a.createElement("a",{href:"/"},"Movies")),r.a.createElement("li",{className:"header-list-item"},r.a.createElement("a",{href:"/"},"Recently added")),r.a.createElement("li",{className:"header-list-item"},r.a.createElement("a",{href:"/"},"My list")))),r.a.createElement("div",{className:"header-options"},r.a.createElement("div",{className:"".concat(s?"searchBox":"searchIcon")},r.a.createElement("span",{className:"icon",onClick:function(){return!s&&u.current&&u.current.focus(),void m((function(e){return!e}))}},r.a.createElement(k.a,{icon:w.k})),r.a.createElement("input",{className:"searchInput",ref:u,value:E,onChange:function(e){return f(e.currentTarget.value)},onBlur:function(){return m(!1)},type:"text",placeholder:"Titles, People, Genres...",maxLength:"80"})),r.a.createElement("div",null,r.a.createElement("span",{className:"icon"},r.a.createElement(k.a,{icon:w.f}))),r.a.createElement("div",null,r.a.createElement("span",{className:"icon"},r.a.createElement(k.a,{icon:w.b}))),r.a.createElement("div",{className:"account-menu"},r.a.createElement("div",{className:"account-dropdown-menu"},r.a.createElement("span",{className:"presentation"},r.a.createElement("img",{src:"https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABWyw3UeUMaPP3aLxzskg3Bn5htGHqQymxiEGTbfM91FZ0zJAPoEfYQdvHW7FV06FcdXhPC_4F7zNR7TFKLLv6yo.png?r=88c",alt:"avatar"})),r.a.createElement("span",{className:"caret"}))))))};var X=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-content"},r.a.createElement("span",{className:"copyright"},"\xa9 2020 ")," made using ",r.a.createElement("span",{className:"react-icon"},r.a.createElement(k.a,{icon:M.c}))," by"),r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"https://github.com/zygisS22",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(k.a,{icon:M.a}))))},z=function(){var e=function(){var e=Object(n.useState)(""),a=Object(d.a)(e,2),t=a[0],r=a[1];return{searchInput:t,updateSearchInput:Object(n.useCallback)((function(e){r(e)}),[])}}();return r.a.createElement("div",{className:"background-app"},r.a.createElement(P.Provider,{value:e},r.a.createElement(H,null),r.a.createElement(i.a,{basename:"/react-netflix"},r.a.createElement(s.c,null,r.a.createElement(s.a,{component:W,exact:!0,path:"/"})))),r.a.createElement(X,null))};t(65);l.a.render(r.a.createElement(i.a,null,r.a.createElement(z,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.975656c3.chunk.js.map