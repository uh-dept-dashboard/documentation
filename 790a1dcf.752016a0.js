(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{123:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,m=d["".concat(o,".").concat(h)]||d[h]||p[h]||i;return a?r.a.createElement(m,s(s({ref:t},c),{},{components:a})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},93:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(123)),o={title:"Measurement Dysfunction"},s={unversionedId:"overview/measurement-dysfunction",id:"overview/measurement-dysfunction",isDocsHomePage:!1,title:"Measurement Dysfunction",description:"Motivation",source:"@site/docs/overview/measurement-dysfunction.md",slug:"/overview/measurement-dysfunction",permalink:"/documentation/docs/overview/measurement-dysfunction",version:"current",sidebar:"someSidebar",previous:{title:"Privacy and PII",permalink:"/documentation/docs/overview/privacy"},next:{title:"Requirements Analysis",permalink:"/documentation/docs/requirements/overview"}},l=[{value:"Motivation",id:"motivation",children:[]},{value:"Assess data quality",id:"assess-data-quality",children:[]},{value:"Validate using multiple measures",id:"validate-using-multiple-measures",children:[]},{value:"The Dashboard indicates what, not why",id:"the-dashboard-indicates-what-not-why",children:[]},{value:"False positives, negatives, and signal-to-noise ratio",id:"false-positives-negatives-and-signal-to-noise-ratio",children:[]}],c={toc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"motivation"},"Motivation"),Object(i.b)("p",null,"Measurement dysfunction is a situation in which the act of measurement produces results directly contrary to the actual goals of measurement.  An excellent reference on this topic is ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.amazon.com/Measuring-Managing-Performance-Organizations-Robert/dp/0932633366"}),"Measuring and managing performance in organizations")," by Robert Austin."),Object(i.b)("p",null,'Care must be taken in the design of a departmental dashboard to avoid producing measurement dysfunction. For example, if "teaching performance" is defined in terms of "SSH per Faculty FTE", then a single-pointed focus on improving "performance" can lead to large lecture hall classes without TAs, with potentially disastrous consequences for the goal of providing a quality educational experience for students.'),Object(i.b)("p",null,"The blog post ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://jakobgreenfeld.com/metrics"}),"How management by metrics leads us astray")," and the accompanying ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://news.ycombinator.com/item?id=25856257"}),"Hacker News Discussion"),' provides many cautionary tales about the dangers of metrics for organizational improvement.  One example is "Goodhart\'s Law": when a measure becomes a target, it ceases to be a good measure.'),Object(i.b)("p",null,'Many of the cited problems with metrics can be viewed as a result of confusing the "map" with the "territory". Maps can be incredibly useful, but they are an abstraction of reality, not reality itself. For example, if a map does not contain topographic information and you are using it to estimate the time to walk between two points, your estimate may be wildly inaccurate when you try walk that path because there is a substantial elevation gain. This doesn\'t mean that particular map is totally useless and should never be used. It means that you have discovered a problem with that particular abstraction of reality for that particular purpose, and you need more abstractions in future for that purpose.'),Object(i.b)("p",null,"Here are some steps that can be taken to avoid measurement dysfunction when developing and using a departmental dashboard."),Object(i.b)("h2",{id:"assess-data-quality"},"Assess data quality"),Object(i.b)("p",null,'There is a cliche in computer science: "Garbage in, garbage out".  The Dashboard will not provide useful guidance if the data used to generate the dashboard is of low quality.'),Object(i.b)("p",null,"Be sure to create mechanisms to assess the quality of the data.  For example, when using course evaluation data, it is important to track the percentage of students in the class submitting evaluations.  If the percentage is very low, then the results may not be representative."),Object(i.b)("h2",{id:"validate-using-multiple-measures"},"Validate using multiple measures"),Object(i.b)("p",null,"When possible, see if important goals can be assessed by more than one independent measure. For example, if a goal is to ensure that classes are relevant to professional goals, then this could be assessed by a Department-level course evaluation question, and Exit Survey Questionnaire, and a Stakeholder Questionnaire."),Object(i.b)("h2",{id:"the-dashboard-indicates-what-not-why"},"The Dashboard indicates what, not why"),Object(i.b)("p",null,"Think of the Department Dashboard as similar to a thermometer: it can function to indicate that something appears to be amiss, but additional work will always be needed to understand the underlying causes of the measurement."),Object(i.b)("p",null,"For example, if the dashboard indicates that a course evaluation response average value for the Department as a whole is below the university average, then the next step is to look at individual classes. For example, perhaps a single, large introductory course generated poor values, but all of the other courses were above the University average. Alternatively, perhaps there is a widespread below average performance on that question across the department.  Very different actions would be taken depending upon which situation produced the dashboard value."),Object(i.b)("h2",{id:"false-positives-negatives-and-signal-to-noise-ratio"},"False positives, negatives, and signal-to-noise ratio"),Object(i.b)("p",null,'Just like any other sensor, the Department Dashboard is susceptible to "false positives" (where a seemingly inappropriate value does not actually indicate a problem) as well as "false negatives" (where the dashboard shows nominal values despite the presence of a problems in the Department).'),Object(i.b)("p",null,"The possibility of false positives and false negatives does not automatically mean that the dashboard is useless. The utility of the dashboard ultimately rests on its signal-to-noise ratio.  If most of the results from the dashboard are false positives or false negatives, then the dashboard will not be valuable to the department."),Object(i.b)("p",null,"The primary design goal for each department is to create a dashboard that is useful: one which has a high signal-to-noise ratio. It may a few design iterations, over a few academic years, in order to achieve this.  As a brand new technology, we expect that there will be surprises and unanticipated challenges as we start to gain real-world experience with the system. We appreciate your willingness to put time and effort into testing the hypothesis that the UH Department Dashboard can provide meaningful information at acceptable cost to academic units."))}u.isMDXComponent=!0}}]);