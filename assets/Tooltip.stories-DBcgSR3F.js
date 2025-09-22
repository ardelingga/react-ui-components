import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-CqjzB_ih.js";import{u as re,c as P}from"./index-D60pQwju.js";import{u as q,b as ne}from"./index-rgTc8_Xw.js";import{c as se}from"./index-CLvN1Vpq.js";import{D as ie}from"./index-Fm3pDOxC.js";import{u as ae}from"./index-D0wKRynX.js";import{c as U,R as le,A as ce,a as pe,C as de}from"./index-D3413H3g.js";import{P as ue}from"./index-8iYauAcL.js";import{P as W}from"./index-D4dwrSQX.js";import{P as fe}from"./index-3ONt-hBQ.js";import{R as he}from"./index-B02viJBC.js";import{c as me}from"./utils-CBfrqCZ4.js";import{B as w}from"./Button-BDC9PhyQ.js";import{P as Te}from"./plus-veHrneDT.js";import{I as xe}from"./info-BHT7a4v-.js";import"./preload-helper-D9Z9MdNV.js";import"./index-By_MgWmR.js";import"./index-D8zJG5ZV.js";import"./index-CGMO-67-.js";import"./index-BmsruuLr.js";import"./createLucideIcon-DLQ91j1X.js";var[B]=se("Tooltip",[U]),M=U(),Y="TooltipProvider",ge=700,S="tooltip.open",[ve,G]=B(Y),X=e=>{const{__scopeTooltip:r,delayDuration:t=ge,skipDelayDuration:n=300,disableHoverableContent:s=!1,children:c}=e,l=i.useRef(!0),h=i.useRef(!1),a=i.useRef(0);return i.useEffect(()=>{const u=a.current;return()=>window.clearTimeout(u)},[]),o.jsx(ve,{scope:r,isOpenDelayedRef:l,delayDuration:t,onOpen:i.useCallback(()=>{window.clearTimeout(a.current),l.current=!1},[]),onClose:i.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(()=>l.current=!0,n)},[n]),isPointerInTransitRef:h,onPointerInTransitChange:i.useCallback(u=>{h.current=u},[]),disableHoverableContent:s,children:c})};X.displayName=Y;var N="Tooltip",[Ce,O]=B(N),K=e=>{const{__scopeTooltip:r,children:t,open:n,defaultOpen:s,onOpenChange:c,disableHoverableContent:l,delayDuration:h}=e,a=G(N,e.__scopeTooltip),u=M(r),[p,f]=i.useState(null),m=ae(),d=i.useRef(0),T=l??a.disableHoverableContent,g=h??a.delayDuration,x=i.useRef(!1),[y,v]=re({prop:n,defaultProp:s??!1,onChange:$=>{$?(a.onOpen(),document.dispatchEvent(new CustomEvent(S))):a.onClose(),c?.($)},caller:N}),R=i.useMemo(()=>y?x.current?"delayed-open":"instant-open":"closed",[y]),_=i.useCallback(()=>{window.clearTimeout(d.current),d.current=0,x.current=!1,v(!0)},[v]),D=i.useCallback(()=>{window.clearTimeout(d.current),d.current=0,v(!1)},[v]),V=i.useCallback(()=>{window.clearTimeout(d.current),d.current=window.setTimeout(()=>{x.current=!0,v(!0),d.current=0},g)},[g,v]);return i.useEffect(()=>()=>{d.current&&(window.clearTimeout(d.current),d.current=0)},[]),o.jsx(le,{...u,children:o.jsx(Ce,{scope:r,contentId:m,open:y,stateAttribute:R,trigger:p,onTriggerChange:f,onTriggerEnter:i.useCallback(()=>{a.isOpenDelayedRef.current?V():_()},[a.isOpenDelayedRef,V,_]),onTriggerLeave:i.useCallback(()=>{T?D():(window.clearTimeout(d.current),d.current=0)},[D,T]),onOpen:_,onClose:D,disableHoverableContent:T,children:t})})};K.displayName=N;var H="TooltipTrigger",J=i.forwardRef((e,r)=>{const{__scopeTooltip:t,...n}=e,s=O(H,t),c=G(H,t),l=M(t),h=i.useRef(null),a=q(r,h,s.onTriggerChange),u=i.useRef(!1),p=i.useRef(!1),f=i.useCallback(()=>u.current=!1,[]);return i.useEffect(()=>()=>document.removeEventListener("pointerup",f),[f]),o.jsx(ce,{asChild:!0,...l,children:o.jsx(fe.button,{"aria-describedby":s.open?s.contentId:void 0,"data-state":s.stateAttribute,...n,ref:a,onPointerMove:P(e.onPointerMove,m=>{m.pointerType!=="touch"&&!p.current&&!c.isPointerInTransitRef.current&&(s.onTriggerEnter(),p.current=!0)}),onPointerLeave:P(e.onPointerLeave,()=>{s.onTriggerLeave(),p.current=!1}),onPointerDown:P(e.onPointerDown,()=>{s.open&&s.onClose(),u.current=!0,document.addEventListener("pointerup",f,{once:!0})}),onFocus:P(e.onFocus,()=>{u.current||s.onOpen()}),onBlur:P(e.onBlur,s.onClose),onClick:P(e.onClick,s.onClose)})})});J.displayName=H;var z="TooltipPortal",[ye,je]=B(z,{forceMount:void 0}),Q=e=>{const{__scopeTooltip:r,forceMount:t,children:n,container:s}=e,c=O(z,r);return o.jsx(ye,{scope:r,forceMount:t,children:o.jsx(W,{present:t||c.open,children:o.jsx(ue,{asChild:!0,container:s,children:n})})})};Q.displayName=z;var E="TooltipContent",Z=i.forwardRef((e,r)=>{const t=je(E,e.__scopeTooltip),{forceMount:n=t.forceMount,side:s="top",...c}=e,l=O(E,e.__scopeTooltip);return o.jsx(W,{present:n||l.open,children:l.disableHoverableContent?o.jsx(ee,{side:s,...c,ref:r}):o.jsx(be,{side:s,...c,ref:r})})}),be=i.forwardRef((e,r)=>{const t=O(E,e.__scopeTooltip),n=G(E,e.__scopeTooltip),s=i.useRef(null),c=q(r,s),[l,h]=i.useState(null),{trigger:a,onClose:u}=t,p=s.current,{onPointerInTransitChange:f}=n,m=i.useCallback(()=>{h(null),f(!1)},[f]),d=i.useCallback((T,g)=>{const x=T.currentTarget,y={x:T.clientX,y:T.clientY},v=Re(y,x.getBoundingClientRect()),R=_e(y,v),_=De(g.getBoundingClientRect()),D=Oe([...R,..._]);h(D),f(!0)},[f]);return i.useEffect(()=>()=>m(),[m]),i.useEffect(()=>{if(a&&p){const T=x=>d(x,p),g=x=>d(x,a);return a.addEventListener("pointerleave",T),p.addEventListener("pointerleave",g),()=>{a.removeEventListener("pointerleave",T),p.removeEventListener("pointerleave",g)}}},[a,p,d,m]),i.useEffect(()=>{if(l){const T=g=>{const x=g.target,y={x:g.clientX,y:g.clientY},v=a?.contains(x)||p?.contains(x),R=!Ne(y,l);v?m():R&&(m(),u())};return document.addEventListener("pointermove",T),()=>document.removeEventListener("pointermove",T)}},[a,p,l,u,m]),o.jsx(ee,{...e,ref:c})}),[we,Pe]=B(N,{isInside:!1}),Ee=ne("TooltipContent"),ee=i.forwardRef((e,r)=>{const{__scopeTooltip:t,children:n,"aria-label":s,onEscapeKeyDown:c,onPointerDownOutside:l,...h}=e,a=O(E,t),u=M(t),{onClose:p}=a;return i.useEffect(()=>(document.addEventListener(S,p),()=>document.removeEventListener(S,p)),[p]),i.useEffect(()=>{if(a.trigger){const f=m=>{m.target?.contains(a.trigger)&&p()};return window.addEventListener("scroll",f,{capture:!0}),()=>window.removeEventListener("scroll",f,{capture:!0})}},[a.trigger,p]),o.jsx(ie,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:c,onPointerDownOutside:l,onFocusOutside:f=>f.preventDefault(),onDismiss:p,children:o.jsxs(de,{"data-state":a.stateAttribute,...u,...h,ref:r,style:{...h.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[o.jsx(Ee,{children:n}),o.jsx(we,{scope:t,isInside:!0,children:o.jsx(he,{id:a.contentId,role:"tooltip",children:s||n})})]})})});Z.displayName=E;var te="TooltipArrow",oe=i.forwardRef((e,r)=>{const{__scopeTooltip:t,...n}=e,s=M(t);return Pe(te,t).isInside?null:o.jsx(pe,{...s,...n,ref:r})});oe.displayName=te;function Re(e,r){const t=Math.abs(r.top-e.y),n=Math.abs(r.bottom-e.y),s=Math.abs(r.right-e.x),c=Math.abs(r.left-e.x);switch(Math.min(t,n,s,c)){case c:return"left";case s:return"right";case t:return"top";case n:return"bottom";default:throw new Error("unreachable")}}function _e(e,r,t=5){const n=[];switch(r){case"top":n.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":n.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":n.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":n.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t});break}return n}function De(e){const{top:r,right:t,bottom:n,left:s}=e;return[{x:s,y:r},{x:t,y:r},{x:t,y:n},{x:s,y:n}]}function Ne(e,r){const{x:t,y:n}=e;let s=!1;for(let c=0,l=r.length-1;c<r.length;l=c++){const h=r[c],a=r[l],u=h.x,p=h.y,f=a.x,m=a.y;p>n!=m>n&&t<(f-u)*(n-p)/(m-p)+u&&(s=!s)}return s}function Oe(e){const r=e.slice();return r.sort((t,n)=>t.x<n.x?-1:t.x>n.x?1:t.y<n.y?-1:t.y>n.y?1:0),Le(r)}function Le(e){if(e.length<=1)return e.slice();const r=[];for(let n=0;n<e.length;n++){const s=e[n];for(;r.length>=2;){const c=r[r.length-1],l=r[r.length-2];if((c.x-l.x)*(s.y-l.y)>=(c.y-l.y)*(s.x-l.x))r.pop();else break}r.push(s)}r.pop();const t=[];for(let n=e.length-1;n>=0;n--){const s=e[n];for(;t.length>=2;){const c=t[t.length-1],l=t[t.length-2];if((c.x-l.x)*(s.y-l.y)>=(c.y-l.y)*(s.x-l.x))t.pop();else break}t.push(s)}return t.pop(),r.length===1&&t.length===1&&r[0].x===t[0].x&&r[0].y===t[0].y?r:r.concat(t)}var Ae=X,Ie=K,ke=J,Be=Q,Me=Z,Se=oe;function F({delayDuration:e=0,...r}){return o.jsx(Ae,{"data-slot":"tooltip-provider",delayDuration:e,...r})}function C({...e}){return o.jsx(F,{children:o.jsx(Ie,{"data-slot":"tooltip",...e})})}function j({...e}){return o.jsx(ke,{"data-slot":"tooltip-trigger",...e})}function b({className:e,sideOffset:r=4,children:t,...n}){return o.jsx(Be,{children:o.jsxs(Me,{"data-slot":"tooltip-content",sideOffset:r,className:me("bg-gray-100 text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-w-sm rounded-md px-3 py-1.5 text-xs",e),...n,children:[t,o.jsx(Se,{className:"bg-primary fill-primary z-50 rotate-180 size-2.5 rounded-[2px]"})]})})}C.__docgenInfo={description:"",methods:[],displayName:"Tooltip"};j.__docgenInfo={description:"",methods:[],displayName:"TooltipTrigger"};b.__docgenInfo={description:"",methods:[],displayName:"TooltipContent",props:{sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};F.__docgenInfo={description:"",methods:[],displayName:"TooltipProvider",props:{delayDuration:{defaultValue:{value:"0",computed:!1},required:!1}}};const at={title:"Components/Tooltip",component:C,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>o.jsx(F,{children:o.jsx(e,{})})]},L={render:()=>o.jsxs(C,{children:[o.jsx(j,{asChild:!0,children:o.jsx(w,{variant:"secondary",children:"Hover me"})}),o.jsx(b,{children:o.jsx("p",{children:"This is a tooltip"})})]})},A={render:()=>o.jsxs(C,{children:[o.jsx(j,{asChild:!0,children:o.jsx(w,{variant:"secondary",size:"sm",children:o.jsx(Te,{className:"h-4 w-4"})})}),o.jsx(b,{children:o.jsx("p",{children:"Add new item"})})]})},I={render:()=>o.jsxs("div",{className:"flex gap-4",children:[o.jsxs(C,{children:[o.jsx(j,{asChild:!0,children:o.jsx(w,{variant:"secondary",children:"Top"})}),o.jsx(b,{side:"top",children:o.jsx("p",{children:"Tooltip on top"})})]}),o.jsxs(C,{children:[o.jsx(j,{asChild:!0,children:o.jsx(w,{variant:"secondary",children:"Right"})}),o.jsx(b,{side:"right",children:o.jsx("p",{children:"Tooltip on right"})})]}),o.jsxs(C,{children:[o.jsx(j,{asChild:!0,children:o.jsx(w,{variant:"secondary",children:"Bottom"})}),o.jsx(b,{side:"bottom",children:o.jsx("p",{children:"Tooltip on bottom"})})]}),o.jsxs(C,{children:[o.jsx(j,{asChild:!0,children:o.jsx(w,{variant:"secondary",children:"Left"})}),o.jsx(b,{side:"left",children:o.jsx("p",{children:"Tooltip on left"})})]})]})},k={render:()=>o.jsxs(C,{children:[o.jsx(j,{asChild:!0,children:o.jsx(w,{variant:"secondary",children:o.jsx(xe,{className:"h-4 w-4"})})}),o.jsx(b,{className:"max-w-xs",children:o.jsx("p",{children:"This is a longer tooltip content that demonstrates how tooltips handle multiple lines of text and longer descriptions."})})]})};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
}`,...L.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary" size="sm">
          <Plus className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add new item</p>
      </TooltipContent>
    </Tooltip>
}`,...A.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Tooltip on top</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Tooltip on right</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Tooltip on bottom</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Tooltip on left</p>
        </TooltipContent>
      </Tooltip>
    </div>
}`,...I.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">
          <Info className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p>
          This is a longer tooltip content that demonstrates how tooltips handle 
          multiple lines of text and longer descriptions.
        </p>
      </TooltipContent>
    </Tooltip>
}`,...k.parameters?.docs?.source}}};const lt=["Default","WithIcon","Positions","LongContent"];export{L as Default,k as LongContent,I as Positions,A as WithIcon,lt as __namedExportsOrder,at as default};
