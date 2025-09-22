import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as r}from"./Badge-Dv3JjJFQ.js";import"./iframe-DOiQMosy.js";import"./preload-helper-D9Z9MdNV.js";import"./index-B7oU9TFQ.js";import"./index-CdJFUDDL.js";import"./utils-CBfrqCZ4.js";const g={title:"Components/Badge",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","secondary","destructive","outline"]}}},a={args:{children:"Badge"}},t={args:{variant:"secondary",children:"Secondary"}},s={args:{variant:"destructive",children:"Destructive"}},n={args:{variant:"outline",children:"Outline"}},c={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{children:"Default"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"destructive",children:"Destructive"}),e.jsx(r,{variant:"outline",children:"Outline"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: 'Destructive'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
}`,...c.parameters?.docs?.source}}};const v=["Default","Secondary","Destructive","Outline","AllVariants"];export{c as AllVariants,a as Default,s as Destructive,n as Outline,t as Secondary,v as __namedExportsOrder,g as default};
