(this.webpackJsonpspace_game=this.webpackJsonpspace_game||[]).push([[0],{13:function(t,e,i){},21:function(t,e,i){},22:function(t,e,i){},24:function(t,e,i){"use strict";i.r(e);var s=i(2),n=i.n(s),a=i(14),o=i.n(a),c=(i(21),i(13),i(22),i(15)),r=i(16),h=i(12),l=i(10),u=i(1),d=function(){return Object(u.jsxs)("footer",{className:"pt-1 w-full   fixed bottom-0   flex flex-col md:flex-row justify-evenly   bg-dark-100 text-white text-xs font-bold",children:[Object(u.jsxs)("div",{className:"mx-auto mx:mx-0  pb-1",children:[Object(u.jsxs)("p",{className:"px-2 inline ",children:[" ",Object(u.jsx)(c.a,{className:"inline"})," ",Object(u.jsx)("span",{className:"font-extralight",children:"copyright 2021 - "})," LemurDaniel"]}),Object(u.jsxs)("a",{href:"https://github.com/LemurDaniel/PROJECT__React-app-1",children:["  ",Object(u.jsx)(h.a,{className:"footer-icon"})," "]}),Object(u.jsxs)("a",{href:"https://www.xing.com/profile/Daniel_Landau8/",children:["         ",Object(u.jsx)(l.c,{className:"footer-icon"})," "]}),Object(u.jsxs)("a",{href:"https://www.linkedin.com/in/daniel-landau-ab2417188/",children:[" ",Object(u.jsx)(l.b,{className:"footer-icon"})," "]})]}),Object(u.jsxs)("div",{className:"mx-auto mx:mx-0   py-1 md:py-0  border-gray-700 border-t md:border-t-0",children:[Object(u.jsx)("p",{className:"px-2 inline",children:"Technologies "}),Object(u.jsxs)("a",{href:"https://www.javascript.com/",children:["  ",Object(u.jsx)(l.a,{className:"footer-icon"})," "]}),Object(u.jsxs)("a",{href:"https://reactjs.org/",children:["         ",Object(u.jsx)(h.b,{className:"footer-icon"})," "]}),Object(u.jsxs)("a",{href:"https://tailwindcss.com/",children:["     ",Object(u.jsx)(r.a,{className:"footer-icon"})," "]})]})]})},f=i(4);function v(t){var e=t%60,i=Math.floor(t/60)%60,s=Math.floor(t/3600),n=s<=0?"":s+":";return n+=(i<10?"0":"")+i+":",n+=(e<10?"0":"")+e}var b=function(t){var e=t.scores,i=t.onRestart;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"absolute bg-white opacity-10 inset-0 "}),Object(u.jsx)("div",{className:"absolute inset-x-0 top-40 ",children:Object(u.jsxs)("div",{className:"w-60 mx-auto flex flex-col justify-center items-center   border border-brand2-100 rounded-sm shadow-2xl",children:[Object(u.jsx)("header",{className:"px-2 pb-1 rounded-t-sm  bg-dark-700 w-full text-brand2-100 font-bold text-center",children:Object(u.jsx)("p",{children:"Game Over"})}),Object(u.jsxs)("div",{className:"bg-white w-full px-2 py-1 font-bold text-dark-700",children:[Object(u.jsx)("h1",{className:"border-b-2 border-gray-200 rounded-sm",children:"Highscores:"}),Object(u.jsx)("ol",{className:"list-decimal px-6",children:e.map((function(t,e){var i=t.score,s=t.ticks;return Object(u.jsxs)("li",{children:[i," Points --- ",v(s)]},e)}))})]}),Object(u.jsx)("footer",{className:"bg-dark-800 rounded-b-sm w-full flex",children:Object(u.jsx)("button",{className:" mx-auto my-1 px-1 text-brand2-100 font-bold rounded-sm  border-b border-brand2-100 hover:bg-brand2-100 hover:text-dark-700 duration-300 focus:outline-none",onClick:i,children:" Restart"})})]})})]})},y=function(t){var e=t.ticks,i=t.setTicks,n=t.pause,a=Object(s.useState)(null),o=Object(f.a)(a,2),c=o[0],r=o[1];Object(s.useEffect)((function(){null!==c&&clearTimeout(c),n||r(setTimeout((function(){return i(e+1)}),1e3))}),[e,n]);var h=e%60,l=Math.floor(e/60)%60,d=Math.floor(e/3600),v=d<=0?"":d+":";return v+=(l<10?"0":"")+l+":",v+=(h<10?"0":"")+h,Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("p",{children:v})})},m=i(5),j=i(6),x=function(){function t(e,i){Object(m.a)(this,t),this.x=null!==e&&void 0!==e?e:0,this.y=null!==i&&void 0!==i?i:0}return Object(j.a)(t,[{key:"_round",value:function(){Math.abs(this.x)<1e-9&&(this.x=0),Math.abs(this.y)<1e-9&&(this.y=0)}},{key:"copy",value:function(){return new t(this.x,this.y)}},{key:"mag",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"dist",value:function(e){return t.sub(this,e).mag()}},{key:"limit",value:function(t){if(this.mag()>t)return this.setMag(t)}},{key:"setMag",value:function(t){var e=this.heading();return this.x=Math.cos(e)*t,this.y=Math.sin(e)*t,this._round(),this}},{key:"heading",value:function(){var t=2*Math.PI;return 0===this.x?this.y>0?Math.PI/2:3*Math.PI/2:this.x>0?(t+Math.atan(this.y/this.x))%t:this.x<0?Math.PI+Math.atan(this.y/this.x):void 0}},{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this._round(),this}},{key:"sub",value:function(t){return this.x-=t.x,this.y-=t.y,this._round(),this}},{key:"mul",value:function(t,e){return"number"===typeof t?(this.x*=t,this.y*=null!==e&&void 0!==e?e:t):(this.x*=t.x,this.y*=t.y),this._round(),this}}],[{key:"fromAngle",value:function(e,i){var s=Math.sin(e)*i;return new t(Math.cos(e)*i,s)}},{key:"sub",value:function(t,e){return t.copy().sub(e)}},{key:"add",value:function(t,e){return t.copy().add(e)}},{key:"mul",value:function(t,e,i){return t.copy().mul(e,i)}}]),t}(),g=i(9),p=i(3),O=i(8),w=i(7),k=function(){function t(){Object(m.a)(this,t),this.limbo=[],this.particles=[],this.dying=[]}return Object(j.a)(t,[{key:"count",value:function(t){return this.particles.length+(t?this.limbo.length:0)}},{key:"push",value:function(t){t.limbo>0?this.limbo.push(t):this.particles.push(t)}},{key:"reset",value:function(){this.limbo=[],this.particles=[],this.dying=[]}},{key:"_checkLimbo",value:function(){for(var t=this.limbo.length-1,e=0;e<=t;e++){var i=this.limbo[e];--i.limbo<=0&&(this.limbo[e--]=this.limbo[t--],this.particles.push(i),i.onActive())}this.limbo.length=t+1}},{key:"_checkDying",value:function(t){for(var e=t.getContext("2d"),i=this.dying.length-1,s=0;s<=i;s++){var n=this.dying[s];n.fade(),n.move(t),n.hidden||n.draw(e),n.faded&&(this.dying[s--]=this.dying[i--])}this.dying.length=i+1}},{key:"render",value:function(t){this._checkLimbo(),this._checkDying(t);for(var e=this.particles.length-1,i=0;i<=e;i++){var s=this.particles[i];s.collisions={},s.alive?s.render(t):this.particles[i--]=this.particles[e--]}this.particles.length=e+1}},{key:"calculateCollsision",value:function(t,e){for(var i=this.particles,s=i.length-1,n=0;n<=s;n++){var a=i[n];if(a.alive)if(a!==t)if(!(t.id in a.collisions))if(a.dist(t)>=a.radius+t.radius)a.collisions[t.id]=!1,t.collisions[a.id]=!1;else{a.collisions[t.id]=!0,t.collisions[a.id]=!0;var o=t.onCollision(a);if(a.alive||(i[n--]=i[s--],i.length=s+1,a.died||(this.dying.push(a),a.hidden=!0)),e&&e(o,t,a),!t.alive)break}}}}]),t}(),M=function(t){Object(O.a)(i,t);var e=Object(w.a)(i);function i(t,s,n){var a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return Object(m.a)(this,i),(a=e.call(this,t.x,t.y)).id=i.id++,a.limbo=0,a.lives=o,a.alive=!0,a.died=!1,a.angle=0,a.radius=n,a.velocity=s,a.collisions={},a.fadeTime=8,a.fadeEnd=5,a.hidden=!1,a.faded=!1,a.time=0,a}return Object(j.a)(i,[{key:"setLimbo",value:function(t,e){this.limbo=Math.round(t),this.onActive=null!==e&&void 0!==e?e:function(){return null}}},{key:"isOOB",value:function(t){return this.x>t.width+2*this.radius||(this.y>t.height+2*this.radius||(this.x<0-2*this.radius||this.y<0-2*this.radius))}},{key:"wrapBounds",value:function(t){this.x>t.width+2*this.radius+5?this.x=2*-this.radius:this.x<2*-this.radius-5&&(this.x=t.width+2*this.radius),this.y>t.height+2*this.radius+5?this.y=2*-this.radius:this.y<2*-this.radius-5&&(this.y=t.height+2*this.radius)}},{key:"fade",value:function(){this.time++>=this.fadeTime&&(this.time=0,this.hidden=!this.hidden,this.fadeTime=.95*this.fadeTime),this.fadeTime<this.fadeEnd&&(this.faded=!0)}},{key:"render",value:function(t){var e=t.getContext("2d");this.move(t),this.draw(e),e.setTransform(1,0,0,1,0,0)}},{key:"move",value:function(t){this.add(this.velocity),this.wrapBounds(t)}},{key:"draw",value:function(t){t.setTransform(1,0,0,1,this.x,this.y),t.rotate(this.angle)}},{key:"onCollision",value:function(t){return 0}}]),i}(x);M.id=0;var N=k,T=function(t){Object(O.a)(i,t);var e=Object(w.a)(i);function i(t,s){var n;return Object(m.a)(this,i),(n=e.call(this,t,s,10)).add(x.mul(s,1)),n.angle=n.velocity.heading(),n}return Object(j.a)(i,[{key:"move",value:function(t){this.add(this.velocity),this.alive=!this.isOOB(t),this.died=!this.alive}},{key:"draw",value:function(t){Object(g.a)(Object(p.a)(i.prototype),"draw",this).call(this,t),t.fillRect(10,-2.5,20,5)}},{key:"onCollision",value:function(t){return t.alive=!1,this.alive=!1,this.died=!0,Math.floor(t.mass/(10*Math.random()+100))}}]),i}(M),C=function(t){Object(O.a)(i,t);var e=Object(w.a)(i);function i(t,s,n){var a;return Object(m.a)(this,i),(a=e.call(this,new x(t,s),new x(0,0),5,3)).faded=!0,a.cursor=new x(1,1),a.friction=.05,a.maxV=14,a.cannon=new N,a}return Object(j.a)(i,[{key:"shoot",value:function(){this.cannon.push(new T(this.copy(),x.fromAngle(this.angle,20)))}},{key:"setCursor",value:function(t){this.cursor=x.sub(t,this)}},{key:"thrust",value:function(t){t?this.velocity.add(x.fromAngle(this.angle,.00105*this.cursor.mag())):this.velocity=x.fromAngle(this.angle,.035*this.cursor.mag())}},{key:"draw",value:function(t){this.drawLives(t),!this.faded&&(this.fade(),this.hidden)||(Object(g.a)(Object(p.a)(i.prototype),"draw",this).call(this,t),this.drawShip(t))}},{key:"drawLives",value:function(t){var e=t.canvas;t.setTransform(1,0,0,1,.05*e.width,.035*e.height);var i=.8;t.scale(i,i),t.rotate(-Math.PI/4);for(var s=0;s<this.lives;s++)this.drawShip(t),t.translate(48,48)}},{key:"drawShip",value:function(t){t.beginPath(),t.moveTo(20,0),t.lineTo(-20,20),t.lineTo(-20,-20),t.closePath(),t.stroke(),t.strokeRect(-28,-15,8,10),t.strokeRect(-28,5,8,10),t.strokeRect(16,-1,10,2)}},{key:"move",value:function(t){this.velocity.limit(this.maxV),this.velocity.x-=this.friction*Math.sign(this.velocity.x),this.velocity.y-=this.friction*Math.sign(this.velocity.y),this.velocity.mag()<=.1&&this.velocity.setMag(0),this.angle=this.cursor.heading(),Object(g.a)(Object(p.a)(i.prototype),"move",this).call(this,t)}},{key:"onCollision",value:function(t){t.alive=!1,--this.lives<=0?this.alive=!1:(this.faded=!1,this.hidden=!0,this.fadeTime=12,this.fadeEnd=12)}}]),i}(M),P=function(t){Object(O.a)(i,t);var e=Object(w.a)(i);function i(t,s,n,a){var o;return Object(m.a)(this,i),(o=e.call(this,t,s,n)).mass=Math.PI*n*n,o.verts=a,o.setRotation(),o}return Object(j.a)(i,[{key:"setRotation",value:function(){this.rotation=1,Math.round(Math.random())&&(this.rotation=-1)}},{key:"move",value:function(t){this.velocity.limit(4),Object(g.a)(Object(p.a)(i.prototype),"move",this).call(this,t),this.angle+=.0055*this.velocity.heading()*this.rotation,this.velocity.mag()<.15&&this.velocity.setMag(Math.random()*(.0025*t.width))}},{key:"draw",value:function(t){Object(g.a)(Object(p.a)(i.prototype),"draw",this).call(this,t);var e=this.verts;t.beginPath(),t.moveTo(e[0].x,e[0].y);for(var s=1;s<e.length;s++)t.lineTo(e[s].x,e[s].y);t.closePath(),t.stroke()}},{key:"applyForce",value:function(t,e){var i=e*t.mag()/this.mass,s=x.fromAngle(t.heading(),i);this.velocity.add(s)}},{key:"onCollision",value:function(t){var e,i=this.velocity.copy(),s=t.velocity.copy();this.setRotation(),t.setRotation(),this.velocity.setMag(-.5*this.velocity.mag()),t.velocity.setMag(-.5*t.velocity.mag()),t.applyForce(i,this.mass),this.applyForce(s,t.mass);var n=75,a=this.velocity.copy().setMag(.1),o=t.velocity.copy().setMag(.1);do{e=this.dist(t),this.add(a),t.add(o)}while(--n&&e<=this.radius+t.radius);if(this.dist(t)<=this.radius+t.radius){var c=x.add(this.velocity,t.velocity);this.velocity=c.copy().setMag(1*Math.abs(this.velocity.mag())),t.velocity=c.copy().setMag(-1*Math.abs(t.velocity.mag())),n=75;do{e=this.dist(t),this.add(this.velocity),t.add(t.velocity)}while(--n&&e<=this.radius+t.radius)}}}],[{key:"getRandom",value:function(t,e){var s=new x(t.width/2,t.height/2),n=Math.random()*(2*Math.PI),a=x.fromAngle(n,s.mag()+10);s.add(a);for(var o=x.sub(e,s).heading()-(Math.random()*Math.PI/16-Math.PI/32),c=x.fromAngle(o,Math.random()*(.0035*t.width)),r=Math.min(.035*t.width,55),h=.005*t.width,l=Math.random()*r+h,u=[],d=2*Math.PI;d>=0;d-=Math.PI/8){var f=.65*l,v=Math.random()*f-f/2,b=Math.cos(d)*(l+v),y=Math.sin(d)*(l+v);u.push(new x(b,y))}return new i(s,c,l,u)}}]),i}(M);P.targetAmount=0;var S=P,E=new C(0,0,0),R=new N,I={vec:new x(0,0),draw:!0},L=function(){var t=Object(s.useRef)(null),e=Object(s.useState)([window.innerWidth,window.innerHeight-70]),i=Object(f.a)(e,2),n=i[0],a=i[1];Object(s.useEffect)((function(){return window.onresize=function(){var t=window.innerWidth,e=window.innerHeight-70;a([t,e])},window.onkeyup=function(t){"Space"===t.code?E.shoot():"KeyW"!==t.code&&"ArrowUp"!==t.code||E.thrust()},function(){return window.onresize=null}}),[]),Object(s.useEffect)((function(){var e=t.current,i=n[0],s=n[1];0==E.x&&0==E.y&&(E.x=2*i/2,E.y=2*s/2),e.height=2*s,e.width=2*i,e.style.width=i+"px",e.style.height=s+"px"}),[t,n]);var o=Object(s.useState)(!1),c=Object(f.a)(o,2),r=c[0],h=c[1],l=function(e){var i=t.current;if("touchmove"===e.type||"touchstart"===e.type){var s=e.nativeEvent.touches[0];I.vec.x=2*(s.clientX-i.offsetLeft),I.vec.y=2*(s.clientY-i.offsetTop),E.setCursor(I.vec),r&&h(!1),E.thrust(!0)}else"mousemove"===e.type&&(I.vec.x=2*(e.clientX-i.offsetLeft),I.vec.y=2*(e.clientY-i.offsetTop),E.setCursor(I.vec),r&&h(!1));"touchstart"===e.type?I.draw=!0:"touchend"===e.type&&(I.draw=!1)},d=Object(s.useState)(0),v=Object(f.a)(d,2),m=v[0],j=v[1],g=Object(s.useState)(0),p=Object(f.a)(g,2),O=p[0],w=p[1],k=Object(s.useState)([]),M=Object(f.a)(k,2),N=M[0],T=M[1],C=Object(s.useState)(0),P=Object(f.a)(C,2),L=P[0],_=P[1];Object(s.useEffect)((function(){var t=Math.max(8,Math.ceil(L/550));w(Math.min(40,t))}),[L]),Object(s.useEffect)((function(){for(;R.count(!0)<O;){var e=S.getRandom(t.current,E);e.setLimbo(750*Math.random()+150,(function(){return j(R.count())})),R.push(e)}}),[O,m]);var A=Object(s.useState)(!0),F=Object(f.a)(A,2),B=F[0],D=F[1],H=Object(s.useState)(0),W=Object(f.a)(H,2),z=W[0],J=W[1];Object(s.useEffect)((function(){0!==z&&(z%300===0?_(L+125):z%60===0?_(L+25):z%30===0&&_(L+5))}),[z]),Object(s.useEffect)((function(){B||(N.push({score:L,ticks:z}),N.sort((function(t,e){return e.score-t.score})),N.length=10,T(N),J(0))}),[B]);return Object(s.useEffect)((function(){if(E&&R){var e=L,i=function(){var i=t.current,s=i.getContext("2d");s.clearRect(0,0,i.width,i.height),s.strokeStyle="white",s.fillStyle="white",s.lineCap="round",s.lineWidth=4;var n=E.cannon;R.render(i),n.render(i),E.render(i),I.draw&&!r&&(s.beginPath(),s.arc(I.vec.x,I.vec.y,5,0,2*Math.PI),s.fill()),R.particles.forEach((function(t){R.calculateCollsision(E,(function(){j(R.count()),E.alive||(D(!1),h(!0))})),R.calculateCollsision(t)})),n.particles.forEach((function(t){R.calculateCollsision(t,(function(t){_(e+=t),j(R.count())}))}))};if(r)return i();var s=setInterval((function(){return i()}),1e3/60);return function(){return clearInterval(s)}}}),[r,B]),Object(u.jsxs)("div",{className:"overflow-hidden select-none",children:[Object(u.jsxs)("div",{className:"relative flex justify-evenly font-bold text-brand2-100",children:[Object(u.jsxs)("p",{className:"absolute md:left-1/3 top-2",children:["Highscore: ",L]}),Object(u.jsxs)("p",{className:"absolute md:right-1/3 top-8 md:top-2",children:["Asteroids: ",m," / ",O]}),Object(u.jsx)("div",{className:"absolute right-4 md:right-12 top-2 md:top-2",children:Object(u.jsx)(y,{ticks:z,setTicks:J,pause:r})})]}),B?null:Object(u.jsx)(b,{scores:N,onRestart:function(){var e=t.current;E.velocity=new x(0,0),E.x=e.width/2,E.y=e.height/2,E.alive=!0,E.lives=3,R.reset(),j(0),_(0),J(0),D(!0),h(!1)}}),Object(u.jsx)("div",{className:"rounded-md",children:Object(u.jsx)("canvas",{style:{"touch-action":"none"},height:n[1],width:n[0],onMouseMove:l,onClick:function(t){return E.shoot()},onTouchMove:l,onTouchEnd:l,onTouchStart:l,onMouseLeave:function(t){return h(!0)},onMouseEnter:function(t){return h(!1)},ref:t,className:""})})]})};L.defaultProps={width:window.innerWidth,height:window.innerHeight-35};var _=L;var A=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("nav",{className:"py-1 fixed w-full top-0 z-50      border-b border-brand2-100 bg-dark-700   flex justify-center",children:Object(u.jsx)("button",{className:"py-1 hover:underline text-brand2-100  font-bold focus:outline-none",children:" Space Game "})}),Object(u.jsx)(_,{}),Object(u.jsx)(d,{})]})},F=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,25)).then((function(e){var i=e.getCLS,s=e.getFID,n=e.getFCP,a=e.getLCP,o=e.getTTFB;i(t),s(t),n(t),a(t),o(t)}))};o.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(A,{})}),document.getElementById("root")),F()}},[[24,1,2]]]);
//# sourceMappingURL=main.86951c66.chunk.js.map