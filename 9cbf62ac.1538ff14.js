(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),o=a(7),r=(a(0),a(123)),i={title:"Motivation"},s={unversionedId:"overview/motivation",id:"overview/motivation",isDocsHomePage:!1,title:"Motivation",description:"Overview",source:"@site/docs/overview/motivation.md",slug:"/overview/motivation",permalink:"/documentation/docs/overview/motivation",version:"current",sidebar:"someSidebar",next:{title:"Walkthrough of the Template",permalink:"/documentation/docs/overview/walkthrough"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Observations",id:"observations",children:[]}],l={toc:c};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"The goal of the UH Department Dashboard project is to provide a way for an academic unit to efficiently and effectively improve over time through access to up-to-date measures of teaching, research, service, and resources. Each academic unit can build a custom dashboard that contains the specific measures that they believe will be helpful to them in understanding and improving their unique situation over time."),Object(r.b)("p",null,"More specifically, this project will develop a set of tools that an academic unit can use to create a custom static web site with analyses and visualizations. Additional tools will allow the academic unit to populate the dashboard by retrieving data from a variety of sources, such as: STAR, Banner, MyGrants, CES, UHF, Office of Institutional Research, Google Scholar, Academic Analytics, and/or other online sites. When automated collection is not possible for data deemed important by an academic unit, then manual collection can be used."),Object(r.b)("h2",{id:"observations"},"Observations"),Object(r.b)("p",null,"The UH Department Dashboard project is motivated by the following observations:"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Useful insight into the state of an academic unit requires data and analyses from a variety of sources, combined together in a variety of ways.")," Analysis of external review reports shows that useful data can come from institutional offices such as Institutional Research (OIR) and Research Services (ORS), from course evaluation and enrollment services (CES, Banner, STAR), from national sources such as Google Scholar, DBLP, Academic Analytics, and just as importantly from home-grown, departmental data gathering (exit surveys, etc). Gathering and analyzing this data into a form that is useful to a specific department, if done manually, is extremely time-consuming."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Up-to-date data is rarely available, impeding progress toward academic goals.")," Since new data on teaching, research and service is generated every semester, and since it is currently so time-consuming to collect and analyze, up-to-date data is rarely available for strategic planning and decision making.  Automating collection, analysis, and visualization has the potential to improve strategic planning and decision making by providing early feedback on the impact of policy and program changes. For example, up-to-date data can help in understanding student retention (i.e. the percentage of majors enter a program that actually graduate), time-to-degree (i.e. how many semesters it takes for students to graduate), and diversity (i.e. the percentage of women and underrepresented groups at various points in the degree program).  Automated techniques can enable useful combinations of analyses (i.e. do women take longer than men to graduate?  Is retention more of a problem for underrepresented groups?)"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Easily available, up-to-date data enables new approaches to evidence-based decision-making.")," Lowering the overhead of data collection and analysis can create new, feasible ways to investigate problems in an academic department. For example, department-wide course evaluation questions can be used to gain insight from students about pedagogy (does the course make it easy to cheat?) and professional preparation (does the course appear relevant to your professional goals?) Results can be updated every semester simply by running scripts, and trend data can be used to see if a departmental intervention in one semester have made an impact in the next semester."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"We must solve this problem in-house.")," Since most of the information sources on teaching and research involve a bespoke collection of services (Banner, MyGrant, UHF, OIR, etc), we are unlikely to be able to purchase a system from a vendor that suits our needs. If we want this kind of system, we'll need to build it ourselves. The next section shows what such a system might look like."))}u.isMDXComponent=!0},123:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return f}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return a?o.a.createElement(f,s(s({ref:t},l),{},{components:a})):o.a.createElement(f,s({ref:t},l))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);