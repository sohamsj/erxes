(window.webpackJsonp=window.webpackJsonp||[]).push([[41,8,16],{102:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(149),l=t(175),o=t(143),s=t(159);a.default=function(e){var a=e.metadata,t=e.items,n=e.sidebar,i=a.allTagsPath,d=a.name,u=a.count;return r.a.createElement(c.a,{title:'Posts tagged "'+d+'"',description:'Blog | Tagged "'+d+'"'},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},r.a.createElement("h1",null,u," ",function(e,a){return e>1?a+"s":a}(u,"post"),' tagged with "',d,'"'),r.a.createElement(o.a,{href:i},"View All Tags"),r.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return r.a.createElement(l.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},r.a.createElement(a,null))})))))))}},150:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(142),l=t.n(c),o=t(141),s=t(144),i=t(148);t(49);a.a=function(e){var a=Object(n.useState)(!1),c=a[0],d=a[1],u=Object(n.useRef)(null),h=Object(o.a)().siteConfig,m=(void 0===h?{}:h).themeConfig.algolia,p=Object(s.useHistory)(),b=Object(i.a)().navigateToSearchPage;var f=function(e){void 0===e&&(e=!0),c||Promise.all([Promise.all([t.e(78),t.e(82)]).then(t.t.bind(null,151,7)),t.e(0).then(t.t.bind(null,50,7))]).then((function(a){var t=a[0].default;d(!0),window.docsearch=t,function(e){window.docsearch({appId:m.appId,apiKey:m.apiKey,indexName:m.indexName,inputSelector:"#search_input_react",algoliaOptions:m.algoliaOptions,autocompleteOptions:{openOnFocus:!0,autoselect:!1,hint:!1},handleSelected:function(e,a,t){a.stopPropagation();var n=document.createElement("a");n.href=t.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;p.push(r)}}),e&&u.current.focus()}(e)}))},v=Object(n.useCallback)((function(){f(),c&&u.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),g=Object(n.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),E=Object(n.useCallback)((function(e){var a="mouseover"!==e.type;f(a)})),w=Object(n.useCallback)((function(e){e.defaultPrevented||"Enter"!==e.key||b(e.target.value)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:v,onKeyDown:v,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:E,onFocus:E,onBlur:g,onKeyDown:w,ref:u}))}}}]);