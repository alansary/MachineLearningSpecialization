(function(){var h=this,n=function(a){return"string"==typeof a};var u=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a};var aa=u("0.20"),ga=u("0.01");var ha=/^true$/.test("false")?!0:!1;var ia=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(n(a))return n(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ja=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=n(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];b.call(c,l,k,a)&&(e[f++]=l)}return e},ka=Array.prototype.map?
function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=n(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},la=function(a){return Array.prototype.concat.apply([],arguments)};var v=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};var y=function(a){y[" "](a);return a};y[" "]=function(){};var A=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});h.addEventListener("test",null,b)}catch(c){}return a})();var B=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1},F=/#|$/,G=function(a,b){var c=a.search(F),d=B(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))},ma=/[?&]($|#)/;var na=function(){this.h={};this.a={};for(var a=[2,3],b=0,c=a.length;b<c;++b)this.a[a[b]]=""},H=function(){try{var a=h.top.location.hash;if(a){var b=a.match(/\bdeid=([\d,]+)/);return b&&b[1]||""}}catch(c){}return""},J=function(a,b,c){var d=I;if(c?d.a.hasOwnProperty(c)&&""==d.a[c]:1){var e;if(e=(e=H().match(new RegExp("\\b("+a.join("|")+")\\b")))&&e[0]||null)a=e;else a:{if(!(1E-4>Math.random())&&(e=Math.random(),e<b)){try{var f=new Uint32Array(1);h.crypto.getRandomValues(f);e=f[0]/65536/65536}catch(g){e=
Math.random()}a=a[Math.floor(e*a.length)];break a}a=null}a&&""!=a&&(c?d.a.hasOwnProperty(c)&&(d.a[c]=a):d.h[a]=!0)}},K=function(a){var b=I;return b.a.hasOwnProperty(a)?b.a[a]:""},oa=function(){var a=I,b=[];A(a.h,function(a,d){b.push(d)});A(a.a,function(a){""!=a&&b.push(a)});return b};var L=null,Q=null;var R="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_remarketing_only google_remarketing_for_search google_conversion_items google_conversion_merchant_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_conversion_page_url google_conversion_referrer_url".split(" "),
S=function(a){return null!=a?encodeURIComponent(a.toString()):""},T=function(a){return null!=a?a.toString().substring(0,512):""},U=function(a,b){b=S(b);return""!=b&&(a=S(a),""!=a)?"&".concat(a,"=",b):""},V=function(a){var b=typeof a;return null==a||"object"==b||"function"==b?null:String(a).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")},pa=function(a){var b;if((a=a.google_custom_params)&&"object"==typeof a&&"function"!=typeof a.join){var c=[];for(b in a)if(Object.prototype.hasOwnProperty.call(a,
b)){var d=a[b];if(d&&"function"==typeof d.join){for(var e=[],f=0;f<d.length;++f){var g=V(d[f]);null!=g&&e.push(g)}d=e.length?e.join(","):null}else d=V(d);(e=V(b))&&null!=d&&c.push(e+"="+d)}b=c.join(";")}else b="";return""==b?"":"&".concat("data=",encodeURIComponent(b))};function W(a){return"number"!=typeof a&&"string"!=typeof a?"":S(a.toString())}
var qa=function(a){if(!a)return"";a=a.google_conversion_items;if(!a)return"";for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=[];e&&(f.push(W(e.value)),f.push(W(e.quantity)),f.push(W(e.item_id)),f.push(W(e.adwords_grouping)),f.push(W(e.sku)),b.push("("+f.join("*")+")"))}return 0<b.length?"&item="+b.join(""):""},ra=function(a,b,c){var d=[];if(a){var e=a.screen;e&&(d.push(U("u_h",e.height)),d.push(U("u_w",e.width)),d.push(U("u_ah",e.availHeight)),d.push(U("u_aw",e.availWidth)),d.push(U("u_cd",e.colorDepth)));
a.history&&d.push(U("u_his",a.history.length))}c&&"function"==typeof c.getTimezoneOffset&&d.push(U("u_tz",-c.getTimezoneOffset()));b&&("function"==typeof b.javaEnabled&&d.push(U("u_java",b.javaEnabled())),b.plugins&&d.push(U("u_nplug",b.plugins.length)),b.mimeTypes&&d.push(U("u_nmime",b.mimeTypes.length)));return d.join("")};
function sa(a){a=a?a.title:"";if(void 0==a||""==a)return"";var b=function(a){try{return decodeURIComponent(a),!0}catch(e){return!1}};a=encodeURIComponent(a);for(var c=256;!b(a.substr(0,c));)c--;return"&tiba="+a.substr(0,c)}
var ta=function(a,b,c,d){var e="";if(b){var f;if(a.top==a)f=0;else{var g=a.location.ancestorOrigins;if(g)f=g[g.length-1]==a.location.origin?1:2;else{g=a.top;try{var k;if(k=!!g&&null!=g.location.href)c:{try{y(g.foo);k=!0;break c}catch(l){}k=!1}f=k}catch(l){f=!1}f=f?1:2}}a=c?c:1==f?a.top.location.href:a.location.href;e+=U("frm",f);e+=U("url",T(a));e+=U("ref",T(d||b.referrer))}return e},X=function(a,b){return!(ha||b&&ua.test(navigator.userAgent))||a&&a.location&&a.location.protocol&&"https:"==a.location.protocol.toString().toLowerCase()?
"https:":"http:"},Y={g:{c:"27391101",b:"27391102"},f:{c:"376635470",b:"376635471"}},I=null,va=function(){var a=la.apply([],ka(v(Y),function(a){return v(a)},void 0)),b=ja(H().split(","),function(b){return""!=b&&!(0<=ia(a,b))});return 0<b.length?"&debug_experiment_id="+b.join(","):""},ua=/Android ([01]\.|2\.[01])/i,Z=function(a,b){var c=b.createElement("iframe");c.style.display="none";c.src=X(a,!1)+"//bid.g.doubleclick.net/xbbe/pixel?d=KAE";b.body.appendChild(c)};function wa(){return new Image}
function xa(a,b,c,d){if((I?K(3):"")==Y.g.b)try{var e;a:if(3!=G(c,"fmt"))e=!1;else{if(d){var f=G(c,"random"),g=G(c,"label");if(!f||!g){e=!1;break a}var k;for(var l=decodeURIComponent(g.replace(/\+/g," "))+":"+decodeURIComponent(f.replace(/\+/g," ")),f=[],p=g=0;p<l.length;p++){for(var m=l.charCodeAt(p);255<m;)f[g++]=m&255,m>>=8;f[g++]=m}if(!L)for(L={},Q={},l=0;65>l;l++)L[l]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(l),Q[l]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(l);
l=Q;m=[];for(g=0;g<f.length;g+=3){var t=f[g],z=g+1<f.length,q=z?f[g+1]:0,w=g+2<f.length,C=w?f[g+2]:0,p=t>>2,ba=(t&3)<<4|q>>4,ca=(q&15)<<2|C>>6,da=C&63;w||(da=64,z||(ca=64));m.push(l[p],l[ba],l[ca],l[da])}var M=m.join("").replace(/[.]*$/,""),D,E=a.GooglebQhCsO;E||(E={},a.GooglebQhCsO=E);D=E;D[M]?k=!1:(D[M]=[],D[M][0]=d,k=!0);if(!k){e=!1;break a}}var N=c.search(F);a=0;var O;for(d=[];0<=(O=B(c,a,"fmt",N));)d.push(c.substring(a,O)),a=Math.min(c.indexOf("&",O)+1||N,N);d.push(c.substr(a));var r=[d.join("").replace(ma,
"$1"),"&","fmt"];r.push("=",encodeURIComponent("4"));if(r[1]){var x=r[0],P=x.indexOf("#");0<=P&&(r.push(x.substr(P)),r[0]=x=x.substr(0,P));var ea=x.indexOf("?");0>ea?r[1]="?":ea==x.length-1&&(r[1]=void 0)}var fa=b.createElement("script");fa.src=r.join("");b.getElementsByTagName("script")[0].parentElement.appendChild(fa);e=!0}return e}catch(Da){}return!1}
var ya=function(a,b,c,d,e,f){var g=c.opt_image_generator&&c.opt_image_generator.call,k;e&&c.onload_callback&&c.onload_callback.call?k=c.onload_callback:k=function(){};d+=U("async","1");!g&&f&&xa(a,b,d,k)||(a=wa,g&&(a=c.opt_image_generator),c=a(),c.src=d,c.onload=k)},za=function(a,b){for(var c=document.createElement("iframe"),d=[],e=[],f=0;f<b.google_conversion_items.length;f++){var g=b.google_conversion_items[f];g&&g.quantity&&g.sku&&(d.push(g.sku),e.push(g.quantity))}a=X(a,!1)+"//www.google.com/ads/mrc";
c.src=a+"?sku="+d.join(",")+"&qty="+e.join(",")+"&oid="+b.google_conversion_order_id+"&mcid="+b.google_conversion_merchant_id;c.style.width="1px";c.style.height="1px";c.style.display="none";return c},Aa=function(a,b,c){var d=function(){c.documentElement.appendChild(za(a,b))};"complete"===c.readyState?d():a.addEventListener?a.addEventListener("load",d):a.attachEvent("onload",d)},Ba=function(a,b){(I?K(2):"")==Y.f.b&&("complete"===b.readyState?Z(a,b):a.addEventListener?a.addEventListener("load",function(){Z(a,
b)}):a.attachEvent("onload",function(){Z(a,b)}))},Ca=function(a,b){for(var c={},d=function(d){c[d]=b&&null!=b[d]?b[d]:a[d]},e=0;e<R.length;e++)d(R[e]);d("onload_callback");return c};window.google_trackConversion=function(a){var b=window,c=navigator,d=document;a=Ca(b,a);a.google_conversion_format=3;var e=!1;if(a&&3==a.google_conversion_format){try{var f;"landing"==a.google_conversion_type||!a.google_conversion_id||a.google_remarketing_only&&a.google_disable_viewthrough?f=!1:(a.google_conversion_date=new Date,a.google_conversion_time=a.google_conversion_date.getTime(),a.google_conversion_snippets="number"==typeof a.google_conversion_snippets&&0<a.google_conversion_snippets?a.google_conversion_snippets+
1:1,"number"!=typeof a.google_conversion_first_time&&(a.google_conversion_first_time=a.google_conversion_time),a.google_conversion_js_version="8",0!=a.google_conversion_format&&1!=a.google_conversion_format&&2!=a.google_conversion_format&&3!=a.google_conversion_format&&(a.google_conversion_format=1),!1!==a.google_enable_display_cookie_match&&(a.google_enable_display_cookie_match=!0),I=new na,f=!0);if(f){a.google_remarketing_only&&a.google_enable_display_cookie_match&&I&&J([Y.f.c,Y.f.b],aa,2);if(!a.google_remarketing_only&&
!a.google_conversion_domain){var g=Y.g;I&&J([g.c,g.b],ga,3)}f="/?";"landing"==a.google_conversion_type&&(f="/extclk?");var k,l=[a.google_remarketing_only?"viewthroughconversion/":"conversion/",S(a.google_conversion_id),f,"random=",S(a.google_conversion_time)].join(""),p=a.google_remarketing_only?"googleads.g.doubleclick.net":a.google_conversion_domain||"www.googleadservices.com";k=X(b,/www[.]googleadservices[.]com/i.test(p))+"//"+p+"/pagead/"+l;var m,t;b:{var z=a.google_conversion_language;if(null!=
z){var q=z.toString();if(2==q.length){t=U("hl",q);break b}if(5==q.length){t=U("hl",q.substring(0,2))+U("gl",q.substring(3,5));break b}}t=""}m=[U("cv",a.google_conversion_js_version),U("fst",a.google_conversion_first_time),U("num",a.google_conversion_snippets),U("fmt",a.google_conversion_format),U("value",a.google_conversion_value),U("currency_code",a.google_conversion_currency),U("label",a.google_conversion_label),U("oid",a.google_conversion_order_id),U("bg",a.google_conversion_color),t,U("guid",
"ON"),U("disvt",a.google_disable_viewthrough),U("eid",oa().join()),qa(a),ra(b,c,a.google_conversion_date),pa(a),ta(b,d,a.google_conversion_page_url,a.google_conversion_referrer_url),a.google_remarketing_for_search&&!a.google_conversion_domain?"&srr=n":"",sa(d)].join("")+va();ya(b,d,a,k+m,!0,!0);if(a.google_remarketing_for_search&&!a.google_conversion_domain){var w,C=[S(a.google_conversion_id),"/?random=",Math.floor(1E9*Math.random())].join("");w=X(b,!1)+"//www.google.com/ads/user-lists/"+C;w+=[U("label",
a.google_conversion_label),U("fmt","3"),ta(b,d,a.google_conversion_page_url,a.google_conversion_referrer_url)].join("");ya(b,d,a,w,!1,!1)}a.google_remarketing_only&&a.google_enable_display_cookie_match&&Ba(b,d);e=!0}a.google_conversion_merchant_id&&a.google_conversion_order_id&&a.google_conversion_items&&(Aa(b,a,d),e=!0)}catch(ba){}b=e}else b=!1;return b};}).call(this);