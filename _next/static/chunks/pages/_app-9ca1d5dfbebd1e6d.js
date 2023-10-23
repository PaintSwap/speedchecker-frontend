(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8417:function(t,s,p){"use strict";p.d(s,{Z:function(){return createCache}});var g=function(){function StyleSheet(t){var s=this;this._insertTag=function(t){var p;p=0===s.tags.length?s.insertionPoint?s.insertionPoint.nextSibling:s.prepend?s.container.firstChild:s.before:s.tags[s.tags.length-1].nextSibling,s.container.insertBefore(t,p),s.tags.push(t)},this.isSpeedy=void 0===t.speedy||t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var t=StyleSheet.prototype;return t.hydrate=function(t){t.forEach(this._insertTag)},t.insert=function(t){if(this.ctr%(this.isSpeedy?65e3:1)==0){var s;this._insertTag(((s=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&s.setAttribute("nonce",this.nonce),s.appendChild(document.createTextNode("")),s.setAttribute("data-s",""),s))}var p=this.tags[this.tags.length-1];if(this.isSpeedy){var g=function(t){if(t.sheet)return t.sheet;for(var s=0;s<document.styleSheets.length;s++)if(document.styleSheets[s].ownerNode===t)return document.styleSheets[s]}(p);try{g.insertRule(t,g.cssRules.length)}catch(t){}}else p.appendChild(document.createTextNode(t));this.ctr++},t.flush=function(){this.tags.forEach(function(t){return t.parentNode&&t.parentNode.removeChild(t)}),this.tags=[],this.ctr=0},StyleSheet}(),m=Math.abs,v=String.fromCharCode,_=Object.assign;function Utility_replace(t,s,p){return t.replace(s,p)}function indexof(t,s){return t.indexOf(s)}function Utility_charat(t,s){return 0|t.charCodeAt(s)}function Utility_substr(t,s,p){return t.slice(s,p)}function Utility_strlen(t){return t.length}function Utility_append(t,s){return s.push(t),t}var x=1,T=1,F=0,W=0,Z=0,Q="";function node(t,s,p,g,m,v,_){return{value:t,root:s,parent:p,type:g,props:m,children:v,line:x,column:T,length:_,return:""}}function Tokenizer_copy(t,s){return _(node("",null,null,"",null,null,0),t,{length:-t.length},s)}function next(){return Z=W<F?Utility_charat(Q,W++):0,T++,10===Z&&(T=1,x++),Z}function peek(){return Utility_charat(Q,W)}function token(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function alloc(t){return x=T=1,F=Utility_strlen(Q=t),W=0,[]}function delimit(t){var s,p;return(s=W-1,p=function delimiter(t){for(;next();)switch(Z){case t:return W;case 34:case 39:34!==t&&39!==t&&delimiter(Z);break;case 40:41===t&&delimiter(t);break;case 92:next()}return W}(91===t?t+2:40===t?t+1:t),Utility_substr(Q,s,p)).trim()}var Y="-ms-",X="-moz-",J="-webkit-",en="comm",ei="rule",eo="decl",ea="@keyframes";function Serializer_serialize(t,s){for(var p="",g=t.length,m=0;m<g;m++)p+=s(t[m],m,t,s)||"";return p}function stringify(t,s,p,g){switch(t.type){case"@layer":if(t.children.length)break;case"@import":case eo:return t.return=t.return||t.value;case en:return"";case ea:return t.return=t.value+"{"+Serializer_serialize(t.children,g)+"}";case ei:t.value=t.props.join(",")}return Utility_strlen(p=Serializer_serialize(t.children,g))?t.return=t.value+"{"+p+"}":""}function ruleset(t,s,p,g,v,_,x,T,F,W,Z){for(var Q=v-1,Y=0===v?_:[""],X=Y.length,J=0,en=0,eo=0;J<g;++J)for(var ea=0,es=Utility_substr(t,Q+1,Q=m(en=x[J])),el=t;ea<X;++ea)(el=(en>0?Y[ea]+" "+es:Utility_replace(es,/&\f/g,Y[ea])).trim())&&(F[eo++]=el);return node(t,s,p,0===v?ei:T,F,W,Z)}function declaration(t,s,p,g){return node(t,s,p,eo,Utility_substr(t,0,g),Utility_substr(t,g+1,-1),g)}var identifierWithPointTracking=function(t,s,p){for(var g=0,m=0;g=m,m=peek(),38===g&&12===m&&(s[p]=1),!token(m);)next();return Utility_substr(Q,t,W)},toRules=function(t,s){var p=-1,g=44;do switch(token(g)){case 0:38===g&&12===peek()&&(s[p]=1),t[p]+=identifierWithPointTracking(W-1,s,p);break;case 2:t[p]+=delimit(g);break;case 4:if(44===g){t[++p]=58===peek()?"&\f":"",s[p]=t[p].length;break}default:t[p]+=v(g)}while(g=next());return t},getRules=function(t,s){var p;return p=toRules(alloc(t),s),Q="",p},es=new WeakMap,compat=function(t){if("rule"===t.type&&t.parent&&!(t.length<1)){for(var s=t.value,p=t.parent,g=t.column===p.column&&t.line===p.line;"rule"!==p.type;)if(!(p=p.parent))return;if((1!==t.props.length||58===s.charCodeAt(0)||es.get(p))&&!g){es.set(t,!0);for(var m=[],v=getRules(s,m),_=p.props,x=0,T=0;x<v.length;x++)for(var F=0;F<_.length;F++,T++)t.props[T]=m[x]?v[x].replace(/&\f/g,_[F]):_[F]+" "+v[x]}}},removeLabel=function(t){if("decl"===t.type){var s=t.value;108===s.charCodeAt(0)&&98===s.charCodeAt(2)&&(t.return="",t.value="")}},el=[function(t,s,p,g){if(t.length>-1&&!t.return)switch(t.type){case eo:t.return=function emotion_cache_browser_esm_prefix(t,s){switch(45^Utility_charat(t,0)?(((s<<2^Utility_charat(t,0))<<2^Utility_charat(t,1))<<2^Utility_charat(t,2))<<2^Utility_charat(t,3):0){case 5103:return J+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return J+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return J+t+X+t+Y+t+t;case 6828:case 4268:return J+t+Y+t+t;case 6165:return J+t+Y+"flex-"+t+t;case 5187:return J+t+Utility_replace(t,/(\w+).+(:[^]+)/,J+"box-$1$2"+Y+"flex-$1$2")+t;case 5443:return J+t+Y+"flex-item-"+Utility_replace(t,/flex-|-self/,"")+t;case 4675:return J+t+Y+"flex-line-pack"+Utility_replace(t,/align-content|flex-|-self/,"")+t;case 5548:return J+t+Y+Utility_replace(t,"shrink","negative")+t;case 5292:return J+t+Y+Utility_replace(t,"basis","preferred-size")+t;case 6060:return J+"box-"+Utility_replace(t,"-grow","")+J+t+Y+Utility_replace(t,"grow","positive")+t;case 4554:return J+Utility_replace(t,/([^-])(transform)/g,"$1"+J+"$2")+t;case 6187:return Utility_replace(Utility_replace(Utility_replace(t,/(zoom-|grab)/,J+"$1"),/(image-set)/,J+"$1"),t,"")+t;case 5495:case 3959:return Utility_replace(t,/(image-set\([^]*)/,J+"$1$`$1");case 4968:return Utility_replace(Utility_replace(t,/(.+:)(flex-)?(.*)/,J+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+J+t+t;case 4095:case 3583:case 4068:case 2532:return Utility_replace(t,/(.+)-inline(.+)/,J+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Utility_strlen(t)-1-s>6)switch(Utility_charat(t,s+1)){case 109:if(45!==Utility_charat(t,s+4))break;case 102:return Utility_replace(t,/(.+:)(.+)-([^]+)/,"$1"+J+"$2-$3$1"+X+(108==Utility_charat(t,s+3)?"$3":"$2-$3"))+t;case 115:return~indexof(t,"stretch")?emotion_cache_browser_esm_prefix(Utility_replace(t,"stretch","fill-available"),s)+t:t}break;case 4949:if(115!==Utility_charat(t,s+1))break;case 6444:switch(Utility_charat(t,Utility_strlen(t)-3-(~indexof(t,"!important")&&10))){case 107:return Utility_replace(t,":",":"+J)+t;case 101:return Utility_replace(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+J+(45===Utility_charat(t,14)?"inline-":"")+"box$3$1"+J+"$2$3$1"+Y+"$2box$3")+t}break;case 5936:switch(Utility_charat(t,s+11)){case 114:return J+t+Y+Utility_replace(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return J+t+Y+Utility_replace(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return J+t+Y+Utility_replace(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return J+t+Y+t+t}return t}(t.value,t.length);break;case ea:return Serializer_serialize([Tokenizer_copy(t,{value:Utility_replace(t.value,"@","@"+J)})],g);case ei:if(t.length)return t.props.map(function(s){var p;switch(p=s,(p=/(::plac\w+|:read-\w+)/.exec(p))?p[0]:p){case":read-only":case":read-write":return Serializer_serialize([Tokenizer_copy(t,{props:[Utility_replace(s,/:(read-\w+)/,":"+X+"$1")]})],g);case"::placeholder":return Serializer_serialize([Tokenizer_copy(t,{props:[Utility_replace(s,/:(plac\w+)/,":"+J+"input-$1")]}),Tokenizer_copy(t,{props:[Utility_replace(s,/:(plac\w+)/,":"+X+"$1")]}),Tokenizer_copy(t,{props:[Utility_replace(s,/:(plac\w+)/,Y+"input-$1")]})],g)}return""}).join("")}}],createCache=function(t){var s,p,m,_,F,Y=t.key;if("css"===Y){var X=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(X,function(t){-1!==t.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(t),t.setAttribute("data-s",""))})}var J=t.stylisPlugins||el,ei={},eo=[];_=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+Y+' "]'),function(t){for(var s=t.getAttribute("data-emotion").split(" "),p=1;p<s.length;p++)ei[s[p]]=!0;eo.push(t)});var ea=(p=(s=[compat,removeLabel].concat(J,[stringify,(m=function(t){F.insert(t)},function(t){!t.root&&(t=t.return)&&m(t)})])).length,function(t,g,m,v){for(var _="",x=0;x<p;x++)_+=s[x](t,g,m,v)||"";return _}),stylis=function(t){var s,p;return Serializer_serialize((p=function parse(t,s,p,g,m,_,F,Y,X){for(var J,ei=0,eo=0,ea=F,es=0,el=0,ec=0,eu=1,ed=1,eh=1,ef=0,ep="",eg=m,em=_,eb=g,ew=ep;ed;)switch(ec=ef,ef=next()){case 40:if(108!=ec&&58==Utility_charat(ew,ea-1)){-1!=indexof(ew+=Utility_replace(delimit(ef),"&","&\f"),"&\f")&&(eh=-1);break}case 34:case 39:case 91:ew+=delimit(ef);break;case 9:case 10:case 13:case 32:ew+=function(t){for(;Z=peek();)if(Z<33)next();else break;return token(t)>2||token(Z)>3?"":" "}(ec);break;case 92:ew+=function(t,s){for(var p;--s&&next()&&!(Z<48)&&!(Z>102)&&(!(Z>57)||!(Z<65))&&(!(Z>70)||!(Z<97)););return p=W+(s<6&&32==peek()&&32==next()),Utility_substr(Q,t,p)}(W-1,7);continue;case 47:switch(peek()){case 42:case 47:Utility_append(node(J=function(t,s){for(;next();)if(t+Z===57)break;else if(t+Z===84&&47===peek())break;return"/*"+Utility_substr(Q,s,W-1)+"*"+v(47===t?t:next())}(next(),W),s,p,en,v(Z),Utility_substr(J,2,-2),0),X);break;default:ew+="/"}break;case 123*eu:Y[ei++]=Utility_strlen(ew)*eh;case 125*eu:case 59:case 0:switch(ef){case 0:case 125:ed=0;case 59+eo:-1==eh&&(ew=Utility_replace(ew,/\f/g,"")),el>0&&Utility_strlen(ew)-ea&&Utility_append(el>32?declaration(ew+";",g,p,ea-1):declaration(Utility_replace(ew," ","")+";",g,p,ea-2),X);break;case 59:ew+=";";default:if(Utility_append(eb=ruleset(ew,s,p,ei,eo,m,Y,ep,eg=[],em=[],ea),_),123===ef){if(0===eo)parse(ew,s,eb,eb,eg,_,ea,Y,em);else switch(99===es&&110===Utility_charat(ew,3)?100:es){case 100:case 108:case 109:case 115:parse(t,eb,eb,g&&Utility_append(ruleset(t,eb,eb,0,0,m,Y,ep,m,eg=[],ea),em),m,em,ea,Y,g?eg:em);break;default:parse(ew,eb,eb,eb,[""],em,0,Y,em)}}}ei=eo=el=0,eu=eh=1,ep=ew="",ea=F;break;case 58:ea=1+Utility_strlen(ew),el=ec;default:if(eu<1){if(123==ef)--eu;else if(125==ef&&0==eu++&&125==(Z=W>0?Utility_charat(Q,--W):0,T--,10===Z&&(T=1,x--),Z))continue}switch(ew+=v(ef),ef*eu){case 38:eh=eo>0?1:(ew+="\f",-1);break;case 44:Y[ei++]=(Utility_strlen(ew)-1)*eh,eh=1;break;case 64:45===peek()&&(ew+=delimit(next())),es=peek(),eo=ea=Utility_strlen(ep=ew+=function(t){for(;!token(peek());)next();return Utility_substr(Q,t,W)}(W)),ef++;break;case 45:45===ec&&2==Utility_strlen(ew)&&(eu=0)}}return _}("",null,null,null,[""],s=alloc(s=t),0,[0],s),Q="",p),ea)},es={key:Y,sheet:new g({key:Y,container:_,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:ei,registered:{},insert:function(t,s,p,g){F=p,stylis(t?t+"{"+s.styles+"}":s.styles),g&&(es.inserted[s.name]=!0)}};return es.sheet.hydrate(eo),es}},45042:function(t,s,p){"use strict";function memoize(t){var s=Object.create(null);return function(p){return void 0===s[p]&&(s[p]=t(p)),s[p]}}p.d(s,{Z:function(){return memoize}})},75260:function(t,s,p){"use strict";p.d(s,{C:function(){return x},T:function(){return T},i:function(){return v},w:function(){return withEmotionCache}});var g=p(67294),m=p(8417);p(48137),p(27278);var v=!0,_=g.createContext("undefined"!=typeof HTMLElement?(0,m.Z)({key:"css"}):null),x=_.Provider,withEmotionCache=function(t){return(0,g.forwardRef)(function(s,p){return t(s,(0,g.useContext)(_),p)})};v||(withEmotionCache=function(t){return function(s){var p=(0,g.useContext)(_);return null===p?(p=(0,m.Z)({key:"css"}),g.createElement(_.Provider,{value:p},t(s,p))):t(s,p)}});var T=g.createContext({})},70917:function(t,s,p){"use strict";p.d(s,{F4:function(){return keyframes},iv:function(){return css},xB:function(){return T}});var g=p(75260),m=p(67294),v=p(70444),_=p(27278),x=p(48137);p(8417),p(8679);var T=(0,g.w)(function(t,s){var p=t.styles,T=(0,x.O)([p],void 0,m.useContext(g.T));if(!g.i){for(var F,W=T.name,Z=T.styles,Q=T.next;void 0!==Q;)W+=" "+Q.name,Z+=Q.styles,Q=Q.next;var Y=!0===s.compat,X=s.insert("",{name:W,styles:Z},s.sheet,Y);return Y?null:m.createElement("style",((F={})["data-emotion"]=s.key+"-global "+W,F.dangerouslySetInnerHTML={__html:X},F.nonce=s.sheet.nonce,F))}var J=m.useRef();return(0,_.j)(function(){var t=s.key+"-global",p=new s.sheet.constructor({key:t,nonce:s.sheet.nonce,container:s.sheet.container,speedy:s.sheet.isSpeedy}),g=!1,m=document.querySelector('style[data-emotion="'+t+" "+T.name+'"]');return s.sheet.tags.length&&(p.before=s.sheet.tags[0]),null!==m&&(g=!0,m.setAttribute("data-emotion",t),p.hydrate([m])),J.current=[p,g],function(){p.flush()}},[s]),(0,_.j)(function(){var t=J.current,p=t[0];if(t[1]){t[1]=!1;return}if(void 0!==T.next&&(0,v.My)(s,T.next,!0),p.tags.length){var g=p.tags[p.tags.length-1].nextElementSibling;p.before=g,p.flush()}s.insert("",T,p,!1)},[s,T.name]),null});function css(){for(var t=arguments.length,s=Array(t),p=0;p<t;p++)s[p]=arguments[p];return(0,x.O)(s)}var keyframes=function(){var t=css.apply(void 0,arguments),s="animation-"+t.name;return{name:s,styles:"@keyframes "+s+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},48137:function(t,s,p){"use strict";p.d(s,{O:function(){return serializeStyles}});var g,m={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},v=p(45042),_=/[A-Z]|^ms/g,x=/_EMO_([^_]+?)_([^]*?)_EMO_/g,isCustomProperty=function(t){return 45===t.charCodeAt(1)},isProcessableValue=function(t){return null!=t&&"boolean"!=typeof t},T=(0,v.Z)(function(t){return isCustomProperty(t)?t:t.replace(_,"-$&").toLowerCase()}),processStyleValue=function(t,s){switch(t){case"animation":case"animationName":if("string"==typeof s)return s.replace(x,function(t,s,p){return g={name:s,styles:p,next:g},s})}return 1===m[t]||isCustomProperty(t)||"number"!=typeof s||0===s?s:s+"px"};function handleInterpolation(t,s,p){if(null==p)return"";if(void 0!==p.__emotion_styles)return p;switch(typeof p){case"boolean":return"";case"object":if(1===p.anim)return g={name:p.name,styles:p.styles,next:g},p.name;if(void 0!==p.styles){var m=p.next;if(void 0!==m)for(;void 0!==m;)g={name:m.name,styles:m.styles,next:g},m=m.next;return p.styles+";"}return function(t,s,p){var g="";if(Array.isArray(p))for(var m=0;m<p.length;m++)g+=handleInterpolation(t,s,p[m])+";";else for(var v in p){var _=p[v];if("object"!=typeof _)null!=s&&void 0!==s[_]?g+=v+"{"+s[_]+"}":isProcessableValue(_)&&(g+=T(v)+":"+processStyleValue(v,_)+";");else if(Array.isArray(_)&&"string"==typeof _[0]&&(null==s||void 0===s[_[0]]))for(var x=0;x<_.length;x++)isProcessableValue(_[x])&&(g+=T(v)+":"+processStyleValue(v,_[x])+";");else{var F=handleInterpolation(t,s,_);switch(v){case"animation":case"animationName":g+=T(v)+":"+F+";";break;default:g+=v+"{"+F+"}"}}}return g}(t,s,p);case"function":if(void 0!==t){var v=g,_=p(t);return g=v,handleInterpolation(t,s,_)}}if(null==s)return p;var x=s[p];return void 0!==x?x:p}var F=/label:\s*([^\s;\n{]+)\s*(;|$)/g,serializeStyles=function(t,s,p){if(1===t.length&&"object"==typeof t[0]&&null!==t[0]&&void 0!==t[0].styles)return t[0];var m,v=!0,_="";g=void 0;var x=t[0];null==x||void 0===x.raw?(v=!1,_+=handleInterpolation(p,s,x)):_+=x[0];for(var T=1;T<t.length;T++)_+=handleInterpolation(p,s,t[T]),v&&(_+=x[T]);F.lastIndex=0;for(var W="";null!==(m=F.exec(_));)W+="-"+m[1];return{name:function(t){for(var s,p=0,g=0,m=t.length;m>=4;++g,m-=4)s=(65535&(s=255&t.charCodeAt(g)|(255&t.charCodeAt(++g))<<8|(255&t.charCodeAt(++g))<<16|(255&t.charCodeAt(++g))<<24))*1540483477+((s>>>16)*59797<<16),s^=s>>>24,p=(65535&s)*1540483477+((s>>>16)*59797<<16)^(65535&p)*1540483477+((p>>>16)*59797<<16);switch(m){case 3:p^=(255&t.charCodeAt(g+2))<<16;case 2:p^=(255&t.charCodeAt(g+1))<<8;case 1:p^=255&t.charCodeAt(g),p=(65535&p)*1540483477+((p>>>16)*59797<<16)}return p^=p>>>13,(((p=(65535&p)*1540483477+((p>>>16)*59797<<16))^p>>>15)>>>0).toString(36)}(_)+W,styles:_,next:g}}},27278:function(t,s,p){"use strict";p.d(s,{L:function(){return _},j:function(){return x}});var g,m=p(67294),v=!!(g||(g=p.t(m,2))).useInsertionEffect&&(g||(g=p.t(m,2))).useInsertionEffect,_=v||function(t){return t()},x=v||m.useLayoutEffect},70444:function(t,s,p){"use strict";function getRegisteredStyles(t,s,p){var g="";return p.split(" ").forEach(function(p){void 0!==t[p]?s.push(t[p]+";"):g+=p+" "}),g}p.d(s,{My:function(){return insertStyles},fp:function(){return getRegisteredStyles},hC:function(){return registerStyles}});var registerStyles=function(t,s,p){var g=t.key+"-"+s.name;!1===p&&void 0===t.registered[g]&&(t.registered[g]=s.styles)},insertStyles=function(t,s,p){registerStyles(t,s,p);var g=t.key+"-"+s.name;if(void 0===t.inserted[s.name]){var m=s;do t.insert(s===m?"."+g:"",m,t.sheet,!0),m=m.next;while(void 0!==m)}}},60265:function(t,s){"use strict";s.Z={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"}},44551:function(t,s,p){"use strict";p.d(s,{Z:function(){return styles_createTheme}});var g=p(87462),m=p(63366),v=p(71387),_=p(59766),x=p(66500),T=p(44920),F=p(86523),W=p(41796),Z={black:"#000",white:"#fff"},Q={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Y={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},X=p(60265),J={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},en={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},ei={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},eo={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};let ea=["mode","contrastThreshold","tonalOffset"],es={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Z.white,default:Z.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},el={text:{primary:Z.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Z.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function addLightOrDark(t,s,p,g){let m=g.light||g,v=g.dark||1.5*g;t[s]||(t.hasOwnProperty(p)?t[s]=t[p]:"light"===s?t.light=(0,W.$n)(t.main,m):"dark"===s&&(t.dark=(0,W._j)(t.main,v)))}let ec=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"],eu={textTransform:"uppercase"},ed='"Roboto", "Helvetica", "Arial", sans-serif';function createShadow(...t){return`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,0.2),${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,0.14),${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,0.12)`}let eh=["none",createShadow(0,2,1,-1,0,1,1,0,0,1,3,0),createShadow(0,3,1,-2,0,2,2,0,0,1,5,0),createShadow(0,3,3,-2,0,3,4,0,0,1,8,0),createShadow(0,2,4,-1,0,4,5,0,0,1,10,0),createShadow(0,3,5,-1,0,5,8,0,0,1,14,0),createShadow(0,3,5,-1,0,6,10,0,0,1,18,0),createShadow(0,4,5,-2,0,7,10,1,0,2,16,1),createShadow(0,5,5,-3,0,8,10,1,0,3,14,2),createShadow(0,5,6,-3,0,9,12,1,0,3,16,2),createShadow(0,6,6,-3,0,10,14,1,0,4,18,3),createShadow(0,6,7,-4,0,11,15,1,0,4,20,3),createShadow(0,7,8,-4,0,12,17,2,0,5,22,4),createShadow(0,7,8,-4,0,13,19,2,0,5,24,4),createShadow(0,7,9,-4,0,14,21,2,0,5,26,4),createShadow(0,8,9,-5,0,15,22,2,0,6,28,5),createShadow(0,8,10,-5,0,16,24,2,0,6,30,5),createShadow(0,8,11,-5,0,17,26,2,0,6,32,5),createShadow(0,9,11,-5,0,18,28,2,0,7,34,6),createShadow(0,9,12,-6,0,19,29,2,0,7,36,6),createShadow(0,10,13,-6,0,20,31,3,0,8,38,7),createShadow(0,10,13,-6,0,21,33,3,0,8,40,7),createShadow(0,10,14,-6,0,22,35,3,0,8,42,7),createShadow(0,11,14,-7,0,23,36,3,0,9,44,8),createShadow(0,11,15,-7,0,24,38,3,0,9,46,8)],ef=["duration","easing","delay"],ep={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},eg={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function formatMs(t){return`${Math.round(t)}ms`}function getAutoHeightDuration(t){if(!t)return 0;let s=t/36;return Math.round((4+15*s**.25+s/5)*10)}var em={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};let eb=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];var styles_createTheme=function(t={},...s){var p;let{mixins:ew={},palette:ey={},transitions:ev={},typography:eC={}}=t,e_=(0,m.Z)(t,eb);if(t.vars)throw Error((0,v.Z)(18));let ex=function(t){let{mode:s="light",contrastThreshold:p=3,tonalOffset:x=.2}=t,T=(0,m.Z)(t,ea),F=t.primary||function(t="light"){return"dark"===t?{main:en[200],light:en[50],dark:en[400]}:{main:en[700],light:en[400],dark:en[800]}}(s),ec=t.secondary||function(t="light"){return"dark"===t?{main:Y[200],light:Y[50],dark:Y[400]}:{main:Y[500],light:Y[300],dark:Y[700]}}(s),eu=t.error||function(t="light"){return"dark"===t?{main:X.Z[500],light:X.Z[300],dark:X.Z[700]}:{main:X.Z[700],light:X.Z[400],dark:X.Z[800]}}(s),ed=t.info||function(t="light"){return"dark"===t?{main:ei[400],light:ei[300],dark:ei[700]}:{main:ei[700],light:ei[500],dark:ei[900]}}(s),eh=t.success||function(t="light"){return"dark"===t?{main:eo[400],light:eo[300],dark:eo[700]}:{main:eo[800],light:eo[500],dark:eo[900]}}(s),ef=t.warning||function(t="light"){return"dark"===t?{main:J[400],light:J[300],dark:J[700]}:{main:"#ed6c02",light:J[500],dark:J[900]}}(s);function getContrastText(t){let s=(0,W.mi)(t,el.text.primary)>=p?el.text.primary:es.text.primary;return s}let augmentColor=({color:t,name:s,mainShade:p=500,lightShade:m=300,darkShade:_=700})=>{if(!(t=(0,g.Z)({},t)).main&&t[p]&&(t.main=t[p]),!t.hasOwnProperty("main"))throw Error((0,v.Z)(11,s?` (${s})`:"",p));if("string"!=typeof t.main)throw Error((0,v.Z)(12,s?` (${s})`:"",JSON.stringify(t.main)));return addLightOrDark(t,"light",m,x),addLightOrDark(t,"dark",_,x),t.contrastText||(t.contrastText=getContrastText(t.main)),t},ep=(0,_.Z)((0,g.Z)({common:(0,g.Z)({},Z),mode:s,primary:augmentColor({color:F,name:"primary"}),secondary:augmentColor({color:ec,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:augmentColor({color:eu,name:"error"}),warning:augmentColor({color:ef,name:"warning"}),info:augmentColor({color:ed,name:"info"}),success:augmentColor({color:eh,name:"success"}),grey:Q,contrastThreshold:p,getContrastText,augmentColor,tonalOffset:x},{dark:el,light:es}[s]),T);return ep}(ey),eE=(0,x.Z)(t),ek=(0,_.Z)(eE,{mixins:(p=eE.breakpoints,(0,g.Z)({toolbar:{minHeight:56,[p.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[p.up("sm")]:{minHeight:64}}},ew)),palette:ex,shadows:eh.slice(),typography:function(t,s){let p="function"==typeof s?s(t):s,{fontFamily:v=ed,fontSize:x=14,fontWeightLight:T=300,fontWeightRegular:F=400,fontWeightMedium:W=500,fontWeightBold:Z=700,htmlFontSize:Q=16,allVariants:Y,pxToRem:X}=p,J=(0,m.Z)(p,ec),en=x/14,ei=X||(t=>`${t/Q*en}rem`),buildVariant=(t,s,p,m,_)=>(0,g.Z)({fontFamily:v,fontWeight:t,fontSize:ei(s),lineHeight:p},v===ed?{letterSpacing:`${Math.round(1e5*(m/s))/1e5}em`}:{},_,Y),eo={h1:buildVariant(T,96,1.167,-1.5),h2:buildVariant(T,60,1.2,-.5),h3:buildVariant(F,48,1.167,0),h4:buildVariant(F,34,1.235,.25),h5:buildVariant(F,24,1.334,0),h6:buildVariant(W,20,1.6,.15),subtitle1:buildVariant(F,16,1.75,.15),subtitle2:buildVariant(W,14,1.57,.1),body1:buildVariant(F,16,1.5,.15),body2:buildVariant(F,14,1.43,.15),button:buildVariant(W,14,1.75,.4,eu),caption:buildVariant(F,12,1.66,.4),overline:buildVariant(F,12,2.66,1,eu),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return(0,_.Z)((0,g.Z)({htmlFontSize:Q,pxToRem:ei,fontFamily:v,fontSize:x,fontWeightLight:T,fontWeightRegular:F,fontWeightMedium:W,fontWeightBold:Z},eo),J,{clone:!1})}(ex,eC),transitions:function(t){let s=(0,g.Z)({},ep,t.easing),p=(0,g.Z)({},eg,t.duration);return(0,g.Z)({getAutoHeightDuration,create:(t=["all"],g={})=>{let{duration:v=p.standard,easing:_=s.easeInOut,delay:x=0}=g;return(0,m.Z)(g,ef),(Array.isArray(t)?t:[t]).map(t=>`${t} ${"string"==typeof v?v:formatMs(v)} ${_} ${"string"==typeof x?x:formatMs(x)}`).join(",")}},t,{easing:s,duration:p})}(ev),zIndex:(0,g.Z)({},em)});return ek=(0,_.Z)(ek,e_),(ek=s.reduce((t,s)=>(0,_.Z)(t,s),ek)).unstable_sxConfig=(0,g.Z)({},T.Z,null==e_?void 0:e_.unstable_sxConfig),ek.unstable_sx=function(t){return(0,F.Z)({sx:t,theme:this})},ek}},90247:function(t,s,p){"use strict";var g=p(44551);let m=(0,g.Z)();s.Z=m},10606:function(t,s){"use strict";s.Z="$$material"},27623:function(t,s,p){"use strict";p.d(s,{Z:function(){return useThemeProps_useThemeProps}});var g=p(47925),m=p(96682),v=p(90247),_=p(10606);function useThemeProps_useThemeProps({props:t,name:s}){return function({props:t,name:s,defaultTheme:p,themeId:v}){let _=(0,m.Z)(p);v&&(_=_[v]||_);let x=function(t){let{theme:s,name:p,props:m}=t;return s&&s.components&&s.components[p]&&s.components[p].defaultProps?(0,g.Z)(s.components[p].defaultProps,m):m}({theme:_,name:s,props:t});return x}({props:t,name:s,defaultTheme:v.Z,themeId:_.Z})}},95408:function(t,s,p){"use strict";p.d(s,{L7:function(){return removeUnusedBreakpoints},VO:function(){return g},W8:function(){return createEmptyBreakpointObject},k9:function(){return handleBreakpoints}});let g={xs:0,sm:600,md:900,lg:1200,xl:1536},m={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${g[t]}px)`};function handleBreakpoints(t,s,p){let v=t.theme||{};if(Array.isArray(s)){let t=v.breakpoints||m;return s.reduce((g,m,v)=>(g[t.up(t.keys[v])]=p(s[v]),g),{})}if("object"==typeof s){let t=v.breakpoints||m;return Object.keys(s).reduce((m,v)=>{if(-1!==Object.keys(t.values||g).indexOf(v)){let g=t.up(v);m[g]=p(s[v],v)}else m[v]=s[v];return m},{})}let _=p(s);return _}function createEmptyBreakpointObject(t={}){var s;let p=null==(s=t.keys)?void 0:s.reduce((s,p)=>{let g=t.up(p);return s[g]={},s},{});return p||{}}function removeUnusedBreakpoints(t,s){return t.reduce((t,s)=>{let p=t[s],g=!p||0===Object.keys(p).length;return g&&delete t[s],t},s)}},41796:function(t,s,p){"use strict";p.d(s,{$n:function(){return lighten},Fq:function(){return alpha},_j:function(){return darken},mi:function(){return getContrastRatio}});var g=p(71387);function clamp(t,s=0,p=1){return Math.min(Math.max(s,t),p)}function decomposeColor(t){let s;if(t.type)return t;if("#"===t.charAt(0))return decomposeColor(function(t){t=t.slice(1);let s=RegExp(`.{1,${t.length>=6?2:1}}`,"g"),p=t.match(s);return p&&1===p[0].length&&(p=p.map(t=>t+t)),p?`rgb${4===p.length?"a":""}(${p.map((t,s)=>s<3?parseInt(t,16):Math.round(parseInt(t,16)/255*1e3)/1e3).join(", ")})`:""}(t));let p=t.indexOf("("),m=t.substring(0,p);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(m))throw Error((0,g.Z)(9,t));let v=t.substring(p+1,t.length-1);if("color"===m){if(s=(v=v.split(" ")).shift(),4===v.length&&"/"===v[3].charAt(0)&&(v[3]=v[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(s))throw Error((0,g.Z)(10,s))}else v=v.split(",");return{type:m,values:v=v.map(t=>parseFloat(t)),colorSpace:s}}function recomposeColor(t){let{type:s,colorSpace:p}=t,{values:g}=t;return -1!==s.indexOf("rgb")?g=g.map((t,s)=>s<3?parseInt(t,10):t):-1!==s.indexOf("hsl")&&(g[1]=`${g[1]}%`,g[2]=`${g[2]}%`),g=-1!==s.indexOf("color")?`${p} ${g.join(" ")}`:`${g.join(", ")}`,`${s}(${g})`}function getLuminance(t){let s="hsl"===(t=decomposeColor(t)).type||"hsla"===t.type?decomposeColor(function(t){t=decomposeColor(t);let{values:s}=t,p=s[0],g=s[1]/100,m=s[2]/100,v=g*Math.min(m,1-m),f=(t,s=(t+p/30)%12)=>m-v*Math.max(Math.min(s-3,9-s,1),-1),_="rgb",x=[Math.round(255*f(0)),Math.round(255*f(8)),Math.round(255*f(4))];return"hsla"===t.type&&(_+="a",x.push(s[3])),recomposeColor({type:_,values:x})}(t)).values:t.values;return Number((.2126*(s=s.map(s=>("color"!==t.type&&(s/=255),s<=.03928?s/12.92:((s+.055)/1.055)**2.4)))[0]+.7152*s[1]+.0722*s[2]).toFixed(3))}function getContrastRatio(t,s){let p=getLuminance(t),g=getLuminance(s);return(Math.max(p,g)+.05)/(Math.min(p,g)+.05)}function alpha(t,s){return t=decomposeColor(t),s=clamp(s),("rgb"===t.type||"hsl"===t.type)&&(t.type+="a"),"color"===t.type?t.values[3]=`/${s}`:t.values[3]=s,recomposeColor(t)}function darken(t,s){if(t=decomposeColor(t),s=clamp(s),-1!==t.type.indexOf("hsl"))t.values[2]*=1-s;else if(-1!==t.type.indexOf("rgb")||-1!==t.type.indexOf("color"))for(let p=0;p<3;p+=1)t.values[p]*=1-s;return recomposeColor(t)}function lighten(t,s){if(t=decomposeColor(t),s=clamp(s),-1!==t.type.indexOf("hsl"))t.values[2]+=(100-t.values[2])*s;else if(-1!==t.type.indexOf("rgb"))for(let p=0;p<3;p+=1)t.values[p]+=(255-t.values[p])*s;else if(-1!==t.type.indexOf("color"))for(let p=0;p<3;p+=1)t.values[p]+=(1-t.values[p])*s;return recomposeColor(t)}},66500:function(t,s,p){"use strict";p.d(s,{Z:function(){return createTheme_createTheme}});var g=p(87462),m=p(63366),v=p(59766);let _=["values","unit","step"],sortBreakpointsValues=t=>{let s=Object.keys(t).map(s=>({key:s,val:t[s]}))||[];return s.sort((t,s)=>t.val-s.val),s.reduce((t,s)=>(0,g.Z)({},t,{[s.key]:s.val}),{})};var x={borderRadius:4},T=p(98700),F=p(86523),W=p(44920);let Z=["breakpoints","palette","spacing","shape"];var createTheme_createTheme=function(t={},...s){let{breakpoints:p={},palette:Q={},spacing:Y,shape:X={}}=t,J=(0,m.Z)(t,Z),en=function(t){let{values:s={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:p="px",step:v=5}=t,x=(0,m.Z)(t,_),T=sortBreakpointsValues(s),F=Object.keys(T);function up(t){let g="number"==typeof s[t]?s[t]:t;return`@media (min-width:${g}${p})`}function down(t){let g="number"==typeof s[t]?s[t]:t;return`@media (max-width:${g-v/100}${p})`}function between(t,g){let m=F.indexOf(g);return`@media (min-width:${"number"==typeof s[t]?s[t]:t}${p}) and (max-width:${(-1!==m&&"number"==typeof s[F[m]]?s[F[m]]:g)-v/100}${p})`}return(0,g.Z)({keys:F,values:T,up,down,between,only:function(t){return F.indexOf(t)+1<F.length?between(t,F[F.indexOf(t)+1]):up(t)},not:function(t){let s=F.indexOf(t);return 0===s?up(F[1]):s===F.length-1?down(F[s]):between(t,F[F.indexOf(t)+1]).replace("@media","@media not all and")},unit:p},x)}(p),ei=function(t=8){if(t.mui)return t;let s=(0,T.hB)({spacing:t}),spacing=(...t)=>{let p=0===t.length?[1]:t;return p.map(t=>{let p=s(t);return"number"==typeof p?`${p}px`:p}).join(" ")};return spacing.mui=!0,spacing}(Y),eo=(0,v.Z)({breakpoints:en,direction:"ltr",components:{},palette:(0,g.Z)({mode:"light"},Q),spacing:ei,shape:(0,g.Z)({},x,X)},J);return(eo=s.reduce((t,s)=>(0,v.Z)(t,s),eo)).unstable_sxConfig=(0,g.Z)({},W.Z,null==J?void 0:J.unstable_sxConfig),eo.unstable_sx=function(t){return(0,F.Z)({sx:t,theme:this})},eo}},47730:function(t,s,p){"use strict";var g=p(59766);s.Z=function(t,s){return s?(0,g.Z)(t,s,{clone:!1}):t}},98700:function(t,s,p){"use strict";p.d(s,{hB:function(){return createUnarySpacing},eI:function(){return createUnaryUnit},NA:function(){return getValue},e6:function(){return margin},o3:function(){return padding}});var g=p(95408),m=p(54844),v=p(47730);let _={m:"margin",p:"padding"},x={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},T={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},F=function(t){let s={};return p=>(void 0===s[p]&&(s[p]=t(p)),s[p])}(t=>{if(t.length>2){if(!T[t])return[t];t=T[t]}let[s,p]=t.split(""),g=_[s],m=x[p]||"";return Array.isArray(m)?m.map(t=>g+t):[g+m]}),W=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Z=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],Q=[...W,...Z];function createUnaryUnit(t,s,p,g){var v;let _=null!=(v=(0,m.DW)(t,s,!1))?v:p;return"number"==typeof _?t=>"string"==typeof t?t:_*t:Array.isArray(_)?t=>"string"==typeof t?t:_[t]:"function"==typeof _?_:()=>void 0}function createUnarySpacing(t){return createUnaryUnit(t,"spacing",8,"spacing")}function getValue(t,s){if("string"==typeof s||null==s)return s;let p=t(Math.abs(s));return s>=0?p:"number"==typeof p?-p:`-${p}`}function spacing_style(t,s){let p=createUnarySpacing(t.theme);return Object.keys(t).map(m=>(function(t,s,p,m){if(-1===s.indexOf(p))return null;let v=F(p),_=t[p];return(0,g.k9)(t,_,t=>v.reduce((s,p)=>(s[p]=getValue(m,t),s),{}))})(t,s,m,p)).reduce(v.Z,{})}function margin(t){return spacing_style(t,W)}function padding(t){return spacing_style(t,Z)}function spacing(t){return spacing_style(t,Q)}margin.propTypes={},margin.filterProps=W,padding.propTypes={},padding.filterProps=Z,spacing.propTypes={},spacing.filterProps=Q},54844:function(t,s,p){"use strict";p.d(s,{DW:function(){return getPath},Jq:function(){return getStyleValue}});var g=p(14142),m=p(95408);function getPath(t,s,p=!0){if(!s||"string"!=typeof s)return null;if(t&&t.vars&&p){let p=`vars.${s}`.split(".").reduce((t,s)=>t&&t[s]?t[s]:null,t);if(null!=p)return p}return s.split(".").reduce((t,s)=>t&&null!=t[s]?t[s]:null,t)}function getStyleValue(t,s,p,g=p){let m;return m="function"==typeof t?t(p):Array.isArray(t)?t[p]||g:getPath(t,p)||g,s&&(m=s(m,g,t)),m}s.ZP=function(t){let{prop:s,cssProperty:p=t.prop,themeKey:v,transform:_}=t,fn=t=>{if(null==t[s])return null;let x=t[s],T=t.theme,F=getPath(T,v)||{};return(0,m.k9)(t,x,t=>{let m=getStyleValue(F,_,t);return(t===m&&"string"==typeof t&&(m=getStyleValue(F,_,`${s}${"default"===t?"":(0,g.Z)(t)}`,t)),!1===p)?m:{[p]:m}})};return fn.propTypes={},fn.filterProps=[s],fn}},44920:function(t,s,p){"use strict";p.d(s,{Z:function(){return ex}});var g=p(98700),m=p(54844),v=p(47730),esm_compose=function(...t){let s=t.reduce((t,s)=>(s.filterProps.forEach(p=>{t[p]=s}),t),{}),fn=t=>Object.keys(t).reduce((p,g)=>s[g]?(0,v.Z)(p,s[g](t)):p,{});return fn.propTypes={},fn.filterProps=t.reduce((t,s)=>t.concat(s.filterProps),[]),fn},_=p(95408);function borderTransform(t){return"number"!=typeof t?t:`${t}px solid`}let x=(0,m.ZP)({prop:"border",themeKey:"borders",transform:borderTransform}),T=(0,m.ZP)({prop:"borderTop",themeKey:"borders",transform:borderTransform}),F=(0,m.ZP)({prop:"borderRight",themeKey:"borders",transform:borderTransform}),W=(0,m.ZP)({prop:"borderBottom",themeKey:"borders",transform:borderTransform}),Z=(0,m.ZP)({prop:"borderLeft",themeKey:"borders",transform:borderTransform}),Q=(0,m.ZP)({prop:"borderColor",themeKey:"palette"}),Y=(0,m.ZP)({prop:"borderTopColor",themeKey:"palette"}),X=(0,m.ZP)({prop:"borderRightColor",themeKey:"palette"}),J=(0,m.ZP)({prop:"borderBottomColor",themeKey:"palette"}),en=(0,m.ZP)({prop:"borderLeftColor",themeKey:"palette"}),borderRadius=t=>{if(void 0!==t.borderRadius&&null!==t.borderRadius){let s=(0,g.eI)(t.theme,"shape.borderRadius",4,"borderRadius");return(0,_.k9)(t,t.borderRadius,t=>({borderRadius:(0,g.NA)(s,t)}))}return null};borderRadius.propTypes={},borderRadius.filterProps=["borderRadius"],esm_compose(x,T,F,W,Z,Q,Y,X,J,en,borderRadius);let gap=t=>{if(void 0!==t.gap&&null!==t.gap){let s=(0,g.eI)(t.theme,"spacing",8,"gap");return(0,_.k9)(t,t.gap,t=>({gap:(0,g.NA)(s,t)}))}return null};gap.propTypes={},gap.filterProps=["gap"];let columnGap=t=>{if(void 0!==t.columnGap&&null!==t.columnGap){let s=(0,g.eI)(t.theme,"spacing",8,"columnGap");return(0,_.k9)(t,t.columnGap,t=>({columnGap:(0,g.NA)(s,t)}))}return null};columnGap.propTypes={},columnGap.filterProps=["columnGap"];let rowGap=t=>{if(void 0!==t.rowGap&&null!==t.rowGap){let s=(0,g.eI)(t.theme,"spacing",8,"rowGap");return(0,_.k9)(t,t.rowGap,t=>({rowGap:(0,g.NA)(s,t)}))}return null};rowGap.propTypes={},rowGap.filterProps=["rowGap"];let ei=(0,m.ZP)({prop:"gridColumn"}),eo=(0,m.ZP)({prop:"gridRow"}),ea=(0,m.ZP)({prop:"gridAutoFlow"}),es=(0,m.ZP)({prop:"gridAutoColumns"}),el=(0,m.ZP)({prop:"gridAutoRows"}),ec=(0,m.ZP)({prop:"gridTemplateColumns"}),eu=(0,m.ZP)({prop:"gridTemplateRows"}),ed=(0,m.ZP)({prop:"gridTemplateAreas"}),eh=(0,m.ZP)({prop:"gridArea"});function paletteTransform(t,s){return"grey"===s?s:t}esm_compose(gap,columnGap,rowGap,ei,eo,ea,es,el,ec,eu,ed,eh);let ef=(0,m.ZP)({prop:"color",themeKey:"palette",transform:paletteTransform}),ep=(0,m.ZP)({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:paletteTransform}),eg=(0,m.ZP)({prop:"backgroundColor",themeKey:"palette",transform:paletteTransform});function sizingTransform(t){return t<=1&&0!==t?`${100*t}%`:t}esm_compose(ef,ep,eg);let em=(0,m.ZP)({prop:"width",transform:sizingTransform}),maxWidth=t=>void 0!==t.maxWidth&&null!==t.maxWidth?(0,_.k9)(t,t.maxWidth,s=>{var p,g;let m=(null==(p=t.theme)||null==(p=p.breakpoints)||null==(p=p.values)?void 0:p[s])||_.VO[s];return m?(null==(g=t.theme)||null==(g=g.breakpoints)?void 0:g.unit)!=="px"?{maxWidth:`${m}${t.theme.breakpoints.unit}`}:{maxWidth:m}:{maxWidth:sizingTransform(s)}}):null;maxWidth.filterProps=["maxWidth"];let eb=(0,m.ZP)({prop:"minWidth",transform:sizingTransform}),ew=(0,m.ZP)({prop:"height",transform:sizingTransform}),ey=(0,m.ZP)({prop:"maxHeight",transform:sizingTransform}),ev=(0,m.ZP)({prop:"minHeight",transform:sizingTransform});(0,m.ZP)({prop:"size",cssProperty:"width",transform:sizingTransform}),(0,m.ZP)({prop:"size",cssProperty:"height",transform:sizingTransform});let eC=(0,m.ZP)({prop:"boxSizing"});esm_compose(em,maxWidth,eb,ew,ey,ev,eC);let e_={border:{themeKey:"borders",transform:borderTransform},borderTop:{themeKey:"borders",transform:borderTransform},borderRight:{themeKey:"borders",transform:borderTransform},borderBottom:{themeKey:"borders",transform:borderTransform},borderLeft:{themeKey:"borders",transform:borderTransform},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:borderRadius},color:{themeKey:"palette",transform:paletteTransform},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:paletteTransform},backgroundColor:{themeKey:"palette",transform:paletteTransform},p:{style:g.o3},pt:{style:g.o3},pr:{style:g.o3},pb:{style:g.o3},pl:{style:g.o3},px:{style:g.o3},py:{style:g.o3},padding:{style:g.o3},paddingTop:{style:g.o3},paddingRight:{style:g.o3},paddingBottom:{style:g.o3},paddingLeft:{style:g.o3},paddingX:{style:g.o3},paddingY:{style:g.o3},paddingInline:{style:g.o3},paddingInlineStart:{style:g.o3},paddingInlineEnd:{style:g.o3},paddingBlock:{style:g.o3},paddingBlockStart:{style:g.o3},paddingBlockEnd:{style:g.o3},m:{style:g.e6},mt:{style:g.e6},mr:{style:g.e6},mb:{style:g.e6},ml:{style:g.e6},mx:{style:g.e6},my:{style:g.e6},margin:{style:g.e6},marginTop:{style:g.e6},marginRight:{style:g.e6},marginBottom:{style:g.e6},marginLeft:{style:g.e6},marginX:{style:g.e6},marginY:{style:g.e6},marginInline:{style:g.e6},marginInlineStart:{style:g.e6},marginInlineEnd:{style:g.e6},marginBlock:{style:g.e6},marginBlockStart:{style:g.e6},marginBlockEnd:{style:g.e6},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:gap},rowGap:{style:rowGap},columnGap:{style:columnGap},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:sizingTransform},maxWidth:{style:maxWidth},minWidth:{transform:sizingTransform},height:{transform:sizingTransform},maxHeight:{transform:sizingTransform},minHeight:{transform:sizingTransform},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};var ex=e_},86523:function(t,s,p){"use strict";var g=p(14142),m=p(47730),v=p(54844),_=p(95408),x=p(44920);let T=function(){function getThemeValue(t,s,p,m){let x={[t]:s,theme:p},T=m[t];if(!T)return{[t]:s};let{cssProperty:F=t,themeKey:W,transform:Z,style:Q}=T;if(null==s)return null;if("typography"===W&&"inherit"===s)return{[t]:s};let Y=(0,v.DW)(p,W)||{};return Q?Q(x):(0,_.k9)(x,s,s=>{let p=(0,v.Jq)(Y,Z,s);return(s===p&&"string"==typeof s&&(p=(0,v.Jq)(Y,Z,`${t}${"default"===s?"":(0,g.Z)(s)}`,s)),!1===F)?p:{[F]:p}})}return function styleFunctionSx(t){var s;let{sx:p,theme:g={}}=t||{};if(!p)return null;let v=null!=(s=g.unstable_sxConfig)?s:x.Z;function traverse(t){let s=t;if("function"==typeof t)s=t(g);else if("object"!=typeof t)return t;if(!s)return null;let p=(0,_.W8)(g.breakpoints),x=Object.keys(p),T=p;return Object.keys(s).forEach(t=>{var p;let x="function"==typeof(p=s[t])?p(g):p;if(null!=x){if("object"==typeof x){if(v[t])T=(0,m.Z)(T,getThemeValue(t,x,g,v));else{let s=(0,_.k9)({theme:g},x,s=>({[t]:s}));(function(...t){let s=t.reduce((t,s)=>t.concat(Object.keys(s)),[]),p=new Set(s);return t.every(t=>p.size===Object.keys(t).length)})(s,x)?T[t]=styleFunctionSx({sx:x,theme:g}):T=(0,m.Z)(T,s)}}else T=(0,m.Z)(T,getThemeValue(t,x,g,v))}}),(0,_.L7)(x,T)}return Array.isArray(p)?p.map(traverse):traverse(p)}}();T.filterProps=["sx"],s.Z=T},96682:function(t,s,p){"use strict";var g=p(66500),m=p(34168);let v=(0,g.Z)();s.Z=function(t=v){return(0,m.Z)(t)}},34168:function(t,s,p){"use strict";var g=p(67294),m=p(75260);s.Z=function(t=null){let s=g.useContext(m.T);return s&&0!==Object.keys(s).length?s:t}},14142:function(t,s,p){"use strict";p.d(s,{Z:function(){return capitalize}});var g=p(71387);function capitalize(t){if("string"!=typeof t)throw Error((0,g.Z)(7));return t.charAt(0).toUpperCase()+t.slice(1)}},59766:function(t,s,p){"use strict";p.d(s,{P:function(){return isPlainObject},Z:function(){return function deepmerge(t,s,p={clone:!0}){let m=p.clone?(0,g.Z)({},t):t;return isPlainObject(t)&&isPlainObject(s)&&Object.keys(s).forEach(g=>{"__proto__"!==g&&(isPlainObject(s[g])&&g in t&&isPlainObject(t[g])?m[g]=deepmerge(t[g],s[g],p):p.clone?m[g]=isPlainObject(s[g])?function deepClone(t){if(!isPlainObject(t))return t;let s={};return Object.keys(t).forEach(p=>{s[p]=deepClone(t[p])}),s}(s[g]):s[g]:m[g]=s[g])}),m}}});var g=p(87462);function isPlainObject(t){return null!==t&&"object"==typeof t&&t.constructor===Object}},71387:function(t,s,p){"use strict";function formatMuiErrorMessage(t){let s="https://mui.com/production-error/?code="+t;for(let t=1;t<arguments.length;t+=1)s+="&args[]="+encodeURIComponent(arguments[t]);return"Minified MUI error #"+t+"; visit "+s+" for the full message."}p.d(s,{Z:function(){return formatMuiErrorMessage}})},47925:function(t,s,p){"use strict";p.d(s,{Z:function(){return function resolveProps(t,s){let p=(0,g.Z)({},s);return Object.keys(t).forEach(m=>{if(m.toString().match(/^(components|slots)$/))p[m]=(0,g.Z)({},t[m],p[m]);else if(m.toString().match(/^(componentsProps|slotProps)$/)){let v=t[m]||{},_=s[m];p[m]={},_&&Object.keys(_)?v&&Object.keys(v)?(p[m]=(0,g.Z)({},_),Object.keys(v).forEach(t=>{p[m][t]=resolveProps(v[t],_[t])})):p[m]=_:p[m]=v}else void 0===p[m]&&(p[m]=t[m])}),p}}});var g=p(87462)},98099:function(t,s,p){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var g=p(97117);function writeUint16BE(t,s,p){return void 0===s&&(s=new Uint8Array(2)),void 0===p&&(p=0),s[p+0]=t>>>8,s[p+1]=t>>>0,s}function writeUint16LE(t,s,p){return void 0===s&&(s=new Uint8Array(2)),void 0===p&&(p=0),s[p+0]=t>>>0,s[p+1]=t>>>8,s}function readInt32BE(t,s){return void 0===s&&(s=0),t[s]<<24|t[s+1]<<16|t[s+2]<<8|t[s+3]}function readUint32BE(t,s){return void 0===s&&(s=0),(t[s]<<24|t[s+1]<<16|t[s+2]<<8|t[s+3])>>>0}function readInt32LE(t,s){return void 0===s&&(s=0),t[s+3]<<24|t[s+2]<<16|t[s+1]<<8|t[s]}function readUint32LE(t,s){return void 0===s&&(s=0),(t[s+3]<<24|t[s+2]<<16|t[s+1]<<8|t[s])>>>0}function writeUint32BE(t,s,p){return void 0===s&&(s=new Uint8Array(4)),void 0===p&&(p=0),s[p+0]=t>>>24,s[p+1]=t>>>16,s[p+2]=t>>>8,s[p+3]=t>>>0,s}function writeUint32LE(t,s,p){return void 0===s&&(s=new Uint8Array(4)),void 0===p&&(p=0),s[p+0]=t>>>0,s[p+1]=t>>>8,s[p+2]=t>>>16,s[p+3]=t>>>24,s}function writeUint64BE(t,s,p){return void 0===s&&(s=new Uint8Array(8)),void 0===p&&(p=0),writeUint32BE(t/4294967296>>>0,s,p),writeUint32BE(t>>>0,s,p+4),s}function writeUint64LE(t,s,p){return void 0===s&&(s=new Uint8Array(8)),void 0===p&&(p=0),writeUint32LE(t>>>0,s,p),writeUint32LE(t/4294967296>>>0,s,p+4),s}s.readInt16BE=function(t,s){return void 0===s&&(s=0),(t[s+0]<<8|t[s+1])<<16>>16},s.readUint16BE=function(t,s){return void 0===s&&(s=0),(t[s+0]<<8|t[s+1])>>>0},s.readInt16LE=function(t,s){return void 0===s&&(s=0),(t[s+1]<<8|t[s])<<16>>16},s.readUint16LE=function(t,s){return void 0===s&&(s=0),(t[s+1]<<8|t[s])>>>0},s.writeUint16BE=writeUint16BE,s.writeInt16BE=writeUint16BE,s.writeUint16LE=writeUint16LE,s.writeInt16LE=writeUint16LE,s.readInt32BE=readInt32BE,s.readUint32BE=readUint32BE,s.readInt32LE=readInt32LE,s.readUint32LE=readUint32LE,s.writeUint32BE=writeUint32BE,s.writeInt32BE=writeUint32BE,s.writeUint32LE=writeUint32LE,s.writeInt32LE=writeUint32LE,s.readInt64BE=function(t,s){void 0===s&&(s=0);var p=readInt32BE(t,s),g=readInt32BE(t,s+4);return 4294967296*p+g-(g>>31)*4294967296},s.readUint64BE=function(t,s){return void 0===s&&(s=0),4294967296*readUint32BE(t,s)+readUint32BE(t,s+4)},s.readInt64LE=function(t,s){void 0===s&&(s=0);var p=readInt32LE(t,s);return 4294967296*readInt32LE(t,s+4)+p-(p>>31)*4294967296},s.readUint64LE=function(t,s){void 0===s&&(s=0);var p=readUint32LE(t,s);return 4294967296*readUint32LE(t,s+4)+p},s.writeUint64BE=writeUint64BE,s.writeInt64BE=writeUint64BE,s.writeUint64LE=writeUint64LE,s.writeInt64LE=writeUint64LE,s.readUintBE=function(t,s,p){if(void 0===p&&(p=0),t%8!=0)throw Error("readUintBE supports only bitLengths divisible by 8");if(t/8>s.length-p)throw Error("readUintBE: array is too short for the given bitLength");for(var g=0,m=1,v=t/8+p-1;v>=p;v--)g+=s[v]*m,m*=256;return g},s.readUintLE=function(t,s,p){if(void 0===p&&(p=0),t%8!=0)throw Error("readUintLE supports only bitLengths divisible by 8");if(t/8>s.length-p)throw Error("readUintLE: array is too short for the given bitLength");for(var g=0,m=1,v=p;v<p+t/8;v++)g+=s[v]*m,m*=256;return g},s.writeUintBE=function(t,s,p,m){if(void 0===p&&(p=new Uint8Array(t/8)),void 0===m&&(m=0),t%8!=0)throw Error("writeUintBE supports only bitLengths divisible by 8");if(!g.isSafeInteger(s))throw Error("writeUintBE value must be an integer");for(var v=1,_=t/8+m-1;_>=m;_--)p[_]=s/v&255,v*=256;return p},s.writeUintLE=function(t,s,p,m){if(void 0===p&&(p=new Uint8Array(t/8)),void 0===m&&(m=0),t%8!=0)throw Error("writeUintLE supports only bitLengths divisible by 8");if(!g.isSafeInteger(s))throw Error("writeUintLE value must be an integer");for(var v=1,_=m;_<m+t/8;_++)p[_]=s/v&255,v*=256;return p},s.readFloat32BE=function(t,s){return void 0===s&&(s=0),new DataView(t.buffer,t.byteOffset,t.byteLength).getFloat32(s)},s.readFloat32LE=function(t,s){return void 0===s&&(s=0),new DataView(t.buffer,t.byteOffset,t.byteLength).getFloat32(s,!0)},s.readFloat64BE=function(t,s){return void 0===s&&(s=0),new DataView(t.buffer,t.byteOffset,t.byteLength).getFloat64(s)},s.readFloat64LE=function(t,s){return void 0===s&&(s=0),new DataView(t.buffer,t.byteOffset,t.byteLength).getFloat64(s,!0)},s.writeFloat32BE=function(t,s,p){return void 0===s&&(s=new Uint8Array(4)),void 0===p&&(p=0),new DataView(s.buffer,s.byteOffset,s.byteLength).setFloat32(p,t),s},s.writeFloat32LE=function(t,s,p){return void 0===s&&(s=new Uint8Array(4)),void 0===p&&(p=0),new DataView(s.buffer,s.byteOffset,s.byteLength).setFloat32(p,t,!0),s},s.writeFloat64BE=function(t,s,p){return void 0===s&&(s=new Uint8Array(8)),void 0===p&&(p=0),new DataView(s.buffer,s.byteOffset,s.byteLength).setFloat64(p,t),s},s.writeFloat64LE=function(t,s,p){return void 0===s&&(s=new Uint8Array(8)),void 0===p&&(p=0),new DataView(s.buffer,s.byteOffset,s.byteLength).setFloat64(p,t,!0),s}},25439:function(t,s,p){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var g=p(98099),m=p(17309);function streamXOR(t,s,p,v,_){if(void 0===_&&(_=0),32!==t.length)throw Error("ChaCha: key size must be 32 bytes");if(v.length<p.length)throw Error("ChaCha: destination is shorter than source");if(0===_){if(8!==s.length&&12!==s.length)throw Error("ChaCha nonce must be 8 or 12 bytes");T=(x=new Uint8Array(16)).length-s.length,x.set(s,T)}else{if(16!==s.length)throw Error("ChaCha nonce with counter must be 16 bytes");x=s,T=_}for(var x,T,F=new Uint8Array(64),W=0;W<p.length;W+=64){!function(t,s,p){for(var m=p[3]<<24|p[2]<<16|p[1]<<8|p[0],v=p[7]<<24|p[6]<<16|p[5]<<8|p[4],_=p[11]<<24|p[10]<<16|p[9]<<8|p[8],x=p[15]<<24|p[14]<<16|p[13]<<8|p[12],T=p[19]<<24|p[18]<<16|p[17]<<8|p[16],F=p[23]<<24|p[22]<<16|p[21]<<8|p[20],W=p[27]<<24|p[26]<<16|p[25]<<8|p[24],Z=p[31]<<24|p[30]<<16|p[29]<<8|p[28],Q=s[3]<<24|s[2]<<16|s[1]<<8|s[0],Y=s[7]<<24|s[6]<<16|s[5]<<8|s[4],X=s[11]<<24|s[10]<<16|s[9]<<8|s[8],J=s[15]<<24|s[14]<<16|s[13]<<8|s[12],en=1634760805,ei=857760878,eo=2036477234,ea=1797285236,es=m,el=v,ec=_,eu=x,ed=T,eh=F,ef=W,ep=Z,eg=Q,em=Y,eb=X,ew=J,ey=0;ey<20;ey+=2)eg^=en=en+es|0,es^=ed=ed+(eg=eg>>>16|eg<<16)|0,es=es>>>20|es<<12,em^=ei=ei+el|0,el^=eh=eh+(em=em>>>16|em<<16)|0,el=el>>>20|el<<12,eb^=eo=eo+ec|0,ec^=ef=ef+(eb=eb>>>16|eb<<16)|0,ec=ec>>>20|ec<<12,ew^=ea=ea+eu|0,eu^=ep=ep+(ew=ew>>>16|ew<<16)|0,eu=eu>>>20|eu<<12,eb^=eo=eo+ec|0,ec^=ef=ef+(eb=eb>>>24|eb<<8)|0,ec=ec>>>25|ec<<7,ew^=ea=ea+eu|0,eu^=ep=ep+(ew=ew>>>24|ew<<8)|0,eu=eu>>>25|eu<<7,em^=ei=ei+el|0,el^=eh=eh+(em=em>>>24|em<<8)|0,el=el>>>25|el<<7,eg^=en=en+es|0,es^=ed=ed+(eg=eg>>>24|eg<<8)|0,es=es>>>25|es<<7,ew^=en=en+el|0,el^=ef=ef+(ew=ew>>>16|ew<<16)|0,el=el>>>20|el<<12,eg^=ei=ei+ec|0,ec^=ep=ep+(eg=eg>>>16|eg<<16)|0,ec=ec>>>20|ec<<12,em^=eo=eo+eu|0,eu^=ed=ed+(em=em>>>16|em<<16)|0,eu=eu>>>20|eu<<12,eb^=ea=ea+es|0,es^=eh=eh+(eb=eb>>>16|eb<<16)|0,es=es>>>20|es<<12,em^=eo=eo+eu|0,eu^=ed=ed+(em=em>>>24|em<<8)|0,eu=eu>>>25|eu<<7,eb^=ea=ea+es|0,es^=eh=eh+(eb=eb>>>24|eb<<8)|0,es=es>>>25|es<<7,eg^=ei=ei+ec|0,ec^=ep=ep+(eg=eg>>>24|eg<<8)|0,ec=ec>>>25|ec<<7,ew^=en=en+el|0,el^=ef=ef+(ew=ew>>>24|ew<<8)|0,el=el>>>25|el<<7;g.writeUint32LE(en+1634760805|0,t,0),g.writeUint32LE(ei+857760878|0,t,4),g.writeUint32LE(eo+2036477234|0,t,8),g.writeUint32LE(ea+1797285236|0,t,12),g.writeUint32LE(es+m|0,t,16),g.writeUint32LE(el+v|0,t,20),g.writeUint32LE(ec+_|0,t,24),g.writeUint32LE(eu+x|0,t,28),g.writeUint32LE(ed+T|0,t,32),g.writeUint32LE(eh+F|0,t,36),g.writeUint32LE(ef+W|0,t,40),g.writeUint32LE(ep+Z|0,t,44),g.writeUint32LE(eg+Q|0,t,48),g.writeUint32LE(em+Y|0,t,52),g.writeUint32LE(eb+X|0,t,56),g.writeUint32LE(ew+J|0,t,60)}(F,x,t);for(var Z=W;Z<W+64&&Z<p.length;Z++)v[Z]=p[Z]^F[Z-W];!function(t,s,p){for(var g=1;p--;)g=g+(255&t[s])|0,t[s]=255&g,g>>>=8,s++;if(g>0)throw Error("ChaCha: counter overflow")}(x,0,T)}return m.wipe(F),0===_&&m.wipe(x),v}s.streamXOR=streamXOR,s.stream=function(t,s,p,g){return void 0===g&&(g=0),m.wipe(p),streamXOR(t,s,p,p,g)}},15501:function(t,s,p){"use strict";var g=p(25439),m=p(63027),v=p(17309),_=p(98099),x=p(4153);s.Cv=32,s.WH=12,s.pg=16;var T=new Uint8Array(16),F=function(){function ChaCha20Poly1305(t){if(this.nonceLength=s.WH,this.tagLength=s.pg,t.length!==s.Cv)throw Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(t)}return ChaCha20Poly1305.prototype.seal=function(t,s,p,m){if(t.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");var _,x=new Uint8Array(16);x.set(t,x.length-t.length);var T=new Uint8Array(32);g.stream(this._key,x,T,4);var F=s.length+this.tagLength;if(m){if(m.length!==F)throw Error("ChaCha20Poly1305: incorrect destination length");_=m}else _=new Uint8Array(F);return g.streamXOR(this._key,x,s,_,4),this._authenticate(_.subarray(_.length-this.tagLength,_.length),T,_.subarray(0,_.length-this.tagLength),p),v.wipe(x),_},ChaCha20Poly1305.prototype.open=function(t,s,p,m){if(t.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");if(s.length<this.tagLength)return null;var _,T=new Uint8Array(16);T.set(t,T.length-t.length);var F=new Uint8Array(32);g.stream(this._key,T,F,4);var W=new Uint8Array(this.tagLength);if(this._authenticate(W,F,s.subarray(0,s.length-this.tagLength),p),!x.equal(W,s.subarray(s.length-this.tagLength,s.length)))return null;var Z=s.length-this.tagLength;if(m){if(m.length!==Z)throw Error("ChaCha20Poly1305: incorrect destination length");_=m}else _=new Uint8Array(Z);return g.streamXOR(this._key,T,s.subarray(0,s.length-this.tagLength),_,4),v.wipe(T),_},ChaCha20Poly1305.prototype.clean=function(){return v.wipe(this._key),this},ChaCha20Poly1305.prototype._authenticate=function(t,s,p,g){var x=new m.Poly1305(s);g&&(x.update(g),g.length%16>0&&x.update(T.subarray(g.length%16))),x.update(p),p.length%16>0&&x.update(T.subarray(p.length%16));var F=new Uint8Array(8);g&&_.writeUint64LE(g.length,F),x.update(F),_.writeUint64LE(p.length,F),x.update(F);for(var W=x.digest(),Z=0;Z<W.length;Z++)t[Z]=W[Z];x.clean(),v.wipe(W),v.wipe(F)},ChaCha20Poly1305}();s.OK=F},4153:function(t,s){"use strict";function compare(t,s){if(t.length!==s.length)return 0;for(var p=0,g=0;g<t.length;g++)p|=t[g]^s[g];return 1&p-1>>>8}Object.defineProperty(s,"__esModule",{value:!0}),s.select=function(t,s,p){return~(t-1)&s|t-1&p},s.lessOrEqual=function(t,s){return(0|t)-(0|s)-1>>>31&1},s.compare=compare,s.equal=function(t,s){return 0!==t.length&&0!==s.length&&0!==compare(t,s)}},79984:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.isSerializableHash=function(t){return void 0!==t.saveState&&void 0!==t.restoreState&&void 0!==t.cleanSavedState}},512:function(t,s,p){"use strict";var g=p(25629),m=p(17309),v=function(){function HKDF(t,s,p,m){void 0===p&&(p=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=t,this._info=m;var v=g.hmac(this._hash,p,s);this._hmac=new g.HMAC(t,v),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return HKDF.prototype._fillBuffer=function(){this._counter[0]++;var t=this._counter[0];if(0===t)throw Error("hkdf: cannot expand more");this._hmac.reset(),t>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},HKDF.prototype.expand=function(t){for(var s=new Uint8Array(t),p=0;p<s.length;p++)this._bufpos===this._buffer.length&&this._fillBuffer(),s[p]=this._buffer[this._bufpos++];return s},HKDF.prototype.clean=function(){this._hmac.clean(),m.wipe(this._buffer),m.wipe(this._counter),this._bufpos=0},HKDF}();s.t=v},25629:function(t,s,p){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var g=p(79984),m=p(4153),v=p(17309),_=function(){function HMAC(t,s){this._finished=!1,this._inner=new t,this._outer=new t,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var p=new Uint8Array(this.blockSize);s.length>this.blockSize?this._inner.update(s).finish(p).clean():p.set(s);for(var m=0;m<p.length;m++)p[m]^=54;this._inner.update(p);for(var m=0;m<p.length;m++)p[m]^=106;this._outer.update(p),g.isSerializableHash(this._inner)&&g.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),v.wipe(p)}return HMAC.prototype.reset=function(){if(!g.isSerializableHash(this._inner)||!g.isSerializableHash(this._outer))throw Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},HMAC.prototype.clean=function(){g.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),g.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},HMAC.prototype.update=function(t){return this._inner.update(t),this},HMAC.prototype.finish=function(t){return this._finished?this._outer.finish(t):(this._inner.finish(t),this._outer.update(t.subarray(0,this.digestLength)).finish(t),this._finished=!0),this},HMAC.prototype.digest=function(){var t=new Uint8Array(this.digestLength);return this.finish(t),t},HMAC.prototype.saveState=function(){if(!g.isSerializableHash(this._inner))throw Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},HMAC.prototype.restoreState=function(t){if(!g.isSerializableHash(this._inner)||!g.isSerializableHash(this._outer))throw Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(t),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},HMAC.prototype.cleanSavedState=function(t){if(!g.isSerializableHash(this._inner))throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(t)},HMAC}();s.HMAC=_,s.hmac=function(t,s,p){var g=new _(t,s);g.update(p);var m=g.digest();return g.clean(),m},s.equal=m.equal},97117:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.mul=Math.imul||function(t,s){var p=65535&t,g=65535&s;return p*g+((t>>>16&65535)*g+p*(s>>>16&65535)<<16>>>0)|0},s.add=function(t,s){return t+s|0},s.sub=function(t,s){return t-s|0},s.rotl=function(t,s){return t<<s|t>>>32-s},s.rotr=function(t,s){return t<<32-s|t>>>s},s.isInteger=Number.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t},s.MAX_SAFE_INTEGER=9007199254740991,s.isSafeInteger=function(t){return s.isInteger(t)&&t>=-s.MAX_SAFE_INTEGER&&t<=s.MAX_SAFE_INTEGER}},63027:function(t,s,p){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var g=p(4153),m=p(17309);s.DIGEST_LENGTH=16;var v=function(){function Poly1305(t){this.digestLength=s.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var p=t[0]|t[1]<<8;this._r[0]=8191&p;var g=t[2]|t[3]<<8;this._r[1]=(p>>>13|g<<3)&8191;var m=t[4]|t[5]<<8;this._r[2]=(g>>>10|m<<6)&7939;var v=t[6]|t[7]<<8;this._r[3]=(m>>>7|v<<9)&8191;var _=t[8]|t[9]<<8;this._r[4]=(v>>>4|_<<12)&255,this._r[5]=_>>>1&8190;var x=t[10]|t[11]<<8;this._r[6]=(_>>>14|x<<2)&8191;var T=t[12]|t[13]<<8;this._r[7]=(x>>>11|T<<5)&8065;var F=t[14]|t[15]<<8;this._r[8]=(T>>>8|F<<8)&8191,this._r[9]=F>>>5&127,this._pad[0]=t[16]|t[17]<<8,this._pad[1]=t[18]|t[19]<<8,this._pad[2]=t[20]|t[21]<<8,this._pad[3]=t[22]|t[23]<<8,this._pad[4]=t[24]|t[25]<<8,this._pad[5]=t[26]|t[27]<<8,this._pad[6]=t[28]|t[29]<<8,this._pad[7]=t[30]|t[31]<<8}return Poly1305.prototype._blocks=function(t,s,p){for(var g=this._fin?0:2048,m=this._h[0],v=this._h[1],_=this._h[2],x=this._h[3],T=this._h[4],F=this._h[5],W=this._h[6],Z=this._h[7],Q=this._h[8],Y=this._h[9],X=this._r[0],J=this._r[1],en=this._r[2],ei=this._r[3],eo=this._r[4],ea=this._r[5],es=this._r[6],el=this._r[7],ec=this._r[8],eu=this._r[9];p>=16;){var ed,eh=t[s+0]|t[s+1]<<8;m+=8191&eh;var ef=t[s+2]|t[s+3]<<8;v+=(eh>>>13|ef<<3)&8191;var ep=t[s+4]|t[s+5]<<8;_+=(ef>>>10|ep<<6)&8191;var eg=t[s+6]|t[s+7]<<8;x+=(ep>>>7|eg<<9)&8191;var em=t[s+8]|t[s+9]<<8;T+=(eg>>>4|em<<12)&8191,F+=em>>>1&8191;var eb=t[s+10]|t[s+11]<<8;W+=(em>>>14|eb<<2)&8191;var ew=t[s+12]|t[s+13]<<8;Z+=(eb>>>11|ew<<5)&8191;var ey=t[s+14]|t[s+15]<<8;Q+=(ew>>>8|ey<<8)&8191,Y+=ey>>>5|g;var ev=0;ev=(ed=0+m*X+v*(5*eu)+_*(5*ec)+x*(5*el)+T*(5*es))>>>13,ed&=8191,ed+=F*(5*ea)+W*(5*eo)+Z*(5*ei)+Q*(5*en)+Y*(5*J),ev+=ed>>>13,ed&=8191;var eC=ev;eC+=m*J+v*X+_*(5*eu)+x*(5*ec)+T*(5*el),ev=eC>>>13,eC&=8191,eC+=F*(5*es)+W*(5*ea)+Z*(5*eo)+Q*(5*ei)+Y*(5*en),ev+=eC>>>13,eC&=8191;var e_=ev;e_+=m*en+v*J+_*X+x*(5*eu)+T*(5*ec),ev=e_>>>13,e_&=8191,e_+=F*(5*el)+W*(5*es)+Z*(5*ea)+Q*(5*eo)+Y*(5*ei),ev+=e_>>>13,e_&=8191;var ex=ev;ex+=m*ei+v*en+_*J+x*X+T*(5*eu),ev=ex>>>13,ex&=8191,ex+=F*(5*ec)+W*(5*el)+Z*(5*es)+Q*(5*ea)+Y*(5*eo),ev+=ex>>>13,ex&=8191;var eE=ev;eE+=m*eo+v*ei+_*en+x*J+T*X,ev=eE>>>13,eE&=8191,eE+=F*(5*eu)+W*(5*ec)+Z*(5*el)+Q*(5*es)+Y*(5*ea),ev+=eE>>>13,eE&=8191;var ek=ev;ek+=m*ea+v*eo+_*ei+x*en+T*J,ev=ek>>>13,ek&=8191,ek+=F*X+W*(5*eu)+Z*(5*ec)+Q*(5*el)+Y*(5*es),ev+=ek>>>13,ek&=8191;var eS=ev;eS+=m*es+v*ea+_*eo+x*ei+T*en,ev=eS>>>13,eS&=8191,eS+=F*J+W*X+Z*(5*eu)+Q*(5*ec)+Y*(5*el),ev+=eS>>>13,eS&=8191;var eP=ev;eP+=m*el+v*es+_*ea+x*eo+T*ei,ev=eP>>>13,eP&=8191,eP+=F*en+W*J+Z*X+Q*(5*eu)+Y*(5*ec),ev+=eP>>>13,eP&=8191;var eA=ev;eA+=m*ec+v*el+_*es+x*ea+T*eo,ev=eA>>>13,eA&=8191,eA+=F*ei+W*en+Z*J+Q*X+Y*(5*eu),ev+=eA>>>13,eA&=8191;var e$=ev;e$+=m*eu+v*ec+_*el+x*es+T*ea,ev=e$>>>13,e$&=8191,e$+=F*eo+W*ei+Z*en+Q*J+Y*X,ev+=e$>>>13,e$&=8191,ed=8191&(ev=(ev=(ev<<2)+ev|0)+ed|0),ev>>>=13,eC+=ev,m=ed,v=eC,_=e_,x=ex,T=eE,F=ek,W=eS,Z=eP,Q=eA,Y=e$,s+=16,p-=16}this._h[0]=m,this._h[1]=v,this._h[2]=_,this._h[3]=x,this._h[4]=T,this._h[5]=F,this._h[6]=W,this._h[7]=Z,this._h[8]=Q,this._h[9]=Y},Poly1305.prototype.finish=function(t,s){void 0===s&&(s=0);var p,g,m,v,_=new Uint16Array(10);if(this._leftover){for(v=this._leftover,this._buffer[v++]=1;v<16;v++)this._buffer[v]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(p=this._h[1]>>>13,this._h[1]&=8191,v=2;v<10;v++)this._h[v]+=p,p=this._h[v]>>>13,this._h[v]&=8191;for(this._h[0]+=5*p,p=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=p,p=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=p,_[0]=this._h[0]+5,p=_[0]>>>13,_[0]&=8191,v=1;v<10;v++)_[v]=this._h[v]+p,p=_[v]>>>13,_[v]&=8191;for(_[9]-=8192,g=(1^p)-1,v=0;v<10;v++)_[v]&=g;for(v=0,g=~g;v<10;v++)this._h[v]=this._h[v]&g|_[v];for(v=1,this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,m=this._h[0]+this._pad[0],this._h[0]=65535&m;v<8;v++)m=(this._h[v]+this._pad[v]|0)+(m>>>16)|0,this._h[v]=65535&m;return t[s+0]=this._h[0]>>>0,t[s+1]=this._h[0]>>>8,t[s+2]=this._h[1]>>>0,t[s+3]=this._h[1]>>>8,t[s+4]=this._h[2]>>>0,t[s+5]=this._h[2]>>>8,t[s+6]=this._h[3]>>>0,t[s+7]=this._h[3]>>>8,t[s+8]=this._h[4]>>>0,t[s+9]=this._h[4]>>>8,t[s+10]=this._h[5]>>>0,t[s+11]=this._h[5]>>>8,t[s+12]=this._h[6]>>>0,t[s+13]=this._h[6]>>>8,t[s+14]=this._h[7]>>>0,t[s+15]=this._h[7]>>>8,this._finished=!0,this},Poly1305.prototype.update=function(t){var s,p=0,g=t.length;if(this._leftover){(s=16-this._leftover)>g&&(s=g);for(var m=0;m<s;m++)this._buffer[this._leftover+m]=t[p+m];if(g-=s,p+=s,this._leftover+=s,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(g>=16&&(s=g-g%16,this._blocks(t,p,s),p+=s,g-=s),g){for(var m=0;m<g;m++)this._buffer[this._leftover+m]=t[p+m];this._leftover+=g}return this},Poly1305.prototype.digest=function(){if(this._finished)throw Error("Poly1305 was finished");var t=new Uint8Array(16);return this.finish(t),t},Poly1305.prototype.clean=function(){return m.wipe(this._buffer),m.wipe(this._r),m.wipe(this._h),m.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},Poly1305}();s.Poly1305=v,s.oneTimeAuth=function(t,s){var p=new v(t);p.update(s);var g=p.digest();return p.clean(),g},s.equal=function(t,p){return t.length===s.DIGEST_LENGTH&&p.length===s.DIGEST_LENGTH&&g.equal(t,p)}},31416:function(t,s,p){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.randomStringForEntropy=s.randomString=s.randomUint32=s.randomBytes=s.defaultRandomSource=void 0;let g=p(46008),m=p(98099),v=p(17309);function randomBytes(t,p=s.defaultRandomSource){return p.randomBytes(t)}s.defaultRandomSource=new g.SystemRandomSource,s.randomBytes=randomBytes,s.randomUint32=function(t=s.defaultRandomSource){let p=randomBytes(4,t),g=(0,m.readUint32LE)(p);return(0,v.wipe)(p),g};let _="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function randomString(t,p=_,g=s.defaultRandomSource){if(p.length<2)throw Error("randomString charset is too short");if(p.length>256)throw Error("randomString charset is too long");let m="",x=p.length,T=256-256%x;for(;t>0;){let s=randomBytes(Math.ceil(256*t/T),g);for(let g=0;g<s.length&&t>0;g++){let v=s[g];v<T&&(m+=p.charAt(v%x),t--)}(0,v.wipe)(s)}return m}s.randomString=randomString,s.randomStringForEntropy=function(t,p=_,g=s.defaultRandomSource){let m=Math.ceil(t/(Math.log(p.length)/Math.LN2));return randomString(m,p,g)}},75455:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.BrowserRandomSource=void 0,s.BrowserRandomSource=class{constructor(){this.isAvailable=!1,this.isInstantiated=!1;let t="undefined"!=typeof self?self.crypto||self.msCrypto:null;t&&void 0!==t.getRandomValues&&(this._crypto=t,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(t){if(!this.isAvailable||!this._crypto)throw Error("Browser random byte generator is not available.");let s=new Uint8Array(t);for(let t=0;t<s.length;t+=65536)this._crypto.getRandomValues(s.subarray(t,t+Math.min(s.length-t,65536)));return s}}},58871:function(t,s,p){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.NodeRandomSource=void 0;let g=p(17309);s.NodeRandomSource=class{constructor(){this.isAvailable=!1,this.isInstantiated=!1;{let t=p(35883);t&&t.randomBytes&&(this._crypto=t,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(t){if(!this.isAvailable||!this._crypto)throw Error("Node.js random byte generator is not available.");let s=this._crypto.randomBytes(t);if(s.length!==t)throw Error("NodeRandomSource: got fewer bytes than requested");let p=new Uint8Array(t);for(let t=0;t<p.length;t++)p[t]=s[t];return(0,g.wipe)(s),p}}},46008:function(t,s,p){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.SystemRandomSource=void 0;let g=p(75455),m=p(58871);s.SystemRandomSource=class{constructor(){if(this.isAvailable=!1,this.name="",this._source=new g.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new m.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(t){if(!this.isAvailable)throw Error("System random byte generator is not available.");return this._source.randomBytes(t)}}},73294:function(t,s,p){"use strict";var g=p(98099),m=p(17309);s.k=32,s.cn=64;var v=function(){function SHA256(){this.digestLength=s.k,this.blockSize=s.cn,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return SHA256.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},SHA256.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},SHA256.prototype.clean=function(){m.wipe(this._buffer),m.wipe(this._temp),this.reset()},SHA256.prototype.update=function(t,s){if(void 0===s&&(s=t.length),this._finished)throw Error("SHA256: can't update because hash was finished.");var p=0;if(this._bytesHashed+=s,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&s>0;)this._buffer[this._bufferLength++]=t[p++],s--;this._bufferLength===this.blockSize&&(hashBlocks(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(s>=this.blockSize&&(p=hashBlocks(this._temp,this._state,t,p,s),s%=this.blockSize);s>0;)this._buffer[this._bufferLength++]=t[p++],s--;return this},SHA256.prototype.finish=function(t){if(!this._finished){var s=this._bytesHashed,p=this._bufferLength,m=s%64<56?64:128;this._buffer[p]=128;for(var v=p+1;v<m-8;v++)this._buffer[v]=0;g.writeUint32BE(s/536870912|0,this._buffer,m-8),g.writeUint32BE(s<<3,this._buffer,m-4),hashBlocks(this._temp,this._state,this._buffer,0,m),this._finished=!0}for(var v=0;v<this.digestLength/4;v++)g.writeUint32BE(this._state[v],t,4*v);return this},SHA256.prototype.digest=function(){var t=new Uint8Array(this.digestLength);return this.finish(t),t},SHA256.prototype.saveState=function(){if(this._finished)throw Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},SHA256.prototype.restoreState=function(t){return this._state.set(t.state),this._bufferLength=t.bufferLength,t.buffer&&this._buffer.set(t.buffer),this._bytesHashed=t.bytesHashed,this._finished=!1,this},SHA256.prototype.cleanSavedState=function(t){m.wipe(t.state),t.buffer&&m.wipe(t.buffer),t.bufferLength=0,t.bytesHashed=0},SHA256}();s.mE=v;var _=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function hashBlocks(t,s,p,m,v){for(;v>=64;){for(var x=s[0],T=s[1],F=s[2],W=s[3],Z=s[4],Q=s[5],Y=s[6],X=s[7],J=0;J<16;J++){var en=m+4*J;t[J]=g.readUint32BE(p,en)}for(var J=16;J<64;J++){var ei=t[J-2],eo=(ei>>>17|ei<<15)^(ei>>>19|ei<<13)^ei>>>10,ea=((ei=t[J-15])>>>7|ei<<25)^(ei>>>18|ei<<14)^ei>>>3;t[J]=(eo+t[J-7]|0)+(ea+t[J-16]|0)}for(var J=0;J<64;J++){var eo=(((Z>>>6|Z<<26)^(Z>>>11|Z<<21)^(Z>>>25|Z<<7))+(Z&Q^~Z&Y)|0)+(X+(_[J]+t[J]|0)|0)|0,ea=((x>>>2|x<<30)^(x>>>13|x<<19)^(x>>>22|x<<10))+(x&T^x&F^T&F)|0;X=Y,Y=Q,Q=Z,Z=W+eo|0,W=F,F=T,T=x,x=eo+ea|0}s[0]+=x,s[1]+=T,s[2]+=F,s[3]+=W,s[4]+=Z,s[5]+=Q,s[6]+=Y,s[7]+=X,m+=64,v-=64}return m}s.vp=function(t){var s=new v;s.update(t);var p=s.digest();return s.clean(),p}},17309:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.wipe=function(t){for(var s=0;s<t.length;s++)t[s]=0;return t}},57664:function(t,s,p){"use strict";s.gi=s.Au=s.KS=s.kz=void 0;let g=p(31416),m=p(17309);function gf(t){let s=new Float64Array(16);if(t)for(let p=0;p<t.length;p++)s[p]=t[p];return s}s.kz=32,s.KS=32;let v=new Uint8Array(32);v[0]=9;let _=gf([56129,1]);function car25519(t){let s=1;for(let p=0;p<16;p++){let g=t[p]+s+65535;s=Math.floor(g/65536),t[p]=g-65536*s}t[0]+=s-1+37*(s-1)}function sel25519(t,s,p){let g=~(p-1);for(let p=0;p<16;p++){let m=g&(t[p]^s[p]);t[p]^=m,s[p]^=m}}function add(t,s,p){for(let g=0;g<16;g++)t[g]=s[g]+p[g]}function sub(t,s,p){for(let g=0;g<16;g++)t[g]=s[g]-p[g]}function mul(t,s,p){let g,m,v=0,_=0,x=0,T=0,F=0,W=0,Z=0,Q=0,Y=0,X=0,J=0,en=0,ei=0,eo=0,ea=0,es=0,el=0,ec=0,eu=0,ed=0,eh=0,ef=0,ep=0,eg=0,em=0,eb=0,ew=0,ey=0,ev=0,eC=0,e_=0,ex=p[0],eE=p[1],ek=p[2],eS=p[3],eP=p[4],eA=p[5],e$=p[6],eO=p[7],eD=p[8],eT=p[9],eI=p[10],eR=p[11],eB=p[12],eN=p[13],eU=p[14],eM=p[15];v+=(g=s[0])*ex,_+=g*eE,x+=g*ek,T+=g*eS,F+=g*eP,W+=g*eA,Z+=g*e$,Q+=g*eO,Y+=g*eD,X+=g*eT,J+=g*eI,en+=g*eR,ei+=g*eB,eo+=g*eN,ea+=g*eU,es+=g*eM,_+=(g=s[1])*ex,x+=g*eE,T+=g*ek,F+=g*eS,W+=g*eP,Z+=g*eA,Q+=g*e$,Y+=g*eO,X+=g*eD,J+=g*eT,en+=g*eI,ei+=g*eR,eo+=g*eB,ea+=g*eN,es+=g*eU,el+=g*eM,x+=(g=s[2])*ex,T+=g*eE,F+=g*ek,W+=g*eS,Z+=g*eP,Q+=g*eA,Y+=g*e$,X+=g*eO,J+=g*eD,en+=g*eT,ei+=g*eI,eo+=g*eR,ea+=g*eB,es+=g*eN,el+=g*eU,ec+=g*eM,T+=(g=s[3])*ex,F+=g*eE,W+=g*ek,Z+=g*eS,Q+=g*eP,Y+=g*eA,X+=g*e$,J+=g*eO,en+=g*eD,ei+=g*eT,eo+=g*eI,ea+=g*eR,es+=g*eB,el+=g*eN,ec+=g*eU,eu+=g*eM,F+=(g=s[4])*ex,W+=g*eE,Z+=g*ek,Q+=g*eS,Y+=g*eP,X+=g*eA,J+=g*e$,en+=g*eO,ei+=g*eD,eo+=g*eT,ea+=g*eI,es+=g*eR,el+=g*eB,ec+=g*eN,eu+=g*eU,ed+=g*eM,W+=(g=s[5])*ex,Z+=g*eE,Q+=g*ek,Y+=g*eS,X+=g*eP,J+=g*eA,en+=g*e$,ei+=g*eO,eo+=g*eD,ea+=g*eT,es+=g*eI,el+=g*eR,ec+=g*eB,eu+=g*eN,ed+=g*eU,eh+=g*eM,Z+=(g=s[6])*ex,Q+=g*eE,Y+=g*ek,X+=g*eS,J+=g*eP,en+=g*eA,ei+=g*e$,eo+=g*eO,ea+=g*eD,es+=g*eT,el+=g*eI,ec+=g*eR,eu+=g*eB,ed+=g*eN,eh+=g*eU,ef+=g*eM,Q+=(g=s[7])*ex,Y+=g*eE,X+=g*ek,J+=g*eS,en+=g*eP,ei+=g*eA,eo+=g*e$,ea+=g*eO,es+=g*eD,el+=g*eT,ec+=g*eI,eu+=g*eR,ed+=g*eB,eh+=g*eN,ef+=g*eU,ep+=g*eM,Y+=(g=s[8])*ex,X+=g*eE,J+=g*ek,en+=g*eS,ei+=g*eP,eo+=g*eA,ea+=g*e$,es+=g*eO,el+=g*eD,ec+=g*eT,eu+=g*eI,ed+=g*eR,eh+=g*eB,ef+=g*eN,ep+=g*eU,eg+=g*eM,X+=(g=s[9])*ex,J+=g*eE,en+=g*ek,ei+=g*eS,eo+=g*eP,ea+=g*eA,es+=g*e$,el+=g*eO,ec+=g*eD,eu+=g*eT,ed+=g*eI,eh+=g*eR,ef+=g*eB,ep+=g*eN,eg+=g*eU,em+=g*eM,J+=(g=s[10])*ex,en+=g*eE,ei+=g*ek,eo+=g*eS,ea+=g*eP,es+=g*eA,el+=g*e$,ec+=g*eO,eu+=g*eD,ed+=g*eT,eh+=g*eI,ef+=g*eR,ep+=g*eB,eg+=g*eN,em+=g*eU,eb+=g*eM,en+=(g=s[11])*ex,ei+=g*eE,eo+=g*ek,ea+=g*eS,es+=g*eP,el+=g*eA,ec+=g*e$,eu+=g*eO,ed+=g*eD,eh+=g*eT,ef+=g*eI,ep+=g*eR,eg+=g*eB,em+=g*eN,eb+=g*eU,ew+=g*eM,ei+=(g=s[12])*ex,eo+=g*eE,ea+=g*ek,es+=g*eS,el+=g*eP,ec+=g*eA,eu+=g*e$,ed+=g*eO,eh+=g*eD,ef+=g*eT,ep+=g*eI,eg+=g*eR,em+=g*eB,eb+=g*eN,ew+=g*eU,ey+=g*eM,eo+=(g=s[13])*ex,ea+=g*eE,es+=g*ek,el+=g*eS,ec+=g*eP,eu+=g*eA,ed+=g*e$,eh+=g*eO,ef+=g*eD,ep+=g*eT,eg+=g*eI,em+=g*eR,eb+=g*eB,ew+=g*eN,ey+=g*eU,ev+=g*eM,ea+=(g=s[14])*ex,es+=g*eE,el+=g*ek,ec+=g*eS,eu+=g*eP,ed+=g*eA,eh+=g*e$,ef+=g*eO,ep+=g*eD,eg+=g*eT,em+=g*eI,eb+=g*eR,ew+=g*eB,ey+=g*eN,ev+=g*eU,eC+=g*eM,es+=(g=s[15])*ex,el+=g*eE,ec+=g*ek,eu+=g*eS,ed+=g*eP,eh+=g*eA,ef+=g*e$,ep+=g*eO,eg+=g*eD,em+=g*eT,eb+=g*eI,ew+=g*eR,ey+=g*eB,ev+=g*eN,eC+=g*eU,e_+=g*eM,v+=38*el,_+=38*ec,x+=38*eu,T+=38*ed,F+=38*eh,W+=38*ef,Z+=38*ep,Q+=38*eg,Y+=38*em,X+=38*eb,J+=38*ew,en+=38*ey,ei+=38*ev,eo+=38*eC,ea+=38*e_,m=Math.floor((g=v+(m=1)+65535)/65536),v=g-65536*m,m=Math.floor((g=_+m+65535)/65536),_=g-65536*m,m=Math.floor((g=x+m+65535)/65536),x=g-65536*m,m=Math.floor((g=T+m+65535)/65536),T=g-65536*m,m=Math.floor((g=F+m+65535)/65536),F=g-65536*m,m=Math.floor((g=W+m+65535)/65536),W=g-65536*m,m=Math.floor((g=Z+m+65535)/65536),Z=g-65536*m,m=Math.floor((g=Q+m+65535)/65536),Q=g-65536*m,m=Math.floor((g=Y+m+65535)/65536),Y=g-65536*m,m=Math.floor((g=X+m+65535)/65536),X=g-65536*m,m=Math.floor((g=J+m+65535)/65536),J=g-65536*m,m=Math.floor((g=en+m+65535)/65536),en=g-65536*m,m=Math.floor((g=ei+m+65535)/65536),ei=g-65536*m,m=Math.floor((g=eo+m+65535)/65536),eo=g-65536*m,m=Math.floor((g=ea+m+65535)/65536),ea=g-65536*m,m=Math.floor((g=es+m+65535)/65536),es=g-65536*m,v+=m-1+37*(m-1),m=Math.floor((g=v+(m=1)+65535)/65536),v=g-65536*m,m=Math.floor((g=_+m+65535)/65536),_=g-65536*m,m=Math.floor((g=x+m+65535)/65536),x=g-65536*m,m=Math.floor((g=T+m+65535)/65536),T=g-65536*m,m=Math.floor((g=F+m+65535)/65536),F=g-65536*m,m=Math.floor((g=W+m+65535)/65536),W=g-65536*m,m=Math.floor((g=Z+m+65535)/65536),Z=g-65536*m,m=Math.floor((g=Q+m+65535)/65536),Q=g-65536*m,m=Math.floor((g=Y+m+65535)/65536),Y=g-65536*m,m=Math.floor((g=X+m+65535)/65536),X=g-65536*m,m=Math.floor((g=J+m+65535)/65536),J=g-65536*m,m=Math.floor((g=en+m+65535)/65536),en=g-65536*m,m=Math.floor((g=ei+m+65535)/65536),ei=g-65536*m,m=Math.floor((g=eo+m+65535)/65536),eo=g-65536*m,m=Math.floor((g=ea+m+65535)/65536),ea=g-65536*m,m=Math.floor((g=es+m+65535)/65536),es=g-65536*m,v+=m-1+37*(m-1),t[0]=v,t[1]=_,t[2]=x,t[3]=T,t[4]=F,t[5]=W,t[6]=Z,t[7]=Q,t[8]=Y,t[9]=X,t[10]=J,t[11]=en,t[12]=ei,t[13]=eo,t[14]=ea,t[15]=es}function scalarMult(t,s){let p=new Uint8Array(32),g=new Float64Array(80),m=gf(),v=gf(),x=gf(),T=gf(),F=gf(),W=gf();for(let s=0;s<31;s++)p[s]=t[s];p[31]=127&t[31]|64,p[0]&=248,function(t,s){for(let p=0;p<16;p++)t[p]=s[2*p]+(s[2*p+1]<<8);t[15]&=32767}(g,s);for(let t=0;t<16;t++)v[t]=g[t];m[0]=T[0]=1;for(let t=254;t>=0;--t){let s=p[t>>>3]>>>(7&t)&1;sel25519(m,v,s),sel25519(x,T,s),add(F,m,x),sub(m,m,x),add(x,v,T),sub(v,v,T),mul(T,F,F),mul(W,m,m),mul(m,x,m),mul(x,v,F),add(F,m,x),sub(m,m,x),mul(v,m,m),sub(x,T,W),mul(m,x,_),add(m,m,T),mul(x,x,m),mul(m,T,W),mul(T,v,g),mul(v,F,F),sel25519(m,v,s),sel25519(x,T,s)}for(let t=0;t<16;t++)g[t+16]=m[t],g[t+32]=x[t],g[t+48]=v[t],g[t+64]=T[t];let Z=g.subarray(32),Q=g.subarray(16);!function(t,s){let p=gf();for(let t=0;t<16;t++)p[t]=s[t];for(let t=253;t>=0;t--)mul(p,p,p),2!==t&&4!==t&&mul(p,p,s);for(let s=0;s<16;s++)t[s]=p[s]}(Z,Z),mul(Q,Q,Z);let Y=new Uint8Array(32);return!function(t,s){let p=gf(),g=gf();for(let t=0;t<16;t++)g[t]=s[t];car25519(g),car25519(g),car25519(g);for(let t=0;t<2;t++){p[0]=g[0]-65517;for(let t=1;t<15;t++)p[t]=g[t]-65535-(p[t-1]>>16&1),p[t-1]&=65535;p[15]=g[15]-32767-(p[14]>>16&1);let t=p[15]>>16&1;p[14]&=65535,sel25519(g,p,1-t)}for(let s=0;s<16;s++)t[2*s]=255&g[s],t[2*s+1]=g[s]>>8}(Y,Q),Y}s.Au=function(t){let p=(0,g.randomBytes)(32,t),_=function(t){if(t.length!==s.KS)throw Error(`x25519: seed must be ${s.KS} bytes`);let p=new Uint8Array(t),g=scalarMult(p,v);return{publicKey:g,secretKey:p}}(p);return(0,m.wipe)(p),_},s.gi=function(t,p,g=!1){if(t.length!==s.kz)throw Error("X25519: incorrect secret key length");if(p.length!==s.kz)throw Error("X25519: incorrect public key length");let m=scalarMult(t,p);if(g){let t=0;for(let s=0;s<m.length;s++)t|=m[s];if(0===t)throw Error("X25519: invalid shared key")}return m}},61882:function(){},36900:function(t,s,p){"use strict";Object.defineProperty(s,"__esModule",{value:!0});let g=p(70655);g.__exportStar(p(46869),s),g.__exportStar(p(88033),s)},46869:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.ONE_THOUSAND=s.ONE_HUNDRED=void 0,s.ONE_HUNDRED=100,s.ONE_THOUSAND=1e3},88033:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.ONE_YEAR=s.FOUR_WEEKS=s.THREE_WEEKS=s.TWO_WEEKS=s.ONE_WEEK=s.THIRTY_DAYS=s.SEVEN_DAYS=s.FIVE_DAYS=s.THREE_DAYS=s.ONE_DAY=s.TWENTY_FOUR_HOURS=s.TWELVE_HOURS=s.SIX_HOURS=s.THREE_HOURS=s.ONE_HOUR=s.SIXTY_MINUTES=s.THIRTY_MINUTES=s.TEN_MINUTES=s.FIVE_MINUTES=s.ONE_MINUTE=s.SIXTY_SECONDS=s.THIRTY_SECONDS=s.TEN_SECONDS=s.FIVE_SECONDS=s.ONE_SECOND=void 0,s.ONE_SECOND=1,s.FIVE_SECONDS=5,s.TEN_SECONDS=10,s.THIRTY_SECONDS=30,s.SIXTY_SECONDS=60,s.ONE_MINUTE=s.SIXTY_SECONDS,s.FIVE_MINUTES=5*s.ONE_MINUTE,s.TEN_MINUTES=10*s.ONE_MINUTE,s.THIRTY_MINUTES=30*s.ONE_MINUTE,s.SIXTY_MINUTES=60*s.ONE_MINUTE,s.ONE_HOUR=s.SIXTY_MINUTES,s.THREE_HOURS=3*s.ONE_HOUR,s.SIX_HOURS=6*s.ONE_HOUR,s.TWELVE_HOURS=12*s.ONE_HOUR,s.TWENTY_FOUR_HOURS=24*s.ONE_HOUR,s.ONE_DAY=s.TWENTY_FOUR_HOURS,s.THREE_DAYS=3*s.ONE_DAY,s.FIVE_DAYS=5*s.ONE_DAY,s.SEVEN_DAYS=7*s.ONE_DAY,s.THIRTY_DAYS=30*s.ONE_DAY,s.ONE_WEEK=s.SEVEN_DAYS,s.TWO_WEEKS=2*s.ONE_WEEK,s.THREE_WEEKS=3*s.ONE_WEEK,s.FOUR_WEEKS=4*s.ONE_WEEK,s.ONE_YEAR=365*s.ONE_DAY},66736:function(t,s,p){"use strict";Object.defineProperty(s,"__esModule",{value:!0});let g=p(70655);g.__exportStar(p(44273),s),g.__exportStar(p(47001),s),g.__exportStar(p(52939),s),g.__exportStar(p(36900),s)},52939:function(t,s,p){"use strict";Object.defineProperty(s,"__esModule",{value:!0});let g=p(70655);g.__exportStar(p(88766),s)},88766:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.IWatch=void 0,s.IWatch=class{}},83207:function(t,s,p){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.fromMiliseconds=s.toMiliseconds=void 0;let g=p(36900);s.toMiliseconds=function(t){return t*g.ONE_THOUSAND},s.fromMiliseconds=function(t){return Math.floor(t/g.ONE_THOUSAND)}},83873:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.delay=void 0,s.delay=function(t){return new Promise(s=>{setTimeout(()=>{s(!0)},t)})}},44273:function(t,s,p){"use strict";Object.defineProperty(s,"__esModule",{value:!0});let g=p(70655);g.__exportStar(p(83873),s),g.__exportStar(p(83207),s)},47001:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.Watch=void 0;let Watch=class Watch{constructor(){this.timestamps=new Map}start(t){if(this.timestamps.has(t))throw Error(`Watch already started for label: ${t}`);this.timestamps.set(t,{started:Date.now()})}stop(t){let s=this.get(t);if(void 0!==s.elapsed)throw Error(`Watch already stopped for label: ${t}`);let p=Date.now()-s.started;this.timestamps.set(t,{started:s.started,elapsed:p})}get(t){let s=this.timestamps.get(t);if(void 0===s)throw Error(`No timestamp found for label: ${t}`);return s}elapsed(t){let s=this.get(t),p=s.elapsed||Date.now()-s.started;return p}};s.Watch=Watch,s.default=Watch},5015:function(t,s,p){"use strict";p.d(s,{AW:function(){return es},O6:function(){return er},rV:function(){return eu},gn:function(){return lt},H1:function(){return st},hF:function(){return it},WG:function(){return $},pe:function(){return Ln},m$:function(){return kn},vB:function(){return ee},HI:function(){return Kn},E0:function(){return ft},Gq:function(){return at},$0:function(){return Jn},Z4:function(){return ct},Bv:function(){return Nt},Au:function(){return jn},jd:function(){return Dn},gu:function(){return Rn},D:function(){return zn},Z7:function(){return N},cO:function(){return yt},_H:function(){return mt},fc:function(){return At},D6:function(){return U},Hh:function(){return pt},Ym:function(){return Vn},rj:function(){return Mn},jU:function(){return q},gp:function(){return oe},rF:function(){return un},Bw:function(){return dt},UG:function(){return te},Gg:function(){return Zt},xW:function(){return Dt},b$:function(){return j},Ih:function(){return $t},h1:function(){return kt},Q8:function(){return Fn},o8:function(){return w},qt:function(){return D},Dd:function(){return Vt},$t:function(){return Ft},nf:function(){return Bt},Q0:function(){return Lt},in:function(){return cn},p8:function(){return Gt},sI:function(){return zt},al:function(){return Wt},L5:function(){return B},EJ:function(){return xt},Z2:function(){return an},PM:function(){return Kt},hH:function(){return Ht},ON:function(){return Qt},n:function(){return Mt},JT:function(){return qt},M_:function(){return h},jv:function(){return jt},KC:function(){return et},eG:function(){return S},fK:function(){return se},IP:function(){return nt},DQ:function(){return ve},iP:function(){return ut},M:function(){return Xe},he:function(){return bt},uw:function(){return Xt},Ll:function(){return xn},EN:function(){return Re}});var g=p(15501),m=p(512),v=p(31416),_=p(73294),x=p(57664),T=p(37466),F=p(83454),__spreadArray=function(t,s,p){if(p||2==arguments.length)for(var g,m=0,v=s.length;m<v;m++)!g&&m in s||(g||(g=Array.prototype.slice.call(s,0,m)),g[m]=s[m]);return t.concat(g||Array.prototype.slice.call(s))},BrowserInfo=function(t,s,p){this.name=t,this.version=s,this.os=p,this.type="browser"},NodeInfo=function(t){this.version=t,this.type="node",this.name="node",this.os=F.platform},SearchBotDeviceInfo=function(t,s,p,g){this.name=t,this.version=s,this.os=p,this.bot=g,this.type="bot-device"},BotInfo=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},ReactNativeInfo=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},W=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,Z=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],Q=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function parseUserAgent(t){var s=""!==t&&Z.reduce(function(s,p){var g=p[0],m=p[1];if(s)return s;var v=m.exec(t);return!!v&&[g,v]},!1);if(!s)return null;var p=s[0],g=s[1];if("searchbot"===p)return new BotInfo;var m=g[1]&&g[1].split(".").join("_").split("_").slice(0,3);m?m.length<3&&(m=__spreadArray(__spreadArray([],m,!0),function(t){for(var s=[],p=0;p<t;p++)s.push("0");return s}(3-m.length),!0)):m=[];var v=m.join("."),_=function(t){for(var s=0,p=Q.length;s<p;s++){var g=Q[s],m=g[0];if(g[1].exec(t))return m}return null}(t),x=W.exec(t);return x&&x[1]?new SearchBotDeviceInfo(p,v,_,x[1]):new BrowserInfo(p,v,_)}var Y=p(66736),X=p(62873),J=p(65755),en=p(66151);p(61882);let ei={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}};var eo=p(83454);function ve(t){let[s,p]=t.split(":");return{namespace:s,reference:p}}function Rn(t,s=[]){let p=[];return Object.keys(t).forEach(g=>{if(s.length&&!s.includes(g))return;let m=t[g];p.push(...m.accounts)}),p}function K(t,s){return t.includes(":")?[t]:s.chains||[]}let ea="base10",es="base16",el="base64pad",ec="utf8",eu=1;function jn(){let t=x.Au();return{privateKey:(0,T.BB)(t.secretKey,es),publicKey:(0,T.BB)(t.publicKey,es)}}function Dn(){let t=(0,v.randomBytes)(32);return(0,T.BB)(t,es)}function kn(t,s){let p=x.gi((0,T.mL)(t,es),(0,T.mL)(s,es),!0),g=new m.t(_.mE,p).expand(32);return(0,T.BB)(g,es)}function Vn(t){let s=(0,_.vp)((0,T.mL)(t,es));return(0,T.BB)(s,es)}function Mn(t){let s=(0,_.vp)((0,T.mL)(t,ec));return(0,T.BB)(s,es)}function $(t){return Number((0,T.BB)(t,ea))}function Kn(t){var s;let p=(s="u">typeof t.type?t.type:0,(0,T.mL)(`${s}`,ea));if($(p)===eu&&typeof t.senderPublicKey>"u")throw Error("Missing sender public key for type 1 envelope");let m="u">typeof t.senderPublicKey?(0,T.mL)(t.senderPublicKey,es):void 0,_="u">typeof t.iv?(0,T.mL)(t.iv,es):(0,v.randomBytes)(12),x=new g.OK((0,T.mL)(t.symKey,es)).seal(_,(0,T.mL)(t.message,ec));return function(t){if($(t.type)===eu){if(typeof t.senderPublicKey>"u")throw Error("Missing sender public key for type 1 envelope");return(0,T.BB)((0,T.zo)([t.type,t.senderPublicKey,t.iv,t.sealed]),el)}return(0,T.BB)((0,T.zo)([t.type,t.iv,t.sealed]),el)}({type:p,sealed:x,iv:_,senderPublicKey:m})}function Ln(t){let s=new g.OK((0,T.mL)(t.symKey,es)),{sealed:p,iv:m}=ee(t.encoded),v=s.open(m,p);if(null===v)throw Error("Failed to decrypt");return(0,T.BB)(v,ec)}function ee(t){let s=(0,T.mL)(t,el),p=s.slice(0,1);if($(p)===eu){let t=s.slice(1,33),g=s.slice(33,45),m=s.slice(45);return{type:p,sealed:m,iv:g,senderPublicKey:t}}let g=s.slice(1,13),m=s.slice(13);return{type:p,sealed:m,iv:g}}function xn(t,s){let p=ee(t);return Re({type:$(p.type),senderPublicKey:"u">typeof p.senderPublicKey?(0,T.BB)(p.senderPublicKey,es):void 0,receiverPublicKey:s?.receiverPublicKey})}function Re(t){let s=t?.type||0;if(s===eu){if(typeof t?.senderPublicKey>"u")throw Error("missing sender public key");if(typeof t?.receiverPublicKey>"u")throw Error("missing receiver public key")}return{type:s,senderPublicKey:t?.senderPublicKey,receiverPublicKey:t?.receiverPublicKey}}function Fn(t){return t.type===eu&&"string"==typeof t.senderPublicKey&&"string"==typeof t.receiverPublicKey}var ed=Object.defineProperty,eh=Object.getOwnPropertySymbols,ef=Object.prototype.hasOwnProperty,ep=Object.prototype.propertyIsEnumerable,Ue=(t,s,p)=>s in t?ed(t,s,{enumerable:!0,configurable:!0,writable:!0,value:p}):t[s]=p,_e=(t,s)=>{for(var p in s||(s={}))ef.call(s,p)&&Ue(t,p,s[p]);if(eh)for(var p of eh(s))ep.call(s,p)&&Ue(t,p,s[p]);return t};let eg={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"};function te(){return"u">typeof eo&&"u">typeof eo.versions&&"u">typeof eo.versions.node}function j(){return!(0,X.getDocument)()&&!!(0,X.getNavigator)()&&"ReactNative"===navigator.product}function q(){return!te()&&!!(0,X.getNavigator)()}function R(){return j()?eg.reactNative:te()?eg.node:q()?eg.browser:eg.unknown}function zn(){return(0,J.D)()||{name:"",description:"",url:"",icons:[""]}}function Jn({protocol:t,version:s,relayUrl:g,sdkVersion:m,auth:v,projectId:_,useOnCloseEvent:x}){var T;let W;let Z=g.split("?"),Q=function(t,s,g){let m=function(){var t;if(R()===eg.reactNative&&"u">typeof p.g&&"u">typeof(null==p.g?void 0:p.g.Platform)){let{OS:t,Version:s}=p.g.Platform;return[t,s].join("-")}let s=t?parseUserAgent(t):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new ReactNativeInfo:"undefined"!=typeof navigator?parseUserAgent(navigator.userAgent):void 0!==F&&F.version?new NodeInfo(F.version.slice(1)):null;if(null===s)return"unknown";let g=s.os?s.os.replace(" ","").toLowerCase():"unknown";return"browser"===s.type?[g,s.name,s.version].join("-"):[g,s.version].join("-")}(),v=function(){var t;let s=R();return s===eg.browser?[s,(null==(t=(0,X.getLocation)())?void 0:t.host)||"unknown"].join(":"):s}();return[[t,s].join("-"),["js",g].join("-"),m,v].join("/")}(t,s,m),Y=(T=Z[1]||"",W=_e(_e({},W=en.parse(T)),{auth:v,ua:Q,projectId:_,useOnCloseEvent:x||void 0}),T=en.stringify(W));return Z[0]+"?"+Y}function O(t,s){return t.filter(t=>s.includes(t)).length===t.length}function et(t){return Object.fromEntries(t.entries())}function nt(t){return new Map(Object.entries(t))}function st(t=Y.FIVE_MINUTES,s){let p,g,m;let v=(0,Y.toMiliseconds)(t||Y.FIVE_MINUTES);return{resolve:t=>{m&&p&&(clearTimeout(m),p(t))},reject:t=>{m&&g&&(clearTimeout(m),g(t))},done:()=>new Promise((t,_)=>{m=setTimeout(()=>{_(Error(s))},v),p=t,g=_})}}function it(t,s,p){return new Promise(async(g,m)=>{let v=setTimeout(()=>m(Error(p)),s);try{let s=await t;g(s)}catch(t){m(t)}clearTimeout(v)})}function re(t,s){if("string"==typeof s&&s.startsWith(`${t}:`))return s;if("topic"===t.toLowerCase()){if("string"!=typeof s)throw Error('Value must be "string" for expirer target type: topic');return`topic:${s}`}if("id"===t.toLowerCase()){if("number"!=typeof s)throw Error('Value must be "number" for expirer target type: id');return`id:${s}`}throw Error(`Unknown expirer target type: ${t}`)}function ct(t){return re("topic",t)}function at(t){return re("id",t)}function ut(t){let[s,p]=t.split(":"),g={id:void 0,topic:void 0};if("topic"===s&&"string"==typeof p)g.topic=p;else if("id"===s&&Number.isInteger(Number(p)))g.id=Number(p);else throw Error(`Invalid target, expected id:number or topic:string, got ${s}:${p}`);return g}function lt(t,s){return(0,Y.fromMiliseconds)((s||Date.now())+(0,Y.toMiliseconds)(t))}function dt(t){return Date.now()>=(0,Y.toMiliseconds)(t)}function ft(t,s){return`${t}${s?`:${s}`:""}`}function S(t=[],s=[]){return[...new Set([...t,...s])]}async function pt({id:t,topic:s,wcDeepLink:g}){try{if(!g)return;let m="string"==typeof g?JSON.parse(g):g,v=m?.href;if("string"!=typeof v)return;v.endsWith("/")&&(v=v.slice(0,-1));let _=`${v}/wc?requestId=${t}&sessionTopic=${s}`,x=R();x===eg.browser?_.startsWith("https://")?window.open(_,"_blank","noreferrer noopener"):window.open(_,"_self","noreferrer noopener"):x===eg.reactNative&&"u">typeof(null==p.g?void 0:p.g.Linking)&&await p.g.Linking.openURL(_)}catch(t){console.error(t)}}function mt(t){return t?.relay||{protocol:"irn"}}function yt(t){let s=ei[t];if(typeof s>"u")throw Error(`Relay Protocol not supported: ${t}`);return s}var em=Object.defineProperty,eb=Object.getOwnPropertySymbols,ew=Object.prototype.hasOwnProperty,ey=Object.prototype.propertyIsEnumerable,qe=(t,s,p)=>s in t?em(t,s,{enumerable:!0,configurable:!0,writable:!0,value:p}):t[s]=p,Et=(t,s)=>{for(var p in s||(s={}))ew.call(s,p)&&qe(t,p,s[p]);if(eb)for(var p of eb(s))ey.call(s,p)&&qe(t,p,s[p]);return t};function bt(t){var s;let p=t.indexOf(":"),g=-1!==t.indexOf("?")?t.indexOf("?"):void 0,m=t.substring(0,p),v=t.substring(p+1,g).split("@"),_="u">typeof g?t.substring(g):"",x=en.parse(_);return{protocol:m,topic:(s=v[0]).startsWith("//")?s.substring(2):s,version:parseInt(v[1],10),symKey:x.symKey,relay:function(t,s="-"){let p={},g="relay"+s;return Object.keys(t).forEach(s=>{if(s.startsWith(g)){let m=s.replace(g,""),v=t[s];p[m]=v}}),p}(x)}}function Nt(t){return`${t.protocol}:${t.topic}@${t.version}?`+en.stringify(Et({symKey:t.symKey},function(t,s="-"){let p={};return Object.keys(t).forEach(g=>{t[g]&&(p["relay"+s+g]=t[g])}),p}(t.relay)))}var ev=Object.defineProperty,eC=Object.defineProperties,e_=Object.getOwnPropertyDescriptors,ex=Object.getOwnPropertySymbols,eE=Object.prototype.hasOwnProperty,ek=Object.prototype.propertyIsEnumerable,Ye=(t,s,p)=>s in t?ev(t,s,{enumerable:!0,configurable:!0,writable:!0,value:p}):t[s]=p,Tt=(t,s)=>{for(var p in s||(s={}))eE.call(s,p)&&Ye(t,p,s[p]);if(ex)for(var p of ex(s))ek.call(s,p)&&Ye(t,p,s[p]);return t},Rt=(t,s)=>eC(t,e_(s));function A(t){let s=[];return t.forEach(t=>{let[p,g]=t.split(":");s.push(`${p}:${g}`)}),s}function At(t,s){let p=cn(t,s);if(p)throw Error(p.message);let g={};for(let[s,p]of Object.entries(t))g[s]={methods:p.methods,events:p.events,chains:p.accounts.map(t=>`${t.split(":")[0]}:${t.split(":")[1]}`)};return g}function oe(t){return t.includes(":")}function Xe(t){return oe(t)?t.split(":")[0]:t}function se(t){var s,p,g;let m={};if(!B(t))return m;for(let[v,_]of Object.entries(t)){let t=oe(v)?[v]:_.chains,x=_.methods||[],T=_.events||[],F=Xe(v);m[F]=Rt(Tt({},m[F]),{chains:S(t,null==(s=m[F])?void 0:s.chains),methods:S(x,null==(p=m[F])?void 0:p.methods),events:S(T,null==(g=m[F])?void 0:g.events)})}return m}let eS={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},eP={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function N(t,s){let{message:p,code:g}=eP[t];return{message:s?`${p} ${s}`:p,code:g}}function U(t,s){let{message:p,code:g}=eS[t];return{message:s?`${p} ${s}`:p,code:g}}function D(t,s){return!!Array.isArray(t)&&(!("u">typeof s)||!t.length||t.every(s))}function B(t){return Object.getPrototypeOf(t)===Object.prototype&&Object.keys(t).length}function w(t){return typeof t>"u"}function h(t,s){return!!(s&&w(t))||"string"==typeof t&&!!t.trim().length}function G(t,s){return!!(s&&w(t))||"number"==typeof t&&!isNaN(t)}function $t(t,s){let{requiredNamespaces:p}=s,g=Object.keys(t.namespaces),m=Object.keys(p),v=!0;return!!O(m,g)&&(g.forEach(s=>{let{accounts:g,methods:m,events:_}=t.namespaces[s],x=A(g),T=p[s];O(K(s,T),x)&&O(T.methods,m)&&O(T.events,_)||(v=!1)}),v)}function k(t){return!!(h(t,!1)&&t.includes(":"))&&2===t.split(":").length}function jt(t){if(h(t,!1))try{return"u">typeof new URL(t)}catch{}return!1}function Dt(t){var s;return null==(s=t?.proposer)?void 0:s.publicKey}function kt(t){return t?.topic}function Vt(t,s){let p=null;return h(t?.publicKey,!1)||(p=N("MISSING_OR_INVALID",`${s} controller public key should be a string`)),p}function ie(t){let s=!0;return D(t)?t.length&&(s=t.every(t=>h(t,!1))):s=!1,s}function ce(t,s){let p=null;return Object.values(t).forEach(t=>{var g;let m;if(p)return;let v=(g=`${s}, namespace`,m=null,ie(t?.methods)?ie(t?.events)||(m=U("UNSUPPORTED_EVENTS",`${g}, events should be an array of strings or empty array for no events`)):m=U("UNSUPPORTED_METHODS",`${g}, methods should be an array of strings or empty array for no methods`),m);v&&(p=v)}),p}function Mt(t,s,p){let g=null;if(t&&B(t)){let m;let v=ce(t,s);v&&(g=v);let _=(m=null,Object.entries(t).forEach(([t,g])=>{var v,_;let x;if(m)return;let T=(v=K(t,g),_=`${s} ${p}`,x=null,D(v)&&v.length?v.forEach(t=>{x||k(t)||(x=U("UNSUPPORTED_CHAINS",`${_}, chain ${t} should be a string and conform to "namespace:chainId" format`))}):k(t)||(x=U("UNSUPPORTED_CHAINS",`${_}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),x);T&&(m=T)}),m);_&&(g=_)}else g=N("MISSING_OR_INVALID",`${s}, ${p} should be an object with data`);return g}function cn(t,s){let p=null;if(t&&B(t)){let g;let m=ce(t,s);m&&(p=m);let v=(g=null,Object.values(t).forEach(t=>{var p,m;let v;if(g)return;let _=(p=t?.accounts,m=`${s} namespace`,v=null,D(p)?p.forEach(t=>{v||function(t){if(h(t,!1)&&t.includes(":")){let s=t.split(":");if(3===s.length){let t=s[0]+":"+s[1];return!!s[2]&&k(t)}}return!1}(t)||(v=U("UNSUPPORTED_ACCOUNTS",`${m}, account ${t} should be a string and conform to "namespace:chainId:address" format`))}):v=U("UNSUPPORTED_ACCOUNTS",`${m}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),v);_&&(g=_)}),g);v&&(p=v)}else p=N("MISSING_OR_INVALID",`${s}, namespaces should be an object with data`);return p}function an(t){return h(t.protocol,!0)}function Kt(t,s){let p=!1;return s&&!t?p=!0:t&&D(t)&&t.length&&t.forEach(t=>{p=an(t)}),p}function Lt(t){return"number"==typeof t}function xt(t){return"u">typeof t}function Ft(t){return!(!t||"object"!=typeof t||!t.code||!G(t.code,!1)||!t.message||!h(t.message,!1))}function Ht(t){return!(w(t)||!h(t.method,!1))}function qt(t){return!(w(t)||w(t.result)&&w(t.error)||!G(t.id,!1)||!h(t.jsonrpc,!1))}function Bt(t){return!(w(t)||!h(t.name,!1))}function Gt(t,s){return!(!k(s)||!(function(t){let s=[];return Object.values(t).forEach(t=>{s.push(...A(t.accounts))}),s})(t).includes(s))}function Wt(t,s,p){return!!h(p,!1)&&(function(t,s){let p=[];return Object.values(t).forEach(t=>{A(t.accounts).includes(s)&&p.push(...t.methods)}),p})(t,s).includes(p)}function zt(t,s,p){return!!h(p,!1)&&(function(t,s){let p=[];return Object.values(t).forEach(t=>{A(t.accounts).includes(s)&&p.push(...t.events)}),p})(t,s).includes(p)}function un(t,s,p){let g=null,m=function(t){let s={};return Object.keys(t).forEach(p=>{var g;p.includes(":")?s[p]=t[p]:null==(g=t[p].chains)||g.forEach(g=>{s[g]={methods:t[p].methods,events:t[p].events}})}),s}(t),v=function(t){let s={};return Object.keys(t).forEach(p=>{if(p.includes(":"))s[p]=t[p];else{let g=A(t[p].accounts);g?.forEach(g=>{s[g]={accounts:t[p].accounts.filter(t=>t.includes(`${g}:`)),methods:t[p].methods,events:t[p].events}})}}),s}(s),_=Object.keys(m),x=Object.keys(v),T=ln(Object.keys(t)),F=ln(Object.keys(s)),W=T.filter(t=>!F.includes(t));return W.length&&(g=N("NON_CONFORMING_NAMESPACES",`${p} namespaces keys don't satisfy requiredNamespaces.
      Required: ${W.toString()}
      Received: ${Object.keys(s).toString()}`)),O(_,x)||(g=N("NON_CONFORMING_NAMESPACES",`${p} namespaces chains don't satisfy required namespaces.
      Required: ${_.toString()}
      Approved: ${x.toString()}`)),Object.keys(s).forEach(t=>{if(!t.includes(":")||g)return;let m=A(s[t].accounts);m.includes(t)||(g=N("NON_CONFORMING_NAMESPACES",`${p} namespaces accounts don't satisfy namespace accounts for ${t}
        Required: ${t}
        Approved: ${m.toString()}`))}),_.forEach(t=>{g||(O(m[t].methods,v[t].methods)?O(m[t].events,v[t].events)||(g=N("NON_CONFORMING_NAMESPACES",`${p} namespaces events don't satisfy namespace events for ${t}`)):g=N("NON_CONFORMING_NAMESPACES",`${p} namespaces methods don't satisfy namespace methods for ${t}`))}),g}function ln(t){return[...new Set(t.map(t=>t.includes(":")?t.split(":")[0]:t))]}function Qt(t,s){return G(t,!1)&&t<=s.max&&t>=s.min}function Zt(){let t=R();return new Promise(s=>{switch(t){case eg.browser:s(q()&&navigator?.onLine);break;case eg.reactNative:s(fn());break;case eg.node:default:s(!0)}})}async function fn(){if(j()&&"u">typeof p.g&&null!=p.g&&p.g.NetInfo){let t=await (null==p.g?void 0:p.g.NetInfo.fetch());return t?.isConnected}return!0}function Xt(t){switch(R()){case eg.browser:!j()&&q()&&(window.addEventListener("online",()=>t(!0)),window.addEventListener("offline",()=>t(!1)));break;case eg.reactNative:j()&&"u">typeof p.g&&null!=p.g&&p.g.NetInfo&&p.g?.NetInfo.addEventListener(s=>t(s?.isConnected));case eg.node:}}let eA={};let er=class er{static get(t){return eA[t]}static set(t,s){eA[t]=s}static delete(t){delete eA[t]}}},66151:function(t,s,p){"use strict";let g=p(70610),m=p(44020),v=p(80500),_=p(92806),isNullOrUndefined=t=>null==t,x=Symbol("encodeFragmentIdentifier");function validateArrayFormatSeparator(t){if("string"!=typeof t||1!==t.length)throw TypeError("arrayFormatSeparator must be single character string")}function encode(t,s){return s.encode?s.strict?g(t):encodeURIComponent(t):t}function decode(t,s){return s.decode?m(t):t}function removeHash(t){let s=t.indexOf("#");return -1!==s&&(t=t.slice(0,s)),t}function extract(t){t=removeHash(t);let s=t.indexOf("?");return -1===s?"":t.slice(s+1)}function parseValue(t,s){return s.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):s.parseBooleans&&null!==t&&("true"===t.toLowerCase()||"false"===t.toLowerCase())&&(t="true"===t.toLowerCase()),t}function parse(t,s){validateArrayFormatSeparator((s=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},s)).arrayFormatSeparator);let p=function(t){let s;switch(t.arrayFormat){case"index":return(t,p,g)=>{if(s=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),!s){g[t]=p;return}void 0===g[t]&&(g[t]={}),g[t][s[1]]=p};case"bracket":return(t,p,g)=>{if(s=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),!s){g[t]=p;return}if(void 0===g[t]){g[t]=[p];return}g[t]=[].concat(g[t],p)};case"colon-list-separator":return(t,p,g)=>{if(s=/(:list)$/.exec(t),t=t.replace(/:list$/,""),!s){g[t]=p;return}if(void 0===g[t]){g[t]=[p];return}g[t]=[].concat(g[t],p)};case"comma":case"separator":return(s,p,g)=>{let m="string"==typeof p&&p.includes(t.arrayFormatSeparator),v="string"==typeof p&&!m&&decode(p,t).includes(t.arrayFormatSeparator);p=v?decode(p,t):p;let _=m||v?p.split(t.arrayFormatSeparator).map(s=>decode(s,t)):null===p?p:decode(p,t);g[s]=_};case"bracket-separator":return(s,p,g)=>{let m=/(\[\])$/.test(s);if(s=s.replace(/\[\]$/,""),!m){g[s]=p?decode(p,t):p;return}let v=null===p?[]:p.split(t.arrayFormatSeparator).map(s=>decode(s,t));if(void 0===g[s]){g[s]=v;return}g[s]=[].concat(g[s],v)};default:return(t,s,p)=>{if(void 0===p[t]){p[t]=s;return}p[t]=[].concat(p[t],s)}}}(s),g=Object.create(null);if("string"!=typeof t||!(t=t.trim().replace(/^[?#&]/,"")))return g;for(let m of t.split("&")){if(""===m)continue;let[t,_]=v(s.decode?m.replace(/\+/g," "):m,"=");_=void 0===_?null:["comma","separator","bracket-separator"].includes(s.arrayFormat)?_:decode(_,s),p(decode(t,s),_,g)}for(let t of Object.keys(g)){let p=g[t];if("object"==typeof p&&null!==p)for(let t of Object.keys(p))p[t]=parseValue(p[t],s);else g[t]=parseValue(p,s)}return!1===s.sort?g:(!0===s.sort?Object.keys(g).sort():Object.keys(g).sort(s.sort)).reduce((t,s)=>{let p=g[s];return p&&"object"==typeof p&&!Array.isArray(p)?t[s]=function keysSorter(t){return Array.isArray(t)?t.sort():"object"==typeof t?keysSorter(Object.keys(t)).sort((t,s)=>Number(t)-Number(s)).map(s=>t[s]):t}(p):t[s]=p,t},Object.create(null))}s.extract=extract,s.parse=parse,s.stringify=(t,s)=>{if(!t)return"";validateArrayFormatSeparator((s=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},s)).arrayFormatSeparator);let shouldFilter=p=>s.skipNull&&isNullOrUndefined(t[p])||s.skipEmptyString&&""===t[p],p=function(t){switch(t.arrayFormat){case"index":return s=>(p,g)=>{let m=p.length;return void 0===g||t.skipNull&&null===g||t.skipEmptyString&&""===g?p:null===g?[...p,[encode(s,t),"[",m,"]"].join("")]:[...p,[encode(s,t),"[",encode(m,t),"]=",encode(g,t)].join("")]};case"bracket":return s=>(p,g)=>void 0===g||t.skipNull&&null===g||t.skipEmptyString&&""===g?p:null===g?[...p,[encode(s,t),"[]"].join("")]:[...p,[encode(s,t),"[]=",encode(g,t)].join("")];case"colon-list-separator":return s=>(p,g)=>void 0===g||t.skipNull&&null===g||t.skipEmptyString&&""===g?p:null===g?[...p,[encode(s,t),":list="].join("")]:[...p,[encode(s,t),":list=",encode(g,t)].join("")];case"comma":case"separator":case"bracket-separator":{let s="bracket-separator"===t.arrayFormat?"[]=":"=";return p=>(g,m)=>void 0===m||t.skipNull&&null===m||t.skipEmptyString&&""===m?g:(m=null===m?"":m,0===g.length)?[[encode(p,t),s,encode(m,t)].join("")]:[[g,encode(m,t)].join(t.arrayFormatSeparator)]}default:return s=>(p,g)=>void 0===g||t.skipNull&&null===g||t.skipEmptyString&&""===g?p:null===g?[...p,encode(s,t)]:[...p,[encode(s,t),"=",encode(g,t)].join("")]}}(s),g={};for(let s of Object.keys(t))shouldFilter(s)||(g[s]=t[s]);let m=Object.keys(g);return!1!==s.sort&&m.sort(s.sort),m.map(g=>{let m=t[g];return void 0===m?"":null===m?encode(g,s):Array.isArray(m)?0===m.length&&"bracket-separator"===s.arrayFormat?encode(g,s)+"[]":m.reduce(p(g),[]).join("&"):encode(g,s)+"="+encode(m,s)}).filter(t=>t.length>0).join("&")},s.parseUrl=(t,s)=>{s=Object.assign({decode:!0},s);let[p,g]=v(t,"#");return Object.assign({url:p.split("?")[0]||"",query:parse(extract(t),s)},s&&s.parseFragmentIdentifier&&g?{fragmentIdentifier:decode(g,s)}:{})},s.stringifyUrl=(t,p)=>{p=Object.assign({encode:!0,strict:!0,[x]:!0},p);let g=removeHash(t.url).split("?")[0]||"",m=s.extract(t.url),v=s.parse(m,{sort:!1}),_=Object.assign(v,t.query),T=s.stringify(_,p);T&&(T=`?${T}`);let F=function(t){let s="",p=t.indexOf("#");return -1!==p&&(s=t.slice(p)),s}(t.url);return t.fragmentIdentifier&&(F=`#${p[x]?encode(t.fragmentIdentifier,p):t.fragmentIdentifier}`),`${g}${T}${F}`},s.pick=(t,p,g)=>{g=Object.assign({parseFragmentIdentifier:!0,[x]:!1},g);let{url:m,query:v,fragmentIdentifier:T}=s.parseUrl(t,g);return s.stringifyUrl({url:m,query:_(v,p),fragmentIdentifier:T},g)},s.exclude=(t,p,g)=>{let m=Array.isArray(p)?t=>!p.includes(t):(t,s)=>!p(t,s);return s.pick(t,m,g)}},62873:function(t,s){"use strict";function getFromWindow(t){let s;return"undefined"!=typeof window&&void 0!==window[t]&&(s=window[t]),s}function getFromWindowOrThrow(t){let s=getFromWindow(t);if(!s)throw Error(`${t} is not defined in Window`);return s}Object.defineProperty(s,"__esModule",{value:!0}),s.getLocalStorage=s.getLocalStorageOrThrow=s.getCrypto=s.getCryptoOrThrow=s.getLocation=s.getLocationOrThrow=s.getNavigator=s.getNavigatorOrThrow=s.getDocument=s.getDocumentOrThrow=s.getFromWindowOrThrow=s.getFromWindow=void 0,s.getFromWindow=getFromWindow,s.getFromWindowOrThrow=getFromWindowOrThrow,s.getDocumentOrThrow=function(){return getFromWindowOrThrow("document")},s.getDocument=function(){return getFromWindow("document")},s.getNavigatorOrThrow=function(){return getFromWindowOrThrow("navigator")},s.getNavigator=function(){return getFromWindow("navigator")},s.getLocationOrThrow=function(){return getFromWindowOrThrow("location")},s.getLocation=function(){return getFromWindow("location")},s.getCryptoOrThrow=function(){return getFromWindowOrThrow("crypto")},s.getCrypto=function(){return getFromWindow("crypto")},s.getLocalStorageOrThrow=function(){return getFromWindowOrThrow("localStorage")},s.getLocalStorage=function(){return getFromWindow("localStorage")}},65755:function(t,s,p){"use strict";s.D=void 0;let g=p(62873);s.D=function(){let t,s,p;try{t=g.getDocumentOrThrow(),s=g.getLocationOrThrow()}catch(t){return null}function getWindowMetadataOfAny(...s){let p=t.getElementsByTagName("meta");for(let t=0;t<p.length;t++){let g=p[t],m=["itemprop","property","name"].map(t=>g.getAttribute(t)).filter(t=>!!t&&s.includes(t));if(m.length&&m){let t=g.getAttribute("content");if(t)return t}}return""}let m=((p=getWindowMetadataOfAny("name","og:site_name","og:title","twitter:title"))||(p=t.title),p),v=function(){let t=getWindowMetadataOfAny("description","og:description","twitter:description","keywords");return t}(),_=s.origin,x=function(){let p=t.getElementsByTagName("link"),g=[];for(let t=0;t<p.length;t++){let m=p[t],v=m.getAttribute("rel");if(v&&v.toLowerCase().indexOf("icon")>-1){let t=m.getAttribute("href");if(t){if(-1===t.toLowerCase().indexOf("https:")&&-1===t.toLowerCase().indexOf("http:")&&0!==t.indexOf("//")){let p=s.protocol+"//"+s.host;if(0===t.indexOf("/"))p+=t;else{let g=s.pathname.split("/");g.pop();let m=g.join("/");p+=m+"/"+t}g.push(p)}else if(0===t.indexOf("//")){let p=s.protocol+t;g.push(p)}else g.push(t)}}}return g}();return{description:v,url:_,icons:x,name:m}}},79742:function(t,s){"use strict";s.byteLength=function(t){var s=getLens(t),p=s[0],g=s[1];return(p+g)*3/4-g},s.toByteArray=function(t){var s,p,v=getLens(t),_=v[0],x=v[1],T=new m((_+x)*3/4-x),F=0,W=x>0?_-4:_;for(p=0;p<W;p+=4)s=g[t.charCodeAt(p)]<<18|g[t.charCodeAt(p+1)]<<12|g[t.charCodeAt(p+2)]<<6|g[t.charCodeAt(p+3)],T[F++]=s>>16&255,T[F++]=s>>8&255,T[F++]=255&s;return 2===x&&(s=g[t.charCodeAt(p)]<<2|g[t.charCodeAt(p+1)]>>4,T[F++]=255&s),1===x&&(s=g[t.charCodeAt(p)]<<10|g[t.charCodeAt(p+1)]<<4|g[t.charCodeAt(p+2)]>>2,T[F++]=s>>8&255,T[F++]=255&s),T},s.fromByteArray=function(t){for(var s,g=t.length,m=g%3,v=[],_=0,x=g-m;_<x;_+=16383)v.push(function(t,s,g){for(var m,v=[],_=s;_<g;_+=3)v.push(p[(m=(t[_]<<16&16711680)+(t[_+1]<<8&65280)+(255&t[_+2]))>>18&63]+p[m>>12&63]+p[m>>6&63]+p[63&m]);return v.join("")}(t,_,_+16383>x?x:_+16383));return 1===m?v.push(p[(s=t[g-1])>>2]+p[s<<4&63]+"=="):2===m&&v.push(p[(s=(t[g-2]<<8)+t[g-1])>>10]+p[s>>4&63]+p[s<<2&63]+"="),v.join("")};for(var p=[],g=[],m="undefined"!=typeof Uint8Array?Uint8Array:Array,v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",_=0,x=v.length;_<x;++_)p[_]=v[_],g[v.charCodeAt(_)]=_;function getLens(t){var s=t.length;if(s%4>0)throw Error("Invalid string. Length must be a multiple of 4");var p=t.indexOf("=");-1===p&&(p=s);var g=p===s?0:4-p%4;return[p,g]}g["-".charCodeAt(0)]=62,g["_".charCodeAt(0)]=63},48764:function(t,s,p){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */let g=p(79742),m=p(80645),v="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function createBuffer(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');let s=new Uint8Array(t);return Object.setPrototypeOf(s,Buffer.prototype),s}function Buffer(t,s,p){if("number"==typeof t){if("string"==typeof s)throw TypeError('The "string" argument must be of type string. Received type number');return allocUnsafe(t)}return from(t,s,p)}function from(t,s,p){if("string"==typeof t)return function(t,s){if(("string"!=typeof s||""===s)&&(s="utf8"),!Buffer.isEncoding(s))throw TypeError("Unknown encoding: "+s);let p=0|byteLength(t,s),g=createBuffer(p),m=g.write(t,s);return m!==p&&(g=g.slice(0,m)),g}(t,s);if(ArrayBuffer.isView(t))return function(t){if(isInstance(t,Uint8Array)){let s=new Uint8Array(t);return fromArrayBuffer(s.buffer,s.byteOffset,s.byteLength)}return fromArrayLike(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(isInstance(t,ArrayBuffer)||t&&isInstance(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(isInstance(t,SharedArrayBuffer)||t&&isInstance(t.buffer,SharedArrayBuffer)))return fromArrayBuffer(t,s,p);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');let g=t.valueOf&&t.valueOf();if(null!=g&&g!==t)return Buffer.from(g,s,p);let m=function(t){var s;if(Buffer.isBuffer(t)){let s=0|checked(t.length),p=createBuffer(s);return 0===p.length||t.copy(p,0,0,s),p}return void 0!==t.length?"number"!=typeof t.length||(s=t.length)!=s?createBuffer(0):fromArrayLike(t):"Buffer"===t.type&&Array.isArray(t.data)?fromArrayLike(t.data):void 0}(t);if(m)return m;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return Buffer.from(t[Symbol.toPrimitive]("string"),s,p);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function assertSize(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function allocUnsafe(t){return assertSize(t),createBuffer(t<0?0:0|checked(t))}function fromArrayLike(t){let s=t.length<0?0:0|checked(t.length),p=createBuffer(s);for(let g=0;g<s;g+=1)p[g]=255&t[g];return p}function fromArrayBuffer(t,s,p){let g;if(s<0||t.byteLength<s)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<s+(p||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(g=void 0===s&&void 0===p?new Uint8Array(t):void 0===p?new Uint8Array(t,s):new Uint8Array(t,s,p),Buffer.prototype),g}function checked(t){if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function byteLength(t,s){if(Buffer.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||isInstance(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let p=t.length,g=arguments.length>2&&!0===arguments[2];if(!g&&0===p)return 0;let m=!1;for(;;)switch(s){case"ascii":case"latin1":case"binary":return p;case"utf8":case"utf-8":return utf8ToBytes(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*p;case"hex":return p>>>1;case"base64":return base64ToBytes(t).length;default:if(m)return g?-1:utf8ToBytes(t).length;s=(""+s).toLowerCase(),m=!0}}function slowToString(t,s,p){let m=!1;if((void 0===s||s<0)&&(s=0),s>this.length||((void 0===p||p>this.length)&&(p=this.length),p<=0||(p>>>=0)<=(s>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,s,p){let g=t.length;(!s||s<0)&&(s=0),(!p||p<0||p>g)&&(p=g);let m="";for(let g=s;g<p;++g)m+=T[t[g]];return m}(this,s,p);case"utf8":case"utf-8":return utf8Slice(this,s,p);case"ascii":return function(t,s,p){let g="";p=Math.min(t.length,p);for(let m=s;m<p;++m)g+=String.fromCharCode(127&t[m]);return g}(this,s,p);case"latin1":case"binary":return function(t,s,p){let g="";p=Math.min(t.length,p);for(let m=s;m<p;++m)g+=String.fromCharCode(t[m]);return g}(this,s,p);case"base64":var v,_;return v=s,_=p,0===v&&_===this.length?g.fromByteArray(this):g.fromByteArray(this.slice(v,_));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,s,p){let g=t.slice(s,p),m="";for(let t=0;t<g.length-1;t+=2)m+=String.fromCharCode(g[t]+256*g[t+1]);return m}(this,s,p);default:if(m)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),m=!0}}function swap(t,s,p){let g=t[s];t[s]=t[p],t[p]=g}function bidirectionalIndexOf(t,s,p,g,m){var v;if(0===t.length)return -1;if("string"==typeof p?(g=p,p=0):p>2147483647?p=2147483647:p<-2147483648&&(p=-2147483648),(v=p=+p)!=v&&(p=m?0:t.length-1),p<0&&(p=t.length+p),p>=t.length){if(m)return -1;p=t.length-1}else if(p<0){if(!m)return -1;p=0}if("string"==typeof s&&(s=Buffer.from(s,g)),Buffer.isBuffer(s))return 0===s.length?-1:arrayIndexOf(t,s,p,g,m);if("number"==typeof s)return(s&=255,"function"==typeof Uint8Array.prototype.indexOf)?m?Uint8Array.prototype.indexOf.call(t,s,p):Uint8Array.prototype.lastIndexOf.call(t,s,p):arrayIndexOf(t,[s],p,g,m);throw TypeError("val must be string, number or Buffer")}function arrayIndexOf(t,s,p,g,m){let v,_=1,x=t.length,T=s.length;if(void 0!==g&&("ucs2"===(g=String(g).toLowerCase())||"ucs-2"===g||"utf16le"===g||"utf-16le"===g)){if(t.length<2||s.length<2)return -1;_=2,x/=2,T/=2,p/=2}function read(t,s){return 1===_?t[s]:t.readUInt16BE(s*_)}if(m){let g=-1;for(v=p;v<x;v++)if(read(t,v)===read(s,-1===g?0:v-g)){if(-1===g&&(g=v),v-g+1===T)return g*_}else -1!==g&&(v-=v-g),g=-1}else for(p+T>x&&(p=x-T),v=p;v>=0;v--){let p=!0;for(let g=0;g<T;g++)if(read(t,v+g)!==read(s,g)){p=!1;break}if(p)return v}return -1}function utf8Slice(t,s,p){p=Math.min(t.length,p);let g=[],m=s;for(;m<p;){let s=t[m],v=null,_=s>239?4:s>223?3:s>191?2:1;if(m+_<=p){let p,g,x,T;switch(_){case 1:s<128&&(v=s);break;case 2:(192&(p=t[m+1]))==128&&(T=(31&s)<<6|63&p)>127&&(v=T);break;case 3:p=t[m+1],g=t[m+2],(192&p)==128&&(192&g)==128&&(T=(15&s)<<12|(63&p)<<6|63&g)>2047&&(T<55296||T>57343)&&(v=T);break;case 4:p=t[m+1],g=t[m+2],x=t[m+3],(192&p)==128&&(192&g)==128&&(192&x)==128&&(T=(15&s)<<18|(63&p)<<12|(63&g)<<6|63&x)>65535&&T<1114112&&(v=T)}}null===v?(v=65533,_=1):v>65535&&(v-=65536,g.push(v>>>10&1023|55296),v=56320|1023&v),g.push(v),m+=_}return function(t){let s=t.length;if(s<=4096)return String.fromCharCode.apply(String,t);let p="",g=0;for(;g<s;)p+=String.fromCharCode.apply(String,t.slice(g,g+=4096));return p}(g)}function checkOffset(t,s,p){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+s>p)throw RangeError("Trying to access beyond buffer length")}function checkInt(t,s,p,g,m,v){if(!Buffer.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(s>m||s<v)throw RangeError('"value" argument is out of bounds');if(p+g>t.length)throw RangeError("Index out of range")}function wrtBigUInt64LE(t,s,p,g,m){checkIntBI(s,g,m,t,p,7);let v=Number(s&BigInt(4294967295));t[p++]=v,v>>=8,t[p++]=v,v>>=8,t[p++]=v,v>>=8,t[p++]=v;let _=Number(s>>BigInt(32)&BigInt(4294967295));return t[p++]=_,_>>=8,t[p++]=_,_>>=8,t[p++]=_,_>>=8,t[p++]=_,p}function wrtBigUInt64BE(t,s,p,g,m){checkIntBI(s,g,m,t,p,7);let v=Number(s&BigInt(4294967295));t[p+7]=v,v>>=8,t[p+6]=v,v>>=8,t[p+5]=v,v>>=8,t[p+4]=v;let _=Number(s>>BigInt(32)&BigInt(4294967295));return t[p+3]=_,_>>=8,t[p+2]=_,_>>=8,t[p+1]=_,_>>=8,t[p]=_,p+8}function checkIEEE754(t,s,p,g,m,v){if(p+g>t.length||p<0)throw RangeError("Index out of range")}function writeFloat(t,s,p,g,v){return s=+s,p>>>=0,v||checkIEEE754(t,s,p,4,34028234663852886e22,-34028234663852886e22),m.write(t,s,p,g,23,4),p+4}function writeDouble(t,s,p,g,v){return s=+s,p>>>=0,v||checkIEEE754(t,s,p,8,17976931348623157e292,-17976931348623157e292),m.write(t,s,p,g,52,8),p+8}s.Buffer=Buffer,s.SlowBuffer=function(t){return+t!=t&&(t=0),Buffer.alloc(+t)},s.INSPECT_MAX_BYTES=50,s.kMaxLength=2147483647,Buffer.TYPED_ARRAY_SUPPORT=function(){try{let t=new Uint8Array(1),s={foo:function(){return 42}};return Object.setPrototypeOf(s,Uint8Array.prototype),Object.setPrototypeOf(t,s),42===t.foo()}catch(t){return!1}}(),Buffer.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Buffer.prototype,"parent",{enumerable:!0,get:function(){if(Buffer.isBuffer(this))return this.buffer}}),Object.defineProperty(Buffer.prototype,"offset",{enumerable:!0,get:function(){if(Buffer.isBuffer(this))return this.byteOffset}}),Buffer.poolSize=8192,Buffer.from=function(t,s,p){return from(t,s,p)},Object.setPrototypeOf(Buffer.prototype,Uint8Array.prototype),Object.setPrototypeOf(Buffer,Uint8Array),Buffer.alloc=function(t,s,p){return(assertSize(t),t<=0)?createBuffer(t):void 0!==s?"string"==typeof p?createBuffer(t).fill(s,p):createBuffer(t).fill(s):createBuffer(t)},Buffer.allocUnsafe=function(t){return allocUnsafe(t)},Buffer.allocUnsafeSlow=function(t){return allocUnsafe(t)},Buffer.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==Buffer.prototype},Buffer.compare=function(t,s){if(isInstance(t,Uint8Array)&&(t=Buffer.from(t,t.offset,t.byteLength)),isInstance(s,Uint8Array)&&(s=Buffer.from(s,s.offset,s.byteLength)),!Buffer.isBuffer(t)||!Buffer.isBuffer(s))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===s)return 0;let p=t.length,g=s.length;for(let m=0,v=Math.min(p,g);m<v;++m)if(t[m]!==s[m]){p=t[m],g=s[m];break}return p<g?-1:g<p?1:0},Buffer.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Buffer.concat=function(t,s){let p;if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return Buffer.alloc(0);if(void 0===s)for(p=0,s=0;p<t.length;++p)s+=t[p].length;let g=Buffer.allocUnsafe(s),m=0;for(p=0;p<t.length;++p){let s=t[p];if(isInstance(s,Uint8Array))m+s.length>g.length?(Buffer.isBuffer(s)||(s=Buffer.from(s)),s.copy(g,m)):Uint8Array.prototype.set.call(g,s,m);else if(Buffer.isBuffer(s))s.copy(g,m);else throw TypeError('"list" argument must be an Array of Buffers');m+=s.length}return g},Buffer.byteLength=byteLength,Buffer.prototype._isBuffer=!0,Buffer.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let s=0;s<t;s+=2)swap(this,s,s+1);return this},Buffer.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let s=0;s<t;s+=4)swap(this,s,s+3),swap(this,s+1,s+2);return this},Buffer.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let s=0;s<t;s+=8)swap(this,s,s+7),swap(this,s+1,s+6),swap(this,s+2,s+5),swap(this,s+3,s+4);return this},Buffer.prototype.toString=function(){let t=this.length;return 0===t?"":0==arguments.length?utf8Slice(this,0,t):slowToString.apply(this,arguments)},Buffer.prototype.toLocaleString=Buffer.prototype.toString,Buffer.prototype.equals=function(t){if(!Buffer.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===Buffer.compare(this,t)},Buffer.prototype.inspect=function(){let t="",p=s.INSPECT_MAX_BYTES;return t=this.toString("hex",0,p).replace(/(.{2})/g,"$1 ").trim(),this.length>p&&(t+=" ... "),"<Buffer "+t+">"},v&&(Buffer.prototype[v]=Buffer.prototype.inspect),Buffer.prototype.compare=function(t,s,p,g,m){if(isInstance(t,Uint8Array)&&(t=Buffer.from(t,t.offset,t.byteLength)),!Buffer.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===s&&(s=0),void 0===p&&(p=t?t.length:0),void 0===g&&(g=0),void 0===m&&(m=this.length),s<0||p>t.length||g<0||m>this.length)throw RangeError("out of range index");if(g>=m&&s>=p)return 0;if(g>=m)return -1;if(s>=p)return 1;if(s>>>=0,p>>>=0,g>>>=0,m>>>=0,this===t)return 0;let v=m-g,_=p-s,x=Math.min(v,_),T=this.slice(g,m),F=t.slice(s,p);for(let t=0;t<x;++t)if(T[t]!==F[t]){v=T[t],_=F[t];break}return v<_?-1:_<v?1:0},Buffer.prototype.includes=function(t,s,p){return -1!==this.indexOf(t,s,p)},Buffer.prototype.indexOf=function(t,s,p){return bidirectionalIndexOf(this,t,s,p,!0)},Buffer.prototype.lastIndexOf=function(t,s,p){return bidirectionalIndexOf(this,t,s,p,!1)},Buffer.prototype.write=function(t,s,p,g){var m,v,_,x,T,F,W,Z;if(void 0===s)g="utf8",p=this.length,s=0;else if(void 0===p&&"string"==typeof s)g=s,p=this.length,s=0;else if(isFinite(s))s>>>=0,isFinite(p)?(p>>>=0,void 0===g&&(g="utf8")):(g=p,p=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let Q=this.length-s;if((void 0===p||p>Q)&&(p=Q),t.length>0&&(p<0||s<0)||s>this.length)throw RangeError("Attempt to write outside buffer bounds");g||(g="utf8");let Y=!1;for(;;)switch(g){case"hex":return function(t,s,p,g){let m;p=Number(p)||0;let v=t.length-p;g?(g=Number(g))>v&&(g=v):g=v;let _=s.length;for(g>_/2&&(g=_/2),m=0;m<g;++m){let g=parseInt(s.substr(2*m,2),16);if(g!=g)break;t[p+m]=g}return m}(this,t,s,p);case"utf8":case"utf-8":return m=s,v=p,blitBuffer(utf8ToBytes(t,this.length-m),this,m,v);case"ascii":case"latin1":case"binary":return _=s,x=p,blitBuffer(function(t){let s=[];for(let p=0;p<t.length;++p)s.push(255&t.charCodeAt(p));return s}(t),this,_,x);case"base64":return T=s,F=p,blitBuffer(base64ToBytes(t),this,T,F);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return W=s,Z=p,blitBuffer(function(t,s){let p,g;let m=[];for(let v=0;v<t.length&&!((s-=2)<0);++v)g=(p=t.charCodeAt(v))>>8,m.push(p%256),m.push(g);return m}(t,this.length-W),this,W,Z);default:if(Y)throw TypeError("Unknown encoding: "+g);g=(""+g).toLowerCase(),Y=!0}},Buffer.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},Buffer.prototype.slice=function(t,s){let p=this.length;t=~~t,s=void 0===s?p:~~s,t<0?(t+=p)<0&&(t=0):t>p&&(t=p),s<0?(s+=p)<0&&(s=0):s>p&&(s=p),s<t&&(s=t);let g=this.subarray(t,s);return Object.setPrototypeOf(g,Buffer.prototype),g},Buffer.prototype.readUintLE=Buffer.prototype.readUIntLE=function(t,s,p){t>>>=0,s>>>=0,p||checkOffset(t,s,this.length);let g=this[t],m=1,v=0;for(;++v<s&&(m*=256);)g+=this[t+v]*m;return g},Buffer.prototype.readUintBE=Buffer.prototype.readUIntBE=function(t,s,p){t>>>=0,s>>>=0,p||checkOffset(t,s,this.length);let g=this[t+--s],m=1;for(;s>0&&(m*=256);)g+=this[t+--s]*m;return g},Buffer.prototype.readUint8=Buffer.prototype.readUInt8=function(t,s){return t>>>=0,s||checkOffset(t,1,this.length),this[t]},Buffer.prototype.readUint16LE=Buffer.prototype.readUInt16LE=function(t,s){return t>>>=0,s||checkOffset(t,2,this.length),this[t]|this[t+1]<<8},Buffer.prototype.readUint16BE=Buffer.prototype.readUInt16BE=function(t,s){return t>>>=0,s||checkOffset(t,2,this.length),this[t]<<8|this[t+1]},Buffer.prototype.readUint32LE=Buffer.prototype.readUInt32LE=function(t,s){return t>>>=0,s||checkOffset(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},Buffer.prototype.readUint32BE=Buffer.prototype.readUInt32BE=function(t,s){return t>>>=0,s||checkOffset(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},Buffer.prototype.readBigUInt64LE=defineBigIntMethod(function(t){validateNumber(t>>>=0,"offset");let s=this[t],p=this[t+7];(void 0===s||void 0===p)&&boundsError(t,this.length-8);let g=s+256*this[++t]+65536*this[++t]+16777216*this[++t],m=this[++t]+256*this[++t]+65536*this[++t]+16777216*p;return BigInt(g)+(BigInt(m)<<BigInt(32))}),Buffer.prototype.readBigUInt64BE=defineBigIntMethod(function(t){validateNumber(t>>>=0,"offset");let s=this[t],p=this[t+7];(void 0===s||void 0===p)&&boundsError(t,this.length-8);let g=16777216*s+65536*this[++t]+256*this[++t]+this[++t],m=16777216*this[++t]+65536*this[++t]+256*this[++t]+p;return(BigInt(g)<<BigInt(32))+BigInt(m)}),Buffer.prototype.readIntLE=function(t,s,p){t>>>=0,s>>>=0,p||checkOffset(t,s,this.length);let g=this[t],m=1,v=0;for(;++v<s&&(m*=256);)g+=this[t+v]*m;return g>=(m*=128)&&(g-=Math.pow(2,8*s)),g},Buffer.prototype.readIntBE=function(t,s,p){t>>>=0,s>>>=0,p||checkOffset(t,s,this.length);let g=s,m=1,v=this[t+--g];for(;g>0&&(m*=256);)v+=this[t+--g]*m;return v>=(m*=128)&&(v-=Math.pow(2,8*s)),v},Buffer.prototype.readInt8=function(t,s){return(t>>>=0,s||checkOffset(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},Buffer.prototype.readInt16LE=function(t,s){t>>>=0,s||checkOffset(t,2,this.length);let p=this[t]|this[t+1]<<8;return 32768&p?4294901760|p:p},Buffer.prototype.readInt16BE=function(t,s){t>>>=0,s||checkOffset(t,2,this.length);let p=this[t+1]|this[t]<<8;return 32768&p?4294901760|p:p},Buffer.prototype.readInt32LE=function(t,s){return t>>>=0,s||checkOffset(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},Buffer.prototype.readInt32BE=function(t,s){return t>>>=0,s||checkOffset(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},Buffer.prototype.readBigInt64LE=defineBigIntMethod(function(t){validateNumber(t>>>=0,"offset");let s=this[t],p=this[t+7];(void 0===s||void 0===p)&&boundsError(t,this.length-8);let g=this[t+4]+256*this[t+5]+65536*this[t+6]+(p<<24);return(BigInt(g)<<BigInt(32))+BigInt(s+256*this[++t]+65536*this[++t]+16777216*this[++t])}),Buffer.prototype.readBigInt64BE=defineBigIntMethod(function(t){validateNumber(t>>>=0,"offset");let s=this[t],p=this[t+7];(void 0===s||void 0===p)&&boundsError(t,this.length-8);let g=(s<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(g)<<BigInt(32))+BigInt(16777216*this[++t]+65536*this[++t]+256*this[++t]+p)}),Buffer.prototype.readFloatLE=function(t,s){return t>>>=0,s||checkOffset(t,4,this.length),m.read(this,t,!0,23,4)},Buffer.prototype.readFloatBE=function(t,s){return t>>>=0,s||checkOffset(t,4,this.length),m.read(this,t,!1,23,4)},Buffer.prototype.readDoubleLE=function(t,s){return t>>>=0,s||checkOffset(t,8,this.length),m.read(this,t,!0,52,8)},Buffer.prototype.readDoubleBE=function(t,s){return t>>>=0,s||checkOffset(t,8,this.length),m.read(this,t,!1,52,8)},Buffer.prototype.writeUintLE=Buffer.prototype.writeUIntLE=function(t,s,p,g){if(t=+t,s>>>=0,p>>>=0,!g){let g=Math.pow(2,8*p)-1;checkInt(this,t,s,p,g,0)}let m=1,v=0;for(this[s]=255&t;++v<p&&(m*=256);)this[s+v]=t/m&255;return s+p},Buffer.prototype.writeUintBE=Buffer.prototype.writeUIntBE=function(t,s,p,g){if(t=+t,s>>>=0,p>>>=0,!g){let g=Math.pow(2,8*p)-1;checkInt(this,t,s,p,g,0)}let m=p-1,v=1;for(this[s+m]=255&t;--m>=0&&(v*=256);)this[s+m]=t/v&255;return s+p},Buffer.prototype.writeUint8=Buffer.prototype.writeUInt8=function(t,s,p){return t=+t,s>>>=0,p||checkInt(this,t,s,1,255,0),this[s]=255&t,s+1},Buffer.prototype.writeUint16LE=Buffer.prototype.writeUInt16LE=function(t,s,p){return t=+t,s>>>=0,p||checkInt(this,t,s,2,65535,0),this[s]=255&t,this[s+1]=t>>>8,s+2},Buffer.prototype.writeUint16BE=Buffer.prototype.writeUInt16BE=function(t,s,p){return t=+t,s>>>=0,p||checkInt(this,t,s,2,65535,0),this[s]=t>>>8,this[s+1]=255&t,s+2},Buffer.prototype.writeUint32LE=Buffer.prototype.writeUInt32LE=function(t,s,p){return t=+t,s>>>=0,p||checkInt(this,t,s,4,4294967295,0),this[s+3]=t>>>24,this[s+2]=t>>>16,this[s+1]=t>>>8,this[s]=255&t,s+4},Buffer.prototype.writeUint32BE=Buffer.prototype.writeUInt32BE=function(t,s,p){return t=+t,s>>>=0,p||checkInt(this,t,s,4,4294967295,0),this[s]=t>>>24,this[s+1]=t>>>16,this[s+2]=t>>>8,this[s+3]=255&t,s+4},Buffer.prototype.writeBigUInt64LE=defineBigIntMethod(function(t,s=0){return wrtBigUInt64LE(this,t,s,BigInt(0),BigInt("0xffffffffffffffff"))}),Buffer.prototype.writeBigUInt64BE=defineBigIntMethod(function(t,s=0){return wrtBigUInt64BE(this,t,s,BigInt(0),BigInt("0xffffffffffffffff"))}),Buffer.prototype.writeIntLE=function(t,s,p,g){if(t=+t,s>>>=0,!g){let g=Math.pow(2,8*p-1);checkInt(this,t,s,p,g-1,-g)}let m=0,v=1,_=0;for(this[s]=255&t;++m<p&&(v*=256);)t<0&&0===_&&0!==this[s+m-1]&&(_=1),this[s+m]=(t/v>>0)-_&255;return s+p},Buffer.prototype.writeIntBE=function(t,s,p,g){if(t=+t,s>>>=0,!g){let g=Math.pow(2,8*p-1);checkInt(this,t,s,p,g-1,-g)}let m=p-1,v=1,_=0;for(this[s+m]=255&t;--m>=0&&(v*=256);)t<0&&0===_&&0!==this[s+m+1]&&(_=1),this[s+m]=(t/v>>0)-_&255;return s+p},Buffer.prototype.writeInt8=function(t,s,p){return t=+t,s>>>=0,p||checkInt(this,t,s,1,127,-128),t<0&&(t=255+t+1),this[s]=255&t,s+1},Buffer.prototype.writeInt16LE=function(t,s,p){return t=+t,s>>>=0,p||checkInt(this,t,s,2,32767,-32768),this[s]=255&t,this[s+1]=t>>>8,s+2},Buffer.prototype.writeInt16BE=function(t,s,p){return t=+t,s>>>=0,p||checkInt(this,t,s,2,32767,-32768),this[s]=t>>>8,this[s+1]=255&t,s+2},Buffer.prototype.writeInt32LE=function(t,s,p){return t=+t,s>>>=0,p||checkInt(this,t,s,4,2147483647,-2147483648),this[s]=255&t,this[s+1]=t>>>8,this[s+2]=t>>>16,this[s+3]=t>>>24,s+4},Buffer.prototype.writeInt32BE=function(t,s,p){return t=+t,s>>>=0,p||checkInt(this,t,s,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[s]=t>>>24,this[s+1]=t>>>16,this[s+2]=t>>>8,this[s+3]=255&t,s+4},Buffer.prototype.writeBigInt64LE=defineBigIntMethod(function(t,s=0){return wrtBigUInt64LE(this,t,s,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),Buffer.prototype.writeBigInt64BE=defineBigIntMethod(function(t,s=0){return wrtBigUInt64BE(this,t,s,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),Buffer.prototype.writeFloatLE=function(t,s,p){return writeFloat(this,t,s,!0,p)},Buffer.prototype.writeFloatBE=function(t,s,p){return writeFloat(this,t,s,!1,p)},Buffer.prototype.writeDoubleLE=function(t,s,p){return writeDouble(this,t,s,!0,p)},Buffer.prototype.writeDoubleBE=function(t,s,p){return writeDouble(this,t,s,!1,p)},Buffer.prototype.copy=function(t,s,p,g){if(!Buffer.isBuffer(t))throw TypeError("argument should be a Buffer");if(p||(p=0),g||0===g||(g=this.length),s>=t.length&&(s=t.length),s||(s=0),g>0&&g<p&&(g=p),g===p||0===t.length||0===this.length)return 0;if(s<0)throw RangeError("targetStart out of bounds");if(p<0||p>=this.length)throw RangeError("Index out of range");if(g<0)throw RangeError("sourceEnd out of bounds");g>this.length&&(g=this.length),t.length-s<g-p&&(g=t.length-s+p);let m=g-p;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(s,p,g):Uint8Array.prototype.set.call(t,this.subarray(p,g),s),m},Buffer.prototype.fill=function(t,s,p,g){let m;if("string"==typeof t){if("string"==typeof s?(g=s,s=0,p=this.length):"string"==typeof p&&(g=p,p=this.length),void 0!==g&&"string"!=typeof g)throw TypeError("encoding must be a string");if("string"==typeof g&&!Buffer.isEncoding(g))throw TypeError("Unknown encoding: "+g);if(1===t.length){let s=t.charCodeAt(0);("utf8"===g&&s<128||"latin1"===g)&&(t=s)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(s<0||this.length<s||this.length<p)throw RangeError("Out of range index");if(p<=s)return this;if(s>>>=0,p=void 0===p?this.length:p>>>0,t||(t=0),"number"==typeof t)for(m=s;m<p;++m)this[m]=t;else{let v=Buffer.isBuffer(t)?t:Buffer.from(t,g),_=v.length;if(0===_)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(m=0;m<p-s;++m)this[m+s]=v[m%_]}return this};let _={};function E(t,s,p){_[t]=class extends p{constructor(){super(),Object.defineProperty(this,"message",{value:s.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function addNumericalSeparator(t){let s="",p=t.length,g="-"===t[0]?1:0;for(;p>=g+4;p-=3)s=`_${t.slice(p-3,p)}${s}`;return`${t.slice(0,p)}${s}`}function checkIntBI(t,s,p,g,m,v){if(t>p||t<s){let g;let m="bigint"==typeof s?"n":"";throw g=v>3?0===s||s===BigInt(0)?`>= 0${m} and < 2${m} ** ${(v+1)*8}${m}`:`>= -(2${m} ** ${(v+1)*8-1}${m}) and < 2 ** ${(v+1)*8-1}${m}`:`>= ${s}${m} and <= ${p}${m}`,new _.ERR_OUT_OF_RANGE("value",g,t)}validateNumber(m,"offset"),(void 0===g[m]||void 0===g[m+v])&&boundsError(m,g.length-(v+1))}function validateNumber(t,s){if("number"!=typeof t)throw new _.ERR_INVALID_ARG_TYPE(s,"number",t)}function boundsError(t,s,p){if(Math.floor(t)!==t)throw validateNumber(t,p),new _.ERR_OUT_OF_RANGE(p||"offset","an integer",t);if(s<0)throw new _.ERR_BUFFER_OUT_OF_BOUNDS;throw new _.ERR_OUT_OF_RANGE(p||"offset",`>= ${p?1:0} and <= ${s}`,t)}E("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),E("ERR_INVALID_ARG_TYPE",function(t,s){return`The "${t}" argument must be of type number. Received type ${typeof s}`},TypeError),E("ERR_OUT_OF_RANGE",function(t,s,p){let g=`The value of "${t}" is out of range.`,m=p;return Number.isInteger(p)&&Math.abs(p)>4294967296?m=addNumericalSeparator(String(p)):"bigint"==typeof p&&(m=String(p),(p>BigInt(2)**BigInt(32)||p<-(BigInt(2)**BigInt(32)))&&(m=addNumericalSeparator(m)),m+="n"),g+=` It must be ${s}. Received ${m}`},RangeError);let x=/[^+/0-9A-Za-z-_]/g;function utf8ToBytes(t,s){let p;s=s||1/0;let g=t.length,m=null,v=[];for(let _=0;_<g;++_){if((p=t.charCodeAt(_))>55295&&p<57344){if(!m){if(p>56319||_+1===g){(s-=3)>-1&&v.push(239,191,189);continue}m=p;continue}if(p<56320){(s-=3)>-1&&v.push(239,191,189),m=p;continue}p=(m-55296<<10|p-56320)+65536}else m&&(s-=3)>-1&&v.push(239,191,189);if(m=null,p<128){if((s-=1)<0)break;v.push(p)}else if(p<2048){if((s-=2)<0)break;v.push(p>>6|192,63&p|128)}else if(p<65536){if((s-=3)<0)break;v.push(p>>12|224,p>>6&63|128,63&p|128)}else if(p<1114112){if((s-=4)<0)break;v.push(p>>18|240,p>>12&63|128,p>>6&63|128,63&p|128)}else throw Error("Invalid code point")}return v}function base64ToBytes(t){return g.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(x,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function blitBuffer(t,s,p,g){let m;for(m=0;m<g&&!(m+p>=s.length)&&!(m>=t.length);++m)s[m+p]=t[m];return m}function isInstance(t,s){return t instanceof s||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===s.name}let T=function(){let t="0123456789abcdef",s=Array(256);for(let p=0;p<16;++p){let g=16*p;for(let m=0;m<16;++m)s[g+m]=t[p]+t[m]}return s}();function defineBigIntMethod(t){return"undefined"==typeof BigInt?BufferBigIntNotDefined:t}function BufferBigIntNotDefined(){throw Error("BigInt not supported")}},44020:function(t){"use strict";var s="%[a-f0-9]{2}",p=RegExp("("+s+")|([^%]+?)","gi"),g=RegExp("("+s+")+","gi");t.exports=function(t){if("string"!=typeof t)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(s){return function(t){for(var s={"%FE%FF":"��","%FF%FE":"��"},m=g.exec(t);m;){try{s[m[0]]=decodeURIComponent(m[0])}catch(t){var v=function(t){try{return decodeURIComponent(t)}catch(m){for(var s=t.match(p)||[],g=1;g<s.length;g++)s=(t=(function decodeComponents(t,s){try{return[decodeURIComponent(t.join(""))]}catch(t){}if(1===t.length)return t;s=s||1;var p=t.slice(0,s),g=t.slice(s);return Array.prototype.concat.call([],decodeComponents(p),decodeComponents(g))})(s,g).join("")).match(p)||[];return t}}(m[0]);v!==m[0]&&(s[m[0]]=v)}m=g.exec(t)}s["%C2"]="�";for(var _=Object.keys(s),x=0;x<_.length;x++){var T=_[x];t=t.replace(RegExp(T,"g"),s[T])}return t}(t)}}},65987:function(t){"use strict";var s={single_source_shortest_paths:function(t,p,g){var m,v,_,x,T,F,W,Z={},Q={};Q[p]=0;var Y=s.PriorityQueue.make();for(Y.push(p,0);!Y.empty();)for(_ in v=(m=Y.pop()).value,x=m.cost,T=t[v]||{})T.hasOwnProperty(_)&&(F=x+T[_],W=Q[_],(void 0===Q[_]||W>F)&&(Q[_]=F,Y.push(_,F),Z[_]=v));if(void 0!==g&&void 0===Q[g])throw Error(["Could not find a path from ",p," to ",g,"."].join(""));return Z},extract_shortest_path_from_predecessor_list:function(t,s){for(var p=[],g=s;g;)p.push(g),t[g],g=t[g];return p.reverse(),p},find_path:function(t,p,g){var m=s.single_source_shortest_paths(t,p,g);return s.extract_shortest_path_from_predecessor_list(m,g)},PriorityQueue:{make:function(t){var p,g=s.PriorityQueue,m={};for(p in t=t||{},g)g.hasOwnProperty(p)&&(m[p]=g[p]);return m.queue=[],m.sorter=t.sorter||g.default_sorter,m},default_sorter:function(t,s){return t.cost-s.cost},push:function(t,s){this.queue.push({value:t,cost:s}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=s},62378:function(t){"use strict";t.exports=function(t){for(var s=[],p=t.length,g=0;g<p;g++){var m=t.charCodeAt(g);if(m>=55296&&m<=56319&&p>g+1){var v=t.charCodeAt(g+1);v>=56320&&v<=57343&&(m=(m-55296)*1024+v-56320+65536,g+=1)}if(m<128){s.push(m);continue}if(m<2048){s.push(m>>6|192),s.push(63&m|128);continue}if(m<55296||m>=57344&&m<65536){s.push(m>>12|224),s.push(m>>6&63|128),s.push(63&m|128);continue}if(m>=65536&&m<=1114111){s.push(m>>18|240),s.push(m>>12&63|128),s.push(m>>6&63|128),s.push(63&m|128);continue}s.push(239,191,189)}return new Uint8Array(s).buffer}},26729:function(t){"use strict";var s=Object.prototype.hasOwnProperty,p="~";function Events(){}function EE(t,s,p){this.fn=t,this.context=s,this.once=p||!1}function addListener(t,s,g,m,v){if("function"!=typeof g)throw TypeError("The listener must be a function");var _=new EE(g,m||t,v),x=p?p+s:s;return t._events[x]?t._events[x].fn?t._events[x]=[t._events[x],_]:t._events[x].push(_):(t._events[x]=_,t._eventsCount++),t}function clearEvent(t,s){0==--t._eventsCount?t._events=new Events:delete t._events[s]}function EventEmitter(){this._events=new Events,this._eventsCount=0}Object.create&&(Events.prototype=Object.create(null),new Events().__proto__||(p=!1)),EventEmitter.prototype.eventNames=function(){var t,g,m=[];if(0===this._eventsCount)return m;for(g in t=this._events)s.call(t,g)&&m.push(p?g.slice(1):g);return Object.getOwnPropertySymbols?m.concat(Object.getOwnPropertySymbols(t)):m},EventEmitter.prototype.listeners=function(t){var s=p?p+t:t,g=this._events[s];if(!g)return[];if(g.fn)return[g.fn];for(var m=0,v=g.length,_=Array(v);m<v;m++)_[m]=g[m].fn;return _},EventEmitter.prototype.listenerCount=function(t){var s=p?p+t:t,g=this._events[s];return g?g.fn?1:g.length:0},EventEmitter.prototype.emit=function(t,s,g,m,v,_){var x=p?p+t:t;if(!this._events[x])return!1;var T,F,W=this._events[x],Z=arguments.length;if(W.fn){switch(W.once&&this.removeListener(t,W.fn,void 0,!0),Z){case 1:return W.fn.call(W.context),!0;case 2:return W.fn.call(W.context,s),!0;case 3:return W.fn.call(W.context,s,g),!0;case 4:return W.fn.call(W.context,s,g,m),!0;case 5:return W.fn.call(W.context,s,g,m,v),!0;case 6:return W.fn.call(W.context,s,g,m,v,_),!0}for(F=1,T=Array(Z-1);F<Z;F++)T[F-1]=arguments[F];W.fn.apply(W.context,T)}else{var Q,Y=W.length;for(F=0;F<Y;F++)switch(W[F].once&&this.removeListener(t,W[F].fn,void 0,!0),Z){case 1:W[F].fn.call(W[F].context);break;case 2:W[F].fn.call(W[F].context,s);break;case 3:W[F].fn.call(W[F].context,s,g);break;case 4:W[F].fn.call(W[F].context,s,g,m);break;default:if(!T)for(Q=1,T=Array(Z-1);Q<Z;Q++)T[Q-1]=arguments[Q];W[F].fn.apply(W[F].context,T)}}return!0},EventEmitter.prototype.on=function(t,s,p){return addListener(this,t,s,p,!1)},EventEmitter.prototype.once=function(t,s,p){return addListener(this,t,s,p,!0)},EventEmitter.prototype.removeListener=function(t,s,g,m){var v=p?p+t:t;if(!this._events[v])return this;if(!s)return clearEvent(this,v),this;var _=this._events[v];if(_.fn)_.fn!==s||m&&!_.once||g&&_.context!==g||clearEvent(this,v);else{for(var x=0,T=[],F=_.length;x<F;x++)(_[x].fn!==s||m&&!_[x].once||g&&_[x].context!==g)&&T.push(_[x]);T.length?this._events[v]=1===T.length?T[0]:T:clearEvent(this,v)}return this},EventEmitter.prototype.removeAllListeners=function(t){var s;return t?(s=p?p+t:t,this._events[s]&&clearEvent(this,s)):(this._events=new Events,this._eventsCount=0),this},EventEmitter.prototype.off=EventEmitter.prototype.removeListener,EventEmitter.prototype.addListener=EventEmitter.prototype.on,EventEmitter.prefixed=p,EventEmitter.EventEmitter=EventEmitter,t.exports=EventEmitter},92806:function(t){"use strict";t.exports=function(t,s){for(var p={},g=Object.keys(t),m=Array.isArray(s),v=0;v<g.length;v++){var _=g[v],x=t[_];(m?-1!==s.indexOf(_):s(_,x,t))&&(p[_]=x)}return p}},8679:function(t,s,p){"use strict";var g=p(59864),m={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},v={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},x={};function getStatics(t){return g.isMemo(t)?_:x[t.$$typeof]||m}x[g.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},x[g.Memo]=_;var T=Object.defineProperty,F=Object.getOwnPropertyNames,W=Object.getOwnPropertySymbols,Z=Object.getOwnPropertyDescriptor,Q=Object.getPrototypeOf,Y=Object.prototype;t.exports=function hoistNonReactStatics(t,s,p){if("string"!=typeof s){if(Y){var g=Q(s);g&&g!==Y&&hoistNonReactStatics(t,g,p)}var m=F(s);W&&(m=m.concat(W(s)));for(var _=getStatics(t),x=getStatics(s),X=0;X<m.length;++X){var J=m[X];if(!v[J]&&!(p&&p[J])&&!(x&&x[J])&&!(_&&_[J])){var en=Z(s,J);try{T(t,J,en)}catch(t){}}}}return t}},80645:function(t,s){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */s.read=function(t,s,p,g,m){var v,_,x=8*m-g-1,T=(1<<x)-1,F=T>>1,W=-7,Z=p?m-1:0,Q=p?-1:1,Y=t[s+Z];for(Z+=Q,v=Y&(1<<-W)-1,Y>>=-W,W+=x;W>0;v=256*v+t[s+Z],Z+=Q,W-=8);for(_=v&(1<<-W)-1,v>>=-W,W+=g;W>0;_=256*_+t[s+Z],Z+=Q,W-=8);if(0===v)v=1-F;else{if(v===T)return _?NaN:(Y?-1:1)*(1/0);_+=Math.pow(2,g),v-=F}return(Y?-1:1)*_*Math.pow(2,v-g)},s.write=function(t,s,p,g,m,v){var _,x,T,F=8*v-m-1,W=(1<<F)-1,Z=W>>1,Q=23===m?5960464477539062e-23:0,Y=g?0:v-1,X=g?1:-1,J=s<0||0===s&&1/s<0?1:0;for(isNaN(s=Math.abs(s))||s===1/0?(x=isNaN(s)?1:0,_=W):(_=Math.floor(Math.log(s)/Math.LN2),s*(T=Math.pow(2,-_))<1&&(_--,T*=2),_+Z>=1?s+=Q/T:s+=Q*Math.pow(2,1-Z),s*T>=2&&(_++,T/=2),_+Z>=W?(x=0,_=W):_+Z>=1?(x=(s*T-1)*Math.pow(2,m),_+=Z):(x=s*Math.pow(2,Z-1)*Math.pow(2,m),_=0));m>=8;t[p+Y]=255&x,Y+=X,x/=256,m-=8);for(_=_<<m|x,F+=m;F>0;t[p+Y]=255&_,Y+=X,_/=256,F-=8);t[p+Y-X]|=128*J}},83454:function(t,s,p){"use strict";var g,m;t.exports=(null==(g=p.g.process)?void 0:g.env)&&"object"==typeof(null==(m=p.g.process)?void 0:m.env)?p.g.process:p(77663)},6840:function(t,s,p){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return p(47013)}])},47013:function(t,s,p){"use strict";p.r(s),p.d(s,{default:function(){return App}});var g=p(85893);p(70415);var m=p(67098),v=p(69077),_=p(22676);let x=(0,_.ax)({id:250,name:"Fantom",network:"fantom",nativeCurrency:{decimals:18,name:"Fantom",symbol:"FTM"},rpcUrls:{default:{http:["https://rpc.ankr.com/fantom"]},public:{http:["https://rpc.ankr.com/fantom"]}},blockExplorers:{etherscan:{name:"FTMScan",url:"https://ftmscan.com"},default:{name:"FTMScan",url:"https://ftmscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:33001987}}}),T=(0,_.ax)({id:43114,name:"Avalanche",network:"avalanche",nativeCurrency:{decimals:18,name:"Avalanche",symbol:"AVAX"},rpcUrls:{default:{http:["https://api.avax.network/ext/bc/C/rpc"]},public:{http:["https://api.avax.network/ext/bc/C/rpc"]}},blockExplorers:{etherscan:{name:"SnowTrace",url:"https://snowtrace.io"},default:{name:"SnowTrace",url:"https://snowtrace.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:11907934}}});var F=p(87462),W=p(63366),Z=p(67294);let Q=Z.createContext(null);function useTheme(){let t=Z.useContext(Q);return t}let Y="function"==typeof Symbol&&Symbol.for;var X=Y?Symbol.for("mui.nested"):"__THEME_NESTED__",ThemeProvider_ThemeProvider=function(t){let{children:s,theme:p}=t,m=useTheme(),v=Z.useMemo(()=>{let t=null===m?p:function(t,s){if("function"==typeof s){let p=s(t);return p}return(0,F.Z)({},t,s)}(m,p);return null!=t&&(t[X]=null!==m),t},[p,m]);return(0,g.jsx)(Q.Provider,{value:v,children:s})},J=p(75260),en=p(34168);let ei={};function useThemeScoping(t,s,p,g=!1){return Z.useMemo(()=>{let m=t&&s[t]||s;if("function"==typeof p){let v=p(m),_=t?(0,F.Z)({},s,{[t]:v}):v;return g?()=>_:_}return t?(0,F.Z)({},s,{[t]:p}):(0,F.Z)({},s,p)},[t,s,p,g])}var esm_ThemeProvider_ThemeProvider=function(t){let{children:s,theme:p,themeId:m}=t,v=(0,en.Z)(ei),_=useTheme()||ei,x=useThemeScoping(m,v,p),T=useThemeScoping(m,_,p,!0);return(0,g.jsx)(ThemeProvider_ThemeProvider,{theme:T,children:(0,g.jsx)(J.T.Provider,{value:x,children:s})})},eo=p(10606);let ea=["theme"];function styles_ThemeProvider_ThemeProvider(t){let{theme:s}=t,p=(0,W.Z)(t,ea),m=s[eo.Z];return(0,g.jsx)(esm_ThemeProvider_ThemeProvider,(0,F.Z)({},p,{themeId:m?eo.Z:void 0,theme:m||s}))}var es=p(27623),el=p(70917);function GlobalStyles(t){let{styles:s,defaultTheme:p={}}=t,m="function"==typeof s?t=>s(null==t||0===Object.keys(t).length?p:t):s;return(0,g.jsx)(el.xB,{styles:m})}var ec=p(96682),esm_GlobalStyles_GlobalStyles=function({styles:t,themeId:s,defaultTheme:p={}}){let m=(0,ec.Z)(p),v="function"==typeof t?t(s&&m[s]||m):t;return(0,g.jsx)(GlobalStyles,{styles:v})},eu=p(90247),material_GlobalStyles_GlobalStyles=function(t){return(0,g.jsx)(esm_GlobalStyles_GlobalStyles,(0,F.Z)({},t,{defaultTheme:eu.Z,themeId:eo.Z}))};let html=(t,s)=>(0,F.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},s&&!t.vars&&{colorScheme:t.palette.mode}),body=t=>(0,F.Z)({color:(t.vars||t).palette.text.primary},t.typography.body1,{backgroundColor:(t.vars||t).palette.background.default,"@media print":{backgroundColor:(t.vars||t).palette.common.white}}),styles=(t,s=!1)=>{var p;let g={};s&&t.colorSchemes&&Object.entries(t.colorSchemes).forEach(([s,p])=>{var m;g[t.getColorSchemeSelector(s).replace(/\s*&/,"")]={colorScheme:null==(m=p.palette)?void 0:m.mode}});let m=(0,F.Z)({html:html(t,s),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:t.typography.fontWeightBold},body:(0,F.Z)({margin:0},body(t),{"&::backdrop":{backgroundColor:(t.vars||t).palette.background.default}})},g),v=null==(p=t.components)||null==(p=p.MuiCssBaseline)?void 0:p.styleOverrides;return v&&(m=[m,v]),m};var CssBaseline_CssBaseline=function(t){let s=(0,es.Z)({props:t,name:"MuiCssBaseline"}),{children:p,enableColorScheme:m=!1}=s;return(0,g.jsxs)(Z.Fragment,{children:[(0,g.jsx)(material_GlobalStyles_GlobalStyles,{styles:t=>styles(t,m)}),p]})},ed=p(44551),eh=p(60265);let ef=(0,ed.Z)({palette:{mode:"dark",primary:{main:"#1045ff"},secondary:{main:"#FFF"},subtle:{main:"#7d8fd1"},error:{main:eh.Z.A400}}});var ep=p(8417);let eg=(0,ep.Z)({key:"css",prepend:!0}),em="97235759ff6e7ec7545379f2a2046295",eb=[x,T],ew=(0,m.o1)({chains:eb,projectId:em,metadata:{name:"Web3Modal",description:"Fantom Sonic",url:"https://web3modal.com",icons:["https://avatars.githubusercontent.com/u/37784886"]}});function App(t){let{Component:s,emotionCache:p=eg,pageProps:m}=t;return(0,g.jsx)(v.eM,{config:ew,children:(0,g.jsx)(J.C,{value:p,children:(0,g.jsxs)(styles_ThemeProvider_ThemeProvider,{theme:ef,children:[(0,g.jsx)(CssBaseline_CssBaseline,{}),(0,g.jsx)(s,{...m})]})})})}(0,m.OY)({wagmiConfig:ew,projectId:em,chains:eb,defaultChain:x,themeMode:"dark",themeVariables:{"--w3m-color-mix":"#05228c","--w3m-color-mix-strength":20}})},70415:function(){},77663:function(t){!function(){var s={229:function(t){var s,p,g,m=t.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(t){if(s===setTimeout)return setTimeout(t,0);if((s===defaultSetTimout||!s)&&setTimeout)return s=setTimeout,setTimeout(t,0);try{return s(t,0)}catch(p){try{return s.call(null,t,0)}catch(p){return s.call(this,t,0)}}}!function(){try{s="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(t){s=defaultSetTimout}try{p="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(t){p=defaultClearTimeout}}();var v=[],_=!1,x=-1;function cleanUpNextTick(){_&&g&&(_=!1,g.length?v=g.concat(v):x=-1,v.length&&drainQueue())}function drainQueue(){if(!_){var t=runTimeout(cleanUpNextTick);_=!0;for(var s=v.length;s;){for(g=v,v=[];++x<s;)g&&g[x].run();x=-1,s=v.length}g=null,_=!1,function(t){if(p===clearTimeout)return clearTimeout(t);if((p===defaultClearTimeout||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(t);try{p(t)}catch(s){try{return p.call(null,t)}catch(s){return p.call(this,t)}}}(t)}}function Item(t,s){this.fun=t,this.array=s}function noop(){}m.nextTick=function(t){var s=Array(arguments.length-1);if(arguments.length>1)for(var p=1;p<arguments.length;p++)s[p-1]=arguments[p];v.push(new Item(t,s)),1!==v.length||_||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=noop,m.addListener=noop,m.once=noop,m.off=noop,m.removeListener=noop,m.removeAllListeners=noop,m.emit=noop,m.prependListener=noop,m.prependOnceListener=noop,m.listeners=function(t){return[]},m.binding=function(t){throw Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(t){throw Error("process.chdir is not supported")},m.umask=function(){return 0}}},p={};function __nccwpck_require__(t){var g=p[t];if(void 0!==g)return g.exports;var m=p[t]={exports:{}},v=!0;try{s[t](m,m.exports,__nccwpck_require__),v=!1}finally{v&&delete p[t]}return m.exports}__nccwpck_require__.ab="//";var g=__nccwpck_require__(229);t.exports=g}()},92592:function(t,s,p){let g=p(47138),m=p(95115),v=p(6907),_=p(93776);function renderCanvas(t,s,p,v,_){let x=[].slice.call(arguments,1),T=x.length,F="function"==typeof x[T-1];if(!F&&!g())throw Error("Callback required as last argument");if(F){if(T<2)throw Error("Too few arguments provided");2===T?(_=p,p=s,s=v=void 0):3===T&&(s.getContext&&void 0===_?(_=v,v=void 0):(_=v,v=p,p=s,s=void 0))}else{if(T<1)throw Error("Too few arguments provided");return 1===T?(p=s,s=v=void 0):2!==T||s.getContext||(v=p,p=s,s=void 0),new Promise(function(g,_){try{let _=m.create(p,v);g(t(_,s,v))}catch(t){_(t)}})}try{let g=m.create(p,v);_(null,t(g,s,v))}catch(t){_(t)}}s.create=m.create,s.toCanvas=renderCanvas.bind(null,v.render),s.toDataURL=renderCanvas.bind(null,v.renderToDataURL),s.toString=renderCanvas.bind(null,function(t,s,p){return _.render(t,p)})},47138:function(t){t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},21845:function(t,s,p){let g=p(10242).getSymbolSize;s.getRowColCoords=function(t){if(1===t)return[];let s=Math.floor(t/7)+2,p=g(t),m=145===p?26:2*Math.ceil((p-13)/(2*s-2)),v=[p-7];for(let t=1;t<s-1;t++)v[t]=v[t-1]-m;return v.push(6),v.reverse()},s.getPositions=function(t){let p=[],g=s.getRowColCoords(t),m=g.length;for(let t=0;t<m;t++)for(let s=0;s<m;s++)(0!==t||0!==s)&&(0!==t||s!==m-1)&&(t!==m-1||0!==s)&&p.push([g[t],g[s]]);return p}},8260:function(t,s,p){let g=p(76910),m=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function AlphanumericData(t){this.mode=g.ALPHANUMERIC,this.data=t}AlphanumericData.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)},AlphanumericData.prototype.getLength=function(){return this.data.length},AlphanumericData.prototype.getBitsLength=function(){return AlphanumericData.getBitsLength(this.data.length)},AlphanumericData.prototype.write=function(t){let s;for(s=0;s+2<=this.data.length;s+=2){let p=45*m.indexOf(this.data[s]);p+=m.indexOf(this.data[s+1]),t.put(p,11)}this.data.length%2&&t.put(m.indexOf(this.data[s]),6)},t.exports=AlphanumericData},97245:function(t){function BitBuffer(){this.buffer=[],this.length=0}BitBuffer.prototype={get:function(t){return(this.buffer[Math.floor(t/8)]>>>7-t%8&1)==1},put:function(t,s){for(let p=0;p<s;p++)this.putBit((t>>>s-p-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(t){let s=Math.floor(this.length/8);this.buffer.length<=s&&this.buffer.push(0),t&&(this.buffer[s]|=128>>>this.length%8),this.length++}},t.exports=BitBuffer},73280:function(t){function BitMatrix(t){if(!t||t<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}BitMatrix.prototype.set=function(t,s,p,g){let m=t*this.size+s;this.data[m]=p,g&&(this.reservedBit[m]=!0)},BitMatrix.prototype.get=function(t,s){return this.data[t*this.size+s]},BitMatrix.prototype.xor=function(t,s,p){this.data[t*this.size+s]^=p},BitMatrix.prototype.isReserved=function(t,s){return this.reservedBit[t*this.size+s]},t.exports=BitMatrix},43424:function(t,s,p){let g=p(62378),m=p(76910);function ByteData(t){this.mode=m.BYTE,"string"==typeof t&&(t=g(t)),this.data=new Uint8Array(t)}ByteData.getBitsLength=function(t){return 8*t},ByteData.prototype.getLength=function(){return this.data.length},ByteData.prototype.getBitsLength=function(){return ByteData.getBitsLength(this.data.length)},ByteData.prototype.write=function(t){for(let s=0,p=this.data.length;s<p;s++)t.put(this.data[s],8)},t.exports=ByteData},35393:function(t,s,p){let g=p(64908),m=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],v=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];s.getBlocksCount=function(t,s){switch(s){case g.L:return m[(t-1)*4+0];case g.M:return m[(t-1)*4+1];case g.Q:return m[(t-1)*4+2];case g.H:return m[(t-1)*4+3];default:return}},s.getTotalCodewordsCount=function(t,s){switch(s){case g.L:return v[(t-1)*4+0];case g.M:return v[(t-1)*4+1];case g.Q:return v[(t-1)*4+2];case g.H:return v[(t-1)*4+3];default:return}}},64908:function(t,s){s.L={bit:1},s.M={bit:0},s.Q={bit:3},s.H={bit:2},s.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},s.from=function(t,p){if(s.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw Error("Param is not a string");let p=t.toLowerCase();switch(p){case"l":case"low":return s.L;case"m":case"medium":return s.M;case"q":case"quartile":return s.Q;case"h":case"high":return s.H;default:throw Error("Unknown EC Level: "+t)}}(t)}catch(t){return p}}},76526:function(t,s,p){let g=p(10242).getSymbolSize;s.getPositions=function(t){let s=g(t);return[[0,0],[s-7,0],[0,s-7]]}},61642:function(t,s,p){let g=p(10242),m=g.getBCHDigit(1335);s.getEncodedBits=function(t,s){let p=t.bit<<3|s,v=p<<10;for(;g.getBCHDigit(v)-m>=0;)v^=1335<<g.getBCHDigit(v)-m;return(p<<10|v)^21522}},69729:function(t,s){let p=new Uint8Array(512),g=new Uint8Array(256);!function(){let t=1;for(let s=0;s<255;s++)p[s]=t,g[t]=s,256&(t<<=1)&&(t^=285);for(let t=255;t<512;t++)p[t]=p[t-255]}(),s.log=function(t){if(t<1)throw Error("log("+t+")");return g[t]},s.exp=function(t){return p[t]},s.mul=function(t,s){return 0===t||0===s?0:p[g[t]+g[s]]}},35442:function(t,s,p){let g=p(76910),m=p(10242);function KanjiData(t){this.mode=g.KANJI,this.data=t}KanjiData.getBitsLength=function(t){return 13*t},KanjiData.prototype.getLength=function(){return this.data.length},KanjiData.prototype.getBitsLength=function(){return KanjiData.getBitsLength(this.data.length)},KanjiData.prototype.write=function(t){let s;for(s=0;s<this.data.length;s++){let p=m.toSJIS(this.data[s]);if(p>=33088&&p<=40956)p-=33088;else if(p>=57408&&p<=60351)p-=49472;else throw Error("Invalid SJIS character: "+this.data[s]+"\nMake sure your charset is UTF-8");p=(p>>>8&255)*192+(255&p),t.put(p,13)}},t.exports=KanjiData},27126:function(t,s){s.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let p={N1:3,N2:3,N3:40,N4:10};s.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},s.from=function(t){return s.isValid(t)?parseInt(t,10):void 0},s.getPenaltyN1=function(t){let s=t.size,g=0,m=0,v=0,_=null,x=null;for(let T=0;T<s;T++){m=v=0,_=x=null;for(let F=0;F<s;F++){let s=t.get(T,F);s===_?m++:(m>=5&&(g+=p.N1+(m-5)),_=s,m=1),(s=t.get(F,T))===x?v++:(v>=5&&(g+=p.N1+(v-5)),x=s,v=1)}m>=5&&(g+=p.N1+(m-5)),v>=5&&(g+=p.N1+(v-5))}return g},s.getPenaltyN2=function(t){let s=t.size,g=0;for(let p=0;p<s-1;p++)for(let m=0;m<s-1;m++){let s=t.get(p,m)+t.get(p,m+1)+t.get(p+1,m)+t.get(p+1,m+1);(4===s||0===s)&&g++}return g*p.N2},s.getPenaltyN3=function(t){let s=t.size,g=0,m=0,v=0;for(let p=0;p<s;p++){m=v=0;for(let _=0;_<s;_++)m=m<<1&2047|t.get(p,_),_>=10&&(1488===m||93===m)&&g++,v=v<<1&2047|t.get(_,p),_>=10&&(1488===v||93===v)&&g++}return g*p.N3},s.getPenaltyN4=function(t){let s=0,g=t.data.length;for(let p=0;p<g;p++)s+=t.data[p];let m=Math.abs(Math.ceil(100*s/g/5)-10);return m*p.N4},s.applyMask=function(t,p){let g=p.size;for(let m=0;m<g;m++)for(let v=0;v<g;v++)p.isReserved(v,m)||p.xor(v,m,function(t,p,g){switch(t){case s.Patterns.PATTERN000:return(p+g)%2==0;case s.Patterns.PATTERN001:return p%2==0;case s.Patterns.PATTERN010:return g%3==0;case s.Patterns.PATTERN011:return(p+g)%3==0;case s.Patterns.PATTERN100:return(Math.floor(p/2)+Math.floor(g/3))%2==0;case s.Patterns.PATTERN101:return p*g%2+p*g%3==0;case s.Patterns.PATTERN110:return(p*g%2+p*g%3)%2==0;case s.Patterns.PATTERN111:return(p*g%3+(p+g)%2)%2==0;default:throw Error("bad maskPattern:"+t)}}(t,v,m))},s.getBestMask=function(t,p){let g=Object.keys(s.Patterns).length,m=0,v=1/0;for(let _=0;_<g;_++){p(_),s.applyMask(_,t);let g=s.getPenaltyN1(t)+s.getPenaltyN2(t)+s.getPenaltyN3(t)+s.getPenaltyN4(t);s.applyMask(_,t),g<v&&(v=g,m=_)}return m}},76910:function(t,s,p){let g=p(43114),m=p(7007);s.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},s.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},s.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},s.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},s.MIXED={bit:-1},s.getCharCountIndicator=function(t,s){if(!t.ccBits)throw Error("Invalid mode: "+t);if(!g.isValid(s))throw Error("Invalid version: "+s);return s>=1&&s<10?t.ccBits[0]:s<27?t.ccBits[1]:t.ccBits[2]},s.getBestModeForData=function(t){return m.testNumeric(t)?s.NUMERIC:m.testAlphanumeric(t)?s.ALPHANUMERIC:m.testKanji(t)?s.KANJI:s.BYTE},s.toString=function(t){if(t&&t.id)return t.id;throw Error("Invalid mode")},s.isValid=function(t){return t&&t.bit&&t.ccBits},s.from=function(t,p){if(s.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw Error("Param is not a string");let p=t.toLowerCase();switch(p){case"numeric":return s.NUMERIC;case"alphanumeric":return s.ALPHANUMERIC;case"kanji":return s.KANJI;case"byte":return s.BYTE;default:throw Error("Unknown mode: "+t)}}(t)}catch(t){return p}}},41085:function(t,s,p){let g=p(76910);function NumericData(t){this.mode=g.NUMERIC,this.data=t.toString()}NumericData.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},NumericData.prototype.getLength=function(){return this.data.length},NumericData.prototype.getBitsLength=function(){return NumericData.getBitsLength(this.data.length)},NumericData.prototype.write=function(t){let s,p;for(s=0;s+3<=this.data.length;s+=3)p=parseInt(this.data.substr(s,3),10),t.put(p,10);let g=this.data.length-s;g>0&&(p=parseInt(this.data.substr(s),10),t.put(p,3*g+1))},t.exports=NumericData},26143:function(t,s,p){let g=p(69729);s.mul=function(t,s){let p=new Uint8Array(t.length+s.length-1);for(let m=0;m<t.length;m++)for(let v=0;v<s.length;v++)p[m+v]^=g.mul(t[m],s[v]);return p},s.mod=function(t,s){let p=new Uint8Array(t);for(;p.length-s.length>=0;){let t=p[0];for(let m=0;m<s.length;m++)p[m]^=g.mul(s[m],t);let m=0;for(;m<p.length&&0===p[m];)m++;p=p.slice(m)}return p},s.generateECPolynomial=function(t){let p=new Uint8Array([1]);for(let m=0;m<t;m++)p=s.mul(p,new Uint8Array([1,g.exp(m)]));return p}},95115:function(t,s,p){let g=p(10242),m=p(64908),v=p(97245),_=p(73280),x=p(21845),T=p(76526),F=p(27126),W=p(35393),Z=p(52882),Q=p(23103),Y=p(61642),X=p(76910),J=p(16130);function setupFormatInfo(t,s,p){let g,m;let v=t.size,_=Y.getEncodedBits(s,p);for(g=0;g<15;g++)m=(_>>g&1)==1,g<6?t.set(g,8,m,!0):g<8?t.set(g+1,8,m,!0):t.set(v-15+g,8,m,!0),g<8?t.set(8,v-g-1,m,!0):g<9?t.set(8,15-g-1+1,m,!0):t.set(8,15-g-1,m,!0);t.set(v-8,8,1,!0)}s.create=function(t,s){let p,Y;if(void 0===t||""===t)throw Error("No input text");let en=m.M;return void 0!==s&&(en=m.from(s.errorCorrectionLevel,m.M),p=Q.from(s.version),Y=F.from(s.maskPattern),s.toSJISFunc&&g.setToSJISFunction(s.toSJISFunc)),function(t,s,p,m){let Y;if(Array.isArray(t))Y=J.fromArray(t);else if("string"==typeof t){let g=s;if(!g){let s=J.rawSplit(t);g=Q.getBestVersionForData(s,p)}Y=J.fromString(t,g||40)}else throw Error("Invalid data");let en=Q.getBestVersionForData(Y,p);if(!en)throw Error("The amount of data is too big to be stored in a QR Code");if(s){if(s<en)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+en+".\n")}else s=en;let ei=function(t,s,p){let m=new v;p.forEach(function(s){m.put(s.mode.bit,4),m.put(s.getLength(),X.getCharCountIndicator(s.mode,t)),s.write(m)});let _=g.getSymbolTotalCodewords(t),x=W.getTotalCodewordsCount(t,s),T=(_-x)*8;for(m.getLengthInBits()+4<=T&&m.put(0,4);m.getLengthInBits()%8!=0;)m.putBit(0);let F=(T-m.getLengthInBits())/8;for(let t=0;t<F;t++)m.put(t%2?17:236,8);return function(t,s,p){let m,v;let _=g.getSymbolTotalCodewords(s),x=W.getTotalCodewordsCount(s,p),T=_-x,F=W.getBlocksCount(s,p),Q=_%F,Y=F-Q,X=Math.floor(_/F),J=Math.floor(T/F),en=J+1,ei=X-J,eo=new Z(ei),ea=0,es=Array(F),el=Array(F),ec=0,eu=new Uint8Array(t.buffer);for(let t=0;t<F;t++){let s=t<Y?J:en;es[t]=eu.slice(ea,ea+s),el[t]=eo.encode(es[t]),ea+=s,ec=Math.max(ec,s)}let ed=new Uint8Array(_),eh=0;for(m=0;m<ec;m++)for(v=0;v<F;v++)m<es[v].length&&(ed[eh++]=es[v][m]);for(m=0;m<ei;m++)for(v=0;v<F;v++)ed[eh++]=el[v][m];return ed}(m,t,s)}(s,p,Y),eo=g.getSymbolSize(s),ea=new _(eo);return function(t,s){let p=t.size,g=T.getPositions(s);for(let s=0;s<g.length;s++){let m=g[s][0],v=g[s][1];for(let s=-1;s<=7;s++)if(!(m+s<=-1)&&!(p<=m+s))for(let g=-1;g<=7;g++)v+g<=-1||p<=v+g||(s>=0&&s<=6&&(0===g||6===g)||g>=0&&g<=6&&(0===s||6===s)||s>=2&&s<=4&&g>=2&&g<=4?t.set(m+s,v+g,!0,!0):t.set(m+s,v+g,!1,!0))}}(ea,s),function(t){let s=t.size;for(let p=8;p<s-8;p++){let s=p%2==0;t.set(p,6,s,!0),t.set(6,p,s,!0)}}(ea),function(t,s){let p=x.getPositions(s);for(let s=0;s<p.length;s++){let g=p[s][0],m=p[s][1];for(let s=-2;s<=2;s++)for(let p=-2;p<=2;p++)-2===s||2===s||-2===p||2===p||0===s&&0===p?t.set(g+s,m+p,!0,!0):t.set(g+s,m+p,!1,!0)}}(ea,s),setupFormatInfo(ea,p,0),s>=7&&function(t,s){let p,g,m;let v=t.size,_=Q.getEncodedBits(s);for(let s=0;s<18;s++)p=Math.floor(s/3),g=s%3+v-8-3,m=(_>>s&1)==1,t.set(p,g,m,!0),t.set(g,p,m,!0)}(ea,s),function(t,s){let p=t.size,g=-1,m=p-1,v=7,_=0;for(let x=p-1;x>0;x-=2)for(6===x&&x--;;){for(let p=0;p<2;p++)if(!t.isReserved(m,x-p)){let g=!1;_<s.length&&(g=(s[_]>>>v&1)==1),t.set(m,x-p,g),-1==--v&&(_++,v=7)}if((m+=g)<0||p<=m){m-=g,g=-g;break}}}(ea,ei),isNaN(m)&&(m=F.getBestMask(ea,setupFormatInfo.bind(null,ea,p))),F.applyMask(m,ea),setupFormatInfo(ea,p,m),{modules:ea,version:s,errorCorrectionLevel:p,maskPattern:m,segments:Y}}(t,p,en,Y)}},52882:function(t,s,p){let g=p(26143);function ReedSolomonEncoder(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}ReedSolomonEncoder.prototype.initialize=function(t){this.degree=t,this.genPoly=g.generateECPolynomial(this.degree)},ReedSolomonEncoder.prototype.encode=function(t){if(!this.genPoly)throw Error("Encoder not initialized");let s=new Uint8Array(t.length+this.degree);s.set(t);let p=g.mod(s,this.genPoly),m=this.degree-p.length;if(m>0){let t=new Uint8Array(this.degree);return t.set(p,m),t}return p},t.exports=ReedSolomonEncoder},7007:function(t,s){let p="[0-9]+",g="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";g=g.replace(/u/g,"\\u");let m="(?:(?![A-Z0-9 $%*+\\-./:]|"+g+")(?:.|[\r\n]))+";s.KANJI=RegExp(g,"g"),s.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),s.BYTE=RegExp(m,"g"),s.NUMERIC=RegExp(p,"g"),s.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let v=RegExp("^"+g+"$"),_=RegExp("^"+p+"$"),x=RegExp("^[A-Z0-9 $%*+\\-./:]+$");s.testKanji=function(t){return v.test(t)},s.testNumeric=function(t){return _.test(t)},s.testAlphanumeric=function(t){return x.test(t)}},16130:function(t,s,p){let g=p(76910),m=p(41085),v=p(8260),_=p(43424),x=p(35442),T=p(7007),F=p(10242),W=p(65987);function getStringByteLength(t){return unescape(encodeURIComponent(t)).length}function getSegments(t,s,p){let g;let m=[];for(;null!==(g=t.exec(p));)m.push({data:g[0],index:g.index,mode:s,length:g[0].length});return m}function getSegmentsFromString(t){let s,p;let m=getSegments(T.NUMERIC,g.NUMERIC,t),v=getSegments(T.ALPHANUMERIC,g.ALPHANUMERIC,t);F.isKanjiModeEnabled()?(s=getSegments(T.BYTE,g.BYTE,t),p=getSegments(T.KANJI,g.KANJI,t)):(s=getSegments(T.BYTE_KANJI,g.BYTE,t),p=[]);let _=m.concat(v,s,p);return _.sort(function(t,s){return t.index-s.index}).map(function(t){return{data:t.data,mode:t.mode,length:t.length}})}function getSegmentBitsLength(t,s){switch(s){case g.NUMERIC:return m.getBitsLength(t);case g.ALPHANUMERIC:return v.getBitsLength(t);case g.KANJI:return x.getBitsLength(t);case g.BYTE:return _.getBitsLength(t)}}function buildSingleSegment(t,s){let p;let T=g.getBestModeForData(t);if((p=g.from(s,T))!==g.BYTE&&p.bit<T.bit)throw Error('"'+t+'" cannot be encoded with mode '+g.toString(p)+".\n Suggested mode is: "+g.toString(T));switch(p!==g.KANJI||F.isKanjiModeEnabled()||(p=g.BYTE),p){case g.NUMERIC:return new m(t);case g.ALPHANUMERIC:return new v(t);case g.KANJI:return new x(t);case g.BYTE:return new _(t)}}s.fromArray=function(t){return t.reduce(function(t,s){return"string"==typeof s?t.push(buildSingleSegment(s,null)):s.data&&t.push(buildSingleSegment(s.data,s.mode)),t},[])},s.fromString=function(t,p){let m=getSegmentsFromString(t,F.isKanjiModeEnabled()),v=function(t){let s=[];for(let p=0;p<t.length;p++){let m=t[p];switch(m.mode){case g.NUMERIC:s.push([m,{data:m.data,mode:g.ALPHANUMERIC,length:m.length},{data:m.data,mode:g.BYTE,length:m.length}]);break;case g.ALPHANUMERIC:s.push([m,{data:m.data,mode:g.BYTE,length:m.length}]);break;case g.KANJI:s.push([m,{data:m.data,mode:g.BYTE,length:getStringByteLength(m.data)}]);break;case g.BYTE:s.push([{data:m.data,mode:g.BYTE,length:getStringByteLength(m.data)}])}}return s}(m),_=function(t,s){let p={},m={start:{}},v=["start"];for(let _=0;_<t.length;_++){let x=t[_],T=[];for(let t=0;t<x.length;t++){let F=x[t],W=""+_+t;T.push(W),p[W]={node:F,lastCount:0},m[W]={};for(let t=0;t<v.length;t++){let _=v[t];p[_]&&p[_].node.mode===F.mode?(m[_][W]=getSegmentBitsLength(p[_].lastCount+F.length,F.mode)-getSegmentBitsLength(p[_].lastCount,F.mode),p[_].lastCount+=F.length):(p[_]&&(p[_].lastCount=F.length),m[_][W]=getSegmentBitsLength(F.length,F.mode)+4+g.getCharCountIndicator(F.mode,s))}}v=T}for(let t=0;t<v.length;t++)m[v[t]].end=0;return{map:m,table:p}}(v,p),x=W.find_path(_.map,"start","end"),T=[];for(let t=1;t<x.length-1;t++)T.push(_.table[x[t]].node);return s.fromArray(T.reduce(function(t,s){let p=t.length-1>=0?t[t.length-1]:null;return p&&p.mode===s.mode?t[t.length-1].data+=s.data:t.push(s),t},[]))},s.rawSplit=function(t){return s.fromArray(getSegmentsFromString(t,F.isKanjiModeEnabled()))}},10242:function(t,s){let p;let g=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];s.getSymbolSize=function(t){if(!t)throw Error('"version" cannot be null or undefined');if(t<1||t>40)throw Error('"version" should be in range from 1 to 40');return 4*t+17},s.getSymbolTotalCodewords=function(t){return g[t]},s.getBCHDigit=function(t){let s=0;for(;0!==t;)s++,t>>>=1;return s},s.setToSJISFunction=function(t){if("function"!=typeof t)throw Error('"toSJISFunc" is not a valid function.');p=t},s.isKanjiModeEnabled=function(){return void 0!==p},s.toSJIS=function(t){return p(t)}},43114:function(t,s){s.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},23103:function(t,s,p){let g=p(10242),m=p(35393),v=p(64908),_=p(76910),x=p(43114),T=g.getBCHDigit(7973);function getReservedBitsCount(t,s){return _.getCharCountIndicator(t,s)+4}s.from=function(t,s){return x.isValid(t)?parseInt(t,10):s},s.getCapacity=function(t,s,p){if(!x.isValid(t))throw Error("Invalid QR Code version");void 0===p&&(p=_.BYTE);let v=g.getSymbolTotalCodewords(t),T=m.getTotalCodewordsCount(t,s),F=(v-T)*8;if(p===_.MIXED)return F;let W=F-getReservedBitsCount(p,t);switch(p){case _.NUMERIC:return Math.floor(W/10*3);case _.ALPHANUMERIC:return Math.floor(W/11*2);case _.KANJI:return Math.floor(W/13);case _.BYTE:default:return Math.floor(W/8)}},s.getBestVersionForData=function(t,p){let g;let m=v.from(p,v.M);if(Array.isArray(t)){if(t.length>1)return function(t,p){for(let g=1;g<=40;g++){let m=function(t,s){let p=0;return t.forEach(function(t){let g=getReservedBitsCount(t.mode,s);p+=g+t.getBitsLength()}),p}(t,g);if(m<=s.getCapacity(g,p,_.MIXED))return g}}(t,m);if(0===t.length)return 1;g=t[0]}else g=t;return function(t,p,g){for(let m=1;m<=40;m++)if(p<=s.getCapacity(m,g,t))return m}(g.mode,g.getLength(),m)},s.getEncodedBits=function(t){if(!x.isValid(t)||t<7)throw Error("Invalid QR Code version");let s=t<<12;for(;g.getBCHDigit(s)-T>=0;)s^=7973<<g.getBCHDigit(s)-T;return t<<12|s}},6907:function(t,s,p){let g=p(89653);s.render=function(t,s,p){var m;let v=p,_=s;void 0!==v||s&&s.getContext||(v=s,s=void 0),s||(_=function(){try{return document.createElement("canvas")}catch(t){throw Error("You need to specify a canvas element")}}()),v=g.getOptions(v);let x=g.getImageWidth(t.modules.size,v),T=_.getContext("2d"),F=T.createImageData(x,x);return g.qrToImageData(F.data,t,v),m=_,T.clearRect(0,0,m.width,m.height),m.style||(m.style={}),m.height=x,m.width=x,m.style.height=x+"px",m.style.width=x+"px",T.putImageData(F,0,0),_},s.renderToDataURL=function(t,p,g){let m=g;void 0!==m||p&&p.getContext||(m=p,p=void 0),m||(m={});let v=s.render(t,p,m),_=m.type||"image/png",x=m.rendererOpts||{};return v.toDataURL(_,x.quality)}},93776:function(t,s,p){let g=p(89653);function getColorAttrib(t,s){let p=t.a/255,g=s+'="'+t.hex+'"';return p<1?g+" "+s+'-opacity="'+p.toFixed(2).slice(1)+'"':g}function svgCmd(t,s,p){let g=t+s;return void 0!==p&&(g+=" "+p),g}s.render=function(t,s,p){let m=g.getOptions(s),v=t.modules.size,_=t.modules.data,x=v+2*m.margin,T=m.color.light.a?"<path "+getColorAttrib(m.color.light,"fill")+' d="M0 0h'+x+"v"+x+'H0z"/>':"",F="<path "+getColorAttrib(m.color.dark,"stroke")+' d="'+function(t,s,p){let g="",m=0,v=!1,_=0;for(let x=0;x<t.length;x++){let T=Math.floor(x%s),F=Math.floor(x/s);T||v||(v=!0),t[x]?(_++,x>0&&T>0&&t[x-1]||(g+=v?svgCmd("M",T+p,.5+F+p):svgCmd("m",m,0),m=0,v=!1),T+1<s&&t[x+1]||(g+=svgCmd("h",_),_=0)):m++}return g}(_,v,m.margin)+'"/>',W=m.width?'width="'+m.width+'" height="'+m.width+'" ':"",Z='<svg xmlns="http://www.w3.org/2000/svg" '+W+('viewBox="0 0 '+x)+" "+x+'" shape-rendering="crispEdges">'+T+F+"</svg>\n";return"function"==typeof p&&p(null,Z),Z}},89653:function(t,s){function hex2rgba(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw Error("Color should be defined as hex string");let s=t.slice().replace("#","").split("");if(s.length<3||5===s.length||s.length>8)throw Error("Invalid hex color: "+t);(3===s.length||4===s.length)&&(s=Array.prototype.concat.apply([],s.map(function(t){return[t,t]}))),6===s.length&&s.push("F","F");let p=parseInt(s.join(""),16);return{r:p>>24&255,g:p>>16&255,b:p>>8&255,a:255&p,hex:"#"+s.slice(0,6).join("")}}s.getOptions=function(t){t||(t={}),t.color||(t.color={});let s=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,p=t.width&&t.width>=21?t.width:void 0,g=t.scale||4;return{width:p,scale:p?4:g,margin:s,color:{dark:hex2rgba(t.color.dark||"#000000ff"),light:hex2rgba(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},s.getScale=function(t,s){return s.width&&s.width>=t+2*s.margin?s.width/(t+2*s.margin):s.scale},s.getImageWidth=function(t,p){let g=s.getScale(t,p);return Math.floor((t+2*p.margin)*g)},s.qrToImageData=function(t,p,g){let m=p.modules.size,v=p.modules.data,_=s.getScale(m,g),x=Math.floor((m+2*g.margin)*_),T=g.margin*_,F=[g.color.light,g.color.dark];for(let s=0;s<x;s++)for(let p=0;p<x;p++){let W=(s*x+p)*4,Z=g.color.light;if(s>=T&&p>=T&&s<x-T&&p<x-T){let t=Math.floor((s-T)/_),g=Math.floor((p-T)/_);Z=F[v[t*m+g]?1:0]}t[W++]=Z.r,t[W++]=Z.g,t[W++]=Z.b,t[W]=Z.a}}},69921:function(t,s){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p="function"==typeof Symbol&&Symbol.for,g=p?Symbol.for("react.element"):60103,m=p?Symbol.for("react.portal"):60106,v=p?Symbol.for("react.fragment"):60107,_=p?Symbol.for("react.strict_mode"):60108,x=p?Symbol.for("react.profiler"):60114,T=p?Symbol.for("react.provider"):60109,F=p?Symbol.for("react.context"):60110,W=p?Symbol.for("react.async_mode"):60111,Z=p?Symbol.for("react.concurrent_mode"):60111,Q=p?Symbol.for("react.forward_ref"):60112,Y=p?Symbol.for("react.suspense"):60113,X=p?Symbol.for("react.suspense_list"):60120,J=p?Symbol.for("react.memo"):60115,en=p?Symbol.for("react.lazy"):60116,ei=p?Symbol.for("react.block"):60121,eo=p?Symbol.for("react.fundamental"):60117,ea=p?Symbol.for("react.responder"):60118,es=p?Symbol.for("react.scope"):60119;function z(t){if("object"==typeof t&&null!==t){var s=t.$$typeof;switch(s){case g:switch(t=t.type){case W:case Z:case v:case x:case _:case Y:return t;default:switch(t=t&&t.$$typeof){case F:case Q:case en:case J:case T:return t;default:return s}}case m:return s}}}function A(t){return z(t)===Z}s.AsyncMode=W,s.ConcurrentMode=Z,s.ContextConsumer=F,s.ContextProvider=T,s.Element=g,s.ForwardRef=Q,s.Fragment=v,s.Lazy=en,s.Memo=J,s.Portal=m,s.Profiler=x,s.StrictMode=_,s.Suspense=Y,s.isAsyncMode=function(t){return A(t)||z(t)===W},s.isConcurrentMode=A,s.isContextConsumer=function(t){return z(t)===F},s.isContextProvider=function(t){return z(t)===T},s.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===g},s.isForwardRef=function(t){return z(t)===Q},s.isFragment=function(t){return z(t)===v},s.isLazy=function(t){return z(t)===en},s.isMemo=function(t){return z(t)===J},s.isPortal=function(t){return z(t)===m},s.isProfiler=function(t){return z(t)===x},s.isStrictMode=function(t){return z(t)===_},s.isSuspense=function(t){return z(t)===Y},s.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===v||t===Z||t===x||t===_||t===Y||t===X||"object"==typeof t&&null!==t&&(t.$$typeof===en||t.$$typeof===J||t.$$typeof===T||t.$$typeof===F||t.$$typeof===Q||t.$$typeof===eo||t.$$typeof===ea||t.$$typeof===es||t.$$typeof===ei)},s.typeOf=z},59864:function(t,s,p){"use strict";t.exports=p(69921)},80500:function(t){"use strict";t.exports=(t,s)=>{if(!("string"==typeof t&&"string"==typeof s))throw TypeError("Expected the arguments to be of type `string`");if(""===s)return[t];let p=t.indexOf(s);return -1===p?[t]:[t.slice(0,p),t.slice(p+s.length)]}},70610:function(t){"use strict";t.exports=t=>encodeURIComponent(t).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)},70655:function(t,s,p){"use strict";p.r(s),p.d(s,{__assign:function(){return __assign},__asyncDelegator:function(){return __asyncDelegator},__asyncGenerator:function(){return __asyncGenerator},__asyncValues:function(){return __asyncValues},__await:function(){return __await},__awaiter:function(){return __awaiter},__classPrivateFieldGet:function(){return __classPrivateFieldGet},__classPrivateFieldSet:function(){return __classPrivateFieldSet},__createBinding:function(){return __createBinding},__decorate:function(){return __decorate},__exportStar:function(){return __exportStar},__extends:function(){return __extends},__generator:function(){return __generator},__importDefault:function(){return __importDefault},__importStar:function(){return __importStar},__makeTemplateObject:function(){return __makeTemplateObject},__metadata:function(){return __metadata},__param:function(){return __param},__read:function(){return __read},__rest:function(){return __rest},__spread:function(){return __spread},__spreadArrays:function(){return __spreadArrays},__values:function(){return __values}});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var extendStatics=function(t,s){return(extendStatics=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,s){t.__proto__=s}||function(t,s){for(var p in s)s.hasOwnProperty(p)&&(t[p]=s[p])})(t,s)};function __extends(t,s){function __(){this.constructor=t}extendStatics(t,s),t.prototype=null===s?Object.create(s):(__.prototype=s.prototype,new __)}var __assign=function(){return(__assign=Object.assign||function(t){for(var s,p=1,g=arguments.length;p<g;p++)for(var m in s=arguments[p])Object.prototype.hasOwnProperty.call(s,m)&&(t[m]=s[m]);return t}).apply(this,arguments)};function __rest(t,s){var p={};for(var g in t)Object.prototype.hasOwnProperty.call(t,g)&&0>s.indexOf(g)&&(p[g]=t[g]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var m=0,g=Object.getOwnPropertySymbols(t);m<g.length;m++)0>s.indexOf(g[m])&&Object.prototype.propertyIsEnumerable.call(t,g[m])&&(p[g[m]]=t[g[m]]);return p}function __decorate(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_}function __param(t,s){return function(p,g){s(p,g,t)}}function __metadata(t,s){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,s)}function __awaiter(t,s,p,g){return new(p||(p=Promise))(function(m,v){function fulfilled(t){try{step(g.next(t))}catch(t){v(t)}}function rejected(t){try{step(g.throw(t))}catch(t){v(t)}}function step(t){var s;t.done?m(t.value):((s=t.value)instanceof p?s:new p(function(t){t(s)})).then(fulfilled,rejected)}step((g=g.apply(t,s||[])).next())})}function __generator(t,s){var p,g,m,v,_={label:0,sent:function(){if(1&m[0])throw m[1];return m[1]},trys:[],ops:[]};return v={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(v[Symbol.iterator]=function(){return this}),v;function verb(v){return function(x){return function(v){if(p)throw TypeError("Generator is already executing.");for(;_;)try{if(p=1,g&&(m=2&v[0]?g.return:v[0]?g.throw||((m=g.return)&&m.call(g),0):g.next)&&!(m=m.call(g,v[1])).done)return m;switch(g=0,m&&(v=[2&v[0],m.value]),v[0]){case 0:case 1:m=v;break;case 4:return _.label++,{value:v[1],done:!1};case 5:_.label++,g=v[1],v=[0];continue;case 7:v=_.ops.pop(),_.trys.pop();continue;default:if(!(m=(m=_.trys).length>0&&m[m.length-1])&&(6===v[0]||2===v[0])){_=0;continue}if(3===v[0]&&(!m||v[1]>m[0]&&v[1]<m[3])){_.label=v[1];break}if(6===v[0]&&_.label<m[1]){_.label=m[1],m=v;break}if(m&&_.label<m[2]){_.label=m[2],_.ops.push(v);break}m[2]&&_.ops.pop(),_.trys.pop();continue}v=s.call(t,_)}catch(t){v=[6,t],g=0}finally{p=m=0}if(5&v[0])throw v[1];return{value:v[0]?v[1]:void 0,done:!0}}([v,x])}}}function __createBinding(t,s,p,g){void 0===g&&(g=p),t[g]=s[p]}function __exportStar(t,s){for(var p in t)"default"===p||s.hasOwnProperty(p)||(s[p]=t[p])}function __values(t){var s="function"==typeof Symbol&&Symbol.iterator,p=s&&t[s],g=0;if(p)return p.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&g>=t.length&&(t=void 0),{value:t&&t[g++],done:!t}}};throw TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(t,s){var p="function"==typeof Symbol&&t[Symbol.iterator];if(!p)return t;var g,m,v=p.call(t),_=[];try{for(;(void 0===s||s-- >0)&&!(g=v.next()).done;)_.push(g.value)}catch(t){m={error:t}}finally{try{g&&!g.done&&(p=v.return)&&p.call(v)}finally{if(m)throw m.error}}return _}function __spread(){for(var t=[],s=0;s<arguments.length;s++)t=t.concat(__read(arguments[s]));return t}function __spreadArrays(){for(var t=0,s=0,p=arguments.length;s<p;s++)t+=arguments[s].length;for(var g=Array(t),m=0,s=0;s<p;s++)for(var v=arguments[s],_=0,x=v.length;_<x;_++,m++)g[m]=v[_];return g}function __await(t){return this instanceof __await?(this.v=t,this):new __await(t)}function __asyncGenerator(t,s,p){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var g,m=p.apply(t,s||[]),v=[];return g={},verb("next"),verb("throw"),verb("return"),g[Symbol.asyncIterator]=function(){return this},g;function verb(t){m[t]&&(g[t]=function(s){return new Promise(function(p,g){v.push([t,s,p,g])>1||resume(t,s)})})}function resume(t,s){try{var p;(p=m[t](s)).value instanceof __await?Promise.resolve(p.value.v).then(fulfill,reject):settle(v[0][2],p)}catch(t){settle(v[0][3],t)}}function fulfill(t){resume("next",t)}function reject(t){resume("throw",t)}function settle(t,s){t(s),v.shift(),v.length&&resume(v[0][0],v[0][1])}}function __asyncDelegator(t){var s,p;return s={},verb("next"),verb("throw",function(t){throw t}),verb("return"),s[Symbol.iterator]=function(){return this},s;function verb(g,m){s[g]=t[g]?function(s){return(p=!p)?{value:__await(t[g](s)),done:"return"===g}:m?m(s):s}:m}}function __asyncValues(t){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var s,p=t[Symbol.asyncIterator];return p?p.call(t):(t=__values(t),s={},verb("next"),verb("throw"),verb("return"),s[Symbol.asyncIterator]=function(){return this},s);function verb(p){s[p]=t[p]&&function(s){return new Promise(function(g,m){!function(t,s,p,g){Promise.resolve(g).then(function(s){t({value:s,done:p})},s)}(g,m,(s=t[p](s)).done,s.value)})}}}function __makeTemplateObject(t,s){return Object.defineProperty?Object.defineProperty(t,"raw",{value:s}):t.raw=s,t}function __importStar(t){if(t&&t.__esModule)return t;var s={};if(null!=t)for(var p in t)Object.hasOwnProperty.call(t,p)&&(s[p]=t[p]);return s.default=t,s}function __importDefault(t){return t&&t.__esModule?t:{default:t}}function __classPrivateFieldGet(t,s){if(!s.has(t))throw TypeError("attempted to get private field on non-instance");return s.get(t)}function __classPrivateFieldSet(t,s,p){if(!s.has(t))throw TypeError("attempted to set private field on non-instance");return s.set(t,p),p}},53250:function(t,s,p){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=p(67294),m="function"==typeof Object.is?Object.is:function(t,s){return t===s&&(0!==t||1/t==1/s)||t!=t&&s!=s},v=g.useState,_=g.useEffect,x=g.useLayoutEffect,T=g.useDebugValue;function r(t){var s=t.getSnapshot;t=t.value;try{var p=s();return!m(t,p)}catch(t){return!0}}var F="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(t,s){return s()}:function(t,s){var p=s(),g=v({inst:{value:p,getSnapshot:s}}),m=g[0].inst,F=g[1];return x(function(){m.value=p,m.getSnapshot=s,r(m)&&F({inst:m})},[t,p,s]),_(function(){return r(m)&&F({inst:m}),t(function(){r(m)&&F({inst:m})})},[t]),T(p),p};s.useSyncExternalStore=void 0!==g.useSyncExternalStore?g.useSyncExternalStore:F},50139:function(t,s,p){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=p(67294),m=p(61688),v="function"==typeof Object.is?Object.is:function(t,s){return t===s&&(0!==t||1/t==1/s)||t!=t&&s!=s},_=m.useSyncExternalStore,x=g.useRef,T=g.useEffect,F=g.useMemo,W=g.useDebugValue;s.useSyncExternalStoreWithSelector=function(t,s,p,g,m){var Z=x(null);if(null===Z.current){var Q={hasValue:!1,value:null};Z.current=Q}else Q=Z.current;var Y=_(t,(Z=F(function(){function a(s){if(!x){if(x=!0,t=s,s=g(s),void 0!==m&&Q.hasValue){var p=Q.value;if(m(p,s))return _=p}return _=s}if(p=_,v(t,s))return p;var T=g(s);return void 0!==m&&m(p,T)?p:(t=s,_=T)}var t,_,x=!1,T=void 0===p?null:p;return[function(){return a(s())},null===T?void 0:function(){return a(T())}]},[s,p,g,m]))[0],Z[1]);return T(function(){Q.hasValue=!0,Q.value=Y},[Y]),W(Y),Y}},61688:function(t,s,p){"use strict";t.exports=p(53250)},52798:function(t,s,p){"use strict";t.exports=p(50139)},35883:function(){},87462:function(t,s,p){"use strict";function _extends(){return(_extends=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var p=arguments[s];for(var g in p)Object.prototype.hasOwnProperty.call(p,g)&&(t[g]=p[g])}return t}).apply(this,arguments)}p.d(s,{Z:function(){return _extends}})},63366:function(t,s,p){"use strict";function _objectWithoutPropertiesLoose(t,s){if(null==t)return{};var p,g,m={},v=Object.keys(t);for(g=0;g<v.length;g++)p=v[g],s.indexOf(p)>=0||(m[p]=t[p]);return m}p.d(s,{Z:function(){return _objectWithoutPropertiesLoose}})},74278:function(t,s,p){"use strict";p.d(s,{_:function(){return Q}});var g,m=p(57858),v=p(53516),_=p(75276),x=p(45775),T=p(39028),F=p(21032),W=p(3980),Z=p(92106),Q=class extends _.wR{constructor({chains:t,options:s}={}){let p={shimDisconnect:!0,getProvider(){if("undefined"==typeof window)return;let t=window.ethereum;return t?.providers?t.providers[0]:t},...s};super({chains:t,options:p}),this.id="injected",(0,_.Ko)(this,g,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=t=>{0===t.length?this.emit("disconnect"):this.emit("change",{account:(0,x.K)(t[0])})},this.onChainChanged=t=>{let s=(0,v.J)(t),p=this.isChainUnsupported(s);this.emit("change",{chain:{id:s,unsupported:p}})},this.onDisconnect=async t=>{if(1013===t.code){let t=await this.getProvider();if(t){let t=await this.getAccount();if(t)return}}this.emit("disconnect"),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey)};let m=p.getProvider();if("string"==typeof p.name)this.name=p.name;else if(m){let t=function(t){if(!t)return"Injected";let getName=t=>t.isApexWallet?"Apex Wallet":t.isAvalanche?"Core Wallet":t.isBackpack?"Backpack":t.isBifrost?"Bifrost Wallet":t.isBitKeep?"BitKeep":t.isBitski?"Bitski":t.isBlockWallet?"BlockWallet":t.isBraveWallet?"Brave Wallet":t.isCoin98?"Coin98 Wallet":t.isCoinbaseWallet?"Coinbase Wallet":t.isDawn?"Dawn Wallet":t.isDefiant?"Defiant":t.isDesig?"Desig Wallet":t.isEnkrypt?"Enkrypt":t.isExodus?"Exodus":t.isFordefi?"Fordefi":t.isFrame?"Frame":t.isFrontier?"Frontier Wallet":t.isGamestop?"GameStop Wallet":t.isHaqqWallet?"HAQQ Wallet":t.isHyperPay?"HyperPay Wallet":t.isImToken?"ImToken":t.isHaloWallet?"Halo Wallet":t.isKuCoinWallet?"KuCoin Wallet":t.isMathWallet?"MathWallet":t.isNovaWallet?"Nova Wallet":t.isOkxWallet||t.isOKExWallet?"OKX Wallet":t.isOneInchIOSWallet||t.isOneInchAndroidWallet?"1inch Wallet":t.isOpera?"Opera":t.isPhantom?"Phantom":t.isPortal?"Ripio Portal":t.isRabby?"Rabby Wallet":t.isRainbow?"Rainbow":t.isStatus?"Status":t.isSubWallet?"SubWallet":t.isTalisman?"Talisman":t.isTally?"Taho":t.isTokenPocket?"TokenPocket":t.isTokenary?"Tokenary":t.isTrust||t.isTrustWallet?"Trust Wallet":t.isTTWallet?"TTWallet":t.isXDEFI?"XDEFI Wallet":t.isZeal?"Zeal":t.isZerion?"Zerion":t.isMetaMask?"MetaMask":void 0;if(t.providers?.length){let s=new Set,p=1;for(let g of t.providers){let t=getName(g);t||(t=`Unknown Wallet #${p}`,p+=1),s.add(t)}let g=[...s];return g.length?g:g[0]??"Injected"}return getName(t)??"Injected"}(m);p.name?this.name=p.name(t):"string"==typeof t?this.name=t:this.name=t[0]}else this.name="Injected";this.ready=!!m}async connect({chainId:t}={}){try{let s=await this.getProvider();if(!s)throw new m.N;s.on&&(s.on("accountsChanged",this.onAccountsChanged),s.on("chainChanged",this.onChainChanged),s.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});let p=await s.request({method:"eth_requestAccounts"}),g=(0,x.K)(p[0]),v=await this.getChainId(),_=this.isChainUnsupported(v);if(t&&v!==t){let s=await this.switchChain(t);v=s.id,_=this.isChainUnsupported(v)}return this.options.shimDisconnect&&this.storage?.setItem(this.shimDisconnectKey,!0),{account:g,chain:{id:v,unsupported:_}}}catch(t){if(this.isUserRejectedRequestError(t))throw new T.ab(t);if(-32002===t.code)throw new T.pT(t);throw t}}async disconnect(){let t=await this.getProvider();t?.removeListener&&(t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))}async getAccount(){let t=await this.getProvider();if(!t)throw new m.N;let s=await t.request({method:"eth_accounts"});return(0,x.K)(s[0])}async getChainId(){let t=await this.getProvider();if(!t)throw new m.N;return t.request({method:"eth_chainId"}).then(v.J)}async getProvider(){let t=this.options.getProvider();return t&&(0,_.qx)(this,g,t),(0,_.ac)(this,g)}async getWalletClient({chainId:t}={}){let[s,p]=await Promise.all([this.getProvider(),this.getAccount()]),g=this.chains.find(s=>s.id===t);if(!s)throw Error("provider is required.");return(0,F.K)({account:p,chain:g,transport:(0,W.P)(s)})}async isAuthorized(){try{if(this.options.shimDisconnect&&!this.storage?.getItem(this.shimDisconnectKey))return!1;let t=await this.getProvider();if(!t)throw new m.N;let s=await this.getAccount();return!!s}catch{return!1}}async switchChain(t){let s=await this.getProvider();if(!s)throw new m.N;let p=(0,Z.eC)(t);try{return await Promise.all([s.request({method:"wallet_switchEthereumChain",params:[{chainId:p}]}),new Promise(s=>this.on("change",({chain:p})=>{p?.id===t&&s()}))]),this.chains.find(s=>s.id===t)??{id:t,name:`Chain ${p}`,network:`${p}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(v){let g=this.chains.find(s=>s.id===t);if(!g)throw new m.B({chainId:t,connectorId:this.id});if(4902===v.code||v?.data?.originalError?.code===4902)try{await s.request({method:"wallet_addEthereumChain",params:[{chainId:p,chainName:g.name,nativeCurrency:g.nativeCurrency,rpcUrls:[g.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(g)}]});let m=await this.getChainId();if(m!==t)throw new T.ab(Error("User rejected switch after adding network."));return g}catch(t){throw new T.ab(t)}if(this.isUserRejectedRequestError(v))throw new T.ab(v);throw new T.x3(v)}}async watchAsset({address:t,decimals:s=18,image:p,symbol:g}){let v=await this.getProvider();if(!v)throw new m.N;return v.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:s,image:p,symbol:g}}})}isUserRejectedRequestError(t){return 4001===t.code}};g=new WeakMap},53516:function(t,s,p){"use strict";function normalizeChainId(t){return"string"==typeof t?Number.parseInt(t,"0x"===t.trim().substring(0,2)?16:10):"bigint"==typeof t?Number(t):t}p.d(s,{J:function(){return normalizeChainId}})},57858:function(t,s,p){"use strict";p.d(s,{B:function(){return g},N:function(){return m}});var g=class extends Error{constructor({chainId:t,connectorId:s}){super(`Chain "${t}" not configured for connector "${s}".`),this.name="ChainNotConfiguredForConnectorError"}},m=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}}},75276:function(t,s,p){"use strict";p.d(s,{wR:function(){return x},Ko:function(){return __privateAdd},ac:function(){return __privateGet},U9:function(){return __privateMethod},qx:function(){return __privateSet}});var g=p(26729),m=p(66403),v=p(22676);let _=(0,v.ax)({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0});var __accessCheck=(t,s,p)=>{if(!s.has(t))throw TypeError("Cannot "+p)},__privateGet=(t,s,p)=>(__accessCheck(t,s,"read from private field"),p?p.call(t):s.get(t)),__privateAdd=(t,s,p)=>{if(s.has(t))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(t):s.set(t,p)},__privateSet=(t,s,p,g)=>(__accessCheck(t,s,"write to private field"),g?g.call(t,p):s.set(t,p),p),__privateMethod=(t,s,p)=>(__accessCheck(t,s,"access private method"),p),x=class extends g{constructor({chains:t=[m.R,_],options:s}){super(),this.chains=t,this.options=s}getBlockExplorerUrls(t){let{default:s,...p}=t.blockExplorers??{};if(s)return[s.url,...Object.values(p).map(t=>t.url)]}isChainUnsupported(t){return!this.chains.some(s=>s.id===t)}setStorage(t){this.storage=t}}},65598:function(t,s,p){"use strict";p.d(s,{QB:function(){return configureChains},$j:function(){return connect},_g:function(){return createConfig},o6:function(){return createStorage},vZ:function(){return function deepEqual(t,s){if(t===s)return!0;if(t&&s&&"object"==typeof t&&"object"==typeof s){let p,g;if(t.constructor!==s.constructor)return!1;if(Array.isArray(t)&&Array.isArray(s)){if((p=t.length)!=s.length)return!1;for(g=p;0!=g--;)if(!deepEqual(t[g],s[g]))return!1;return!0}if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===s.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===s.toString();let m=Object.keys(t);if((p=m.length)!==Object.keys(s).length)return!1;for(g=p;0!=g--;)if(!Object.prototype.hasOwnProperty.call(s,m[g]))return!1;for(g=p;0!=g--;){let p=m[g];if(p&&!deepEqual(t[p],s[p]))return!1}return!0}return t!=t&&s!=s}},zP:function(){return disconnect},EG:function(){return fetchBalance},RQ:function(){return fetchBlockNumber},w6:function(){return fetchEnsAvatar},Lk:function(){return fetchEnsName},D0:function(){return getAccount},_X:function(){return getCallParameters},Hy:function(){return getNetwork},uV:function(){return getPublicClient},gY:function(){return getSendTransactionParameters},xz:function(){return getWalletClient},jr:function(){return getWebSocketPublicClient},wp:function(){return tr},$q:function(){return prepareWriteContract},a4:function(){return chunk_TSH6VVF4_readContract},If:function(){return switchNetwork},Mn:function(){return waitForTransaction},uH:function(){return watchAccount},QC:function(){return watchNetwork},pC:function(){return watchPublicClient},Tb:function(){return watchWalletClient},fq:function(){return watchWebSocketPublicClient},n9:function(){return writeContract}});var g,m,v,_,x,T=p(74278),__accessCheck=(t,s,p)=>{if(!s.has(t))throw TypeError("Cannot "+p)},__privateGet=(t,s,p)=>(__accessCheck(t,s,"read from private field"),p?p.call(t):s.get(t)),__privateAdd=(t,s,p)=>{if(s.has(t))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(t):s.set(t,p)},__privateSet=(t,s,p,g)=>(__accessCheck(t,s,"write to private field"),g?g.call(t,p):s.set(t,p),p),__privateMethod=(t,s,p)=>(__accessCheck(t,s,"access private method"),p),F=p(16189),W=p(16693),Z=p(7210),Q=p(77799),Y=p(22676),X=p(61836),J=p(92106),en=p(21746),ei=p(62027),eo=p(97405);function isNullUniversalResolverError(t,s){if(!(t instanceof ei.G))return!1;let p=t.walk(t=>t instanceof eo.Lu);return p instanceof eo.Lu&&(!!(p.data?.errorName==="ResolverNotFound"||p.data?.errorName==="ResolverWildcardNotSupported"||p.reason?.includes("Wildcard on non-extended resolvers is not supported"))||"reverse"===s&&p.reason===en.$[50])}var ea=p(57040),es=p(11187),el=p(56254),ec=p(15102);function encodedLabelToLabelhash(t){if(66!==t.length||0!==t.indexOf("[")||65!==t.indexOf("]"))return null;let s=`0x${t.slice(1,65)}`;return(0,ec.v)(s)?s:null}function namehash(t){let s=new Uint8Array(32).fill(0);if(!t)return(0,J.ci)(s);let p=t.split(".");for(let t=p.length-1;t>=0;t-=1){let g=encodedLabelToLabelhash(p[t]),m=g?(0,es.O0)(g):(0,el.w)((0,es.qX)(p[t]),"bytes");s=(0,el.w)((0,ea.zo)([s,m]),"bytes")}return(0,J.ci)(s)}function packetToBytes(t){let s=t.replace(/^\.|\.$/gm,"");if(0===s.length)return new Uint8Array(1);let p=new Uint8Array((0,es.qX)(s).byteLength+2),g=0,m=s.split(".");for(let t=0;t<m.length;t++){let s=(0,es.qX)(m[t]);if(s.byteLength>255){var v;s=(0,es.qX)((v=function(t){let s=new Uint8Array(32).fill(0);return t?encodedLabelToLabelhash(t)||(0,el.w)((0,es.qX)(t)):(0,J.ci)(s)}(m[t]),`[${v.slice(2)}]`))}p[g]=s.length,p.set(s,g+1),g+=s.length+1}return p.byteLength!==g+1?p.slice(0,g+1):p}var eu=p(57412),ed=p(39028);function getContractError(t,{abi:s,address:p,args:g,docsPath:m,functionName:v,sender:_}){let{code:x,data:T,message:F,shortMessage:W}=t instanceof eo.VQ?t:t instanceof ei.G?t.walk(t=>"data"in t)||t.walk():{},Z=t instanceof eu.wb?new eo.Dk({functionName:v}):[3,ed.XS.code].includes(x)&&(T||F||W)?new eo.Lu({abi:s,data:"object"==typeof T?T.data:T,functionName:v,message:W??F}):t;return new eo.uq(Z,{abi:s,args:g,contractAddress:p,docsPath:m,functionName:v,sender:_})}var eh=p(61376);async function readContract(t,{abi:s,address:p,args:g,functionName:m,...v}){let _=(0,Q.R)({abi:s,args:g,functionName:m});try{let{data:x}=await (0,eh.R)(t,{data:_,to:p,...v});return(0,Z.k)({abi:s,args:g,functionName:m,data:x||"0x"})}catch(t){throw getContractError(t,{abi:s,address:p,args:g,docsPath:"/docs/contract/readContract",functionName:m})}}async function getEnsAddress(t,{blockNumber:s,blockTag:p,coinType:g,name:m,universalResolverAddress:v}){let _=v;if(!_){if(!t.chain)throw Error("client chain not configured. universalResolverAddress is required.");_=(0,Y.LI)({blockNumber:s,chain:t.chain,contract:"ensUniversalResolver"})}try{let v=(0,Q.R)({abi:W.X$,functionName:"addr",...null!=g?{args:[namehash(m),BigInt(g)]}:{args:[namehash(m)]}}),x=await readContract(t,{address:_,abi:W.k3,functionName:"resolve",args:[(0,J.NC)(packetToBytes(m)),v],blockNumber:s,blockTag:p});if("0x"===x[0])return null;let T=(0,Z.k)({abi:W.X$,args:null!=g?[namehash(m),BigInt(g)]:void 0,functionName:"addr",data:x[0]});if("0x"===T||"0x00"===(0,X.f)(T))return null;return T}catch(t){if(isNullUniversalResolverError(t,"resolve"))return null;throw t}}let EnsAvatarInvalidMetadataError=class EnsAvatarInvalidMetadataError extends ei.G{constructor({data:t}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}};let EnsAvatarInvalidNftUriError=class EnsAvatarInvalidNftUriError extends ei.G{constructor({reason:t}){super(`ENS NFT avatar URI is invalid. ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}};let EnsAvatarUriResolutionError=class EnsAvatarUriResolutionError extends ei.G{constructor({uri:t}){super(`Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}};let EnsAvatarUnsupportedNamespaceError=class EnsAvatarUnsupportedNamespaceError extends ei.G{constructor({namespace:t}){super(`ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}};let ef=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,ep=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,eg=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,em=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function isImageUri(t){try{let s=await fetch(t,{method:"HEAD"});if(200===s.status){let t=s.headers.get("content-type");return t?.startsWith("image/")}return!1}catch(s){if("object"==typeof s&&void 0!==s.response||!globalThis.hasOwnProperty("Image"))return!1;return new Promise(s=>{let p=new Image;p.onload=()=>{s(!0)},p.onerror=()=>{s(!1)},p.src=t})}}function getGateway(t,s){return t?t.endsWith("/")?t.slice(0,-1):t:s}function resolveAvatarUri({uri:t,gatewayUrls:s}){let p=eg.test(t);if(p)return{uri:t,isOnChain:!0,isEncoded:p};let g=getGateway(s?.ipfs,"https://ipfs.io"),m=getGateway(s?.arweave,"https://arweave.net"),v=t.match(ef),{protocol:_,subpath:x,target:T,subtarget:F=""}=v?.groups||{},W="ipns:/"===_||"ipns/"===x,Z="ipfs:/"===_||"ipfs/"===x||ep.test(t);if(t.startsWith("http")&&!W&&!Z){let p=t;return s?.arweave&&(p=t.replace(/https:\/\/arweave.net/g,s?.arweave)),{uri:p,isOnChain:!1,isEncoded:!1}}if((W||Z)&&T)return{uri:`${g}/${W?"ipns":"ipfs"}/${T}${F}`,isOnChain:!1,isEncoded:!1};if("ar:/"===_&&T)return{uri:`${m}/${T}${F||""}`,isOnChain:!1,isEncoded:!1};let Q=t.replace(em,"");if(Q.startsWith("<svg")&&(Q=`data:image/svg+xml;base64,${btoa(Q)}`),Q.startsWith("data:")||Q.startsWith("{"))return{uri:Q,isOnChain:!0,isEncoded:!1};throw new EnsAvatarUriResolutionError({uri:t})}function getJsonImage(t){if("object"!=typeof t||!("image"in t)&&!("image_url"in t)&&!("image_data"in t))throw new EnsAvatarInvalidMetadataError({data:t});return t.image||t.image_url||t.image_data}async function getMetadataAvatarUri({gatewayUrls:t,uri:s}){try{let p=await fetch(s).then(t=>t.json()),g=await parseAvatarUri({gatewayUrls:t,uri:getJsonImage(p)});return g}catch{throw new EnsAvatarUriResolutionError({uri:s})}}async function parseAvatarUri({gatewayUrls:t,uri:s}){let{uri:p,isOnChain:g}=resolveAvatarUri({uri:s,gatewayUrls:t});if(g)return p;let m=await isImageUri(p);if(m)return p;throw new EnsAvatarUriResolutionError({uri:s})}async function getNftTokenUri(t,{nft:s}){if("erc721"===s.namespace)return readContract(t,{address:s.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(s.tokenID)]});if("erc1155"===s.namespace)return readContract(t,{address:s.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(s.tokenID)]});throw new EnsAvatarUnsupportedNamespaceError({namespace:s.namespace})}async function parseAvatarRecord(t,{gatewayUrls:s,record:p}){return/eip155:/i.test(p)?parseNftAvatarUri(t,{gatewayUrls:s,record:p}):parseAvatarUri({uri:p,gatewayUrls:s})}async function parseNftAvatarUri(t,{gatewayUrls:s,record:p}){let g=function(t){let s=t;s.startsWith("did:nft:")&&(s=s.replace("did:nft:","").replace(/_/g,"/"));let[p,g,m]=s.split("/"),[v,_]=p.split(":"),[x,T]=g.split(":");if(!v||"eip155"!==v.toLowerCase())throw new EnsAvatarInvalidNftUriError({reason:"Only EIP-155 supported"});if(!_)throw new EnsAvatarInvalidNftUriError({reason:"Chain ID not found"});if(!T)throw new EnsAvatarInvalidNftUriError({reason:"Contract address not found"});if(!m)throw new EnsAvatarInvalidNftUriError({reason:"Token ID not found"});if(!x)throw new EnsAvatarInvalidNftUriError({reason:"ERC namespace not found"});return{chainID:parseInt(_),namespace:x.toLowerCase(),contractAddress:T,tokenID:m}}(p),m=await getNftTokenUri(t,{nft:g}),{uri:v,isOnChain:_,isEncoded:x}=resolveAvatarUri({uri:m,gatewayUrls:s});if(_&&(v.includes("data:application/json;base64,")||v.startsWith("{"))){let t=x?atob(v.replace("data:application/json;base64,","")):v,p=JSON.parse(t);return parseAvatarUri({uri:getJsonImage(p),gatewayUrls:s})}let T=g.tokenID;return"erc1155"===g.namespace&&(T=T.replace("0x","").padStart(64,"0")),getMetadataAvatarUri({gatewayUrls:s,uri:v.replace(/(?:0x)?{id}/,T)})}async function getEnsText(t,{blockNumber:s,blockTag:p,name:g,key:m,universalResolverAddress:v}){let _=v;if(!_){if(!t.chain)throw Error("client chain not configured. universalResolverAddress is required.");_=(0,Y.LI)({blockNumber:s,chain:t.chain,contract:"ensUniversalResolver"})}try{let v=await readContract(t,{address:_,abi:W.k3,functionName:"resolve",args:[(0,J.NC)(packetToBytes(g)),(0,Q.R)({abi:W.nZ,functionName:"text",args:[namehash(g),m]})],blockNumber:s,blockTag:p});if("0x"===v[0])return null;let x=(0,Z.k)({abi:W.nZ,functionName:"text",data:v[0]});return""===x?null:x}catch(t){if(isNullUniversalResolverError(t,"resolve"))return null;throw t}}async function getEnsAvatar(t,{blockNumber:s,blockTag:p,gatewayUrls:g,name:m,universalResolverAddress:v}){let _=await getEnsText(t,{blockNumber:s,blockTag:p,key:"avatar",name:m,universalResolverAddress:v});if(!_)return null;try{return await parseAvatarRecord(t,{record:_,gatewayUrls:g})}catch{return null}}async function getEnsName(t,{address:s,blockNumber:p,blockTag:g,universalResolverAddress:m}){let v=m;if(!v){if(!t.chain)throw Error("client chain not configured. universalResolverAddress is required.");v=(0,Y.LI)({blockNumber:p,chain:t.chain,contract:"ensUniversalResolver"})}let _=`${s.toLowerCase().substring(2)}.addr.reverse`;try{let s=await readContract(t,{address:v,abi:W.du,functionName:"reverse",args:[(0,J.NC)(packetToBytes(_))],blockNumber:p,blockTag:g});return s[0]}catch(t){if(isNullUniversalResolverError(t,"reverse"))return null;throw t}}async function getEnsResolver(t,{blockNumber:s,blockTag:p,name:g,universalResolverAddress:m}){let v=m;if(!v){if(!t.chain)throw Error("client chain not configured. universalResolverAddress is required.");v=(0,Y.LI)({blockNumber:s,chain:t.chain,contract:"ensUniversalResolver"})}let[_]=await readContract(t,{address:v,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[(0,J.NC)(packetToBytes(g))],blockNumber:s,blockTag:p});return _}function createFilterRequestScope(t,{method:s}){let p={};return"fallback"===t.transport.type&&t.transport.onResponse?.(({method:t,response:g,status:m,transport:v})=>{"success"===m&&s===t&&(p[g]=v.request)}),s=>p[s]||t.request}async function createBlockFilter(t){let s=createFilterRequestScope(t,{method:"eth_newBlockFilter"}),p=await t.request({method:"eth_newBlockFilter"});return{id:p,request:s(p),type:"block"}}let FilterTypeNotSupportedError=class FilterTypeNotSupportedError extends ei.G{constructor(t){super(`Filter type "${t}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}};var eb=p(74059),ew=p(45444),ey=p(80522),ev=p(40840);function encodeEventTopics({abi:t,eventName:s,args:p}){let g=t[0];if(s&&!(g=(0,ev.m)({abi:t,args:p,name:s})))throw new eu.mv(s,{docsPath:"/docs/contract/encodeEventTopics"});if("event"!==g.type)throw new eu.mv(void 0,{docsPath:"/docs/contract/encodeEventTopics"});let m=(0,ey.t)(g),v=(0,eb.e)(m),_=[];if(p&&"inputs"in g){let t=g.inputs?.filter(t=>"indexed"in t&&t.indexed),s=Array.isArray(p)?p:Object.values(p).length>0?t?.map(t=>p[t.name])??[]:[];s.length>0&&(_=t?.map((t,p)=>Array.isArray(s[p])?s[p].map((g,m)=>encodeArg({param:t,value:s[p][m]})):s[p]?encodeArg({param:t,value:s[p]}):null)??[])}return[v,..._]}function encodeArg({param:t,value:s}){if("string"===t.type||"bytes"===t.type)return(0,el.w)((0,es.O0)(s));if("tuple"===t.type||t.type.match(/^(.*)\[(\d+)?\]$/))throw new FilterTypeNotSupportedError(t.type);return(0,ew.E)([t],[s])}async function createContractEventFilter(t,{address:s,abi:p,args:g,eventName:m,fromBlock:v,strict:_,toBlock:x}){let T=createFilterRequestScope(t,{method:"eth_newFilter"}),F=m?encodeEventTopics({abi:p,args:g,eventName:m}):void 0,W=await t.request({method:"eth_newFilter",params:[{address:s,fromBlock:"bigint"==typeof v?(0,J.eC)(v):v,toBlock:"bigint"==typeof x?(0,J.eC)(x):x,topics:F}]});return{abi:p,args:g,eventName:m,id:W,request:T(W),strict:_,type:"event"}}async function createEventFilter(t,{address:s,args:p,event:g,events:m,fromBlock:v,strict:_,toBlock:x}={}){let T=m??(g?[g]:void 0),F=createFilterRequestScope(t,{method:"eth_newFilter"}),W=[];T&&(W=[T.flatMap(t=>encodeEventTopics({abi:[t],eventName:t.name,args:p}))],g&&(W=W[0]));let Z=await t.request({method:"eth_newFilter",params:[{address:s,fromBlock:"bigint"==typeof v?(0,J.eC)(v):v,toBlock:"bigint"==typeof x?(0,J.eC)(x):x,...W.length?{topics:W}:{}}]});return{abi:T,args:p,eventName:g?g.name:void 0,fromBlock:v,id:Z,request:F(Z),strict:_,toBlock:x,type:"event"}}async function createPendingTransactionFilter(t){let s=createFilterRequestScope(t,{method:"eth_newPendingTransactionFilter"}),p=await t.request({method:"eth_newPendingTransactionFilter"});return{id:p,request:s(p),type:"transaction"}}var eC=p(14503),e_=p(81841);async function estimateContractGas(t,{abi:s,address:p,args:g,functionName:m,...v}){let _=(0,Q.R)({abi:s,args:g,functionName:m});try{let s=await (0,e_.Q)(t,{data:_,to:p,...v});return s}catch(_){let t=v.account?(0,eC.T)(v.account):void 0;throw getContractError(_,{abi:s,address:p,args:g,docsPath:"/docs/contract/estimateContractGas",functionName:m,sender:t?.address})}}var ex=p(43861),eE=p(79379);async function getBalance(t,{address:s,blockNumber:p,blockTag:g="latest"}){let m=p?(0,J.eC)(p):void 0,v=await t.request({method:"eth_getBalance",params:[s,m||g]});return BigInt(v)}var ek=p(36765);let eS=new Map,eP=new Map;async function withCache(t,{cacheKey:s,cacheTime:p=1/0}){let g=function(t){let buildCache=(t,s)=>({clear:()=>s.delete(t),get:()=>s.get(t),set:p=>s.set(t,p)}),s=buildCache(t,eS),p=buildCache(t,eP);return{clear:()=>{s.clear(),p.clear()},promise:s,response:p}}(s),m=g.response.get();if(m&&p>0){let t=new Date().getTime()-m.created.getTime();if(t<p)return m.data}let v=g.promise.get();v||(v=t(),g.promise.set(v));try{let t=await v;return g.response.set({created:new Date,data:t}),t}finally{g.promise.clear()}}let cacheKey=t=>`blockNumber.${t}`;async function getBlockNumber(t,{cacheTime:s=t.cacheTime,maxAge:p}={}){let g=await withCache(()=>t.request({method:"eth_blockNumber"}),{cacheKey:cacheKey(t.uid),cacheTime:p??s});return BigInt(g)}var eA=p(95946);async function getBlockTransactionCount(t,{blockHash:s,blockNumber:p,blockTag:g="latest"}={}){let m;let v=void 0!==p?(0,J.eC)(p):void 0;return m=s?await t.request({method:"eth_getBlockTransactionCountByHash",params:[s]}):await t.request({method:"eth_getBlockTransactionCountByNumber",params:[v||g]}),(0,eA.ly)(m)}async function getBytecode(t,{address:s,blockNumber:p,blockTag:g="latest"}){let m=void 0!==p?(0,J.eC)(p):void 0,v=await t.request({method:"eth_getCode",params:[s,m||g]});if("0x"!==v)return v}var e$=p(79524),eO=p(34450);let eD="/docs/contract/decodeEventLog";function decodeEventLog({abi:t,data:s,strict:p,topics:g}){let m=p??!0,[v,..._]=g;if(!v)throw new eu.FM({docsPath:eD});let x=t.find(t=>"event"===t.type&&v===(0,eb.e)((0,ey.t)(t)));if(!(x&&"name"in x)||"event"!==x.type)throw new eu.lC(v,{docsPath:eD});let{name:T,inputs:F}=x,W=F?.some(t=>!("name"in t&&t.name)),Z=W?[]:{},Q=F.filter(t=>"indexed"in t&&t.indexed);for(let t=0;t<Q.length;t++){let s=Q[t],p=_[t];if(!p)throw new eu.Gy({abiItem:x,param:s});Z[s.name||t]=function({param:t,value:s}){if("string"===t.type||"bytes"===t.type||"tuple"===t.type||t.type.match(/^(.*)\[(\d+)?\]$/))return s;let p=(0,eO.r)([t],s)||[];return p[0]}({param:s,value:p})}let Y=F.filter(t=>!("indexed"in t&&t.indexed));if(Y.length>0){if(s&&"0x"!==s)try{let t=(0,eO.r)(Y,s);if(t){if(W)Z=[...Z,...t];else for(let s=0;s<Y.length;s++)Z[Y[s].name]=t[s]}}catch(t){if(m){if(t instanceof eu.xB)throw new eu.SM({abiItem:x,data:t.data,params:t.params,size:t.size});throw t}}else if(m)throw new eu.SM({abiItem:x,data:"0x",params:Y,size:0})}return{eventName:T,args:Object.values(Z).length>0?Z:void 0}}function formatLog(t,{args:s,eventName:p}={}){return{...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,logIndex:t.logIndex?Number(t.logIndex):null,transactionHash:t.transactionHash?t.transactionHash:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,...p?{args:s,eventName:p}:{}}}async function getLogs(t,{address:s,blockHash:p,fromBlock:g,toBlock:m,event:v,events:_,args:x,strict:T}={}){let F=T??!1,W=_??(v?[v]:void 0),Z=[];return W&&(Z=[W.flatMap(t=>encodeEventTopics({abi:[t],eventName:t.name,args:x}))],v&&(Z=Z[0])),(p?await t.request({method:"eth_getLogs",params:[{address:s,topics:Z,blockHash:p}]}):await t.request({method:"eth_getLogs",params:[{address:s,topics:Z,fromBlock:"bigint"==typeof g?(0,J.eC)(g):g,toBlock:"bigint"==typeof m?(0,J.eC)(m):m}]})).map(t=>{try{let{eventName:s,args:p}=W?decodeEventLog({abi:W,data:t.data,topics:t.topics,strict:F}):{eventName:void 0,args:void 0};return formatLog(t,{args:p,eventName:s})}catch(g){let s,p;if(g instanceof eu.SM||g instanceof eu.Gy){if(F)return;s=g.abiItem.name,p=g.abiItem.inputs?.some(t=>!("name"in t&&t.name))}return formatLog(t,{args:p?[]:{},eventName:s})}}).filter(Boolean)}async function getContractEvents(t,{abi:s,address:p,args:g,blockHash:m,eventName:v,fromBlock:_,toBlock:x,strict:T}){let F=v?(0,ev.m)({abi:s,name:v}):void 0,W=F?void 0:s.filter(t=>"event"===t.type);return getLogs(t,{address:p,args:g,blockHash:m,event:F,events:W,fromBlock:_,toBlock:x,strict:T})}async function getFeeHistory(t,{blockCount:s,blockNumber:p,blockTag:g="latest",rewardPercentiles:m}){let v=p?(0,J.eC)(p):void 0,_=await t.request({method:"eth_feeHistory",params:[(0,J.eC)(s),v||g,m]});return{baseFeePerGas:_.baseFeePerGas.map(t=>BigInt(t)),gasUsedRatio:_.gasUsedRatio,oldestBlock:BigInt(_.oldestBlock),reward:_.reward?.map(t=>t.map(t=>BigInt(t)))}}async function getFilterChanges(t,{filter:s}){let p="strict"in s&&s.strict,g=await s.request({method:"eth_getFilterChanges",params:[s.id]});return g.map(t=>{if("string"==typeof t)return t;try{let{eventName:g,args:m}="abi"in s&&s.abi?decodeEventLog({abi:s.abi,data:t.data,topics:t.topics,strict:p}):{eventName:void 0,args:void 0};return formatLog(t,{args:m,eventName:g})}catch(m){let p,g;if(m instanceof eu.SM||m instanceof eu.Gy){if("strict"in s&&s.strict)return;p=m.abiItem.name,g=m.abiItem.inputs?.some(t=>!("name"in t&&t.name))}return formatLog(t,{args:g?[]:{},eventName:p})}}).filter(Boolean)}async function getFilterLogs(t,{filter:s}){let p=s.strict??!1,g=await s.request({method:"eth_getFilterLogs",params:[s.id]});return g.map(t=>{try{let{eventName:g,args:m}="abi"in s&&s.abi?decodeEventLog({abi:s.abi,data:t.data,topics:t.topics,strict:p}):{eventName:void 0,args:void 0};return formatLog(t,{args:m,eventName:g})}catch(m){let p,g;if(m instanceof eu.SM||m instanceof eu.Gy){if("strict"in s&&s.strict)return;p=m.abiItem.name,g=m.abiItem.inputs?.some(t=>!("name"in t&&t.name))}return formatLog(t,{args:g?[]:{},eventName:p})}}).filter(Boolean)}var eT=p(24453);async function getProof(t,{address:s,blockNumber:p,blockTag:g,storageKeys:m}){let v=void 0!==p?(0,J.eC)(p):void 0,_=await t.request({method:"eth_getProof",params:[s,m,v||(g??"latest")]});return{..._,balance:_.balance?BigInt(_.balance):void 0,nonce:_.nonce?(0,eA.ly)(_.nonce):void 0,storageProof:_.storageProof?_.storageProof.map(t=>({...t,value:BigInt(t.value)})):void 0}}async function getStorageAt(t,{address:s,blockNumber:p,blockTag:g="latest",slot:m}){let v=void 0!==p?(0,J.eC)(p):void 0,_=await t.request({method:"eth_getStorageAt",params:[s,m,v||g]});return _}var eI=p(33639),eR=p(6073);async function getTransaction(t,{blockHash:s,blockNumber:p,blockTag:g,hash:m,index:v}){let _=g||"latest",x=void 0!==p?(0,J.eC)(p):void 0,T=null;if(m?T=await t.request({method:"eth_getTransactionByHash",params:[m]}):s?T=await t.request({method:"eth_getTransactionByBlockHashAndIndex",params:[s,(0,J.eC)(v)]}):(x||_)&&(T=await t.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[x||_,(0,J.eC)(v)]})),!T)throw new eI.Bh({blockHash:s,blockNumber:p,blockTag:_,hash:m,index:v});let F=t.chain?.formatters?.transaction?.format||eR.Tr;return F(T)}async function getTransactionConfirmations(t,{hash:s,transactionReceipt:p}){let[g,m]=await Promise.all([getBlockNumber(t),s?getTransaction(t,{hash:s}):void 0]),v=p?.blockNumber||m?.blockNumber;return v?g-v+1n:0n}var eB=p(86162);let eN={"0x0":"reverted","0x1":"success"};function formatTransactionReceipt(t){return{...t,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,contractAddress:t.contractAddress?t.contractAddress:null,cumulativeGasUsed:t.cumulativeGasUsed?BigInt(t.cumulativeGasUsed):null,effectiveGasPrice:t.effectiveGasPrice?BigInt(t.effectiveGasPrice):null,gasUsed:t.gasUsed?BigInt(t.gasUsed):null,logs:t.logs?t.logs.map(t=>formatLog(t)):null,to:t.to?t.to:null,transactionIndex:t.transactionIndex?(0,eA.ly)(t.transactionIndex):null,status:t.status?eN[t.status]:null,type:t.type?eR.c8[t.type]||t.type:null}}async function getTransactionReceipt(t,{hash:s}){let p=await t.request({method:"eth_getTransactionReceipt",params:[s]});if(!p)throw new eI.Yb({hash:s});let g=t.chain?.formatters?.transactionReceipt?.format||formatTransactionReceipt;return g(p)}async function multicall(t,s){let{allowFailure:p=!0,batchSize:g,blockNumber:m,blockTag:v,contracts:_,multicallAddress:x}=s,T=g??("object"==typeof t.batch?.multicall&&t.batch.multicall.batchSize||1024),F=x;if(!F){if(!t.chain)throw Error("client chain not configured. multicallAddress is required.");F=(0,Y.LI)({blockNumber:m,chain:t.chain,contract:"multicall3"})}let X=[[]],J=0,en=0;for(let t=0;t<_.length;t++){let{abi:s,address:g,args:m,functionName:v}=_[t];try{let t=(0,Q.R)({abi:s,args:m,functionName:v});en+=(t.length-2)/2,T>0&&en>T&&X[J].length>0&&(J++,en=(t.length-2)/2,X[J]=[]),X[J]=[...X[J],{allowFailure:!0,callData:t,target:g}]}catch(_){let t=getContractError(_,{abi:s,address:g,args:m,docsPath:"/docs/contract/multicall",functionName:v});if(!p)throw t;X[J]=[...X[J],{allowFailure:!0,callData:"0x",target:g}]}}let ea=await Promise.allSettled(X.map(s=>readContract(t,{abi:W.F8,address:F,args:[s],blockNumber:m,blockTag:v,functionName:"aggregate3"}))),es=[];for(let t=0;t<ea.length;t++){let s=ea[t];if("rejected"===s.status){if(!p)throw s.reason;for(let p=0;p<X[t].length;p++)es.push({status:"failure",error:s.reason,result:void 0});continue}let g=s.value;for(let s=0;s<g.length;s++){let{returnData:m,success:v}=g[s],{callData:x}=X[t][s],{abi:T,address:F,functionName:W,args:Q}=_[es.length];try{if("0x"===x)throw new eu.wb;if(!v)throw new eo.VQ({data:m});let t=(0,Z.k)({abi:T,args:Q,data:m,functionName:W});es.push(p?{result:t,status:"success"}:t)}catch(s){let t=getContractError(s,{abi:T,address:F,args:Q,docsPath:"/docs/contract/multicall",functionName:W});if(!p)throw t;es.push({error:t,result:void 0,status:"failure"})}}}if(es.length!==_.length)throw new ei.G("multicall results mismatch");return es}async function simulateContract(t,{abi:s,address:p,args:g,dataSuffix:m,functionName:v,..._}){let x=_.account?(0,eC.T)(_.account):void 0,T=(0,Q.R)({abi:s,args:g,functionName:v});try{let{data:x}=await (0,eh.R)(t,{batch:!1,data:`${T}${m?m.replace("0x",""):""}`,to:p,..._}),F=(0,Z.k)({abi:s,args:g,functionName:v,data:x||"0x"});return{result:F,request:{abi:s,address:p,args:g,dataSuffix:m,functionName:v,..._}}}catch(t){throw getContractError(t,{abi:s,address:p,args:g,docsPath:"/docs/contract/simulateContract",functionName:v,sender:x?.address})}}async function uninstallFilter(t,{filter:s}){return s.request({method:"eth_uninstallFilter",params:[s.id]})}BigInt(0),BigInt(1),BigInt(2);var eU=p(30286);async function verifyHash(t,{address:s,hash:p,signature:g,...m}){let v=(0,ec.v)(g)?g:(0,J.NC)(g);try{let{data:g}=await (0,eh.R)(t,{data:(0,eU.w)({abi:W.$o,args:[s,p,v],bytecode:"0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572"}),...m});return function(t,s){let p=(0,ec.v)(t)?(0,es.O0)(t):t,g=(0,ec.v)(s)?(0,es.O0)(s):s;return function(t,s){if(t.length!==s.length)return!1;for(let p=0;p<t.length;p++)if(t[p]!==s[p])return!1;return!0}(p,g)}(g??"0x0","0x1")}catch(t){if(t instanceof eo.cg)return!1;throw t}}async function verifyMessage(t,{address:s,message:p,signature:g,...m}){let v=function(t,s){let p="string"==typeof t?(0,es.qX)(t):t.raw instanceof Uint8Array?t.raw:(0,es.O0)(t.raw),g=(0,es.qX)(`\x19Ethereum Signed Message:
${p.length}`);return(0,el.w)((0,ea.zo)([g,p]),void 0)}(p);return verifyHash(t,{address:s,hash:v,signature:g,...m})}var eM=p(71352);function hashStruct({data:t,primaryType:s,types:p}){let g=function encodeData({data:t,primaryType:s,types:p}){let g=[{type:"bytes32"}],m=[function({primaryType:t,types:s}){let p=(0,J.NC)(function({primaryType:t,types:s}){let p="",g=function findTypeDependencies({primaryType:t,types:s},p=new Set){let g=t.match(/^\w*/u),m=g?.[0];if(p.has(m)||void 0===s[m])return p;for(let t of(p.add(m),s[m]))findTypeDependencies({primaryType:t.type,types:s},p);return p}({primaryType:t,types:s});g.delete(t);let m=[t,...Array.from(g).sort()];for(let t of m)p+=`${t}(${s[t].map(({name:t,type:s})=>`${s} ${t}`).join(",")})`;return p}({primaryType:t,types:s}));return(0,el.w)(p)}({primaryType:s,types:p})];for(let v of p[s]){let[s,_]=function encodeField({types:t,name:s,type:p,value:g}){if(void 0!==t[p])return[{type:"bytes32"},(0,el.w)(encodeData({data:g,primaryType:p,types:t}))];if("bytes"===p){let t=g.length%2?"0":"";return g=`0x${t+g.slice(2)}`,[{type:"bytes32"},(0,el.w)(g)]}if("string"===p)return[{type:"bytes32"},(0,el.w)((0,J.NC)(g))];if(p.lastIndexOf("]")===p.length-1){let m=p.slice(0,p.lastIndexOf("[")),v=g.map(p=>encodeField({name:s,type:m,types:t,value:p}));return[{type:"bytes32"},(0,el.w)((0,ew.E)(v.map(([t])=>t),v.map(([,t])=>t)))]}return[{type:p},g]}({types:p,name:v.name,type:v.type,value:t[v.name]});g.push(s),m.push(_)}return(0,ew.E)(g,m)}({data:t,primaryType:s,types:p});return(0,el.w)(g)}async function verifyTypedData(t,{address:s,signature:p,message:g,primaryType:m,types:v,domain:_,...x}){let T=function({domain:t,message:s,primaryType:p,types:g}){let m=void 0===t?{}:t,v={EIP712Domain:(0,eM.cj)({domain:m}),...g};(0,eM.iC)({domain:m,message:s,primaryType:p,types:v});let _=["0x1901"];return m&&_.push(function({domain:t,types:s}){return hashStruct({data:t,primaryType:"EIP712Domain",types:s})}({domain:m,types:v})),"EIP712Domain"!==p&&_.push(hashStruct({data:s,primaryType:p,types:v})),(0,el.w)((0,ea.zo)(_))}({message:g,primaryType:m,types:v,domain:_});return verifyHash(t,{address:s,hash:T,signature:p,...x})}let ej=new Map,eL=new Map,eF=0;function observe(t,s,p){let g=++eF,getListeners=()=>ej.get(t)||[],unsubscribe=()=>{let s=getListeners();ej.set(t,s.filter(t=>t.id!==g))},unwatch=()=>{let s=eL.get(t);1===getListeners().length&&s&&s(),unsubscribe()},m=getListeners();if(ej.set(t,[...m,{id:g,fns:s}]),m&&m.length>0)return unwatch;let v={};for(let t in s)v[t]=(...s)=>{let p=getListeners();0!==p.length&&p.forEach(p=>p.fns[t]?.(...s))};let _=p(v);return"function"==typeof _&&eL.set(t,_),unwatch}var ez=p(7760),eW=p(96070),eH=p(62914);function poll(t,{emitOnBegin:s,initialWaitTime:p,interval:g}){let m=!0,unwatch=()=>m=!1,watch=async()=>{let v;s&&(v=await t({unpoll:unwatch}));let _=await p?.(v)??g;await (0,eH.D)(_);let poll=async()=>{m&&(await t({unpoll:unwatch}),await (0,eH.D)(g),poll())};poll()};return watch(),unwatch}function watchBlockNumber(t,{emitOnBegin:s=!1,emitMissed:p=!1,onBlockNumber:g,onError:m,poll:v,pollingInterval:_=t.pollingInterval}){let x,T,F;let W=void 0!==v?v:"webSocket"!==t.transport.type;return W?(()=>{let v=(0,eW.P)(["watchBlockNumber",t.uid,s,p,_]);return observe(v,{onBlockNumber:g,onError:m},g=>poll(async()=>{try{let s=await getBlockNumber(t,{cacheTime:0});if(x){if(s===x)return;if(s-x>1&&p)for(let t=x+1n;t<s;t++)g.onBlockNumber(t,x),x=t}(!x||s>x)&&(g.onBlockNumber(s,x),x=s)}catch(t){g.onError?.(t)}},{emitOnBegin:s,interval:_}))})():(T=!0,F=()=>T=!1,(async()=>{try{let{unsubscribe:s}=await t.transport.subscribe({params:["newHeads"],onData(t){if(!T)return;let s=(0,eA.y_)(t.result?.number);g(s,x),x=s},onError(t){m?.(t)}});F=s,T||F()}catch(t){m?.(t)}})(),F)}async function waitForTransactionReceipt(t,{confirmations:s=1,hash:p,onReplaced:g,pollingInterval:m=t.pollingInterval,timeout:v}){let _,x,T;let F=(0,eW.P)(["waitForTransactionReceipt",t.uid,p]),W=!1;return new Promise((Z,Q)=>{v&&setTimeout(()=>Q(new eI.mc({hash:p})),v);let Y=observe(F,{onReplaced:g,resolve:Z,reject:Q},g=>{let v=watchBlockNumber(t,{emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:m,async onBlockNumber(m){if(W)return;let F=m,done=t=>{v(),t(),Y()};try{if(T){if(s>1&&(!T.blockNumber||F-T.blockNumber+1n<s))return;done(()=>g.resolve(T));return}if(_||(W=!0,await (0,ez.J)(async()=>{(_=await getTransaction(t,{hash:p})).blockNumber&&(F=_.blockNumber)},{delay:({count:t})=>200*~~(1<<t),retryCount:6}),W=!1),T=await getTransactionReceipt(t,{hash:p}),s>1&&(!T.blockNumber||F-T.blockNumber+1n<s))return;done(()=>g.resolve(T))}catch(p){if(_&&(p instanceof eI.Bh||p instanceof eI.Yb))try{x=_;let p=await (0,ek.Q)(t,{blockNumber:F,includeTransactions:!0}),m=p.transactions.find(({from:t,nonce:s})=>t===x.from&&s===x.nonce);if(!m||(T=await getTransactionReceipt(t,{hash:m.hash}),s>1&&(!T.blockNumber||F-T.blockNumber+1n<s)))return;let v="replaced";m.to===x.to&&m.value===x.value?v="repriced":m.from===m.to&&0n===m.value&&(v="cancelled"),done(()=>{g.onReplaced?.({reason:v,replacedTransaction:x,transaction:m,transactionReceipt:T}),g.resolve(T)})}catch(t){done(()=>g.reject(t))}else done(()=>g.reject(p))}}})})})}var eq=p(43310),eG=p(57331),eZ=p(99238);function publicActions(t){return{call:s=>(0,eh.R)(t,s),createBlockFilter:()=>createBlockFilter(t),createContractEventFilter:s=>createContractEventFilter(t,s),createEventFilter:s=>createEventFilter(t,s),createPendingTransactionFilter:()=>createPendingTransactionFilter(t),estimateContractGas:s=>estimateContractGas(t,s),estimateGas:s=>(0,e_.Q)(t,s),getBalance:s=>getBalance(t,s),getBlock:s=>(0,ek.Q)(t,s),getBlockNumber:s=>getBlockNumber(t,s),getBlockTransactionCount:s=>getBlockTransactionCount(t,s),getBytecode:s=>getBytecode(t,s),getChainId:()=>(0,e$.L)(t),getContractEvents:s=>getContractEvents(t,s),getEnsAddress:s=>getEnsAddress(t,s),getEnsAvatar:s=>getEnsAvatar(t,s),getEnsName:s=>getEnsName(t,s),getEnsResolver:s=>getEnsResolver(t,s),getEnsText:s=>getEnsText(t,s),getFeeHistory:s=>getFeeHistory(t,s),estimateFeesPerGas:s=>(0,ex.X)(t,s),getFilterChanges:s=>getFilterChanges(t,s),getFilterLogs:s=>getFilterLogs(t,s),getGasPrice:()=>(0,eT.o)(t),getLogs:s=>getLogs(t,s),getProof:s=>getProof(t,s),estimateMaxPriorityFeePerGas:s=>(0,eE._)(t,s),getStorageAt:s=>getStorageAt(t,s),getTransaction:s=>getTransaction(t,s),getTransactionConfirmations:s=>getTransactionConfirmations(t,s),getTransactionCount:s=>(0,eB.K)(t,s),getTransactionReceipt:s=>getTransactionReceipt(t,s),multicall:s=>multicall(t,s),prepareTransactionRequest:s=>(0,eG.Z)(t,s),readContract:s=>readContract(t,s),sendRawTransaction:s=>(0,eZ.p)(t,s),simulateContract:s=>simulateContract(t,s),verifyMessage:s=>verifyMessage(t,s),verifyTypedData:s=>verifyTypedData(t,s),uninstallFilter:s=>uninstallFilter(t,s),waitForTransactionReceipt:s=>waitForTransactionReceipt(t,s),watchBlocks:s=>(function(t,{blockTag:s="latest",emitMissed:p=!1,emitOnBegin:g=!1,onBlock:m,onError:v,includeTransactions:_,poll:x,pollingInterval:T=t.pollingInterval}){let F,W,Z;let Q=void 0!==x?x:"webSocket"!==t.transport.type,Y=_??!1;return Q?(()=>{let _=(0,eW.P)(["watchBlocks",t.uid,p,g,Y,T]);return observe(_,{onBlock:m,onError:v},m=>poll(async()=>{try{let g=await (0,ek.Q)(t,{blockTag:s,includeTransactions:Y});if(g.number&&F?.number){if(g.number===F.number)return;if(g.number-F.number>1&&p)for(let s=F?.number+1n;s<g.number;s++){let p=await (0,ek.Q)(t,{blockNumber:s,includeTransactions:Y});m.onBlock(p,F),F=p}}(!F?.number||"pending"===s&&!g?.number||g.number&&g.number>F.number)&&(m.onBlock(g,F),F=g)}catch(t){m.onError?.(t)}},{emitOnBegin:g,interval:T}))})():(W=!0,Z=()=>W=!1,(async()=>{try{let{unsubscribe:s}=await t.transport.subscribe({params:["newHeads"],onData(s){if(!W)return;let p=t.chain?.formatters?.block?.format||eq.Z,g=p(s.result);m(g,F),F=g},onError(t){v?.(t)}});Z=s,W||Z()}catch(t){v?.(t)}})(),Z)})(t,s),watchBlockNumber:s=>watchBlockNumber(t,s),watchContractEvent:s=>(function(t,{abi:s,address:p,args:g,batch:m=!0,eventName:v,onError:_,onLogs:x,poll:T,pollingInterval:F=t.pollingInterval,strict:W}){let Z,Q;let Y=void 0!==T?T:"webSocket"!==t.transport.type;return Y?(()=>{let T=(0,eW.P)(["watchContractEvent",p,g,m,t.uid,v,F]),Z=W??!1;return observe(T,{onLogs:x,onError:_},_=>{let x,T;let W=!1,Q=poll(async()=>{if(!W){try{T=await createContractEventFilter(t,{abi:s,address:p,args:g,eventName:v,strict:Z})}catch{}W=!0;return}try{let v;if(T)v=await getFilterChanges(t,{filter:T});else{let m=await getBlockNumber(t);v=x&&x!==m?await getContractEvents(t,{abi:s,address:p,args:g,fromBlock:x+1n,toBlock:m,strict:Z}):[],x=m}if(0===v.length)return;m?_.onLogs(v):v.forEach(t=>_.onLogs([t]))}catch(t){T&&t instanceof ed.yR&&(W=!1),_.onError?.(t)}},{emitOnBegin:!0,interval:F});return async()=>{T&&await uninstallFilter(t,{filter:T}),Q()}})})():(Z=!0,Q=()=>Z=!1,(async()=>{try{let m=v?encodeEventTopics({abi:s,eventName:v,args:g}):[],{unsubscribe:T}=await t.transport.subscribe({params:["logs",{address:p,topics:m}],onData(t){if(!Z)return;let p=t.result;try{let{eventName:t,args:g}=decodeEventLog({abi:s,data:p.data,topics:p.topics,strict:W}),m=formatLog(p,{args:g,eventName:t});x([m])}catch(m){let t,s;if(m instanceof eu.SM||m instanceof eu.Gy){if(W)return;t=m.abiItem.name,s=m.abiItem.inputs?.some(t=>!("name"in t&&t.name))}let g=formatLog(p,{args:s?[]:{},eventName:t});x([g])}},onError(t){_?.(t)}});Q=T,Z||Q()}catch(t){_?.(t)}})(),Q)})(t,s),watchEvent:s=>(function(t,{address:s,args:p,batch:g=!0,event:m,events:v,onError:_,onLogs:x,poll:T,pollingInterval:F=t.pollingInterval,strict:W}){let Z,Q;let Y=void 0!==T?T:"webSocket"!==t.transport.type,X=W??!1;return Y?(()=>{let T=(0,eW.P)(["watchEvent",s,p,g,t.uid,m,F]);return observe(T,{onLogs:x,onError:_},_=>{let x,T;let W=!1,Z=poll(async()=>{if(!W){try{T=await createEventFilter(t,{address:s,args:p,event:m,events:v,strict:X})}catch{}W=!0;return}try{let F;if(T)F=await getFilterChanges(t,{filter:T});else{let g=await getBlockNumber(t);F=x&&x!==g?await getLogs(t,{address:s,args:p,event:m,events:v,fromBlock:x+1n,toBlock:g}):[],x=g}if(0===F.length)return;g?_.onLogs(F):F.forEach(t=>_.onLogs([t]))}catch(t){T&&t instanceof ed.yR&&(W=!1),_.onError?.(t)}},{emitOnBegin:!0,interval:F});return async()=>{T&&await uninstallFilter(t,{filter:T}),Z()}})})():(Z=!0,Q=()=>Z=!1,(async()=>{try{let g=v??(m?[m]:void 0),T=[];g&&(T=[g.flatMap(t=>encodeEventTopics({abi:[t],eventName:t.name,args:p}))],m&&(T=T[0]));let{unsubscribe:F}=await t.transport.subscribe({params:["logs",{address:s,topics:T}],onData(t){if(!Z)return;let s=t.result;try{let{eventName:t,args:p}=decodeEventLog({abi:g,data:s.data,topics:s.topics,strict:X}),m=formatLog(s,{args:p,eventName:t});x([m])}catch(m){let t,p;if(m instanceof eu.SM||m instanceof eu.Gy){if(W)return;t=m.abiItem.name,p=m.abiItem.inputs?.some(t=>!("name"in t&&t.name))}let g=formatLog(s,{args:p?[]:{},eventName:t});x([g])}},onError(t){_?.(t)}});Q=F,Z||Q()}catch(t){_?.(t)}})(),Q)})(t,s),watchPendingTransactions:s=>(function(t,{batch:s=!0,onError:p,onTransactions:g,poll:m,pollingInterval:v=t.pollingInterval}){let _,x;let T=void 0!==m?m:"webSocket"!==t.transport.type;return T?(()=>{let m=(0,eW.P)(["watchPendingTransactions",t.uid,s,v]);return observe(m,{onTransactions:g,onError:p},p=>{let g;let m=poll(async()=>{try{if(!g)try{g=await createPendingTransactionFilter(t);return}catch(t){throw m(),t}let v=await getFilterChanges(t,{filter:g});if(0===v.length)return;s?p.onTransactions(v):v.forEach(t=>p.onTransactions([t]))}catch(t){p.onError?.(t)}},{emitOnBegin:!0,interval:v});return async()=>{g&&await uninstallFilter(t,{filter:g}),m()}})})():(_=!0,x=()=>_=!1,(async()=>{try{let{unsubscribe:s}=await t.transport.subscribe({params:["newPendingTransactions"],onData(t){if(!_)return;let s=t.result;g([s])},onError(t){p?.(t)}});x=s,_||x()}catch(t){p?.(t)}})(),x)})(t,s)}}function createPublicClient(t){let{key:s="public",name:p="Public Client"}=t,g=(0,F.e)({...t,key:s,name:p,type:"publicClient"});return g.extend(publicActions)}var eK=p(37029),eV=p(31031);function fallback(t,s={}){let{key:p="fallback",name:g="Fallback",rank:m=!1,retryCount:v,retryDelay:_}=s;return({chain:s,pollingInterval:x=4e3,timeout:T})=>{let F=t,onResponse=()=>{},W=(0,eV.q)({key:p,name:g,async request({method:t,params:p}){let fetch=async(g=0)=>{let m=F[g]({chain:s,retryCount:0,timeout:T});try{let s=await m.request({method:t,params:p});return onResponse({method:t,params:p,response:s,transport:m,status:"success"}),s}catch(s){if(onResponse({error:s,method:t,params:p,transport:m,status:"error"}),(0,eK.y)(s)||g===F.length-1)throw s;return fetch(g+1)}};return fetch()},retryCount:v,retryDelay:_,type:"fallback"},{onResponse:t=>onResponse=t,transports:F.map(t=>t({chain:s,retryCount:0}))});if(m){let t="object"==typeof m?m:{};!function({chain:t,interval:s=4e3,onTransports:p,sampleCount:g=10,timeout:m=1e3,transports:v,weights:_={}}){let{stability:x=.7,latency:T=.3}=_,F=[],rankTransports_=async()=>{let _=await Promise.all(v.map(async s=>{let p,g;let v=s({chain:t,retryCount:0,timeout:m}),_=Date.now();try{await v.request({method:"net_listening"}),g=1}catch{g=0}finally{p=Date.now()}let x=p-_;return{latency:x,success:g}}));F.push(_),F.length>g&&F.shift();let W=Math.max(...F.map(t=>Math.max(...t.map(({latency:t})=>t)))),Z=v.map((t,s)=>{let p=F.map(t=>t[s].latency),g=p.reduce((t,s)=>t+s,0)/p.length,m=F.map(t=>t[s].success),v=m.reduce((t,s)=>t+s,0)/m.length;return 0===v?[0,s]:[T*(1-g/W)+x*v,s]}).sort((t,s)=>s[0]-t[0]);p(Z.map(([,t])=>v[t])),await (0,eH.D)(s),rankTransports_()};rankTransports_()}({chain:s,interval:t.interval??x,onTransports:t=>F=t,sampleCount:t.sampleCount,timeout:t.timeout,transports:F,weights:t.weights})}return W}}var eQ=p(78863);let UrlRequiredError=class UrlRequiredError extends ei.G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}};var eY=p(32357);let eX=function(){if("undefined"!=typeof WebSocket)return WebSocket;if(void 0!==global.WebSocket)return global.WebSocket;if(void 0!==window.WebSocket)return window.WebSocket;if(void 0!==self.WebSocket)return self.WebSocket;throw Error("`WebSocket` is not supported in this environment")}();function withTimeout(t,{errorInstance:s=Error("timed out"),timeout:p,signal:g}){return new Promise((m,v)=>{(async()=>{let _;try{let x=new AbortController;p>0&&(_=setTimeout(()=>{g?x.abort():v(s)},p)),m(await t({signal:x?.signal}))}catch(t){"AbortError"===t.name&&v(s),v(t)}finally{clearTimeout(_)}})()})}let eJ=0;async function http(t,{body:s,fetchOptions:p={},timeout:g=1e4}){let{headers:m,method:v,signal:_}=p;try{let x;let T=await withTimeout(async({signal:x})=>{let T=await fetch(t,{...p,body:Array.isArray(s)?(0,eW.P)(s.map(t=>({jsonrpc:"2.0",id:t.id??eJ++,...t}))):(0,eW.P)({jsonrpc:"2.0",id:s.id??eJ++,...s}),headers:{...m,"Content-Type":"application/json"},method:v||"POST",signal:_||(g>0?x:void 0)});return T},{errorInstance:new eQ.W5({body:s,url:t}),timeout:g,signal:!0});if(x=T.headers.get("Content-Type")?.startsWith("application/json")?await T.json():await T.text(),!T.ok)throw new eQ.Gg({body:s,details:(0,eW.P)(x.error)||T.statusText,headers:T.headers,status:T.status,url:t});return x}catch(p){if(p instanceof eQ.Gg||p instanceof eQ.W5)throw p;throw new eQ.Gg({body:s,details:p.message,url:t})}}let e0=new Map;async function getSocket(t){let s=e0.get(t);if(s)return s;let{schedule:p}=(0,eY.S)({id:t,fn:async()=>{let p=new eX(t),g=new Map,m=new Map,onMessage=({data:t})=>{let s=JSON.parse(t),p="eth_subscription"===s.method,v=p?s.params.subscription:s.id,_=p?m:g,x=_.get(v);x&&x({data:t}),p||_.delete(v)},onClose=()=>{e0.delete(t),p.removeEventListener("close",onClose),p.removeEventListener("message",onMessage)};return p.addEventListener("close",onClose),p.addEventListener("message",onMessage),p.readyState===eX.CONNECTING&&await new Promise((t,s)=>{p&&(p.onopen=t,p.onerror=s)}),s=Object.assign(p,{requests:g,subscriptions:m}),e0.set(t,s),[s]}}),[g,[m]]=await p();return m}async function webSocketAsync(t,{body:s,timeout:p=1e4}){return withTimeout(()=>new Promise(p=>e1.webSocket(t,{body:s,onResponse:p})),{errorInstance:new eQ.W5({body:s,url:t.url}),timeout:p})}let e1={http,webSocket:function(t,{body:s,onResponse:p}){if(t.readyState===t.CLOSED||t.readyState===t.CLOSING)throw new eQ.c9({body:s,url:t.url,details:"Socket is closed."});let g=eJ++,callback=({data:m})=>{let v=JSON.parse(m);("number"!=typeof v.id||g===v.id)&&(p?.(v),"eth_subscribe"===s.method&&"string"==typeof v.result&&t.subscriptions.set(v.result,callback),"eth_unsubscribe"===s.method&&t.subscriptions.delete(s.params?.[0]))};return t.requests.set(g,callback),t.send(JSON.stringify({jsonrpc:"2.0",...s,id:g})),t},webSocketAsync};var e2=p(57858),e5=p(84192);let subscribeWithSelector=t=>(s,p,g)=>{let m=g.subscribe;g.subscribe=(t,s,p)=>{let v=t;if(s){let m=(null==p?void 0:p.equalityFn)||Object.is,_=t(g.getState());v=p=>{let g=t(p);if(!m(_,g)){let t=_;s(_=g,t)}},(null==p?void 0:p.fireImmediately)&&s(_,_)}return m(v)};let v=t(s,p,g);return v},toThenable=t=>s=>{try{let p=t(s);if(p instanceof Promise)return p;return{then:t=>toThenable(t)(p),catch(t){return this}}}catch(t){return{then(t){return this},catch:s=>toThenable(s)(t)}}},oldImpl=(t,s)=>(p,g,m)=>{let v,_,x={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:t=>t,version:0,merge:(t,s)=>({...s,...t}),...s},T=!1,F=new Set,W=new Set;try{v=x.getStorage()}catch(t){}if(!v)return t((...t)=>{console.warn(`[zustand persist middleware] Unable to update item '${x.name}', the given storage is currently unavailable.`),p(...t)},g,m);let Z=toThenable(x.serialize),setItem=()=>{let t;let s=x.partialize({...g()}),p=Z({state:s,version:x.version}).then(t=>v.setItem(x.name,t)).catch(s=>{t=s});if(t)throw t;return p},Q=m.setState;m.setState=(t,s)=>{Q(t,s),setItem()};let Y=t((...t)=>{p(...t),setItem()},g,m),hydrate=()=>{var t;if(!v)return;T=!1,F.forEach(t=>t(g()));let s=(null==(t=x.onRehydrateStorage)?void 0:t.call(x,g()))||void 0;return toThenable(v.getItem.bind(v))(x.name).then(t=>{if(t)return x.deserialize(t)}).then(t=>{if(t){if("number"!=typeof t.version||t.version===x.version)return t.state;if(x.migrate)return x.migrate(t.state,t.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(t=>{var s;return p(_=x.merge(t,null!=(s=g())?s:Y),!0),setItem()}).then(()=>{null==s||s(_,void 0),T=!0,W.forEach(t=>t(_))}).catch(t=>{null==s||s(void 0,t)})};return m.persist={setOptions:t=>{x={...x,...t},t.getStorage&&(v=t.getStorage())},clearStorage:()=>{null==v||v.removeItem(x.name)},getOptions:()=>x,rehydrate:()=>hydrate(),hasHydrated:()=>T,onHydrate:t=>(F.add(t),()=>{F.delete(t)}),onFinishHydration:t=>(W.add(t),()=>{W.delete(t)})},hydrate(),_||Y},newImpl=(t,s)=>(p,g,m)=>{let v,_={storage:function(t,s){let p;try{p=t()}catch(t){return}return{getItem:t=>{var g;let parse=t=>null===t?null:JSON.parse(t,null==s?void 0:s.reviver),m=null!=(g=p.getItem(t))?g:null;return m instanceof Promise?m.then(parse):parse(m)},setItem:(t,g)=>p.setItem(t,JSON.stringify(g,null==s?void 0:s.replacer)),removeItem:t=>p.removeItem(t)}}(()=>localStorage),partialize:t=>t,version:0,merge:(t,s)=>({...s,...t}),...s},x=!1,T=new Set,F=new Set,W=_.storage;if(!W)return t((...t)=>{console.warn(`[zustand persist middleware] Unable to update item '${_.name}', the given storage is currently unavailable.`),p(...t)},g,m);let setItem=()=>{let t=_.partialize({...g()});return W.setItem(_.name,{state:t,version:_.version})},Z=m.setState;m.setState=(t,s)=>{Z(t,s),setItem()};let Q=t((...t)=>{p(...t),setItem()},g,m),hydrate=()=>{var t,s;if(!W)return;x=!1,T.forEach(t=>{var s;return t(null!=(s=g())?s:Q)});let m=(null==(s=_.onRehydrateStorage)?void 0:s.call(_,null!=(t=g())?t:Q))||void 0;return toThenable(W.getItem.bind(W))(_.name).then(t=>{if(t){if("number"!=typeof t.version||t.version===_.version)return t.state;if(_.migrate)return _.migrate(t.state,t.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(t=>{var s;return p(v=_.merge(t,null!=(s=g())?s:Q),!0),setItem()}).then(()=>{null==m||m(v,void 0),v=g(),x=!0,F.forEach(t=>t(v))}).catch(t=>{null==m||m(void 0,t)})};return m.persist={setOptions:t=>{_={..._,...t},t.storage&&(W=t.storage)},clearStorage:()=>{null==W||W.removeItem(_.name)},getOptions:()=>_,rehydrate:()=>hydrate(),hasHydrated:()=>x,onHydrate:t=>(T.add(t),()=>{T.delete(t)}),onFinishHydration:t=>(F.add(t),()=>{F.delete(t)})},_.skipHydration||hydrate(),v||Q},persist=(t,s)=>"getStorage"in s||"serialize"in s||"deserialize"in s?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),oldImpl(t,s)):newImpl(t,s),createStoreImpl=t=>{let s;let p=new Set,setState=(t,g)=>{let m="function"==typeof t?t(s):t;if(!Object.is(m,s)){let t=s;s=(null!=g?g:"object"!=typeof m)?m:Object.assign({},s,m),p.forEach(p=>p(s,t))}},getState=()=>s,g={setState,getState,subscribe:t=>(p.add(t),()=>p.delete(t)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),p.clear()}};return s=t(setState,getState,g),g},createStore=t=>t?createStoreImpl(t):createStoreImpl;var e3=p(15229);function shallow$1(t,s){if(Object.is(t,s))return!0;if("object"!=typeof t||null===t||"object"!=typeof s||null===s)return!1;if(t instanceof Map&&s instanceof Map){if(t.size!==s.size)return!1;for(let[p,g]of t)if(!Object.is(g,s.get(p)))return!1;return!0}if(t instanceof Set&&s instanceof Set){if(t.size!==s.size)return!1;for(let p of t)if(!s.has(p))return!1;return!0}let p=Object.keys(t);if(p.length!==Object.keys(s).length)return!1;for(let g=0;g<p.length;g++)if(!Object.prototype.hasOwnProperty.call(s,p[g])||!Object.is(t[p[g]],s[p[g]]))return!1;return!0}var e6=p(45775);function configureChains(t,s,{batch:p={multicall:{wait:32}},pollingInterval:g=4e3,rank:m,retryCount:v,retryDelay:_,stallTimeout:x}={}){if(!t.length)throw Error("must have at least one chain");let T=[],F={},W={};for(let p of t){let t=!1;for(let g of s){let s=g(p);s&&(t=!0,T.some(({id:t})=>t===p.id)||(T=[...T,s.chain]),F[p.id]=[...F[p.id]||[],...s.rpcUrls.http],s.rpcUrls.webSocket&&(W[p.id]=[...W[p.id]||[],...s.rpcUrls.webSocket]))}if(!t)throw Error(`Could not find valid provider configuration for chain "${p.name}".

You may need to add \`jsonRpcProvider\` to \`configureChains\` with the chain's RPC URLs.
Read more: https://wagmi.sh/core/providers/jsonRpc`)}return{chains:T,publicClient:({chainId:s})=>{let W=T.find(t=>t.id===s)??t[0],Z=F[W.id];if(!Z||!Z[0])throw Error(`No providers configured for chain "${W.id}"`);let Q=createPublicClient({batch:p,chain:W,transport:fallback(Z.map(t=>(function(t,s={}){let{batch:p,fetchOptions:g,key:m="http",name:v="HTTP JSON-RPC",retryDelay:_}=s;return({chain:x,retryCount:T,timeout:F})=>{let{batchSize:W=1e3,wait:Z=0}="object"==typeof p?p:{},Q=s.retryCount??T,Y=F??s.timeout??1e4,X=t||x?.rpcUrls.default.http[0];if(!X)throw new UrlRequiredError;return(0,eV.q)({key:m,name:v,async request({method:s,params:m}){let v={method:s,params:m},{schedule:_}=(0,eY.S)({id:`${t}`,wait:Z,shouldSplitBatch:t=>t.length>W,fn:t=>e1.http(X,{body:t,fetchOptions:g,timeout:Y})}),fn=async t=>p?_(t):[await e1.http(X,{body:t,fetchOptions:g,timeout:Y})],[{error:x,result:T}]=await fn(v);if(x)throw new eQ.bs({body:v,error:x,url:X});return T},retryCount:Q,retryDelay:_,timeout:Y,type:"http"},{fetchOptions:g,url:t})}})(t,{timeout:x})),{rank:m,retryCount:v,retryDelay:_}),pollingInterval:g});return Object.assign(Q,{chains:T})},webSocketPublicClient:({chainId:s})=>{let F=T.find(t=>t.id===s)??t[0],Z=W[F.id];if(!Z||!Z[0])return;let Q=createPublicClient({batch:p,chain:F,transport:fallback(Z.map(t=>(function(t,s={}){let{key:p="webSocket",name:g="WebSocket JSON-RPC",retryDelay:m}=s;return({chain:v,retryCount:_,timeout:x})=>{let T=s.retryCount??_,F=x??s.timeout??1e4,W=t||v?.rpcUrls.default.webSocket?.[0];if(!W)throw new UrlRequiredError;return(0,eV.q)({key:p,name:g,async request({method:t,params:s}){let p={method:t,params:s},g=await getSocket(W),{error:m,result:v}=await e1.webSocketAsync(g,{body:p,timeout:F});if(m)throw new eQ.bs({body:p,error:m,url:W});return v},retryCount:T,retryDelay:m,timeout:F,type:"webSocket"},{getSocket:()=>getSocket(W),async subscribe({params:t,onData:s,onError:p}){let g=await getSocket(W),{result:m}=await new Promise((m,v)=>e1.webSocket(g,{body:{method:"eth_subscribe",params:t},onResponse(t){if(t.error){v(t.error),p?.(t.error);return}if("number"==typeof t.id){m(t);return}"eth_subscription"===t.method&&s(t.params)}}));return{subscriptionId:m,unsubscribe:async()=>new Promise(t=>e1.webSocket(g,{body:{method:"eth_unsubscribe",params:[m]},onResponse:t}))}}})}})(t,{timeout:x})),{rank:m,retryCount:v,retryDelay:_}),pollingInterval:g});return Object.assign(Q,{chains:T})}}}var e4=class extends Error{constructor({activeChain:t,targetChain:s}){super(`Chain mismatch: Expected "${s}", received "${t}".`),this.name="ChainMismatchError"}},e8=class extends Error{constructor({chainId:t,connectorId:s}){super(`Chain "${t}" not configured${s?` for connector "${s}"`:""}.`),this.name="ChainNotConfigured"}},e7=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},e9=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},tt=class extends Error{constructor({connector:t}){super(`"${t.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}},findAndReplace=(t,{find:s,replace:p})=>t&&s(t)?p(t):"object"!=typeof t?t:Array.isArray(t)?t.map(t=>findAndReplace(t,{find:s,replace:p})):t instanceof Object?Object.entries(t).reduce((t,[g,m])=>({...t,[g]:findAndReplace(m,{find:s,replace:p})}),{}):t;function deserialize(t){let s=JSON.parse(t),p=findAndReplace(s,{find:t=>"string"==typeof t&&t.startsWith("#bigint."),replace:t=>BigInt(t.replace("#bigint.",""))});return p}function getCallParameters(t){return{accessList:t.accessList,account:t.account,blockNumber:t.blockNumber,blockTag:t.blockTag,data:t.data,gas:t.gas,gasPrice:t.gasPrice,maxFeePerGas:t.maxFeePerGas,maxPriorityFeePerGas:t.maxPriorityFeePerGas,nonce:t.nonce,to:t.to,value:t.value}}function getSendTransactionParameters(t){return{accessList:t.accessList,account:t.account,data:t.data,gas:t.gas,gasPrice:t.gasPrice,maxFeePerGas:t.maxFeePerGas,maxPriorityFeePerGas:t.maxPriorityFeePerGas,nonce:t.nonce,to:t.to,value:t.value}}function getUnit(t){return"number"==typeof t?t:"wei"===t?0:Math.abs(e5.Bd[t])}function getReferenceKey(t,s){return t.slice(0,s).join(".")||"."}function getCutoff(t,s){let{length:p}=t;for(let g=0;g<p;++g)if(t[g]===s)return g+1;return 0}function serialize(t,s,p,g){return JSON.stringify(t,function(t,s){let p="function"==typeof t,g="function"==typeof s,m=[],v=[];return function(_,x){if("object"==typeof x){if(m.length){let t=getCutoff(m,this);0===t?m[m.length]=this:(m.splice(t),v.splice(t)),v[v.length]=_;let p=getCutoff(m,x);if(0!==p)return g?s.call(this,_,x,getReferenceKey(v,p)):`[ref=${getReferenceKey(v,p)}]`}else m[0]=x,v[0]=_}return p?t.call(this,_,x):x}}((t,p)=>{let g="bigint"==typeof p?`#bigint.${p.toString()}`:p;return s?.(t,g)||g},g),p??void 0)}var tr={getItem:t=>"",setItem:(t,s)=>null,removeItem:t=>null};function createStorage({deserialize:t=deserialize,key:s="wagmi",serialize:p=serialize,storage:g}){return{...g,getItem:(p,m=null)=>{let v=g.getItem(`${s}.${p}`);try{return v?t(v):m}catch(t){return console.warn(t),m}},setItem:(t,m)=>{if(null===m)g.removeItem(`${s}.${t}`);else try{g.setItem(`${s}.${t}`,p(m))}catch(t){console.error(t)}},removeItem:t=>g.removeItem(`${s}.${t}`)}}var tn="store",ti=class{constructor({autoConnect:t=!1,connectors:s=[new T._],publicClient:p,storage:x=createStorage({storage:"undefined"!=typeof window?window.localStorage:tr}),logger:F={warn:console.warn},webSocketPublicClient:W}){let Z;__privateAdd(this,v),this.publicClients=new Map,this.webSocketPublicClients=new Map,__privateAdd(this,g,void 0),__privateAdd(this,m,void 0),this.args={autoConnect:t,connectors:s,logger:F,publicClient:p,storage:x,webSocketPublicClient:W};let Q="disconnected";if(t)try{let t=x.getItem(tn),s=t?.state?.data;Q=s?.account?"reconnecting":"connecting",Z=s?.chain?.id}catch(t){}let Y="function"==typeof s?s():s;Y.forEach(t=>t.setStorage(x)),this.store=createStore(subscribeWithSelector(persist(()=>({connectors:Y,publicClient:this.getPublicClient({chainId:Z}),status:Q,webSocketPublicClient:this.getWebSocketPublicClient({chainId:Z})}),{name:tn,storage:x,partialize:s=>({...t&&{data:{account:s?.data?.account,chain:s?.data?.chain}},chains:s?.chains}),version:2}))),this.storage=x,__privateSet(this,m,x?.getItem("wallet")),__privateMethod(this,v,_).call(this),t&&"undefined"!=typeof window&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){return this.data?.chain?.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(t){let s="function"==typeof t?t(this.store.getState()):t;this.store.setState(s,!0)}clearState(){this.setState(t=>({...t,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){this.connector&&await this.connector.disconnect?.(),__privateSet(this,g,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(__privateGet(this,g))return;__privateSet(this,g,!0),this.setState(t=>({...t,status:t.data?.account?"reconnecting":"connecting"}));let t=__privateGet(this,m)?[...this.connectors].sort(t=>t.id===__privateGet(this,m)?-1:1):this.connectors,s=!1;for(let p of t){if(!p.ready||!p.isAuthorized)continue;let t=await p.isAuthorized();if(!t)continue;let g=await p.connect();this.setState(t=>({...t,connector:p,chains:p?.chains,data:g,status:"connected"})),s=!0;break}return s||this.setState(t=>({...t,data:void 0,status:"disconnected"})),__privateSet(this,g,!1),this.data}setConnectors(t){this.args={...this.args,connectors:t};let s="function"==typeof t?t():t;s.forEach(t=>t.setStorage(this.args.storage)),this.setState(t=>({...t,connectors:s}))}getPublicClient({chainId:t}={}){let s=this.publicClients.get(-1);if(s&&s?.chain.id===t||(s=this.publicClients.get(t??-1)))return s;let{publicClient:p}=this.args;return s="function"==typeof p?p({chainId:t}):p,this.publicClients.set(t??-1,s),s}setPublicClient(t){let s=this.data?.chain?.id;this.args={...this.args,publicClient:t},this.publicClients.clear(),this.setState(t=>({...t,publicClient:this.getPublicClient({chainId:s})}))}getWebSocketPublicClient({chainId:t}={}){let s=this.webSocketPublicClients.get(-1);if(s&&s?.chain.id===t||(s=this.webSocketPublicClients.get(t??-1)))return s;let{webSocketPublicClient:p}=this.args;return(s="function"==typeof p?p({chainId:t}):p)&&this.webSocketPublicClients.set(t??-1,s),s}setWebSocketPublicClient(t){let s=this.data?.chain?.id;this.args={...this.args,webSocketPublicClient:t},this.webSocketPublicClients.clear(),this.setState(t=>({...t,webSocketPublicClient:this.getWebSocketPublicClient({chainId:s})}))}setLastUsedConnector(t=null){this.storage?.setItem("wallet",t)}};function createConfig(t){let s=new ti(t);return x=s,s}function getConfig(){if(!x)throw Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return x}async function connect({chainId:t,connector:s}){let p=getConfig(),g=p.connector;if(g&&s.id===g.id)throw new e7;try{p.setState(t=>({...t,status:"connecting"}));let g=await s.connect({chainId:t});return p.setLastUsedConnector(s.id),p.setState(t=>({...t,connector:s,chains:s?.chains,data:g,status:"connected"})),p.storage.setItem("connected",!0),{...g,connector:s}}catch(t){throw p.setState(t=>({...t,status:t.connector?"connected":"disconnected"})),t}}async function disconnect(){let t=getConfig();t.connector&&await t.connector.disconnect(),t.clearState(),t.storage.removeItem("connected")}g=new WeakMap,m=new WeakMap,v=new WeakSet,_=function(){let onChange=t=>{this.setState(s=>({...s,data:{...s.data,...t}}))},onDisconnect=()=>{this.clearState()},onError=t=>{this.setState(s=>({...s,error:t}))};this.store.subscribe(({connector:t})=>t,(t,s)=>{s?.off?.("change",onChange),s?.off?.("disconnect",onDisconnect),s?.off?.("error",onError),t&&(t.on?.("change",onChange),t.on?.("disconnect",onDisconnect),t.on?.("error",onError))});let{publicClient:t,webSocketPublicClient:s}=this.args;("function"==typeof t||"function"==typeof s)&&this.store.subscribe(({data:t})=>t?.chain?.id,t=>{this.setState(s=>({...s,publicClient:this.getPublicClient({chainId:t}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:t})}))})};var to=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],ta=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function getPublicClient({chainId:t}={}){let s=getConfig();return t&&s.getPublicClient({chainId:t})||s.publicClient}async function getWalletClient({chainId:t}={}){let s=getConfig(),p=await s.connector?.getWalletClient?.({chainId:t})||null;return p}function getWebSocketPublicClient({chainId:t}={}){let s=getConfig();return t&&s.getWebSocketPublicClient({chainId:t})||s.webSocketPublicClient}function watchPublicClient(t,s){let p=getConfig(),handleChange=async()=>s(getPublicClient(t)),g=p.subscribe(({publicClient:t})=>t,handleChange);return g}function watchWalletClient({chainId:t},s){let p=getConfig(),handleChange=async({chainId:p})=>{if(t&&p&&t!==p)return;let g=await getWalletClient({chainId:t});return getConfig().connector?s(g):s(null)},g=p.subscribe(({data:t,connector:s})=>({account:t?.account,chainId:t?.chain?.id,connector:s}),handleChange,{equalityFn:shallow$1});return g}function watchWebSocketPublicClient(t,s){let p=getConfig(),handleChange=async()=>s(getWebSocketPublicClient(t)),g=p.subscribe(({webSocketPublicClient:t})=>t,handleChange);return g}async function prepareWriteContract({abi:t,address:s,args:p,chainId:g,dataSuffix:m,functionName:v,walletClient:_,...x}){let T=getPublicClient({chainId:g}),F=_??await getWalletClient({chainId:g});if(!F)throw new e2.N;g&&assertActiveChain({chainId:g});let{account:W,accessList:Z,blockNumber:Q,blockTag:Y,gas:X,gasPrice:J,maxFeePerGas:en,maxPriorityFeePerGas:ei,nonce:eo,value:ea}=getCallParameters(x),{result:es,request:el}=await T.simulateContract({abi:t,address:s,functionName:v,args:p,account:W||F.account,accessList:Z,blockNumber:Q,blockTag:Y,dataSuffix:m,gas:X,gasPrice:J,maxFeePerGas:en,maxPriorityFeePerGas:ei,nonce:eo,value:ea}),ec=t.filter(t=>"name"in t&&t.name===v);return{mode:"prepared",request:{...el,abi:ec,chainId:g},result:es}}async function chunk_TSH6VVF4_multicall({chainId:t,contracts:s,blockNumber:p,blockTag:g,...m}){let v=getPublicClient({chainId:t});if(!v.chains)throw new e9;if(t&&v.chain.id!==t)throw new e8({chainId:t});return v.multicall({allowFailure:m.allowFailure??!0,blockNumber:p,blockTag:g,contracts:s})}async function chunk_TSH6VVF4_readContract({address:t,account:s,chainId:p,abi:g,args:m,functionName:v,blockNumber:_,blockTag:x}){let T=getPublicClient({chainId:p});return T.readContract({abi:g,address:t,account:s,functionName:v,args:m,blockNumber:_,blockTag:x})}async function readContracts({contracts:t,blockNumber:s,blockTag:p,...g}){let{allowFailure:m=!0}=g;try{let g=getPublicClient(),v=t.reduce((t,s,p)=>{let m=s.chainId??g.chain.id;return{...t,[m]:[...t[m]||[],{contract:s,index:p}]}},{}),_=(await Promise.all(Object.entries(v).map(([t,g])=>chunk_TSH6VVF4_multicall({allowFailure:m,chainId:parseInt(t),contracts:g.map(({contract:t})=>t),blockNumber:s,blockTag:p})))).flat(),x=Object.values(v).flatMap(t=>t.map(({index:t})=>t));return _.reduce((t,s,p)=>(t&&(t[x[p]]=s),t),[])}catch(g){if(g instanceof eo.uq)throw g;let promises=()=>t.map(t=>chunk_TSH6VVF4_readContract({...t,blockNumber:s,blockTag:p}));if(m)return(await Promise.allSettled(promises())).map(t=>"fulfilled"===t.status?{result:t.value,status:"success"}:{error:t.reason,result:void 0,status:"failure"});return await Promise.all(promises())}}async function writeContract(t){let s;let p=await getWalletClient({chainId:t.chainId});if(!p)throw new e2.N;if(t.chainId&&assertActiveChain({chainId:t.chainId}),"prepared"===t.mode)s=t.request;else{let{chainId:p,mode:g,...m}=t,v=await prepareWriteContract(m);s=v.request}let g=await p.writeContract({...s,chain:t.chainId?{id:t.chainId}:null});return{hash:g}}async function fetchBalance({address:t,chainId:s,formatUnits:p,token:g}){let m=getConfig(),v=getPublicClient({chainId:s});if(g){let fetchContractBalance=async({abi:m})=>{let v={abi:m,address:g,chainId:s},[_,x,T]=await readContracts({allowFailure:!1,contracts:[{...v,functionName:"balanceOf",args:[t]},{...v,functionName:"decimals"},{...v,functionName:"symbol"}]});return{decimals:x,formatted:(0,e3.b)(_??"0",getUnit(p??x)),symbol:T,value:_}};try{return await fetchContractBalance({abi:to})}catch(t){if(t instanceof eo.uq){let{symbol:t,...s}=await fetchContractBalance({abi:ta});return{symbol:(0,eA.rR)((0,X.f)(t,{dir:"right"})),...s}}throw t}}let _=[...m.publicClient.chains||[],...m.chains??[]],x=await v.getBalance({address:t}),T=_.find(t=>t.id===v.chain.id);return{decimals:T?.nativeCurrency.decimals??18,formatted:(0,e3.b)(x??"0",getUnit(p??18)),symbol:T?.nativeCurrency.symbol??"ETH",value:x}}function getAccount(){let{data:t,connector:s,status:p}=getConfig();switch(p){case"connected":return{address:t?.account,connector:s,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:p};case"reconnecting":return{address:t?.account,connector:s,isConnected:!!t?.account,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:p};case"connecting":return{address:t?.account,connector:s,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:p};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:p}}}function getNetwork(){let t=getConfig(),s=t.data?.chain?.id,p=t.chains??[],g=[...t.publicClient?.chains||[],...p].find(t=>t.id===s)??{id:s,name:`Chain ${s}`,network:`${s}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:s?{...g,...t.data?.chain,id:s}:void 0,chains:p}}async function switchNetwork({chainId:t}){let{connector:s}=getConfig();if(!s)throw new e2.N;if(!s.switchChain)throw new tt({connector:s});return s.switchChain(t)}function watchAccount(t,{selector:s=t=>t}={}){let p=getConfig(),g=p.subscribe(({data:t,connector:p,status:g})=>s({address:t?.account,connector:p,status:g}),()=>t(getAccount()),{equalityFn:shallow$1});return g}function watchNetwork(t,{selector:s=t=>t}={}){let p=getConfig(),g=p.subscribe(({data:t,chains:p})=>s({chainId:t?.chain?.id,chains:p}),()=>t(getNetwork()),{equalityFn:shallow$1});return g}async function fetchEnsAvatar({name:t,chainId:s}){let{normalize:g}=await p.e(765).then(p.bind(p,26765)),m=getPublicClient({chainId:s}),v=await m.getEnsAvatar({name:g(t)});return v}async function fetchEnsName({address:t,chainId:s}){let p=getPublicClient({chainId:s});return p.getEnsName({address:(0,e6.K)(t)})}async function fetchBlockNumber({chainId:t}={}){let s=getPublicClient({chainId:t}),p=await s.getBlockNumber();return p}async function waitForTransaction({chainId:t,confirmations:s=1,hash:p,onReplaced:g,timeout:m=0}){let v=getPublicClient({chainId:t}),_=await v.waitForTransactionReceipt({hash:p,confirmations:s,onReplaced:g,timeout:m});if("reverted"===_.status){let t=await v.getTransaction({hash:_.transactionHash}),s=await v.call({...t,gasPrice:"eip1559"!==t.type?t.gasPrice:void 0,maxFeePerGas:"eip1559"===t.type?t.maxFeePerGas:void 0,maxPriorityFeePerGas:"eip1559"===t.type?t.maxPriorityFeePerGas:void 0}),p=(0,eA.rR)(`0x${s.substring(138)}`);throw Error(p)}return _}function assertActiveChain({chainId:t}){let{chain:s,chains:p}=getNetwork(),g=s?.id;if(g&&t!==g)throw new e4({activeChain:p.find(t=>t.id===g)?.name??`Chain ${g}`,targetChain:p.find(s=>s.id===t)?.name??`Chain ${t}`})}},36635:function(t,s,p){"use strict";p.d(s,{AccountController:function(){return x},ApiController:function(){return ed},WM:function(){return Q},fz:function(){return eO},Lr:function(){return e$},ConnectionController:function(){return e_},ConnectorController:function(){return X},bq:function(){return m},j1:function(){return v},Xs:function(){return em},IN:function(){return ev},NetworkController:function(){return eo},OptionsController:function(){return es},Ie:function(){return en},RouterController:function(){return ew},SnackController:function(){return eE},MO:function(){return W},ThemeController:function(){return eS}});var g=p(17832);function subscribeKey(t,s,p,m){let v=t[s];return(0,g.Ld)(t,()=>{let g=t[s];Object.is(v,g)||p(v=g)},m)}Symbol();let m={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},v={isMobile:()=>"undefined"!=typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid(){let t=navigator.userAgent.toLowerCase();return v.isMobile()&&t.includes("android")},isIos(){let t=navigator.userAgent.toLowerCase();return v.isMobile()&&(t.includes("iphone")||t.includes("ipad"))},isClient:()=>"undefined"!=typeof window,isPairingExpired:t=>!t||t-Date.now()<=m.TEN_SEC_MS,isAllowedRetry:t=>Date.now()-t>=m.ONE_SEC_MS,copyToClopboard(t){navigator.clipboard.writeText(t)},getPairingExpiry:()=>Date.now()+m.FOUR_MINUTES_MS,getPlainAddress:t=>t.split(":")[2],wait:async t=>new Promise(s=>{setTimeout(s,t)}),debounce(t,s=500){let p;return(...g)=>{p&&clearTimeout(p),p=setTimeout(function(){t(...g)},s)}},isHttpUrl:t=>t.startsWith("http://")||t.startsWith("https://"),formatNativeUrl(t,s){if(v.isHttpUrl(t))return this.formatUniversalUrl(t,s);let p=t;p.includes("://")||(p=t.replaceAll("/","").replaceAll(":",""),p=`${p}://`),p.endsWith("/")||(p=`${p}/`);let g=encodeURIComponent(s);return{redirect:`${p}wc?uri=${g}`,href:p}},formatUniversalUrl(t,s){if(!v.isHttpUrl(t))return this.formatNativeUrl(t,s);let p=t;p.endsWith("/")||(p=`${p}/`);let g=encodeURIComponent(s);return{redirect:`${p}wc?uri=${g}`,href:p}},openHref(t,s){window.open(t,s,"noreferrer noopener")},async preloadImage(t){let s=new Promise((s,p)=>{let g=new Image;g.onload=s,g.onerror=p,g.crossOrigin="anonymous",g.src=t});return Promise.race([s,v.wait(2e3)])},formatBalance(t,s){let p;if("0"===t)p="0.000";else if("string"==typeof t){let s=Number(t);s&&(p=s.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return p?`${p} ${s}`:"0.000"},isRestrictedRegion(){try{let{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),s=t.toUpperCase();return m.RESTRICTED_TIMEZONES.includes(s)}catch{return!1}},getApiUrl:()=>v.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>v.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>v.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{let s=16*Math.random()|0;return("x"===t?s:3&s|8).toString(16)})},_=(0,g.sj)({isConnected:!1}),x={state:_,subscribe:t=>(0,g.Ld)(_,()=>t(_)),subscribeKey:(t,s)=>subscribeKey(_,t,s),setIsConnected(t){_.isConnected=t},setCaipAddress(t){_.caipAddress=t,_.address=t?v.getPlainAddress(t):void 0},setBalance(t,s){_.balance=t,_.balanceSymbol=s},setProfileName(t){_.profileName=t},setProfileImage(t){_.profileImage=t},setAddressExplorerUrl(t){_.addressExplorerUrl=t},resetAccount(){_.isConnected=!1,_.caipAddress=void 0,_.address=void 0,_.balance=void 0,_.balanceSymbol=void 0,_.profileName=void 0,_.profileImage=void 0,_.addressExplorerUrl=void 0}};let FetchUtil=class FetchUtil{constructor({baseUrl:t}){this.baseUrl=t}async get({headers:t,...s}){let p=this.createUrl(s),g=await fetch(p,{method:"GET",headers:t});return g.json()}async getBlob({headers:t,...s}){let p=this.createUrl(s),g=await fetch(p,{method:"GET",headers:t});return g.blob()}async post({body:t,headers:s,...p}){let g=this.createUrl(p),m=await fetch(g,{method:"POST",headers:s,body:t?JSON.stringify(t):void 0});return m.json()}async put({body:t,headers:s,...p}){let g=this.createUrl(p),m=await fetch(g,{method:"PUT",headers:s,body:t?JSON.stringify(t):void 0});return m.json()}async delete({body:t,headers:s,...p}){let g=this.createUrl(p),m=await fetch(g,{method:"DELETE",headers:s,body:t?JSON.stringify(t):void 0});return m.json()}createUrl({path:t,params:s}){let p=new URL(t,this.baseUrl);return s&&Object.entries(s).forEach(([t,s])=>{s&&p.searchParams.append(t,s)}),p}};let T="WALLETCONNECT_DEEPLINK_CHOICE",F="@w3m/recent",W={setWalletConnectDeepLink({href:t,name:s}){try{localStorage.setItem(T,JSON.stringify({href:t,name:s}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let t=localStorage.getItem(T);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(T)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(t){try{let s=W.getRecentWallets(),p=s.find(s=>s.id===t.id);p||(s.unshift(t),s.length>2&&s.pop(),localStorage.setItem(F,JSON.stringify(s)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let t=localStorage.getItem(F);return t?JSON.parse(t):[]}catch{console.info("Unable to get Web3Modal recent")}return[]}},Z=(0,g.sj)({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),Q={state:Z,subscribeNetworkImages:t=>(0,g.Ld)(Z.networkImages,()=>t(Z.networkImages)),subscribeKey:(t,s)=>subscribeKey(Z,t,s),setWalletImage(t,s){Z.walletImages[t]=s},setNetworkImage(t,s){Z.networkImages[t]=s},setConnectorImage(t,s){Z.connectorImages[t]=s},setTokenImage(t,s){Z.tokenImages[t]=s}},Y=(0,g.sj)({connectors:[]}),X={state:Y,subscribeKey:(t,s)=>subscribeKey(Y,t,s),setConnectors(t){Y.connectors=t.map(t=>(0,g.iH)(t))},addConnector(t){Y.connectors.push((0,g.iH)(t))},getConnectors:()=>Y.connectors},J=(0,g.sj)({open:!1,selectedNetworkId:void 0}),en={state:J,subscribe:t=>(0,g.Ld)(J,()=>t(J)),set(t){Object.assign(J,{...J,...t})}},ei=(0,g.sj)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),eo={state:ei,subscribeKey:(t,s)=>subscribeKey(ei,t,s),_getClient(){if(!ei._client)throw Error("NetworkController client not set");return ei._client},setClient(t){ei._client=(0,g.iH)(t)},setCaipNetwork(t){ei.caipNetwork=t,en.set({selectedNetworkId:t?.id})},setDefaultCaipNetwork(t){ei.caipNetwork=t,en.set({selectedNetworkId:t?.id}),ei.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(t){ei.requestedCaipNetworks=t},async getApprovedCaipNetworksData(){let t=await this._getClient().getApprovedCaipNetworksData();ei.supportsAllNetworks=t.supportsAllNetworks,ei.approvedCaipNetworkIds=t.approvedCaipNetworkIds},async switchActiveNetwork(t){await this._getClient().switchCaipNetwork(t),ei.caipNetwork=t},resetNetwork(){ei.isDefaultCaipNetwork||(ei.caipNetwork=void 0),ei.approvedCaipNetworkIds=void 0,ei.supportsAllNetworks=!0}},ea=(0,g.sj)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),es={state:ea,subscribeKey:(t,s)=>subscribeKey(ea,t,s),setProjectId(t){ea.projectId=t},setIncludeWalletIds(t){ea.includeWalletIds=t},setExcludeWalletIds(t){ea.excludeWalletIds=t},setFeaturedWalletIds(t){ea.featuredWalletIds=t},setTokens(t){ea.tokens=t},setTermsConditionsUrl(t){ea.termsConditionsUrl=t},setPrivacyPolicyUrl(t){ea.privacyPolicyUrl=t},setCustomWallets(t){ea.customWallets=t},setEnableAnalytics(t){ea.enableAnalytics=t},setSdkVersion(t){ea.sdkVersion=t}},el=v.getApiUrl(),ec=new FetchUtil({baseUrl:el}),eu=(0,g.sj)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),ed={state:eu,subscribeKey:(t,s)=>subscribeKey(eu,t,s),_getApiHeaders(){let{projectId:t,sdkType:s,sdkVersion:p}=es.state;return{"x-project-id":t,"x-sdk-type":s,"x-sdk-version":p}},async _fetchWalletImage(t){let s=`${ec.baseUrl}/getWalletImage/${t}`,p=await ec.getBlob({path:s,headers:ed._getApiHeaders()});Q.setWalletImage(t,URL.createObjectURL(p))},async _fetchNetworkImage(t){let s=`${ec.baseUrl}/public/getAssetImage/${t}`,p=await ec.getBlob({path:s,headers:ed._getApiHeaders()});Q.setNetworkImage(t,URL.createObjectURL(p))},async _fetchConnectorImage(t){let s=`${ec.baseUrl}/public/getAssetImage/${t}`,p=await ec.getBlob({path:s,headers:ed._getApiHeaders()});Q.setConnectorImage(t,URL.createObjectURL(p))},async fetchNetworkImages(){let{requestedCaipNetworks:t}=eo.state,s=t?.map(({imageId:t})=>t).filter(Boolean);s&&await Promise.allSettled(s.map(t=>ed._fetchNetworkImage(t)))},async fetchConnectorImages(){let{connectors:t}=X.state,s=t.map(({imageId:t})=>t).filter(Boolean);await Promise.allSettled(s.map(t=>ed._fetchConnectorImage(t)))},async fetchFeaturedWallets(){let{featuredWalletIds:t}=es.state;if(t?.length){let{data:s}=await ec.get({path:"/getWallets",headers:ed._getApiHeaders(),params:{page:"1",entries:t?.length?String(t.length):"4",include:t?.join(",")}});s.sort((s,p)=>t.indexOf(s.id)-t.indexOf(p.id));let p=s.map(t=>t.image_id).filter(Boolean);await Promise.allSettled(p.map(t=>ed._fetchWalletImage(t))),eu.featured=s}},async fetchRecommendedWallets(){let{includeWalletIds:t,excludeWalletIds:s,featuredWalletIds:p}=es.state,g=[...s??[],...p??[]].filter(Boolean),{data:m,count:v}=await ec.get({path:"/getWallets",headers:ed._getApiHeaders(),params:{page:"1",entries:"4",include:t?.join(","),exclude:g?.join(",")}}),_=W.getRecentWallets(),x=m.map(t=>t.image_id).filter(Boolean),T=_.map(t=>t.image_id).filter(Boolean);await Promise.allSettled([...x,...T].map(t=>ed._fetchWalletImage(t))),eu.recommended=m,eu.count=v??0},async fetchWallets({page:t}){let{includeWalletIds:s,excludeWalletIds:p,featuredWalletIds:g}=es.state,m=[...eu.recommended.map(({id:t})=>t),...p??[],...g??[]].filter(Boolean),{data:_,count:x}=await ec.get({path:"/getWallets",headers:ed._getApiHeaders(),params:{page:String(t),entries:"40",include:s?.join(","),exclude:m.join(",")}}),T=_.map(t=>t.image_id).filter(Boolean);await Promise.allSettled([...T.map(t=>ed._fetchWalletImage(t)),v.wait(300)]),eu.wallets=[...eu.wallets,..._],eu.count=x>eu.count?x:eu.count,eu.page=t},async searchWallet({search:t}){let{includeWalletIds:s,excludeWalletIds:p}=es.state;eu.search=[];let{data:g}=await ec.get({path:"/getWallets",headers:ed._getApiHeaders(),params:{page:"1",entries:"100",search:t,include:s?.join(","),exclude:p?.join(",")}}),m=g.map(t=>t.image_id).filter(Boolean);await Promise.allSettled([...m.map(t=>ed._fetchWalletImage(t)),v.wait(300)]),eu.search=g},prefetch(){eu.prefetchPromise=Promise.race([Promise.allSettled([ed.fetchFeaturedWallets(),ed.fetchRecommendedWallets(),ed.fetchNetworkImages(),ed.fetchConnectorImages()]),v.wait(3e3)])}},eh=v.getAnalyticsUrl(),ef=new FetchUtil({baseUrl:eh}),ep=["MODAL_CREATED"],eg=(0,g.sj)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),em={state:eg,subscribe:t=>(0,g.Ld)(eg,()=>t(eg)),_getApiHeaders(){let{projectId:t,sdkType:s,sdkVersion:p}=es.state;return{"x-project-id":t,"x-sdk-type":s,"x-sdk-version":p}},async _sendAnalyticsEvent(t){try{if(ep.includes(t.data.event)||"undefined"==typeof window)return;await ef.post({path:"/e",headers:em._getApiHeaders(),body:{eventId:v.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:t.data}})}catch{}},sendEvent(t){eg.timestamp=Date.now(),eg.data=t,es.state.enableAnalytics&&em._sendAnalyticsEvent(eg)}},eb=(0,g.sj)({view:"Connect",history:["Connect"]}),ew={state:eb,subscribeKey:(t,s)=>subscribeKey(eb,t,s),push(t,s){t!==eb.view&&(eb.view=t,eb.history.push(t),eb.data=s)},reset(t){eb.view=t,eb.history=[t]},replace(t){eb.history.length>1&&eb.history.at(-1)!==t&&(eb.view=t,eb.history[eb.history.length-1]=t)},goBack(){if(eb.history.length>1){eb.history.pop();let[t]=eb.history.slice(-1);t&&(eb.view=t)}}},ey=(0,g.sj)({open:!1}),ev={state:ey,subscribeKey:(t,s)=>subscribeKey(ey,t,s),async open(t){await ed.state.prefetchPromise,t?.view?ew.reset(t.view):x.state.isConnected?ew.reset("Account"):ew.reset("Connect"),ey.open=!0,en.set({open:!0}),em.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){ey.open=!1,en.set({open:!1}),em.sendEvent({type:"track",event:"MODAL_CLOSE"})}},eC=(0,g.sj)({wcError:!1,buffering:!1}),e_={state:eC,subscribeKey:(t,s)=>subscribeKey(eC,t,s),_getClient(){if(!eC._client)throw Error("ConnectionController client not set");return eC._client},setClient(t){eC._client=(0,g.iH)(t)},connectWalletConnect(){eC.wcPromise=this._getClient().connectWalletConnect(t=>{eC.wcUri=t,eC.wcPairingExpiry=v.getPairingExpiry()})},async connectExternal(t){await this._getClient().connectExternal?.(t)},checkInstalled(t){return this._getClient().checkInstalled?.(t)},resetWcConnection(){eC.wcUri=void 0,eC.wcPairingExpiry=void 0,eC.wcPromise=void 0,eC.wcLinking=void 0,eC.recentWallet=void 0,W.deleteWalletConnectDeepLink()},setWcLinking(t){eC.wcLinking=t},setWcError(t){eC.wcError=t,eC.buffering=!1},setRecentWallet(t){eC.recentWallet=t},setBuffering(t){eC.buffering=t},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},ex=(0,g.sj)({message:"",variant:"success",open:!1}),eE={state:ex,subscribeKey:(t,s)=>subscribeKey(ex,t,s),showSuccess(t){ex.message=t,ex.variant="success",ex.open=!0},showError(t){ex.message=t,ex.variant="error",ex.open=!0},hide(){ex.open=!1}},ek=(0,g.sj)({themeMode:"dark",themeVariables:{}}),eS={state:ek,subscribe:t=>(0,g.Ld)(ek,()=>t(ek)),setThemeMode(t){ek.themeMode=t},setThemeVariables(t){ek.themeVariables={...ek.themeVariables,...t}}},eP=v.getBlockchainApiUrl(),eA=new FetchUtil({baseUrl:eP}),e$={fetchIdentity:({caipChainId:t,address:s})=>eA.get({path:`/v1/identity/${s}`,params:{chainId:t,projectId:es.state.projectId}})},eO={getWalletImage:t=>t?.image_url?t?.image_url:t?.image_id?Q.state.walletImages[t.image_id]:void 0,getNetworkImage:t=>t?.imageUrl?t?.imageUrl:t?.imageId?Q.state.networkImages[t.imageId]:void 0,getConnectorImage:t=>t?.imageUrl?t.imageUrl:t?.imageId?Q.state.connectorImages[t.imageId]:void 0}},90078:function(t,s,p){"use strict";p.r(s),p.d(s,{W3mModal:function(){return F}});var g=p(36635),m=p(19704),v=p(77996),_=p(37380),x=v.iv`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`,__decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let T="scroll-lock",F=class extends v.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=g.IN.state.open,this.initializeTheming(),g.ApiController.prefetch(),this.unsubscribe.push(g.IN.subscribeKey("open",t=>t?this.onOpen():this.onClose())),g.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.onRemoveKeyboardListener()}render(){return this.open?v.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(t){t.target===t.currentTarget&&g.IN.close()}initializeTheming(){let{themeVariables:t,themeMode:s}=g.ThemeController.state,p=m.UiHelperUtil.getColorTheme(s);(0,m.initializeTheming)(t,p)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,g.SnackController.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){let t=document.createElement("style");t.dataset.w3m=T,t.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(t)}onScrollUnlock(){let t=document.head.querySelector(`style[data-w3m="${T}"]`);t&&t.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let t=this.shadowRoot?.querySelector("wui-card");t?.focus(),window.addEventListener("keydown",s=>{if("Escape"===s.key)g.IN.close();else if("Tab"===s.key){let{tagName:p}=s.target;!p||p.includes("W3M-")||p.includes("WUI-")||t?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}};F.styles=x,__decorate([(0,_.SB)()],F.prototype,"open",void 0),F=__decorate([(0,m.customElement)("w3m-modal")],F)},19704:function(t,s,p){"use strict";let g,m,v;p.r(s),p.d(s,{UiHelperUtil:function(){return t_},WuiAccountButton:function(){return tO},WuiAllWalletsImage:function(){return tR},WuiAvatar:function(){return tS},WuiButton:function(){return tN},WuiCard:function(){return Z},WuiCardSelect:function(){return tH},WuiCardSelectLoader:function(){return tj},WuiChip:function(){return tG},WuiConnectButton:function(){return tK},WuiCtaButton:function(){return tQ},WuiEmailInput:function(){return t5},WuiFlex:function(){return tE},WuiGrid:function(){return rM},WuiIcon:function(){return eJ},WuiIconBox:function(){return tA},WuiIconLink:function(){return t6},WuiImage:function(){return e1},WuiInputElement:function(){return t8},WuiInputNumeric:function(){return t9},WuiInputText:function(){return t1},WuiLink:function(){return rr},WuiListItem:function(){return ri},WuiListTransaction:function(){return rh},WuiListWallet:function(){return rm},WuiLoadingHexagon:function(){return e5},WuiLoadingSpinner:function(){return e6},WuiLoadingThumbnail:function(){return e8},WuiLogo:function(){return rw},WuiLogoSelect:function(){return rv},WuiNetworkButton:function(){return r_},WuiNetworkImage:function(){return tz},WuiOtp:function(){return rE},WuiQrCode:function(){return rA},WuiSearchBar:function(){return rO},WuiSeparator:function(){return rL},WuiShimmer:function(){return e9},WuiSnackbar:function(){return rT},WuiTabs:function(){return rR},WuiTag:function(){return rp},WuiText:function(){return ti},WuiTooltip:function(){return rN},WuiTransactionVisual:function(){return ru},WuiVisual:function(){return tv},WuiWalletImage:function(){return tT},customElement:function(){return customElement},initializeTheming:function(){return initializeTheming},setColorTheme:function(){return setColorTheme},setThemeVariables:function(){return setThemeVariables}});var _=p(77996);function initializeTheming(t,s){g=document.createElement("style"),m=document.createElement("style"),v=document.createElement("style"),g.textContent=createRootStyles(t).core.cssText,m.textContent=createRootStyles(t).dark.cssText,v.textContent=createRootStyles(t).light.cssText,document.head.appendChild(g),document.head.appendChild(m),document.head.appendChild(v),setColorTheme(s)}function setColorTheme(t){m&&v&&("light"===t?(m.removeAttribute("media"),v.media="enabled"):(v.removeAttribute("media"),m.media="enabled"))}function setThemeVariables(t){g&&m&&v&&(g.textContent=createRootStyles(t).core.cssText,m.textContent=createRootStyles(t).dark.cssText,v.textContent=createRootStyles(t).light.cssText)}function createRootStyles(t){return{core:_.iv`
      :root {
        --w3m-color-mix-strength: ${(0,_.$m)(t?.["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,_.$m)(t?.["--w3m-font-family"]||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${(0,_.$m)(t?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,_.$m)(t?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,_.$m)(t?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-3xl: 40px;

        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );
        }
      }
    `,light:_.iv`
      :root {
        --w3m-color-mix: ${(0,_.$m)(t?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,_.$m)(t?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:_.iv`
      :root {
        --w3m-color-mix: ${(0,_.$m)(t?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,_.$m)(t?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}let x=_.iv`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,T=_.iv`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,F=_.iv`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function customElement(t){return function(s){return"function"==typeof s?(customElements.get(t)||customElements.define(t,s),s):function(t,s){let{kind:p,elements:g}=s;return{kind:p,elements:g,finisher(s){customElements.get(t)||customElements.define(t,s)}}}(t,s)}}var W=_.iv`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-125);
    overflow: hidden;
  }
`;let Z=class extends _.oi{render(){return _.dy`<slot></slot>`}};Z.styles=[x,W],Z=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_}([customElement("wui-card")],Z);var Q=p(37380),Y=_.iv`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`;let X=_.YP`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,J=_.YP`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,en=_.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ei=_.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eo=_.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,ea=_.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,es=_.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,el=_.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,ec=_.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,eu=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,ed=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,eh=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,ef=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,ep=_.YP`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,eg=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,em=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,eb=_.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,ew=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,ey=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,ev=_.YP` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,eC=_.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,e_=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,ex=_.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,eE=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,ek=_.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,eS=_.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eP=_.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,eA=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,e$=_.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,eO=_.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,eD=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,eT=_.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,eI=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,eR=_.YP`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,eB=_.YP`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,eN=_.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,eU=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,eM=_.YP` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,ej=_.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,eL=_.YP`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,eF=_.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,ez=_.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,eW=_.YP`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eH=_.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,eq=_.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,eG=_.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,eZ=_.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,eK=_.YP`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,eV=_.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,eQ=_.YP`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,eY=_.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var wui_icon_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let eX={allWallets:X,appStore:J,chromeStore:ep,apple:en,arrowBottom:ei,arrowLeft:eo,arrowRight:ea,arrowTop:es,browser:el,checkmark:ec,chevronBottom:eu,chevronLeft:ed,chevronRight:eh,chevronTop:ef,clock:eg,close:em,compass:ew,coinPlaceholder:eb,copy:ey,cursor:ev,desktop:eC,disconnect:e_,discord:ex,etherscan:eE,extension:ek,externalLink:eS,facebook:eP,filters:eA,github:e$,google:eO,helpCircle:eD,infoCircle:eT,mail:eI,mobile:eR,networkPlaceholder:eB,nftPlaceholder:eN,off:eU,playStore:eM,qrCode:ej,refresh:eL,search:eF,swapHorizontal:ez,swapVertical:eW,telegram:eH,twitch:eq,twitter:eG,twitterIcon:eZ,wallet:eV,walletConnect:eQ,walletPlaceholder:eK,warningCircle:eY},eJ=class extends _.oi{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
    `,_.dy`${eX[this.name]}`}};eJ.styles=[x,F,Y],wui_icon_decorate([(0,Q.Cb)()],eJ.prototype,"size",void 0),wui_icon_decorate([(0,Q.Cb)()],eJ.prototype,"name",void 0),wui_icon_decorate([(0,Q.Cb)()],eJ.prototype,"color",void 0),eJ=wui_icon_decorate([customElement("wui-icon")],eJ);var e0=_.iv`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,wui_image_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let e1=class extends _.oi{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return _.dy`<img src=${this.src} alt=${this.alt} />`}};e1.styles=[x,F,e0],wui_image_decorate([(0,Q.Cb)()],e1.prototype,"src",void 0),wui_image_decorate([(0,Q.Cb)()],e1.prototype,"alt",void 0),e1=wui_image_decorate([customElement("wui-image")],e1);var e2=_.iv`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let e5=class extends _.oi{render(){return _.dy`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};e5.styles=[x,e2],e5=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_}([customElement("wui-loading-hexagon")],e5);var e3=_.iv`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,wui_loading_spinner_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let e6=class extends _.oi{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,_.dy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};e6.styles=[x,e3],wui_loading_spinner_decorate([(0,Q.Cb)()],e6.prototype,"color",void 0),wui_loading_spinner_decorate([(0,Q.Cb)()],e6.prototype,"size",void 0),e6=wui_loading_spinner_decorate([customElement("wui-loading-spinner")],e6);var e4=_.iv`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,wui_loading_thumbnail_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let e8=class extends _.oi{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let t=this.radius>50?50:this.radius,s=36-t;return _.dy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${116+s} ${245+s}"
          stroke-dashoffset=${360+1.75*s}
        />
      </svg>
    `}};e8.styles=[x,e4],wui_loading_thumbnail_decorate([(0,Q.Cb)({type:Number})],e8.prototype,"radius",void 0),e8=wui_loading_thumbnail_decorate([customElement("wui-loading-thumbnail")],e8);var e7=_.iv`
  :host {
    display: block;
    outline: 1px solid var(--wui-gray-glass-005);
    background: linear-gradient(
      90deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 2.5s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,wui_shimmer_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let e9=class extends _.oi{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,_.dy`<slot></slot>`}};e9.styles=[e7],wui_shimmer_decorate([(0,Q.Cb)()],e9.prototype,"width",void 0),wui_shimmer_decorate([(0,Q.Cb)()],e9.prototype,"height",void 0),wui_shimmer_decorate([(0,Q.Cb)()],e9.prototype,"borderRadius",void 0),e9=wui_shimmer_decorate([customElement("wui-shimmer")],e9);var tt=p(69699);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let e=t=>(...s)=>({_$litDirective$:t,values:s});let i=class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,p){this._$Ct=t,this._$AM=s,this._$Ci=p}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tr=e(class extends i{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(s=>t[s]).join(" ")+" "}update(t,[s]){if(void 0===this.it){for(let p in this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),s)s[p]&&!this.st?.has(p)&&this.it.add(p);return this.render(s)}let p=t.element.classList;for(let t of this.it)t in s||(p.remove(t),this.it.delete(t));for(let t in s){let g=!!s[t];g===this.it.has(t)||this.st?.has(t)||(g?(p.add(t),this.it.add(t)):(p.remove(t),this.it.delete(t)))}return tt.Jb}});var tn=_.iv`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`,wui_text_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let ti=class extends _.oi{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){let t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,_.dy`<slot class=${tr(t)}></slot>`}};ti.styles=[x,tn],wui_text_decorate([(0,Q.Cb)()],ti.prototype,"variant",void 0),wui_text_decorate([(0,Q.Cb)()],ti.prototype,"color",void 0),wui_text_decorate([(0,Q.Cb)()],ti.prototype,"align",void 0),ti=wui_text_decorate([customElement("wui-text")],ti);let to=_.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,ta=_.YP`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,ts=_.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,tl=_.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,tc=_.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,tu=_.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,td=_.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,th=_.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,tf=_.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,tp=_.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,tg=_.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,tm=_.YP`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,tb=_.YP`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `;var tw=_.iv`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`,wui_visual_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let ty={browser:to,dao:ta,defi:ts,defiAlt:tl,eth:tc,layers:tu,lock:td,login:th,network:tf,nft:tp,noun:tg,profile:tm,system:tb},tv=class extends _.oi{constructor(){super(...arguments),this.name="browser"}render(){return _.dy`${ty[this.name]}`}};tv.styles=[x,tw],wui_visual_decorate([(0,Q.Cb)()],tv.prototype,"name",void 0),tv=wui_visual_decorate([customElement("wui-visual")],tv);var tC=p(35592);let t_={getSpacingStyles:(t,s)=>Array.isArray(t)?t[s]?`var(--wui-spacing-${t[s]})`:void 0:"string"==typeof t?`var(--wui-spacing-${t})`:void 0,getFormattedDate:t=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t),getHostName(t){let s=new URL(t);return s.hostname},getTruncateString:({string:t,charsStart:s,charsEnd:p,truncate:g})=>t.length<=s+p?t:"end"===g?`${t.substring(0,s)}...`:"start"===g?`...${t.substring(t.length-p)}`:`${t.substring(0,Math.floor(s))}...${t.substring(t.length-Math.floor(p))}`,generateAvatarColors(t){let s=t.toLowerCase().replace(/^0x/iu,""),p=s.substring(0,6),g=this.hexToRgb(p),m=[];for(let t=0;t<5;t+=1){let s=this.tintColor(g,.15*t);m.push(`rgb(${s[0]}, ${s[1]}, ${s[2]})`)}return`
    --local-color-1: ${m[0]};
    --local-color-2: ${m[1]};
    --local-color-3: ${m[2]};
    --local-color-4: ${m[3]};
    --local-color-5: ${m[4]};
   `},hexToRgb(t){let s=parseInt(t,16);return[s>>16&255,s>>8&255,255&s]},tintColor(t,s){let[p,g,m]=t;return[Math.round(p+(255-p)*s),Math.round(g+(255-g)*s),Math.round(m+(255-m)*s)]},isNumber:t=>/^[0-9]+$/u.test(t),getColorTheme:t=>t||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")};var tx=_.iv`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,wui_flex_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let tE=class extends _.oi{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&t_.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&t_.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&t_.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&t_.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&t_.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&t_.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&t_.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&t_.getSpacingStyles(this.margin,3)};
    `,_.dy`<slot></slot>`}};tE.styles=[x,tx],wui_flex_decorate([(0,Q.Cb)()],tE.prototype,"flexDirection",void 0),wui_flex_decorate([(0,Q.Cb)()],tE.prototype,"flexWrap",void 0),wui_flex_decorate([(0,Q.Cb)()],tE.prototype,"flexBasis",void 0),wui_flex_decorate([(0,Q.Cb)()],tE.prototype,"flexGrow",void 0),wui_flex_decorate([(0,Q.Cb)()],tE.prototype,"flexShrink",void 0),wui_flex_decorate([(0,Q.Cb)()],tE.prototype,"alignItems",void 0),wui_flex_decorate([(0,Q.Cb)()],tE.prototype,"justifyContent",void 0),wui_flex_decorate([(0,Q.Cb)()],tE.prototype,"columnGap",void 0),wui_flex_decorate([(0,Q.Cb)()],tE.prototype,"rowGap",void 0),wui_flex_decorate([(0,Q.Cb)()],tE.prototype,"gap",void 0),wui_flex_decorate([(0,Q.Cb)()],tE.prototype,"padding",void 0),wui_flex_decorate([(0,Q.Cb)()],tE.prototype,"margin",void 0),tE=wui_flex_decorate([customElement("wui-flex")],tE);var tk=_.iv`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,wui_avatar_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let tS=class extends _.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return _.dy`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",_.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let t=t_.generateAvatarColors(this.address);return this.style.cssText=t,null}return this.dataset.variant="default",null}};tS.styles=[x,tk],wui_avatar_decorate([(0,Q.Cb)()],tS.prototype,"imageSrc",void 0),wui_avatar_decorate([(0,Q.Cb)()],tS.prototype,"alt",void 0),wui_avatar_decorate([(0,Q.Cb)()],tS.prototype,"address",void 0),tS=wui_avatar_decorate([customElement("wui-avatar")],tS);var tP=_.iv`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,wui_icon_box_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let tA=class extends _.oi{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let t="xxs";switch(this.size){case"lg":t="lg";break;case"md":t="md";break;case"mdl":t="mdl";break;case"sm":t="xs";break;default:t="xxs"}let s="lg"===this.size,p="opaque"===this.background,g="accent-100"===this.backgroundColor&&p||"success-100"===this.backgroundColor&&p||"error-100"===this.backgroundColor&&p||"inverse-100"===this.backgroundColor&&p;return this.style.cssText=`
       --local-bg-value: ${g?`var(--wui-icon-box-bg-${this.backgroundColor})`:`var(--wui-color-${this.backgroundColor})`};
       --local-bg-mix: ${g?"100%":s?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${s?"xxs":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,_.dy` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};tA.styles=[x,T,tP],wui_icon_box_decorate([(0,Q.Cb)()],tA.prototype,"size",void 0),wui_icon_box_decorate([(0,Q.Cb)()],tA.prototype,"backgroundColor",void 0),wui_icon_box_decorate([(0,Q.Cb)()],tA.prototype,"iconColor",void 0),wui_icon_box_decorate([(0,Q.Cb)()],tA.prototype,"background",void 0),wui_icon_box_decorate([(0,Q.Cb)({type:Boolean})],tA.prototype,"border",void 0),wui_icon_box_decorate([(0,Q.Cb)()],tA.prototype,"borderColor",void 0),wui_icon_box_decorate([(0,Q.Cb)()],tA.prototype,"icon",void 0),tA=wui_icon_box_decorate([customElement("wui-icon-box")],tA);var t$=_.iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    outline: 2px solid var(--wui-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`,wui_account_button_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let tO=class extends _.oi{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return _.dy`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${(0,tC.o)(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${t_.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){let t=this.networkSrc?_.dy`<wui-image src=${this.networkSrc}></wui-image>`:_.dy`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return _.dy`
        ${t}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};tO.styles=[x,T,t$],wui_account_button_decorate([(0,Q.Cb)()],tO.prototype,"networkSrc",void 0),wui_account_button_decorate([(0,Q.Cb)()],tO.prototype,"avatarSrc",void 0),wui_account_button_decorate([(0,Q.Cb)()],tO.prototype,"balance",void 0),wui_account_button_decorate([(0,Q.Cb)({type:Boolean})],tO.prototype,"disabled",void 0),wui_account_button_decorate([(0,Q.Cb)({type:Boolean})],tO.prototype,"isProfileName",void 0),wui_account_button_decorate([(0,Q.Cb)()],tO.prototype,"address",void 0),tO=wui_account_button_decorate([customElement("wui-account-button")],tO);var tD=_.iv`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`,wui_wallet_image_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let tT=class extends _.oi{constructor(){super(...arguments),this.size="md",this.name=""}render(){let t="xxs";return t="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),_.dy` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?_.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?_.dy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:_.dy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};tT.styles=[x,tD],wui_wallet_image_decorate([(0,Q.Cb)()],tT.prototype,"size",void 0),wui_wallet_image_decorate([(0,Q.Cb)()],tT.prototype,"name",void 0),wui_wallet_image_decorate([(0,Q.Cb)()],tT.prototype,"imageSrc",void 0),wui_wallet_image_decorate([(0,Q.Cb)()],tT.prototype,"walletIcon",void 0),tT=wui_wallet_image_decorate([customElement("wui-wallet-image")],tT);var tI=_.iv`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`,wui_all_wallets_image_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let tR=class extends _.oi{constructor(){super(...arguments),this.walletImages=[]}render(){let t=this.walletImages.length<4;return _.dy`${this.walletImages.slice(0,4).map(({src:t,walletName:s})=>_.dy`
          <wui-wallet-image
            size="inherit"
            imageSrc=${t}
            name=${(0,tC.o)(s)}
          ></wui-wallet-image>
        `)}
    ${t?[...Array(4-this.walletImages.length)].map(()=>_.dy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`}};tR.styles=[x,tI],wui_all_wallets_image_decorate([(0,Q.Cb)({type:Array})],tR.prototype,"walletImages",void 0),tR=wui_all_wallets_image_decorate([customElement("wui-all-wallets-image")],tR);var tB=_.iv`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6px 12px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,wui_button_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let tN=class extends _.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`
    --local-width: ${"fullWidth"===this.variant?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;let t="md"===this.size?"paragraph-600":"small-600";return _.dy`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?_.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:_.dy``}};tN.styles=[x,T,tB],wui_button_decorate([(0,Q.Cb)()],tN.prototype,"size",void 0),wui_button_decorate([(0,Q.Cb)({type:Boolean})],tN.prototype,"disabled",void 0),wui_button_decorate([(0,Q.Cb)({type:Boolean})],tN.prototype,"loading",void 0),wui_button_decorate([(0,Q.Cb)()],tN.prototype,"variant",void 0),tN=wui_button_decorate([customElement("wui-button")],tN);let tU=_.YP`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var tM=_.iv`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`,wui_card_select_loader_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let tj=class extends _.oi{constructor(){super(...arguments),this.type="wallet"}render(){return _.dy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?_.dy` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${tU}`:_.dy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};tj.styles=[x,T,tM],wui_card_select_loader_decorate([(0,Q.Cb)()],tj.prototype,"type",void 0),tj=wui_card_select_loader_decorate([customElement("wui-card-select-loader")],tj);let tL=_.YP`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var tF=_.iv`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,wui_network_image_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let tz=class extends _.oi{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){let t="lg"===this.size;return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${t?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${t?"86px":"48px"};
      --local-height: ${t?"96px":"54px"};
      --local-icon-size: ${t?"42px":"24px"};
    `,_.dy`${this.templateVisual()} ${t?tL:tU}`}templateVisual(){return this.imageSrc?_.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:_.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};tz.styles=[x,tF],wui_network_image_decorate([(0,Q.Cb)()],tz.prototype,"size",void 0),wui_network_image_decorate([(0,Q.Cb)()],tz.prototype,"name",void 0),wui_network_image_decorate([(0,Q.Cb)()],tz.prototype,"imageSrc",void 0),wui_network_image_decorate([(0,Q.Cb)({type:Boolean})],tz.prototype,"selected",void 0),tz=wui_network_image_decorate([customElement("wui-network-image")],tz);var tW=_.iv`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`,wui_card_select_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let tH=class extends _.oi{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return _.dy`
      <button data-selected=${(0,tC.o)(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?_.dy`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${(0,tC.o)(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:_.dy`
      <wui-wallet-image size="md" imageSrc=${(0,tC.o)(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};tH.styles=[x,T,tW],wui_card_select_decorate([(0,Q.Cb)()],tH.prototype,"name",void 0),wui_card_select_decorate([(0,Q.Cb)()],tH.prototype,"type",void 0),wui_card_select_decorate([(0,Q.Cb)()],tH.prototype,"imageSrc",void 0),wui_card_select_decorate([(0,Q.Cb)({type:Boolean})],tH.prototype,"disabled",void 0),wui_card_select_decorate([(0,Q.Cb)({type:Boolean})],tH.prototype,"selected",void 0),tH=wui_card_select_decorate([customElement("wui-card-select")],tH);var tq=_.iv`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`,wui_chip_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let tG=class extends _.oi{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){let t="transparent"===this.variant?"small-600":"paragraph-600";return _.dy`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${t} color="inherit">
          ${t_.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?_.dy`<wui-image src=${this.imageSrc}></wui-image>`:null}};tG.styles=[x,T,tq],wui_chip_decorate([(0,Q.Cb)()],tG.prototype,"variant",void 0),wui_chip_decorate([(0,Q.Cb)()],tG.prototype,"imageSrc",void 0),wui_chip_decorate([(0,Q.Cb)({type:Boolean})],tG.prototype,"disabled",void 0),wui_chip_decorate([(0,Q.Cb)()],tG.prototype,"icon",void 0),wui_chip_decorate([(0,Q.Cb)()],tG.prototype,"href",void 0),tG=wui_chip_decorate([customElement("wui-chip")],tG);var tZ=_.iv`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`,wui_connect_button_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let tK=class extends _.oi{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let t="md"===this.size?"paragraph-600":"small-600";return _.dy`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${t} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?_.dy`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};tK.styles=[x,T,tZ],wui_connect_button_decorate([(0,Q.Cb)()],tK.prototype,"size",void 0),wui_connect_button_decorate([(0,Q.Cb)({type:Boolean})],tK.prototype,"loading",void 0),tK=wui_connect_button_decorate([customElement("wui-connect-button")],tK);var tV=_.iv`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,wui_cta_button_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let tQ=class extends _.oi{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return _.dy`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" colo="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};tQ.styles=[x,T,tV],wui_cta_button_decorate([(0,Q.Cb)({type:Boolean})],tQ.prototype,"disabled",void 0),wui_cta_button_decorate([(0,Q.Cb)()],tQ.prototype,"label",void 0),wui_cta_button_decorate([(0,Q.Cb)()],tQ.prototype,"buttonLabel",void 0),tQ=wui_cta_button_decorate([customElement("wui-cta-button")],tQ);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{D:tY}=tt._$LH,directive_helpers_f=t=>void 0===t.strings,async_directive_s=(t,s)=>{let p=t._$AN;if(void 0===p)return!1;for(let t of p)t._$AO?.(s,!1),async_directive_s(t,s);return!0},o=t=>{let s,p;do{if(void 0===(s=t._$AM))break;(p=s._$AN).delete(t),t=s}while(0===p?.size)},async_directive_r=t=>{for(let s;s=t._$AM;t=s){let p=s._$AN;if(void 0===p)s._$AN=p=new Set;else if(p.has(t))break;p.add(t),async_directive_c(s)}};function async_directive_h(t){void 0!==this._$AN?(o(this),this._$AM=t,async_directive_r(this)):this._$AM=t}function async_directive_n(t,s=!1,p=0){let g=this._$AH,m=this._$AN;if(void 0!==m&&0!==m.size){if(s){if(Array.isArray(g))for(let t=p;t<g.length;t++)async_directive_s(g[t],!1),o(g[t]);else null!=g&&(async_directive_s(g,!1),o(g))}else async_directive_s(this,t)}}let async_directive_c=t=>{2==t.type&&(t._$AP??=async_directive_n,t._$AQ??=async_directive_h)};let f=class f extends i{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,p){super._$AT(t,s,p),async_directive_r(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(async_directive_s(this,t),o(this))}setValue(t){if(directive_helpers_f(this._$Ct))this._$Ct._$AI(t,this);else{let s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ref_e=()=>new ref_h;let ref_h=class ref_h{};let tX=new WeakMap,tJ=e(class extends f{render(t){return tt.Ld}update(t,[s]){let p=s!==this.G;return p&&void 0!==this.G&&this.ot(void 0),(p||this.rt!==this.lt)&&(this.G=s,this.ct=t.options?.host,this.ot(this.lt=t.element)),tt.Ld}ot(t){if("function"==typeof this.G){let s=this.ct??globalThis,p=tX.get(s);void 0===p&&(p=new WeakMap,tX.set(s,p)),void 0!==p.get(this.G)&&this.G.call(this.ct,void 0),p.set(this.G,t),void 0!==t&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){return"function"==typeof this.G?tX.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var t0=_.iv`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,wui_input_text_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let t1=class extends _.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=ref_e()}render(){let t=`wui-size-${this.size}`;return _.dy` ${this.templateIcon()}
      <input
        ${tJ(this.inputElementRef)}
        class=${t}
        type=${this.type}
        enterkeyhint=${(0,tC.o)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?_.dy`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};t1.styles=[x,T,t0],wui_input_text_decorate([(0,Q.Cb)()],t1.prototype,"size",void 0),wui_input_text_decorate([(0,Q.Cb)()],t1.prototype,"icon",void 0),wui_input_text_decorate([(0,Q.Cb)({type:Boolean})],t1.prototype,"disabled",void 0),wui_input_text_decorate([(0,Q.Cb)()],t1.prototype,"placeholder",void 0),wui_input_text_decorate([(0,Q.Cb)()],t1.prototype,"type",void 0),wui_input_text_decorate([(0,Q.Cb)()],t1.prototype,"keyHint",void 0),t1=wui_input_text_decorate([customElement("wui-input-text")],t1);var t2=_.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`,wui_email_input_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let t5=class extends _.oi{render(){return _.dy`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?_.dy`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};t5.styles=[x,t2],wui_email_input_decorate([(0,Q.Cb)()],t5.prototype,"errorMessage",void 0),t5=wui_email_input_decorate([customElement("wui-email-input")],t5);var t3=_.iv`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,wui_icon_link_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let t6=class extends _.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return _.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};t6.styles=[x,T,F,t3],wui_icon_link_decorate([(0,Q.Cb)()],t6.prototype,"size",void 0),wui_icon_link_decorate([(0,Q.Cb)({type:Boolean})],t6.prototype,"disabled",void 0),wui_icon_link_decorate([(0,Q.Cb)()],t6.prototype,"icon",void 0),wui_icon_link_decorate([(0,Q.Cb)()],t6.prototype,"iconColor",void 0),t6=wui_icon_link_decorate([customElement("wui-icon-link")],t6);var t4=_.iv`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`,wui_input_element_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let t8=class extends _.oi{constructor(){super(...arguments),this.icon="copy"}render(){return _.dy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};t8.styles=[x,T,t4],wui_input_element_decorate([(0,Q.Cb)()],t8.prototype,"icon",void 0),t8=wui_input_element_decorate([customElement("wui-input-element")],t8);var t7=_.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`,wui_input_numeric_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let t9=class extends _.oi{constructor(){super(...arguments),this.disabled=!1}render(){return _.dy`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};t9.styles=[x,T,t7],wui_input_numeric_decorate([(0,Q.Cb)({type:Boolean})],t9.prototype,"disabled",void 0),t9=wui_input_numeric_decorate([customElement("wui-input-numeric")],t9);var rt=_.iv`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`,wui_link_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let rr=class extends _.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return _.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};rr.styles=[x,T,rt],wui_link_decorate([(0,Q.Cb)({type:Boolean})],rr.prototype,"disabled",void 0),wui_link_decorate([(0,Q.Cb)()],rr.prototype,"color",void 0),rr=wui_link_decorate([customElement("wui-link")],rr);var rn=_.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    outline: 2px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    outline: 2px solid var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    outline: 2px solid var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,wui_list_item_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let ri=class extends _.oi{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return _.dy`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${(0,tC.o)(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return _.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return _.dy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",s="square-blue"===this.iconVariant?"mdl":"md";return _.dy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${s}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?_.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:_.dy``}chevronTemplate(){return this.chevron?_.dy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};ri.styles=[x,T,rn],wui_list_item_decorate([(0,Q.Cb)()],ri.prototype,"icon",void 0),wui_list_item_decorate([(0,Q.Cb)()],ri.prototype,"variant",void 0),wui_list_item_decorate([(0,Q.Cb)()],ri.prototype,"iconVariant",void 0),wui_list_item_decorate([(0,Q.Cb)({type:Boolean})],ri.prototype,"disabled",void 0),wui_list_item_decorate([(0,Q.Cb)()],ri.prototype,"imageSrc",void 0),wui_list_item_decorate([(0,Q.Cb)()],ri.prototype,"alt",void 0),wui_list_item_decorate([(0,Q.Cb)({type:Boolean})],ri.prototype,"chevron",void 0),wui_list_item_decorate([(0,Q.Cb)({type:Boolean})],ri.prototype,"loading",void 0),ri=wui_list_item_decorate([customElement("wui-list-item")],ri);var ro=_.iv`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    border: 1px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  :host([data-type='minted']),
  :host([data-type='nftSent']),
  :host([data-type='bought']) {
    border-radius: var(--wui-border-radius-xs);
  }

  wui-image {
    display: block;
    border-radius: inherit;
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`,wui_transaction_visual_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let ra=["withdrawed","buy","cryptoSent","nftSent"],rs=["deposited","received","bought","minted"],rl=["minted","bought","nftSent"],rc=["deposited","withdrawed","cryptoSent","buy","received"],ru=class extends _.oi{constructor(){super(...arguments),this.type="buy"}render(){let t="accent-100",s="arrowTop";return ra.includes(this.type)?(t="accent-100",s="arrowTop"):rs.includes(this.type)&&rl.includes(this.type)?(t="success-100",s="arrowBottom"):rs.includes(this.type)&&rc.includes(this.type)?(t="success-100",s="arrowBottom"):(t="accent-100",s="swapVertical"),this.dataset.type=this.type,_.dy`
      ${this.templateVisual()}
      <wui-icon-box
        size="xs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        .icon=${s}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `}templateVisual(){return this.imageSrc?_.dy`<wui-image src=${this.imageSrc} alt=${this.type}></wui-image>`:rl.includes(this.type)?_.dy`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:_.dy`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}};ru.styles=[x,ro],wui_transaction_visual_decorate([(0,Q.Cb)()],ru.prototype,"type",void 0),wui_transaction_visual_decorate([(0,Q.Cb)()],ru.prototype,"imageSrc",void 0),ru=wui_transaction_visual_decorate([customElement("wui-transaction-visual")],ru);var rd=_.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  button > wui-flex > wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  button > wui-flex > wui-text:nth-child(2) {
    text-transform: uppercase;
  }

  button:disabled {
    color: var(--wui-color-fg-300);
  }
`,wui_list_transaction_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let rh=class extends _.oi{constructor(){super(...arguments),this.type="bought",this.disabled=!1,this.imageSrc="",this.date=new Date,this.transactionDetail=""}render(){let t="nftSent"===this.type||"cryptoSent"===this.type,s=t?"Sent":this.type,p=t_.getFormattedDate(this.date);return _.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-transaction-visual
          type=${this.type}
          imageSrc=${this.imageSrc}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">${s}</wui-text>
          <wui-text variant="small-500" color="fg-200">${this.transactionDetail}</wui-text>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300">${p}</wui-text>
      </button>
    `}};rh.styles=[x,T,rd],wui_list_transaction_decorate([(0,Q.Cb)()],rh.prototype,"type",void 0),wui_list_transaction_decorate([(0,Q.Cb)({type:Boolean})],rh.prototype,"disabled",void 0),wui_list_transaction_decorate([(0,Q.Cb)()],rh.prototype,"imageSrc",void 0),wui_list_transaction_decorate([(0,Q.Cb)({attribute:!1})],rh.prototype,"date",void 0),wui_list_transaction_decorate([(0,Q.Cb)()],rh.prototype,"transactionDetail",void 0),rh=wui_list_transaction_decorate([customElement("wui-list-transaction")],rh);var rf=_.iv`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`,wui_tag_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let rp=class extends _.oi{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,_.dy`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};rp.styles=[x,rf],wui_tag_decorate([(0,Q.Cb)()],rp.prototype,"variant",void 0),rp=wui_tag_decorate([customElement("wui-tag")],rp);var rg=_.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,wui_list_wallet_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let rm=class extends _.oi{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return _.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?_.dy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?_.dy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?_.dy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:_.dy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?_.dy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?_.dy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};rm.styles=[x,T,rg],wui_list_wallet_decorate([(0,Q.Cb)({type:Array})],rm.prototype,"walletImages",void 0),wui_list_wallet_decorate([(0,Q.Cb)()],rm.prototype,"imageSrc",void 0),wui_list_wallet_decorate([(0,Q.Cb)()],rm.prototype,"name",void 0),wui_list_wallet_decorate([(0,Q.Cb)()],rm.prototype,"tagLabel",void 0),wui_list_wallet_decorate([(0,Q.Cb)()],rm.prototype,"tagVariant",void 0),wui_list_wallet_decorate([(0,Q.Cb)()],rm.prototype,"icon",void 0),wui_list_wallet_decorate([(0,Q.Cb)()],rm.prototype,"walletIcon",void 0),wui_list_wallet_decorate([(0,Q.Cb)({type:Boolean})],rm.prototype,"disabled",void 0),wui_list_wallet_decorate([(0,Q.Cb)({type:Boolean})],rm.prototype,"showAllWallets",void 0),rm=wui_list_wallet_decorate([customElement("wui-list-wallet")],rm);var rb=_.iv`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,wui_logo_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let rw=class extends _.oi{constructor(){super(...arguments),this.logo="google"}render(){return _.dy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};rw.styles=[x,rb],wui_logo_decorate([(0,Q.Cb)()],rw.prototype,"logo",void 0),rw=wui_logo_decorate([customElement("wui-logo")],rw);var ry=_.iv`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,wui_logo_select_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let rv=class extends _.oi{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return _.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};rv.styles=[x,T,ry],wui_logo_select_decorate([(0,Q.Cb)()],rv.prototype,"logo",void 0),wui_logo_select_decorate([(0,Q.Cb)({type:Boolean})],rv.prototype,"disabled",void 0),rv=wui_logo_select_decorate([customElement("wui-logo-select")],rv);var rC=_.iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }
`,wui_network_button_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let r_=class extends _.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return _.dy`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?_.dy`<wui-image src=${this.imageSrc}></wui-image>`:_.dy`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};r_.styles=[x,T,rC],wui_network_button_decorate([(0,Q.Cb)()],r_.prototype,"imageSrc",void 0),wui_network_button_decorate([(0,Q.Cb)({type:Boolean})],r_.prototype,"disabled",void 0),r_=wui_network_button_decorate([customElement("wui-network-button")],r_);var rx=_.iv`
  :host {
    position: relative;
    display: block;
  }
`,wui_otp_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let rE=class extends _.oi{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(t,s)=>{let p=t.target,g=this.getInputElement(p);if(!g)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(t.key)&&t.preventDefault();let m=g.selectionStart;switch(t.key){case"ArrowLeft":m&&g.setSelectionRange(m+1,m+1),this.focusInputField("prev",s);break;case"ArrowRight":case"Shift":this.focusInputField("next",s);break;case"Delete":case"Backspace":""===g.value?this.focusInputField("prev",s):g.value=""}},this.focusInputField=(t,s)=>{if("next"===t){let t=s+1,p=this.numerics[t<this.length?t:s],g=p?this.getInputElement(p):void 0;g&&g.focus()}if("prev"===t){let t=s-1,p=this.numerics[t>-1?t:s],g=p?this.getInputElement(p):void 0;g&&g.focus()}}}firstUpdated(){let t=this.shadowRoot?.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t))}render(){return _.dy`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((t,s)=>_.dy`
            <wui-input-numeric
              @input=${t=>this.handleInput(t,s)}
              @keydown=${t=>this.handleKeyDown(t,s)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(t,s){let p=t.target,g=this.getInputElement(p);if(g){let p=g.value;if("insertFromPaste"===t.inputType)this.handlePaste(g,p,s);else{let m=t_.isNumber(p);m&&t.data?(g.value=t.data,this.focusInputField("next",s)):g.value=""}}}handlePaste(t,s,p){let g=s[0],m=g&&t_.isNumber(g);if(m){t.value=g;let m=s.substring(1);if(p+1<this.length&&m.length){let t=this.numerics[p+1],s=t?this.getInputElement(t):void 0;s&&this.handlePaste(s,m,p+1)}else this.focusInputField("next",p)}else t.value=""}getInputElement(t){return t.shadowRoot?.querySelector("input")?t.shadowRoot.querySelector("input"):null}};rE.styles=[x,rx],wui_otp_decorate([(0,Q.Cb)({type:Number})],rE.prototype,"length",void 0),rE=wui_otp_decorate([customElement("wui-otp")],rE);var rk=p(92592);function isAdjecentDots(t,s,p){return t!==s&&(t-s<0?s-t:t-s)<=p+.1}let rS={generate(t,s,p){let g="#141414",m=[],v=function(t,s){let p=Array.prototype.slice.call(rk.create(t,{errorCorrectionLevel:"Q"}).modules.data,0),g=Math.sqrt(p.length);return p.reduce((t,s,p)=>(p%g==0?t.push([s]):t[t.length-1].push(s))&&t,[])}(t,0),x=s/v.length,T=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];T.forEach(({x:t,y:s})=>{let p=(v.length-7)*x*t,F=(v.length-7)*x*s;for(let t=0;t<T.length;t+=1){let s=x*(7-2*t);m.push(_.YP`
            <rect
              fill=${2===t?g:"transparent"}
              width=${0===t?s-5:s}
              rx= ${0===t?(s-5)*.45:.45*s}
              ry= ${0===t?(s-5)*.45:.45*s}
              stroke=${g}
              stroke-width=${0===t?5:0}
              height=${0===t?s-5:s}
              x= ${0===t?F+x*t+2.5:F+x*t}
              y= ${0===t?p+x*t+2.5:p+x*t}
            />
          `)}});let F=Math.floor((p+25)/x),W=v.length/2-F/2,Z=v.length/2+F/2-1,Q=[];v.forEach((t,s)=>{t.forEach((t,p)=>{if(v[s][p]&&!(s<7&&p<7||s>v.length-8&&p<7||s<7&&p>v.length-8)&&!(s>W&&s<Z&&p>W&&p<Z)){let t=s*x+x/2,g=p*x+x/2;Q.push([t,g])}})});let Y={};return Q.forEach(([t,s])=>{Y[t]?Y[t]?.push(s):Y[t]=[s]}),Object.entries(Y).map(([t,s])=>{let p=s.filter(t=>s.every(s=>!isAdjecentDots(t,s,x)));return[Number(t),p]}).forEach(([t,s])=>{s.forEach(s=>{m.push(_.YP`<circle cx=${t} cy=${s} fill=${g} r=${x/2.5} />`)})}),Object.entries(Y).filter(([t,s])=>s.length>1).map(([t,s])=>{let p=s.filter(t=>s.some(s=>isAdjecentDots(t,s,x)));return[Number(t),p]}).map(([t,s])=>{s.sort((t,s)=>t<s?-1:1);let p=[];for(let t of s){let s=p.find(s=>s.some(s=>isAdjecentDots(t,s,x)));s?s.push(t):p.push([t])}return[t,p.map(t=>[t[0],t[t.length-1]])]}).forEach(([t,s])=>{s.forEach(([s,p])=>{m.push(_.YP`
              <line
                x1=${t}
                x2=${t}
                y1=${s}
                y2=${p}
                stroke=${g}
                stroke-width=${x/1.25}
                stroke-linecap="round"
              />
            `)})}),m}};var rP=_.iv`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    outline: 1px solid var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,wui_qr_code_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let rA=class extends _.oi{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,_.dy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let t="light"===this.theme?this.size:this.size-32;return _.YP`
      <svg height=${t} width=${t}>
        ${rS.generate(this.uri,t,t/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?_.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:_.dy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};rA.styles=[x,rP],wui_qr_code_decorate([(0,Q.Cb)()],rA.prototype,"uri",void 0),wui_qr_code_decorate([(0,Q.Cb)({type:Number})],rA.prototype,"size",void 0),wui_qr_code_decorate([(0,Q.Cb)()],rA.prototype,"theme",void 0),wui_qr_code_decorate([(0,Q.Cb)()],rA.prototype,"imageSrc",void 0),wui_qr_code_decorate([(0,Q.Cb)()],rA.prototype,"alt",void 0),rA=wui_qr_code_decorate([customElement("wui-qr-code")],rA);var r$=_.iv`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let rO=class extends _.oi{constructor(){super(...arguments),this.inputComponentRef=ref_e()}render(){return _.dy`
      <wui-input-text
        ${tJ(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let t=this.inputComponentRef.value,s=t?.inputElementRef.value;s&&(s.value="",s.focus(),s.dispatchEvent(new Event("input")))}};rO.styles=[x,r$],rO=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_}([customElement("wui-search-bar")],rO);var rD=_.iv`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`,wui_snackbar_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let rT=class extends _.oi{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return _.dy`
      <wui-icon-box
        size="sm"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};rT.styles=[x,rD],wui_snackbar_decorate([(0,Q.Cb)()],rT.prototype,"backgroundColor",void 0),wui_snackbar_decorate([(0,Q.Cb)()],rT.prototype,"iconColor",void 0),wui_snackbar_decorate([(0,Q.Cb)()],rT.prototype,"icon",void 0),wui_snackbar_decorate([(0,Q.Cb)()],rT.prototype,"message",void 0),rT=wui_snackbar_decorate([customElement("wui-snackbar")],rT);var rI=_.iv`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }
`,wui_tabs_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let rR=class extends _.oi{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,s)=>{let p=s===this.activeTab;return _.dy`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(s)}
          data-active=${p}
        >
          <wui-icon size="sm" color="inherit" name=${t.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,s){let p=this.buttons[this.activeTab],g=this.buttons[t],m=p?.querySelector("wui-text"),v=g?.querySelector("wui-text"),_=g?.getBoundingClientRect(),x=v?.getBoundingClientRect();p&&m&&!s&&t!==this.activeTab&&(m.animate([{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}),p.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),g&&_&&x&&v&&(t!==this.activeTab||s)&&(this.localTabWidth=`${Math.round(_.width+x.width)+6}px`,g.animate([{width:`${_.width+x.width}px`}],{duration:s?0:500,fill:"forwards",easing:"ease"}),v.animate([{opacity:1}],{duration:s?0:250,delay:s?0:50,fill:"forwards",easing:"ease"}))}};rR.styles=[x,T,rI],wui_tabs_decorate([(0,Q.Cb)({type:Array})],rR.prototype,"tabs",void 0),wui_tabs_decorate([(0,Q.Cb)()],rR.prototype,"onTabChange",void 0),wui_tabs_decorate([(0,Q.Cb)({type:Array})],rR.prototype,"buttons",void 0),wui_tabs_decorate([(0,Q.Cb)({type:Boolean})],rR.prototype,"disabled",void 0),wui_tabs_decorate([(0,Q.SB)()],rR.prototype,"activeTab",void 0),wui_tabs_decorate([(0,Q.SB)()],rR.prototype,"localTabWidth",void 0),wui_tabs_decorate([(0,Q.SB)()],rR.prototype,"isDense",void 0),rR=wui_tabs_decorate([customElement("wui-tabs")],rR);var rB=_.iv`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,wui_tooltip_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let rN=class extends _.oi{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return _.dy`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};rN.styles=[x,T,rB],wui_tooltip_decorate([(0,Q.Cb)()],rN.prototype,"placement",void 0),wui_tooltip_decorate([(0,Q.Cb)()],rN.prototype,"message",void 0),rN=wui_tooltip_decorate([customElement("wui-tooltip")],rN);var rU=_.iv`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,wui_grid_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let rM=class extends _.oi{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&t_.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&t_.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&t_.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&t_.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&t_.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&t_.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&t_.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&t_.getSpacingStyles(this.margin,3)};
    `,_.dy`<slot></slot>`}};rM.styles=[x,rU],wui_grid_decorate([(0,Q.Cb)()],rM.prototype,"gridTemplateRows",void 0),wui_grid_decorate([(0,Q.Cb)()],rM.prototype,"gridTemplateColumns",void 0),wui_grid_decorate([(0,Q.Cb)()],rM.prototype,"justifyItems",void 0),wui_grid_decorate([(0,Q.Cb)()],rM.prototype,"alignItems",void 0),wui_grid_decorate([(0,Q.Cb)()],rM.prototype,"justifyContent",void 0),wui_grid_decorate([(0,Q.Cb)()],rM.prototype,"alignContent",void 0),wui_grid_decorate([(0,Q.Cb)()],rM.prototype,"columnGap",void 0),wui_grid_decorate([(0,Q.Cb)()],rM.prototype,"rowGap",void 0),wui_grid_decorate([(0,Q.Cb)()],rM.prototype,"gap",void 0),wui_grid_decorate([(0,Q.Cb)()],rM.prototype,"padding",void 0),wui_grid_decorate([(0,Q.Cb)()],rM.prototype,"margin",void 0),rM=wui_grid_decorate([customElement("wui-grid")],rM);var rj=_.iv`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`,wui_separator_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let rL=class extends _.oi{constructor(){super(...arguments),this.text=""}render(){return _.dy`${this.template()}`}template(){return this.text?_.dy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};rL.styles=[x,rj],wui_separator_decorate([(0,Q.Cb)()],rL.prototype,"text",void 0),rL=wui_separator_decorate([customElement("wui-separator")],rL)},67098:function(t,s,p){"use strict";let g;p.d(s,{OY:function(){return createWeb3Modal},o1:function(){return defaultWagmiConfig},k_:function(){return useWeb3Modal}}),p(67294);var m,v,_,x,T,F,W,Z,Q,Y,X,J,en,ei,eo,ea,es,el,ec,eu,ed,eh,ef,ep,eg=p(65598),em=p(66403),eb=p(36635),ew=p(19704),ey=p(77996),ev=p(37380),eC=p(35592),__decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let e_=class extends ey.oi{constructor(){super(),this.unsubscribe=[],this.networkImages=eb.WM.state.networkImages,this.disabled=!1,this.balance="show",this.address=eb.AccountController.state.address,this.balanceVal=eb.AccountController.state.balance,this.balanceSymbol=eb.AccountController.state.balanceSymbol,this.profileName=eb.AccountController.state.profileName,this.profileImage=eb.AccountController.state.profileImage,this.network=eb.NetworkController.state.caipNetwork,this.unsubscribe.push(...[eb.AccountController.subscribe(t=>{t.isConnected?(this.address=t.address,this.balanceVal=t.balance,this.profileName=t.profileName,this.profileImage=t.profileImage,this.balanceSymbol=t.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),eb.NetworkController.subscribeKey("caipNetwork",t=>this.network=t)])}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){let t=this.networkImages[this.network?.imageId??""],s="show"===this.balance;return ey.dy`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${(0,eC.o)(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${(0,eC.o)(t)}
        avatarSrc=${(0,eC.o)(this.profileImage)}
        balance=${s?eb.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){eb.IN.open()}};__decorate([(0,ev.Cb)({type:Boolean})],e_.prototype,"disabled",void 0),__decorate([(0,ev.Cb)()],e_.prototype,"balance",void 0),__decorate([(0,ev.SB)()],e_.prototype,"address",void 0),__decorate([(0,ev.SB)()],e_.prototype,"balanceVal",void 0),__decorate([(0,ev.SB)()],e_.prototype,"balanceSymbol",void 0),__decorate([(0,ev.SB)()],e_.prototype,"profileName",void 0),__decorate([(0,ev.SB)()],e_.prototype,"profileImage",void 0),__decorate([(0,ev.SB)()],e_.prototype,"network",void 0),e_=__decorate([(0,ew.customElement)("w3m-account-button")],e_);var w3m_button_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let ex=class extends ey.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=eb.AccountController.state.isConnected,this.unsubscribe.push(eb.AccountController.subscribeKey("isConnected",t=>{this.isAccount=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return this.isAccount?ey.dy`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${(0,eC.o)(this.balance)}
          >
          </w3m-account-button>
        `:ey.dy`
          <w3m-connect-button
            size=${(0,eC.o)(this.size)}
            label=${(0,eC.o)(this.label)}
            loadingLabel=${(0,eC.o)(this.loadingLabel)}
          ></w3m-connect-button>
        `}};w3m_button_decorate([(0,ev.Cb)({type:Boolean})],ex.prototype,"disabled",void 0),w3m_button_decorate([(0,ev.Cb)()],ex.prototype,"balance",void 0),w3m_button_decorate([(0,ev.Cb)()],ex.prototype,"size",void 0),w3m_button_decorate([(0,ev.Cb)()],ex.prototype,"label",void 0),w3m_button_decorate([(0,ev.Cb)()],ex.prototype,"loadingLabel",void 0),w3m_button_decorate([(0,ev.SB)()],ex.prototype,"isAccount",void 0),ex=w3m_button_decorate([(0,ew.customElement)("w3m-button")],ex);var w3m_connect_button_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let eE=class extends ey.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=eb.IN.state.open,this.unsubscribe.push(eb.IN.subscribeKey("open",t=>this.open=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return ey.dy`
      <wui-connect-button
        size=${(0,eC.o)(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?eb.IN.close():eb.IN.open()}};w3m_connect_button_decorate([(0,ev.Cb)()],eE.prototype,"size",void 0),w3m_connect_button_decorate([(0,ev.Cb)()],eE.prototype,"label",void 0),w3m_connect_button_decorate([(0,ev.Cb)()],eE.prototype,"loadingLabel",void 0),w3m_connect_button_decorate([(0,ev.SB)()],eE.prototype,"open",void 0),eE=w3m_connect_button_decorate([(0,ew.customElement)("w3m-connect-button")],eE),p(90078);var w3m_network_button_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let ek=class extends ey.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=eb.NetworkController.state.caipNetwork,this.connected=eb.AccountController.state.isConnected,this.unsubscribe.push(...[eb.NetworkController.subscribeKey("caipNetwork",t=>this.network=t),eb.AccountController.subscribeKey("isConnected",t=>this.connected=t)])}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return ey.dy`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${(0,eC.o)(eb.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){eb.IN.open({view:"Networks"})}};w3m_network_button_decorate([(0,ev.Cb)({type:Boolean})],ek.prototype,"disabled",void 0),w3m_network_button_decorate([(0,ev.SB)()],ek.prototype,"network",void 0),w3m_network_button_decorate([(0,ev.SB)()],ek.prototype,"connected",void 0),ek=w3m_network_button_decorate([(0,ew.customElement)("w3m-network-button")],ek);var eS=ey.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`,w3m_router_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let eP=class extends ey.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=eb.RouterController.state.view,this.unsubscribe.push(eb.RouterController.subscribeKey("view",t=>this.onViewChange(t)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([t])=>{let s=`${t?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:s}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=s}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(t=>t())}render(){return ey.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return ey.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return ey.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return ey.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"AllWallets":return ey.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return ey.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return ey.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return ey.dy`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return ey.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return ey.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return ey.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return ey.dy`<w3m-downloads-view></w3m-downloads-view>`}}async onViewChange(t){let{history:s}=eb.RouterController.state,p=-10,g=10;s.length<this.prevHistoryLength&&(p=10,g=-10),this.prevHistoryLength=s.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${p}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=t,await this.animate([{opacity:0,transform:`translateX(${g}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};eP.styles=eS,w3m_router_decorate([(0,ev.SB)()],eP.prototype,"view",void 0),eP=w3m_router_decorate([(0,ew.customElement)("w3m-router")],eP);var eA=ey.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`,w3m_account_view_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let e$=class extends ey.oi{constructor(){super(),this.usubscribe=[],this.networkImages=eb.WM.state.networkImages,this.address=eb.AccountController.state.address,this.profileImage=eb.AccountController.state.profileImage,this.profileName=eb.AccountController.state.profileName,this.balance=eb.AccountController.state.balance,this.balanceSymbol=eb.AccountController.state.balanceSymbol,this.network=eb.NetworkController.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(...[eb.AccountController.subscribe(t=>{t.address?(this.address=t.address,this.profileImage=t.profileImage,this.profileName=t.profileName,this.balance=t.balance,this.balanceSymbol=t.balanceSymbol):eb.IN.close()})],eb.NetworkController.subscribeKey("caipNetwork",t=>{t?.id&&(this.network=t)}))}disconnectedCallback(){this.usubscribe.forEach(t=>t())}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let t=this.networkImages[this.network?.imageId??""];return ey.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,eC.o)(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?ew.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):ew.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${eb.j1.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${t?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${(0,eC.o)(t)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}explorerBtnTemplate(){let{addressExplorerUrl:t}=eb.AccountController.state;return t?ey.dy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){let{requestedCaipNetworks:t}=eb.NetworkController.state,s=!!t&&t.length>1,p=t?.find(({id:t})=>t===this.network?.id);return s||!p}onCopyAddress(){try{this.address&&(eb.j1.copyToClopboard(this.address),eb.SnackController.showSuccess("Address copied"))}catch{eb.SnackController.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&eb.RouterController.push("Networks")}async onDisconnect(){try{this.disconecting=!0,await eb.ConnectionController.disconnect(),eb.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),eb.IN.close()}catch{eb.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),eb.SnackController.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){let{addressExplorerUrl:t}=eb.AccountController.state;t&&eb.j1.openHref(t,"_blank")}};e$.styles=eA,w3m_account_view_decorate([(0,ev.SB)()],e$.prototype,"address",void 0),w3m_account_view_decorate([(0,ev.SB)()],e$.prototype,"profileImage",void 0),w3m_account_view_decorate([(0,ev.SB)()],e$.prototype,"profileName",void 0),w3m_account_view_decorate([(0,ev.SB)()],e$.prototype,"balance",void 0),w3m_account_view_decorate([(0,ev.SB)()],e$.prototype,"balanceSymbol",void 0),w3m_account_view_decorate([(0,ev.SB)()],e$.prototype,"network",void 0),w3m_account_view_decorate([(0,ev.SB)()],e$.prototype,"disconecting",void 0),e$=w3m_account_view_decorate([(0,ew.customElement)("w3m-account-view")],e$);var w3m_all_wallets_view_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let eO=class extends ey.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=eb.j1.debounce(t=>{this.search=t})}render(){let t=this.search.length>=2;return ey.dy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t?ey.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:ey.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}qrButtonTemplate(){return eb.j1.isMobile()?ey.dy`
        <wui-icon-box
          size="lg"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){eb.RouterController.push("ConnectingWalletConnect")}};w3m_all_wallets_view_decorate([(0,ev.SB)()],eO.prototype,"search",void 0),eO=w3m_all_wallets_view_decorate([(0,ew.customElement)("w3m-all-wallets-view")],eO);var eD=ey.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,w3m_connect_view_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let eT=class extends ey.oi{constructor(){super(),this.unsubscribe=[],this.connectors=eb.ConnectorController.state.connectors,this.unsubscribe.push(eb.ConnectorController.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return ey.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(eb.j1.isMobile())return null;let t=this.connectors.find(t=>"WALLET_CONNECT"===t.type);return t?ey.dy`
      <wui-list-wallet
        imageSrc=${(0,eC.o)(eb.fz.getConnectorImage(t))}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){let{customWallets:t}=eb.OptionsController.state;if(!t?.length)return null;let s=this.filterOutDuplicateWallets(t);return s.map(t=>ey.dy`
        <wui-list-wallet
          imageSrc=${(0,eC.o)(eb.fz.getWalletImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnectWallet(t)}
        >
        </wui-list-wallet>
      `)}featuredTemplate(){let{featured:t}=eb.ApiController.state;if(!t.length)return null;let s=this.filterOutDuplicateWallets(t);return s.map(t=>ey.dy`
        <wui-list-wallet
          imageSrc=${(0,eC.o)(eb.fz.getWalletImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnectWallet(t)}
        >
        </wui-list-wallet>
      `)}recentTemplate(){let t=eb.MO.getRecentWallets();return t.map(t=>ey.dy`
        <wui-list-wallet
          imageSrc=${(0,eC.o)(eb.fz.getWalletImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnectWallet(t)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(t=>"ANNOUNCED"!==t.type?null:ey.dy`
        <wui-list-wallet
          imageSrc=${(0,eC.o)(eb.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `)}injectedTemplate(){let t=this.connectors.find(t=>"ANNOUNCED"===t.type);return this.connectors.map(s=>"INJECTED"===s.type&&eb.ConnectionController.checkInstalled()?ey.dy`
        <wui-list-wallet
          imageSrc=${(0,eC.o)(eb.fz.getConnectorImage(s))}
          name=${s.name??"Unknown"}
          @click=${()=>this.onConnector(s)}
          tagLabel=${(0,eC.o)(t?void 0:"installed")}
          tagVariant=${(0,eC.o)(t?void 0:"success")}
        >
        </wui-list-wallet>
      `:null)}connectorsTemplate(){return this.connectors.map(t=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(t.type)?null:ey.dy`
        <wui-list-wallet
          imageSrc=${(0,eC.o)(eb.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){let t=10*Math.floor(eb.ApiController.state.count/10);return ey.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${t}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){let{recommended:t}=eb.ApiController.state,{customWallets:s,featuredWalletIds:p}=eb.OptionsController.state,{connectors:g}=eb.ConnectorController.state,m=eb.MO.getRecentWallets(),v=g.filter(t=>"ANNOUNCED"===t.type);if(p||s||!t.length)return null;let _=v.length+m.length,x=this.filterOutDuplicateWallets(t).slice(0,Math.max(0,2-_));return x.map(t=>ey.dy`
        <wui-list-wallet
          imageSrc=${(0,eC.o)(eb.fz.getWalletImage(t))}
          name=${t?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(t)}
        >
        </wui-list-wallet>
      `)}onConnector(t){"WALLET_CONNECT"===t.type?eb.j1.isMobile()?eb.RouterController.push("AllWallets"):eb.RouterController.push("ConnectingWalletConnect"):eb.RouterController.push("ConnectingExternal",{connector:t})}filterOutDuplicateWallets(t){let{connectors:s}=eb.ConnectorController.state,p=eb.MO.getRecentWallets(),g=p.map(t=>t.id),m=s.map(t=>t.info?.rdns).filter(Boolean),v=t.filter(t=>!g.includes(t.id)&&!m.includes(t.rdns??void 0));return v}onAllWallets(){eb.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),eb.RouterController.push("AllWallets")}onConnectWallet(t){eb.RouterController.push("ConnectingWalletConnect",{wallet:t})}};eT.styles=eD,w3m_connect_view_decorate([(0,ev.SB)()],eT.prototype,"connectors",void 0),eT=w3m_connect_view_decorate([(0,ew.customElement)("w3m-connect-view")],eT);var eI=ey.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,w3m_connecting_widget_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let W3mConnectingWidget=class W3mConnectingWidget extends ey.oi{constructor(){super(),this.wallet=eb.RouterController.state.data?.wallet,this.connector=eb.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=eb.fz.getWalletImage(this.wallet)??eb.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=eb.ConnectionController.state.wcUri,this.error=eb.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(...[eb.ConnectionController.subscribeKey("wcUri",t=>{this.uri=t,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),eb.ConnectionController.subscribeKey("wcError",t=>this.error=t),eb.ConnectionController.subscribeKey("buffering",t=>this.buffering=t)])}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,s=`Continue in ${this.name}`;return this.buffering&&(s="Connecting..."),this.error&&(s="Connection declined"),ey.dy`
      <wui-flex
        data-error=${(0,eC.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,eC.o)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${s}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?ey.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let t=this.shadowRoot?.querySelector("wui-button");t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(eb.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){let t=eb.ThemeController.state.themeVariables["--w3m-border-radius-master"],s=t?parseInt(t.replace("px",""),10):4;return ey.dy`<wui-loading-thumbnail radius=${9*s}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(eb.j1.copyToClopboard(this.uri),eb.SnackController.showSuccess("Link copied"))}catch{eb.SnackController.showError("Failed to copy")}}};W3mConnectingWidget.styles=eI,w3m_connecting_widget_decorate([(0,ev.SB)()],W3mConnectingWidget.prototype,"uri",void 0),w3m_connecting_widget_decorate([(0,ev.SB)()],W3mConnectingWidget.prototype,"error",void 0),w3m_connecting_widget_decorate([(0,ev.SB)()],W3mConnectingWidget.prototype,"ready",void 0),w3m_connecting_widget_decorate([(0,ev.SB)()],W3mConnectingWidget.prototype,"showRetry",void 0),w3m_connecting_widget_decorate([(0,ev.SB)()],W3mConnectingWidget.prototype,"buffering",void 0),w3m_connecting_widget_decorate([(0,ev.Cb)({type:Boolean})],W3mConnectingWidget.prototype,"isMobile",void 0),w3m_connecting_widget_decorate([(0,ev.Cb)()],W3mConnectingWidget.prototype,"onRetry",void 0);let eR={INJECTED:"browser",ANNOUNCED:"browser"},eB=class extends W3mConnectingWidget{constructor(){if(super(),!this.connector)throw Error("w3m-connecting-view: No connector provided");eb.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:eR[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(await eb.ConnectionController.connectExternal(this.connector),eb.IN.close(),eb.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(t){eb.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),this.error=!0}}};eB=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_}([(0,ew.customElement)("w3m-connecting-external-view")],eB);var w3m_connecting_wc_view_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let eN=class extends ey.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=eb.RouterController.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),eb.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),ey.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):ey.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(t=!1){try{let{wcPairingExpiry:s}=eb.ConnectionController.state;(t||eb.j1.isPairingExpired(s))&&(eb.ConnectionController.connectWalletConnect(),await eb.ConnectionController.state.wcPromise,this.finalizeConnection(),eb.IN.close())}catch(t){eb.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),eb.ConnectionController.setWcError(!0),eb.j1.isAllowedRetry(this.lastRetry)&&(eb.SnackController.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){let{wcLinking:t,recentWallet:s}=eb.ConnectionController.state;t&&eb.MO.setWalletConnectDeepLink(t),s&&eb.MO.setWeb3ModalRecent(s),eb.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:t?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;let{mobile_link:t,desktop_link:s,webapp_link:p,injected:g,rdns:m}=this.wallet,v=g?.map(({injected_id:t})=>t).filter(Boolean),_=m?[m]:v??[],x=_.length,T=eb.ConnectionController.checkInstalled(_),F=x&&T,W=s&&!eb.j1.isMobile();F&&this.platforms.push("browser"),t&&this.platforms.push(eb.j1.isMobile()?"mobile":"qrcode"),p&&this.platforms.push("web"),W&&this.platforms.push("desktop"),!F&&x&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return ey.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return ey.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return ey.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return ey.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return ey.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return ey.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){let t=this.platforms.length>1;return t?ey.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){let s=this.shadowRoot?.querySelector("div");s&&(await s.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,s.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};w3m_connecting_wc_view_decorate([(0,ev.SB)()],eN.prototype,"platform",void 0),w3m_connecting_wc_view_decorate([(0,ev.SB)()],eN.prototype,"platforms",void 0),eN=w3m_connecting_wc_view_decorate([(0,ew.customElement)("w3m-connecting-wc-view")],eN);let eU=class extends ey.oi{constructor(){super(...arguments),this.wallet=eb.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return ey.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?ey.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?ey.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?ey.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?ey.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&eb.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&eb.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&eb.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&eb.j1.openHref(this.wallet.homepage,"_blank")}};eU=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_}([(0,ew.customElement)("w3m-downloads-view")],eU);let eM=class extends ey.oi{render(){return ey.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{eb.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:t,featured:s}=eb.ApiController.state,{customWallets:p}=eb.OptionsController.state,g=[...s,...p??[],...t].slice(0,4);return g.map(t=>ey.dy`
        <wui-list-wallet
          name=${t.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,eC.o)(eb.fz.getWalletImage(t))}
          @click=${()=>{eb.j1.openHref(t.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};eM=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_}([(0,ew.customElement)("w3m-get-wallet-view")],eM);var ej=ey.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,w3m_network_switch_view_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let eL=class extends ey.oi{constructor(){super(),this.network=eb.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=eb.NetworkController.state.caipNetwork,this.unsubscribe.push(eb.NetworkController.subscribeKey("caipNetwork",t=>{t?.id!==this.currentNetwork?.id&&eb.RouterController.goBack()}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let t=this.error?"Switch declined":"Approve in wallet",s=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return ey.dy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,eC.o)(eb.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:ey.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${t}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${s}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let t=this.shadowRoot?.querySelector("wui-button");t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await eb.NetworkController.switchActiveNetwork(this.network),eb.RouterController.goBack())}catch{this.error=!0}}};eL.styles=ej,w3m_network_switch_view_decorate([(0,ev.SB)()],eL.prototype,"showRetry",void 0),w3m_network_switch_view_decorate([(0,ev.SB)()],eL.prototype,"error",void 0),w3m_network_switch_view_decorate([(0,ev.SB)()],eL.prototype,"currentNetwork",void 0),eL=w3m_network_switch_view_decorate([(0,ew.customElement)("w3m-network-switch-view")],eL);var w3m_networks_view_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let eF=class extends ey.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=eb.NetworkController.state.caipNetwork,this.unsubscribe.push(eb.NetworkController.subscribeKey("caipNetwork",t=>this.caipNetwork=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return ey.dy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){eb.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),eb.RouterController.push("WhatIsANetwork")}networksTemplate(){let{approvedCaipNetworkIds:t,requestedCaipNetworks:s,supportsAllNetworks:p}=eb.NetworkController.state;return t?.length&&s?.sort((s,p)=>t.indexOf(p.id)-t.indexOf(s.id)),s?.map(s=>ey.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===s.id}
          imageSrc=${eC.o(eb.fz.getNetworkImage(s))}
          type="network"
          name=${s.name??s.id}
          @click=${()=>this.onSwitchNetwork(s)}
          .disabled=${!p&&!t?.includes(s.id)}
        ></wui-card-select>
      `)}async onSwitchNetwork(t){let{isConnected:s}=eb.AccountController.state,{approvedCaipNetworkIds:p,supportsAllNetworks:g,caipNetwork:m}=eb.NetworkController.state;s&&m?.id!==t.id?p?.includes(t.id)?await eb.NetworkController.switchActiveNetwork(t):g&&eb.RouterController.push("SwitchNetwork",{network:t}):s||(eb.NetworkController.setCaipNetwork(t),eb.RouterController.push("Connect"))}};w3m_networks_view_decorate([(0,ev.SB)()],eF.prototype,"caipNetwork",void 0),eF=w3m_networks_view_decorate([(0,ew.customElement)("w3m-networks-view")],eF);let ez=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],eW=class extends ey.oi{render(){return ey.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ez}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{eb.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};eW=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_}([(0,ew.customElement)("w3m-what-is-a-network-view")],eW);let eH=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],eq=class extends ey.oi{render(){return ey.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${eH}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){eb.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),eb.RouterController.push("GetWallet")}};eq=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_}([(0,ew.customElement)("w3m-what-is-a-wallet-view")],eq);var eG=ey.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,w3m_all_wallets_list_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let eZ="local-paginator",eK=class extends ey.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!eb.ApiController.state.wallets.length,this.wallets=eb.ApiController.state.wallets,this.recommended=eb.ApiController.state.recommended,this.featured=eb.ApiController.state.featured,this.unsubscribe.push(...[eb.ApiController.subscribeKey("wallets",t=>this.wallets=t),eb.ApiController.subscribeKey("recommended",t=>this.recommended=t),eb.ApiController.subscribeKey("featured",t=>this.featured=t)])}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.paginationObserver?.disconnect()}render(){return ey.dy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){let t=this.shadowRoot?.querySelector("wui-grid");this.initial&&t&&(await eb.ApiController.fetchWallets({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,s){return[...Array(t)].map(()=>ey.dy`
        <wui-card-select-loader type="wallet" id=${(0,eC.o)(s)}></wui-card-select-loader>
      `)}walletsTemplate(){let t=[...this.featured,...this.recommended,...this.wallets];return t.map(t=>ey.dy`
        <wui-card-select
          imageSrc=${(0,eC.o)(eb.fz.getWalletImage(t))}
          type="wallet"
          name=${t.name}
          @click=${()=>this.onConnectWallet(t)}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){let{wallets:t,recommended:s,featured:p,count:g}=eb.ApiController.state,m=window.innerWidth<352?3:4,v=t.length+s.length,_=Math.ceil(v/m)*m-v+m;return(_-=t.length?p.length%m:0,0===g||[...p,...t,...s].length<g)?this.shimmerTemplate(_,eZ):null}createPaginationObserver(){let t=this.shadowRoot?.querySelector(`#${eZ}`);t&&(this.paginationObserver=new IntersectionObserver(([t])=>{if(t?.isIntersecting&&!this.initial){let{page:t,count:s,wallets:p}=eb.ApiController.state;p.length<s&&eb.ApiController.fetchWallets({page:t+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){let{connectors:s}=eb.ConnectorController.state,p=s.find(({explorerId:s})=>s===t.id);p?eb.RouterController.push("ConnectingExternal",{connector:p}):eb.RouterController.push("ConnectingWalletConnect",{wallet:t})}};eK.styles=eG,w3m_all_wallets_list_decorate([(0,ev.SB)()],eK.prototype,"initial",void 0),w3m_all_wallets_list_decorate([(0,ev.SB)()],eK.prototype,"wallets",void 0),w3m_all_wallets_list_decorate([(0,ev.SB)()],eK.prototype,"recommended",void 0),w3m_all_wallets_list_decorate([(0,ev.SB)()],eK.prototype,"featured",void 0),eK=w3m_all_wallets_list_decorate([(0,ew.customElement)("w3m-all-wallets-list")],eK);var eV=ey.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`,w3m_all_wallets_search_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let eQ=class extends ey.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?ey.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await eb.ApiController.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){let{search:t}=eb.ApiController.state;return t.length?ey.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(t=>ey.dy`
            <wui-card-select
              imageSrc=${(0,eC.o)(eb.fz.getWalletImage(t))}
              type="wallet"
              name=${t.name}
              @click=${()=>this.onConnectWallet(t)}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:ey.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconcolor="fg-200"
            backgroundcolor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(t){let{connectors:s}=eb.ConnectorController.state,p=s.find(({explorerId:s})=>s===t.id);p?eb.RouterController.push("ConnectingExternal",{connector:p}):eb.RouterController.push("ConnectingWalletConnect",{wallet:t})}};eQ.styles=eV,w3m_all_wallets_search_decorate([(0,ev.SB)()],eQ.prototype,"loading",void 0),w3m_all_wallets_search_decorate([(0,ev.Cb)()],eQ.prototype,"query",void 0),eQ=w3m_all_wallets_search_decorate([(0,ew.customElement)("w3m-all-wallets-search")],eQ);var w3m_connecting_header_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let eY=class extends ey.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(eb.ConnectionController.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){let t=this.generateTabs();return ey.dy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${t}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let t=this.platforms.map(t=>"browser"===t?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===t?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===t?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===t?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===t?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:t})=>t),t}onTabChange(t){let s=this.platformTabs[t];s&&this.onSelectPlatfrom?.(s)}};w3m_connecting_header_decorate([(0,ev.Cb)({type:Array})],eY.prototype,"platforms",void 0),w3m_connecting_header_decorate([(0,ev.Cb)()],eY.prototype,"onSelectPlatfrom",void 0),w3m_connecting_header_decorate([(0,ev.SB)()],eY.prototype,"buffering",void 0),eY=w3m_connecting_header_decorate([(0,ew.customElement)("w3m-connecting-header")],eY);let eX=class extends W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),eb.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:t}=eb.ConnectorController.state,s=t.find(t=>"ANNOUNCED"===t.type&&t.info?.rdns===this.wallet?.rdns),p=t.find(t=>"INJECTED"===t.type);s?await eb.ConnectionController.connectExternal(s):p&&await eb.ConnectionController.connectExternal(p),eb.IN.close(),eb.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(t){eb.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),this.error=!0}}};eX=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_}([(0,ew.customElement)("w3m-connecting-wc-browser")],eX);let eJ=class extends W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),eb.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{this.onConnect?.()},200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:t,name:s}=this.wallet,{redirect:p,href:g}=eb.j1.formatNativeUrl(t,this.uri);eb.ConnectionController.setWcLinking({name:s,href:g}),eb.ConnectionController.setRecentWallet(this.wallet),eb.j1.openHref(p,"_self")}catch{this.error=!0}}};eJ=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_}([(0,ew.customElement)("w3m-connecting-wc-desktop")],eJ);let e0=class extends W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),eb.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:t,name:s}=this.wallet,{redirect:p,href:g}=eb.j1.formatNativeUrl(t,this.uri);eb.ConnectionController.setWcLinking({name:s,href:g}),eb.ConnectionController.setRecentWallet(this.wallet),eb.j1.openHref(p,"_self")}catch{this.error=!0}}onBuffering(){let t=eb.j1.isIos();document?.visibilityState==="visible"&&!this.error&&t&&(eb.ConnectionController.setBuffering(!0),setTimeout(()=>{eb.ConnectionController.setBuffering(!1)},5e3))}};e0=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_}([(0,ew.customElement)("w3m-connecting-wc-mobile")],e0);var e1=ey.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let e2=class extends W3mConnectingWidget{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),eb.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),ey.dy`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let t=this.getBoundingClientRect().width-40,s=this.wallet?this.wallet.name:void 0;return eb.ConnectionController.setWcLinking(void 0),eb.ConnectionController.setRecentWallet(this.wallet),ey.dy`<wui-qr-code
      size=${t}
      theme=${eb.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,eC.o)(eb.fz.getWalletImage(this.wallet))}
      alt=${(0,eC.o)(s)}
    ></wui-qr-code>`}};e2.styles=e1,e2=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_}([(0,ew.customElement)("w3m-connecting-wc-qrcode")],e2);let e5=class extends ey.oi{constructor(){if(super(),this.wallet=eb.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");eb.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return ey.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,eC.o)(eb.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};e5=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_}([(0,ew.customElement)("w3m-connecting-wc-unsupported")],e5);let e3=class extends W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",eb.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:t,name:s}=this.wallet,{redirect:p,href:g}=eb.j1.formatUniversalUrl(t,this.uri);eb.ConnectionController.setWcLinking({name:s,href:g}),eb.ConnectionController.setRecentWallet(this.wallet),eb.j1.openHref(p,"_blank")}catch{this.error=!0}}};e3=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_}([(0,ew.customElement)("w3m-connecting-wc-web")],e3);var e6=ey.iv`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`,w3m_header_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};function headings(){let t=eb.RouterController.state.data?.connector?.name,s=eb.RouterController.state.data?.wallet?.name,p=eb.RouterController.state.data?.network?.name,g=s??t;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:g??"Connect Wallet",ConnectingWalletConnect:g??"WalletConnect",Networks:"Choose Network",SwitchNetwork:p??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet",Downloads:g?`Get ${g}`:"Downloads"}}let e4=class extends ey.oi{constructor(){super(),this.unsubscribe=[],this.heading=headings()[eb.RouterController.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(eb.RouterController.subscribeKey("view",t=>{this.onViewChange(t),this.onHistoryChange()}),eb.ConnectionController.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){return ey.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${eb.IN.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){eb.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),eb.RouterController.push("WhatIsAWallet")}titleTemplate(){return ey.dy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){let{view:t}=eb.RouterController.state;return this.showBack?ey.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${eb.RouterController.goBack}
      ></wui-icon-link>`:ey.dy`<wui-icon-link
      data-hidden=${"Connect"!==t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?ey.dy`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(t){let s=this.shadowRoot?.querySelector("wui-text");if(s){let p=headings()[t];await s.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=p,s.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){let{history:t}=eb.RouterController.state,s=this.shadowRoot?.querySelector("#dynamic");t.length>1&&!this.showBack&&s?(await s.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,s.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&s&&(await s.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,s.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};e4.styles=[e6],w3m_header_decorate([(0,ev.SB)()],e4.prototype,"heading",void 0),w3m_header_decorate([(0,ev.SB)()],e4.prototype,"buffering",void 0),w3m_header_decorate([(0,ev.SB)()],e4.prototype,"showBack",void 0),e4=w3m_header_decorate([(0,ew.customElement)("w3m-header")],e4);var w3m_help_widget_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let e8=class extends ey.oi{constructor(){super(...arguments),this.data=[]}render(){return ey.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(t=>ey.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${t.images.map(t=>ey.dy`<wui-visual name=${t}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${t.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${t.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};w3m_help_widget_decorate([(0,ev.Cb)({type:Array})],e8.prototype,"data",void 0),e8=w3m_help_widget_decorate([(0,ew.customElement)("w3m-help-widget")],e8);var e7=ey.iv`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;let e9=class extends ey.oi{render(){let{termsConditionsUrl:t,privacyPolicyUrl:s}=eb.OptionsController.state;return t||s?ey.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){let{termsConditionsUrl:t,privacyPolicyUrl:s}=eb.OptionsController.state;return t&&s?"and":""}termsTemplate(){let{termsConditionsUrl:t}=eb.OptionsController.state;return t?ey.dy`<a href=${t}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:t}=eb.OptionsController.state;return t?ey.dy`<a href=${t}>Privacy Policy</a>`:null}};e9.styles=[e7],e9=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_}([(0,ew.customElement)("w3m-legal-footer")],e9);var tt=ey.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,w3m_mobile_download_links_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let tr=class extends ey.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:t,app_store:s,play_store:p,chrome_store:g,homepage:m}=this.wallet,v=eb.j1.isMobile(),_=eb.j1.isIos(),x=eb.j1.isAndroid(),T=[s,p,m,g].filter(Boolean).length>1,F=ew.UiHelperUtil.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return T&&!v?ey.dy`
        <wui-cta-button
          label=${`Don't have ${F}?`}
          buttonLabel="Get"
          @click=${()=>eb.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!T&&m?ey.dy`
        <wui-cta-button
          label=${`Don't have ${F}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:s&&_?ey.dy`
        <wui-cta-button
          label=${`Don't have ${F}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:p&&x?ey.dy`
        <wui-cta-button
          label=${`Don't have ${F}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&eb.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&eb.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&eb.j1.openHref(this.wallet.homepage,"_blank")}};tr.styles=[tt],w3m_mobile_download_links_decorate([(0,ev.Cb)({type:Object})],tr.prototype,"wallet",void 0),tr=w3m_mobile_download_links_decorate([(0,ew.customElement)("w3m-mobile-download-links")],tr);var tn=ey.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`,w3m_snackbar_decorate=function(t,s,p,g){var m,v=arguments.length,_=v<3?s:null===g?g=Object.getOwnPropertyDescriptor(s,p):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,s,p,g);else for(var x=t.length-1;x>=0;x--)(m=t[x])&&(_=(v<3?m(_):v>3?m(s,p,_):m(s,p))||_);return v>3&&_&&Object.defineProperty(s,p,_),_};let ti={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},to=class extends ey.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=eb.SnackController.state.open,this.unsubscribe.push(eb.SnackController.subscribeKey("open",t=>{this.open=t,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(t=>t())}render(){let{message:t,variant:s}=eb.SnackController.state,p=ti[s];return ey.dy`
      <wui-snackbar
        message=${t}
        backgroundColor=${p.backgroundColor}
        iconColor=${p.iconColor}
        icon=${p.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>eb.SnackController.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};to.styles=tn,w3m_snackbar_decorate([(0,ev.SB)()],to.prototype,"open",void 0),to=w3m_snackbar_decorate([(0,ew.customElement)("w3m-snackbar")],to);let ta=!1;let Web3ModalScaffold=class Web3ModalScaffold{constructor(t){this.initPromise=void 0,this.setIsConnected=t=>{eb.AccountController.setIsConnected(t)},this.setCaipAddress=t=>{eb.AccountController.setCaipAddress(t)},this.setBalance=(t,s)=>{eb.AccountController.setBalance(t,s)},this.setProfileName=t=>{eb.AccountController.setProfileName(t)},this.setProfileImage=t=>{eb.AccountController.setProfileImage(t)},this.resetAccount=()=>{eb.AccountController.resetAccount()},this.setCaipNetwork=t=>{eb.NetworkController.setCaipNetwork(t)},this.getCaipNetwork=()=>eb.NetworkController.state.caipNetwork,this.setRequestedCaipNetworks=t=>{eb.NetworkController.setRequestedCaipNetworks(t)},this.getApprovedCaipNetworksData=()=>eb.NetworkController.getApprovedCaipNetworksData(),this.resetNetwork=()=>{eb.NetworkController.resetNetwork()},this.setConnectors=t=>{eb.ConnectorController.setConnectors(t)},this.addConnector=t=>{eb.ConnectorController.addConnector(t)},this.getConnectors=()=>eb.ConnectorController.getConnectors(),this.resetWcConnection=()=>{eb.ConnectionController.resetWcConnection()},this.fetchIdentity=t=>eb.Lr.fetchIdentity(t),this.setAddressExplorerUrl=t=>{eb.AccountController.setAddressExplorerUrl(t)},this.initControllers(t),this.initOrContinue()}async open(t){await this.initOrContinue(),eb.IN.open(t)}async close(){await this.initOrContinue(),eb.IN.close()}getThemeMode(){return eb.ThemeController.state.themeMode}getThemeVariables(){return eb.ThemeController.state.themeVariables}setThemeMode(t){eb.ThemeController.setThemeMode(t),(0,ew.setColorTheme)(eb.ThemeController.state.themeMode)}setThemeVariables(t){eb.ThemeController.setThemeVariables(t),(0,ew.setThemeVariables)(eb.ThemeController.state.themeVariables)}subscribeTheme(t){return eb.ThemeController.subscribe(t)}getState(){return{...eb.Ie.state}}subscribeState(t){return eb.Ie.subscribe(t)}getEvent(){return{...eb.Xs.state}}subscribeEvents(t){return eb.Xs.subscribe(t)}initControllers(t){eb.NetworkController.setClient(t.networkControllerClient),eb.NetworkController.setDefaultCaipNetwork(t.defaultChain),eb.OptionsController.setProjectId(t.projectId),eb.OptionsController.setIncludeWalletIds(t.includeWalletIds),eb.OptionsController.setExcludeWalletIds(t.excludeWalletIds),eb.OptionsController.setFeaturedWalletIds(t.featuredWalletIds),eb.OptionsController.setTokens(t.tokens),eb.OptionsController.setTermsConditionsUrl(t.termsConditionsUrl),eb.OptionsController.setPrivacyPolicyUrl(t.privacyPolicyUrl),eb.OptionsController.setCustomWallets(t.customWallets),eb.OptionsController.setEnableAnalytics(t.enableAnalytics),eb.OptionsController.setSdkVersion(t._sdkVersion),eb.ConnectionController.setClient(t.connectionControllerClient),t.themeMode&&eb.ThemeController.setThemeMode(t.themeMode),t.themeVariables&&eb.ThemeController.setThemeVariables(t.themeVariables)}async initOrContinue(){return!this.initPromise&&!ta&&eb.j1.isClient()&&(ta=!0,this.initPromise=new Promise(async t=>{await Promise.all([Promise.resolve().then(p.bind(p,19704)),Promise.resolve().then(p.bind(p,90078))]);let s=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",s),t()})),this.initPromise}};let ts="walletConnect",tl="injected",tc="coinbaseWallet",tu="safe",td="ledger",th="eip6963",tf="eip155",tp="3.1.0",tg={1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},tm={[tc]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[tu]:"461db637-8616-43ce-035a-d89b8a1d5800",[td]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[ts]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[tl]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},tb={[tc]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[tu]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[td]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},tw={[tl]:"Browser Wallet",[ts]:"WalletConnect",[tc]:"Coinbase",[td]:"Ledger",[tu]:"Safe"},ty={[tl]:"INJECTED",[ts]:"WALLET_CONNECT",[th]:"ANNOUNCED"};function caipNetworkIdToNumber(t){return t?Number(t.split(":")[1]):void 0}let Web3Modal=class Web3Modal extends Web3ModalScaffold{constructor(t){let{wagmiConfig:s,chains:p,defaultChain:g,tokens:m,_sdkVersion:v,..._}=t;if(!s)throw Error("web3modal:constructor - wagmiConfig is undefined");if(!_.projectId)throw Error("web3modal:constructor - projectId is undefined");if(!s.connectors.find(t=>t.id===ts))throw Error("web3modal:constructor - WalletConnectConnector is required");let x={connectWalletConnect:async t=>{let p=s.connectors.find(t=>t.id===ts);if(!p)throw Error("connectionControllerClient:getWalletConnectUri - connector is undefined");p.on("message",s=>{"display_uri"===s.type&&(t(s.data),p.removeAllListeners())});let g=caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,eg.$j)({connector:p,chainId:g})},connectExternal:async({id:t,provider:p,info:g})=>{let m=s.connectors.find(s=>s.id===t);if(!m)throw Error("connectionControllerClient:connectExternal - connector is undefined");p&&g&&m.id===th&&m.setEip6963Wallet?.({provider:p,info:g});let v=caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,eg.$j)({connector:m,chainId:v})},checkInstalled:t=>{let s=this.getConnectors().filter(t=>"ANNOUNCED"===t.type),p=this.getConnectors().find(t=>"INJECTED"===t.type);if(!t)return!!window.ethereum;if(s.length){let p=t.some(t=>s.some(s=>s.info?.rdns===t));if(p)return!0}return!!p&&!!window?.ethereum&&t.some(t=>!!window.ethereum?.[String(t)])},disconnect:eg.zP};super({networkControllerClient:{switchCaipNetwork:async t=>{let s=caipNetworkIdToNumber(t?.id);s&&await (0,eg.If)({chainId:s})},async getApprovedCaipNetworksData(){let t=localStorage.getItem("wagmi.wallet");if(t?.includes(ts)){let t=s.connectors.find(t=>t.id===ts);if(!t)throw Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");let p=await t.getProvider(),g=p.signer?.session?.namespaces,m=g?.[tf]?.methods,v=g?.[tf]?.chains;return{supportsAllNetworks:m?.includes("wallet_addEthereumChain"),approvedCaipNetworkIds:v}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},connectionControllerClient:x,defaultChain:function(t){if(t)return{id:`${tf}:${t.id}`,name:t.name,imageId:tg[t.id]}}(g),tokens:function(t){if(!t)return;let s={};return Object.entries(t).forEach(([t,p])=>{s[`${tf}:${t}`]=p}),s}(m),_sdkVersion:v??`html-wagmi-${tp}`,..._}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=t,this.syncRequestedNetworks(p),this.syncConnectors(s),this.listenConnectors(s),(0,eg.uH)(()=>this.syncAccount()),(0,eg.QC)(()=>this.syncNetwork())}getState(){let t=super.getState();return{...t,selectedNetworkId:caipNetworkIdToNumber(t.selectedNetworkId)}}subscribeState(t){return super.subscribeState(s=>t({...s,selectedNetworkId:caipNetworkIdToNumber(s.selectedNetworkId)}))}syncRequestedNetworks(t){let s=t?.map(t=>({id:`${tf}:${t.id}`,name:t.name,imageId:tg[t.id],imageUrl:this.options?.chainImages?.[t.id]}));this.setRequestedCaipNetworks(s??[])}async syncAccount(){let{address:t,isConnected:s}=(0,eg.D0)(),{chain:p}=(0,eg.Hy)();if(this.resetAccount(),s&&t&&p){let g=`${tf}:${p.id}:${t}`;this.setIsConnected(s),this.setCaipAddress(g),await Promise.all([this.syncProfile(t),this.syncBalance(t,p),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!s&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){let{address:t,isConnected:s}=(0,eg.D0)(),{chain:p}=(0,eg.Hy)();if(p){let g=String(p.id),m=`${tf}:${g}`;if(this.setCaipNetwork({id:m,name:p.name,imageId:tg[p.id],imageUrl:this.options?.chainImages?.[p.id]}),s&&t){let s=`${tf}:${p.id}:${t}`;if(this.setCaipAddress(s),p.blockExplorers?.default?.url){let s=`${p.blockExplorers.default.url}/address/${t}`;this.setAddressExplorerUrl(s)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&await this.syncBalance(t,p)}}}async syncProfile(t){try{let{name:s,avatar:p}=await this.fetchIdentity({caipChainId:`${tf}:${em.R.id}`,address:t});this.setProfileName(s),this.setProfileImage(p)}catch{let s=await (0,eg.Lk)({address:t,chainId:em.R.id});if(s){this.setProfileName(s);let t=await (0,eg.w6)({name:s,chainId:em.R.id});t&&this.setProfileImage(t)}}}async syncBalance(t,s){let p=await (0,eg.EG)({address:t,chainId:s.id,token:this.options?.tokens?.[s.id]?.address});this.setBalance(p.formatted,p.symbol)}syncConnectors(t){let s=[];t.connectors.forEach(({id:t,name:p})=>{t!==th&&s.push({id:t,explorerId:tb[t],imageId:tm[t],imageUrl:this.options?.connectorImages?.[t],name:tw[t]??p,type:ty[t]??"EXTERNAL"})}),this.setConnectors(s)}listenConnectors(t){let s=t.connectors.find(t=>t.id===th);"undefined"!=typeof window&&s&&(window.addEventListener("eip6963:announceProvider",t=>{if(t.detail){let{info:p,provider:g}=t.detail;this.addConnector({id:th,type:"ANNOUNCED",imageUrl:p.icon??this.options?.connectorImages?.[th],name:p.name,provider:g,info:p}),s.isAuthorized({info:p,provider:g})}}),window.dispatchEvent(new Event("eip6963:requestProvider")))}};var tv=p(74278),__classPrivateFieldSet=function(t,s,p,g,m){if("m"===g)throw TypeError("Private method is not writable");if("a"===g&&!m)throw TypeError("Private accessor was defined without a setter");if("function"==typeof s?t!==s||!m:!s.has(t))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===g?m.call(t,p):m?m.value=p:s.set(t,p),p},__classPrivateFieldGet=function(t,s,p,g){if("a"===p&&!g)throw TypeError("Private accessor was defined without a getter");if("function"==typeof s?t!==s||!g:!s.has(t))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===p?g:"a"===p?g.call(t):g?g.value:s.get(t)};let tC="connectedRdns";let EIP6963Connector=class EIP6963Connector extends tv._{constructor(t){super({chains:t.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",m.set(this,void 0),v.set(this,void 0),__classPrivateFieldSet(this,m,this.options.getProvider(),"f")}async connect(t){let s=await super.connect(t);return __classPrivateFieldGet(this,v,"f")&&this.storage?.setItem(tC,__classPrivateFieldGet(this,v,"f").info.rdns),s}async disconnect(){await super.disconnect(),this.storage?.removeItem(tC),__classPrivateFieldSet(this,v,void 0,"f")}async isAuthorized(t){let s=this.storage?.getItem(tC);if(s){if(!t||s!==t.info.rdns)return!0;__classPrivateFieldSet(this,v,t,"f")}return super.isAuthorized()}async getProvider(){return Promise.resolve(__classPrivateFieldGet(this,v,"f")?.provider??__classPrivateFieldGet(this,m,"f"))}setEip6963Wallet(t){__classPrivateFieldSet(this,v,t,"f")}};m=new WeakMap,v=new WeakMap;var t_=p(48764);"undefined"==typeof window||(window.Buffer||(window.Buffer=t_.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));var tx=p(69077),tE=p(57858),tk=p(53516),tS=p(75276),tP=p(45775),tA=p(39028),t$=p(21032),tO=p(3980),tD=p(92106),tT=class extends tS.wR{constructor({chains:t,options:s}){super({chains:t,options:{reloadOnDisconnect:!1,...s}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,(0,tS.Ko)(this,_,void 0),(0,tS.Ko)(this,x,void 0),this.onAccountsChanged=t=>{0===t.length?this.emit("disconnect"):this.emit("change",{account:(0,tP.K)(t[0])})},this.onChainChanged=t=>{let s=(0,tk.J)(t),p=this.isChainUnsupported(s);this.emit("change",{chain:{id:s,unsupported:p}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:t}={}){try{let s=await this.getProvider();s.on("accountsChanged",this.onAccountsChanged),s.on("chainChanged",this.onChainChanged),s.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});let p=await s.enable(),g=(0,tP.K)(p[0]),m=await this.getChainId(),v=this.isChainUnsupported(m);if(t&&m!==t){let s=await this.switchChain(t);m=s.id,v=this.isChainUnsupported(m)}return{account:g,chain:{id:m,unsupported:v}}}catch(t){if(/(user closed modal|accounts received is empty)/i.test(t.message))throw new tA.ab(t);throw t}}async disconnect(){if(!(0,tS.ac)(this,x))return;let t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),t.disconnect(),t.close()}async getAccount(){let t=await this.getProvider(),s=await t.request({method:"eth_accounts"});return(0,tP.K)(s[0])}async getChainId(){let t=await this.getProvider(),s=(0,tk.J)(t.chainId);return s}async getProvider(){if(!(0,tS.ac)(this,x)){let t=(await Promise.all([p.e(811),p.e(439)]).then(p.t.bind(p,45811,19))).default;"function"!=typeof t&&"function"==typeof t.default&&(t=t.default),(0,tS.qx)(this,_,new t(this.options));let s=tS.ac(this,_).walletExtension?.getChainId(),g=this.chains.find(t=>this.options.chainId?t.id===this.options.chainId:t.id===s)||this.chains[0],m=this.options.chainId||g?.id,v=this.options.jsonRpcUrl||g?.rpcUrls.default.http[0];(0,tS.qx)(this,x,(0,tS.ac)(this,_).makeWeb3Provider(v,m))}return(0,tS.ac)(this,x)}async getWalletClient({chainId:t}={}){let[s,p]=await Promise.all([this.getProvider(),this.getAccount()]),g=this.chains.find(s=>s.id===t);if(!s)throw Error("provider is required.");return(0,t$.K)({account:p,chain:g,transport:(0,tO.P)(s)})}async isAuthorized(){try{let t=await this.getAccount();return!!t}catch{return!1}}async switchChain(t){let s=await this.getProvider(),p=(0,tD.eC)(t);try{return await s.request({method:"wallet_switchEthereumChain",params:[{chainId:p}]}),this.chains.find(s=>s.id===t)??{id:t,name:`Chain ${p}`,network:`${p}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(m){let g=this.chains.find(s=>s.id===t);if(!g)throw new tE.B({chainId:t,connectorId:this.id});if(4902===m.code)try{return await s.request({method:"wallet_addEthereumChain",params:[{chainId:p,chainName:g.name,nativeCurrency:g.nativeCurrency,rpcUrls:[g.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(g)}]}),g}catch(t){throw new tA.ab(t)}throw new tA.x3(m)}}async watchAsset({address:t,decimals:s=18,image:p,symbol:g}){let m=await this.getProvider();return m.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:s,image:p,symbol:g}}})}};_=new WeakMap,x=new WeakMap;var tI=p(5015),tR="eip155",tB="requestedChains",tN="wallet_addEthereumChain",tU=class extends tS.wR{constructor(t){super({...t,options:{isNewChainsStale:!0,...t.options}}),(0,tS.Ko)(this,W),(0,tS.Ko)(this,Q),(0,tS.Ko)(this,X),(0,tS.Ko)(this,en),(0,tS.Ko)(this,eo),(0,tS.Ko)(this,es),(0,tS.Ko)(this,ec),(0,tS.Ko)(this,ed),(0,tS.Ko)(this,ef),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,(0,tS.Ko)(this,T,void 0),(0,tS.Ko)(this,F,void 0),this.onAccountsChanged=t=>{0===t.length?this.emit("disconnect"):this.emit("change",{account:(0,tP.K)(t[0])})},this.onChainChanged=t=>{let s=Number(t),p=this.isChainUnsupported(s);this.emit("change",{chain:{id:s,unsupported:p}})},this.onDisconnect=()=>{(0,tS.U9)(this,es,el).call(this,[]),this.emit("disconnect")},this.onDisplayUri=t=>{this.emit("message",{type:"display_uri",data:t})},this.onConnect=()=>{this.emit("connect",{})},(0,tS.U9)(this,W,Z).call(this)}async connect({chainId:t,pairingTopic:s}={}){try{let p=t;if(!p){let t=this.storage?.getItem("store"),s=t?.state?.data?.chain?.id;p=s&&!this.isChainUnsupported(s)?s:this.chains[0]?.id}if(!p)throw Error("No chains found on connector.");let g=await this.getProvider();(0,tS.U9)(this,en,ei).call(this);let m=(0,tS.U9)(this,X,J).call(this);if(g.session&&m&&await g.disconnect(),!g.session||m){let t=this.chains.filter(t=>t.id!==p).map(t=>t.id);this.emit("message",{type:"connecting"}),await g.connect({pairingTopic:s,chains:[p],optionalChains:t.length?t:void 0}),(0,tS.U9)(this,es,el).call(this,this.chains.map(({id:t})=>t))}let v=await g.enable(),_=(0,tP.K)(v[0]),x=await this.getChainId(),T=this.isChainUnsupported(x);return{account:_,chain:{id:x,unsupported:T}}}catch(t){if(/user rejected/i.test(t?.message))throw new tA.ab(t);throw t}}async disconnect(){let t=await this.getProvider();try{await t.disconnect()}catch(t){if(!/No matching key/i.test(t.message))throw t}finally{(0,tS.U9)(this,eo,ea).call(this),(0,tS.U9)(this,es,el).call(this,[])}}async getAccount(){let{accounts:t}=await this.getProvider();return(0,tP.K)(t[0])}async getChainId(){let{chainId:t}=await this.getProvider();return t}async getProvider({chainId:t}={}){return(0,tS.ac)(this,T)||await (0,tS.U9)(this,W,Z).call(this),t&&await this.switchChain(t),(0,tS.ac)(this,T)}async getWalletClient({chainId:t}={}){let[s,p]=await Promise.all([this.getProvider({chainId:t}),this.getAccount()]),g=this.chains.find(s=>s.id===t);if(!s)throw Error("provider is required.");return(0,t$.K)({account:p,chain:g,transport:(0,tO.P)(s)})}async isAuthorized(){try{let[t,s]=await Promise.all([this.getAccount(),this.getProvider()]),p=(0,tS.U9)(this,X,J).call(this);if(!t)return!1;if(p&&s.session){try{await s.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(t){let s=this.chains.find(s=>s.id===t);if(!s)throw new tA.x3(Error("chain not found on connector."));try{let p=await this.getProvider(),g=(0,tS.U9)(this,ed,eh).call(this),m=(0,tS.U9)(this,ef,ep).call(this),v=g.includes(t);if(!v&&m.includes(tN)){await p.request({method:tN,params:[{chainId:(0,tD.eC)(s.id),blockExplorerUrls:[s.blockExplorers?.default?.url],chainName:s.name,nativeCurrency:s.nativeCurrency,rpcUrls:[...s.rpcUrls.default.http]}]});let g=(0,tS.U9)(this,ec,eu).call(this);g.push(t),(0,tS.U9)(this,es,el).call(this,g)}return await p.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,tD.eC)(t)}]}),s}catch(s){let t="string"==typeof s?s:s?.message;if(/user rejected request/i.test(t))throw new tA.ab(s);throw new tA.x3(s)}}};T=new WeakMap,F=new WeakMap,W=new WeakSet,Z=async function(){return(0,tS.ac)(this,F)||"undefined"==typeof window||(0,tS.qx)(this,F,(0,tS.U9)(this,Q,Y).call(this)),(0,tS.ac)(this,F)},Q=new WeakSet,Y=async function(){let{EthereumProvider:t,OPTIONAL_EVENTS:s,OPTIONAL_METHODS:g}=await p.e(882).then(p.bind(p,20882)),[m,...v]=this.chains.map(({id:t})=>t);if(m){let{projectId:p,showQrModal:_=!0,qrModalOptions:x,metadata:F,relayUrl:W}=this.options;(0,tS.qx)(this,T,await t.init({showQrModal:_,qrModalOptions:x,projectId:p,optionalMethods:g,optionalEvents:s,chains:[m],optionalChains:v.length?v:void 0,rpcMap:Object.fromEntries(this.chains.map(t=>[t.id,t.rpcUrls.default.http[0]])),metadata:F,relayUrl:W}))}},X=new WeakSet,J=function(){let t=(0,tS.U9)(this,ef,ep).call(this);if(t.includes(tN)||!this.options.isNewChainsStale)return!1;let s=(0,tS.U9)(this,ec,eu).call(this),p=this.chains.map(({id:t})=>t),g=(0,tS.U9)(this,ed,eh).call(this);return(!g.length||!!g.some(t=>p.includes(t)))&&!p.every(t=>s.includes(t))},en=new WeakSet,ei=function(){(0,tS.ac)(this,T)&&((0,tS.U9)(this,eo,ea).call(this),(0,tS.ac)(this,T).on("accountsChanged",this.onAccountsChanged),(0,tS.ac)(this,T).on("chainChanged",this.onChainChanged),(0,tS.ac)(this,T).on("disconnect",this.onDisconnect),(0,tS.ac)(this,T).on("session_delete",this.onDisconnect),(0,tS.ac)(this,T).on("display_uri",this.onDisplayUri),(0,tS.ac)(this,T).on("connect",this.onConnect))},eo=new WeakSet,ea=function(){(0,tS.ac)(this,T)&&((0,tS.ac)(this,T).removeListener("accountsChanged",this.onAccountsChanged),(0,tS.ac)(this,T).removeListener("chainChanged",this.onChainChanged),(0,tS.ac)(this,T).removeListener("disconnect",this.onDisconnect),(0,tS.ac)(this,T).removeListener("session_delete",this.onDisconnect),(0,tS.ac)(this,T).removeListener("display_uri",this.onDisplayUri),(0,tS.ac)(this,T).removeListener("connect",this.onConnect))},es=new WeakSet,el=function(t){this.storage?.setItem(tB,t)},ec=new WeakSet,eu=function(){return this.storage?.getItem(tB)??[]},ed=new WeakSet,eh=function(){if(!(0,tS.ac)(this,T))return[];let t=tS.ac(this,T).session?.namespaces;if(!t)return[];let s=(0,tI.fK)(t),p=s[tR]?.chains?.map(t=>parseInt(t.split(":")[1]||""));return p??[]},ef=new WeakSet,ep=function(){if(!(0,tS.ac)(this,T))return[];let t=tS.ac(this,T).session?.namespaces;if(!t)return[];let s=(0,tI.fK)(t),p=s[tR]?.methods;return p??[]};let tM=eb.j1.getBlockchainApiUrl();function defaultWagmiConfig({projectId:t,chains:s,metadata:p}){let{publicClient:g}=(0,eg.QB)(s,[function({projectId:t}){return function(s){if(![1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280].includes(s.id))return null;let p=`${tM}/v1/?chainId=${tf}:${s.id}&projectId=${t}`;return{chain:{...s,rpcUrls:{...s.rpcUrls,default:{http:[p]}}},rpcUrls:{http:[p]}}}}({projectId:t}),function(t){return t.rpcUrls.public.http[0]?{chain:t,rpcUrls:t.rpcUrls.public}:null}]);return(0,tx._g)({autoConnect:!0,connectors:[new tU({chains:s,options:{projectId:t,showQrModal:!1,metadata:p}}),new EIP6963Connector({chains:s}),new tv._({chains:s,options:{shimDisconnect:!0}}),new tT({chains:s,options:{appName:p?.name??"Unknown"}})],publicClient:g})}function createWeb3Modal(t){return g||(g=new Web3Modal({...t,_sdkVersion:`react-wagmi-${tp}`})),g}function useWeb3Modal(){if(!g)throw Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');return{open:async function(t){await g?.open(t)},close:async function(){await g?.close()}}}},37380:function(t,s,p){"use strict";p.d(s,{Cb:function(){return n},SB:function(){return state_r}});var g=p(97286);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let m={attribute:!0,type:String,converter:g.Ts,reflect:!1,hasChanged:g.Qu},r=(t=m,s,p)=>{let{kind:g,metadata:v}=p,_=globalThis.litPropertyMetadata.get(v);if(void 0===_&&globalThis.litPropertyMetadata.set(v,_=new Map),_.set(p.name,t),"accessor"===g){let{name:g}=p;return{set(p){let m=s.get.call(this);s.set.call(this,p),this.requestUpdate(g,m,t)},init(s){return void 0!==s&&this.C(g,void 0,t),s}}}if("setter"===g){let{name:g}=p;return function(p){let m=this[g];s.call(this,p),this.requestUpdate(g,m,t)}}throw Error("Unsupported decorator location: "+g)};function n(t){return(s,p)=>"object"==typeof p?r(t,s,p):((t,s,p)=>{let g=s.hasOwnProperty(p);return s.constructor.createProperty(p,g?{...t,wrapped:!0}:t),g?Object.getOwnPropertyDescriptor(s,p):void 0})(t,s,p)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function state_r(t){return n({...t,state:!0,attribute:!1})}},35592:function(t,s,p){"use strict";p.d(s,{o:function(){return o}});var g=p(69699);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let o=t=>t??g.Ld},77996:function(t,s,p){"use strict";p.d(s,{oi:function(){return lit_element_s},iv:function(){return i},dy:function(){return eE},YP:function(){return ek},$m:function(){return r}}),p(97286),p(69699);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let g=globalThis,m=g.ShadowRoot&&(void 0===g.ShadyCSS||g.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,v=Symbol(),_=new WeakMap;let n=class n{constructor(t,s,p){if(this._$cssResult$=!0,p!==v)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o,s=this.t;if(m&&void 0===t){let p=void 0!==s&&1===s.length;p&&(t=_.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),p&&_.set(s,t))}return t}toString(){return this.cssText}};let r=t=>new n("string"==typeof t?t:t+"",void 0,v),i=(t,...s)=>{let p=1===t.length?t[0]:s.reduce((s,p,g)=>s+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(p)+t[g+1],t[0]);return new n(p,t,v)},S=(t,s)=>{if(m)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let p of s){let s=document.createElement("style"),m=g.litNonce;void 0!==m&&s.setAttribute("nonce",m),s.textContent=p.cssText,t.appendChild(s)}},x=m?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(let p of t.cssRules)s+=p.cssText;return r(s)})(t):t,{is:T,defineProperty:F,getOwnPropertyDescriptor:W,getOwnPropertyNames:Z,getOwnPropertySymbols:Q,getPrototypeOf:Y}=Object,X=globalThis,J=X.trustedTypes,en=J?J.emptyScript:"",ei=X.reactiveElementPolyfillSupport,d=(t,s)=>t,eo={toAttribute(t,s){switch(s){case Boolean:t=t?en:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){let p=t;switch(s){case Boolean:p=null!==t;break;case Number:p=null===t?null:Number(t);break;case Object:case Array:try{p=JSON.parse(t)}catch(t){p=null}}return p}},f=(t,s)=>!T(t,s),ea={attribute:!0,type:String,converter:eo,reflect:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),X.litPropertyMetadata??=new WeakMap;let b=class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=ea){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){let p=Symbol(),g=this.getPropertyDescriptor(t,p,s);void 0!==g&&F(this.prototype,t,g)}}static getPropertyDescriptor(t,s,p){let{get:g,set:m}=W(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t}};return{get(){return g?.call(this)},set(s){let v=g?.call(this);m.call(this,s),this.requestUpdate(t,v,p)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ea}static _$Ei(){if(this.hasOwnProperty(d("elementProperties")))return;let t=Y(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(d("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d("properties"))){let t=this.properties,s=[...Z(t),...Q(t)];for(let p of s)this.createProperty(p,t[p])}let t=this[Symbol.metadata];if(null!==t){let s=litPropertyMetadata.get(t);if(void 0!==s)for(let[t,p]of s)this.elementProperties.set(t,p)}for(let[t,s]of(this._$Eh=new Map,this.elementProperties)){let p=this._$Eu(t,s);void 0!==p&&this._$Eh.set(p,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let s=[];if(Array.isArray(t)){let p=new Set(t.flat(1/0).reverse());for(let t of p)s.unshift(x(t))}else void 0!==t&&s.push(x(t));return s}static _$Eu(t,s){let p=s.attribute;return!1===p?void 0:"string"==typeof p?p:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){let t=new Map,s=this.constructor.elementProperties;for(let p of s.keys())this.hasOwnProperty(p)&&(t.set(p,this[p]),delete this[p]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,s,p){this._$AK(t,p)}_$EO(t,s){let p=this.constructor.elementProperties.get(t),g=this.constructor._$Eu(t,p);if(void 0!==g&&!0===p.reflect){let m=(void 0!==p.converter?.toAttribute?p.converter:eo).toAttribute(s,p.type);this._$Em=t,null==m?this.removeAttribute(g):this.setAttribute(g,m),this._$Em=null}}_$AK(t,s){let p=this.constructor,g=p._$Eh.get(t);if(void 0!==g&&this._$Em!==g){let t=p.getPropertyOptions(g),m="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:eo;this._$Em=g,this[g]=m.fromAttribute(s,t.type),this._$Em=null}}requestUpdate(t,s,p,g=!1,m){if(void 0!==t){if(!((p??=this.constructor.getPropertyOptions(t)).hasChanged??f)(g?m:this[t],s))return;this.C(t,s,p)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,s,p){this._$AL.has(t)||this._$AL.set(t,s),!0===p.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[s,p]of t)!0!==p.wrapped||this._$AL.has(s)||void 0===this[s]||this.C(s,this[s],p)}let t=!1,s=this._$AL;try{(t=this.shouldUpdate(s))?(this.willUpdate(s),this._$ES?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$ET()}catch(s){throw t=!1,this._$ET(),s}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$ES?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(t=>this._$EO(t,this[t])),this._$ET()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d("elementProperties")]=new Map,b[d("finalized")]=new Map,ei?.({ReactiveElement:b}),(X.reactiveElementVersions??=[]).push("2.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let es=globalThis,el=es.trustedTypes,ec=el?el.createPolicy("lit-html",{createHTML:t=>t}):void 0,eu="$lit$",ed=`lit$${(Math.random()+"").slice(9)}$`,eh="?"+ed,ef=`<${eh}>`,ep=document,lit_html_l=()=>ep.createComment(""),lit_html_c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,eg=Array.isArray,lit_html_u=t=>eg(t)||"function"==typeof t?.[Symbol.iterator],em="[ 	\n\f\r]",eb=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ew=/-->/g,ey=/>/g,ev=RegExp(`>|${em}(?:([^\\s"'>=/]+)(${em}*=${em}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),eC=/'/g,e_=/"/g,ex=/^(?:script|style|textarea|title)$/i,lit_html_y=t=>(s,...p)=>({_$litType$:t,strings:s,values:p}),eE=lit_html_y(1),ek=lit_html_y(2),eS=Symbol.for("lit-noChange"),eP=Symbol.for("lit-nothing"),eA=new WeakMap,e$=ep.createTreeWalker(ep,129);function C(t,s){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ec?ec.createHTML(s):s}let P=(t,s)=>{let p=t.length-1,g=[],m,v=2===s?"<svg>":"",_=eb;for(let s=0;s<p;s++){let p=t[s],x,T,F=-1,W=0;for(;W<p.length&&(_.lastIndex=W,null!==(T=_.exec(p)));)W=_.lastIndex,_===eb?"!--"===T[1]?_=ew:void 0!==T[1]?_=ey:void 0!==T[2]?(ex.test(T[2])&&(m=RegExp("</"+T[2],"g")),_=ev):void 0!==T[3]&&(_=ev):_===ev?">"===T[0]?(_=m??eb,F=-1):void 0===T[1]?F=-2:(F=_.lastIndex-T[2].length,x=T[1],_=void 0===T[3]?ev:'"'===T[3]?e_:eC):_===e_||_===eC?_=ev:_===ew||_===ey?_=eb:(_=ev,m=void 0);let Z=_===ev&&t[s+1].startsWith("/>")?" ":"";v+=_===eb?p+ef:F>=0?(g.push(x),p.slice(0,F)+eu+p.slice(F)+ed+Z):p+ed+(-2===F?s:Z)}return[C(t,v+(t[p]||"<?>")+(2===s?"</svg>":"")),g]};let V=class V{constructor({strings:t,_$litType$:s},p){let g;this.parts=[];let m=0,v=0,_=t.length-1,x=this.parts,[T,F]=P(t,s);if(this.el=V.createElement(T,p),e$.currentNode=this.el.content,2===s){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(g=e$.nextNode())&&x.length<_;){if(1===g.nodeType){if(g.hasAttributes())for(let t of g.getAttributeNames())if(t.endsWith(eu)){let s=F[v++],p=g.getAttribute(t).split(ed),_=/([.?@])?(.*)/.exec(s);x.push({type:1,index:m,name:_[2],strings:p,ctor:"."===_[1]?k:"?"===_[1]?H:"@"===_[1]?I:R}),g.removeAttribute(t)}else t.startsWith(ed)&&(x.push({type:6,index:m}),g.removeAttribute(t));if(ex.test(g.tagName)){let t=g.textContent.split(ed),s=t.length-1;if(s>0){g.textContent=el?el.emptyScript:"";for(let p=0;p<s;p++)g.append(t[p],lit_html_l()),e$.nextNode(),x.push({type:2,index:++m});g.append(t[s],lit_html_l())}}}else if(8===g.nodeType){if(g.data===eh)x.push({type:2,index:m});else{let t=-1;for(;-1!==(t=g.data.indexOf(ed,t+1));)x.push({type:7,index:m}),t+=ed.length-1}}m++}}static createElement(t,s){let p=ep.createElement("template");return p.innerHTML=t,p}};function N(t,s,p=t,g){if(s===eS)return s;let m=void 0!==g?p._$Co?.[g]:p._$Cl,v=lit_html_c(s)?void 0:s._$litDirective$;return m?.constructor!==v&&(m?._$AO?.(!1),void 0===v?m=void 0:(m=new v(t))._$AT(t,p,g),void 0!==g?(p._$Co??=[])[g]=m:p._$Cl=m),void 0!==m&&(s=N(t,m._$AS(t,s.values),m,g)),s}let lit_html_S=class lit_html_S{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:s},parts:p}=this._$AD,g=(t?.creationScope??ep).importNode(s,!0);e$.currentNode=g;let m=e$.nextNode(),v=0,_=0,x=p[0];for(;void 0!==x;){if(v===x.index){let s;2===x.type?s=new M(m,m.nextSibling,this,t):1===x.type?s=new x.ctor(m,x.name,x.strings,this,t):6===x.type&&(s=new L(m,this,t)),this._$AV.push(s),x=p[++_]}v!==x?.index&&(m=e$.nextNode(),v++)}return e$.currentNode=ep,g}p(t){let s=0;for(let p of this._$AV)void 0!==p&&(void 0!==p.strings?(p._$AI(t,p,s),s+=p.strings.length-2):p._$AI(t[s])),s++}};let M=class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,p,g){this.type=2,this._$AH=eP,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=p,this.options=g,this._$Cv=g?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,s=this._$AM;return void 0!==s&&11===t?.nodeType&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){lit_html_c(t=N(this,t,s))?t===eP||null==t||""===t?(this._$AH!==eP&&this._$AR(),this._$AH=eP):t!==this._$AH&&t!==eS&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):lit_html_u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==eP&&lit_html_c(this._$AH)?this._$AA.nextSibling.data=t:this.$(ep.createTextNode(t)),this._$AH=t}g(t){let{values:s,_$litType$:p}=t,g="number"==typeof p?this._$AC(t):(void 0===p.el&&(p.el=V.createElement(C(p.h,p.h[0]),this.options)),p);if(this._$AH?._$AD===g)this._$AH.p(s);else{let t=new lit_html_S(g,this),p=t.u(this.options);t.p(s),this.$(p),this._$AH=t}}_$AC(t){let s=eA.get(t.strings);return void 0===s&&eA.set(t.strings,s=new V(t)),s}T(t){eg(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,p,g=0;for(let m of t)g===s.length?s.push(p=new M(this.k(lit_html_l()),this.k(lit_html_l()),this,this.options)):p=s[g],p._$AI(m),g++;g<s.length&&(this._$AR(p&&p._$AB.nextSibling,g),s.length=g)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}};let R=class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,p,g,m){this.type=1,this._$AH=eP,this._$AN=void 0,this.element=t,this.name=s,this._$AM=g,this.options=m,p.length>2||""!==p[0]||""!==p[1]?(this._$AH=Array(p.length-1).fill(new String),this.strings=p):this._$AH=eP}_$AI(t,s=this,p,g){let m=this.strings,v=!1;if(void 0===m)(v=!lit_html_c(t=N(this,t,s,0))||t!==this._$AH&&t!==eS)&&(this._$AH=t);else{let g,_;let x=t;for(t=m[0],g=0;g<m.length-1;g++)(_=N(this,x[p+g],s,g))===eS&&(_=this._$AH[g]),v||=!lit_html_c(_)||_!==this._$AH[g],_===eP?t=eP:t!==eP&&(t+=(_??"")+m[g+1]),this._$AH[g]=_}v&&!g&&this.j(t)}j(t){t===eP?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};let k=class k extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===eP?void 0:t}};let H=class H extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==eP)}};let I=class I extends R{constructor(t,s,p,g,m){super(t,s,p,g,m),this.type=5}_$AI(t,s=this){if((t=N(this,t,s,0)??eP)===eS)return;let p=this._$AH,g=t===eP&&p!==eP||t.capture!==p.capture||t.once!==p.once||t.passive!==p.passive,m=t!==eP&&(p===eP||g);g&&this.element.removeEventListener(this.name,this,p),m&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}};let L=class L{constructor(t,s,p){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=p}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}};let eO=es.litHtmlPolyfillSupport;eO?.(V,M),(es.litHtmlVersions??=[]).push("3.0.0");let j=(t,s,p)=>{let g=p?.renderBefore??s,m=g._$litPart$;if(void 0===m){let t=p?.renderBefore??null;g._$litPart$=m=new M(s.insertBefore(lit_html_l(),t),t,void 0,p??{})}return m._$AI(t),m};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let lit_element_s=class lit_element_s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return eS}};lit_element_s._$litElement$=!0,lit_element_s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_s});let eD=globalThis.litElementPolyfillSupport;eD?.({LitElement:lit_element_s}),(globalThis.litElementVersions??=[]).push("4.0.0")},97286:function(t,s,p){"use strict";p.d(s,{Ts:function(){return eo},Qu:function(){return f}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let g=globalThis,m=g.ShadowRoot&&(void 0===g.ShadyCSS||g.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,v=Symbol(),_=new WeakMap;let n=class n{constructor(t,s,p){if(this._$cssResult$=!0,p!==v)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o,s=this.t;if(m&&void 0===t){let p=void 0!==s&&1===s.length;p&&(t=_.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),p&&_.set(s,t))}return t}toString(){return this.cssText}};let r=t=>new n("string"==typeof t?t:t+"",void 0,v),S=(t,s)=>{if(m)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let p of s){let s=document.createElement("style"),m=g.litNonce;void 0!==m&&s.setAttribute("nonce",m),s.textContent=p.cssText,t.appendChild(s)}},x=m?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(let p of t.cssRules)s+=p.cssText;return r(s)})(t):t,{is:T,defineProperty:F,getOwnPropertyDescriptor:W,getOwnPropertyNames:Z,getOwnPropertySymbols:Q,getPrototypeOf:Y}=Object,X=globalThis,J=X.trustedTypes,en=J?J.emptyScript:"",ei=X.reactiveElementPolyfillSupport,d=(t,s)=>t,eo={toAttribute(t,s){switch(s){case Boolean:t=t?en:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){let p=t;switch(s){case Boolean:p=null!==t;break;case Number:p=null===t?null:Number(t);break;case Object:case Array:try{p=JSON.parse(t)}catch(t){p=null}}return p}},f=(t,s)=>!T(t,s),ea={attribute:!0,type:String,converter:eo,reflect:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),X.litPropertyMetadata??=new WeakMap;let b=class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=ea){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){let p=Symbol(),g=this.getPropertyDescriptor(t,p,s);void 0!==g&&F(this.prototype,t,g)}}static getPropertyDescriptor(t,s,p){let{get:g,set:m}=W(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t}};return{get(){return g?.call(this)},set(s){let v=g?.call(this);m.call(this,s),this.requestUpdate(t,v,p)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ea}static _$Ei(){if(this.hasOwnProperty(d("elementProperties")))return;let t=Y(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(d("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d("properties"))){let t=this.properties,s=[...Z(t),...Q(t)];for(let p of s)this.createProperty(p,t[p])}let t=this[Symbol.metadata];if(null!==t){let s=litPropertyMetadata.get(t);if(void 0!==s)for(let[t,p]of s)this.elementProperties.set(t,p)}for(let[t,s]of(this._$Eh=new Map,this.elementProperties)){let p=this._$Eu(t,s);void 0!==p&&this._$Eh.set(p,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let s=[];if(Array.isArray(t)){let p=new Set(t.flat(1/0).reverse());for(let t of p)s.unshift(x(t))}else void 0!==t&&s.push(x(t));return s}static _$Eu(t,s){let p=s.attribute;return!1===p?void 0:"string"==typeof p?p:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){let t=new Map,s=this.constructor.elementProperties;for(let p of s.keys())this.hasOwnProperty(p)&&(t.set(p,this[p]),delete this[p]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,s,p){this._$AK(t,p)}_$EO(t,s){let p=this.constructor.elementProperties.get(t),g=this.constructor._$Eu(t,p);if(void 0!==g&&!0===p.reflect){let m=(void 0!==p.converter?.toAttribute?p.converter:eo).toAttribute(s,p.type);this._$Em=t,null==m?this.removeAttribute(g):this.setAttribute(g,m),this._$Em=null}}_$AK(t,s){let p=this.constructor,g=p._$Eh.get(t);if(void 0!==g&&this._$Em!==g){let t=p.getPropertyOptions(g),m="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:eo;this._$Em=g,this[g]=m.fromAttribute(s,t.type),this._$Em=null}}requestUpdate(t,s,p,g=!1,m){if(void 0!==t){if(!((p??=this.constructor.getPropertyOptions(t)).hasChanged??f)(g?m:this[t],s))return;this.C(t,s,p)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,s,p){this._$AL.has(t)||this._$AL.set(t,s),!0===p.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[s,p]of t)!0!==p.wrapped||this._$AL.has(s)||void 0===this[s]||this.C(s,this[s],p)}let t=!1,s=this._$AL;try{(t=this.shouldUpdate(s))?(this.willUpdate(s),this._$ES?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$ET()}catch(s){throw t=!1,this._$ET(),s}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$ES?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(t=>this._$EO(t,this[t])),this._$ET()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d("elementProperties")]=new Map,b[d("finalized")]=new Map,ei?.({ReactiveElement:b}),(X.reactiveElementVersions??=[]).push("2.0.0")},69699:function(t,s,p){"use strict";p.d(s,{Jb:function(){return es},Ld:function(){return el},_$LH:function(){return ed}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let g=globalThis,m=g.trustedTypes,v=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,_="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,T="?"+x,F=`<${T}>`,W=document,l=()=>W.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Z=Array.isArray,u=t=>Z(t)||"function"==typeof t?.[Symbol.iterator],Q="[ 	\n\f\r]",Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,J=/>/g,en=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ei=/'/g,eo=/"/g,ea=/^(?:script|style|textarea|title)$/i,y=t=>(s,...p)=>({_$litType$:t,strings:s,values:p}),es=(y(1),y(2),Symbol.for("lit-noChange")),el=Symbol.for("lit-nothing"),ec=new WeakMap,eu=W.createTreeWalker(W,129);function C(t,s){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==v?v.createHTML(s):s}let P=(t,s)=>{let p=t.length-1,g=[],m,v=2===s?"<svg>":"",T=Y;for(let s=0;s<p;s++){let p=t[s],W,Z,Q=-1,es=0;for(;es<p.length&&(T.lastIndex=es,null!==(Z=T.exec(p)));)es=T.lastIndex,T===Y?"!--"===Z[1]?T=X:void 0!==Z[1]?T=J:void 0!==Z[2]?(ea.test(Z[2])&&(m=RegExp("</"+Z[2],"g")),T=en):void 0!==Z[3]&&(T=en):T===en?">"===Z[0]?(T=m??Y,Q=-1):void 0===Z[1]?Q=-2:(Q=T.lastIndex-Z[2].length,W=Z[1],T=void 0===Z[3]?en:'"'===Z[3]?eo:ei):T===eo||T===ei?T=en:T===X||T===J?T=Y:(T=en,m=void 0);let el=T===en&&t[s+1].startsWith("/>")?" ":"";v+=T===Y?p+F:Q>=0?(g.push(W),p.slice(0,Q)+_+p.slice(Q)+x+el):p+x+(-2===Q?s:el)}return[C(t,v+(t[p]||"<?>")+(2===s?"</svg>":"")),g]};let V=class V{constructor({strings:t,_$litType$:s},p){let g;this.parts=[];let v=0,F=0,W=t.length-1,Z=this.parts,[Q,Y]=P(t,s);if(this.el=V.createElement(Q,p),eu.currentNode=this.el.content,2===s){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(g=eu.nextNode())&&Z.length<W;){if(1===g.nodeType){if(g.hasAttributes())for(let t of g.getAttributeNames())if(t.endsWith(_)){let s=Y[F++],p=g.getAttribute(t).split(x),m=/([.?@])?(.*)/.exec(s);Z.push({type:1,index:v,name:m[2],strings:p,ctor:"."===m[1]?k:"?"===m[1]?H:"@"===m[1]?I:R}),g.removeAttribute(t)}else t.startsWith(x)&&(Z.push({type:6,index:v}),g.removeAttribute(t));if(ea.test(g.tagName)){let t=g.textContent.split(x),s=t.length-1;if(s>0){g.textContent=m?m.emptyScript:"";for(let p=0;p<s;p++)g.append(t[p],l()),eu.nextNode(),Z.push({type:2,index:++v});g.append(t[s],l())}}}else if(8===g.nodeType){if(g.data===T)Z.push({type:2,index:v});else{let t=-1;for(;-1!==(t=g.data.indexOf(x,t+1));)Z.push({type:7,index:v}),t+=x.length-1}}v++}}static createElement(t,s){let p=W.createElement("template");return p.innerHTML=t,p}};function N(t,s,p=t,g){if(s===es)return s;let m=void 0!==g?p._$Co?.[g]:p._$Cl,v=c(s)?void 0:s._$litDirective$;return m?.constructor!==v&&(m?._$AO?.(!1),void 0===v?m=void 0:(m=new v(t))._$AT(t,p,g),void 0!==g?(p._$Co??=[])[g]=m:p._$Cl=m),void 0!==m&&(s=N(t,m._$AS(t,s.values),m,g)),s}let S=class S{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:s},parts:p}=this._$AD,g=(t?.creationScope??W).importNode(s,!0);eu.currentNode=g;let m=eu.nextNode(),v=0,_=0,x=p[0];for(;void 0!==x;){if(v===x.index){let s;2===x.type?s=new M(m,m.nextSibling,this,t):1===x.type?s=new x.ctor(m,x.name,x.strings,this,t):6===x.type&&(s=new L(m,this,t)),this._$AV.push(s),x=p[++_]}v!==x?.index&&(m=eu.nextNode(),v++)}return eu.currentNode=W,g}p(t){let s=0;for(let p of this._$AV)void 0!==p&&(void 0!==p.strings?(p._$AI(t,p,s),s+=p.strings.length-2):p._$AI(t[s])),s++}};let M=class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,p,g){this.type=2,this._$AH=el,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=p,this.options=g,this._$Cv=g?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,s=this._$AM;return void 0!==s&&11===t?.nodeType&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){c(t=N(this,t,s))?t===el||null==t||""===t?(this._$AH!==el&&this._$AR(),this._$AH=el):t!==this._$AH&&t!==es&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==el&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(W.createTextNode(t)),this._$AH=t}g(t){let{values:s,_$litType$:p}=t,g="number"==typeof p?this._$AC(t):(void 0===p.el&&(p.el=V.createElement(C(p.h,p.h[0]),this.options)),p);if(this._$AH?._$AD===g)this._$AH.p(s);else{let t=new S(g,this),p=t.u(this.options);t.p(s),this.$(p),this._$AH=t}}_$AC(t){let s=ec.get(t.strings);return void 0===s&&ec.set(t.strings,s=new V(t)),s}T(t){Z(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,p,g=0;for(let m of t)g===s.length?s.push(p=new M(this.k(l()),this.k(l()),this,this.options)):p=s[g],p._$AI(m),g++;g<s.length&&(this._$AR(p&&p._$AB.nextSibling,g),s.length=g)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}};let R=class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,p,g,m){this.type=1,this._$AH=el,this._$AN=void 0,this.element=t,this.name=s,this._$AM=g,this.options=m,p.length>2||""!==p[0]||""!==p[1]?(this._$AH=Array(p.length-1).fill(new String),this.strings=p):this._$AH=el}_$AI(t,s=this,p,g){let m=this.strings,v=!1;if(void 0===m)(v=!c(t=N(this,t,s,0))||t!==this._$AH&&t!==es)&&(this._$AH=t);else{let g,_;let x=t;for(t=m[0],g=0;g<m.length-1;g++)(_=N(this,x[p+g],s,g))===es&&(_=this._$AH[g]),v||=!c(_)||_!==this._$AH[g],_===el?t=el:t!==el&&(t+=(_??"")+m[g+1]),this._$AH[g]=_}v&&!g&&this.j(t)}j(t){t===el?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};let k=class k extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===el?void 0:t}};let H=class H extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==el)}};let I=class I extends R{constructor(t,s,p,g,m){super(t,s,p,g,m),this.type=5}_$AI(t,s=this){if((t=N(this,t,s,0)??el)===es)return;let p=this._$AH,g=t===el&&p!==el||t.capture!==p.capture||t.once!==p.once||t.passive!==p.passive,m=t!==el&&(p===el||g);g&&this.element.removeEventListener(this.name,this,p),m&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}};let L=class L{constructor(t,s,p){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=p}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}};let ed={S:_,A:x,P:T,C:1,M:P,L:S,R:u,V:N,D:M,I:R,H,N:I,U:k,B:L},eh=g.litHtmlPolyfillSupport;eh?.(V,M),(g.litHtmlVersions??=[]).push("3.0.0")},53160:function(t,s,p){"use strict";p.d(s,{E:function(){return allocUnsafe}});var g=p(16867);function allocUnsafe(t=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?(0,g.P)(globalThis.Buffer.allocUnsafe(t)):new Uint8Array(t)}},20605:function(t,s,p){"use strict";p.d(s,{z:function(){return concat}});var g=p(53160),m=p(16867);function concat(t,s){s||(s=t.reduce((t,s)=>t+s.length,0));let p=(0,g.E)(s),v=0;for(let s of t)p.set(s,v),v+=s.length;return(0,m.P)(p)}},52217:function(t,s,p){"use strict";p.d(s,{m:function(){return fromString}});var g=p(73149),m=p(16867);function fromString(t,s="utf8"){let p=g.Z[s];if(!p)throw Error(`Unsupported encoding "${s}"`);return("utf8"===s||"utf-8"===s)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?(0,m.P)(globalThis.Buffer.from(t,"utf-8")):p.decoder.decode(`${p.prefix}${t}`)}},37466:function(t,s,p){"use strict";p.d(s,{BB:function(){return v.B},mL:function(){return m.m},zo:function(){return g.z}});var g=p(20605),m=p(52217),v=p(92263)},92263:function(t,s,p){"use strict";p.d(s,{B:function(){return toString}});var g=p(73149);function toString(t,s="utf8"){let p=g.Z[s];if(!p)throw Error(`Unsupported encoding "${s}"`);return("utf8"===s||"utf-8"===s)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?globalThis.Buffer.from(t.buffer,t.byteOffset,t.byteLength).toString("utf8"):p.encoder.encode(t).substring(1)}},16867:function(t,s,p){"use strict";function asUint8Array(t){return null!=globalThis.Buffer?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t}p.d(s,{P:function(){return asUint8Array}})},73149:function(t,s,p){"use strict";p.d(s,{Z:function(){return eX}});var g={};p.r(g),p.d(g,{identity:function(){return ei}});var m={};p.r(m),p.d(m,{base2:function(){return eo}});var v={};p.r(v),p.d(v,{base8:function(){return ea}});var _={};p.r(_),p.d(_,{base10:function(){return es}});var x={};p.r(x),p.d(x,{base16:function(){return el},base16upper:function(){return ec}});var T={};p.r(T),p.d(T,{base32:function(){return eu},base32hex:function(){return ep},base32hexpad:function(){return em},base32hexpadupper:function(){return eb},base32hexupper:function(){return eg},base32pad:function(){return eh},base32padupper:function(){return ef},base32upper:function(){return ed},base32z:function(){return ew}});var F={};p.r(F),p.d(F,{base36:function(){return ey},base36upper:function(){return ev}});var W={};p.r(W),p.d(W,{base58btc:function(){return eC},base58flickr:function(){return e_}});var Z={};p.r(Z),p.d(Z,{base64:function(){return ex},base64pad:function(){return eE},base64url:function(){return ek},base64urlpad:function(){return eS}});var Q={};p.r(Q),p.d(Q,{base256emoji:function(){return eO}});var Y={};p.r(Y),p.d(Y,{sha256:function(){return eT},sha512:function(){return eI}});var X={};p.r(X),p.d(X,{identity:function(){return eR}});var J={};p.r(J),p.d(J,{code:function(){return eN},decode:function(){return raw_decode},encode:function(){return raw_encode},name:function(){return eB}});var en={};p.r(en),p.d(en,{code:function(){return eL},decode:function(){return json_decode},encode:function(){return json_encode},name:function(){return ej}});var base_x=function(t,s){if(t.length>=255)throw TypeError("Alphabet too long");for(var p=new Uint8Array(256),g=0;g<p.length;g++)p[g]=255;for(var m=0;m<t.length;m++){var v=t.charAt(m),_=v.charCodeAt(0);if(255!==p[_])throw TypeError(v+" is ambiguous");p[_]=m}var x=t.length,T=t.charAt(0),F=Math.log(x)/Math.log(256),W=Math.log(256)/Math.log(x);function decodeUnsafe(t){if("string"!=typeof t)throw TypeError("Expected String");if(0===t.length)return new Uint8Array;var s=0;if(" "!==t[0]){for(var g=0,m=0;t[s]===T;)g++,s++;for(var v=(t.length-s)*F+1>>>0,_=new Uint8Array(v);t[s];){var W=p[t.charCodeAt(s)];if(255===W)return;for(var Z=0,Q=v-1;(0!==W||Z<m)&&-1!==Q;Q--,Z++)W+=x*_[Q]>>>0,_[Q]=W%256>>>0,W=W/256>>>0;if(0!==W)throw Error("Non-zero carry");m=Z,s++}if(" "!==t[s]){for(var Y=v-m;Y!==v&&0===_[Y];)Y++;for(var X=new Uint8Array(g+(v-Y)),J=g;Y!==v;)X[J++]=_[Y++];return X}}}return{encode:function(s){if(s instanceof Uint8Array||(ArrayBuffer.isView(s)?s=new Uint8Array(s.buffer,s.byteOffset,s.byteLength):Array.isArray(s)&&(s=Uint8Array.from(s))),!(s instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(0===s.length)return"";for(var p=0,g=0,m=0,v=s.length;m!==v&&0===s[m];)m++,p++;for(var _=(v-m)*W+1>>>0,F=new Uint8Array(_);m!==v;){for(var Z=s[m],Q=0,Y=_-1;(0!==Z||Q<g)&&-1!==Y;Y--,Q++)Z+=256*F[Y]>>>0,F[Y]=Z%x>>>0,Z=Z/x>>>0;if(0!==Z)throw Error("Non-zero carry");g=Q,m++}for(var X=_-g;X!==_&&0===F[X];)X++;for(var J=T.repeat(p);X<_;++X)J+=t.charAt(F[X]);return J},decodeUnsafe:decodeUnsafe,decode:function(t){var p=decodeUnsafe(t);if(p)return p;throw Error(`Non-${s} character`)}}};new Uint8Array(0);let equals=(t,s)=>{if(t===s)return!0;if(t.byteLength!==s.byteLength)return!1;for(let p=0;p<t.byteLength;p++)if(t[p]!==s[p])return!1;return!0},coerce=t=>{if(t instanceof Uint8Array&&"Uint8Array"===t.constructor.name)return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw Error("Unknown type, must be binary type")},fromString=t=>new TextEncoder().encode(t),bytes_toString=t=>new TextDecoder().decode(t);let Encoder=class Encoder{constructor(t,s,p){this.name=t,this.prefix=s,this.baseEncode=p}encode(t){if(t instanceof Uint8Array)return`${this.prefix}${this.baseEncode(t)}`;throw Error("Unknown type, must be binary type")}};let Decoder=class Decoder{constructor(t,s,p){if(this.name=t,this.prefix=s,void 0===s.codePointAt(0))throw Error("Invalid prefix character");this.prefixCodePoint=s.codePointAt(0),this.baseDecode=p}decode(t){if("string"==typeof t){if(t.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(t.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(t){return or(this,t)}};let ComposedDecoder=class ComposedDecoder{constructor(t){this.decoders=t}or(t){return or(this,t)}decode(t){let s=t[0],p=this.decoders[s];if(p)return p.decode(t);throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}};let or=(t,s)=>new ComposedDecoder({...t.decoders||{[t.prefix]:t},...s.decoders||{[s.prefix]:s}});let Codec=class Codec{constructor(t,s,p,g){this.name=t,this.prefix=s,this.baseEncode=p,this.baseDecode=g,this.encoder=new Encoder(t,s,p),this.decoder=new Decoder(t,s,g)}encode(t){return this.encoder.encode(t)}decode(t){return this.decoder.decode(t)}};let from=({name:t,prefix:s,encode:p,decode:g})=>new Codec(t,s,p,g),baseX=({prefix:t,name:s,alphabet:p})=>{let{encode:g,decode:m}=base_x(p,s);return from({prefix:t,name:s,encode:g,decode:t=>coerce(m(t))})},decode=(t,s,p,g)=>{let m={};for(let t=0;t<s.length;++t)m[s[t]]=t;let v=t.length;for(;"="===t[v-1];)--v;let _=new Uint8Array(v*p/8|0),x=0,T=0,F=0;for(let s=0;s<v;++s){let v=m[t[s]];if(void 0===v)throw SyntaxError(`Non-${g} character`);T=T<<p|v,(x+=p)>=8&&(x-=8,_[F++]=255&T>>x)}if(x>=p||255&T<<8-x)throw SyntaxError("Unexpected end of data");return _},encode=(t,s,p)=>{let g="="===s[s.length-1],m=(1<<p)-1,v="",_=0,x=0;for(let g=0;g<t.length;++g)for(x=x<<8|t[g],_+=8;_>p;)_-=p,v+=s[m&x>>_];if(_&&(v+=s[m&x<<p-_]),g)for(;v.length*p&7;)v+="=";return v},rfc4648=({name:t,prefix:s,bitsPerChar:p,alphabet:g})=>from({prefix:s,name:t,encode:t=>encode(t,g,p),decode:s=>decode(s,g,p,t)}),ei=from({prefix:"\x00",name:"identity",encode:t=>bytes_toString(t),decode:t=>fromString(t)}),eo=rfc4648({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),ea=rfc4648({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),es=baseX({prefix:"9",name:"base10",alphabet:"0123456789"}),el=rfc4648({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),ec=rfc4648({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),eu=rfc4648({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),ed=rfc4648({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),eh=rfc4648({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),ef=rfc4648({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),ep=rfc4648({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),eg=rfc4648({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),em=rfc4648({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),eb=rfc4648({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),ew=rfc4648({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),ey=baseX({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),ev=baseX({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),eC=baseX({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),e_=baseX({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),ex=rfc4648({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),eE=rfc4648({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),ek=rfc4648({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),eS=rfc4648({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),eP=Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),eA=eP.reduce((t,s,p)=>(t[p]=s,t),[]),e$=eP.reduce((t,s,p)=>(t[s.codePointAt(0)]=p,t),[]),eO=from({prefix:"\uD83D\uDE80",name:"base256emoji",encode:function(t){return t.reduce((t,s)=>t+=eA[s],"")},decode:function(t){let s=[];for(let p of t){let t=e$[p.codePointAt(0)];if(void 0===t)throw Error(`Non-base256emoji character: ${p}`);s.push(t)}return new Uint8Array(s)}});function varint_encode(t,s,p){s=s||[];for(var g=p=p||0;t>=2147483648;)s[p++]=255&t|128,t/=128;for(;-128&t;)s[p++]=255&t|128,t>>>=7;return s[p]=0|t,varint_encode.bytes=p-g+1,s}function read(t,s){var p,g=0,s=s||0,m=0,v=s,_=t.length;do{if(v>=_)throw read.bytes=0,RangeError("Could not decode varint");p=t[v++],g+=m<28?(127&p)<<m:(127&p)*Math.pow(2,m),m+=7}while(p>=128);return read.bytes=v-s,g}var eD={encode:varint_encode,decode:read,encodingLength:function(t){return t<128?1:t<16384?2:t<2097152?3:t<268435456?4:t<34359738368?5:t<4398046511104?6:t<562949953421312?7:t<72057594037927940?8:t<0x7fffffffffffffff?9:10}};let src_varint_decode=(t,s=0)=>{let p=eD.decode(t,s);return[p,eD.decode.bytes]},encodeTo=(t,s,p=0)=>(eD.encode(t,s,p),s),encodingLength=t=>eD.encodingLength(t),create=(t,s)=>{let p=s.byteLength,g=encodingLength(t),m=g+encodingLength(p),v=new Uint8Array(m+p);return encodeTo(t,v,0),encodeTo(p,v,g),v.set(s,m),new Digest(t,p,s,v)},digest_decode=t=>{let s=coerce(t),[p,g]=src_varint_decode(s),[m,v]=src_varint_decode(s.subarray(g)),_=s.subarray(g+v);if(_.byteLength!==m)throw Error("Incorrect length");return new Digest(p,m,_,s)},digest_equals=(t,s)=>t===s||t.code===s.code&&t.size===s.size&&equals(t.bytes,s.bytes);let Digest=class Digest{constructor(t,s,p,g){this.code=t,this.size=s,this.digest=p,this.bytes=g}};let hasher_from=({name:t,code:s,encode:p})=>new Hasher(t,s,p);let Hasher=class Hasher{constructor(t,s,p){this.name=t,this.code=s,this.encode=p}digest(t){if(t instanceof Uint8Array){let s=this.encode(t);return s instanceof Uint8Array?create(this.code,s):s.then(t=>create(this.code,t))}throw Error("Unknown type, must be binary type")}};let sha=t=>async s=>new Uint8Array(await crypto.subtle.digest(t,s)),eT=hasher_from({name:"sha2-256",code:18,encode:sha("SHA-256")}),eI=hasher_from({name:"sha2-512",code:19,encode:sha("SHA-512")}),eR={code:0,name:"identity",encode:coerce,digest:t=>create(0,coerce(t))},eB="raw",eN=85,raw_encode=t=>coerce(t),raw_decode=t=>coerce(t),eU=new TextEncoder,eM=new TextDecoder,ej="json",eL=512,json_encode=t=>eU.encode(JSON.stringify(t)),json_decode=t=>JSON.parse(eM.decode(t));let CID=class CID{constructor(t,s,p,g){this.code=s,this.version=t,this.multihash=p,this.bytes=g,this.byteOffset=g.byteOffset,this.byteLength=g.byteLength,this.asCID=this,this._baseCache=new Map,Object.defineProperties(this,{byteOffset:eq,byteLength:eq,code:eH,version:eH,multihash:eH,bytes:eH,_baseCache:eq,asCID:eq})}toV0(){if(0===this.version)return this;{let{code:t,multihash:s}=this;if(t!==eF)throw Error("Cannot convert a non dag-pb CID to CIDv0");if(s.code!==ez)throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");return CID.createV0(s)}}toV1(){switch(this.version){case 0:{let{code:t,digest:s}=this.multihash,p=create(t,s);return CID.createV1(this.code,p)}case 1:return this;default:throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)}}equals(t){return t&&this.code===t.code&&this.version===t.version&&digest_equals(this.multihash,t.multihash)}toString(t){let{bytes:s,version:p,_baseCache:g}=this;return 0===p?toStringV0(s,g,t||eC.encoder):toStringV1(s,g,t||eu.encoder)}toJSON(){return{code:this.code,version:this.version,hash:this.multihash.bytes}}get[Symbol.toStringTag](){return"CID"}[Symbol.for("nodejs.util.inspect.custom")](){return"CID("+this.toString()+")"}static isCID(t){return deprecate(/^0\.0/,eG),!!(t&&(t[eW]||t.asCID===t))}get toBaseEncodedString(){throw Error("Deprecated, use .toString()")}get codec(){throw Error('"codec" property is deprecated, use integer "code" property instead')}get buffer(){throw Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")}get multibaseName(){throw Error('"multibaseName" property is deprecated')}get prefix(){throw Error('"prefix" property is deprecated')}static asCID(t){if(t instanceof CID)return t;if(null!=t&&t.asCID===t){let{version:s,code:p,multihash:g,bytes:m}=t;return new CID(s,p,g,m||encodeCID(s,p,g.bytes))}if(null==t||!0!==t[eW])return null;{let{version:s,multihash:p,code:g}=t,m=digest_decode(p);return CID.create(s,g,m)}}static create(t,s,p){if("number"!=typeof s)throw Error("String codecs are no longer supported");switch(t){case 0:if(s===eF)return new CID(t,s,p,p.bytes);throw Error(`Version 0 CID must use dag-pb (code: ${eF}) block encoding`);case 1:{let g=encodeCID(t,s,p.bytes);return new CID(t,s,p,g)}default:throw Error("Invalid version")}}static createV0(t){return CID.create(0,eF,t)}static createV1(t,s){return CID.create(1,t,s)}static decode(t){let[s,p]=CID.decodeFirst(t);if(p.length)throw Error("Incorrect length");return s}static decodeFirst(t){let s=CID.inspectBytes(t),p=s.size-s.multihashSize,g=coerce(t.subarray(p,p+s.multihashSize));if(g.byteLength!==s.multihashSize)throw Error("Incorrect length");let m=g.subarray(s.multihashSize-s.digestSize),v=new Digest(s.multihashCode,s.digestSize,m,g),_=0===s.version?CID.createV0(v):CID.createV1(s.codec,v);return[_,t.subarray(s.size)]}static inspectBytes(t){let s=0,next=()=>{let[p,g]=src_varint_decode(t.subarray(s));return s+=g,p},p=next(),g=eF;if(18===p?(p=0,s=0):1===p&&(g=next()),0!==p&&1!==p)throw RangeError(`Invalid CID version ${p}`);let m=s,v=next(),_=next(),x=s+_;return{version:p,codec:g,multihashCode:v,digestSize:_,multihashSize:x-m,size:x}}static parse(t,s){let[p,g]=parseCIDtoBytes(t,s),m=CID.decode(g);return m._baseCache.set(p,t),m}};let parseCIDtoBytes=(t,s)=>{switch(t[0]){case"Q":return[eC.prefix,(s||eC).decode(`${eC.prefix}${t}`)];case eC.prefix:return[eC.prefix,(s||eC).decode(t)];case eu.prefix:return[eu.prefix,(s||eu).decode(t)];default:if(null==s)throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");return[t[0],s.decode(t)]}},toStringV0=(t,s,p)=>{let{prefix:g}=p;if(g!==eC.prefix)throw Error(`Cannot string encode V0 in ${p.name} encoding`);let m=s.get(g);if(null!=m)return m;{let m=p.encode(t).slice(1);return s.set(g,m),m}},toStringV1=(t,s,p)=>{let{prefix:g}=p,m=s.get(g);if(null!=m)return m;{let m=p.encode(t);return s.set(g,m),m}},eF=112,ez=18,encodeCID=(t,s,p)=>{let g=encodingLength(t),m=g+encodingLength(s),v=new Uint8Array(m+p.byteLength);return encodeTo(t,v,0),encodeTo(s,v,g),v.set(p,m),v},eW=Symbol.for("@ipld/js-cid/CID"),eH={writable:!1,configurable:!1,enumerable:!0},eq={writable:!1,enumerable:!1,configurable:!1},deprecate=(t,s)=>{if(t.test("0.0.0-dev"))console.warn(s);else throw Error(s)},eG=`CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`,eZ={...g,...m,...v,..._,...x,...T,...F,...W,...Z,...Q};({...Y,...X});var eK=p(53160);function createCodec(t,s,p,g){return{name:t,prefix:s,encoder:{name:t,prefix:s,encode:p},decoder:{decode:g}}}let eV=createCodec("utf8","u",t=>{let s=new TextDecoder("utf8");return"u"+s.decode(t)},t=>{let s=new TextEncoder;return s.encode(t.substring(1))}),eQ=createCodec("ascii","a",t=>{let s="a";for(let p=0;p<t.length;p++)s+=String.fromCharCode(t[p]);return s},t=>{t=t.substring(1);let s=(0,eK.E)(t.length);for(let p=0;p<t.length;p++)s[p]=t.charCodeAt(p);return s}),eY={utf8:eV,"utf-8":eV,hex:eZ.base16,latin1:eQ,ascii:eQ,binary:eQ,...eZ};var eX=eY},17832:function(t,s,p){"use strict";p.d(s,{sj:function(){return proxy},iH:function(){return ref},CO:function(){return snapshot},Ld:function(){return subscribe}}),Symbol();let g=Symbol(),m=Object.getPrototypeOf,v=new WeakMap,l=t=>t&&(v.has(t)?v.get(t):m(t)===Object.prototype||m(t)===Array.prototype),y=t=>l(t)&&t[g]||null,h=(t,s=!0)=>{v.set(t,s)},isObject=t=>"object"==typeof t&&null!==t,_=new WeakMap,x=new WeakSet,buildProxyFunction=(t=Object.is,s=(t,s)=>new Proxy(t,s),p=t=>isObject(t)&&!x.has(t)&&(Array.isArray(t)||!(Symbol.iterator in t))&&!(t instanceof WeakMap)&&!(t instanceof WeakSet)&&!(t instanceof Error)&&!(t instanceof Number)&&!(t instanceof Date)&&!(t instanceof String)&&!(t instanceof RegExp)&&!(t instanceof ArrayBuffer),g=t=>{switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:throw t}},m=new WeakMap,v=(t,s,p=g)=>{let T=m.get(t);if((null==T?void 0:T[0])===s)return T[1];let F=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t));return h(F,!0),m.set(t,[s,F]),Reflect.ownKeys(t).forEach(s=>{if(Object.getOwnPropertyDescriptor(F,s))return;let g=Reflect.get(t,s),m={value:g,enumerable:!0,configurable:!0};if(x.has(g))h(g,!1);else if(g instanceof Promise)delete m.value,m.get=()=>p(g);else if(_.has(g)){let[t,s]=_.get(g);m.value=v(t,s(),p)}Object.defineProperty(F,s,m)}),Object.preventExtensions(F)},T=new WeakMap,F=[1,1],W=g=>{if(!isObject(g))throw Error("object required");let m=T.get(g);if(m)return m;let Z=F[0],Q=new Set,notifyUpdate=(t,s=++F[0])=>{Z!==s&&(Z=s,Q.forEach(p=>p(t,s)))},Y=F[1],ensureVersion=(t=++F[1])=>(Y===t||Q.size||(Y=t,X.forEach(([s])=>{let p=s[1](t);p>Z&&(Z=p)})),Z),createPropListener=t=>(s,p)=>{let g=[...s];g[1]=[t,...g[1]],notifyUpdate(g,p)},X=new Map,addPropListener=(t,s)=>{if(X.has(t))throw Error("prop listener already exists");if(Q.size){let p=s[3](createPropListener(t));X.set(t,[s,p])}else X.set(t,[s])},removePropListener=t=>{var s;let p=X.get(t);p&&(X.delete(t),null==(s=p[1])||s.call(p))},addListener=t=>{Q.add(t),1===Q.size&&X.forEach(([t,s],p)=>{if(s)throw Error("remove already exists");let g=t[3](createPropListener(p));X.set(p,[t,g])});let removeListener=()=>{Q.delete(t),0===Q.size&&X.forEach(([t,s],p)=>{s&&(s(),X.set(p,[t]))})};return removeListener},J=Array.isArray(g)?[]:Object.create(Object.getPrototypeOf(g)),en={deleteProperty(t,s){let p=Reflect.get(t,s);removePropListener(s);let g=Reflect.deleteProperty(t,s);return g&&notifyUpdate(["delete",[s],p]),g},set(s,g,m,v){let F=Reflect.has(s,g),Z=Reflect.get(s,g,v);if(F&&(t(Z,m)||T.has(m)&&t(Z,T.get(m))))return!0;removePropListener(g),isObject(m)&&(m=y(m)||m);let Q=m;if(m instanceof Promise)m.then(t=>{m.status="fulfilled",m.value=t,notifyUpdate(["resolve",[g],t])}).catch(t=>{m.status="rejected",m.reason=t,notifyUpdate(["reject",[g],t])});else{!_.has(m)&&p(m)&&(Q=W(m));let t=!x.has(Q)&&_.get(Q);t&&addPropListener(g,t)}return Reflect.set(s,g,Q,v),notifyUpdate(["set",[g],m,Z]),!0}},ei=s(J,en);T.set(g,ei);let eo=[J,ensureVersion,v,addListener];return _.set(ei,eo),Reflect.ownKeys(g).forEach(t=>{let s=Object.getOwnPropertyDescriptor(g,t);"value"in s&&(ei[t]=g[t],delete s.value,delete s.writable),Object.defineProperty(J,t,s)}),ei})=>[W,_,x,t,s,p,g,m,v,T,F],[T]=buildProxyFunction();function proxy(t={}){return T(t)}function subscribe(t,s,p){let g;let m=_.get(t);m||console.warn("Please use proxy object");let v=[],x=m[3],T=!1,F=x(t=>{if(v.push(t),p){s(v.splice(0));return}g||(g=Promise.resolve().then(()=>{g=void 0,T&&s(v.splice(0))}))});return T=!0,()=>{T=!1,F()}}function snapshot(t,s){let p=_.get(t);p||console.warn("Please use proxy object");let[g,m,v]=p;return v(g,m(),s)}function ref(t){return x.add(t),t}},14503:function(t,s,p){"use strict";function parseAccount(t){return"string"==typeof t?{address:t,type:"json-rpc"}:t}p.d(s,{T:function(){return parseAccount}})},61376:function(t,s,p){"use strict";p.d(s,{R:function(){return call}});var g=p(14503),m=p(16693),v=p(62027),_=p(80377),x=p(97405),T=p(7210),F=p(77799),W=p(22676),Z=p(92106),Q=p(26445),Y=p(87469),X=p(61163),J=p(74688),en=p(32357),ei=p(47531);async function call(t,s){let{account:m=t.account,batch:T=!!t.batch?.multicall,blockNumber:F,blockTag:W="latest",accessList:en,data:eo,gas:ea,gasPrice:es,maxFeePerGas:el,maxPriorityFeePerGas:ec,nonce:eu,to:ed,value:eh,...ef}=s,ep=m?(0,g.T)(m):void 0;try{(0,ei.F)(s);let p=F?(0,Z.eC)(F):void 0,g=p||W,m=t.chain?.formatters?.transactionRequest?.format||J.tG,v=m({...(0,X.K)(ef,{format:m}),from:ep?.address,accessList:en,data:eo,gas:ea,gasPrice:es,maxFeePerGas:el,maxPriorityFeePerGas:ec,nonce:eu,to:ed,value:eh});if(T&&function({request:t}){let{data:s,to:p,...g}=t;return!(!s||s.startsWith("0x82ad56cb"))&&!!p&&!(Object.values(g).filter(t=>void 0!==t).length>0)}({request:v}))try{return await scheduleMulticall(t,{...v,blockNumber:F,blockTag:W})}catch(t){if(!(t instanceof _.pZ)&&!(t instanceof _.mm))throw t}let x=await t.request({method:"eth_call",params:g?[v,g]:[v]});if("0x"===x)return{data:void 0};return{data:x}}catch(T){let g=function(t){if(!(t instanceof v.G))return;let s=t.walk();return"object"==typeof s.data?s.data.data:s.data}(T),{offchainLookup:m,offchainLookupSignature:_}=await p.e(422).then(p.bind(p,10422));if(g?.slice(0,10)===_&&ed)return{data:await m(t,{data:g,to:ed})};throw function(t,{docsPath:s,...p}){let g=(()=>{let s=(0,Y.k)(t,p);return s instanceof Q.cj?t:s})();return new x.cg(g,{docsPath:s,...p})}(T,{...s,account:ep,chain:t.chain})}}async function scheduleMulticall(t,s){let{batchSize:p=1024,wait:g=0}="object"==typeof t.batch?.multicall?t.batch.multicall:{},{blockNumber:v,blockTag:Q="latest",data:Y,multicallAddress:X,to:J}=s,ei=X;if(!ei){if(!t.chain)throw new _.pZ;ei=(0,W.LI)({blockNumber:v,chain:t.chain,contract:"multicall3"})}let eo=v?(0,Z.eC)(v):void 0,ea=eo||Q,{schedule:es}=(0,en.S)({id:`${t.uid}.${ea}`,wait:g,shouldSplitBatch(t){let s=t.reduce((t,{data:s})=>t+(s.length-2),0);return s>2*p},fn:async s=>{let p=s.map(t=>({allowFailure:!0,callData:t.data,target:t.to})),g=(0,F.R)({abi:m.F8,args:[p],functionName:"aggregate3"}),v=await t.request({method:"eth_call",params:[{data:g,to:ei},ea]});return(0,T.k)({abi:m.F8,args:[p],functionName:"aggregate3",data:v||"0x"})}}),[{returnData:el,success:ec}]=await es({data:Y,to:J});if(!ec)throw new x.VQ({data:el});return"0x"===el?{data:void 0}:{data:el}}},43861:function(t,s,p){"use strict";p.d(s,{C:function(){return internal_estimateFeesPerGas},X:function(){return estimateFeesPerGas}});var g=p(15371),m=p(79379),v=p(36765),_=p(24453);async function estimateFeesPerGas(t,s){return internal_estimateFeesPerGas(t,s)}async function internal_estimateFeesPerGas(t,s){let{block:p,chain:x=t.chain,request:T,type:F="eip1559"}=s||{},W=await (async()=>"function"==typeof x?.fees?.baseFeeMultiplier?x.fees.baseFeeMultiplier({block:p,client:t,request:T}):x?.fees?.baseFeeMultiplier??1.2)();if(W<1)throw new g.Fz;let Z=W.toString().split(".")[1]?.length??0,Q=10**Z,multiply=t=>t*BigInt(Math.ceil(W*Q))/BigInt(Q),Y=p||await (0,v.Q)(t);if("function"==typeof x?.fees?.estimateFeesPerGas)return x.fees.estimateFeesPerGas({block:p,client:t,multiply,request:T,type:F});if("eip1559"===F){if("bigint"!=typeof Y.baseFeePerGas)throw new g.e5;let s=T?.maxPriorityFeePerGas?T.maxPriorityFeePerGas:await (0,m.h)(t,{block:Y,chain:x,request:T}),p=multiply(Y.baseFeePerGas),v=T?.maxFeePerGas??p+s;return{maxFeePerGas:v,maxPriorityFeePerGas:s}}let X=T?.gasPrice??multiply(await (0,_.o)(t));return{gasPrice:X}}},81841:function(t,s,p){"use strict";p.d(s,{Q:function(){return estimateGas}});var g=p(14503),m=p(8998),v=p(92106),_=p(39625),x=p(67795),T=p(62027),F=p(33639);let EstimateGasExecutionError=class EstimateGasExecutionError extends T.G{constructor(t,{account:s,docsPath:p,chain:g,data:m,gas:v,gasPrice:T,maxFeePerGas:W,maxPriorityFeePerGas:Z,nonce:Q,to:Y,value:X}){let J=(0,F.xr)({from:s?.address,to:Y,value:void 0!==X&&`${(0,_.d)(X)} ${g?.nativeCurrency.symbol||"ETH"}`,data:m,gas:v,gasPrice:void 0!==T&&`${(0,x.o)(T)} gwei`,maxFeePerGas:void 0!==W&&`${(0,x.o)(W)} gwei`,maxPriorityFeePerGas:void 0!==Z&&`${(0,x.o)(Z)} gwei`,nonce:Q});super(t.shortMessage,{cause:t,docsPath:p,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Estimate Gas Arguments:",J].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=t}};var W=p(26445),Z=p(87469),Q=p(61163),Y=p(74688),X=p(47531),J=p(57331);async function estimateGas(t,s){let p=s.account??t.account;if(!p)throw new m.o({docsPath:"/docs/actions/public/estimateGas"});let _=(0,g.T)(p);try{let{accessList:p,blockNumber:g,blockTag:m,data:x,gas:T,gasPrice:F,maxFeePerGas:W,maxPriorityFeePerGas:Z,nonce:en,to:ei,value:eo,...ea}="local"===_.type?await (0,J.Z)(t,s):s,es=g?(0,v.eC)(g):void 0,el=es||m;(0,X.F)(s);let ec=t.chain?.formatters?.transactionRequest?.format||Y.tG,eu=ec({...(0,Q.K)(ea,{format:ec}),from:_.address,accessList:p,data:x,gas:T,gasPrice:F,maxFeePerGas:W,maxPriorityFeePerGas:Z,nonce:en,to:ei,value:eo}),ed=await t.request({method:"eth_estimateGas",params:el?[eu,el]:[eu]});return BigInt(ed)}catch(p){throw function(t,{docsPath:s,...p}){let g=(()=>{let s=(0,Z.k)(t,p);return s instanceof W.cj?t:s})();return new EstimateGasExecutionError(g,{docsPath:s,...p})}(p,{...s,account:_,chain:t.chain})}}},79379:function(t,s,p){"use strict";p.d(s,{_:function(){return estimateMaxPriorityFeePerGas},h:function(){return internal_estimateMaxPriorityFeePerGas}});var g=p(15371),m=p(95946),v=p(36765),_=p(24453);async function estimateMaxPriorityFeePerGas(t,s){return internal_estimateMaxPriorityFeePerGas(t,s)}async function internal_estimateMaxPriorityFeePerGas(t,s){let{block:p,chain:x=t.chain,request:T}=s||{};if("function"==typeof x?.fees?.defaultPriorityFee){let s=p||await (0,v.Q)(t);return x.fees.defaultPriorityFee({block:s,client:t,request:T})}if(void 0!==x?.fees?.defaultPriorityFee)return x?.fees?.defaultPriorityFee;try{let s=await t.request({method:"eth_maxPriorityFeePerGas"});return(0,m.y_)(s)}catch{let[s,m]=await Promise.all([p?Promise.resolve(p):(0,v.Q)(t),(0,_.o)(t)]);if("bigint"!=typeof s.baseFeePerGas)throw new g.e5;let x=m-s.baseFeePerGas;if(x<0n)return 0n;return x}}},36765:function(t,s,p){"use strict";p.d(s,{Q:function(){return getBlock}});var g=p(62027);let BlockNotFoundError=class BlockNotFoundError extends g.G{constructor({blockHash:t,blockNumber:s}){let p="Block";t&&(p=`Block at hash "${t}"`),s&&(p=`Block at number "${s}"`),super(`${p} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}};var m=p(92106),v=p(43310);async function getBlock(t,{blockHash:s,blockNumber:p,blockTag:g,includeTransactions:_}={}){let x=_??!1,T=void 0!==p?(0,m.eC)(p):void 0,F=null;if(!(F=s?await t.request({method:"eth_getBlockByHash",params:[s,x]}):await t.request({method:"eth_getBlockByNumber",params:[T||(g??"latest"),x]})))throw new BlockNotFoundError({blockHash:s,blockNumber:p});let W=t.chain?.formatters?.block?.format||v.Z;return W(F)}},79524:function(t,s,p){"use strict";p.d(s,{L:function(){return getChainId}});var g=p(95946);async function getChainId(t){let s=await t.request({method:"eth_chainId"});return(0,g.ly)(s)}},24453:function(t,s,p){"use strict";async function getGasPrice(t){let s=await t.request({method:"eth_gasPrice"});return BigInt(s)}p.d(s,{o:function(){return getGasPrice}})},86162:function(t,s,p){"use strict";p.d(s,{K:function(){return getTransactionCount}});var g=p(95946),m=p(92106);async function getTransactionCount(t,{address:s,blockTag:p="latest",blockNumber:v}){let _=await t.request({method:"eth_getTransactionCount",params:[s,v?(0,m.eC)(v):p]});return(0,g.ly)(_)}},57331:function(t,s,p){"use strict";p.d(s,{Z:function(){return prepareTransactionRequest}});var g=p(14503),m=p(43861),v=p(81841),_=p(36765),x=p(86162),T=p(8998),F=p(15371),W=p(47531),Z=p(33639);async function prepareTransactionRequest(t,s){let{account:p=t.account,chain:Q,gas:Y,nonce:X,type:J}=s;if(!p)throw new T.o;let en=(0,g.T)(p),ei=await (0,_.Q)(t,{blockTag:"latest"}),eo={...s,from:en.address};if(void 0===X&&(eo.nonce=await (0,x.K)(t,{address:en.address,blockTag:"pending"})),void 0===J)try{eo.type=function(t){if(t.type)return t.type;if(void 0!==t.maxFeePerGas||void 0!==t.maxPriorityFeePerGas)return"eip1559";if(void 0!==t.gasPrice)return void 0!==t.accessList?"eip2930":"legacy";throw new Z.j3({transaction:t})}(eo)}catch{eo.type="bigint"==typeof ei.baseFeePerGas?"eip1559":"legacy"}if("eip1559"===eo.type){let{maxFeePerGas:p,maxPriorityFeePerGas:g}=await (0,m.C)(t,{block:ei,chain:Q,request:eo});if(void 0===s.maxPriorityFeePerGas&&s.maxFeePerGas&&s.maxFeePerGas<g)throw new F.ld({maxPriorityFeePerGas:g});eo.maxPriorityFeePerGas=g,eo.maxFeePerGas=p}else{if(void 0!==s.maxFeePerGas||void 0!==s.maxPriorityFeePerGas)throw new F.e5;let{gasPrice:p}=await (0,m.C)(t,{block:ei,chain:Q,request:eo,type:"legacy"});eo.gasPrice=p}return void 0===Y&&(eo.gas=await (0,v.Q)(t,{...eo,account:{address:en.address,type:"json-rpc"}})),(0,W.F)(eo),eo}},99238:function(t,s,p){"use strict";async function sendRawTransaction(t,{serializedTransaction:s}){return t.request({method:"eth_sendRawTransaction",params:[s]})}p.d(s,{p:function(){return sendRawTransaction}})},66403:function(t,s,p){"use strict";p.d(s,{R:function(){return m}});var g=p(22676);let m=(0,g.ax)({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}})},16189:function(t,s,p){"use strict";let g;p.d(s,{e:function(){return createClient}});var m=p(14503);let v=256;function createClient(t){let{batch:s,cacheTime:p=t.pollingInterval??4e3,key:_="base",name:x="Base Client",pollingInterval:T=4e3,type:F="base"}=t,W=t.chain,Z=t.account?(0,m.T)(t.account):void 0,{config:Q,request:Y,value:X}=t.transport({chain:W,pollingInterval:T}),J={...Q,...X},en={account:Z,batch:s,cacheTime:p,chain:W,key:_,name:x,pollingInterval:T,request:Y,transport:J,type:F,uid:function(t=11){if(!g||v+t>512){g="",v=0;for(let t=0;t<256;t++)g+=(256+256*Math.random()|0).toString(16).substring(1)}return g.substring(v,v+++t)}()};return Object.assign(en,{extend:function extend(t){return s=>{let p=s(t);for(let t in en)delete p[t];let g={...t,...p};return Object.assign(g,{extend:extend(g)})}}(en)})}},21032:function(t,s,p){"use strict";p.d(s,{K:function(){return createWalletClient}});var g=p(16189),m=p(79524),v=p(92106);async function addChain(t,{chain:s}){let{id:p,name:g,nativeCurrency:m,rpcUrls:_,blockExplorers:x}=s;await t.request({method:"wallet_addEthereumChain",params:[{chainId:(0,v.eC)(p),chainName:g,nativeCurrency:m,rpcUrls:_.default.http,blockExplorerUrls:x?Object.values(x).map(({url:t})=>t):void 0}]})}var _=p(30286),x=p(14503),T=p(8998),F=p(22676),W=p(26445),Z=p(33639),Q=p(87469),Y=p(61163),X=p(74688),J=p(47531),en=p(57331),ei=p(99238);async function sendTransaction(t,s){let{account:p=t.account,chain:g=t.chain,accessList:v,data:_,gas:eo,gasPrice:ea,maxFeePerGas:es,maxPriorityFeePerGas:el,nonce:ec,to:eu,value:ed,...eh}=s;if(!p)throw new T.o({docsPath:"/docs/actions/wallet/sendTransaction"});let ef=(0,x.T)(p);try{let p;if((0,J.F)(s),null!==g&&(p=await (0,m.L)(t),(0,F.qg)({currentChainId:p,chain:g})),"local"===ef.type){let s=await (0,en.Z)(t,{account:ef,accessList:v,chain:g,data:_,gas:eo,gasPrice:ea,maxFeePerGas:es,maxPriorityFeePerGas:el,nonce:ec,to:eu,value:ed,...eh});p||(p=await (0,m.L)(t));let x=g?.serializers?.transaction,T=await ef.signTransaction({...s,chainId:p},{serializer:x});return await (0,ei.p)(t,{serializedTransaction:T})}let x=g?.formatters?.transactionRequest?.format||X.tG,T=x({...(0,Y.K)(eh,{format:x}),accessList:v,data:_,from:ef.address,gas:eo,gasPrice:ea,maxFeePerGas:es,maxPriorityFeePerGas:el,nonce:ec,to:eu,value:ed});return await t.request({method:"eth_sendTransaction",params:[T]})}catch(t){throw function(t,{docsPath:s,...p}){let g=(()=>{let s=(0,Q.k)(t,p);return s instanceof W.cj?t:s})();return new Z.mk(g,{docsPath:s,...p})}(t,{...s,account:ef,chain:s.chain||void 0})}}var eo=p(45775);async function getAddresses(t){if(t.account?.type==="local")return[t.account.address];let s=await t.request({method:"eth_accounts"});return s.map(t=>(0,eo.x)(t))}async function getPermissions(t){let s=await t.request({method:"wallet_getPermissions"});return s}async function requestAddresses(t){let s=await t.request({method:"eth_requestAccounts"});return s.map(t=>(0,eo.K)(t))}async function requestPermissions(t,s){return t.request({method:"wallet_requestPermissions",params:[s]})}async function signMessage(t,{account:s=t.account,message:p}){if(!s)throw new T.o({docsPath:"/docs/actions/wallet/signMessage"});let g=(0,x.T)(s);if("local"===g.type)return g.signMessage({message:p});let m="string"==typeof p?(0,v.$G)(p):p.raw instanceof Uint8Array?(0,v.NC)(p.raw):p.raw;return t.request({method:"personal_sign",params:[m,g.address]})}async function signTransaction(t,s){let{account:p=t.account,chain:g=t.chain,..._}=s;if(!p)throw new T.o({docsPath:"/docs/actions/wallet/signTransaction"});let W=(0,x.T)(p);(0,J.F)({account:W,...s});let Z=await (0,m.L)(t);null!==g&&(0,F.qg)({currentChainId:Z,chain:g});let Q=g?.formatters||t.chain?.formatters,Y=Q?.transactionRequest?.format||X.tG;return"local"===W.type?W.signTransaction({..._,chainId:Z},{serializer:t.chain?.serializers?.transaction}):await t.request({method:"eth_signTransaction",params:[{...Y(_),chainId:(0,v.eC)(Z),from:W.address}]})}var ea=p(15102),es=p(96070),el=p(71352);async function signTypedData(t,{account:s=t.account,domain:p,message:g,primaryType:m,types:v}){if(!s)throw new T.o({docsPath:"/docs/actions/wallet/signTypedData"});let _=(0,x.T)(s),F={EIP712Domain:(0,el.cj)({domain:p}),...v};if((0,el.iC)({domain:p,message:g,primaryType:m,types:F}),"local"===_.type)return _.signTypedData({domain:p,primaryType:m,types:F,message:g});let W=(0,es.P)({domain:p??{},primaryType:m,types:F,message:g},(t,s)=>(0,ea.v)(s)?s.toLowerCase():s);return t.request({method:"eth_signTypedData_v4",params:[_.address,W]})}async function switchChain(t,{id:s}){await t.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,v.eC)(s)}]})}async function watchAsset(t,s){let p=await t.request({method:"wallet_watchAsset",params:s});return p}var ec=p(77799);async function writeContract(t,{abi:s,address:p,args:g,dataSuffix:m,functionName:v,..._}){let x=(0,ec.R)({abi:s,args:g,functionName:v}),T=await sendTransaction(t,{data:`${x}${m?m.replace("0x",""):""}`,to:p,..._});return T}function walletActions(t){return{addChain:s=>addChain(t,s),deployContract:s=>(function(t,{abi:s,args:p,bytecode:g,...m}){let v=(0,_.w)({abi:s,args:p,bytecode:g});return sendTransaction(t,{...m,data:v})})(t,s),getAddresses:()=>getAddresses(t),getChainId:()=>(0,m.L)(t),getPermissions:()=>getPermissions(t),prepareTransactionRequest:s=>(0,en.Z)(t,s),requestAddresses:()=>requestAddresses(t),requestPermissions:s=>requestPermissions(t,s),sendRawTransaction:s=>(0,ei.p)(t,s),sendTransaction:s=>sendTransaction(t,s),signMessage:s=>signMessage(t,s),signTransaction:s=>signTransaction(t,s),signTypedData:s=>signTypedData(t,s),switchChain:s=>switchChain(t,s),watchAsset:s=>watchAsset(t,s),writeContract:s=>writeContract(t,s)}}function createWalletClient(t){let{key:s="wallet",name:p="Wallet Client",transport:m}=t,v=(0,g.e)({...t,key:s,name:p,transport:t=>m({...t,retryCount:0}),type:"walletClient"});return v.extend(walletActions)}},31031:function(t,s,p){"use strict";p.d(s,{q:function(){return createTransport}});var g=p(37029);function createTransport({key:t,name:s,request:p,retryCount:m=3,retryDelay:v=150,timeout:_,type:x},T){return{config:{key:t,name:s,request:p,retryCount:m,retryDelay:v,timeout:_,type:x},request:(0,g.n)(p,{retryCount:m,retryDelay:v}),value:T}}},3980:function(t,s,p){"use strict";p.d(s,{P:function(){return custom}});var g=p(31031);function custom(t,s={}){let{key:p="custom",name:m="Custom Provider",retryDelay:v}=s;return({retryCount:_})=>(0,g.q)({key:p,name:m,request:t.request.bind(t),retryCount:s.retryCount??_,retryDelay:v,type:"custom"})}},16693:function(t,s,p){"use strict";p.d(s,{$o:function(){return F},F8:function(){return g},X$:function(){return T},du:function(){return _},k3:function(){return v},nZ:function(){return x}});let g=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],m=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],v=[...m,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],_=[...m,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],x=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],T=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],F=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]},21746:function(t,s,p){"use strict";p.d(s,{$:function(){return g},Up:function(){return m},hZ:function(){return v}});let g={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},m={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},v={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},84192:function(t,s,p){"use strict";p.d(s,{Bd:function(){return v},Zn:function(){return m},ez:function(){return g}});let g={gwei:9,wei:18},m={ether:-9,wei:9},v={ether:-18,gwei:-9}},57412:function(t,s,p){"use strict";p.d(s,{CI:function(){return InvalidAbiDecodingTypeError},FM:function(){return AbiEventSignatureEmptyTopicsError},Gy:function(){return DecodeLogTopicsMismatch},KY:function(){return BytesSizeMismatchError},M4:function(){return AbiEncodingBytesSizeMismatchError},MX:function(){return AbiFunctionOutputsNotFoundError},SM:function(){return DecodeLogDataMismatch},cO:function(){return AbiConstructorParamsNotFoundError},dh:function(){return InvalidAbiEncodingTypeError},fM:function(){return AbiConstructorNotFoundError},fs:function(){return AbiEncodingLengthMismatchError},gr:function(){return AbiEncodingArrayLengthMismatchError},hn:function(){return InvalidArrayError},lC:function(){return AbiEventSignatureNotFoundError},mv:function(){return AbiEventNotFoundError},wM:function(){return InvalidDefinitionTypeError},wb:function(){return AbiDecodingZeroDataError},xB:function(){return AbiDecodingDataSizeTooSmallError},xL:function(){return AbiFunctionNotFoundError},yP:function(){return AbiErrorSignatureNotFoundError}});var g=p(80522),m=p(39135),v=p(62027);let AbiConstructorNotFoundError=class AbiConstructorNotFoundError extends v.G{constructor({docsPath:t}){super("A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}};let AbiConstructorParamsNotFoundError=class AbiConstructorParamsNotFoundError extends v.G{constructor({docsPath:t}){super("Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}};let AbiDecodingDataSizeTooSmallError=class AbiDecodingDataSizeTooSmallError extends v.G{constructor({data:t,params:s,size:p}){super(`Data size of ${p} bytes is too small for given parameters.`,{metaMessages:[`Params: (${(0,g.h)(s,{includeName:!0})})`,`Data:   ${t} (${p} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t,this.params=s,this.size=p}};let AbiDecodingZeroDataError=class AbiDecodingZeroDataError extends v.G{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}};let AbiEncodingArrayLengthMismatchError=class AbiEncodingArrayLengthMismatchError extends v.G{constructor({expectedLength:t,givenLength:s,type:p}){super(`ABI encoding array length mismatch for type ${p}.
Expected length: ${t}
Given length: ${s}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}};let AbiEncodingBytesSizeMismatchError=class AbiEncodingBytesSizeMismatchError extends v.G{constructor({expectedSize:t,value:s}){super(`Size of bytes "${s}" (bytes${(0,m.d)(s)}) does not match expected size (bytes${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}};let AbiEncodingLengthMismatchError=class AbiEncodingLengthMismatchError extends v.G{constructor({expectedLength:t,givenLength:s}){super(`ABI encoding params/values length mismatch.
Expected length (params): ${t}
Given length (values): ${s}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}};let AbiErrorSignatureNotFoundError=class AbiErrorSignatureNotFoundError extends v.G{constructor(t,{docsPath:s}){super(`Encoded error signature "${t}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`,{docsPath:s}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=t}};let AbiEventSignatureEmptyTopicsError=class AbiEventSignatureEmptyTopicsError extends v.G{constructor({docsPath:t}){super("Cannot extract event signature from empty topics.",{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}};let AbiEventSignatureNotFoundError=class AbiEventSignatureNotFoundError extends v.G{constructor(t,{docsPath:s}){super(`Encoded event signature "${t}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`,{docsPath:s}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}};let AbiEventNotFoundError=class AbiEventNotFoundError extends v.G{constructor(t,{docsPath:s}={}){super(`Event ${t?`"${t}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,{docsPath:s}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}};let AbiFunctionNotFoundError=class AbiFunctionNotFoundError extends v.G{constructor(t,{docsPath:s}={}){super(`Function ${t?`"${t}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:s}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}};let AbiFunctionOutputsNotFoundError=class AbiFunctionOutputsNotFoundError extends v.G{constructor(t,{docsPath:s}){super(`Function "${t}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:s}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}};let BytesSizeMismatchError=class BytesSizeMismatchError extends v.G{constructor({expectedSize:t,givenSize:s}){super(`Expected bytes${t}, got bytes${s}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}};let DecodeLogDataMismatch=class DecodeLogDataMismatch extends v.G{constructor({abiItem:t,data:s,params:p,size:m}){super(`Data size of ${m} bytes is too small for non-indexed event parameters.`,{metaMessages:[`Params: (${(0,g.h)(p,{includeName:!0})})`,`Data:   ${s} (${m} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t,this.data=s,this.params=p,this.size=m}};let DecodeLogTopicsMismatch=class DecodeLogTopicsMismatch extends v.G{constructor({abiItem:t,param:s}){super(`Expected a topic for indexed event parameter${s.name?` "${s.name}"`:""} on event "${(0,g.t)(t,{includeName:!0})}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t}};let InvalidAbiEncodingTypeError=class InvalidAbiEncodingTypeError extends v.G{constructor(t,{docsPath:s}){super(`Type "${t}" is not a valid encoding type.
Please provide a valid ABI type.`,{docsPath:s}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}};let InvalidAbiDecodingTypeError=class InvalidAbiDecodingTypeError extends v.G{constructor(t,{docsPath:s}){super(`Type "${t}" is not a valid decoding type.
Please provide a valid ABI type.`,{docsPath:s}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}};let InvalidArrayError=class InvalidArrayError extends v.G{constructor(t){super(`Value "${t}" is not a valid array.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}};let InvalidDefinitionTypeError=class InvalidDefinitionTypeError extends v.G{constructor(t){super(`"${t}" is not a valid definition type.
Valid types: "function", "event", "error"`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}},8998:function(t,s,p){"use strict";p.d(s,{o:function(){return AccountNotFoundError}});var g=p(62027);let AccountNotFoundError=class AccountNotFoundError extends g.G{constructor({docsPath:t}={}){super("Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.",{docsPath:t,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}},26087:function(t,s,p){"use strict";p.d(s,{b:function(){return InvalidAddressError}});var g=p(62027);let InvalidAddressError=class InvalidAddressError extends g.G{constructor({address:t}){super(`Address "${t}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}},62027:function(t,s,p){"use strict";p.d(s,{G:function(){return BaseError}});var g=p(35280);let BaseError=class BaseError extends Error{constructor(t,s={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:(0,g.bo)()});let p=s.cause instanceof BaseError?s.cause.details:s.cause?.message?s.cause.message:s.details,m=s.cause instanceof BaseError&&s.cause.docsPath||s.docsPath;this.message=[t||"An error occurred.","",...s.metaMessages?[...s.metaMessages,""]:[],...m?[`Docs: https://viem.sh${m}.html${s.docsSlug?`#${s.docsSlug}`:""}`]:[],...p?[`Details: ${p}`]:[],`Version: ${this.version}`].join("\n"),s.cause&&(this.cause=s.cause),this.details=p,this.docsPath=m,this.metaMessages=s.metaMessages,this.shortMessage=t}walk(t){return function walk(t,s){return s?.(t)?t:t&&"object"==typeof t&&"cause"in t?walk(t.cause,s):s?null:t}(this,t)}}},80377:function(t,s,p){"use strict";p.d(s,{Bk:function(){return ChainNotFoundError},Yl:function(){return ChainMismatchError},mm:function(){return ChainDoesNotSupportContract},pZ:function(){return ClientChainNotConfiguredError}});var g=p(62027);let ChainDoesNotSupportContract=class ChainDoesNotSupportContract extends g.G{constructor({blockNumber:t,chain:s,contract:p}){super(`Chain "${s.name}" does not support contract "${p.name}".`,{metaMessages:["This could be due to any of the following:",...t&&p.blockCreated&&p.blockCreated>t?[`- The contract "${p.name}" was not deployed until block ${p.blockCreated} (current block ${t}).`]:[`- The chain does not have the contract "${p.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}};let ChainMismatchError=class ChainMismatchError extends g.G{constructor({chain:t,currentChainId:s}){super(`The current chain of the wallet (id: ${s}) does not match the target chain for the transaction (id: ${t.id} – ${t.name}).`,{metaMessages:[`Current Chain ID:  ${s}`,`Expected Chain ID: ${t.id} – ${t.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}};let ChainNotFoundError=class ChainNotFoundError extends g.G{constructor(){super("No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}};let ClientChainNotConfiguredError=class ClientChainNotConfiguredError extends g.G{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}},97405:function(t,s,p){"use strict";p.d(s,{cg:function(){return CallExecutionError},uq:function(){return ContractFunctionExecutionError},Lu:function(){return ContractFunctionRevertedError},Dk:function(){return ContractFunctionZeroDataError},VQ:function(){return RawContractError}});var g=p(14503),m=p(21746),v=p(86899),_=p(80522),x=p(96070);function formatAbiItemWithArgs({abiItem:t,args:s,includeFunctionName:p=!0,includeName:g=!1}){if("name"in t&&"inputs"in t&&t.inputs)return`${p?t.name:""}(${t.inputs.map((t,p)=>`${g&&t.name?`${t.name}: `:""}${"object"==typeof s[p]?(0,x.P)(s[p]):s[p]}`).join(", ")})`}var T=p(40840),F=p(39625),W=p(67795),Z=p(57412),Q=p(62027),Y=p(33639),X=p(35280);let CallExecutionError=class CallExecutionError extends Q.G{constructor(t,{account:s,docsPath:p,chain:m,data:v,gas:_,gasPrice:x,maxFeePerGas:T,maxPriorityFeePerGas:Z,nonce:Q,to:X,value:J}){let en=s?(0,g.T)(s):void 0,ei=(0,Y.xr)({from:en?.address,to:X,value:void 0!==J&&`${(0,F.d)(J)} ${m?.nativeCurrency.symbol||"ETH"}`,data:v,gas:_,gasPrice:void 0!==x&&`${(0,W.o)(x)} gwei`,maxFeePerGas:void 0!==T&&`${(0,W.o)(T)} gwei`,maxPriorityFeePerGas:void 0!==Z&&`${(0,W.o)(Z)} gwei`,nonce:Q});super(t.shortMessage,{cause:t,docsPath:p,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Raw Call Arguments:",ei].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=t}};let ContractFunctionExecutionError=class ContractFunctionExecutionError extends Q.G{constructor(t,{abi:s,args:p,contractAddress:g,docsPath:m,functionName:v,sender:x}){let F=(0,T.m)({abi:s,args:p,name:v}),W=F?formatAbiItemWithArgs({abiItem:F,args:p,includeFunctionName:!1,includeName:!1}):void 0,Z=F?(0,_.t)(F,{includeName:!0}):void 0,Q=(0,Y.xr)({address:g&&(0,X.CR)(g),function:Z,args:W&&"()"!==W&&`${[...Array(v?.length??0).keys()].map(()=>" ").join("")}${W}`,sender:x});super(t.shortMessage||`An unknown error occurred while executing the contract function "${v}".`,{cause:t,docsPath:m,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Contract Call:",Q].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=s,this.args=p,this.cause=t,this.contractAddress=g,this.functionName=v,this.sender=x}};let ContractFunctionRevertedError=class ContractFunctionRevertedError extends Q.G{constructor({abi:t,data:s,functionName:p,message:g}){let x,T,F,W,Q;if(s&&"0x"!==s)try{Q=(0,v.p)({abi:t,data:s});let{abiItem:p,errorName:g,args:x}=Q;if("Error"===g)F=x[0];else if("Panic"===g){let[t]=x;F=m.$[t]}else{let t=p?(0,_.t)(p,{includeName:!0}):void 0,s=p&&x?formatAbiItemWithArgs({abiItem:p,args:x,includeFunctionName:!1,includeName:!1}):void 0;T=[t?`Error: ${t}`:"",s&&"()"!==s?`       ${[...Array(g?.length??0).keys()].map(()=>" ").join("")}${s}`:""]}}catch(t){x=t}else g&&(F=g);x instanceof Z.yP&&(W=x.signature,T=[`Unable to decode signature "${W}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${W}.`]),super(F&&"execution reverted"!==F||W?[`The contract function "${p}" reverted with the following ${W?"signature":"reason"}:`,F||W].join("\n"):`The contract function "${p}" reverted.`,{cause:x,metaMessages:T}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=Q,this.reason=F,this.signature=W}};let ContractFunctionZeroDataError=class ContractFunctionZeroDataError extends Q.G{constructor({functionName:t}){super(`The contract function "${t}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${t}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}};let RawContractError=class RawContractError extends Q.G{constructor({data:t,message:s}){super(s||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t}}},69760:function(t,s,p){"use strict";p.d(s,{$:function(){return SizeExceedsPaddingSizeError},m:function(){return SliceOffsetOutOfBoundsError}});var g=p(62027);let SliceOffsetOutOfBoundsError=class SliceOffsetOutOfBoundsError extends g.G{constructor({offset:t,position:s,size:p}){super(`Slice ${"start"===s?"starting":"ending"} at offset "${t}" is out-of-bounds (size: ${p}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}};let SizeExceedsPaddingSizeError=class SizeExceedsPaddingSizeError extends g.G{constructor({size:t,targetSize:s,type:p}){super(`${p.charAt(0).toUpperCase()}${p.slice(1).toLowerCase()} size (${t}) exceeds padding size (${s}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}},87788:function(t,s,p){"use strict";p.d(s,{Cd:function(){return InvalidHexBooleanError},J5:function(){return IntegerOutOfRangeError},M6:function(){return SizeOverflowError}});var g=p(62027);let IntegerOutOfRangeError=class IntegerOutOfRangeError extends g.G{constructor({max:t,min:s,signed:p,size:g,value:m}){super(`Number "${m}" is not in safe ${g?`${8*g}-bit ${p?"signed":"unsigned"} `:""}integer range ${t?`(${s} to ${t})`:`(above ${s})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}};let InvalidHexBooleanError=class InvalidHexBooleanError extends g.G{constructor(t){super(`Hex value "${t}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}};let SizeOverflowError=class SizeOverflowError extends g.G{constructor({givenSize:t,maxSize:s}){super(`Size cannot exceed ${s} bytes. Given size: ${t} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}},15371:function(t,s,p){"use strict";p.d(s,{Fz:function(){return BaseFeeScalarError},e5:function(){return Eip1559FeesNotSupportedError},ld:function(){return MaxFeePerGasTooLowError}});var g=p(67795),m=p(62027);let BaseFeeScalarError=class BaseFeeScalarError extends m.G{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}};let Eip1559FeesNotSupportedError=class Eip1559FeesNotSupportedError extends m.G{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}};let MaxFeePerGasTooLowError=class MaxFeePerGasTooLowError extends m.G{constructor({maxPriorityFeePerGas:t}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,g.o)(t)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}},26445:function(t,s,p){"use strict";p.d(s,{C_:function(){return InsufficientFundsError},G$:function(){return FeeCapTooLowError},Hh:function(){return FeeCapTooHighError},M_:function(){return ExecutionRevertedError},WF:function(){return IntrinsicGasTooHighError},ZI:function(){return NonceTooHighError},cj:function(){return UnknownNodeError},cs:function(){return TipAboveFeeCapError},dR:function(){return IntrinsicGasTooLowError},pZ:function(){return TransactionTypeNotSupportedError},se:function(){return NonceMaxValueError},vU:function(){return NonceTooLowError}});var g=p(67795),m=p(62027);let ExecutionRevertedError=class ExecutionRevertedError extends m.G{constructor({cause:t,message:s}={}){let p=s?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${p?`with reason: ${p}`:"for an unknown reason"}.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}};Object.defineProperty(ExecutionRevertedError,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(ExecutionRevertedError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});let FeeCapTooHighError=class FeeCapTooHighError extends m.G{constructor({cause:t,maxFeePerGas:s}={}){super(`The fee cap (\`maxFeePerGas\`${s?` = ${(0,g.o)(s)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}};Object.defineProperty(FeeCapTooHighError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});let FeeCapTooLowError=class FeeCapTooLowError extends m.G{constructor({cause:t,maxFeePerGas:s}={}){super(`The fee cap (\`maxFeePerGas\`${s?` = ${(0,g.o)(s)}`:""} gwei) cannot be lower than the block base fee.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}};Object.defineProperty(FeeCapTooLowError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});let NonceTooHighError=class NonceTooHighError extends m.G{constructor({cause:t,nonce:s}={}){super(`Nonce provided for the transaction ${s?`(${s}) `:""}is higher than the next one expected.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}};Object.defineProperty(NonceTooHighError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});let NonceTooLowError=class NonceTooLowError extends m.G{constructor({cause:t,nonce:s}={}){super(`Nonce provided for the transaction ${s?`(${s}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}};Object.defineProperty(NonceTooLowError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});let NonceMaxValueError=class NonceMaxValueError extends m.G{constructor({cause:t,nonce:s}={}){super(`Nonce provided for the transaction ${s?`(${s}) `:""}exceeds the maximum allowed nonce.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}};Object.defineProperty(NonceMaxValueError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});let InsufficientFundsError=class InsufficientFundsError extends m.G{constructor({cause:t}={}){super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",{cause:t,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}};Object.defineProperty(InsufficientFundsError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});let IntrinsicGasTooHighError=class IntrinsicGasTooHighError extends m.G{constructor({cause:t,gas:s}={}){super(`The amount of gas ${s?`(${s}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}};Object.defineProperty(IntrinsicGasTooHighError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});let IntrinsicGasTooLowError=class IntrinsicGasTooLowError extends m.G{constructor({cause:t,gas:s}={}){super(`The amount of gas ${s?`(${s}) `:""}provided for the transaction is too low.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}};Object.defineProperty(IntrinsicGasTooLowError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});let TransactionTypeNotSupportedError=class TransactionTypeNotSupportedError extends m.G{constructor({cause:t}){super("The transaction type is not supported for this chain.",{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}};Object.defineProperty(TransactionTypeNotSupportedError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});let TipAboveFeeCapError=class TipAboveFeeCapError extends m.G{constructor({cause:t,maxPriorityFeePerGas:s,maxFeePerGas:p}={}){super(`The provided tip (\`maxPriorityFeePerGas\`${s?` = ${(0,g.o)(s)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${p?` = ${(0,g.o)(p)} gwei`:""}).`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}};Object.defineProperty(TipAboveFeeCapError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});let UnknownNodeError=class UnknownNodeError extends m.G{constructor({cause:t}){super(`An error occurred while executing: ${t?.shortMessage}`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}},78863:function(t,s,p){"use strict";p.d(s,{Gg:function(){return HttpRequestError},W5:function(){return TimeoutError},bs:function(){return RpcRequestError},c9:function(){return WebSocketRequestError}});var g=p(96070),m=p(62027),v=p(35280);let HttpRequestError=class HttpRequestError extends m.G{constructor({body:t,details:s,headers:p,status:m,url:_}){super("HTTP request failed.",{details:s,metaMessages:[m&&`Status: ${m}`,`URL: ${(0,v.Gr)(_)}`,t&&`Request body: ${(0,g.P)(t)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=t,this.headers=p,this.status=m,this.url=_}};let WebSocketRequestError=class WebSocketRequestError extends m.G{constructor({body:t,details:s,url:p}){super("WebSocket request failed.",{details:s,metaMessages:[`URL: ${(0,v.Gr)(p)}`,`Request body: ${(0,g.P)(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}};let RpcRequestError=class RpcRequestError extends m.G{constructor({body:t,error:s,url:p}){super("RPC Request failed.",{cause:s,details:s.message,metaMessages:[`URL: ${(0,v.Gr)(p)}`,`Request body: ${(0,g.P)(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=s.code}};let TimeoutError=class TimeoutError extends m.G{constructor({body:t,url:s}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,v.Gr)(s)}`,`Request body: ${(0,g.P)(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}},39028:function(t,s,p){"use strict";p.d(s,{B:function(){return InvalidRequestRpcError},GD:function(){return JsonRpcVersionUnsupportedError},I0:function(){return ChainDisconnectedError},KB:function(){return TransactionRejectedRpcError},LX:function(){return MethodNotFoundRpcError},Og:function(){return ResourceNotFoundRpcError},PE:function(){return UnauthorizedProviderError},Pv:function(){return LimitExceededRpcError},Ts:function(){return UnsupportedProviderMethodError},XS:function(){return InternalRpcError},ab:function(){return UserRejectedRequestError},gS:function(){return MethodNotSupportedRpcError},ir:function(){return UnknownRpcError},nY:function(){return InvalidParamsRpcError},pT:function(){return ResourceUnavailableRpcError},s7:function(){return ParseRpcError},u5:function(){return ProviderDisconnectedError},x3:function(){return SwitchChainError},yR:function(){return InvalidInputRpcError}});var g=p(62027),m=p(78863);let RpcError=class RpcError extends g.G{constructor(t,{code:s,docsPath:p,metaMessages:g,shortMessage:v}){super(v,{cause:t,docsPath:p,metaMessages:g||t?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=t.name,this.code=t instanceof m.bs?t.code:s??-1}};let ProviderRpcError=class ProviderRpcError extends RpcError{constructor(t,s){super(t,s),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=s.data}};let ParseRpcError=class ParseRpcError extends RpcError{constructor(t){super(t,{code:ParseRpcError.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}};Object.defineProperty(ParseRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});let InvalidRequestRpcError=class InvalidRequestRpcError extends RpcError{constructor(t){super(t,{code:InvalidRequestRpcError.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}};Object.defineProperty(InvalidRequestRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});let MethodNotFoundRpcError=class MethodNotFoundRpcError extends RpcError{constructor(t){super(t,{code:MethodNotFoundRpcError.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}};Object.defineProperty(MethodNotFoundRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});let InvalidParamsRpcError=class InvalidParamsRpcError extends RpcError{constructor(t){super(t,{code:InvalidParamsRpcError.code,shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}};Object.defineProperty(InvalidParamsRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});let InternalRpcError=class InternalRpcError extends RpcError{constructor(t){super(t,{code:InternalRpcError.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}};Object.defineProperty(InternalRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});let InvalidInputRpcError=class InvalidInputRpcError extends RpcError{constructor(t){super(t,{code:InvalidInputRpcError.code,shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}};Object.defineProperty(InvalidInputRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});let ResourceNotFoundRpcError=class ResourceNotFoundRpcError extends RpcError{constructor(t){super(t,{code:ResourceNotFoundRpcError.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}};Object.defineProperty(ResourceNotFoundRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});let ResourceUnavailableRpcError=class ResourceUnavailableRpcError extends RpcError{constructor(t){super(t,{code:ResourceUnavailableRpcError.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}};Object.defineProperty(ResourceUnavailableRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});let TransactionRejectedRpcError=class TransactionRejectedRpcError extends RpcError{constructor(t){super(t,{code:TransactionRejectedRpcError.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}};Object.defineProperty(TransactionRejectedRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});let MethodNotSupportedRpcError=class MethodNotSupportedRpcError extends RpcError{constructor(t){super(t,{code:MethodNotSupportedRpcError.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}};Object.defineProperty(MethodNotSupportedRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});let LimitExceededRpcError=class LimitExceededRpcError extends RpcError{constructor(t){super(t,{code:LimitExceededRpcError.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}};Object.defineProperty(LimitExceededRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});let JsonRpcVersionUnsupportedError=class JsonRpcVersionUnsupportedError extends RpcError{constructor(t){super(t,{code:JsonRpcVersionUnsupportedError.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}};Object.defineProperty(JsonRpcVersionUnsupportedError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});let UserRejectedRequestError=class UserRejectedRequestError extends ProviderRpcError{constructor(t){super(t,{code:UserRejectedRequestError.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}};Object.defineProperty(UserRejectedRequestError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});let UnauthorizedProviderError=class UnauthorizedProviderError extends ProviderRpcError{constructor(t){super(t,{code:UnauthorizedProviderError.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}};Object.defineProperty(UnauthorizedProviderError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});let UnsupportedProviderMethodError=class UnsupportedProviderMethodError extends ProviderRpcError{constructor(t){super(t,{code:UnsupportedProviderMethodError.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}};Object.defineProperty(UnsupportedProviderMethodError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});let ProviderDisconnectedError=class ProviderDisconnectedError extends ProviderRpcError{constructor(t){super(t,{code:ProviderDisconnectedError.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}};Object.defineProperty(ProviderDisconnectedError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});let ChainDisconnectedError=class ChainDisconnectedError extends ProviderRpcError{constructor(t){super(t,{code:ChainDisconnectedError.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}};Object.defineProperty(ChainDisconnectedError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});let SwitchChainError=class SwitchChainError extends ProviderRpcError{constructor(t){super(t,{code:SwitchChainError.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}};Object.defineProperty(SwitchChainError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});let UnknownRpcError=class UnknownRpcError extends RpcError{constructor(t){super(t,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}},33639:function(t,s,p){"use strict";p.d(s,{Bh:function(){return TransactionNotFoundError},Yb:function(){return TransactionReceiptNotFoundError},j3:function(){return InvalidSerializableTransactionError},mc:function(){return WaitForTransactionReceiptTimeoutError},mk:function(){return TransactionExecutionError},xY:function(){return FeeConflictError},xr:function(){return prettyPrint}});var g=p(39625),m=p(67795),v=p(62027);function prettyPrint(t){let s=Object.entries(t).map(([t,s])=>void 0===s||!1===s?null:[t,s]).filter(Boolean),p=s.reduce((t,[s])=>Math.max(t,s.length),0);return s.map(([t,s])=>`  ${`${t}:`.padEnd(p+1)}  ${s}`).join("\n")}let FeeConflictError=class FeeConflictError extends v.G{constructor(){super("Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}};let InvalidSerializableTransactionError=class InvalidSerializableTransactionError extends v.G{constructor({transaction:t}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",prettyPrint(t),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}};let TransactionExecutionError=class TransactionExecutionError extends v.G{constructor(t,{account:s,docsPath:p,chain:v,data:_,gas:x,gasPrice:T,maxFeePerGas:F,maxPriorityFeePerGas:W,nonce:Z,to:Q,value:Y}){let X=prettyPrint({chain:v&&`${v?.name} (id: ${v?.id})`,from:s?.address,to:Q,value:void 0!==Y&&`${(0,g.d)(Y)} ${v?.nativeCurrency.symbol||"ETH"}`,data:_,gas:x,gasPrice:void 0!==T&&`${(0,m.o)(T)} gwei`,maxFeePerGas:void 0!==F&&`${(0,m.o)(F)} gwei`,maxPriorityFeePerGas:void 0!==W&&`${(0,m.o)(W)} gwei`,nonce:Z});super(t.shortMessage,{cause:t,docsPath:p,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Request Arguments:",X].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=t}};let TransactionNotFoundError=class TransactionNotFoundError extends v.G{constructor({blockHash:t,blockNumber:s,blockTag:p,hash:g,index:m}){let v="Transaction";p&&void 0!==m&&(v=`Transaction at block time "${p}" at index "${m}"`),t&&void 0!==m&&(v=`Transaction at block hash "${t}" at index "${m}"`),s&&void 0!==m&&(v=`Transaction at block number "${s}" at index "${m}"`),g&&(v=`Transaction with hash "${g}"`),super(`${v} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}};let TransactionReceiptNotFoundError=class TransactionReceiptNotFoundError extends v.G{constructor({hash:t}){super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}};let WaitForTransactionReceiptTimeoutError=class WaitForTransactionReceiptTimeoutError extends v.G{constructor({hash:t}){super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}},35280:function(t,s,p){"use strict";p.d(s,{CR:function(){return getContractAddress},Gr:function(){return getUrl},bo:function(){return getVersion}});let getContractAddress=t=>t,getUrl=t=>t,getVersion=()=>"viem@1.16.5"},34450:function(t,s,p){"use strict";p.d(s,{r:function(){return decodeAbiParameters}});var g=p(57412),m=p(45775),v=p(39135),_=p(3972),x=p(61836),T=p(95946),F=p(45444);function decodeAbiParameters(t,s){if("0x"===s&&t.length>0)throw new g.wb;if((0,v.d)(s)&&32>(0,v.d)(s))throw new g.xB({data:s,params:t,size:(0,v.d)(s)});return function({data:t,params:s}){let p=[],W=0;for(let Z=0;Z<s.length;Z++){if(W>=(0,v.d)(t))throw new g.xB({data:t,params:s,size:(0,v.d)(t)});let Q=s[Z],{consumed:Y,value:X}=function decodeParam({data:t,param:s,position:p}){let v=(0,F.S)(s.type);if(v){let[g,m]=v;return function(t,{param:s,length:p,position:g}){if(!p){let p=(0,T.ly)((0,_.tP)(t,g,g+32,{strict:!0})),m=(0,T.ly)((0,_.tP)(t,p,p+32,{strict:!0})),v=0,x=[];for(let g=0;g<m;++g){let g=decodeParam({data:(0,_.tP)(t,p+32),param:s,position:v});v+=g.consumed,x.push(g.value)}return{value:x,consumed:32}}if(hasDynamicChild(s)){let m=(0,F.S)(s.type),v=!m?.[0],x=0,W=[];for(let m=0;m<p;++m){let p=(0,T.ly)((0,_.tP)(t,g,g+32,{strict:!0})),F=decodeParam({data:(0,_.tP)(t,p),param:s,position:v?x:32*m});x+=F.consumed,W.push(F.value)}return{value:W,consumed:32}}let m=0,v=[];for(let _=0;_<p;++_){let p=decodeParam({data:t,param:s,position:g+m});m+=p.consumed,v.push(p.value)}return{value:v,consumed:m}}(t,{length:g,param:{...s,type:m},position:p})}if("tuple"===s.type)return function(t,{param:s,position:p}){let g=0===s.components.length||s.components.some(({name:t})=>!t),m=g?[]:{},v=0;if(hasDynamicChild(s)){let x=(0,T.ly)((0,_.tP)(t,p,p+32,{strict:!0}));for(let p=0;p<s.components.length;++p){let T=s.components[p],F=decodeParam({data:(0,_.tP)(t,x),param:T,position:v});v+=F.consumed,m[g?p:T?.name]=F.value}return{consumed:32,value:m}}for(let _=0;_<s.components.length;++_){let x=s.components[_],T=decodeParam({data:t,param:x,position:p+v});v+=T.consumed,m[g?_:x?.name]=T.value}return{consumed:v,value:m}}(t,{param:s,position:p});if("string"===s.type)return function(t,{position:s}){let p=(0,T.ly)((0,_.tP)(t,s,s+32,{strict:!0})),g=(0,T.ly)((0,_.tP)(t,p,p+32,{strict:!0}));if(0===g)return{consumed:32,value:""};let m=(0,T.rR)((0,x.f)((0,_.tP)(t,p+32,p+32+g,{strict:!0})));return{consumed:32,value:m}}(t,{position:p});if(s.type.startsWith("bytes"))return function(t,{param:s,position:p}){let[g,m]=s.type.split("bytes");if(!m){let s=(0,T.ly)((0,_.tP)(t,p,p+32,{strict:!0})),g=(0,T.ly)((0,_.tP)(t,s,s+32,{strict:!0}));if(0===g)return{consumed:32,value:"0x"};let m=(0,_.tP)(t,s+32,s+32+g,{strict:!0});return{consumed:32,value:m}}let v=(0,_.tP)(t,p,p+parseInt(m),{strict:!0});return{consumed:32,value:v}}(t,{param:s,position:p});let W=(0,_.tP)(t,p,p+32,{strict:!0});if(s.type.startsWith("uint")||s.type.startsWith("int"))return function(t,{param:s}){let p=s.type.startsWith("int"),g=parseInt(s.type.split("int")[1]||"256");return{consumed:32,value:g>48?(0,T.y_)(t,{signed:p}):(0,T.ly)(t,{signed:p})}}(W,{param:s});if("address"===s.type)return{consumed:32,value:(0,m.x)((0,_.tP)(W,-20))};if("bool"===s.type)return{consumed:32,value:(0,T.XA)(W)};throw new g.CI(s.type,{docsPath:"/docs/contract/decodeAbiParameters"})}({data:t,param:Q,position:W});p.push(X),W+=Y}return p}({data:s,params:t})}function hasDynamicChild(t){let{type:s}=t;if("string"===s||"bytes"===s||s.endsWith("[]"))return!0;if("tuple"===s)return t.components?.some(hasDynamicChild);let p=(0,F.S)(t.type);return!!(p&&hasDynamicChild({...t,type:p[1]}))}},86899:function(t,s,p){"use strict";p.d(s,{p:function(){return decodeErrorResult}});var g=p(21746),m=p(57412),v=p(3972),_=p(40552),x=p(34450),T=p(80522);function decodeErrorResult({abi:t,data:s}){let p=(0,v.tP)(s,0,4);if("0x"===p)throw new m.wb;let F=[...t||[],g.Up,g.hZ],W=F.find(t=>"error"===t.type&&p===(0,_.o)((0,T.t)(t)));if(!W)throw new m.yP(p,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:W,args:"inputs"in W&&W.inputs&&W.inputs.length>0?(0,x.r)(W.inputs,(0,v.tP)(s,4)):void 0,errorName:W.name}}},7210:function(t,s,p){"use strict";p.d(s,{k:function(){return decodeFunctionResult}});var g=p(57412),m=p(34450),v=p(40840);let _="/docs/contract/decodeFunctionResult";function decodeFunctionResult({abi:t,args:s,functionName:p,data:x}){let T=t[0];if(p&&!(T=(0,v.m)({abi:t,args:s,name:p})))throw new g.xL(p,{docsPath:_});if("function"!==T.type)throw new g.xL(void 0,{docsPath:_});if(!T.outputs)throw new g.MX(T.name,{docsPath:_});let F=(0,m.r)(T.outputs,x);return F&&F.length>1?F:F&&1===F.length?F[0]:void 0}},45444:function(t,s,p){"use strict";p.d(s,{E:function(){return encodeAbiParameters},S:function(){return getArrayComponents}});var g=p(57412),m=p(26087),v=p(49321),_=p(57040),x=p(61769),T=p(39135),F=p(3972),W=p(92106);function encodeAbiParameters(t,s){if(t.length!==s.length)throw new g.fs({expectedLength:t.length,givenLength:s.length});let p=function({params:t,values:s}){let p=[];for(let Z=0;Z<t.length;Z++)p.push(function prepareParam({param:t,value:s}){let p=getArrayComponents(t.type);if(p){let[m,v]=p;return function(t,{length:s,param:p}){let m=null===s;if(!Array.isArray(t))throw new g.hn(t);if(!m&&t.length!==s)throw new g.gr({expectedLength:s,givenLength:t.length,type:`${p.type}[${s}]`});let v=!1,x=[];for(let s=0;s<t.length;s++){let g=prepareParam({param:p,value:t[s]});g.dynamic&&(v=!0),x.push(g)}if(m||v){let t=encodeParams(x);if(m){let s=(0,W.eC)(x.length,{size:32});return{dynamic:!0,encoded:x.length>0?(0,_.zo)([s,t]):s}}if(v)return{dynamic:!0,encoded:t}}return{dynamic:!1,encoded:(0,_.zo)(x.map(({encoded:t})=>t))}}(s,{length:m,param:{...t,type:v}})}if("tuple"===t.type)return function(t,{param:s}){let p=!1,g=[];for(let m=0;m<s.components.length;m++){let v=s.components[m],_=Array.isArray(t)?m:v.name,x=prepareParam({param:v,value:t[_]});g.push(x),x.dynamic&&(p=!0)}return{dynamic:p,encoded:p?encodeParams(g):(0,_.zo)(g.map(({encoded:t})=>t))}}(s,{param:t});if("address"===t.type)return function(t){if(!(0,v.U)(t))throw new m.b({address:t});return{dynamic:!1,encoded:(0,x.gc)(t.toLowerCase())}}(s);if("bool"===t.type)return{dynamic:!1,encoded:(0,x.gc)((0,W.C4)(s))};if(t.type.startsWith("uint")||t.type.startsWith("int")){let p=t.type.startsWith("int");return function(t,{signed:s}){return{dynamic:!1,encoded:(0,W.eC)(t,{size:32,signed:s})}}(s,{signed:p})}if(t.type.startsWith("bytes"))return function(t,{param:s}){let[,p]=s.type.split("bytes"),m=(0,T.d)(t);if(!p){let s=t;return m%32!=0&&(s=(0,x.gc)(s,{dir:"right",size:32*Math.ceil((t.length-2)/2/32)})),{dynamic:!0,encoded:(0,_.zo)([(0,x.gc)((0,W.eC)(m,{size:32})),s])}}if(m!==parseInt(p))throw new g.M4({expectedSize:parseInt(p),value:t});return{dynamic:!1,encoded:(0,x.gc)(t,{dir:"right"})}}(s,{param:t});if("string"===t.type)return function(t){let s=(0,W.$G)(t),p=Math.ceil((0,T.d)(s)/32),g=[];for(let t=0;t<p;t++)g.push((0,x.gc)((0,F.tP)(s,32*t,(t+1)*32),{dir:"right"}));return{dynamic:!0,encoded:(0,_.zo)([(0,x.gc)((0,W.eC)((0,T.d)(s),{size:32})),...g])}}(s);throw new g.dh(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}({param:t[Z],value:s[Z]}));return p}({params:t,values:s}),Z=encodeParams(p);return 0===Z.length?"0x":Z}function encodeParams(t){let s=0;for(let p=0;p<t.length;p++){let{dynamic:g,encoded:m}=t[p];g?s+=32:s+=(0,T.d)(m)}let p=[],g=[],m=0;for(let v=0;v<t.length;v++){let{dynamic:_,encoded:x}=t[v];_?(p.push((0,W.eC)(s+m,{size:32})),g.push(x),m+=(0,T.d)(x)):p.push(x)}return(0,_.zo)([...p,...g])}function getArrayComponents(t){let s=t.match(/^(.*)\[(\d+)?\]$/);return s?[s[2]?Number(s[2]):null,s[1]]:void 0}},30286:function(t,s,p){"use strict";p.d(s,{w:function(){return encodeDeployData}});var g=p(57412),m=p(57040),v=p(45444);let _="/docs/contract/encodeDeployData";function encodeDeployData({abi:t,args:s,bytecode:p}){if(!s||0===s.length)return p;let x=t.find(t=>"type"in t&&"constructor"===t.type);if(!x)throw new g.fM({docsPath:_});if(!("inputs"in x)||!x.inputs||0===x.inputs.length)throw new g.cO({docsPath:_});let T=(0,v.E)(x.inputs,s);return(0,m.SM)([p,T])}},77799:function(t,s,p){"use strict";p.d(s,{R:function(){return encodeFunctionData}});var g=p(57412),m=p(57040),v=p(40552),_=p(45444),x=p(80522),T=p(40840);function encodeFunctionData({abi:t,args:s,functionName:p}){let F=t[0];if(p&&!(F=(0,T.m)({abi:t,args:s,name:p})))throw new g.xL(p,{docsPath:"/docs/contract/encodeFunctionData"});if("function"!==F.type)throw new g.xL(void 0,{docsPath:"/docs/contract/encodeFunctionData"});let W=(0,x.t)(F),Z=(0,v.o)(W),Q="inputs"in F&&F.inputs?(0,_.E)(F.inputs,s??[]):void 0;return(0,m.SM)([Z,Q??"0x"])}},80522:function(t,s,p){"use strict";p.d(s,{h:function(){return formatAbiParams},t:function(){return formatAbiItem}});var g=p(57412);function formatAbiItem(t,{includeName:s=!1}={}){if("function"!==t.type&&"event"!==t.type&&"error"!==t.type)throw new g.wM(t.type);return`${t.name}(${formatAbiParams(t.inputs,{includeName:s})})`}function formatAbiParams(t,{includeName:s=!1}={}){return t?t.map(t=>(function(t,{includeName:s}){return t.type.startsWith("tuple")?`(${formatAbiParams(t.components,{includeName:s})})${t.type.slice(5)}`:t.type+(s&&t.name?` ${t.name}`:"")})(t,{includeName:s})).join(s?", ":","):""}},40840:function(t,s,p){"use strict";p.d(s,{m:function(){return getAbiItem}});var g=p(15102),m=p(74059),v=p(40552),_=p(49321);function getAbiItem({abi:t,args:s=[],name:p}){let x=(0,g.v)(p,{strict:!1}),T=t.filter(t=>x?"function"===t.type?(0,v.o)(t)===p:"event"===t.type&&(0,m.e)(t)===p:"name"in t&&t.name===p);if(0!==T.length){if(1===T.length)return T[0];for(let t of T){if(!("inputs"in t))continue;if(!s||0===s.length){if(!t.inputs||0===t.inputs.length)return t;continue}if(!t.inputs||0===t.inputs.length||t.inputs.length!==s.length)continue;let p=s.every((s,p)=>{let g="inputs"in t&&t.inputs[p];return!!g&&function isArgOfType(t,s){let p=typeof t,g=s.type;switch(g){case"address":return(0,_.U)(t);case"bool":return"boolean"===p;case"function":case"string":return"string"===p;default:if("tuple"===g&&"components"in s)return Object.values(s.components).every((s,p)=>isArgOfType(Object.values(t)[p],s));if(/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(g))return"number"===p||"bigint"===p;if(/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(g))return"string"===p||t instanceof Uint8Array;if(/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(g))return Array.isArray(t)&&t.every(t=>isArgOfType(t,{...s,type:g.replace(/(\[[0-9]{0,}\])$/,"")}));return!1}}(s,g)});if(p)return t}return T[0]}}},45775:function(t,s,p){"use strict";p.d(s,{K:function(){return getAddress},x:function(){return checksumAddress}});var g=p(26087),m=p(11187),v=p(56254),_=p(49321);function checksumAddress(t,s){let p=s?`${s}${t.toLowerCase()}`:t.substring(2).toLowerCase(),g=(0,v.w)((0,m.qX)(p),"bytes"),_=(s?p.substring(`${s}0x`.length):p).split("");for(let t=0;t<40;t+=2)g[t>>1]>>4>=8&&_[t]&&(_[t]=_[t].toUpperCase()),(15&g[t>>1])>=8&&_[t+1]&&(_[t+1]=_[t+1].toUpperCase());return`0x${_.join("")}`}function getAddress(t,s){if(!(0,_.U)(t))throw new g.b({address:t});return checksumAddress(t,s)}},49321:function(t,s,p){"use strict";p.d(s,{U:function(){return isAddress}});let g=/^0x[a-fA-F0-9]{40}$/;function isAddress(t){return g.test(t)}},37029:function(t,s,p){"use strict";p.d(s,{n:function(){return buildRequest},y:function(){return isDeterministicError}});var g=p(62027),m=p(78863),v=p(39028),_=p(7760);let isDeterministicError=t=>"code"in t?-1!==t.code&&-32004!==t.code&&-32005!==t.code&&-32042!==t.code&&-32603!==t.code:t instanceof m.Gg&&!!t.status&&403!==t.status&&408!==t.status&&413!==t.status&&429!==t.status&&500!==t.status&&502!==t.status&&503!==t.status&&504!==t.status;function buildRequest(t,{retryDelay:s=150,retryCount:p=3}={}){return async x=>(0,_.J)(async()=>{try{return await t(x)}catch(t){switch(t.code){case v.s7.code:throw new v.s7(t);case v.B.code:throw new v.B(t);case v.LX.code:throw new v.LX(t);case v.nY.code:throw new v.nY(t);case v.XS.code:throw new v.XS(t);case v.yR.code:throw new v.yR(t);case v.Og.code:throw new v.Og(t);case v.pT.code:throw new v.pT(t);case v.KB.code:throw new v.KB(t);case v.gS.code:throw new v.gS(t);case v.Pv.code:throw new v.Pv(t);case v.GD.code:throw new v.GD(t);case v.ab.code:throw new v.ab(t);case v.PE.code:throw new v.PE(t);case v.Ts.code:throw new v.Ts(t);case v.u5.code:throw new v.u5(t);case v.I0.code:throw new v.I0(t);case v.x3.code:throw new v.x3(t);case 5e3:throw new v.ab(t);default:if(t instanceof g.G)throw t;throw new v.ir(t)}}},{delay:({count:t,error:p})=>{if(p&&p instanceof m.Gg){let t=p?.headers?.get("Retry-After");if(t?.match(/\d/))return 1e3*parseInt(t)}return~~(1<<t)*s},retryCount:p,shouldRetry:({error:t})=>!isDeterministicError(t)})}},22676:function(t,s,p){"use strict";p.d(s,{LI:function(){return getChainContractAddress},ax:function(){return defineChain},qg:function(){return assertCurrentChain}});var g=p(80377);function assertCurrentChain({chain:t,currentChainId:s}){if(!t)throw new g.Bk;if(s!==t.id)throw new g.Yl({chain:t,currentChainId:s})}function defineChain(t,s={}){let{fees:p=t.fees,formatters:g=t.formatters,serializers:m=t.serializers}=s;return{...t,fees:p,formatters:g,serializers:m}}function getChainContractAddress({blockNumber:t,chain:s,contract:p}){let m=s?.contracts?.[p];if(!m)throw new g.mm({chain:s,contract:{name:p}});if(t&&m.blockCreated&&m.blockCreated>t)throw new g.mm({blockNumber:t,chain:s,contract:{name:p,blockCreated:m.blockCreated}});return m.address}},57040:function(t,s,p){"use strict";function concat(t){return"string"==typeof t[0]?concatHex(t):function(t){let s=0;for(let p of t)s+=p.length;let p=new Uint8Array(s),g=0;for(let s of t)p.set(s,g),g+=s.length;return p}(t)}function concatHex(t){return`0x${t.reduce((t,s)=>t+s.replace("0x",""),"")}`}p.d(s,{SM:function(){return concatHex},zo:function(){return concat}})},15102:function(t,s,p){"use strict";function isHex(t,{strict:s=!0}={}){return!!t&&"string"==typeof t&&(s?/^0x[0-9a-fA-F]*$/.test(t):t.startsWith("0x"))}p.d(s,{v:function(){return isHex}})},61769:function(t,s,p){"use strict";p.d(s,{gc:function(){return padHex},vk:function(){return pad}});var g=p(69760);function pad(t,{dir:s,size:p=32}={}){return"string"==typeof t?padHex(t,{dir:s,size:p}):function(t,{dir:s,size:p=32}={}){if(null===p)return t;if(t.length>p)throw new g.$({size:t.length,targetSize:p,type:"bytes"});let m=new Uint8Array(p);for(let g=0;g<p;g++){let v="right"===s;m[v?g:p-g-1]=t[v?g:t.length-g-1]}return m}(t,{dir:s,size:p})}function padHex(t,{dir:s,size:p=32}={}){if(null===p)return t;let m=t.replace("0x","");if(m.length>2*p)throw new g.$({size:Math.ceil(m.length/2),targetSize:p,type:"hex"});return`0x${m["right"===s?"padEnd":"padStart"](2*p,"0")}`}},39135:function(t,s,p){"use strict";p.d(s,{d:function(){return size}});var g=p(15102);function size(t){return(0,g.v)(t,{strict:!1})?Math.ceil((t.length-2)/2):t.length}},3972:function(t,s,p){"use strict";p.d(s,{tP:function(){return slice}});var g=p(69760),m=p(15102),v=p(39135);function slice(t,s,p,{strict:g}={}){return(0,m.v)(t,{strict:!1})?function(t,s,p,{strict:g}={}){assertStartOffset(t,s);let m=`0x${t.replace("0x","").slice((s??0)*2,(p??t.length)*2)}`;return g&&assertEndOffset(m,s,p),m}(t,s,p,{strict:g}):function(t,s,p,{strict:g}={}){assertStartOffset(t,s);let m=t.slice(s,p);return g&&assertEndOffset(m,s,p),m}(t,s,p,{strict:g})}function assertStartOffset(t,s){if("number"==typeof s&&s>0&&s>(0,v.d)(t)-1)throw new g.m({offset:s,position:"start",size:(0,v.d)(t)})}function assertEndOffset(t,s,p){if("number"==typeof s&&"number"==typeof p&&(0,v.d)(t)!==p-s)throw new g.m({offset:p,position:"end",size:(0,v.d)(t)})}},61836:function(t,s,p){"use strict";function trim(t,{dir:s="left"}={}){let p="string"==typeof t?t.replace("0x",""):t,g=0;for(let t=0;t<p.length-1&&"0"===p["left"===s?t:p.length-t-1].toString();t++)g++;return(p="left"===s?p.slice(g):p.slice(0,p.length-g),"string"==typeof t)?(1===p.length&&"right"===s&&(p=`${p}0`),`0x${p.length%2==1?`0${p}`:p}`):p}p.d(s,{f:function(){return trim}})},95946:function(t,s,p){"use strict";p.d(s,{XA:function(){return hexToBool},Yf:function(){return assertSize},ly:function(){return hexToNumber},rR:function(){return hexToString},y_:function(){return hexToBigInt}});var g=p(87788),m=p(39135),v=p(61836),_=p(11187);function assertSize(t,{size:s}){if((0,m.d)(t)>s)throw new g.M6({givenSize:(0,m.d)(t),maxSize:s})}function hexToBigInt(t,s={}){let{signed:p}=s;s.size&&assertSize(t,{size:s.size});let g=BigInt(t);if(!p)return g;let m=(t.length-2)/2,v=(1n<<8n*BigInt(m)-1n)-1n;return g<=v?g:g-BigInt(`0x${"f".padStart(2*m,"f")}`)-1n}function hexToBool(t,s={}){let p=t;if(s.size&&(assertSize(p,{size:s.size}),p=(0,v.f)(p)),"0x00"===(0,v.f)(p))return!1;if("0x01"===(0,v.f)(p))return!0;throw new g.Cd(p)}function hexToNumber(t,s={}){return Number(hexToBigInt(t,s))}function hexToString(t,s={}){let p=(0,_.nr)(t);return s.size&&(assertSize(p,{size:s.size}),p=(0,v.f)(p,{dir:"right"})),new TextDecoder().decode(p)}},11187:function(t,s,p){"use strict";p.d(s,{O0:function(){return toBytes},nr:function(){return hexToBytes},qX:function(){return stringToBytes}});var g=p(62027),m=p(15102),v=p(61769),_=p(95946),x=p(92106);let T=new TextEncoder;function toBytes(t,s={}){return"number"==typeof t||"bigint"==typeof t?function(t,s){let p=(0,x.eC)(t,s);return hexToBytes(p)}(t,s):"boolean"==typeof t?function(t,s={}){let p=new Uint8Array(1);return(p[0]=Number(t),"number"==typeof s.size)?((0,_.Yf)(p,{size:s.size}),(0,v.vk)(p,{size:s.size})):p}(t,s):(0,m.v)(t)?hexToBytes(t,s):stringToBytes(t,s)}let F={zero:48,nine:57,A:65,F:70,a:97,f:102};function charCodeToBase16(t){return t>=F.zero&&t<=F.nine?t-F.zero:t>=F.A&&t<=F.F?t-(F.A-10):t>=F.a&&t<=F.f?t-(F.a-10):void 0}function hexToBytes(t,s={}){let p=t;s.size&&((0,_.Yf)(p,{size:s.size}),p=(0,v.vk)(p,{dir:"right",size:s.size}));let m=p.slice(2);m.length%2&&(m=`0${m}`);let x=m.length/2,T=new Uint8Array(x);for(let t=0,s=0;t<x;t++){let p=charCodeToBase16(m.charCodeAt(s++)),v=charCodeToBase16(m.charCodeAt(s++));if(void 0===p||void 0===v)throw new g.G(`Invalid byte sequence ("${m[s-2]}${m[s-1]}" in "${m}").`);T[t]=16*p+v}return T}function stringToBytes(t,s={}){let p=T.encode(t);return"number"==typeof s.size?((0,_.Yf)(p,{size:s.size}),(0,v.vk)(p,{dir:"right",size:s.size})):p}},92106:function(t,s,p){"use strict";p.d(s,{$G:function(){return stringToHex},C4:function(){return boolToHex},NC:function(){return toHex},ci:function(){return bytesToHex},eC:function(){return numberToHex}});var g=p(87788),m=p(61769),v=p(95946);let _=Array.from({length:256},(t,s)=>s.toString(16).padStart(2,"0"));function toHex(t,s={}){return"number"==typeof t||"bigint"==typeof t?numberToHex(t,s):"string"==typeof t?stringToHex(t,s):"boolean"==typeof t?boolToHex(t,s):bytesToHex(t,s)}function boolToHex(t,s={}){let p=`0x${Number(t)}`;return"number"==typeof s.size?((0,v.Yf)(p,{size:s.size}),(0,m.vk)(p,{size:s.size})):p}function bytesToHex(t,s={}){let p="";for(let s=0;s<t.length;s++)p+=_[t[s]];let g=`0x${p}`;return"number"==typeof s.size?((0,v.Yf)(g,{size:s.size}),(0,m.vk)(g,{dir:"right",size:s.size})):g}function numberToHex(t,s={}){let p;let{signed:v,size:_}=s,x=BigInt(t);_?p=v?(1n<<8n*BigInt(_)-1n)-1n:2n**(8n*BigInt(_))-1n:"number"==typeof t&&(p=BigInt(Number.MAX_SAFE_INTEGER));let T="bigint"==typeof p&&v?-p-1n:0;if(p&&x>p||x<T){let s="bigint"==typeof t?"n":"";throw new g.J5({max:p?`${p}${s}`:void 0,min:`${T}${s}`,signed:v,size:_,value:`${t}${s}`})}let F=`0x${(v&&x<0?(1n<<BigInt(8*_))+BigInt(x):x).toString(16)}`;return _?(0,m.vk)(F,{size:_}):F}let x=new TextEncoder;function stringToHex(t,s={}){let p=x.encode(t);return bytesToHex(p,s)}},87469:function(t,s,p){"use strict";p.d(s,{k:function(){return getNodeError}});var g=p(62027),m=p(26445);function getNodeError(t,s){let p=(t.details||"").toLowerCase(),v=t.walk(t=>t.code===m.M_.code);if(v instanceof g.G)return new m.M_({cause:t,message:v.details});if(m.M_.nodeMessage.test(p))return new m.M_({cause:t,message:t.details});if(m.Hh.nodeMessage.test(p))return new m.Hh({cause:t,maxFeePerGas:s?.maxFeePerGas});if(m.G$.nodeMessage.test(p))return new m.G$({cause:t,maxFeePerGas:s?.maxFeePerGas});if(m.ZI.nodeMessage.test(p))return new m.ZI({cause:t,nonce:s?.nonce});if(m.vU.nodeMessage.test(p))return new m.vU({cause:t,nonce:s?.nonce});if(m.se.nodeMessage.test(p))return new m.se({cause:t,nonce:s?.nonce});else if(m.C_.nodeMessage.test(p))return new m.C_({cause:t});else if(m.WF.nodeMessage.test(p))return new m.WF({cause:t,gas:s?.gas});else if(m.dR.nodeMessage.test(p))return new m.dR({cause:t,gas:s?.gas});else if(m.pZ.nodeMessage.test(p))return new m.pZ({cause:t});else if(m.cs.nodeMessage.test(p))return new m.cs({cause:t,maxFeePerGas:s?.maxFeePerGas,maxPriorityFeePerGas:s?.maxPriorityFeePerGas});return new m.cj({cause:t})}},43310:function(t,s,p){"use strict";p.d(s,{Z:function(){return formatBlock}});var g=p(6073);function formatBlock(t){let s=t.transactions?.map(t=>"string"==typeof t?t:g.Tr(t));return{...t,baseFeePerGas:t.baseFeePerGas?BigInt(t.baseFeePerGas):null,difficulty:t.difficulty?BigInt(t.difficulty):void 0,gasLimit:t.gasLimit?BigInt(t.gasLimit):void 0,gasUsed:t.gasUsed?BigInt(t.gasUsed):void 0,hash:t.hash?t.hash:null,logsBloom:t.logsBloom?t.logsBloom:null,nonce:t.nonce?t.nonce:null,number:t.number?BigInt(t.number):null,size:t.size?BigInt(t.size):void 0,timestamp:t.timestamp?BigInt(t.timestamp):void 0,transactions:s,totalDifficulty:t.totalDifficulty?BigInt(t.totalDifficulty):null}}},61163:function(t,s,p){"use strict";function extract(t,{format:s}){if(!s)return{};let p=Object.keys(s({}));return p.reduce((s,p)=>(t?.hasOwnProperty(p)&&(s[p]=t[p]),s),{})}p.d(s,{K:function(){return extract}})},6073:function(t,s,p){"use strict";p.d(s,{Tr:function(){return formatTransaction},c8:function(){return m}});var g=p(95946);let m={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function formatTransaction(t){let s={...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,chainId:t.chainId?(0,g.ly)(t.chainId):void 0,gas:t.gas?BigInt(t.gas):void 0,gasPrice:t.gasPrice?BigInt(t.gasPrice):void 0,maxFeePerGas:t.maxFeePerGas?BigInt(t.maxFeePerGas):void 0,maxPriorityFeePerGas:t.maxPriorityFeePerGas?BigInt(t.maxPriorityFeePerGas):void 0,nonce:t.nonce?(0,g.ly)(t.nonce):void 0,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,type:t.type?m[t.type]:void 0,typeHex:t.type?t.type:void 0,value:t.value?BigInt(t.value):void 0,v:t.v?BigInt(t.v):void 0};return"legacy"===s.type&&(delete s.accessList,delete s.maxFeePerGas,delete s.maxPriorityFeePerGas),"eip2930"===s.type&&(delete s.maxFeePerGas,delete s.maxPriorityFeePerGas),s}},74688:function(t,s,p){"use strict";p.d(s,{tG:function(){return formatTransactionRequest}});var g=p(92106);let m={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function formatTransactionRequest(t){return{...t,gas:void 0!==t.gas?(0,g.eC)(t.gas):void 0,gasPrice:void 0!==t.gasPrice?(0,g.eC)(t.gasPrice):void 0,maxFeePerGas:void 0!==t.maxFeePerGas?(0,g.eC)(t.maxFeePerGas):void 0,maxPriorityFeePerGas:void 0!==t.maxPriorityFeePerGas?(0,g.eC)(t.maxPriorityFeePerGas):void 0,nonce:void 0!==t.nonce?(0,g.eC)(t.nonce):void 0,type:void 0!==t.type?m[t.type]:void 0,value:void 0!==t.value?(0,g.eC)(t.value):void 0}}},74059:function(t,s,p){"use strict";p.d(s,{e:function(){return getEventSelector}});var g=p(11187),m=p(9e3);let getEventSignature=t=>(0,m.r)(t);var v=p(56254);let hash=t=>(0,v.w)((0,g.O0)(t)),getEventSelector=t=>hash(getEventSignature(t))},40552:function(t,s,p){"use strict";p.d(s,{o:function(){return getFunctionSelector}});var g=p(3972),m=p(11187),v=p(9e3),_=p(56254);let hash=t=>(0,_.w)((0,m.O0)(t)),getFunctionSelector=t=>(0,g.tP)(hash((0,v.r)(t)),0,4)},9e3:function(t,s,p){"use strict";p.d(s,{r:function(){return getFunctionSignature}});var g=p(80522);let m=/((function|event)\s)?(.*)(\((.*)\))/;function extractFunctionParts(t){let s=t.match(m),p=s?.[2]||void 0,g=s?.[3],v=s?.[5]||void 0;return{type:p,name:g,params:v}}let getFunctionSignature=t=>{if("string"==typeof t){let s=extractFunctionParts(t).name,p=function(t){let s=extractFunctionParts(t).params,p=s?.split(",").map(t=>t.trim().split(" "));return p?.map(t=>({type:t[0],name:"indexed"===t[1]?t[2]:t[1],..."indexed"===t[1]?{indexed:!0}:{}}))}(t)||[];return`${s}(${p.map(({type:t})=>t).join(",")})`}return(0,g.t)(t)}},56254:function(t,s,p){"use strict";function number(t){if(!Number.isSafeInteger(t)||t<0)throw Error(`Wrong positive integer: ${t}`)}function bytes(t,...s){if(!(t instanceof Uint8Array))throw Error("Expected Uint8Array");if(s.length>0&&!s.includes(t.length))throw Error(`Expected Uint8Array of length ${s}, not of length=${t.length}`)}function exists(t,s=!0){if(t.destroyed)throw Error("Hash instance has been destroyed");if(s&&t.finished)throw Error("Hash#digest() has already been called")}p.d(s,{w:function(){return keccak256}});let g=BigInt(4294967296-1),m=BigInt(32),rotlSH=(t,s,p)=>t<<p|s>>>32-p,rotlSL=(t,s,p)=>s<<p|t>>>32-p,rotlBH=(t,s,p)=>s<<p-32|t>>>64-p,rotlBL=(t,s,p)=>t<<p-32|s>>>64-p,u8a=t=>t instanceof Uint8Array,u32=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),v=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0];if(!v)throw Error("Non little-endian hardware is not supported");function toBytes(t){if("string"==typeof t&&(t=function(t){if("string"!=typeof t)throw Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}(t)),!u8a(t))throw Error(`expected Uint8Array, got ${typeof t}`);return t}let Hash=class Hash{clone(){return this._cloneInto()}};let[_,x,T]=[[],[],[]],F=BigInt(0),W=BigInt(1),Z=BigInt(2),Q=BigInt(7),Y=BigInt(256),X=BigInt(113);for(let t=0,s=W,p=1,g=0;t<24;t++){[p,g]=[g,(2*p+3*g)%5],_.push(2*(5*g+p)),x.push((t+1)*(t+2)/2%64);let m=F;for(let t=0;t<7;t++)(s=(s<<W^(s>>Q)*X)%Y)&Z&&(m^=W<<(W<<BigInt(t))-W);T.push(m)}let[J,en]=function(t,s=!1){let p=new Uint32Array(t.length),v=new Uint32Array(t.length);for(let _=0;_<t.length;_++){let{h:x,l:T}=function(t,s=!1){return s?{h:Number(t&g),l:Number(t>>m&g)}:{h:0|Number(t>>m&g),l:0|Number(t&g)}}(t[_],s);[p[_],v[_]]=[x,T]}return[p,v]}(T,!0),rotlH=(t,s,p)=>p>32?rotlBH(t,s,p):rotlSH(t,s,p),rotlL=(t,s,p)=>p>32?rotlBL(t,s,p):rotlSL(t,s,p);let Keccak=class Keccak extends Hash{constructor(t,s,p,g=!1,m=24){if(super(),this.blockLen=t,this.suffix=s,this.outputLen=p,this.enableXOF=g,this.rounds=m,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,number(p),0>=this.blockLen||this.blockLen>=200)throw Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=u32(this.state)}keccak(){!function(t,s=24){let p=new Uint32Array(10);for(let g=24-s;g<24;g++){for(let s=0;s<10;s++)p[s]=t[s]^t[s+10]^t[s+20]^t[s+30]^t[s+40];for(let s=0;s<10;s+=2){let g=(s+8)%10,m=(s+2)%10,v=p[m],_=p[m+1],x=rotlH(v,_,1)^p[g],T=rotlL(v,_,1)^p[g+1];for(let p=0;p<50;p+=10)t[s+p]^=x,t[s+p+1]^=T}let s=t[2],m=t[3];for(let p=0;p<24;p++){let g=x[p],v=rotlH(s,m,g),T=rotlL(s,m,g),F=_[p];s=t[F],m=t[F+1],t[F]=v,t[F+1]=T}for(let s=0;s<50;s+=10){for(let g=0;g<10;g++)p[g]=t[s+g];for(let g=0;g<10;g++)t[s+g]^=~p[(g+2)%10]&p[(g+4)%10]}t[0]^=J[g],t[1]^=en[g]}p.fill(0)}(this.state32,this.rounds),this.posOut=0,this.pos=0}update(t){exists(this);let{blockLen:s,state:p}=this;t=toBytes(t);let g=t.length;for(let m=0;m<g;){let v=Math.min(s-this.pos,g-m);for(let s=0;s<v;s++)p[this.pos++]^=t[m++];this.pos===s&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:t,suffix:s,pos:p,blockLen:g}=this;t[p]^=s,(128&s)!=0&&p===g-1&&this.keccak(),t[g-1]^=128,this.keccak()}writeInto(t){exists(this,!1),bytes(t),this.finish();let s=this.state,{blockLen:p}=this;for(let g=0,m=t.length;g<m;){this.posOut>=p&&this.keccak();let v=Math.min(p-this.posOut,m-g);t.set(s.subarray(this.posOut,this.posOut+v),g),this.posOut+=v,g+=v}return t}xofInto(t){if(!this.enableXOF)throw Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return number(t),this.xofInto(new Uint8Array(t))}digestInto(t){if(!function(t,s){bytes(t);let p=s.outputLen;if(t.length<p)throw Error(`digestInto() expects output buffer of length at least ${p}`)}(t,this),this.finished)throw Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){let{blockLen:s,suffix:p,outputLen:g,rounds:m,enableXOF:v}=this;return t||(t=new Keccak(s,p,g,v,m)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=m,t.suffix=p,t.outputLen=g,t.enableXOF=v,t.destroyed=this.destroyed,t}};let ei=function(t){let hashC=s=>t().update(toBytes(s)).digest(),s=t();return hashC.outputLen=s.outputLen,hashC.blockLen=s.blockLen,hashC.create=()=>t(),hashC}(()=>new Keccak(136,1,32));var eo=p(15102),ea=p(11187),es=p(92106);function keccak256(t,s){let p=ei((0,eo.v)(t,{strict:!1})?(0,ea.O0)(t):t);return"bytes"===(s||"hex")?p:(0,es.NC)(p)}},32357:function(t,s,p){"use strict";p.d(s,{S:function(){return createBatchScheduler}});let g=new Map;function createBatchScheduler({fn:t,id:s,shouldSplitBatch:p,wait:m=0}){let exec=async()=>{let s=getScheduler();flush();let p=s.map(({args:t})=>t);0!==p.length&&t(p).then(t=>{s.forEach(({pendingPromise:s},p)=>s.resolve?.([t[p],t]))}).catch(t=>{s.forEach(({pendingPromise:s})=>s.reject?.(t))})},flush=()=>g.delete(s),getBatchedArgs=()=>getScheduler().map(({args:t})=>t),getScheduler=()=>g.get(s)||[],setScheduler=t=>g.set(s,[...getScheduler(),t]);return{flush,async schedule(t){let s={},g=new Promise((t,p)=>{s.resolve=t,s.reject=p}),v=p?.([...getBatchedArgs(),t]);v&&exec();let _=getScheduler().length>0;return _?setScheduler({args:t,pendingPromise:s}):(setScheduler({args:t,pendingPromise:s}),setTimeout(exec,m)),g}}}},7760:function(t,s,p){"use strict";p.d(s,{J:function(){return withRetry}});var g=p(62914);function withRetry(t,{delay:s=100,retryCount:p=2,shouldRetry:m=()=>!0}={}){return new Promise((v,_)=>{let attemptRetry=async({count:x=0}={})=>{let retry=async({error:t})=>{let p="function"==typeof s?s({count:x,error:t}):s;p&&await (0,g.D)(p),attemptRetry({count:x+1})};try{let s=await t();v(s)}catch(t){if(x<p&&await m({count:x,error:t}))return retry({error:t});_(t)}};attemptRetry()})}},96070:function(t,s,p){"use strict";p.d(s,{P:function(){return stringify}});let stringify=(t,s,p)=>JSON.stringify(t,(t,p)=>{let g="bigint"==typeof p?p.toString():p;return"function"==typeof s?s(t,g):g},p)},47531:function(t,s,p){"use strict";p.d(s,{F:function(){return assertRequest}});var g=p(14503),m=p(26087),v=p(26445),_=p(33639),x=p(49321);function assertRequest(t){let{account:s,gasPrice:p,maxFeePerGas:T,maxPriorityFeePerGas:F,to:W}=t,Z=s?(0,g.T)(s):void 0;if(Z&&!(0,x.U)(Z.address))throw new m.b({address:Z.address});if(W&&!(0,x.U)(W))throw new m.b({address:W});if(void 0!==p&&(void 0!==T||void 0!==F))throw new _.xY;if(T&&T>2n**256n-1n)throw new v.Hh({maxFeePerGas:T});if(F&&T&&F>T)throw new v.cs({maxFeePerGas:T,maxPriorityFeePerGas:F})}},71352:function(t,s,p){"use strict";p.d(s,{cj:function(){return getTypesForEIP712Domain},iC:function(){return validateTypedData}});var g=p(57412),m=p(26087),v=p(49321),_=p(39135),x=p(92106);let T=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,F=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function validateTypedData({domain:t,message:s,primaryType:p,types:W}){let validateData=(t,s)=>{for(let p of t){let{name:t,type:Z}=p,Q=s[t],Y=Z.match(F);if(Y&&("number"==typeof Q||"bigint"==typeof Q)){let[t,s,p]=Y;(0,x.eC)(Q,{signed:"int"===s,size:parseInt(p)/8})}if("address"===Z&&"string"==typeof Q&&!(0,v.U)(Q))throw new m.b({address:Q});let X=Z.match(T);if(X){let[t,s]=X;if(s&&(0,_.d)(Q)!==parseInt(s))throw new g.KY({expectedSize:parseInt(s),givenSize:(0,_.d)(Q)})}let J=W[Z];J&&validateData(J,Q)}};if(W.EIP712Domain&&t&&validateData(W.EIP712Domain,t),"EIP712Domain"!==p){let t=W[p];validateData(t,s)}}function getTypesForEIP712Domain({domain:t}){return["string"==typeof t?.name&&{name:"name",type:"string"},t?.version&&{name:"version",type:"string"},"number"==typeof t?.chainId&&{name:"chainId",type:"uint256"},t?.verifyingContract&&{name:"verifyingContract",type:"address"},t?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}},39625:function(t,s,p){"use strict";p.d(s,{d:function(){return formatEther}});var g=p(84192),m=p(15229);function formatEther(t,s="wei"){return(0,m.b)(t,g.ez[s])}},67795:function(t,s,p){"use strict";p.d(s,{o:function(){return formatGwei}});var g=p(84192),m=p(15229);function formatGwei(t,s="wei"){return(0,m.b)(t,g.Zn[s])}},15229:function(t,s,p){"use strict";function formatUnits(t,s){let p=t.toString(),g=p.startsWith("-");g&&(p=p.slice(1));let[m,v]=[(p=p.padStart(s,"0")).slice(0,p.length-s),p.slice(p.length-s)];return v=v.replace(/(0+)$/,""),`${g?"-":""}${m||"0"}${v?`.${v}`:""}`}p.d(s,{b:function(){return formatUnits}})},62914:function(t,s,p){"use strict";async function wait(t){return new Promise(s=>setTimeout(s,t))}p.d(s,{D:function(){return wait}})},69077:function(t,s,p){"use strict";let g;function noop(){}p.d(s,{eM:function(){return WagmiConfig},_g:function(){return createConfig},mA:function(){return useAccount},do:function(){return useContractRead},GG:function(){return useContractWrite},LN:function(){return useNetwork},PJ:function(){return usePrepareContractWrite},g0:function(){return useSwitchNetwork},BX:function(){return useWaitForTransaction}});let m="undefined"==typeof window||"Deno"in window;function utils_noop(){}function isValidTimeout(t){return"number"==typeof t&&t>=0&&t!==1/0}function timeUntilStale(t,s){return Math.max(t+(s||0)-Date.now(),0)}function parseQueryArgs(t,s,p){return isQueryKey(t)?"function"==typeof s?{...p,queryKey:t,queryFn:s}:{...s,queryKey:t}:t}function parseMutationArgs(t,s,p){return isQueryKey(t)?"function"==typeof s?{...p,mutationKey:t,mutationFn:s}:{...s,mutationKey:t}:"function"==typeof t?{...s,mutationFn:t}:{...t}}function parseFilterArgs(t,s,p){return isQueryKey(t)?[{...s,queryKey:t},p]:[t||{},s]}function matchQuery(t,s){let{type:p="all",exact:g,fetchStatus:m,predicate:v,queryKey:_,stale:x}=t;if(isQueryKey(_)){if(g){if(s.queryHash!==hashQueryKeyByOptions(_,s.options))return!1}else{if(!partialDeepEqual(s.queryKey,_))return!1}}if("all"!==p){let t=s.isActive();if("active"===p&&!t||"inactive"===p&&t)return!1}return("boolean"!=typeof x||s.isStale()===x)&&(void 0===m||m===s.state.fetchStatus)&&(!v||!!v(s))}function matchMutation(t,s){let{exact:p,fetching:g,predicate:m,mutationKey:v}=t;if(isQueryKey(v)){if(!s.options.mutationKey)return!1;if(p){if(hashQueryKey(s.options.mutationKey)!==hashQueryKey(v))return!1}else{if(!partialDeepEqual(s.options.mutationKey,v))return!1}}return("boolean"!=typeof g||"loading"===s.state.status===g)&&(!m||!!m(s))}function hashQueryKeyByOptions(t,s){let p=(null==s?void 0:s.queryKeyHashFn)||hashQueryKey;return p(t)}function hashQueryKey(t){return JSON.stringify(t,(t,s)=>isPlainObject(s)?Object.keys(s).sort().reduce((t,p)=>(t[p]=s[p],t),{}):s)}function partialDeepEqual(t,s){return t===s||typeof t==typeof s&&!!t&&!!s&&"object"==typeof t&&"object"==typeof s&&!Object.keys(s).some(p=>!partialDeepEqual(t[p],s[p]))}function utils_replaceEqualDeep(t,s){if(t===s)return t;let p=isPlainArray(t)&&isPlainArray(s);if(p||isPlainObject(t)&&isPlainObject(s)){let g=p?t.length:Object.keys(t).length,m=p?s:Object.keys(s),v=m.length,_=p?[]:{},x=0;for(let g=0;g<v;g++){let v=p?g:m[g];_[v]=utils_replaceEqualDeep(t[v],s[v]),_[v]===t[v]&&x++}return g===v&&x===g?t:_}return s}function shallowEqualObjects(t,s){if(t&&!s||s&&!t)return!1;for(let p in t)if(t[p]!==s[p])return!1;return!0}function isPlainArray(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function isPlainObject(t){if(!hasObjectPrototype(t))return!1;let s=t.constructor;if(void 0===s)return!0;let p=s.prototype;return!!(hasObjectPrototype(p)&&p.hasOwnProperty("isPrototypeOf"))}function hasObjectPrototype(t){return"[object Object]"===Object.prototype.toString.call(t)}function isQueryKey(t){return Array.isArray(t)}function sleep(t){return new Promise(s=>{setTimeout(s,t)})}function scheduleMicrotask(t){sleep(0).then(t)}function replaceData(t,s,p){return null!=p.isDataEqual&&p.isDataEqual(t,s)?t:"function"==typeof p.structuralSharing?p.structuralSharing(t,s):!1!==p.structuralSharing?utils_replaceEqualDeep(t,s):s}let v=console,_=function(){let t=[],s=0,notifyFn=t=>{t()},batchNotifyFn=t=>{t()},schedule=p=>{s?t.push(p):scheduleMicrotask(()=>{notifyFn(p)})},flush=()=>{let s=t;t=[],s.length&&scheduleMicrotask(()=>{batchNotifyFn(()=>{s.forEach(t=>{notifyFn(t)})})})};return{batch:t=>{let p;s++;try{p=t()}finally{--s||flush()}return p},batchCalls:t=>(...s)=>{schedule(()=>{t(...s)})},schedule,setNotifyFunction:t=>{notifyFn=t},setBatchNotifyFunction:t=>{batchNotifyFn=t}}}();let Subscribable=class Subscribable{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){let s={listener:t};return this.listeners.add(s),this.onSubscribe(),()=>{this.listeners.delete(s),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}};let x=new class extends Subscribable{constructor(){super(),this.setup=t=>{if(!m&&window.addEventListener){let listener=()=>t();return window.addEventListener("visibilitychange",listener,!1),window.addEventListener("focus",listener,!1),()=>{window.removeEventListener("visibilitychange",listener),window.removeEventListener("focus",listener)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;null==(t=this.cleanup)||t.call(this),this.cleanup=void 0}}setEventListener(t){var s;this.setup=t,null==(s=this.cleanup)||s.call(this),this.cleanup=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){let s=this.focused!==t;s&&(this.focused=t,this.onFocus())}onFocus(){this.listeners.forEach(({listener:t})=>{t()})}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}},T=["online","offline"],F=new class extends Subscribable{constructor(){super(),this.setup=t=>{if(!m&&window.addEventListener){let listener=()=>t();return T.forEach(t=>{window.addEventListener(t,listener,!1)}),()=>{T.forEach(t=>{window.removeEventListener(t,listener)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;null==(t=this.cleanup)||t.call(this),this.cleanup=void 0}}setEventListener(t){var s;this.setup=t,null==(s=this.cleanup)||s.call(this),this.cleanup=t(t=>{"boolean"==typeof t?this.setOnline(t):this.onOnline()})}setOnline(t){let s=this.online!==t;s&&(this.online=t,this.onOnline())}onOnline(){this.listeners.forEach(({listener:t})=>{t()})}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}};function defaultRetryDelay(t){return Math.min(1e3*2**t,3e4)}function canFetch(t){return(null!=t?t:"online")!=="online"||F.isOnline()}let CancelledError=class CancelledError{constructor(t){this.revert=null==t?void 0:t.revert,this.silent=null==t?void 0:t.silent}};function isCancelledError(t){return t instanceof CancelledError}function createRetryer(t){let s,p,g,m=!1,v=0,_=!1,T=new Promise((t,s)=>{p=t,g=s}),shouldPause=()=>!x.isFocused()||"always"!==t.networkMode&&!F.isOnline(),resolve=g=>{_||(_=!0,null==t.onSuccess||t.onSuccess(g),null==s||s(),p(g))},reject=p=>{_||(_=!0,null==t.onError||t.onError(p),null==s||s(),g(p))},pause=()=>new Promise(p=>{s=t=>{let s=_||!shouldPause();return s&&p(t),s},null==t.onPause||t.onPause()}).then(()=>{s=void 0,_||null==t.onContinue||t.onContinue()}),run=()=>{let s;if(!_){try{s=t.fn()}catch(t){s=Promise.reject(t)}Promise.resolve(s).then(resolve).catch(s=>{var p,g;if(_)return;let x=null!=(p=t.retry)?p:3,T=null!=(g=t.retryDelay)?g:defaultRetryDelay,F="function"==typeof T?T(v,s):T,W=!0===x||"number"==typeof x&&v<x||"function"==typeof x&&x(v,s);if(m||!W){reject(s);return}v++,null==t.onFail||t.onFail(v,s),sleep(F).then(()=>{if(shouldPause())return pause()}).then(()=>{m?reject(s):run()})})}};return canFetch(t.networkMode)?run():pause().then(run),{promise:T,cancel:s=>{_||(reject(new CancelledError(s)),null==t.abort||t.abort())},continue:()=>{let t=null==s?void 0:s();return t?T:Promise.resolve()},cancelRetry:()=>{m=!0},continueRetry:()=>{m=!1}}}let Removable=class Removable{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),isValidTimeout(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,null!=t?t:m?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}};let Query=class Query extends Removable{constructor(t){super(),this.abortSignalConsumed=!1,this.defaultOptions=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.cache=t.cache,this.logger=t.logger||v,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.initialState=t.state||function(t){let s="function"==typeof t.initialData?t.initialData():t.initialData,p=void 0!==s,g=p?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:s,dataUpdateCount:0,dataUpdatedAt:p?null!=g?g:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:p?"success":"loading",fetchStatus:"idle"}}(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(t,s){let p=replaceData(this.state.data,t,this.options);return this.dispatch({data:p,type:"success",dataUpdatedAt:null==s?void 0:s.updatedAt,manual:null==s?void 0:s.manual}),p}setState(t,s){this.dispatch({type:"setState",state:t,setStateOptions:s})}cancel(t){var s;let p=this.promise;return null==(s=this.retryer)||s.cancel(t),p?p.then(utils_noop).catch(utils_noop):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(t=>!1!==t.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!timeUntilStale(this.state.dataUpdatedAt,t)}onFocus(){var t;let s=this.observers.find(t=>t.shouldFetchOnWindowFocus());s&&s.refetch({cancelRefetch:!1}),null==(t=this.retryer)||t.continue()}onOnline(){var t;let s=this.observers.find(t=>t.shouldFetchOnReconnect());s&&s.refetch({cancelRefetch:!1}),null==(t=this.retryer)||t.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(s=>s!==t),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(t,s){var p,g,m,v;if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&null!=s&&s.cancelRefetch)this.cancel({silent:!0});else if(this.promise)return null==(m=this.retryer)||m.continueRetry(),this.promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.observers.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}let _=function(){if("function"==typeof AbortController)return new AbortController}(),x={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},addSignalProperty=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>{if(_)return this.abortSignalConsumed=!0,_.signal}})};addSignalProperty(x);let T={fetchOptions:s,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(x)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'")};addSignalProperty(T),null==(p=this.options.behavior)||p.onFetch(T),this.revertState=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(g=T.fetchOptions)?void 0:g.meta))&&this.dispatch({type:"fetch",meta:null==(v=T.fetchOptions)?void 0:v.meta});let onError=t=>{if(isCancelledError(t)&&t.silent||this.dispatch({type:"error",error:t}),!isCancelledError(t)){var s,p,g,m;null==(s=(p=this.cache.config).onError)||s.call(p,t,this),null==(g=(m=this.cache.config).onSettled)||g.call(m,this.state.data,t,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=createRetryer({fn:T.fetchFn,abort:null==_?void 0:_.abort.bind(_),onSuccess:t=>{var s,p,g,m;if(void 0===t){onError(Error(this.queryHash+" data is undefined"));return}this.setData(t),null==(s=(p=this.cache.config).onSuccess)||s.call(p,t,this),null==(g=(m=this.cache.config).onSettled)||g.call(m,t,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError,onFail:(t,s)=>{this.dispatch({type:"failed",failureCount:t,error:s})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:T.options.retry,retryDelay:T.options.retryDelay,networkMode:T.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(t){this.state=(s=>{var p,g;switch(t.type){case"failed":return{...s,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...s,fetchStatus:"paused"};case"continue":return{...s,fetchStatus:"fetching"};case"fetch":return{...s,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!=(p=t.meta)?p:null,fetchStatus:canFetch(this.options.networkMode)?"fetching":"paused",...!s.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...s,data:t.data,dataUpdateCount:s.dataUpdateCount+1,dataUpdatedAt:null!=(g=t.dataUpdatedAt)?g:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let m=t.error;if(isCancelledError(m)&&m.revert&&this.revertState)return{...this.revertState,fetchStatus:"idle"};return{...s,error:m,errorUpdateCount:s.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:s.fetchFailureCount+1,fetchFailureReason:m,fetchStatus:"idle",status:"error"};case"invalidate":return{...s,isInvalidated:!0};case"setState":return{...s,...t.state}}})(this.state),_.batch(()=>{this.observers.forEach(s=>{s.onQueryUpdate(t)}),this.cache.notify({query:this,type:"updated",action:t})})}};let QueryCache=class QueryCache extends Subscribable{constructor(t){super(),this.config=t||{},this.queries=[],this.queriesMap={}}build(t,s,p){var g;let m=s.queryKey,v=null!=(g=s.queryHash)?g:hashQueryKeyByOptions(m,s),_=this.get(v);return _||(_=new Query({cache:this,logger:t.getLogger(),queryKey:m,queryHash:v,options:t.defaultQueryOptions(s),state:p,defaultOptions:t.getQueryDefaults(m)}),this.add(_)),_}add(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"added",query:t}))}remove(t){let s=this.queriesMap[t.queryHash];s&&(t.destroy(),this.queries=this.queries.filter(s=>s!==t),s===t&&delete this.queriesMap[t.queryHash],this.notify({type:"removed",query:t}))}clear(){_.batch(()=>{this.queries.forEach(t=>{this.remove(t)})})}get(t){return this.queriesMap[t]}getAll(){return this.queries}find(t,s){let[p]=parseFilterArgs(t,s);return void 0===p.exact&&(p.exact=!0),this.queries.find(t=>matchQuery(p,t))}findAll(t,s){let[p]=parseFilterArgs(t,s);return Object.keys(p).length>0?this.queries.filter(t=>matchQuery(p,t)):this.queries}notify(t){_.batch(()=>{this.listeners.forEach(({listener:s})=>{s(t)})})}onFocus(){_.batch(()=>{this.queries.forEach(t=>{t.onFocus()})})}onOnline(){_.batch(()=>{this.queries.forEach(t=>{t.onOnline()})})}};let Mutation=class Mutation extends Removable{constructor(t){super(),this.defaultOptions=t.defaultOptions,this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||v,this.observers=[],this.state=t.state||mutation_getDefaultState(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter(s=>s!==t),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var t,s;return null!=(t=null==(s=this.retryer)?void 0:s.continue())?t:this.execute()}async execute(){var t,s,p,g,m,v,_,x,T,F,W,Z,Q,Y,X,J,en,ei,eo,ea;let es="loading"===this.state.status;try{if(!es){this.dispatch({type:"loading",variables:this.options.variables}),await (null==(T=(F=this.mutationCache.config).onMutate)?void 0:T.call(F,this.state.variables,this));let t=await (null==(W=(Z=this.options).onMutate)?void 0:W.call(Z,this.state.variables));t!==this.state.context&&this.dispatch({type:"loading",context:t,variables:this.state.variables})}let Q=await (()=>{var t;return this.retryer=createRetryer({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(t,s)=>{this.dispatch({type:"failed",failureCount:t,error:s})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(t=this.options.retry)?t:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise})();return await (null==(t=(s=this.mutationCache.config).onSuccess)?void 0:t.call(s,Q,this.state.variables,this.state.context,this)),await (null==(p=(g=this.options).onSuccess)?void 0:p.call(g,Q,this.state.variables,this.state.context)),await (null==(m=(v=this.mutationCache.config).onSettled)?void 0:m.call(v,Q,null,this.state.variables,this.state.context,this)),await (null==(_=(x=this.options).onSettled)?void 0:_.call(x,Q,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:Q}),Q}catch(t){try{throw await (null==(Q=(Y=this.mutationCache.config).onError)?void 0:Q.call(Y,t,this.state.variables,this.state.context,this)),await (null==(X=(J=this.options).onError)?void 0:X.call(J,t,this.state.variables,this.state.context)),await (null==(en=(ei=this.mutationCache.config).onSettled)?void 0:en.call(ei,void 0,t,this.state.variables,this.state.context,this)),await (null==(eo=(ea=this.options).onSettled)?void 0:eo.call(ea,void 0,t,this.state.variables,this.state.context)),t}finally{this.dispatch({type:"error",error:t})}}}dispatch(t){this.state=(s=>{switch(t.type){case"failed":return{...s,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...s,isPaused:!0};case"continue":return{...s,isPaused:!1};case"loading":return{...s,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!canFetch(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...s,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...s,data:void 0,error:t.error,failureCount:s.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"};case"setState":return{...s,...t.state}}})(this.state),_.batch(()=>{this.observers.forEach(s=>{s.onMutationUpdate(t)}),this.mutationCache.notify({mutation:this,type:"updated",action:t})})}};function mutation_getDefaultState(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}let MutationCache=class MutationCache extends Subscribable{constructor(t){super(),this.config=t||{},this.mutations=[],this.mutationId=0}build(t,s,p){let g=new Mutation({mutationCache:this,logger:t.getLogger(),mutationId:++this.mutationId,options:t.defaultMutationOptions(s),state:p,defaultOptions:s.mutationKey?t.getMutationDefaults(s.mutationKey):void 0});return this.add(g),g}add(t){this.mutations.push(t),this.notify({type:"added",mutation:t})}remove(t){this.mutations=this.mutations.filter(s=>s!==t),this.notify({type:"removed",mutation:t})}clear(){_.batch(()=>{this.mutations.forEach(t=>{this.remove(t)})})}getAll(){return this.mutations}find(t){return void 0===t.exact&&(t.exact=!0),this.mutations.find(s=>matchMutation(t,s))}findAll(t){return this.mutations.filter(s=>matchMutation(t,s))}notify(t){_.batch(()=>{this.listeners.forEach(({listener:s})=>{s(t)})})}resumePausedMutations(){var t;return this.resuming=(null!=(t=this.resuming)?t:Promise.resolve()).then(()=>{let t=this.mutations.filter(t=>t.state.isPaused);return _.batch(()=>t.reduce((t,s)=>t.then(()=>s.continue().catch(utils_noop)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}};function getNextPageParam(t,s){return null==t.getNextPageParam?void 0:t.getNextPageParam(s[s.length-1],s)}let QueryClient=class QueryClient{constructor(t={}){this.queryCache=t.queryCache||new QueryCache,this.mutationCache=t.mutationCache||new MutationCache,this.logger=t.logger||v,this.defaultOptions=t.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,1===this.mountCount&&(this.unsubscribeFocus=x.subscribe(()=>{x.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=F.subscribe(()=>{F.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var t,s;this.mountCount--,0===this.mountCount&&(null==(t=this.unsubscribeFocus)||t.call(this),this.unsubscribeFocus=void 0,null==(s=this.unsubscribeOnline)||s.call(this),this.unsubscribeOnline=void 0)}isFetching(t,s){let[p]=parseFilterArgs(t,s);return p.fetchStatus="fetching",this.queryCache.findAll(p).length}isMutating(t){return this.mutationCache.findAll({...t,fetching:!0}).length}getQueryData(t,s){var p;return null==(p=this.queryCache.find(t,s))?void 0:p.state.data}ensureQueryData(t,s,p){let g=parseQueryArgs(t,s,p),m=this.getQueryData(g.queryKey);return m?Promise.resolve(m):this.fetchQuery(g)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:t,state:s})=>{let p=s.data;return[t,p]})}setQueryData(t,s,p){let g=this.queryCache.find(t),m=null==g?void 0:g.state.data,v="function"==typeof s?s(m):s;if(void 0===v)return;let _=parseQueryArgs(t),x=this.defaultQueryOptions(_);return this.queryCache.build(this,x).setData(v,{...p,manual:!0})}setQueriesData(t,s,p){return _.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,s,p)]))}getQueryState(t,s){var p;return null==(p=this.queryCache.find(t,s))?void 0:p.state}removeQueries(t,s){let[p]=parseFilterArgs(t,s),g=this.queryCache;_.batch(()=>{g.findAll(p).forEach(t=>{g.remove(t)})})}resetQueries(t,s,p){let[g,m]=parseFilterArgs(t,s,p),v=this.queryCache,x={type:"active",...g};return _.batch(()=>(v.findAll(g).forEach(t=>{t.reset()}),this.refetchQueries(x,m)))}cancelQueries(t,s,p){let[g,m={}]=parseFilterArgs(t,s,p);void 0===m.revert&&(m.revert=!0);let v=_.batch(()=>this.queryCache.findAll(g).map(t=>t.cancel(m)));return Promise.all(v).then(utils_noop).catch(utils_noop)}invalidateQueries(t,s,p){let[g,m]=parseFilterArgs(t,s,p);return _.batch(()=>{var t,s;if(this.queryCache.findAll(g).forEach(t=>{t.invalidate()}),"none"===g.refetchType)return Promise.resolve();let p={...g,type:null!=(t=null!=(s=g.refetchType)?s:g.type)?t:"active"};return this.refetchQueries(p,m)})}refetchQueries(t,s,p){let[g,m]=parseFilterArgs(t,s,p),v=_.batch(()=>this.queryCache.findAll(g).filter(t=>!t.isDisabled()).map(t=>{var s;return t.fetch(void 0,{...m,cancelRefetch:null==(s=null==m?void 0:m.cancelRefetch)||s,meta:{refetchPage:g.refetchPage}})})),x=Promise.all(v).then(utils_noop);return null!=m&&m.throwOnError||(x=x.catch(utils_noop)),x}fetchQuery(t,s,p){let g=parseQueryArgs(t,s,p),m=this.defaultQueryOptions(g);void 0===m.retry&&(m.retry=!1);let v=this.queryCache.build(this,m);return v.isStaleByTime(m.staleTime)?v.fetch(m):Promise.resolve(v.state.data)}prefetchQuery(t,s,p){return this.fetchQuery(t,s,p).then(utils_noop).catch(utils_noop)}fetchInfiniteQuery(t,s,p){let g=parseQueryArgs(t,s,p);return g.behavior={onFetch:t=>{t.fetchFn=()=>{var s,p,g,m,v,_,x;let T;let F=null==(s=t.fetchOptions)?void 0:null==(p=s.meta)?void 0:p.refetchPage,W=null==(g=t.fetchOptions)?void 0:null==(m=g.meta)?void 0:m.fetchMore,Z=null==W?void 0:W.pageParam,Q=(null==W?void 0:W.direction)==="forward",Y=(null==W?void 0:W.direction)==="backward",X=(null==(v=t.state.data)?void 0:v.pages)||[],J=(null==(_=t.state.data)?void 0:_.pageParams)||[],en=J,ei=!1,addSignalProperty=s=>{Object.defineProperty(s,"signal",{enumerable:!0,get:()=>{var s,p;return null!=(s=t.signal)&&s.aborted?ei=!0:null==(p=t.signal)||p.addEventListener("abort",()=>{ei=!0}),t.signal}})},eo=t.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+t.options.queryHash+"'")),buildNewPages=(t,s,p,g)=>(en=g?[s,...en]:[...en,s],g?[p,...t]:[...t,p]),fetchPage=(s,p,g,m)=>{if(ei)return Promise.reject("Cancelled");if(void 0===g&&!p&&s.length)return Promise.resolve(s);let v={queryKey:t.queryKey,pageParam:g,meta:t.options.meta};addSignalProperty(v);let _=eo(v),x=Promise.resolve(_).then(t=>buildNewPages(s,g,t,m));return x};if(X.length){if(Q){let s=void 0!==Z,p=s?Z:getNextPageParam(t.options,X);T=fetchPage(X,s,p)}else if(Y){let s=void 0!==Z,p=s?Z:null==(x=t.options).getPreviousPageParam?void 0:x.getPreviousPageParam(X[0],X);T=fetchPage(X,s,p,!0)}else{en=[];let s=void 0===t.options.getNextPageParam,p=!F||!X[0]||F(X[0],0,X);T=p?fetchPage([],s,J[0]):Promise.resolve(buildNewPages([],J[0],X[0]));for(let p=1;p<X.length;p++)T=T.then(g=>{let m=!F||!X[p]||F(X[p],p,X);if(m){let m=s?J[p]:getNextPageParam(t.options,g);return fetchPage(g,s,m)}return Promise.resolve(buildNewPages(g,J[p],X[p]))})}}else T=fetchPage([]);let ea=T.then(t=>({pages:t,pageParams:en}));return ea}}},this.fetchQuery(g)}prefetchInfiniteQuery(t,s,p){return this.fetchInfiniteQuery(t,s,p).then(utils_noop).catch(utils_noop)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(t){this.defaultOptions=t}setQueryDefaults(t,s){let p=this.queryDefaults.find(s=>hashQueryKey(t)===hashQueryKey(s.queryKey));p?p.defaultOptions=s:this.queryDefaults.push({queryKey:t,defaultOptions:s})}getQueryDefaults(t){if(!t)return;let s=this.queryDefaults.find(s=>partialDeepEqual(t,s.queryKey));return null==s?void 0:s.defaultOptions}setMutationDefaults(t,s){let p=this.mutationDefaults.find(s=>hashQueryKey(t)===hashQueryKey(s.mutationKey));p?p.defaultOptions=s:this.mutationDefaults.push({mutationKey:t,defaultOptions:s})}getMutationDefaults(t){if(!t)return;let s=this.mutationDefaults.find(s=>partialDeepEqual(t,s.mutationKey));return null==s?void 0:s.defaultOptions}defaultQueryOptions(t){if(null!=t&&t._defaulted)return t;let s={...this.defaultOptions.queries,...this.getQueryDefaults(null==t?void 0:t.queryKey),...t,_defaulted:!0};return!s.queryHash&&s.queryKey&&(s.queryHash=hashQueryKeyByOptions(s.queryKey,s)),void 0===s.refetchOnReconnect&&(s.refetchOnReconnect="always"!==s.networkMode),void 0===s.useErrorBoundary&&(s.useErrorBoundary=!!s.suspense),s}defaultMutationOptions(t){return null!=t&&t._defaulted?t:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==t?void 0:t.mutationKey),...t,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}};function defaultShouldDehydrateMutation(t){return t.state.isPaused}function defaultShouldDehydrateQuery(t){return"success"===t.state.status}let W=["added","removed","updated"];function isCacheableEventType(t){return W.includes(t)}async function persistQueryClientRestore({queryClient:t,persister:s,maxAge:p=864e5,buster:g="",hydrateOptions:m}){try{let v=await s.restoreClient();if(v){if(v.timestamp){let _=Date.now()-v.timestamp>p,x=v.buster!==g;_||x?s.removeClient():function(t,s,p){if("object"!=typeof s||null===s)return;let g=t.getMutationCache(),m=t.getQueryCache(),v=s.mutations||[],_=s.queries||[];v.forEach(s=>{var m;g.build(t,{...null==p?void 0:null==(m=p.defaultOptions)?void 0:m.mutations,mutationKey:s.mutationKey},s.state)}),_.forEach(({queryKey:s,state:g,queryHash:v})=>{var _;let x=m.get(v);if(x){if(x.state.dataUpdatedAt<g.dataUpdatedAt){let{fetchStatus:t,...s}=g;x.setState(s)}return}m.build(t,{...null==p?void 0:null==(_=p.defaultOptions)?void 0:_.queries,queryKey:s,queryHash:v},{...g,fetchStatus:"idle"})})}(t,v.clientState,m)}else s.removeClient()}}catch(t){s.removeClient()}}async function persistQueryClientSave({queryClient:t,persister:s,buster:p="",dehydrateOptions:g}){let m={buster:p,timestamp:Date.now(),clientState:function(t,s={}){let p=[],g=[];if(!1!==s.dehydrateMutations){let g=s.shouldDehydrateMutation||defaultShouldDehydrateMutation;t.getMutationCache().getAll().forEach(t=>{g(t)&&p.push({mutationKey:t.options.mutationKey,state:t.state})})}if(!1!==s.dehydrateQueries){let p=s.shouldDehydrateQuery||defaultShouldDehydrateQuery;t.getQueryCache().getAll().forEach(t=>{p(t)&&g.push({state:t.state,queryKey:t.queryKey,queryHash:t.queryHash})})}return{mutations:p,queries:g}}(t,g)};await s.persistClient(m)}var Z=p(65598),Q=p(67294);let Y=Q.createContext(void 0),X=Q.createContext(!1);function getQueryClientContext(t,s){return t||(s&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Y),window.ReactQueryClientContext):Y)}let useQueryClient=({context:t}={})=>{let s=Q.useContext(getQueryClientContext(t,Q.useContext(X)));if(!s)throw Error("No QueryClient set, use QueryClientProvider to set one");return s},QueryClientProvider=({client:t,children:s,context:p,contextSharing:g=!1})=>{Q.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]);let m=getQueryClientContext(p,g);return Q.createElement(X.Provider,{value:!p&&g},Q.createElement(m.Provider,{value:t},s))},J=Q.createContext(!1),useIsRestoring=()=>Q.useContext(J);J.Provider;let en=Q.createContext((g=!1,{clearReset:()=>{g=!1},reset:()=>{g=!0},isReset:()=>g})),useQueryErrorResetBoundary=()=>Q.useContext(en);var ei=p(61688);let MutationObserver=class MutationObserver extends Subscribable{constructor(t,s){super(),this.client=t,this.setOptions(s),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var s;let p=this.options;this.options=this.client.defaultMutationOptions(t),shallowEqualObjects(p,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(s=this.currentMutation)||s.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;null==(t=this.currentMutation)||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();let s={listeners:!0};"success"===t.type?s.onSuccess=!0:"error"===t.type&&(s.onError=!0),this.notify(s)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,s){return this.mutateOptions=s,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==t?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){let t=this.currentMutation?this.currentMutation.state:mutation_getDefaultState(),s={...t,isLoading:"loading"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset};this.currentResult=s}notify(t){_.batch(()=>{if(this.mutateOptions&&this.hasListeners()){var s,p,g,m,v,_,x,T;t.onSuccess?(null==(s=(p=this.mutateOptions).onSuccess)||s.call(p,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(g=(m=this.mutateOptions).onSettled)||g.call(m,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)):t.onError&&(null==(v=(_=this.mutateOptions).onError)||v.call(_,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(x=(T=this.mutateOptions).onSettled)||x.call(T,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context))}t.listeners&&this.listeners.forEach(({listener:t})=>{t(this.currentResult)})})}};let eo=ei.useSyncExternalStore;function useMutation_noop(){}let QueryObserver=class QueryObserver extends Subscribable{constructor(t,s){super(),this.client=t,this.options=s,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(s)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.currentQuery.addObserver(this),shouldFetchOnMount(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return shouldFetchOn(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return shouldFetchOn(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,s){let p=this.options,g=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),shallowEqualObjects(p,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=p.queryKey),this.updateQuery();let m=this.hasListeners();m&&shouldFetchOptionally(this.currentQuery,g,this.options,p)&&this.executeFetch(),this.updateResult(s),m&&(this.currentQuery!==g||this.options.enabled!==p.enabled||this.options.staleTime!==p.staleTime)&&this.updateStaleTimeout();let v=this.computeRefetchInterval();m&&(this.currentQuery!==g||this.options.enabled!==p.enabled||v!==this.currentRefetchInterval)&&this.updateRefetchInterval(v)}getOptimisticResult(t){let s=this.client.getQueryCache().build(this.client,t),p=this.createResult(s,t);return t.keepPreviousData||(void 0!==t.placeholderData?!p.isPlaceholderData:shallowEqualObjects(this.getCurrentResult(),p))||(this.currentResult=p,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),p}getCurrentResult(){return this.currentResult}trackResult(t){let s={};return Object.keys(t).forEach(p=>{Object.defineProperty(s,p,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(p),t[p])})}),s}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...s}={}){return this.fetch({...s,meta:{refetchPage:t}})}fetchOptimistic(t){let s=this.client.defaultQueryOptions(t),p=this.client.getQueryCache().build(this.client,s);return p.isFetchingOptimistic=!0,p.fetch().then(()=>this.createResult(p,s))}fetch(t){var s;return this.executeFetch({...t,cancelRefetch:null==(s=t.cancelRefetch)||s}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let s=this.currentQuery.fetch(this.options,t);return null!=t&&t.throwOnError||(s=s.catch(utils_noop)),s}updateStaleTimeout(){if(this.clearStaleTimeout(),m||this.currentResult.isStale||!isValidTimeout(this.options.staleTime))return;let t=timeUntilStale(this.currentResult.dataUpdatedAt,this.options.staleTime);this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},t+1)}computeRefetchInterval(){var t;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(t=this.options.refetchInterval)&&t}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!m&&!1!==this.options.enabled&&isValidTimeout(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||x.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,s){let p;let g=this.currentQuery,m=this.options,v=this.currentResult,_=this.currentResultState,x=this.currentResultOptions,T=t!==g,F=T?t.state:this.currentQueryInitialState,W=T?this.currentResult:this.previousQueryResult,{state:Z}=t,{dataUpdatedAt:Q,error:Y,errorUpdatedAt:X,fetchStatus:J,status:en}=Z,ei=!1,eo=!1;if(s._optimisticResults){let p=this.hasListeners(),v=!p&&shouldFetchOnMount(t,s),_=p&&shouldFetchOptionally(t,g,s,m);(v||_)&&(J=canFetch(t.options.networkMode)?"fetching":"paused",Q||(en="loading")),"isRestoring"===s._optimisticResults&&(J="idle")}if(s.keepPreviousData&&!Z.dataUpdatedAt&&null!=W&&W.isSuccess&&"error"!==en)p=W.data,Q=W.dataUpdatedAt,en=W.status,ei=!0;else if(s.select&&void 0!==Z.data){if(v&&Z.data===(null==_?void 0:_.data)&&s.select===this.selectFn)p=this.selectResult;else try{this.selectFn=s.select,p=s.select(Z.data),p=replaceData(null==v?void 0:v.data,p,s),this.selectResult=p,this.selectError=null}catch(t){this.selectError=t}}else p=Z.data;if(void 0!==s.placeholderData&&void 0===p&&"loading"===en){let t;if(null!=v&&v.isPlaceholderData&&s.placeholderData===(null==x?void 0:x.placeholderData))t=v.data;else if(t="function"==typeof s.placeholderData?s.placeholderData():s.placeholderData,s.select&&void 0!==t)try{t=s.select(t),this.selectError=null}catch(t){this.selectError=t}void 0!==t&&(en="success",p=replaceData(null==v?void 0:v.data,t,s),eo=!0)}this.selectError&&(Y=this.selectError,p=this.selectResult,X=Date.now(),en="error");let ea="fetching"===J,es="loading"===en,el="error"===en,ec={status:en,fetchStatus:J,isLoading:es,isSuccess:"success"===en,isError:el,isInitialLoading:es&&ea,data:p,dataUpdatedAt:Q,error:Y,errorUpdatedAt:X,failureCount:Z.fetchFailureCount,failureReason:Z.fetchFailureReason,errorUpdateCount:Z.errorUpdateCount,isFetched:Z.dataUpdateCount>0||Z.errorUpdateCount>0,isFetchedAfterMount:Z.dataUpdateCount>F.dataUpdateCount||Z.errorUpdateCount>F.errorUpdateCount,isFetching:ea,isRefetching:ea&&!es,isLoadingError:el&&0===Z.dataUpdatedAt,isPaused:"paused"===J,isPlaceholderData:eo,isPreviousData:ei,isRefetchError:el&&0!==Z.dataUpdatedAt,isStale:isStale(t,s),refetch:this.refetch,remove:this.remove};return ec}updateResult(t){let s=this.currentResult,p=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,shallowEqualObjects(p,s))return;this.currentResult=p;let g={cache:!0};(null==t?void 0:t.listeners)!==!1&&(()=>{if(!s)return!0;let{notifyOnChangeProps:t}=this.options,p="function"==typeof t?t():t;if("all"===p||!p&&!this.trackedProps.size)return!0;let g=new Set(null!=p?p:this.trackedProps);return this.options.useErrorBoundary&&g.add("error"),Object.keys(this.currentResult).some(t=>{let p=this.currentResult[t]!==s[t];return p&&g.has(t)})})()&&(g.listeners=!0),this.notify({...g,...t})}updateQuery(){let t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;let s=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==s||s.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){let s={};"success"===t.type?s.onSuccess=!t.manual:"error"!==t.type||isCancelledError(t.error)||(s.onError=!0),this.updateResult(s),this.hasListeners()&&this.updateTimers()}notify(t){_.batch(()=>{var s,p,g,m,v,_,x,T;t.onSuccess?(null==(s=(p=this.options).onSuccess)||s.call(p,this.currentResult.data),null==(g=(m=this.options).onSettled)||g.call(m,this.currentResult.data,null)):t.onError&&(null==(v=(_=this.options).onError)||v.call(_,this.currentResult.error),null==(x=(T=this.options).onSettled)||x.call(T,void 0,this.currentResult.error)),t.listeners&&this.listeners.forEach(({listener:t})=>{t(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}};function shouldFetchOnMount(t,s){return!1!==s.enabled&&!t.state.dataUpdatedAt&&!("error"===t.state.status&&!1===s.retryOnMount)||t.state.dataUpdatedAt>0&&shouldFetchOn(t,s,s.refetchOnMount)}function shouldFetchOn(t,s,p){if(!1!==s.enabled){let g="function"==typeof p?p(t):p;return"always"===g||!1!==g&&isStale(t,s)}return!1}function shouldFetchOptionally(t,s,p,g){return!1!==p.enabled&&(t!==s||!1===g.enabled)&&(!p.suspense||"error"!==t.state.status)&&isStale(t,p)}function isStale(t,s){return t.isStaleByTime(s.staleTime)}var ea=p(52798);function createConfig({queryClient:t=new QueryClient({defaultOptions:{queries:{cacheTime:864e5,networkMode:"offlineFirst",refetchOnWindowFocus:!1,retry:0},mutations:{networkMode:"offlineFirst"}}}),storage:s=(0,Z.o6)({storage:"undefined"!=typeof window&&window.localStorage?window.localStorage:Z.wp}),persister:p="undefined"!=typeof window?function({storage:t,key:s="REACT_QUERY_OFFLINE_CACHE",throttleTime:p=1e3,serialize:g=JSON.stringify,deserialize:m=JSON.parse,retry:v}){if(t){let trySave=p=>{try{t.setItem(s,g(p));return}catch(t){return t}};return{persistClient:function(t,s=100){let p,g=null;return function(...m){p=m,null===g&&(g=setTimeout(()=>{t(...p),g=null},s))}}(t=>{let s=t,p=trySave(s),g=0;for(;p&&s;)g++,(s=null==v?void 0:v({persistedClient:s,error:p,errorCount:g}))&&(p=trySave(s))},p),restoreClient:()=>{let p=t.getItem(s);if(p)return m(p)},removeClient:()=>{t.removeItem(s)}}}return{persistClient:noop,restoreClient:()=>void 0,removeClient:noop}}({key:"cache",storage:s,serialize:t=>t,deserialize:t=>t}):void 0,...g}){let m=(0,Z._g)({...g,storage:s});return p&&function(t){persistQueryClientRestore(t).then(()=>{(function(t){let s=t.queryClient.getQueryCache().subscribe(s=>{isCacheableEventType(s.type)&&persistQueryClientSave(t)}),p=t.queryClient.getMutationCache().subscribe(s=>{isCacheableEventType(s.type)&&persistQueryClientSave(t)})})(t)})}({queryClient:t,persister:p,dehydrateOptions:{shouldDehydrateQuery:t=>0!==t.cacheTime&&!1!==t.queryKey[0].persist}}),Object.assign(m,{queryClient:t})}var es=Q.createContext(void 0),el=Q.createContext(void 0);function WagmiConfig({children:t,config:s}){return Q.createElement(es.Provider,{children:Q.createElement(QueryClientProvider,{children:t,client:s.queryClient,context:el}),value:s})}function useConfig(){let t=Q.useContext(es);if(!t)throw Error("`useConfig` must be used within `WagmiConfig`.\n\nRead more: https://wagmi.sh/react/WagmiConfig");return t}var ec=ei.useSyncExternalStore;function dist_hasObjectPrototype(t){return"[object Object]"===Object.prototype.toString.call(t)}function queryKeyHashFn(t){return JSON.stringify(t,(t,s)=>!function(t){if(!dist_hasObjectPrototype(t))return!1;let s=t.constructor;if(void 0===s)return!0;let p=s.prototype;return!!(dist_hasObjectPrototype(p)&&p.hasOwnProperty("isPrototypeOf"))}(s)?"bigint"==typeof s?s.toString():s:Object.keys(s).sort().reduce((t,p)=>(t[p]=s[p],t),{}))}function dist_useMutation(t,s,p){let g=parseMutationArgs(t,s,p);return function(t,s,p){var g,m;let v=parseMutationArgs(t,void 0,void 0),x=useQueryClient({context:v.context}),[T]=Q.useState(()=>new MutationObserver(x,v));Q.useEffect(()=>{T.setOptions(v)},[T,v]);let F=eo(Q.useCallback(t=>T.subscribe(_.batchCalls(t)),[T]),()=>T.getCurrentResult(),()=>T.getCurrentResult()),W=Q.useCallback((t,s)=>{T.mutate(t,s).catch(useMutation_noop)},[T]);if(F.error&&(g=T.options.useErrorBoundary,m=[F.error],"function"==typeof g?g(...m):!!g))throw F.error;return{...F,mutate:W,mutateAsync:F.mutate}}({context:el,...g})}function useQuery(t,s,p){let g=Array.isArray(t)?"function"==typeof s?{...p,queryKey:t,queryFn:s}:{...s,queryKey:t}:t,m=function(t,s){var p,g;let m=useQueryClient({context:t.context}),v=useIsRestoring(),x=useQueryErrorResetBoundary(),T=m.defaultQueryOptions({...t,queryKeyHashFn});T._optimisticResults=v?"isRestoring":"optimistic",T.onError&&(T.onError=_.batchCalls(T.onError)),T.onSuccess&&(T.onSuccess=_.batchCalls(T.onSuccess)),T.onSettled&&(T.onSettled=_.batchCalls(T.onSettled)),T.suspense&&"number"!=typeof T.staleTime&&(T.staleTime=1e3),(T.suspense||T.useErrorBoundary)&&!x.isReset()&&(T.retryOnMount=!1);let[F]=Q.useState(()=>new s(m,T)),W=F.getOptimisticResult(T);if(ec(Q.useCallback(t=>v?()=>void 0:F.subscribe(_.batchCalls(t)),[F,v]),()=>F.getCurrentResult(),()=>F.getCurrentResult()),Q.useEffect(()=>{x.clearReset()},[x]),Q.useEffect(()=>{F.setOptions(T,{listeners:!1})},[T,F]),T.suspense&&W.isLoading&&W.isFetching&&!v)throw F.fetchOptimistic(T).then(({data:t})=>{T.onSuccess?.(t),T.onSettled?.(t,null)}).catch(t=>{x.clearReset(),T.onError?.(t),T.onSettled?.(void 0,t)});if(W.isError&&!x.isReset()&&!W.isFetching&&(p=T.useErrorBoundary,g=[W.error,F.getCurrentQuery()],"function"==typeof p?p(...g):!!p))throw W.error;let Z="loading"===W.status&&"idle"===W.fetchStatus?"idle":W.status,Y="loading"===Z&&"fetching"===W.fetchStatus;return{...W,defaultedOptions:T,isIdle:"idle"===Z,isLoading:Y,observer:F,status:Z}}({context:el,...g},QueryObserver),v={data:m.data,error:m.error,fetchStatus:m.fetchStatus,isError:m.isError,isFetched:m.isFetched,isFetchedAfterMount:m.isFetchedAfterMount,isFetching:m.isFetching,isIdle:m.isIdle,isLoading:m.isLoading,isRefetching:m.isRefetching,isSuccess:m.isSuccess,refetch:m.refetch,status:m.status,internal:{dataUpdatedAt:m.dataUpdatedAt,errorUpdatedAt:m.errorUpdatedAt,failureCount:m.failureCount,isFetchedAfterMount:m.isFetchedAfterMount,isLoadingError:m.isLoadingError,isPaused:m.isPaused,isPlaceholderData:m.isPlaceholderData,isPreviousData:m.isPreviousData,isRefetchError:m.isRefetchError,isStale:m.isStale,remove:m.remove}};return m.defaultedOptions.notifyOnChangeProps?v:function(t,s){let p={};return Object.keys(t).forEach(g=>{Object.defineProperty(p,g,{configurable:!1,enumerable:!0,get:()=>(s.trackedProps.add(g),t[g])})}),p}(v,m.observer)}var useQueryClient2=()=>useQueryClient({context:el});function usePublicClient({chainId:t}={}){return(0,ea.useSyncExternalStoreWithSelector)(s=>(0,Z.pC)({chainId:t},s),()=>(0,Z.uV)({chainId:t}),()=>(0,Z.uV)({chainId:t}),t=>t,(t,s)=>t.uid===s.uid)}function queryKey({chainId:t}){return[{entity:"walletClient",chainId:t,persist:!1}]}function queryFn({queryKey:[{chainId:t}]}){return(0,Z.xz)({chainId:t})}function useChainId({chainId:t}={}){let s=usePublicClient({chainId:t});return s.chain.id}function queryKey2({chainId:t,scopeKey:s}){return[{entity:"blockNumber",chainId:t,scopeKey:s}]}function queryFn2({queryKey:[{chainId:t}]}){return(0,Z.RQ)({chainId:t})}function useBlockNumber({cacheTime:t=0,chainId:s,enabled:p=!0,scopeKey:g,staleTime:m,suspense:v,watch:_=!1,onBlock:x,onError:T,onSettled:F,onSuccess:W}={}){let Y=useChainId({chainId:s}),X=usePublicClient({chainId:Y}),J=function({chainId:t}={}){return(0,ea.useSyncExternalStoreWithSelector)(s=>(0,Z.fq)({chainId:t},s),()=>(0,Z.jr)({chainId:t}),()=>(0,Z.jr)({chainId:t}),t=>t,(t,s)=>t?.uid===s?.uid)}({chainId:Y}),en=useQueryClient2();return Q.useEffect(()=>{if(!p||!_&&!x)return;let t=J??X,s=t.watchBlockNumber({onBlockNumber:t=>{_&&en.setQueryData(queryKey2({chainId:Y,scopeKey:g}),t),x&&x(t)},emitOnBegin:!0});return s},[Y,g,x,X,en,_,J,p]),useQuery(queryKey2({scopeKey:g,chainId:Y}),queryFn2,{cacheTime:t,enabled:p,staleTime:m,suspense:v,onError:T,onSettled:F,onSuccess:W})}var isPlainObject2=t=>"object"==typeof t&&!Array.isArray(t);function useSyncExternalStoreWithTracked(t,s,p=s,g=Z.vZ){let m=Q.useRef([]),v=(0,ea.useSyncExternalStoreWithSelector)(t,s,p,t=>t,(t,s)=>{if(isPlainObject2(t)&&isPlainObject2(s)&&m.current.length){for(let p of m.current){let m=g(t[p],s[p]);if(!m)return!1}return!0}return g(t,s)});if(isPlainObject2(v)){let t={...v};return Object.defineProperties(t,Object.entries(t).reduce((t,[s,p])=>({...t,[s]:{configurable:!1,enumerable:!0,get:()=>(m.current.includes(s)||m.current.push(s),p)}}),{})),t}return v}function useAccount({onConnect:t,onDisconnect:s}={}){let p=useConfig(),g=Q.useCallback(t=>(0,Z.uH)(t),[p]),m=useSyncExternalStoreWithTracked(g,Z.D0),v=Q.useRef(),_=v.current;return Q.useEffect(()=>{_?.status!=="connected"&&"connected"===m.status&&t?.({address:m.address,connector:m.connector,isReconnected:_?.status==="reconnecting"||_?.status===void 0}),_?.status==="connected"&&"disconnected"===m.status&&s?.(),v.current=m},[t,s,_,m]),m}function useNetwork(){let t=useConfig(),s=(0,Q.useCallback)(t=>(0,Z.QC)(t),[t]);return useSyncExternalStoreWithTracked(s,Z.Hy)}var mutationKey5=t=>[{entity:"switchNetwork",...t}],mutationFn5=t=>{let{chainId:s}=t;if(!s)throw Error("chainId is required");return(0,Z.If)({chainId:s})};function useSwitchNetwork({chainId:t,throwForSwitchChainNotSupported:s,onError:p,onMutate:g,onSettled:m,onSuccess:v}={}){let _,x;let T=useConfig(),F=function(){let[,t]=Q.useReducer(t=>t+1,0);return t}(),{data:W,error:Z,isError:Y,isIdle:X,isLoading:J,isSuccess:en,mutate:ei,mutateAsync:eo,reset:ea,status:es,variables:el}=dist_useMutation(mutationKey5({chainId:t}),mutationFn5,{onError:p,onMutate:g,onSettled:m,onSuccess:v}),ec=Q.useCallback(s=>ei({chainId:s??t}),[t,ei]),eu=Q.useCallback(s=>eo({chainId:s??t}),[t,eo]);Q.useEffect(()=>{let t=T.subscribe(({chains:t,connector:s})=>({chains:t,connector:s}),F);return t},[T,F]);let ed=!!T.connector?.switchChain;return(s||ed)&&(_=ec,x=eu),{chains:T.chains??[],data:W,error:Z,isError:Y,isIdle:X,isLoading:J,isSuccess:en,pendingChainId:el?.chainId,reset:ea,status:es,switchNetwork:_,switchNetworkAsync:x,variables:el}}function useContractRead({abi:t,address:s,account:p,args:g,blockNumber:m,blockTag:v,cacheOnBlock:_=!1,cacheTime:x,chainId:T,enabled:F=!0,functionName:W,isDataEqual:Y,keepPreviousData:X,onError:J,onSettled:en,onSuccess:ei,scopeKey:eo,select:ea,staleTime:es,structuralSharing:el=(t,s)=>(0,Z.vZ)(t,s)?t:utils_replaceEqualDeep(t,s),suspense:ec,watch:eu}={}){let ed=useChainId({chainId:T}),{data:eh}=useBlockNumber({chainId:ed,enabled:eu||_,scopeKey:eu||_?void 0:"idle",watch:eu}),ef=m??eh,ep=Q.useMemo(()=>(function({account:t,address:s,args:p,blockNumber:g,blockTag:m,chainId:v,functionName:_,scopeKey:x}){return[{entity:"readContract",account:t,address:s,args:p,blockNumber:g,blockTag:m,chainId:v,functionName:_,scopeKey:x}]})({account:p,address:s,args:g,blockNumber:_?ef:void 0,blockTag:v,chainId:ed,functionName:W,scopeKey:eo}),[p,s,g,ef,v,_,ed,W,eo]),eg=Q.useMemo(()=>{let p=!!(F&&t&&s&&W);return _&&(p=!!(p&&ef)),p},[t,s,ef,_,F,W]);return!function({chainId:t,enabled:s,queryKey:p}){let g=useQueryClient2(),m=Q.useCallback(()=>g.invalidateQueries({queryKey:p},{cancelRefetch:!1}),[g,p]);useBlockNumber({chainId:t,enabled:s,onBlock:s?m:void 0,scopeKey:s?void 0:"idle"})}({chainId:ed,enabled:!!(eg&&eu&&!_),queryKey:ep}),useQuery(ep,function({abi:t}){return async({queryKey:[{account:s,address:p,args:g,blockNumber:m,blockTag:v,chainId:_,functionName:x}]})=>{if(!t)throw Error("abi is required");if(!p)throw Error("address is required");return await (0,Z.a4)({account:s,address:p,args:g,blockNumber:m,blockTag:v,chainId:_,abi:t,functionName:x})??null}}({abi:t}),{cacheTime:x,enabled:eg,isDataEqual:Y,keepPreviousData:X,select:ea,staleTime:es,structuralSharing:el,suspense:ec,onError:J,onSettled:en,onSuccess:ei})}function mutationFn6(t){if("prepared"===t.mode){if(!t.request)throw Error("request is required");return(0,Z.n9)({mode:"prepared",request:t.request})}if(!t.address)throw Error("address is required");if(!t.abi)throw Error("abi is required");if(!t.functionName)throw Error("functionName is required");return(0,Z.n9)({address:t.address,args:t.args,chainId:t.chainId,abi:t.abi,functionName:t.functionName,accessList:t.accessList,account:t.account,dataSuffix:t.dataSuffix,gas:t.gas,gasPrice:t.gasPrice,maxFeePerGas:t.maxFeePerGas,maxPriorityFeePerGas:t.maxPriorityFeePerGas,nonce:t.nonce,value:t.value})}function useContractWrite(t){let{address:s,abi:p,args:g,chainId:m,functionName:v,mode:_,request:x,dataSuffix:T}=t,{accessList:F,account:W,gas:Y,gasPrice:X,maxFeePerGas:J,maxPriorityFeePerGas:en,nonce:ei,value:eo}=(0,Z.gY)(t),{data:ea,error:es,isError:el,isIdle:ec,isLoading:eu,isSuccess:ed,mutate:eh,mutateAsync:ef,reset:ep,status:eg,variables:em}=dist_useMutation(function({address:t,abi:s,functionName:p,...g}){let{args:m,accessList:v,account:_,dataSuffix:x,gas:T,gasPrice:F,maxFeePerGas:W,maxPriorityFeePerGas:Z,nonce:Q,request:Y,value:X}=g;return[{entity:"writeContract",address:t,args:m,abi:s,accessList:v,account:_,dataSuffix:x,functionName:p,gas:T,gasPrice:F,maxFeePerGas:W,maxPriorityFeePerGas:Z,nonce:Q,request:Y,value:X}]}({address:s,abi:p,functionName:v,chainId:m,mode:_,args:g,accessList:F,account:W,dataSuffix:T,gas:Y,gasPrice:X,maxFeePerGas:J,maxPriorityFeePerGas:en,nonce:ei,request:x,value:eo}),mutationFn6,{onError:t.onError,onMutate:t.onMutate,onSettled:t.onSettled,onSuccess:t.onSuccess}),eb=Q.useMemo(()=>{if("prepared"===t.mode){if(!x)return;return()=>eh({mode:"prepared",request:t.request,chainId:t.chainId})}return t=>eh({address:s,args:g,abi:p,functionName:v,chainId:m,accessList:F,account:W,dataSuffix:T,gas:Y,gasPrice:X,maxFeePerGas:J,maxPriorityFeePerGas:en,nonce:ei,value:eo,...t})},[F,W,p,s,g,m,t.chainId,t.mode,t.request,T,v,Y,X,J,en,eh,ei,x,eo]),ew=Q.useMemo(()=>{if("prepared"===t.mode){if(!x)return;return()=>ef({mode:"prepared",request:t.request})}return t=>ef({address:s,args:g,abi:p,chainId:m,functionName:v,accessList:F,account:W,dataSuffix:T,gas:Y,gasPrice:X,maxFeePerGas:J,maxPriorityFeePerGas:en,nonce:ei,value:eo,...t})},[F,W,p,s,g,m,t.mode,t.request,T,v,Y,X,J,en,ef,ei,x,eo]);return{data:ea,error:es,isError:el,isIdle:ec,isLoading:eu,isSuccess:ed,reset:ep,status:eg,variables:em,write:eb,writeAsync:ew}}function usePrepareContractWrite({address:t,abi:s,functionName:p,chainId:g,args:m,cacheTime:v,dataSuffix:_,enabled:x=!0,scopeKey:T,staleTime:F,suspense:W,onError:Y,onSettled:X,onSuccess:J,...en}={}){let{chain:ei}=useNetwork(),{data:eo}=function({chainId:t,suspense:s,onError:p,onSettled:g,onSuccess:m}={}){let{connector:v}=useAccount(),_=useChainId({chainId:t}),x=useQuery(queryKey({chainId:_}),queryFn,{cacheTime:0,enabled:!!v,staleTime:1/0,suspense:s,onError:p,onSettled:g,onSuccess:m}),T=useQueryClient2();return Q.useEffect(()=>{let t=(0,Z.Tb)({chainId:_},t=>{t?T.invalidateQueries(queryKey({chainId:_})):T.removeQueries(queryKey({chainId:_}))});return t},[T,_]),x}({chainId:g}),{accessList:ea,account:es,blockNumber:el,blockTag:ec,gas:eu,gasPrice:ed,maxFeePerGas:eh,maxPriorityFeePerGas:ef,nonce:ep,value:eg}=(0,Z._X)(en),em=useQuery(function({accessList:t,account:s,activeChainId:p,args:g,address:m,blockNumber:v,blockTag:_,chainId:x,dataSuffix:T,functionName:F,gas:W,gasPrice:Z,maxFeePerGas:Q,maxPriorityFeePerGas:Y,nonce:X,scopeKey:J,walletClientAddress:en,value:ei}){return[{entity:"prepareContractTransaction",accessList:t,account:s,activeChainId:p,address:m,args:g,blockNumber:v,blockTag:_,chainId:x,dataSuffix:T,functionName:F,gas:W,gasPrice:Z,maxFeePerGas:Q,maxPriorityFeePerGas:Y,nonce:X,scopeKey:J,walletClientAddress:en,value:ei}]}({accessList:ea,account:es,activeChainId:ei?.id,address:t,args:m,blockNumber:el,blockTag:ec,chainId:g,dataSuffix:_,functionName:p,gas:eu,gasPrice:ed,maxFeePerGas:eh,maxPriorityFeePerGas:ef,nonce:ep,scopeKey:T,walletClientAddress:eo?.account.address,value:eg}),function({abi:t,walletClient:s}){return({queryKey:[{accessList:p,account:g,args:m,address:v,blockNumber:_,blockTag:x,chainId:T,dataSuffix:F,functionName:W,gas:Q,gasPrice:Y,maxFeePerGas:X,maxPriorityFeePerGas:J,nonce:en,value:ei}]})=>{if(!t)throw Error("abi is required");if(!v)throw Error("address is required");if(!W)throw Error("functionName is required");return(0,Z.$q)({abi:t,accessList:p,account:g,args:m,address:v,blockNumber:_,blockTag:x,chainId:T,dataSuffix:F,functionName:W,gas:Q,gasPrice:Y,maxFeePerGas:X,maxPriorityFeePerGas:J,nonce:en,walletClient:s,value:ei})}}({abi:s,walletClient:eo}),{cacheTime:v,enabled:!!(x&&s&&t&&p&&eo),staleTime:F,suspense:W,onError:Y,onSettled:X,onSuccess:J});return Object.assign(em,{config:{chainId:g,mode:"prepared",request:void 0,...em.data}})}function useWaitForTransaction({chainId:t,confirmations:s,hash:p,timeout:g,cacheTime:m,enabled:v=!0,scopeKey:_,staleTime:x,suspense:T,onError:F,onReplaced:W,onSettled:Q,onSuccess:Y}={}){let X=useChainId({chainId:t});return useQuery(function({confirmations:t,chainId:s,hash:p,scopeKey:g,timeout:m}){return[{entity:"waitForTransaction",confirmations:t,chainId:s,hash:p,scopeKey:g,timeout:m}]}({chainId:X,confirmations:s,hash:p,scopeKey:_,timeout:g}),function({onReplaced:t}){return({queryKey:[{chainId:s,confirmations:p,hash:g,timeout:m}]})=>{if(!g)throw Error("hash is required");return(0,Z.Mn)({chainId:s,confirmations:p,hash:g,onReplaced:t,timeout:m})}}({onReplaced:W}),{cacheTime:m,enabled:!!(v&&p),staleTime:x,suspense:T,onError:F,onSettled:Q,onSuccess:Y})}}},function(t){var __webpack_exec__=function(s){return t(t.s=s)};t.O(0,[774,179],function(){return __webpack_exec__(6840),__webpack_exec__(59974)}),_N_E=t.O()}]);