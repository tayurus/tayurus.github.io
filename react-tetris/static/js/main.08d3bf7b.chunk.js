(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(27)},16:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(5),o=n.n(i),c=(n(16),n(18),n(6)),s=n(7),u=n(9),l=n(8),f=n(10),h=(n(20),n(1)),d=n.n(h),m=["line","zipper","cube","hook"],p={line:{r0:[[-1,1],[0,0],[1,-1],[2,-2]],r1:[[1,1],[0,0],[-1,-1],[-2,-2]],r2:[[1,-1],[0,0],[-1,1],[-2,2]],r3:[[-1,-1],[0,0],[1,1],[2,2]]},cube:{r0:[[0,0],[0,0],[0,0],[0,0]],r1:[[0,0],[0,0],[0,0],[0,0]],r2:[[0,0],[0,0],[0,0],[0,0]],r3:[[0,0],[0,0],[0,0],[0,0]]},zipper:{r0:[[-1,1],[0,0],[1,-1],[2,-2]],r1:[[1,1],[0,0],[-1,1],[-2,0]],r2:[[1,-1],[0,0],[1,1],[0,2]],r3:[[-1,-1],[0,0],[-1,-1],[0,0]]},hook:{r0:[[-1,1],[0,0],[1,-1],[0,-2]],r1:[[1,1],[0,0],[-1,-1],[-2,0]],r2:[[1,-1],[0,0],[-1,1],[0,2]],r3:[[-1,-1],[0,0],[1,1],[2,0]]}},v=n(2),g=function(e,t,n){var r=0,a=0;switch(n){case"left":a=-1;break;case"right":a=1;break;case"down":r=1}var i=d.a.clone(t.points);return(i=i.map(function(t){return w(e,t,r,a)})).includes(!1)?t:Object(v.a)({},t,{points:i})},w=function(e,t,n,r){var a=t[0]+n<0||t[0]+n>=20,i=t[1]+r<0||t[1]+r>=10;return!a&&!i&&(!(2===e[t[0]+n][t[1]+r])&&[t[0]+n,t[1]+r])},k=(n(23),function(e){var t=e.field,n=e.className;return a.a.createElement("table",{className:"Field "+n},a.a.createElement("tbody",null,t.map(function(e,t){return a.a.createElement("tr",{key:t},e.map(function(e,t){return a.a.createElement("td",{key:t,className:"Field__cell "+(1===e?"Field__cell_figure":2===e?"Field__cell_fixed":"")})}))})))});k.defaultProps={className:""};n(25);var b=function(e){return a.a.createElement("div",{className:"ScoreBoard"},a.a.createElement("h2",{className:"ScoreBoard__title"},"Score: ",e.score))};b.defaultProps={className:""};var y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={field:[],figure:{points:[]},score:0},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({field:Array(20).fill(0).map(function(){return Array(10).fill(0)})},function(){e.drawNewFigure(),setInterval(function(){return e.tetrisMove("down")},1e3)}),document.onkeydown=function(t){var n="bottom";switch(t.which){case 37:n="left";break;case 38:e.setState({figure:function(e,t){var n=t.name,r=t.rotate,a=t.points.map(function(t,a){var i=p[n]["r"+(r+1)%4][a][0],o=p[n]["r"+(r+1)%4][a][1];return w(e,t,i,o)});return a.includes(!1)?t:Object(v.a)({},t,{rotate:r+1,points:a})}(e.state.field,e.state.figure)},function(){return e.updateFigureOnField()});break;case 39:n="right";break;case 40:n="down"}e.tetrisMove(n)}}},{key:"tetrisMove",value:function(e){var t=this,n=d.a.clone(this.state.figure),r=g(this.state.field,this.state.figure,e);d.a.isEqual(n,r)&&"down"===e?(this.fixFigure(),this.removeFullRows(),this.drawNewFigure()):this.setState({figure:g(this.state.field,this.state.figure,e)},function(){return t.updateFigureOnField()})}},{key:"updateFigureOnField",value:function(){var e=d.a.clone(this.state.field);e=e.map(function(e){return e.map(function(e){return 1===e?0:e})}),this.state.figure.points.forEach(function(t){return e[t[0]][t[1]]=1}),this.setState({field:e})}},{key:"fixFigure",value:function(){var e=d.a.clone(this.state.field);e=e.map(function(e){return e.map(function(e){return 1===e?2:e})}),this.setState({field:e})}},{key:"drawNewFigure",value:function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"line",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;switch(e){case"line":return{name:"line",points:[[t,n],[t+1,n],[t+2,n],[t+3,n]],rotate:0,width:1,height:4};case"zipper":return{name:"zipper",points:[[t,n],[t+1,n],[t+1,n-1],[t+2,n-1]],rotate:0,width:2,height:3};case"cube":return{name:"cube",points:[[t,n],[t,n+1],[t+1,n],[t+1,n+1]],rotate:0,width:2,height:2};case"hook":return{name:"hook",points:[[t,n],[t+1,n],[t+2,n],[t+2,n-1]],rotate:0,width:2,height:3}}}(m[d.a.random(0,m.length-1)],0,5);0!==this.state.field[0+e.height][5+e.width]?alert("GAME OVER"):this.setState({figure:e})}},{key:"removeFullRows",value:function(){var e=d.a.clone(this.state.field),t=0;e=e.map(function(e){return e.every(function(e){return 2===e})?(t++,e.map(function(e){return 0})):e});for(var n=0;n<t;n++)for(var r=18;r>=0;r--)e[r+1].every(function(e){return 0===e})&&(e[r+1]=d.a.clone(e[r]),e[r]=e[r].map(function(e){return 0}));this.setState({field:e,score:this.state.score+t*e[0].length*100})}},{key:"render",value:function(){var e=this.state,t=e.score,n=e.field;return a.a.createElement("div",{className:"App"},a.a.createElement(b,{score:t}),a.a.createElement(k,{className:"mx-auto my-5",field:n}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.08d3bf7b.chunk.js.map