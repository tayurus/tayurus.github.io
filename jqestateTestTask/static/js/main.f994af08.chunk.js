(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){e.exports=t.p+"static/media/example.294fbce3.jpg"},34:function(e,a,t){e.exports=t(97)},39:function(e,a,t){},41:function(e,a,t){},43:function(e,a,t){},87:function(e,a,t){},89:function(e,a,t){},91:function(e,a,t){},93:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(20),c=t.n(i),o=(t(39),t(10)),l=t(11),s=t(15),u=t(12),d=t(14),m=(t(41),t(8)),p=(t(43),t(21)),f=t(13),g=(t(87),t(30)),h=t.n(g),v=t(9),E=t(31),b=t(32),_=t(16),k="GET_CARDS_REQUEST",O="GET_CARDS_FAILURE",j="GET_CARDS_SUCCESS",y="https://api.jqestate.ru",N={cards:[],paginationIndex:1},C=Object(v.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case k:return Object(_.a)({},e,{loading:!0,error:!1});case O:return Object(_.a)({},e,{loading:!1,error:!0});case j:return Object(_.a)({},e,{cards:a.cards,total:a.total,limit:a.limit,paginationIndex:a.paginationIndex,loading:!1,error:!1});default:return e}},Object(v.a)(E.a,b.logger)),w=function(e){var a=e.title,t=e.price,n=e.area,i=e.sotki,c=e.currency,o=e.badge;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__image",style:{backgroundImage:"url("+h.a+")"}}),r.a.createElement("div",{className:"card__title"},a),r.a.createElement("div",{className:"card__price"},function(e){return{RUB:"\u20bd",USD:"$",EUR:"\u20ac"}[e]}(c),t.toLocaleString()),r.a.createElement("div",{className:"card__area"},r.a.createElement("div",{className:"card__sotki"},i," \u0441\u043e\u0442"),r.a.createElement("div",{className:"card__square"},n," \u043c",r.a.createElement("sup",null,"2"))),o&&r.a.createElement("div",{className:"card__badge",style:{backgroundColor:o.color}},o.title))};w.defaultProps={title:"\u0414\u043e\u043c",price:"100 000",sotki:"3",square:"100"};t(89);var I=function(e){var a=e.cards;return r.a.createElement("div",{className:"cards-grid"},a.map(function(e,a){return r.a.createElement(w,Object.assign({key:a},e))}))};I.defaultProps={cards:[]};t(91),t(93);var x=function(e){var a=e.className,t=e.label,n=e.onClick;return r.a.createElement("button",{className:"button "+a,onClick:n},t)};x.defaultProps={className:"",label:"label",onClick:function(){}};var P=function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__inner"},r.a.createElement("nav",{className:"header__nav"},r.a.createElement("ul",null,r.a.createElement("li",{href:"#"},r.a.createElement("a",{href:"#",className:"header__logo"})),["\u0410\u0440\u0435\u043d\u0434\u0430","\u041f\u0440\u043e\u0434\u0430\u0436\u0430","\u041f\u043e\u0441\u0435\u043b\u043a\u0438","\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"].map(function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("a",{href:"#",className:"header__nav-item"},e))}))),r.a.createElement("div",{className:"header__feedback"},r.a.createElement("a",{href:"tel:+7 (495) 023-49-901",className:"header__nav-item"},"+7 (495) 023-49-901"),r.a.createElement(x,{label:"\u041e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u0437\u0432\u043e\u043d\u043e\u043a",className:"button_green"}))))},S=t(24),R=t.n(S),U=t(33);function D(){return(D=Object(U.a)(R.a.mark(function e(){var a,t,n=arguments;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>0&&void 0!==n[0]?n[0]:0,e.next=3,fetch(y+"/v1/properties/country?pagination[offset]="+a);case 3:return t=e.sent,e.abrupt("return",t.json());case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var A={getCards:function(){return D.apply(this,arguments)}},B=function(e,a){return function(t){t({type:k}),A.getCards(e).then(function(e){"undefined"!==typeof e.errors?t({type:O}):t({type:j,cards:e.items,total:e.pagination.total,limit:e.pagination.limit,paginationIndex:a})}).catch(function(e){return t({type:O})})}},T=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).handlePaginationItemClick=t.handlePaginationItemClick.bind(Object(m.a)(Object(m.a)(t))),t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)(B(0))}},{key:"handlePaginationItemClick",value:function(e){var a=this.props,t=a.dispatch,n=a.limit;t(B((e-1)*n,e))}},{key:"render",value:function(){if(this.props.error)return alert("\u041f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430!"),r.a.createElement("div",null);if(!this.props.loading){var e=this.props.cards.map(function(e){return{title:e.kind,currency:e.saleOffer?e.saleOffer.currency:"none",price:e.saleOffer?e.saleOffer.price:"none",area:e.specification.area,badge:e.badge,sotki:(e.specification.area/100).toFixed(1)}}),a=this.props,t=a.total,n=a.limit,i=a.paginationIndex;return r.a.createElement("div",{className:"main-page"},r.a.createElement(P,null),r.a.createElement(I,{cards:e}),r.a.createElement(p.Pagination,{className:"main-page__pagination",items:parseInt(t/n)+(t>n&&t%n?1:0),activePage:i,onSelect:this.handlePaginationItemClick,maxButtons:8}))}return r.a.createElement("div",{className:"main-page main-page_loading"},r.a.createElement(p.Preloader,{size:"big"}))}}]),a}(n.Component);var q=Object(f.b)(function(e){return{cards:e.cards,total:e.total,limit:e.limit,loading:e.loading,paginationIndex:e.paginationIndex,error:e.error}},null)(T),G=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(q,null)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f.a,{store:C},r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,2,1]]]);
//# sourceMappingURL=main.f994af08.chunk.js.map