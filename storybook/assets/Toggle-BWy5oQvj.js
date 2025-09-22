import{c as r}from"./createLucideIcon-BFHFUq0v.js";import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./iframe-Qt5oSwMJ.js";import{u as m,c as f}from"./index-CPJsY9QR.js";import{P as p}from"./index-CLPx1PJn.js";import{c as v}from"./index-CdJFUDDL.js";import{c as x}from"./utils-CBfrqCZ4.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]],I=r("bold",b);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]],V=r("italic",y);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]],M=r("underline",h);var i="Toggle",d=g.forwardRef((e,t)=>{const{pressed:a,defaultPressed:o,onPressedChange:l,...c}=e,[n,u]=m({prop:a,onChange:l,defaultProp:o??!1,caller:i});return s.jsx(p.button,{type:"button","aria-pressed":n,"data-state":n?"on":"off","data-disabled":e.disabled?"":void 0,...c,ref:t,onClick:f(e.onClick,()=>{e.disabled||u(!n)})})});d.displayName=i;var k=d;const _=v("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"},size:{default:"h-9 px-2 min-w-9",sm:"h-8 px-1.5 min-w-8",lg:"h-10 px-2.5 min-w-10"}},defaultVariants:{variant:"default",size:"default"}});function j({className:e,variant:t,size:a,...o}){return s.jsx(k,{"data-slot":"toggle",className:x(_({variant:t,size:a,className:e})),...o})}j.__docgenInfo={description:"",methods:[],displayName:"Toggle"};export{I as B,V as I,j as T,M as U,d as a,_ as t};
