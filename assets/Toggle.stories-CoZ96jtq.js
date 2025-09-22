import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as a,B as n,I as c,U as m}from"./Toggle-XHSFL1Fs.js";import"./createLucideIcon-DLQ91j1X.js";import"./iframe-CqjzB_ih.js";import"./preload-helper-D9Z9MdNV.js";import"./index-D60pQwju.js";import"./index-By_MgWmR.js";import"./index-3ONt-hBQ.js";import"./index-BmsruuLr.js";import"./index-rgTc8_Xw.js";import"./index-CdJFUDDL.js";import"./utils-CBfrqCZ4.js";const f={title:"Components/Toggle",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","outline"]},size:{control:{type:"select"},options:["default","sm","lg"]}}},s={args:{children:"Toggle"}},r={args:{children:e.jsx(n,{className:"h-4 w-4"}),"aria-label":"Bold"}},l={args:{variant:"outline",children:e.jsx(c,{className:"h-4 w-4"}),"aria-label":"Italic"}},o={args:{pressed:!0,children:e.jsx(n,{className:"h-4 w-4"}),"aria-label":"Bold"}},t={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{size:"sm",children:e.jsx(n,{className:"h-3 w-3"})}),e.jsx(a,{size:"default",children:e.jsx(c,{className:"h-4 w-4"})}),e.jsx(a,{size:"lg",children:e.jsx(m,{className:"h-5 w-5"})})]})},i={render:()=>e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(a,{variant:"outline","aria-label":"Toggle bold",children:e.jsx(n,{className:"h-4 w-4"})}),e.jsx(a,{variant:"outline","aria-label":"Toggle italic",children:e.jsx(c,{className:"h-4 w-4"})}),e.jsx(a,{variant:"outline","aria-label":"Toggle underline",children:e.jsx(m,{className:"h-4 w-4"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Toggle'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Bold className="h-4 w-4" />,
    'aria-label': 'Bold'
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: <Italic className="h-4 w-4" />,
    'aria-label': 'Italic'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    pressed: true,
    children: <Bold className="h-4 w-4" />,
    'aria-label': 'Bold'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Toggle size="sm">
        <Bold className="h-3 w-3" />
      </Toggle>
      <Toggle size="default">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle size="lg">
        <Underline className="h-5 w-5" />
      </Toggle>
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-1">
      <Toggle variant="outline" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
}`,...i.parameters?.docs?.source}}};const B=["Default","WithIcon","Outline","Pressed","Sizes","TextFormatting"];export{s as Default,l as Outline,o as Pressed,t as Sizes,i as TextFormatting,r as WithIcon,B as __namedExportsOrder,f as default};
