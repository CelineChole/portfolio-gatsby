(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{201:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(209),i=a(212),c=a.n(i);t.default=function(){return l.a.createElement(r.a,{fullMenu:!0},l.a.createElement("article",{id:"main"},l.a.createElement("header",null,l.a.createElement("h2",null,"Yogi Library")),l.a.createElement("section",{className:"wrapper style5"},l.a.createElement("div",{className:"inner"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("h3",null,"Links"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/CelineChole/yoga-library",target:"blank"},"GitHub"),"| "," ",l.a.createElement("a",{href:"https://yogilibrary.com/",target:"blank"},"yogilibrary.com"))),l.a.createElement("div",{className:"col-6"},l.a.createElement("h3",null,"Technologies"),l.a.createElement("p",null,"GatsbyJS - React - GraphQL - Tailwind"))),l.a.createElement("br",null),l.a.createElement("h3",null,"Overview"),l.a.createElement("p",null,"In 2018 I deciced to commit to a daily yoga practice. I began to consume a lot of online videos to give me ideas and saved them in a folder on YouTube. My growing collection quickly became hard to manage. Retrieving the exact video I wanted was a question of chance and I was getting frustrated. One quick fix was to create several folders but that didn't really solve the problem because the organization was not systematic and I like things to be well organized."),l.a.createElement("p",null,"I wanted a library to group all my favorite videos and filter them by different criteria such as the style of yoga, the duration, the level and any additional tags. I decided to create it."),l.a.createElement("h3",null,"Functionality"),l.a.createElement("p",null,"Yogi libary offers a curated list of my favorite yoga videos. Each video can be viewed by different properties:",l.a.createElement("ul",null,l.a.createElement("li",null,"YouTube channel"),l.a.createElement("li",null,"Duration"),l.a.createElement("li",null,"Tags"),l.a.createElement("li",null,"Level")),"Videos can be ordered by ascending or descending order."),l.a.createElement("div",{className:"row gtr-50 gtr-uniform"},l.a.createElement("div",{className:"col-3"},l.a.createElement("span",{className:"image fit"})),l.a.createElement("div",{className:"col-6"},l.a.createElement("span",{className:"image fit"},l.a.createElement("img",{src:c.a,alt:""})))),l.a.createElement("br",null),l.a.createElement("h3",null,"Frontend"),l.a.createElement("p",null,"The frontend is built with GatsbyJS, React and Tailwind."),l.a.createElement("h3",null,"Backend"),l.a.createElement("p",null,"I am using a Google sheets as my database. I and accessing the data using a Gatsby plugin and GraphQL queries."),l.a.createElement("h3",null,"Deployment"),l.a.createElement("p",null,"Yogi-library is deployed with Netlify.")))))}},205:function(e,t,a){var n;e.exports=(n=a(208))&&n.default||n},206:function(e,t){e.exports={siteTitle:"Céline Cholé",manifestName:"celinechole",manifestShortName:"celinechole",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/",heading:"Céline Cholé",subHeading:"Full time Web Developer in New York City",socialLinks:[{style:"brands",icon:"fa-github",name:"Github",url:"https://github.com/CelineChole"},{style:"brands",icon:"fa-linkedin",name:"Linkedin",url:"https://www.linkedin.com/in/celinechole/"},{style:"solid",icon:"fa-envelope",name:"Email",url:"mailto:job@celinechole.com"}]}},207:function(e){e.exports={data:{site:{siteMetadata:{title:"Céline Cholé"}}}}},208:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),l=a.n(n),r=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?l.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},209:function(e,t,a){"use strict";var n=a(207),l=a(0),r=a.n(l),i=a(210),c=a.n(i),o=a(66),s=a.n(o),u=(a(205),a(7).default.enqueue,r.a.createContext({}));function m(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,i=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,i&&l(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(u.Consumer,null,function(e){return r.a.createElement(m,{data:t,query:a,render:n||l,staticQueryData:e})})};a(211),a(49);var E=a(206),f=a.n(E);function h(){return r.a.createElement("footer",{id:"footer"},r.a.createElement("ul",{className:"icons"},f.a.socialLinks.map(function(e){var t=e.style,a=e.icon,n=e.name,l=e.url;return r.a.createElement("li",{key:l},r.a.createElement("a",{href:l,className:"icon "+t+" "+a},r.a.createElement("span",{className:"label"},n)))})),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,"© Built by Céline Cholé"),r.a.createElement("li",null,"Design:"," ",r.a.createElement("a",{href:"http://html5up.net",target:"_blank"},"HTML5 UP"))))}function p(e){var t=e.onMenuToggle,a=void 0===t?function(){}:t;return r.a.createElement("nav",{id:"nav"},r.a.createElement("ul",null,r.a.createElement("li",{className:"special"},r.a.createElement("a",{href:"#menu",onClick:function(e){e.preventDefault(),a()},className:"menuToggle"},r.a.createElement("span",null,"Menu")),r.a.createElement("div",{id:"menu"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/portfolio/explore"},"Explore")),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/resources/student-resources"},"Student Resources")),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/story"},"Story")),r.a.createElement("li",null,r.a.createElement(s.a,{to:"/contact"},"Contact"))),r.a.createElement("a",{className:"close",onClick:function(e){e.preventDefault(),a()},href:"#menu"},"")))))}function g(e){var t=e.fullMenu,a=Object(l.useState)(!1),n=a[0],i=a[1];return r.a.createElement("header",{id:"header",className:t?"":"alt"},r.a.createElement("h1",null,r.a.createElement(s.a,{to:"/"},"Home")),r.a.createElement("div",{className:n?"is-menu-visible":" "},r.a.createElement(p,{onMenuToggle:function(){return i(!n)}})))}var y=function(e){var t,a;function l(t){var a;return(a=e.call(this,t)||this).state={isPreloaded:!0},a}a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=l.prototype;return i.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({isPreloaded:!1})},100)},i.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},i.render=function(){var e=this.props,t=e.children,a=e.fullMenu,l=this.state.isPreloaded;return r.a.createElement(d,{query:"1044757290",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Spectral"},{name:"keywords",content:"site, web"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement("div",{className:l?"landing main-body is-preload":"landing main-body"},r.a.createElement("div",{id:"page-wrapper"},r.a.createElement(g,{fullMenu:a}),t,r.a.createElement(h,null))))},data:n})},l}(l.Component);t.a=y},212:function(e,t,a){e.exports=a.p+"static/yoga-a118971b21a4c31dd45c88d75a1a3bc0.jpg"}}]);
//# sourceMappingURL=component---src-pages-portfolio-yogi-library-js-3280758a3bc2397bf980.js.map