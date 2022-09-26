/* 
Tool Cool Range Slider Documentation
Author: Tool Cool, toolcool.org@gmail.com>                          
*/
(()=>{(()=>{var r=G=>!isNaN(parseFloat(G))&&isFinite(G),m=(G,M)=>r(G)?Number(G):M;window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var v=()=>{let G=null,M=null,C=null,B=[],j=[],T=(f,R)=>{Object.prototype.hasOwnProperty.call(M,f)||Object.defineProperty(M,f,{get(){return B[R]},set:D=>{Q(R,D)}})},Q=(f,R)=>{let D=!!j[f];j[f]&&(j[f].textContent="");let W=document.querySelector(R);j[f]=W!=null?W:void 0,B[f]=R!=null?R:void 0,D||(f===0?(T("valueLabel",f),T("value0Label",f),T("value1Label",f)):T(`value${f+1}Label`,f)),typeof C=="function"&&C()},Z=()=>{var f,R,D,W,ne,ie,ae;let w=(f=G==null?void 0:G.getValues())!=null?f:[];for(let E=0;E<w.length;E++){let F="";if(E===0?(F=(R=M==null?void 0:M.getAttribute("value-label"))!=null?R:"",F||(F=(D=M==null?void 0:M.getAttribute("value0-label"))!=null?D:""),F||(F=(W=M==null?void 0:M.getAttribute("value1-label"))!=null?W:"")):F=(ne=M==null?void 0:M.getAttribute(`value${E+1}-label`))!=null?ne:"",!F){j[E]=void 0,B[E]=void 0;continue}let O=document.querySelector(F);if(!O){j[E]=void 0,B[E]=void 0;continue}j[E]=O,B[E]=F,O.textContent=(ae=(ie=w[E])==null?void 0:ie.toString())!=null?ae:"",E===0?(T("valueLabel",E),T("value0Label",E),T("value1Label",E)):T(`value${E+1}Label`,E)}typeof C=="function"&&C()};return{get name(){return"Binding Labels"},init:(f,R,D,W)=>{M=f,C=R,G=W,Z()},update:f=>{var R;for(let D=0;D<f.values.length;D++){let W=j[D];if(!W)continue;let ne=(R=f.values[D])!=null?R:"";W.textContent=ne.toString()}},onAttrChange:(f,R)=>{if(/^value([0-9]*)-label$/.test(f)&&typeof C=="function"){let D=f.replace(/\D/g,"").trim(),W=D===""||D==="0"||D==="1"?0:m(D,0)-1;Q(W,R)}},destroy:()=>{for(let f of j)!f||f.remove()}}};window.tcRangeSliderPlugins.push(v);var H=v})();(()=>{var r=M=>M==null?!1:typeof M=="boolean"?M:M.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var m="min-label",v="max-label",H=()=>{let M=null,C=null,B=null,j=!1,T=null,Q=null,Z=null,f=[],R=()=>{var w;let E=(w=M==null?void 0:M.shadowRoot)==null?void 0:w.querySelector(".range-slider-box");T=document.createElement("div"),T.classList.add("labels-row"),E.prepend(T)},D=w=>{let E=document.createElement("label");return E.className=w,E.setAttribute("for","range-slider"),E},W=()=>{var w,E,F;let O=(B==null?void 0:B.isRightToLeft())||(B==null?void 0:B.isBottomToTop());Q=D(m),Q.textContent=(w=B==null?void 0:B.getTextMin().toString())!=null?w:"",Z=D(v),Z.textContent=(E=B==null?void 0:B.getTextMax().toString())!=null?E:"",O?(C==null||C.after(Q),C==null||C.before(Z)):(C==null||C.before(Q),C==null||C.after(Z));let X=B==null?void 0:B.getValues();if(X)for(let ee=0;ee<X.length;ee++){let K=D(`value${ee+1}-label generated-label`);K.textContent=((F=X[ee])!=null?F:"").toString(),f.push(K),O?T==null||T.prepend(K):T==null||T.append(K)}},ne=()=>{for(let w of f)!w||w.remove();Q==null||Q.remove(),Z==null||Z.remove(),f=[]},ie=w=>{j=w,j?(R(),W()):ne()},ae=()=>{!B||!T||T.classList.toggle("is-reversed",B.isRightToLeft()||B.isBottomToTop())};return{get name(){return"Generated Labels"},init:(w,E,F,O)=>{var X;M=w,B=O,C=(X=w.shadowRoot)==null?void 0:X.getElementById("range-slider"),ie(r(M.getAttribute("generate-labels"))),ae()},update:w=>{var E,F;if(!(!j||!w.values)){ae();for(let O=0;O<w.values.length;O++){let X=w.values[O],ee=f[O];if(X===void 0&&!!ee){ee.remove(),f[O]=void 0;continue}if(X!==void 0&&!ee){let K=D(`value${O+1}-label generated-label`);if(K.textContent=(X!=null?X:"").toString(),f[O]=K,w.values.length<=0)T==null||T.append(K);else{let ye=(B==null?void 0:B.isRightToLeft())||(B==null?void 0:B.isBottomToTop());if(O===0)ye?T==null||T.append(K):T==null||T.prepend(K);else{let xe=K[O-1];ye?xe.before(K):xe.after(K)}}continue}!ee||(ee.textContent=(X!=null?X:"").toString())}Q&&(Q.textContent=((E=w.textMin)!=null?E:"").toString()),Z&&(Z.textContent=((F=w.textMax)!=null?F:"").toString())}},onAttrChange:(w,E)=>{w==="generate-labels"&&ie(r(E))},gettersAndSetters:[{name:"generateLabels",attributes:{get(){return j!=null?j:!1},set:w=>{ie(r(w))}}}],css:`
    .labels-row{
      text-align: center;
      display: flex;
      justify-content: center;
    }
    
    .is-reversed,
    .is-reversed + .row{
      flex-direction: row-reverse;
    }
    
    .type-vertical{
      position: relative;
    }
    
    .type-vertical .labels-row{
      flex-direction: column;
      position: absolute;
      top: 50%;
      right: -100%;
      transform: translateY(-50%);
    }
    
    .type-vertical .is-reversed,
    .type-vertical .is-reversed + .row{
      flex-direction: column-reverse;
    }
    
    .max-label,
    .min-label{
      margin: 0 1rem;
      width: 2rem;
      text-align: center;
      white-space: nowrap;
    }
    
    .generated-label{
      text-align: center;
      margin: 0 0.5rem;
      white-space: nowrap;
    }
    `,destroy:ne}};window.tcRangeSliderPlugins.push(H);var G=H})();(()=>{var r=Object.defineProperty,m=Math.pow,v=(e,n,i)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,H=(e,n,i)=>(v(e,typeof n!="symbol"?n+"":n,i),i),G=(e,n)=>` ${n&&n.length>0?n.map(i=>`<link rel="stylesheet" href="${i}" />`).join(""):""} <style> ${e} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,M=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#4d69ad;--panel-bg-hover:#5f79b7;--panel-bg-fill:#000;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.6);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:0 0 2px #000;--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid hsla(0,0%,88%,0.5);--pointer-border-focus:1px solid hsl(201,72%,59%);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4)}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);cursor:pointer;border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",C="pointers-overlap",B="pointers-min-distance",j="pointers-max-distance",T="range-dragging",Q="data",Z="min",f="max",R="step",D="round",W="type",ne="theme",ie="rtl",ae="btt",w="disabled",E="keyboard-disabled",F="slider-width",O="slider-height",X="slider-radius",ee="slider-bg",K="slider-bg-hover",ye="slider-bg-fill",xe="pointer-width",jt="pointer-height",Ft="pointer-radius",Vt="pointer-bg",_t="pointer-bg-hover",Wt="pointer-bg-focus",Gt="pointer-shadow",Yt="pointer-shadow-hover",Xt="pointer-shadow-focus",Kt="pointer-border",Ut="pointer-border-hover",Jt="pointer-border-focus",nt="animate-onclick",Qt="css-links",te="vertical",pe="horizontal",De=(e,n,i,l,a)=>{let p=n-e;return p===0?i:(l-i)*(a-e)/p+i},oe=e=>!isNaN(parseFloat(e))&&isFinite(e),q=(e,n)=>oe(e)?Number(e):n,rt=(e,n)=>n===0?0:Math.round(e/n)*n,Zt=(e,n=1/0)=>{if(n===1/0)return e;let i=m(10,n);return Math.round(e*i)/i},U=e=>e==null?!1:typeof e=="boolean"?e:e.trim().toLowerCase()==="true",en=(e,n)=>{e.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:n}}))},tn=(e,n)=>{e.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:n}}))},nn=(e,n)=>{e.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:n}}))},rn=(e,n)=>{e.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:n}}))},ln=(e,n)=>{if(!n||n.length<=0)return;let i=n.map(a=>oe(a)?q(a,a):a),l={values:i||[]};l.value=i[0],l.value0=i[0],l.value1=i[0];for(let a=1;a<i.length;a++)l[`value${a+1}`]=i[a];e.dispatchEvent(new CustomEvent("change",{detail:l}))},Ie=(e,n,i)=>{let l=0,a,p,b,s,d=!1,x=(h,z,N,A,V,_)=>{N!==void 0&&h>N&&(h=N),z!==void 0&&h<z&&(h=z),l=h;let Y=l;(A===te&&_||A===pe&&V)&&(Y=100-Y),A===te?n.style.top=`${Y}%`:n.style.left=`${Y}%`},L=h=>h===n||n.contains(h),c=(h,z,N,A)=>{a=h,p=z,b=N,s=A},k=h=>{d=h,n.classList.toggle("disabled",d),d?n.setAttribute("aria-disabled","true"):n.hasAttribute("aria-disabled")&&n.removeAttribute("aria-disabled")},re=(h,z)=>{z==null?n.removeAttribute(h):n.setAttribute(h,z)},g=h=>n.getAttribute(h),y=h=>{if(!d){switch(h.key){case"ArrowLeft":{h.preventDefault(),typeof a=="function"&&a(i);break}case"ArrowRight":{h.preventDefault(),typeof p=="function"&&p(i);break}case"ArrowUp":{h.preventDefault(),typeof b=="function"&&b(i);break}case"ArrowDown":{h.preventDefault(),typeof s=="function"&&s(i);break}}rn(e,h)}},P=()=>{d||en(e,n)};return n.className=`pointer pointer-${i}`,n.addEventListener("keydown",y),n.addEventListener("click",P),{$pointer:n,get percent(){return l},get disabled(){return d},set disabled(h){k(h)},updatePosition:x,isClicked:L,setCallbacks:c,setAttr:re,getAttr:g,destroy:()=>{n.removeEventListener("keydown",y),n.removeEventListener("click",P),n.remove()}}},on=e=>{if(e==null)return;if(Array.isArray(e))return e;if(e.trim()==="")return;let n=e.split(","),i=[],l=!0;for(let a=0;a<n.length;a++){let p=n[a].trim();p!==""&&(i.push(p),oe(p)||(l=!1))}return l?i.map(a=>Number(a)):i},an=(e,n)=>n?n.findIndex(i=>i===e||i.toString().trim()===e.toString().trim()):-1,sn=e=>({updatePosition:(n,i,l,a)=>{if(i.length<=0)return;let p=i.length===1,b=i[0],s=i[i.length-1];n===te?(e.style.removeProperty("width"),e.style.removeProperty("right"),e.style.removeProperty("left"),p?e.style.height=`${b}%`:e.style.height=`${Math.abs(b-s)}%`,a?(e.style.bottom="0%",p?e.style.top="auto":e.style.top=`${Math.min(100-s,100-b)}%`):(e.style.bottom="auto",p?e.style.top="0%":e.style.top=`${Math.min(b,s)}%`)):(e.style.removeProperty("height"),e.style.removeProperty("top"),e.style.removeProperty("bottom"),p?e.style.width=`${b}%`:e.style.width=`${Math.abs(b-s)}%`,l?(e.style.right="0%",p?e.style.left="auto":e.style.left=`${Math.min(100-s,100-b)}%`):(e.style.right="auto",p?e.style.left="0%":e.style.left=`${Math.min(b,s)}%`))}}),lt="--animate-onclick",dn="--width",un="--height",cn="--panel-bg-border-radius",pn="--panel-bg",gn="--panel-bg-hover",mn="--panel-bg-fill",vn="--pointer-width",hn="--pointer-height",bn="--pointer-border-radius",fn="--pointer-bg",yn="--pointer-bg-hover",xn="--pointer-bg-focus",En="--pointer-shadow",Ln="--pointer-shadow-hover",wn="--pointer-shadow-focus",kn="--pointer-border",Sn="--pointer-border-hover",$n="--pointer-border-focus",Ee=(e,n,i)=>{let l=new Map;for(let a of e.attributes){let p=a.nodeName.trim().toLowerCase();if(!n.test(p))continue;let b=p.replace(/\D/g,"").trim(),s=b===""||b==="0"||b==="1"?0:q(b,0)-1,d=i&&typeof i=="function"?i(a.value):a.value;l.set(s,d)}return l},Mn=e=>{if(!e)return null;let n=e.getAttribute(Qt);if(!n)return null;let i=n.split(";"),l=[];for(let a of i)a.trim()!==""&&l.push(a.trim());return l},it=[[dn,F,"sliderWidth",null],[un,O,"sliderHeight",null],[cn,X,"sliderRadius",null],[pn,ee,"sliderBg",null],[gn,K,"sliderBgHover",null],[mn,ye,"sliderBgFill",null],[vn,xe,"pointer#Width",/^pointer([0-9]*)-width$/],[hn,jt,"pointer#Height",/^pointer([0-9]*)-height$/],[bn,Ft,"pointer#Radius",/^pointer([0-9]*)-radius$/],[fn,Vt,"pointer#Bg",/^pointer([0-9]*)-bg$/],[yn,_t,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[xn,Wt,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[En,Gt,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[Ln,Yt,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[wn,Xt,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[kn,Kt,"pointer#Border",/^pointer([0-9]*)-border$/],[Sn,Ut,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[$n,Jt,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],Bn=(e,n,i)=>{let l=null,a=[],p=new Map,b=g=>{let y=[...n.classList];for(let P of y)P.startsWith(g)&&n.classList.remove(P)},s=g=>{l=g,b("theme-"),typeof g=="string"&&n.classList.add(`theme-${g}`)},d=()=>{b("shape");for(let g=0;g<a.length;g++){let y=a[g];!y||n.classList.add("shape",`shape${g}-${y}`)}},x=(g,y)=>{a[g]=y,d()},L=()=>{let g=Ee(e,/^pointer([0-9]*)-shape$/);b("shape");for(let y of g){let P=y[0];a[P]=y[1]}d()},c=(g,y)=>`${g}-${y}`,k=(g,y,P)=>{let h=i[P];if(!h)return;let z=P===0?n:h.$pointer;if(y==null){p.has(c(g,P))&&p.delete(c(g,P)),z.style.removeProperty(g);return}p.set(c(g,P),y),z.style.setProperty(g,y)},re=(g,y)=>p.get(c(g,y));return(()=>{for(let g of it){let[y,P,h,z]=g;if(z){let A=Ee(e,z);for(let V of A){let _=V[0],Y=V[1];k(y,Y,_)}}else{let A=e.getAttribute(P);k(y,A,0)}let N=[];if(h.indexOf("#")===-1)N.push([h,0]);else{N.push([h.replace("#",""),0]),N.push([h.replace("#","0"),0]),N.push([h.replace("#","1"),0]);for(let A=1;A<i.length;A++)N.push([h.replace("#",(A+1).toString()),A])}for(let A of N)try{let V=A[0],_=A[1];Object.prototype.hasOwnProperty.call(e,V)||Object.defineProperty(e,V,{get(){return re(y,_)},set:Y=>{k(y,Y,_)}})}catch(V){console.error(V)}}s(e.getAttribute(ne)),L()})(),{setStyle:k,getStyle:re,get theme(){return l},set theme(g){s(g)},get pointerShapes(){return a},setPointerShape:x}},ve="animate-on-click",ot="range-dragging",Tn=(e,n,i,l)=>{let a=[],p=L=>{for(let c of a)c.update&&typeof c.update=="function"&&c.update(L)},b=()=>{for(let L of a)L.destroy&&typeof L.destroy=="function"&&L.destroy()},s=(L,c)=>{for(let k of a)k.onAttrChange&&typeof k.onAttrChange=="function"&&k.onAttrChange(L,c)},d=L=>{if(L.gettersAndSetters){for(let c of L.gettersAndSetters)if(!(!c.name||!c.attributes))try{Object.prototype.hasOwnProperty.call(e,c.name)||Object.defineProperty(e,c.name,c.attributes)}catch(k){console.error("defineSettersGetters error:",k)}}},x=L=>{var c;if(!L.css)return;let k=(c=e.shadowRoot)==null?void 0:c.querySelector("style");!k||(k.innerHTML+=L.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let L of window.tcRangeSliderPlugins){let c=L();a.push(c),c.init&&typeof c.init=="function"&&(c.init(e,n,i,l),d(c),x(c))}},update:p,onAttrChange:s,destroy:b}},Dn=(e,n)=>{let i=new Map,l=/^value([0-9]*)$/;for(let s of e.attributes){let d=s.nodeName.trim().toLowerCase();if(!l.test(d))continue;let x=d.replace("value","").trim(),L=x===""||x==="0"||x==="1"?0:q(x,0)-1,c=oe(s.value)?q(s.value,0):s.value;i.set(L,c)}let a=Math.max(...Array.from(i.keys())),p=[];p.push([Ie(e,n,0),i.get(0)]);let b=n;for(let s=1;s<=a;s++){let d=n.cloneNode(!0);b.after(d),b=d,p.push([Ie(e,d,s),i.get(s)])}return p},at=(e,n,i,l,a,p,b)=>{try{Object.defineProperty(e,l,{configurable:!0,get(){if(!n)return;let s=n.pointers[i];if(!s)return;let d=n.getTextValue(s.percent);return oe(d)?q(d,d):d},set:s=>{n==null||n.setValue(s,i)}}),Object.defineProperty(e,a,{configurable:!0,get(){var s,d;return(d=(s=n==null?void 0:n.pointers[i])==null?void 0:s.getAttr("aria-label"))!=null?d:void 0},set:s=>{!n||n.setAriaLabel(i,s)}}),Object.defineProperty(e,p,{configurable:!0,get(){var s,d;return(d=(s=n==null?void 0:n.styles)==null?void 0:s.pointerShapes[i])!=null?d:null},set:s=>{!n||!n.styles||n.styles.setPointerShape(i,s)}}),Object.defineProperty(e,b,{configurable:!0,get(){var s;return(s=n==null?void 0:n.pointers[i].disabled)!=null?s:!1},set:s=>{if(!n)return;let d=n==null?void 0:n.pointers[i];!d||(d.disabled=s)}})}catch(s){console.error(s)}},In=(e,n)=>{let i=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let l=1;l<n.pointers.length;l++)i.push([`value${l+1}`,`ariaLabel${l+1}`,`pointer${l+1}Shape`,`pointer${l+1}Disabled`,l]);for(let l of i)at(e,n,l[4],l[0],l[1],l[2],l[3])},st=(e,n,i)=>{var l;let a=(l=i.shadowRoot)==null?void 0:l.querySelector(".container");if(a)for(let p of e)n?a.prepend(p.$pointer):a.append(p.$pointer)},Pe=0,he=100,ge=2,dt="0.3s",Pn=(e,n,i)=>{let l=i.map(t=>t[0]),a=null,p=null,b=null,s=null,d=Pe,x=he,L,c,k=pe,re=ge,g=!1,y=!1,P=!1,h=0,z=1/0,N=!1,A,V,_=!1,Y=!1,de=dt,ut=[],ct=t=>{_||(t.preventDefault&&t.preventDefault(),se(t),window.addEventListener("mousemove",se),window.addEventListener("mouseup",Ce),tn(e,t))},Ce=t=>{_||(A=void 0,V=void 0,window.removeEventListener("mousemove",se),window.removeEventListener("mouseup",se),de&&n.classList.add(ve),nn(e,t))},Rn=(t,o)=>{if(l.length<=0)return;if(l.length===1)return l[0].isClicked(t)&&de&&n.classList.remove(ve),l[0];let u=On(t);if(N){let I=o,ce=Le(I);ce!==void 0&&(I=rt(I,ce)),u?(A=I,V=0):A!==void 0&&(V=I-A,A=I)}if(!Hn(t)&&!u){for(let I of l)if(I.isClicked(t))return de&&n.classList.remove(ve),I;for(let I of l)if(a===I)return I}let S=1/0,$=null;for(let I of l){let ce=Math.abs(o-I.percent);ce<S&&(S=ce,$=I)}return $},pt=()=>l.findIndex(t=>a===t&&!t.disabled),se=t=>{let o;if(k===te){let{height:S,top:$}=n.getBoundingClientRect(),I=t.type.indexOf("mouse")!==-1?t.clientY:t.touches[0].clientY;o=Math.min(Math.max(0,I-$),S)*100/S}else{let{width:S,left:$}=n.getBoundingClientRect(),I=t.type.indexOf("mouse")!==-1?t.clientX:t.touches[0].clientX;o=Math.min(Math.max(0,I-$),S)*100/S}if((g||y)&&(o=100-o),a=Rn(t.target,o),N&&l.length>1&&V!==void 0){let S=l[0],$=l[l.length-1],I=S.percent+V<0,ce=$.percent+V>100;if(I||ce)return;J(0,S.percent+V),J(1,$.percent+V);return}let u=pt();u!==-1&&(J(u,o),a==null||a.$pointer.focus())},gt=t=>{if(_||document.activeElement!==e||(a==null?void 0:a.disabled))return;t.stopPropagation(),t.preventDefault();let o=t.deltaY<0,u=g||y,S=o?!u:u,$=pt();$!==-1&&(S?be($,l[$].percent):fe($,l[$].percent))},mt=t=>{_||Y||(k===te?y?J(t,100):J(t,0):g?fe(t,l[t].percent):be(t,l[t].percent))},vt=t=>{_||Y||(k===te?y?J(t,0):J(t,100):g?be(t,l[t].percent):fe(t,l[t].percent))},ht=t=>{_||Y||(k===te?y?fe(t,l[t].percent):be(t,l[t].percent):g?J(t,100):J(t,0))},bt=t=>{_||Y||(k===te?y?be(t,l[t].percent):fe(t,l[t].percent):g?J(t,0):J(t,100))},Hn=t=>t.classList.contains("panel"),On=t=>t.classList.contains("panel-fill"),be=(t,o)=>{if(o===void 0)return;let u=Le(o);u==null&&(u=1),o-=u,o<0&&(o=0),J(t,o)},fe=(t,o)=>{if(o===void 0)return;let u=Le(o);u==null&&(u=1),o+=u,o>100&&(o=100),J(t,o)},ue=()=>{!s||s.update({percents:ft(),values:yt(),min:xt(),max:Et(),data:He(),step:Re(),round:qe(),type:Oe(),textMin:we(),textMax:ke(),rightToLeft:je(),bottomToTop:Fe(),pointersOverlap:We(),pointersMinDistance:ze(),pointersMaxDistance:Ne(),rangeDragging:Ge(),disabled:Ve(),keyboardDisabled:_e()})},qn=()=>{ue()},zn=t=>{if(!(P||l.length<=1||x===d))if(t===0){let o=z*100/(x-d);return Math.max(0,l[t+1].percent-o)}else{let o=h*100/(x-d);return Math.min(l[t-1].percent+o,100)}},Nn=t=>{if(!(P||l.length<=1||x===d))if(t===l.length-1){let o=z*100/(x-d);return Math.min(l[t-1].percent+o,100)}else{let o=h*100/(x-d);return Math.max(0,l[t+1].percent-o)}},Le=t=>{let o;if(typeof L=="function"){let u=De(0,100,d,x,t);o=L(u,t)}else o=L;if(oe(o)){let u=x-d;return o=u===0?0:o*100/u,o}},me=t=>{if(t===void 0)return;let o=De(0,100,d,x,t);return c!==void 0?c[Math.round(o)]:Zt(o,re)},we=()=>c!==void 0?c[d]:d,ke=()=>c!==void 0?c[x]:x,Re=()=>L,jn=t=>{var o;return t<=0||P?we():(o=me(l[t-1].percent))!=null?o:""},Fn=t=>{var o;return l.length<=1||t>=l.length-1||P?ke():(o=me(l[t+1].percent))!=null?o:""},ft=()=>l.map(t=>t.percent),yt=()=>l.map(t=>me(t.percent)),xt=()=>d,Et=()=>x,He=()=>c,Oe=()=>k,qe=()=>re,ze=()=>h,Ne=()=>z,Vn=t=>ut[t],je=()=>g,Fe=()=>y,Ve=()=>_,_e=()=>Y,We=()=>P,Ge=()=>N,J=(t,o)=>{if(o===void 0)return;let u=Le(o);u!==void 0&&(o=rt(o,u));let S=l[t];if(S){S.updatePosition(o,zn(t),Nn(t),k,g,y),p==null||p.updatePosition(k,l.map($=>$.percent),g,y),ue();for(let $ of l){let I=me($.percent);I!==void 0&&($.setAttr("aria-valuenow",I.toString()),$.setAttr("aria-valuetext",I.toString()))}Wn(),ln(e,l.map($=>me($.percent)))}},le=()=>{for(let t=0;t<l.length;t++)J(t,l[t].percent)},_n=(t,o)=>{d=c!==void 0?0:q(t,Pe),x=c!==void 0?c.length-1:q(o,he),Se(d),$e(x)},Wn=()=>{var t,o;for(let u=0;u<l.length;u++){let S=l[u];S.setAttr("aria-valuemin",((t=jn(u))!=null?t:"").toString()),S.setAttr("aria-valuemax",((o=Fn(u))!=null?o:"").toString())}},Se=t=>{d=q(t,Pe),d>x&&(x=d+he),le()},$e=t=>{x=q(t,he),x<d&&(x=d+he),le()},Lt=t=>{P=!0;for(let o=0;o<t.length;o++)Me(t[o],o);P=!1;for(let o=0;o<t.length;o++)Me(t[o],o)},Me=(t,o)=>{let u;c!==void 0?(u=t==null?0:an(t,c),u===-1&&(u=0)):(u=q(t,d),u<d&&(u=d),u>x&&(u=x));let S=De(d,x,0,100,u);J(o,S)},Be=t=>{if(t==null){L=void 0;return}if(typeof t=="function"){L=t,le();return}if(oe(t)){L=q(t,1);let o=Math.abs(x-d);L>o&&(L=void 0),le();return}L=void 0},Ye=t=>{P=t,le()},Xe=t=>{(!oe(t)||t<0)&&(t=0),h=t},Ke=t=>{(!oe(t)||t<0)&&(t=1/0),z=t},Ue=t=>{_=t,n.classList.toggle("disabled",_),_?n.setAttribute("aria-disabled","true"):n.hasAttribute("aria-disabled")&&n.removeAttribute("aria-disabled")},wt=t=>{Y=t},Je=t=>{if(t==null){c=void 0;return}if(c=on(t),c===void 0||c.length<=0){c=void 0;return}Se(0),$e(c.length-1),L===void 0&&Be(1)},Qe=t=>{var o;typeof t=="string"?k=t.trim().toLowerCase()===te?te:pe:k=pe;let u=(o=e.shadowRoot)==null?void 0:o.querySelector(".range-slider-box");if(!u)return;u.className=`range-slider-box type-${k}`,le();let S=k===te?"vertical":"horizontal";for(let $ of l)$.setAttr("aria-orientation",S)},Ze=t=>{g=t,l.length>1&&st(l,g,e),le(),ue()},et=t=>{y=t,l.length>1&&st(l,y,e),le(),ue()},tt=t=>{re=q(t,ge),re<0&&(re=ge),ue()},kt=t=>{t==null||t.toString().trim().toLowerCase()==="false"?(de=void 0,n.style.removeProperty(lt),n.classList.remove(ve)):(de=t.toString(),n.style.setProperty(lt,de),n.classList.add(ve))},St=(t,o)=>{let u=l[t];!u||(u.setAttr("aria-label",o),ut[t]=o)},Te=t=>{if(A=void 0,l.length<=1){N=!1,n.classList.remove(ot);return}N=t,n.classList.toggle(ot,N)},Gn=()=>{Ue(U(e.getAttribute(w))),Y=U(e.getAttribute(E));let t=Ee(e,/^pointer([0-9]*)-disabled$/,o=>U(o));for(let o of t){let u=o[0];!l[u]||(l[u].disabled=o[1])}},Yn=()=>{let t=Ee(e,/^aria-label([0-9]*)$/);for(let o of t){let u=o[0];St(u,o[1])}},Xn=t=>{let o=l.length,u=l[o-1].$pointer,S=u.cloneNode(!0);u.after(S);let $=Ie(e,S,o);return $.setCallbacks(mt,vt,ht,bt),l.push($),Me(t,o),le(),ue(),o},Kn=()=>{let t=l.length,o=l[t-1];return o?(o.destroy(),l.pop(),l.length<=1&&Te(!1),le(),ue(),t-1):-1};return(()=>{var t,o;for(let S of l)S.setCallbacks(mt,vt,ht,bt);let u=(t=e.shadowRoot)==null?void 0:t.querySelector(".panel-fill");u&&(p=sn(u)),Qe(e.getAttribute(W)),Ze(U(e.getAttribute(ie))),et(U(e.getAttribute(ae))),_n(e.getAttribute(Z),e.getAttribute(f)),Be(e.getAttribute(R)),Je(e.getAttribute(Q)),Lt(i.map(S=>S[1])),Ye(U(e.getAttribute(C))),Xe(q(e.getAttribute(B),0)),Ke(q(e.getAttribute(j),1/0)),Te(U(e.getAttribute(T))),tt(q(e.getAttribute(D),ge)),Gn(),Yn(),b=Bn(e,n,l),kt((o=e.getAttribute(nt))!=null?o:dt),n.addEventListener("mousedown",ct),n.addEventListener("mouseup",Ce),n.addEventListener("touchmove",se),n.addEventListener("touchstart",se),document.addEventListener("wheel",gt,{passive:!1}),s=Tn(e,qn,{setValues:Lt,setMin:Se,setMax:$e,setStep:Be,setPointersOverlap:Ye,setPointersMinDistance:Xe,setPointersMaxDistance:Ke,setDisabled:Ue,setType:Qe,setRightToLeft:Ze,setBottomToTop:et,setRound:tt,setKeyboardDisabled:wt,setRangeDragging:Te,setData:Je},{getPercents:ft,getValues:yt,getMin:xt,getMax:Et,getStep:Re,getData:He,getType:Oe,getRound:qe,getTextMin:we,getTextMax:ke,isRightToLeft:je,isBottomToTop:Fe,isDisabled:Ve,isKeyboardDisabled:_e,isPointersOverlap:We,isRangeDraggingEnabled:Ge,getPointersMinDistance:ze,getPointersMaxDistance:Ne}),s.init()})(),{get pointers(){return l},get styles(){return b},get pluginsManager(){return s},get min(){return we()},get max(){return ke()},get step(){return Re()},get pointersOverlap(){return We()},set pointersOverlap(t){Ye(t)},get pointersMinDistance(){return ze()},set pointersMinDistance(t){Xe(t)},get pointersMaxDistance(){return Ne()},set pointersMaxDistance(t){Ke(t)},get disabled(){return Ve()},set disabled(t){Ue(t)},get data(){return He()},get type(){return Oe()},set type(t){Qe(t)},get rightToLeft(){return je()},set rightToLeft(t){Ze(t)},get bottomToTop(){return Fe()},set bottomToTop(t){et(t)},get round(){return qe()},set round(t){tt(t)},get animateOnClick(){return de},set animateOnClick(t){kt(t)},get keyboardDisabled(){return _e()},set keyboardDisabled(t){wt(t)},get rangeDragging(){return Ge()},set rangeDragging(t){Te(t)},setMin:Se,setMax:$e,setValue:Me,setStep:Be,setData:Je,getTextValue:me,setAriaLabel:St,getAriaLabel:Vn,addPointer:Xn,removePointer:Kn,destroy:()=>{n.removeEventListener("mousedown",ct),n.removeEventListener("mouseup",Ce),n.removeEventListener("touchmove",se),n.removeEventListener("touchstart",se),document.removeEventListener("wheel",gt);for(let t of l)t.destroy();s==null||s.destroy()}}},An=(e,n,i)=>{let l=it.find(([s,d,x,L])=>d.replace("#","")===n.replace(/\d+/g,""));if(l&&e.styles){let[s,d,x,L]=l,c=n.replace(/\D/g,"").trim(),k=c===""||c==="0"||c==="1"?0:q(c,0)-1;e.styles.setStyle(s,i,k);return}switch(e&&e.pluginsManager&&e.pluginsManager.onAttrChange(n,i),n){case Z:{e.setMin(i);break}case f:{e.setMax(i);break}case R:{e.setStep(i);break}case C:{e.pointersOverlap=U(i);break}case B:{e.pointersMinDistance=q(i,0);break}case T:{e.rangeDragging=U(i);break}case j:{e.pointersMaxDistance=q(i,1/0);break}case w:{e.disabled=U(i);break}case E:{e.keyboardDisabled=U(i);break}case Q:{e.setData(i);break}case W:{e.type=i;break}case ie:{e.rightToLeft=U(i);break}case ae:{e.bottomToTop=U(i);break}case D:{e.round=q(i,ge);break}case ne:{e.styles&&(e.styles.theme=i);break}case nt:{e.animateOnClick=i;break}}let a=null;if(/^value([0-9]*)$/.test(n)&&(a="value"),/^pointer([0-9]*)-disabled$/.test(n)&&(a="pointer-disabled"),/^aria-label([0-9]*)$/.test(n)&&(a="aria-label"),/^pointer([0-9]*)-shape$/.test(n)&&(a="pointer-shape"),!a)return;let p=n.replace(/\D/g,"").trim(),b=p===""||p==="0"||p==="1"?0:q(p,0)-1;switch(a){case"value":{e.setValue(i,b);break}case"pointer-disabled":{let s=e==null?void 0:e.pointers[b];if(!s)return;s.disabled=U(i);break}case"aria-label":{e.setAriaLabel(b,i);break}case"pointer-shape":{e.styles&&e.styles.setPointerShape(b,i);break}}},Cn=class extends HTMLElement{constructor(){super(),H(this,"slider"),H(this,"_externalCSSList",[]),H(this,"_observer",null),this.attachShadow({mode:"open"})}set step(e){this.slider&&this.slider.setStep(e)}get step(){var e;return(e=this.slider)==null?void 0:e.step}set disabled(e){this.slider&&(this.slider.disabled=e)}get disabled(){var e,n;return(n=(e=this.slider)==null?void 0:e.disabled)!=null?n:!1}set data(e){var n;(n=this.slider)==null||n.setData(e)}get data(){var e;return(e=this.slider)==null?void 0:e.data}set min(e){var n;(n=this.slider)==null||n.setMin(e)}get min(){var e;return(e=this.slider)==null?void 0:e.min}set max(e){var n;(n=this.slider)==null||n.setMax(e)}get max(){var e;return(e=this.slider)==null?void 0:e.max}set round(e){!this.slider||(this.slider.round=e)}get round(){var e,n;return(n=(e=this.slider)==null?void 0:e.round)!=null?n:ge}set type(e){!this.slider||(this.slider.type=e!=null?e:pe)}get type(){var e;return((e=this.slider)==null?void 0:e.type)||pe}set pointersOverlap(e){!this.slider||(this.slider.pointersOverlap=e)}get pointersOverlap(){var e,n;return(n=(e=this.slider)==null?void 0:e.pointersOverlap)!=null?n:!1}set pointersMinDistance(e){!this.slider||(this.slider.pointersMinDistance=e)}get pointersMinDistance(){var e,n;return(n=(e=this.slider)==null?void 0:e.pointersMinDistance)!=null?n:0}set pointersMaxDistance(e){!this.slider||(this.slider.pointersMaxDistance=e)}get pointersMaxDistance(){var e,n;return(n=(e=this.slider)==null?void 0:e.pointersMaxDistance)!=null?n:1/0}set theme(e){!this.slider||!this.slider.styles||(this.slider.styles.theme=e)}get theme(){var e,n,i;return(i=(n=(e=this.slider)==null?void 0:e.styles)==null?void 0:n.theme)!=null?i:null}set rtl(e){!this.slider||(this.slider.rightToLeft=e)}get rtl(){var e,n;return(n=(e=this.slider)==null?void 0:e.rightToLeft)!=null?n:!1}set btt(e){!this.slider||(this.slider.bottomToTop=e)}get btt(){var e,n;return(n=(e=this.slider)==null?void 0:e.bottomToTop)!=null?n:!1}set keyboardDisabled(e){!this.slider||(this.slider.keyboardDisabled=e)}get keyboardDisabled(){var e,n;return(n=(e=this.slider)==null?void 0:e.keyboardDisabled)!=null?n:!1}set animateOnClick(e){!this.slider||(this.slider.animateOnClick=e)}get animateOnClick(){var e;return(e=this.slider)==null?void 0:e.animateOnClick}get rangeDragging(){var e,n;return(n=(e=this.slider)==null?void 0:e.rangeDragging)!=null?n:!1}set rangeDragging(e){this.slider&&(this.slider.rangeDragging=U(e))}get externalCSSList(){return this._externalCSSList}addPointer(e){var n;if(!this.slider)return;let i=(n=this.slider)==null?void 0:n.addPointer(e);at(this,this.slider,i,`value${i+1}`,`ariaLabel${i+1}`,`pointerShape${i+1}`,`pointer${i+1}Disabled`)}removePointer(){var e;!this.slider||(e=this.slider)==null||e.removePointer()}connectedCallback(){var e,n;if(!this.shadowRoot)return;this._externalCSSList=Mn(this),this.shadowRoot.innerHTML=G(M,this._externalCSSList);let i=(e=this.shadowRoot)==null?void 0:e.querySelector(".pointer");if(!i)return;let l=(n=this.shadowRoot)==null?void 0:n.getElementById("range-slider");if(!l)return;let a=Dn(this,i);this.slider=Pn(this,l,a),In(this,this.slider),this._observer=new MutationObserver(p=>{p.forEach(b=>{var s;if(!this.slider||b.type!=="attributes")return;let d=b.attributeName;!d||An(this.slider,d,(s=this.getAttribute(d))!=null?s:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Ae=Cn;window.tcRangeSlider=Ae,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Ae),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Ae{})})();var $t=()=>{if(!!document.querySelector('[data-examples="get-set-values"]')){try{let r=document.getElementById("slider-1"),m=document.getElementById("label-1");r.addEventListener("change",v=>{m.textContent=v.detail.value}),r.value=50}catch(r){console.error(r)}try{let r=document.getElementById("slider-2"),m=document.getElementById("label-2"),v=document.getElementById("label-3");r.addEventListener("change",H=>{m.textContent=H.detail.value,v.textContent=H.detail.value2}),r.value1=40,r.value2=80}catch(r){console.error(r)}}},Mt=()=>{if(!!document.querySelector('[data-examples="auto-binding-values"]'))try{let r=document.getElementById("slider-2");r.valueLabel=".value-22"}catch(r){console.error(r)}},Bt=()=>{if(!!document.querySelector('[data-examples="auto-generated-labels"]'))try{let r=document.getElementById("slider-3");if(!r)return;let m=document.getElementById("toggle-gen-labels");if(!m)return;m.addEventListener("click",()=>{let v=r;v.generateLabels=!v.generateLabels})}catch(r){console.error(r)}},Tt=()=>{if(!!document.querySelector('[data-examples="min-max"]'))try{let r=document.getElementById("slider-4"),m=document.getElementById("set-min-max-btn"),v=document.getElementById("set-min-max-btn-reset");m.addEventListener("click",()=>{r.min=-200,r.max=200}),v.addEventListener("click",()=>{r.min=-500,r.max=500})}catch(r){console.error(r)}},Dt=()=>{if(!!document.querySelector('[data-examples="rounding"]'))try{let r=document.getElementById("slider-5"),m=document.getElementById("rounding-btn"),v=document.getElementById("rounding-reset");m.addEventListener("click",()=>{r.round=0}),v.addEventListener("click",()=>{r.round=2})}catch(r){console.error(r)}},It=()=>{if(!!document.querySelector('[data-examples="step"]'))try{let r=document.getElementById("slider-6"),m=document.getElementById("step-btn"),v=document.getElementById("step-reset");m.addEventListener("click",()=>{r.step=10}),v.addEventListener("click",()=>{r.step=void 0})}catch(r){console.error(r)}},Pt=()=>{if(!!document.querySelector('[data-examples="non-linear-step"]'))try{let r=document.getElementById("slider-7");r.step=(m,v)=>m<50?5:10}catch(r){console.error(r)}},At=()=>{if(!!document.querySelector('[data-examples="data"]'))try{let r=document.getElementById("slider-8"),m=document.getElementById("data-btn"),v=document.getElementById("data-reset");m.addEventListener("click",()=>{r.data=["red","green","blue","yellow","pink","brown","silver","white","black"]}),v.addEventListener("click",()=>{r.data=[0,10,20,30,40,50,60,70,80,90,100]})}catch(r){console.error(r)}},Ct=()=>{if(!!document.querySelector('[data-examples="width-height-border-radius"]'))try{let r=document.getElementById("slider-9"),m=document.getElementById("styles-btn"),v=document.getElementById("styles-reset");m.addEventListener("click",()=>{r.sliderWidth="200px",r.sliderHeight="0.7rem",r.sliderRadius=0,r.pointerWidth="1.8rem",r.pointerHeight="1.8rem",r.pointerRadius=0,r.pointer2Width="1.3rem",r.pointer2Height="1.3rem",r.pointer2Radius="1rem"}),v.addEventListener("click",()=>{r.sliderWidth="300px",r.sliderHeight="0.25rem",r.sliderRadius="1rem",r.pointerWidth="1rem",r.pointerHeight="1rem",r.pointerRadius="100%",r.pointer2Width="1rem",r.pointer2Height="1rem",r.pointer2Radius="100%"})}catch(r){console.error(r)}},Rt=()=>{if(!!document.querySelector('[data-examples="colors"]'))try{let r=document.getElementById("slider-10"),m=document.getElementById("color-btn"),v=document.getElementById("color-reset");m.addEventListener("click",()=>{r.sliderBg="#efefef",r.sliderBgHover="#ddd",r.sliderBgFill="#ccc",r.pointer1Bg="red",r.pointer2Bg="green",r.pointer3Bg="blue",r.pointer1Border="none",r.pointer2Border="none",r.pointer3Border="none"}),v.addEventListener("click",()=>{r.sliderBg=void 0,r.sliderBgHover=void 0,r.sliderBgFill=void 0,r.pointer1Bg=void 0,r.pointer2Bg=void 0,r.pointer3Bg=void 0,r.pointer1Border=void 0,r.pointer2Border=void 0,r.pointer3Border=void 0})}catch(r){console.error(r)}},Ht=()=>{if(!!document.querySelector('[data-examples="themes"]'))try{let r=document.getElementById("slider-11"),m=document.getElementById("rect-btn"),v=document.getElementById("glass-btn"),H=document.getElementById("circle-btn"),G=document.getElementById("rainbow-btn");m.addEventListener("click",()=>{r.theme="rect"}),v.addEventListener("click",()=>{r.theme="glass"}),H.addEventListener("click",()=>{r.theme="circle"}),G.addEventListener("click",()=>{r.theme="rainbow"})}catch(r){console.error(r)}},Ot=()=>{if(!!document.querySelector('[data-examples="pointer-shapes"]'))try{let r=document.getElementById("slider-12"),m=document.getElementById("shape-triangle-btn"),v=document.getElementById("shape-star-btn"),H=document.getElementById("shape-rhombus-btn"),G=document.getElementById("shape-trapezoid-btn"),M=document.getElementById("shape-parallelogram-btn"),C=document.getElementById("shape-right-arrow-btn");m.addEventListener("click",()=>{r.pointerShape="triangle"}),v.addEventListener("click",()=>{r.pointerShape="star"}),H.addEventListener("click",()=>{r.pointerShape="rhombus"}),G.addEventListener("click",()=>{r.pointerShape="trapezoid"}),M.addEventListener("click",()=>{r.pointerShape="parallelogram"}),C.addEventListener("click",()=>{r.pointerShape="right-arrow"})}catch(r){console.error(r)}},qt=()=>{if(!!document.querySelector('[data-examples="animation"]'))try{let r=document.getElementById("slider-13"),m=document.getElementById("animation-2s-btn"),v=document.getElementById("animation-disable-btn"),H=document.getElementById("animation-reset-btn");m.addEventListener("click",()=>{r.animateOnClick="2s"}),v.addEventListener("click",()=>{r.animateOnClick=!1}),H.addEventListener("click",()=>{r.animateOnClick="0.3s"})}catch(r){console.error(r)}},zt=()=>{if(!!document.querySelector('[data-examples="vertical"]')){try{let r=document.getElementById("slider-14"),m=document.getElementById("vertical-btn"),v=document.getElementById("horizontal-btn");m.addEventListener("click",()=>{r.type="vertical"}),v.addEventListener("click",()=>{r.type="horizontal"})}catch(r){console.error(r)}try{let r=document.getElementById("slider-14_2"),m=document.getElementById("btt-btn"),v=document.getElementById("ttb-btn");m.addEventListener("click",()=>{r.btt=!0}),v.addEventListener("click",()=>{r.btt=!1})}catch(r){console.error(r)}}},Nt=()=>{if(!!document.querySelector('[data-examples="rtl"]'))try{let r=document.getElementById("slider-15"),m=document.getElementById("rtl-btn"),v=document.getElementById("ltr-btn");m.addEventListener("click",()=>{r.rtl=!0}),v.addEventListener("click",()=>{r.rtl=!1})}catch(r){console.error(r)}};var Un=()=>{let r=document.getElementById("mobile-menu-btn");if(!r)return;r.addEventListener("click",H=>{H.stopPropagation(),document.body.classList.toggle("mobile-menu-opened")}),document.body.addEventListener("click",()=>{document.body.classList.remove("mobile-menu-opened")});let m=document.getElementById("side-menu");if(!m)return;m.addEventListener("click",H=>{H.stopPropagation()});let v=document.getElementById("mobile-menu-close-btn");!v||v.addEventListener("click",()=>{document.body.classList.remove("mobile-menu-opened")})},Jn=()=>{Un(),$t(),Mt(),Bt(),Tt(),Dt(),It(),Pt(),At(),Ct(),Rt(),Ht(),Ot(),qt(),zt(),Nt()};document.addEventListener("DOMContentLoaded",()=>{Jn()});})();
//# sourceMappingURL=index.1664195958147.js.map
