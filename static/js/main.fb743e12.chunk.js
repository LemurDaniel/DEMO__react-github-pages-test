(this.webpackJsonpspace_game=this.webpackJsonpspace_game||[]).push([[0],{13:function(t,e,i){},21:function(t,e,i){},22:function(t,e,i){},24:function(t,e,i){"use strict";i.r(e);var n=i(2),a=i.n(n),s=i(14),c=i.n(s),o=(i(21),i(13),i(6)),r=(i(22),i(15)),h=i(16),l=i(12),u=i(10),d=i(1),f=function(){return Object(d.jsxs)("footer",{className:"pt-1 w-full   fixed bottom-0   flex flex-col md:flex-row justify-evenly   bg-dark-100 text-white text-xs font-bold",children:[Object(d.jsxs)("div",{className:"mx-auto mx:mx-0  pb-1",children:[Object(d.jsxs)("p",{className:"px-2 inline ",children:[" ",Object(d.jsx)(r.a,{className:"inline"})," ",Object(d.jsx)("span",{className:"font-extralight",children:"copyright 2021 - "})," LemurDaniel"]}),Object(d.jsxs)("a",{href:"https://github.com/LemurDaniel/PROJECT__React-app-1",children:["  ",Object(d.jsx)(l.a,{className:"footer-icon"})," "]}),Object(d.jsxs)("a",{href:"https://www.xing.com/profile/Daniel_Landau8/",children:["         ",Object(d.jsx)(u.c,{className:"footer-icon"})," "]}),Object(d.jsxs)("a",{href:"https://www.linkedin.com/in/daniel-landau-ab2417188/",children:[" ",Object(d.jsx)(u.b,{className:"footer-icon"})," "]})]}),Object(d.jsxs)("div",{className:"mx-auto mx:mx-0   py-1 md:py-0  border-gray-700 border-t md:border-t-0",children:[Object(d.jsx)("p",{className:"px-2 inline",children:"Technologies "}),Object(d.jsxs)("a",{href:"https://www.javascript.com/",children:["  ",Object(d.jsx)(u.a,{className:"footer-icon"})," "]}),Object(d.jsxs)("a",{href:"https://reactjs.org/",children:["         ",Object(d.jsx)(l.b,{className:"footer-icon"})," "]}),Object(d.jsxs)("a",{href:"https://tailwindcss.com/",children:["     ",Object(d.jsx)(h.a,{className:"footer-icon"})," "]})]})]})},v=i(4),y=i(5),b=function(){function t(e,i){Object(v.a)(this,t),this.x=null!==e&&void 0!==e?e:0,this.y=null!==i&&void 0!==i?i:0}return Object(y.a)(t,[{key:"_round",value:function(){Math.abs(this.x)<1e-9&&(this.x=0),Math.abs(this.y)<1e-9&&(this.y=0)}},{key:"copy",value:function(){return new t(this.x,this.y)}},{key:"mag",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"dist",value:function(e){return t.sub(this,e).mag()}},{key:"limit",value:function(t){if(this.mag()>t)return this.setMag(t)}},{key:"setMag",value:function(t){var e=this.heading();return this.x=Math.cos(e)*t,this.y=Math.sin(e)*t,this._round(),this}},{key:"heading",value:function(){var t=2*Math.PI;return 0===this.x?this.y>0?Math.PI/2:3*Math.PI/2:this.x>0?(t+Math.atan(this.y/this.x))%t:this.x<0?Math.PI+Math.atan(this.y/this.x):void 0}},{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this._round(),this}},{key:"sub",value:function(t){return this.x-=t.x,this.y-=t.y,this._round(),this}},{key:"mul",value:function(t,e){return"number"===typeof t?(this.x*=t,this.y*=null!==e&&void 0!==e?e:t):(this.x*=t.x,this.y*=t.y),this._round(),this}}],[{key:"fromAngle",value:function(e,i){var n=Math.sin(e)*i;return new t(Math.cos(e)*i,n)}},{key:"sub",value:function(t,e){return t.copy().sub(e)}},{key:"add",value:function(t,e){return t.copy().add(e)}},{key:"mul",value:function(t,e,i){return t.copy().mul(e,i)}}]),t}(),j=i(9),m=i(3),x=i(8),O=i(7),g=function(){function t(){Object(v.a)(this,t),this.particles=[]}return Object(y.a)(t,[{key:"count",value:function(){return this.particles.length}},{key:"push",value:function(t){this.particles.push(t)}},{key:"render",value:function(t){for(var e=this.particles,i=t.getContext("2d"),n=e.length,a=0;a<n;a++){var s=e[a];s.collisions.length=0,s.alive?(s.move(t),s.draw(i)):(e[a]=e[n-1],n--,a--)}e.length=n}},{key:"calculateCollsision",value:function(t,e){for(var i=this.particles,n=i.length,a=0;a<n;a++){var s=i[a];if(s.alive)if(s!==t)if(!s.collisions.includes(t))if(!(s.dist(t)>=s.radius+t.radius)){var c=t.onCollision(s);if(t.collisions.push(s),s.collisions.push(t),s.alive||(i[a]=i[n-1],i.length=n-1,n--,a--),e&&e(c,t,s),!t.alive)return}}}}]),t}(),p=function(t){Object(x.a)(i,t);var e=Object(O.a)(i);function i(t,n,a){var s;return Object(v.a)(this,i),(s=e.call(this,t.x,t.y)).alive=!0,s.angle=0,s.radius=a,s.velocity=n,s.collisions=[],s}return Object(y.a)(i,[{key:"isOOB",value:function(t){return this.x>t.width+2*this.radius||(this.y>t.height+2*this.radius||(this.x<0-2*this.radius||this.y<0-2*this.radius))}},{key:"wrapBounds",value:function(t){this.x>t.width+2*this.radius+5?this.x=2*-this.radius:this.x<2*-this.radius-5&&(this.x=t.width+2*this.radius),this.y>t.height+2*this.radius+5?this.y=2*-this.radius:this.y<2*-this.radius-5&&(this.y=t.height+2*this.radius)}},{key:"move",value:function(t){this.add(this.velocity),this.wrapBounds(t)}},{key:"draw",value:function(t){t.setTransform(1,0,0,1,this.x,this.y),t.rotate(this.angle)}},{key:"onCollision",value:function(t){return 0}}]),i}(b),w=g,k=function(t){Object(x.a)(i,t);var e=Object(O.a)(i);function i(t,n){var a;return Object(v.a)(this,i),(a=e.call(this,t,n,10)).add(b.mul(n,1)),a.angle=a.velocity.heading(),a}return Object(y.a)(i,[{key:"move",value:function(t){this.add(this.velocity),this.alive=!this.isOOB(t)}},{key:"draw",value:function(t){Object(j.a)(Object(m.a)(i.prototype),"draw",this).call(this,t),t.fillRect(10,-2.5,20,5)}},{key:"onCollision",value:function(t){return t.alive=!1,this.alive=!1,Math.floor(t.mass/(10*Math.random()+100))}}]),i}(p),M=function(t){Object(x.a)(i,t);var e=Object(O.a)(i);function i(t,n,a){var s;return Object(v.a)(this,i),(s=e.call(this,new b(t,n),new b(0,0),5)).cursor=new b(1,1),s.friction=.05,s.maxV=14,s.cannon=new w,document.addEventListener("keyup",(function(t){"Space"===t.code&&s.cannon.push(new k(s.copy(),b.fromAngle(s.angle,20))),"KeyW"===t.code&&(s.velocity=b.fromAngle(s.angle,.035*s.cursor.mag()))})),s}return Object(y.a)(i,[{key:"setCursor",value:function(t){this.cursor=b.sub(t,this)}},{key:"render",value:function(t){var e=t.getContext("2d");this.move(t),this.draw(e)}},{key:"draw",value:function(t){Object(j.a)(Object(m.a)(i.prototype),"draw",this).call(this,t),t.beginPath(),t.moveTo(20,0),t.lineTo(-20,20),t.lineTo(-20,-20),t.closePath(),t.stroke(),t.strokeRect(-28,-15,8,10),t.strokeRect(-28,5,8,10),t.strokeRect(16,-1,10,2)}},{key:"move",value:function(t){this.velocity.limit(this.maxV),this.velocity.x-=this.friction*Math.sign(this.velocity.x),this.velocity.y-=this.friction*Math.sign(this.velocity.y),this.velocity.mag()<=.1&&this.velocity.setMag(0),this.angle=this.cursor.heading(),Object(j.a)(Object(m.a)(i.prototype),"move",this).call(this,t)}}]),i}(p),C=function(t){Object(x.a)(i,t);var e=Object(O.a)(i);function i(t,n,a,s){var c;return Object(v.a)(this,i),(c=e.call(this,t,n,a)).mass=Math.PI*a*a,c.verts=s,c.setRotation(),c}return Object(y.a)(i,[{key:"setRotation",value:function(){this.rotation=1,Math.round(Math.random())&&(this.rotation=-1)}},{key:"move",value:function(t){this.velocity.limit(4),Object(j.a)(Object(m.a)(i.prototype),"move",this).call(this,t),this.angle+=.0055*this.velocity.heading()*this.rotation}},{key:"draw",value:function(t){Object(j.a)(Object(m.a)(i.prototype),"draw",this).call(this,t);var e=this.verts;t.beginPath(),t.moveTo(e[0].x,e[0].y);for(var n=1;n<e.length;n++)t.lineTo(e[n].x,e[n].y);t.closePath(),t.stroke()}},{key:"applyForce",value:function(t,e){var i=e*t.mag()/this.mass,n=b.fromAngle(t.heading(),i);this.velocity.add(n)}},{key:"onCollision",value:function(t){var e,i=this.velocity.copy(),n=t.velocity.copy();this.setRotation(),t.setRotation(),this.velocity.setMag(-0*this.velocity.mag()),t.velocity.setMag(-0*t.velocity.mag()),t.applyForce(i,this.mass),this.applyForce(n,t.mass);var a=50,s=this.velocity.copy().setMag(.1),c=t.velocity.copy().setMag(.1);do{e=this.dist(t),this.add(s),t.add(c)}while(--a&&e<=this.radius+t.radius)}}],[{key:"getRandom",value:function(t,e){var n=new b(t.width/2,t.height/2),a=Math.random()*(2*Math.PI),s=b.fromAngle(a,n.mag()+10);n.add(s);for(var c=b.sub(e,n).heading()-(Math.random()*Math.PI/8-Math.PI/16),o=b.fromAngle(c,3*Math.random()+1),r=75*Math.random()+8,h=[],l=2*Math.PI;l>=0;l-=Math.PI/8){var u=.65*r,d=Math.random()*u-u/2,f=Math.cos(l)*(r+d),v=Math.sin(l)*(r+d);h.push(new b(f,v))}return new i(n,o,r,h)}}]),i}(p),N=new M(0,0,0),P=new w,I=new b(0,0),R=function(t){var e=t.width,i=t.height,a=Object(n.useRef)(null);Object(n.useEffect)((function(){var t=a.current;return t.height=2*i,t.width=2*e,t.style.width=e+"px",t.style.height=i+"px",t.getContext("2d").scale(2,2),N.x=2*e/2,N.y=2*i/2,function(){return t.getContext("2d").scale(-2,-2)}}),[a,e,i]);var s=Object(n.useState)(!0),c=Object(o.a)(s,2),r=c[0],h=(c[1],Object(n.useState)(!0)),l=Object(o.a)(h,2),u=l[0],f=l[1],v=Object(n.useState)(0),y=Object(o.a)(v,2),b=y[0],j=y[1],m=Object(n.useState)(12),x=Object(o.a)(m,2),O=x[0],g=x[1];Object(n.useEffect)((function(){setTimeout((function(){P.count()>=O||(P.push(C.getRandom(a.current,N)),j(P.count()))}),1e3*Math.random()+75)}),[b,O]);var p=Object(n.useState)(0),w=Object(o.a)(p,2),k=w[0],M=w[1];return Object(n.useEffect)((function(){g(Math.max(12,Math.ceil(k/75)))}),[k]),Object(n.useEffect)((function(){if(N&&P&&r){var t=k,e=function(){var e=a.current,i=e.getContext("2d");i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,e.width,e.height),i.strokeStyle="white",i.fillStyle="white",i.lineCap="round",i.lineWidth=4;var n=N.cannon;P.render(e),n.render(e),N.setCursor(I),N.render(e),i.setTransform(1,0,0,1,0,0),u&&(i.beginPath(),i.arc(I.x,I.y,5,0,2*Math.PI),i.fill()),P.particles.forEach((function(t){P.calculateCollsision(N,(function(){})),P.calculateCollsision(t)})),n.particles.forEach((function(e){P.calculateCollsision(e,(function(e){M(t+=e),j(P.count())}))}))};if(!u)return e();var i=setInterval((function(){return e()}),1e3/60);return function(){return clearInterval(i)}}}),[u,r]),Object(d.jsxs)("div",{className:"w-min mx-auto ",children:[Object(d.jsxs)("div",{className:"font-bold text-brand2-100  flex justify-evenly",children:[Object(d.jsxs)("p",{children:["Highscore: ",k]}),Object(d.jsxs)("p",{children:["Asteroids: ",b," / ",O]})]}),Object(d.jsx)("div",{className:"rounded-md border border-brand2-100",children:Object(d.jsx)("canvas",{height:i,width:e,onMouseMove:function(t){var e=a.current;I.x=2*(t.clientX-e.offsetLeft),I.y=2*(t.clientY-e.offsetTop)},onMouseLeave:function(t){return f(!1)},onMouseEnter:function(t){return f(!0)},ref:a,className:"bg-dark-800"})})]})};var T=function(){var t=Object(n.useState)(0),e=Object(o.a)(t,2),i=e[0],a=e[1],s=Object(n.useState)(0),c=Object(o.a)(s,2),r=c[0],h=c[1];return Object(n.useEffect)((function(){var t=window.screen.height,e=window.screen.width;e>720?(a(.75*e),h(.55*t)):(a(.85*e),h(.55*t))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("nav",{className:"py-1 fixed w-full top-0 z-50      border-b border-brand2-100 bg-dark-700   flex justify-center",children:Object(d.jsx)("button",{className:"py-1 hover:underline text-brand2-100  font-bold",children:" Space Game "})}),Object(d.jsx)("div",{className:" ",children:Object(d.jsx)(R,{width:i,height:r})}),Object(d.jsx)(f,{})]})},S=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,25)).then((function(e){var i=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;i(t),n(t),a(t),s(t),c(t)}))};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root")),S()}},[[24,1,2]]]);
//# sourceMappingURL=main.fb743e12.chunk.js.map