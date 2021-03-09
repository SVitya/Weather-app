(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{81:function(t,e,a){},82:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),i=a(9),o=a.n(i),r=a(21),s=a(119),l=a(120),d=a(116),u=a(118),g=a(19),p=a(121),j=a(41),h=a.n(j),m=a(28),b=a.n(m),O=a(112),f=Object(O.a)((function(t){return{search:{maxWidth:"360px",margin:"0 auto"}}})),v=a(5),x=function(t){var e=t.setLocation,a=t.setWeather,c=t.setCoordinates,i=Object(n.useState)(""),o=Object(r.a)(i,2),s=o[0],l=o[1],d=f();return Object(v.jsx)(h.a,{value:s,onChange:function(t){l(t)},onSelect:function(t){var n,i=t.toLowerCase().split(" ").map((function(t){return t.charAt(0).toUpperCase()+t.substring(1)})).join(" ");sessionStorage.getItem(i)?(e(i),a(JSON.parse(sessionStorage.getItem(i)))):(n=t,b.a.get("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(n,"&language=en&key=").concat("AIzaSyCeSjT-4Gt_EdJl-8nGwuAv4vbJNkHPpaI")).then((function(t){return{city:t.data.results[0].address_components[0].long_name,location:Object(g.a)({},t.data.results[0].geometry.location)}}))).then((function(t){var a=t.city,n=t.location;e(a),c({latitude:n.lat,longitude:n.lng})})).catch((function(){return alert("Invalid input")})),l("")},children:function(t){var e=t.getInputProps,a=t.suggestions,n=t.getSuggestionItemProps,c=t.loading;return Object(v.jsxs)("div",{className:d.search,children:[Object(v.jsx)(p.a,Object(g.a)({fullWidth:!0},e({placeholder:"Search",className:"location-search-input"}))),Object(v.jsxs)("div",{className:"autocomplete-dropdown-container",children:[c&&Object(v.jsx)("div",{children:"Loading..."}),a.map((function(t){var e=t.active?"suggestion-item--active":"suggestion-item",a=t.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return Object(v.jsx)("div",Object(g.a)(Object(g.a)({},n(t,{className:e,style:a})),{},{children:Object(v.jsx)("span",{children:t.description})}))}))]})]})}})},y=a(117),S=a(13),N=Object(O.a)((function(t){var e;return{general:Object(S.a)({},t.breakpoints.up("sm"),{paddingRight:t.spacing(5),marginBottom:t.spacing(3)}),temp:Object(S.a)({},t.breakpoints.down("xs"),{textAlign:"center"}),details:(e={},Object(S.a)(e,t.breakpoints.down("xs"),{textAlign:"center",marginBottom:t.spacing(1)}),Object(S.a)(e,t.breakpoints.up("sm"),{paddingLeft:t.spacing(5),paddingBottom:t.spacing(2),marginTop:"auto",marginBottom:t.spacing(3)}),e)}})),w={"01d":"\u2600\ufe0f","02d":"\u26c5","03d":"\u2601","04d":"\u2601","09d":"\ud83c\udf27","10d":"\ud83c\udf26","11d":"\u26c8","13d":"\u2744","50d":"\ud83c\udf2b","01n":"\ud83c\udf11","02n":"\u26c5","03n":"\u2601","04n":"\u2601","09n":"\ud83c\udf27","10n":"\ud83c\udf26","11n":"\u26c8","13n":"\u2744","50n":"\ud83c\udf2b"},I=function(t){var e=t.currentWeather,a=N();return void 0!==e&&Object(v.jsxs)(y.a,{container:!0,className:a.container,children:[Object(v.jsx)(y.a,{item:!0,xs:12,sm:12,children:Object(v.jsx)(u.a,{align:"center",variant:"h3",component:"h2",children:"".concat(w[e.weather[0].icon]," ").concat(e.weather[0].main)})}),Object(v.jsx)(y.a,{item:!0,xs:12,sm:6,className:a.general,children:Object(v.jsxs)(u.a,{align:"right",variant:"h1",component:"h3",className:a.temp,children:[Math.round(e.temp),"\xb0"]})}),Object(v.jsxs)(y.a,{item:!0,xs:12,sm:6,className:a.details,children:[Object(v.jsxs)(u.a,{variant:"body1",children:["Feels like: ",Math.round(e.feels_like),"\xb0"]}),Object(v.jsxs)(u.a,{variant:"body1",children:["Humidity: ",e.humidity,"%"]}),Object(v.jsxs)(u.a,{variant:"body1",children:["Pressure: ",e.pressure,"hPa"]})]})]})},k=function(t){var e=t.dayWeather,a=new Date(1e3*e.dt).toLocaleDateString("en-US",{weekday:"short"});return Object(v.jsxs)("div",{className:"day",children:[Object(v.jsx)(u.a,{variant:"body2",align:"center",children:a}),Object(v.jsx)(u.a,{variant:"h5",component:"p",align:"center",children:w[e.weather[0].icon]}),Object(v.jsxs)(u.a,{variant:"body2",align:"center",children:[Math.round(e.temp.day),"\xb0 ",Math.round(e.temp.night),"\xb0"]})]})},C=(a(81),function(t){var e=t.forecast;return Object(v.jsx)("div",{className:"container",children:void 0!==e&&e.map((function(t){return Object(v.jsx)(k,{dayWeather:t},t.dt)}))})}),J=Object(O.a)((function(t){return{paper:{minHeight:"396px",marginTop:t.spacing(3),padding:t.spacing(2)},city:{margin:t.spacing(2)}}}));var L=function(){var t=Object(n.useState)(""),e=Object(r.a)(t,2),a=e[0],c=e[1],i=Object(n.useState)({}),o=Object(r.a)(i,2),g=o[0],p=o[1],j=Object(n.useState)({}),h=Object(r.a)(j,2),m=h[0],O=h[1],f=J();return Object(n.useEffect)((function(){if(localStorage.getItem("lastLocation")){var t=JSON.parse(localStorage.getItem("lastLocation")),e=t.locationName,a=t.latitude,n=t.longitude;c(e),p({latitude:a,longitude:n})}else navigator.geolocation.getCurrentPosition((function(t){var e=t.coords,a=e.latitude,n=e.longitude;(function(t,e){return b.a.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(t,",").concat(e,"&language=en&result_type=locality&key=").concat("AIzaSyCeSjT-4Gt_EdJl-8nGwuAv4vbJNkHPpaI")).then((function(t){return t.data.results[0].address_components[0].long_name}))})(a,n).then((function(t){c(t),p({latitude:a,longitude:n})})).catch((function(){return console.log("Can't get location")}))}))}),[]),Object(n.useEffect)((function(){""!==a&&localStorage.setItem("lastLocation",JSON.stringify({locationName:a,latitude:g.latitude,longitude:g.longitude}))}),[a,g]),Object(n.useEffect)((function(){if(0!==Object.keys(g).length)if(sessionStorage.getItem(a))O(JSON.parse(sessionStorage.getItem(a)));else{var t=JSON.parse(localStorage.getItem("lastLocation"));(function(t,e){return b.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t,"&lon=").concat(e,"&exclude=minutely,hourly,alerts&units=metric&appid=").concat("f4d44a9ee84f5984877a722c761480af"))})(t.latitude,t.longitude).then((function(t){O(t.data),sessionStorage.setItem(a,JSON.stringify(t.data))})).catch((function(){return alert("Can't fetch weather data")}))}}),[g]),Object(v.jsx)(s.a,{children:Object(v.jsx)(l.a,{component:"main",maxWidth:"md",children:Object(v.jsxs)(d.a,{elevation:12,className:f.paper,children:[Object(v.jsx)(x,{setLocation:c,setWeather:O,setCoordinates:p}),Object(v.jsx)(u.a,{align:"center",variant:"h5",className:f.city,children:""!==a?a:"Turn on geolocation or type the city"}),Object(v.jsx)(I,{currentWeather:m.current}),Object(v.jsx)(C,{forecast:m.daily})]})})})};o.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(L,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.d62d72d7.chunk.js.map