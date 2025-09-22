import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-CqjzB_ih.js";import{S as x}from"./index-rgTc8_Xw.js";import{c}from"./utils-CBfrqCZ4.js";import{C as p}from"./chevron-right-BJ1jFQ52.js";import{E as j}from"./ellipsis-i3VpIxGP.js";import{H as f}from"./house-CdibKN0P.js";import"./preload-helper-D9Z9MdNV.js";import"./createLucideIcon-DLQ91j1X.js";function d({...e}){return r.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...e})}function u({className:e,...a}){return r.jsx("ol",{"data-slot":"breadcrumb-list",className:c("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",e),...a})}function n({className:e,...a}){return r.jsx("li",{"data-slot":"breadcrumb-item",className:c("inline-flex items-center gap-1.5",e),...a})}function m({asChild:e,className:a,...b}){const h=e?x:"a";return r.jsx(h,{"data-slot":"breadcrumb-link",className:c("hover:text-foreground transition-colors",a),...b})}function l({className:e,...a}){return r.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:c("text-foreground font-normal",e),...a})}function s({children:e,className:a,...b}){return r.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:c("[&>svg]:size-3.5",a),...b,children:e??r.jsx(p,{})})}function B({className:e,...a}){return r.jsxs("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:c("flex size-9 items-center justify-center",e),...a,children:[r.jsx(j,{className:"size-4"}),r.jsx("span",{className:"sr-only",children:"More"})]})}d.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};u.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};n.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};m.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};s.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};B.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis"};const z={title:"Components/Breadcrumb",component:d,parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>r.jsx(d,{children:r.jsxs(u,{children:[r.jsx(n,{children:r.jsx(m,{href:"/",children:"Home"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(m,{href:"/components",children:"Components"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(l,{children:"Breadcrumb"})})]})})},o={render:()=>r.jsx(d,{children:r.jsxs(u,{children:[r.jsx(n,{children:r.jsxs(m,{href:"/",className:"flex items-center gap-2",children:[r.jsx(f,{size:16}),"Home"]})}),r.jsx(s,{children:r.jsx(p,{size:16})}),r.jsx(n,{children:r.jsx(m,{href:"/components",children:"Components"})}),r.jsx(s,{children:r.jsx(p,{size:16})}),r.jsx(n,{children:r.jsx(l,{children:"Breadcrumb"})})]})})},i={render:()=>r.jsx(d,{children:r.jsxs(u,{children:[r.jsx(n,{children:r.jsx(m,{href:"/",children:"Home"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(B,{})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(m,{href:"/components",children:"Components"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(l,{children:"Breadcrumb"})})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="flex items-center gap-2">
            <Home size={16} />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight size={16} />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight size={16} />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...i.parameters?.docs?.source}}};const E=["Default","WithIcons","WithEllipsis"];export{t as Default,i as WithEllipsis,o as WithIcons,E as __namedExportsOrder,z as default};
