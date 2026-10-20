(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18892,e=>{var t=e.i(43476),r=e.i(71645),a=e.i(8803),i=e.i(3858);let n=["01 / TRIGGER","02 / INTELLIGENCE","03 / ACTION"],l=`${a.C.whatsapp}?text=${encodeURIComponent("היי ליז, נדבר על אוטומציה לעסק?")}`;e.s(["default",0,function(){let[e,s]=(0,r.useState)("leads"),o=(0,i.$)(),[c,d]=(0,r.useState)(null),u=c??o,h=a.q[e];return(0,t.jsx)("section",{id:"automation",className:"section automation on-deep","aria-labelledby":"automation-title",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"section-head reveal",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"eyebrow",children:[(0,t.jsx)("b",{children:"04"})," CONNECTED SYSTEMS. HUMAN THINKING."]}),(0,t.jsxs)("h2",{id:"automation-title",className:"title",children:["העסק עובד.",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"גם בין הקליקים."})]})]}),(0,t.jsx)("p",{className:"lead",children:"אני מאפיינת ובונה אוטומציות וסוכני AI שמחברים בין המידע, הכלים והאנשים בעסק. מתחילים בתהליך שגוזל זמן, ובונים לו דרך טובה יותר."})]}),(0,t.jsxs)("div",{className:`flow-lab reveal${u?" paused":""}`,children:[(0,t.jsxs)("div",{className:"flow-toolbar",children:[(0,t.jsx)("span",{children:"THE AUTOMATION STUDIO"}),(0,t.jsx)("button",{type:"button","aria-pressed":!u,onClick:()=>d(!u),children:u?"הפעלת התנועה ▶":"השהיית התנועה ⏸"})]}),(0,t.jsx)("div",{className:"flow-options",role:"group","aria-label":"בחירת תהליך",children:Object.keys(a.q).map(r=>(0,t.jsx)("button",{type:"button","aria-pressed":r===e,className:r===e?"selected":void 0,onClick:()=>s(r),children:a.q[r].label},r))}),(0,t.jsx)("div",{className:"flow-diagram",role:"group","aria-label":"שלבי התהליך",children:h.steps.map((e,r)=>(0,t.jsxs)("div",{className:"flow-step",children:[r>0&&(0,t.jsx)("div",{className:"flow-wire","aria-hidden":"true",children:(0,t.jsx)("i",{})}),(0,t.jsxs)("div",{className:`flow-node${1===r?" central":""}`,children:[(0,t.jsx)("small",{children:n[r]}),(0,t.jsx)("b",{children:e.title}),(0,t.jsx)("span",{children:e.detail})]})]},r))}),(0,t.jsxs)("div",{className:"flow-caption",children:[(0,t.jsx)("span",{children:"n8n / APIs / AI AGENTS"}),(0,t.jsx)("p",{"aria-live":"polite",children:h.note})]})]}),(0,t.jsx)("div",{className:"auto-grid",children:a.h.map((e,r)=>(0,t.jsxs)("article",{className:"auto-card reveal",style:{"--d":r},children:[(0,t.jsx)("span",{children:String(r+1).padStart(2,"0")}),(0,t.jsx)("h3",{children:e.title}),(0,t.jsx)("p",{children:e.text}),(0,t.jsx)("small",{children:e.stack})]},e.title))}),(0,t.jsxs)("div",{className:"training reveal",children:[(0,t.jsx)("span",{children:"FOCUS AI / BOTCAMP"}),(0,t.jsx)("p",{children:"בוגרת BotCamp של Focus AI: בניית סוכנים ב־n8n, מערכות RAG, חיבורי MCP ואפיון פתרונות AI עסקיים. את ההכשרה אני מחברת לניסיון שלי בפיתוח ואינטגרציות."}),(0,t.jsx)("a",{className:"btn btn-lime",href:l,target:"_blank",rel:"noreferrer",children:"איזה תהליך נוכל לקצר אצלכם? ↗"})]})]})})}])},16794,e=>{var t=e.i(43476),r=e.i(71645),a=e.i(8803),i=e.i(3858);e.s(["default",0,function(){let e=(0,r.useRef)(null),n=(0,r.useRef)(null),[l,s]=(0,r.useState)(!1),[o,c]=(0,r.useState)(""),d=(0,i.$)(),u=(0,r.useRef)({a:13,w:0,drag:!1,raf:0,last:0,moved:0});(0,r.useEffect)(()=>{let t=e.current;if(!t)return;let r=u.current;if(d){t.style.transform="none";return}let a=e=>{let i=Math.min(.032,(e-r.last)/1e3||.016);if(r.last=e,r.drag||(r.w+=(-22*r.a-1.05*r.w)*i,r.a+=r.w*i),t.style.transform=`rotate(${r.a.toFixed(3)}deg)`,!r.drag&&.03>Math.abs(r.a)&&.03>Math.abs(r.w)){r.a=0,t.style.transform="rotate(0deg)",r.raf=0;return}r.raf=requestAnimationFrame(a)},i=()=>{r.raf||(r.last=performance.now(),r.raf=requestAnimationFrame(a))};return t._kick=i,i(),()=>cancelAnimationFrame(r.raf)},[d]);let h=()=>e.current?._kick?.(),m=()=>{let e=u.current;e.drag=!1,h(),e.moved<6&&s(e=>!e)},f=async(e,t)=>{try{await navigator.clipboard.writeText(t),c(e),setTimeout(()=>c(""),1800)}catch{}};return(0,t.jsxs)("div",{className:"bc","aria-label":"כרטיס הביקור שלי",children:[(0,t.jsxs)("div",{className:"bc-rig",ref:e,children:[(0,t.jsx)("span",{className:"bc-cord","aria-hidden":"true"}),(0,t.jsx)("span",{className:"bc-ring","aria-hidden":"true"}),(0,t.jsx)("div",{className:"bc-card",ref:n,"data-flipped":l,onPointerDown:e=>{if(e.target.closest("a,button"))return;let t=u.current;t.drag=!0,t.moved=0,e.currentTarget.setPointerCapture(e.pointerId),h()},onPointerMove:t=>{let r=u.current,a=n.current?.getBoundingClientRect();if(a&&!d&&"mouse"===t.pointerType){let e=(t.clientX-a.left)/a.width-.5,r=(t.clientY-a.top)/a.height-.5;n.current.style.setProperty("--tx",`${(-(10*r)).toFixed(2)}deg`),n.current.style.setProperty("--ty",`${(12*e).toFixed(2)}deg`),n.current.style.setProperty("--gx",`${((e+.5)*100).toFixed(1)}%`),n.current.style.setProperty("--gy",`${((r+.5)*100).toFixed(1)}%`)}if(!r.drag||!e.current)return;let i=e.current.getBoundingClientRect(),l=i.left+i.width/2,s=i.top,o=Math.max(-38,Math.min(38,-(180*Math.atan2(t.clientX-l,Math.max(40,t.clientY-s))/Math.PI)));r.w=(o-r.a)*40,r.a=o,r.moved+=Math.abs(t.movementX)+Math.abs(t.movementY)},onPointerUp:m,onPointerCancel:m,onPointerLeave:()=>{let e=n.current;e&&(e.style.setProperty("--tx","0deg"),e.style.setProperty("--ty","0deg"))},children:(0,t.jsxs)("div",{className:"bc-inner",children:[(0,t.jsxs)("div",{className:"bc-face bc-front",inert:l,"aria-hidden":l,children:[(0,t.jsx)("span",{className:"bc-hole","aria-hidden":"true"}),(0,t.jsx)("svg",{className:"bc-spark",viewBox:"0 0 40 40","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M20 0c1.5 10 9.5 18.5 20 20-10.5 1.5-18.5 10-20 20C18.5 30 10.5 21.5 0 20 10.5 18.5 18.5 10 20 0z",fill:"currentColor"})}),(0,t.jsx)("p",{className:"bc-tag",dir:"ltr",children:"CODE & COLOR"}),(0,t.jsx)("img",{className:"bc-photo",src:"/liz.webp",alt:"ליז חאג׳ג׳",width:720,height:960,draggable:!1}),(0,t.jsxs)("div",{className:"bc-id",children:[(0,t.jsx)("h2",{children:a.C.person}),(0,t.jsx)("p",{children:a.C.role})]}),(0,t.jsxs)("p",{className:"bc-foot",dir:"ltr",children:[(0,t.jsx)("span",{children:"Nº 001"}),(0,t.jsx)("span",{children:a.C.url.replace("https://","")})]}),(0,t.jsx)("span",{className:"bc-glare","aria-hidden":"true"})]}),(0,t.jsxs)("div",{className:"bc-face bc-back",inert:!l,"aria-hidden":!l,children:[(0,t.jsx)("p",{className:"bc-tag",dir:"ltr",children:"SAY HELLO"}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:`tel:${a.C.phone}`,dir:"ltr",children:a.C.phone.replace(/^(\d{3})(\d{7})$/,"$1-$2")}),(0,t.jsx)("button",{type:"button",onClick:()=>f("phone",a.C.phone),"aria-label":"העתקת מספר הטלפון",children:"phone"===o?"✓":"העתק"})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:`mailto:${a.C.email}`,dir:"ltr",children:a.C.email}),(0,t.jsx)("button",{type:"button",onClick:()=>f("mail",a.C.email),"aria-label":"העתקת כתובת המייל",children:"mail"===o?"✓":"העתק"})]}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:a.C.linkedin,target:"_blank",rel:"noreferrer",dir:"ltr",children:"linkedin.com/in/liz-hajage"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:a.C.github,target:"_blank",rel:"noreferrer",dir:"ltr",children:"github.com/lizamir"})})]}),(0,t.jsx)("a",{className:"bc-wa",href:a.C.whatsapp,target:"_blank",rel:"noreferrer",children:"שלחו הודעה בוואטסאפ ↗"})]})]})})]}),(0,t.jsxs)("button",{type:"button",className:"bc-flip",onClick:()=>s(e=>!e),"aria-pressed":l,children:[(0,t.jsx)("span",{"aria-hidden":"true",children:"↻"})," ",l?"חזרה לחזית":"הפכו את הכרטיס"]}),(0,t.jsx)("p",{className:"sr-only","aria-live":"polite",children:o?"הועתק":""})]})}])},63971,e=>{var t=e.i(43476),r=e.i(22016),a=e.i(71645),i=e.i(8803);e.s(["default",0,function(){let[e,n]=(0,a.useState)(""),[l,s]=(0,a.useState)(""),[o,c]=(0,a.useState)(""),[d,u]=(0,a.useState)(""),[h,m]=(0,a.useState)(!1),f=(0,a.useMemo)(()=>{let t=[`היי ליז, ${o.trim()?`אני ${o.trim()}.`:"הגעתי מהפורטפוליו."}`];return e&&t.push(`אני מחפש/ת: ${e}.`),l&&t.push(`לוח זמנים: ${l}.`),d.trim()?t.push("",d.trim()):t.push("","אשמח לשמוע מה אפשר לעשות ביחד."),t.join("\n")},[e,l,o,d]),p=`${i.C.whatsapp}?text=${encodeURIComponent(f)}`,x=`mailto:${i.C.email}?subject=${encodeURIComponent("פנייה מהפורטפוליו"+(e?`: ${e}`:""))}&body=${encodeURIComponent(f)}`,v=async()=>{try{await navigator.clipboard.writeText(f),m(!0),setTimeout(()=>m(!1),2500)}catch{}};return(0,t.jsx)("section",{className:"section contact",id:"contact","aria-labelledby":"contact-title",children:(0,t.jsxs)("div",{className:"container contact-grid",children:[(0,t.jsxs)("div",{className:"contact-copy reveal",children:[(0,t.jsxs)("p",{className:"eyebrow",children:[(0,t.jsx)("b",{children:"06"})," HAVE A PROJECT IN MIND?"]}),(0,t.jsxs)("h2",{id:"contact-title",className:"title",children:["יש לכם רעיון?",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"בואו נעשה ממנו וואו."})]}),(0,t.jsx)("p",{className:"lead",children:"אתר לעסק, רעיון למוצר, יישום AI או חיזוק לצוות? ספרו לי בכמה שורות מה צריך, ואני חוזרת עם כיוון ראשוני."}),(0,t.jsxs)("ul",{className:"channels",children:[(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:i.C.whatsapp,target:"_blank",rel:"noreferrer",children:[(0,t.jsx)("span",{children:"וואטסאפ"})," ",(0,t.jsx)("bdi",{children:i.C.phone})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:`mailto:${i.C.email}`,children:[(0,t.jsx)("span",{children:"מייל"})," ",i.C.email]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:i.C.linkedin,target:"_blank",rel:"noreferrer",children:[(0,t.jsx)("span",{children:"LinkedIn"})," liz-hajage ↗"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:i.C.github,target:"_blank",rel:"noreferrer",children:[(0,t.jsx)("span",{children:"GitHub"})," lizamir ↗"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(r.default,{href:"/resume/",children:[(0,t.jsx)("span",{children:"קורות חיים"})," לצפייה ולהדפסה ←"]})})]})]}),(0,t.jsxs)("form",{className:"brief reveal","aria-labelledby":"brief-title",style:{"--d":2},onSubmit:e=>e.preventDefault(),children:[(0,t.jsx)("h3",{id:"brief-title",children:"ספרו לי בקצרה"}),(0,t.jsxs)("fieldset",{children:[(0,t.jsx)("legend",{children:"מה מתכננים?"}),(0,t.jsx)("div",{className:"opts",children:i.f.types.map(r=>(0,t.jsxs)("label",{className:e===r?"on":void 0,children:[(0,t.jsx)("input",{type:"radio",name:"type",value:r,checked:e===r,onChange:()=>n(r)}),r]},r))})]}),(0,t.jsxs)("fieldset",{children:[(0,t.jsx)("legend",{children:"מתי צריך?"}),(0,t.jsx)("div",{className:"opts",children:i.f.timelines.map(e=>(0,t.jsxs)("label",{className:l===e?"on":void 0,children:[(0,t.jsx)("input",{type:"radio",name:"when",value:e,checked:l===e,onChange:()=>s(e)}),e]},e))})]}),(0,t.jsx)("div",{className:"brief-row",children:(0,t.jsxs)("label",{children:["איך קוראים לכם? ",(0,t.jsx)("small",{children:"(לא חובה)"}),(0,t.jsx)("input",{value:o,onChange:e=>c(e.target.value),autoComplete:"name"})]})}),(0,t.jsxs)("label",{children:["בכמה שורות, מה הרעיון?",(0,t.jsx)("textarea",{value:d,onChange:e=>u(e.target.value),rows:3,placeholder:"למשל: אתר לקליניקה, עם קביעת תורים"})]}),(0,t.jsxs)("div",{className:"preview","aria-live":"polite",children:[(0,t.jsx)("span",{children:"ההודעה שתישלח"}),(0,t.jsx)("pre",{children:f})]}),(0,t.jsxs)("div",{className:"brief-actions",children:[(0,t.jsx)("a",{className:"btn btn-lime",href:p,target:"_blank",rel:"noreferrer",children:"שליחה בוואטסאפ ↗"}),(0,t.jsx)("a",{className:"btn btn-ghost btn-sm",href:x,children:(0,t.jsx)("span",{children:"שליחה במייל"})}),(0,t.jsx)("button",{type:"button",className:"btn btn-ghost btn-sm",onClick:v,children:(0,t.jsx)("span",{children:h?"הועתק ✓":"העתקת ההודעה"})})]}),(0,t.jsx)("p",{className:"brief-note",children:"הטופס רק מנסח הודעה. שום דבר לא נשמר ולא נשלח עד שתלחצו על אחת הדרכים לשליחה."})]})]})})}])},57107,e=>{var t=e.i(43476),r=e.i(71645),a=e.i(3858),i=e.i(34080);let n=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,l=`#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uSpeed;
uniform float uAmplitude;
uniform float uWaveScale;
uniform float uWaveRatio;
uniform float uSwell;
uniform float uTurbulence;
uniform float uTilt;
uniform float uZoom;
uniform float uHeight;
uniform float uFogDepth;
uniform float uSteps;
uniform float uBrightness;
uniform float uOpacity;
uniform float uGrain;
uniform float uGrainIntensity;
uniform vec2 uMouse;
uniform float uParallax;
uniform bool uEnableMouse;
uniform vec3 uHorizonColor;
uniform vec3 uWaveColor;
uniform vec3 uCrestColor;
out vec4 fragColor;

const float MAX_DIST = 20000.0;

float hash21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float plasma(vec3 r, vec2 freq, vec4 tc) {
  float mx = r.x + tc.x;
  mx += uSwell * sin((r.y + mx) / 20.0 + tc.y);
  float my = r.y - tc.z;
  my += uTurbulence * cos(r.x / 23.0 + tc.w);
  return r.z - (sin(mx * freq.x) * uAmplitude + sin(my * freq.y) * uAmplitude + uHeight);
}

float raymarch(vec3 pos, vec3 dir, vec2 freq, vec4 tc) {
  float dist = 0.0;
  for (int i = 0; i < 128; i++) {
    if (float(i) >= uSteps) break;
    float dscene = plasma(pos + dist * dir, freq, tc);
    if (abs(dscene) < 0.1) break;
    dist += 0.9 * dscene;
    if (!(abs(dist) < MAX_DIST)) return MAX_DIST;
  }
  return dist;
}

void main() {
  float T = iTime * uSpeed;
  vec2 freq = vec2(uWaveScale / 7.0, (uWaveScale * uWaveRatio) / 3.0);
  vec4 tc = vec4(T / 0.130, T / 0.810, T / 0.200, T / 0.710);
  float c, s;
  float vfov = (3.14159 / 2.3) / max(uZoom, 0.05);
  vec3 cam = vec3(0.0, 0.0, 30.0);
  vec2 uv = (gl_FragCoord.xy / iResolution.xy) - 0.5;
  uv.x *= iResolution.x / iResolution.y;
  uv.y *= -1.0;

  vec3 dir = vec3(0.0, 0.0, -1.0);
  float ulen = length(uv);
  float xrot = vfov * ulen;
  c = cos(xrot); s = sin(xrot);
  dir = mat3(1.0, 0.0, 0.0, 0.0, c, -s, 0.0, s, c) * dir;
  vec2 nuv = ulen > 1e-5 ? uv / ulen : vec2(1.0, 0.0);
  c = nuv.x; s = nuv.y;
  dir = mat3(c, -s, 0.0, s, c, 0.0, 0.0, 0.0, 1.0) * dir;
  c = cos(uTilt); s = sin(uTilt);
  dir = mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c) * dir;

  if (uEnableMouse) {
    float yaw = (uMouse.x - 0.5) * uParallax * 0.4;
    float pitch = (uMouse.y - 0.5) * uParallax * 0.4;
    c = cos(yaw); s = sin(yaw);
    dir = mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c) * dir;
    c = cos(pitch); s = sin(pitch);
    dir = mat3(1.0, 0.0, 0.0, 0.0, c, -s, 0.0, s, c) * dir;
  }

  float dist = raymarch(cam, dir, freq, tc);
  vec3 pos = cam + dist * dir;

  float t = clamp(uFogDepth / max(dist, 0.001), 0.0, 1.0);
  vec3 body = mix(uWaveColor, uCrestColor, clamp(pos.z * 0.08 + 0.5, 0.0, 1.0));
  vec3 col = mix(uHorizonColor, body, t);
  col *= uBrightness;
  col = clamp(col, 0.0, 1.0);

  float alpha = clamp(t, 0.0, 1.0) * uOpacity;
  if (uGrain > 0.5) {
    float g = hash21(gl_FragCoord.xy + mod(iTime, 64.0) * 11.0);
    alpha += (g - 0.5) * uGrainIntensity;
  }
  alpha = clamp(alpha, 0.0, 1.0);
  fragColor = vec4(col * alpha, alpha);
}
`,s={uSpeed:.2,uAmplitude:2.5,uWaveScale:.6,uWaveRatio:.9,uSwell:35,uTurbulence:20,uTilt:1.11,uZoom:1,uHeight:5.5,uFogDepth:15,uSteps:40,uBrightness:1.1,uOpacity:1,uGrain:0,uGrainIntensity:0,uParallax:.25};e.s(["default",0,function(){let e=(0,r.useRef)(null),o=(0,r.useRef)(!1),c=(0,r.useRef)(()=>{}),d=(0,a.$)(),u=(0,i.i)(),h=(0,r.useRef)(()=>{}),[m,f]=(0,r.useState)(null),p=m??d,[x,v]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{o.current=p,document.body.classList.toggle("motion-paused",p),document.dispatchEvent(new CustomEvent("portfolio-motion",{detail:{paused:p}})),c.current()},[p]),(0,r.useEffect)(()=>{h.current(u)},[u]),(0,r.useEffect)(()=>{let t,r=e.current;if(!r)return;let a=document.createElement("canvas");a.setAttribute("aria-hidden","true");let d=a.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1});if(!d)return void v(!1);let u=(e,t)=>{let r=d.createShader(e);if(d.shaderSource(r,t),d.compileShader(r),!d.getShaderParameter(r,d.COMPILE_STATUS))throw d.deleteShader(r),Error("Shader compilation failed");return r};try{if(t=d.createProgram(),d.attachShader(t,u(d.VERTEX_SHADER,n)),d.attachShader(t,u(d.FRAGMENT_SHADER,l)),d.linkProgram(t),!d.getProgramParameter(t,d.LINK_STATUS))throw Error("Link failed")}catch{v(!1);return}d.useProgram(t);let m=d.createBuffer();d.bindBuffer(d.ARRAY_BUFFER,m),d.bufferData(d.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),d.STATIC_DRAW);let f=d.getAttribLocation(t,"position");d.enableVertexAttribArray(f),d.vertexAttribPointer(f,2,d.FLOAT,!1,0,0);let p=e=>d.getUniformLocation(t,e);for(let[e,t]of Object.entries(s))d.uniform1f(p(e),t);d.uniform1i(p("uEnableMouse"),1);let x=e=>{let[t,r,a]=(i.z.find(t=>t.id===e)??i.z[0]).wave;d.uniform3fv(p("uHorizonColor"),t),d.uniform3fv(p("uWaveColor"),r),d.uniform3fv(p("uCrestColor"),a)};h.current=e=>{x(e),A()},x(document.documentElement.dataset.theme??"violet"),r.append(a);let b=[.5,.5],j=[.5,.5],g=!0,y=0,C=0,N=0,w=!1,A=()=>{d.uniform1f(p("iTime"),C),d.uniform2fv(p("uMouse"),b),d.drawArrays(d.TRIANGLES,0,3)},S=()=>{let e=r.getBoundingClientRect(),t=.7*Math.min(devicePixelRatio||1,1);a.width=Math.max(1,Math.round(e.width*t)),a.height=Math.max(1,Math.round(e.height*t)),d.viewport(0,0,a.width,a.height),d.uniform2f(p("iResolution"),a.width,a.height),A()},T=e=>{if(y=0,!w&&!o.current&&g&&!document.hidden){if(N&&e-N<32){y=requestAnimationFrame(T);return}C+=N?Math.min((e-N)/1e3,.05):0,N=e,b[0]+=(j[0]-b[0])*.06,b[1]+=(j[1]-b[1])*.06,A(),y=requestAnimationFrame(T)}},E=()=>{y&&cancelAnimationFrame(y),y=0,N=0,o.current||!g||document.hidden||w||(y=requestAnimationFrame(T))};c.current=E;let R=new ResizeObserver(S);R.observe(r);let M=new IntersectionObserver(([e])=>{g=e.isIntersecting,E()});M.observe(r),document.addEventListener("visibilitychange",E);let I=r.parentElement,k=e=>{if(o.current)return;let t=r.getBoundingClientRect();j[0]=(e.clientX-t.left)/t.width,j[1]=1-(e.clientY-t.top)/t.height};I?.addEventListener("pointermove",k);let P=e=>{e.preventDefault(),w=!0,a.style.display="none",E()},F=()=>{a.style.display="none",v(!1)};return a.addEventListener("webglcontextlost",P),a.addEventListener("webglcontextrestored",F),S(),E(),()=>{y&&cancelAnimationFrame(y),c.current=()=>{},R.disconnect(),M.disconnect(),document.removeEventListener("visibilitychange",E),I?.removeEventListener("pointermove",k),a.removeEventListener("webglcontextlost",P),a.removeEventListener("webglcontextrestored",F),a.remove()}},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"wave-background","aria-hidden":"true",ref:e}),(0,t.jsx)("button",{id:"motion-toggle",type:"button","aria-pressed":!p,hidden:!x,onClick:()=>f(!p),children:p?"הפעלת תנועה ▶":"השהיית תנועה ⏸"})]})}])}])})();