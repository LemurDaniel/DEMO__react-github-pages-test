(this.webpackJsonpspace_game=this.webpackJsonpspace_game||[]).push([[0],{13:function(t,e,i){},21:function(t,e,i){},22:function(t,e,i){},24:function(t,e,i){"use strict";i.r(e);var s=i(2),n=i.n(s),a=i(14),c=i.n(a),r=(i(21),i(13),i(6)),o=(i(22),i(15)),h=i(16),l=i(12),u=i(10),d=i(1),f=function(){return Object(d.jsxs)("footer",{className:"pt-1 w-full   fixed bottom-0   flex flex-col md:flex-row justify-evenly   bg-dark-100 text-white text-xs font-bold",children:[Object(d.jsxs)("div",{className:"mx-auto mx:mx-0  pb-1",children:[Object(d.jsxs)("p",{className:"px-2 inline ",children:[" ",Object(d.jsx)(o.a,{className:"inline"})," ",Object(d.jsx)("span",{className:"font-extralight",children:"copyright 2021 - "})," LemurDaniel"]}),Object(d.jsxs)("a",{href:"https://github.com/LemurDaniel/PROJECT__React-app-1",children:["  ",Object(d.jsx)(l.a,{className:"footer-icon"})," "]}),Object(d.jsxs)("a",{href:"https://www.xing.com/profile/Daniel_Landau8/",children:["         ",Object(d.jsx)(u.c,{className:"footer-icon"})," "]}),Object(d.jsxs)("a",{href:"https://www.linkedin.com/in/daniel-landau-ab2417188/",children:[" ",Object(d.jsx)(u.b,{className:"footer-icon"})," "]})]}),Object(d.jsxs)("div",{className:"mx-auto mx:mx-0   py-1 md:py-0  border-gray-700 border-t md:border-t-0",children:[Object(d.jsx)("p",{className:"px-2 inline",children:"Technologies "}),Object(d.jsxs)("a",{href:"https://www.javascript.com/",children:["  ",Object(d.jsx)(u.a,{className:"footer-icon"})," "]}),Object(d.jsxs)("a",{href:"https://reactjs.org/",children:["         ",Object(d.jsx)(l.b,{className:"footer-icon"})," "]}),Object(d.jsxs)("a",{href:"https://tailwindcss.com/",children:["     ",Object(d.jsx)(h.a,{className:"footer-icon"})," "]})]})]})},v=i(4),y=i(5),b=function(){function t(e,i){Object(v.a)(this,t),this.x=null!==e&&void 0!==e?e:0,this.y=null!==i&&void 0!==i?i:0}return Object(y.a)(t,[{key:"mag",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"setMag",value:function(t){var e=this.heading();return this.x=Math.cos(e)*t,this.y=Math.sin(e)*t,Math.abs(this.x)<1e-9&&(this.x=0),Math.abs(this.y)<1e-9&&(this.y=0),this}},{key:"heading",value:function(){if(0===this.x)return this.y>0?Math.PI/2:3*Math.PI/2;if(this.x>0){var t=Math.atan(this.y/this.x);return t<0?2*Math.PI+t:t}return this.x<0?Math.PI+Math.atan(this.y/this.x):void 0}},{key:"limit",value:function(t){if(!(this.mag()<=t))return this.setMag(t),this}},{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,Math.abs(this.x)<1e-9&&(this.x=0),Math.abs(this.y)<1e-9&&(this.y=0),this}},{key:"sub",value:function(t){return this.x-=t.x,this.y-=t.y,Math.abs(this.x)<1e-9&&(this.x=0),Math.abs(this.y)<1e-9&&(this.y=0),this}},{key:"mul",value:function(t,e){return"number"===typeof t?(this.x*=t,this.y*=null!==e&&void 0!==e?e:t):(this.x*=t.x,this.y*=t.y),Math.abs(this.x)<1e-9&&(this.x=0),Math.abs(this.y)<1e-9&&(this.y=0),this}},{key:"dist",value:function(e){var i=t.sub(this,e);return i.mag()}},{key:"copy",value:function(){return new t(this.x,this.y)}}],[{key:"fromAngle",value:function(e,i){var s=Math.sin(e)*i;return new t(Math.cos(e)*i,s)}},{key:"sub",value:function(e,i){return new t(e.x,e.y).sub(i)}},{key:"add",value:function(e,i){return new t(e.x,e.y).add(i)}},{key:"mul",value:function(e,i,s){return new t(e.x,e.y).mul(i,s)}}]),t}(),j=i(9),x=i(3),m=i(8),O=i(7),g=function(){function t(){Object(v.a)(this,t),this.particles=[]}return Object(y.a)(t,[{key:"count",value:function(){return this.particles.length}},{key:"push",value:function(t){this.particles.push(t)}},{key:"render",value:function(t){for(var e=this.particles,i=t.getContext("2d"),s=e.length,n=0;n<s;n++){var a=e[n];a.collisions.length=0,a.alive?(a.move(t),a.draw(i)):(e[n]=e[s-1],s--,n--)}e.length=s}},{key:"calculateCollsision",value:function(t,e){for(var i=this.particles,s=i.length,n=0;n<s;n++){var a=i[n];if(a.alive)if(a!==t)if(!a.collisions.includes(t))if(!(a.dist(t)>=a.radius+t.radius)){var c=t.onCollision(a);if(t.collisions.push(a),a.collisions.push(t),a.alive||(i[n]=i[s-1],i.length=s-1,s--,n--),e&&e(c,t,a),!t.alive)return}}}}]),t}(),p=function(t){Object(m.a)(i,t);var e=Object(O.a)(i);function i(t,s,n){var a;return Object(v.a)(this,i),(a=e.call(this,t.x,t.y)).alive=!0,a.angle=0,a.radius=n,a.velocity=s,a.collisions=[],a}return Object(y.a)(i,[{key:"isOOB",value:function(t){return this.x>t.width+2*this.radius||(this.y>t.height+2*this.radius||(this.x<0-2*this.radius||this.y<0-2*this.radius))}},{key:"wrapBounds",value:function(t){this.x>t.width+2*this.radius+5?this.x=2*-this.radius:this.x<2*-this.radius-5&&(this.x=t.width+2*this.radius),this.y>t.height+2*this.radius+5?this.y=2*-this.radius:this.y<2*-this.radius-5&&(this.y=t.height+2*this.radius)}},{key:"move",value:function(t){this.add(this.velocity),this.wrapBounds(t)}},{key:"draw",value:function(t){t.setTransform(1,0,0,1,this.x,this.y),t.rotate(this.angle)}},{key:"onCollision",value:function(t){return 0}}]),i}(b),w=g,M=function(t){Object(m.a)(i,t);var e=Object(O.a)(i);function i(t,s){var n;return Object(v.a)(this,i),(n=e.call(this,t,s,10)).add(b.mul(s,1)),n.angle=n.velocity.heading(),n}return Object(y.a)(i,[{key:"move",value:function(t){this.add(this.velocity),this.alive=!this.isOOB(t)}},{key:"draw",value:function(t){Object(j.a)(Object(x.a)(i.prototype),"draw",this).call(this,t),t.fillRect(10,-2.5,20,5)}},{key:"onCollision",value:function(t){return t.alive=!1,this.alive=!1,Math.floor(t.mass/(10*Math.random()+100))}}]),i}(p),k=function(t){Object(m.a)(i,t);var e=Object(O.a)(i);function i(t,s,n){var a;return Object(v.a)(this,i),(a=e.call(this,new b(t,s),new b(0,0),5)).cursor=new b(1,1),a.friction=.05,a.maxV=14,a.cannon=new w,document.addEventListener("keyup",(function(t){"Space"===t.code&&a.cannon.push(new M(a.copy(),b.fromAngle(a.angle,20))),"KeyW"===t.code&&(a.velocity=b.fromAngle(a.angle,.035*a.cursor.mag()))})),a}return Object(y.a)(i,[{key:"setCursor",value:function(t){this.cursor=b.sub(t,this)}},{key:"render",value:function(t){var e=t.getContext("2d");this.move(t),this.draw(e)}},{key:"draw",value:function(t){Object(j.a)(Object(x.a)(i.prototype),"draw",this).call(this,t),t.beginPath(),t.moveTo(20,0),t.lineTo(-20,20),t.lineTo(-20,-20),t.closePath(),t.stroke(),t.strokeRect(-28,-15,8,10),t.strokeRect(-28,5,8,10),t.strokeRect(16,-1,10,2)}},{key:"move",value:function(t){this.velocity.limit(this.maxV),this.velocity.x-=this.friction*Math.sign(this.velocity.x),this.velocity.y-=this.friction*Math.sign(this.velocity.y),this.velocity.mag()<=.1&&this.velocity.setMag(0),this.angle=this.cursor.heading(),Object(j.a)(Object(x.a)(i.prototype),"move",this).call(this,t)}}]),i}(p),C=function(t){Object(m.a)(i,t);var e=Object(O.a)(i);function i(t,s,n,a){var c;return Object(v.a)(this,i),(c=e.call(this,t,s,n)).mass=Math.PI*n*n,c.verts=a,c}return Object(y.a)(i,[{key:"move",value:function(t){this.velocity.limit(4),Object(j.a)(Object(x.a)(i.prototype),"move",this).call(this,t),this.angle+=.01*this.velocity.heading()}},{key:"draw",value:function(t){Object(j.a)(Object(x.a)(i.prototype),"draw",this).call(this,t);var e=this.verts;t.beginPath(),t.moveTo(e[0].x,e[0].y);for(var s=1;s<e.length;s++)t.lineTo(e[s].x,e[s].y);t.closePath(),t.stroke()}},{key:"applyForce",value:function(t,e){var i=e*t.mag()/this.mass,s=b.fromAngle(t.heading(),i);this.velocity.add(s)}},{key:"onCollision",value:function(t){var e,i=this.velocity.copy(),s=t.velocity.copy();this.velocity.setMag(-0*this.velocity.mag()),t.velocity.setMag(-0*t.velocity.mag()),t.applyForce(i,this.mass),this.applyForce(s,t.mass);var n=25,a=this.velocity.copy().setMag(.1),c=t.velocity.copy().setMag(.1);do{e=this.dist(t),this.add(a),t.add(c)}while(--n&&e<=this.radius+t.radius)}}],[{key:"getRandom",value:function(t,e){var s=new b(t.width/2,t.height/2),n=Math.random()*(2*Math.PI),a=b.fromAngle(n,s.mag()+10);s.add(a);for(var c=b.sub(e,s).heading()-(Math.random()*Math.PI/8-Math.PI/16),r=b.fromAngle(c,3*Math.random()+1),o=25*Math.random()+8,h=[],l=2*Math.PI;l>=0;l-=Math.PI/8){var u=.65*o,d=Math.random()*u-u/2,f=Math.cos(l)*(o+d),v=Math.sin(l)*(o+d);h.push(new b(f,v))}return new i(s,r,o,h)}}]),i}(p),N=new k(0,0,0),P=new w,I={x:0,y:0},T=function(t){var e=t.width,i=t.height,n=Object(s.useRef)(null);Object(s.useEffect)((function(){var t=n.current;return t.height=2*i,t.width=2*e,t.style.width=e+"px",t.style.height=i+"px",t.getContext("2d").scale(2,2),N.x=2*e/2,N.y=2*i/2,function(){return t.getContext("2d").scale(-2,-2)}}),[n,e,i]);var a=Object(s.useState)(!0),c=Object(r.a)(a,2),o=c[0],h=(c[1],Object(s.useState)(!0)),l=Object(r.a)(h,2),u=l[0],f=l[1],v=Object(s.useState)(0),y=Object(r.a)(v,2),b=y[0],j=y[1],x=Object(s.useState)(12),m=Object(r.a)(x,2),O=m[0],g=m[1];Object(s.useEffect)((function(){setTimeout((function(){P.count()>=O||(P.push(C.getRandom(n.current,N)),j(P.count()))}),1e3*Math.random()+75)}),[b,O]);var p=Object(s.useState)(0),w=Object(r.a)(p,2),M=w[0],k=w[1];return Object(s.useEffect)((function(){g(Math.max(12,Math.ceil(M/75)))}),[M]),Object(s.useEffect)((function(){if(N&&P&&o){var t=M,e=function(){var e=n.current,i=e.getContext("2d");i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,e.width,e.height),i.strokeStyle="white",i.fillStyle="white",i.lineCap="round",i.lineWidth=4;var s=N.cannon;P.render(e),s.render(e),N.setCursor(I),N.render(e),i.setTransform(1,0,0,1,0,0),u&&(i.beginPath(),i.arc(I.x,I.y,5,0,2*Math.PI),i.fill()),P.particles.forEach((function(t){P.calculateCollsision(N,(function(){})),P.calculateCollsision(t)})),s.particles.forEach((function(e){P.calculateCollsision(e,(function(e){k(t+=e),j(P.count())}))}))};if(!u)return e();var i=setInterval((function(){return e()}),1e3/60);return function(){return clearInterval(i)}}}),[u,o]),Object(d.jsxs)("div",{className:"w-min mx-auto ",children:[Object(d.jsxs)("div",{className:"font-bold text-brand2-100  flex justify-evenly",children:[Object(d.jsxs)("p",{children:["Highscore: ",M]}),Object(d.jsxs)("p",{children:["Asteroids: ",b," / ",O]})]}),Object(d.jsx)("div",{className:"rounded-md border border-brand2-100",children:Object(d.jsx)("canvas",{height:i,width:e,onMouseMove:function(t){var e=n.current;I.x=2*(t.clientX-e.offsetLeft),I.y=2*(t.clientY-e.offsetTop)},onMouseLeave:function(t){return f(!1)},onMouseEnter:function(t){return f(!0)},ref:n,className:"bg-dark-800"})})]})};var S=function(){var t=Object(s.useState)(0),e=Object(r.a)(t,2),i=e[0],n=e[1],a=Object(s.useState)(0),c=Object(r.a)(a,2),o=c[0],h=c[1];return Object(s.useEffect)((function(){var t=window.screen.height,e=window.screen.width;e>720?(n(.75*e),h(.55*t)):(n(.85*e),h(.55*t))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("nav",{className:"py-1 fixed w-full top-0 z-50      border-b border-brand2-100 bg-dark-700   flex justify-center",children:Object(d.jsx)("button",{className:"py-1 hover:underline text-brand2-100  font-bold",children:" Space Game "})}),Object(d.jsx)("div",{className:" ",children:Object(d.jsx)(T,{width:i,height:o})}),Object(d.jsx)(f,{})]})},E=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,25)).then((function(e){var i=e.getCLS,s=e.getFID,n=e.getFCP,a=e.getLCP,c=e.getTTFB;i(t),s(t),n(t),a(t),c(t)}))};c.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),E()}},[[24,1,2]]]);
//# sourceMappingURL=main.69e1fd6c.chunk.js.map