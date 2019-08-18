(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{202:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(209);t.default=function(){return l.a.createElement(r.a,{fullMenu:!0},l.a.createElement("article",{id:"main"},l.a.createElement("header",null,l.a.createElement("h2",null,"Student Resources"),l.a.createElement("p",null,"Sample of resources built for students")),l.a.createElement("section",{className:"wrapper style5"},l.a.createElement("div",{className:"inner"},l.a.createElement("h3",null,"10 days of JavaScript"),l.a.createElement("p",null,"This is a collection of 10 JavaScript problems I created to help students consolidate their knowledge."),l.a.createElement("a",{href:"https://gist.github.com/CelineChole/fed4df894f83f02fa750bd92cddded74",target:"blank"},"Link to the gist."),l.a.createElement("hr",null),l.a.createElement("h3",null,"Express middleware review lesson"),l.a.createElement("p",null,"A live example to understand Express middleware. Navigate bewtween branches to follow step by step."),l.a.createElement("a",{href:"https://github.com/CelineChole/express-middleware",target:"blank"},"Link to the gist."),l.a.createElement("hr",null),l.a.createElement("h3",null,"Recommended extensions for Visual Studio Code"),l.a.createElement("p",null,"This is a collection of VS code extensions that I found very useful."),l.a.createElement("a",{href:"https://gist.github.com/CelineChole/f9b4b44d3637fdc242e6fec0e27c8d85",target:"blank"},"Link to the gist."),l.a.createElement("hr",null),l.a.createElement("h3",null,"Tech resources"),l.a.createElement("p",null,"A collection of resources I found useful for students."),l.a.createElement("a",{href:"https://gist.github.com/CelineChole/38ff863559f13ef39a6b5646c57e1996",target:"blank"},"Link to the gist."),l.a.createElement("hr",null),l.a.createElement("h3",null,"Recursion"),l.a.createElement("p",null,"Review lesson on recursion"),l.a.createElement("a",{href:"https://gist.github.com/CelineChole/1fa7d405b1efeed3ebfe04047c6b8342",target:"blank"},"link to the gist.")))))}},205:function(e,t,a){var n;e.exports=(n=a(208))&&n.default||n},206:function(e,t){e.exports={siteTitle:"Céline Cholé",manifestName:"celinechole",manifestShortName:"celinechole",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/",heading:"Céline Cholé",subHeading:"Full time Web Developer in New York City",socialLinks:[{style:"brands",icon:"fa-github",name:"Github",url:"https://github.com/CelineChole"},{style:"brands",icon:"fa-linkedin",name:"Linkedin",url:"https://www.linkedin.com/in/celinechole/"},{style:"solid",icon:"fa-envelope",name:"Email",url:"mailto:job@celinechole.com"}]}},207:function(e){e.exports={data:{site:{siteMetadata:{title:"Céline Cholé"}}}}},208:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),l=a.n(n),r=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?l.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},209:function(e,t,a){"use strict";var n=a(207),l=a(0),r=a.n(l),i=a(210),c=a.n(i),o=a(66),s=a.n(o),u=(a(205),a(7).default.enqueue,r.a.createContext({}));function m(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,i=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,i&&l(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(u.Consumer,null,function(e){return r.a.createElement(m,{data:t,query:a,render:n||l,staticQueryData:e})})};a(211),a(49);var f=a(206),h=a.n(f);function E(){return r.a.createElement("footer",{id:"footer"},r.a.createElement("ul",{className:"icons"},h.a.socialLinks.map(function(e){var t=e.style,a=e.icon,n=e.name,l=e.url;return r.a.createElement("li",{key:l},r.a.createElement("a",{href:l,className:"icon "+t+" "+a},r.a.createElement("span",{className:"label"},n)))})),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,"© Built by Céline Cholé"),r.a.createElement("li",null,"Design: ",r.a.createElement("a",{href:"http://html5up.net",target:"_blank"},"HTML5 UP"))))}function p(e){var t=e.onMenuToggle,a=void 0===t?function(){}:t;return r.a.createElement("nav",{id:"nav"},r.a.createElement("ul",null,r.a.createElement("li",{className:"special"},r.a.createElement("a",{href:"#menu",onClick:function(e){e.preventDefault(),a()},className:"menuToggle"},r.a.createElement("span",null,"Menu")),r.a.createElement("div",{id:"menu"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/portfolio/explore"},"Explore")),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/resources/student-resources"},"Student Resources")),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/story"},"Story")),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/contact"},"Contact"))),r.a.createElement("a",{className:"close",onClick:function(e){e.preventDefault(),a()},href:"#menu"},"")))))}function g(e){var t=e.fullMenu,a=Object(l.useState)(!1),n=a[0],i=a[1];return r.a.createElement("header",{id:"header",className:t?"":"alt"},r.a.createElement("h1",null,r.a.createElement(s.a,{to:"/"},"Home")),r.a.createElement("div",{className:n?"is-menu-visible":" "},r.a.createElement(p,{onMenuToggle:function(){return i(!n)}})))}var b=function(e){var t,a;function l(t){var a;return(a=e.call(this,t)||this).state={isPreloaded:!0},a}a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=l.prototype;return i.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({isPreloaded:!1})},100)},i.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},i.render=function(){var e=this.props,t=e.children,a=e.fullMenu,l=this.state.isPreloaded;return r.a.createElement(d,{query:"1044757290",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Spectral"},{name:"keywords",content:"site, web"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement("div",{className:l?"landing main-body is-preload":"landing main-body"},r.a.createElement("div",{id:"page-wrapper"},r.a.createElement(g,{fullMenu:a}),t,r.a.createElement(E,null))))},data:n})},l}(l.Component);t.a=b}}]);
//# sourceMappingURL=component---src-pages-resources-student-resources-js-9fc9d84088188c380381.js.map