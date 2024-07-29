"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2144],{2144:(cn,pe,ge)=>{ge.d(pe,{c:()=>Ee});const ee=typeof window<"u"?window:void 0;let O;typeof document<"u"&&document;const U=(d,a,p)=>{const F=a.startsWith("animation")?(d=>(void 0===O&&(O=void 0===d.style.animationName&&void 0!==d.style.webkitAnimationName?"-webkit-":""),O))(d):"";d.style.setProperty(F+a,p)},P=(d=[],a)=>{if(void 0!==a){const p=Array.isArray(a)?a:[a];return[...d,...p]}return d},Ee=d=>{let a,p,F,z,V,M,o,b,v,C,t,i=[],N=[],q=[],y=!1,B={},G=[],H=[],J={},A=0,x=!1,T=!1,k=!0,w=!1,_=!0,D=!1;const ne=d,Q=[],W=[],K=[],g=[],c=[],te=[],re=[],se=[],oe=[],ie=[],h=[],Ae="function"==typeof AnimationEffect||void 0!==ee&&"function"==typeof ee.AnimationEffect,u="function"==typeof Element&&"function"==typeof Element.prototype.animate&&Ae,fe=()=>h,ae=(e,n)=>{const r=n.findIndex(s=>s.c===e);r>-1&&n.splice(r,1)},X=(e,n)=>((n?.oneTimeCallback?W:Q).push({c:e,o:n}),t),ce=()=>{u&&(h.forEach(e=>{e.cancel()}),h.length=0)},we=()=>{te.forEach(e=>{e?.parentNode&&e.parentNode.removeChild(e)}),te.length=0},Y=()=>void 0!==V?V:o?o.getFill():"both",I=()=>void 0!==b?b:void 0!==M?M:o?o.getDirection():"normal",Z=()=>x?"linear":void 0!==F?F:o?o.getEasing():"linear",S=()=>T?0:void 0!==v?v:void 0!==p?p:o?o.getDuration():0,$=()=>void 0!==z?z:o?o.getIterations():1,j=()=>void 0!==C?C:void 0!==a?a:o?o.getDelay():0,L=()=>{0!==A&&(A--,0===A&&((()=>{oe.forEach(f=>f()),ie.forEach(f=>f());const e=k?1:0,n=G,r=H,s=J;g.forEach(f=>{const m=f.classList;n.forEach(E=>m.add(E)),r.forEach(E=>m.remove(E));for(const E in s)s.hasOwnProperty(E)&&U(f,E,s[E])}),v=void 0,b=void 0,C=void 0,Q.forEach(f=>f.c(e,t)),W.forEach(f=>f.c(e,t)),W.length=0,_=!0,k&&(w=!0),k=!0})(),o&&o.animationFinish()))},le=()=>{(()=>{re.forEach(s=>s()),se.forEach(s=>s());const e=N,n=q,r=B;g.forEach(s=>{const f=s.classList;e.forEach(m=>f.add(m)),n.forEach(m=>f.remove(m));for(const m in r)r.hasOwnProperty(m)&&U(s,m,r[m])})})(),i.length>0&&u&&(g.forEach(e=>{const n=e.animate(i,{id:ne,delay:j(),duration:S(),easing:Z(),iterations:$(),fill:Y(),direction:I()});n.pause(),h.push(n)}),h.length>0&&(h[0].onfinish=()=>{L()})),y=!0},R=e=>{e=Math.min(Math.max(e,0),.9999),u&&h.forEach(n=>{n.currentTime=n.effect.getComputedTiming().delay+S()*e,n.pause()})},ue=e=>{h.forEach(n=>{n.effect.updateTiming({delay:j(),duration:S(),easing:Z(),iterations:$(),fill:Y(),direction:I()})}),void 0!==e&&R(e)},l=(e=!1,n=!0,r)=>(e&&c.forEach(s=>{s.update(e,n,r)}),u&&ue(r),t),de=()=>{y&&(u?h.forEach(e=>{e.pause()}):g.forEach(e=>{U(e,"animation-play-state","paused")}),D=!0)},he=e=>new Promise(n=>{e?.sync&&(T=!0,X(()=>T=!1,{oneTimeCallback:!0})),y||le(),w&&(u&&(R(0),ue()),w=!1),_&&(A=c.length+1,_=!1);const r=()=>{ae(s,W),n()},s=()=>{ae(r,K),n()};X(s,{oneTimeCallback:!0}),((e,n)=>{K.push({c:e,o:{oneTimeCallback:!0}})})(r),c.forEach(f=>{f.play()}),u?(h.forEach(e=>{e.play()}),(0===i.length||0===g.length)&&L()):L(),D=!1}),me=(e,n)=>{const r=i[0];return void 0===r||void 0!==r.offset&&0!==r.offset?i=[{offset:0,[e]:n},...i]:r[e]=n,t};return t={parentAnimation:o,elements:g,childAnimations:c,id:ne,animationFinish:L,from:me,to:(e,n)=>{const r=i[i.length-1];return void 0===r||void 0!==r.offset&&1!==r.offset?i=[...i,{offset:1,[e]:n}]:r[e]=n,t},fromTo:(e,n,r)=>me(e,n).to(e,r),parent:e=>(o=e,t),play:he,pause:()=>(c.forEach(e=>{e.pause()}),de(),t),stop:()=>{c.forEach(e=>{e.stop()}),y&&(ce(),y=!1),x=!1,T=!1,_=!0,b=void 0,v=void 0,C=void 0,A=0,w=!1,k=!0,D=!1,K.forEach(e=>e.c(0,t)),K.length=0},destroy:e=>(c.forEach(n=>{n.destroy(e)}),(e=>{ce(),e&&we()})(e),g.length=0,c.length=0,i.length=0,Q.length=0,W.length=0,y=!1,_=!0,t),keyframes:e=>{const n=i!==e;return i=e,n&&(e=>{u&&fe().forEach(n=>{const r=n.effect;if(r.setKeyframes)r.setKeyframes(e);else{const s=new KeyframeEffect(r.target,e,r.getTiming());n.effect=s}})})(i),t},addAnimation:e=>{if(null!=e)if(Array.isArray(e))for(const n of e)n.parent(t),c.push(n);else e.parent(t),c.push(e);return t},addElement:e=>{if(null!=e)if(1===e.nodeType)g.push(e);else if(e.length>=0)for(let n=0;n<e.length;n++)g.push(e[n]);else console.error("Invalid addElement value");return t},update:l,fill:e=>(V=e,l(!0),t),direction:e=>(M=e,l(!0),t),iterations:e=>(z=e,l(!0),t),duration:e=>(!u&&0===e&&(e=1),p=e,l(!0),t),easing:e=>(F=e,l(!0),t),delay:e=>(a=e,l(!0),t),getWebAnimations:fe,getKeyframes:()=>i,getFill:Y,getDirection:I,getDelay:j,getIterations:$,getEasing:Z,getDuration:S,afterAddRead:e=>(oe.push(e),t),afterAddWrite:e=>(ie.push(e),t),afterClearStyles:(e=[])=>{for(const n of e)J[n]="";return t},afterStyles:(e={})=>(J=e,t),afterRemoveClass:e=>(H=P(H,e),t),afterAddClass:e=>(G=P(G,e),t),beforeAddRead:e=>(re.push(e),t),beforeAddWrite:e=>(se.push(e),t),beforeClearStyles:(e=[])=>{for(const n of e)B[n]="";return t},beforeStyles:(e={})=>(B=e,t),beforeRemoveClass:e=>(q=P(q,e),t),beforeAddClass:e=>(N=P(N,e),t),onFinish:X,isRunning:()=>0!==A&&!D,progressStart:(e=!1,n)=>(c.forEach(r=>{r.progressStart(e,n)}),de(),x=e,y||le(),l(!1,!0,n),t),progressStep:e=>(c.forEach(n=>{n.progressStep(e)}),R(e),t),progressEnd:(e,n,r)=>(x=!1,c.forEach(s=>{s.progressEnd(e,n,r)}),void 0!==r&&(v=r),w=!1,k=!0,0===e?(b="reverse"===I()?"normal":"reverse","reverse"===b&&(k=!1),u?(l(),R(1-n)):(C=(1-n)*S()*-1,l(!1,!1))):1===e&&(u?(l(),R(n)):(C=n*S()*-1,l(!1,!1))),void 0!==e&&!o&&he(),t)}}}}]);