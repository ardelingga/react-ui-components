import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-Qt5oSwMJ.js";import{R as B,T,C,a as M,b as _,D as k,P as D,O as F}from"./index-cGnpKj9W.js";import{c as r}from"./utils-CBfrqCZ4.js";import{X as H}from"./x-Act6G2Wj.js";import{B as t}from"./Button-cb3blMKX.js";import{I as g}from"./Input-5FDvGJ5N.js";import{L as N}from"./Label-CSXOFAaB.js";import{c as P}from"./createLucideIcon-BFHFUq0v.js";import{U as j}from"./user-BYc6MI5T.js";import{S as v}from"./settings-7MiRr4i6.js";import{B as y}from"./bell-B_gkcGjg.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CPJsY9QR.js";import"./index-B49lZ3M8.js";import"./index-WflaTyO2.js";import"./index-C80UOr6P.js";import"./index-d-A6Sjsy.js";import"./index-By9wiX_9.js";import"./index-CLPx1PJn.js";import"./index-_UCC6T1W.js";import"./index-pSg3cdo5.js";import"./index-BtUBx33_.js";import"./index-BG6ZVhmD.js";import"./index-C78Z9C4M.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],S=P("menu",I);function n({...s}){return e.jsx(B,{"data-slot":"sheet",...s})}function o({...s}){return e.jsx(T,{"data-slot":"sheet-trigger",...s})}function O({...s}){return e.jsx(D,{"data-slot":"sheet-portal",...s})}function L({className:s,...a}){return e.jsx(F,{"data-slot":"sheet-overlay",className:r("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",s),...a})}function i({className:s,children:a,side:m="right",...w}){return e.jsxs(O,{children:[e.jsx(L,{}),e.jsxs(C,{"data-slot":"sheet-content",className:r("bg-white data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",m==="right"&&"data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",m==="left"&&"data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",m==="top"&&"data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",m==="bottom"&&"data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",s),...w,children:[a,e.jsxs(M,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",children:[e.jsx(H,{className:"size-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function l({className:s,...a}){return e.jsx("div",{"data-slot":"sheet-header",className:r("flex flex-col gap-1.5 p-4",s),...a})}function b({className:s,...a}){return e.jsx("div",{"data-slot":"sheet-footer",className:r("mt-auto flex flex-col gap-2 p-4",s),...a})}function c({className:s,...a}){return e.jsx(_,{"data-slot":"sheet-title",className:r("text-foreground font-semibold",s),...a})}function d({className:s,...a}){return e.jsx(k,{"data-slot":"sheet-description",className:r("text-muted-foreground text-sm",s),...a})}n.__docgenInfo={description:"",methods:[],displayName:"Sheet"};o.__docgenInfo={description:"",methods:[],displayName:"SheetTrigger"};i.__docgenInfo={description:"",methods:[],displayName:"SheetContent",props:{side:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"right"',computed:!1}}}};l.__docgenInfo={description:"",methods:[],displayName:"SheetHeader"};b.__docgenInfo={description:"",methods:[],displayName:"SheetFooter"};c.__docgenInfo={description:"",methods:[],displayName:"SheetTitle"};d.__docgenInfo={description:"",methods:[],displayName:"SheetDescription"};const ce={title:"Components/Sheet",component:n,parameters:{layout:"centered"},tags:["autodocs"]},h={render:()=>e.jsxs(n,{children:[e.jsx(o,{asChild:!0,children:e.jsx(t,{variant:"secondary",children:"Open Sheet"})}),e.jsxs(i,{children:[e.jsxs(l,{children:[e.jsx(c,{children:"Edit profile"}),e.jsx(d,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(N,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(g,{id:"name",defaultValue:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(N,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(g,{id:"username",defaultValue:"@peduarte",className:"col-span-3"})]})]}),e.jsx(b,{children:e.jsx(t,{type:"submit",children:"Save changes"})})]})]})},u={render:()=>e.jsxs(n,{children:[e.jsx(o,{asChild:!0,children:e.jsx(t,{variant:"secondary",children:e.jsx(S,{className:"h-4 w-4"})})}),e.jsxs(i,{side:"left",className:"w-[300px]",children:[e.jsxs(l,{children:[e.jsx(c,{children:"Navigation"}),e.jsx(d,{children:"Quick access to main sections"})]}),e.jsxs("div",{className:"py-4 space-y-4 mx-4",children:[e.jsxs(t,{variant:"secondary",className:"w-full justify-start",children:[e.jsx(j,{className:"mr-2 h-4 w-4"}),"Profile"]}),e.jsxs(t,{variant:"secondary",className:"w-full justify-start",children:[e.jsx(v,{className:"mr-2 h-4 w-4"}),"Settings"]}),e.jsxs(t,{variant:"secondary",className:"w-full justify-start",children:[e.jsx(y,{className:"mr-2 h-4 w-4"}),"Notifications"]})]})]})]})},p={render:()=>e.jsxs(n,{children:[e.jsx(o,{asChild:!0,children:e.jsx(t,{variant:"secondary",children:"Open from Top"})}),e.jsxs(i,{side:"top",className:"h-[300px]",children:[e.jsxs(l,{children:[e.jsx(c,{children:"Notifications"}),e.jsx(d,{children:"Recent notifications and updates"})]}),e.jsx("div",{className:"py-4",children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-blue-50 rounded-lg",children:[e.jsx("p",{className:"text-sm font-medium",children:"New message received"}),e.jsx("p",{className:"text-xs text-gray-600",children:"2 minutes ago"})]}),e.jsxs("div",{className:"p-3 bg-green-50 rounded-lg",children:[e.jsx("p",{className:"text-sm font-medium",children:"Task completed"}),e.jsx("p",{className:"text-xs text-gray-600",children:"5 minutes ago"})]}),e.jsxs("div",{className:"p-3 bg-yellow-50 rounded-lg",children:[e.jsx("p",{className:"text-sm font-medium",children:"Reminder: Meeting at 3 PM"}),e.jsx("p",{className:"text-xs text-gray-600",children:"10 minutes ago"})]})]})})]})]})},x={render:()=>e.jsxs(n,{children:[e.jsx(o,{asChild:!0,children:e.jsx(t,{variant:"secondary",children:"Open from Bottom"})}),e.jsxs(i,{side:"bottom",className:"h-[400px]",children:[e.jsxs(l,{children:[e.jsx(c,{children:"Quick Actions"}),e.jsx(d,{children:"Frequently used actions and shortcuts"})]}),e.jsx("div",{className:"py-4",children:e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs(t,{variant:"secondary",className:"h-20 flex-col",children:[e.jsx(j,{className:"h-6 w-6 mb-2"}),"Profile"]}),e.jsxs(t,{variant:"secondary",className:"h-20 flex-col",children:[e.jsx(v,{className:"h-6 w-6 mb-2"}),"Settings"]}),e.jsxs(t,{variant:"secondary",className:"h-20 flex-col",children:[e.jsx(y,{className:"h-6 w-6 mb-2"}),"Alerts"]})]})})]})]})},f={render:()=>e.jsxs(n,{children:[e.jsx(o,{asChild:!0,children:e.jsx(t,{variant:"secondary",size:"sm",children:e.jsx(S,{className:"h-6 w-6"})})}),e.jsx(i,{side:"left",className:"w-[280px] p-0",children:e.jsxs("div",{className:"flex flex-col h-full",children:[e.jsx(l,{className:"p-6 pb-4 border-b",children:e.jsx(c,{children:"Menu"})}),e.jsx("div",{className:"flex-1 overflow-auto",children:e.jsxs("nav",{className:"p-4 space-y-2",children:[e.jsx(t,{variant:"secondary",className:"w-full justify-start h-12",children:"Home"}),e.jsx(t,{variant:"secondary",className:"w-full justify-start h-12",children:"About"}),e.jsx(t,{variant:"secondary",className:"w-full justify-start h-12",children:"Services"}),e.jsx(t,{variant:"secondary",className:"w-full justify-start h-12",children:"Portfolio"}),e.jsx(t,{variant:"secondary",className:"w-full justify-start h-12",children:"Contact"})]})}),e.jsx("div",{className:"p-4 border-t",children:e.jsx(t,{className:"w-full",children:"Get Started"})})]})})]})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
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
        <SheetFooter>
          <Button type="submit">Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px]">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>
            Quick access to main sections
          </SheetDescription>
        </SheetHeader>
        <div className="py-4 space-y-4 mx-4">
          <Button variant="secondary" className="w-full justify-start">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
          <Button variant="secondary" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button variant="secondary" className="w-full justify-start">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
        </div>
      </SheetContent>
    </Sheet>
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open from Top</Button>
      </SheetTrigger>
      <SheetContent side="top" className="h-[300px]">
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>
            Recent notifications and updates
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm font-medium">New message received</p>
              <p className="text-xs text-gray-600">2 minutes ago</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="text-sm font-medium">Task completed</p>
              <p className="text-xs text-gray-600">5 minutes ago</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <p className="text-sm font-medium">Reminder: Meeting at 3 PM</p>
              <p className="text-xs text-gray-600">10 minutes ago</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open from Bottom</Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[400px]">
        <SheetHeader>
          <SheetTitle>Quick Actions</SheetTitle>
          <SheetDescription>
            Frequently used actions and shortcuts
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <div className="grid grid-cols-3 gap-4">
            <Button variant="secondary" className="h-20 flex-col">
              <User className="h-6 w-6 mb-2" />
              Profile
            </Button>
            <Button variant="secondary" className="h-20 flex-col">
              <Settings className="h-6 w-6 mb-2" />
              Settings
            </Button>
            <Button variant="secondary" className="h-20 flex-col">
              <Bell className="h-6 w-6 mb-2" />
              Alerts
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" size="sm">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] p-0">
        <div className="flex flex-col h-full">
          <SheetHeader className="p-6 pb-4 border-b">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex-1 overflow-auto">
            <nav className="p-4 space-y-2">
              <Button variant="secondary" className="w-full justify-start h-12">
                Home
              </Button>
              <Button variant="secondary" className="w-full justify-start h-12">
                About
              </Button>
              <Button variant="secondary" className="w-full justify-start h-12">
                Services
              </Button>
              <Button variant="secondary" className="w-full justify-start h-12">
                Portfolio
              </Button>
              <Button variant="secondary" className="w-full justify-start h-12">
                Contact
              </Button>
            </nav>
          </div>
          <div className="p-4 border-t">
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
}`,...f.parameters?.docs?.source}}};const de=["Default","FromLeft","FromTop","FromBottom","MobileMenu"];export{h as Default,x as FromBottom,u as FromLeft,p as FromTop,f as MobileMenu,de as __namedExportsOrder,ce as default};
