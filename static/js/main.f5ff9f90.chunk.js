(this["webpackJsonpapp-pogoda"]=this["webpackJsonpapp-pogoda"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(2),c=a.n(i),u=(a(13),a(3)),o=a(4),l=a(6),s=a(5),h=a(7),m=(a(14),function(e){return r.a.createElement("form",{onSubmit:e.submit},r.a.createElement("input",{type:"text",value:e.value,placeholder:"Wpisz miasto",onChange:e.change}),r.a.createElement("button",null,"Szukaj..."))}),p=(a(15),function(e){var t=e.weather,a=t.data,n=t.city,i=t.sunrise,c=t.sunset,u=t.temp,o=t.pressur,l=t.wind,s=t.err,h=!0;if(!s&&n){var m=new Date(1e3*i).toLocaleTimeString(),p=new Date(1e3*c).toLocaleTimeString();h=r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Wyniki wyszukiwania dla ",r.a.createElement("em",null,n)),r.a.createElement("h4",null,"Dane dla dnia i godziny: ",a),r.a.createElement("h4",null,"Aktualna temperatura: ",u," \xb0 C"),r.a.createElement("h4",null,"Wsch\xf3d s\u0142o\u0144ca o: ",m),r.a.createElement("h4",null,"Zach\xf3d s\u0142o\u0144ca o ",p),r.a.createElement("h4",null,"Si\u0142a wiatru: ",l," m/s"),r.a.createElement("h4",null,"Ci\u015bnienie: ",o," hPa"))}return r.a.createElement("div",{className:"result"},s?"Nie ma w bazie ".concat(n):h)}),d="14bdc19b32cf1ad7133e34e9d2e668a0",f=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",data:"",city:"",sunrise:"",sunset:"",temp:"",pressure:"",wind:"",err:!1},a.handleInputChange=function(e){a.setState({value:e.target.value})},a.handleCitySubmit=function(e){e.preventDefault();var t="http://api.openweathermap.org/data/2.5/weather?q=".concat(a.state.value,"&APPID=").concat(d,"&units=metric");fetch(t).then((function(e){if(e.ok)return e;throw Error()})).then((function(e){return e.json()})).then((function(e){var t=(new Date).toLocaleString();a.setState((function(a){return{err:!1,data:t,sunrise:e.sys.sunrise,sunset:e.sys.sunset,temp:Math.floor(e.main.temp),pressur:e.main.pressure,wind:e.wind.speed,city:a.value}}))})).catch((function(e){a.setState((function(e){return{err:!0,city:e.value}}))}))},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,{change:this.handleInputChange,value:this.state.value,submit:this.handleCitySubmit}),r.a.createElement(p,{weather:this.state}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.f5ff9f90.chunk.js.map