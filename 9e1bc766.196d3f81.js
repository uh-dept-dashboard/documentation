(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{83:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return c}));var n=a(3),i=a(7),o=(a(0),a(98)),r={title:"Design overview"},s={unversionedId:"overview/design-overview",id:"overview/design-overview",isDocsHomePage:!1,title:"Design overview",description:"Design Goals",source:"@site/docs/overview/design-overview.md",slug:"/overview/design-overview",permalink:"/documentation/docs/overview/design-overview",version:"current",sidebar:"someSidebar",previous:{title:"Walkthrough of the Template",permalink:"/documentation/docs/overview/walkthrough"},next:{title:"Privacy and PII",permalink:"/documentation/docs/overview/privacy"}},d=[{value:"Design Goals",id:"design-goals",children:[]},{value:"Instantiating a new dashboard",id:"instantiating-a-new-dashboard",children:[]},{value:"Extending a dashboard with new functionality",id:"extending-a-dashboard-with-new-functionality",children:[]}],l={toc:d};function c(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"design-goals"},"Design Goals"),Object(o.b)("p",null,"We want UH Department Dashboards to satisfy the following top-level design goals:"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"1. Academic units can implement a dashboard with no monetary cost and no system administration overhead."),' Dashboards should incur no hosting costs and no ongoing system administration overhead (i.e. database management, operating system upgrades, etc.) We propose to accomplish this by implementing the dashboard as a "static site" hosted by GitHub.  This implies: (1) the dashboard can be hosted without cost to UH; (2) there is no back-end application server or database to maintain; and (3) OS-level security issues are minimized.'),Object(o.b)("p",null,'Implementing the dashboard as a static site at GitHub imposes constraints on what the dashboard can show and what it can do.  Most importantly, any data available on the dashboard must be effectively "public".  Therefore, the dashboard cannot manipulate any data containing personally identifiable information (PII) about students. It cannot provide private information about faculty. Finally, as a consequence of the static site implementation, updating the dashboard cannot be done by logging in to it and filling out forms; instead, updates happen by running scripts and republishing the site.'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"2. Academic units can tailor their dashboard to support their individual needs."),'  Different departments will have different needs regarding the collection, analysis, and display of teaching, research, and service data.  This project will not result in a monolithic, "one size fits all" dashboard. Instead, the project will provide a library of "widgets" that academic units can select from and configure to address their individual  needs.'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"3. Academic units can extend their dashboard's capabilities."),' The dashboard will have a modular, "tool chain" design.  This is intended to make it as easy as possible for academic units to implement ways to collect, analyze, and display the data most suited to their goals. Tool chains developed for one unit can be shared with other units without requiring them to share their data.'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},'4. Data is not "locked in" to the dashboard.'),". The dashboard will allow faculty to download the data in .csv format. This makes it easy for faculty to explore the dataset and hopefully discover new measures and/or analyses that can be helpful to improving the academic unit."),Object(o.b)("h2",{id:"instantiating-a-new-dashboard"},"Instantiating a new dashboard"),Object(o.b)("p",null,'Following this implementation approach, the dashboard would be implemented as a GitHub repo that can be cloned by a "Dashboard Administrator" for an academic unit. To stand up a new dashboard, the Dashboard Administrator would:'),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Clone the base uh-dept-dashboard-template repo from GitHub. Let's say a dashboard is being created for the ICS Department. Then, the dashboard administrator might clone uh-dept-dashboard-template into a repo called ics-dept-dashboard.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Edit a set of configuration files that specify the widgets in the dashboard, the faculty, and the keys to be used to access unlisted pages.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Run "download" scripts to download department-related data from various place (Banner, CES, DBLP and/or Google Scholar, MyGrants, UHF). The data obtained from these download scripts is "ephemeral": it is not stored in GitHub, and it may potentially contain PII about students. Thus, the Dashboard Administrator must have completed training and be authorized to manipulate PII data and protect it in an appropriate manner.')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Run "widget data" scripts that takes the ephemeral data and extracts the information required for one or more widgets. The resulting "widget data" is public, contains no PII, is FERPA compliant, and can be stored in an external service like GitHub.')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Configure "public" pages. Each dashboard has a public landing page with widgets that the academic unit is comfortable revealing to anyone with the top-level URL to the dashboard.  In addition to the landing page with top-level widgets, users can access a variety of public "drilldowns" which provide more specialized visualizations.'))),Object(o.b)("p",null,'In addition to public pages, the dashboard could optionally contain a set of "unlisted" pages that provide faculty-specific data and visualizations. Unlisted pages are not password-protected, but they are "hidden" by including a long difficult-to-guess string of characters in the URL.  This is the same way Google, YouTube, and other sites provide "unlisted" pages. Note that you cannot guarantee that "unlisted" pages cannot be publicly revealed since the URL could be circulated, much the same way that you cannot guarantee that a password-protected page cannot not be revealed since a username and password could be circulated. That said, these pages are useful because they make it easy for faculty to extract data specific to their teaching, research, and service for inclusion in various reports and dossiers.'),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Commit the dashboard to GitHub. It will now be available at a URL such as ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"http://ics-dept-dashboard.github.io"}),"http://ics-dept-dashboard.github.io"),".")),Object(o.b)("h2",{id:"extending-a-dashboard-with-new-functionality"},"Extending a dashboard with new functionality"),Object(o.b)("p",null,"In order to extend the dashboard, the Dashboard Administrator can:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Write a new "download" script to download additional ephemeral data, if the data is not already available via other scripts.')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Write a new "widget data" script to produce the data needed for the widget.')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Implement the widget display component. In many cases, the new widget could be a slight modification of an existing widget.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Edit configuration files to put the new widget into the dashboard.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Commit the changes."))))}c.isMDXComponent=!0},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),c=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=c(a),h=n,u=p["".concat(r,".").concat(h)]||p[h]||b[h]||o;return a?i.a.createElement(u,s(s({ref:t},l),{},{components:a})):i.a.createElement(u,s({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);