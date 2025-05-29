(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ll(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ae={},Nr=[],jt=()=>{},$m=()=>!1,xo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Fl=n=>n.startsWith("onUpdate:"),dt=Object.assign,Ul=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},jm=Object.prototype.hasOwnProperty,ve=(n,e)=>jm.call(n,e),re=Array.isArray,Or=n=>ei(n)==="[object Map]",Mo=n=>ei(n)==="[object Set]",Lu=n=>ei(n)==="[object Date]",le=n=>typeof n=="function",Me=n=>typeof n=="string",Kt=n=>typeof n=="symbol",Pe=n=>n!==null&&typeof n=="object",$d=n=>(Pe(n)||le(n))&&le(n.then)&&le(n.catch),jd=Object.prototype.toString,ei=n=>jd.call(n),qm=n=>ei(n).slice(8,-1),qd=n=>ei(n)==="[object Object]",Bl=n=>Me(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ss=Ll(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Hm=/-(\w)/g,Un=Lo(n=>n.replace(Hm,(e,t)=>t?t.toUpperCase():"")),zm=/\B([A-Z])/g,vr=Lo(n=>n.replace(zm,"-$1").toLowerCase()),Hd=Lo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Va=Lo(n=>n?`on${Hd(n)}`:""),Dn=(n,e)=>!Object.is(n,e),Hi=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},zd=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},so=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Fu;const Fo=()=>Fu||(Fu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Us(n){if(re(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Me(r)?Qm(r):Us(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Me(n)||Pe(n))return n}const Wm=/;(?![^(]*\))/g,Km=/:([^]+)/,Gm=/\/\*[^]*?\*\//g;function Qm(n){const e={};return n.replace(Gm,"").split(Wm).forEach(t=>{if(t){const r=t.split(Km);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function gt(n){let e="";if(Me(n))e=n;else if(re(n))for(let t=0;t<n.length;t++){const r=gt(n[t]);r&&(e+=r+" ")}else if(Pe(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Jm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ym=Ll(Jm);function Wd(n){return!!n||n===""}function Xm(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=Uo(n[r],e[r]);return t}function Uo(n,e){if(n===e)return!0;let t=Lu(n),r=Lu(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=Kt(n),r=Kt(e),t||r)return n===e;if(t=re(n),r=re(e),t||r)return t&&r?Xm(n,e):!1;if(t=Pe(n),r=Pe(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!Uo(n[a],e[a]))return!1}}return String(n)===String(e)}function Zm(n,e){return n.findIndex(t=>Uo(t,e))}const Kd=n=>!!(n&&n.__v_isRef===!0),ke=n=>Me(n)?n:n==null?"":re(n)||Pe(n)&&(n.toString===jd||!le(n.toString))?Kd(n)?ke(n.value):JSON.stringify(n,Gd,2):String(n),Gd=(n,e)=>Kd(e)?Gd(n,e.value):Or(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[Na(r,i)+" =>"]=s,t),{})}:Mo(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Na(t))}:Kt(e)?Na(e):Pe(e)&&!re(e)&&!qd(e)?String(e):e,Na=(n,e="")=>{var t;return Kt(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ft;class e_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ft,!e&&ft&&(this.index=(ft.scopes||(ft.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=ft;try{return ft=this,e()}finally{ft=t}}}on(){++this._on===1&&(this.prevScope=ft,ft=this)}off(){this._on>0&&--this._on===0&&(ft=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function t_(){return ft}let be;const Oa=new WeakSet;class Qd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ft&&ft.active&&ft.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oa.has(this)&&(Oa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Yd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Uu(this),Xd(this);const e=be,t=Nt;be=this,Nt=!0;try{return this.fn()}finally{Zd(this),be=e,Nt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ql(e);this.deps=this.depsTail=void 0,Uu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){el(this)&&this.run()}get dirty(){return el(this)}}let Jd=0,Cs,Ps;function Yd(n,e=!1){if(n.flags|=8,e){n.next=Ps,Ps=n;return}n.next=Cs,Cs=n}function $l(){Jd++}function jl(){if(--Jd>0)return;if(Ps){let e=Ps;for(Ps=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Cs;){let e=Cs;for(Cs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Xd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Zd(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),ql(r),n_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function el(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ef(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ef(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Bs)||(n.globalVersion=Bs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!el(n))))return;n.flags|=2;const e=n.dep,t=be,r=Nt;be=n,Nt=!0;try{Xd(n);const s=n.fn(n._value);(e.version===0||Dn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{be=t,Nt=r,Zd(n),n.flags&=-3}}function ql(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)ql(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function n_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Nt=!0;const tf=[];function an(){tf.push(Nt),Nt=!1}function ln(){const n=tf.pop();Nt=n===void 0?!0:n}function Uu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=be;be=void 0;try{e()}finally{be=t}}}let Bs=0;class r_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Hl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!be||!Nt||be===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==be)t=this.activeLink=new r_(be,this),be.deps?(t.prevDep=be.depsTail,be.depsTail.nextDep=t,be.depsTail=t):be.deps=be.depsTail=t,nf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=be.depsTail,t.nextDep=void 0,be.depsTail.nextDep=t,be.depsTail=t,be.deps===t&&(be.deps=r)}return t}trigger(e){this.version++,Bs++,this.notify(e)}notify(e){$l();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{jl()}}}function nf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)nf(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const tl=new WeakMap,hr=Symbol(""),nl=Symbol(""),$s=Symbol("");function nt(n,e,t){if(Nt&&be){let r=tl.get(n);r||tl.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new Hl),s.map=r,s.key=t),s.track()}}function nn(n,e,t,r,s,i){const a=tl.get(n);if(!a){Bs++;return}const l=c=>{c&&c.trigger()};if($l(),e==="clear")a.forEach(l);else{const c=re(n),h=c&&Bl(t);if(c&&t==="length"){const f=Number(r);a.forEach((g,m)=>{(m==="length"||m===$s||!Kt(m)&&m>=f)&&l(g)})}else switch((t!==void 0||a.has(void 0))&&l(a.get(t)),h&&l(a.get($s)),e){case"add":c?h&&l(a.get("length")):(l(a.get(hr)),Or(n)&&l(a.get(nl)));break;case"delete":c||(l(a.get(hr)),Or(n)&&l(a.get(nl)));break;case"set":Or(n)&&l(a.get(hr));break}}jl()}function Rr(n){const e=ye(n);return e===n?e:(nt(e,"iterate",$s),Ct(n)?e:e.map(Ke))}function Bo(n){return nt(n=ye(n),"iterate",$s),n}const s_={__proto__:null,[Symbol.iterator](){return xa(this,Symbol.iterator,Ke)},concat(...n){return Rr(this).concat(...n.map(e=>re(e)?Rr(e):e))},entries(){return xa(this,"entries",n=>(n[1]=Ke(n[1]),n))},every(n,e){return en(this,"every",n,e,void 0,arguments)},filter(n,e){return en(this,"filter",n,e,t=>t.map(Ke),arguments)},find(n,e){return en(this,"find",n,e,Ke,arguments)},findIndex(n,e){return en(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return en(this,"findLast",n,e,Ke,arguments)},findLastIndex(n,e){return en(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return en(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ma(this,"includes",n)},indexOf(...n){return Ma(this,"indexOf",n)},join(n){return Rr(this).join(n)},lastIndexOf(...n){return Ma(this,"lastIndexOf",n)},map(n,e){return en(this,"map",n,e,void 0,arguments)},pop(){return Es(this,"pop")},push(...n){return Es(this,"push",n)},reduce(n,...e){return Bu(this,"reduce",n,e)},reduceRight(n,...e){return Bu(this,"reduceRight",n,e)},shift(){return Es(this,"shift")},some(n,e){return en(this,"some",n,e,void 0,arguments)},splice(...n){return Es(this,"splice",n)},toReversed(){return Rr(this).toReversed()},toSorted(n){return Rr(this).toSorted(n)},toSpliced(...n){return Rr(this).toSpliced(...n)},unshift(...n){return Es(this,"unshift",n)},values(){return xa(this,"values",Ke)}};function xa(n,e,t){const r=Bo(n),s=r[e]();return r!==n&&!Ct(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=t(i.value)),i}),s}const i_=Array.prototype;function en(n,e,t,r,s,i){const a=Bo(n),l=a!==n&&!Ct(n),c=a[e];if(c!==i_[e]){const g=c.apply(n,i);return l?Ke(g):g}let h=t;a!==n&&(l?h=function(g,m){return t.call(this,Ke(g),m,n)}:t.length>2&&(h=function(g,m){return t.call(this,g,m,n)}));const f=c.call(a,h,r);return l&&s?s(f):f}function Bu(n,e,t,r){const s=Bo(n);let i=t;return s!==n&&(Ct(n)?t.length>3&&(i=function(a,l,c){return t.call(this,a,l,c,n)}):i=function(a,l,c){return t.call(this,a,Ke(l),c,n)}),s[e](i,...r)}function Ma(n,e,t){const r=ye(n);nt(r,"iterate",$s);const s=r[e](...t);return(s===-1||s===!1)&&Gl(t[0])?(t[0]=ye(t[0]),r[e](...t)):s}function Es(n,e,t=[]){an(),$l();const r=ye(n)[e].apply(n,t);return jl(),ln(),r}const o_=Ll("__proto__,__v_isRef,__isVue"),rf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Kt));function a_(n){Kt(n)||(n=String(n));const e=ye(this);return nt(e,"has",n),e.hasOwnProperty(n)}class sf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?__:cf:i?lf:af).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=re(e);if(!s){let c;if(a&&(c=s_[t]))return c;if(t==="hasOwnProperty")return a_}const l=Reflect.get(e,t,it(e)?e:r);return(Kt(t)?rf.has(t):o_(t))||(s||nt(e,"get",t),i)?l:it(l)?a&&Bl(t)?l:l.value:Pe(l)?s?uf(l):Wl(l):l}}class of extends sf{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const c=Bn(i);if(!Ct(r)&&!Bn(r)&&(i=ye(i),r=ye(r)),!re(e)&&it(i)&&!it(r))return c?!1:(i.value=r,!0)}const a=re(e)&&Bl(t)?Number(t)<e.length:ve(e,t),l=Reflect.set(e,t,r,it(e)?e:s);return e===ye(s)&&(a?Dn(r,i)&&nn(e,"set",t,r):nn(e,"add",t,r)),l}deleteProperty(e,t){const r=ve(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&nn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!Kt(t)||!rf.has(t))&&nt(e,"has",t),r}ownKeys(e){return nt(e,"iterate",re(e)?"length":hr),Reflect.ownKeys(e)}}class l_ extends sf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const c_=new of,u_=new l_,h_=new of(!0);const rl=n=>n,Oi=n=>Reflect.getPrototypeOf(n);function d_(n,e,t){return function(...r){const s=this.__v_raw,i=ye(s),a=Or(i),l=n==="entries"||n===Symbol.iterator&&a,c=n==="keys"&&a,h=s[n](...r),f=t?rl:e?io:Ke;return!e&&nt(i,"iterate",c?nl:hr),{next(){const{value:g,done:m}=h.next();return m?{value:g,done:m}:{value:l?[f(g[0]),f(g[1])]:f(g),done:m}},[Symbol.iterator](){return this}}}}function xi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function f_(n,e){const t={get(s){const i=this.__v_raw,a=ye(i),l=ye(s);n||(Dn(s,l)&&nt(a,"get",s),nt(a,"get",l));const{has:c}=Oi(a),h=e?rl:n?io:Ke;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&nt(ye(s),"iterate",hr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=ye(i),l=ye(s);return n||(Dn(s,l)&&nt(a,"has",s),nt(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=ye(l),h=e?rl:n?io:Ke;return!n&&nt(c,"iterate",hr),l.forEach((f,g)=>s.call(i,h(f),h(g),a))}};return dt(t,n?{add:xi("add"),set:xi("set"),delete:xi("delete"),clear:xi("clear")}:{add(s){!e&&!Ct(s)&&!Bn(s)&&(s=ye(s));const i=ye(this);return Oi(i).has.call(i,s)||(i.add(s),nn(i,"add",s,s)),this},set(s,i){!e&&!Ct(i)&&!Bn(i)&&(i=ye(i));const a=ye(this),{has:l,get:c}=Oi(a);let h=l.call(a,s);h||(s=ye(s),h=l.call(a,s));const f=c.call(a,s);return a.set(s,i),h?Dn(i,f)&&nn(a,"set",s,i):nn(a,"add",s,i),this},delete(s){const i=ye(this),{has:a,get:l}=Oi(i);let c=a.call(i,s);c||(s=ye(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&nn(i,"delete",s,void 0),h},clear(){const s=ye(this),i=s.size!==0,a=s.clear();return i&&nn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=d_(s,n,e)}),t}function zl(n,e){const t=f_(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(ve(t,s)&&s in r?t:r,s,i)}const p_={get:zl(!1,!1)},g_={get:zl(!1,!0)},m_={get:zl(!0,!1)};const af=new WeakMap,lf=new WeakMap,cf=new WeakMap,__=new WeakMap;function y_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function v_(n){return n.__v_skip||!Object.isExtensible(n)?0:y_(qm(n))}function Wl(n){return Bn(n)?n:Kl(n,!1,c_,p_,af)}function T_(n){return Kl(n,!1,h_,g_,lf)}function uf(n){return Kl(n,!0,u_,m_,cf)}function Kl(n,e,t,r,s){if(!Pe(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=v_(n);if(i===0)return n;const a=s.get(n);if(a)return a;const l=new Proxy(n,i===2?r:t);return s.set(n,l),l}function xr(n){return Bn(n)?xr(n.__v_raw):!!(n&&n.__v_isReactive)}function Bn(n){return!!(n&&n.__v_isReadonly)}function Ct(n){return!!(n&&n.__v_isShallow)}function Gl(n){return n?!!n.__v_raw:!1}function ye(n){const e=n&&n.__v_raw;return e?ye(e):n}function E_(n){return!ve(n,"__v_skip")&&Object.isExtensible(n)&&zd(n,"__v_skip",!0),n}const Ke=n=>Pe(n)?Wl(n):n,io=n=>Pe(n)?uf(n):n;function it(n){return n?n.__v_isRef===!0:!1}function Et(n){return I_(n,!1)}function I_(n,e){return it(n)?n:new w_(n,e)}class w_{constructor(e,t){this.dep=new Hl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ye(e),this._value=t?e:Ke(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Ct(e)||Bn(e);e=r?e:ye(e),Dn(e,t)&&(this._rawValue=e,this._value=r?e:Ke(e),this.dep.trigger())}}function hf(n){return it(n)?n.value:n}const A_={get:(n,e,t)=>e==="__v_raw"?n:hf(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return it(s)&&!it(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function df(n){return xr(n)?n:new Proxy(n,A_)}class b_{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Hl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Bs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&be!==this)return Yd(this,!0),!0}get value(){const e=this.dep.track();return ef(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function R_(n,e,t=!1){let r,s;return le(n)?r=n:(r=n.get,s=n.set),new b_(r,s,t)}const Mi={},oo=new WeakMap;let or;function S_(n,e=!1,t=or){if(t){let r=oo.get(t);r||oo.set(t,r=[]),r.push(n)}}function C_(n,e,t=Ae){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=t,h=W=>s?W:Ct(W)||s===!1||s===0?rn(W,1):rn(W);let f,g,m,w,P=!1,D=!1;if(it(n)?(g=()=>n.value,P=Ct(n)):xr(n)?(g=()=>h(n),P=!0):re(n)?(D=!0,P=n.some(W=>xr(W)||Ct(W)),g=()=>n.map(W=>{if(it(W))return W.value;if(xr(W))return h(W);if(le(W))return c?c(W,2):W()})):le(n)?e?g=c?()=>c(n,2):n:g=()=>{if(m){an();try{m()}finally{ln()}}const W=or;or=f;try{return c?c(n,3,[w]):n(w)}finally{or=W}}:g=jt,e&&s){const W=g,ce=s===!0?1/0:s;g=()=>rn(W(),ce)}const k=t_(),C=()=>{f.stop(),k&&k.active&&Ul(k.effects,f)};if(i&&e){const W=e;e=(...ce)=>{W(...ce),C()}}let F=D?new Array(n.length).fill(Mi):Mi;const j=W=>{if(!(!(f.flags&1)||!f.dirty&&!W))if(e){const ce=f.run();if(s||P||(D?ce.some((_e,A)=>Dn(_e,F[A])):Dn(ce,F))){m&&m();const _e=or;or=f;try{const A=[ce,F===Mi?void 0:D&&F[0]===Mi?[]:F,w];F=ce,c?c(e,3,A):e(...A)}finally{or=_e}}}else f.run()};return l&&l(j),f=new Qd(g),f.scheduler=a?()=>a(j,!1):j,w=W=>S_(W,!1,f),m=f.onStop=()=>{const W=oo.get(f);if(W){if(c)c(W,4);else for(const ce of W)ce();oo.delete(f)}},e?r?j(!0):F=f.run():a?a(j.bind(null,!0),!0):f.run(),C.pause=f.pause.bind(f),C.resume=f.resume.bind(f),C.stop=C,C}function rn(n,e=1/0,t){if(e<=0||!Pe(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,it(n))rn(n.value,e,t);else if(re(n))for(let r=0;r<n.length;r++)rn(n[r],e,t);else if(Mo(n)||Or(n))n.forEach(r=>{rn(r,e,t)});else if(qd(n)){for(const r in n)rn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&rn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ti(n,e,t,r){try{return r?n(...r):n()}catch(s){$o(s,e,t)}}function Gt(n,e,t,r){if(le(n)){const s=ti(n,e,t,r);return s&&$d(s)&&s.catch(i=>{$o(i,e,t)}),s}if(re(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Gt(n[i],e,t,r));return s}}function $o(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ae;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const f=l.ec;if(f){for(let g=0;g<f.length;g++)if(f[g](n,c,h)===!1)return}l=l.parent}if(i){an(),ti(i,null,10,[n,c,h]),ln();return}}P_(n,t,s,r,a)}function P_(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const ut=[];let Ut=-1;const Mr=[];let In=null,Sr=0;const ff=Promise.resolve();let ao=null;function pf(n){const e=ao||ff;return n?e.then(this?n.bind(this):n):e}function k_(n){let e=Ut+1,t=ut.length;for(;e<t;){const r=e+t>>>1,s=ut[r],i=js(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function Ql(n){if(!(n.flags&1)){const e=js(n),t=ut[ut.length-1];!t||!(n.flags&2)&&e>=js(t)?ut.push(n):ut.splice(k_(e),0,n),n.flags|=1,gf()}}function gf(){ao||(ao=ff.then(_f))}function D_(n){re(n)?Mr.push(...n):In&&n.id===-1?In.splice(Sr+1,0,n):n.flags&1||(Mr.push(n),n.flags|=1),gf()}function $u(n,e,t=Ut+1){for(;t<ut.length;t++){const r=ut[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;ut.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function mf(n){if(Mr.length){const e=[...new Set(Mr)].sort((t,r)=>js(t)-js(r));if(Mr.length=0,In){In.push(...e);return}for(In=e,Sr=0;Sr<In.length;Sr++){const t=In[Sr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}In=null,Sr=0}}const js=n=>n.id==null?n.flags&2?-1:1/0:n.id;function _f(n){try{for(Ut=0;Ut<ut.length;Ut++){const e=ut[Ut];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ti(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ut<ut.length;Ut++){const e=ut[Ut];e&&(e.flags&=-2)}Ut=-1,ut.length=0,mf(),ao=null,(ut.length||Mr.length)&&_f()}}let St=null,yf=null;function lo(n){const e=St;return St=n,yf=n&&n.type.__scopeId||null,e}function V_(n,e=St,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Ju(-1);const i=lo(e);let a;try{a=n(...s)}finally{lo(i),r._d&&Ju(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Pn(n,e){if(St===null)return n;const t=zo(St),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Ae]=e[s];i&&(le(i)&&(i={mounted:i,updated:i}),i.deep&&rn(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function sr(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(an(),Gt(c,t,8,[n.el,l,n,e]),ln())}}const N_=Symbol("_vte"),O_=n=>n.__isTeleport;function Jl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Jl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function vf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function co(n,e,t,r,s=!1){if(re(n)){n.forEach((P,D)=>co(P,e&&(re(e)?e[D]:e),t,r,s));return}if(ks(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&co(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?zo(r.component):r.el,a=s?null:i,{i:l,r:c}=n,h=e&&e.r,f=l.refs===Ae?l.refs={}:l.refs,g=l.setupState,m=ye(g),w=g===Ae?()=>!1:P=>ve(m,P);if(h!=null&&h!==c&&(Me(h)?(f[h]=null,w(h)&&(g[h]=null)):it(h)&&(h.value=null)),le(c))ti(c,l,12,[a,f]);else{const P=Me(c),D=it(c);if(P||D){const k=()=>{if(n.f){const C=P?w(c)?g[c]:f[c]:c.value;s?re(C)&&Ul(C,i):re(C)?C.includes(i)||C.push(i):P?(f[c]=[i],w(c)&&(g[c]=f[c])):(c.value=[i],n.k&&(f[n.k]=c.value))}else P?(f[c]=a,w(c)&&(g[c]=a)):D&&(c.value=a,n.k&&(f[n.k]=a))};a?(k.id=-1,Tt(k,t)):k()}}}Fo().requestIdleCallback;Fo().cancelIdleCallback;const ks=n=>!!n.type.__asyncLoader,Tf=n=>n.type.__isKeepAlive;function x_(n,e){Ef(n,"a",e)}function M_(n,e){Ef(n,"da",e)}function Ef(n,e,t=ht){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(jo(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Tf(s.parent.vnode)&&L_(r,e,t,s),s=s.parent}}function L_(n,e,t,r){const s=jo(e,n,r,!0);wf(()=>{Ul(r[e],s)},t)}function jo(n,e,t=ht,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{an();const l=ni(t),c=Gt(e,t,n,a);return l(),ln(),c});return r?s.unshift(i):s.push(i),i}}const pn=n=>(e,t=ht)=>{(!Hs||n==="sp")&&jo(n,(...r)=>e(...r),t)},F_=pn("bm"),If=pn("m"),U_=pn("bu"),B_=pn("u"),$_=pn("bum"),wf=pn("um"),j_=pn("sp"),q_=pn("rtg"),H_=pn("rtc");function z_(n,e=ht){jo("ec",n,e)}const W_=Symbol.for("v-ndc");function dr(n,e,t,r){let s;const i=t,a=re(n);if(a||Me(n)){const l=a&&xr(n);let c=!1,h=!1;l&&(c=!Ct(n),h=Bn(n),n=Bo(n)),s=new Array(n.length);for(let f=0,g=n.length;f<g;f++)s[f]=e(c?h?io(Ke(n[f])):Ke(n[f]):n[f],f,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,i)}else if(Pe(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(n[f],f,c,i)}}else s=[];return s}const sl=n=>n?Hf(n)?zo(n):sl(n.parent):null,Ds=dt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>sl(n.parent),$root:n=>sl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>bf(n),$forceUpdate:n=>n.f||(n.f=()=>{Ql(n.update)}),$nextTick:n=>n.n||(n.n=pf.bind(n.proxy)),$watch:n=>py.bind(n)}),La=(n,e)=>n!==Ae&&!n.__isScriptSetup&&ve(n,e),K_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=n;let h;if(e[0]!=="$"){const w=a[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(La(r,e))return a[e]=1,r[e];if(s!==Ae&&ve(s,e))return a[e]=2,s[e];if((h=n.propsOptions[0])&&ve(h,e))return a[e]=3,i[e];if(t!==Ae&&ve(t,e))return a[e]=4,t[e];il&&(a[e]=0)}}const f=Ds[e];let g,m;if(f)return e==="$attrs"&&nt(n.attrs,"get",""),f(n);if((g=l.__cssModules)&&(g=g[e]))return g;if(t!==Ae&&ve(t,e))return a[e]=4,t[e];if(m=c.config.globalProperties,ve(m,e))return m[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return La(s,e)?(s[e]=t,!0):r!==Ae&&ve(r,e)?(r[e]=t,!0):ve(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!t[a]||n!==Ae&&ve(n,a)||La(e,a)||(l=i[0])&&ve(l,a)||ve(r,a)||ve(Ds,a)||ve(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ve(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function ju(n){return re(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let il=!0;function G_(n){const e=bf(n),t=n.proxy,r=n.ctx;il=!1,e.beforeCreate&&qu(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:f,beforeMount:g,mounted:m,beforeUpdate:w,updated:P,activated:D,deactivated:k,beforeDestroy:C,beforeUnmount:F,destroyed:j,unmounted:W,render:ce,renderTracked:_e,renderTriggered:A,errorCaptured:_,serverPrefetch:T,expose:I,inheritAttrs:b,components:S,directives:v,filters:yt}=e;if(h&&Q_(h,r,null),a)for(const Ee in a){const ge=a[Ee];le(ge)&&(r[Ee]=ge.bind(t))}if(s){const Ee=s.call(t,t);Pe(Ee)&&(n.data=Wl(Ee))}if(il=!0,i)for(const Ee in i){const ge=i[Ee],Pt=le(ge)?ge.bind(t,t):le(ge.get)?ge.get.bind(t,t):jt,Yn=!le(ge)&&le(ge.set)?ge.set.bind(t):jt,Jt=fo({get:Pt,set:Yn});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>Jt.value,set:Le=>Jt.value=Le})}if(l)for(const Ee in l)Af(l[Ee],r,t,Ee);if(c){const Ee=le(c)?c.call(t):c;Reflect.ownKeys(Ee).forEach(ge=>{ty(ge,Ee[ge])})}f&&qu(f,n,"c");function je(Ee,ge){re(ge)?ge.forEach(Pt=>Ee(Pt.bind(t))):ge&&Ee(ge.bind(t))}if(je(F_,g),je(If,m),je(U_,w),je(B_,P),je(x_,D),je(M_,k),je(z_,_),je(H_,_e),je(q_,A),je($_,F),je(wf,W),je(j_,T),re(I))if(I.length){const Ee=n.exposed||(n.exposed={});I.forEach(ge=>{Object.defineProperty(Ee,ge,{get:()=>t[ge],set:Pt=>t[ge]=Pt})})}else n.exposed||(n.exposed={});ce&&n.render===jt&&(n.render=ce),b!=null&&(n.inheritAttrs=b),S&&(n.components=S),v&&(n.directives=v),T&&vf(n)}function Q_(n,e,t=jt){re(n)&&(n=ol(n));for(const r in n){const s=n[r];let i;Pe(s)?"default"in s?i=zi(s.from||r,s.default,!0):i=zi(s.from||r):i=zi(s),it(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function qu(n,e,t){Gt(re(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Af(n,e,t,r){let s=r.includes(".")?Ff(t,r):()=>t[r];if(Me(n)){const i=e[n];le(i)&&Ua(s,i)}else if(le(n))Ua(s,n.bind(t));else if(Pe(n))if(re(n))n.forEach(i=>Af(i,e,t,r));else{const i=le(n.handler)?n.handler.bind(t):e[n.handler];le(i)&&Ua(s,i,n)}}function bf(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(h=>uo(c,h,a,!0)),uo(c,e,a)),Pe(e)&&i.set(e,c),c}function uo(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&uo(n,i,t,!0),s&&s.forEach(a=>uo(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const l=J_[a]||t&&t[a];n[a]=l?l(n[a],e[a]):e[a]}return n}const J_={data:Hu,props:zu,emits:zu,methods:ws,computed:ws,beforeCreate:ct,created:ct,beforeMount:ct,mounted:ct,beforeUpdate:ct,updated:ct,beforeDestroy:ct,beforeUnmount:ct,destroyed:ct,unmounted:ct,activated:ct,deactivated:ct,errorCaptured:ct,serverPrefetch:ct,components:ws,directives:ws,watch:X_,provide:Hu,inject:Y_};function Hu(n,e){return e?n?function(){return dt(le(n)?n.call(this,this):n,le(e)?e.call(this,this):e)}:e:n}function Y_(n,e){return ws(ol(n),ol(e))}function ol(n){if(re(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function ct(n,e){return n?[...new Set([].concat(n,e))]:e}function ws(n,e){return n?dt(Object.create(null),n,e):e}function zu(n,e){return n?re(n)&&re(e)?[...new Set([...n,...e])]:dt(Object.create(null),ju(n),ju(e??{})):e}function X_(n,e){if(!n)return e;if(!e)return n;const t=dt(Object.create(null),n);for(const r in e)t[r]=ct(n[r],e[r]);return t}function Rf(){return{app:null,config:{isNativeTag:$m,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Z_=0;function ey(n,e){return function(r,s=null){le(r)||(r=dt({},r)),s!=null&&!Pe(s)&&(s=null);const i=Rf(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:Z_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Oy,get config(){return i.config},set config(f){},use(f,...g){return a.has(f)||(f&&le(f.install)?(a.add(f),f.install(h,...g)):le(f)&&(a.add(f),f(h,...g))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,g){return g?(i.components[f]=g,h):i.components[f]},directive(f,g){return g?(i.directives[f]=g,h):i.directives[f]},mount(f,g,m){if(!c){const w=h._ceVNode||Ot(r,s);return w.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),n(w,f,m),c=!0,h._container=f,f.__vue_app__=h,zo(w.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Gt(l,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(f,g){return i.provides[f]=g,h},runWithContext(f){const g=Lr;Lr=h;try{return f()}finally{Lr=g}}};return h}}let Lr=null;function ty(n,e){if(ht){let t=ht.provides;const r=ht.parent&&ht.parent.provides;r===t&&(t=ht.provides=Object.create(r)),t[n]=e}}function zi(n,e,t=!1){const r=ht||St;if(r||Lr){let s=Lr?Lr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&le(e)?e.call(r&&r.proxy):e}}const Sf={},Cf=()=>Object.create(Sf),Pf=n=>Object.getPrototypeOf(n)===Sf;function ny(n,e,t,r=!1){const s={},i=Cf();n.propsDefaults=Object.create(null),kf(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:T_(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function ry(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,l=ye(s),[c]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=n.vnode.dynamicProps;for(let g=0;g<f.length;g++){let m=f[g];if(qo(n.emitsOptions,m))continue;const w=e[m];if(c)if(ve(i,m))w!==i[m]&&(i[m]=w,h=!0);else{const P=Un(m);s[P]=al(c,l,P,w,n,!1)}else w!==i[m]&&(i[m]=w,h=!0)}}}else{kf(n,e,s,i)&&(h=!0);let f;for(const g in l)(!e||!ve(e,g)&&((f=vr(g))===g||!ve(e,f)))&&(c?t&&(t[g]!==void 0||t[f]!==void 0)&&(s[g]=al(c,l,g,void 0,n,!0)):delete s[g]);if(i!==l)for(const g in i)(!e||!ve(e,g))&&(delete i[g],h=!0)}h&&nn(n.attrs,"set","")}function kf(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,l;if(e)for(let c in e){if(Ss(c))continue;const h=e[c];let f;s&&ve(s,f=Un(c))?!i||!i.includes(f)?t[f]=h:(l||(l={}))[f]=h:qo(n.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=ye(t),h=l||Ae;for(let f=0;f<i.length;f++){const g=i[f];t[g]=al(s,c,g,h[g],n,!ve(h,g))}}return a}function al(n,e,t,r,s,i){const a=n[t];if(a!=null){const l=ve(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&le(c)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const f=ni(s);r=h[t]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===vr(t))&&(r=!0))}return r}const sy=new WeakMap;function Df(n,e,t=!1){const r=t?sy:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},l=[];let c=!1;if(!le(n)){const f=g=>{c=!0;const[m,w]=Df(g,e,!0);dt(a,m),w&&l.push(...w)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!i&&!c)return Pe(n)&&r.set(n,Nr),Nr;if(re(i))for(let f=0;f<i.length;f++){const g=Un(i[f]);Wu(g)&&(a[g]=Ae)}else if(i)for(const f in i){const g=Un(f);if(Wu(g)){const m=i[f],w=a[g]=re(m)||le(m)?{type:m}:dt({},m),P=w.type;let D=!1,k=!0;if(re(P))for(let C=0;C<P.length;++C){const F=P[C],j=le(F)&&F.name;if(j==="Boolean"){D=!0;break}else j==="String"&&(k=!1)}else D=le(P)&&P.name==="Boolean";w[0]=D,w[1]=k,(D||ve(w,"default"))&&l.push(g)}}const h=[a,l];return Pe(n)&&r.set(n,h),h}function Wu(n){return n[0]!=="$"&&!Ss(n)}const Yl=n=>n[0]==="_"||n==="$stable",Xl=n=>re(n)?n.map($t):[$t(n)],iy=(n,e,t)=>{if(e._n)return e;const r=V_((...s)=>Xl(e(...s)),t);return r._c=!1,r},Vf=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Yl(s))continue;const i=n[s];if(le(i))e[s]=iy(s,i,r);else if(i!=null){const a=Xl(i);e[s]=()=>a}}},Nf=(n,e)=>{const t=Xl(e);n.slots.default=()=>t},Of=(n,e,t)=>{for(const r in e)(t||!Yl(r))&&(n[r]=e[r])},oy=(n,e,t)=>{const r=n.slots=Cf();if(n.vnode.shapeFlag&32){const s=e._;s?(Of(r,e,t),t&&zd(r,"_",s,!0)):Vf(e,r)}else e&&Nf(n,e)},ay=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Ae;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:Of(s,e,t):(i=!e.$stable,Vf(e,s)),a=e}else e&&(Nf(n,e),a={default:1});if(i)for(const l in s)!Yl(l)&&a[l]==null&&delete s[l]},Tt=Ey;function ly(n){return cy(n)}function cy(n,e){const t=Fo();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:f,parentNode:g,nextSibling:m,setScopeId:w=jt,insertStaticContent:P}=n,D=(y,E,N,B=null,L=null,U=null,G=void 0,H=null,q=!!E.dynamicChildren)=>{if(y===E)return;y&&!Is(y,E)&&(B=Yt(y),Le(y,L,U,!0),y=null),E.patchFlag===-2&&(q=!1,E.dynamicChildren=null);const{type:$,ref:X,shapeFlag:K}=E;switch($){case Ho:k(y,E,N,B);break;case $n:C(y,E,N,B);break;case Ba:y==null&&F(E,N,B,G);break;case rt:S(y,E,N,B,L,U,G,H,q);break;default:K&1?ce(y,E,N,B,L,U,G,H,q):K&6?v(y,E,N,B,L,U,G,H,q):(K&64||K&128)&&$.process(y,E,N,B,L,U,G,H,q,Lt)}X!=null&&L&&co(X,y&&y.ref,U,E||y,!E)},k=(y,E,N,B)=>{if(y==null)r(E.el=l(E.children),N,B);else{const L=E.el=y.el;E.children!==y.children&&h(L,E.children)}},C=(y,E,N,B)=>{y==null?r(E.el=c(E.children||""),N,B):E.el=y.el},F=(y,E,N,B)=>{[y.el,y.anchor]=P(y.children,E,N,B,y.el,y.anchor)},j=({el:y,anchor:E},N,B)=>{let L;for(;y&&y!==E;)L=m(y),r(y,N,B),y=L;r(E,N,B)},W=({el:y,anchor:E})=>{let N;for(;y&&y!==E;)N=m(y),s(y),y=N;s(E)},ce=(y,E,N,B,L,U,G,H,q)=>{E.type==="svg"?G="svg":E.type==="math"&&(G="mathml"),y==null?_e(E,N,B,L,U,G,H,q):T(y,E,L,U,G,H,q)},_e=(y,E,N,B,L,U,G,H)=>{let q,$;const{props:X,shapeFlag:K,transition:Y,dirs:ne}=y;if(q=y.el=a(y.type,U,X&&X.is,X),K&8?f(q,y.children):K&16&&_(y.children,q,null,B,L,Fa(y,U),G,H),ne&&sr(y,null,B,"created"),A(q,y,y.scopeId,G,B),X){for(const ae in X)ae!=="value"&&!Ss(ae)&&i(q,ae,null,X[ae],U,B);"value"in X&&i(q,"value",null,X.value,U),($=X.onVnodeBeforeMount)&&Ft($,B,y)}ne&&sr(y,null,B,"beforeMount");const ee=uy(L,Y);ee&&Y.beforeEnter(q),r(q,E,N),(($=X&&X.onVnodeMounted)||ee||ne)&&Tt(()=>{$&&Ft($,B,y),ee&&Y.enter(q),ne&&sr(y,null,B,"mounted")},L)},A=(y,E,N,B,L)=>{if(N&&w(y,N),B)for(let U=0;U<B.length;U++)w(y,B[U]);if(L){let U=L.subTree;if(E===U||Bf(U.type)&&(U.ssContent===E||U.ssFallback===E)){const G=L.vnode;A(y,G,G.scopeId,G.slotScopeIds,L.parent)}}},_=(y,E,N,B,L,U,G,H,q=0)=>{for(let $=q;$<y.length;$++){const X=y[$]=H?wn(y[$]):$t(y[$]);D(null,X,E,N,B,L,U,G,H)}},T=(y,E,N,B,L,U,G)=>{const H=E.el=y.el;let{patchFlag:q,dynamicChildren:$,dirs:X}=E;q|=y.patchFlag&16;const K=y.props||Ae,Y=E.props||Ae;let ne;if(N&&ir(N,!1),(ne=Y.onVnodeBeforeUpdate)&&Ft(ne,N,E,y),X&&sr(E,y,N,"beforeUpdate"),N&&ir(N,!0),(K.innerHTML&&Y.innerHTML==null||K.textContent&&Y.textContent==null)&&f(H,""),$?I(y.dynamicChildren,$,H,N,B,Fa(E,L),U):G||ge(y,E,H,null,N,B,Fa(E,L),U,!1),q>0){if(q&16)b(H,K,Y,N,L);else if(q&2&&K.class!==Y.class&&i(H,"class",null,Y.class,L),q&4&&i(H,"style",K.style,Y.style,L),q&8){const ee=E.dynamicProps;for(let ae=0;ae<ee.length;ae++){const fe=ee[ae],Je=K[fe],qe=Y[fe];(qe!==Je||fe==="value")&&i(H,fe,Je,qe,L,N)}}q&1&&y.children!==E.children&&f(H,E.children)}else!G&&$==null&&b(H,K,Y,N,L);((ne=Y.onVnodeUpdated)||X)&&Tt(()=>{ne&&Ft(ne,N,E,y),X&&sr(E,y,N,"updated")},B)},I=(y,E,N,B,L,U,G)=>{for(let H=0;H<E.length;H++){const q=y[H],$=E[H],X=q.el&&(q.type===rt||!Is(q,$)||q.shapeFlag&198)?g(q.el):N;D(q,$,X,null,B,L,U,G,!0)}},b=(y,E,N,B,L)=>{if(E!==N){if(E!==Ae)for(const U in E)!Ss(U)&&!(U in N)&&i(y,U,E[U],null,L,B);for(const U in N){if(Ss(U))continue;const G=N[U],H=E[U];G!==H&&U!=="value"&&i(y,U,H,G,L,B)}"value"in N&&i(y,"value",E.value,N.value,L)}},S=(y,E,N,B,L,U,G,H,q)=>{const $=E.el=y?y.el:l(""),X=E.anchor=y?y.anchor:l("");let{patchFlag:K,dynamicChildren:Y,slotScopeIds:ne}=E;ne&&(H=H?H.concat(ne):ne),y==null?(r($,N,B),r(X,N,B),_(E.children||[],N,X,L,U,G,H,q)):K>0&&K&64&&Y&&y.dynamicChildren?(I(y.dynamicChildren,Y,N,L,U,G,H),(E.key!=null||L&&E===L.subTree)&&xf(y,E,!0)):ge(y,E,N,X,L,U,G,H,q)},v=(y,E,N,B,L,U,G,H,q)=>{E.slotScopeIds=H,y==null?E.shapeFlag&512?L.ctx.activate(E,N,B,G,q):yt(E,N,B,L,U,G,q):mn(y,E,q)},yt=(y,E,N,B,L,U,G)=>{const H=y.component=Cy(y,B,L);if(Tf(y)&&(H.ctx.renderer=Lt),Py(H,!1,G),H.asyncDep){if(L&&L.registerDep(H,je,G),!y.el){const q=H.subTree=Ot($n);C(null,q,E,N)}}else je(H,y,E,N,L,U,G)},mn=(y,E,N)=>{const B=E.component=y.component;if(vy(y,E,N))if(B.asyncDep&&!B.asyncResolved){Ee(B,E,N);return}else B.next=E,B.update();else E.el=y.el,B.vnode=E},je=(y,E,N,B,L,U,G)=>{const H=()=>{if(y.isMounted){let{next:K,bu:Y,u:ne,parent:ee,vnode:ae}=y;{const Ye=Mf(y);if(Ye){K&&(K.el=ae.el,Ee(y,K,G)),Ye.asyncDep.then(()=>{y.isUnmounted||H()});return}}let fe=K,Je;ir(y,!1),K?(K.el=ae.el,Ee(y,K,G)):K=ae,Y&&Hi(Y),(Je=K.props&&K.props.onVnodeBeforeUpdate)&&Ft(Je,ee,K,ae),ir(y,!0);const qe=Gu(y),bt=y.subTree;y.subTree=qe,D(bt,qe,g(bt.el),Yt(bt),y,L,U),K.el=qe.el,fe===null&&Ty(y,qe.el),ne&&Tt(ne,L),(Je=K.props&&K.props.onVnodeUpdated)&&Tt(()=>Ft(Je,ee,K,ae),L)}else{let K;const{el:Y,props:ne}=E,{bm:ee,m:ae,parent:fe,root:Je,type:qe}=y,bt=ks(E);ir(y,!1),ee&&Hi(ee),!bt&&(K=ne&&ne.onVnodeBeforeMount)&&Ft(K,fe,E),ir(y,!0);{Je.ce&&Je.ce._injectChildStyle(qe);const Ye=y.subTree=Gu(y);D(null,Ye,N,B,y,L,U),E.el=Ye.el}if(ae&&Tt(ae,L),!bt&&(K=ne&&ne.onVnodeMounted)){const Ye=E;Tt(()=>Ft(K,fe,Ye),L)}(E.shapeFlag&256||fe&&ks(fe.vnode)&&fe.vnode.shapeFlag&256)&&y.a&&Tt(y.a,L),y.isMounted=!0,E=N=B=null}};y.scope.on();const q=y.effect=new Qd(H);y.scope.off();const $=y.update=q.run.bind(q),X=y.job=q.runIfDirty.bind(q);X.i=y,X.id=y.uid,q.scheduler=()=>Ql(X),ir(y,!0),$()},Ee=(y,E,N)=>{E.component=y;const B=y.vnode.props;y.vnode=E,y.next=null,ry(y,E.props,B,N),ay(y,E.children,N),an(),$u(y),ln()},ge=(y,E,N,B,L,U,G,H,q=!1)=>{const $=y&&y.children,X=y?y.shapeFlag:0,K=E.children,{patchFlag:Y,shapeFlag:ne}=E;if(Y>0){if(Y&128){Yn($,K,N,B,L,U,G,H,q);return}else if(Y&256){Pt($,K,N,B,L,U,G,H,q);return}}ne&8?(X&16&&Zn($,L,U),K!==$&&f(N,K)):X&16?ne&16?Yn($,K,N,B,L,U,G,H,q):Zn($,L,U,!0):(X&8&&f(N,""),ne&16&&_(K,N,B,L,U,G,H,q))},Pt=(y,E,N,B,L,U,G,H,q)=>{y=y||Nr,E=E||Nr;const $=y.length,X=E.length,K=Math.min($,X);let Y;for(Y=0;Y<K;Y++){const ne=E[Y]=q?wn(E[Y]):$t(E[Y]);D(y[Y],ne,N,null,L,U,G,H,q)}$>X?Zn(y,L,U,!0,!1,K):_(E,N,B,L,U,G,H,q,K)},Yn=(y,E,N,B,L,U,G,H,q)=>{let $=0;const X=E.length;let K=y.length-1,Y=X-1;for(;$<=K&&$<=Y;){const ne=y[$],ee=E[$]=q?wn(E[$]):$t(E[$]);if(Is(ne,ee))D(ne,ee,N,null,L,U,G,H,q);else break;$++}for(;$<=K&&$<=Y;){const ne=y[K],ee=E[Y]=q?wn(E[Y]):$t(E[Y]);if(Is(ne,ee))D(ne,ee,N,null,L,U,G,H,q);else break;K--,Y--}if($>K){if($<=Y){const ne=Y+1,ee=ne<X?E[ne].el:B;for(;$<=Y;)D(null,E[$]=q?wn(E[$]):$t(E[$]),N,ee,L,U,G,H,q),$++}}else if($>Y)for(;$<=K;)Le(y[$],L,U,!0),$++;else{const ne=$,ee=$,ae=new Map;for($=ee;$<=Y;$++){const He=E[$]=q?wn(E[$]):$t(E[$]);He.key!=null&&ae.set(He.key,$)}let fe,Je=0;const qe=Y-ee+1;let bt=!1,Ye=0;const _n=new Array(qe);for($=0;$<qe;$++)_n[$]=0;for($=ne;$<=K;$++){const He=y[$];if(Je>=qe){Le(He,L,U,!0);continue}let Rt;if(He.key!=null)Rt=ae.get(He.key);else for(fe=ee;fe<=Y;fe++)if(_n[fe-ee]===0&&Is(He,E[fe])){Rt=fe;break}Rt===void 0?Le(He,L,U,!0):(_n[Rt-ee]=$+1,Rt>=Ye?Ye=Rt:bt=!0,D(He,E[Rt],N,null,L,U,G,H,q),Je++)}const ls=bt?hy(_n):Nr;for(fe=ls.length-1,$=qe-1;$>=0;$--){const He=ee+$,Rt=E[He],yi=He+1<X?E[He+1].el:B;_n[$]===0?D(null,Rt,N,yi,L,U,G,H,q):bt&&(fe<0||$!==ls[fe]?Jt(Rt,N,yi,2):fe--)}}},Jt=(y,E,N,B,L=null)=>{const{el:U,type:G,transition:H,children:q,shapeFlag:$}=y;if($&6){Jt(y.component.subTree,E,N,B);return}if($&128){y.suspense.move(E,N,B);return}if($&64){G.move(y,E,N,Lt);return}if(G===rt){r(U,E,N);for(let K=0;K<q.length;K++)Jt(q[K],E,N,B);r(y.anchor,E,N);return}if(G===Ba){j(y,E,N);return}if(B!==2&&$&1&&H)if(B===0)H.beforeEnter(U),r(U,E,N),Tt(()=>H.enter(U),L);else{const{leave:K,delayLeave:Y,afterLeave:ne}=H,ee=()=>{y.ctx.isUnmounted?s(U):r(U,E,N)},ae=()=>{K(U,()=>{ee(),ne&&ne()})};Y?Y(U,ee,ae):ae()}else r(U,E,N)},Le=(y,E,N,B=!1,L=!1)=>{const{type:U,props:G,ref:H,children:q,dynamicChildren:$,shapeFlag:X,patchFlag:K,dirs:Y,cacheIndex:ne}=y;if(K===-2&&(L=!1),H!=null&&(an(),co(H,null,N,y,!0),ln()),ne!=null&&(E.renderCache[ne]=void 0),X&256){E.ctx.deactivate(y);return}const ee=X&1&&Y,ae=!ks(y);let fe;if(ae&&(fe=G&&G.onVnodeBeforeUnmount)&&Ft(fe,E,y),X&6)Xn(y.component,N,B);else{if(X&128){y.suspense.unmount(N,B);return}ee&&sr(y,null,E,"beforeUnmount"),X&64?y.type.remove(y,E,N,Lt,B):$&&!$.hasOnce&&(U!==rt||K>0&&K&64)?Zn($,E,N,!1,!0):(U===rt&&K&384||!L&&X&16)&&Zn(q,E,N),B&&Fe(y)}(ae&&(fe=G&&G.onVnodeUnmounted)||ee)&&Tt(()=>{fe&&Ft(fe,E,y),ee&&sr(y,null,E,"unmounted")},N)},Fe=y=>{const{type:E,el:N,anchor:B,transition:L}=y;if(E===rt){ma(N,B);return}if(E===Ba){W(y);return}const U=()=>{s(N),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(y.shapeFlag&1&&L&&!L.persisted){const{leave:G,delayLeave:H}=L,q=()=>G(N,U);H?H(y.el,U,q):q()}else U()},ma=(y,E)=>{let N;for(;y!==E;)N=m(y),s(y),y=N;s(E)},Xn=(y,E,N)=>{const{bum:B,scope:L,job:U,subTree:G,um:H,m:q,a:$,parent:X,slots:{__:K}}=y;Ku(q),Ku($),B&&Hi(B),X&&re(K)&&K.forEach(Y=>{X.renderCache[Y]=void 0}),L.stop(),U&&(U.flags|=8,Le(G,y,E,N)),H&&Tt(H,E),Tt(()=>{y.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Zn=(y,E,N,B=!1,L=!1,U=0)=>{for(let G=U;G<y.length;G++)Le(y[G],E,N,B,L)},Yt=y=>{if(y.shapeFlag&6)return Yt(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const E=m(y.anchor||y.el),N=E&&E[N_];return N?m(N):E};let os=!1;const _i=(y,E,N)=>{y==null?E._vnode&&Le(E._vnode,null,null,!0):D(E._vnode||null,y,E,null,null,null,N),E._vnode=y,os||(os=!0,$u(),mf(),os=!1)},Lt={p:D,um:Le,m:Jt,r:Fe,mt:yt,mc:_,pc:ge,pbc:I,n:Yt,o:n};return{render:_i,hydrate:void 0,createApp:ey(_i)}}function Fa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ir({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function uy(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function xf(n,e,t=!1){const r=n.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=wn(s[i]),l.el=a.el),!t&&l.patchFlag!==-2&&xf(a,l)),l.type===Ho&&(l.el=a.el),l.type===$n&&!l.el&&(l.el=a.el)}}function hy(n){const e=n.slice(),t=[0];let r,s,i,a,l;const c=n.length;for(r=0;r<c;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)l=i+a>>1,n[t[l]]<h?i=l+1:a=l;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function Mf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Mf(e)}function Ku(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const dy=Symbol.for("v-scx"),fy=()=>zi(dy);function Ua(n,e,t){return Lf(n,e,t)}function Lf(n,e,t=Ae){const{immediate:r,deep:s,flush:i,once:a}=t,l=dt({},t),c=e&&r||!e&&i!=="post";let h;if(Hs){if(i==="sync"){const w=fy();h=w.__watcherHandles||(w.__watcherHandles=[])}else if(!c){const w=()=>{};return w.stop=jt,w.resume=jt,w.pause=jt,w}}const f=ht;l.call=(w,P,D)=>Gt(w,f,P,D);let g=!1;i==="post"?l.scheduler=w=>{Tt(w,f&&f.suspense)}:i!=="sync"&&(g=!0,l.scheduler=(w,P)=>{P?w():Ql(w)}),l.augmentJob=w=>{e&&(w.flags|=4),g&&(w.flags|=2,f&&(w.id=f.uid,w.i=f))};const m=C_(n,e,l);return Hs&&(h?h.push(m):c&&m()),m}function py(n,e,t){const r=this.proxy,s=Me(n)?n.includes(".")?Ff(r,n):()=>r[n]:n.bind(r,r);let i;le(e)?i=e:(i=e.handler,t=e);const a=ni(this),l=Lf(s,i.bind(r),t);return a(),l}function Ff(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const gy=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Un(e)}Modifiers`]||n[`${vr(e)}Modifiers`];function my(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ae;let s=t;const i=e.startsWith("update:"),a=i&&gy(r,e.slice(7));a&&(a.trim&&(s=t.map(f=>Me(f)?f.trim():f)),a.number&&(s=t.map(so)));let l,c=r[l=Va(e)]||r[l=Va(Un(e))];!c&&i&&(c=r[l=Va(vr(e))]),c&&Gt(c,n,6,s);const h=r[l+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Gt(h,n,6,s)}}function Uf(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},l=!1;if(!le(n)){const c=h=>{const f=Uf(h,e,!0);f&&(l=!0,dt(a,f))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?(Pe(n)&&r.set(n,null),null):(re(i)?i.forEach(c=>a[c]=null):dt(a,i),Pe(n)&&r.set(n,a),a)}function qo(n,e){return!n||!xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ve(n,e[0].toLowerCase()+e.slice(1))||ve(n,vr(e))||ve(n,e))}function Gu(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:f,props:g,data:m,setupState:w,ctx:P,inheritAttrs:D}=n,k=lo(n);let C,F;try{if(t.shapeFlag&4){const W=s||r,ce=W;C=$t(h.call(ce,W,f,g,w,m,P)),F=l}else{const W=e;C=$t(W.length>1?W(g,{attrs:l,slots:a,emit:c}):W(g,null)),F=e.props?l:_y(l)}}catch(W){Vs.length=0,$o(W,n,1),C=Ot($n)}let j=C;if(F&&D!==!1){const W=Object.keys(F),{shapeFlag:ce}=j;W.length&&ce&7&&(i&&W.some(Fl)&&(F=yy(F,i)),j=Hr(j,F,!1,!0))}return t.dirs&&(j=Hr(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(t.dirs):t.dirs),t.transition&&Jl(j,t.transition),C=j,lo(k),C}const _y=n=>{let e;for(const t in n)(t==="class"||t==="style"||xo(t))&&((e||(e={}))[t]=n[t]);return e},yy=(n,e)=>{const t={};for(const r in n)(!Fl(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function vy(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Qu(r,a,h):!!a;if(c&8){const f=e.dynamicProps;for(let g=0;g<f.length;g++){const m=f[g];if(a[m]!==r[m]&&!qo(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Qu(r,a,h):!0:!!a;return!1}function Qu(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!qo(t,i))return!0}return!1}function Ty({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Bf=n=>n.__isSuspense;function Ey(n,e){e&&e.pendingBranch?re(n)?e.effects.push(...n):e.effects.push(n):D_(n)}const rt=Symbol.for("v-fgt"),Ho=Symbol.for("v-txt"),$n=Symbol.for("v-cmt"),Ba=Symbol.for("v-stc"),Vs=[];let It=null;function Ie(n=!1){Vs.push(It=n?null:[])}function Iy(){Vs.pop(),It=Vs[Vs.length-1]||null}let qs=1;function Ju(n,e=!1){qs+=n,n<0&&It&&e&&(It.hasOnce=!0)}function $f(n){return n.dynamicChildren=qs>0?It||Nr:null,Iy(),qs>0&&It&&It.push(n),n}function Re(n,e,t,r,s,i){return $f(O(n,e,t,r,s,i,!0))}function ll(n,e,t,r,s){return $f(Ot(n,e,t,r,s,!0))}function jf(n){return n?n.__v_isVNode===!0:!1}function Is(n,e){return n.type===e.type&&n.key===e.key}const qf=({key:n})=>n??null,Wi=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Me(n)||it(n)||le(n)?{i:St,r:n,k:e,f:!!t}:n:null);function O(n,e=null,t=null,r=0,s=null,i=n===rt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&qf(e),ref:e&&Wi(e),scopeId:yf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:St};return l?(Zl(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Me(t)?8:16),qs>0&&!a&&It&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&It.push(c),c}const Ot=wy;function wy(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===W_)&&(n=$n),jf(n)){const l=Hr(n,e,!0);return t&&Zl(l,t),qs>0&&!i&&It&&(l.shapeFlag&6?It[It.indexOf(n)]=l:It.push(l)),l.patchFlag=-2,l}if(Ny(n)&&(n=n.__vccOpts),e){e=Ay(e);let{class:l,style:c}=e;l&&!Me(l)&&(e.class=gt(l)),Pe(c)&&(Gl(c)&&!re(c)&&(c=dt({},c)),e.style=Us(c))}const a=Me(n)?1:Bf(n)?128:O_(n)?64:Pe(n)?4:le(n)?2:0;return O(n,e,t,r,s,a,i,!0)}function Ay(n){return n?Gl(n)||Pf(n)?dt({},n):n:null}function Hr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=n,h=e?by(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&qf(h),ref:e&&e.ref?t&&i?re(i)?i.concat(Wi(e)):[i,Wi(e)]:Wi(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==rt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Hr(n.ssContent),ssFallback:n.ssFallback&&Hr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&Jl(f,c.clone(f)),f}function lr(n=" ",e=0){return Ot(Ho,null,n,e)}function An(n="",e=!1){return e?(Ie(),ll($n,null,n)):Ot($n,null,n)}function $t(n){return n==null||typeof n=="boolean"?Ot($n):re(n)?Ot(rt,null,n.slice()):jf(n)?wn(n):Ot(Ho,null,String(n))}function wn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Hr(n)}function Zl(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(re(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Zl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Pf(e)?e._ctx=St:s===3&&St&&(St.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:St},t=32):(e=String(e),r&64?(t=16,e=[lr(e)]):t=8);n.children=e,n.shapeFlag|=t}function by(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=gt([e.class,r.class]));else if(s==="style")e.style=Us([e.style,r.style]);else if(xo(s)){const i=e[s],a=r[s];a&&i!==a&&!(re(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Ft(n,e,t,r=null){Gt(n,e,7,[t,r])}const Ry=Rf();let Sy=0;function Cy(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||Ry,i={uid:Sy++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new e_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Df(r,s),emitsOptions:Uf(r,s),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=my.bind(null,i),n.ce&&n.ce(i),i}let ht=null,ho,cl;{const n=Fo(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};ho=e("__VUE_INSTANCE_SETTERS__",t=>ht=t),cl=e("__VUE_SSR_SETTERS__",t=>Hs=t)}const ni=n=>{const e=ht;return ho(n),n.scope.on(),()=>{n.scope.off(),ho(e)}},Yu=()=>{ht&&ht.scope.off(),ho(null)};function Hf(n){return n.vnode.shapeFlag&4}let Hs=!1;function Py(n,e=!1,t=!1){e&&cl(e);const{props:r,children:s}=n.vnode,i=Hf(n);ny(n,r,i,e),oy(n,s,t||e);const a=i?ky(n,e):void 0;return e&&cl(!1),a}function ky(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,K_);const{setup:r}=t;if(r){an();const s=n.setupContext=r.length>1?Vy(n):null,i=ni(n),a=ti(r,n,0,[n.props,s]),l=$d(a);if(ln(),i(),(l||n.sp)&&!ks(n)&&vf(n),l){if(a.then(Yu,Yu),e)return a.then(c=>{Xu(n,c)}).catch(c=>{$o(c,n,0)});n.asyncDep=a}else Xu(n,a)}else zf(n)}function Xu(n,e,t){le(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Pe(e)&&(n.setupState=df(e)),zf(n)}function zf(n,e,t){const r=n.type;n.render||(n.render=r.render||jt);{const s=ni(n);an();try{G_(n)}finally{ln(),s()}}}const Dy={get(n,e){return nt(n,"get",""),n[e]}};function Vy(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Dy),slots:n.slots,emit:n.emit,expose:e}}function zo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(df(E_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ds)return Ds[t](n)},has(e,t){return t in e||t in Ds}})):n.proxy}function Ny(n){return le(n)&&"__vccOpts"in n}const fo=(n,e)=>R_(n,e,Hs),Oy="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ul;const Zu=typeof window<"u"&&window.trustedTypes;if(Zu)try{ul=Zu.createPolicy("vue",{createHTML:n=>n})}catch{}const Wf=ul?n=>ul.createHTML(n):n=>n,xy="http://www.w3.org/2000/svg",My="http://www.w3.org/1998/Math/MathML",tn=typeof document<"u"?document:null,eh=tn&&tn.createElement("template"),Ly={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?tn.createElementNS(xy,n):e==="mathml"?tn.createElementNS(My,n):t?tn.createElement(n,{is:t}):tn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>tn.createTextNode(n),createComment:n=>tn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>tn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{eh.innerHTML=Wf(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=eh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Fy=Symbol("_vtc");function Uy(n,e,t){const r=n[Fy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const th=Symbol("_vod"),By=Symbol("_vsh"),$y=Symbol(""),jy=/(^|;)\s*display\s*:/;function qy(n,e,t){const r=n.style,s=Me(t);let i=!1;if(t&&!s){if(e)if(Me(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();t[l]==null&&Ki(r,l,"")}else for(const a in e)t[a]==null&&Ki(r,a,"");for(const a in t)a==="display"&&(i=!0),Ki(r,a,t[a])}else if(s){if(e!==t){const a=r[$y];a&&(t+=";"+a),r.cssText=t,i=jy.test(t)}}else e&&n.removeAttribute("style");th in n&&(n[th]=i?r.display:"",n[By]&&(r.display="none"))}const nh=/\s*!important$/;function Ki(n,e,t){if(re(t))t.forEach(r=>Ki(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Hy(n,e);nh.test(t)?n.setProperty(vr(r),t.replace(nh,""),"important"):n[r]=t}}const rh=["Webkit","Moz","ms"],$a={};function Hy(n,e){const t=$a[e];if(t)return t;let r=Un(e);if(r!=="filter"&&r in n)return $a[e]=r;r=Hd(r);for(let s=0;s<rh.length;s++){const i=rh[s]+r;if(i in n)return $a[e]=i}return e}const sh="http://www.w3.org/1999/xlink";function ih(n,e,t,r,s,i=Ym(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(sh,e.slice(6,e.length)):n.setAttributeNS(sh,e,t):t==null||i&&!Wd(t)?n.removeAttribute(e):n.setAttribute(e,i?"":Kt(t)?String(t):t)}function oh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Wf(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Wd(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function cr(n,e,t,r){n.addEventListener(e,t,r)}function zy(n,e,t,r){n.removeEventListener(e,t,r)}const ah=Symbol("_vei");function Wy(n,e,t,r,s=null){const i=n[ah]||(n[ah]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=Ky(e);if(r){const h=i[e]=Jy(r,s);cr(n,l,h,c)}else a&&(zy(n,l,a,c),i[e]=void 0)}}const lh=/(?:Once|Passive|Capture)$/;function Ky(n){let e;if(lh.test(n)){e={};let r;for(;r=n.match(lh);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):vr(n.slice(2)),e]}let ja=0;const Gy=Promise.resolve(),Qy=()=>ja||(Gy.then(()=>ja=0),ja=Date.now());function Jy(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Gt(Yy(r,t.value),e,5,[r])};return t.value=n,t.attached=Qy(),t}function Yy(n,e){if(re(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ch=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Xy=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?Uy(n,r,a):e==="style"?qy(n,t,r):xo(e)?Fl(e)||Wy(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Zy(n,e,r,a))?(oh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ih(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Me(r))?oh(n,Un(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),ih(n,e,r,a))};function Zy(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&ch(e)&&le(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ch(e)&&Me(t)?!1:e in n}const po=n=>{const e=n.props["onUpdate:modelValue"]||!1;return re(e)?t=>Hi(e,t):e};function ev(n){n.target.composing=!0}function uh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Fr=Symbol("_assign"),Ur={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[Fr]=po(s);const i=r||s.props&&s.props.type==="number";cr(n,e?"change":"input",a=>{if(a.target.composing)return;let l=n.value;t&&(l=l.trim()),i&&(l=so(l)),n[Fr](l)}),t&&cr(n,"change",()=>{n.value=n.value.trim()}),e||(cr(n,"compositionstart",ev),cr(n,"compositionend",uh),cr(n,"change",uh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[Fr]=po(a),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?so(n.value):n.value,c=e??"";l!==c&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c))}},Kf={deep:!0,created(n,{value:e,modifiers:{number:t}},r){const s=Mo(e);cr(n,"change",()=>{const i=Array.prototype.filter.call(n.options,a=>a.selected).map(a=>t?so(go(a)):go(a));n[Fr](n.multiple?s?new Set(i):i:i[0]),n._assigning=!0,pf(()=>{n._assigning=!1})}),n[Fr]=po(r)},mounted(n,{value:e}){hh(n,e)},beforeUpdate(n,e,t){n[Fr]=po(t)},updated(n,{value:e}){n._assigning||hh(n,e)}};function hh(n,e){const t=n.multiple,r=re(e);if(!(t&&!r&&!Mo(e))){for(let s=0,i=n.options.length;s<i;s++){const a=n.options[s],l=go(a);if(t)if(r){const c=typeof l;c==="string"||c==="number"?a.selected=e.some(h=>String(h)===String(l)):a.selected=Zm(e,l)>-1}else a.selected=e.has(l);else if(Uo(go(a),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function go(n){return"_value"in n?n._value:n.value}const tv=["ctrl","shift","alt","meta"],nv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>tv.some(t=>n[`${t}Key`]&&!e.includes(t))},rv=(n,e)=>{const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=nv[e[a]];if(l&&l(s,e))return}return n(s,...i)})},sv=dt({patchProp:Xy},Ly);let dh;function iv(){return dh||(dh=ly(sv))}const ov=(...n)=>{const e=iv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=lv(r);if(!s)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,av(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function av(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function lv(n){return Me(n)?document.querySelector(n):n}const cv="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e",Wo=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},uv={class:"task-form"},hv={class:"form-group"},dv={class:"form-group"},fv={class:"form-row"},pv={class:"form-group"},gv=["min"],mv={class:"form-group"},_v=["value"],yv={__name:"TaskForm",emits:["add-task"],setup(n,{emit:e}){const t=e,r=Et({title:"",description:"",dueDate:"",priority:"média"}),s=["baixa","média","alta","urgente"],i=()=>{if(!r.value.title.trim()){alert("Por favor, preencha o título da tarefa");return}if(!r.value.dueDate){alert("Por favor, selecione uma data de vencimento");return}t("add-task",{title:r.value.title,description:r.value.description,dueDate:r.value.dueDate,priority:r.value.priority}),r.value.title="",r.value.description="",r.value.dueDate="",r.value.priority="média"},a=new Date().toISOString().split("T")[0];return(l,c)=>(Ie(),Re("div",uv,[c[9]||(c[9]=O("h2",{class:"desktop-only"},"Nova Tarefa",-1)),O("form",{onSubmit:rv(i,["prevent"])},[O("div",hv,[c[4]||(c[4]=O("label",{for:"title"},"Título*",-1)),Pn(O("input",{type:"text",id:"title","onUpdate:modelValue":c[0]||(c[0]=h=>r.value.title=h),placeholder:"Digite o título da tarefa",required:""},null,512),[[Ur,r.value.title]])]),O("div",dv,[c[5]||(c[5]=O("label",{for:"description"},"Descrição",-1)),Pn(O("textarea",{id:"description","onUpdate:modelValue":c[1]||(c[1]=h=>r.value.description=h),placeholder:"Descreva sua tarefa (opcional)",rows:"3"},null,512),[[Ur,r.value.description]])]),O("div",fv,[O("div",pv,[c[6]||(c[6]=O("label",{for:"dueDate"},"Data de Vencimento*",-1)),Pn(O("input",{type:"date",id:"dueDate","onUpdate:modelValue":c[2]||(c[2]=h=>r.value.dueDate=h),min:hf(a),required:""},null,8,gv),[[Ur,r.value.dueDate]])]),O("div",mv,[c[7]||(c[7]=O("label",{for:"priority"},"Prioridade",-1)),Pn(O("select",{id:"priority","onUpdate:modelValue":c[3]||(c[3]=h=>r.value.priority=h)},[(Ie(),Re(rt,null,dr(s,h=>O("option",{key:h,value:h},ke(h.charAt(0).toUpperCase()+h.slice(1)),9,_v)),64))],512),[[Kf,r.value.priority]])])]),c[8]||(c[8]=O("button",{type:"submit",class:"btn-add"},"Adicionar Tarefa",-1))],32)]))}},vv=Wo(yv,[["__scopeId","data-v-b671fc2d"]]),Tv={class:"task-list"},Ev={key:0,class:"no-tasks"},Iv={key:1,class:"tasks-container"},wv={key:0,class:"task-view"},Av={class:"task-header"},bv={class:"task-badges"},Rv={key:0,class:"task-description"},Sv={class:"task-meta"},Cv={class:"task-date"},Pv={class:"task-actions"},kv=["value","onChange"],Dv=["value"],Vv={class:"action-buttons"},Nv=["onClick"],Ov=["onClick"],xv={key:1,class:"task-edit"},Mv={class:"form-group"},Lv={class:"form-group"},Fv={class:"form-row"},Uv={class:"form-group"},Bv={class:"form-group"},$v=["value"],jv={__name:"TaskList",props:{tasks:{type:Array,required:!0}},emits:["remove-task","update-status","edit-task"],setup(n,{emit:e}){const t=e,r=Et(null),s=Et({title:"",description:"",dueDate:"",priority:""}),i=[{value:"pendente",label:"Pendente"},{value:"em_andamento",label:"Em Andamento"},{value:"concluida",label:"Concluída"},{value:"atrasada",label:"Atrasada"}],a=["baixa","média","alta","urgente"],l=w=>w?new Date(w).toLocaleDateString("pt-BR"):"",c=w=>{r.value=w.id,s.value={id:w.id,title:w.title,description:w.description,dueDate:w.dueDate,priority:w.priority}},h=()=>{if(!s.value.title.trim()){alert("Por favor, preencha o título da tarefa");return}t("edit-task",s.value),r.value=null},f=()=>{r.value=null},g=w=>{switch(w){case"concluida":return"status-completed";case"pendente":return"status-pending";case"atrasada":return"status-overdue";case"em_andamento":return"status-progress";default:return""}},m=w=>{switch(w){case"baixa":return"priority-low";case"média":return"priority-medium";case"alta":return"priority-high";case"urgente":return"priority-urgent";default:return""}};return(w,P)=>(Ie(),Re("div",Tv,[n.tasks.length===0?(Ie(),Re("div",Ev,P[4]||(P[4]=[O("p",null,"Nenhuma tarefa encontrada. Adicione uma nova tarefa para começar!",-1)]))):(Ie(),Re("div",Iv,[(Ie(!0),Re(rt,null,dr(n.tasks,D=>{var k;return Ie(),Re("div",{key:D.id,class:gt(["task-item",g(D.status)])},[r.value!==D.id?(Ie(),Re("div",wv,[O("div",Av,[O("h3",null,ke(D.title),1),O("div",bv,[O("span",{class:gt(["task-priority",m(D.priority)])},ke(D.priority.charAt(0).toUpperCase()+D.priority.slice(1)),3),O("span",{class:gt(["task-status",g(D.status)])},ke((k=i.find(C=>C.value===D.status))==null?void 0:k.label),3)])]),D.description?(Ie(),Re("p",Rv,ke(D.description),1)):An("",!0),O("div",Sv,[O("span",Cv,[P[5]||(P[5]=O("strong",null,"Vencimento:",-1)),lr(" "+ke(l(D.dueDate)),1)])]),O("div",Pv,[O("select",{value:D.status,onChange:C=>t("update-status",D.id,C.target.value),class:"status-select"},[(Ie(),Re(rt,null,dr(i,C=>O("option",{key:C.value,value:C.value},ke(C.label),9,Dv)),64))],40,kv),O("div",Vv,[O("button",{onClick:C=>c(D),class:"btn-edit"},"Editar",8,Nv),O("button",{onClick:C=>t("remove-task",D.id),class:"btn-delete"},"Excluir",8,Ov)])])])):(Ie(),Re("div",xv,[O("div",Mv,[P[6]||(P[6]=O("label",{for:"edit-title"},"Título*",-1)),Pn(O("input",{type:"text",id:"edit-title","onUpdate:modelValue":P[0]||(P[0]=C=>s.value.title=C),required:""},null,512),[[Ur,s.value.title]])]),O("div",Lv,[P[7]||(P[7]=O("label",{for:"edit-description"},"Descrição",-1)),Pn(O("textarea",{id:"edit-description","onUpdate:modelValue":P[1]||(P[1]=C=>s.value.description=C),rows:"3"},null,512),[[Ur,s.value.description]])]),O("div",Fv,[O("div",Uv,[P[8]||(P[8]=O("label",{for:"edit-dueDate"},"Data de Vencimento*",-1)),Pn(O("input",{type:"date",id:"edit-dueDate","onUpdate:modelValue":P[2]||(P[2]=C=>s.value.dueDate=C),required:""},null,512),[[Ur,s.value.dueDate]])]),O("div",Bv,[P[9]||(P[9]=O("label",{for:"edit-priority"},"Prioridade",-1)),Pn(O("select",{id:"edit-priority","onUpdate:modelValue":P[3]||(P[3]=C=>s.value.priority=C)},[(Ie(),Re(rt,null,dr(a,C=>O("option",{key:C,value:C},ke(C.charAt(0).toUpperCase()+C.slice(1)),9,$v)),64))],512),[[Kf,s.value.priority]])])]),O("div",{class:"edit-actions"},[O("button",{onClick:h,class:"btn-save"},"Salvar"),O("button",{onClick:f,class:"btn-cancel"},"Cancelar")])]))],2)}),128))]))]))}},qv=Wo(jv,[["__scopeId","data-v-b9b93b59"]]),Hv={class:"task-filter"},zv={class:"filter-buttons"},Wv=["onClick"],Kv={__name:"TaskFilter",props:{filter:{type:String,required:!0}},emits:["set-filter"],setup(n,{emit:e}){const t=e,r=[{value:"all",label:"Todas"},{value:"pendente",label:"Pendentes"},{value:"em_andamento",label:"Em Andamento"},{value:"concluida",label:"Concluídas"},{value:"atrasada",label:"Atrasadas"}],s=i=>{t("set-filter",i)};return(i,a)=>(Ie(),Re("div",Hv,[a[0]||(a[0]=O("h3",null,"Filtrar Tarefas",-1)),O("div",zv,[(Ie(),Re(rt,null,dr(r,l=>O("button",{key:l.value,onClick:c=>s(l.value),class:gt([{active:n.filter===l.value},"filter-btn"])},ke(l.label),11,Wv)),64))])]))}},Gv=Wo(Kv,[["__scopeId","data-v-1e991b36"]]),Qv={class:"kanban-container"},Jv=["onDragover","onDrop"],Yv={class:"task-count"},Xv={class:"column-content"},Zv={key:0,class:"empty-column"},eT=["onDragstart"],tT={class:"card-header"},nT={key:0,class:"card-description"},rT={class:"card-meta"},sT={class:"due-date"},iT={class:"card-actions"},oT=["onClick"],aT=["onClick"],lT={__name:"TaskKanban",props:{tasks:{type:Array,required:!0}},emits:["remove-task","update-status","edit-task"],setup(n,{emit:e}){const t=n,r=e,s=fo(()=>{const D={pendente:[],em_andamento:[],concluida:[],atrasada:[]};return t.tasks.forEach(k=>{D[k.status]&&D[k.status].push(k)}),D}),i={atrasada:"Atrasadas",pendente:"Pendentes",em_andamento:"Em Andamento",concluida:"Concluídas"},a={pendente:"var(--status-pending)",em_andamento:"var(--status-progress)",concluida:"var(--status-completed)",atrasada:"var(--status-overdue)"},l=D=>D?new Date(D).toLocaleDateString("pt-BR"):"",c=D=>{switch(D){case"baixa":return"priority-low";case"média":return"priority-medium";case"alta":return"priority-high";case"urgente":return"priority-urgent";default:return""}},h=Et(null),f=Et(null),g=D=>{h.value=D},m=(D,k)=>{D.preventDefault(),f.value=k},w=(D,k)=>{D.preventDefault(),h.value&&h.value.status!==k&&r("update-status",h.value.id,k),h.value=null,f.value=null},P=()=>{h.value=null,f.value=null};return(D,k)=>(Ie(),Re("div",Qv,[(Ie(),Re(rt,null,dr(i,(C,F)=>O("div",{key:F,class:gt(["kanban-column",{"drag-over":f.value===F}]),style:Us({"--column-color":a[F]}),onDragover:j=>m(j,F),onDrop:j=>w(j,F)},[O("div",{class:"column-header",style:Us({backgroundColor:`${a[F]}20`})},[O("h3",null,ke(C),1),O("span",Yv,ke(s.value[F].length),1)],4),O("div",Xv,[s.value[F].length===0?(Ie(),Re("div",Zv," Nenhuma tarefa ")):An("",!0),(Ie(!0),Re(rt,null,dr(s.value[F],j=>(Ie(),Re("div",{key:j.id,class:"kanban-card",draggable:"true",onDragstart:W=>g(j),onDragend:P},[O("div",tT,[O("h4",null,ke(j.title),1),O("span",{class:gt(["task-priority",c(j.priority)])},ke(j.priority.charAt(0).toUpperCase()+j.priority.slice(1)),3)]),j.description?(Ie(),Re("p",nT,ke(j.description.length>100?j.description.substring(0,100)+"...":j.description),1)):An("",!0),O("div",rT,[O("span",sT,"Vencimento: "+ke(l(j.dueDate)),1)]),O("div",iT,[O("button",{onClick:W=>r("edit-task",j),class:"btn-icon edit-icon",title:"Editar"},k[0]||(k[0]=[O("span",null,"✏️",-1)]),8,oT),O("button",{onClick:W=>r("remove-task",j.id),class:"btn-icon delete-icon",title:"Excluir"},k[1]||(k[1]=[O("span",null,"🗑️",-1)]),8,aT)])],40,eT))),128))])],46,Jv)),64))]))}},cT=Wo(lT,[["__scopeId","data-v-1e7f5ea4"]]),uT=()=>{};var fh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},hT=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Qf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,w=h&63;c||(w=64,a||(m=64)),r.push(t[f],t[g],t[m],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Gf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):hT(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||g==null)throw new dT;const m=i<<2|l>>4;if(r.push(m),h!==64){const w=l<<4&240|h>>2;if(r.push(w),g!==64){const P=h<<6&192|g;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class dT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fT=function(n){const e=Gf(n);return Qf.encodeByteArray(e,!0)},mo=function(n){return fT(n).replace(/\./g,"")},Jf=function(n){try{return Qf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=()=>pT().__FIREBASE_DEFAULTS__,mT=()=>{if(typeof process>"u"||typeof fh>"u")return;const n=fh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},_T=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Jf(n[1]);return e&&JSON.parse(e)},Ko=()=>{try{return uT()||gT()||mT()||_T()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Yf=n=>{var e,t;return(t=(e=Ko())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},yT=n=>{const e=Yf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Xf=()=>{var n;return(n=Ko())===null||n===void 0?void 0:n.config},Zf=n=>{var e;return(e=Ko())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(n){return n.endsWith(".cloudworkstations.dev")}async function ep(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[mo(JSON.stringify(t)),mo(JSON.stringify(a)),""].join(".")}const Ns={};function ET(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ns))Ns[e]?n.emulator.push(e):n.prod.push(e);return n}function IT(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ph=!1;function tp(n,e){if(typeof window>"u"||typeof document>"u"||!ri(window.location.host)||Ns[n]===e||Ns[n]||ph)return;Ns[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=ET().prod.length>0;function a(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,w){m.setAttribute("width","24"),m.setAttribute("id",w),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{ph=!0,a()},m}function f(m,w){m.setAttribute("id",w),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function g(){const m=IT(r),w=t("text"),P=document.getElementById(w)||document.createElement("span"),D=t("learnmore"),k=document.getElementById(D)||document.createElement("a"),C=t("preprendIcon"),F=document.getElementById(C)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const j=m.element;l(j),f(k,D);const W=h();c(F,C),j.append(F,P,k,W),document.body.appendChild(j)}i?(P.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function AT(){var n;const e=(n=Ko())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function RT(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ST(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CT(){const n=ot();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function PT(){return!AT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kT(){try{return typeof indexedDB=="object"}catch{return!1}}function DT(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT="FirebaseError";class gn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=VT,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,si.prototype.create)}}class si{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?NT(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new gn(s,l,r)}}function NT(n,e){return n.replace(OT,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const OT=/\{\$([^}]+)}/g;function xT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function fr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(gh(i)&&gh(a)){if(!fr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function gh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function MT(n,e){const t=new LT(n,e);return t.subscribe.bind(t)}class LT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");FT(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=qa),s.error===void 0&&(s.error=qa),s.complete===void 0&&(s.complete=qa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FT(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function qa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(n){return n&&n._delegate?n._delegate:n}class pr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new vT;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($T(e))try{this.getOrInitializeService({instanceIdentifier:ar})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ar){return this.instances.has(e)}getOptions(e=ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BT(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ar){return this.component?this.component.multipleInstances?e:ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BT(n){return n===ar?void 0:n}function $T(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new UT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const qT={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},HT=he.INFO,zT={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},WT=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=zT[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ec{constructor(e){this.name=e,this._logLevel=HT,this._logHandler=WT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const KT=(n,e)=>e.some(t=>n instanceof t);let mh,_h;function GT(){return mh||(mh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QT(){return _h||(_h=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const np=new WeakMap,hl=new WeakMap,rp=new WeakMap,Ha=new WeakMap,tc=new WeakMap;function JT(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Vn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&np.set(t,n)}).catch(()=>{}),tc.set(e,n),e}function YT(n){if(hl.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});hl.set(n,e)}let dl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return hl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||rp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function XT(n){dl=n(dl)}function ZT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(za(this),e,...t);return rp.set(r,e.sort?e.sort():[e]),Vn(r)}:QT().includes(n)?function(...e){return n.apply(za(this),e),Vn(np.get(this))}:function(...e){return Vn(n.apply(za(this),e))}}function eE(n){return typeof n=="function"?ZT(n):(n instanceof IDBTransaction&&YT(n),KT(n,GT())?new Proxy(n,dl):n)}function Vn(n){if(n instanceof IDBRequest)return JT(n);if(Ha.has(n))return Ha.get(n);const e=eE(n);return e!==n&&(Ha.set(n,e),tc.set(e,n)),e}const za=n=>tc.get(n);function tE(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Vn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Vn(a.result),c.oldVersion,c.newVersion,Vn(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const nE=["get","getKey","getAll","getAllKeys","count"],rE=["put","add","delete","clear"],Wa=new Map;function yh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Wa.get(e))return Wa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=rE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||nE.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return Wa.set(e,i),i}XT(n=>({...n,get:(e,t,r)=>yh(e,t)||n.get(e,t,r),has:(e,t)=>!!yh(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(iE(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function iE(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fl="@firebase/app",vh="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new ec("@firebase/app"),oE="@firebase/app-compat",aE="@firebase/analytics-compat",lE="@firebase/analytics",cE="@firebase/app-check-compat",uE="@firebase/app-check",hE="@firebase/auth",dE="@firebase/auth-compat",fE="@firebase/database",pE="@firebase/data-connect",gE="@firebase/database-compat",mE="@firebase/functions",_E="@firebase/functions-compat",yE="@firebase/installations",vE="@firebase/installations-compat",TE="@firebase/messaging",EE="@firebase/messaging-compat",IE="@firebase/performance",wE="@firebase/performance-compat",AE="@firebase/remote-config",bE="@firebase/remote-config-compat",RE="@firebase/storage",SE="@firebase/storage-compat",CE="@firebase/firestore",PE="@firebase/ai",kE="@firebase/firestore-compat",DE="firebase",VE="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl="[DEFAULT]",NE={[fl]:"fire-core",[oE]:"fire-core-compat",[lE]:"fire-analytics",[aE]:"fire-analytics-compat",[uE]:"fire-app-check",[cE]:"fire-app-check-compat",[hE]:"fire-auth",[dE]:"fire-auth-compat",[fE]:"fire-rtdb",[pE]:"fire-data-connect",[gE]:"fire-rtdb-compat",[mE]:"fire-fn",[_E]:"fire-fn-compat",[yE]:"fire-iid",[vE]:"fire-iid-compat",[TE]:"fire-fcm",[EE]:"fire-fcm-compat",[IE]:"fire-perf",[wE]:"fire-perf-compat",[AE]:"fire-rc",[bE]:"fire-rc-compat",[RE]:"fire-gcs",[SE]:"fire-gcs-compat",[CE]:"fire-fst",[kE]:"fire-fst-compat",[PE]:"fire-vertex","fire-js":"fire-js",[DE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=new Map,OE=new Map,gl=new Map;function Th(n,e){try{n.container.addComponent(e)}catch(t){cn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function zr(n){const e=n.name;if(gl.has(e))return cn.debug(`There were multiple attempts to register component ${e}.`),!1;gl.set(e,n);for(const t of _o.values())Th(t,n);for(const t of OE.values())Th(t,n);return!0}function nc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Dt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nn=new si("app","Firebase",xE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=VE;function sp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pl,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Nn.create("bad-app-name",{appName:String(s)});if(t||(t=Xf()),!t)throw Nn.create("no-options");const i=_o.get(s);if(i){if(fr(t,i.options)&&fr(r,i.config))return i;throw Nn.create("duplicate-app",{appName:s})}const a=new jT(s);for(const c of gl.values())a.addComponent(c);const l=new ME(t,r,a);return _o.set(s,l),l}function ip(n=pl){const e=_o.get(n);if(!e&&n===pl&&Xf())return sp();if(!e)throw Nn.create("no-app",{appName:n});return e}function On(n,e,t){var r;let s=(r=NE[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cn.warn(l.join(" "));return}zr(new pr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE="firebase-heartbeat-database",FE=1,zs="firebase-heartbeat-store";let Ka=null;function op(){return Ka||(Ka=tE(LE,FE,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(zs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Nn.create("idb-open",{originalErrorMessage:n.message})})),Ka}async function UE(n){try{const t=(await op()).transaction(zs),r=await t.objectStore(zs).get(ap(n));return await t.done,r}catch(e){if(e instanceof gn)cn.warn(e.message);else{const t=Nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cn.warn(t.message)}}}async function Eh(n,e){try{const r=(await op()).transaction(zs,"readwrite");await r.objectStore(zs).put(e,ap(n)),await r.done}catch(t){if(t instanceof gn)cn.warn(t.message);else{const r=Nn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});cn.warn(r.message)}}}function ap(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=1024,$E=30;class jE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new HE(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ih();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>$E){const a=zE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ih(),{heartbeatsToSend:r,unsentEntries:s}=qE(this._heartbeatsCache.heartbeats),i=mo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return cn.warn(t),""}}}function Ih(){return new Date().toISOString().substring(0,10)}function qE(n,e=BE){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),wh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),wh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class HE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kT()?DT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await UE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Eh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Eh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wh(n){return mo(JSON.stringify({version:2,heartbeats:n})).length}function zE(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(n){zr(new pr("platform-logger",e=>new sE(e),"PRIVATE")),zr(new pr("heartbeat",e=>new jE(e),"PRIVATE")),On(fl,vh,n),On(fl,vh,"esm2017"),On("fire-js","")}WE("");var KE="firebase",GE="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On(KE,GE,"app");var Ah=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xn,lp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function T(){}T.prototype=_.prototype,A.D=_.prototype,A.prototype=new T,A.prototype.constructor=A,A.C=function(I,b,S){for(var v=Array(arguments.length-2),yt=2;yt<arguments.length;yt++)v[yt-2]=arguments[yt];return _.prototype[b].apply(I,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,_,T){T||(T=0);var I=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)I[b]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(b=0;16>b;++b)I[b]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=A.g[0],T=A.g[1],b=A.g[2];var S=A.g[3],v=_+(S^T&(b^S))+I[0]+3614090360&4294967295;_=T+(v<<7&4294967295|v>>>25),v=S+(b^_&(T^b))+I[1]+3905402710&4294967295,S=_+(v<<12&4294967295|v>>>20),v=b+(T^S&(_^T))+I[2]+606105819&4294967295,b=S+(v<<17&4294967295|v>>>15),v=T+(_^b&(S^_))+I[3]+3250441966&4294967295,T=b+(v<<22&4294967295|v>>>10),v=_+(S^T&(b^S))+I[4]+4118548399&4294967295,_=T+(v<<7&4294967295|v>>>25),v=S+(b^_&(T^b))+I[5]+1200080426&4294967295,S=_+(v<<12&4294967295|v>>>20),v=b+(T^S&(_^T))+I[6]+2821735955&4294967295,b=S+(v<<17&4294967295|v>>>15),v=T+(_^b&(S^_))+I[7]+4249261313&4294967295,T=b+(v<<22&4294967295|v>>>10),v=_+(S^T&(b^S))+I[8]+1770035416&4294967295,_=T+(v<<7&4294967295|v>>>25),v=S+(b^_&(T^b))+I[9]+2336552879&4294967295,S=_+(v<<12&4294967295|v>>>20),v=b+(T^S&(_^T))+I[10]+4294925233&4294967295,b=S+(v<<17&4294967295|v>>>15),v=T+(_^b&(S^_))+I[11]+2304563134&4294967295,T=b+(v<<22&4294967295|v>>>10),v=_+(S^T&(b^S))+I[12]+1804603682&4294967295,_=T+(v<<7&4294967295|v>>>25),v=S+(b^_&(T^b))+I[13]+4254626195&4294967295,S=_+(v<<12&4294967295|v>>>20),v=b+(T^S&(_^T))+I[14]+2792965006&4294967295,b=S+(v<<17&4294967295|v>>>15),v=T+(_^b&(S^_))+I[15]+1236535329&4294967295,T=b+(v<<22&4294967295|v>>>10),v=_+(b^S&(T^b))+I[1]+4129170786&4294967295,_=T+(v<<5&4294967295|v>>>27),v=S+(T^b&(_^T))+I[6]+3225465664&4294967295,S=_+(v<<9&4294967295|v>>>23),v=b+(_^T&(S^_))+I[11]+643717713&4294967295,b=S+(v<<14&4294967295|v>>>18),v=T+(S^_&(b^S))+I[0]+3921069994&4294967295,T=b+(v<<20&4294967295|v>>>12),v=_+(b^S&(T^b))+I[5]+3593408605&4294967295,_=T+(v<<5&4294967295|v>>>27),v=S+(T^b&(_^T))+I[10]+38016083&4294967295,S=_+(v<<9&4294967295|v>>>23),v=b+(_^T&(S^_))+I[15]+3634488961&4294967295,b=S+(v<<14&4294967295|v>>>18),v=T+(S^_&(b^S))+I[4]+3889429448&4294967295,T=b+(v<<20&4294967295|v>>>12),v=_+(b^S&(T^b))+I[9]+568446438&4294967295,_=T+(v<<5&4294967295|v>>>27),v=S+(T^b&(_^T))+I[14]+3275163606&4294967295,S=_+(v<<9&4294967295|v>>>23),v=b+(_^T&(S^_))+I[3]+4107603335&4294967295,b=S+(v<<14&4294967295|v>>>18),v=T+(S^_&(b^S))+I[8]+1163531501&4294967295,T=b+(v<<20&4294967295|v>>>12),v=_+(b^S&(T^b))+I[13]+2850285829&4294967295,_=T+(v<<5&4294967295|v>>>27),v=S+(T^b&(_^T))+I[2]+4243563512&4294967295,S=_+(v<<9&4294967295|v>>>23),v=b+(_^T&(S^_))+I[7]+1735328473&4294967295,b=S+(v<<14&4294967295|v>>>18),v=T+(S^_&(b^S))+I[12]+2368359562&4294967295,T=b+(v<<20&4294967295|v>>>12),v=_+(T^b^S)+I[5]+4294588738&4294967295,_=T+(v<<4&4294967295|v>>>28),v=S+(_^T^b)+I[8]+2272392833&4294967295,S=_+(v<<11&4294967295|v>>>21),v=b+(S^_^T)+I[11]+1839030562&4294967295,b=S+(v<<16&4294967295|v>>>16),v=T+(b^S^_)+I[14]+4259657740&4294967295,T=b+(v<<23&4294967295|v>>>9),v=_+(T^b^S)+I[1]+2763975236&4294967295,_=T+(v<<4&4294967295|v>>>28),v=S+(_^T^b)+I[4]+1272893353&4294967295,S=_+(v<<11&4294967295|v>>>21),v=b+(S^_^T)+I[7]+4139469664&4294967295,b=S+(v<<16&4294967295|v>>>16),v=T+(b^S^_)+I[10]+3200236656&4294967295,T=b+(v<<23&4294967295|v>>>9),v=_+(T^b^S)+I[13]+681279174&4294967295,_=T+(v<<4&4294967295|v>>>28),v=S+(_^T^b)+I[0]+3936430074&4294967295,S=_+(v<<11&4294967295|v>>>21),v=b+(S^_^T)+I[3]+3572445317&4294967295,b=S+(v<<16&4294967295|v>>>16),v=T+(b^S^_)+I[6]+76029189&4294967295,T=b+(v<<23&4294967295|v>>>9),v=_+(T^b^S)+I[9]+3654602809&4294967295,_=T+(v<<4&4294967295|v>>>28),v=S+(_^T^b)+I[12]+3873151461&4294967295,S=_+(v<<11&4294967295|v>>>21),v=b+(S^_^T)+I[15]+530742520&4294967295,b=S+(v<<16&4294967295|v>>>16),v=T+(b^S^_)+I[2]+3299628645&4294967295,T=b+(v<<23&4294967295|v>>>9),v=_+(b^(T|~S))+I[0]+4096336452&4294967295,_=T+(v<<6&4294967295|v>>>26),v=S+(T^(_|~b))+I[7]+1126891415&4294967295,S=_+(v<<10&4294967295|v>>>22),v=b+(_^(S|~T))+I[14]+2878612391&4294967295,b=S+(v<<15&4294967295|v>>>17),v=T+(S^(b|~_))+I[5]+4237533241&4294967295,T=b+(v<<21&4294967295|v>>>11),v=_+(b^(T|~S))+I[12]+1700485571&4294967295,_=T+(v<<6&4294967295|v>>>26),v=S+(T^(_|~b))+I[3]+2399980690&4294967295,S=_+(v<<10&4294967295|v>>>22),v=b+(_^(S|~T))+I[10]+4293915773&4294967295,b=S+(v<<15&4294967295|v>>>17),v=T+(S^(b|~_))+I[1]+2240044497&4294967295,T=b+(v<<21&4294967295|v>>>11),v=_+(b^(T|~S))+I[8]+1873313359&4294967295,_=T+(v<<6&4294967295|v>>>26),v=S+(T^(_|~b))+I[15]+4264355552&4294967295,S=_+(v<<10&4294967295|v>>>22),v=b+(_^(S|~T))+I[6]+2734768916&4294967295,b=S+(v<<15&4294967295|v>>>17),v=T+(S^(b|~_))+I[13]+1309151649&4294967295,T=b+(v<<21&4294967295|v>>>11),v=_+(b^(T|~S))+I[4]+4149444226&4294967295,_=T+(v<<6&4294967295|v>>>26),v=S+(T^(_|~b))+I[11]+3174756917&4294967295,S=_+(v<<10&4294967295|v>>>22),v=b+(_^(S|~T))+I[2]+718787259&4294967295,b=S+(v<<15&4294967295|v>>>17),v=T+(S^(b|~_))+I[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(b+(v<<21&4294967295|v>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+S&4294967295}r.prototype.u=function(A,_){_===void 0&&(_=A.length);for(var T=_-this.blockSize,I=this.B,b=this.h,S=0;S<_;){if(b==0)for(;S<=T;)s(this,A,S),S+=this.blockSize;if(typeof A=="string"){for(;S<_;)if(I[b++]=A.charCodeAt(S++),b==this.blockSize){s(this,I),b=0;break}}else for(;S<_;)if(I[b++]=A[S++],b==this.blockSize){s(this,I),b=0;break}}this.h=b,this.o+=_},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;var T=8*this.o;for(_=A.length-8;_<A.length;++_)A[_]=T&255,T/=256;for(this.u(A),A=Array(16),_=T=0;4>_;++_)for(var I=0;32>I;I+=8)A[T++]=this.g[_]>>>I&255;return A};function i(A,_){var T=l;return Object.prototype.hasOwnProperty.call(T,A)?T[A]:T[A]=_(A)}function a(A,_){this.h=_;for(var T=[],I=!0,b=A.length-1;0<=b;b--){var S=A[b]|0;I&&S==_||(T[b]=S,I=!1)}this.g=T}var l={};function c(A){return-128<=A&&128>A?i(A,function(_){return new a([_|0],0>_?-1:0)}):new a([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return g;if(0>A)return k(h(-A));for(var _=[],T=1,I=0;A>=T;I++)_[I]=A/T|0,T*=4294967296;return new a(_,0)}function f(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return k(f(A.substring(1),_));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(_,8)),I=g,b=0;b<A.length;b+=8){var S=Math.min(8,A.length-b),v=parseInt(A.substring(b,b+S),_);8>S?(S=h(Math.pow(_,S)),I=I.j(S).add(h(v))):(I=I.j(T),I=I.add(h(v)))}return I}var g=c(0),m=c(1),w=c(16777216);n=a.prototype,n.m=function(){if(D(this))return-k(this).m();for(var A=0,_=1,T=0;T<this.g.length;T++){var I=this.i(T);A+=(0<=I?I:4294967296+I)*_,_*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(P(this))return"0";if(D(this))return"-"+k(this).toString(A);for(var _=h(Math.pow(A,6)),T=this,I="";;){var b=W(T,_).g;T=C(T,b.j(_));var S=((0<T.g.length?T.g[0]:T.h)>>>0).toString(A);if(T=b,P(T))return S+I;for(;6>S.length;)S="0"+S;I=S+I}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function P(A){if(A.h!=0)return!1;for(var _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function D(A){return A.h==-1}n.l=function(A){return A=C(this,A),D(A)?-1:P(A)?0:1};function k(A){for(var _=A.g.length,T=[],I=0;I<_;I++)T[I]=~A.g[I];return new a(T,~A.h).add(m)}n.abs=function(){return D(this)?k(this):this},n.add=function(A){for(var _=Math.max(this.g.length,A.g.length),T=[],I=0,b=0;b<=_;b++){var S=I+(this.i(b)&65535)+(A.i(b)&65535),v=(S>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);I=v>>>16,S&=65535,v&=65535,T[b]=v<<16|S}return new a(T,T[T.length-1]&-2147483648?-1:0)};function C(A,_){return A.add(k(_))}n.j=function(A){if(P(this)||P(A))return g;if(D(this))return D(A)?k(this).j(k(A)):k(k(this).j(A));if(D(A))return k(this.j(k(A)));if(0>this.l(w)&&0>A.l(w))return h(this.m()*A.m());for(var _=this.g.length+A.g.length,T=[],I=0;I<2*_;I++)T[I]=0;for(I=0;I<this.g.length;I++)for(var b=0;b<A.g.length;b++){var S=this.i(I)>>>16,v=this.i(I)&65535,yt=A.i(b)>>>16,mn=A.i(b)&65535;T[2*I+2*b]+=v*mn,F(T,2*I+2*b),T[2*I+2*b+1]+=S*mn,F(T,2*I+2*b+1),T[2*I+2*b+1]+=v*yt,F(T,2*I+2*b+1),T[2*I+2*b+2]+=S*yt,F(T,2*I+2*b+2)}for(I=0;I<_;I++)T[I]=T[2*I+1]<<16|T[2*I];for(I=_;I<2*_;I++)T[I]=0;return new a(T,0)};function F(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function j(A,_){this.g=A,this.h=_}function W(A,_){if(P(_))throw Error("division by zero");if(P(A))return new j(g,g);if(D(A))return _=W(k(A),_),new j(k(_.g),k(_.h));if(D(_))return _=W(A,k(_)),new j(k(_.g),_.h);if(30<A.g.length){if(D(A)||D(_))throw Error("slowDivide_ only works with positive integers.");for(var T=m,I=_;0>=I.l(A);)T=ce(T),I=ce(I);var b=_e(T,1),S=_e(I,1);for(I=_e(I,2),T=_e(T,2);!P(I);){var v=S.add(I);0>=v.l(A)&&(b=b.add(T),S=v),I=_e(I,1),T=_e(T,1)}return _=C(A,b.j(_)),new j(b,_)}for(b=g;0<=A.l(_);){for(T=Math.max(1,Math.floor(A.m()/_.m())),I=Math.ceil(Math.log(T)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),S=h(T),v=S.j(_);D(v)||0<v.l(A);)T-=I,S=h(T),v=S.j(_);P(S)&&(S=m),b=b.add(S),A=C(A,v)}return new j(b,A)}n.A=function(A){return W(this,A).h},n.and=function(A){for(var _=Math.max(this.g.length,A.g.length),T=[],I=0;I<_;I++)T[I]=this.i(I)&A.i(I);return new a(T,this.h&A.h)},n.or=function(A){for(var _=Math.max(this.g.length,A.g.length),T=[],I=0;I<_;I++)T[I]=this.i(I)|A.i(I);return new a(T,this.h|A.h)},n.xor=function(A){for(var _=Math.max(this.g.length,A.g.length),T=[],I=0;I<_;I++)T[I]=this.i(I)^A.i(I);return new a(T,this.h^A.h)};function ce(A){for(var _=A.g.length+1,T=[],I=0;I<_;I++)T[I]=A.i(I)<<1|A.i(I-1)>>>31;return new a(T,A.h)}function _e(A,_){var T=_>>5;_%=32;for(var I=A.g.length-T,b=[],S=0;S<I;S++)b[S]=0<_?A.i(S+T)>>>_|A.i(S+T+1)<<32-_:A.i(S+T);return new a(b,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,lp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,xn=a}).apply(typeof Ah<"u"?Ah:typeof self<"u"?self:typeof window<"u"?window:{});var Li=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cp,As,up,Gi,ml,hp,dp,fp;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Li=="object"&&Li];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in d))break e;d=d[R]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,p=!1,R={next:function(){if(!p&&d<o.length){var V=d++;return{value:u(V,o[V]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function g(o,u,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function m(o,u,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,m.apply(null,arguments)}function w(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function P(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,R,V){for(var z=Array(arguments.length-2),we=2;we<arguments.length;we++)z[we-2]=arguments[we];return u.prototype[R].apply(p,z)}}function D(o){const u=o.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function k(o,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(c(p)){const R=o.length||0,V=p.length||0;o.length=R+V;for(let z=0;z<V;z++)o[R+z]=p[z]}else o.push(p)}}class C{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(o){return/^[\s\xa0]*$/.test(o)}function j(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function W(o){return W[" "](o),o}W[" "]=function(){};var ce=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function _e(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function A(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function _(o){const u={};for(const d in o)u[d]=o[d];return u}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,u){let d,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(d in p)o[d]=p[d];for(let V=0;V<T.length;V++)d=T[V],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function b(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function S(o){l.setTimeout(()=>{throw o},0)}function v(){var o=Pt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class yt{constructor(){this.h=this.g=null}add(u,d){const p=mn.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var mn=new C(()=>new je,o=>o.reset());class je{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,ge=!1,Pt=new yt,Yn=()=>{const o=l.Promise.resolve(void 0);Ee=()=>{o.then(Jt)}};var Jt=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(d){S(d)}var u=mn;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ge=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var ma=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function Xn(o,u){if(Fe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ce){e:{try{W(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Zn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Xn.aa.h.call(this)}}P(Xn,Fe);var Zn={2:"touch",3:"pen",4:"mouse"};Xn.prototype.h=function(){Xn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Yt="closure_listenable_"+(1e6*Math.random()|0),os=0;function _i(o,u,d,p,R){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=R,this.key=++os,this.da=this.fa=!1}function Lt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function as(o){this.src=o,this.g={},this.h=0}as.prototype.add=function(o,u,d,p,R){var V=o.toString();o=this.g[V],o||(o=this.g[V]=[],this.h++);var z=E(o,u,p,R);return-1<z?(u=o[z],d||(u.fa=!1)):(u=new _i(u,this.src,V,!!p,R),u.fa=d,o.push(u)),u};function y(o,u){var d=u.type;if(d in o.g){var p=o.g[d],R=Array.prototype.indexOf.call(p,u,void 0),V;(V=0<=R)&&Array.prototype.splice.call(p,R,1),V&&(Lt(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function E(o,u,d,p){for(var R=0;R<o.length;++R){var V=o[R];if(!V.da&&V.listener==u&&V.capture==!!d&&V.ha==p)return R}return-1}var N="closure_lm_"+(1e6*Math.random()|0),B={};function L(o,u,d,p,R){if(Array.isArray(u)){for(var V=0;V<u.length;V++)L(o,u[V],d,p,R);return null}return d=ne(d),o&&o[Yt]?o.K(u,d,h(p)?!!p.capture:!1,R):U(o,u,d,!1,p,R)}function U(o,u,d,p,R,V){if(!u)throw Error("Invalid event type");var z=h(R)?!!R.capture:!!R,we=K(o);if(we||(o[N]=we=new as(o)),d=we.add(u,d,p,z,V),d.proxy)return d;if(p=G(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)ma||(R=z),R===void 0&&(R=!1),o.addEventListener(u.toString(),p,R);else if(o.attachEvent)o.attachEvent($(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function o(d){return u.call(o.src,o.listener,d)}const u=X;return o}function H(o,u,d,p,R){if(Array.isArray(u))for(var V=0;V<u.length;V++)H(o,u[V],d,p,R);else p=h(p)?!!p.capture:!!p,d=ne(d),o&&o[Yt]?(o=o.i,u=String(u).toString(),u in o.g&&(V=o.g[u],d=E(V,d,p,R),-1<d&&(Lt(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete o.g[u],o.h--)))):o&&(o=K(o))&&(u=o.g[u.toString()],o=-1,u&&(o=E(u,d,p,R)),(d=-1<o?u[o]:null)&&q(d))}function q(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Yt])y(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent($(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=K(u))?(y(d,o),d.h==0&&(d.src=null,u[N]=null)):Lt(o)}}}function $(o){return o in B?B[o]:B[o]="on"+o}function X(o,u){if(o.da)o=!0;else{u=new Xn(u,this);var d=o.listener,p=o.ha||o.src;o.fa&&q(o),o=d.call(p,u)}return o}function K(o){return o=o[N],o instanceof as?o:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function ne(o){return typeof o=="function"?o:(o[Y]||(o[Y]=function(u){return o.handleEvent(u)}),o[Y])}function ee(){Le.call(this),this.i=new as(this),this.M=this,this.F=null}P(ee,Le),ee.prototype[Yt]=!0,ee.prototype.removeEventListener=function(o,u,d,p){H(this,o,u,d,p)};function ae(o,u){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Fe(u,o);else if(u instanceof Fe)u.target=u.target||o;else{var R=u;u=new Fe(p,o),I(u,R)}if(R=!0,d)for(var V=d.length-1;0<=V;V--){var z=u.g=d[V];R=fe(z,p,!0,u)&&R}if(z=u.g=o,R=fe(z,p,!0,u)&&R,R=fe(z,p,!1,u)&&R,d)for(V=0;V<d.length;V++)z=u.g=d[V],R=fe(z,p,!1,u)&&R}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],p=0;p<d.length;p++)Lt(d[p]);delete o.g[u],o.h--}}this.F=null},ee.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},ee.prototype.L=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function fe(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,V=0;V<u.length;++V){var z=u[V];if(z&&!z.da&&z.capture==d){var we=z.listener,ze=z.ha||z.src;z.fa&&y(o.i,z),R=we.call(ze,p)!==!1&&R}}return R&&!p.defaultPrevented}function Je(o,u,d){if(typeof o=="function")d&&(o=m(o,d));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function qe(o){o.g=Je(()=>{o.g=null,o.i&&(o.i=!1,qe(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class bt extends Le{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:qe(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ye(o){Le.call(this),this.h=o,this.g={}}P(Ye,Le);var _n=[];function ls(o){_e(o.g,function(u,d){this.g.hasOwnProperty(d)&&q(u)},o),o.g={}}Ye.prototype.N=function(){Ye.aa.N.call(this),ls(this)},Ye.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var He=l.JSON.stringify,Rt=l.JSON.parse,yi=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function _a(){}_a.prototype.h=null;function Wc(o){return o.h||(o.h=o.i())}function Kc(){}var cs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ya(){Fe.call(this,"d")}P(ya,Fe);function va(){Fe.call(this,"c")}P(va,Fe);var er={},Gc=null;function vi(){return Gc=Gc||new ee}er.La="serverreachability";function Qc(o){Fe.call(this,er.La,o)}P(Qc,Fe);function us(o){const u=vi();ae(u,new Qc(u))}er.STAT_EVENT="statevent";function Jc(o,u){Fe.call(this,er.STAT_EVENT,o),this.stat=u}P(Jc,Fe);function lt(o){const u=vi();ae(u,new Jc(u,o))}er.Ma="timingevent";function Yc(o,u){Fe.call(this,er.Ma,o),this.size=u}P(Yc,Fe);function hs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function ds(){this.g=!0}ds.prototype.xa=function(){this.g=!1};function ym(o,u,d,p,R,V){o.info(function(){if(o.g)if(V)for(var z="",we=V.split("&"),ze=0;ze<we.length;ze++){var me=we[ze].split("=");if(1<me.length){var Xe=me[0];me=me[1];var Ze=Xe.split("_");z=2<=Ze.length&&Ze[1]=="type"?z+(Xe+"="+me+"&"):z+(Xe+"=redacted&")}}else z=null;else z=V;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+u+`
`+d+`
`+z})}function vm(o,u,d,p,R,V,z){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+u+`
`+d+`
`+V+" "+z})}function Ir(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Em(o,d)+(p?" "+p:"")})}function Tm(o,u){o.info(function(){return"TIMEOUT: "+u})}ds.prototype.info=function(){};function Em(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var V=R[0];if(V!="noop"&&V!="stop"&&V!="close")for(var z=1;z<R.length;z++)R[z]=""}}}}return He(d)}catch{return u}}var Ti={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ta;function Ei(){}P(Ei,_a),Ei.prototype.g=function(){return new XMLHttpRequest},Ei.prototype.i=function(){return{}},Ta=new Ei;function yn(o,u,d,p){this.j=o,this.i=u,this.l=d,this.R=p||1,this.U=new Ye(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zc}function Zc(){this.i=null,this.g="",this.h=!1}var eu={},Ea={};function Ia(o,u,d){o.L=1,o.v=bi(Xt(u)),o.m=d,o.P=!0,tu(o,null)}function tu(o,u){o.F=Date.now(),Ii(o),o.A=Xt(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),gu(d.i,"t",p),o.C=0,d=o.j.J,o.h=new Zc,o.g=Nu(o.j,d?u:null,!o.m),0<o.O&&(o.M=new bt(m(o.Y,o,o.g),o.O)),u=o.U,d=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(_n[0]=R.toString()),R=_n);for(var V=0;V<R.length;V++){var z=L(d,R[V],p||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),us(),ym(o.i,o.u,o.A,o.l,o.R,o.m)}yn.prototype.ca=function(o){o=o.target;const u=this.M;u&&Zt(o)==3?u.j():this.Y(o)},yn.prototype.Y=function(o){try{if(o==this.g)e:{const Ze=Zt(this.g);var u=this.g.Ba();const br=this.g.Z();if(!(3>Ze)&&(Ze!=3||this.g&&(this.h.h||this.g.oa()||Iu(this.g)))){this.J||Ze!=4||u==7||(u==8||0>=br?us(3):us(2)),wa(this);var d=this.g.Z();this.X=d;t:if(nu(this)){var p=Iu(this.g);o="";var R=p.length,V=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tr(this),fs(this);var z="";break t}this.h.i=new l.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(V&&u==R-1)});p.length=0,this.h.g+=o,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,vm(this.i,this.u,this.A,this.l,this.R,Ze,d),this.o){if(this.T&&!this.K){t:{if(this.g){var we,ze=this.g;if((we=ze.g?ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(we)){var me=we;break t}}me=null}if(d=me)Ir(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Aa(this,d);else{this.o=!1,this.s=3,lt(12),tr(this),fs(this);break e}}if(this.P){d=!0;let kt;for(;!this.J&&this.C<z.length;)if(kt=Im(this,z),kt==Ea){Ze==4&&(this.s=4,lt(14),d=!1),Ir(this.i,this.l,null,"[Incomplete Response]");break}else if(kt==eu){this.s=4,lt(15),Ir(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else Ir(this.i,this.l,kt,null),Aa(this,kt);if(nu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ze!=4||z.length!=0||this.h.h||(this.s=1,lt(16),d=!1),this.o=this.o&&d,!d)Ir(this.i,this.l,z,"[Invalid Chunked Response]"),tr(this),fs(this);else if(0<z.length&&!this.W){this.W=!0;var Xe=this.j;Xe.g==this&&Xe.ba&&!Xe.M&&(Xe.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),ka(Xe),Xe.M=!0,lt(11))}}else Ir(this.i,this.l,z,null),Aa(this,z);Ze==4&&tr(this),this.o&&!this.J&&(Ze==4?Pu(this.j,this):(this.o=!1,Ii(this)))}else Um(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),tr(this),fs(this)}}}catch{}finally{}};function nu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Im(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?Ea:(d=Number(u.substring(d,p)),isNaN(d)?eu:(p+=1,p+d>u.length?Ea:(u=u.slice(p,p+d),o.C=p+d,u)))}yn.prototype.cancel=function(){this.J=!0,tr(this)};function Ii(o){o.S=Date.now()+o.I,ru(o,o.I)}function ru(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=hs(m(o.ba,o),u)}function wa(o){o.B&&(l.clearTimeout(o.B),o.B=null)}yn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Tm(this.i,this.A),this.L!=2&&(us(),lt(17)),tr(this),this.s=2,fs(this)):ru(this,this.S-o)};function fs(o){o.j.G==0||o.J||Pu(o.j,o)}function tr(o){wa(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ls(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Aa(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||ba(d.h,o))){if(!o.K&&ba(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Di(d),Pi(d);else break e;Pa(d),lt(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=hs(m(d.Za,d),6e3));if(1>=ou(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else rr(d,11)}else if((o.K||d.g==o)&&Di(d),!F(u))for(R=d.Da.g.parse(u),u=0;u<R.length;u++){let me=R[u];if(d.T=me[0],me=me[1],d.G==2)if(me[0]=="c"){d.K=me[1],d.ia=me[2];const Xe=me[3];Xe!=null&&(d.la=Xe,d.j.info("VER="+d.la));const Ze=me[4];Ze!=null&&(d.Aa=Ze,d.j.info("SVER="+d.Aa));const br=me[5];br!=null&&typeof br=="number"&&0<br&&(p=1.5*br,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const kt=o.g;if(kt){const Ni=kt.g?kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ni){var V=p.h;V.g||Ni.indexOf("spdy")==-1&&Ni.indexOf("quic")==-1&&Ni.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Ra(V,V.h),V.h=null))}if(p.D){const Da=kt.g?kt.g.getResponseHeader("X-HTTP-Session-Id"):null;Da&&(p.ya=Da,Se(p.I,p.D,Da))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var z=o;if(p.qa=Vu(p,p.J?p.ia:null,p.W),z.K){au(p.h,z);var we=z,ze=p.L;ze&&(we.I=ze),we.B&&(wa(we),Ii(we)),p.g=z}else Su(p);0<d.i.length&&ki(d)}else me[0]!="stop"&&me[0]!="close"||rr(d,7);else d.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?rr(d,7):Ca(d):me[0]!="noop"&&d.l&&d.l.ta(me),d.v=0)}}us(4)}catch{}}var wm=class{constructor(o,u){this.g=o,this.map=u}};function su(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function iu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ou(o){return o.h?1:o.g?o.g.size:0}function ba(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ra(o,u){o.g?o.g.add(u):o.h=u}function au(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}su.prototype.cancel=function(){if(this.i=lu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function lu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return D(o.i)}function Am(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,p=0;p<d;p++)u.push(o[p]);return u}u=[],d=0;for(p in o)u[d++]=o[p];return u}function bm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const p in o)u[d++]=p;return u}}}function cu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=bm(o),p=Am(o),R=p.length,V=0;V<R;V++)u.call(void 0,p[V],d&&d[V],o)}var uu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rm(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),R=null;if(0<=p){var V=o[d].substring(0,p);R=o[d].substring(p+1)}else V=o[d];u(V,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function nr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof nr){this.h=o.h,wi(this,o.j),this.o=o.o,this.g=o.g,Ai(this,o.s),this.l=o.l;var u=o.i,d=new ms;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),hu(this,d),this.m=o.m}else o&&(u=String(o).match(uu))?(this.h=!1,wi(this,u[1]||"",!0),this.o=ps(u[2]||""),this.g=ps(u[3]||"",!0),Ai(this,u[4]),this.l=ps(u[5]||"",!0),hu(this,u[6]||"",!0),this.m=ps(u[7]||"")):(this.h=!1,this.i=new ms(null,this.h))}nr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(gs(u,du,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(gs(u,du,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(gs(d,d.charAt(0)=="/"?Pm:Cm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",gs(d,Dm)),o.join("")};function Xt(o){return new nr(o)}function wi(o,u,d){o.j=d?ps(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ai(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function hu(o,u,d){u instanceof ms?(o.i=u,Vm(o.i,o.h)):(d||(u=gs(u,km)),o.i=new ms(u,o.h))}function Se(o,u,d){o.i.set(u,d)}function bi(o){return Se(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ps(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function gs(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Sm),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Sm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var du=/[#\/\?@]/g,Cm=/[#\?:]/g,Pm=/[#\?]/g,km=/[#\?@]/g,Dm=/#/g;function ms(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function vn(o){o.g||(o.g=new Map,o.h=0,o.i&&Rm(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=ms.prototype,n.add=function(o,u){vn(this),this.i=null,o=wr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function fu(o,u){vn(o),u=wr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function pu(o,u){return vn(o),u=wr(o,u),o.g.has(u)}n.forEach=function(o,u){vn(this),this.g.forEach(function(d,p){d.forEach(function(R){o.call(u,R,p,this)},this)},this)},n.na=function(){vn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const R=o[p];for(let V=0;V<R.length;V++)d.push(u[p])}return d},n.V=function(o){vn(this);let u=[];if(typeof o=="string")pu(this,o)&&(u=u.concat(this.g.get(wr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return vn(this),this.i=null,o=wr(this,o),pu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function gu(o,u,d){fu(o,u),0<d.length&&(o.i=null,o.g.set(wr(o,u),D(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const V=encodeURIComponent(String(p)),z=this.V(p);for(p=0;p<z.length;p++){var R=V;z[p]!==""&&(R+="="+encodeURIComponent(String(z[p]))),o.push(R)}}return this.i=o.join("&")};function wr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Vm(o,u){u&&!o.j&&(vn(o),o.i=null,o.g.forEach(function(d,p){var R=p.toLowerCase();p!=R&&(fu(this,p),gu(this,R,d))},o)),o.j=u}function Nm(o,u){const d=new ds;if(l.Image){const p=new Image;p.onload=w(Tn,d,"TestLoadImage: loaded",!0,u,p),p.onerror=w(Tn,d,"TestLoadImage: error",!1,u,p),p.onabort=w(Tn,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=w(Tn,d,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Om(o,u){const d=new ds,p=new AbortController,R=setTimeout(()=>{p.abort(),Tn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(V=>{clearTimeout(R),V.ok?Tn(d,"TestPingServer: ok",!0,u):Tn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Tn(d,"TestPingServer: error",!1,u)})}function Tn(o,u,d,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(d)}catch{}}function xm(){this.g=new yi}function Mm(o,u,d){const p=d||"";try{cu(o,function(R,V){let z=R;h(R)&&(z=He(R)),u.push(p+V+"="+encodeURIComponent(z))})}catch(R){throw u.push(p+"type="+encodeURIComponent("_badmap")),R}}function Ri(o){this.l=o.Ub||null,this.j=o.eb||!1}P(Ri,_a),Ri.prototype.g=function(){return new Si(this.l,this.j)},Ri.prototype.i=function(o){return function(){return o}}({});function Si(o,u){ee.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Si,ee),n=Si.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,ys(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_s(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ys(this)),this.g&&(this.readyState=3,ys(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;mu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function mu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?_s(this):ys(this),this.readyState==3&&mu(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,_s(this))},n.Qa=function(o){this.g&&(this.response=o,_s(this))},n.ga=function(){this.g&&_s(this)};function _s(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ys(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function ys(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function _u(o){let u="";return _e(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function Sa(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=_u(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Se(o,u,d))}function Ve(o){ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ve,ee);var Lm=/^https?$/i,Fm=["POST","PUT"];n=Ve.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ta.g(),this.v=this.o?Wc(this.o):Wc(Ta),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(V){yu(this,V);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)d.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const V of p.keys())d.set(V,p.get(V));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Fm,u,void 0))||p||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,z]of d)this.g.setRequestHeader(V,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Eu(this),this.u=!0,this.g.send(o),this.u=!1}catch(V){yu(this,V)}};function yu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,vu(o),Ci(o)}function vu(o){o.A||(o.A=!0,ae(o,"complete"),ae(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ae(this,"complete"),ae(this,"abort"),Ci(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ci(this,!0)),Ve.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Tu(this):this.bb())},n.bb=function(){Tu(this)};function Tu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Zt(o)!=4||o.Z()!=2)){if(o.u&&Zt(o)==4)Je(o.Ea,0,o);else if(ae(o,"readystatechange"),Zt(o)==4){o.h=!1;try{const z=o.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=z===0){var R=String(o.D).match(uu)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!Lm.test(R?R.toLowerCase():"")}d=p}if(d)ae(o,"complete"),ae(o,"success");else{o.m=6;try{var V=2<Zt(o)?o.g.statusText:""}catch{V=""}o.l=V+" ["+o.Z()+"]",vu(o)}}finally{Ci(o)}}}}function Ci(o,u){if(o.g){Eu(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ae(o,"ready");try{d.onreadystatechange=p}catch{}}}function Eu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Zt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Rt(u)}};function Iu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Um(o){const u={};o=(o.g&&2<=Zt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(F(o[p]))continue;var d=b(o[p]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=u[R]||[];u[R]=V,V.push(d)}A(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vs(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function wu(o){this.Aa=0,this.i=[],this.j=new ds,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vs("baseRetryDelayMs",5e3,o),this.cb=vs("retryDelaySeedMs",1e4,o),this.Wa=vs("forwardChannelMaxRetries",2,o),this.wa=vs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new su(o&&o.concurrentRequestLimit),this.Da=new xm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=wu.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,p){lt(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Vu(this,null,this.W),ki(this)};function Ca(o){if(Au(o),o.G==3){var u=o.U++,d=Xt(o.I);if(Se(d,"SID",o.K),Se(d,"RID",u),Se(d,"TYPE","terminate"),Ts(o,d),u=new yn(o,o.j,u),u.L=2,u.v=bi(Xt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=Nu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ii(u)}Du(o)}function Pi(o){o.g&&(ka(o),o.g.cancel(),o.g=null)}function Au(o){Pi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Di(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function ki(o){if(!iu(o.h)&&!o.s){o.s=!0;var u=o.Ga;Ee||Yn(),ge||(Ee(),ge=!0),Pt.add(u,o),o.B=0}}function Bm(o,u){return ou(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=hs(m(o.Ga,o,u),ku(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new yn(this,this.j,o);let V=this.o;if(this.S&&(V?(V=_(V),I(V,this.S)):V=this.S),this.m!==null||this.O||(R.H=V,V=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Ru(this,R,u),d=Xt(this.I),Se(d,"RID",o),Se(d,"CVER",22),this.D&&Se(d,"X-HTTP-Session-Id",this.D),Ts(this,d),V&&(this.O?u="headers="+encodeURIComponent(String(_u(V)))+"&"+u:this.m&&Sa(d,this.m,V)),Ra(this.h,R),this.Ua&&Se(d,"TYPE","init"),this.P?(Se(d,"$req",u),Se(d,"SID","null"),R.T=!0,Ia(R,d,null)):Ia(R,d,u),this.G=2}}else this.G==3&&(o?bu(this,o):this.i.length==0||iu(this.h)||bu(this))};function bu(o,u){var d;u?d=u.l:d=o.U++;const p=Xt(o.I);Se(p,"SID",o.K),Se(p,"RID",d),Se(p,"AID",o.T),Ts(o,p),o.m&&o.o&&Sa(p,o.m,o.o),d=new yn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Ru(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ra(o.h,d),Ia(d,p,u)}function Ts(o,u){o.H&&_e(o.H,function(d,p){Se(u,p,d)}),o.l&&cu({},function(d,p){Se(u,p,d)})}function Ru(o,u,d){d=Math.min(o.i.length,d);var p=o.l?m(o.l.Na,o.l,o):null;e:{var R=o.i;let V=-1;for(;;){const z=["count="+d];V==-1?0<d?(V=R[0].g,z.push("ofs="+V)):V=0:z.push("ofs="+V);let we=!0;for(let ze=0;ze<d;ze++){let me=R[ze].g;const Xe=R[ze].map;if(me-=V,0>me)V=Math.max(0,R[ze].g-100),we=!1;else try{Mm(Xe,z,"req"+me+"_")}catch{p&&p(Xe)}}if(we){p=z.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,p}function Su(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Ee||Yn(),ge||(Ee(),ge=!0),Pt.add(u,o),o.v=0}}function Pa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=hs(m(o.Fa,o),ku(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Cu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=hs(m(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),Pi(this),Cu(this))};function ka(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Cu(o){o.g=new yn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Xt(o.qa);Se(u,"RID","rpc"),Se(u,"SID",o.K),Se(u,"AID",o.T),Se(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Se(u,"TO",o.ja),Se(u,"TYPE","xmlhttp"),Ts(o,u),o.m&&o.o&&Sa(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=bi(Xt(u)),d.m=null,d.P=!0,tu(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Pi(this),Pa(this),lt(19))};function Di(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Pu(o,u){var d=null;if(o.g==u){Di(o),ka(o),o.g=null;var p=2}else if(ba(o.h,u))d=u.D,au(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;p=vi(),ae(p,new Yc(p,d)),ki(o)}else Su(o);else if(R=u.s,R==3||R==0&&0<u.X||!(p==1&&Bm(o,u)||p==2&&Pa(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),R){case 1:rr(o,5);break;case 4:rr(o,10);break;case 3:rr(o,6);break;default:rr(o,2)}}}function ku(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function rr(o,u){if(o.j.info("Error code "+u),u==2){var d=m(o.fb,o),p=o.Xa;const R=!p;p=new nr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||wi(p,"https"),bi(p),R?Nm(p.toString(),d):Om(p.toString(),d)}else lt(2);o.G=0,o.l&&o.l.sa(u),Du(o),Au(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function Du(o){if(o.G=0,o.ka=[],o.l){const u=lu(o.h);(u.length!=0||o.i.length!=0)&&(k(o.ka,u),k(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Vu(o,u,d){var p=d instanceof nr?Xt(d):new nr(d);if(p.g!="")u&&(p.g=u+"."+p.g),Ai(p,p.s);else{var R=l.location;p=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var V=new nr(null);p&&wi(V,p),u&&(V.g=u),R&&Ai(V,R),d&&(V.l=d),p=V}return d=o.D,u=o.ya,d&&u&&Se(p,d,u),Se(p,"VER",o.la),Ts(o,p),p}function Nu(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ve(new Ri({eb:d})):new Ve(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ou(){}n=Ou.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Vi(){}Vi.prototype.g=function(o,u){return new vt(o,u)};function vt(o,u){ee.call(this),this.g=new wu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!F(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Ar(this)}P(vt,ee),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Ca(this.g)},vt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=He(o),o=d);u.i.push(new wm(u.Ya++,o)),u.G==3&&ki(u)},vt.prototype.N=function(){this.g.l=null,delete this.j,Ca(this.g),delete this.g,vt.aa.N.call(this)};function xu(o){ya.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}P(xu,ya);function Mu(){va.call(this),this.status=1}P(Mu,va);function Ar(o){this.g=o}P(Ar,Ou),Ar.prototype.ua=function(){ae(this.g,"a")},Ar.prototype.ta=function(o){ae(this.g,new xu(o))},Ar.prototype.sa=function(o){ae(this.g,new Mu)},Ar.prototype.ra=function(){ae(this.g,"b")},Vi.prototype.createWebChannel=Vi.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,fp=function(){return new Vi},dp=function(){return vi()},hp=er,ml={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ti.NO_ERROR=0,Ti.TIMEOUT=8,Ti.HTTP_ERROR=6,Gi=Ti,Xc.COMPLETE="complete",up=Xc,Kc.EventType=cs,cs.OPEN="a",cs.CLOSE="b",cs.ERROR="c",cs.MESSAGE="d",ee.prototype.listen=ee.prototype.K,As=Kc,Ve.prototype.listenOnce=Ve.prototype.L,Ve.prototype.getLastError=Ve.prototype.Ka,Ve.prototype.getLastErrorCode=Ve.prototype.Ba,Ve.prototype.getStatus=Ve.prototype.Z,Ve.prototype.getResponseJson=Ve.prototype.Oa,Ve.prototype.getResponseText=Ve.prototype.oa,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Ha,cp=Ve}).apply(typeof Li<"u"?Li:typeof self<"u"?self:typeof window<"u"?window:{});const bh="@firebase/firestore",Rh="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new ec("@firebase/firestore");function Cr(){return gr.logLevel}function Q(n,...e){if(gr.logLevel<=he.DEBUG){const t=e.map(rc);gr.debug(`Firestore (${es}): ${n}`,...t)}}function un(n,...e){if(gr.logLevel<=he.ERROR){const t=e.map(rc);gr.error(`Firestore (${es}): ${n}`,...t)}}function Wr(n,...e){if(gr.logLevel<=he.WARN){const t=e.map(rc);gr.warn(`Firestore (${es}): ${n}`,...t)}}function rc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,pp(n,r,t)}function pp(n,e,t){let r=`FIRESTORE (${es}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw un(r),new Error(r)}function Te(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||pp(e,s,r)}function oe(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends gn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(tt.UNAUTHENTICATED))}shutdown(){}}class JE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class YE{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Te(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new Mn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Mn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Mn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string",31837,{l:r}),new gp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string",2055,{h:e}),new tt(e)}}class XE{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ZE{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new XE(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Te(this.o===void 0,3512);const r=i=>{i.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,Q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Sh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Te(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Sh(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=tI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function _l(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ue(r,s);{const i=mp(),a=nI(i.encode(Ch(n,t)),i.encode(Ch(e,t)));return a!==0?a:ue(r,s)}}t+=r>65535?2:1}return ue(n.length,e.length)}function Ch(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function nI(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ue(n[t],e[t]);return ue(n.length,e.length)}function Kr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=-62135596800,kh=1e6;class Ue{static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*kh);return new Ue(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new J(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new J(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ph)throw new J(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/kh}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Ph;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{static fromTimestamp(e){return new ie(e)}static min(){return new ie(new Ue(0,0))}static max(){return new ie(new Ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="__name__";class Bt{constructor(e,t,r){t===void 0?t=0:t>e.length&&te(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&te(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Bt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Bt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Bt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ue(e.length,t.length)}static compareSegments(e,t){const r=Bt.isNumericId(e),s=Bt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Bt.extractNumericId(e).compare(Bt.extractNumericId(t)):_l(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xn.fromString(e.substring(4,e.length-2))}}class Ce extends Bt{construct(e,t,r){return new Ce(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Ce(t)}static emptyPath(){return new Ce([])}}const rI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends Bt{construct(e,t,r){return new Ge(e,t,r)}static isValidIdentifier(e){return rI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Dh}static keyField(){return new Ge([Dh])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new J(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new J(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new J(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(t)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Ce.fromString(e))}static fromName(e){return new Z(Ce.fromString(e).popFirst(5))}static empty(){return new Z(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Ce(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=-1;function sI(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ie.fromTimestamp(r===1e9?new Ue(t+1,0):new Ue(t,r));return new jn(s,Z.empty(),e)}function iI(n){return new jn(n.readTime,n.key,Ws)}class jn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new jn(ie.min(),Z.empty(),Ws)}static max(){return new jn(ie.max(),Z.empty(),Ws)}}function oI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Z.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==aI)throw n;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):x.reject(t)}static resolve(e){return new x((t,r)=>{t(e)})}static reject(e){return new x((t,r)=>{r(e)})}static waitFor(e){return new x((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=x.resolve(!1);for(const r of e)t=t.next(s=>s?x.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new x((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new x((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function cI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ns(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Go.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=-1;function Qo(n){return n==null}function yo(n){return n===0&&1/n==-1/0}function uI(n){return typeof n=="number"&&Number.isInteger(n)&&!yo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="";function hI(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Vh(e)),e=dI(n.get(t),e);return Vh(e)}function dI(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case yp:t+="";break;default:t+=i}}return t}function Vh(n){return n+yp+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Qn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function vp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t){this.comparator=e,this.root=t||We.EMPTY}insert(e,t){return new De(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fi(this.root,e,this.comparator,!0)}}class Fi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??We.RED,this.left=s??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new We(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw te(27949);return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw te(57766)}get value(){throw te(16141)}get color(){throw te(16727)}get left(){throw te(29726)}get right(){throw te(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new We(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Oh(this.data.getIterator())}getIteratorFrom(e){return new Oh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Be(this.comparator);return t.data=e,t}}class Oh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new wt([])}unionWith(e){let t=new Be(Ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new wt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Kr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Tp("Invalid base64 string: "+i):i}}(e);return new Qe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Qe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const fI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qn(n){if(Te(!!n,39018),typeof n=="string"){let e=0;const t=fI.exec(n);if(Te(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(n.seconds),nanos:Ne(n.nanos)}}function Ne(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Hn(n){return typeof n=="string"?Qe.fromBase64String(n):Qe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="server_timestamp",Ip="__type__",wp="__previous_value__",Ap="__local_write_time__";function ic(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ip])===null||t===void 0?void 0:t.stringValue)===Ep}function Jo(n){const e=n.mapValue.fields[wp];return ic(e)?Jo(e):e}function Ks(n){const e=qn(n.mapValue.fields[Ap].timestampValue);return new Ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,t,r,s,i,a,l,c,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const vo="(default)";class Gs{constructor(e,t){this.projectId=e,this.database=t||vo}static empty(){return new Gs("","")}get isDefaultDatabase(){return this.database===vo}isEqual(e){return e instanceof Gs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp="__type__",gI="__max__",Ui={mapValue:{}},Rp="__vector__",To="value";function zn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ic(n)?4:_I(n)?9007199254740991:mI(n)?10:11:te(28295,{value:n})}function Qt(n,e){if(n===e)return!0;const t=zn(n);if(t!==zn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ks(n).isEqual(Ks(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=qn(s.timestampValue),l=qn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Hn(s.bytesValue).isEqual(Hn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ne(s.geoPointValue.latitude)===Ne(i.geoPointValue.latitude)&&Ne(s.geoPointValue.longitude)===Ne(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ne(s.integerValue)===Ne(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ne(s.doubleValue),l=Ne(i.doubleValue);return a===l?yo(a)===yo(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Kr(n.arrayValue.values||[],e.arrayValue.values||[],Qt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Nh(a)!==Nh(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Qt(a[c],l[c])))return!1;return!0}(n,e);default:return te(52216,{left:n})}}function Qs(n,e){return(n.values||[]).find(t=>Qt(t,e))!==void 0}function Gr(n,e){if(n===e)return 0;const t=zn(n),r=zn(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Ne(i.integerValue||i.doubleValue),c=Ne(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return xh(n.timestampValue,e.timestampValue);case 4:return xh(Ks(n),Ks(e));case 5:return _l(n.stringValue,e.stringValue);case 6:return function(i,a){const l=Hn(i),c=Hn(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=ue(l[h],c[h]);if(f!==0)return f}return ue(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ue(Ne(i.latitude),Ne(a.latitude));return l!==0?l:ue(Ne(i.longitude),Ne(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Mh(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,f;const g=i.fields||{},m=a.fields||{},w=(l=g[To])===null||l===void 0?void 0:l.arrayValue,P=(c=m[To])===null||c===void 0?void 0:c.arrayValue,D=ue(((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:Mh(w,P)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ui.mapValue&&a===Ui.mapValue)return 0;if(i===Ui.mapValue)return 1;if(a===Ui.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let g=0;g<c.length&&g<f.length;++g){const m=_l(c[g],f[g]);if(m!==0)return m;const w=Gr(l[c[g]],h[f[g]]);if(w!==0)return w}return ue(c.length,f.length)}(n.mapValue,e.mapValue);default:throw te(23264,{Pe:t})}}function xh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=qn(n),r=qn(e),s=ue(t.seconds,r.seconds);return s!==0?s:ue(t.nanos,r.nanos)}function Mh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Gr(t[s],r[s]);if(i)return i}return ue(t.length,r.length)}function Qr(n){return yl(n)}function yl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=qn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Hn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=yl(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${yl(t.fields[a])}`;return s+"}"}(n.mapValue):te(61005,{value:n})}function Qi(n){switch(zn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Jo(n);return e?16+Qi(e):16;case 5:return 2*n.stringValue.length;case 6:return Hn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Qi(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Qn(r.fields,(i,a)=>{s+=i.length+Qi(a)}),s}(n.mapValue);default:throw te(13486,{value:n})}}function Lh(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function vl(n){return!!n&&"integerValue"in n}function oc(n){return!!n&&"arrayValue"in n}function Fh(n){return!!n&&"nullValue"in n}function Uh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ji(n){return!!n&&"mapValue"in n}function mI(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[bp])===null||t===void 0?void 0:t.stringValue)===Rp}function Os(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Qn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Os(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Os(n.arrayValue.values[t]);return e}return Object.assign({},n)}function _I(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===gI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ji(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Os(t)}setAll(e){let t=Ge.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Os(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ji(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Qt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ji(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Qn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new mt(Os(this.value))}}function Sp(n){const e=[];return Qn(n.fields,(t,r)=>{const s=new Ge([t]);if(Ji(r)){const i=Sp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new st(e,0,ie.min(),ie.min(),ie.min(),mt.empty(),0)}static newFoundDocument(e,t,r,s){return new st(e,1,t,ie.min(),r,s,0)}static newNoDocument(e,t){return new st(e,2,t,ie.min(),ie.min(),mt.empty(),0)}static newUnknownDocument(e,t){return new st(e,3,t,ie.min(),ie.min(),mt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t){this.position=e,this.inclusive=t}}function Bh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(a.referenceValue),t.key):r=Gr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $h(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Qt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t="asc"){this.field=e,this.dir=t}}function yI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{}class xe extends Cp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new TI(e,t,r):t==="array-contains"?new wI(e,r):t==="in"?new AI(e,r):t==="not-in"?new bI(e,r):t==="array-contains-any"?new RI(e,r):new xe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new EI(e,r):new II(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Gr(t,this.value)):t!==null&&zn(this.value)===zn(t)&&this.matchesComparison(Gr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mt extends Cp{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Mt(e,t)}matches(e){return Pp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Pp(n){return n.op==="and"}function kp(n){return vI(n)&&Pp(n)}function vI(n){for(const e of n.filters)if(e instanceof Mt)return!1;return!0}function Tl(n){if(n instanceof xe)return n.field.canonicalString()+n.op.toString()+Qr(n.value);if(kp(n))return n.filters.map(e=>Tl(e)).join(",");{const e=n.filters.map(t=>Tl(t)).join(",");return`${n.op}(${e})`}}function Dp(n,e){return n instanceof xe?function(r,s){return s instanceof xe&&r.op===s.op&&r.field.isEqual(s.field)&&Qt(r.value,s.value)}(n,e):n instanceof Mt?function(r,s){return s instanceof Mt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Dp(a,s.filters[l]),!0):!1}(n,e):void te(19439)}function Vp(n){return n instanceof xe?function(t){return`${t.field.canonicalString()} ${t.op} ${Qr(t.value)}`}(n):n instanceof Mt?function(t){return t.op.toString()+" {"+t.getFilters().map(Vp).join(" ,")+"}"}(n):"Filter"}class TI extends xe{constructor(e,t,r){super(e,t,r),this.key=Z.fromName(r.referenceValue)}matches(e){const t=Z.comparator(e.key,this.key);return this.matchesComparison(t)}}class EI extends xe{constructor(e,t){super(e,"in",t),this.keys=Np("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class II extends xe{constructor(e,t){super(e,"not-in",t),this.keys=Np("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Np(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Z.fromName(r.referenceValue))}class wI extends xe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return oc(t)&&Qs(t.arrayValue,this.value)}}class AI extends xe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qs(this.value.arrayValue,t)}}class bI extends xe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Qs(this.value.arrayValue,t)}}class RI extends xe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!oc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Qs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Ie=null}}function jh(n,e=null,t=[],r=[],s=null,i=null,a=null){return new SI(n,e,t,r,s,i,a)}function ac(n){const e=oe(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Tl(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Qo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Qr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Qr(r)).join(",")),e.Ie=t}return e.Ie}function lc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!yI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Dp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$h(n.startAt,e.startAt)&&$h(n.endAt,e.endAt)}function El(n){return Z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function CI(n,e,t,r,s,i,a,l){return new oi(n,e,t,r,s,i,a,l)}function Op(n){return new oi(n)}function qh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xp(n){return n.collectionGroup!==null}function xs(n){const e=oe(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Be(Ge.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Io(i,r))}),t.has(Ge.keyField().canonicalString())||e.Ee.push(new Io(Ge.keyField(),r))}return e.Ee}function qt(n){const e=oe(n);return e.de||(e.de=PI(e,xs(n))),e.de}function PI(n,e){if(n.limitType==="F")return jh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Io(s.field,i)});const t=n.endAt?new Eo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Eo(n.startAt.position,n.startAt.inclusive):null;return jh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Il(n,e){const t=n.filters.concat([e]);return new oi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function wl(n,e,t){return new oi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Yo(n,e){return lc(qt(n),qt(e))&&n.limitType===e.limitType}function Mp(n){return`${ac(qt(n))}|lt:${n.limitType}`}function Pr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Vp(s)).join(", ")}]`),Qo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Qr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Qr(s)).join(",")),`Target(${r})`}(qt(n))}; limitType=${n.limitType})`}function Xo(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of xs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=Bh(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,xs(r),s)||r.endAt&&!function(a,l,c){const h=Bh(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,xs(r),s))}(n,e)}function kI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Lp(n){return(e,t)=>{let r=!1;for(const s of xs(n)){const i=DI(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function DI(n,e,t){const r=n.field.isKeyField()?Z.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Gr(c,h):te(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return te(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Qn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return vp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=new De(Z.comparator);function hn(){return VI}const Fp=new De(Z.comparator);function bs(...n){let e=Fp;for(const t of n)e=e.insert(t.key,t);return e}function Up(n){let e=Fp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ur(){return Ms()}function Bp(){return Ms()}function Ms(){return new Tr(n=>n.toString(),(n,e)=>n.isEqual(e))}const NI=new De(Z.comparator),OI=new Be(Z.comparator);function de(...n){let e=OI;for(const t of n)e=e.add(t);return e}const xI=new Be(ue);function MI(){return xI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yo(e)?"-0":e}}function $p(n){return{integerValue:""+n}}function LI(n,e){return uI(e)?$p(e):cc(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(){this._=void 0}}function FI(n,e,t){return n instanceof Js?function(s,i){const a={fields:{[Ip]:{stringValue:Ep},[Ap]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ic(i)&&(i=Jo(i)),i&&(a.fields[wp]=i),{mapValue:a}}(t,e):n instanceof Ys?qp(n,e):n instanceof Xs?Hp(n,e):function(s,i){const a=jp(s,i),l=Hh(a)+Hh(s.Re);return vl(a)&&vl(s.Re)?$p(l):cc(s.serializer,l)}(n,e)}function UI(n,e,t){return n instanceof Ys?qp(n,e):n instanceof Xs?Hp(n,e):t}function jp(n,e){return n instanceof wo?function(r){return vl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Js extends Zo{}class Ys extends Zo{constructor(e){super(),this.elements=e}}function qp(n,e){const t=zp(e);for(const r of n.elements)t.some(s=>Qt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Xs extends Zo{constructor(e){super(),this.elements=e}}function Hp(n,e){let t=zp(e);for(const r of n.elements)t=t.filter(s=>!Qt(s,r));return{arrayValue:{values:t}}}class wo extends Zo{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Hh(n){return Ne(n.integerValue||n.doubleValue)}function zp(n){return oc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,t){this.field=e,this.transform=t}}function $I(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Ys&&s instanceof Ys||r instanceof Xs&&s instanceof Xs?Kr(r.elements,s.elements,Qt):r instanceof wo&&s instanceof wo?Qt(r.Re,s.Re):r instanceof Js&&s instanceof Js}(n.transform,e.transform)}class jI{constructor(e,t){this.version=e,this.transformResults=t}}class xt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xt}static exists(e){return new xt(void 0,e)}static updateTime(e){return new xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ea{}function Wp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new uc(n.key,xt.none()):new ai(n.key,n.data,xt.none());{const t=n.data,r=mt.empty();let s=new Be(Ge.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Jn(n.key,r,new wt(s.toArray()),xt.none())}}function qI(n,e,t){n instanceof ai?function(s,i,a){const l=s.value.clone(),c=Wh(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Jn?function(s,i,a){if(!Yi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Wh(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Kp(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ls(n,e,t,r){return n instanceof ai?function(i,a,l,c){if(!Yi(i.precondition,a))return l;const h=i.value.clone(),f=Kh(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Jn?function(i,a,l,c){if(!Yi(i.precondition,a))return l;const h=Kh(i.fieldTransforms,c,a),f=a.data;return f.setAll(Kp(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,l){return Yi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function HI(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=jp(r.transform,s||null);i!=null&&(t===null&&(t=mt.empty()),t.set(r.field,i))}return t||null}function zh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Kr(r,s,(i,a)=>$I(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ai extends ea{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Jn extends ea{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Kp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Wh(n,e,t){const r=new Map;Te(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,UI(a,l,t[s]))}return r}function Kh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,FI(i,a,e))}return r}class uc extends ea{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zI extends ea{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&qI(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ls(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ls(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Bp();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=Wp(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),de())}isEqual(e){return this.batchId===e.batchId&&Kr(this.mutations,e.mutations,(t,r)=>zh(t,r))&&Kr(this.baseMutations,e.baseMutations,(t,r)=>zh(t,r))}}class hc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Te(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return NI}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new hc(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,pe;function QI(n){switch(n){case M.OK:return te(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return te(15467,{code:n})}}function Gp(n){if(n===void 0)return un("GRPC error has no .code"),M.UNKNOWN;switch(n){case Oe.OK:return M.OK;case Oe.CANCELLED:return M.CANCELLED;case Oe.UNKNOWN:return M.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return M.INTERNAL;case Oe.UNAVAILABLE:return M.UNAVAILABLE;case Oe.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Oe.NOT_FOUND:return M.NOT_FOUND;case Oe.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Oe.ABORTED:return M.ABORTED;case Oe.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Oe.DATA_LOSS:return M.DATA_LOSS;default:return te(39323,{code:n})}}(pe=Oe||(Oe={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=new xn([4294967295,4294967295],0);function Gh(n){const e=mp().encode(n),t=new lp;return t.update(e),new Uint8Array(t.digest())}function Qh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new xn([t,r],0),new xn([s,i],0)]}class dc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Rs(`Invalid padding: ${t}`);if(r<0)throw new Rs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Rs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Rs(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=xn.fromNumber(this.pe)}we(e,t,r){let s=e.add(t.multiply(xn.fromNumber(r)));return s.compare(JI)===1&&(s=new xn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Gh(e),[r,s]=Qh(t);for(let i=0;i<this.hashCount;i++){const a=this.we(r,s,i);if(!this.Se(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new dc(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.pe===0)return;const t=Gh(e),[r,s]=Qh(t);for(let i=0;i<this.hashCount;i++){const a=this.we(r,s,i);this.be(a)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Rs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,li.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ta(ie.min(),s,new De(ue),hn(),de())}}class li{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new li(r,t,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t,r,s){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=s}}class Qp{constructor(e,t){this.targetId=e,this.Ce=t}}class Jp{constructor(e,t,r=Qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Jh{constructor(){this.Fe=0,this.Me=Yh(),this.xe=Qe.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=de(),t=de(),r=de();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:te(38017,{changeType:i})}}),new li(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=Yh()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Te(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class YI{constructor(e){this.ze=e,this.je=new Map,this.He=hn(),this.Je=Bi(),this.Ye=Bi(),this.Ze=new De(ue)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:te(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,s)=>{this.it(s)&&t(s)})}ot(e){const t=e.targetId,r=e.Ce.count,s=this._t(t);if(s){const i=s.target;if(El(i))if(r===0){const a=new Z(i.path);this.tt(t,a,st.newNoDocument(a,ie.min()))}else Te(r===1,20013,{expectedCount:r});else{const a=this.ut(t);if(a!==r){const l=this.ct(e),c=l?this.lt(l,e,a):1;if(c!==0){this.st(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Hn(r).toUint8Array()}catch(c){if(c instanceof Tp)return Wr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new dc(a,s,i)}catch(c){return Wr(c instanceof Rs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.ze.Pt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(t,i,null),s++)}),s}It(e){const t=new Map;this.je.forEach((i,a)=>{const l=this._t(a);if(l){if(i.current&&El(l.target)){const c=new Z(l.target.path);this.Et(c).has(a)||this.dt(a,c)||this.tt(a,c,st.newNoDocument(c,e))}i.Le&&(t.set(a,i.qe()),i.Qe())}});let r=de();this.Ye.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this._t(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,a)=>a.setReadTime(e));const s=new ta(e,t,this.Ze,this.He,r);return this.He=hn(),this.Je=Bi(),this.Ye=Bi(),this.Ze=new De(ue),s}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,t)?s.$e(t,1):s.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Jh,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Be(ue),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Be(ue),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||Q("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Jh),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Bi(){return new De(Z.comparator)}function Yh(){return new De(Z.comparator)}const XI={asc:"ASCENDING",desc:"DESCENDING"},ZI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ew={and:"AND",or:"OR"};class tw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Al(n,e){return n.useProto3Json||Qo(e)?e:{value:e}}function Ao(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function nw(n,e){return Ao(n,e.toTimestamp())}function Ht(n){return Te(!!n,49232),ie.fromTimestamp(function(t){const r=qn(t);return new Ue(r.seconds,r.nanos)}(n))}function fc(n,e){return bl(n,e).canonicalString()}function bl(n,e){const t=function(s){return new Ce(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Xp(n){const e=Ce.fromString(n);return Te(rg(e),10190,{key:e.toString()}),e}function Rl(n,e){return fc(n.databaseId,e.path)}function Ga(n,e){const t=Xp(e);if(t.get(1)!==n.databaseId.projectId)throw new J(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new J(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Z(eg(t))}function Zp(n,e){return fc(n.databaseId,e)}function rw(n){const e=Xp(n);return e.length===4?Ce.emptyPath():eg(e)}function Sl(n){return new Ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function eg(n){return Te(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Xh(n,e,t){return{name:Rl(n,e),fields:t.value.mapValue.fields}}function sw(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:te(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Te(f===void 0||typeof f=="string",58123),Qe.fromBase64String(f||"")):(Te(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Qe.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?M.UNKNOWN:Gp(h.code);return new J(f,h.message||"")}(a);t=new Jp(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ga(n,r.document.name),i=Ht(r.document.updateTime),a=r.document.createTime?Ht(r.document.createTime):ie.min(),l=new mt({mapValue:{fields:r.document.fields}}),c=st.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Xi(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ga(n,r.document),i=r.readTime?Ht(r.readTime):ie.min(),a=st.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Xi([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ga(n,r.document),i=r.removedTargetIds||[];t=new Xi([],i,s,null)}else{if(!("filter"in e))return te(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new GI(s,i),l=r.targetId;t=new Qp(l,a)}}return t}function iw(n,e){let t;if(e instanceof ai)t={update:Xh(n,e.key,e.value)};else if(e instanceof uc)t={delete:Rl(n,e.key)};else if(e instanceof Jn)t={update:Xh(n,e.key,e.data),updateMask:pw(e.fieldMask)};else{if(!(e instanceof zI))return te(16599,{ft:e.type});t={verify:Rl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Js)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ys)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Xs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof wo)return{fieldPath:a.field.canonicalString(),increment:l.Re};throw te(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:nw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te(27497)}(n,e.precondition)),t}function ow(n,e){return n&&n.length>0?(Te(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?Ht(s.updateTime):Ht(i);return a.isEqual(ie.min())&&(a=Ht(i)),new jI(a,s.transformResults||[])}(t,e))):[]}function aw(n,e){return{documents:[Zp(n,e.path)]}}function lw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Zp(n,s);const i=function(h){if(h.length!==0)return ng(Mt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:kr(m.field),direction:hw(m.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Al(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{gt:t,parent:s}}function cw(n){let e=rw(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Te(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(g){const m=tg(g);return m instanceof Mt&&kp(m)?m.getFilters():[m]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(m=>function(P){return new Io(Dr(P.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(g){let m;return m=typeof g=="object"?g.value:g,Qo(m)?null:m}(t.limit));let c=null;t.startAt&&(c=function(g){const m=!!g.before,w=g.values||[];return new Eo(w,m)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const m=!g.before,w=g.values||[];return new Eo(w,m)}(t.endAt)),CI(e,s,a,i,l,"F",c,h)}function uw(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function tg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Dr(t.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Dr(t.unaryFilter.field);return xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Dr(t.unaryFilter.field);return xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Dr(t.unaryFilter.field);return xe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return te(61313);default:return te(60726)}}(n):n.fieldFilter!==void 0?function(t){return xe.create(Dr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return te(58110);default:return te(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Mt.create(t.compositeFilter.filters.map(r=>tg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te(1026)}}(t.compositeFilter.op))}(n):te(30097,{filter:n})}function hw(n){return XI[n]}function dw(n){return ZI[n]}function fw(n){return ew[n]}function kr(n){return{fieldPath:n.canonicalString()}}function Dr(n){return Ge.fromServerFormat(n.fieldPath)}function ng(n){return n instanceof xe?function(t){if(t.op==="=="){if(Uh(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NAN"}};if(Fh(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Uh(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NOT_NAN"}};if(Fh(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kr(t.field),op:dw(t.op),value:t.value}}}(n):n instanceof Mt?function(t){const r=t.getFilters().map(s=>ng(s));return r.length===1?r[0]:{compositeFilter:{op:fw(t.op),filters:r}}}(n):te(54877,{filter:n})}function pw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function rg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t,r,s,i=ie.min(),a=ie.min(),l=Qe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.wt=e}}function mw(n){const e=cw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?wl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(){this.Cn=new yw}addToCollectionParentIndex(e,t){return this.Cn.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(jn.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(jn.min())}updateCollectionGroup(e,t,r){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class yw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Be(Ce.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Be(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},sg=41943040;class pt{static withCacheSize(e){return new pt(e,pt.DEFAULT_COLLECTION_PERCENTILE,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pt.DEFAULT_COLLECTION_PERCENTILE=10,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pt.DEFAULT=new pt(sg,pt.DEFAULT_COLLECTION_PERCENTILE,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pt.DISABLED=new pt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Jr(0)}static lr(){return new Jr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="LruGarbageCollector",vw=1048576;function td([n,e],[t,r]){const s=ue(n,t);return s===0?ue(e,r):s}class Tw{constructor(e){this.Er=e,this.buffer=new Be(td),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();td(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ew{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){Q(ed,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ns(t)?Q(ed,"Ignoring IndexedDB error during garbage collection: ",t):await ts(t)}await this.mr(3e5)})}}class Iw{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return x.resolve(Go.le);const r=new Tw(t);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Q("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(Zh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zh):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,s,i,a,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(Q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,t))).next(g=>(i=g,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(h=Date.now(),Cr()<=he.DEBUG&&Q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${g} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function ww(n,e){return new Iw(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(){this.changes=new Tr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?x.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Ls(r.mutation,s,wt.empty(),Ue.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,t,r=de()){const s=ur();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=bs();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=ur();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,de()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=hn();const a=Ms(),l=function(){return Ms()}();return t.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Jn)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Ls(f.mutation,h,f.mutation.getFieldMask(),Ue.now())):a.set(h.key,wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var g;return l.set(h,new bw(f,(g=a.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Ms();let s=new De((a,l)=>a-l),i=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=r.get(c)||wt.empty();f=l.applyToLocalView(h,f),r.set(c,f);const g=(s.get(l.batchId)||de()).add(c);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,g=Bp();f.forEach(m=>{if(!i.has(m)){const w=Wp(t.get(m),r.get(m));w!==null&&g.set(m,w),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return x.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return Z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):x.resolve(ur());let l=Ws,c=i;return a.next(h=>x.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?x.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,de())).next(f=>({batchId:l,changes:Up(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Z(t)).next(r=>{let s=bs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=bs();return this.indexManager.getCollectionParents(e,i).next(l=>x.forEach(l,c=>{const h=function(g,m){return new oi(m,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((g,m)=>{a=a.insert(g,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,st.newInvalidDocument(f)))});let l=bs();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&Ls(f.mutation,h,wt.empty(),Ue.now()),Xo(t,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return x.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ht(s.createTime)}}(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(s){return{name:s.name,query:mw(s.bundledQuery),readTime:Ht(s.readTime)}}(t)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(){this.overlays=new De(Z.comparator),this.Qr=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ur();return x.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.bt(e,t,i)}),x.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),x.resolve()}getOverlaysForCollection(e,t,r){const s=ur(),i=t.length+1,a=new Z(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return x.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new De((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=ur(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=ur(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return x.resolve(l)}bt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new KI(t,r));let i=this.Qr.get(t);i===void 0&&(i=de(),this.Qr.set(t,i)),this.Qr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this.$r=new Be($e.Ur),this.Kr=new Be($e.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new $e(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new $e(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new Z(new Ce([])),r=new $e(t,e),s=new $e(t,e+1),i=[];return this.Kr.forEachInRange([r,s],a=>{this.zr(a),i.push(a.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new Z(new Ce([])),r=new $e(t,e),s=new $e(t,e+1);let i=de();return this.Kr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new $e(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return Z.comparator(e.key,t.key)||ue(e.Zr,t.Zr)}static Wr(e,t){return ue(e.Zr,t.Zr)||Z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new Be($e.Ur)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new WI(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Xr=this.Xr.add(new $e(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return x.resolve(a)}lookupMutationBatch(e,t){return x.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ti(r),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?sc:this.nr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new $e(t,0),s=new $e(t,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],a=>{const l=this.ei(a.Zr);i.push(l)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Be(ue);return t.forEach(s=>{const i=new $e(s,0),a=new $e(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,a],l=>{r=r.add(l.Zr)})}),x.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const a=new $e(new Z(i),0);let l=new Be(ue);return this.Xr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Zr)),!0)},a),x.resolve(this.ni(l))}ni(e){const t=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Te(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return x.forEach(t.mutations,s=>{const i=new $e(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new $e(t,0),s=this.Xr.firstAfterOrEqual(r);return x.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e){this.ii=e,this.docs=function(){return new De(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return x.resolve(r?r.document.mutableCopy():st.newInvalidDocument(t))}getEntries(e,t){let r=hn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():st.newInvalidDocument(s))}),x.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=hn();const a=t.path,l=new Z(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||oI(iI(f),r)<=0||(s.has(f.key)||Xo(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,t,r,s){te(9500)}si(e,t){return x.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Vw(this)}getSize(e){return x.resolve(this.size)}}class Vw extends Aw{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),x.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.persistence=e,this.oi=new Tr(t=>ac(t),lc),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this._i=0,this.ai=new pc,this.targetCount=0,this.ui=Jr.cr()}forEachTarget(e,t){return this.oi.forEach((r,s)=>t(s)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),x.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new Jr(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.Tr(t),x.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.oi.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.oi.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),x.waitFor(i).next(()=>s)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return x.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),x.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),x.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),x.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return x.resolve(r)}containsKey(e,t){return x.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,t){this.ci={},this.overlays={},this.li=new Go(0),this.hi=!1,this.hi=!0,this.Pi=new Pw,this.referenceDelegate=e(this),this.Ti=new Nw(this),this.indexManager=new _w,this.remoteDocumentCache=function(s){return new Dw(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new gw(t),this.Ei=new Sw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Cw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new kw(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){Q("MemoryPersistence","Starting transaction:",e);const s=new Ow(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,t){return x.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class Ow extends lI{constructor(e){super(),this.currentSequenceNumber=e}}class gc{constructor(e){this.persistence=e,this.Vi=new pc,this.mi=null}static fi(e){return new gc(e)}get gi(){if(this.mi)return this.mi;throw te(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),x.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),x.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.gi,r=>{const s=Z.fromPath(r);return this.pi(e,s).next(i=>{i||t.removeEntry(s,ie.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return x.or([()=>x.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class bo{constructor(e,t){this.persistence=e,this.yi=new Tr(r=>hI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=ww(this,t)}static fi(e,t){return new bo(e,t)}di(){}Ai(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Sr(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return x.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?x.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,a=>this.Dr(e,a,t).next(l=>{l||(r++,i.removeEntry(a,ie.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),x.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Qi(e.data.value)),t}Dr(e,t,r){return x.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.yi.get(t);return x.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.ds=r,this.As=s}static Rs(e,t){let r=de(),s=de();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new mc(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return PT()?8:cI(ot())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ws(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Ss(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new xw;return this.bs(e,t,a).next(l=>{if(i.result=l,this.fs)return this.Ds(e,t,a,l.size)})}).next(()=>i.result)}Ds(e,t,r,s){return r.documentReadCount<this.gs?(Cr()<=he.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",Pr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),x.resolve()):(Cr()<=he.DEBUG&&Q("QueryEngine","Query:",Pr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(Cr()<=he.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",Pr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qt(t))):x.resolve())}ws(e,t){if(qh(t))return x.resolve(null);let r=qt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=wl(t,null,"F"),r=qt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=de(...i);return this.ys.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.vs(t,l);return this.Cs(t,h,a,c.readTime)?this.ws(e,wl(t,null,"F")):this.Fs(e,h,t,c)}))})))}Ss(e,t,r,s){return qh(t)||s.isEqual(ie.min())?x.resolve(null):this.ys.getDocuments(e,r).next(i=>{const a=this.vs(t,i);return this.Cs(t,a,r,s)?x.resolve(null):(Cr()<=he.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Pr(t)),this.Fs(e,a,t,sI(s,Ws)).next(l=>l))})}vs(e,t){let r=new Be(Lp(e));return t.forEach((s,i)=>{Xo(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}bs(e,t,r){return Cr()<=he.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",Pr(t)),this.ys.getDocumentsMatchingQuery(e,t,jn.min(),r)}Fs(e,t,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="LocalStore",Lw=3e8;class Fw{constructor(e,t,r,s){this.persistence=e,this.Ms=t,this.serializer=s,this.xs=new De(ue),this.Os=new Tr(i=>ac(i),lc),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Rw(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function Uw(n,e,t,r){return new Fw(n,e,t,r)}async function og(n,e){const t=oe(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=de();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(h=>({ks:h,removedBatchIds:a,addedBatchIds:l}))})})}function Bw(n,e){const t=oe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const g=h.batch,m=g.keys();let w=x.resolve();return m.forEach(P=>{w=w.next(()=>f.getEntry(c,P)).next(D=>{const k=h.docVersions.get(P);Te(k!==null,48541),D.version.compareTo(k)<0&&(g.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(c,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=de();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function ag(n){const e=oe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function $w(n,e){const t=oe(n),r=e.snapshotVersion;let s=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Bs.newChangeBuffer({trackRemovals:!0});s=t.xs;const l=[];e.targetChanges.forEach((f,g)=>{const m=s.get(g);if(!m)return;l.push(t.Ti.removeMatchingKeys(i,f.removedDocuments,g).next(()=>t.Ti.addMatchingKeys(i,f.addedDocuments,g)));let w=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?w=w.withResumeToken(Qe.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),s=s.insert(g,w),function(D,k,C){return D.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=Lw?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(m,w,f)&&l.push(t.Ti.updateTargetData(i,w))});let c=hn(),h=de();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(jw(i,a,e.documentUpdates).next(f=>{c=f.qs,h=f.Qs})),!r.isEqual(ie.min())){const f=t.Ti.getLastRemoteSnapshotVersion(i).next(g=>t.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return x.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.xs=s,i))}function jw(n,e,t){let r=de(),s=de();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=hn();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ie.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):Q(_c,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{qs:a,Qs:s}})}function qw(n,e){const t=oe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=sc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Hw(n,e){const t=oe(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ti.getTargetData(r,e).next(i=>i?(s=i,x.resolve(s)):t.Ti.allocateTargetId(r).next(a=>(s=new kn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function Cl(n,e,t){const r=oe(n),s=r.xs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ns(a))throw a;Q(_c,`Failed to update sequence numbers for target ${e}: ${a}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function nd(n,e,t){const r=oe(n);let s=ie.min(),i=de();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const g=oe(c),m=g.Os.get(f);return m!==void 0?x.resolve(g.xs.get(m)):g.Ti.getTargetData(h,f)}(r,a,qt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.Ms.getDocumentsMatchingQuery(a,e,t?s:ie.min(),t?i:de())).next(l=>(zw(r,kI(e),l),{documents:l,$s:i})))}function zw(n,e,t){let r=n.Ns.get(e)||ie.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ns.set(e,r)}class rd{constructor(){this.activeTargetIds=MI()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ww{constructor(){this.xo=new rd,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new rd,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="ConnectivityMonitor";class id{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){Q(sd,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){Q(sd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $i=null;function Pl(){return $i===null?$i=function(){return 268435456+Math.round(2147483648*Math.random())}():$i++,"0x"+$i.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="RestConnection",Gw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Qw{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===vo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,t,r,s,i){const a=Pl(),l=this.jo(e,t.toUriEncodedString());Q(Qa,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:h}=new URL(l),f=ri(h);return this.Jo(e,l,c,r,f).then(g=>(Q(Qa,`Received RPC '${e}' ${a}: `,g),g),g=>{throw Wr(Qa,`RPC '${e}' ${a} failed with error: `,g,"url: ",l,"request:",r),g})}Yo(e,t,r,s,i,a){return this.zo(e,t,r,s,i)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+es}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,t){const r=Gw[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="WebChannelConnection";class Yw extends Qw{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=Pl();return new Promise((l,c)=>{const h=new cp;h.setWithCredentials(!0),h.listenOnce(up.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Gi.NO_ERROR:const g=h.getResponseJson();Q(et,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),l(g);break;case Gi.TIMEOUT:Q(et,`RPC '${e}' ${a} timed out`),c(new J(M.DEADLINE_EXCEEDED,"Request time out"));break;case Gi.HTTP_ERROR:const m=h.getStatus();if(Q(et,`RPC '${e}' ${a} failed with status:`,m,"response text:",h.getResponseText()),m>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const P=w==null?void 0:w.error;if(P&&P.status&&P.message){const D=function(C){const F=C.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(F)>=0?F:M.UNKNOWN}(P.status);c(new J(D,P.message))}else c(new J(M.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new J(M.UNAVAILABLE,"Connection failed."));break;default:te(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{Q(et,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);Q(et,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,r,15)})}T_(e,t,r){const s=Pl(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=fp(),l=dp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=i.join("");Q(et,`Creating RPC '${e}' stream ${s}: ${f}`,c);const g=a.createWebChannel(f,c);let m=!1,w=!1;const P=new Jw({Zo:k=>{w?Q(et,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(m||(Q(et,`Opening RPC '${e}' stream ${s} transport.`),g.open(),m=!0),Q(et,`RPC '${e}' stream ${s} sending:`,k),g.send(k))},Xo:()=>g.close()}),D=(k,C,F)=>{k.listen(C,j=>{try{F(j)}catch(W){setTimeout(()=>{throw W},0)}})};return D(g,As.EventType.OPEN,()=>{w||(Q(et,`RPC '${e}' stream ${s} transport opened.`),P.__())}),D(g,As.EventType.CLOSE,()=>{w||(w=!0,Q(et,`RPC '${e}' stream ${s} transport closed`),P.u_())}),D(g,As.EventType.ERROR,k=>{w||(w=!0,Wr(et,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),P.u_(new J(M.UNAVAILABLE,"The operation could not be completed")))}),D(g,As.EventType.MESSAGE,k=>{var C;if(!w){const F=k.data[0];Te(!!F,16349);const j=F,W=(j==null?void 0:j.error)||((C=j[0])===null||C===void 0?void 0:C.error);if(W){Q(et,`RPC '${e}' stream ${s} received error:`,W);const ce=W.status;let _e=function(T){const I=Oe[T];if(I!==void 0)return Gp(I)}(ce),A=W.message;_e===void 0&&(_e=M.INTERNAL,A="Unknown error status: "+ce+" with message "+W.message),w=!0,P.u_(new J(_e,A)),g.close()}else Q(et,`RPC '${e}' stream ${s} received:`,F),P.c_(F)}}),D(l,hp.STAT_EVENT,k=>{k.stat===ml.PROXY?Q(et,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===ml.NOPROXY&&Q(et,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.a_()},0),P}}function Ja(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(n){return new tw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=t,this.I_=r,this.E_=s,this.d_=i,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),s=Math.max(0,t-r);s>0&&Q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="PersistentStream";class cg{constructor(e,t,r,s,i,a,l,c){this.xi=e,this.y_=r,this.w_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new lg(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(un(t.toString()),un("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.S_===t&&this.K_(r,s)},r=>{e(()=>{const s=new J(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(s)})})}K_(e,t){const r=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.W_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return Q(od,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(Q(od,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Xw extends cg{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=sw(this.serializer,e),r=function(i){if(!("targetChange"in i))return ie.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ie.min():a.readTime?Ht(a.readTime):ie.min()}(e);return this.listener.j_(t,r)}H_(e){const t={};t.database=Sl(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=El(c)?{documents:aw(i,c)}:{query:lw(i,c).gt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Yp(i,a.resumeToken);const h=Al(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ie.min())>0){l.readTime=Ao(i,a.snapshotVersion.toTimestamp());const h=Al(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=uw(this.serializer,e);r&&(t.labels=r),this.L_(t)}J_(e){const t={};t.database=Sl(this.serializer),t.removeTarget=e,this.L_(t)}}class Zw extends cg{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return Te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Te(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){Te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=ow(e.writeResults,e.commitTime),r=Ht(e.commitTime);return this.listener.ea(r,t)}ta(){const e={};e.database=Sl(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>iw(this.serializer,r))};this.L_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{}class tA extends eA{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.na=!1}ra(){if(this.na)throw new J(M.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.zo(e,bl(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(M.UNKNOWN,i.toString())})}Yo(e,t,r,s,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Yo(e,bl(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new J(M.UNKNOWN,a.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class nA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(un(t),this.oa=!1):Q("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="RemoteStore";class rA{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No(a=>{r.enqueueAndForget(async()=>{Er(this)&&(Q(mr,"Restarting streams for network reachability change."),await async function(c){const h=oe(c);h.Ta.add(4),await ci(h),h.da.set("Unknown"),h.Ta.delete(4),await ra(h)}(this))})}),this.da=new nA(r,s)}}async function ra(n){if(Er(n))for(const e of n.Ia)await e(!0)}async function ci(n){for(const e of n.Ia)await e(!1)}function ug(n,e){const t=oe(n);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),Ec(t)?Tc(t):rs(t).M_()&&vc(t,e))}function yc(n,e){const t=oe(n),r=rs(t);t.Pa.delete(e),r.M_()&&hg(t,e),t.Pa.size===0&&(r.M_()?r.N_():Er(t)&&t.da.set("Unknown"))}function vc(n,e){if(n.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}rs(n).H_(e)}function hg(n,e){n.Aa.Ke(e),rs(n).J_(e)}function Tc(n){n.Aa=new YI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Pa.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),rs(n).start(),n.da._a()}function Ec(n){return Er(n)&&!rs(n).F_()&&n.Pa.size>0}function Er(n){return oe(n).Ta.size===0}function dg(n){n.Aa=void 0}async function sA(n){n.da.set("Online")}async function iA(n){n.Pa.forEach((e,t)=>{vc(n,e)})}async function oA(n,e){dg(n),Ec(n)?(n.da.ca(e),Tc(n)):n.da.set("Unknown")}async function aA(n,e,t){if(n.da.set("Online"),e instanceof Jp&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Pa.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Pa.delete(l),s.Aa.removeTarget(l))}(n,e)}catch(r){Q(mr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ro(n,r)}else if(e instanceof Xi?n.Aa.Xe(e):e instanceof Qp?n.Aa.ot(e):n.Aa.nt(e),!t.isEqual(ie.min()))try{const r=await ag(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.Aa.It(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Pa.get(h);f&&i.Pa.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=i.Pa.get(c);if(!f)return;i.Pa.set(c,f.withResumeToken(Qe.EMPTY_BYTE_STRING,f.snapshotVersion)),hg(i,c);const g=new kn(f.target,c,h,f.sequenceNumber);vc(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){Q(mr,"Failed to raise snapshot:",r),await Ro(n,r)}}async function Ro(n,e,t){if(!ns(e))throw e;n.Ta.add(1),await ci(n),n.da.set("Offline"),t||(t=()=>ag(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Q(mr,"Retrying IndexedDB access"),await t(),n.Ta.delete(1),await ra(n)})}function fg(n,e){return e().catch(t=>Ro(n,t,e))}async function sa(n){const e=oe(n),t=Wn(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:sc;for(;lA(e);)try{const s=await qw(e.localStore,r);if(s===null){e.ha.length===0&&t.N_();break}r=s.batchId,cA(e,s)}catch(s){await Ro(e,s)}pg(e)&&gg(e)}function lA(n){return Er(n)&&n.ha.length<10}function cA(n,e){n.ha.push(e);const t=Wn(n);t.M_()&&t.Y_&&t.Z_(e.mutations)}function pg(n){return Er(n)&&!Wn(n).F_()&&n.ha.length>0}function gg(n){Wn(n).start()}async function uA(n){Wn(n).ta()}async function hA(n){const e=Wn(n);for(const t of n.ha)e.Z_(t.mutations)}async function dA(n,e,t){const r=n.ha.shift(),s=hc.from(r,e,t);await fg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await sa(n)}async function fA(n,e){e&&Wn(n).Y_&&await async function(r,s){if(function(a){return QI(a)&&a!==M.ABORTED}(s.code)){const i=r.ha.shift();Wn(r).O_(),await fg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await sa(r)}}(n,e),pg(n)&&gg(n)}async function ad(n,e){const t=oe(n);t.asyncQueue.verifyOperationInProgress(),Q(mr,"RemoteStore received new credentials");const r=Er(t);t.Ta.add(3),await ci(t),r&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await ra(t)}async function pA(n,e){const t=oe(n);e?(t.Ta.delete(2),await ra(t)):e||(t.Ta.add(2),await ci(t),t.da.set("Unknown"))}function rs(n){return n.Ra||(n.Ra=function(t,r,s){const i=oe(t);return i.ra(),new Xw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{e_:sA.bind(null,n),n_:iA.bind(null,n),i_:oA.bind(null,n),j_:aA.bind(null,n)}),n.Ia.push(async e=>{e?(n.Ra.O_(),Ec(n)?Tc(n):n.da.set("Unknown")):(await n.Ra.stop(),dg(n))})),n.Ra}function Wn(n){return n.Va||(n.Va=function(t,r,s){const i=oe(t);return i.ra(),new Zw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:uA.bind(null,n),i_:fA.bind(null,n),X_:hA.bind(null,n),ea:dA.bind(null,n)}),n.Ia.push(async e=>{e?(n.Va.O_(),await sa(n)):(await n.Va.stop(),n.ha.length>0&&(Q(mr,`Stopping write stream with ${n.ha.length} pending writes`),n.ha=[]))})),n.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Ic(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wc(n,e){if(un("AsyncQueue",`${e}: ${n}`),ns(n))return new J(M.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{static emptySet(e){return new Br(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Z.comparator(t.key,r.key):(t,r)=>Z.comparator(t.key,r.key),this.keyedMap=bs(),this.sortedSet=new De(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Br)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Br;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(){this.ma=new De(Z.comparator)}track(e){const t=e.doc.key,r=this.ma.get(t);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(t,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(t):e.type===1&&r.type===2?this.ma=this.ma.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):te(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,r)=>{e.push(r)}),e}}class Yr{constructor(e,t,r,s,i,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Yr(e,t,Br.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class mA{constructor(){this.queries=cd(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,r){const s=oe(t),i=s.queries;s.queries=cd(),i.forEach((a,l)=>{for(const c of l.ya)c.onError(r)})})(this,new J(M.ABORTED,"Firestore shutting down"))}}function cd(){return new Tr(n=>Mp(n),Yo)}async function _A(n,e){const t=oe(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.wa()&&e.Sa()&&(r=2):(i=new gA,r=e.Sa()?0:1);try{switch(r){case 0:i.pa=await t.onListen(s,!0);break;case 1:i.pa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=wc(a,`Initialization of query '${Pr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.ya.push(e),e.Da(t.onlineState),i.pa&&e.va(i.pa)&&Ac(t)}async function yA(n,e){const t=oe(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.ya.indexOf(e);a>=0&&(i.ya.splice(a,1),i.ya.length===0?s=e.Sa()?0:1:!i.wa()&&e.Sa()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function vA(n,e){const t=oe(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.ya)l.va(s)&&(r=!0);a.pa=s}}r&&Ac(t)}function TA(n,e,t){const r=oe(n),s=r.queries.get(e);if(s)for(const i of s.ya)i.onError(t);r.queries.delete(e)}function Ac(n){n.ba.forEach(e=>{e.next()})}var kl,ud;(ud=kl||(kl={})).Ca="default",ud.Cache="cache";class EA{constructor(e,t,r){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Yr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const r=t!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=Yr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==kl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e){this.key=e}}class _g{constructor(e){this.key=e}}class IA{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=de(),this.mutatedKeys=de(),this.Ha=Lp(e),this.Ja=new Br(this.Ha)}get Ya(){return this.Ga}Za(e,t){const r=t?t.Xa:new ld,s=t?t.Ja:this.Ja;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const m=s.get(f),w=Xo(this.query,g)?g:null,P=!!m&&this.mutatedKeys.has(m.key),D=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let k=!1;m&&w?m.data.isEqual(w.data)?P!==D&&(r.track({type:3,doc:w}),k=!0):this.eu(m,w)||(r.track({type:2,doc:w}),k=!0,(c&&this.Ha(w,c)>0||h&&this.Ha(w,h)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),k=!0):m&&!w&&(r.track({type:1,doc:m}),k=!0,(c||h)&&(l=!0)),k&&(w?(a=a.add(w),i=D?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ja:a,Xa:r,Cs:l,mutatedKeys:i}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const a=e.Xa.ga();a.sort((f,g)=>function(w,P){const D=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te(20277,{Vt:k})}};return D(w)-D(P)}(f.type,g.type)||this.Ha(f.doc,g.doc)),this.tu(r),s=s!=null&&s;const l=t&&!s?this.nu():[],c=this.ja.size===0&&this.current&&!s?1:0,h=c!==this.za;return this.za=c,a.length!==0||h?{snapshot:new Yr(this.query,e.Ja,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:l}:{ru:l}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new ld,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=de(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const t=[];return e.forEach(r=>{this.ja.has(r)||t.push(new _g(r))}),this.ja.forEach(r=>{e.has(r)||t.push(new mg(r))}),t}su(e){this.Ga=e.$s,this.ja=de();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return Yr.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const bc="SyncEngine";class wA{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class AA{constructor(e){this.key=e,this._u=!1}}class bA{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.au={},this.uu=new Tr(l=>Mp(l),Yo),this.cu=new Map,this.lu=new Set,this.hu=new De(Z.comparator),this.Pu=new Map,this.Tu=new pc,this.Iu={},this.Eu=new Map,this.du=Jr.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function RA(n,e,t=!0){const r=wg(n);let s;const i=r.uu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ou()):s=await yg(r,e,t,!0),s}async function SA(n,e){const t=wg(n);await yg(t,e,!0,!1)}async function yg(n,e,t,r){const s=await Hw(n.localStore,qt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await CA(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&ug(n.remoteStore,s),l}async function CA(n,e,t,r,s){n.Ru=(g,m,w)=>async function(D,k,C,F){let j=k.view.Za(C);j.Cs&&(j=await nd(D.localStore,k.query,!1).then(({documents:A})=>k.view.Za(A,j)));const W=F&&F.targetChanges.get(k.targetId),ce=F&&F.targetMismatches.get(k.targetId)!=null,_e=k.view.applyChanges(j,D.isPrimaryClient,W,ce);return dd(D,k.targetId,_e.ru),_e.snapshot}(n,g,m,w);const i=await nd(n.localStore,e,!0),a=new IA(e,i.$s),l=a.Za(i.documents),c=li.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,c);dd(n,t,h.ru);const f=new wA(e,t,a);return n.uu.set(e,f),n.cu.has(t)?n.cu.get(t).push(e):n.cu.set(t,[e]),h.snapshot}async function PA(n,e,t){const r=oe(n),s=r.uu.get(e),i=r.cu.get(s.targetId);if(i.length>1)return r.cu.set(s.targetId,i.filter(a=>!Yo(a,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Cl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&yc(r.remoteStore,s.targetId),Dl(r,s.targetId)}).catch(ts)):(Dl(r,s.targetId),await Cl(r.localStore,s.targetId,!0))}async function kA(n,e){const t=oe(n),r=t.uu.get(e),s=t.cu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),yc(t.remoteStore,r.targetId))}async function DA(n,e,t){const r=FA(n);try{const s=await function(a,l){const c=oe(a),h=Ue.now(),f=l.reduce((w,P)=>w.add(P.key),de());let g,m;return c.persistence.runTransaction("Locally write mutations","readwrite",w=>{let P=hn(),D=de();return c.Bs.getEntries(w,f).next(k=>{P=k,P.forEach((C,F)=>{F.isValidDocument()||(D=D.add(C))})}).next(()=>c.localDocuments.getOverlayedDocuments(w,P)).next(k=>{g=k;const C=[];for(const F of l){const j=HI(F,g.get(F.key).overlayedDocument);j!=null&&C.push(new Jn(F.key,j,Sp(j.value.mapValue),xt.exists(!0)))}return c.mutationQueue.addMutationBatch(w,h,C,l)}).next(k=>{m=k;const C=k.applyToLocalDocumentSet(g,D);return c.documentOverlayCache.saveOverlays(w,k.batchId,C)})}).then(()=>({batchId:m.batchId,changes:Up(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Iu[a.currentUser.toKey()];h||(h=new De(ue)),h=h.insert(l,c),a.Iu[a.currentUser.toKey()]=h}(r,s.batchId,t),await ui(r,s.changes),await sa(r.remoteStore)}catch(s){const i=wc(s,"Failed to persist write");t.reject(i)}}async function vg(n,e){const t=oe(n);try{const r=await $w(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Pu.get(i);a&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a._u=!0:s.modifiedDocuments.size>0?Te(a._u,14607):s.removedDocuments.size>0&&(Te(a._u,42227),a._u=!1))}),await ui(t,r,e)}catch(r){await ts(r)}}function hd(n,e,t){const r=oe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.uu.forEach((i,a)=>{const l=a.view.Da(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=oe(a);c.onlineState=l;let h=!1;c.queries.forEach((f,g)=>{for(const m of g.ya)m.Da(l)&&(h=!0)}),h&&Ac(c)}(r.eventManager,e),s.length&&r.au.j_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function VA(n,e,t){const r=oe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Pu.get(e),i=s&&s.key;if(i){let a=new De(Z.comparator);a=a.insert(i,st.newNoDocument(i,ie.min()));const l=de().add(i),c=new ta(ie.min(),new Map,new De(ue),a,l);await vg(r,c),r.hu=r.hu.remove(i),r.Pu.delete(e),Rc(r)}else await Cl(r.localStore,e,!1).then(()=>Dl(r,e,t)).catch(ts)}async function NA(n,e){const t=oe(n),r=e.batch.batchId;try{const s=await Bw(t.localStore,e);Eg(t,r,null),Tg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ui(t,s)}catch(s){await ts(s)}}async function OA(n,e,t){const r=oe(n);try{const s=await function(a,l){const c=oe(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(g=>(Te(g!==null,37113),f=g.keys(),c.mutationQueue.removeMutationBatch(h,g))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);Eg(r,e,t),Tg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ui(r,s)}catch(s){await ts(s)}}function Tg(n,e){(n.Eu.get(e)||[]).forEach(t=>{t.resolve()}),n.Eu.delete(e)}function Eg(n,e,t){const r=oe(n);let s=r.Iu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Iu[r.currentUser.toKey()]=s}}function Dl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.cu.get(e))n.uu.delete(r),t&&n.au.Vu(r,t);n.cu.delete(e),n.isPrimaryClient&&n.Tu.Hr(e).forEach(r=>{n.Tu.containsKey(r)||Ig(n,r)})}function Ig(n,e){n.lu.delete(e.path.canonicalString());const t=n.hu.get(e);t!==null&&(yc(n.remoteStore,t),n.hu=n.hu.remove(e),n.Pu.delete(t),Rc(n))}function dd(n,e,t){for(const r of t)r instanceof mg?(n.Tu.addReference(r.key,e),xA(n,r)):r instanceof _g?(Q(bc,"Document no longer in limbo: "+r.key),n.Tu.removeReference(r.key,e),n.Tu.containsKey(r.key)||Ig(n,r.key)):te(19791,{mu:r})}function xA(n,e){const t=e.key,r=t.path.canonicalString();n.hu.get(t)||n.lu.has(r)||(Q(bc,"New document in limbo: "+t),n.lu.add(r),Rc(n))}function Rc(n){for(;n.lu.size>0&&n.hu.size<n.maxConcurrentLimboResolutions;){const e=n.lu.values().next().value;n.lu.delete(e);const t=new Z(Ce.fromString(e)),r=n.du.next();n.Pu.set(r,new AA(t)),n.hu=n.hu.insert(t,r),ug(n.remoteStore,new kn(qt(Op(t.path)),r,"TargetPurposeLimboResolution",Go.le))}}async function ui(n,e,t){const r=oe(n),s=[],i=[],a=[];r.uu.isEmpty()||(r.uu.forEach((l,c)=>{a.push(r.Ru(c,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(h){s.push(h);const g=mc.Rs(c.targetId,h);i.push(g)}}))}),await Promise.all(a),r.au.j_(s),await async function(c,h){const f=oe(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>x.forEach(h,m=>x.forEach(m.ds,w=>f.persistence.referenceDelegate.addReference(g,m.targetId,w)).next(()=>x.forEach(m.As,w=>f.persistence.referenceDelegate.removeReference(g,m.targetId,w)))))}catch(g){if(!ns(g))throw g;Q(_c,"Failed to update sequence numbers: "+g)}for(const g of h){const m=g.targetId;if(!g.fromCache){const w=f.xs.get(m),P=w.snapshotVersion,D=w.withLastLimboFreeSnapshotVersion(P);f.xs=f.xs.insert(m,D)}}}(r.localStore,i))}async function MA(n,e){const t=oe(n);if(!t.currentUser.isEqual(e)){Q(bc,"User change. New user:",e.toKey());const r=await og(t.localStore,e);t.currentUser=e,function(i,a){i.Eu.forEach(l=>{l.forEach(c=>{c.reject(new J(M.CANCELLED,a))})}),i.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ui(t,r.ks)}}function LA(n,e){const t=oe(n),r=t.Pu.get(e);if(r&&r._u)return de().add(r.key);{let s=de();const i=t.cu.get(e);if(!i)return s;for(const a of i){const l=t.uu.get(a);s=s.unionWith(l.view.Ya)}return s}}function wg(n){const e=oe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=vg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=VA.bind(null,e),e.au.j_=vA.bind(null,e.eventManager),e.au.Vu=TA.bind(null,e.eventManager),e}function FA(n){const e=oe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=NA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OA.bind(null,e),e}class So{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=na(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return Uw(this.persistence,new Mw,e.initialUser,this.serializer)}yu(e){return new ig(gc.fi,this.serializer)}pu(e){return new Ww}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}So.provider={build:()=>new So};class UA extends So{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){Te(this.persistence.referenceDelegate instanceof bo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Ew(r,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?pt.withCacheSize(this.cacheSizeBytes):pt.DEFAULT;return new ig(r=>bo.fi(r,t),this.serializer)}}class Vl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>hd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MA.bind(null,this.syncEngine),await pA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mA}()}createDatastore(e){const t=na(e.databaseInfo.databaseId),r=function(i){return new Yw(i)}(e.databaseInfo);return function(i,a,l,c){return new tA(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new rA(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>hd(this.syncEngine,t,0),function(){return id.C()?new id:new Kw}())}createSyncEngine(e,t){return function(s,i,a,l,c,h,f){const g=new bA(s,i,a,l,c,h);return f&&(g.Au=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=oe(s);Q(mr,"RemoteStore shutting down."),i.Ta.add(5),await ci(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Vl.provider={build:()=>new Vl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):un("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="FirestoreClient";class $A{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=tt.UNAUTHENTICATED,this.clientId=_p.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{Q(Kn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Q(Kn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=wc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ya(n,e){n.asyncQueue.verifyOperationInProgress(),Q(Kn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await og(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function fd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await jA(n);Q(Kn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>ad(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>ad(e.remoteStore,s)),n._onlineComponents=e}async function jA(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Q(Kn,"Using user provided OfflineComponentProvider");try{await Ya(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Wr("Error using user provided cache. Falling back to memory cache: "+t),await Ya(n,new So)}}else Q(Kn,"Using default OfflineComponentProvider"),await Ya(n,new UA(void 0));return n._offlineComponents}async function Ag(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Q(Kn,"Using user provided OnlineComponentProvider"),await fd(n,n._uninitializedComponentsProvider._online)):(Q(Kn,"Using default OnlineComponentProvider"),await fd(n,new Vl))),n._onlineComponents}function qA(n){return Ag(n).then(e=>e.syncEngine)}async function HA(n){const e=await Ag(n),t=e.eventManager;return t.onListen=RA.bind(null,e.syncEngine),t.onUnlisten=PA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=SA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=kA.bind(null,e.syncEngine),t}function zA(n,e,t={}){const r=new Mn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new BA({next:m=>{f.Cu(),a.enqueueAndForget(()=>yA(i,g)),m.fromCache&&c.source==="server"?h.reject(new J(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),g=new EA(l,f,{includeMetadataChanges:!0,La:!0});return _A(i,g)}(await HA(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(n,e,t){if(!t)throw new J(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function WA(n,e,t,r){if(e===!0&&r===!0)throw new J(M.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function gd(n){if(!Z.isDocumentKey(n))throw new J(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function md(n){if(Z.isDocumentKey(n))throw new J(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ia(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":te(12329,{type:typeof n})}function _r(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new J(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ia(n);throw new J(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="firestore.googleapis.com",_d=!0;class yd{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Sg,this.ssl=_d}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:_d;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=sg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<vw)throw new J(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new J(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new J(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new J(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oa{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new QE;switch(r.type){case"firstParty":return new ZE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=pd.get(t);r&&(Q("ComponentProvider","Removing Datastore"),pd.delete(t),r.terminate())}(this),Promise.resolve()}}function KA(n,e,t,r={}){var s;n=_r(n,oa);const i=ri(e),a=n._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;i&&(ep(`https://${c}`),tp("Firestore",!0)),a.host!==Sg&&a.host!==c&&Wr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:c,ssl:i,emulatorOptions:r});if(!fr(h,l)&&(n._setSettings(h),r.mockUserToken)){let f,g;if(typeof r.mockUserToken=="string")f=r.mockUserToken,g=tt.MOCK_USER;else{f=TT(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new J(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new tt(m)}n._authCredentials=new JE(new gp(f,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ss(this.firestore,e,this._query)}}class At{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class Ln extends ss{constructor(e,t,r){super(e,t,Op(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new Z(e))}withConverter(e){return new Ln(this.firestore,e,this._path)}}function Cg(n,e,...t){if(n=at(n),Rg("collection","path",e),n instanceof oa){const r=Ce.fromString(e,...t);return md(r),new Ln(n,null,r)}{if(!(n instanceof At||n instanceof Ln))throw new J(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ce.fromString(e,...t));return md(r),new Ln(n.firestore,null,r)}}function aa(n,e,...t){if(n=at(n),arguments.length===1&&(e=_p.newId()),Rg("doc","path",e),n instanceof oa){const r=Ce.fromString(e,...t);return gd(r),new At(n,null,new Z(r))}{if(!(n instanceof At||n instanceof Ln))throw new J(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ce.fromString(e,...t));return gd(r),new At(n.firestore,n instanceof Ln?n.converter:null,new Z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="AsyncQueue";class Td{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new lg(this,"async_queue_retry"),this.ec=()=>{const r=Ja();r&&Q(vd,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const t=Ja();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=Ja();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new Mn;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!ns(e))throw e;Q(vd,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,un("INTERNAL UNHANDLED ERROR: ",Ed(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=t,t}enqueueAfterDelay(e,t,r){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const s=Ic.createAndSchedule(this,e,t,r,i=>this.oc(i));return this.Hu.push(s),s}nc(){this.Ju&&te(47125,{_c:Ed(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function Ed(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class hi extends oa{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Td,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Td(e),this._firestoreClient=void 0,await e}}}function GA(n,e){const t=typeof n=="object"?n:ip(),r=typeof n=="string"?n:vo,s=nc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=yT("firestore");i&&KA(s,...i)}return s}function Pg(n){if(n._terminated)throw new J(M.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||QA(n),n._firestoreClient}function QA(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,h,f){return new pI(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,bg(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new $A(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xr(Qe.fromBase64String(e))}catch(t){throw new J(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Xr(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new J(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new J(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new J(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=/^__.*__$/;class YA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Jn(e,this.data,this.fieldMask,t,this.fieldTransforms):new ai(e,this.data,t,this.fieldTransforms)}}class kg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Jn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Dg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te(40011,{hc:n})}}class Pc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new Pc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tc({path:r,Ec:!1});return s.dc(e),s}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tc({path:r,Ec:!1});return s.Pc(),s}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return Co(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(Dg(this.hc)&&JA.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class XA{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||na(e)}gc(e,t,r,s=!1){return new Pc({hc:e,methodName:t,fc:r,path:Ge.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kc(n){const e=n._freezeSettings(),t=na(n._databaseId);return new XA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ZA(n,e,t,r,s,i={}){const a=n.gc(i.merge||i.mergeFields?2:0,e,t,s);Vc("Data must be an object, but it was:",a,r);const l=Vg(r,a);let c,h;if(i.merge)c=new wt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const m=Nl(e,g,t);if(!a.contains(m))throw new J(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Og(f,m)||f.push(m)}c=new wt(f),h=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,h=a.fieldTransforms;return new YA(new mt(l),c,h)}class ua extends ca{_toFieldTransform(e){if(e.hc!==2)throw e.hc===1?e.Vc(`${this._methodName}() can only appear at the top level of your update data`):e.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ua}}class Dc extends ca{_toFieldTransform(e){return new BI(e.path,new Js)}isEqual(e){return e instanceof Dc}}function e0(n,e,t,r){const s=n.gc(1,e,t);Vc("Data must be an object, but it was:",s,r);const i=[],a=mt.empty();Qn(r,(c,h)=>{const f=Nc(e,c,t);h=at(h);const g=s.Ac(f);if(h instanceof ua)i.push(f);else{const m=di(h,g);m!=null&&(i.push(f),a.set(f,m))}});const l=new wt(i);return new kg(a,l,s.fieldTransforms)}function t0(n,e,t,r,s,i){const a=n.gc(1,e,t),l=[Nl(e,r,t)],c=[s];if(i.length%2!=0)throw new J(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Nl(e,i[m])),c.push(i[m+1]);const h=[],f=mt.empty();for(let m=l.length-1;m>=0;--m)if(!Og(h,l[m])){const w=l[m];let P=c[m];P=at(P);const D=a.Ac(w);if(P instanceof ua)h.push(w);else{const k=di(P,D);k!=null&&(h.push(w),f.set(w,k))}}const g=new wt(h);return new kg(f,g,a.fieldTransforms)}function n0(n,e,t,r=!1){return di(t,n.gc(r?4:3,e))}function di(n,e){if(Ng(n=at(n)))return Vc("Unsupported field value:",e,n),Vg(n,e);if(n instanceof ca)return function(r,s){if(!Dg(s.hc))throw s.Vc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=di(l,s.Rc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=at(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return LI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ue.fromDate(r);return{timestampValue:Ao(s.serializer,i)}}if(r instanceof Ue){const i=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ao(s.serializer,i)}}if(r instanceof Sc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xr)return{bytesValue:Yp(s.serializer,r._byteString)};if(r instanceof At){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Vc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:fc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Cc)return function(a,l){return{mapValue:{fields:{[bp]:{stringValue:Rp},[To]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Vc("VectorValues must only contain numeric values.");return cc(l.serializer,h)})}}}}}}(r,s);throw s.Vc(`Unsupported field value: ${ia(r)}`)}(n,e)}function Vg(n,e){const t={};return vp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qn(n,(r,s)=>{const i=di(s,e.Ic(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Ng(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ue||n instanceof Sc||n instanceof Xr||n instanceof At||n instanceof ca||n instanceof Cc)}function Vc(n,e,t){if(!Ng(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=ia(t);throw r==="an object"?e.Vc(n+" a custom object"):e.Vc(n+" "+r)}}function Nl(n,e,t){if((e=at(e))instanceof la)return e._internalPath;if(typeof e=="string")return Nc(n,e);throw Co("Field path arguments must be of type string or ",n,!1,void 0,t)}const r0=new RegExp("[~\\*/\\[\\]]");function Nc(n,e,t){if(e.search(r0)>=0)throw Co(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new la(...e.split("."))._internalPath}catch{throw Co(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Co(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new J(M.INVALID_ARGUMENT,l+n+c)}function Og(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new s0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Oc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class s0 extends xg{data(){return super.data()}}function Oc(n,e){return typeof e=="string"?Nc(n,e):e instanceof la?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new J(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xc{}class o0 extends xc{}function a0(n,e,...t){let r=[];e instanceof xc&&r.push(e),r=r.concat(t),function(i){const a=i.filter(c=>c instanceof Mc).length,l=i.filter(c=>c instanceof ha).length;if(a>1||a>0&&l>0)throw new J(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ha extends o0{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ha(e,t,r)}_apply(e){const t=this._parse(e);return Mg(e._query,t),new ss(e.firestore,e.converter,Il(e._query,t))}_parse(e){const t=kc(e.firestore);return function(i,a,l,c,h,f,g){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new J(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){wd(g,f);const P=[];for(const D of g)P.push(Id(c,i,D));m={arrayValue:{values:P}}}else m=Id(c,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||wd(g,f),m=n0(l,a,g,f==="in"||f==="not-in");return xe.create(h,f,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function l0(n,e,t){const r=e,s=Oc("where",n);return ha._create(s,r,t)}class Mc extends xc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Mc(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Mt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)Mg(a,c),a=Il(a,c)}(e._query,t),new ss(e.firestore,e.converter,Il(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Id(n,e,t){if(typeof(t=at(t))=="string"){if(t==="")throw new J(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xp(e)&&t.indexOf("/")!==-1)throw new J(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ce.fromString(t));if(!Z.isDocumentKey(r))throw new J(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Lh(n,new Z(r))}if(t instanceof At)return Lh(n,t._key);throw new J(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ia(t)}.`)}function wd(n,e){if(!Array.isArray(n)||n.length===0)throw new J(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Mg(n,e){const t=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new J(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class c0{convertValue(e,t="none"){switch(zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Hn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Qn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[To].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Ne(a.doubleValue));return new Cc(i)}convertGeoPoint(e){return new Sc(Ne(e.latitude),Ne(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Jo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ks(e));default:return null}}convertTimestamp(e){const t=qn(e);return new Ue(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ce.fromString(e);Te(rg(r),9688,{name:e});const s=new Gs(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(t)||un(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class h0 extends xg{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Zi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Oc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Zi extends h0{data(e={}){return super.data(e)}}class d0{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ji(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Zi(this._firestore,this._userDataWriter,r.key,r,new ji(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new J(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new Zi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ji(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Zi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ji(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:f0(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function f0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te(61501,{type:n})}}class p0 extends c0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,t)}}function g0(n){n=_r(n,ss);const e=_r(n.firestore,hi),t=Pg(e),r=new p0(e);return i0(n._query),zA(t,n._query).then(s=>new d0(e,r,n,s))}function Lg(n,e,t,...r){n=_r(n,At);const s=_r(n.firestore,hi),i=kc(s);let a;return a=typeof(e=at(e))=="string"||e instanceof la?t0(i,"updateDoc",n._key,e,t,r):e0(i,"updateDoc",n._key,e),Lc(s,[a.toMutation(n._key,xt.exists(!0))])}function m0(n){return Lc(_r(n.firestore,hi),[new uc(n._key,xt.none())])}function _0(n,e){const t=_r(n.firestore,hi),r=aa(n),s=u0(n.converter,e);return Lc(t,[ZA(kc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,xt.exists(!1))]).then(()=>r)}function Lc(n,e){return function(r,s){const i=new Mn;return r.asyncQueue.enqueueAndForget(async()=>DA(await qA(r),s,i)),i.promise}(Pg(n),e)}function y0(){return new Dc("serverTimestamp")}(function(e,t=!0){(function(s){es=s})(Zr),zr(new pr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new hi(new YE(r.getProvider("auth-internal")),new eI(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new J(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gs(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),On(bh,Rh,e),On(bh,Rh,"esm2017")})();function Fc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Fg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const v0=Fg,Ug=new si("auth","Firebase",Fg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new ec("@firebase/auth");function T0(n,...e){Po.logLevel<=he.WARN&&Po.warn(`Auth (${Zr}): ${n}`,...e)}function eo(n,...e){Po.logLevel<=he.ERROR&&Po.error(`Auth (${Zr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(n,...e){throw Uc(n,...e)}function zt(n,...e){return Uc(n,...e)}function Bg(n,e,t){const r=Object.assign(Object.assign({},v0()),{[e]:t});return new si("auth","Firebase",r).create(e,{appName:n.name})}function Fn(n){return Bg(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Uc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ug.create(n,...e)}function se(n,e,...t){if(!n)throw Uc(e,...t)}function sn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw eo(e),new Error(e)}function fn(n,e){n||sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function E0(){return Ad()==="http:"||Ad()==="https:"}function Ad(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(E0()||RT()||"connection"in navigator)?navigator.onLine:!0}function w0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t){this.shortDelay=e,this.longDelay=t,fn(t>e,"Short delay should be less than long delay!"),this.isMobile=wT()||ST()}get(){return I0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(n,e){fn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],R0=new fi(3e4,6e4);function da(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function is(n,e,t,r,s={}){return jg(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=ii(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},i);return bT()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&ri(n.emulatorConfig.host)&&(h.credentials="include"),$g.fetch()(await Hg(n,n.config.apiHost,t,l),h)})}async function jg(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},A0),e);try{const s=new S0(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw qi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw qi(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw qi(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw qi(n,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Bg(n,f,h);dn(n,f)}}catch(s){if(s instanceof gn)throw s;dn(n,"network-request-failed",{message:String(s)})}}async function qg(n,e,t,r,s={}){const i=await is(n,e,t,r,s);return"mfaPendingCredential"in i&&dn(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Hg(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Bc(n.config,s):`${n.config.apiScheme}://${s}`;return b0.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class S0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(zt(this.auth,"network-request-failed")),R0.get())})}}function qi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=zt(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C0(n,e){return is(n,"POST","/v1/accounts:delete",e)}async function ko(n,e){return is(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function P0(n,e=!1){const t=at(n),r=await t.getIdToken(e),s=$c(r);se(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Fs(Xa(s.auth_time)),issuedAtTime:Fs(Xa(s.iat)),expirationTime:Fs(Xa(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xa(n){return Number(n)*1e3}function $c(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return eo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Jf(t);return s?JSON.parse(s):(eo("Failed to decode base64 JWT payload"),null)}catch(s){return eo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function bd(n){const e=$c(n);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof gn&&k0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function k0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fs(this.lastLoginAt),this.creationTime=Fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Zs(n,ko(t,{idToken:r}));se(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?zg(i.providerUserInfo):[],l=N0(n.providerData,a),c=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new xl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function V0(n){const e=at(n);await Do(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function N0(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function zg(n){return n.map(e=>{var{providerId:t}=e,r=Fc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O0(n,e){const t=await jg(n,{},async()=>{const r=ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Hg(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",$g.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function x0(n,e){return is(n,"POST","/v2/accounts:revokeToken",da(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){se(e.length!==0,"internal-error");const t=bd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await O0(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new $r;return r&&(se(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(se(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(se(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $r,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(n,e){se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Vt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Fc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new D0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new xl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Zs(this,this.stsTokenManager.getToken(this.auth,e));return se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return P0(this,e)}reload(){return V0(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Do(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dt(this.auth.app))return Promise.reject(Fn(this.auth));const e=await this.getIdToken();return await Zs(this,C0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,c,h,f;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(s=t.email)!==null&&s!==void 0?s:void 0,w=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,P=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(l=t.tenantId)!==null&&l!==void 0?l:void 0,k=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,C=(h=t.createdAt)!==null&&h!==void 0?h:void 0,F=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:W,isAnonymous:ce,providerData:_e,stsTokenManager:A}=t;se(j&&A,e,"internal-error");const _=$r.fromJSON(this.name,A);se(typeof j=="string",e,"internal-error"),En(g,e.name),En(m,e.name),se(typeof W=="boolean",e,"internal-error"),se(typeof ce=="boolean",e,"internal-error"),En(w,e.name),En(P,e.name),En(D,e.name),En(k,e.name),En(C,e.name),En(F,e.name);const T=new Vt({uid:j,auth:e,email:m,emailVerified:W,displayName:g,isAnonymous:ce,photoURL:P,phoneNumber:w,tenantId:D,stsTokenManager:_,createdAt:C,lastLoginAt:F});return _e&&Array.isArray(_e)&&(T.providerData=_e.map(I=>Object.assign({},I))),k&&(T._redirectEventId=k),T}static async _fromIdTokenResponse(e,t,r=!1){const s=new $r;s.updateFromServerResponse(t);const i=new Vt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Do(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];se(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?zg(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new $r;l.updateFromIdToken(r);const c=new Vt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new xl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=new Map;function on(n){fn(n instanceof Function,"Expected a class definition");let e=Rd.get(n);return e?(fn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Rd.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Wg.type="NONE";const Sd=Wg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n,e,t){return`firebase:${n}:${e}:${t}`}class jr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=to(this.userKey,s.apiKey,i),this.fullPersistenceKey=to("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ko(this.auth,{idToken:e}).catch(()=>{});return t?Vt._fromGetAccountInfoResponse(this.auth,t,e):null}return Vt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new jr(on(Sd),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||on(Sd);const a=to(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){let g;if(typeof f=="string"){const m=await ko(e,{idToken:f}).catch(()=>{});if(!m)break;g=await Vt._fromGetAccountInfoResponse(e,m,f)}else g=Vt._fromJSON(e,f);h!==i&&(l=g),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new jr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new jr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xg(e))return"Blackberry";if(Zg(e))return"Webos";if(Gg(e))return"Safari";if((e.includes("chrome/")||Qg(e))&&!e.includes("edge/"))return"Chrome";if(Yg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Kg(n=ot()){return/firefox\//i.test(n)}function Gg(n=ot()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qg(n=ot()){return/crios\//i.test(n)}function Jg(n=ot()){return/iemobile/i.test(n)}function Yg(n=ot()){return/android/i.test(n)}function Xg(n=ot()){return/blackberry/i.test(n)}function Zg(n=ot()){return/webos/i.test(n)}function jc(n=ot()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function M0(n=ot()){var e;return jc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function L0(){return CT()&&document.documentMode===10}function em(n=ot()){return jc(n)||Yg(n)||Zg(n)||Xg(n)||/windows phone/i.test(n)||Jg(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(n,e=[]){let t;switch(n){case"Browser":t=Cd(ot());break;case"Worker":t=`${Cd(ot())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Zr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U0(n,e={}){return is(n,"GET","/v2/passwordPolicy",da(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=6;class $0{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:B0,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pd(this),this.idTokenSubscription=new Pd(this),this.beforeStateQueue=new F0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ug,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=on(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await jr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ko(this,{idToken:e}),r=await Vt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Dt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Do(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=w0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dt(this.app))return Promise.reject(Fn(this));const t=e?at(e):null;return t&&se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dt(this.app)?Promise.reject(Fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dt(this.app)?Promise.reject(Fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await U0(this),t=new $0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new si("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await x0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&on(e)||this._popupRedirectResolver;se(t,this,"argument-error"),this.redirectPersistenceManager=await jr.create(this,[on(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&T0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function fa(n){return at(n)}class Pd{constructor(e){this.auth=e,this.observer=null,this.addObserver=MT(t=>this.observer=t)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function q0(n){qc=n}function H0(n){return qc.loadJS(n)}function z0(){return qc.gapiScript}function W0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(n,e){const t=nc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(fr(i,e??{}))return s;dn(s,"already-initialized")}return t.initialize({options:e})}function G0(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(on);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Q0(n,e,t){const r=fa(n);se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=nm(e),{host:a,port:l}=J0(e),c=l===null?"":`:${l}`,h={url:`${i}//${a}${c}/`},f=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),se(fr(h,r.config.emulator)&&fr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ri(a)?(ep(`${i}//${a}${c}`),tp("Auth",!0)):Y0()}function nm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function J0(n){const e=nm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:kd(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:kd(a)}}}function kd(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Y0(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,t){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(n,e){return qg(n,"POST","/v1/accounts:signInWithIdp",da(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="http://localhost";class yr extends rm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):dn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Fc(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new yr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return qr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,qr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,qr(e,t)}buildRequest(){const e={requestUri:X0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ii(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends sm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends pi{constructor(){super("facebook.com")}static credential(e){return yr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return yr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Rn.credential(t,r)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends pi{constructor(){super("github.com")}static credential(e){return yr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.GITHUB_SIGN_IN_METHOD="github.com";Sn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends pi{constructor(){super("twitter.com")}static credential(e,t){return yr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Cn.credential(t,r)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z0(n,e){return qg(n,"POST","/v1/accounts:signUp",da(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Vt._fromIdTokenResponse(e,r,s),a=Dd(r);return new Gn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Dd(r);return new Gn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Dd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eb(n){var e;if(Dt(n.app))return Promise.reject(Fn(n));const t=fa(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Gn({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await Z0(t,{returnSecureToken:!0}),s=await Gn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo extends gn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Vo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Vo(e,t,r,s)}}function im(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Vo._fromErrorAndOperation(n,i,e,r):i})}async function tb(n,e,t=!1){const r=await Zs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Gn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nb(n,e,t=!1){const{auth:r}=n;if(Dt(r.app))return Promise.reject(Fn(r));const s="reauthenticate";try{const i=await Zs(n,im(r,s,e,n),t);se(i.idToken,r,"internal-error");const a=$c(i.idToken);se(a,r,"internal-error");const{sub:l}=a;return se(n.uid===l,r,"user-mismatch"),Gn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&dn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rb(n,e,t=!1){if(Dt(n.app))return Promise.reject(Fn(n));const r="signIn",s=await im(n,r,e),i=await Gn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function sb(n,e,t,r){return at(n).onIdTokenChanged(e,t,r)}function ib(n,e,t){return at(n).beforeAuthStateChanged(e,t)}function ob(n,e,t,r){return at(n).onAuthStateChanged(e,t,r)}const No="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(No,"1"),this.storage.removeItem(No),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=1e3,lb=10;class am extends om{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=em(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);L0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,lb):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ab)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}am.type="LOCAL";const cb=am;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm extends om{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}lm.type="SESSION";const cm=lm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new pa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),c=await ub(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=Hc("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const m=g;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}function db(n){Wt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function fb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pb(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function gb(){return um()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="firebaseLocalStorageDb",mb=1,Oo="firebaseLocalStorage",dm="fbase_key";class gi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ga(n,e){return n.transaction([Oo],e?"readwrite":"readonly").objectStore(Oo)}function _b(){const n=indexedDB.deleteDatabase(hm);return new gi(n).toPromise()}function Ml(){const n=indexedDB.open(hm,mb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Oo,{keyPath:dm})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Oo)?e(r):(r.close(),await _b(),e(await Ml()))})})}async function Vd(n,e,t){const r=ga(n,!0).put({[dm]:e,value:t});return new gi(r).toPromise()}async function yb(n,e){const t=ga(n,!1).get(e),r=await new gi(t).toPromise();return r===void 0?null:r.value}function Nd(n,e){const t=ga(n,!0).delete(e);return new gi(t).toPromise()}const vb=800,Tb=3;class fm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ml(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Tb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return um()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pa._getInstance(gb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await fb(),!this.activeServiceWorker)return;this.sender=new hb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ml();return await Vd(e,No,"1"),await Nd(e,No),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>yb(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Nd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ga(s,!1).getAll();return new gi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fm.type="LOCAL";const Eb=fm;new fi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ib(n,e){return e?on(e):(se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc extends rm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return qr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function wb(n){return rb(n.auth,new zc(n),n.bypassAuthState)}function Ab(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),nb(t,new zc(n),n.bypassAuthState)}async function bb(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),tb(t,new zc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wb;case"linkViaPopup":case"linkViaRedirect":return bb;case"reauthViaPopup":case"reauthViaRedirect":return Ab;default:dn(this.auth,"internal-error")}}resolve(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=new fi(2e3,1e4);class Vr extends pm{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Vr.currentPopupAction&&Vr.currentPopupAction.cancel(),Vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){fn(this.filter.length===1,"Popup operations only handle one event");const e=Hc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Rb.get())};e()}}Vr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb="pendingRedirect",no=new Map;class Cb extends pm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=no.get(this.auth._key());if(!e){try{const r=await Pb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}no.set(this.auth._key(),e)}return this.bypassAuthState||no.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Pb(n,e){const t=Vb(e),r=Db(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function kb(n,e){no.set(n._key(),e)}function Db(n){return on(n._redirectPersistence)}function Vb(n){return to(Sb,n.config.apiKey,n.name)}async function Nb(n,e,t=!1){if(Dt(n.app))return Promise.reject(Fn(n));const r=fa(n),s=Ib(r,e),a=await new Cb(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=10*60*1e3;class xb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Mb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!gm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(zt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ob&&this.cachedEventUids.clear(),this.cachedEventUids.has(Od(e))}saveEventToCache(e){this.cachedEventUids.add(Od(e)),this.lastProcessedEventTime=Date.now()}}function Od(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function gm({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Mb(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gm(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lb(n,e={}){return is(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ub=/^https?/;async function Bb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Lb(n);for(const t of e)try{if($b(t))return}catch{}dn(n,"unauthorized-domain")}function $b(n){const e=Ol(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Ub.test(t))return!1;if(Fb.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=new fi(3e4,6e4);function xd(){const n=Wt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function qb(n){return new Promise((e,t)=>{var r,s,i;function a(){xd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xd(),t(zt(n,"network-request-failed"))},timeout:jb.get()})}if(!((s=(r=Wt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Wt().gapi)===null||i===void 0)&&i.load)a();else{const l=W0("iframefcb");return Wt()[l]=()=>{gapi.load?a():t(zt(n,"network-request-failed"))},H0(`${z0()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw ro=null,e})}let ro=null;function Hb(n){return ro=ro||qb(n),ro}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=new fi(5e3,15e3),Wb="__/auth/iframe",Kb="emulator/auth/iframe",Gb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jb(n){const e=n.config;se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Bc(e,Kb):`https://${n.config.authDomain}/${Wb}`,r={apiKey:e.apiKey,appName:n.name,v:Zr},s=Qb.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ii(r).slice(1)}`}async function Yb(n){const e=await Hb(n),t=Wt().gapi;return se(t,n,"internal-error"),e.open({where:document.body,url:Jb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=zt(n,"network-request-failed"),l=Wt().setTimeout(()=>{i(a)},zb.get());function c(){Wt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zb=500,eR=600,tR="_blank",nR="http://localhost";class Md{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rR(n,e,t,r=Zb,s=eR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Xb),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ot().toLowerCase();t&&(l=Qg(h)?tR:t),Kg(h)&&(e=e||nR,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[w,P])=>`${m}${w}=${P},`,"");if(M0(h)&&l!=="_self")return sR(e||"",l),new Md(null);const g=window.open(e||"",l,f);se(g,n,"popup-blocked");try{g.focus()}catch{}return new Md(g)}function sR(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR="__/auth/handler",oR="emulator/auth/handler",aR=encodeURIComponent("fac");async function Ld(n,e,t,r,s,i){se(n.config.authDomain,n,"auth-domain-config-required"),se(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Zr,eventId:s};if(e instanceof sm){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",xT(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof pi){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),h=c?`#${aR}=${encodeURIComponent(c)}`:"";return`${lR(n)}?${ii(l).slice(1)}${h}`}function lR({config:n}){return n.emulator?Bc(n,oR):`https://${n.authDomain}/${iR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="webStorageSupport";class cR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cm,this._completeRedirectFn=Nb,this._overrideRedirectResult=kb}async _openPopup(e,t,r,s){var i;fn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Ld(e,t,r,Ol(),s);return rR(e,a,Hc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Ld(e,t,r,Ol(),s);return db(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Yb(e),r=new xb(e);return t.register("authEvent",s=>(se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Za,{type:Za},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Za];a!==void 0&&t(!!a),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Bb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return em()||Gg()||jc()}}const uR=cR;var Fd="@firebase/auth",Ud="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fR(n){zr(new pr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;se(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tm(n)},h=new j0(r,s,i,c);return G0(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),zr(new pr("auth-internal",e=>{const t=fa(e.getProvider("auth").getImmediate());return(r=>new hR(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),On(Fd,Ud,dR(n)),On(Fd,Ud,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=5*60,gR=Zf("authIdTokenMaxAge")||pR;let Bd=null;const mR=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>gR)return;const s=t==null?void 0:t.token;Bd!==s&&(Bd=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _R(n=ip()){const e=nc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=K0(n,{popupRedirectResolver:uR,persistence:[Eb,cb,cm]}),r=Zf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=mR(i.toString());ib(t,a,()=>a(t.currentUser)),sb(t,l=>a(l))}}const s=Yf("auth");return s&&Q0(t,`http://${s}`),t}function yR(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}q0({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=zt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",yR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fR("Browser");const vR={apiKey:"AIzaSyBGDDe4iVXrB2rWKh9gc_ToojzGmzPnOL4",authDomain:"guia-estudos-643c5.firebaseapp.com",projectId:"guia-estudos-643c5",storageBucket:"guia-estudos-643c5.firebaseapp.com",messagingSenderId:"463886830136",appId:"1:463886830136:web:f25495dbed907fb78ab4cd"},mm=sp(vR),mi=GA(mm),_t=_R(mm),TR=async()=>{try{await eb(_t),console.log("Autenticação anônima realizada com sucesso")}catch(n){console.error("Erro na autenticação anônima:",n)}};TR();const _m=Cg(mi,"tasks"),ER=async()=>{try{if(!_t.currentUser)return console.log("Aguardando autenticação..."),[];const n=_t.currentUser.uid,e=a0(_m,l0("userId","==",n));return(await g0(e)).docs.map(r=>{const s=r.data();let i;return s.createdAt&&typeof s.createdAt.toDate=="function"?i=s.createdAt.toDate().toISOString():s.createdAt&&s.createdAt instanceof Date?i=s.createdAt.toISOString():s.createdAt&&typeof s.createdAt=="string"?i=s.createdAt:i=new Date().toISOString(),{id:r.id,...s,createdAt:i,dueDate:s.dueDate||""}}).sort((r,s)=>new Date(s.createdAt)-new Date(r.createdAt))}catch(n){throw console.error("Erro ao buscar tarefas:",n),n}},IR=async n=>{try{if(console.log("taskService: Iniciando adição de tarefa"),!_t.currentUser)throw console.error("taskService: Usuário não autenticado ao tentar adicionar tarefa"),new Error("Usuário não autenticado");console.log("taskService: Usuário autenticado:",_t.currentUser.uid);const e={title:n.title||"Nova Tarefa",description:n.description||"",dueDate:n.dueDate||"",priority:n.priority||"baixa",status:n.status||"pendente",createdAt:y0(),userId:_t.currentUser.uid};console.log("taskService: Tentando adicionar tarefa ao Firestore:",JSON.stringify(e));try{const t=await _0(_m,e);return console.log("taskService: Tarefa adicionada com sucesso, ID:",t.id),t}catch(t){throw console.error("taskService: Erro do Firestore ao adicionar tarefa:",t),console.error("taskService: Código do erro:",t.code),console.error("taskService: Mensagem do erro:",t.message),t.code==="permission-denied"?(console.error("taskService: Erro de permissão. Verifique as regras do Firestore."),new Error("Permissão negada ao adicionar tarefa. Verifique as regras do Firestore.")):t}}catch(e){throw console.error("taskService: Erro geral ao adicionar tarefa:",e),e}},wR=async(n,e)=>{try{if(!_t.currentUser)throw new Error("Usuário não autenticado");const t=aa(mi,"tasks",n);return await Lg(t,e)}catch(t){throw console.error("Erro ao atualizar tarefa:",t),t}},AR=async(n,e)=>{try{if(!_t.currentUser)throw new Error("Usuário não autenticado");const t=aa(mi,"tasks",n);return await Lg(t,{status:e})}catch(t){throw console.error("Erro ao atualizar status da tarefa:",t),t}},bR=async n=>{try{if(!_t.currentUser)throw new Error("Usuário não autenticado");const e=aa(mi,"tasks",n);return await m0(e)}catch(e){throw console.error("Erro ao excluir tarefa:",e),e}},RR=async()=>{try{if(!_t.currentUser){console.log("Usuário não autenticado. Não é possível inicializar a coleção.");return}Cg(mi,"tasks"),console.log("Coleção de tarefas inicializada com sucesso!")}catch(n){console.error("Erro ao inicializar a coleção de tarefas:",n)}},SR={class:"todo-app"},CR={key:0,class:"error-message"},PR={key:1,class:"loading-indicator"},kR={key:2,class:"auth-message"},DR={class:"stats-container"},VR={class:"stat-box"},NR={class:"stat-value"},OR={class:"stat-box completed"},xR={class:"stat-value"},MR={class:"stat-box pending"},LR={class:"stat-value"},FR={class:"stat-box overdue"},UR={class:"stat-value"},BR={class:"stat-box in-progress"},$R={class:"stat-value"},jR={class:"mobile-actions"},qR={class:"view-toggle"},HR={key:0,class:"modal-header"},zR={class:"task-container"},WR={__name:"App",setup(n){const e=Et([]),t=Et("all"),r=Et(!1),s=Et(!1),i=Et("list"),a=Et(!0),l=Et(null),c=Et(!1);If(()=>{a.value=!0,ob(_t,async k=>{if(k){c.value=!0,console.log("Usuário autenticado:",k.uid);try{await RR(),e.value=await ER(),a.value=!1}catch(C){console.error("Erro ao carregar tarefas:",C),l.value="Erro ao carregar tarefas. Por favor, tente novamente.",a.value=!1}}else c.value=!1,a.value=!1,console.log("Usuário não autenticado")})});const h=async k=>{try{if(console.log("Iniciando adição de tarefa:",k),a.value=!0,!_t.currentUser){console.error("Usuário não autenticado ao tentar adicionar tarefa"),l.value="Você precisa estar autenticado para adicionar tarefas.",a.value=!1;return}console.log("Usuário autenticado:",_t.currentUser.uid);const C={title:k.title,description:k.description||"",dueDate:k.dueDate,priority:k.priority||"média",status:"pendente"};console.log("Enviando tarefa para o Firebase:",C);const F=await IR(C);console.log("Tarefa adicionada com sucesso, ID:",F.id);const j={id:F.id,...C,createdAt:new Date().toISOString(),userId:_t.currentUser.uid};console.log("Adicionando tarefa ao estado local:",j),e.value.unshift(j),l.value=null,a.value=!1,alert("Tarefa adicionada com sucesso!")}catch(C){console.error("Erro ao adicionar tarefa:",C),console.error("Detalhes do erro:",C.code,C.message),l.value=`Erro ao adicionar tarefa: ${C.message}. Por favor, tente novamente.`,a.value=!1}},f=async k=>{try{a.value=!0,await bR(k),e.value=e.value.filter(C=>C.id!==k),a.value=!1}catch(C){console.error("Erro ao remover tarefa:",C),l.value="Erro ao remover tarefa. Por favor, tente novamente.",a.value=!1}},g=async(k,C)=>{try{a.value=!0,await AR(k,C);const F=e.value.find(j=>j.id===k);F&&(F.status=C),a.value=!1}catch(F){console.error("Erro ao atualizar status da tarefa:",F),l.value="Erro ao atualizar status. Por favor, tente novamente.",a.value=!1}},m=async k=>{try{a.value=!0;const{id:C,...F}=k;await wR(C,F);const j=e.value.findIndex(W=>W.id===C);j!==-1&&(e.value[j]={...e.value[j],...F}),a.value=!1}catch(C){console.error("Erro ao editar tarefa:",C),l.value="Erro ao editar tarefa. Por favor, tente novamente.",a.value=!1}},w=fo(()=>t.value==="all"?e.value:e.value.filter(k=>k.status===t.value)),P=()=>{const k=new Date;k.setHours(0,0,0,0),e.value.forEach(C=>{if(C.status!=="concluida"){const F=new Date(C.dueDate);F.setHours(0,0,0,0),F<k&&(C.status="atrasada")}})};setInterval(P,6e4),P();const D=fo(()=>{const k=e.value.length,C=e.value.filter(ce=>ce.status==="concluida").length,F=e.value.filter(ce=>ce.status==="pendente").length,j=e.value.filter(ce=>ce.status==="atrasada").length,W=e.value.filter(ce=>ce.status==="em_andamento").length;return{total:k,completed:C,pending:F,overdue:j,inProgress:W}});return(k,C)=>(Ie(),Re("div",SR,[C[21]||(C[21]=O("header",null,[O("img",{alt:"Vue logo",class:"logo",src:cv,width:"50",height:"50"}),O("h1",null,"Gerenciador de Tarefas")],-1)),O("main",null,[l.value?(Ie(),Re("div",CR,[lr(ke(l.value)+" ",1),O("button",{onClick:C[0]||(C[0]=F=>l.value=null),class:"close-error"},"×")])):An("",!0),a.value?(Ie(),Re("div",PR,C[9]||(C[9]=[O("div",{class:"spinner"},null,-1),O("span",null,"Carregando...",-1)]))):An("",!0),!c.value&&!a.value?(Ie(),Re("div",kR,C[10]||(C[10]=[O("div",{class:"auth-icon"},"🔒",-1),O("div",{class:"auth-text"},[O("h3",null,"Autenticando..."),O("p",null,"Estamos configurando seu acesso seguro ao sistema. Aguarde um momento.")],-1)]))):An("",!0),O("div",DR,[O("div",VR,[O("span",NR,ke(D.value.total),1),C[11]||(C[11]=O("span",{class:"stat-label"},"Total",-1))]),O("div",OR,[O("span",xR,ke(D.value.completed),1),C[12]||(C[12]=O("span",{class:"stat-label"},"Concluídas",-1))]),O("div",MR,[O("span",LR,ke(D.value.pending),1),C[13]||(C[13]=O("span",{class:"stat-label"},"Pendentes",-1))]),O("div",FR,[O("span",UR,ke(D.value.overdue),1),C[14]||(C[14]=O("span",{class:"stat-label"},"Atrasadas",-1))]),O("div",BR,[O("span",$R,ke(D.value.inProgress),1),C[15]||(C[15]=O("span",{class:"stat-label"},"Em Andamento",-1))])]),O("div",jR,[O("button",{onClick:C[1]||(C[1]=F=>r.value=!0),class:"action-button add-button"},C[16]||(C[16]=[O("span",{class:"icon"},"+",-1),lr(" Nova Tarefa ")])),O("button",{onClick:C[2]||(C[2]=F=>s.value=!s.value),class:"action-button filter-button"},[C[17]||(C[17]=O("span",{class:"icon"},"🔍",-1)),lr(" "+ke(s.value?"Ocultar Filtros":"Mostrar Filtros"),1)])]),O("div",qR,[O("button",{onClick:C[3]||(C[3]=F=>i.value="list"),class:gt(["toggle-btn",{active:i.value==="list"}])},C[18]||(C[18]=[O("span",{class:"icon"},"📜",-1),lr(" Lista ")]),2),O("button",{onClick:C[4]||(C[4]=F=>i.value="kanban"),class:gt(["toggle-btn",{active:i.value==="kanban"}])},C[19]||(C[19]=[O("span",{class:"icon"},"📋",-1),lr(" Kanban ")]),2)]),O("div",{class:gt(["form-container",{"is-modal":r.value}])},[r.value?(Ie(),Re("div",{key:0,class:"modal-overlay",onClick:C[5]||(C[5]=F=>r.value=!1)})):An("",!0),O("div",{class:gt(["modal-content",{show:r.value}])},[r.value?(Ie(),Re("div",HR,[C[20]||(C[20]=O("h2",null,"Nova Tarefa",-1)),O("button",{onClick:C[6]||(C[6]=F=>r.value=!1),class:"close-button"},"×")])):An("",!0),Ot(vv,{onAddTask:C[7]||(C[7]=F=>{h(F),r.value=!1})})],2)],2),O("div",zR,[O("div",{class:gt(["filter-container",{"show-filters":s.value}])},[Ot(Gv,{filter:t.value,onSetFilter:C[8]||(C[8]=F=>{t.value=F,s.value=!1})},null,8,["filter"])],2),i.value==="list"?(Ie(),ll(qv,{key:0,tasks:w.value,onRemoveTask:f,onUpdateStatus:g,onEditTask:m},null,8,["tasks"])):(Ie(),ll(cT,{key:1,tasks:e.value,onRemoveTask:f,onUpdateStatus:g,onEditTask:m},null,8,["tasks"]))])])]))}};ov(WR).mount("#app");
