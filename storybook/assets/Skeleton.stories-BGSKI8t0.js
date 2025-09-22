import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as t}from"./utils-CBfrqCZ4.js";function s({className:c,...o}){return e.jsx("div",{"data-slot":"skeleton",className:t("bg-gray-200 animate-pulse rounded-md",c),...o})}s.__docgenInfo={description:"",methods:[],displayName:"Skeleton"};const m={title:"Components/Skeleton",component:s,parameters:{layout:"centered"},tags:["autodocs"]},a={render:()=>e.jsx(s,{className:"w-[100px] h-[20px] rounded-full"})},r={render:()=>e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(s,{className:"h-12 w-12 rounded-full"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{className:"h-4 w-[250px]"}),e.jsx(s,{className:"h-4 w-[200px]"})]})]})},n={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{className:"h-4 w-[350px]"}),e.jsx(s,{className:"h-4 w-[300px]"}),e.jsx(s,{className:"h-4 w-[250px]"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Skeleton className="w-[100px] h-[20px] rounded-full" />
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Skeleton className="h-4 w-[350px]" />
      <Skeleton className="h-4 w-[300px]" />
      <Skeleton className="h-4 w-[250px]" />
    </div>
}`,...n.parameters?.docs?.source}}};const p=["Default","Card","Article"];export{n as Article,r as Card,a as Default,p as __namedExportsOrder,m as default};
