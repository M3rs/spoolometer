(this.webpackJsonpspoolometer=this.webpackJsonpspoolometer||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var r=n(6),s=n.n(r),a=n(27),c=n.n(a),i=(n(35),n(17)),o=n(0),l=(n(36),n(28)),u=n.n(l),j=n(1);var d=function(){var e,t,n=Object(r.useState)(parseInt(null!==(e=localStorage.getItem("spoolSize"))&&void 0!==e?e:1e3)),s=Object(o.a)(n,2),a=s[0],c=s[1],l=Object(r.useState)(parseInt(null!==(t=localStorage.getItem("remainder"))&&void 0!==t?t:1e3)),d=Object(o.a)(l,2),b=d[0],m=d[1],h=Object(r.useState)((function(){var e=localStorage.getItem("prints");return e&&""!==e?JSON.parse(e):[]})),O=Object(o.a)(h,2),g=O[0],p=O[1];return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)("h1",{children:"Spool-o-meter"}),Object(j.jsxs)("div",{className:"spoolSize",children:[Object(j.jsx)("label",{children:"Spool Size"}),Object(j.jsx)("input",{type:"number",onChange:function(e){return c(e.target.valueAsNumber)},value:a}),Object(j.jsx)("button",{onClick:function(e){window.confirm("Are you sure you want to reset this?")&&(m(a),p([]),localStorage.setItem("remainder",a),localStorage.setItem("spoolSize",a),localStorage.removeItem("prints"),window.location.reload())},title:"Clears usage and sets max spool to spool size value",children:"Reset"})]}),Object(j.jsx)(u.a,{maxValue:a,value:b,needleColor:"black",startColor:"red",segments:10,endColor:"green",height:200}),Object(j.jsxs)("section",{className:"prints",children:[Object(j.jsx)("h2",{children:"Prints"}),Object(j.jsx)("ul",{children:g.map((function(e){return Object(j.jsxs)("li",{children:[e.name,": ",e.usage," (",e.time," hours - started ",e.start,")"]},e.start)}))})]}),Object(j.jsxs)("section",{className:"addPrint",children:[Object(j.jsx)("h4",{children:"Add New Print"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p((function(t){var n=[].concat(Object(i.a)(g),[{name:e.target.name.value,usage:e.target.usage.valueAsNumber,time:e.target.time.valueAsNumber,start:(new Date).toString()}]);return localStorage.setItem("prints",JSON.stringify(n)),n})),m((function(t){return t-e.target.usage.valueAsNumber}))},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Name"}),Object(j.jsx)("input",{name:"name"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Estimated Usage"}),Object(j.jsx)("input",{type:"number",placeholder:"0",name:"usage"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Estimated Print Time (hours)"}),Object(j.jsx)("input",{type:"number",placeholder:"0",name:"time"})]}),Object(j.jsx)("button",{children:"Add New Print"})]})]})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root")),b()}},[[60,1,2]]]);
//# sourceMappingURL=main.7336f5e4.chunk.js.map