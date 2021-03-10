"use strict";function loader(){$(".page-loader-wrapper").fadeOut(800)}function loaderIn(){$(".page-loader-wrapper").addClass("pg-loader"),$(".page-loader-wrapper").fadeIn(200)}function mainBg(){var a=$(".single-image .background").attr("data-image");if(!$("body").hasClass("single-image"))return!1;$(".single-image .background").css({"background-image":"url("+a+")"})}function owlCarouselWidget(){if(getvar=function(a,t,e){return"n"==e?a?parseInt(a,10):t:"b"==e?"true"==a||"false"!=a&&t:"s"==e?"false"!=a&&(a||t):void 0},0<$(".carousel-widget").length){var n=0;$(".carousel-widget").each(function(){var a="owl"+ ++n;$(this).css({opacity:0}),$(this).attr("id",a),$(this).addClass(a);var t=$("."+a+" .carousel .owl-carousel"),e={center:getvar($(this).attr("data-center"),!1,"b"),mouseDrag:getvar($(this).attr("data-mouseDrag"),!0,"b"),touchDrag:getvar($(this).attr("data-touchDrag"),!0,"b"),stagePadding:getvar($(this).attr("data-stpd"),0,"n"),items:getvar($(this).attr("data-items"),5,"n"),margin:getvar($(this).attr("data-margin"),0,"n"),nav:getvar($(this).attr("data-nav"),!1,"b"),dots:getvar($(this).attr("data-pager"),!1,"b"),slideby:getvar($(this).attr("data-slideby"),1,"n"),rbase:getvar($(this).attr("data-rbase"),$(this).parent(),"s"),res:$(this).attr("data-itemrange")?function(a){if("string"!=typeof a||"false"==a)return"false"===a&&{};var t=a.split("|"),n={};return $.each(t,function(a,t){var e=t.split(",");n[e[0]]={},n[e[0]]={items:parseInt(e[1],10)}}),n}($(this).attr("data-itemrange")):{0:{items:1},420:{items:2},600:{items:3},768:{items:3},980:{items:4}},animOut:getvar($(this).attr("data-out"),"fadeOut","s"),animIn:getvar($(this).attr("data-in"),"fadeIn","s"),autoplay:getvar($(this).attr("data-autoplay"),!1,"b"),autoplayTimeout:getvar($(this).attr("data-timeout"),3e3,"n"),autoplayHoverPause:getvar($(this).attr("data-hstop"),!0,"b"),loop:getvar($(this).attr("data-loop"),!1,"b"),video:getvar($(this).attr("data-video"),!1,"b"),autoWidth:getvar($(this).attr("data-awidth"),!1,"b"),autoHeight:getvar($(this).attr("data-hauto"),!0,"b")};$("."+a).animate({opacity:1},100,function(){t.owlCarousel({center:e.center,mouseDrag:e.mouseDrag,touchDrag:e.touchDrag,stagePadding:e.stagePadding,items:e.items,margin:e.margin,nav:e.nav,dots:e.dots,slideBy:e.slideby,navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],responsiveBaseElement:e.rbase,responsive:e.res,loop:e.loop,video:e.video,animateOut:e.animOut,animateIn:e.animIn,autoplay:e.autoplay,autoplayTimeout:e.autoplayTimeout,autoplayHoverPause:e.autoplayHoverPause,autoHeight:e.autoHeight,autoWidth:e.autoWidth,onInitialized:function(){t.animate({opacity:1},300)}}),$("."+a).find(".carousel-btn .prev").on("click",function(){t.trigger("prev.owl.carousel")}),$("."+a).find(".carousel-btn .next").on("click",function(){t.trigger("next.owl.carousel")})})})}}function countdownClock(){var a=parseInt($("#countdown_dashboard").attr("data-day"),10),t=parseInt($("#countdown_dashboard").attr("data-month"),10),e=parseInt($("#countdown_dashboard").attr("data-year"),10),n=parseInt($("#countdown_dashboard").attr("data-hr"),10),o=parseInt($("#countdown_dashboard").attr("data-min"),10),i=parseInt($("#countdown_dashboard").attr("data-sec"),10);$("#countdown_dashboard").countDown({targetDate:{day:a,month:t,year:e,hour:n,min:o,sec:i},omitWeeks:!0})}function notifyMeForm(){$("#notifyMe #submit").on("click",function(){$("#notifyMe").notifyMe(),$("#notifyMe .error-text").delay(2e3).fadeOut(2e3)})}function navigation(){function t(a){$(".nc-menu-container, .nc-overlay").toggleClass("visible-on",a),$("#main").toggleClass("nc-down-scale",a)}$("#nc-menu").mCustomScrollbar({theme:"minimal",axis:"y"}),$(".nc-menu-trigger").on("click",function(a){a.preventDefault(),t(!0)}),$(".nc-menu-close, .nc-overlay").on("click",function(a){a.preventDefault(),t(!1)}),$(".nc-menu li").on("click",function(a){t(!1),$(".nc-menu li").removeClass("nc-active"),$(this).addClass("nc-active")})}function pageTransation(){var a,n=$("#navigation .nav-link"),o=$("#ajax-page"),i=$("#home-page"),r=$("#home-page .ac"),s=$("#home-page .anim");n.on("click",function(){a=$(this).attr("data-page"),loaderIn(),$("html").hasClass("ie9")?"home.html"==a?$("#ajax-page .pg-wrp .anim").animate({opacity:0},800,function(){$("#ajax-page").hasClass("port-full")&&$("#ajax-page").removeClass("port-full"),s.animate({opacity:1},800)}):i.hasClass("active-home")?s.animate({opacity:0},800,function(){pageload(a,o),$("#ajax-page .pg-wrp .anim").animate({opacity:1},800)}):$("#ajax-page .pg-wrp .anim").animate({opacity:0},800,function(){o.html(""),pageload(a,o),$("#ajax-page .pg-wrp .anim").animate({opacity:1},800)}):"home.html"==a?($("#ajax-page .pg-wrp").addClass("fadeOut"),setTimeout(function(){$("#ajax-page").hasClass("port-full")&&$("#ajax-page").removeClass("port-full"),o.html(""),loader(),i.addClass("active-home"),r.addClass("fadeInUp"),0==o.find("#time").length&&"undefined"!=typeof e&&(e.doCountDown=function(){},t="")},800)):i.hasClass("active-home")?(i.addClass("fadeOut"),setTimeout(function(){i.removeClass("active-home"),i.removeClass("fadeOut"),r.removeClass("fadeInUp"),pageload(a,o)},800)):($("#ajax-page .pg-wrp").addClass("fadeOut"),setTimeout(function(){o.html(""),pageload(a,o)},800))})}function pageload(n,o){$.get(n,function(a){loader(),"pages/portfolio.html"==n||"pages/portfolio-1.html"==n||"pages/video-portfolio.html"==n?$("#ajax-page").addClass("port-full"):$("#ajax-page").removeClass("port-full"),o.html(a),o.addClass("active-page"),owlCarouselWidget(),0==o.find("#time").length&&"undefined"!=typeof e&&(e.doCountDown=function(){},t="")})}!function(a){a(window).load(function(){mainBg(),loader()}),a(document).ready(function(){navigation(),owlCarouselWidget(),pageTransation(),notifyMeForm()}),a(window).resize(function(){mainBg()})}(jQuery);