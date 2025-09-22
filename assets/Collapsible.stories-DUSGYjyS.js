import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-CqjzB_ih.js";import{u as F,c as U}from"./index-D60pQwju.js";import{c as $}from"./index-CLvN1Vpq.js";import{u as L}from"./index-By_MgWmR.js";import{u as Q}from"./index-rgTc8_Xw.js";import{P as S}from"./index-3ONt-hBQ.js";import{P as W}from"./index-D4dwrSQX.js";import{u as V}from"./index-D0wKRynX.js";import{B as o}from"./Button-BDC9PhyQ.js";import{C as f}from"./chevron-down-BYbwJ4-O.js";import{C as x}from"./chevron-right-BJ1jFQ52.js";import{S as G}from"./settings-zB2fUs3M.js";import{c as A}from"./createLucideIcon-DLQ91j1X.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BmsruuLr.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Y=A("file-text",J);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],K=A("users",Z);var v="Collapsible",[X]=$(v),[ee,I]=X(v),q=a.forwardRef((s,r)=>{const{__scopeCollapsible:l,open:n,defaultOpen:t,disabled:c,onOpenChange:d,...w}=s,[y,h]=F({prop:n,defaultProp:t??!1,onChange:d,caller:v});return e.jsx(ee,{scope:l,disabled:c,contentId:V(),open:y,onOpenToggle:a.useCallback(()=>h(j=>!j),[h]),children:e.jsx(S.div,{"data-state":B(y),"data-disabled":c?"":void 0,...w,ref:r})})});q.displayName=v;var D="CollapsibleTrigger",E=a.forwardRef((s,r)=>{const{__scopeCollapsible:l,...n}=s,t=I(D,l);return e.jsx(S.button,{type:"button","aria-controls":t.contentId,"aria-expanded":t.open||!1,"data-state":B(t.open),"data-disabled":t.disabled?"":void 0,disabled:t.disabled,...n,ref:r,onClick:U(s.onClick,t.onOpenToggle)})});E.displayName=D;var O="CollapsibleContent",H=a.forwardRef((s,r)=>{const{forceMount:l,...n}=s,t=I(O,s.__scopeCollapsible);return e.jsx(W,{present:l||t.open,children:({present:c})=>e.jsx(se,{...n,ref:r,present:c})})});H.displayName=O;var se=a.forwardRef((s,r)=>{const{__scopeCollapsible:l,present:n,children:t,...c}=s,d=I(O,l),[w,y]=a.useState(n),h=a.useRef(null),j=Q(r,h),k=a.useRef(0),T=k.current,_=a.useRef(0),z=_.current,R=d.open||w,P=a.useRef(R),b=a.useRef(void 0);return a.useEffect(()=>{const i=requestAnimationFrame(()=>P.current=!1);return()=>cancelAnimationFrame(i)},[]),L(()=>{const i=h.current;if(i){b.current=b.current||{transitionDuration:i.style.transitionDuration,animationName:i.style.animationName},i.style.transitionDuration="0s",i.style.animationName="none";const M=i.getBoundingClientRect();k.current=M.height,_.current=M.width,P.current||(i.style.transitionDuration=b.current.transitionDuration,i.style.animationName=b.current.animationName),y(n)}},[d.open,n]),e.jsx(S.div,{"data-state":B(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!R,...c,ref:j,style:{"--radix-collapsible-content-height":T?`${T}px`:void 0,"--radix-collapsible-content-width":z?`${z}px`:void 0,...s.style},children:R&&t})});function B(s){return s?"open":"closed"}var te=q;function p({...s}){return e.jsx(te,{"data-slot":"collapsible",...s})}function m({...s}){return e.jsx(E,{"data-slot":"collapsible-trigger",...s})}function u({...s}){return e.jsx(H,{"data-slot":"collapsible-content",...s})}p.__docgenInfo={description:"",methods:[],displayName:"Collapsible"};m.__docgenInfo={description:"",methods:[],displayName:"CollapsibleTrigger"};u.__docgenInfo={description:"",methods:[],displayName:"CollapsibleContent"};const Ce={title:"Components/Collapsible",component:p,parameters:{layout:"centered"},tags:["autodocs"]},C={render:()=>{const[s,r]=a.useState(!1);return e.jsxs(p,{open:s,onOpenChange:r,className:"w-[350px] space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4 px-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"Collapsible with content"}),e.jsx(m,{asChild:!0,children:e.jsxs(o,{variant:"secondary",size:"sm",className:"w-9 p-0 cursor-pointer",children:[s?e.jsx(f,{className:"h-4 w-4"}):e.jsx(x,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})})]}),e.jsxs(u,{className:"space-y-2",children:[e.jsx("div",{className:"rounded-md border px-4 py-3 font-mono text-sm",children:"Content 1"}),e.jsx("div",{className:"rounded-md border px-4 py-3 font-mono text-sm",children:"Content 2"}),e.jsx("div",{className:"rounded-md border px-4 py-3 font-mono text-sm",children:"Content 3"})]})]})}},g={render:()=>{const[s,r]=a.useState({dashboard:!1,users:!1,content:!1}),l=n=>{r(t=>({...t,[n]:!t[n]}))};return e.jsxs("div",{className:"w-[280px] space-y-1 p-2 border rounded-lg",children:[e.jsx("h3",{className:"px-3 py-2 text-lg font-semibold",children:"Navigation"}),e.jsxs(p,{open:s.dashboard,onOpenChange:()=>l("dashboard"),children:[e.jsx(m,{asChild:!0,children:e.jsxs(o,{variant:"secondary",className:"w-full justify-between p-2 cursor-pointer",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(G,{className:"h-4 w-4"}),"Dashboard"]}),s.dashboard?e.jsx(f,{className:"h-4 w-4"}):e.jsx(x,{className:"h-4 w-4"})]})}),e.jsxs(u,{className:"pl-6 space-y-1",children:[e.jsx(o,{variant:"secondary",size:"sm",className:"w-full justify-start mt-1",children:"Overview"}),e.jsx(o,{variant:"secondary",size:"sm",className:"w-full justify-start",children:"Analytics"}),e.jsx(o,{variant:"secondary",size:"sm",className:"w-full justify-start",children:"Reports"})]})]}),e.jsxs(p,{open:s.users,onOpenChange:()=>l("users"),children:[e.jsx(m,{asChild:!0,children:e.jsxs(o,{variant:"secondary",className:"w-full justify-between p-2 cursor-pointer",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(K,{className:"h-4 w-4"}),"Users"]}),s.users?e.jsx(f,{className:"h-4 w-4"}):e.jsx(x,{className:"h-4 w-4"})]})}),e.jsxs(u,{className:"pl-6 space-y-1",children:[e.jsx(o,{variant:"secondary",size:"sm",className:"w-full justify-start mt-1",children:"All Users"}),e.jsx(o,{variant:"secondary",size:"sm",className:"w-full justify-start",children:"Roles"}),e.jsx(o,{variant:"secondary",size:"sm",className:"w-full justify-start",children:"Permissions"})]})]}),e.jsxs(p,{open:s.content,onOpenChange:()=>l("content"),children:[e.jsx(m,{asChild:!0,children:e.jsxs(o,{variant:"secondary",className:"w-full justify-between p-2 cursor-pointer",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Y,{className:"h-4 w-4"}),"Content"]}),s.content?e.jsx(f,{className:"h-4 w-4"}):e.jsx(x,{className:"h-4 w-4"})]})}),e.jsxs(u,{className:"pl-6 space-y-1",children:[e.jsx(o,{variant:"secondary",size:"sm",className:"w-full justify-start mt-1",children:"Posts"}),e.jsx(o,{variant:"secondary",size:"sm",className:"w-full justify-start",children:"Pages"}),e.jsx(o,{variant:"secondary",size:"sm",className:"w-full justify-start",children:"Media"})]})]})]})}},N={render:()=>{const[s,r]=a.useState({}),l=t=>{r(c=>({...c,[t]:!c[t]}))},n=[{id:"item1",question:"What is React?",answer:"React is a JavaScript library for building user interfaces, particularly web applications. It was developed by Facebook and is now maintained by Meta and the community."},{id:"item2",question:"How do I get started with React?",answer:"You can start with Create React App, Next.js, or Vite. Install Node.js, run the setup command, and start building your first component."},{id:"item3",question:"What are React Hooks?",answer:'Hooks are functions that let you "hook into" React state and lifecycle features from function components. The most common hooks are useState and useEffect.'}];return e.jsxs("div",{className:"w-[500px] space-y-2",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Frequently Asked Questions"}),n.map(t=>e.jsxs(p,{open:s[t.id],onOpenChange:()=>l(t.id),children:[e.jsx(m,{asChild:!0,children:e.jsxs(o,{variant:"secondary",className:"w-full justify-between p-4 h-auto text-left border rounded-lg",children:[e.jsx("span",{className:"font-medium",children:t.question}),s[t.id]?e.jsx(f,{className:"h-4 w-4"}):e.jsx(x,{className:"h-4 w-4"})]})}),e.jsx(u,{className:"px-4 pb-4",children:e.jsx("p",{className:"text-gray-600 leading-relaxed",children:t.answer})})]},t.id))]})}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">
            Collapsible with content
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="secondary" size="sm" className="w-9 p-0 cursor-pointer">
              {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            Content 1
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            Content 2
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            Content 3
          </div>
        </CollapsibleContent>
      </Collapsible>;
  }
}`,...C.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openSections, setOpenSections] = useState<{
      [key: string]: boolean;
    }>({
      dashboard: false,
      users: false,
      content: false
    });
    const toggleSection = (section: string) => {
      setOpenSections(prev => ({
        ...prev,
        [section]: !prev[section]
      }));
    };
    return <div className="w-[280px] space-y-1 p-2 border rounded-lg">
        <h3 className="px-3 py-2 text-lg font-semibold">Navigation</h3>

        {/* Dashboard Section */}
        <Collapsible open={openSections.dashboard} onOpenChange={() => toggleSection('dashboard')}>
          <CollapsibleTrigger asChild>
            <Button variant="secondary" className="w-full justify-between p-2 cursor-pointer">
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Dashboard
              </div>
              {openSections.dashboard ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-6 space-y-1">
            <Button variant="secondary" size="sm" className="w-full justify-start mt-1">
              Overview
            </Button>
            <Button variant="secondary" size="sm" className="w-full justify-start">
              Analytics
            </Button>
            <Button variant="secondary" size="sm" className="w-full justify-start">
              Reports
            </Button>
          </CollapsibleContent>
        </Collapsible>

        {/* Users Section */}
        <Collapsible open={openSections.users} onOpenChange={() => toggleSection('users')}>
          <CollapsibleTrigger asChild>
            <Button variant="secondary" className="w-full justify-between p-2 cursor-pointer">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Users
              </div>
              {openSections.users ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-6 space-y-1">
            <Button variant="secondary" size="sm" className="w-full justify-start mt-1">
              All Users
            </Button>
            <Button variant="secondary" size="sm" className="w-full justify-start">
              Roles
            </Button>
            <Button variant="secondary" size="sm" className="w-full justify-start">
              Permissions
            </Button>
          </CollapsibleContent>
        </Collapsible>

        {/* Content Section */}
        <Collapsible open={openSections.content} onOpenChange={() => toggleSection('content')}>
          <CollapsibleTrigger asChild>
            <Button variant="secondary" className="w-full justify-between p-2 cursor-pointer">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Content
              </div>
              {openSections.content ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-6 space-y-1">
            <Button variant="secondary" size="sm" className="w-full justify-start mt-1">
              Posts
            </Button>
            <Button variant="secondary" size="sm" className="w-full justify-start">
              Pages
            </Button>
            <Button variant="secondary" size="sm" className="w-full justify-start">
              Media
            </Button>
          </CollapsibleContent>
        </Collapsible>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openItems, setOpenItems] = useState<{
      [key: string]: boolean;
    }>({});
    const toggleItem = (id: string) => {
      setOpenItems(prev => ({
        ...prev,
        [id]: !prev[id]
      }));
    };
    const faqItems = [{
      id: 'item1',
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces, particularly web applications. It was developed by Facebook and is now maintained by Meta and the community.'
    }, {
      id: 'item2',
      question: 'How do I get started with React?',
      answer: 'You can start with Create React App, Next.js, or Vite. Install Node.js, run the setup command, and start building your first component.'
    }, {
      id: 'item3',
      question: 'What are React Hooks?',
      answer: 'Hooks are functions that let you "hook into" React state and lifecycle features from function components. The most common hooks are useState and useEffect.'
    }];
    return <div className="w-[500px] space-y-2">
        <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
        {faqItems.map(item => <Collapsible key={item.id} open={openItems[item.id]} onOpenChange={() => toggleItem(item.id)}>
            <CollapsibleTrigger asChild>
              <Button variant="secondary" className="w-full justify-between p-4 h-auto text-left border rounded-lg">
                <span className="font-medium">{item.question}</span>
                {openItems[item.id] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 pb-4">
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </CollapsibleContent>
          </Collapsible>)}
      </div>;
  }
}`,...N.parameters?.docs?.source}}};const ge=["Default","NavigationMenu","FAQ"];export{C as Default,N as FAQ,g as NavigationMenu,ge as __namedExportsOrder,Ce as default};
