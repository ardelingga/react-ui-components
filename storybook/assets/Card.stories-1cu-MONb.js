import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-Qt5oSwMJ.js";import{c as t}from"./utils-CBfrqCZ4.js";import{B as m}from"./Button-cb3blMKX.js";import"./preload-helper-D9Z9MdNV.js";function n({className:r,...a}){return e.jsx("div",{"data-slot":"card",className:t("bg-white text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 py-6 shadow-xl",r),...a})}function i({className:r,...a}){return e.jsx("div",{"data-slot":"card-header",className:t("flex flex-col gap-1.5 px-6",r),...a})}function l({className:r,...a}){return e.jsx("div",{"data-slot":"card-title",className:t("leading-none font-semibold",r),...a})}function p({className:r,...a}){return e.jsx("div",{"data-slot":"card-description",className:t("text-muted-foreground text-sm",r),...a})}function c({className:r,...a}){return e.jsx("div",{"data-slot":"card-content",className:t("px-6",r),...a})}function C({className:r,...a}){return e.jsx("div",{"data-slot":"card-footer",className:t("flex items-center px-6",r),...a})}n.__docgenInfo={description:"",methods:[],displayName:"Card"};i.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};C.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};l.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};p.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};c.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const N={title:"Components/Card",component:n,parameters:{layout:"centered"},tags:["autodocs"]},o={render:()=>e.jsxs(n,{className:"w-[350px]",children:[e.jsxs(i,{children:[e.jsx(l,{children:"Card Title"}),e.jsx(p,{children:"Card Description"})]}),e.jsx(c,{children:e.jsx("p",{children:"Card Content"})})]})},s={render:()=>e.jsxs(n,{className:"w-[350px]",children:[e.jsxs(i,{children:[e.jsx(l,{children:"Create project"}),e.jsx(p,{children:"Deploy your new project in one-click."})]}),e.jsx(c,{children:e.jsx("p",{children:"You can start a new project by clicking the button below."})}),e.jsxs(C,{className:"flex justify-between",children:[e.jsx(m,{variant:"primary",children:"Cancel"}),e.jsx(m,{children:"Deploy"})]})]})},d={render:()=>e.jsx(n,{className:"w-[350px]",children:e.jsx(c,{className:"",children:e.jsx("p",{children:"This is a simple card with just content."})})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>You can start a new project by clicking the button below.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="primary">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardContent className="">
        <p>This is a simple card with just content.</p>
      </CardContent>
    </Card>
}`,...d.parameters?.docs?.source}}};const y=["Default","WithFooter","SimpleCard"];export{o as Default,d as SimpleCard,s as WithFooter,y as __namedExportsOrder,N as default};
