(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(57)},34:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),i=a.n(o);a(34),a(36),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(16),l=a(27),d=Object(l.a)(),s=a(13),f=a(24),u=a(25),m=a(10),b={ALERT_SUCCESS:"ALERT_SUCCESS",ALERT_ERROR:"ALERT_ERROR",ALERT_CLEAR:"ALERT_CLEAR"},p={ADD_POINT:"ADD_POINT",REMOVE_POINT:"REMOVE_POINT",PATCH_POINT:"PATCH_POINT"},h={aliceblue:"#f0f8ff",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",yellow:"#ffff00",yellowgreen:"#9acd32"},g=["x","y"];var v=a(28);var O=Object(s.c)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.ALERT_SUCCESS:return Object(m.a)({},e,{type:"alert-success",message:t.message});case b.ALERT_ERROR:return Object(m.a)({},e,{type:"alert-danger",message:t.message});case b.ALERT_CLEAR:return Object(m.a)({},e);default:return e}},pointsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{points:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.ADD_POINT:var a=t.point;a.id=e.points.length;var n=Object.keys(h),r=n[Math.floor(Math.random()*n.length)];return a.color=h[r],Object(m.a)({},e,{points:Object(v.a)(e.points).concat([t.point])});case p.REMOVE_POINT:var o=e.points.findIndex(function(e){return e.id===t.id});return e.points.slice(0,o).slice(o+1),Object(m.a)({},e,{points:k(e.points,o)});case p.PATCH_POINT:var i=e.points.findIndex(function(e){return e.id===t.id}),c=JSON.parse(JSON.stringify(e.points));return c[i]=t.newPointData,Object(m.a)({},e,{points:c});default:return e}}}),y=Object(u.createLogger)(),E=Object(s.d)(O,Object(s.a)(f.a,y)),k=function(e,t){return e.slice(0,t).concat(e.slice(t+1))},j=a(5),C=a(6),P=a(9),N=a(7),A=a(8),w=(a(42),a(60)),x=a(59),T=(a(44),a(15)),M=(a(46),function(e){var t=e.point,a=e.className,n=(t.color,Object(T.a)(t,["color"]));return r.a.createElement("div",{className:"PointView "+a},r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("div",{className:"PointView__color mx-2",style:{backgroundColor:t.color}}),Object.keys(n).map(function(e){return r.a.createElement("div",{className:"d-flex mx-2"},r.a.createElement("div",{className:"mx-1"},e+":"),r.a.createElement("div",null,n[e]))})))});M.defaultProps={className:""};a(48);var S=function(e){var t=e.className,a=e.coordinates,n=e.handleCoordinateChange;return r.a.createElement("div",{className:"PointInputs "+t},r.a.createElement("div",{className:"d-flex"},Object.keys(a).map(function(e){return r.a.createElement("div",{className:"d-flex align-items-center mx-3"},r.a.createElement("div",{className:"mx-3"},e),r.a.createElement("input",{type:"number",className:"PointInputs__field",min:"0",max:"1000",value:a[e],onChange:function(t){return n(e,parseInt(t.target.value))}}))})))};S.defaultProps={className:""};var R=a(14),_=a(3),I=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(P.a)(this,Object(N.a)(t).call(this,e))).state={inEditMode:!1},a.toggleEditMode=a.toggleEditMode.bind(Object(_.a)(Object(_.a)(a))),a.handleCoordinateChange=a.handleCoordinateChange.bind(Object(_.a)(Object(_.a)(a))),a.pointPropToState=a.pointPropToState.bind(Object(_.a)(Object(_.a)(a))),a}return Object(A.a)(t,e),Object(C.a)(t,[{key:"componentWillMount",value:function(){this.pointPropToState()}},{key:"handleCoordinateChange",value:function(e,t){this.setState({point:Object(m.a)({},this.state.point,Object(R.a)({},e,t))})}},{key:"pointPropToState",value:function(){var e=Object.assign({},this.props.point);this.setState({point:e})}},{key:"toggleEditMode",value:function(){this.setState({inEditMode:!this.state.inEditMode}),this.pointPropToState()}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.removePoint,n=e.patchPoint,o=this.props.point,i=this.state,c=i.inEditMode,l=i.point,d=l.id,s=(l.color,Object(T.a)(l,["id","color"]));return r.a.createElement("div",{className:"Point "+t},c?r.a.createElement("div",{className:"d-flex"},r.a.createElement(S,{coordinates:s,handleCoordinateChange:this.handleCoordinateChange}),r.a.createElement("div",{className:"d-flex"},r.a.createElement("button",{className:"btn btn-success mx-2",onClick:function(){return n(d,l)}},"\u2713"),r.a.createElement("button",{className:"btn btn-primary mx-2",onClick:this.toggleEditMode},"cancel"))):r.a.createElement("div",{className:"d-flex"},r.a.createElement(M,{point:o}),r.a.createElement("div",{className:"d-flex"},r.a.createElement("button",{className:"btn btn-primary mx-2",onClick:this.toggleEditMode},"\u270e"),r.a.createElement("button",{className:"btn btn-danger mx-2",onClick:function(){return a(d)}},"\u274c"))))}}]),t}(r.a.Component);I.defaultProps={className:""};a(50);var L=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(P.a)(this,Object(N.a)(t).call(this,e))).state={inAddMode:!1},a.handleCoordinateChange=a.handleCoordinateChange.bind(Object(_.a)(Object(_.a)(a))),a.toggleAddMode=a.toggleAddMode.bind(Object(_.a)(Object(_.a)(a))),a.clearCoordinatesInState=a.clearCoordinatesInState.bind(Object(_.a)(Object(_.a)(a))),a.handleAddPointClick=a.handleAddPointClick.bind(Object(_.a)(Object(_.a)(a))),a}return Object(A.a)(t,e),Object(C.a)(t,[{key:"componentWillMount",value:function(){var e,t;this.setState((e=this.props.fields,t=0,e.reduce(function(e,a){return e[a]=t,e},{})))}},{key:"handleCoordinateChange",value:function(e,t){this.setState(Object(R.a)({},e,t))}},{key:"clearCoordinatesInState",value:function(){var e=this;this.props.fields.forEach(function(t){return e.setState(Object(R.a)({},t,0))})}},{key:"toggleAddMode",value:function(){this.setState({inAddMode:!this.state.inAddMode}),this.clearCoordinatesInState()}},{key:"handleAddPointClick",value:function(){var e=this.props.addPoint,t=this.state;t.inAddMode;e(Object(T.a)(t,["inAddMode"]))}},{key:"render",value:function(){var e=this.props.className,t=this.state,a=t.inAddMode,n=Object(T.a)(t,["inAddMode"]);return r.a.createElement("div",{className:"PointAdd "+e},a?r.a.createElement("div",{className:"d-flex"},r.a.createElement(S,{coordinates:n,handleCoordinateChange:this.handleCoordinateChange}),r.a.createElement("div",{className:"d-flex"},r.a.createElement("button",{className:"btn btn-success mx-2",onClick:this.handleAddPointClick},"\u2713"),r.a.createElement("button",{className:"btn btn-primary mx-2",onClick:this.toggleAddMode},"cancel"))):r.a.createElement("button",{className:"btn btn-success",onClick:this.toggleAddMode},"Add point"))}}]),t}(r.a.Component);L.defaultProps={className:""};a(52);var D=function(e){var t=e.points,a=e.removePoint,n=e.patchPoint;return r.a.createElement("div",{className:"PointsTable"},t.map(function(e,t){return r.a.createElement(I,{className:"m-2",key:(o=t,"".concat(o,"_").concat((new Date).getTime())),point:e,removePoint:a,patchPoint:n});var o}))},q=(a(54),a(11)),V=function(e){function t(){return Object(j.a)(this,t),Object(P.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(C.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props.points,t=document.querySelector(".Chart").offsetWidth,a=document.querySelector(".Chart").offsetHeight,n=q.d().domain([0,q.c(e,function(e){return e.x})]).range([60,t-60]),r=q.d().domain([0,q.c(e,function(e){return e.y})]).range([a-60,60]);q.e(".Chart").selectAll("svg").remove(),setTimeout(function(){});var o=q.e(".Chart").append("svg").attr("width",t).attr("height",a).style("background-color","#ccc");o.selectAll("circle").data(e).enter().append("circle").attr("cx",function(e){return n(e.x)}).attr("cy",function(e){return r(e.y)}).attr("r",function(e){return 5}).attr("fill",function(e){return e.color}),o.selectAll("text").data(e).enter().append("text").text(function(e){return e.x+","+e.y}).attr("x",function(e){return n(e.x)+10}).attr("y",function(e){return r(e.y)});var i=q.a(n),c=q.b(r);o.append("g").attr("transform","translate(0,"+(a-60)+")").call(i),o.append("g").attr("transform","translate(60,0)").call(c);var l=e.reduce(function(e,t){return e+n(t.x)+","+r(t.y)+" "},"");o.append("polyline").attr("points",l).attr("stroke-width","2").attr("stroke","#000").attr("fill","none")}},{key:"render",value:function(){return r.a.createElement("div",{className:"Chart"})}}]),t}(r.a.Component);var H={addPoint:function(e){return{type:p.ADD_POINT,point:e}},removePoint:function(e){return{type:p.REMOVE_POINT,id:e}},patchPoint:function(e,t){return{type:p.PATCH_POINT,id:e,newPointData:t}}};var W=function(e){function t(e){return Object(j.a)(this,t),Object(P.a)(this,Object(N.a)(t).call(this,e))}return Object(A.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props,t=e.addPoint,a=e.removePoint,n=e.patchPoint,o=this.props.points;return r.a.createElement("div",{className:"MainPage"},r.a.createElement("div",null,r.a.createElement(L,{fields:g,className:"m-4",addPoint:t}),r.a.createElement(D,{points:o,removePoint:a,patchPoint:n})),r.a.createElement("div",null,r.a.createElement(V,{points:o})))}}]),t}(r.a.Component);var J=Object(c.b)(function(e){return{points:e.pointsReducer.points}},function(e){return{addPoint:function(t){return e(H.addPoint(t))},removePoint:function(t){return e(H.removePoint(t))},patchPoint:function(t,a){return e(H.patchPoint(t,a))}}})(W),U=function(e){function t(){return Object(j.a)(this,t),Object(P.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w.a,{history:d},r.a.createElement("div",null,r.a.createElement(x.a,{exact:!0,path:"/",component:J}))))}}]),t}(n.Component);i.a.render(r.a.createElement(c.a,{store:E},r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,2,1]]]);
//# sourceMappingURL=main.6030dc52.chunk.js.map