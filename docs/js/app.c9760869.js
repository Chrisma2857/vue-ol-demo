(function(e){function t(t){for(var o,i,c=t[0],s=t[1],l=t[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},4732:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"header"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("ul",{staticClass:"menu"},[o("li",{on:{click:function(t){return e.initDraw("line")}}},[e._v("长度测量")]),o("li",{on:{click:function(t){return e.initDraw("area")}}},[e._v("面积测量")]),o("li",{on:{click:function(t){return e.clean("clean")}}},[e._v("清除")]),o("li",{on:{click:function(t){e.showLocation=!e.showLocation}}},[e._v("坐标定位")])]),o("span",{staticStyle:{position:"absolute",right:"20px",top:"15px",color:"blue"}},[e._v("坐标获取："+e._s(e.mousePosition))])]),o("Map",{ref:"map",on:{"map-click":e.mapClick}}),e.showLocation?o("Location"):e._e()],1)},r=[],i=(n("d81d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{style:{height:e.mapHeight+"px"},attrs:{id:"map"}})])}),c=[],s=(n("99af"),n("b680"),n("5bc0"),n("5eee")),l=n("a2c7"),u=n("480c"),p=n("2ef1"),f=n("e50d"),d=n("21bc"),m=n("256f"),v=(n("4160"),n("159b"),n("5bc3")),h=n("7a09"),w=n("ac29"),g=n("3e6b"),b=n("35a7"),y=n("0710"),k=n("5831"),O=n("790a"),_=n("6c77"),L=n("83a6"),j=n("8682"),x=n("ce2c");n("4de4");function P(e){var t=window.map.getLayers().getArray(),n=t.filter((function(t){return t.getProperties("id").id===e}));return n[0]}var C,M,N,E,$,S,D=new k["a"],H=new g["a"]({source:D,style:new _["c"]({fill:new L["a"]({color:"rgba(255, 255, 255, 0.2)"}),stroke:new j["a"]({color:"#6533ff",width:2}),image:new x["a"]({radius:7,fill:new L["a"]({color:"#6533ff"})})})}),T="Click to continue drawing the polygon",G="Click to continue drawing the line",I=function(e){if(!e.dragging){var t="Click to start drawing";if(C){var n=C.getGeometry();n instanceof v["a"]?t=T:n instanceof h["a"]&&(t=G)}M.innerHTML=t,N.setPosition(e.coordinate),M.classList.remove("hidden")}},V=function(e){var t,n=Object(O["c"])(e);return t=n>100?Math.round(n/1e3*100)/100+" km":Math.round(100*n)/100+" m",t},A=function(e){var t,n=Object(O["a"])(e);return t=n>1e4?Math.round(n/1e6*100)/100+" km<sup>2</sup>":Math.round(100*n)/100+" m<sup>2</sup>",t};function F(){M.classList.add("hidden")}function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"line";S&&e.removeInteraction(S),e.on("pointermove",I),e.getViewport().addEventListener("mouseout",F);var n,o="area"==t?"Polygon":"LineString";S=new w["a"]({source:D,type:o,style:new _["c"]({fill:new L["a"]({color:"rgba(255, 255, 255, 0.2)"}),stroke:new j["a"]({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new x["a"]({radius:5,stroke:new j["a"]({color:"rgba(0, 0, 0, 0.7)"}),fill:new L["a"]({color:"rgba(255, 255, 255, 0.2)"})})})}),e.addInteraction(S),q(e),J(e),S.on("drawstart",(function(e){C=e.feature;var t=e.coordinate;n=C.getGeometry().on("change",(function(e){var n,o=e.target;o instanceof v["a"]?(n=A(o),t=o.getInteriorPoint().getCoordinates()):o instanceof h["a"]&&(n=V(o),t=o.getLastCoordinate()),E.innerHTML=n,$.setPosition(t)}))})),S.on("drawend",(function(){E.className="ol-tooltip ol-tooltip-static",$.setOffset([0,-7]),C=null,E=null,q(e),Object(b["b"])(n)}))}function J(e){M&&M.parentNode&&M.parentNode.removeChild(M),M=document.createElement("div"),M.className="ol-tooltip hidden",N=new y["a"]({element:M,offset:[15,0],positioning:"center-left"}),e.addOverlay(N)}function q(e){E&&E.parentNode&&E.parentNode.removeChild(E),E=document.createElement("div"),E.className="ol-tooltip ol-tooltip-measure",$=new y["a"]({element:E,offset:[0,-15],positioning:"bottom-center"}),e.addOverlay($)}function B(e){D.clear(),M&&M.parentNode&&M.parentNode.removeChild(M),E&&E.parentNode&&E.parentNode.removeChild(E),e.removeInteraction(S),e.removeEventListener("pointermove",I),e.getViewport().removeEventListener("mouseout",F);var t=e.getOverlays().getArray();setTimeout((function(){t.forEach((function(t){e.removeOverlay(t)}))})),e.removeLayer(P("location_marker"))}var K={name:"Map",props:{},data:function(){return{mapHeight:500,map:null}},created:function(){var e=this;this.mapHeight=window.innerHeight-60,this.$on("initDraw",(function(t){z(e.map,t)})),this.$on("clean",(function(){B(e.map)}))},mounted:function(){var e=this,t=new p["a"]({url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),n=new f["a"]({layers:[new u["a"]({source:t})]}),o=new s["a"]({target:"map",layers:[new u["a"]({source:t}),H],controls:Object(d["a"])().extend([n]),view:new l["a"]({center:[5e5,6e6],zoom:7})});window.map=o,this.map=o,o.on("click",(function(t){var n=Object(m["n"])(t.coordinate,"EPSG:3857","EPSG:4326");e.$emit("map-click","".concat(n[0].toFixed(6),",").concat(n[1].toFixed(6)))}))}},Q=K,R=(n("a3b6"),n("2877")),U=Object(R["a"])(Q,i,c,!1,null,"350e4c00",null),W=U.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"location"},[n("label",[e._v("输入经纬度：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),n("button",{on:{click:e.locate}},[e._v("定位")])])},Y=[],Z=(n("ac1f"),n("1276"),n("498a"),n("4cdf")),ee=n("f403"),te=n("6cbf"),ne={name:"Location",props:{},data:function(){return{position:"",marker:null}},methods:{locate:function(){if(this.position.trim()){var e=this.position.split(","),t=window.map;t.removeLayer(P("location_marker"));var n=t.getView(),o=Object(m["d"])(e);n.setCenter(o);var a=new k["a"]({});this.marker=new Z["a"]({type:"icon",geometry:new ee["a"](o)}),a.addFeature(this.marker);var r=new _["c"]({image:new te["a"]({opacity:.75,src:"http://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png"})}),i=new g["a"]({id:"location_marker",source:a,style:r});t.addLayer(i)}else alert("请输入经纬度")}}},oe=ne,ae=(n("abcc"),Object(R["a"])(oe,X,Y,!1,null,"32c219b8",null)),re=ae.exports,ie={name:"App",components:{Map:W,Location:re},data:function(){return{mousePosition:"",showLocation:!1}},methods:{initDraw:function(e){this.$refs.map.$emit("initDraw",e)},clean:function(){this.$refs.map.$emit("clean"),this.showLocation=!1},mapClick:function(e){this.mousePosition=e}}},ce=ie,se=(n("034f"),Object(R["a"])(ce,a,r,!1,null,null,null)),le=se.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(le)}}).$mount("#app")},"85ec":function(e,t,n){},"90ae":function(e,t,n){},a3b6:function(e,t,n){"use strict";var o=n("90ae"),a=n.n(o);a.a},abcc:function(e,t,n){"use strict";var o=n("4732"),a=n.n(o);a.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.c9760869.js.map