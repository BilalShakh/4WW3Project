(this.webpackJsonpproject4ww3=this.webpackJsonpproject4ww3||[]).push([[0],{144:function(e,t,a){},145:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),r=a(46),n=a.n(r),c=(a(144),a(57)),o=a(4),l=a(26),d=a(20),j=a(8),h=a(9),b=a(11),u=a(10),x=a(218),g=a(196),p=a(197),O=a(221),m=a(199),f=a(200),w=a(201),v=a(132),S=a(217),y=a(204),C=a(202),k=a(205),I=(a(145),Object(i.createContext)("")),L=a(50),R=a.n(L),W=a(1);var z=function(){var e=Object(i.useContext)(I),t=e.authState,a=e.setAuthState,s=Object(x.a)();return Object(i.useEffect)((function(){if(localStorage.getItem("accessToken")){var e={accessToken:localStorage.getItem("accessToken")};R.a.get("https://www.compsci4ww3bilalyichun.com:8080/auth/verify",{headers:e}).then((function(e,t){e.data.isValid?a({username:localStorage.getItem("username"),id:localStorage.getItem("id"),status:!0}):(localStorage.removeItem("accessToken"),localStorage.removeItem("username"),localStorage.removeItem("id"),s({title:"Log in has timed out, please sign in again.",status:"warning",isClosable:!0}))}))}}),[]),Object(W.jsx)("div",{class:"background-header",children:Object(W.jsxs)(g.a,{children:[Object(W.jsx)(p.a,{py:"7",px:"5",display:{base:"none",md:"flex"},children:Object(W.jsxs)(O.a,{spacing:"50px",children:[Object(W.jsx)(m.a,{size:"sm",color:"white",_hover:{textDecoration:"underline",cursor:"Pointer"},children:Object(W.jsx)(l.b,{to:"/",children:"Home"})}),Object(W.jsx)(m.a,{size:"sm",color:"white",_hover:{textDecoration:"underline",cursor:"Pointer"},children:Object(W.jsx)(l.b,{to:"/submission",children:"Add New Spot"})})]})}),Object(W.jsx)(f.a,{display:{base:"none",md:"block"}}),Object(W.jsx)(p.a,{p:"3",children:Object(W.jsx)(w.a,{fontSize:{base:"2xl",md:"4xl"},color:"white",children:"FISH SPOT"})}),Object(W.jsx)(f.a,{}),Object(W.jsxs)(p.a,{p:"5",children:[Object(W.jsxs)(O.a,{spacing:"50px",display:{base:"none",md:"flex"},children:[Object(W.jsx)(l.b,{to:"/search",children:Object(W.jsx)(C.a,{w:6,h:6,color:"white",_hover:{cursor:"Pointer"}})}),t.status?Object(W.jsxs)(m.a,{size:"sm",color:"white",children:["Signed in as: ",t.username]}):Object(W.jsx)(m.a,{size:"sm",color:"white",_hover:{textDecoration:"underline",cursor:"Pointer"},children:Object(W.jsx)(l.b,{to:"/signin",children:"Sign In"})}),t.status?Object(W.jsx)(v.a,{colorScheme:"purple",borderRadius:"25px",onClick:function(){a({username:"",id:0,status:!1}),localStorage.removeItem("accessToken"),localStorage.removeItem("username"),localStorage.removeItem("id"),s({title:"Successfully signed out of your account!",status:"success",isClosable:!0})},children:"Sign out"}):Object(W.jsx)(v.a,{colorScheme:"purple",borderRadius:"25px",children:Object(W.jsx)(l.b,{to:"/signup",children:"Sign up"})})]}),Object(W.jsxs)(S.a,{children:[Object(W.jsx)(S.b,{as:y.a,"aria-label":"Options",icon:Object(W.jsx)(k.a,{}),variant:"outline",display:{base:"inline-flex",md:"none"},bg:"white"}),Object(W.jsxs)(S.d,{children:[Object(W.jsx)(l.b,{to:"/",children:Object(W.jsx)(S.c,{children:"Home"})}),Object(W.jsx)(l.b,{to:"/submission",children:Object(W.jsx)(S.c,{children:"Add New Spot"})}),Object(W.jsx)(l.b,{to:"/signin",children:Object(W.jsx)(S.c,{children:"Sign in"})}),Object(W.jsx)(l.b,{to:"/signup",children:Object(W.jsx)(S.c,{children:"Sign up"})})]})]})]})]})})};a(170);var P=function(){return Object(W.jsx)("div",{class:"background-footer",children:Object(W.jsxs)(O.c,{divider:Object(W.jsx)(O.b,{borderColor:"gray.500",width:"80%",alignSelf:"center"}),spacing:"0",children:[Object(W.jsx)(p.a,{}),Object(W.jsx)(p.a,{width:"75%",mt:"15px",children:Object(W.jsxs)(g.a,{children:[Object(W.jsx)(p.a,{children:Object(W.jsxs)(O.c,{spacing:"0",alignItems:"baseline",children:[Object(W.jsx)(w.a,{fontSize:"2xl",color:"white",children:"FISH SPOT"}),Object(W.jsx)(w.a,{fontSize:"l",color:"white",width:"200px",children:"Premium Service for finding your fishing spot"}),Object(W.jsx)(w.a,{fontSize:"sm",color:"white",width:"200px",children:"Contact Number: 123-456-7891"})]})}),Object(W.jsx)(f.a,{}),Object(W.jsx)(p.a,{display:{base:"none",md:"flex"},children:Object(W.jsxs)(O.c,{spacing:"0",alignItems:"baseline",children:[Object(W.jsx)(w.a,{fontSize:"xl",color:"white",children:"Quick Navigation"}),Object(W.jsx)(w.a,{fontSize:"sm",color:"white",width:"160px",children:"Home"}),Object(W.jsx)(w.a,{fontSize:"sm",color:"white",width:"160px",children:"Add new spot"}),Object(W.jsx)(w.a,{fontSize:"sm",color:"white",width:"160px",children:"Search"})]})})]})})]})})},A=a.p+"static/media/fishing_1.a08d269c.jpg",E=a.p+"static/media/fishing_2.bf89dfc7.jpeg",N=a.p+"static/media/fishing_3.84d6fe77.jpg",T=a.p+"static/media/fishing_4.d6bc01be.jpg",F=a.p+"static/media/fishing_5.6da8ec61.jpg",D=a(207),q=a(206),M=a(208),U=a(209);var H=function(e){return Object(W.jsx)("div",{children:Object(W.jsxs)(p.a,{maxW:"300px",h:"492px",borderWidth:"0px",borderRadius:"lg",overflow:"hidden",backgroundColor:e.color,children:[Object(W.jsx)(q.a,{w:"300px",ratio:.87,children:Object(W.jsx)(D.a,{src:e.Image,alt:"IMAGE NOT FOUND"})}),Object(W.jsxs)(p.a,{p:"6",children:[Object(W.jsxs)(p.a,{display:"flex",alignItems:"baseline",children:[Object(W.jsx)(M.a,{borderRadius:"full",px:"2",colorScheme:"gray",children:e.badge}),Object(W.jsx)(p.a,{color:"gray.700",fontWeight:"semibold",letterSpacing:"wide",fontSize:"xs",textTransform:"uppercase",ml:"2",children:e.featureLine})]}),Object(W.jsx)(p.a,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",isTruncated:!0,children:e.title}),Object(W.jsx)(p.a,{isTruncated:!0,children:e.description}),Object(W.jsxs)(p.a,{display:"flex",mt:"2",alignItems:"center",children:[Array(5).fill("").map((function(t,a){return Object(W.jsx)(U.a,{color:a<e.rating?"gray.500":"gray.300"},a)})),Object(W.jsxs)(p.a,{as:"span",ml:"2",color:"gray.600",fontSize:"sm",children:[e.reviewCount," reviews"]})]})]})]})})},_=(a(171),function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(W.jsx)("div",{class:"home-background",children:Object(W.jsxs)(O.c,{spacing:"85px",children:[Object(W.jsx)(z,{}),Object(W.jsxs)(O.a,{spacing:"20px",flexWrap:"wrap",children:[Object(W.jsx)(H,{color:"pink",Image:A,badge:"trending",featureLine:"Best fishing spot",title:"Montana Mountain",description:"Trouts roam free in the rivers",rating:4,reviewCount:40}),Object(W.jsx)(H,{color:"teal.100",Image:E,badge:"trending",featureLine:"Camping fishing spot",title:"Kawartha Lakes",description:"Bass and trout that exist in the deep",rating:2,reviewCount:30}),Object(W.jsx)(H,{color:"orange.200",Image:N,badge:"trending",featureLine:"Seasonal fishing spot",title:"Port Hope",description:"Salmon run seasonally and in great numbers",rating:1,reviewCount:10}),Object(W.jsx)(H,{color:"purple.200",Image:T,badge:"trending",featureLine:"Pike fishing spot",title:"Rainy River",description:"Predatory pike's roam the river bed looking for fish to feed upon.",rating:5,reviewCount:70})]}),Object(W.jsxs)(O.a,{children:[Object(W.jsx)(p.a,{maxH:"400px",borderWidth:"0px",borderRadius:"lg",overflow:"hidden",children:Object(W.jsx)(D.a,{src:F,alt:"IMAGE NOT FOUND"})}),Object(W.jsx)(f.a,{}),Object(W.jsxs)(p.a,{p:"2",width:"400px",children:[Object(W.jsx)(w.a,{fontSize:"3xl",color:"white",fontWeight:"bold",children:"Ice fishing at Devils Lake"}),Object(W.jsx)(f.a,{}),Object(W.jsx)(w.a,{fontSize:"l",color:"white",noOfLines:[1,2,3,4,5,6,7,8,9,11,12],mt:"20px",children:"The state of North Dakota sure knows how to sell this lake. Touting it as \u201ca fishing destination unlike anywhere else,\u201d the tourism board brags that its fish are large and healthy, its winter season is long, and the \u201chuge\u201d size of the lake means you can avoid tangling your lines with any other overeager anglers. Grab a 3 or 10-day license to search for jumbo perch, walleye and big pike."}),Object(W.jsx)(w.a,{fontSize:"s",color:"white",mt:"20px",children:"North Dakota, USA"})]})]}),Object(W.jsx)(P,{})]})})}}]),a}(i.Component)),$=a(70),B=a(210),G=a(211);a(172);function K(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],r=Object(i.useState)(""),n=Object(o.a)(r,2),c=n[0],l=n[1],j=Object(i.useState)(""),h=Object(o.a)(j,2),b=h[0],u=h[1],g=Object(i.useState)(""),m=Object(o.a)(g,2),S=m[0],y=m[1],C=Object(i.useState)(""),k=Object(o.a)(C,2),L=k[0],A=k[1],E=Object(i.useState)(""),N=Object(o.a)(E,2),T=N[0],F=N[1],D=Object(d.g)(),q=Object(i.useContext)(I).setAuthState,M=Object(x.a)();function U(e){var t=e.target.id,a=e.target.value;switch(t){case"FirstName":s(a);break;case"LastName":l(a);break;case"Email":u(a);break;case"Username":y(a);break;case"PasswordI":A(a);break;default:F(a)}}var H=function(){var e={Email:b,Password:T,Name:a+" "+c,Username:S};R.a.post("https://www.compsci4ww3bilalyichun.com:8080/auth/signup",e).then((function(e,t){e.data.status?(M({title:"Account successfully created",status:"success",isClosable:!0}),function(){var e={Email:b,Password:T};R.a.post("https://www.compsci4ww3bilalyichun.com:8080/auth/login",e).then((function(e,t){e.data.valid?(localStorage.setItem("accessToken",e.data.token),localStorage.setItem("username",e.data.username),localStorage.setItem("id",e.data.id),q({username:e.data.username,id:e.data.id,status:!0}),M({title:"Account successfully logged in!",status:"success",isClosable:!0})):M({title:"Invalid Email or Password Entered",status:"error",isClosable:!0})}))}(),D.push("/")):M({title:e.data.reason,status:"error",isClosable:!0})}))};return Object(W.jsx)("div",{class:"registration-background",children:Object(W.jsxs)(O.c,{spacing:"85px",children:[Object(W.jsx)(z,{}),Object(W.jsx)(f.a,{}),Object(W.jsx)(p.a,{p:"6",maxW:"850px",maxH:"550px",borderWidth:"0px",borderRadius:"lg",bg:"#444242",children:Object(W.jsxs)(O.c,{children:[Object(W.jsx)(w.a,{alignSelf:"flex-start",fontSize:"3xl",color:"white",children:"Sign up"}),Object(W.jsx)("form",{children:Object(W.jsxs)(O.c,{spacing:"15px",children:[Object(W.jsxs)(O.a,{spacing:"15px",children:[Object(W.jsxs)($.a,{w:"320px",id:"FirstNameFC",isRequired:!0,children:[Object(W.jsx)(B.a,{color:"white",children:"First name"}),Object(W.jsx)(G.a,{id:"FirstName",bg:"gray.600",borderWidth:"0px",placeholder:"First name",textColor:"white",value:a,onChange:U})]}),Object(W.jsxs)($.a,{w:"320px",id:"LastNameFC",isRequired:!0,children:[Object(W.jsx)(B.a,{color:"white",children:"Last name"}),Object(W.jsx)(G.a,{id:"LastName",bg:"gray.600",borderWidth:"0px",placeholder:"Last name",textColor:"white",value:c,onChange:U})]})]}),Object(W.jsxs)($.a,{w:"655px",id:"EmailFC",isRequired:!0,children:[Object(W.jsx)(B.a,{color:"white",children:"Email"}),Object(W.jsx)(G.a,{id:"Email",type:"email",bg:"gray.600",borderWidth:"0px",placeholder:"Email",textColor:"white",value:b,onChange:U})]}),Object(W.jsxs)($.a,{w:"655px",id:"UsernameFC",isRequired:!0,children:[Object(W.jsx)(B.a,{color:"white",children:"Username"}),Object(W.jsx)(G.a,{id:"Username",bg:"gray.600",borderWidth:"0px",placeholder:"Username",textColor:"white",value:S,onChange:U})]}),Object(W.jsxs)(O.a,{spacing:"15px",children:[Object(W.jsxs)($.a,{w:"320px",id:"passwordInitial",isRequired:!0,children:[Object(W.jsx)(B.a,{color:"white",children:"Password"}),Object(W.jsx)(G.a,{id:"PasswordI",type:"password",bg:"gray.600",borderWidth:"0px",placeholder:"Password",textColor:"white",value:L,onChange:U})]}),Object(W.jsxs)($.a,{w:"320px",id:"passwordConfirm",isRequired:!0,children:[Object(W.jsx)(B.a,{color:"white"}),Object(W.jsx)(G.a,{id:"PasswordC",type:"password",bg:"gray.600",borderWidth:"0px",placeholder:"Confrim Password",textColor:"white",value:T,onChange:U})]})]}),Object(W.jsx)(v.a,{colorScheme:"purple",alignSelf:"flex-start",onClick:function(e){var t="";/^[a-zA-Z]+$/.test(a)||(t+="First name is invalid, please include only letters in your Firstname."),/^[a-zA-Z]+$/.test(c)||(t+="Last name is invalid, please include only letters in your lastname."),/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(b)||(t+="Email is invalid, please enter a valid email. "),L===T&&/^[a-zA-Z0-9!@#$%^&*]{5,20}$/.test(T)||(t+="Password is invalid, please enter a password with 5 to 20 characters consisting of only letter or number or these special character !@#$%^&*. "),t.length>0?M({title:"Invalid Details entered",description:t,status:"error",isClosable:!0}):H()},children:"Submit"})]})})]})}),Object(W.jsx)(f.a,{}),Object(W.jsx)(P,{})]})})}var V=function(e){return Object(W.jsx)("div",{children:Object(W.jsxs)(p.a,{maxW:"300px",h:"492px",borderWidth:"0px",borderRadius:"lg",overflow:"hidden",backgroundColor:e.color,children:[Object(W.jsx)(q.a,{w:"300px",ratio:.87,children:Object(W.jsx)(D.a,{src:e.Image,alt:"IMAGE NOT FOUND"})}),Object(W.jsxs)(p.a,{p:"6",children:[Object(W.jsx)(p.a,{display:"flex",alignItems:"baseline",children:Object(W.jsx)(p.a,{color:"gray.700",fontWeight:"semibold",letterSpacing:"wide",fontSize:"xs",textTransform:"uppercase",ml:"2",children:e.featureLine})}),Object(W.jsx)(p.a,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",isTruncated:!0,children:e.title}),Object(W.jsx)(p.a,{isTruncated:!0,children:e.description}),Object(W.jsxs)(p.a,{display:"flex",mt:"2",alignItems:"center",children:[Array(5).fill("").map((function(t,a){return Object(W.jsx)(U.a,{color:a<e.rating?"gray.500":"gray.300"},a)})),Object(W.jsxs)(p.a,{as:"span",ml:"2",color:"gray.600",fontSize:"sm",children:[e.reviewCount," reviews"]})]})]})]})})},Z=a(71);var J={width:"100vw",height:"100vh"};function Y(e){var t=e.locations,a=e.zoomLevel,i=s.a.useState(null),r=Object(o.a)(i,2),n=r[0],c=r[1],l=Object(Z.d)({googleMapsApiKey:"AIzaSyDsHPRgT-culwhK_LMVrOi9zbrRdGijXjQ"}),d=l.isLoaded;if(l.loadError)return"Error loading maps";if(!d)return"Loading Maps";var j=function(e){var t=[];return Object.keys(e).forEach((function(a){t.push(e[a])})),t}(t);return Object(W.jsx)("div",{children:Object(W.jsxs)(Z.a,{mapContainerStyle:J,zoom:a,center:{lat:t.first.lat,lng:t.first.lng},children:[j.map((function(e){return Object(W.jsx)(Z.c,{position:{lat:e.lat,lng:e.lng},onClick:function(){c(null),c(e)}})})),n?Object(W.jsx)(Z.b,{position:{lat:n.lat+2e-4,lng:n.lng},onCloseClick:function(){c(null)},children:Object(W.jsx)("h2",{children:n.text})}):null]})})}a(174);var Q={first:{text:"Credit River, Mississauga, ON",lat:43.5557682874319,lng:-79.60028572660218},1:{text:"Cooksville Creek",lat:43.56416169111711,lng:-79.56491222843655},2:{text:"Mimico Creek",lat:43.623089818162995,lng:-79.48015828092811}},X=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(W.jsx)("div",{class:"result-background",children:Object(W.jsxs)(O.c,{spacing:"85px",children:[Object(W.jsx)(z,{}),Object(W.jsxs)(O.c,{spacing:"40px",children:[Object(W.jsx)(p.a,{borderWidth:"0px",borderRadius:"lg",overflow:"hidden",width:"65vw",height:"60vh",children:Object(W.jsx)(Y,{locations:Q,zoomLevel:12})}),Object(W.jsxs)(O.a,{spacing:"20px",flexWrap:"wrap",children:[Object(W.jsx)(V,{color:"pink",Image:A,featureLine:"Best fishing spot",title:"Montana Mountain",description:"Trouts roam free in the rivers",rating:4,reviewCount:40}),Object(W.jsx)(V,{color:"teal.100",Image:E,featureLine:"Camping fishing spot",title:"Kawartha Lakes",description:"Bass and trout that exist in the deep",rating:2,reviewCount:30}),Object(W.jsx)(V,{color:"orange.200",Image:N,featureLine:"Seasonal fishing spot",title:"Port Hope",description:"Salmon run seasonally and in great numbers",rating:1,reviewCount:10}),Object(W.jsx)(V,{color:"purple.200",Image:T,featureLine:"Pike fishing spot",title:"Rainy River",description:"Predatory pike's roam the river bed looking for fish to feed upon.",rating:5,reviewCount:70})]}),Object(W.jsxs)(O.a,{spacing:"20px",flexWrap:"wrap",children:[Object(W.jsx)(V,{color:"pink",Image:A,featureLine:"Best fishing spot",title:"Montana Mountain",description:"Trouts roam free in the rivers",rating:4,reviewCount:40}),Object(W.jsx)(V,{color:"teal.100",Image:E,featureLine:"Camping fishing spot",title:"Kawartha Lakes",description:"Bass and trout that exist in the deep",rating:2,reviewCount:30}),Object(W.jsx)(V,{color:"orange.200",Image:N,featureLine:"Seasonal fishing spot",title:"Port Hope",description:"Salmon run seasonally and in great numbers",rating:1,reviewCount:10}),Object(W.jsx)(V,{color:"purple.200",Image:T,featureLine:"Pike fishing spot",title:"Rainy River",description:"Predatory pike's roam the river bed looking for fish to feed upon.",rating:5,reviewCount:70})]})]}),Object(W.jsx)(P,{})]})})}}]),a}(i.Component),ee=a(212);var te=function(e){return Object(W.jsxs)(O.a,{justifyItems:"baseline",alignSelf:"baseline",w:"100%",children:[Object(W.jsx)(ee.a,{name:e.name}),Object(W.jsxs)(O.c,{alignItems:"baseline",spacing:"1px",children:[Object(W.jsxs)(g.a,{w:"25%",children:[Object(W.jsx)(w.a,{fontSize:"130%",color:"white",children:e.name}),Object(W.jsx)(f.a,{}),Array(5).fill("").map((function(t,a){return Object(W.jsx)(U.a,{color:a<e.rating?"gray.300":"gray.500",alignSelf:"center"},a)}))]}),Object(W.jsx)(w.a,{fontSize:"100%",fontWeight:"thin",noOfLines:[1,2,3],color:"white",children:e.description})]})]})},ae=(a(175),a.p+"static/media/fishing_6.643c946f.jpg"),ie={first:{text:"Credit River, Mississauga, ON",lat:43.5557682874319,lng:-79.60028572660218}},se=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(W.jsx)("div",{class:"object-background",children:Object(W.jsxs)(O.c,{spacing:"80px",children:[Object(W.jsx)(z,{}),Object(W.jsxs)(O.a,{maxW:"50%",children:[Object(W.jsx)(p.a,{borderWidth:"0px",borderRadius:"lg",overflow:"hidden",children:Object(W.jsx)(D.a,{src:ae,alt:"IMAGE NOT FOUND"})}),Object(W.jsx)(f.a,{}),Object(W.jsxs)(O.c,{p:"2",alignSelf:"flex-start",maxW:"40%",children:[Object(W.jsx)(w.a,{fontSize:"180%",color:"white",fontWeight:"bold",alignSelf:"flex-start",children:"Credit River"}),Object(W.jsx)(w.a,{fontSize:"100%",color:"white",noOfLines:[1,2,3,4,11,12],mt:"20px",children:"This is flat and slow water like fishing in a lake. The fishing can be good in the spring for steelhead and in September for huge salmon. Anglers casting lures can do very well here if they hit the runs of salmon just as they start. A favorite lure for this area is spoons like the Little Cleos which can be cast far out into the river and lake. Large crankbaits and inline spinners can be very good too. This is flat and slow water like fishing in a lake. The fishing can be good in the spring for steelhead and in September for huge salmon. Anglers casting lures can do very well here if they hit the runs of salmon just as they start. A favorite lure for this area is spoons like the Little Cleos which can be cast far out into the river and lake. Large crankbaits and inline spinners can be very good too."})]})]}),Object(W.jsxs)(O.c,{children:[Object(W.jsx)(w.a,{fontSize:"130%",color:"white",fontWeight:"thin",alignSelf:"flex-start",children:"Mississauga, Ontario"}),Object(W.jsx)(p.a,{borderWidth:"0px",borderRadius:"lg",overflow:"hidden",width:"85vw",children:Object(W.jsx)(Y,{locations:ie,zoomLevel:17})})]}),Object(W.jsxs)(O.c,{divider:Object(W.jsx)(O.b,{borderColor:"gray.500",width:"80%",alignSelf:"center"}),w:"80%",children:[Object(W.jsxs)(g.a,{w:"80%",children:[Object(W.jsx)(p.a,{children:Object(W.jsx)(w.a,{fontSize:"180%",color:"white",children:"Reviews"})}),Object(W.jsx)(f.a,{}),Object(W.jsx)(p.a,{mt:"3",children:Object(W.jsx)(w.a,{fontSize:"125%",color:"white",fontWeight:"thin",as:"u",children:"Write a new Review"})})]}),Object(W.jsxs)(O.c,{w:"80%",divider:Object(W.jsx)(O.b,{borderColor:"gray.500",width:"80%",alignSelf:"baseline"}),children:[Object(W.jsx)(te,{name:"Apple John",rating:3,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat ut facilisis rutrum donec tristique mauris est ac nunc. Eget nec, lorem mi libero accumsan"}),Object(W.jsx)(te,{name:"Kayle Sand",rating:4,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat ut facilisis rutrum donec tristique mauris est ac nunc. Eget nec, lorem mi libero accumsan"}),Object(W.jsx)(te,{name:"Bobby John",rating:1,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. \r Erat ut facilisis rutrum donec tristique mauris \r est ac nunc. Eget nec, lorem mi libero accumsan \r est ac nunc. Eget nec, lorem mi libero accumsan \r est ac nunc. Eget nec, lorem mi libero accumsan \r est ac nunc. Eget nec, lorem mi libero accumsan \r est ac nunc. Eget nec, lorem mi libero accumsan \r est ac nunc. Eget nec, lorem mi libero accumsan"})]})]}),Object(W.jsx)(P,{})]})})}}]),a}(i.Component),re=a(5),ne=a(213),ce=a(90),oe=a(222),le=(a(176),a(214)),de=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(j.a)(this,a);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={searchName:!0,searchRating:!1,SearchText:"",SearchRatingVal:"All",longitude:null,latitude:null},e.handleRadioClick=function(t){e.state.searchName?(e.setState({searchName:!1}),e.setState({searchRating:!0})):(e.setState({searchRating:!1}),e.setState({searchName:!0}))},e.generalChangeHandler=function(t){var a=t.target.id,i=t.target.value;e.setState(Object(re.a)({},a,i))},e.getLocation=function(){navigator.geolocation?(console.log("Locating..."),navigator.geolocation.getCurrentPosition((function(t){e.setState({longitude:t.coords.latitude,latitude:t.coords.longitude})}),(function(){console.log("Unable to retrieve your location")}))):console.log("Geolocation is not supported by your browser")},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(W.jsx)("div",{class:"search-background",children:Object(W.jsxs)(O.c,{spacing:"85px",children:[Object(W.jsx)(z,{}),Object(W.jsx)(f.a,{}),Object(W.jsx)(p.a,{p:"6",w:"850px",borderWidth:"0px",borderRadius:"lg",bg:"#444242",children:Object(W.jsxs)(O.c,{spacing:"50px",alignItems:"flex-start",children:[Object(W.jsx)(w.a,{alignSelf:"flex-start",fontSize:"3xl",color:"white",fontWeight:"thin",children:"Search"}),Object(W.jsx)("form",{children:Object(W.jsxs)(O.c,{spacing:"50px",alignSelf:"flex-start",children:[Object(W.jsxs)($.a,{w:"100%",id:"search-term",isRequired:!0,isDisabled:!this.state.searchName,children:[Object(W.jsx)(B.a,{color:"white",children:"Search Term"}),Object(W.jsx)(G.a,{bg:"gray.600",borderWidth:"0px",placeholder:"Search Term",textColor:"white",id:"SearchText",value:this.state.SearchText,onChange:this.generalChangeHandler})]}),Object(W.jsxs)($.a,{w:"100%",id:"search-cat",isRequired:!0,isDisabled:!this.state.searchRating,children:[Object(W.jsx)(B.a,{color:"white",children:"Rating"}),Object(W.jsxs)(ne.a,{bg:"gray.600",color:"white",borderWidth:"0px",id:"SearchRatingVal",value:this.state.SearchRatingVal,onChange:this.generalChangeHandler,children:[Object(W.jsx)("option",{class:"option-select",children:"All"}),Object(W.jsx)("option",{class:"option-select",children:"1 Star"}),Object(W.jsx)("option",{class:"option-select",children:"2 Star"}),Object(W.jsx)("option",{class:"option-select",children:"3 Star"}),Object(W.jsx)("option",{class:"option-select",children:"4 Star"}),Object(W.jsx)("option",{class:"option-select",children:"5 Star"})]})]}),Object(W.jsxs)(O.a,{alignSelf:"flex-start",children:[Object(W.jsx)(v.a,{colorScheme:"pink",alignSelf:"flex-start",onClick:this.getLocation,children:"Search by location"}),Object(W.jsxs)(w.a,{color:"white",children:["Longitude: ",this.state.longitude?this.state.longitude:"Not Found",",  Latitude: ",this.state.latitude?this.state.longitude:"Not Found"]})]}),Object(W.jsx)(ce.a,{defaultValue:"name",alignSelf:"flex-start",color:"white",children:Object(W.jsxs)(O.c,{children:[Object(W.jsx)(oe.a,{value:"name",onChange:this.handleRadioClick,isChecked:this.state.searchName,children:"Search by Name"}),Object(W.jsx)(oe.a,{value:"rating",onChange:this.handleRadioClick,isChecked:this.state.searchRating,children:"Search by Rating"})]})}),Object(W.jsx)(v.a,{colorScheme:"purple",type:"submit",alignSelf:"flex-start",children:Object(W.jsx)(le.a,{href:"/Results",children:"Submit"})})]})})]})}),Object(W.jsx)(f.a,{}),Object(W.jsx)(P,{})]})})}}]),a}(s.a.Component),je=de,he=a(215);a(177);function be(){var e=Object(i.useContext)(I),t=e.authState,a=e.setAuthState,s=Object(i.useState)(ae),r=Object(o.a)(s,2),n=r[0],c=r[1],l=Object(i.useState)(ae),j=Object(o.a)(l,2),h=j[0],b=j[1],u=Object(i.useState)(""),g=Object(o.a)(u,2),m=g[0],S=g[1],y=Object(i.useState)(""),C=Object(o.a)(y,2),k=C[0],L=C[1],A=Object(i.useState)(""),E=Object(o.a)(A,2),N=E[0],T=E[1],F=Object(i.useState)(""),q=Object(o.a)(F,2),M=q[0],U=q[1],H=Object(i.useState)(""),_=Object(o.a)(H,2),K=_[0],V=_[1],Z=Object(i.useState)(""),J=Object(o.a)(Z,2),Y=J[0],Q=J[1],X=Object(i.useState)(""),ee=Object(o.a)(X,2),te=ee[0],ie=ee[1],se=Object(d.g)(),re=Object(x.a)();Object(i.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude;ie(t);var a=e.coords.longitude;Q(a)}),(function(e){return alert(e.message)}),{enableHighAccuracy:!0,timeout:2e4,maximumAge:1e3})}),[]);var ne=function(){var e=new FormData;e.append("Image",h),e.append("SpotName",k),e.append("Feature",m),e.append("Description",N),e.append("LocLongitude",M),e.append("LocLatitude",K),e.append("UserLongitude",Y),e.append("UserLatitude",te),e.append("UserID",t.id);var i={accessToken:localStorage.getItem("accessToken"),"Content-Type":"multipart/form-data"};R.a.post("https://www.compsci4ww3bilalyichun.com:8080/spot/create",e,{headers:i}).then((function(e,t){e.data.valid?(re({title:"Your spot has been successfully posted!",status:"success",isClosable:!0}),se.push("/")):(re({title:"Your session has expired, please login again",status:"error",isClosable:!0}),a({username:"",id:0,status:!1}),localStorage.removeItem("accessToken"),localStorage.removeItem("username"),localStorage.removeItem("id"))}))};function ce(e){var t=e.target.id,a=e.target.value;switch(t){case"Image":c(URL.createObjectURL(e.target.files[0])),b(e.target.files[0]),console.log(n);break;case"Feature":S(a);break;case"Name":L(a);break;case"Description":T(a);break;case"LocLongitude":U(a);break;default:V(a)}}return Object(W.jsx)("div",{class:"submission-background",children:Object(W.jsxs)(O.c,{spacing:"85px",children:[Object(W.jsx)(z,{}),Object(W.jsx)(f.a,{}),Object(W.jsx)(p.a,{p:"6",maxW:"850px",borderWidth:"0px",borderRadius:"lg",bg:"#444242",children:Object(W.jsxs)(O.c,{children:[Object(W.jsx)(w.a,{alignSelf:"flex-start",fontSize:"3xl",color:"white",fontWeight:"thin",children:"Add a New Fishing Spot"}),Object(W.jsxs)("form",{children:[Object(W.jsxs)(O.a,{spacing:"20px",children:[Object(W.jsx)(p.a,{w:"58%",borderWidth:"0px",borderRadius:"lg",overflow:"hidden",alignSelf:"center",children:Object(W.jsx)(D.a,{src:n,alt:"IMAGE NOT FOUND"})}),Object(W.jsxs)(O.c,{spacing:"15px",children:[Object(W.jsxs)($.a,{w:"100%",id:"spot-name",isRequired:!0,children:[Object(W.jsx)(B.a,{color:"white",children:"Fishing Spot Name"}),Object(W.jsx)(G.a,{type:"text",bg:"gray.600",borderWidth:"0px",placeholder:"Name",textColor:"white",id:"Name",value:k,onChange:ce})]}),Object(W.jsxs)($.a,{w:"100%",id:"spot-name",isRequired:!0,children:[Object(W.jsx)(B.a,{color:"white",children:"Main Feature"}),Object(W.jsx)(G.a,{type:"text",bg:"gray.600",borderWidth:"0px",placeholder:"One Word Descriptor",textColor:"white",id:"Feature",value:m,onChange:ce})]}),Object(W.jsxs)($.a,{w:"100%",id:"description",isRequired:!0,children:[Object(W.jsx)(B.a,{color:"white",children:"Description"}),Object(W.jsx)(he.a,{bg:"gray.600",borderWidth:"0px",placeholder:"Description",textColor:"white",id:"Description",value:N,onChange:ce})]}),Object(W.jsxs)(O.a,{spacing:"15px",children:[Object(W.jsxs)($.a,{w:"50%",id:"location-longitude",isRequired:!0,children:[Object(W.jsx)(B.a,{color:"white",children:"Location"}),Object(W.jsx)(G.a,{type:"number",required:!0,bg:"gray.600",borderWidth:"0px",placeholder:"Longitude",textColor:"white",id:"LocLongitude",value:M,onChange:ce})]}),Object(W.jsxs)($.a,{w:"50%",id:"location-latitude",isRequired:!0,children:[Object(W.jsx)(B.a,{color:"white"}),Object(W.jsx)(G.a,{type:"number",required:!0,bg:"gray.600",borderWidth:"0px",placeholder:"Latitude",textColor:"white",id:"LocLatitude",value:K,onChange:ce})]})]}),Object(W.jsx)(w.a,{color:"white",children:" Your Location:"}),Object(W.jsxs)(w.a,{color:"white",children:[" Latitude: ",te,"  Longitude: ",Y]}),Object(W.jsxs)($.a,{w:"100%",id:"spot-image",alignSelf:"baseline",isRequired:!0,children:[Object(W.jsx)(B.a,{color:"white",children:"Image"}),Object(W.jsx)(G.a,{id:"Image",type:"file",bg:"#444242",borderWidth:"0px",color:"white",onChange:ce}),Object(W.jsx)($.b,{children:"Please upload your Spot's Image"})]})]})]}),Object(W.jsx)(v.a,{colorScheme:"purple",alignSelf:"flex-start",onClick:function(e){var t="";n===ae&&(t+="Please upload a picture of your spot. "),""===k&&(t+="Spot name is required. "),""===N&&(t+="A description is required for the spot. "),""!==K&&""!==M||(t+="You need to enter the location with both longitude and latitude of the location. "),""!==te&&""!==Y||(t+="Please give your location permission. "),localStorage.getItem("accessToken")||(t+="Please login or create an account."),N.length>=5e3&&(t+="Please write a description that is under 5000 characters."),t.length>0?re({title:"Invalid Spot Details entered",description:t,status:"error",isClosable:!0}):ne()},children:"Submit"})]})]})}),Object(W.jsx)(f.a,{}),Object(W.jsx)(P,{})]})})}a(178);function ue(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],r=Object(i.useState)(""),n=Object(o.a)(r,2),c=n[0],l=n[1],j=Object(d.g)(),h=Object(i.useContext)(I).setAuthState,b=Object(x.a)(),u=function(e){var t=e.target.id,a=e.target.value;if("Email"===t)s(a);else l(a)};return Object(W.jsx)("div",{class:"signin-background",children:Object(W.jsxs)(O.c,{spacing:"85px",children:[Object(W.jsx)(z,{}),Object(W.jsx)(f.a,{}),Object(W.jsx)(p.a,{p:"6",w:"850px",borderWidth:"0px",borderRadius:"lg",bg:"#444242",children:Object(W.jsxs)(O.c,{spacing:"50px",alignItems:"flex-start",children:[Object(W.jsx)(w.a,{alignSelf:"flex-start",fontSize:"3xl",color:"white",fontWeight:"thin",children:"Sign In"}),Object(W.jsx)("form",{children:Object(W.jsxs)(O.c,{spacing:"70px",alignSelf:"flex-start",children:[Object(W.jsxs)($.a,{w:"100%",isRequired:!0,children:[Object(W.jsx)(B.a,{color:"white",children:"Email"}),Object(W.jsx)(G.a,{bg:"gray.600",borderWidth:"0px",placeholder:"Email",type:"email",textColor:"white",id:"Email",value:a,onChange:u})]}),Object(W.jsxs)($.a,{w:"100%",isRequired:!0,children:[Object(W.jsx)(B.a,{color:"white",children:"Password"}),Object(W.jsx)(G.a,{bg:"gray.600",borderWidth:"0px",placeholder:"Password",type:"password",textColor:"white",id:"Password",value:c,onChange:u})]}),Object(W.jsx)(v.a,{colorScheme:"purple",alignSelf:"flex-start",onClick:function(e){var t="";/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(a)||(t+="Email is invalid, please enter a valid email. "),/^[a-zA-Z0-9!@#$%^&*]{5,20}$/.test(c)||(t+="Password is invalid, please enter a password with 5 to 20 characters consisting of only letter or number or these special character !@#$%^&*. "),t.length>0?(console.log(2),b({title:"Invalid Login Details entered",description:t,status:"error",isClosable:!0})):(console.log(1),function(){var e={Email:a,Password:c};R.a.post("https://www.compsci4ww3bilalyichun.com:8080/auth/login",e).then((function(e,t){e.data.valid?(localStorage.setItem("accessToken",e.data.token),localStorage.setItem("username",e.data.username),localStorage.setItem("id",e.data.id),h({username:e.data.username,id:e.data.id,status:!0}),b({title:"Account successfully logged in!",status:"success",isClosable:!0}),j.push("/")):b({title:"Invalid Email or Password Entered",status:"error",isClosable:!0})}))}())},children:Object(W.jsx)(le.a,{children:"Sign In"})})]})})]})}),Object(W.jsx)(f.a,{}),Object(W.jsx)(P,{})]})})}var xe=function(){var e=Object(i.useState)({username:"",id:0,status:!1}),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(W.jsx)(I.Provider,{value:{authState:a,setAuthState:s},children:Object(W.jsx)(l.a,{children:Object(W.jsxs)(d.d,{children:[Object(W.jsx)(d.b,{path:"/",exact:!0,render:function(e){return Object(W.jsx)(_,Object(c.a)({},e))}}),Object(W.jsx)(d.b,{path:"/signup",exact:!0,render:function(e){return Object(W.jsx)(K,Object(c.a)({},e))}}),Object(W.jsx)(d.b,{path:"/spot",exact:!0,render:function(e){return Object(W.jsx)(se,Object(c.a)({},e))}}),Object(W.jsx)(d.b,{path:"/submission",exact:!0,render:function(e){return Object(W.jsx)(be,Object(c.a)({},e))}}),Object(W.jsx)(d.b,{path:"/results",exact:!0,render:function(e){return Object(W.jsx)(X,Object(c.a)({},e))}}),Object(W.jsx)(d.b,{path:"/search",exact:!0,render:function(e){return Object(W.jsx)(je,Object(c.a)({},e))}}),Object(W.jsx)(d.b,{path:"/signin",exact:!0,render:function(e){return Object(W.jsx)(ue,Object(c.a)({},e))}}),Object(W.jsx)(d.a,{to:"/"})]})})})},ge=a(219);n.a.render(Object(W.jsx)(s.a.StrictMode,{children:Object(W.jsx)(ge.a,{children:Object(W.jsx)(xe,{})})}),document.getElementById("root"))}},[[179,1,2]]]);