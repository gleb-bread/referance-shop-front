import{al as o,a1 as u,a2 as f,$ as d,am as v,an as l,ao as i,ap as h,aq as m}from"./entry.8e2d85b4.js";function U(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=u(!1),n=u({});f(()=>{n.value=s.value?{}:m(a)});const r=t.push(n.value,e);return d(n,c=>{r.patch(c)}),v()&&(l(()=>{r.dispose()}),i(()=>{s.value=!0}),h(()=>{s.value=!1})),r}export{U as u};
