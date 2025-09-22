import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as a}from"./Label-CSXOFAaB.js";import{I as r}from"./Input-5FDvGJ5N.js";import{C as n}from"./Checkbox-mWqrso1E.js";import"./iframe-Qt5oSwMJ.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CLPx1PJn.js";import"./index-_UCC6T1W.js";import"./index-WflaTyO2.js";import"./utils-CBfrqCZ4.js";import"./index-C80UOr6P.js";import"./index-CPJsY9QR.js";import"./index-B49lZ3M8.js";import"./index-f9RFUtYr.js";import"./index-CfjwIbJn.js";import"./index-C78Z9C4M.js";import"./check-B1BZXOyG.js";import"./createLucideIcon-BFHFUq0v.js";const I={title:"Components/Label",component:a,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{children:"Your email address"}},t={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsx(a,{htmlFor:"email",children:"Email"}),e.jsx(r,{type:"email",id:"email",placeholder:"Email"})]})},m={render:()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(n,{id:"terms2"}),e.jsx(a,{htmlFor:"terms2",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Accept terms and conditions"})]})},l={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsxs(a,{htmlFor:"name",children:["Full Name ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx(r,{type:"text",id:"name",placeholder:"Enter your full name"})]})},i={render:()=>e.jsxs("div",{className:"w-full max-w-sm space-y-4",children:[e.jsxs("div",{className:"grid items-center gap-1.5",children:[e.jsx(a,{htmlFor:"firstName",children:"First Name"}),e.jsx(r,{type:"text",id:"firstName",placeholder:"John"})]}),e.jsxs("div",{className:"grid items-center gap-1.5",children:[e.jsx(a,{htmlFor:"lastName",children:"Last Name"}),e.jsx(r,{type:"text",id:"lastName",placeholder:"Doe"})]}),e.jsxs("div",{className:"grid items-center gap-1.5",children:[e.jsx(a,{htmlFor:"email",children:"Email"}),e.jsx(r,{type:"email",id:"email",placeholder:"john@example.com"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Your email address'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
      <Checkbox id="terms2" />
      <Label htmlFor="terms2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Accept terms and conditions
      </Label>
    </div>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="name">
        Full Name <span className="text-red-500">*</span>
      </Label>
      <Input type="text" id="name" placeholder="Enter your full name" />
    </div>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-sm space-y-4">
      <div className="grid items-center gap-1.5">
        <Label htmlFor="firstName">First Name</Label>
        <Input type="text" id="firstName" placeholder="John" />
      </div>
      <div className="grid items-center gap-1.5">
        <Label htmlFor="lastName">Last Name</Label>
        <Input type="text" id="lastName" placeholder="Doe" />
      </div>
      <div className="grid items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="john@example.com" />
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};const C=["Default","WithInput","WithCheckbox","Required","FormExample"];export{s as Default,i as FormExample,l as Required,m as WithCheckbox,t as WithInput,C as __namedExportsOrder,I as default};
