import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as i}from"./Input-BVLYS5Tl.js";import{L as l}from"./Label-dpQbpX6X.js";import"./iframe-CqjzB_ih.js";import"./preload-helper-D9Z9MdNV.js";import"./utils-CBfrqCZ4.js";import"./index-3ONt-hBQ.js";import"./index-BmsruuLr.js";import"./index-rgTc8_Xw.js";const w={title:"Components/Input",component:i,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{placeholder:"Enter text..."}},a={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsx(l,{htmlFor:"email",children:"Email"}),e.jsx(i,{type:"email",id:"email",placeholder:"Email"})]})},s={args:{type:"password",placeholder:"Password"}},t={args:{placeholder:"Disabled input",disabled:!0}},o={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsx(l,{htmlFor:"picture",children:"Picture"}),e.jsx(i,{id:"picture",type:"file"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Password'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
}`,...o.parameters?.docs?.source}}};const b=["Default","WithLabel","Password","Disabled","WithFile"];export{r as Default,t as Disabled,s as Password,o as WithFile,a as WithLabel,b as __namedExportsOrder,w as default};
