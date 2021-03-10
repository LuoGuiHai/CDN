"use strict";var TWEEN=TWEEN||function(){var u=[];return{REVISION:"6",getAll:function(){return u},removeAll:function(){u=[]},add:function(n){u.push(n)},remove:function(n){var t=u.indexOf(n);-1!==t&&u.splice(t,1)},update:function(n){var t=0,r=u.length;for(n=void 0!==n?n:Date.now();t<r;)u[t].update(n)?t++:(u.splice(t,1),r--)}}}();TWEEN.Tween=function(n){var a=n,e={},c={},f=1e3,r=0,h=null,l=TWEEN.Easing.Linear.None,s=TWEEN.Interpolation.Linear,E=null,I=null,M=null;this.to=function(n,t){return null!==t&&(f=t),c=n,this},this.start=function(n){for(var t in TWEEN.add(this),h=void 0!==n?n:Date.now(),h+=r,c)if(null!==a[t]){if(c[t]instanceof Array){if(0===c[t].length)continue;c[t]=[a[t]].concat(c[t])}e[t]=a[t]}return this},this.stop=function(){return TWEEN.remove(this),this},this.delay=function(n){return r=n,this},this.easing=function(n){return l=n,this},this.interpolation=function(n){return s=n,this},this.chain=function(n){return E=n,this},this.onUpdate=function(n){return I=n,this},this.onComplete=function(n){return M=n,this},this.update=function(n){if(n<h)return!0;var t=(n-h)/f,r=l(t=1<t?1:t);for(var u in e){var i=e[u],o=c[u];o instanceof Array?a[u]=s(o,r):a[u]=i+(o-i)*r}return null!==I&&I.call(a,r),1!=t||(null!==M&&M.call(a),null!==E&&E.start(),!1)}},TWEEN.Easing={Linear:{None:function(n){return n}},Quadratic:{In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}},Cubic:{In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}},Quartic:{In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}},Quintic:{In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}},Sinusoidal:{In:function(n){return 1-Math.cos(n*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return.5*(1-Math.cos(Math.PI*n))}},Exponential:{In:function(n){return 0===n?0:Math.pow(1024,n-1)},Out:function(n){return 1===n?1:1-Math.pow(2,-10*n)},InOut:function(n){return 0===n?0:1===n?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(2-Math.pow(2,-10*(n-1)))}},Circular:{In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}},Elastic:{In:function(n){var t,r=.1;return 0===n?0:1===n?1:(t=!r||r<1?(r=1,.1):.4*Math.asin(1/r)/(2*Math.PI),-r*Math.pow(2,10*(n-=1))*Math.sin((n-t)*(2*Math.PI)/.4))},Out:function(n){var t,r=.1;return 0===n?0:1===n?1:(t=!r||r<1?(r=1,.1):.4*Math.asin(1/r)/(2*Math.PI),r*Math.pow(2,-10*n)*Math.sin((n-t)*(2*Math.PI)/.4)+1)},InOut:function(n){var t,r=.1;return 0===n?0:1===n?1:(t=!r||r<1?(r=1,.1):.4*Math.asin(1/r)/(2*Math.PI),(n*=2)<1?r*Math.pow(2,10*(n-=1))*Math.sin((n-t)*(2*Math.PI)/.4)*-.5:r*Math.pow(2,-10*(n-=1))*Math.sin((n-t)*(2*Math.PI)/.4)*.5+1)}},Back:{In:function(n){return n*n*(2.70158*n-1.70158)},Out:function(n){return--n*n*(2.70158*n+1.70158)+1},InOut:function(n){var t=2.5949095;return(n*=2)<1?n*n*((t+1)*n-t)*.5:.5*((n-=2)*n*((t+1)*n+t)+2)}},Bounce:{In:function(n){return 1-TWEEN.Easing.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?.5*TWEEN.Easing.Bounce.In(2*n):.5*TWEEN.Easing.Bounce.Out(2*n-1)+.5}}},TWEEN.Interpolation={Linear:function(n,t){var r=n.length-1,u=r*t,i=Math.floor(u),o=TWEEN.Interpolation.Utils.Linear;return t<0?o(n[0],n[1],u):1<t?o(n[r],n[r-1],r-u):o(n[i],n[r<i+1?r:i+1],u-i)},Bezier:function(n,t){var r,u=0,i=n.length-1,o=Math.pow,a=TWEEN.Interpolation.Utils.Bernstein;for(r=0;r<=i;r++)u+=o(1-t,i-r)*o(t,r)*n[r]*a(i,r);return u},CatmullRom:function(n,t){var r=n.length-1,u=r*t,i=Math.floor(u),o=TWEEN.Interpolation.Utils.CatmullRom;return n[0]===n[r]?(t<0&&(i=Math.floor(u=r*(1+t))),o(n[(i-1+r)%r],n[i],n[(i+1)%r],n[(i+2)%r],u-i)):t<0?n[0]-(o(n[0],n[0],n[1],n[1],-u)-n[0]):1<t?n[r]-(o(n[r],n[r],n[r-1],n[r-1],u-r)-n[r]):o(n[i?i-1:0],n[i],n[r<i+1?r:i+1],n[r<i+2?r:i+2],u-i)},Utils:{Linear:function(n,t,r){return(t-n)*r+n},Bernstein:function(n,t){var r=TWEEN.Interpolation.Utils.Factorial;return r(n)/r(t)/r(n-t)},Factorial:function(){var u=[1];return function(n){var t,r=1;if(u[n])return u[n];for(t=n;1<t;t--)r*=t;return u[n]=r}}(),CatmullRom:function(n,t,r,u,i){var o=.5*(r-n),a=.5*(u-t),e=i*i;return(2*t-2*r+o+a)*(i*e)+(-3*t+3*r-2*o-a)*e+o*i+t}}};