"use strict";!function(h){jQuery.fn.flipCountDown=jQuery.fn.flipcountdown=function(s){var n={showHour:!0,showMinute:!0,showSecond:!0,am:!1,tzoneOffset:0,speedFlip:60,period:1e3,tick:function(){return new Date},autoUpdate:!0,size:"md"},r={lg:77,md:52,sm:35,xs:24},e=function(a){var s=h('<div class="xdsoft_flipcountdown"></div>'),p=h('<div class="xdsoft_clearex"></div>'),d=h.extend({},n),t=0,f=function t(s,e,a,n){n<1||i(s,-(6*e*r[d.size]+1),1,a,function(){t(s,e+a,a,n-1)},n)},i=function t(s,e,a,n,i,o){e<=60*-r[d.size]&&(e=-1),s.css("background-position","0px "+e+"px"),a<=6?setTimeout(function(){t(s,e-n*r[d.size],++a,n,i,o)},parseInt(d.speedFlip/o)):i()},l=[],e=function(){var t="1",s=[];if(d.tick&&(t=d.tick instanceof Function?d.tick.call(a,0):d.tick),void 0!==t){switch(t.constructor){case Date:var e=(t.getHours()+d.tzoneOffset)%(d.am?12:24);d.showHour&&(s.push(parseInt(e/10)),s.push(e%10)),d.showHour&&(d.showMinute||d.showSecond)&&s.push(":"),d.showMinute&&(s.push(parseInt(t.getMinutes()/10)),s.push(t.getMinutes()%10)),d.showMinute&&d.showSecond&&s.push(":"),d.showSecond&&(s.push(parseInt(t.getSeconds()/10)),s.push(t.getSeconds()%10));break;case String:s=t.replace(/[^0-9\:\.\s]/g,"").split("");break;case Number:s=t.toString().split("")}!function(t){if(!(t instanceof Array&&t.length))return;for(var s=0,e=t.length;s<e;s++)if(l[s]||(l[s]=h('<div class="xdsoft_digit"></div>'),p.before(l[s])),l[s].data("value")!=t[s]){if(c=l[s].data("value"),u=t[s],!c||!u||c!=u&&!/^[0-9]+$/.test(c+""+u)&&!/^[:.\s]+$/.test(c+""+u))switch(l[s].removeClass("xdsoft_separator").removeClass("xdsoft_dot"),t[s]){case":":l[s].addClass("xdsoft_separator");break;case".":l[s].addClass("xdsoft_dot");break;case" ":l[s].addClass("xdsoft_space")}if(!isNaN(t[s])){var a=parseInt(l[s].data("value")),n=parseInt(l[s].data("i")),i=parseInt(t[s]);(isNaN(a)||s!=n)&&(a=i-1<0?9:i-1),o=l[s],f(o,d=a,(r=i)<d&&(9!=d||0!=r)?-1:1,9!=d||0!=r?Math.abs(d-r):1)}l[s].data("value",t[s]),l[s].data("i",s)}var o,d,r,c,u;if(l.length>t.length){for(;s<l.length;s++)l[s][0].parentNode.removeChild(l[s][0]),delete l[s];l.splice(t.length)}}(s)}};s.append(p).on("xdinit.xdsoft",function(){clearInterval(t),d.autoUpdate&&(t=setInterval(e,d.period)),e()}),a.data("setOptions",function(t){d=h.extend({},d,t),r[d.size]||(d.size="lg"),s.addClass("xdsoft_size_"+d.size).trigger("xdinit.xdsoft")}),a.append(s)};return this.each(function(){var t=h(this);t.data("setOptions")||(t.addClass("xdsoft"),e(t)),t.data("setOptions")&&h.isFunction(t.data("setOptions"))&&t.data("setOptions")(s)})}}(jQuery);