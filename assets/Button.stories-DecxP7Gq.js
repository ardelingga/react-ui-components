import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as a}from"./Button-BDC9PhyQ.js";import"./iframe-CqjzB_ih.js";import"./preload-helper-D9Z9MdNV.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,B={title:"Components/Button",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","success","info","warning","danger","dark","light","link"]},size:{control:{type:"select"},options:["sm","md","lg","xl"]},disabled:{control:{type:"boolean"}},loading:{control:{type:"boolean"}}},args:{onClick:h()}},e={args:{children:"All Variants"},render:()=>r.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[r.jsx(a,{variant:"primary",children:"Primary"}),r.jsx(a,{variant:"secondary",children:"Secondary"}),r.jsx(a,{variant:"success",children:"Success"}),r.jsx(a,{variant:"info",children:"Info"}),r.jsx(a,{variant:"warning",children:"Warning"}),r.jsx(a,{variant:"danger",children:"Danger"}),r.jsx(a,{variant:"dark",children:"Dark"}),r.jsx(a,{variant:"link",children:"Link"}),r.jsx(a,{variant:"light",children:"Light"})]})},n={args:{variant:"primary",children:"Primary"}},s={args:{variant:"secondary",children:"Secondary"}},t={args:{variant:"success",children:"Success"}},i={args:{variant:"info",children:"Info"}},o={args:{variant:"warning",children:"Warning"}},c={args:{variant:"danger",children:"Danger"}},d={args:{variant:"dark",children:"Dark"}},l={args:{variant:"light",children:"Light"}},m={args:{variant:"link",children:"Link"}},g={args:{variant:"primary",children:"Button"},render:()=>r.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[r.jsx(a,{size:"sm",children:"Small"}),r.jsx(a,{size:"md",children:"Medium"}),r.jsx(a,{size:"lg",children:"Large"}),r.jsx(a,{size:"xl",children:"Extra Large"})]})},u={args:{variant:"primary",children:"Loading...",loading:!0}},p={args:{variant:"primary",children:"Disabled",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'All Variants'
  },
  render: () => <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="info">Info</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <Button variant="light">Light</Button>
    </div>
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Success'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'Info'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'Warning'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Danger'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dark',
    children: 'Dark'
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    children: 'Light'
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    children: 'Link'
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Button'
  },
  render: () => <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Loading...',
    loading: true
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Disabled',
    disabled: true
  }
}`,...p.parameters?.docs?.source}}};const f=["AllVariants","Primary","Secondary","Success","Info","Warning","Danger","Dark","Light","Link","AllSizes","LoadingState","DisabledState"];export{g as AllSizes,e as AllVariants,c as Danger,d as Dark,p as DisabledState,i as Info,l as Light,m as Link,u as LoadingState,n as Primary,s as Secondary,t as Success,o as Warning,f as __namedExportsOrder,B as default};
