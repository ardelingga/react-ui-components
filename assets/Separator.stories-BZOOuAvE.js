import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./iframe-CqjzB_ih.js";import{P as u}from"./index-3ONt-hBQ.js";import{c as N}from"./utils-CBfrqCZ4.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BmsruuLr.js";import"./index-rgTc8_Xw.js";var h="Separator",d="horizontal",f=["horizontal","vertical"],m=v.forwardRef((s,o)=>{const{decorative:c,orientation:t=d,...p}=s,l=j(t)?t:d,x=c?{role:"none"}:{"aria-orientation":l==="vertical"?l:void 0,role:"separator"};return e.jsx(u.div,{"data-orientation":l,...x,...p,ref:o})});m.displayName=h;function j(s){return f.includes(s)}var g=m;function a({className:s,orientation:o="horizontal",decorative:c=!0,...t}){return e.jsx(g,{"data-slot":"separator-root",decorative:c,orientation:o,className:N("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",s),...t})}a.__docgenInfo={description:"",methods:[],displayName:"Separator",props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},decorative:{defaultValue:{value:"true",computed:!1},required:!1}}};const z={title:"Components/Separator",component:a,parameters:{layout:"centered"},tags:["autodocs"]},r={render:()=>e.jsxs("div",{className:"w-64",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h4",{className:"text-sm font-medium leading-none",children:"Radix Primitives"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"An open-source UI component library."})]}),e.jsx(a,{className:"my-4"}),e.jsxs("div",{className:"flex h-5 items-center space-x-4 text-sm",children:[e.jsx("div",{children:"Blog"}),e.jsx(a,{orientation:"vertical"}),e.jsx("div",{children:"Docs"}),e.jsx(a,{orientation:"vertical"}),e.jsx("div",{children:"Source"})]})]})},n={render:()=>e.jsxs("div",{className:"flex h-5 items-center space-x-4 text-sm",children:[e.jsx("div",{children:"Blog"}),e.jsx(a,{orientation:"vertical"}),e.jsx("div",{children:"Docs"}),e.jsx(a,{orientation:"vertical"}),e.jsx("div",{children:"Source"})]})},i={render:()=>e.jsxs("div",{className:"rounded-lg border p-6 w-80",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Account Settings"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Manage your account preferences and settings."})]}),e.jsx(a,{className:"my-4"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm",children:"Email notifications"}),e.jsx("span",{className:"text-sm text-green-600",children:"Enabled"})]}),e.jsx(a,{}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm",children:"Two-factor auth"}),e.jsx("span",{className:"text-sm text-red-600",children:"Disabled"})]}),e.jsx(a,{}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-sm",children:"API access"}),e.jsx("span",{className:"text-sm text-green-600",children:"Enabled"})]})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-64">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="rounded-lg border p-6 w-80">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Account Settings</h3>
        <p className="text-sm text-gray-600">
          Manage your account preferences and settings.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-sm">Email notifications</span>
          <span className="text-sm text-green-600">Enabled</span>
        </div>
        <Separator />
        <div className="flex justify-between">
          <span className="text-sm">Two-factor auth</span>
          <span className="text-sm text-red-600">Disabled</span>
        </div>
        <Separator />
        <div className="flex justify-between">
          <span className="text-sm">API access</span>
          <span className="text-sm text-green-600">Enabled</span>
        </div>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};const O=["Horizontal","Vertical","InCard"];export{r as Horizontal,i as InCard,n as Vertical,O as __namedExportsOrder,z as default};
