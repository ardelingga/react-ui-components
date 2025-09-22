import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-CqjzB_ih.js";import{R as j,T as y,C as N,a as v,b as _,D as b,P as T,O as C}from"./index-BX_UNxHu.js";import{c as t}from"./utils-CBfrqCZ4.js";import{X as I}from"./x-8hFtbXn-.js";import{B as i}from"./Button-BDC9PhyQ.js";import{I as u}from"./Input-BVLYS5Tl.js";import{L as x}from"./Label-dpQbpX6X.js";import"./preload-helper-D9Z9MdNV.js";import"./index-D60pQwju.js";import"./index-By_MgWmR.js";import"./index-rgTc8_Xw.js";import"./index-CLvN1Vpq.js";import"./index-D0wKRynX.js";import"./index-Fm3pDOxC.js";import"./index-3ONt-hBQ.js";import"./index-BmsruuLr.js";import"./index-D8zJG5ZV.js";import"./index-DX6MsNW_.js";import"./index-8iYauAcL.js";import"./index-D4dwrSQX.js";import"./createLucideIcon-DLQ91j1X.js";function n({...a}){return e.jsx(j,{"data-slot":"dialog",...a})}function l({...a}){return e.jsx(y,{"data-slot":"dialog-trigger",...a})}function h({...a}){return e.jsx(T,{"data-slot":"dialog-portal",...a})}function f({className:a,...o}){return e.jsx(C,{"data-slot":"dialog-overlay",className:t("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",a),...o})}function d({className:a,children:o,...D}){return e.jsxs(h,{"data-slot":"dialog-portal",children:[e.jsx(f,{}),e.jsxs(N,{"data-slot":"dialog-content",className:t("bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",a),...D,children:[o,e.jsxs(v,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",children:[e.jsx(I,{}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function c({className:a,...o}){return e.jsx("div",{"data-slot":"dialog-header",className:t("flex flex-col gap-2 text-center sm:text-left",a),...o})}function m({className:a,...o}){return e.jsx("div",{"data-slot":"dialog-footer",className:t("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",a),...o})}function g({className:a,...o}){return e.jsx(_,{"data-slot":"dialog-title",className:t("text-lg leading-none font-semibold",a),...o})}function p({className:a,...o}){return e.jsx(b,{"data-slot":"dialog-description",className:t("text-muted-foreground text-sm",a),...o})}n.__docgenInfo={description:"",methods:[],displayName:"Dialog"};d.__docgenInfo={description:"",methods:[],displayName:"DialogContent"};p.__docgenInfo={description:"",methods:[],displayName:"DialogDescription"};m.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};c.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"};f.__docgenInfo={description:"",methods:[],displayName:"DialogOverlay"};h.__docgenInfo={description:"",methods:[],displayName:"DialogPortal"};g.__docgenInfo={description:"",methods:[],displayName:"DialogTitle"};l.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger"};const W={title:"Components/Dialog",component:n,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsxs(n,{children:[e.jsx(l,{asChild:!0,children:e.jsx(i,{className:"cursor-pointer",variant:"primary",children:"Open Dialog"})}),e.jsxs(d,{className:"sm:max-w-[425px]",children:[e.jsxs(c,{children:[e.jsx(g,{children:"Edit profile"}),e.jsx(p,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(x,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(u,{id:"name",defaultValue:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(x,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(u,{id:"username",defaultValue:"@peduarte",className:"col-span-3"})]})]}),e.jsx(m,{children:e.jsx(i,{type:"submit",children:"Save changes"})})]})]})},r={render:()=>e.jsxs(n,{children:[e.jsx(l,{asChild:!0,children:e.jsx(i,{className:"cursor-pointer",variant:"secondary",children:"Simple Dialog"})}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(g,{children:"Are you absolutely sure?"}),e.jsx(p,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsx(m,{children:e.jsx(i,{variant:"danger",children:"Delete Account"})})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button className='cursor-pointer' variant="primary">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button className='cursor-pointer' variant="secondary">Simple Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="danger">Delete Account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...r.parameters?.docs?.source}}};const Y=["Default","Simple"];export{s as Default,r as Simple,Y as __namedExportsOrder,W as default};
