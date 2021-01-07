(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{123:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,f=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return r?o.a.createElement(f,s(s({ref:t},l),{},{components:r})):o.a.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),i=(r(0),r(123)),a={title:"Exit Survey Response"},s={unversionedId:"widgets/exit-survey-response",id:"widgets/exit-survey-response",isDocsHomePage:!1,title:"Exit Survey Response",description:"Motivation",source:"@site/docs/widgets/exit-survey-response.md",slug:"/widgets/exit-survey-response",permalink:"/documentation/docs/widgets/exit-survey-response",version:"current",sidebar:"someSidebar",previous:{title:"Course Evaluation Response",permalink:"/documentation/docs/widgets/course-evaluation-response"},next:{title:"Stakeholder Survey Response",permalink:"/documentation/docs/widgets/stakeholder-survey-response"}},c=[{value:"Motivation",id:"motivation",children:[]},{value:"Rollup",id:"rollup",children:[]},{value:"Drilldown: By course",id:"drilldown-by-course",children:[]},{value:"Drilldown: by faculty member",id:"drilldown-by-faculty-member",children:[]},{value:"Baseline",id:"baseline",children:[]}],l={toc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"motivation"},"Motivation"),Object(i.b)("p",null,"Several units indicate specific goals for their courses that could be assessed via department-wide course evaluation questions, such as:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'"As a professional student, I found this course attractive and compatible with my work life" (SPAS)'),Object(i.b)("li",{parentName:"ul"},'"This course provided opportunities for me to improve my software development skills" (ICS)'),Object(i.b)("li",{parentName:"ul"},'"This course provided me with useful interdisciplinary experiences." (Nursing)')),Object(i.b)("h2",{id:"rollup"},"Rollup"),Object(i.b)("p",null,'For each question of interest, the average of all responses across all courses.  This provides a "global" indicator of the department\'s progress toward the goal of interest over time, at least as perceived by students.'),Object(i.b)("p",null,"An alternative representation could be a box and whisker chart."),Object(i.b)("h2",{id:"drilldown-by-course"},"Drilldown: By course"),Object(i.b)("p",null,"A breakdown by course."),Object(i.b)("p",null,"Since responses are anonymous, we cannot break down by demographic."),Object(i.b)("h2",{id:"drilldown-by-faculty-member"},"Drilldown: by faculty member"),Object(i.b)("p",null,"A breakdown of responses, aggregated across all of the course taught by a specific faculty member in a given academic year."),Object(i.b)("h2",{id:"baseline"},"Baseline"),Object(i.b)("p",null,"No known baselines."))}u.isMDXComponent=!0}}]);