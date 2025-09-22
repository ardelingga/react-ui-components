import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as g,r as M}from"./iframe-Qt5oSwMJ.js";import{c as J}from"./index-C80UOr6P.js";import{P as S}from"./index-CLPx1PJn.js";import{c as k,I as K,R as Q}from"./index-BsWgWMlX.js";import{a as W,t as X,B as p,I as d,U as h}from"./Toggle-BWy5oQvj.js";import{u as z}from"./index-CPJsY9QR.js";import{u as Y}from"./index-CBa4CdVw.js";import{c as R}from"./utils-CBfrqCZ4.js";import{c as _}from"./createLucideIcon-BFHFUq0v.js";import"./preload-helper-D9Z9MdNV.js";import"./index-_UCC6T1W.js";import"./index-WflaTyO2.js";import"./index-d-A6Sjsy.js";import"./index-B49lZ3M8.js";import"./index-pSg3cdo5.js";import"./index-CdJFUDDL.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 19H5",key:"vjpgq2"}]],V=_("text-align-center",Z);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 19H7",key:"4cu937"}]],B=_("text-align-end",ee);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 19H3",key:"z6ezky"}]],F=_("text-align-start",le);var u="ToggleGroup",[U]=J(u,[k]),D=k(),C=g.forwardRef((a,s)=>{const{type:t,...r}=a;if(t==="single"){const o=r;return e.jsx(ae,{...o,ref:s})}if(t==="multiple"){const o=r;return e.jsx(se,{...o,ref:s})}throw new Error(`Missing prop \`type\` expected on \`${u}\``)});C.displayName=u;var[E,H]=U(u),ae=g.forwardRef((a,s)=>{const{value:t,defaultValue:r,onValueChange:o=()=>{},...i}=a,[c,n]=z({prop:t,defaultProp:r??"",onChange:o,caller:u});return e.jsx(E,{scope:a.__scopeToggleGroup,type:"single",value:g.useMemo(()=>c?[c]:[],[c]),onItemActivate:n,onItemDeactivate:g.useCallback(()=>n(""),[n]),children:e.jsx(L,{...i,ref:s})})}),se=g.forwardRef((a,s)=>{const{value:t,defaultValue:r,onValueChange:o=()=>{},...i}=a,[c,n]=z({prop:t,defaultProp:r??[],onChange:o,caller:u}),m=g.useCallback(v=>n((T=[])=>[...T,v]),[n]),A=g.useCallback(v=>n((T=[])=>T.filter(q=>q!==v)),[n]);return e.jsx(E,{scope:a.__scopeToggleGroup,type:"multiple",value:c,onItemActivate:m,onItemDeactivate:A,children:e.jsx(L,{...i,ref:s})})});C.displayName=u;var[te,re]=U(u),L=g.forwardRef((a,s)=>{const{__scopeToggleGroup:t,disabled:r=!1,rovingFocus:o=!0,orientation:i,dir:c,loop:n=!0,...m}=a,A=D(t),v=Y(c),T={role:"group",dir:v,...m};return e.jsx(te,{scope:t,rovingFocus:o,disabled:r,children:o?e.jsx(Q,{asChild:!0,...A,orientation:i,dir:v,loop:n,children:e.jsx(S.div,{...T,ref:s})}):e.jsx(S.div,{...T,ref:s})})}),w="ToggleGroupItem",$=g.forwardRef((a,s)=>{const t=H(w,a.__scopeToggleGroup),r=re(w,a.__scopeToggleGroup),o=D(a.__scopeToggleGroup),i=t.value.includes(a.value),c=r.disabled||a.disabled,n={...a,pressed:i,disabled:c},m=g.useRef(null);return r.rovingFocus?e.jsx(K,{asChild:!0,...o,focusable:!c,active:i,ref:m,children:e.jsx(P,{...n,ref:s})}):e.jsx(P,{...n,ref:s})});$.displayName=w;var P=g.forwardRef((a,s)=>{const{__scopeToggleGroup:t,value:r,...o}=a,i=H(w,t),c={role:"radio","aria-checked":a.pressed,"aria-pressed":void 0},n=i.type==="single"?c:void 0;return e.jsx(W,{...n,...o,ref:s,onPressedChange:m=>{m?i.onItemActivate(r):i.onItemDeactivate(r)}})}),oe=C,ie=$;const O=M.createContext({size:"default",variant:"default"});function x({className:a,variant:s,size:t,children:r,...o}){return e.jsx(oe,{"data-slot":"toggle-group","data-variant":s,"data-size":t,className:R("group/toggle-group flex items-center rounded-md data-[variant=outline]:shadow-xs",a),...o,children:e.jsx(O.Provider,{value:{variant:s,size:t},children:r})})}function l({className:a,children:s,variant:t,size:r,...o}){const i=M.useContext(O);return e.jsx(ie,{"data-slot":"toggle-group-item","data-variant":i.variant||t,"data-size":i.size||r,className:R(X({variant:i.variant||t,size:i.size||r}),"min-w-0 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",a),...o,children:s})}x.__docgenInfo={description:"",methods:[],displayName:"ToggleGroup"};l.__docgenInfo={description:"",methods:[],displayName:"ToggleGroupItem"};const be={title:"Components/ToggleGroup",component:x,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["single","multiple"]},variant:{control:{type:"select"},options:["default","outline"]},size:{control:{type:"select"},options:["default","sm","lg"]}}},G={args:{type:"multiple",children:e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"bold",children:e.jsx(p,{className:"h-4 w-4"})}),e.jsx(l,{value:"italic",children:e.jsx(d,{className:"h-4 w-4"})}),e.jsx(l,{value:"underline",children:e.jsx(h,{className:"h-4 w-4"})})]})}},j={args:{type:"single",defaultValue:"center",children:e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"left","aria-label":"Align left",children:e.jsx(F,{className:"h-4 w-4"})}),e.jsx(l,{value:"center","aria-label":"Align center",children:e.jsx(V,{className:"h-4 w-4"})}),e.jsx(l,{value:"right","aria-label":"Align right",children:e.jsx(B,{className:"h-4 w-4"})})]})}},N={args:{type:"multiple",defaultValue:["bold"],children:e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"bold","aria-label":"Toggle bold",children:e.jsx(p,{className:"h-4 w-4"})}),e.jsx(l,{value:"italic","aria-label":"Toggle italic",children:e.jsx(d,{className:"h-4 w-4"})}),e.jsx(l,{value:"underline","aria-label":"Toggle underline",children:e.jsx(h,{className:"h-4 w-4"})})]})}},I={args:{type:"multiple",variant:"outline",children:e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"bold",children:e.jsx(p,{className:"h-4 w-4"})}),e.jsx(l,{value:"italic",children:e.jsx(d,{className:"h-4 w-4"})}),e.jsx(l,{value:"underline",children:e.jsx(h,{className:"h-4 w-4"})})]})}},f={args:{type:"multiple"},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:"Small"}),e.jsxs(x,{type:"multiple",size:"sm",children:[e.jsx(l,{value:"bold",children:e.jsx(p,{className:"h-3 w-3"})}),e.jsx(l,{value:"italic",children:e.jsx(d,{className:"h-3 w-3"})}),e.jsx(l,{value:"underline",children:e.jsx(h,{className:"h-3 w-3"})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:"Default"}),e.jsxs(x,{type:"multiple",children:[e.jsx(l,{value:"bold",children:e.jsx(p,{className:"h-4 w-4"})}),e.jsx(l,{value:"italic",children:e.jsx(d,{className:"h-4 w-4"})}),e.jsx(l,{value:"underline",children:e.jsx(h,{className:"h-4 w-4"})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:"Large"}),e.jsxs(x,{type:"multiple",size:"lg",children:[e.jsx(l,{value:"bold",children:e.jsx(p,{className:"h-5 w-5"})}),e.jsx(l,{value:"italic",children:e.jsx(d,{className:"h-5 w-5"})}),e.jsx(l,{value:"underline",children:e.jsx(h,{className:"h-5 w-5"})})]})]})]})},y={args:{type:"single"},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Choose text alignment:"}),e.jsxs(x,{type:"single",defaultValue:"left",children:[e.jsx(l,{value:"left","aria-label":"Align left",children:e.jsx(F,{className:"h-4 w-4"})}),e.jsx(l,{value:"center","aria-label":"Align center",children:e.jsx(V,{className:"h-4 w-4"})}),e.jsx(l,{value:"right","aria-label":"Align right",children:e.jsx(B,{className:"h-4 w-4"})})]})]})},b={args:{type:"multiple"},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Text formatting options:"}),e.jsxs(x,{type:"multiple",variant:"outline",children:[e.jsxs(l,{value:"bold","aria-label":"Toggle bold",children:[e.jsx(p,{className:"h-4 w-4"}),e.jsx("span",{className:"ml-2",children:"Bold"})]}),e.jsxs(l,{value:"italic","aria-label":"Toggle italic",children:[e.jsx(d,{className:"h-4 w-4"}),e.jsx("span",{className:"ml-2",children:"Italic"})]}),e.jsxs(l,{value:"underline","aria-label":"Toggle underline",children:[e.jsx(h,{className:"h-4 w-4"}),e.jsx("span",{className:"ml-2",children:"Underline"})]})]})]})};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'multiple',
    children: <>
        <ToggleGroupItem value="bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </>
  }
}`,...G.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single',
    defaultValue: 'center',
    children: <>
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeft className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenter className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRight className="h-4 w-4" />
        </ToggleGroupItem>
      </>
  }
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'multiple',
    defaultValue: ['bold'],
    children: <>
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </>
  }
}`,...N.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'multiple',
    variant: 'outline',
    children: <>
        <ToggleGroupItem value="bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </>
  }
}`,...I.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'multiple'
  },
  render: () => <div className="space-y-4">
      <div>
        <p className="text-sm font-medium mb-2">Small</p>
        <ToggleGroup type="multiple" size="sm">
          <ToggleGroupItem value="bold">
            <Bold className="h-3 w-3" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-3 w-3" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-3 w-3" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div>
        <p className="text-sm font-medium mb-2">Default</p>
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div>
        <p className="text-sm font-medium mb-2">Large</p>
        <ToggleGroup type="multiple" size="lg">
          <ToggleGroupItem value="bold">
            <Bold className="h-5 w-5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-5 w-5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-5 w-5" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single'
  },
  render: () => <div className="space-y-4">
      <p className="text-sm text-gray-600">Choose text alignment:</p>
      <ToggleGroup type="single" defaultValue="left">
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeft className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenter className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRight className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'multiple'
  },
  render: () => <div className="space-y-4">
      <p className="text-sm text-gray-600">Text formatting options:</p>
      <ToggleGroup type="multiple" variant="outline">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
          <span className="ml-2">Bold</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
          <span className="ml-2">Italic</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
          <span className="ml-2">Underline</span>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
}`,...b.parameters?.docs?.source}}};const we=["Default","Single","Multiple","Outline","Sizes","TextAlignment","TextFormatting"];export{G as Default,N as Multiple,I as Outline,j as Single,f as Sizes,y as TextAlignment,b as TextFormatting,we as __namedExportsOrder,be as default};
