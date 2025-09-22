import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as P}from"./iframe-CqjzB_ih.js";import{c as _}from"./index-CdJFUDDL.js";import{c as f}from"./utils-CBfrqCZ4.js";import{X as z}from"./x-8hFtbXn-.js";import{c as b}from"./createLucideIcon-DLQ91j1X.js";import{C as v}from"./circle-check-big-Dl_l08BN.js";import{T as A}from"./triangle-alert-C4woXaik.js";import{I as q}from"./info-BHT7a4v-.js";import{T as N}from"./trash-2-CkFqUoOT.js";import"./preload-helper-D9Z9MdNV.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],R=b("circle-x",V);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],O=b("clock",M);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],E=b("link",B);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],l=b("smile",X),$=_("relative w-full rounded-lg px-6 py-3 text-sm font-semibold flex items-center justify-between mb-0",{variants:{variant:{primary:"bg-blue-50 dark:bg-blue-600/25 text-blue-600 dark:text-blue-400 border-blue-50",secondary:"bg-purple-100 dark:bg-purple-600/25 text-purple-600 dark:text-purple-400 border-purple-100",success:"bg-green-100 dark:bg-green-600/25 text-green-600 dark:text-green-400 border-green-100",warning:"bg-amber-100 dark:bg-amber-600/25 text-amber-600 dark:text-amber-400 border-amber-100",info:"bg-cyan-100 dark:bg-cyan-600/25 text-cyan-600 dark:text-cyan-400 border-cyan-100",danger:"bg-red-100 dark:bg-red-600/25 text-red-600 dark:text-red-400 border-red-100","primary-outline":"bg-transparent text-blue-600 border border-blue-600","secondary-outline":"bg-transparent text-purple-600 dark:text-purple-400 border border-purple-600","success-outline":"bg-transparent text-green-600 border border-green-600","warning-outline":"bg-transparent text-amber-600 border border-amber-600","info-outline":"bg-transparent text-cyan-600 border border-cyan-600","danger-outline":"bg-transparent text-red-600 border border-red-600","primary-solid":"bg-blue-600 text-white border-blue-600","secondary-solid":"bg-purple-600 text-white border-purple-600","success-solid":"bg-green-600 text-white border-green-600","warning-solid":"bg-amber-600 text-white border-amber-600","info-solid":"bg-cyan-600 text-white border-cyan-600","danger-solid":"bg-red-600 text-white border-red-600"},style:{default:"rounded-lg","left-border":"rounded border-l-4"},size:{default:"py-3 text-lg",sm:"py-2 text-sm",lg:"py-4 text-xl"}},defaultVariants:{variant:"primary",style:"default",size:"default"}});function s({className:a,variant:t,style:j,size:w,dismissible:I=!1,onDismiss:k,icon:T,children:S,...D}){const[L,W]=P.useState(!0),C=()=>{W(!1),k?.()};return L?e.jsxs("div",{role:"alert",className:f($({variant:t,style:j,size:w}),a),...D,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[T&&e.jsx("span",{className:"text-xl shrink-0",children:T}),e.jsx("div",{className:"flex-1",children:S})]}),I&&e.jsx("button",{onClick:C,className:"text-2xl leading-none hover:opacity-70 transition-opacity","aria-label":"Dismiss alert",children:e.jsx(z,{size:20})})]}):null}function i({className:a,...t}){return e.jsx("div",{className:f("font-semibold text-lg mb-0",a),...t})}function r({className:a,...t}){return e.jsx("p",{className:f("font-medium text-sm mt-2 leading-relaxed",a),...t})}s.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{dismissible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit","VariantProps"]};i.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};r.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const ie={title:"Components/Alert",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","success","warning","info","danger","primary-outline","secondary-outline","success-outline","warning-outline","info-outline","danger-outline","primary-solid","secondary-solid","success-solid","warning-solid","info-solid","danger-solid"]},style:{control:{type:"select"},options:["default","left-border"]},size:{control:{type:"select"},options:["sm","default","lg"]},dismissible:{control:{type:"boolean"}}}},n={render:()=>e.jsxs("div",{className:"w-full max-w-2xl space-y-4",children:[e.jsx(s,{variant:"primary",dismissible:!0,children:"This is a Primary alert"}),e.jsx(s,{className:"mt-4",variant:"secondary",dismissible:!0,children:"This is a Secondary alert"}),e.jsx(s,{className:"mt-4",variant:"success",dismissible:!0,children:"This is a Success alert"}),e.jsx(s,{className:"mt-4",variant:"warning",dismissible:!0,children:"This is a Warning alert"}),e.jsx(s,{className:"mt-4",variant:"info",dismissible:!0,children:"This is a Info alert"}),e.jsx(s,{className:"mt-4",variant:"danger",dismissible:!0,children:"This is a Danger alert"})]})},d={render:()=>e.jsxs("div",{className:"w-full max-w-2xl space-y-4",children:[e.jsx(s,{variant:"primary-outline",dismissible:!0,children:"This is a Primary alert"}),e.jsx(s,{className:"mt-4",variant:"secondary-outline",dismissible:!0,children:"This is a Secondary alert"}),e.jsx(s,{className:"mt-4",variant:"success-outline",dismissible:!0,children:"This is a Success alert"}),e.jsx(s,{className:"mt-4",variant:"warning-outline",dismissible:!0,children:"This is a Warning alert"}),e.jsx(s,{className:"mt-4",variant:"info-outline",dismissible:!0,children:"This is a Info alert"}),e.jsx(s,{className:"mt-4",variant:"danger-outline",dismissible:!0,children:"This is a Danger alert"})]})},m={render:()=>e.jsx("div",{className:"w-full max-w-4xl",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{variant:"primary-solid",dismissible:!0,children:"This is a Primary alert"}),e.jsx(s,{className:"mt-4",variant:"success-solid",dismissible:!0,children:"This is a Success alert"}),e.jsx(s,{className:"mt-4",variant:"info-solid",dismissible:!0,children:"This is a Info alert"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{variant:"secondary-solid",dismissible:!0,children:"This is a Secondary alert"}),e.jsx(s,{className:"mt-4",variant:"warning-solid",dismissible:!0,children:"This is a Warning alert"}),e.jsx(s,{className:"mt-4",variant:"danger-solid",dismissible:!0,children:"This is a Danger alert"})]})]})})},c={render:()=>e.jsxs("div",{className:"w-full max-w-2xl space-y-4",children:[e.jsx(s,{variant:"primary",icon:e.jsx(l,{}),dismissible:!0,children:"This is a Primary alert"}),e.jsx(s,{className:"mt-4",variant:"secondary",icon:e.jsx(l,{}),dismissible:!0,children:"This is a Secondary alert"}),e.jsx(s,{className:"mt-4",variant:"success",icon:e.jsx(v,{}),dismissible:!0,children:"This is a Success alert"}),e.jsx(s,{className:"mt-4",variant:"warning",icon:e.jsx(A,{}),dismissible:!0,children:"This is a Warning alert"}),e.jsx(s,{className:"mt-4",variant:"info",icon:e.jsx(q,{}),dismissible:!0,children:"This is a Info alert"}),e.jsx(s,{className:"mt-4",variant:"danger",icon:e.jsx(N,{}),dismissible:!0,children:"This is a Danger alert"})]})},o={render:()=>e.jsxs("div",{className:"w-full max-w-2xl space-y-4",children:[e.jsx(s,{variant:"primary",style:"left-border",icon:e.jsx(l,{}),dismissible:!0,children:"This is a Primary alert"}),e.jsx(s,{className:"mt-4",variant:"secondary",style:"left-border",icon:e.jsx(l,{}),dismissible:!0,children:"This is a Secondary alert"}),e.jsx(s,{className:"mt-4",variant:"success",style:"left-border",icon:e.jsx(v,{}),dismissible:!0,children:"This is a Success alert"}),e.jsx(s,{className:"mt-4",variant:"warning",style:"left-border",icon:e.jsx(A,{}),dismissible:!0,children:"This is a Warning alert"}),e.jsx(s,{className:"mt-4",variant:"info",style:"left-border",icon:e.jsx(E,{}),dismissible:!0,children:"This is a Info alert"}),e.jsx(s,{className:"mt-4",variant:"danger",style:"left-border",icon:e.jsx(N,{}),dismissible:!0,children:"This is a Danger alert"})]})},u={render:()=>e.jsxs("div",{className:"w-full max-w-2xl space-y-4",children:[e.jsx(s,{variant:"primary",dismissible:!0,children:e.jsxs("div",{children:[e.jsx(i,{children:"This is a Primary alert"}),e.jsx(r,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"})]})}),e.jsx(s,{className:"mt-4",variant:"success",dismissible:!0,children:e.jsxs("div",{children:[e.jsx(i,{children:"This is a Success alert"}),e.jsx(r,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"})]})}),e.jsx(s,{className:"mt-4",variant:"warning",dismissible:!0,children:e.jsxs("div",{children:[e.jsx(i,{children:"This is a Warning alert"}),e.jsx(r,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"})]})}),e.jsx(s,{className:"mt-4",variant:"danger",dismissible:!0,children:e.jsxs("div",{children:[e.jsx(i,{children:"This is a Danger alert"}),e.jsx(r,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"})]})})]})},p={render:()=>e.jsxs("div",{className:"w-full max-w-2xl space-y-4",children:[e.jsx(s,{variant:"primary",dismissible:!0,children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(l,{className:"text-xl mt-1.5 shrink-0",size:20}),e.jsxs("div",{className:"flex-1",children:[e.jsx(i,{children:"This is a Primary alert"}),e.jsx(r,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"})]})]})}),e.jsx(s,{className:"mt-4",variant:"success",dismissible:!0,children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(v,{className:"text-xl mt-1.5 shrink-0",size:20}),e.jsxs("div",{className:"flex-1",children:[e.jsx(i,{children:"This is a Success alert"}),e.jsx(r,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"})]})]})}),e.jsx(s,{className:"mt-4",variant:"warning",dismissible:!0,children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(O,{className:"text-xl mt-1.5 shrink-0",size:20}),e.jsxs("div",{className:"flex-1",children:[e.jsx(i,{children:"This is a Warning alert"}),e.jsx(r,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"})]})]})}),e.jsx(s,{className:"mt-4",variant:"danger",dismissible:!0,children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(N,{className:"text-xl mt-1.5 shrink-0",size:20}),e.jsxs("div",{className:"flex-1",children:[e.jsx(i,{children:"This is a Danger alert"}),e.jsx(r,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"})]})]})})]})},h={args:{variant:"primary",children:"This is a primary alert",dismissible:!0}},y={args:{variant:"success",children:"This is a success alert",dismissible:!0,icon:e.jsx(v,{})}},x={args:{variant:"warning",children:"This is a warning alert",dismissible:!0,icon:e.jsx(A,{})}},g={args:{variant:"danger",children:"This is a danger alert",dismissible:!0,icon:e.jsx(R,{})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl space-y-4">
      <Alert variant="primary" dismissible>
        This is a Primary alert
      </Alert>
      <Alert className='mt-4' variant="secondary" dismissible>
        This is a Secondary alert
      </Alert>
      <Alert className='mt-4' variant="success" dismissible>
        This is a Success alert
      </Alert>
      <Alert className='mt-4' variant="warning" dismissible>
        This is a Warning alert
      </Alert>
      <Alert className='mt-4' variant="info" dismissible>
        This is a Info alert
      </Alert>
      <Alert className='mt-4' variant="danger" dismissible>
        This is a Danger alert
      </Alert>
    </div>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl space-y-4">
      <Alert variant="primary-outline" dismissible>
        This is a Primary alert
      </Alert>
      <Alert className='mt-4' variant="secondary-outline" dismissible>
        This is a Secondary alert
      </Alert>
      <Alert className='mt-4' variant="success-outline" dismissible>
        This is a Success alert
      </Alert>
      <Alert className='mt-4' variant="warning-outline" dismissible>
        This is a Warning alert
      </Alert>
      <Alert className='mt-4' variant="info-outline" dismissible>
        This is a Info alert
      </Alert>
      <Alert className='mt-4' variant="danger-outline" dismissible>
        This is a Danger alert
      </Alert>
    </div>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-4xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Alert variant="primary-solid" dismissible>
            This is a Primary alert
          </Alert>
          <Alert className='mt-4' variant="success-solid" dismissible>
            This is a Success alert
          </Alert>
          <Alert className='mt-4' variant="info-solid" dismissible>
            This is a Info alert
          </Alert>
        </div>
        <div className="space-y-4">
          <Alert variant="secondary-solid" dismissible>
            This is a Secondary alert
          </Alert>
          <Alert className='mt-4' variant="warning-solid" dismissible>
            This is a Warning alert
          </Alert>
          <Alert className='mt-4' variant="danger-solid" dismissible>
            This is a Danger alert
          </Alert>
        </div>
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl space-y-4">
      <Alert variant="primary" icon={<Smile />} dismissible>
        This is a Primary alert
      </Alert>
      <Alert className='mt-4' variant="secondary" icon={<Smile />} dismissible>
        This is a Secondary alert
      </Alert>
      <Alert className='mt-4' variant="success" icon={<CheckCircle />} dismissible>
        This is a Success alert
      </Alert>
      <Alert className='mt-4' variant="warning" icon={<AlertTriangle />} dismissible>
        This is a Warning alert
      </Alert>
      <Alert className='mt-4' variant="info" icon={<Info />} dismissible>
        This is a Info alert
      </Alert>
      <Alert className='mt-4' variant="danger" icon={<Trash2 />} dismissible>
        This is a Danger alert
      </Alert>
    </div>
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl space-y-4">
      <Alert variant="primary" style="left-border" icon={<Smile />} dismissible>
        This is a Primary alert
      </Alert>
      <Alert className='mt-4' variant="secondary" style="left-border" icon={<Smile />} dismissible>
        This is a Secondary alert
      </Alert>
      <Alert className='mt-4' variant="success" style="left-border" icon={<CheckCircle />} dismissible>
        This is a Success alert
      </Alert>
      <Alert className='mt-4' variant="warning" style="left-border" icon={<AlertTriangle />} dismissible>
        This is a Warning alert
      </Alert>
      <Alert className='mt-4' variant="info" style="left-border" icon={<Link />} dismissible>
        This is a Info alert
      </Alert>
      <Alert className='mt-4' variant="danger" style="left-border" icon={<Trash2 />} dismissible>
        This is a Danger alert
      </Alert>
    </div>
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl space-y-4">
      <Alert variant="primary" dismissible>
        <div>
          <AlertTitle>This is a Primary alert</AlertTitle>
          <AlertDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </AlertDescription>
        </div>
      </Alert>
      <Alert className='mt-4' variant="success" dismissible>
        <div>
          <AlertTitle>This is a Success alert</AlertTitle>
          <AlertDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </AlertDescription>
        </div>
      </Alert>
      <Alert className='mt-4' variant="warning" dismissible>
        <div>
          <AlertTitle>This is a Warning alert</AlertTitle>
          <AlertDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </AlertDescription>
        </div>
      </Alert>
      <Alert className='mt-4' variant="danger" dismissible>
        <div>
          <AlertTitle>This is a Danger alert</AlertTitle>
          <AlertDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </AlertDescription>
        </div>
      </Alert>
    </div>
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-2xl space-y-4">
      <Alert variant="primary" dismissible>
        <div className="flex items-start gap-2">
          <Smile className="text-xl mt-1.5 shrink-0" size={20} />
          <div className="flex-1">
            <AlertTitle>This is a Primary alert</AlertTitle>
            <AlertDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            </AlertDescription>
          </div>
        </div>
      </Alert>
      <Alert className='mt-4' variant="success" dismissible>
        <div className="flex items-start gap-2">
          <CheckCircle className="text-xl mt-1.5 shrink-0" size={20} />
          <div className="flex-1">
            <AlertTitle>This is a Success alert</AlertTitle>
            <AlertDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            </AlertDescription>
          </div>
        </div>
      </Alert>
      <Alert className='mt-4' variant="warning" dismissible>
        <div className="flex items-start gap-2">
          <Clock className="text-xl mt-1.5 shrink-0" size={20} />
          <div className="flex-1">
            <AlertTitle>This is a Warning alert</AlertTitle>
            <AlertDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            </AlertDescription>
          </div>
        </div>
      </Alert>
      <Alert className='mt-4' variant="danger" dismissible>
        <div className="flex items-start gap-2">
          <Trash2 className="text-xl mt-1.5 shrink-0" size={20} />
          <div className="flex-1">
            <AlertTitle>This is a Danger alert</AlertTitle>
            <AlertDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            </AlertDescription>
          </div>
        </div>
      </Alert>
    </div>
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'This is a primary alert',
    dismissible: true
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'This is a success alert',
    dismissible: true,
    icon: <CheckCircle />
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'This is a warning alert',
    dismissible: true,
    icon: <AlertTriangle />
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'This is a danger alert',
    dismissible: true,
    icon: <XCircle />
  }
}`,...g.parameters?.docs?.source}}};const re=["DefaultAlerts","OutlineAlerts","SolidAlerts","AlertsWithIcons","LeftBorderAlerts","AlertsWithDescription","AlertsWithIconsAndDescription","Primary","Success","Warning","Danger"];export{u as AlertsWithDescription,c as AlertsWithIcons,p as AlertsWithIconsAndDescription,g as Danger,n as DefaultAlerts,o as LeftBorderAlerts,d as OutlineAlerts,h as Primary,m as SolidAlerts,y as Success,x as Warning,re as __namedExportsOrder,ie as default};
