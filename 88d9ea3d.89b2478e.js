(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),s=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,b=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?a.a.createElement(b,l(l({ref:t},d),{},{components:n})):a.a.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(123)),i={title:"Retention"},l={unversionedId:"widgets/retention",id:"widgets/retention",isDocsHomePage:!1,title:"Retention",description:"Motivation",source:"@site/docs/widgets/retention.md",slug:"/widgets/retention",permalink:"/documentation/docs/widgets/retention",version:"current",sidebar:"someSidebar",previous:{title:"Extramural Funding",permalink:"/documentation/docs/widgets/extramural-funding"},next:{title:"Publications",permalink:"/documentation/docs/widgets/publications"}},c=[{value:"Motivation",id:"motivation",children:[]},{value:"Rollup",id:"rollup",children:[]},{value:"Drilldown: by course level",id:"drilldown-by-course-level",children:[]},{value:"Drilldown: by demographic",id:"drilldown-by-demographic",children:[]},{value:"Baseline",id:"baseline",children:[]}],d={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"motivation"},"Motivation"),Object(o.b)("p",null,"In STEM disciplines, retention is a problem. Many students who start a STEM degree program do not finish, and retention is a more significant issue for women and underrepresented groups."),Object(o.b)("h2",{id:"rollup"},"Rollup"),Object(o.b)("p",null,'Ideally, retention for a given academic year is the percentage of students who declare a major in that academic year that actually go on to graduate with a degree in the major at some point in the future.  This approach requires at least three to four years of data to be collected before the measure can be calculated, and means that retention for the current AY will not be available until three to four years in the future.  For this reason, the "ideal" measure of retention is not useful for decision making.'),Object(o.b)("p",null,"Instead, an estimate of retention can be calculated by determining the number of declared majors for a given academic year and the number of graduates in a given academic year. Assuming a relatively constant number of declared majors, and that the degree program takes approximately three years to complete after declaring the major, then a 100% retention rate would require that one third of the declared majors graduate each year. Thus, the estimated retention is: the number of graduates, divided by the total number of declared majors divided by the length of the degree program."),Object(o.b)("h2",{id:"drilldown-by-course-level"},"Drilldown: by course level"),Object(o.b)("p",null,"This drilldown visualizes, for a given academic year, the number of unique students (not the number of seats) in the 100, 200, 300, and 400 level courses, as well as the number of students who graduated. Ideally, after the 100 level, the number of students in the remaining levels will remain approximately constant, and all who make it to (say) the 300 level graduate."),Object(o.b)("h2",{id:"drilldown-by-demographic"},"Drilldown: by demographic"),Object(o.b)("p",null,"This drilldown visualizes the course-level numbers, but also shows the percentages at each level who are women and/or underrepresented groups."),Object(o.b)("h2",{id:"baseline"},"Baseline"),Object(o.b)("p",null,"When national data is available on retention, then this can be integrated into the widget to provide a comparison of how well the department is doing relative to national statistics."))}s.isMDXComponent=!0}}]);