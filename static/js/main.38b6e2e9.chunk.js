(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{15:function(e,t,a){e.exports=a(45)},20:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),o=(a(20),a(2)),i=a(14),s=a(13),m=a.n(s),u=function(){return m.a.get("https://randomuser.me/api/?results=10&nat=us")},d=(a(38),r.a.createContext({}));a(39);function h(){var e=Object(n.useContext)(d);return r.a.createElement("div",{className:"searchbox"},r.a.createElement("form",{className:"searchForm"},r.a.createElement("input",{className:"form-control px-5",type:"search",placeholder:"Search First Name","aria-label":"Search",onChange:function(t){return e.handleSearch(t)}}),r.a.createElement("button",{className:"search px-3",type:"submit"},"Search")))}a(40);function f(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg"},r.a.createElement("div",{className:"search-area col-4"},r.a.createElement(h,null)))}a(41),a(42);function v(){var e=Object(n.useContext)(d);return r.a.createElement("tbody",null,void 0!==e.devState.userFilter[0]&&void 0!==e.devState.userFilter[0].name?e.devState.userFilter.map((function(e){var t=e.login,a=e.picture,n=e.name,l=e.phone,c=e.email,o=e.dob;return r.a.createElement("tr",{key:t.uuid,className:"rowHover"},r.a.createElement("td",{"data-th":"Image",className:"employee"},r.a.createElement("img",{src:a.large,alt:"profile image for "+n.first+" "+n.last,className:"img-responsive empImage"})),r.a.createElement("td",{"data-th":"Name",className:"info pt-5 name-cell"},n.first," ",n.last),r.a.createElement("td",{"data-th":"Phone",className:"info pt-5"},l),r.a.createElement("td",{"data-th":"Email",className:"info pt-5"},r.a.createElement("a",{href:"mailto:"+c,target:"__blank"},c)),r.a.createElement("td",{"data-th":"DOB",className:"info pt-5"},function(e){var t=e.split("-");return[t[1],t[2].split("T")[0]].join("-")}(o.date)))})):r.a.createElement(r.a.Fragment,null))}function E(){var e=Object(n.useContext)(d);return r.a.createElement("div",{className:"datatable mt-5"},r.a.createElement("table",{id:"table",className:"table table-condensed"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"info text-center"},e.devState.headings.map((function(t){var a=t.name,n=t.width;return r.a.createElement("th",{className:"col",key:a,style:{width:n},onClick:function(){e.handleSorting(a.toLowerCase())}},a)})))),r.a.createElement(v,null)))}var p=function(){var e=Object(n.useState)({users:[],order:"ascend",userFilter:[],headings:[{name:"Profile Pic",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"10%"}]}),t=Object(i.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){u().then((function(e){l(Object(o.a)(Object(o.a)({},a),{},{users:e.data.results,userFilter:e.data.results}))}))}),[]),r.a.createElement(d.Provider,{value:{devState:a,handleSearch:function(e){var t=e.target.value,n=a.users.filter((function(e){return-1!==e.name.first.toLowerCase().indexOf(t.toLowerCase())}));l(Object(o.a)(Object(o.a)({},a),{},{userFilter:n}))},handleSorting:function(e){"descend"===a.order?l("ascend"):l("descend");var t=a.userFilter.sort((function(t,n){return"ascend"===a.order?void 0===t[e]?1:void 0===n[e]?-1:"name"===e?t[e].first.localeCompare(n[e].first):n[e]-t[e]:void 0===t[e]?1:void 0===n[e]?-1:"name"===e?n[e].first.localeCompare(t[e].first):n[e]-t[e]}));l(Object(o.a)(Object(o.a)({},a),{},{userFilter:t}))}}},r.a.createElement(f,null),r.a.createElement("div",{className:"data-area"},a.userFilter.length>0?r.a.createElement(E,null):r.a.createElement("div",null)))};function b(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null))}function g(e){var t=e.children;return r.a.createElement("div",null,t)}a(43);function N(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null," Employee Directory"),r.a.createElement("h6",null,"Click on name column header to organize the name column alphabetically"))}var w=function(){return r.a.createElement("div",null,r.a.createElement(g,null,r.a.createElement(N,null),r.a.createElement(b,null)))};a(44),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.38b6e2e9.chunk.js.map