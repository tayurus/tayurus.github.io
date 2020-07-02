(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(35)},27:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(13),i=n.n(r),o=(n(27),n(14)),l=n(15),u=n(21),s=n(16),d=n(20),h=n(1),m=n(7),p=(n(32),function(e){var t=e.title,n=e.className,a=e.onClick;return c.a.createElement("button",{onClick:a,className:"button "+n},t)});p.defaultProps={title:":)",className:""};var f=function(e){var t=e.point,n=e.onClick;return c.a.createElement(c.a.Fragment,null,c.a.createElement("circle",{"data-text":t.text,onClick:n,cx:t.x,cy:t.y,r:"25",fill:"#ccc",stroke:"tomato",strokeWidth:"2"}),c.a.createElement("text",{"data-text":t.text,onClick:n,x:t.x-5,y:t.y+5,stroke:"red",strokeWidth:"2"},t.text))},v=(n(33),function(e){var t=e.matrix,n=new Array(t.length).fill(0);return c.a.createElement("table",{className:"adjacencyMatrix"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null),n.map(function(e,t){return c.a.createElement("th",null,t)}))),c.a.createElement("tbody",null,t.map(function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",{style:{fontWeight:"bold"}},t),e.map(function(e,t){return c.a.createElement("td",{key:t},e)}))})))}),y=(n(34),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleFieldClick=n.handleFieldClick.bind(Object(h.a)(Object(h.a)(n))),n.handlePointClick=n.handlePointClick.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleFieldClick",value:function(e){var t=this.props,n=t.dispatch;if("createPoint"===t.mode){var a=e.target.getBoundingClientRect();n({type:"newPoint",newPoint:{x:e.clientX-a.left,y:e.clientY-a.top}})}}},{key:"handlePointClick",value:function(e){e.stopPropagation();var t=this.props,n=t.mode,a=t.dispatch;"connectPoints"!==n&&"createPath"!==n||a({type:"selectPoint",pointText:parseInt(e.target.getAttribute("data-text")),mode:n})}},{key:"drawLines",value:function(e,t,n){var a=this,c=[];return t.forEach(function(t,n){t.forEach(function(t,a){t>1&&a!==n&&c.push([e[a],e[n]])})}),c.map(function(e,t){return a.drawLine(e,t,n)})}},{key:"drawLine",value:function(e,t,n){return c.a.createElement("line",{key:t,stroke:n,strokeWidth:"2",x1:e[0].x,y1:e[0].y,x2:e[1].x,y2:e[1].y})}},{key:"render",value:function(){var e=this,t=this.props,n=t.mode,a=t.dispatch,r=t.points,i=t.adjacencyMatrix,o=t.pathPairs;return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"App__mods-panel"},c.a.createElement(p,{title:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u043e\u0447\u043a\u0443",onClick:function(){return a({type:"changeMode",mode:"createPoint"})},className:"createPoint"===n?"button_active":""}),c.a.createElement(p,{title:"\u041f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043c\u0430\u0440\u0448\u0440\u0443\u0442",onClick:function(){return a({type:"changeMode",mode:"createPath"})},className:"createPath"===n?"button_active":""}),c.a.createElement(p,{title:"\u0421\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u0442\u043e\u0447\u043a\u0438",onClick:function(){return a({type:"changeMode",mode:"connectPoints"})},className:"connectPoints"===n?"button_active":""})),c.a.createElement("div",{className:"App__row"},c.a.createElement("svg",{className:"App__field",onClick:function(t){return e.handleFieldClick(t)}},r.map(function(t,n){return c.a.createElement(f,{key:n,onClick:e.handlePointClick,point:t})}),this.drawLines(r,i,"red"),o.map(function(t,n){return e.drawLine(t,n,"limegreen")})),c.a.createElement(v,{matrix:i})))}}]),t}(a.Component));var x=Object(m.b)(function(e){var t=e.modsReducer.mode,n=e.pointsReducer;return{mode:t,points:n.points,adjacencyMatrix:n.adjacencyMatrix,pathPairs:n.pathPairs}},null)(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=n(3),g={mode:"createPoint"},k=n(19),P=n(2),j=n(6),E={points:[],selectedPoints:[],adjacencyMatrix:[],pathPairs:[]},w=Object(b.c)({modsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"changeMode":return{mode:t.mode};default:return e}},pointsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,n=e.points,a=e.adjacencyMatrix,c=e.selectedPoints,r=t.mode;switch(t.type){case"newPoint":var i=Object(j.a)({},t.newPoint);return i.text=n.length,Object(j.a)({},e,{points:[].concat(Object(P.a)(n),[i]),adjacencyMatrix:N(a)});case"selectPoint":var o=Object(P.a)(c);if(o.push(t.pointText),2===o.length){if("connectPoints"===t.mode){var l=Object(k.a)(o,2),u=l[0],s=l[1],d=Object(P.a)(a),h=n[u],m=n[s],p=_(h.x,h.y,m.x,m.y);return d[u][s]=p,d[s][u]=p,Object(j.a)({},e,{selectedPoints:[],adjacencyMatrix:d})}if("createPath"===r&&2===o.length){for(var f=A([[{text:o[0],distance:1}]],o[1],a),v=[],y=0;y<f.length-1;y++)v.push([n[f[y].text],n[f[y+1].text]]);return Object(j.a)({},e,{selectedPoints:[],pathPairs:v})}}return Object(j.a)({},e,{selectedPoints:o});default:return e}}}),O=n(18),C=Object(O.createLogger)(),M=Object(b.d)(w,Object(b.a)(C)),N=function(e){var t=Object(P.a)(e);t.forEach(function(e){e.push(-1)});var n=Array(t.length+1).fill(-1);return n[t.length]=1,t.push(n),t},_=function(e,t,n,a){return parseInt(Math.sqrt(Math.pow(e-n,2)+Math.pow(t-a,2)).toFixed(0))},A=function e(t,n,a){var c=[],r=t.reduce(function(e,t){return t.length});return t.forEach(function(e,t){if(L(e,n))c.push(e);else for(var r=e[e.length-1],i=0;i<a.length;i++)a[r.text][i]>1&&!L(e,i)&&(c[c.length]=Object(P.a)(e),c[c.length-1].push({text:i,distance:a[r.text][i]}))}),r===c.reduce(function(e,t){return t.length})?c.sort(F)[0]:e(c,n,a)};function F(e,t){return e.reduce(function(e,t){return e+t.distance},0)-t.reduce(function(e,t){return e+t.distance},0)}var L=function(e,t){return e.some(function(e){return e.text===t})};i.a.render(c.a.createElement(m.a,{store:M},c.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.e73bc914.chunk.js.map