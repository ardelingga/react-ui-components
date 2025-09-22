import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as H}from"./iframe-CqjzB_ih.js";import{c as u}from"./index-CdJFUDDL.js";import{c as h}from"./utils-CBfrqCZ4.js";import{C as V}from"./chevron-up-BQgaAAFQ.js";import{C as _}from"./chevron-down-BYbwJ4-O.js";import{c as B}from"./createLucideIcon-DLQ91j1X.js";import{B as T}from"./Button-BDC9PhyQ.js";import{B as y}from"./Badge-Bz_hwZhp.js";import{A as J}from"./Avatar-DVLzVWn_.js";import{S as $,a as F,D as E}from"./star-PNXQApiq.js";import{E as L}from"./eye-zP1S89Vf.js";import{T as U}from"./trash-2-CkFqUoOT.js";import{E as D}from"./ellipsis-i3VpIxGP.js";import"./preload-helper-D9Z9MdNV.js";import"./index-rgTc8_Xw.js";import"./index-CLvN1Vpq.js";import"./index-D8zJG5ZV.js";import"./index-By_MgWmR.js";import"./index-3ONt-hBQ.js";import"./index-BmsruuLr.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],M=B("chevrons-up-down",P);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43",key:"16m0ql"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91",key:"1vt8nq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],O=B("star-off",q),W=u("w-full caption-bottom text-sm",{variants:{variant:{default:"border-collapse",bordered:"border border-gray-200 dark:border-gray-700",striped:"border-collapse",minimal:""},size:{sm:"text-xs",md:"text-sm",lg:"text-base"}},defaultVariants:{variant:"default",size:"md"}}),G=u("[&_tr]:border-b border-gray-200 dark:border-gray-700"),Q=u("[&_tr:last-child]:border-0",{variants:{variant:{default:"",striped:"[&_tr:nth-child(even)]:bg-gray-50 dark:[&_tr:nth-child(even)]:bg-gray-800/50",hoverable:"[&_tr]:hover:bg-gray-50 dark:[&_tr]:hover:bg-gray-800/50 [&_tr]:transition-colors"}},defaultVariants:{variant:"default"}}),K=u("border-b border-gray-200 dark:border-gray-700 transition-colors hover:bg-gray-50/50 dark:hover:bg-gray-800/50 data-[state=selected]:bg-gray-100 dark:data-[state=selected]:bg-gray-800"),R=u("p-4 align-middle [&:has([role=checkbox])]:pr-0",{variants:{variant:{default:"",head:"h-12 px-4 text-left align-middle font-medium text-gray-500 dark:text-gray-400 [&:has([role=checkbox])]:pr-0",cell:"p-4 align-middle [&:has([role=checkbox])]:pr-0"},size:{sm:"p-2 h-8",md:"p-4 h-12",lg:"p-6 h-16"}},defaultVariants:{variant:"default",size:"md"}});function o({className:s,variant:r,size:i,...t}){return e.jsx("div",{className:"relative w-full overflow-auto",children:e.jsx("table",{className:h(W({variant:r,size:i}),s),...t})})}function c({className:s,...r}){return e.jsx("thead",{className:h(G(),s),...r})}function m({className:s,variant:r,...i}){return e.jsx("tbody",{className:h(Q({variant:r}),s),...i})}function A({className:s,...r}){return e.jsx("tfoot",{className:h("border-t bg-gray-100/50 font-medium dark:bg-gray-800/50 [&>tr]:last:border-b-0",s),...r})}function n({className:s,...r}){return e.jsx("tr",{className:h(K(),s),...r})}function l({className:s,variant:r="head",size:i,sortable:t,sortDirection:b,onSort:d,children:I,...S}){const z=e.jsxs(e.Fragment,{children:[I,t&&e.jsx("span",{className:"ml-2 inline-flex",children:b==="asc"?e.jsx(V,{className:"h-4 w-4"}):b==="desc"?e.jsx(_,{className:"h-4 w-4"}):e.jsx(M,{className:"h-4 w-4 opacity-50"})})]});return t?e.jsx("th",{className:h(R({variant:r,size:i}),"cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800",s),onClick:d,...S,children:z}):e.jsx("th",{className:h(R({variant:r,size:i}),s),...S,children:z})}function a({className:s,variant:r="cell",size:i,...t}){return e.jsx("td",{className:h(R({variant:r,size:i}),s),...t})}function x({className:s,...r}){return e.jsx("caption",{className:h("mt-4 text-sm text-gray-500 dark:text-gray-400",s),...r})}o.__docgenInfo={description:"",methods:[],displayName:"Table",composes:["VariantProps"]};c.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};m.__docgenInfo={description:"",methods:[],displayName:"TableBody",composes:["VariantProps"]};A.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};l.__docgenInfo={description:"",methods:[],displayName:"TableHead",props:{sortable:{required:!1,tsType:{name:"boolean"},description:""},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | null",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"null"}]},description:""},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{defaultValue:{value:'"head"',computed:!1},required:!1}},composes:["VariantProps"]};n.__docgenInfo={description:"",methods:[],displayName:"TableRow"};a.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{variant:{defaultValue:{value:'"cell"',computed:!1},required:!1}},composes:["VariantProps"]};x.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const ge={title:"Components/Table",component:o,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","bordered","striped","minimal"]},size:{control:{type:"select"},options:["sm","md","lg"]}}},k=[{id:"INV001",customer:"John Doe",email:"john@example.com",status:"paid",amount:"$250.00",date:"2024-01-15"},{id:"INV002",customer:"Jane Smith",email:"jane@example.com",status:"pending",amount:"$150.00",date:"2024-01-16"},{id:"INV003",customer:"Bob Johnson",email:"bob@example.com",status:"unpaid",amount:"$350.00",date:"2024-01-17"},{id:"INV004",customer:"Alice Brown",email:"alice@example.com",status:"paid",amount:"$450.00",date:"2024-01-18"}],X=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"active",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",lastLogin:"2024-01-15"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"Editor",status:"active",avatar:"https://images.unsplash.com/photo-1494790108755-2616b612c4a0?w=40&h=40&fit=crop&crop=face",lastLogin:"2024-01-14"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"User",status:"inactive",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",lastLogin:"2024-01-10"}],j={render:()=>e.jsxs(o,{children:[e.jsx(x,{children:"A list of your recent invoices."}),e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(l,{className:"w-[100px]",children:"Invoice"}),e.jsx(l,{children:"Status"}),e.jsx(l,{children:"Method"}),e.jsx(l,{className:"text-right",children:"Amount"})]})}),e.jsxs(m,{children:[e.jsxs(n,{children:[e.jsx(a,{className:"font-medium",children:"INV001"}),e.jsx(a,{children:"Paid"}),e.jsx(a,{children:"Credit Card"}),e.jsx(a,{className:"text-right",children:"$250.00"})]}),e.jsxs(n,{children:[e.jsx(a,{className:"font-medium",children:"INV002"}),e.jsx(a,{children:"Pending"}),e.jsx(a,{children:"PayPal"}),e.jsx(a,{className:"text-right",children:"$150.00"})]}),e.jsxs(n,{children:[e.jsx(a,{className:"font-medium",children:"INV003"}),e.jsx(a,{children:"Unpaid"}),e.jsx(a,{children:"Bank Transfer"}),e.jsx(a,{className:"text-right",children:"$350.00"})]})]})]})},p={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Default"}),e.jsxs(o,{children:[e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(l,{children:"Name"}),e.jsx(l,{children:"Status"}),e.jsx(l,{children:"Role"})]})}),e.jsxs(m,{children:[e.jsxs(n,{children:[e.jsx(a,{children:"John Doe"}),e.jsx(a,{children:"Active"}),e.jsx(a,{children:"Admin"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Jane Smith"}),e.jsx(a,{children:"Active"}),e.jsx(a,{children:"User"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Bordered"}),e.jsxs(o,{variant:"bordered",children:[e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(l,{children:"Name"}),e.jsx(l,{children:"Status"}),e.jsx(l,{children:"Role"})]})}),e.jsxs(m,{children:[e.jsxs(n,{children:[e.jsx(a,{children:"John Doe"}),e.jsx(a,{children:"Active"}),e.jsx(a,{children:"Admin"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Jane Smith"}),e.jsx(a,{children:"Active"}),e.jsx(a,{children:"User"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Striped"}),e.jsxs(o,{variant:"striped",children:[e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(l,{children:"Name"}),e.jsx(l,{children:"Status"}),e.jsx(l,{children:"Role"})]})}),e.jsxs(m,{variant:"striped",children:[e.jsxs(n,{children:[e.jsx(a,{children:"John Doe"}),e.jsx(a,{children:"Active"}),e.jsx(a,{children:"Admin"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Jane Smith"}),e.jsx(a,{children:"Active"}),e.jsx(a,{children:"User"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Bob Johnson"}),e.jsx(a,{children:"Inactive"}),e.jsx(a,{children:"User"})]})]})]})]})]})},g={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Small"}),e.jsxs(o,{size:"sm",children:[e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(l,{size:"sm",children:"Name"}),e.jsx(l,{size:"sm",children:"Email"}),e.jsx(l,{size:"sm",children:"Role"})]})}),e.jsx(m,{children:e.jsxs(n,{children:[e.jsx(a,{size:"sm",children:"John Doe"}),e.jsx(a,{size:"sm",children:"john@example.com"}),e.jsx(a,{size:"sm",children:"Admin"})]})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Medium (Default)"}),e.jsxs(o,{size:"md",children:[e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(l,{size:"md",children:"Name"}),e.jsx(l,{size:"md",children:"Email"}),e.jsx(l,{size:"md",children:"Role"})]})}),e.jsx(m,{children:e.jsxs(n,{children:[e.jsx(a,{size:"md",children:"John Doe"}),e.jsx(a,{size:"md",children:"john@example.com"}),e.jsx(a,{size:"md",children:"Admin"})]})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Large"}),e.jsxs(o,{size:"lg",children:[e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(l,{size:"lg",children:"Name"}),e.jsx(l,{size:"lg",children:"Email"}),e.jsx(l,{size:"lg",children:"Role"})]})}),e.jsx(m,{children:e.jsxs(n,{children:[e.jsx(a,{size:"lg",children:"John Doe"}),e.jsx(a,{size:"lg",children:"john@example.com"}),e.jsx(a,{size:"lg",children:"Admin"})]})})]})]})]})},N={render:()=>{const[s,r]=H.useState(null),[i,t]=H.useState(null),b=d=>{s===d?t(i==="asc"?"desc":i==="desc"?null:"asc"):(r(d),t("asc"))};return e.jsxs(o,{children:[e.jsx(x,{children:"Sortable invoice table"}),e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(l,{sortable:!0,sortDirection:s==="id"?i:null,onSort:()=>b("id"),children:"Invoice"}),e.jsx(l,{sortable:!0,sortDirection:s==="customer"?i:null,onSort:()=>b("customer"),children:"Customer"}),e.jsx(l,{sortable:!0,sortDirection:s==="status"?i:null,onSort:()=>b("status"),children:"Status"}),e.jsx(l,{sortable:!0,sortDirection:s==="amount"?i:null,onSort:()=>b("amount"),className:"text-right",children:"Amount"})]})}),e.jsx(m,{children:k.map(d=>e.jsxs(n,{children:[e.jsx(a,{className:"font-medium",children:d.id}),e.jsx(a,{children:d.customer}),e.jsx(a,{children:e.jsx(y,{variant:d.status==="paid"?"default":d.status==="pending"?"secondary":"destructive",children:d.status})}),e.jsx(a,{className:"text-right",children:d.amount})]},d.id))})]})}},C={render:()=>{const[s,r]=H.useState([]),i=t=>{r(b=>b.includes(t)?b.filter(d=>d!==t):[...b,t])};return e.jsxs(o,{children:[e.jsx(x,{children:"User management table with actions"}),e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(l,{className:"w-[50px]"}),e.jsx(l,{children:"User"}),e.jsx(l,{children:"Role"}),e.jsx(l,{children:"Status"}),e.jsx(l,{children:"Last Login"}),e.jsx(l,{className:"text-right",children:"Actions"})]})}),e.jsx(m,{variant:"hoverable",children:X.map(t=>e.jsxs(n,{children:[e.jsx(a,{children:e.jsx("button",{onClick:()=>i(t.id),children:s.includes(t.id)?e.jsx($,{className:"h-4 w-4 fill-yellow-400 text-yellow-400"}):e.jsx(O,{className:"h-4 w-4 text-gray-400"})})}),e.jsx(a,{children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(J,{}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:t.name}),e.jsx("div",{className:"text-sm text-gray-500",children:t.email})]})]})}),e.jsx(a,{children:e.jsx(y,{variant:"secondary",children:t.role})}),e.jsx(a,{children:e.jsx(y,{variant:t.status==="active"?"default":"secondary",children:t.status})}),e.jsx(a,{children:t.lastLogin}),e.jsx(a,{className:"text-right",children:e.jsxs("div",{className:"flex justify-end space-x-2",children:[e.jsx(T,{variant:"secondary",size:"sm",children:e.jsx(L,{className:"h-4 w-4"})}),e.jsx(T,{variant:"secondary",size:"sm",children:e.jsx(F,{className:"h-4 w-4"})}),e.jsx(T,{variant:"secondary",size:"sm",children:e.jsx(U,{className:"h-4 w-4"})}),e.jsx(T,{variant:"secondary",size:"sm",children:e.jsx(D,{className:"h-4 w-4"})})]})})]},t.id))})]})}},v={render:()=>e.jsxs(o,{children:[e.jsx(x,{children:"Sales report for Q1 2024"}),e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(l,{children:"Month"}),e.jsx(l,{className:"text-right",children:"Sales"}),e.jsx(l,{className:"text-right",children:"Profit"}),e.jsx(l,{className:"text-right",children:"Growth"})]})}),e.jsxs(m,{children:[e.jsxs(n,{children:[e.jsx(a,{className:"font-medium",children:"January"}),e.jsx(a,{className:"text-right",children:"$12,500"}),e.jsx(a,{className:"text-right",children:"$2,100"}),e.jsx(a,{className:"text-right",children:"+12%"})]}),e.jsxs(n,{children:[e.jsx(a,{className:"font-medium",children:"February"}),e.jsx(a,{className:"text-right",children:"$15,200"}),e.jsx(a,{className:"text-right",children:"$3,200"}),e.jsx(a,{className:"text-right",children:"+21%"})]}),e.jsxs(n,{children:[e.jsx(a,{className:"font-medium",children:"March"}),e.jsx(a,{className:"text-right",children:"$18,900"}),e.jsx(a,{className:"text-right",children:"$4,100"}),e.jsx(a,{className:"text-right",children:"+24%"})]})]}),e.jsx(A,{children:e.jsxs(n,{children:[e.jsx(a,{className:"font-medium",children:"Total"}),e.jsx(a,{className:"text-right font-medium",children:"$46,600"}),e.jsx(a,{className:"text-right font-medium",children:"$9,400"}),e.jsx(a,{className:"text-right font-medium",children:"+19%"})]})})]})},f={render:()=>e.jsx("div",{className:"w-full",children:e.jsxs(o,{children:[e.jsx(x,{children:"Responsive table that scrolls on smaller screens"}),e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(l,{className:"min-w-[100px]",children:"Order ID"}),e.jsx(l,{className:"min-w-[150px]",children:"Customer"}),e.jsx(l,{className:"min-w-[120px]",children:"Email"}),e.jsx(l,{className:"min-w-[100px]",children:"Status"}),e.jsx(l,{className:"min-w-[100px]",children:"Date"}),e.jsx(l,{className:"min-w-[100px] text-right",children:"Amount"}),e.jsx(l,{className:"min-w-[120px] text-right",children:"Actions"})]})}),e.jsx(m,{children:k.map(s=>e.jsxs(n,{children:[e.jsx(a,{className:"font-medium",children:s.id}),e.jsx(a,{children:s.customer}),e.jsx(a,{children:s.email}),e.jsx(a,{children:e.jsx(y,{variant:s.status==="paid"?"default":s.status==="pending"?"secondary":"destructive",children:s.status})}),e.jsx(a,{children:s.date}),e.jsx(a,{className:"text-right",children:s.amount}),e.jsx(a,{className:"text-right",children:e.jsxs("div",{className:"flex justify-end space-x-2",children:[e.jsx(T,{variant:"secondary",size:"sm",children:e.jsx(E,{className:"h-4 w-4"})}),e.jsx(T,{variant:"secondary",size:"sm",children:e.jsx(D,{className:"h-4 w-4"})})]})})]},s.id))})]})})},w={render:()=>e.jsxs(o,{children:[e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(l,{children:"Name"}),e.jsx(l,{children:"Email"}),e.jsx(l,{children:"Role"}),e.jsx(l,{children:"Status"})]})}),e.jsx(m,{children:e.jsx(n,{children:e.jsx(a,{colSpan:4,className:"h-24 text-center",children:e.jsxs("div",{className:"flex flex-col items-center justify-center space-y-2",children:[e.jsx("div",{className:"text-gray-400",children:e.jsx("svg",{className:"h-12 w-12",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsx("p",{className:"text-sm text-gray-500",children:"No data available"}),e.jsx(T,{variant:"secondary",size:"sm",children:"Add New Item"})]})})})})]})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV003</TableCell>
          <TableCell>Unpaid</TableCell>
          <TableCell>Bank Transfer</TableCell>
          <TableCell className="text-right">$350.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...j.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Default</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Bordered</h3>
        <Table variant="bordered">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Striped</h3>
        <Table variant="striped">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody variant="striped">
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bob Johnson</TableCell>
              <TableCell>Inactive</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Small</h3>
        <Table size="sm">
          <TableHeader>
            <TableRow>
              <TableHead size="sm">Name</TableHead>
              <TableHead size="sm">Email</TableHead>
              <TableHead size="sm">Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell size="sm">John Doe</TableCell>
              <TableCell size="sm">john@example.com</TableCell>
              <TableCell size="sm">Admin</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Medium (Default)</h3>
        <Table size="md">
          <TableHeader>
            <TableRow>
              <TableHead size="md">Name</TableHead>
              <TableHead size="md">Email</TableHead>
              <TableHead size="md">Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell size="md">John Doe</TableCell>
              <TableCell size="md">john@example.com</TableCell>
              <TableCell size="md">Admin</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Large</h3>
        <Table size="lg">
          <TableHeader>
            <TableRow>
              <TableHead size="lg">Name</TableHead>
              <TableHead size="lg">Email</TableHead>
              <TableHead size="lg">Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell size="lg">John Doe</TableCell>
              <TableCell size="lg">john@example.com</TableCell>
              <TableCell size="lg">Admin</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
}`,...g.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sortField, setSortField] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(null);
    const handleSort = (field: string) => {
      if (sortField === field) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? null : 'asc');
      } else {
        setSortField(field);
        setSortDirection('asc');
      }
    };
    return <Table>
        <TableCaption>Sortable invoice table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead sortable sortDirection={sortField === 'id' ? sortDirection : null} onSort={() => handleSort('id')}>
              Invoice
            </TableHead>
            <TableHead sortable sortDirection={sortField === 'customer' ? sortDirection : null} onSort={() => handleSort('customer')}>
              Customer
            </TableHead>
            <TableHead sortable sortDirection={sortField === 'status' ? sortDirection : null} onSort={() => handleSort('status')}>
              Status
            </TableHead>
            <TableHead sortable sortDirection={sortField === 'amount' ? sortDirection : null} onSort={() => handleSort('amount')} className="text-right">
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map(invoice => <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.customer}</TableCell>
              <TableCell>
                <Badge variant={invoice.status === 'paid' ? 'default' : invoice.status === 'pending' ? 'secondary' : 'destructive'}>
                  {invoice.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...N.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [favorites, setFavorites] = useState<number[]>([]);
    const toggleFavorite = (userId: number) => {
      setFavorites(prev => prev.includes(userId) ? prev.filter(id => id !== userId) : [...prev, userId]);
    };
    return <Table>
        <TableCaption>User management table with actions</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]"></TableHead>
            <TableHead>User</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Login</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody variant="hoverable">
          {users.map(user => <TableRow key={user.id}>
              <TableCell>
                <button onClick={() => toggleFavorite(user.id)}>
                  {favorites.includes(user.id) ? <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> : <StarOff className="h-4 w-4 text-gray-400" />}
                </button>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-3">
                  <Avatar />
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="secondary">{user.role}</Badge>
              </TableCell>
              <TableCell>
                <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell>{user.lastLogin}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <Button variant="secondary" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...C.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableCaption>Sales report for Q1 2024</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Month</TableHead>
          <TableHead className="text-right">Sales</TableHead>
          <TableHead className="text-right">Profit</TableHead>
          <TableHead className="text-right">Growth</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">January</TableCell>
          <TableCell className="text-right">$12,500</TableCell>
          <TableCell className="text-right">$2,100</TableCell>
          <TableCell className="text-right">+12%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">February</TableCell>
          <TableCell className="text-right">$15,200</TableCell>
          <TableCell className="text-right">$3,200</TableCell>
          <TableCell className="text-right">+21%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">March</TableCell>
          <TableCell className="text-right">$18,900</TableCell>
          <TableCell className="text-right">$4,100</TableCell>
          <TableCell className="text-right">+24%</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell className="font-medium">Total</TableCell>
          <TableCell className="text-right font-medium">$46,600</TableCell>
          <TableCell className="text-right font-medium">$9,400</TableCell>
          <TableCell className="text-right font-medium">+19%</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full">
      <Table>
        <TableCaption>Responsive table that scrolls on smaller screens</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[100px]">Order ID</TableHead>
            <TableHead className="min-w-[150px]">Customer</TableHead>
            <TableHead className="min-w-[120px]">Email</TableHead>
            <TableHead className="min-w-[100px]">Status</TableHead>
            <TableHead className="min-w-[100px]">Date</TableHead>
            <TableHead className="min-w-[100px] text-right">Amount</TableHead>
            <TableHead className="min-w-[120px] text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map(invoice => <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.customer}</TableCell>
              <TableCell>{invoice.email}</TableCell>
              <TableCell>
                <Badge variant={invoice.status === 'paid' ? 'default' : invoice.status === 'pending' ? 'secondary' : 'destructive'}>
                  {invoice.status}
                </Badge>
              </TableCell>
              <TableCell>{invoice.date}</TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <Button variant="secondary" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </div>
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={4} className="h-24 text-center">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="text-gray-400">
                <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">No data available</p>
              <Button variant="secondary" size="sm">
                Add New Item
              </Button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...w.parameters?.docs?.source}}};const Ne=["Default","Variants","Sizes","SortableTable","DataTable","WithFooter","ResponsiveTable","EmptyState"];export{C as DataTable,j as Default,w as EmptyState,f as ResponsiveTable,g as Sizes,N as SortableTable,p as Variants,v as WithFooter,Ne as __namedExportsOrder,ge as default};
